import { createLoader } from '@mdx-js/node-loader';
import { options } from './mdx-options.mjs';
const { initialize, load } = createLoader(options);

export { initialize, load };
