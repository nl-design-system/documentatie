import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import {
  ButtonGroup as ActionGroup,
  Heading2,
  Image,
  Paragraph,
} from '@utrecht/component-library-react/dist/css-module';
import { Card as TempCard, CardGroup, CardIllustration } from '../components/CardGroup';
import { Card } from '@utrecht/card-react/css';
import { Link } from '../components/Link';
import {
  ButtonLink,
  Heading1,
  Icon,
  SpotlightSection,
  Strong,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import { IconChevronRight } from '@tabler/icons-react';
import {
  DeveloperSVG,
  DesignerSVG,
  ContentSVG,
  ManagerSVG,
  GuidelineSVG,
  ComponentSVG,
  ExamplesSVG,
  UserResearchSVG,
} from '@site/src/components/Icons';
import { HeartbeatEpisode } from '../components/HeartbeatEpisode';
import './index.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - homepage`}
      description="NL Design System samenwerken aan componenten en richtlijnen voor een begrijpelijke, gebruiksvriendelijke én toegankelijke online dienstverlening"
      wrapperClassName="container--narrow"
    >
      <main>
        <SpotlightSection className="homepage-spotlight-section homepage-spotlight-section--hero">
          <div className="container">
            <Heading1>Samen bouwen aan betere digitale dienstverlening</Heading1>
            <Paragraph appearance="lead">
              NL Design System is geen gewoon design system. Het is een verzameling van design systems om samen te
              ontdekken we welke componenten écht werken in de praktijk. Zo werken we toe naar een Hall of Fame van
              gebruiksvriendelijke, toegankelijke componenten, patronen en templates.
            </Paragraph>
            <Heading2>Waarom meedoen?</Heading2>
            <UnorderedList>
              <UnorderedListItem>
                <Strong>Actieve community</Strong> die regelmatig kennis, ervaring en componenten deelt
              </UnorderedListItem>
              <UnorderedListItem>
                <Strong>Groeiende bibliotheek</Strong> gebaseerd op gebruikersonderzoek en praktijkervaring
              </UnorderedListItem>
              <UnorderedListItem>
                <Strong>Open source oplossingen</Strong> waar iedereen componenten kan gebruiken en bijdragen
              </UnorderedListItem>
              <UnorderedListItem>
                <Strong>Deelnemen op het niveau dat past</Strong>, stap voor stap, zonder licentiekosten
              </UnorderedListItem>
            </UnorderedList>
            <ActionGroup>
              <ButtonLink href="/handboek/introductie/" appearance="primary-action-button">
                Lees de introductie
              </ButtonLink>
              <ButtonLink href="/community/" appearance="secondary-action-button">
                Lees meer over de Community
              </ButtonLink>
            </ActionGroup>
          </div>
        </SpotlightSection>
        <div className="container">
          <Heading2>Waar begin je?</Heading2>
          <div className="homepage-card-group">
            <Card
              body="Meedoen met code? In het Handboek vind je alle informatie die je nodig hebt om aan de slag te gaan met de componenten, Storybook en design tokens."
              heading="Als je websites bouwt"
              headingLevel={3}
              href="/handboek/developer/overzicht"
              image={<DeveloperSVG />}
            ></Card>
            <Card
              body="Meedoen met Figma? In het Handboek vind je alle informatie die je nodig hebt om aan de slag te gaan met de componenten, Figma en design tokens."
              heading="Als je designs maakt"
              headingLevel={3}
              href="/handboek/designer/overzicht"
              image={<DesignerSVG />}
            ></Card>
            <Card
              body="Meedoen als contentmaker? Gebruik vandaag nog onze content richtlijnen bij het maken van toegankelijke webcontent."
              heading="Als je content beheert"
              headingLevel={3}
              href="/richtlijnen/content"
              image={<ContentSVG />}
            ></Card>
            <Card
              body="Meedoen als manager? Herbruikbare oplossingen die tijd en budget besparen, met business cases en implementatiestrategieën"
              heading="Als je projecten leidt"
              headingLevel={3}
              href="/handboek/manager/introductie"
              image={<ManagerSVG />}
            ></Card>
          </div>
        </div>
        <SpotlightSection className="homepage-spotlight-section homepage-spotlight-section--heartbeat">
          <div className="container">
            <Heading2>Bekijk de laatste updates</Heading2>
            <HeartbeatEpisode headingLevel={3} />

            <ActionGroup>
              <ButtonLink href="/events/heartbeat/aanmelden" appearance="primary-action-button">
                Meld je aan voor de Heartbeat
                <Icon>
                  <IconChevronRight />
                </Icon>
              </ButtonLink>
              <ButtonLink href="/events/heartbeat/videos" appearance="secondary-action-button">
                Bekijk andere Heartbeats
                <Icon>
                  <IconChevronRight />
                </Icon>
              </ButtonLink>
            </ActionGroup>
          </div>
        </SpotlightSection>

        <div className="container">
          <Heading2>Gebruik NL Design System</Heading2>
          <div className="homepage-card-group">
            <Card
              body="Fundamentele richtlijnen voor het toepassen van stijl elementen zoals typografie, kleuren en iconen."
              heading="Richtlijnen"
              headingLevel={3}
              href="/richtlijnen"
              image={<GuidelineSVG />}
              className="utrecht-card--ma-info"
            ></Card>
            <Card
              body="Een overzicht van herbruikbare, toegankelijke componenten voor formulieren, navigatie, tabellen en meer."
              heading="Componenten"
              headingLevel={3}
              href="/componenten"
              image={<ComponentSVG />}
              className="utrecht-card--ma-info"
            ></Card>
            <Card
              body="Een overzicht van patronen en templates om vaak voorkomende scenario's op een consistente, weloverwogen manier op te lossen."
              heading="Voorbeelden"
              headingLevel={3}
              href="/voorbeelden"
              image={<ExamplesSVG />}
              className="utrecht-card--ma-info"
            ></Card>
            <Card
              body="NL Design System verzamelt en publiceert gebruikersonderzoeken en faciliteert de community om samen te werken aan nieuwe onderzoeken."
              heading="Gebruikersonderzoek"
              headingLevel={3}
              href="/voorbeelden/onderzoek"
              image={<UserResearchSVG />}
              className="utrecht-card--ma-info"
            ></Card>
          </div>
        </div>

        <div className="container">
          <Heading2>Wie doen er al mee?</Heading2>
          <CardGroup appearance="small">
            <TempCard appearance="small" href="https://github.com/nl-design-system/utrecht">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__utrecht.svg"
                  alt="Gemeente Utrecht logo, naar Gemeente Utrecht op GitHub"
                />
              </CardIllustration>
            </TempCard>
            <TempCard appearance="small" href="https://github.com/nl-design-system/denhaag">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__denhaag.svg"
                  alt="Gemeente Den Haag logo, naar Gemeente Den Haag op GitHub"
                />
              </CardIllustration>
            </TempCard>
            <TempCard appearance="small" href="https://github.com/nl-design-system/amsterdam">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__amsterdam.svg"
                  alt="Gemeente Amsterdam logo, naar Gemeente Amsterdam op GitHub"
                />
              </CardIllustration>
            </TempCard>
            <TempCard appearance="small" href="https://github.com/nl-design-system/rotterdam">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__rotterdam.svg"
                  alt="Gemeente Rotterdam logo, naar Gemeente Rotterdam op GitHub"
                />
              </CardIllustration>
            </TempCard>
            <TempCard appearance="small" href="https://github.com/nl-design-system/tilburg">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__tilburg.png"
                  alt="Gemeente Tilburg logo, naar Gemeente Tilburg op GitHub"
                />
              </CardIllustration>
            </TempCard>
            <TempCard appearance="small" href="https://github.com/nl-design-system/rvo">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__rvo.svg"
                  alt="Rijksdienst voor Ondernemend Nederland logo, naar RVO op GitHub"
                />
              </CardIllustration>
            </TempCard>
            <TempCard appearance="small" href="https://github.com/nl-design-system/lux">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__logius.png"
                  alt="Logius logo, naar LUX op GitHub"
                />
              </CardIllustration>
            </TempCard>
            <TempCard appearance="small" href="https://github.com/nl-design-system/rijkshuisstijl-community">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__rijkshuisstijl-community.png"
                  alt="Rijkshuisstijl Community logo, naar Rijkshuisstijl Community op GitHub"
                />
              </CardIllustration>
            </TempCard>
          </CardGroup>
          <Paragraph className="homepage__paragraph">
            Naast de organisaties die componenten bijdragen doen{' '}
            <Link to="/community/wie-doet-mee">diverse andere organisaties</Link> mee in de community van NL Design
            System.
          </Paragraph>
        </div>
        <SpotlightSection className="homepage-spotlight-section homepage-spotlight-section--footer">
          <div className="container">
            <Heading2>Blijf op de hoogte</Heading2>
            <div className="homepage-card-group">
              <Card
                body="Sluit aan bij de 2-wekelijkse online bijeenkomst waarbij ontwikkelingen rondom het NL Design System worden besproken."
                heading="Heartbeat"
                headingLevel={3}
                href="/events/heartbeat/aanmelden"
              ></Card>
              <Card
                body="Meld je aan voor de nieuwsbrief en ontvang elke maand een update van de ontwikkelingen rondom het NL Design System."
                heading="Nieuwsbrief"
                headingLevel={3}
                href="/project/blijf-op-de-hoogte#nieuwsbrief"
              ></Card>
              <Card
                body="Wees welkom bij de 2-wekelijkse online bijeenkomst waar designers informatie, inzichten en tips uit te wisselen."
                heading=" Design Open Hour"
                headingLevel={3}
                href="/events/design-open-hour/aanmelden"
              ></Card>
              <Card
                body="Wees welkom bij de 2-wekelijkse online bijeenkomst waar developers vragen stellen, inzichten delen en tips uit te wisselen."
                heading=" Developer Open Hour"
                headingLevel={3}
                href="/events/developer-open-hour/aanmelden"
              ></Card>
            </div>
          </div>
        </SpotlightSection>
      </main>
    </Layout>
  );
}
