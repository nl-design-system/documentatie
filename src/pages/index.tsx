import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageHero from '../components/HomepageHero';
import { HomepageActions } from '../components/HomepageActions';
import { HomepageAction } from '../components/HomepageAction';
import { HomepageTeasers } from '../components/HomepageTeasers';
import { HomepageTeaser } from '../components/HomepageTeaser';
import { HomepageFooter } from '../components/HomepageFooter';

// OpenGemeenten iconen tmp
const OGComponenten = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-hidden="true" fill="currentColor">
    <title id="id-b608402ce49be398aa601787">Bouwprojecten</title>
    <path d="M18,5.9h-4L6,11.9v3h7v24.1H7v3H25v-3h-6V14.9h14v8.82h1c.55,0,1,.45,1,1s-.45,1-1,1-1-.45-1-1h-2c0,1.65,1.35,3,3,3s3-1.35,3-3c0-1.3-.84-2.4-2-2.82v-7h7l-2-3h-7l-15-6h0Zm.75,6l-.46-3.69,9.42,3.69h-8.96Zm-9.36,0l4.26-3.15-.39,3.15h-3.86Zm7.61,7.03l-2-2v-2.03h2v4.03h0Zm0,6.88l-2-2v-2.9l2,2v2.9Zm0,7.1l-2-2v-2.9l2,2v2.9Zm0,6.1l-2-.1v-4l2,2v2.1Zm23-8.1h-12v11h12v-11h0Z"></path>
  </svg>
);

const OGRichtlijn = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-hidden="true" fill="currentColor">
    <title id="id-ee0c4e20418139aeea6d4166">Participatie checklist</title>
    <path d="m41.04 16.78-3.82-3.82c-.64-.64-1.49-.96-2.33-.96s-1.69.32-2.33.96l-13.72 13.7-3.26 9.85c-.34 1.03.45 2.01 1.44 2.01.16 0 .32-.03.49-.08l9.84-3.29 13.68-13.71a3.308 3.308 0 0 0 0-4.66ZM25.5 32.74l-3.69 1.29-1.85-1.85 1.28-3.68 9.4-9.4 1.41 1.41-9.03 9.03 1.41 1.41 9.03-9.03 1.41 1.41-9.37 9.39Zm13.42-13.45L37 21.21l-4.24-4.24 1.92-1.91a.288.288 0 0 1 .42 0l3.82 3.82c.11.11.11.3 0 .42Z"></path>
    <path d="m23.76 26.01.08.08.01-.01-.09-.09v.02zM19.8 8.11 17.68 6l-6.36 6.36-3.19-3.18L6 11.29l5.31 5.31 8.49-8.49zM19.8 20.94l-2.12-2.12-6.36 6.36L8.13 22 6 24.12l5.31 5.31 8.49-8.49zM14.34 36.86c-.58-.58-1.53-.58-2.11 0l-.9.9-3.2-3.18L6 36.7l5.31 5.31 3.03-3.03c.58-.58.58-1.53 0-2.12Z"></path>
  </svg>
);

const OGVoorbeeld = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-hidden="true" fill="currentColor">
    <title id="id-daf49c28e18436fd65e1ab4f">Computer</title>
    <path d="M39 7.98H9c-1.66 0-3 1.34-3 3v20c0 1.66 1.34 3 3 3h13.51v3h-4.22c-1.53 0-2.76 1.42-2.76 3l17.59.03c0-1.67-1.31-3.03-2.93-3.03h-4.68v-3H39c1.66 0 3-1.34 3-3v-20c0-1.66-1.34-3-3-3Zm0 23H9v-20h30v20Zm-12-5h-8v-2h8v2Zm-12-2h2v2h-2v-2Zm2-6h-2v-2h2v2Zm16 0H19v-2h14v2Zm-16 4h-2v-2h2v2Zm16 0H19v-2h14v2Z"></path>
  </svg>
);

const OGVideo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-hidden="true" fill="currentColor">
    <title id="id-8bdf8682a271f258d31e07bc">Participatie pitch</title>
    <path d="M16 39h12v3H16v-3Zm7-3.41V37h3v-1c0-2.76-2.22-5-4.98-5H11c-2.81 0-5 2.2-5 5.03L6.02 42H9v-6.41c0-.88.71-1.59 1.59-1.59h10.83c.88 0 1.59.71 1.59 1.59ZM8 22c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8Zm3.07 0c0 2.72 2.21 4.93 4.93 4.93s4.93-2.21 4.93-4.93c0-.54-.11-1.06-.27-1.55-.96-.38-1.86-.94-2.64-1.72-.05-.05-.09-.12-.15-.17-1.53 1.39-3.54 2.25-5.77 2.25-.29 0-.56-.03-.84-.06-.11.4-.18.81-.18 1.25ZM40.5 6h-27c-.83 0-1.5.67-1.5 1.5v5.34c.93-.41 1.94-.69 3-.8V9h24v17H25.16c-.5 1.12-1.19 2.14-2.04 3h17.39c.83 0 1.5-.67 1.5-1.5v-20c0-.83-.67-1.5-1.5-1.5Zm-11.73 8.75L24.01 12v4.07a9.873 9.873 0 0 1 1.97 5.79l2.79-1.61 4.76-2.75-4.76-2.75Z"></path>
  </svg>
);

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - homepage`}
      description="NL Design System samenwerken aan componenten en richtlijnen voor een begrijpelijke, gebruiksvriendelijke én toegankelijke online dienstverlening"
    >
      <HomepageHero
        title="Over het NL Design System"
        ctaLink="meedoen/introductie"
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
          <HomepageAction title="Componenten" href="componenten/" icon={OGComponenten}>
            <p>Kant en klare, geteste componenten om digitale producten mee te maken.</p>
          </HomepageAction>
          <HomepageAction title="Richtlijnen" href="richtlijnen/" icon={OGRichtlijn}>
            <p>Richtlijnen over onder meer taalgebruik, toegankelijkheid en inclusie.</p>
          </HomepageAction>
          <HomepageAction title="Voorbeelden" href="voorbeelden/" icon={OGVoorbeeld}>
            <p>Voorbeeld applicaties gemaakt met richtlijnen en componenten uit het NL Design System.</p>
          </HomepageAction>
          <HomepageAction title="Videos" href="videos/" icon={OGVideo}>
            <p>Opnames van NL Design System sessies.</p>
          </HomepageAction>
        </HomepageActions>
        <HomepageTeasers>
          <HomepageTeaser title="Meedoen" cta=" Vertel me meer" ctaLink="meedoen/">
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
              Het NL Design System wordt ontwikkeld door <a href="meedoen/kernteam/">een vast kernteam</a> bij Gebruiker
              Centraal.
            </p>
          </div>
          <div>
            <h2>Samenwerking</h2>
            <p>
              Met <a href="meedoen/">een community</a> werken we aan een begrijpelijke, gebruiksvriendelijke én
              toegankelijke online dienstverlening voor overheidsorganisaties.
            </p>
          </div>
        </HomepageFooter>
      </main>
    </Layout>
  );
}
