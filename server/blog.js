const express = require('express');
const Parser = require('rss-parser');

const app = express();
const parser = new Parser();

app.get('/blog', async (_, res) => {
  const feed = await parser.parseURL('https://www.gebruikercentraal.nl/category/nl-design-system/feed/');
  res.json(feed.items);
});

const PORT = process.env.PORT || 4050;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
