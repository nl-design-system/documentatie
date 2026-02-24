import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const sitemapDirAstro = path.resolve('./packages/website/dist');
const sitemapDirDocusaurus = path.resolve('./build');

const astroUrls = new Set();
const docusaurusUrls = new Set();

const filter = process.argv[2];

const addToSet = (set) => (loc) => {
  if (filter) {
    if (loc.includes(filter)) {
      set.add(loc);
    }
    return;
  }
  set.add(loc);
};

fs.readdirSync(sitemapDirAstro)
  .filter((file) => file.includes('sitemap'))
  .map((file) => fs.readFileSync(`${sitemapDirAstro}/${file}`, { encoding: 'utf-8' }))
  .forEach((fileContents) => {
    const $ = cheerio.load(fileContents, { xml: true });
    const data = $.extract({ loc: ['url loc'] });
    data.loc.forEach(addToSet(astroUrls));
  });

fs.readdirSync(sitemapDirDocusaurus)
  .filter((file) => file.includes('sitemap'))
  .map((file) => fs.readFileSync(`${sitemapDirDocusaurus}/${file}`, { encoding: 'utf-8' }))
  .forEach((fileContents) => {
    const $ = cheerio.load(fileContents, { xml: true });
    const data = $.extract({ loc: ['url loc'] });
    data.loc.forEach(addToSet(docusaurusUrls));
  });

const missingUrls = docusaurusUrls.difference(astroUrls);
const extraUrls = astroUrls.difference(docusaurusUrls);

console.log('Missing URLS:');
missingUrls.values().forEach((path) => console.log(`- ${path}`));

if (extraUrls.size) {
  console.log('');
  console.log('Extra URLS:');
  extraUrls.values().forEach((path) => console.log(`+ ${path}`));
}

console.log('');
console.log('Docusaurus urls:   ', docusaurusUrls.size);
console.log('Astro urls:        ', astroUrls.size);
console.log('Missing Astro urls:', missingUrls.size);
console.log('Extra Astro urls:  ', extraUrls.size);

console.log('');
console.log('Progress:', Math.min(Math.round((astroUrls.size / docusaurusUrls.size) * 10000) / 100, 100), '%');
