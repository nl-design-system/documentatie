import { cors } from 'hono/cors';
import { secureHeaders } from 'hono/secure-headers';
import type { MiddlewareHandler } from 'hono';
import { config } from '../config.js';

const shared = {
  referrerPolicy: 'no-referrer',
  strictTransportSecurity: 'max-age=31536000; includeSubDomains',
} as const;

// No JavaScript and only our own stylesheet, so the CSP can be strict.
export const pageSecurityHeaders = secureHeaders({
  ...shared,
  contentSecurityPolicy: {
    defaultSrc: ["'none'"],
    styleSrc: ["'self'"],
    imgSrc: ["'self'", 'https://codefor.nl', 'https://www.codefor.nl'],
    formAction: ["'self'"],
    frameAncestors: ["'none'"],
    baseUri: ["'none'"],
  },
  permissionsPolicy: { camera: [], microphone: [], geolocation: [] },
});

export const apiSecurityHeaders = secureHeaders({
  ...shared,
  contentSecurityPolicy: {
    defaultSrc: ["'none'"],
    frameAncestors: ["'none'"],
  },
});

export const corsMiddleware = cors({
  origin: (origin) => (config.allowedOrigins.includes(origin) ? origin : null),
  allowMethods: ['POST', 'OPTIONS'],
  allowHeaders: ['Content-Type'],
  maxAge: 600,
});

// Non-browser clients can fake Origin; the rate limit covers that.
export const verifyWebsite: MiddlewareHandler = async (context, next) => {
  const origin = context.req.header('Origin');

  if (!origin || !config.allowedOrigins.includes(origin)) {
    return context.json({ success: false, message: 'Origin niet toegestaan.' }, 403);
  }

  return next();
};
