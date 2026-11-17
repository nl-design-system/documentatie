import type { MiddlewareHandler } from 'hono';
import { cors } from 'hono/cors';
import { secureHeaders } from 'hono/secure-headers';
import { config } from '../config.js';

const shared = {
  referrerPolicy: 'no-referrer',
  strictTransportSecurity: 'max-age=31536000; includeSubDomains',
} as const;

// No JavaScript and only our own stylesheet, so the CSP can be strict.
export const pageSecurityHeaders = secureHeaders({
  ...shared,
  contentSecurityPolicy: {
    baseUri: ["'none'"],
    defaultSrc: ["'none'"],
    formAction: ["'self'"],
    frameAncestors: ["'none'"],
    imgSrc: ["'self'"],
    styleSrc: ["'self'"],
  },
  permissionsPolicy: { camera: [], geolocation: [], microphone: [] },
});

export const apiSecurityHeaders = secureHeaders({
  ...shared,
  contentSecurityPolicy: {
    defaultSrc: ["'none'"],
    frameAncestors: ["'none'"],
  },
});

export const corsMiddleware = cors({
  allowHeaders: ['Content-Type'],
  allowMethods: ['POST', 'OPTIONS'],
  maxAge: 600,
  origin: (origin) => (config.allowedOrigins.includes(origin) ? origin : null),
});

// Non-browser clients can fake Origin; the Vercel Firewall rate limit covers that.
export const verifyWebsite: MiddlewareHandler = async (context, next) => {
  const origin = context.req.header('Origin');

  if (!origin || !config.allowedOrigins.includes(origin)) {
    return context.json({ message: 'Origin niet toegestaan.', success: false }, 403);
  }

  return next();
};
