// Local development only. Vercel uses src/index.ts directly.
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import app from './index.js';

const port = Number(process.env['PORT']) || 8787;
const node_env = process.env['NODE_ENV'];
// On Vercel the CDN serves public/; locally we do it here.
const assets = new Hono().use('*', serveStatic({ root: './public' }));

serve({
  fetch: async (request, env) => {
    const response = await assets.fetch(request, env);
    return response.status === 404 ? app.fetch(request, env) : response;
  },
  port,
});

if (node_env) {
  console.log(`Server running on http://localhost:${port}`);
}
