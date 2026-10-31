# Deploying Power Express

## Current: GitHub Pages (`npm run deploy`)

`npm run deploy` builds the site and publishes `build/` to the `gh-pages` branch with the `powerexpress1980.com` CNAME. Deep links such as `/th/project/23` are served through `public/404.html`, which means they return HTTP **404** before the page loads. Google may not index them.

## Recommended: Cloudflare Pages (or Netlify)

Serves deep links with HTTP 200 through `public/_redirects` (`/*  /index.html  200`).

### Settings

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build:pages` |
| Build output directory | `build` |
| Node version | 18 or 20 (set `NODE_VERSION`) |

`build:pages` is the normal build with `build/404.html` removed. A `404.html` on Cloudflare Pages turns off its single-page-app handling, so it must not be shipped there. (`npm run deploy` for GitHub Pages is unchanged and still needs `404.html`.)

### Move over without downtime

1. Create the Cloudflare Pages project from this repo with the settings above.
2. Open the `*.pages.dev` preview URL and compare it with the live site: home, a project, an activity, the language switch, `/th/project/23` loaded directly, and `/#/th/project/23`.
3. Check the response status of a deep link is 200: `curl -I https://<project>.pages.dev/th/project/23`.
4. Add `powerexpress1980.com` as a custom domain on the Pages project and change the DNS records Cloudflare asks for (replacing the GitHub Pages `185.199.x.x` A records).
5. When the new site is serving, stop deploying to `gh-pages` and remove the custom domain from the repo's Pages settings so the two do not compete.

### Roll back

Point the DNS records back to GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and keep the `gh-pages` branch until the new host has been stable for a few days.

## After any move

- Submit `https://powerexpress1980.com/sitemap.xml` in Google Search Console.
- The sitemap is regenerated on every build (`prebuild`), so new projects and activities appear after the next deploy.
