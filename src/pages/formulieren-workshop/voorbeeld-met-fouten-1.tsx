import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import Layout from '@theme/Layout';
import {
  Button,
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
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { unlink } from 'fs';
import React, { useId } from 'react';
import { useForm } from 'react-hook-form';

interface VoorbeeldMetFoutenProps {
  wrongAutoComplete?: boolean;
  defaultOptional?: boolean;
  astrixOnly?: boolean;
  nativeNumberInput?: boolean;
  checkboxForRadio?: boolean;
  unclearLabel?: boolean;
  unnecessaryQuestions?: boolean;
  colorOnlyError?: boolean;
  unlinkedLables?: boolean;
}

const VoorbeeldMetFouten1 = (props: VoorbeeldMetFoutenProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data, errors);
  const useLinkedId = () => (unlinkedLables ? undefined : useId());

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const wrongAutoComplete = searchParams.get('wrongAutoComplete') || props.wrongAutoComplete;
  const defaultOptional = searchParams.get('defaultOptional') || props.defaultOptional;
  const astrixOnly = searchParams.get('astrixOnly') || props.astrixOnly;
  const nativeNumberInput = searchParams.get('nativeNumberInput') || props.nativeNumberInput;
  const checkboxForRadio = searchParams.get('checkboxForRadio') || props.checkboxForRadio;
  const unclearLabel = searchParams.get('unclearLabel') || props.unclearLabel;
  const unnecessaryQuestions = searchParams.get('unnecessaryQuestions') || props.unnecessaryQuestions;
  const unlinkedLables = searchParams.get('unlinkedLables') || props.unlinkedLables;

  const formHeadingId = useId();
  const straatnaamId = useLinkedId();
  const huisnummerId = useLinkedId();
  const huisnummerToevoegingId = useLinkedId();
  const postcodeId = useLinkedId();
  const woonplaatsId = useLinkedId();
  const antiGraffitiCoatingId = useLinkedId();
  const opmerkingenId = useLinkedId();
  const achternaamId = useLinkedId();
  const tussenvoegselsId = useLinkedId();
  const voorlettersId = useLinkedId();
  const geslachtId = useLinkedId();
  const emailId = useLinkedId();
  const phoneId = useLinkedId();

  return (
    <Layout>
      <PageContent className="voorbeeld-theme">
        <main>
          <Heading1>Voorbeeld formulier met fouten</Heading1>
          <form onSubmit={handleSubmit(onSubmit)} aria-labelledby={formHeadingId}>
            <Heading2 id={formHeadingId}>Graffiti-schoonmaakregeling aanvragen</Heading2>
            <Paragraph>
              Graffiti of posters kunnen alleen worden verwijderd als u daarvoor toestemming geeft. U hoeft dit maar 1
              keer te doen. Heeft u al een keer toestemming gegeven? Dan kunt u{' '}
              <Link to="../formulieren-workshop">de vervuiling meteen melden</Link>.
            </Paragraph>
            {astrixOnly && <Paragraph>Velden met een * zijn {defaultOptional ? 'verplicht' : 'optioneel'}</Paragraph>}
            <Heading3>Gegevens pand</Heading3>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={straatnaamId}>
                  {unclearLabel ? 'Straatna(a)m(en)' : 'Straatnaam'}
                  {defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['straatnaam'] && (
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
                autoComplete={wrongAutoComplete ? 'street-address' : undefined}
                invalid={!!errors['straatnaam']}
                aria-describedby={`${straatnaamId}-description`}
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={huisnummerId}>
                  Huisnummer{defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['huisnummer'] && (
                <FormFieldDescription
                  id={`${huisnummerId}-description`}
                  invalid
                  className={`invalid-description--${errors['huisnummer'].type}`}
                >
                  {errors['huisnummer']?.message.toString()}
                </FormFieldDescription>
              )}
              {nativeNumberInput ? (
                <Textbox
                  {...register('huisnummer', { required: 'Verplicht: Vergeet niet een huisnummer in te vullen' })}
                  type="number"
                  id={huisnummerId}
                  aria-describedby={`${huisnummerId}-description`}
                  invalid={!!errors['huisnummer']}
                />
              ) : (
                <Textbox
                  {...register('huisnummer', { required: 'Verplicht: Vergeet niet een huisnummer in te vullen' })}
                  type="text"
                  id={huisnummerId}
                  inputMode="numeric"
                  aria-describedby={`${huisnummerId}-description`}
                  invalid={!!errors['huisnummer']}
                />
              )}
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={huisnummerToevoegingId}>
                  Toevoeging huisnummer{!defaultOptional && <span> {astrixOnly ? '*' : '(optioneel)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['huisnummer-toevoeging'] && (
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
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={postcodeId}>
                  Postcode{defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['postcode'] && (
                <FormFieldDescription
                  id={`${postcodeId}-description`}
                  invalid
                  className={`invalid-description--${errors['postcode'].type}`}
                >
                  {errors['postcode']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('postcode', { required: 'Verplicht: Vergeet niet een postcode in te vullen' })}
                type="text"
                id={postcodeId}
                autoComplete={wrongAutoComplete ? undefined : 'postal-code'}
                aria-describedby={`${postcodeId}-description`}
                invalid={!!errors['postcode']}
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={woonplaatsId}>
                  Woonplaats{defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['woonplaats'] && (
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
                autoComplete={wrongAutoComplete ? undefined : 'address-level2'}
                aria-describedby={`${woonplaatsId}-description`}
                invalid={!!errors['woonplaats']}
              />
            </FormField>
            <FormField>
              <Fieldset>
                <FieldsetLegend>Heeft uw pand een anti-graffiti-coating?</FieldsetLegend>
                <Paragraph
                  className={clsx(
                    'utrecht-form-field__label',
                    `utrecht-form-field__label--${checkboxForRadio ? 'checkbox' : 'radio'}`,
                  )}
                >
                  {errors['anti-graffiti-coating'] && (
                    <FormFieldDescription
                      id={`${antiGraffitiCoatingId}-description`}
                      invalid
                      className={`invalid-description--${errors['anti-graffiti-coating'].type}`}
                    >
                      {errors['anti-graffiti-coating']?.message.toString()}
                    </FormFieldDescription>
                  )}
                  <FormLabel htmlFor={`${antiGraffitiCoatingId}-true`}>
                    {checkboxForRadio ? (
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
                </Paragraph>
                <Paragraph
                  className={clsx(
                    'utrecht-form-field__label',
                    `utrecht-form-field__label--${checkboxForRadio ? 'checkbox' : 'radio'}`,
                  )}
                >
                  <FormLabel htmlFor={`${antiGraffitiCoatingId}-false`}>
                    {checkboxForRadio ? (
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
                </Paragraph>
              </Fieldset>
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={opmerkingenId}>
                  Aanvullende opmerkingen{!defaultOptional && <span> {astrixOnly ? '*' : '(optioneel)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['opmerkingen'] && (
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
              {errors['achternaam'] && (
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
                autoComplete={wrongAutoComplete ? undefined : 'cc-family-name'}
                invalid={!!errors['achternaam']}
                aria-describedby={`${achternaamId}-description`}
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={tussenvoegselsId}>
                  {unclearLabel ? 'Tussenvoegsel(s)' : 'Tussenvoegsel een of meerdere'}
                  {!defaultOptional && <span> {astrixOnly ? '*' : '(optioneel)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['tussenvoegsels'] && (
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
                autoComplete={wrongAutoComplete ? undefined : 'cc-family-name'}
                aria-describedby={`${tussenvoegselsId}-description`}
                invalid={!!errors['tussenvoegsels']}
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={voorlettersId}>
                  {unclearLabel ? 'Voorletter(s)' : 'Voorletters (een of meerdere)'}
                  {defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['voorletters'] && (
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
                autoComplete={wrongAutoComplete ? 'cc-family-name' : undefined}
                invalid={!!errors['voorletters']}
                aria-describedby={`${voorlettersId}-description`}
              />
            </FormField>
            {unnecessaryQuestions && (
              <FormField type="radio">
                <Fieldset>
                  <FieldsetLegend>
                    Geslacht{defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                  </FieldsetLegend>
                  <FormFieldDescription
                    id={`${geslachtId}-desciption`}
                    invalid={!!errors['geslacht']}
                    className={clsx(!!errors['geslacht'] && `invalid-description--${errors['geslacht'].type}`)}
                  >
                    Selecteer 'Niet relevant' als u geen keuze wilt maken in geslacht
                  </FormFieldDescription>
                  <Paragraph>
                    <FormLabel htmlFor={`${geslachtId}-man`}>
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
                  </Paragraph>
                  <Paragraph>
                    <FormLabel htmlFor={`${geslachtId}-vrouw`}>
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
                  </Paragraph>
                  <Paragraph>
                    <FormLabel htmlFor={`${geslachtId}-none`}>
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
                  </Paragraph>
                </Fieldset>
              </FormField>
            )}
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={emailId}>
                  E-mailadres
                  {defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['email'] && (
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
                autoComplete={wrongAutoComplete ? undefined : 'email'}
                invalid={!!errors['email']}
                aria-describedby={`${emailId}-description`}
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={phoneId}>
                  Telefoonnummer
                  {defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['telefoonnummer'] && (
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
                autoComplete={wrongAutoComplete ? undefined : 'tel'}
                invalid={!!errors['telefoonnummer']}
                aria-describedby={`${phoneId}-description`}
              />
            </FormField>
            <Button type="submit" appearance="primary-action-button">
              Vraag aan
            </Button>
          </form>
        </main>
      </PageContent>
    </Layout>
  );
};

export default VoorbeeldMetFouten1;
