import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';

import './config.js'; // Validate env vars first.
import home from './routes/home.js';
import users from './routes/users.js';

// Vercel runs this default export; src/local.ts runs it locally.
const app = new Hono();

app.route('/', home);

app.get('/health', (c) => c.json({ status: 'ok' }));

app.route('/api/v1/users', users);

app.notFound((c) => c.json({ success: false, message: 'Niet gevonden.' }, 404));

app.onError((error, c) => {
  // Keep the status of errors thrown by middleware, e.g. CSRF 403.
  if (error instanceof HTTPException) {
    return error.getResponse();
  }

  console.error(`Unhandled error: ${error.name}`);
  return c.json({ success: false, message: 'Er is iets misgegaan. Probeer het later opnieuw.' }, 500);
});

export default app;
