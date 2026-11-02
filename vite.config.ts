import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  root: ".",
  publicDir: "public",
  resolve: {
    alias: {
      "@data": resolve(__dirname, "data"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: false,
  },
});
