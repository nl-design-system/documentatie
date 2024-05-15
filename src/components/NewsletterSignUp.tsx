import {
  Button,
  ButtonGroup,
  Checkbox,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldDescription,
  FormFieldErrorMessage,
  FormLabel,
  Paragraph,
  Textbox,
  Textarea,
} from '@utrecht/component-library-react';
import React, { PropsWithChildren } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

interface NewsletterSignUpProps {
  listId: string;
  laPostaId: string;
  emailFieldId: string;
  firstNameFieldId: string;
  orgId: string;
  interestsId: string;
  interests: Array<string>;
  thanksPage: string;
  workAreasId: string;
}

export const NewsletterSignUp = ({
  listId = '',
  laPostaId = '',
  thanksPage = '',
  emailFieldId = '',
  firstNameFieldId = '',
  orgId = '',
  interestsId = '',
  interests = [],
  workAreasId = '',
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
        {errors[emailFieldId] && <FormFieldErrorMessage>{errors[emailFieldId].message}</FormFieldErrorMessage>}
        <Paragraph>
          <Textbox
            id={`id-${emailFieldId}`}
            name={emailFieldId}
            type="email"
            autoComplete="email"
            aria-required="true"
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
          <FormLabel htmlFor={firstNameFieldId}>Naam</FormLabel>
        </Paragraph>
        {errors[firstNameFieldId] && <FormFieldErrorMessage>{errors[firstNameFieldId].message}</FormFieldErrorMessage>}
        <Paragraph>
          <Textbox
            id={firstNameFieldId}
            name={firstNameFieldId}
            type="text"
            autoComplete="given-name"
            aria-required="true"
            {...register(`${firstNameFieldId}`, {
              required: {
                value: true,
                message: 'Dit veld is verplicht, maar het is niet ingevuld.',
              },
            })}
            invalid={!!errors[firstNameFieldId]}
          />
        </Paragraph>
      </FormField>

      {orgId && (
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor={orgId}>Organisatie</FormLabel>
          </Paragraph>
          {errors[orgId] && <FormFieldErrorMessage>{errors[orgId].message}</FormFieldErrorMessage>}
          <Paragraph>
            <Textbox
              id={orgId}
              name={orgId}
              type="text"
              aria-required="true"
              {...register(`${orgId}`, {
                required: {
                  value: true,
                  message: 'Dit veld is verplicht, maar het is niet ingevuld.',
                },
              })}
              invalid={!!errors[orgId]}
            />
          </Paragraph>
        </FormField>
      )}

      {interestsId && (
        <Fieldset>
          <FieldsetLegend>Waar wil je NL Design System voor gebruiken? (niet verplicht)</FieldsetLegend>
          <FormFieldDescription>Meerdere antwoorden mogelijk.</FormFieldDescription>
          {interests.map((interest, index) => (
            <FormField type="checkbox" key={interest}>
              <Paragraph>
                <Checkbox name={`${interestsId}[]`} value={index + 1} id={`${interestsId}-${index + 1}`} />
                <FormLabel htmlFor={`${interestsId}-${index + 1}`}>{interest}</FormLabel>
              </Paragraph>
            </FormField>
          ))}
        </Fieldset>
      )}

      {workAreasId && (
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor={workAreasId}>Aan wat voor projecten werk je? (niet verplicht)</FormLabel>
            <FormFieldDescription>
              Denk aan mijn-omgevingen, formulieren en/of kaarten.
            </FormFieldDescription>
          </Paragraph>
          <Paragraph>
            <Textarea id={workAreasId} name={workAreasId}></Textarea>
          </Paragraph>
        </FormField>
      )}

      <ButtonGroup>
        <Button type="submit" appearance="primary-action-button">
          Aanmelden
        </Button>
      </ButtonGroup>

      <input type="hidden" name="next" value={thanksPage} />
      <input type="hidden" name="a" value={laPostaId} />
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
