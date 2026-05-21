import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://womanintech-spec.github.io",
  base: "/techherway-landing",
  integrations: [tailwind()],
});
