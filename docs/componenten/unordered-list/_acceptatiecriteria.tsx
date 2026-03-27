import Wcag111Icons from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-decorative-icon.md';
import Wcag131Lists from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-lists.md';
import Wcag131NLDSUnordered from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-unordered.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';

export const usage = [
  {
    title:
      'Decoratieve iconen die als markers van de Unordered List worden gebruikt worden genegeerd door hulpsoftware.',
    sc: '1.1.1',
    status: '',
    component: Wcag111Icons,
    tags: ['developer'],
  },
  {
    title: 'De Unordered List bevat alleen list-items.',
    sc: '1.3.1',
    status: '',
    component: Wcag131Lists,
    tags: ['developer'],
  },
  {
    title: 'De tekst in de Unordered List heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.',
    sc: '1.4.3',
    status: '',
    component: Wcag143,
    tags: ['designer'],
  },
  {
    title: 'Als de bezoeker de Unordered List tot 400% vergroot, blijven de tekst en de markers zichtbaar en leesbaar.',
    sc: '1.4.10',
    status: '',
    component: Wcag1410,
    tags: ['developer', 'designer'],
  },
  {
    title:
      'De contrastverhouding van de kleur van de markers van de Unordered List met de achtergrondkleur is hoog genoeg.',
    sc: '1.4.11',
    status: '',
    component: Wcag1411,
    tags: ['developer', 'designer'],
  },
  {
    title: 'Als de tekst in de Unordered List in een andere is dan de taal van de pagina, is dat duidelijk aangegeven.',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
    tags: ['developer'],
  },
];

export const component = [
  {
    title: 'De Unordered List is herkenbaar als ongeordende lijst voor hulpsoftware.',
    sc: '1.3.1',
    status: '',
    component: Wcag131NLDSUnordered,
    tags: ['developer'],
  },
  {
    title: 'Als je de tekst van de Unordered List vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
    sc: '1.4.4',
    status: '',
    component: Wcag144,
    tags: ['developer'],
  },
  {
    title: 'Tekst in de Unordered List blijft leesbaar wanneer de tekstafstand vergroot wordt. ',
    sc: '1.4.12',
    status: '',
    component: Wcag1412,
    tags: ['developer'],
  },
];
