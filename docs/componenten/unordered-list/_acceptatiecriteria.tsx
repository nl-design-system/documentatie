import Wcag111Icons from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-decorative-icon.md';
import Wcag131Lists from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-lists.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag131NLDSUnordered from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-unordered.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-noninteractives.md';

export const usage = [
  {
    component: Wcag111Icons,
    sc: '1.1.1',
    status: '',
    tags: ['developer'],
    title:
      'Decoratieve iconen die als markers van de Unordered List worden gebruikt worden genegeerd door hulpsoftware.',
  },
  {
    component: Wcag131Lists,
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'De Unordered List bevat alleen list-items.',
  },
  {
    component: Wcag143,
    sc: '1.4.3',
    status: '',
    tags: ['designer'],
    title: 'De tekst in de Unordered List heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.',
  },
  {
    component: Wcag1410,
    sc: '1.4.10',
    status: '',
    tags: ['developer', 'designer'],
    title: 'Als de bezoeker de Unordered List tot 400% vergroot, blijven de tekst en de markers zichtbaar en leesbaar.',
  },
  {
    component: Wcag1411,
    sc: '1.4.11',
    status: '',
    tags: ['developer', 'designer'],
    title:
      'De contrastverhouding van de kleur van de markers van de Unordered List met de achtergrondkleur is hoog genoeg.',
  },
  {
    component: Wcag211NI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Unordered List is niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Unordered List komt niet voor in de normale focusvolgorde van de pagina.',
  },
  {
    component: Wcag312,
    sc: '3.1.2',
    status: '',
    tags: ['developer'],
    title: 'Als de tekst in de Unordered List in een andere is dan de taal van de pagina, is dat duidelijk aangegeven.',
  },
];

export const component = [
  {
    component: Wcag131NLDSUnordered,
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'De Unordered List is herkenbaar als ongeordende lijst voor hulpsoftware.',
  },
  {
    component: Wcag144,
    sc: '1.4.4',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekst van de Unordered List vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
  },
  {
    component: Wcag1412,
    sc: '1.4.12',
    status: '',
    tags: ['developer'],
    title: 'Tekst in de Unordered List blijft leesbaar wanneer de tekstafstand vergroot wordt. ',
  },
  {
    component: Wcag211NLDSNI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Unordered List is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NLDSNI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Unordered List komt standaard niet voor in de focusvolgorde van de pagina.',
  },
];
