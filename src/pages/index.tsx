import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {
  ButtonGroup,
  ButtonLink,
  Heading1,
  Heading2,
  Heading3,
  Image,
  Paragraph,
  Strong,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { Card, CardContent, CardGroup, CardIllustration } from '../components/CardGroup';
import HomepageHero from '../components/HomepageHero';
import HomepageUpdates from '../components/HomepageUpdates';
import { Link } from '../components/Link';
import { HeartbeatEpisode } from '../components/HeartbeatEpisode';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - homepage`}
      description="NL Design System samenwerken aan componenten en richtlijnen voor een begrijpelijke, gebruiksvriendelijke én toegankelijke online dienstverlening"
      wrapperClassName="container--narrow"
    >
      <main>
        <HomepageHero>
          <Heading1>NL Design System</Heading1>
          <Paragraph lead>
            Samen met diverse overheidsorganisaties ontwikkelen we herbruikbare bouwblokken voor toegankelijke en
            gebruiksvriendelijke webapplicaties en websites.
          </Paragraph>
          <UnorderedList>
            <UnorderedListItem>
              <Strong>Actieve community</Strong> deelt regelmatig kennis, ervaring, componenten en verbeteringen
            </UnorderedListItem>
            <UnorderedListItem>
              <Strong>Componentenbibliotheek</Strong> beschikbaar voor efficiënt hergebruik
            </UnorderedListItem>
            <UnorderedListItem>
              <Strong>Herbruikbaar</Strong> voor iedere huisstijl. Open Source en platform-onafhankelijk
            </UnorderedListItem>
            <UnorderedListItem>
              <Strong>Goed onderbouwd</Strong> met praktijkervaring, richtlijnen en gebruikersonderzoek
            </UnorderedListItem>
          </UnorderedList>
          <Link href="/handboek/introductie">Lees meer over NL Design System</Link>
        </HomepageHero>
        <div className="container" style={{ paddingBlockEnd: '40px' }}>
          <Heading2>Doe mee</Heading2>
          <CardGroup appearance="medium">
            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading3>Developers</Heading3>
                  <Paragraph>
                    Meedoen als developer? In het Handboek vind je alle informatie die je nodig hebt om aan de slag te
                    gaan met de componenten, Storybook en design tokens.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link to="/handboek/developer/overzicht">Meer informatie voor developers</Link>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading3>Designers</Heading3>
                  <Paragraph>
                    Meedoen als designer? In het Handboek vind je alle informatie die je nodig hebt om aan de slag te
                    gaan met de componenten, Figma en design tokens.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link to="/handboek/designer/overzicht">Meer informatie voor designers</Link>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading3>Managers</Heading3>
                  <Paragraph>
                    Meedoen als manager? In de introductie voor managers in het Handboek kun je lezen wat meedoen
                    betekent
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link to="/handboek/manager/introductie">Meer informatie voor managers</Link>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading3>Contentmakers</Heading3>
                  <Paragraph>
                    Meedoen als contentmaker? Gebruik vandaag nog onze content richtlijnen bij het maken van
                    toegankelijke webcontent.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link to="/richtlijnen/content">Richtlijnen voor contentmakers.</Link>
                </Paragraph>
              </CardContent>
            </Card>
          </CardGroup>
        </div>
        <HomepageUpdates>
          <Heading2>Bekijk de laatste updates</Heading2>
          <HeartbeatEpisode headingLevel={3} />
          <ButtonGroup>
            <ButtonLink href="/events/heartbeat/aanmelden" appearance="primary-action-button">
              Meld je aan voor de Heartbeat
            </ButtonLink>
            <ButtonLink href="/events/heartbeat/videos" appearance="secondary-action-button">
              Bekijk alle Heartbeat videos
            </ButtonLink>
          </ButtonGroup>
        </HomepageUpdates>
        <div className="container">
          <Heading2>Gebruik NL Design System</Heading2>
          <CardGroup>
            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading2>Richtlijnen</Heading2>
                  <Paragraph>
                    Fundamentele richtlijnen voor het toepassen van stijl elementen zoals typografie, kleuren en iconen.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link to="/richtlijnen">Bekijk de richtlijnen</Link>
                </Paragraph>
              </CardContent>
            </Card>

            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading2>Componenten</Heading2>
                  <Paragraph>
                    Herbruikbare, toegankelijke componenten voor formulieren, navigatie, tabellen en meer. Inclusief
                    code en documentatie.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link to="/componenten">Bekijk de componenten</Link>
                </Paragraph>
              </CardContent>
            </Card>

            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading2>Handboek</Heading2>
                  <Paragraph>
                    Algemene informatie over het Estafettemodel en bijdragen van componenten en handleidingen voor
                    developers en designers.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link to="/handboek">Bekijk het handboek</Link>
                </Paragraph>
              </CardContent>
            </Card>

            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading2>Voorbeelden</Heading2>
                  <Paragraph>
                    Patronen en templates om vaak voorkomende scenario's op een consistente, weloverwogen manier op te
                    lossen.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link to="/voorbeelden">Bekijk de voorbeelden</Link>
                </Paragraph>
              </CardContent>
            </Card>
          </CardGroup>
        </div>
        <div className="container" style={{ paddingBlockEnd: '40px' }}>
          <Heading2>Wie doen er al mee?</Heading2>
          <CardGroup appearance="small">
            <Card appearance="small" href="https://github.com/nl-design-system/utrecht">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__utrecht.svg"
                  alt="Gemeente Utrecht logo, naar Gemeente Utrecht op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/denhaag">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__denhaag.svg"
                  alt="Gemeente Den Haag logo, naar Gemeente Den Haag op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/amsterdam">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__amsterdam.svg"
                  alt="Gemeente Amsterdam logo, naar Gemeente Amsterdam op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/rotterdam">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__rotterdam.svg"
                  alt="Gemeente Rotterdam logo, naar Gemeente Rotterdam op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/tilburg">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__tilburg.png"
                  alt="Gemeente Tilburg logo, naar Gemeente Tilburg op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/rvo">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__rvo.svg"
                  alt="Rijksdienst voor Ondernemend Nederland logo, naar RVO op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/lux">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__logius.png"
                  alt="Logius logo, naar LUX op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/rijkshuisstijl-community">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__rijkshuisstijl-community.png"
                  alt="Rijkshuisstijl Community logo, naar Rijkshuisstijl Community op GitHub"
                />
              </CardIllustration>
            </Card>
          </CardGroup>
          <Paragraph className="homepage__paragraph">
            Naast de organisaties die componenten bijdragen doen{' '}
            <Link to="/community/wie-doet-mee">diverse andere organisaties</Link> mee in de community van NL Design
            System.
          </Paragraph>
        </div>
        <HomepageUpdates>
          <Heading2>Blijf op de hoogte</Heading2>
          <CardGroup>
            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading3>Nieuwsbrief</Heading3>
                  <Paragraph>
                    Meld je aan voor de nieuwsbrief en ontvang elke maand een update van de ontwikkelingen rondom het NL
                    Design System.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link href="/project/blijf-op-de-hoogte#nieuwsbrief">Meld je aan voor de nieuwsbrief</Link>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading3>Blog</Heading3>
                  <Paragraph>
                    Op ons blog schrijven we over wat er speelt in het kernteam en de community. Ook kun je er meer
                    lezen over wat we doen en waarom.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link href="/blog">Lees het blog</Link>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading3>Design Open Hour</Heading3>
                  <Paragraph>
                    Wees welkom bij de 2-wekelijkse online bijeenkomst waar designers informatie, inzichten en tips uit
                    te wisselen.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link href="/events/design-open-hour/aanmelden">Meld je aan voor Design Open Hour</Link>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading3>Developer Open Hour</Heading3>
                  <Paragraph>
                    Wees welkom bij de 2-wekelijkse online bijeenkomst waar developers vragen stellen en tips uit te
                    wisselen.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link href="/events/developer-open-hour/aanmelden">Meld je aan voor Developer Open Hour</Link>
                </Paragraph>
              </CardContent>
            </Card>
          </CardGroup>
          <Paragraph>
            Benieuwd wat we nog meer doen?{' '}
            <Link to="/community/events/overzicht">Bekijk het overzicht van alle bijeenkomsten</Link>
          </Paragraph>
        </HomepageUpdates>
      </main>
    </Layout>
  );
}
