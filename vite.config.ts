import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import { defineConfig } from "vitest/config"

export default defineConfig({
  root: "src",
  plugins: [react(), svgr()],
  build: {
    outDir: "../build",
    emptyOutDir: true
  }
})
