import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  // Update this with your Vercel deployment URL after deployment
  // site: 'https://your-username.vercel.app/'
})
