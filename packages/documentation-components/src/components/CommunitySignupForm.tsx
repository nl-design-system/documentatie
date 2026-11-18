import {
  Alert,
  FormField,
  FormFieldDescription,
  FormFieldErrorMessage,
  FormLabel,
} from '@utrecht/component-library-react';
import { useId, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import '@utrecht/alert-css/dist/index.css';
import '@utrecht/form-field-css/dist/index.css';
import '@utrecht/form-field-description-css/dist/index.css';
import '@utrecht/form-field-error-message-css/dist/index.css';
import '@utrecht/form-label-css/dist/index.css';
import { ActionGroup } from '../action-group/action-group.tsx';
import { Button } from '../button/button.tsx';
import { Paragraph } from '../paragraph/paragraph.tsx';
import { Textbox } from '../textbox/textbox.tsx';
import './CommunitySignupForm.css';

interface CommunitySignupFormProps {
  apiUrl?: string;
  thanksPage: string;
}

interface SignupFields {
  bot: string;
  email: string;
  name: string;
  /** Honeypot: hidden from people, only bots fill it in. */
  website: string;
}

type FieldName = 'bot' | 'email' | 'name';
interface BodyType {
  errors: Partial<Record<FieldName, string>>;
  success: boolean;
  message?: string;
}
// Page order, so focus goes to the first field with a server error.
const fieldOrder: FieldName[] = ['name', 'email', 'bot'];

const REQUIRED = 'Dit veld is verplicht, maar het is niet ingevuld.';
const NETWORK_ERROR =
  'We konden je aanmelding niet versturen. Controleer je internetverbinding en probeer het opnieuw.';
const GENERIC_ERROR = 'Er is iets misgegaan. Probeer het later opnieuw.';

export const CommunitySignupForm = ({
  apiUrl = 'https://praatmee.codefor.nl/api/v1/users',
  thanksPage,
}: CommunitySignupFormProps) => {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setError,
  } = useForm<SignupFields>({ mode: 'onBlur' });
  const [formError, setFormError] = useState<string>();
  const submitting = useRef(false);

  const id = useId();
  const ids = {
    name: `name-${id}`,
    bot: `bot-${id}`,
    botDescription: `bot-description-${id}`,
    email: `email-${id}`,
    emailDescription: `email-description-${id}`,
    formError: `form-error-${id}`,
    website: `website-${id}`,
  };
  const errorId = (field: FieldName) => `${ids[field]}-error`;
  const describedBy = (...values: (string | false | undefined)[]) => values.filter(Boolean).join(' ') || undefined;

  const onSubmit = handleSubmit(async (data) => {
    // Ignore double clicks while a request is running.
    if (submitting.current) return;
    submitting.current = true;
    setFormError(undefined);

    try {
      const response = await fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        method: 'POST',
      });
      const body: BodyType = await response.json().catch(() => ({}));

      if (response.ok && body.success) {
        window.location.assign(thanksPage);
        return;
      }

      // Show the API's validation messages next to the matching fields.
      const fieldErrors = fieldOrder.filter((field) => body.errors?.[field]);
      if (response.status === 400 && fieldErrors.length > 0) {
        fieldErrors.forEach((field, index) =>
          setError(field, { message: body.errors?.[field], type: 'server' }, { shouldFocus: index === 0 }),
        );
        return;
      }

      setFormError(body.message ?? GENERIC_ERROR);
    } catch {
      setFormError(NETWORK_ERROR);
    } finally {
      submitting.current = false;
    }
  });

  return (
    <form className="ma-flow" method="post" noValidate acceptCharset="utf-8" onSubmit={onSubmit}>
      {formError && (
        <Alert type="error" id={ids.formError} role="alert">
          <strong>{formError}</strong>
        </Alert>
      )}

      <FormField type="text">
        <Paragraph>
          <FormLabel htmlFor={ids.name}>Voornaam</FormLabel>
        </Paragraph>
        {errors.name && (
          <FormFieldErrorMessage role="alert" id={errorId('name')}>
            {errors.name.message}
          </FormFieldErrorMessage>
        )}
        <Paragraph>
          <Textbox
            id={ids.name}
            type="text"
            autoComplete="given-name"
            aria-required="true"
            aria-describedby={describedBy(errors.name && errorId('name'))}
            invalid={!!errors.name}
            {...register('name', {
              validate: (value) => value.trim() !== '' || REQUIRED,
              maxLength: { message: 'Je voornaam mag maximaal 100 tekens lang zijn.', value: 100 },
              required: { message: REQUIRED, value: true },
            })}
          />
        </Paragraph>
      </FormField>

      <FormField type="email">
        <Paragraph>
          <FormLabel htmlFor={ids.email}>E-mailadres</FormLabel>
        </Paragraph>
        <FormFieldDescription id={ids.emailDescription}>Hier sturen we de uitnodiging naartoe.</FormFieldDescription>
        {errors.email && (
          <FormFieldErrorMessage role="alert" id={errorId('email')}>
            {errors.email.message}
          </FormFieldErrorMessage>
        )}
        <Paragraph>
          <Textbox
            id={ids.email}
            type="email"
            autoComplete="email"
            spellCheck={false}
            aria-required="true"
            aria-describedby={describedBy(ids.emailDescription, errors.email && errorId('email'))}
            invalid={!!errors.email}
            {...register('email', {
              pattern: {
                message: 'Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.',
                value: /^\S+@\S+\.\S+$/,
              },
              required: { message: REQUIRED, value: true },
            })}
          />
        </Paragraph>
      </FormField>

      <FormField type="text">
        <Paragraph>
          <FormLabel htmlFor={ids.bot}>Ben je een bot?</FormLabel>
        </Paragraph>
        <FormFieldDescription id={ids.botDescription}>Typ &quot;nee&quot; als je een mens bent.</FormFieldDescription>
        {errors.bot && (
          <FormFieldErrorMessage role="alert" id={errorId('bot')}>
            {errors.bot.message}
          </FormFieldErrorMessage>
        )}
        <Paragraph>
          <Textbox
            id={ids.bot}
            className="ma-community-signup-form__short-field"
            type="text"
            autoComplete="off"
            aria-required="true"
            aria-describedby={describedBy(ids.botDescription, errors.bot && errorId('bot'))}
            invalid={!!errors.bot}
            {...register('bot', {
              validate: (value) => value.trim().toLowerCase() === 'nee' || 'Typ "nee" als je geen bot bent.',
              required: { message: REQUIRED, value: true },
            })}
          />
        </Paragraph>
      </FormField>

      <div className="ma-community-signup-form__honeypot" aria-hidden="true">
        <label htmlFor={ids.website}>Laat dit veld leeg</label>
        <input id={ids.website} type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <ActionGroup>
        <Button type="submit" purpose="primary" aria-describedby={formError ? ids.formError : undefined}>
          {isSubmitting ? 'Bezig met versturen…' : 'Nodig me uit!'}
        </Button>
      </ActionGroup>
    </form>
  );
};
