import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
// https://astro.build/config
export default defineConfig({
  site: 'https://app.rccn.dev',
  base: '/rcs2024f',
  trailingSlash: "ignore",
  integrations: [tailwind()]
});