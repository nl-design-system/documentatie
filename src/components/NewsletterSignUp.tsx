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
import { useForm } from 'react-hook-form';
// import style from './NewsletterSignUp.module.css';

interface NewsletterSignUpProps {
  listId: string;
  emailFieldId: string;
  firstNameFieldId: string;
  lastNameFieldId: string;
  thanksPage: string;
}

export const NewsletterSignUp = ({
  listId = '',
  thanksPage = '',
  emailFieldId = '',
  firstNameFieldId = '',
  lastNameFieldId = '',
}: PropsWithChildren<NewsletterSignUpProps>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ [key: string]: string }>();

  return (
    <form
      method="post"
      action="https://nl-design-system.email-provider.eu/subscribe/post/index.php"
      noValidate
      acceptCharset="utf-8"
      onSubmit={handleSubmit((data) => {
        console.log(data);

        /* do actual submitting ?*/
      })}
    >
      <input type="hidden" name="next" value={thanksPage} />
      <input type="hidden" name="a" value="iyihtuzpiq" />
      <input type="hidden" name="l" value={listId} />

      <FormField type="email">
        <Paragraph>
          <FormLabel htmlFor={emailFieldId}>E-mailadres</FormLabel>
        </Paragraph>
        {errors.email && (<FormFieldErrorMessage>{errors.email.message}</FormFieldErrorMessage>)}
        <Paragraph>
          <Textbox
            id={emailFieldId}
            name={emailFieldId}
            type="email"
            aria-required="true"
            autoComplete="email"
            {...register('email', {
              required: {
                value: true,
                message: 'Dit veld is verplicht, maar het is niet ingevuld.',
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Dit is geen correct emailadres'
              },
            })}
            invalid={!!errors.email}
          />
        </Paragraph>
      </FormField>

      <FormField type="text">
        <Paragraph>
          <FormLabel htmlFor={firstNameFieldId}>Voornaam (optioneel)</FormLabel>
        </Paragraph>
        <Paragraph>
          <Textbox id={firstNameFieldId} name={firstNameFieldId} type="text" autoComplete="given-name" />
        </Paragraph>
      </FormField>

      <FormField type="text">
        <Paragraph>
          <FormLabel htmlFor={lastNameFieldId}>Achternaam (opioneel)</FormLabel>
        </Paragraph>
        <Paragraph>
          <Textbox id={lastNameFieldId} name={lastNameFieldId} type="text" autoComplete="family-name" />
        </Paragraph>
      </FormField>

      <input name="osnD9cWRI3" autoComplete="on" id="id-osnD9cWRI3" type="hidden" value="NLDS website" />

      <input
        autoComplete="new-password"
        type="email"
        id="email"
        name="email"
        placeholder="Your e-mail here"
        className="sr-only"
        aria-hidden="true"
      />

      <ButtonGroup>
        <Button type="submit" appearance="primary-action-button">
          Aanmelden
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default NewsletterSignUp;
