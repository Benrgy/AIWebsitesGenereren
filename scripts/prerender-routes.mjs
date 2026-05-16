#!/usr/bin/env node
/**
 * Post-build: voor elke URL in public/sitemap.xml schrijven we
 * dist/<route>/index.html (kopie van dist/index.html).
 *
 * Reden: GitHub Pages kent geen SPA-fallback met HTTP 200. Zonder een echt
 * bestand op /blog/index.html geeft Pages 404 terug en indexeert Google de
 * pagina niet. Door per route een index.html te leggen krijgt elke URL
 * een 200-status én blijft client-side routing werken.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync, rmSync } from "node:fs";
import { resolve, dirname, join } from "node:path";

const DIST = resolve("dist");
const SITEMAP = resolve("public/sitemap.xml");
const INDEX = join(DIST, "index.html");

if (!existsSync(INDEX)) {
  console.warn("[prerender] dist/index.html ontbreekt — build eerst.");
  process.exit(0);
}
if (!existsSync(SITEMAP)) {
  console.warn("[prerender] public/sitemap.xml ontbreekt — niets te doen.");
  process.exit(0);
}

const html = readFileSync(INDEX, "utf8");
const xml = readFileSync(SITEMAP, "utf8");
const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

// Opschoonactie: verwijder restbestanden die op een route-pad staan en
// botsen met de map die we gaan aanmaken (bv. dist/llms.txt als bestand
// terwijl een sitemap-route een map met die naam zou willen).
function cleanupConflicts(routePaths) {
  for (const p of routePaths) {
    let cur = DIST;
    for (const seg of p.split("/").filter(Boolean)) {
      cur = join(cur, seg);
      try {
        const st = statSync(cur);
        if (st.isFile()) {
          rmSync(cur, { force: true });
          console.warn(`[prerender] conflict opgeruimd: ${cur}`);
          break;
        }
      } catch {
        break;
      }
    }
  }
}

let written = 0;
let skipped = 0;
for (const loc of locs) {
  let pathname;
  try {
    pathname = new URL(loc).pathname;
  } catch {
    continue;
  }
  // Skip root en bestanden (.txt, .xml, etc.) — ook met trailing slash
  const noSlash = pathname.replace(/\/+$/, "");
  if (pathname === "/" || /\.[a-z0-9]+$/i.test(noSlash)) continue;

  const cleaned = pathname.replace(/^\/+|\/+$/g, "");
  const target = join(DIST, cleaned, "index.html");
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, html);
    written++;
  } catch (err) {
    if (err && (err.code === "EEXIST" || err.code === "ENOTDIR")) {
      console.warn(`[prerender] overgeslagen (${err.code}): ${cleaned}`);
      skipped++;
      continue;
    }
    console.warn(`[prerender] fout bij ${cleaned}: ${err?.message || err}`);
    skipped++;
  }
}

console.log(`[prerender] ${written} routes gegenereerd, ${skipped} overgeslagen.`);