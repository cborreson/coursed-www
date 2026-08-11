import { defineConfig } from 'astro/config';

// Marketing site for Coursed — static output, deployed to Cloudflare Pages.
// getcoursed.com + www. The app (boards, ops, signup, billing, APIs) stays on the
// wye-stars Worker at app.getcoursed.com + <venue>.getcoursed.com.
export default defineConfig({
  site: 'https://getcoursed.com',
  build: { format: 'file' }, // emit /toast.html etc.; Cloudflare Pages serves them at /toast
});
