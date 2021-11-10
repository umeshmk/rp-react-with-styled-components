import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // firebase
  // base: "/rp-react-with-styled-components/", // github pages
  server: {
    host: "0.0.0.0",
  },
});
