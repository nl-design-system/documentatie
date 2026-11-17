// Local development only. Vercel uses src/index.ts directly.
import { serve } from '@hono/node-server';
import app from './index.js';

const port = Number(process.env['PORT']) || 8787;
const node_env = process.env['NODE_ENV'];
serve({ fetch: app.fetch, port });

if (node_env) {
  console.log(`Server running on http://localhost:${port}`);
}
