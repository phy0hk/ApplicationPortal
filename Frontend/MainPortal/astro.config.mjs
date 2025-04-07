// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import deno from "@astrojs/deno";


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter:deno(),
    vite: {
        plugins: [tailwindcss()],
      },
    // server: {
    //   // @ts-ignore
    //   allowedHosts:"joy-ver-oliver-hopkins.trycloudflare.com"
    // }
});
