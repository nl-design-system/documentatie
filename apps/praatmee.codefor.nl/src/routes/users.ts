import { Hono } from 'hono';
import { bodyLimit } from 'hono/body-limit';
import { zValidator } from '@hono/zod-validator';

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
    onError: (context) => context.json({ success: false, message: 'Verzoek te groot.' }, 413),
  }),
  zValidator('json', invitationSchema, (result, context) => {
    if (!result.success) {
      return context.json({ success: false, message: 'Ongeldige invoer.', errors: toFieldErrors(result.error) }, 400);
    }
    return undefined;
  }),
  async (context) => {
    const outcome = await requestInvitation(context.req.valid('json'));

    switch (outcome) {
      case 'sent':
        return context.json({
          success: true,
          message: 'Je ontvangt een uitnodiging per e-mail.',
        });
      case 'retry-later':
        return context.json({ success: false, message: 'Probeer het over een paar minuten opnieuw.' }, 503);
      default:
        return context.json({ success: false, message: 'We konden je aanvraag niet verwerken.' }, 502);
    }
  },
);

export default users;
