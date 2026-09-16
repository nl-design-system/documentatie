import Wcag111Note from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-note.md';
import Wcag132Note from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.2-note.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag133 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.3.3-summary.md';
import Wcag141 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.1-summary.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-noninteractives.md';

export const usage = [
  {
    title: 'De Note bevat geen informatieve icons, en decoratieve icons zijn verborgen voor hulpsoftware.',
    sc: '1.1.1',
    status: '',
    component: Wcag111Note,
    tags: ['developer'],
  },
  {
    title: 'De Note staat op een logische plek op de pagina.',
    sc: '1.3.2',
    status: '',
    component: Wcag132Note,
    tags: ['designer', 'developer'],
  },
  {
    title: 'Instructies in de Note zijn op een inclusieve manier beschreven.',
    sc: '1.3.3',
    status: '',
    component: Wcag133,
    tags: ['designer', 'contentmaker'],
  },
  {
    title: 'De kleur van de Note geeft geen informatie die niet ook op minimaal 1 andere manier wordt gegeven.',
    sc: '1.4.1',
    status: '',
    component: Wcag141,
    tags: ['designer'],
  },
  {
    title: 'De tekst in de Note heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.',
    sc: '1.4.3',
    status: '',
    component: Wcag143,
    tags: ['designer'],
  },
  {
    title: 'Als je de tekst van de Note vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
    sc: '1.4.4',
    status: '',
    component: Wcag144,
    tags: ['developer'],
  },
  {
    title: 'De bezoeker kan de Note tot 400% vergroten zonder verlies van functionaliteit of informatie.',
    sc: '1.4.10',
    status: '',
    component: Wcag1410,
    tags: ['developer', 'designer'],
  },
  {
    title: 'De Note is niet bereikbaar en bedienbaar met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211NI,
    tags: ['developer'],
  },
  {
    title: 'De Note komt niet voor in de normale focusvolgorde van de pagina.',
    sc: '2.4.3',
    status: '',
    component: Wcag243NI,
    tags: ['developer'],
  },
  {
    title:
      'Als de Note in een andere taal is dan de taal van de pagina, dan heeft het een lang-attribuut met de juiste taalcode.',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
    tags: ['developer'],
  },
];

export const component = [
  {
    title: 'Tekst in de Note blijft leesbaar wanneer de tekstafstand vergroot wordt.',
    sc: '1.4.12',
    status: '',
    component: Wcag1412,
    tags: ['developer'],
  },
  {
    title: 'De Note is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211NLDSNI,
    tags: ['developer'],
  },
  {
    title: 'De Note komt standaard niet voor in de normale focusvolgorde op de pagina',
    sc: '2.4.3',
    status: '',
    component: Wcag243NLDSNI,
    tags: ['developer'],
  },
];
