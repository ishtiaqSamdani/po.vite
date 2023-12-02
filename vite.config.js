import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // Ensure correct base path for GitHub Pages
  plugins: [react()],
  build: {
    outDir: "build", // Specify the output directory
    assetsDir: ".", // Specify the assets directory
  },
});
