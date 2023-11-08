import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://danieljara23.github.io',
  base: '/8bit-adventure'
  integrations: [react()]
});