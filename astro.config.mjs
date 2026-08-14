import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://avoqx-plus.github.io',
  output: 'static',
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  }
});
