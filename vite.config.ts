import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      // Static, crawler-friendly pages for AutoShorts (Google OAuth / YouTube API audit).
      input: {
        main: path.resolve(__dirname, "index.html"),
        autoshorts: path.resolve(__dirname, "autoshorts/index.html"),
        autoshortsPrivacy: path.resolve(__dirname, "autoshorts/privacy/index.html"),
        autoshortsTerms: path.resolve(__dirname, "autoshorts/terms/index.html"),
      },
    },
  },
}));
