import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageHero from "../components/HomepageHero";
import { HomepageActions } from "@site/src/components/HomepageActions";
import { HomepageAction } from "@site/src/components/HomepageAction";
import { HomepageTeasers } from "@site/src/components/HomepageTeasers";
import { HomepageTeaser } from "@site/src/components/HomepageTeaser";
import { HomepageFooter } from "@site/src/components/HomepageFooter";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - homepage`}
      description="NL Design System samenwerken aan componenten en richtlijnen voor een begrijpelijke, gebruiksvriendelijke én toegankelijke online dienstverlening"
    >
      <HomepageHero
        title="Over het NL Design System"
        ctaLink="docs/algemeen/"
        cta="Meer over het NL Design System"
      >
        {
          <>
            <p>
              De Agenda Digitale Overheid stelt dat overheidsdienstverlening
              toegankelijk en begrijpelijk moet zijn voor iedereen. Hiervoor
              zijn consistent ontworpen diensten en websites nodig.
            </p>
            <p>
              De Agenda Digitale Overheid stelt dat overheidsdienstverlening
              toegankelijk en begrijpelijk moet zijn voor iedereen. Hiervoor
              zijn consistent ontworpen diensten en websites nodig. En daarom
              gaan we tussen overheidsorganisaties principes, interactiepatronen
              en code delen via een gezamenlijk design system. Dit NL Design
              System draagt niet alleen bij aan gebruiksvriendelijkere diensten
              van een betere kwaliteit en toegankelijkheid. Het helpt ook dubbel
              werk te voorkomen.
            </p>
            <p>
              Het kernteam bestaat uit projectleider Angela Imhof, lead
              developer Robbert Broersma, front-end developer Yolijn van der
              Kolk en designer Rogier Barendregt.
            </p>
          </>
        }
      </HomepageHero>
      <main>
        <HomepageActions>
          <HomepageAction title="Documentie" href="docs/algemeen/">
            <p>Introductietekst over documentatie</p>
          </HomepageAction>
          <HomepageAction title="Patronen" href="docs/patronen/">
            <p>Introductietekst over patronen</p>
          </HomepageAction>
          <HomepageAction title="Componenten" href="docs/componenten/">
            <p>Introductietekst over componenten</p>
          </HomepageAction>
          <HomepageAction title="Voorbeelden" href="docs/voorbeelden/">
            <p>Introductietekst over voorbeelden</p>
          </HomepageAction>
        </HomepageActions>
        <HomepageTeasers>
          <HomepageTeaser
            title="Meedoen"
            cta="Ik wil meedoen"
            ctaLink="docs/meedoen/"
          >
            <p>
              Hier komt een stukje tekst en een visual ter ondersteuning. Deze
              blokken worden anders qua stijl dan de blokken hierboven.
            </p>
          </HomepageTeaser>
          <HomepageTeaser
            title="Blijf op de hoogte"
            cta="Inschrijven op de nieuwsbrief"
            ctaLink="https://designsystem.gebruikercentraal.nl/nieuwsbrieven/"
          >
            <p>
              Hier komt een call-to-action voor het inschrijven van de
              nieuwsbrief
            </p>
            <p> Ook komen hier contact mogelijkheden.</p>
            <p> Ook dit blok wort qua stijl anders dan de blokken hierboven.</p>
          </HomepageTeaser>
        </HomepageTeasers>
        <HomepageFooter>
          <div>
            <h2>Over het kernteam</h2>
            <p>
              Het kernteam bestaat uit projectleider Angela Imhof, lead
              developer Robbert Broersma, front-end developer Yolijn van der
              Kolk en designer Rogier Barendregt.
            </p>
            <p>
              <Link to="docs/algemeen">Meer over het kernteam.</Link>
            </p>
            <p>
              <Link to="https://gebruikercentraal.nl">
                Meer over Gebruiker Centraal.
              </Link>
            </p>
          </div>
          <div>
            <h2>Samenwerking</h2>
            <p>
              Het kernteam van het NL Design System werkt onder andere samen met
              de volgende organisaties:
            </p>
          </div>
        </HomepageFooter>
      </main>
    </Layout>
  );
}
