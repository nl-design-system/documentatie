import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-paragraph.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.10-summary.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';

export const usage = [
  {
    title: 'De contrastverhouding van de tekstkleur van de paragraaf met de achtergrondkleur is hoog genoeg.',
    sc: '1.4.3',
    status: '',
    component: Wcag143,
    tags: ['designer', 'contentmaker'],
  },
  {
    title:
      'Als een paragraaftekst in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
    tags: ['developer', 'contentmaker'],
  },
  {
    title: 'Als je de hele webpagina inzoomt tot 400% blijft de paragraaftekst leesbaar.',
    sc: '1.4.10',
    status: '',
    component: Wcag1410,
    tags: ['developer'],
  },
];

export const component = [
  {
    title: 'Gebruik het p-element voor paragraaftekst.',
    sc: '1.3.1',
    status: '',
    component: Wcag131,
    tags: ['developer'],
  },
  {
    title: 'Als je de paragraaftekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
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
