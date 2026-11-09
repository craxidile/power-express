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

## The Thailand map (home "Our results" and About "Growth")

The map is drawn by the site, not a picture. All 77 provinces are in `src/data/thailand-provinces.json`; a province is filled in when at least one row in the Supabase `project` table has it in `location_th` or `location_en`. The province is read from the text the team already types ("จ.ระยอง", "Ranong 85000", "ชลบุรี, ประเทศไทย", "Chiang Mai, Thailand" all work), so adding a project in a new province lights it up on the next page load with no redeploy. The caption count ("22 projects in 8 provinces") and the screen-reader text follow the same list.

- Detection rules and tests: `src/utils/province-utils.ts`, `src/utils/province-utils.test.ts`. Names and alternative spellings: `src/data/province-names.json`. If a location is not recognised the project is simply not counted on the map; add the spelling to `aliases` in that file.
- Live list: `src/apis/province/index.ts` reads `location_th,location_en` from the `project` table (publishable key, read only). If that request fails, the 8 provinces in `FALLBACK_PROVINCE_IDS` are shown. Update that list occasionally so the fallback stays close to reality.
- Uploading a picture to Site Images (`front.figure-impact`, `about.figure-map`) still replaces the drawn map on that page. While the slot holds the original `media/front/map.png` or `media/about/map.png` file, the drawn map is shown.
- Regenerate the outlines (rarely needed): download Natural Earth `ne_10m_admin_1_states_provinces.geojson`, run `npm i --no-save topojson-server topojson-simplify topojson-client`, then `node scripts/build-thailand-map.mjs <geojson> src/data/thailand-provinces.json`.
- Boundary data: Natural Earth (public domain), simplified to about 43 KB.

## After any move

- Submit `https://powerexpress1980.com/sitemap.xml` in Google Search Console.
- The sitemap is regenerated on every build (`prebuild`), so new projects and activities appear after the next deploy.
