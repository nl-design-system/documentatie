import {
  Button,
  ButtonGroup,
  FormField,
  FormFieldErrorMessage,
  FormLabel,
  Paragraph,
  Textbox,
} from '@utrecht/component-library-react';
import React, { PropsWithChildren } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

interface NewsletterSignUpProps {
  listId: string;
  emailFieldId: string;
  firstNameFieldId: string;
  thanksPage: string;
}

export const NewsletterSignUp = ({
  listId = '',
  thanksPage = '',
  emailFieldId = '',
  firstNameFieldId = '',
}: PropsWithChildren<NewsletterSignUpProps>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ [key: string]: string }>();
  const form = useRef(null);

  return (
    <form
      method="post"
      action="https://nl-design-system.email-provider.eu/subscribe/post/index.php"
      noValidate
      acceptCharset="utf-8"
      ref={form}
      onSubmit={handleSubmit(() => {
        form.current.submit();
      })}
    >
      <FormField type="email">
        <Paragraph>
          <FormLabel htmlFor={`id-${emailFieldId}`}>E-mailadres</FormLabel>
        </Paragraph>
        {errors[emailFieldId] && (
          <FormFieldErrorMessage>
            <Paragraph>{errors[emailFieldId].message}</Paragraph>
          </FormFieldErrorMessage>
        )}
        <Paragraph>
          <Textbox
            id={`id-${emailFieldId}`}
            name={emailFieldId}
            type="email"
            aria-required="true"
            autoComplete="email"
            {...register(`${emailFieldId}`, {
              required: {
                value: true,
                message: 'Dit veld is verplicht, maar het is niet ingevuld.',
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Dit is geen correct emailadres.',
              },
            })}
            invalid={!!errors[emailFieldId]}
          />
        </Paragraph>
      </FormField>

      <FormField type="text">
        <Paragraph>
          <FormLabel htmlFor={firstNameFieldId}>Naam (niet verplicht)</FormLabel>
        </Paragraph>
        <Paragraph>
          <Textbox id={firstNameFieldId} name={firstNameFieldId} type="text" autoComplete="given-name" />
        </Paragraph>
      </FormField>

      <ButtonGroup>
        <Button type="submit" appearance="primary-action-button">
          Aanmelden
        </Button>
      </ButtonGroup>

      <input type="hidden" name="next" value={thanksPage} />
      <input type="hidden" name="a" value="iyihtuzpiq" />
      <input type="hidden" name="l" value={listId} />
      <input name="osnD9cWRI3" autoComplete="on" id="id-osnD9cWRI3" type="hidden" value="NLDS website" />
      {/* honeypot */}
      <input
        autoComplete="new-password"
        type="email"
        id="email"
        name="email"
        placeholder="Your e-mail here"
        className="sr-only"
        aria-hidden="true"
      />
    </form>
  );
};

export default NewsletterSignUp;
