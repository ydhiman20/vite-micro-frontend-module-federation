import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "siteone",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App", // Expose the App component
      },
      shared: ["react", "react-dom"], // Share dependencies
    }),
  ],
  server: {
    port: 5001, // Ensure the server runs on the specified port
  },
  preview: {
    port: 5001,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
