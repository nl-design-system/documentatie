import { register } from 'node:module';

// Support MDX in `pnpm run build:custom`
// register('@mdx-js/node-loader', import.meta.url);
register('./mdx-loader.mjs', import.meta.url);
