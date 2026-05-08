import Wcag131Label from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-label.md';
import Wcag131NLDSLabel from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-label.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag246 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.6-form.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag324 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.2.4-form.md';
import Wcag141 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.1-summary.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-noninteractives.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';

export const usage = [
  {
    title: 'Het Form Field label is gekoppeld aan het bijbehorende element voor formulierinvoer.',
    sc: '1.3.1',
    status: '',
    component: Wcag131Label,
    tags: ['developer'],
  },
  {
    title:
      'De kleur van het Form Field Label geeft geen informatie die niet ook op minimaal 1 andere manier wordt gegeven.',
    sc: '1.4.1',
    status: '',
    component: Wcag141,
    tags: ['designer'],
  },
  {
    title: 'De tekst in het Form Field Label heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.',
    sc: '1.4.3',
    status: '',
    component: Wcag143,
    tags: ['designer'],
  },
  {
    title: 'De bezoeker kan het Form Field Label tot 400% vergroten zonder verlies van functionaliteit of informatie.',
    sc: '1.4.10',
    status: '',
    component: Wcag1410,
    tags: ['developer', 'designer'],
  },
  {
    title: 'Het Form Field Label is niet bereikbaar en bedienbaar met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211NI,
    tags: ['developer'],
  },
  {
    title: 'Het Form Field Label komt niet voor in de normale focusvolgorde van de pagina.',
    sc: '2.4.3',
    status: '',
    component: Wcag243NI,
    tags: ['developer'],
  },
  {
    title: 'Het Form Field Label beschrijft wat de bezoeker moet invullen.',
    sc: '2.4.6',
    status: '',
    component: Wcag246,
    tags: ['designer', 'contentmaker'],
  },
  {
    title:
      'Als het Form Field Label in een andere taal is dan de taal van de pagina, dan heeft het label-element een lang-attribuut met de juiste taalcode.',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
    tags: ['developer'],
  },
  {
    title: 'Elementen voor formulierinvoer met dezelfde functie hebben hetzelfde label.',
    sc: '3.2.4',
    status: '',
    component: Wcag324,
    tags: ['designer', 'contentmaker'],
  },
];

export const component = [
  {
    title: 'Het Form Field Label kan aan een element voor formulierinvoer gekoppeld worden.',
    sc: '1.3.1',
    status: '',
    component: Wcag131NLDSLabel,
    tags: ['developer'],
  },
  {
    title: 'Als je de tekst van het Form Field Label vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
    sc: '1.4.4',
    status: '',
    component: Wcag144,
    tags: ['developer'],
  },
  {
    title: 'Tekst in het Form Field Label blijft leesbaar wanneer de tekstafstand vergroot wordt. ',
    sc: '1.4.12',
    status: '',
    component: Wcag1412,
    tags: ['developer'],
  },
  {
    title: 'Het Form Field Label is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211NLDSNI,
    tags: ['developer'],
  },
  {
    title: 'Het Form Field Label komt standaard niet voor in de focusvolgorde van de pagina.',
    sc: '2.4.3',
    status: '',
    component: Wcag243NLDSNI,
    tags: ['developer'],
  },
];
