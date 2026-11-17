import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { bodyLimit } from 'hono/body-limit';
import { csrf } from 'hono/csrf';
import { config } from '../config.js';
import { pageSecurityHeaders } from '../middleware/security.js';
import { requestInvitation } from '../services/invitation.js';
import { invitationSchema, toFieldErrors } from '../validators/invitation.js';
import { homePage } from '../views/home.js';

const home = new Hono();

// Not '*': mounted at '/', that would also match /api/*.
home.use('/', pageSecurityHeaders);

home.get('/', (context) => {
  if (context.req.query('verstuurd') === '1') {
    return context.html(homePage({ kind: 'sent' }));
  }
  return context.html(homePage());
});

// Refill the form after an error, but never the honeypot.
const formValues = (body: Record<string, unknown>) => {
  const text = (value: unknown) => (typeof value === 'string' ? value.slice(0, 254) : '');
  return { name: text(body['name']), bot: text(body['bot']), email: text(body['email']) };
};

home.post(
  '/',
  csrf({ origin: config.formOrigins }),
  bodyLimit({
    maxSize: 10 * 1024,
    onError: (context) => context.text('Het formulier is te groot.', 413),
  }),
  zValidator('form', invitationSchema, async (result, context) => {
    // `=== false`, not `!`: Vercel compiles without strict mode, where `!` doesn't narrow.
    if (result.success === false) {
      const body = await context.req.parseBody();
      return context.html(
        homePage({
          errors: toFieldErrors(result.error),
          kind: 'form',
          values: formValues(body),
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
        message:
          outcome === 'retry-later'
            ? 'Het is op dit moment erg druk. Probeer het over een paar minuten opnieuw.'
            : 'We konden je aanvraag niet verwerken. Probeer het later opnieuw.',
        values: { name: invitation.name, bot: invitation.bot, email: invitation.email },
      }),
      outcome === 'retry-later' ? 503 : 502,
    );
  },
);

export default home;
