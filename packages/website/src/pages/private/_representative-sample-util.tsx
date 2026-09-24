import { LinkList, LinkListLink } from '@components/link-list/link-list';
import { IconChevronRight } from '@tabler/icons-react';

const representativeSample = [
  { label: 'Homepage', href: '/' },
  { label: 'Sitemap', href: '/sitemap' },
  {
    label: 'Tijdschema tabel',
    href: '/events/design-systems-week-2026/tijdschema/',
  },
  { label: 'Navigatie-pagina met cards', href: '/community/' },
  { label: 'Componenten-overzicht', href: '/componenten/' },
  { label: 'Component-detail-pagina voor Candidate: Button', href: '/button/' },
  { label: 'Component-detail-pagina voor Community: Note', href: '/note/' },
  { label: 'Component-detail-pagina voor Help Wanted: Logo', href: '/logo/' },
  { label: 'NL Design System Heartbeat: video-overzicht van de ', href: '/events/heartbeat/videos/' },
  { label: 'Design Systems Week: huidig programma', href: '/events/design-systems-week-2025/programma/' },
  { label: 'Design Systems Week: video-overzicht', href: '/events/design-systems-week-2024/programma/' },
  { label: 'Cards met contactinfo voor kernteam', href: '/project/kernteam/' },
  { label: 'Zoekresultaten: button', href: '/zoeken?query=button' },
  {
    label: 'Formulier-pagina',
    href: '/community/belangenorganisaties/aanmelden/',
  },
  { label: 'Formulier in een grotere pagina', href: '/community/sluit-je-aan/' },
  { label: 'Bevestigingspagina voor een aanmeldenformulier', href: '/community/sluit-je-aan/bedankt/' },
  { label: 'WCAG-succescriterium — uitgebreid voorbeeld met video en codevoorbeelden', href: '/wcag/2.4.1/' },
  { label: 'WCAG-succescriterium — uitgebreid voorbeeld met toetsenbord-instructies', href: '/wcag/2.2.1/' },
  {
    label: 'WCAG-succescriterium — uitgebreid voorbeeld met voorbeelden van ontoegankelijke afbeeldingen',
    href: '/wcag/1.4.1/',
  },
  {
    label: 'WCAG-succescriterium — voorbeeld met veel lijsten',
    href: '/wcag/1.3.1/',
  },
  {
    label: "Richtlijn-pagina met do / don't / code voorbeeld",
    href: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar/',
  },
  { label: 'WCAG-succescriteria-overzicht', href: '/wcag/' },
  { label: 'Toegankelijkheidsrapport', href: '/toegankelijkheidsverklaring' },
  { label: 'Documentatiepagina met widget voor Estafettemodel', href: '/handboek/estafettemodel/' },
  { label: 'Documentatiepagina met infographics', href: '/handboek/designer/figma-structuur/' },
  { label: 'Documentatiepagina met technische documentatie', href: '/handboek/huisstijl/basis-tokens/' },
  {
    label: 'Documentatiepagina met toegankelijke en ontoegankelijke voorbeelden',
    href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/',
  },
  {
    label:
      "Pagina 4 niveau's diep in navigatie-hierarchie, met gemengde Engelstalige en Nederlandstalige navigatie, Engelstalige content",
    href: '/events/design-systems-week-2025/en/program/',
    hrefLang: 'en',
  },
  { label: 'Overzicht van design tokens API', href: '/handboek/designer/figma-structuur/' },
  { label: 'Documentatiepagina met mix van interne en externe links', href: '/slack/' },
  { label: 'Privacyverklaring', href: '/privacyverklaring/' },
  { label: 'Woordenlijst', href: '/woordenlijst/' },
  { label: 'Changelog', href: '/CHANGELOG/' },
];

export const RepresentativeSampleLinkList = () => (
  <LinkList>
    {representativeSample.map(({ href, label, hrefLang }) => (
      <LinkListLink key={href} href={href} hrefLang={hrefLang} icon={<IconChevronRight />}>
        {label}
      </LinkListLink>
    ))}
  </LinkList>
);
