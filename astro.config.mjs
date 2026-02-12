import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://redgate-it.com',
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});