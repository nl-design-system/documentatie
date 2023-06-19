const express = require('express');
const Parser = require('rss-parser');

const app = express();
const parser = new Parser();

app.get('/blog', async (_, res) => {
  const feed = await parser.parseURL('https://www.gebruikercentraal.nl/category/nl-design-system/feed/');

  feed.items.forEach((item) => {
    console.log(item.title + ':' + item.link); // item will have a `bar` property type as a number
  });

  res.json(feed.items);
});

const PORT = process.env.PORT || 4050;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
