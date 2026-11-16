import { sequence } from 'astro/middleware';
import { onRequest as csp } from './csp.ts';
import { onRequest as toc } from './table-of-contents.ts';

export const onRequest = sequence(csp, toc);
