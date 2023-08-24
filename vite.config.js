import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // paths to assets are not correct for GitHub Pages deployment. This is a common issue when deploying to GitHub Pages, as project is hosted under a subpath, and all the asset paths need to be relative to that subpath
  base: "/dating-questions-game/",
});
