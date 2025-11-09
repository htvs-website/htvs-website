import { useParams, Link } from "react-router-dom";
import matter from "gray-matter";
import { marked } from "marked";

// Import all Markdown files as raw text (Vite 7+ syntax)
const files = import.meta.glob("../posts/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

export default function BlogPost() {
  const { slug } = useParams();

  // Find the markdown file that matches this slug
  const match = Object.entries(files).find(([path, fileContent]) => {
    const text =
      typeof fileContent === "string"
        ? fileContent
        : fileContent?.default || "";
    const { data } = matter(text);
    return data.slug === slug;
  });

  // Handle case where no matching post is found
  if (!match) {
    return (
      <main className="p-6 font-[Cambria]">
        <div className="mb-4 space-x-4">
          <Link
            to="/"
            className="inline-block text-blue-700 hover:underline text-sm font-[Cambria]"
          >
            ← Return to Main Site
          </Link>
          <Link
            to="/blog"
            className="inline-block text-blue-700 hover:underline text-sm font-[Cambria]"
          >
            ← Back to Field Notes
          </Link>
        </div>
        <h1 className="text-2xl font-semibold text-red-600">
          Post not found.
        </h1>
      </main>
    );
  }

  // Parse the Markdown file safely
  const [path, fileContent] = match;
  const text =
    typeof fileContent === "string"
      ? fileContent
      : fileContent?.default || "";
  const { data, content } = matter(text);

  // Convert Markdown to HTML
  const html = marked.parse(content || "");

  return (
    <main className="p-6 font-[Cambria]">
      {/* Smooth navigation links */}
      <div className="mb-4 space-x-4">
        <Link
          to="/"
          className="inline-block text-blue-700 hover:underline text-sm font-[Cambria]"
        >
          ← Return to Main Site
        </Link>
        <Link
          to="/blog"
          className="inline-block text-blue-700 hover:underline text-sm font-[Cambria]"
        >
          ← Back to Field Notes
        </Link>
      </div>

      <h1 className="text-3xl font-semibold mt-4">{data.title}</h1>

      <article
        className="mt-6 text-gray-700 leading-relaxed prose max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Closing reflection */}
      <div className="mt-10 border-t border-gray-200 pt-6">
        <p className="text-gray-700 text-base leading-relaxed font-[Cambria] italic">
          Thank you for taking the time to read. These notes are written in the same
          spirit that guides our work — to bring clarity, steadiness, and purpose to
          the systems we build and the lives they touch.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed font-[Cambria] mt-4">
          — Stephen Joel Bové
        </p>
      </div>
    </main>
  );
}