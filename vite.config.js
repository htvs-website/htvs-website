import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync, mkdirSync } from "fs";

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

export default defineConfig({
  plugins: [react(), copyStaticFiles()],
});