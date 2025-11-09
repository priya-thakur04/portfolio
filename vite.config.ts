import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// REPLACE <your-repo> with your repository name
const REPO = "portfolio"; // e.g. "my-react-app"

export default defineConfig(({ mode }) => ({
  // 👇 this is the crucial bit
  base: mode === "production" ? `/${REPO}/` : "/",

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
