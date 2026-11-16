import type { Context } from 'hono';
import { MemoryStore, rateLimiter } from 'hono-rate-limiter';
import { getConnInfo } from '@hono/node-server/conninfo';
import { config } from '../config.js';

// Stops the form being used to spam people via Slack invites. Form and API share
// one store. On Vercel this is best effort; the Firewall rule is the real limit.
const store = new MemoryStore();

// eslint-disable-next-line no-unused-vars
export const invitationRateLimit = (onLimit: (context: Context) => Response | Promise<Response>) =>
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: 'draft-6',
    keyGenerator: clientIp,
    store,
    handler: (context) => onLimit(context),
  });

const clientIp = (context: Context): string => {
  if (config.onVercel) {
    // Vercel overwrites this header, so visitors can't spoof it.
    return context.req.header('X-Forwarded-For')?.split(',')[0]?.trim() || 'unknown';
  }
  return getConnInfo(context).remote.address ?? 'unknown';
};
