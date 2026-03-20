import { sequence } from 'astro/middleware';
import { onRequest as csp } from './csp';

export const onRequest = sequence(csp);
