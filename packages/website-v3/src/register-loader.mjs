import { register } from 'node:module';
// import { register as registerTsx } from 'tsx/esm/api';

// Support MDX in `pnpm run build:custom`
// register('@mdx-js/node-loader', import.meta.url);

register('./mdx-loader.mjs', import.meta.url);
// register('./css-loader.mjs', import.meta.url);

// Register tsx enhancement
// const unregister = registerTsx({
//   tsconfig: './tsconfig.json',
//   onImport: (file) => {
//     console.log(file);
//   },
// });
