import { Hono } from 'hono';
import { bodyLimit } from 'hono/body-limit';
import { csrf } from 'hono/csrf';
import { zValidator } from '@hono/zod-validator';

import { config } from '../config.js';
import { invitationRateLimit } from '../middleware/rate-limit.js';
import { pageSecurityHeaders } from '../middleware/security.js';
import { requestInvitation } from '../services/invitation.js';
import { invitationSchema, toFieldErrors } from '../validators/invitation.js';
import { homePage } from '../views/home.js';
import { styles } from '../views/styles.js';

const home = new Hono();

// Not '*': mounted at '/', that would also match /api/*.
home.use('/', pageSecurityHeaders);
home.use('/styles.css', pageSecurityHeaders);

home.get('/', (context) => {
  if (context.req.query('verstuurd') === '1') {
    return context.html(homePage({ kind: 'sent' }));
  }
  return context.html(homePage());
});

home.get('/styles.css', (context) => {
  context.header('Content-Type', 'text/css; charset=utf-8');
  context.header('Cache-Control', 'public, max-age=3600');
  return context.body(styles);
});

// Refill the form after an error, but never the honeypot.
const formValues = (body: Record<string, unknown>) => {
  const text = (value: unknown) => (typeof value === 'string' ? value.slice(0, 254) : '');
  return { name: text(body.name), email: text(body.email), bot: text(body.bot) };
};

home.post(
  '/',
  csrf({ origin: config.formOrigins }),
  bodyLimit({
    maxSize: 10 * 1024,
    onError: (context) => context.text('Het formulier is te groot.', 413),
  }),
  invitationRateLimit((context) =>
    context.html(
      homePage({
        kind: 'problem',
        message: 'Je hebt het formulier te vaak verstuurd. Probeer het over 15 minuten opnieuw.',
      }),
      429,
    ),
  ),
  zValidator('form', invitationSchema, async (result, context) => {
    if (!result.success) {
      const body = await context.req.parseBody();
      return context.html(
        homePage({
          kind: 'form',
          values: formValues(body),
          errors: toFieldErrors(result.error),
        }),
        400,
      );
    }
    return undefined;
  }),
  async (context) => {
    const invitation = context.req.valid('form');
    const outcome = await requestInvitation(invitation);

    if (outcome === 'sent') {
      // Redirect so a page refresh doesn't resubmit the form.
      return context.redirect('/?verstuurd=1', 303);
    }

    return context.html(
      homePage({
        kind: 'problem',
        values: { name: invitation.name, email: invitation.email, bot: invitation.bot },
        message:
          outcome === 'retry-later'
            ? 'Het is op dit moment erg druk. Probeer het over een paar minuten opnieuw.'
            : 'We konden je aanvraag niet verwerken. Probeer het later opnieuw.',
      }),
      outcome === 'retry-later' ? 503 : 502,
    );
  },
);

export default home;
