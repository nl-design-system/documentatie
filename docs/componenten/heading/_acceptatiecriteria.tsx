import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-heading.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';
import Wcag246 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.6-heading.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag131NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-heading.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-noninteractives.md';

export const usage = [
  {
    component: Wcag131,
    sc: '1.3.1',
    status: '',
    tags: ['contentmaker'],
    title: 'Het niveau van de kop klopt binnen de koppenstructuur van de pagina.',
  },
  {
    component: Wcag143,
    sc: '1.4.3',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg.',
  },
  {
    component: Wcag211NI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Heading is niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Heading komt niet voor in de normale focusvolgorde van de pagina.',
  },
  {
    component: Wcag246,
    sc: '2.4.6',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'De koptekst maakt duidelijk waar de sectie over gaat.',
  },
  {
    component: Wcag312,
    sc: '3.1.2',
    status: '',
    tags: ['contentmaker', 'developer'],
    title:
      'Als de kop in een andere taal is dan de rest van de pagina, dan heeft het lang-attribuut de juiste taalcode.',
  },
];

export const component = [
  {
    component: Wcag131NLDS,
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'Als tekst er uitziet als een kop, moet dit ook in de HTML een kop zijn.',
  },
  {
    component: Wcag144,
    sc: '1.4.4',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
  },
  {
    component: Wcag1412,
    sc: '1.4.12',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.',
  },
  {
    component: Wcag211NLDSNI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Heading is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NLDSNI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Heading komt standaard niet voor in de focusvolgorde van de pagina.',
  },
];
