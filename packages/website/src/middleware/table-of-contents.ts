import * as cheerio from 'cheerio';

interface Item {
  label: string;
  id?: string;
}

function buildTocItem(item: Item) {
  return item.id ? `<li><a href="#${item.id}">${item.label}</a></li>` : `<li>${item.label}</li>`;
}

function buildToc(items: Item[]) {
  return items.map(buildTocItem).join('');
}

export async function onRequest(context, next) {
  const response = await next();
  const html = await response.text();
  const $ = cheerio.load(html);

  const tableOfContentsElement = $('ma-table-of-contents');

  if (tableOfContentsElement.length) {
    const h2List = [];

    $('main h2').each((index, element) => {
      const label = $(element).text();
      const id = $(element).attr('id');
      if (label.toLowerCase() !== 'inhoudsopgave') {
        h2List.push({ label, id });
      }
    });

    $(tableOfContentsElement).find('ul').append(buildToc(h2List));
  }

  return new Response($.html(), {
    status: 200,
    headers: response.headers,
  });
}
