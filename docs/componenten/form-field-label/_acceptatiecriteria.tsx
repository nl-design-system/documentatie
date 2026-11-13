import Wcag131Label from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-label.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';
import Wcag246 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.6-form.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag324 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.2.4-form.md';
import Wcag131NLDSLabel from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-label.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-noninteractives.md';
import Wcag141 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.1-summary.md';

export const usage = [
  {
    component: Wcag131Label,
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'Het Form Field label is gekoppeld aan het bijbehorende element voor formulierinvoer.',
  },
  {
    component: Wcag141,
    sc: '1.4.1',
    status: '',
    tags: ['designer'],
    title:
      'De kleur van het Form Field Label geeft geen informatie die niet ook op minimaal 1 andere manier wordt gegeven.',
  },
  {
    component: Wcag143,
    sc: '1.4.3',
    status: '',
    tags: ['designer'],
    title: 'De tekst in het Form Field Label heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.',
  },
  {
    component: Wcag1410,
    sc: '1.4.10',
    status: '',
    tags: ['developer', 'designer'],
    title: 'De bezoeker kan het Form Field Label tot 400% vergroten zonder verlies van functionaliteit of informatie.',
  },
  {
    component: Wcag211NI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'Het Form Field Label is niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'Het Form Field Label komt niet voor in de normale focusvolgorde van de pagina.',
  },
  {
    component: Wcag246,
    sc: '2.4.6',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Het Form Field Label beschrijft wat de bezoeker moet invullen.',
  },
  {
    component: Wcag312,
    sc: '3.1.2',
    status: '',
    tags: ['developer'],
    title:
      'Als het Form Field Label in een andere taal is dan de taal van de pagina, dan heeft het label-element een lang-attribuut met de juiste taalcode.',
  },
  {
    component: Wcag324,
    sc: '3.2.4',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Elementen voor formulierinvoer met dezelfde functie hebben hetzelfde label.',
  },
];

export const component = [
  {
    component: Wcag131NLDSLabel,
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'Het Form Field Label kan aan een element voor formulierinvoer gekoppeld worden.',
  },
  {
    component: Wcag144,
    sc: '1.4.4',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekst van het Form Field Label vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
  },
  {
    component: Wcag1412,
    sc: '1.4.12',
    status: '',
    tags: ['developer'],
    title: 'Tekst in het Form Field Label blijft leesbaar wanneer de tekstafstand vergroot wordt. ',
  },
  {
    component: Wcag211NLDSNI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'Het Form Field Label is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NLDSNI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'Het Form Field Label komt standaard niet voor in de focusvolgorde van de pagina.',
  },
];
