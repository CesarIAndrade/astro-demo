import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://CesarIAndrade/github.io",
  base: "/astro-demo",
  integrations: [react()]
});