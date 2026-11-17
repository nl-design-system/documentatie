import { z } from 'zod';

export const invitationSchema = z.object({
  name: z
    .string({ error: 'Vul je voornaam in.' })
    .trim()
    .min(1, 'Vul je voornaam in.')
    .max(100, 'Je voornaam mag maximaal 100 tekens lang zijn.'),

  // Human check from the original site.
  bot: z
    .string({ error: 'Typ "nee" als je geen bot bent.' })
    .trim()
    .toLowerCase()
    .refine((value) => value === 'nee', 'Typ "nee" als je geen bot bent.'),

  email: z
    .string({ error: 'Vul je e-mailadres in.' })
    .trim()
    .min(1, 'Vul je e-mailadres in.')
    .max(254, 'Je e-mailadres mag maximaal 254 tekens lang zijn.')
    .pipe(z.email('Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.')),

  // Honeypot: hidden field that only bots fill in.
  website: z.string().max(200).optional(),
});

export type Invitation = z.infer<typeof invitationSchema>;

export type FieldName = 'name' | 'email' | 'bot';

export type FieldErrors = Partial<Record<FieldName, string>>;

// Order of the fields on the page; the error summary must follow it.
const fieldOrder: FieldName[] = ['name', 'email', 'bot'];

// First error message per field, in page order.
export const toFieldErrors = (error: {
  issues: readonly { message: string; path: readonly PropertyKey[] }[];
}): FieldErrors => {
  const errors: FieldErrors = {};
  for (const field of fieldOrder) {
    const issue = error.issues.find((item) => item.path[0] === field);
    if (issue) {
      errors[field] = issue.message;
    }
  }
  return errors;
};
