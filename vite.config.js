import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000, // You can change this if 3000 is in use or you prefer another port
  },
  resolve: {
    alias: {
      "@": "/src", // Example alias for the src directory
    },
  },
});
