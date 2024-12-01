import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Bingo } from '@site/src/components/Bingo';
import Layout from '@theme/Layout';
import {
  Heading2,
  PageContent,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { Heading1 } from '@utrecht/component-library-react/dist/css-module';

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title} - homepage`}>
      <PageContent>
        <Heading1>Formulieren Workshop - 23 mei 2023</Heading1>
        <UnorderedList>
          <UnorderedListItem>
            <Link className="utrecht-link" to="/bingo/voorbeeld-met-fouten-1">
              Graffiti formulier met fouten #1
            </Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link className="utrecht-link" to="/bingo/voorbeeld-met-fouten-2">
              Graffiti formulier met fouten #2
            </Link>
          </UnorderedListItem>
        </UnorderedList>
        <Heading2>BINGO!</Heading2>
        <Paragraph>Speel de veelgemaakte fouten bingo en win!</Paragraph>
        <Bingo
          items={[
            'Label die geen focus geeft',
            'Vragen om invoer te herhalen',
            'Haakje(s) voor afkorting(en)',
            'Taal niet consistent',
            'Invoerfout alleen met kleur aangegeven',
            'Vragen om onnodige informatie',
            'Naam of e-mailadres zonder autocomplete',
            'Alle tekstvelden zijn even lang',
            'Tekstvelden in kolommen of in een tabel',
            'Foutmelding voor je klaar bent met invoeren',
            'Geen uitleg waarom e-mail of telefoonnummer nodig zijn',
            'Je kunt niet van begin tot eind met de Tab-toets door het formulier',
            'Onduidelijk waar focus is als je met de Tab-toets door het forulier gaat',
            'Buttons staan aan het eind van de regel',
            'Moeilijke afkortingen en jargon worden niet uitgelegd',
            'Belangrijke informatie in een tooltip of placeholder',
            'E-mailadres user+inbox@example.com is invalide',
            'Postcode moet per se mét of zónder spatie',
            'Contactgegevens kunnen niet automatisch ingevuld worden met DigiD',
            'Als je Google Translate gebruikt wordt je invoer vernacheld op de controlepagina',
            'De naam van het formulier of de stap van het formulier staat niet in de titel van de browser tab of geschiedenis',
            'Onduidelijke invoerfoutmelding: “Invoer klopt niet! Pas het aan!”',
            'Maximum lengte te kort: max 6 voor postcode, minder dan 200 voor voornaam of achternaam, maximaal 10 voor telefoonnummer',
            'Select met 5 opties of minder',
          ]}
        />
      </PageContent>
    </Layout>
  );
};

export default Home;
