import Wcag131Lists from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-lists.md';
import Wcag131NLDSOrdered from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-ordered.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';

export const usage = [
  {
    title: 'De Ordered List bestaat uit een list met list-items.',
    sc: '1.3.1',
    status: '',
    component: Wcag131Lists,
    tags: ['developer'],
  },
  {
    title: 'De tekst in de Ordered List heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.',
    sc: '1.4.3',
    status: '',
    component: Wcag143,
    tags: ['designer'],
  },
  {
    title: 'Als de bezoeker de Ordered List tot 400% vergroot, blijft de tekst zichtbaar en leesbaar.',
    sc: '1.4.10',
    status: '',
    component: Wcag1410,
    tags: ['developer', 'designer'],
  },
  {
    title: 'De Ordered List is niet bereikbaar en bedienbaar met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211NI,
    tags: ['developer'],
  },
  {
    title: 'De Ordered List komt niet voor in de normale focusvolgorde van de pagina.',
    sc: '2.4.3',
    status: '',
    component: Wcag243NI,
    tags: ['developer'],
  },
  {
    title: 'Als de tekst in de Ordered List in een andere is dan de taal van de pagina, is dat duidelijk aangegeven.',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
    tags: ['developer'],
  },
];

export const component = [
  {
    title: 'De Ordered List is herkenbaar als geordende lijst voor hulpsoftware.',
    sc: '1.3.1',
    status: '',
    component: Wcag131NLDSOrdered,
    tags: ['developer'],
  },
  {
    title: 'Als je de tekst van de Ordered List vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
    sc: '1.4.4',
    status: '',
    component: Wcag144,
    tags: ['developer'],
  },
  {
    title: 'Tekst in de Ordered List blijft leesbaar wanneer de tekstafstand vergroot wordt. ',
    sc: '1.4.12',
    status: '',
    component: Wcag1412,
    tags: ['developer'],
  },
  {
    title: 'De Ordered List is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211NLDSNI,
    tags: ['developer'],
  },
  {
    title: 'De Ordered List komt standaard niet voor in de focusvolgorde van de pagina.',
    sc: '2.4.3',
    status: '',
    component: Wcag243NLDSNI,
    tags: ['developer'],
  },
];
