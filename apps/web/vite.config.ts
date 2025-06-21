import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import runtimeEnv from "vite-plugin-runtime-env";
import { keycloakify } from "keycloakify/vite-plugin";
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),keycloakify({
    accountThemeImplementation: "none"
}), runtimeEnv()],
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
},
  server: {
    fs: {
      allow: [
        "..",
        "node_modules/.pnpm",
        "../../node_modules/.pnpm",
        // Explicitly allow KaTeX fonts
        "../../node_modules/.pnpm/katex@0.16.21/node_modules/katex/dist/fonts",
      ],
    },
  },
});
