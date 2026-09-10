import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { optimizeVideos } from "vite-plugin-optimize-videos";

export default defineConfig(({ command, mode }) => {
  return {
    base: command === "build" ? "/rsschool-cv/" : "/",
    root: ".",
    build: {
      outDir: "docs",
    },
    plugins: [
      ViteImageOptimizer({
        disable: mode !== "production",
      }),
      optimizeVideos({
        quality: 25,
      }),
    ],
  };
});
