import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
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
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { useId } from 'react';
import { useForm } from 'react-hook-form';
import style from './GraffitiForm.module.css';

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
}

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
      <PageContent className={clsx('voorbeeld-theme', style['voorbeeld-theme--extensions'])}>
        {' '}
        <main>
          <Heading1>Voorbeeld formulier met fouten</Heading1>
          <form onSubmit={handleSubmit(onSubmit)} aria-labelledby={formHeadingId} className={style['example-form']}>
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
                className={style['utrecht-textbox--example-street-name']}
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
                  className={style['utrecht-textbox--example-house-number']}
                />
              ) : (
                <Textbox
                  {...register('huisnummer', { required: 'Verplicht: Vergeet niet een huisnummer in te vullen' })}
                  type="text"
                  id={huisnummerId}
                  inputMode="numeric"
                  aria-describedby={`${huisnummerId}-description`}
                  invalid={!!errors['huisnummer']}
                  className={style['utrecht-textbox--example-house-number']}
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
                className={style['utrecht-textbox--example-house-number-addition']}
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
                {...register('postcode', { required: 'Verplicht: Vergeet niet een postcode in te vullen' })}
                type="text"
                id={postcodeId}
                autoComplete={
                  noAutoComplete === true || noAutoComplete.includes('postcode') ? undefined : 'postal-code'
                }
                aria-describedby={`${postcodeId}-description`}
                invalid={!!errors['postcode']}
                className={style['utrecht-textbox--example-postal-code-nl']}
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
                className={style['utrecht-textbox--example-woonplaats']}
              />
            </FormField>
            <FormField>
              <Fieldset>
                <FieldsetLegend>Heeft uw pand een anti-graffiti-coating?</FieldsetLegend>
                <Paragraph className={clsx('utrecht-form-field__label')}>
                  {!colorOnlyError.includes('anti-graffiti-coating') && errors['anti-graffiti-coating'] && (
                    <FormFieldDescription
                      id={`${antiGraffitiCoatingId}-description`}
                      invalid
                      className={`invalid-description--${errors['anti-graffiti-coating'].type}`}
                    >
                      {errors['anti-graffiti-coating']?.message.toString()}
                    </FormFieldDescription>
                  )}
                  <FormLabel htmlFor={`${antiGraffitiCoatingId}-true`}>
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
                </Paragraph>
                <Paragraph className={clsx('utrecht-form-field__label')}>
                  <FormLabel htmlFor={`${antiGraffitiCoatingId}-false`}>
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
                </Paragraph>
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
                className={style['utrecht-textbox--example-family-name']}
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={tussenvoegselsId}>
                  {unclearLabel === true || unclearLabel.includes('tussenvoegsels')
                    ? 'Tussenvoegsel(s)'
                    : 'Tussenvoegsel een of meerdere'}
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
                className={style['utrecht-textbox--example-voorvoegsel']}
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor={voorlettersId}>
                  {unclearLabel === true || unclearLabel.includes('voorletters')
                    ? 'Voorletter(s)'
                    : 'Voorletters (een of meerdere)'}
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
                className={style['utrecht-textbox--example-voorletters']}
              />
            </FormField>
            {unnecessaryQuestions === true ||
              (unnecessaryQuestions.includes('gender') && (
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
                className={style['utrecht-textbox--example-mail']}
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
                className={
                  telNational ? style['utrecht-textbox--example-tel-national'] : style['utrecht-textbox--example-tel']
                }
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
