import Layout from '@theme/Layout';
import {
  Button,
  ButtonGroup,
  Checkbox,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Heading2,
  Heading3,
  PageContent,
  Paragraph,
  RadioButton,
  Textarea,
  Textbox,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { useId } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import './GraffitiForm.css';

interface VoorbeeldMetFoutenProps {
  noAutoComplete?: string[] | true;
  defaultOptional?: boolean;
  astrixOnly?: boolean;
  nativeNumberInput?: string[] | true;
  checkboxForRadio?: string[] | true;
  unclearLabel?: string[] | true;
  unnecessaryQuestions?: string[] | true;
  colorOnlyError?: string[];
  unlinkedLables?: string[] | true;
  validationMode?: 'onBlur' | 'onChange' | 'all' | 'onSubmit' | 'onTouched';
  telNational?: boolean;
  postalCodeSpace?: boolean;
  postalCodePattern?: boolean;
}

interface RadioGroupProps {
  description?: ReactNode;
  label?: ReactNode;
}

const RadioGroup = ({ children, description, label }: PropsWithChildren<RadioGroupProps>) => {
  const descriptionId = description ? useId() : null;
  return (
    <Fieldset role="radiogroup" aria-describedby={description ? descriptionId : undefined}>
      {label ? <FieldsetLegend>{label}</FieldsetLegend> : null}
      {description ? <div id={descriptionId}>{description}</div> : null}
      {children}
    </Fieldset>
  );
};

interface RadioOptionProps {
  description?: ReactNode;
}

const RadioOption = ({ children, description }: PropsWithChildren<RadioOptionProps>) => (
  <FormField type="radio">
    <p className="utrecht-form-field__label utrecht-form-field__label--radio">{children}</p>
    {description ? <div className="utrecht-form-field__description">{description}</div> : null}
  </FormField>
);

interface CheckboxOptionProps {
  description?: ReactNode;
}

const CheckboxOption = ({ children, description }: PropsWithChildren<CheckboxOptionProps>) => (
  <FormField type="checkbox">
    <p className="utrecht-form-field__label utrecht-form-field__label--checkbox">{children}</p>
    {description ? <div className="utrecht-form-field__description">{description}</div> : null}
  </FormField>
);

export const GraffitiForm = ({
  noAutoComplete = [],
  defaultOptional = false,
  astrixOnly = false,
  nativeNumberInput = [],
  checkboxForRadio = [],
  unclearLabel = [],
  unnecessaryQuestions = [],
  colorOnlyError = [],
  unlinkedLables = [],
  validationMode = 'onSubmit',
  telNational = false,
  postalCodeSpace,
  postalCodePattern = true,
}: VoorbeeldMetFoutenProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: validationMode });
  const onSubmit = (data) => console.log(data, errors);
  const useLinkedId = (label) => (unlinkedLables === true || unlinkedLables.includes(label) ? undefined : useId());

  const formHeadingId = useId();
  const straatnaamId = useLinkedId('straatnaam');
  const huisnummerId = useLinkedId('huisnummer');
  const huisnummerToevoegingId = useLinkedId('huisnummerToevoeging');
  const postcodeId = useLinkedId('poscode');
  const woonplaatsId = useLinkedId('woonplaats');
  const antiGraffitiCoatingId = useLinkedId('antiGraffitiCoating');
  const opmerkingenId = useLinkedId('opmerkingen');
  const achternaamId = useLinkedId('achternaam');
  const tussenvoegselsId = useLinkedId('tussenvoegsels');
  const voorlettersId = useLinkedId('voorletters');
  const geslachtId = useLinkedId('geslacht');
  const emailId = useLinkedId('email');
  const phoneId = useLinkedId('phone');

  return (
    <Layout>
      <PageContent className={clsx('voorbeeld-theme', 'voorbeeld-theme--extensions')}>
        {' '}
        <main>
          <Heading1>Voorbeeld formulier met fouten</Heading1>
          <form onSubmit={handleSubmit(onSubmit)} aria-labelledby={formHeadingId} className="example-form">
            <Heading2 id={formHeadingId}>Graffiti-schoonmaakregeling aanvragen</Heading2>
            <Paragraph>
              Graffiti of posters kunnen alleen worden verwijderd als u daarvoor toestemming geeft. U hoeft dit maar 1
              keer te doen. Heeft u al een keer toestemming gegeven? Dan kunt u de vervuiling meteen melden.
            </Paragraph>
            {astrixOnly && <Paragraph>Velden met een * zijn {defaultOptional ? 'verplicht' : 'optioneel'}</Paragraph>}
            <Heading3>Gegevens pand</Heading3>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={straatnaamId}>
                  {unclearLabel === true || unclearLabel.includes('straatnaam') ? 'Straatna(a)m(en)' : 'Straatnaam'}
                  {defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {!colorOnlyError.includes('straatnaam') && errors['straatnaam'] && (
                <FormFieldDescription
                  id={`${straatnaamId}-description`}
                  invalid
                  className={`invalid-description--${errors['straatnaam'].type}`}
                >
                  {errors['straatnaam']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('straatnaam', { required: 'Verplicht: Vergeet niet een straatnaam in te vullen' })}
                type="text"
                id={straatnaamId}
                autoComplete={
                  noAutoComplete === true || noAutoComplete.includes('straatnaam') ? undefined : 'street-address'
                }
                invalid={!!errors['straatnaam']}
                aria-describedby={`${straatnaamId}-description`}
                className="utrecht-textbox--example-street-name"
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={huisnummerId}>
                  Huisnummer{defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {!colorOnlyError.includes('huisnummer') && errors['huisnummer'] && (
                <FormFieldDescription
                  id={`${huisnummerId}-description`}
                  invalid
                  className={`invalid-description--${errors['huisnummer'].type}`}
                >
                  {errors['huisnummer']?.message.toString()}
                </FormFieldDescription>
              )}
              {nativeNumberInput === true || nativeNumberInput.includes('huisnummer') ? (
                <Textbox
                  {...register('huisnummer', { required: 'Verplicht: Vergeet niet een huisnummer in te vullen' })}
                  type="number"
                  id={huisnummerId}
                  aria-describedby={`${huisnummerId}-description`}
                  invalid={!!errors['huisnummer']}
                  className="utrecht-textbox--example-house-number"
                />
              ) : (
                <Textbox
                  {...register('huisnummer', { required: 'Verplicht: Vergeet niet een huisnummer in te vullen' })}
                  type="text"
                  id={huisnummerId}
                  inputMode="numeric"
                  aria-describedby={`${huisnummerId}-description`}
                  invalid={!!errors['huisnummer']}
                  className="utrecht-textbox--example-house-number"
                />
              )}
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={huisnummerToevoegingId}>
                  Toevoeging huisnummer{!defaultOptional && <span> {astrixOnly ? '*' : '(optioneel)'}</span>}
                </FormLabel>
              </Paragraph>
              {!colorOnlyError.includes('huisnummer-toevoeging') && errors['huisnummer-toevoeging'] && (
                <FormFieldDescription
                  id={`${huisnummerToevoegingId}-description`}
                  invalid
                  className={`invalid-description--${errors['huisnummer-toevoeging'].type}`}
                >
                  {errors['huisnummer-toevoeging']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('huisnummer-toevoeging')}
                type="text"
                id={huisnummerToevoegingId}
                aria-describedby={`${huisnummerToevoegingId}-description`}
                className="utrecht-textbox--example-house-number-addition"
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={postcodeId}>
                  Postcode{defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {!colorOnlyError.includes('postcode') && errors['postcode'] && (
                <FormFieldDescription
                  id={`${postcodeId}-description`}
                  invalid
                  className={`invalid-description--${errors['postcode'].type}`}
                >
                  {errors['postcode']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('postcode', {
                  required: 'Verplicht: Vergeet niet een postcode in te vullen',
                  pattern: postalCodePattern
                    ? postalCodeSpace === true
                      ? /^\d{4} [A-Za-z]{2}$/
                      : postalCodeSpace === false
                        ? /^\d{4}[A-Za-z]{2}$/
                        : /^\s*\d{4}\s*[A-Za-z]{2}\s*$/
                    : undefined,
                })}
                type="text"
                id={postcodeId}
                autoComplete={
                  noAutoComplete === true || noAutoComplete.includes('postcode') ? undefined : 'postal-code'
                }
                aria-describedby={`${postcodeId}-description`}
                invalid={!!errors['postcode']}
                className="utrecht-textbox--example-postal-code-nl"
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={woonplaatsId}>
                  Woonplaats{defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {!colorOnlyError.includes('woonplaats') && errors['woonplaats'] && (
                <FormFieldDescription
                  id={`${woonplaatsId}-description`}
                  invalid
                  className={`invalid-description--${errors['woonplaats'].type}`}
                >
                  {errors['woonplaats']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('woonplaats', { required: 'Verplicht: Vergeet niet een woonplaats in te vullen' })}
                type="text"
                id={woonplaatsId}
                autoComplete={
                  noAutoComplete === true || noAutoComplete.includes('woonplaats') ? undefined : 'address-level2'
                }
                aria-describedby={`${woonplaatsId}-description`}
                invalid={!!errors['woonplaats']}
                className="utrecht-textbox--example-woonplaats"
              />
            </FormField>
            <FormField>
              <Fieldset>
                <FieldsetLegend>Heeft uw pand een anti-graffiti-coating?</FieldsetLegend>
                <CheckboxOption>
                  {!colorOnlyError.includes('anti-graffiti-coating') && errors['anti-graffiti-coating'] && (
                    <FormFieldDescription
                      id={`${antiGraffitiCoatingId}-description`}
                      invalid
                      className={`invalid-description--${errors['anti-graffiti-coating'].type}`}
                    >
                      {errors['anti-graffiti-coating']?.message.toString()}
                    </FormFieldDescription>
                  )}
                  <FormLabel htmlFor={`${antiGraffitiCoatingId}-true`} type="radio">
                    {checkboxForRadio === true || checkboxForRadio.includes('anti-graffiti-coating') ? (
                      <Checkbox
                        {...register('anti-graffiti-coating')}
                        className="utrecht-form-field__input"
                        id={`${antiGraffitiCoatingId}-true`}
                        value="true"
                        aria-describedby={`${antiGraffitiCoatingId}-description`}
                        invalid={!!errors['anti-graffiti-coating']}
                      />
                    ) : (
                      <RadioButton
                        {...register('anti-graffiti-coating')}
                        className="utrecht-form-field__input"
                        id={`${antiGraffitiCoatingId}-true`}
                        value="ja"
                        aria-describedby={`${antiGraffitiCoatingId}-description`}
                        invalid={!!errors['anti-graffiti-coating']}
                      />
                    )}
                    Ja
                  </FormLabel>
                </CheckboxOption>
                <CheckboxOption>
                  <FormLabel htmlFor={`${antiGraffitiCoatingId}-false`} type="radio">
                    {checkboxForRadio === true || checkboxForRadio.includes('anti-graffiti-coating') ? (
                      <Checkbox
                        {...register('anti-graffiti-coating')}
                        className="utrecht-form-field__input"
                        id={`${antiGraffitiCoatingId}-false`}
                        value="false"
                        aria-describedby={`${antiGraffitiCoatingId}-description`}
                        invalid={!!errors['anti-graffiti-coating']}
                      />
                    ) : (
                      <RadioButton
                        {...register('anti-graffiti-coating')}
                        className="utrecht-form-field__input"
                        id={`${antiGraffitiCoatingId}-false`}
                        value="nee"
                        aria-describedby={`${antiGraffitiCoatingId}-description`}
                        invalid={!!errors['anti-graffiti-coating']}
                      />
                    )}
                    Nee
                  </FormLabel>
                </CheckboxOption>
              </Fieldset>
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={opmerkingenId}>
                  Aanvullende opmerkingen{!defaultOptional && <span> {astrixOnly ? '*' : '(optioneel)'}</span>}
                </FormLabel>
              </Paragraph>
              {!colorOnlyError.includes('opmerkingen') && errors['opmerkingen'] && (
                <FormFieldDescription
                  id={`${opmerkingenId}-description`}
                  invalid
                  className={`invalid-description--${errors['opmerkingen'].type}`}
                >
                  {errors['opmerkingen']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textarea
                {...register('opmerkingen')}
                id={opmerkingenId}
                invalid={!!errors['opmerkingen']}
                aria-describedby={`${opmerkingenId}-description`}
              />
            </FormField>
            <Heading3>Uw gegevens</Heading3>
            <Paragraph>
              Om u zo goed mogelijk te kunnen helpen, ontvangen we graag uw contactgegevens. Deze gegevens worden zonder
              uw toestemming niet aan derden verstrekt.
            </Paragraph>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={achternaamId}>
                  Achternaam{defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {!colorOnlyError.includes('achternaam') && errors['achternaam'] && (
                <FormFieldDescription
                  id={`${achternaamId}-description`}
                  invalid
                  className={`invalid-description--${errors['achternaam'].type}`}
                >
                  {errors['achternaam']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('achternaam', { required: 'Verplicht: Vergeet niet een achternaam in te vullen' })}
                type="text"
                id={achternaamId}
                autoComplete={
                  noAutoComplete === true || noAutoComplete.includes('achternaam') ? undefined : 'cc-family-name'
                }
                invalid={!!errors['achternaam']}
                aria-describedby={`${achternaamId}-description`}
                className="utrecht-textbox--example-family-name"
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={tussenvoegselsId}>
                  {unclearLabel === true || unclearLabel.includes('tussenvoegsels')
                    ? 'Tussenvoegsel(s)'
                    : 'Tussenvoegsels'}
                  {!defaultOptional && <span> {astrixOnly ? '*' : '(optioneel)'}</span>}
                </FormLabel>
              </Paragraph>
              {!colorOnlyError.includes('tussenvoegsels') && errors['tussenvoegsels'] && (
                <FormFieldDescription
                  id={`${tussenvoegselsId}-description`}
                  invalid
                  className={`invalid-description--${errors['tussenvoegsels'].type}`}
                >
                  {errors['tussenvoegsels']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('tussenvoegsels')}
                type="text"
                id={tussenvoegselsId}
                autoComplete={
                  noAutoComplete === true || noAutoComplete.includes('tussenvoegsels') ? undefined : 'cc-family-name'
                }
                aria-describedby={`${tussenvoegselsId}-description`}
                invalid={!!errors['tussenvoegsels']}
                className="utrecht-textbox--example-voorvoegsel"
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={voorlettersId}>
                  {unclearLabel === true || unclearLabel.includes('voorletters')
                    ? 'Voorletter(s)'
                    : 'Voorletters (1 of meerdere)'}
                  {defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {!colorOnlyError.includes('voorletters') && errors['voorletters'] && (
                <FormFieldDescription
                  id={`${voorlettersId}-description`}
                  invalid
                  className={`invalid-description--${errors['voorletters'].type}`}
                >
                  {errors['voorletters']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('voorletters', { required: 'Verplicht: Vergeet niet minimaal 1 voorletter in te vullen' })}
                type="text"
                id={voorlettersId}
                invalid={!!errors['voorletters']}
                aria-describedby={`${voorlettersId}-description`}
                className="utrecht-textbox--example-voorletters"
              />
            </FormField>
            {unnecessaryQuestions === true ||
              (unnecessaryQuestions.includes('gender') && (
                <RadioGroup
                  label={`Geslacht ${defaultOptional ? (astrixOnly ? '*' : '(verplicht)') : ''}`}
                  description={
                    <FormFieldDescription
                      id={`${geslachtId}-desciption`}
                      invalid={!!errors['geslacht']}
                      className={clsx(!!errors['geslacht'] && `invalid-description--${errors['geslacht'].type}`)}
                    >
                      Selecteer 'Niet relevant' als u geen keuze wilt maken in geslacht
                    </FormFieldDescription>
                  }
                >
                  <RadioOption>
                    <FormLabel htmlFor={`${geslachtId}-man`} type="radio">
                      <RadioButton
                        {...register('geslacht', { required: true })}
                        className="utrecht-form-field__input"
                        id={`${geslachtId}-man`}
                        value="man"
                        aria-describedby={`${geslachtId}-desciption`}
                        invalid={!!errors['geslacht']}
                      />
                      Man
                    </FormLabel>
                  </RadioOption>
                  <RadioOption>
                    <FormLabel htmlFor={`${geslachtId}-vrouw`} type="radio">
                      <RadioButton
                        {...register('geslacht', { required: true })}
                        className="utrecht-form-field__input"
                        id={`${geslachtId}-vrouw`}
                        value="vrouw"
                        aria-describedby={`${geslachtId}-desciption`}
                        invalid={!!errors['geslacht']}
                      />
                      Vrouw
                    </FormLabel>
                  </RadioOption>
                  <RadioOption>
                    <FormLabel htmlFor={`${geslachtId}-none`} type="radio">
                      <RadioButton
                        {...register('geslacht', { required: true })}
                        className="utrecht-form-field__input"
                        id={`${geslachtId}-none`}
                        value="none"
                        aria-describedby={`${geslachtId}-desciption`}
                        invalid={!!errors['geslacht']}
                      />
                      Niet relevant
                    </FormLabel>
                  </RadioOption>
                </RadioGroup>
              ))}
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={emailId}>
                  E-mailadres
                  {defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {!colorOnlyError.includes('email') && errors['email'] && (
                <FormFieldDescription
                  id={`${emailId}-description`}
                  invalid
                  className={`invalid-description--${errors['email'].type}`}
                >
                  {errors['email']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('email', { required: 'Verplicht: Vergeet niet je email in te vullen' })}
                type="email"
                id={emailId}
                autoComplete={noAutoComplete === true || noAutoComplete.includes('email') ? undefined : 'email'}
                invalid={!!errors['email']}
                aria-describedby={`${emailId}-description`}
                className="utrecht-textbox--example-mail"
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={phoneId}>
                  Telefoonnummer
                  {defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {!colorOnlyError.includes('telefoonnummer') && errors['telefoonnummer'] && (
                <FormFieldDescription
                  id={`${phoneId}-description`}
                  invalid
                  className={`invalid-description--${errors['telefoonnummer'].type}`}
                >
                  {errors['telefoonnummer']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('telefoonnummer', { required: 'Verplicht: Vergeet niet je telefoonnummer in te vullen' })}
                type="tel"
                id={phoneId}
                autoComplete={
                  noAutoComplete === true || noAutoComplete.includes('telefoonnummer')
                    ? undefined
                    : telNational
                      ? 'tel-national'
                      : 'tel'
                }
                invalid={!!errors['telefoonnummer']}
                aria-describedby={`${phoneId}-description`}
                className={telNational ? 'utrecht-textbox--example-tel-national' : 'utrecht-textbox--example-tel'}
              />
            </FormField>
            <ButtonGroup>
              <Button type="submit" appearance="primary-action-button">
                Vraag aan
              </Button>
            </ButtonGroup>
          </form>
        </main>
      </PageContent>
    </Layout>
  );
};
