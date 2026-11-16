import Wcag131Lists from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-lists.md';
import Wcag1410Ordered from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10-ordered.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';
import Wcag312Lists from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2-lists.md';
import Wcag131NLDSOrdered from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-ordered.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-noninteractives.md';

export const usage = [
  {
    component: Wcag131Lists,
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'De Ordered List bestaat uit een list met list-items.',
  },
  {
    component: Wcag143,
    sc: '1.4.3',
    status: '',
    tags: ['designer'],
    title:
      'De tekst en de tekstuele markers in de Ordered List hebben een contrastratio van minimaal 4,5:1 met de achtergrondkleur.',
  },
  {
    component: Wcag1410Ordered,
    sc: '1.4.10',
    status: '',
    tags: ['developer', 'designer'],
    title: 'Als de bezoeker de Ordered List tot 400% vergroot, blijft alle tekst zichtbaar en leesbaar.',
  },
  {
    component: Wcag211NI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Ordered List is niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Ordered List komt niet voor in de normale focusvolgorde van de pagina.',
  },
  {
    component: Wcag312Lists,
    sc: '3.1.2',
    status: '',
    tags: ['developer'],
    title: 'Als de tekst in de Ordered List in een andere is dan de taal van de pagina, is dat duidelijk aangegeven.',
  },
];

export const component = [
  {
    component: Wcag131NLDSOrdered,
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'De Ordered List is herkenbaar als geordende lijst voor hulpsoftware.',
  },
  {
    component: Wcag144,
    sc: '1.4.4',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekst van de Ordered List vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
  },
  {
    component: Wcag1412,
    sc: '1.4.12',
    status: '',
    tags: ['developer'],
    title: 'Tekst in de Ordered List blijft leesbaar wanneer de tekstafstand vergroot wordt. ',
  },
  {
    component: Wcag211NLDSNI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Ordered List is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NLDSNI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Ordered List komt standaard niet voor in de focusvolgorde van de pagina.',
  },
];
