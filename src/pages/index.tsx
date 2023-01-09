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
    <path d="M28,42h12v-11h-12v11Zm2-9h8v7h-8v-7Zm-11-15h14v6h1c.55,0,1,.45,1,1s-.45,1-1,1-1-.45-1-1h-2c0,1.65,1.35,3,3,3s3-1.35,3-3c0-1.3-.84-2.4-2-2.82v-4.18h7l-3-6h-6l-15-6h-4L6,12v6h7v22H6v2H26v-2h-7V18Zm8.71-6h-8.96l-.46-3.69,9.42,3.69Zm-11.94-4h.47l.5,4h-1.47l.5-4Zm-2.12,.85l-.39,3.15h-3.86l4.26-3.15Zm-5.64,7.15v-2h29.8l1,2H8Zm9,21.23v2.77h-2v-6.59l2,2v1.81Zm0-8.64v4l-2-2v-6l2,2v2Zm0-8.56v3.73l-2-2v-3.76h2v2.03Z" />
  </svg>
);

const OGRichtlijn = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-hidden="true" fill="currentColor">
    <path d="M11.25,29l-5.13-5.13,1.43-1.41,3.71,3.7,6.32-6.32,1.41,1.41-7.75,7.75ZM19,7.25l-1.41-1.41-6.32,6.32-3.71-3.7-1.43,1.41,5.13,5.13,7.75-7.75Zm-6.15,30.48l-1.58,1.58-3.71-3.7-1.43,1.41,5.13,5.13,3.07-3.07c.37-.37,.37-.98,0-1.35-.41-.41-1.07-.41-1.48,0Zm28.59-19.81l-.05,.05-2.12,2.12-1.41,1.41-11.31,11.31h0s-8.79,3.1-8.79,3.1c-.85,.3-1.67-.52-1.37-1.37l3.11-8.79h0s11.31-11.32,11.31-11.32l1.41-1.41,2.12-2.12,.03-.03c.76-.76,2-.76,2.76,0l.03,.03,4.24,4.24,.05,.05c.75,.75,.75,1.97,0,2.73Zm-5,2.17l-1.41-1.41-10.61,10.61-1.41-1.41,10.61-10.61-1.41-1.41-10.98,10.98-1.29,3.63,1.9,1.9,3.63-1.29,10.98-10.98Zm3.54-3.54l-4.24-4.24-2.12,2.12,4.24,4.24,2.12-2.12Z" />
  </svg>
);

const OGVoorbeeld = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-hidden="true" fill="currentColor">
    <path d="M28,25.98h-10v-2h10v2Zm6-10H18v2h16v-2Zm-18,0h-2v2h2v-2Zm18,4H18v2h16v-2Zm8-9V30.98c0,1.66-1.34,3-3,3h-14v4.02h6c1.1,0,2,.9,2,2H15c0-1.1,.9-2,2-2h6v-4.02H9c-1.66,0-3-1.34-3-3V10.98c0-1.66,1.34-3,3-3h30c1.66,0,3,1.34,3,3Zm-2-.98H8v22H40V10ZM16,23.98h-2v2h2v-2Zm0-4h-2v2h2v-2Z" />
  </svg>
);

const OGVideo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-hidden="true" fill="currentColor">
    <path d="M16,30c4.42,0,8-3.58,8-8s-3.58-8-8-8-8,3.58-8,8,3.58,8,8,8Zm0-14c2.7,0,4.99,1.79,5.74,4.25-1.02-.39-1.92-.99-2.63-1.79l-1.27-1.26-1.3,1.28h0c-1.25,1.38-3.02,2.19-4.91,2.19-.48,0-.95-.06-1.42-.17,.67-2.58,3.01-4.5,5.8-4.5Zm-4.38,6.67c2.38,0,4.63-1.05,6.21-2.86,.98,1.13,2.23,1.96,3.66,2.45l.5,.1c-.19,3.14-2.79,5.64-5.98,5.64s-5.72-2.42-5.97-5.5c.53,.11,1.06,.17,1.59,.17Z" />
    <path d="M36,17.37l-13-7.37v4.87c.84,.81,1.51,1.77,2.02,2.82v-4.26s6.98,3.97,6.98,3.97l-6.05,3.56c.03,.34,.05,.68,.05,1.03,0,.45-.04,.88-.1,1.31l10.1-5.94Z" />
    <path d="M40.5,6H13.5c-.83,0-1.5,.67-1.5,1.5v5.34c.63-.28,1.31-.49,2-.64v-4.2h26V27h-15.36c-.42,.73-.93,1.4-1.52,2h17.39c.83,0,1.5-.67,1.5-1.5V7.5c0-.83-.67-1.5-1.5-1.5Z" />
    <rect x="16" y="40" width="12" height="2" />
    <path d="M23.12,34.88c.53,.54,.84,1.24,.87,1.99v1.13h2v-.99h0c0-2.77-2.23-5.01-5-5.01H11c-2.81,0-5,2.2-5,5.03l.02,4.97h1.98v-4.97c0-1.73,1.29-3.03,3-3.03h10c.8,0,1.56,.31,2.12,.88Z" />
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
          <HomepageAction title="Richtlijnen" href="richtlijnen/tekst-en-taalgebruik" icon={OGRichtlijn}>
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
              Het NL Design System wordt ontwikkeld door <a href="meedoen/contact/">een vast kernteam</a> bij Gebruiker
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
