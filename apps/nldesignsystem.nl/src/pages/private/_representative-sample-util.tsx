import { IconChevronRight } from '@nl-design-system-community/documentation-components/src/functional-icon/index.tsx';
import { Icon } from '@nl-design-system-community/documentation-components/src/icon/icon.tsx';
import {
  LinkList,
  LinkListLink,
} from '@nl-design-system-community/documentation-components/src/link-list/link-list.tsx';

const representativeSample = [
  { href: '/', label: 'Homepage' },
  { href: '/sitemap', label: 'Sitemap' },
  {
    href: '/events/design-systems-week-2026/tijdschema/',
    label: 'Tijdschema tabel',
  },
  { href: '/community/', label: 'Navigatie-pagina met cards' },
  { href: '/componenten/', label: 'Componenten-overzicht' },
  { href: '/button/', label: 'Component-detail-pagina voor Candidate: Button' },
  { href: '/note/', label: 'Component-detail-pagina voor Community: Note' },
  { href: '/logo/', label: 'Component-detail-pagina voor Help Wanted: Logo' },
  { href: '/events/heartbeat/videos/', label: 'NL Design System Heartbeat: video-overzicht van de ' },
  { href: '/events/design-systems-week-2025/programma/', label: 'Design Systems Week: huidig programma' },
  { href: '/events/design-systems-week-2024/programma/', label: 'Design Systems Week: video-overzicht' },
  { href: '/project/kernteam/', label: 'Cards met contactinfo voor kernteam' },
  { href: '/zoeken?query=button', label: 'Zoekresultaten: button' },
  {
    href: '/community/belangenorganisaties/aanmelden/',
    label: 'Formulier-pagina',
  },
  { href: '/community/sluit-je-aan/', label: 'Formulier in een grotere pagina' },
  { href: '/community/sluit-je-aan/bedankt/', label: 'Bevestigingspagina voor een aanmeldenformulier' },
  { href: '/wcag/2.4.1/', label: 'WCAG-succescriterium — uitgebreid voorbeeld met video en codevoorbeelden' },
  { href: '/wcag/2.2.1/', label: 'WCAG-succescriterium — uitgebreid voorbeeld met toetsenbord-instructies' },
  {
    href: '/wcag/1.4.1/',
    label: 'WCAG-succescriterium — uitgebreid voorbeeld met voorbeelden van ontoegankelijke afbeeldingen',
  },
  {
    href: '/wcag/1.3.1/',
    label: 'WCAG-succescriterium — voorbeeld met veel lijsten',
  },
  {
    href: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar/',
    label: "Richtlijn-pagina met do / don't / code voorbeeld",
  },
  { href: '/wcag/', label: 'WCAG-succescriteria-overzicht' },
  { href: '/toegankelijkheidsverklaring', label: 'Toegankelijkheidsrapport' },
  { href: '/handboek/estafettemodel/', label: 'Documentatiepagina met widget voor Estafettemodel' },
  { href: '/handboek/designer/figma-structuur/', label: 'Documentatiepagina met infographics' },
  { href: '/handboek/huisstijl/basis-tokens/', label: 'Documentatiepagina met technische documentatie' },
  {
    href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/',
    label: 'Documentatiepagina met toegankelijke en ontoegankelijke voorbeelden',
  },
  {
    href: '/events/design-systems-week-2025/en/program/',
    hrefLang: 'en',
    label:
      "Pagina 4 niveau's diep in navigatie-hierarchie, met gemengde Engelstalige en Nederlandstalige navigatie, Engelstalige content",
  },
  { href: '/handboek/designer/figma-structuur/', label: 'Overzicht van design tokens API' },
  { href: '/slack/', label: 'Documentatiepagina met mix van interne en externe links' },
  { href: '/privacyverklaring/', label: 'Privacyverklaring' },
  { href: '/woordenlijst/', label: 'Woordenlijst' },
  { href: '/CHANGELOG/', label: 'Changelog' },
];

export const RepresentativeSampleLinkList = () => (
  <LinkList>
    {representativeSample.map(({ href, hrefLang, label }) => (
      <LinkListLink
        key={href}
        href={href}
        hrefLang={hrefLang}
        icon={
          <Icon>
            <IconChevronRight />
          </Icon>
        }
      >
        {label}
      </LinkListLink>
    ))}
  </LinkList>
);
