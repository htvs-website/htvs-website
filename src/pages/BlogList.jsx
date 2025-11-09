import { Link } from "react-router-dom";
import matter from "gray-matter";

// Dynamically import all Markdown files from src/posts
// Using the modern Vite 7 syntax and a compatibility guard
const files = import.meta.glob("../posts/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

// Parse each markdown file's front matter
const posts = Object.values(files).map((fileContent) => {
  const text =
    typeof fileContent === "string"
      ? fileContent
      : fileContent?.default || "";
  const { data } = matter(text);
  return data;
});

export default function BlogList() {
  return (
    <main className="p-6 font-[Cambria]">
      {/* Smooth React Router link back to main site */}
      <div className="mb-4">
        <Link
          to="/"
          className="inline-block text-blue-700 hover:underline text-sm font-[Cambria]"
        >
          ← Return to Main Site
        </Link>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 text-base leading-relaxed font-[Cambria]">
          Welcome — I keep these notes as a kind of open correspondence.
          They’re drawn from the field, the workshop, and the desk alike —
          thoughts on design, systems, and the lawfulness of order.
          If you find something here that answers a question you hadn’t
          yet asked, then it was written for you.
        </p>
      </div>

      <h1 className="text-3xl font-semibold mb-6">Insights & Integration</h1>

      <div className="space-y-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="block p-4 rounded-2xl shadow hover:shadow-lg transition bg-white"
          >
            <h2 className="text-xl font-bold text-black">{p.title}</h2>
            <p className="text-gray-600 mt-2">{p.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}