import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  /**
   * Hosting compatibility:
   * - Cloudways: served from domain root -> '/'
   * - GitHub Pages: served from a repo subpath -> '/<repo>/'
   *
   * Our GitHub Actions workflow injects VITE_BASE_PATH at build time.
   * If not provided, we fall back to '/'.
   */
  base: process.env.VITE_BASE_PATH || "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
