import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-accordion.md';
import Wcag141 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.1-accordion.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11-accordion.md';
import Wcag1413 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.13-accordion.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3-accordion.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4-accordion.md';
import Wcag145 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.5-accordion.md';
import Wcag211 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-accordion.md';
import Wcag243 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-accordion.md';
import Wcag246 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.6-accordion.md';
import Wcag252 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.2-accordion.md';
import Wcag253 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.3-accordion.md';
import Wcag255 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.5-accordion.md';
import Wcag322 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.2.2-accordion.md';
import Wcag412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-4.1.2-accordion.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.10-summary.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.12-summary.md';
import Wcag212 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.1.2-summary.md';
import Wcag2411 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.4.11-summary.md';
import Wcag247 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.4.7-summary.md';
import Wcag312 from '@nl-design-system-unstable/documentation/wcag/summaries/_3.1.2-summary.md';
import Wcag321 from '@nl-design-system-unstable/documentation/wcag/summaries/_3.2.1-summary.md';
import Wcag324 from '@nl-design-system-unstable/documentation/wcag/summaries/_3.2.4-summary.md';

export const general = [
  {
    component: Wcag145,
    sc: '1.4.5',
    status: '',
    title: 'De informatie in de accordeon bestaat uit tekst, niet uit tekst in een afbeelding',
  },
  {
    component: Wcag246,
    sc: '2.4.6',
    status: '',
    title: 'Het is duidelijk welke content in de accordion aanwezig is',
  },
  {
    component: Wcag252,
    sc: '2.5.2',
    status: '',
    title: 'De bezoeker kan het openen van de accordion of een interactief element in de accordion annuleren',
  },
  {
    component: Wcag253,
    sc: '2.5.3',
    status: '',
    title: 'De visuele naam van de accordion komt voor in de toegankelijke naam van de accordion',
  },
  {
    component: Wcag255,
    sc: '2.5.5',
    status: '',
    title: 'Het aanwijsgebied van de accordion is groot genoeg',
  },
  {
    component: Wcag312,
    sc: '3.1.2',
    status: '',
    title:
      'Als de accordion tekst bevat in een taal anders dan de aangegeven taal van de pagina, is er een taalwissel aanwezig',
  },
  {
    component: Wcag321,
    sc: '3.2.1',
    status: '',
    title: 'Het gedrag van de accordion is voorspelbaar',
  },
  {
    component: Wcag322,
    sc: '3.2.2',
    status: '',
    title: 'Het openen of sluiten van de accordion verplaatst de focus niet',
  },
];

export const visualDesign = [
  {
    component: Wcag141,
    sc: '1.4.1',
    status: '',
    title: 'Informatie in of over de accordion is niet alleen te begrijpen door middel van kleur',
  },
  {
    component: Wcag143,
    sc: '1.4.3',
    status: '',
    title: 'De contrastratio tussen de tekst en de achtergrondkleur in de accordion is hoog genoeg',
  },
  {
    component: Wcag1411,
    sc: '1.4.11',
    status: '',
    title: 'Niet-tekstuele content in de accordion heeft een contrastratio van minimaal 3:1 met de achtergrond',
  },
  {
    component: Wcag247,
    sc: '2.4.7',
    status: '',
    title: 'Interactieve elementen in de accordion hebben een zichtbare focusstyling',
  },
  {
    component: Wcag324,
    sc: '3.2.4',
    status: '',
    title:
      'Accordions met dezelfde functie of informatie zien er op iedere pagina waar de accordion voorkomt hetzelfde uit',
  },
];

export const zoom = [
  {
    component: Wcag144,
    sc: '1.4.4',
    status: '',
    title: 'Tekst in de accordion kan 200% vergroot worden zonder verlies van functionaliteit of informatie',
  },
  {
    component: Wcag1410,
    sc: '1.4.10',
    status: '',
    title: 'De bezoeker kan de accordeon tot 400% vergroten zonder verlies van functionaliteit of informatie',
  },
  {
    component: Wcag1412,
    sc: '1.4.12',
    status: '',
    title: 'De tekstopmaak in de accordion kan aangepast worden zonder verlies van functionaliteit of informatie',
  },
  {
    component: Wcag1413,
    sc: '1.4.13',
    status: '',
    title: 'De accordion opent niet bij hover of focus.',
  },
];

export const keyboard = [
  {
    component: Wcag211,
    sc: '2.1.1',
    status: '',
    title: 'De accordion is bedienbaar met het toetsenbord',
  },
  {
    component: Wcag212,
    sc: '2.1.2',
    status: '',
    title: 'De accordion zorgt niet voor een toetsenbordval',
  },
  {
    component: Wcag243,
    sc: '2.4.3',
    status: '',
    title: 'De focusvolgorde rondom en in de accordion is logisch',
  },
  {
    component: Wcag246,
    sc: '2.4.6',
    status: '',
    title: 'Interactieve elementen in de accordion hebben een zichtbare focusstyling',
  },
  {
    component: Wcag2411,
    sc: '2.4.11',
    status: '',
    title: 'De accordion wordt niet bedekt door andere content',
  },
];

export const screenreader = [
  {
    component: Wcag131,
    sc: '1.3.1',
    status: '',
    title: 'De staat van de accordion is beschikbaar voor hulpsoftware',
  },
  {
    component: Wcag246,
    sc: '2.4.6',
    status: '',
    title: 'Het is duidelijk welke content in de accordion aanwezig is',
  },
  {
    component: Wcag312,
    sc: '3.1.2',
    status: '',
    title:
      'Als de accordion tekst bevat in een taal anders dan de aangegeven taal van de pagina, is er een taalwissel aanwezig',
  },
  {
    component: Wcag412,
    sc: '4.1.2',
    status: '',
    title: 'De accordion heeft een toegankelijke naam, rol en status',
  },
];
