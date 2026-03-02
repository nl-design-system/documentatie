import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-code-block.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11-code.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag141 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.1-summary.md';

export const usage = [
  {
    title: 'De code is niet alleen herkenbaar aan een andere achtergrondkleur.',
    sc: '1.4.1',
    status: '',
    component: Wcag141,
    tags: ['designer', 'contentmaker', 'developer'],
  },
  {
    title: 'De code heeft voldoende contrast met de achtergrondkleur',
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
];
