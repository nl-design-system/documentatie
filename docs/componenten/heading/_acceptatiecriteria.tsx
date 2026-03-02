import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-heading.md';
import Wcag131NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-heading.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag246 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.6-heading.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';

export const usage = [
  {
    title: 'Het niveau van de kop klopt binnen de koppenstructuur van de pagina.',
    sc: '1.3.1',
    status: '',
    component: Wcag131,
    tags: ['contentmaker'],
  },
  {
    title: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg.',
    sc: '1.4.3',
    status: '',
    component: Wcag143,
    tags: ['designer', 'contentmaker'],
  },
  {
    title: 'De koptekst maakt duidelijk waar de sectie over gaat.',
    sc: '2.4.6',
    status: '',
    component: Wcag246,
    tags: ['designer', 'contentmaker'],
  },
  {
    title:
      'Als de kop in een andere taal is dan de rest van de pagina, dan heeft het lang-attribuut de juiste taalcode.',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
    tags: ['contentmaker', 'developer'],
  },
];

export const component = [
  {
    title: 'Als tekst er uitziet als een kop, moet dit ook in de HTML een kop zijn.',
    sc: '1.3.1',
    status: '',
    component: Wcag131NLDS,
    tags: ['developer'],
  },
  {
    title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
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
