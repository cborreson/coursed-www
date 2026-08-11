# Coursed — marketing site (getcoursed.com)

Static marketing site (Astro) for Coursed, deployed to Cloudflare as the `coursed-www` project.
Isolated from the app Worker (`wye-stars`), which runs the boards, ops, billing, and APIs.
<!-- Cloudflare Workers Builds connected: pushes to main auto-deploy. --> Build trigger.

## Deploy
Connected to this GitHub repo via Cloudflare Workers Builds:
- **Build command:** `npm run build`
- **Output / assets:** `./dist` (declared in `wrangler.jsonc`)
- A push to `main` auto-builds and deploys.

## Structure
- `public/` — ported marketing pages (index, toast, pricing, terms, privacy), images, robots, sitemap, favicon.
- `src/pages/404.astro` — branded 404.
- Blog / customer-success / FAQ (future) go under `src/pages/` as `.astro` / `.mdx`.

## Forms
The pilot/demo forms POST to the app Worker's `/api/lead` and read `/api/founding`
(cross-origin, CORS-enabled on the Worker). `API_BASE` in `public/index.html` points at
the app origin — `https://getcoursed.com` today; change to `https://app.getcoursed.com` after the apex cutover.
