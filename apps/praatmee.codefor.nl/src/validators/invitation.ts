import { z } from 'zod';

export const invitationSchema = z.object({
  name: z
    .string({ error: 'Vul je voornaam in.' })
    .trim()
    .min(1, 'Vul je voornaam in.')
    .max(100, 'Je voornaam mag maximaal 100 tekens lang zijn.'),

  email: z
    .string({ error: 'Vul je e-mailadres in.' })
    .trim()
    .min(1, 'Vul je e-mailadres in.')
    .max(254, 'Je e-mailadres mag maximaal 254 tekens lang zijn.')
    .pipe(z.email('Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.')),

  // Human check from the original site.
  bot: z
    .string({ error: 'Typ "nee" als je geen bot bent.' })
    .trim()
    .toLowerCase()
    .refine((value) => value === 'nee', 'Typ "nee" als je geen bot bent.'),

  // Honeypot: hidden field that only bots fill in.
  website: z.string().max(200).optional(),
});

export type Invitation = z.infer<typeof invitationSchema>;

export type FieldName = 'name' | 'email' | 'bot';

export type FieldErrors = Partial<Record<FieldName, string>>;

// First error message per field.
export const toFieldErrors = (error: {
  issues: readonly { path: readonly PropertyKey[]; message: string }[];
}): FieldErrors => {
  const errors: FieldErrors = {};
  for (const issue of error.issues) {
    const field = issue.path[0];
    if ((field === 'name' || field === 'email' || field === 'bot') && !errors[field]) {
      errors[field] = issue.message;
    }
  }
  return errors;
};
