import { useLocation } from '@docusaurus/router';
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
  Textarea,
  Textbox,
  type FormFieldProps,
} from '@utrecht/component-library-react';
import type { PropsWithChildren } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

interface LapostaSignUpProps {
  listId: string;
  laPostaId: string;
  fields: FormFieldProps[];
  thanksPage: string;
  language?: { value: string; id: string };
  submitText: string;
}

export const LapostaSignUp = ({
  listId = '',
  laPostaId = '',
  thanksPage = '',
  fields = [],
}: PropsWithChildren<LapostaSignUpProps>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ [key: string]: string }>();
  const form = useRef(null);
  // const IS_ENGLISH = language?.value === '2';
  // const { search } = useLocation();
  // const params = new URLSearchParams(search);
  // const prefillEmail = params.get('prefillEmail');
  // const prefillName = params.get('prefillName');
  // const interestsValues: number[] | false =
  //   interestsId && interests.length > 0 ? generateInterestsValues(interests, disallowedInterestValues) : false;

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
      {fields.map((fieldProps) => (
        <FormField {...fieldProps} key={fieldProps.id} />
      ))}

      <FormField type="email">
        <Paragraph>
          <FormLabel htmlFor={`id-${emailFieldId}`}>{IS_ENGLISH ? 'Email address ' : 'E-mailadres'}</FormLabel>
        </Paragraph>
        {errors[emailFieldId] && <FormFieldErrorMessage>{errors[emailFieldId].message}</FormFieldErrorMessage>}
        <Paragraph>
          <Textbox
            id={`id-${emailFieldId}`}
            name={emailFieldId}
            type="email"
            autoComplete="email"
            defaultValue={prefillEmail}
            aria-required="true"
            {...register(`${emailFieldId}`, {
              required: {
                value: true,
                message: IS_ENGLISH
                  ? 'This field is required, but it was left empty.'
                  : 'Dit veld is verplicht, maar het is niet ingevuld.',
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: IS_ENGLISH ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.',
              },
            })}
            invalid={!!errors[emailFieldId]}
          />
        </Paragraph>
      </FormField>

      <FormField type="text">
        <Paragraph>
          <FormLabel htmlFor={firstNameFieldId}>{IS_ENGLISH ? 'Name' : 'Naam'}</FormLabel>
        </Paragraph>
        {errors[firstNameFieldId] && <FormFieldErrorMessage>{errors[firstNameFieldId].message}</FormFieldErrorMessage>}
        <Paragraph>
          <Textbox
            id={firstNameFieldId}
            name={firstNameFieldId}
            type="text"
            defaultValue={prefillName}
            autoComplete="given-name"
            aria-required="true"
            {...register(`${firstNameFieldId}`, {
              required: {
                value: true,
                message: IS_ENGLISH
                  ? 'This field is required, but it was left empty.'
                  : 'Dit veld is verplicht, maar het is niet ingevuld.',
              },
            })}
            invalid={!!errors[firstNameFieldId]}
          />
        </Paragraph>
      </FormField>

      {orgId && (
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor={orgId}>
              {IS_ENGLISH ? 'Organisation (not required)' : 'Organisatie (niet verplicht)'}
            </FormLabel>
          </Paragraph>
          {errors[orgId] && <FormFieldErrorMessage>{errors[orgId].message}</FormFieldErrorMessage>}
          <Paragraph>
            <Textbox id={orgId} name={orgId} type="text" />
          </Paragraph>
        </FormField>
      )}

      {interestsId && (
        <Fieldset>
          <FieldsetLegend>{interestsLegend} (niet verplicht)</FieldsetLegend>
          <FormFieldDescription>Meerdere antwoorden mogelijk.</FormFieldDescription>
          {interests.map((interest, index) => (
            <FormField type="checkbox" key={interest}>
              <Paragraph>
                <Checkbox
                  name={`${interestsId}[]`}
                  value={interestsValues[index]}
                  id={`${interestsId}-${interestsValues[index]}`}
                />
                <FormLabel htmlFor={`${interestsId}-${interestsValues[index]}`}>{interest}</FormLabel>
              </Paragraph>
            </FormField>
          ))}
        </Fieldset>
      )}

      {workAreasId && (
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor={workAreasId}>Aan wat voor projecten werk je? (niet verplicht)</FormLabel>
            <FormFieldDescription>Denk aan mijn-omgevingen, formulieren en/of kaarten.</FormFieldDescription>
          </Paragraph>
          <Paragraph>
            <Textarea id={workAreasId} name={workAreasId}></Textarea>
          </Paragraph>
        </FormField>
      )}

      {privacyPolicyId && (
        <FormField type="text">
          <FormFieldDescription id={`${privacyPolicyId}-description`}>
            {IS_ENGLISH ? (
              <p>
                The <a href="/privacy-policy">privacy policy</a> of NL Design System applies to our activities.
              </p>
            ) : (
              <p>
                Op onze activiteiten is de <a href="/privacyverklaring">privacyverklaring van NL Design System</a> van
                toepassing.
              </p>
            )}
          </FormFieldDescription>
          <FormField type="checkbox">
            <Checkbox
              value="1"
              id={`${privacyPolicyId}-1`}
              aria-describedby={`${privacyPolicyId}-description`}
              aria-required="true"
              {...register(`${privacyPolicyId}[]`, {
                required: {
                  value: true,
                  message: IS_ENGLISH
                    ? 'You can only register if you agree with the privacy policy.'
                    : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.',
                },
              })}
              invalid={!!errors[`${privacyPolicyId}[]`]}
            />
            <FormLabel htmlFor={`${privacyPolicyId}-1`}>
              {IS_ENGLISH
                ? 'I agree to the use of my data in accordance with the privacy policy'
                : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'}
            </FormLabel>
          </FormField>
          {errors[privacyPolicyId] && <FormFieldErrorMessage>{errors[privacyPolicyId].message}</FormFieldErrorMessage>}
        </FormField>
      )}

      {language?.id && <input type="hidden" name={language.id} value={language.value} />}

      <ButtonGroup>
        <Button type="submit" appearance="primary-action-button">
          {submitText ? submitText : IS_ENGLISH ? 'Sign up' : 'Aanmelden'}
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
