import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "root",
      remotes: {
        siteone: "http://localhost:5001/assets/remoteEntry.js",
        sitetwo: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5000, // Ensure the server runs on the specified port
  },
  preview: {
    port: 5000,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
