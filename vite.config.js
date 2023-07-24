import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default {
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "@/": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
};
