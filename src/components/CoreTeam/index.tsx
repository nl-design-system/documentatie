import React, { ComponentType, ReactNode, SVGProps } from 'react';
import clsx from 'clsx';
import style from './CoreTeam.module.css';
import { Card, CardContent, CardGroup, CardIllustration } from '../CardGroup';
import Peter from './avatars/kernteam_peter.svg';
import Robbert from './avatars/kernteam_robbert.svg';
import Yolijn from './avatars/kernteam_yolijn.svg';
import Jeffrey from './avatars/kernteam_jeffrey.svg';
import Andrea from './avatars/kernteam_andrea.svg';
import Hidde from './avatars/kernteam_hidde.svg';
import { Heading, HeadingGroup, Link, Paragraph } from '@utrecht/component-library-react';

interface TeamMember {
  Avatar: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  role: string;
  email: string;
  slack: { mention: string; id: string };
  description?: ReactNode;
}

const coreteam: TeamMember[] = [
  {
    Avatar: Peter,
    name: 'Peter Berrevoets',
    role: 'Projectleider',
    email: 'peter.berrevoets@ictu.nl',
    slack: { mention: '@Peter Berrevoets', id: 'U04J217KA67' },
    description: (
      <>
        <Paragraph>
          Peter is projectleider bij NL Design System. Hij heeft de overheid al van diverse kanten kunnen zien en werkt
          al sinds 2001 bij ICTU in diverse rollen, projecten en programma's.
        </Paragraph>
        <Paragraph>
          Oorspronkelijk komt hij uit Den Haag, maar hij woont inmiddels in het mooie Brabant. Als Peter op vrijdag niet
          aan het werk is kun je hem daar als barman achter de tap vinden.
        </Paragraph>
      </>
    ),
  },
  {
    Avatar: Robbert,
    name: 'Robbert Broersma',
    role: 'Tech lead',
    email: 'robbert.broersma@ictu.nl',
    slack: { mention: '@Robbert', id: 'U019X17U5HQ' },
    description: (
      <>
        <Paragraph>
          Robbert is tech-lead van NL Design System. Met zijn ervaring bij andere Design Systems kent hij zowel de
          valkuilen van een team overstijgend Design System als de waarde van het hergebruik van stabiele, toegankelijke
          componenten.
        </Paragraph>
        <Paragraph>
          Hij werkt graag online samen met verschillene organisaties om dit community gedragen Design System neer te
          zetten. Zijn passie voor keukengerei is daarbij niet te missen! RVS met een haakje? Dan kun je het
          waarschijnlijk op zijn achtergrond vinden.
        </Paragraph>
      </>
    ),
  },
  {
    Avatar: Yolijn,
    name: 'Yolijn van der Kolk',
    role: 'Developer Relations',
    email: 'yolijn.vanderkolk@ictu.nl',
    slack: { mention: '@Yolijn', id: 'U01B7T1F24S' },
    description: (
      <>
        <Paragraph>
          Yolijn doet developer relations voor NL Design System. Bij eerdere projecten bleek al dat ze graag de schakel
          is tussen de component ontwikkelaars en de verscheidenheid aan organisaties die het white-label design system
          afnemen en aanpassen naar hun eigen Design Tokens.
        </Paragraph>
        <Paragraph>
          Ontdekken wat de gemene deler is tussen componenten en stijlen bij verschillende applicaties? Dat is precies
          de puzzel waar je haar met een goede koffie voor wakker mag maken.
        </Paragraph>
      </>
    ),
  },
  {
    Avatar: Jeffrey,
    name: 'Jeffrey Lauwers',
    role: 'Designer',
    email: 'jeffrey.lauwers@ictu.nl',
    slack: { mention: '@Jeffrey Lauwers', id: 'U0412KZ9TV1' },
    description: (
      <>
        <Paragraph>
          Jeffrey vervult binnen het NL Design System de designrol. Eerder realiseerde hij design systems voor het
          Ministerie van VWS, Nederlandse Spoorwegen, Nationale Nederlanden en Randstad.
        </Paragraph>
        <Paragraph>
          Naast een passie voor Design Systems en Ajax heeft Jeffrey een passie voor toegankelijkheid.
        </Paragraph>
      </>
    ),
  },
  {
    Avatar: Andrea,
    name: 'Andrea Busse',
    role: 'Developer',
    email: 'andrea.busse@ictu.nl',
    slack: { mention: '@Andrea Busse', id: 'U04LLAFJQP7' },
    description: (
      <>
        <Paragraph>
          Andrea is front-end developer bij het NL Design System. Ze is opgegroeid in Duitsland en na haar studie
          verhuisd naar Nederland.
        </Paragraph>
        <Paragraph>
          Buiten werk houd ze zich graag bezig met fotografie, haar planten, aikido, en het zetten van heel goede
          koffie.
        </Paragraph>
      </>
    ),
  },
  {
    Avatar: Hidde,
    name: 'Hidde de Vries',
    role: 'Developer Relations & Accessibility expert',
    email: 'hidde.devries@ictu.nl',
    slack: { mention: '@Hidde', id: 'UA17NJHTR' },
    description: (
      <>
        <Paragraph>
          Hidde werkt als toegankelijkheid expert voor NL Design System. Hij heeft zich de afgelopen jaren intensief
          beziggehouden met design systems en digitale toegankelijkheid, dat laatste onder meer bij het W3C. Daar was
          hij betrokken bij de ontwikkeling en promotie van toegankelijkheidsstandaarden als WCAG en ATAG.
        </Paragraph>
        <Paragraph>
          Hij wordt blij van espresso tonics en van heldere, to-the-point uitleg waar developers verder mee kunnen.
        </Paragraph>
      </>
    ),
  },
];

export const CoreTeam = ({ headingLevel }: { headingLevel: number }) => {
  return (
    <CardGroup appearance="large">
      {coreteam.map(({ Avatar, name, role, description, email, slack }) => {
        return (
          <Card appearance="large" className={clsx(style['core-team__card'])} component="section" key={name}>
            <CardIllustration className={clsx(style['core-team__illustration'])}>
              <Avatar className={clsx(style['core-team__avatar'], style['core-team__avatar--peter'])} />
            </CardIllustration>
            <CardContent className={clsx(style['core-team__content'])}>
              <HeadingGroup className={clsx(style['core-team__heading'])}>
                <Heading level={headingLevel} className={clsx(style['core-team__heading-title'])}>
                  {name}
                </Heading>
                <Paragraph className={clsx(style['core-team__heading-subtitle'])}>{role}</Paragraph>
              </HeadingGroup>
              <div className={clsx(style['core-team__description'])}>{description}</div>

              <Paragraph>
                Email adres: <Link href={`mailto:${email}`}>{email}</Link>
                <br />
                Slack: <Link href={`https://codefornl.slack.com/team/${slack.id}`}>{slack.mention}</Link>
              </Paragraph>
            </CardContent>
          </Card>
        );
      })}
    </CardGroup>
  );
};

export default CoreTeam;
