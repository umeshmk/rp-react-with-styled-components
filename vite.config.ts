import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/rp-react-with-styled-components/",
  server: {
    host: "0.0.0.0",
  },
});
