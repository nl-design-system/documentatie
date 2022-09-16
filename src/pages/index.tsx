import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageHero from '../components/HomepageHero';
import { HomepageActions } from '../components/HomepageActions';
import { HomepageAction } from '../components/HomepageAction';
import { HomepageTeasers } from '../components/HomepageTeasers';
import { HomepageTeaser } from '../components/HomepageTeaser';
import { HomepageFooter } from '../components/HomepageFooter';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - homepage`}
      description="NL Design System samenwerken aan componenten en richtlijnen voor een begrijpelijke, gebruiksvriendelijke én toegankelijke online dienstverlening"
    >
      <HomepageHero
        title="Over het NL Design System"
        ctaLink="docs/meedoen/introductie"
        cta="Meer over het NL Design System"
      >
        {
          <>
            <p>
              In het NL Design System verzamelen we principes, handvatten, elementen, patronen en richtlijnen. Zo kan de
              hele Nederlandse overheid samenwerken aan een begrijpelijke, gebruiksvriendelijke én toegankelijke online
              dienstverlening.
            </p>
          </>
        }
      </HomepageHero>
      <main>
        <HomepageActions>
          <HomepageAction title="Componenten" href="docs/componenten/">
            <p>Kant en klare, geteste componenten om digitale producten mee te maken.</p>
          </HomepageAction>
          <HomepageAction title="Richtlijnen" href="docs/richtlijnen/">
            <p>Richtlijnen over onder meer taalgebruik, toegankelijkheid en inclusie.</p>
          </HomepageAction>
          <HomepageAction title="Voorbeelden" href="docs/voorbeelden/">
            <p>Voorbeeld applicaties gemaakt met richtlijnen en componenten uit het NL Design System.</p>
          </HomepageAction>
        </HomepageActions>
        <HomepageTeasers>
          <HomepageTeaser title="Meedoen" cta=" Vertel me meer" ctaLink="docs/meedoen/">
            <p>
              Ben je benieuwd hoe jij kunt bijdragen aan het NL Design System? Meedoen kan namelijk op vele manieren.
            </p>
          </HomepageTeaser>
          <HomepageTeaser
            title="Blijf op de hoogte"
            cta="Inschrijven op de nieuwsbrief"
            ctaLink="https://designsystem.gebruikercentraal.nl/nieuwsbrieven/"
          >
            <p>Wil jij niets missen van de ontwikkelingen van het NL Design System?</p>
            <ul>
              <li>
                <a href="https://www.gebruikercentraal.nl/agenda/soort/nl-design-system/">
                  Neem deel aan onze 2-wekelijkse Heartbeat-sessies
                </a>
              </li>
              <li>
                <a href="https://designsystem.gebruikercentraal.nl/nieuwsbrieven/">
                  Schrijf je in voor onze nieuwsbrief
                </a>
              </li>
              <li>
                <a href="https://designsystem.gebruikercentraal.nl/blogs-nieuws/">
                  Lees meer achtergrondinformatie op onze blogpagina
                </a>
              </li>
            </ul>
          </HomepageTeaser>
        </HomepageTeasers>
        <HomepageFooter>
          <div>
            <h2>Over het kernteam</h2>
            <p>
              Het NL Design System wordt ontwikkeld door <a href="docs/meedoen/kernteam/">een vast kernteam</a> bij
              Gebruiker Centraal.
            </p>
          </div>
          <div>
            <h2>Samenwerking</h2>
            <p>
              Met <a href="docs/meedoen/">een community</a> werken we aan een begrijpelijke, gebruiksvriendelijke én
              toegankelijke online dienstverlening voor overheidsorganisaties.
            </p>
          </div>
        </HomepageFooter>
      </main>
    </Layout>
  );
}
