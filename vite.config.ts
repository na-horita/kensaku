/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config(); // .envファイルを読み込む

// https://vitejs.dev/config/
export default defineConfig({
  appType: "mpa",
  plugins: [react()],
  test: {
    globals: true,
  },
});
