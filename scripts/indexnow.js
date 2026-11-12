// Tells Bing (and other IndexNow engines) which pages changed, right after a production deploy.
// Usage: node scripts/indexnow.js            (all URLs in public/sitemap.xml)
//        node scripts/indexnow.js URL [URL]  (only these)
// The key file public/aa1ea6ba9eea0e885a189ce29830bfe0.txt must be live at https://powerexpress1980.com/aa1ea6ba9eea0e885a189ce29830bfe0.txt first.
const fs = require('fs');
const path = require('path');

const host = 'powerexpress1980.com';
const key = 'aa1ea6ba9eea0e885a189ce29830bfe0';
const urls = process.argv.length > 2
  ? process.argv.slice(2)
  : [...fs.readFileSync(path.join(__dirname, '../public/sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

(async () => {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: urls }),
  });
  console.log(`IndexNow: ${urls.length} URLs, HTTP ${res.status}`);
  if (res.status >= 400) process.exit(1);
})();
