import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-code-block.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11-code.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag141 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.1-summary.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';

export const usage = [
  {
    title: 'De code is niet alleen herkenbaar aan een andere achtergrondkleur.',
    sc: '1.4.1',
    status: '',
    component: Wcag141,
    tags: ['designer', 'contentmaker', 'developer'],
  },
  {
    title: 'De code in de Code Block component heeft voldoende contrast met de achtergrondkleur',
    sc: '1.4.3',
    status: '',
    component: Wcag143,
    tags: ['designer', 'contentmaker'],
  },
  {
    title:
      'Wanneer de achtergrondkleur van het Code Block anders is dan de default browserkleur, dan heeft deze een kleurcontrast van minimaal 3:1 met de achtergrondkleur van de pagina.',
    sc: '1.4.11',
    status: '',
    component: Wcag1411,
    tags: ['designer', 'contentmaker'],
  },
  {
    title: 'De Code Block component is niet bereikbaar en bedienbaar met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211NI,
    tags: ['developer'],
  },
  {
    title: 'De Code Block component komt niet voor in de normale focusvolgorde van de pagina.',
    sc: '2.4.3',
    status: '',
    component: Wcag243NI,
    tags: ['developer'],
  },
];

export const component = [
  {
    title: 'De juiste HTML-elementen voor de Code Block component zijn toegepast.',
    sc: '1.3.1',
    status: '',
    component: Wcag131,
    tags: ['developer'],
  },
  {
    title: 'Als je inzoomt naar 200% blijft alle tekst leesbaar.',
    sc: '1.4.4',
    status: '',
    component: Wcag144,
    tags: ['developer'],
  },
  {
    title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.',
    sc: '1.4.12',
    status: '',
    component: Wcag1412,
    tags: ['developer'],
  },
  {
    title: 'De Code Block component is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211NLDSNI,
    tags: ['developer'],
  },
  {
    title: 'De Code Block component komt standaard niet voor in de focusvolgorde van de pagina.',
    sc: '2.4.3',
    status: '',
    component: Wcag243NLDSNI,
    tags: ['developer'],
  },
];
