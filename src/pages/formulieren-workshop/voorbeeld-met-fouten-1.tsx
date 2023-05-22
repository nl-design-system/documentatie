import Link from '@docusaurus/Link';
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
}

const VoorbeeldMetFouten1 = ({
  wrongAutoComplete = false,
  defaultOptional = false,
  astrixOnly = false,
  nativeNumberInput = false,
  checkboxForRadio = false,
  unclearLabel = false,
  unnecessaryQuestions = false,
}: VoorbeeldMetFoutenProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data, errors);

  const formHeadingId = useId();

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
                <FormLabel htmlFor="8eb3222f-7c17-4b45-810d-85e8b444acc3">
                  Straatnaam{defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['straatnaam'] && (
                <FormFieldDescription
                  id="straatnaam-description"
                  invalid
                  className={`invalid-description--${errors['straatnaam'].type}`}
                >
                  {errors['straatnaam']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('straatnaam', { required: 'Verplicht: Vergeet niet een straatnaam in te vullen' })}
                type="text"
                id="8eb3222f-7c17-4b45-810d-85e8b444acc3"
                autoComplete={wrongAutoComplete ? 'street-address' : undefined}
                invalid={!!errors['straatnaam']}
                aria-describedby="straatnaam-description"
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor="79fbd5db-4cd2-451e-9825-94527026b042">
                  Huisnummer{defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['huisnummer'] && (
                <FormFieldDescription
                  id="huisnummer-description"
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
                  id="79fbd5db-4cd2-451e-9825-94527026b042"
                  aria-describedby="huisnummer-description"
                  invalid={!!errors['huisnummer']}
                />
              ) : (
                <Textbox
                  {...register('huisnummer', { required: 'Verplicht: Vergeet niet een huisnummer in te vullen' })}
                  type="text"
                  id="79fbd5db-4cd2-451e-9825-94527026b042"
                  inputMode="numeric"
                  aria-describedby="huisnummer-description"
                  invalid={!!errors['huisnummer']}
                />
              )}
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor="53750fb1-941f-4418-9f48-5c0fc74a06b6">
                  Toevoeging huisnummer{!defaultOptional && <span> {astrixOnly ? '*' : '(optioneel)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['huisnummer-toevoeging'] && (
                <FormFieldDescription
                  id="huisnummer-toevoeging-description"
                  invalid
                  className={`invalid-description--${errors['huisnummer-toevoeging'].type}`}
                >
                  {errors['huisnummer-toevoeging']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('huisnummer-toevoeging')}
                type="text"
                id="53750fb1-941f-4418-9f48-5c0fc74a06b6"
                aria-describedby="huisnummer-toevoeging-description"
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor="eda8f886-22ff-4664-9c1e-085c1c28387b">
                  Postcode{defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['postcode'] && (
                <FormFieldDescription
                  id="postcode-description"
                  invalid
                  className={`invalid-description--${errors['postcode'].type}`}
                >
                  {errors['postcode']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('postcode', { required: 'Verplicht: Vergeet niet een postcode in te vullen' })}
                type="text"
                id="eda8f886-22ff-4664-9c1e-085c1c28387b"
                autoComplete={wrongAutoComplete ? undefined : 'postal-code'}
                aria-describedby="postcode-description"
                invalid={!!errors['postcode']}
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor="112eceba-85d3-4135-a642-692ce37acafd">
                  Woonplaats{defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['woonplaats'] && (
                <FormFieldDescription
                  id="woonplaats-description"
                  invalid
                  className={`invalid-description--${errors['woonplaats'].type}`}
                >
                  {errors['woonplaats']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('woonplaats', { required: 'Verplicht: Vergeet niet een woonplaats in te vullen' })}
                type="text"
                id="112eceba-85d3-4135-a642-692ce37acafd"
                autoComplete={wrongAutoComplete ? undefined : 'postal-code'}
                aria-describedby="woonplaats-description"
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
                      id="anti-graffiti-coating-description"
                      invalid
                      className={`invalid-description--${errors['anti-graffiti-coating'].type}`}
                    >
                      {errors['anti-graffiti-coating']?.message.toString()}
                    </FormFieldDescription>
                  )}
                  <FormLabel htmlFor="2a5524f5-6ee8-4be1-90a1-87d0d619d2ee">
                    {checkboxForRadio ? (
                      <Checkbox
                        {...register('anti-graffiti-coating')}
                        className="utrecht-form-field__input"
                        id="2a5524f5-6ee8-4be1-90a1-87d0d619d2ee"
                        value="true"
                        aria-describedby="anti-graffiti-coating-description"
                        invalid={!!errors['anti-graffiti-coating']}
                      />
                    ) : (
                      <RadioButton
                        {...register('anti-graffiti-coating')}
                        className="utrecht-form-field__input"
                        id="2a5524f5-6ee8-4be1-90a1-87d0d619d2ee"
                        value="ja"
                        aria-describedby="anti-graffiti-coating-description"
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
                  <FormLabel htmlFor="3c6ff1c4-97ec-4ed9-bbe1-ab9b73176690">
                    {checkboxForRadio ? (
                      <Checkbox
                        {...register('anti-graffiti-coating')}
                        className="utrecht-form-field__input"
                        id="3c6ff1c4-97ec-4ed9-bbe1-ab9b73176690"
                        value="false"
                        aria-describedby="anti-graffiti-coating-description"
                        invalid={!!errors['anti-graffiti-coating']}
                      />
                    ) : (
                      <RadioButton
                        {...register('anti-graffiti-coating')}
                        className="utrecht-form-field__input"
                        id="3c6ff1c4-97ec-4ed9-bbe1-ab9b73176690"
                        value="nee"
                        aria-describedby="anti-graffiti-coating-description"
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
                <FormLabel htmlFor="49a26cd1-35d4-4a93-bd1c-eb93081104eb">
                  Aanvullende opmerkingen{!defaultOptional && <span> {astrixOnly ? '*' : '(optioneel)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['opmerkingen'] && (
                <FormFieldDescription
                  id="opmerkingen-description"
                  invalid
                  className={`invalid-description--${errors['opmerkingen'].type}`}
                >
                  {errors['opmerkingen']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textarea
                {...register('opmerkingen')}
                id="49a26cd1-35d4-4a93-bd1c-eb93081104eb"
                invalid={!!errors['opmerkingen']}
                aria-describedby="opmerkingen-description"
              />
            </FormField>
            <Heading3>Uw gegevens</Heading3>
            <Paragraph>
              Om u zo goed mogelijk te kunnen helpen, ontvangen we graag uw contactgegevens. Deze gegevens worden zonder
              uw toestemming niet aan derden verstrekt.
            </Paragraph>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor="51db9692-6906-4462-b01d-6932b82a2f9d">
                  Achternaam{defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['achternaam'] && (
                <FormFieldDescription
                  id="achternaam-description"
                  invalid
                  className={`invalid-description--${errors['achternaam'].type}`}
                >
                  {errors['achternaam']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('achternaam', { required: 'Verplicht: Vergeet niet een achternaam in te vullen' })}
                type="text"
                id="51db9692-6906-4462-b01d-6932b82a2f9d"
                autoComplete={wrongAutoComplete ? undefined : 'cc-family-name'}
                invalid={!!errors['achternaam']}
                aria-describedby="achternaam-description"
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor="33ce8d53-a687-40c2-9882-3ba78197cdfe">
                  {unclearLabel ? 'Tussenvoegsel(s)' : 'Tussenvoegsel een of meerdere'}
                  {!defaultOptional && <span> {astrixOnly ? '*' : '(optioneel)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['tussenvoegsels'] && (
                <FormFieldDescription
                  id="tussenvoegsels-description"
                  invalid
                  className={`invalid-description--${errors['tussenvoegsels'].type}`}
                >
                  {errors['tussenvoegsels']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('tussenvoegsels')}
                type="text"
                id="33ce8d53-a687-40c2-9882-3ba78197cdfe"
                autoComplete={wrongAutoComplete ? undefined : 'cc-family-name'}
                aria-describedby="tussenvoegsels-description"
                invalid={!!errors['tussenvoegsels']}
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor="1e2483b3-4df1-4e57-97ba-d324786f7a42">
                  {unclearLabel ? 'Voorletter(s)' : 'Voorletters (een of meerdere)'}
                  {defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['voorletters'] && (
                <FormFieldDescription
                  id="voorletters-description"
                  invalid
                  className={`invalid-description--${errors['voorletters'].type}`}
                >
                  {errors['voorletters']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('voorletters', { required: 'Verplicht: Vergeet niet minimaal 1 voorletter in te vullen' })}
                type="text"
                id="1e2483b3-4df1-4e57-97ba-d324786f7a42"
                autoComplete={wrongAutoComplete ? 'cc-family-name' : undefined}
                invalid={!!errors['voorletters']}
                aria-describedby="voorletters-description"
              />
            </FormField>
            {unnecessaryQuestions && (
              <FormField type="radio">
                <Fieldset>
                  <FieldsetLegend>
                    Geslacht{defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                  </FieldsetLegend>
                  <FormFieldDescription
                    id="geslacht-description"
                    invalid={!!errors['geslacht']}
                    className={clsx(!!errors['geslacht'] && `invalid-description--${errors['geslacht'].type}`)}
                  >
                    Selecteer 'Niet relevant' als u geen keuze wilt maken in geslacht
                  </FormFieldDescription>
                  <Paragraph>
                    <FormLabel htmlFor="257108e5-e780-4fa9-9efc-d28a67763461">
                      <RadioButton
                        {...register('geslacht', { required: true })}
                        className="utrecht-form-field__input"
                        id="257108e5-e780-4fa9-9efc-d28a67763461"
                        value="man"
                        aria-describedby="geslacht-description"
                        invalid={!!errors['geslacht']}
                      />
                      Man
                    </FormLabel>
                  </Paragraph>
                  <Paragraph>
                    <FormLabel htmlFor="50e2f3e0-76a6-4a3a-8dfe-b6957bc26694">
                      <RadioButton
                        {...register('geslacht', { required: true })}
                        className="utrecht-form-field__input"
                        id="50e2f3e0-76a6-4a3a-8dfe-b6957bc26694"
                        value="vrouw"
                        aria-describedby="geslacht-description"
                        invalid={!!errors['geslacht']}
                      />
                      Vrouw
                    </FormLabel>
                  </Paragraph>
                  <Paragraph>
                    <FormLabel htmlFor="d29fb6be-406c-42e0-b6d6-70e4a615fae7">
                      <RadioButton
                        {...register('geslacht', { required: true })}
                        className="utrecht-form-field__input"
                        id="d29fb6be-406c-42e0-b6d6-70e4a615fae7"
                        value="none"
                        aria-describedby="geslacht-description"
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
                <FormLabel htmlFor="eff633bd-88f9-466e-ac87-7e7eee73fb75">
                  E-mailadres
                  {defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['email'] && (
                <FormFieldDescription
                  id="email-description"
                  invalid
                  className={`invalid-description--${errors['email'].type}`}
                >
                  {errors['email']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('email', { required: 'Verplicht: Vergeet niet je email in te vullen' })}
                type="email"
                id="eff633bd-88f9-466e-ac87-7e7eee73fb75"
                autoComplete={wrongAutoComplete ? undefined : 'email'}
                invalid={!!errors['email']}
                aria-describedby="email-description"
              />
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor="ae37317a-3813-4660-a62b-86bb6c663cfe">
                  Telefoonnummer
                  {defaultOptional && <span> {astrixOnly ? '*' : '(verplicht)'}</span>}
                </FormLabel>
              </Paragraph>
              {errors['telefoonnummer'] && (
                <FormFieldDescription
                  id="telefoonnummer-description"
                  invalid
                  className={`invalid-description--${errors['telefoonnummer'].type}`}
                >
                  {errors['telefoonnummer']?.message.toString()}
                </FormFieldDescription>
              )}
              <Textbox
                {...register('telefoonnummer', { required: 'Verplicht: Vergeet niet je telefoonnummer in te vullen' })}
                type="tel"
                id="ae37317a-3813-4660-a62b-86bb6c663cfe"
                autoComplete={wrongAutoComplete ? undefined : 'tel'}
                invalid={!!errors['telefoonnummer']}
                aria-describedby="telefoonnummer-description"
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
