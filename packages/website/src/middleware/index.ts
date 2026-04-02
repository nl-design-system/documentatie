import { sequence } from 'astro/middleware';
import { onRequest as csp } from './csp';
import { onRequest as toc } from './table-of-contents';

export const onRequest = sequence(csp, toc);
