export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-300 py-6 text-center mt-20">
      <p className="text-sm">
        © {new Date().getFullYear()} High Trust Vigilant Systems — All rights reserved.
      </p>
      <p className="text-xs text-gray-600 mt-1">
        Designed and built with integrity and precision.
      </p>
    </footer>
  );
}