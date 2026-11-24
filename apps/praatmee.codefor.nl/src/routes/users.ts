import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { bodyLimit } from 'hono/body-limit';
import { apiSecurityHeaders, corsMiddleware, verifyWebsite } from '../middleware/security.js';
import { requestInvitation } from '../services/invitation.js';
import { invitationSchema, toFieldErrors } from '../validators/invitation.js';

// JSON API for other apps' forms. Body: { name, email, bot, website? }.
const users = new Hono();

users.use('*', apiSecurityHeaders, corsMiddleware);

users.post(
  '/',
  verifyWebsite,
  bodyLimit({
    maxSize: 10 * 1024,
    onError: (context) => context.json({ message: 'Verzoek te groot.', success: false }, 413),
  }),
  zValidator('json', invitationSchema, (result, context) => {
    // `=== false`, not `!`: Vercel compiles without strict mode, where `!` doesn't narrow.
    if (result.success === false) {
      return context.json({ errors: toFieldErrors(result.error), message: 'Ongeldige invoer.', success: false }, 400);
    }
    return undefined;
  }),
  async (context) => {
    const outcome = await requestInvitation(context.req.valid('json'));

    switch (outcome) {
      case 'sent':
        return context.json({
          message: 'Je ontvangt een uitnodiging per e-mail.',
          success: true,
        });
      case 'retry-later':
        return context.json({ message: 'Probeer het over een paar minuten opnieuw.', success: false }, 503);
      default:
        return context.json({ message: 'We konden je aanvraag niet verwerken.', success: false }, 502);
    }
  },
);

export default users;
