import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync, mkdirSync } from "fs";
import { Buffer } from "buffer"; // Polyfill for gray-matter (browser-safe)

// ✅ Create global Buffer so gray-matter (which expects Node Buffer) works in browser
globalThis.Buffer = Buffer;

// Custom plugin to copy static files after build
const copyStaticFiles = () => ({
  name: "copy-static-files",
  closeBundle() {
    try {
      mkdirSync("dist", { recursive: true });
      copyFileSync("public/robots.txt", "dist/robots.txt");
      copyFileSync("public/sitemap.xml", "dist/sitemap.xml");
      console.log("✅ Copied robots.txt and sitemap.xml to dist/");
    } catch (err) {
      console.error("❌ Static file copy failed:", err);
    }
  },
});

// ✅ Vite configuration
export default defineConfig({
  plugins: [react(), copyStaticFiles()],
});
