import Wcag131FormFieldDescription from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-description.md';
import Wcag132FormFieldDescription from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.2-description.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag131NLDSFormFieldDescription from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-description.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-noninteractives.md';
import Wcag133 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.3.3-summary.md';
import Wcag141 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.1-summary.md';

export const usage = [
  {
    component: Wcag131FormFieldDescription,
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Description is gekoppeld aan het bijbehorende element voor formulierinvoer.',
  },
  {
    component: Wcag132FormFieldDescription,
    sc: '1.3.2',
    status: '',
    tags: ['designer', 'developer'],
    title: 'De Form Field Description staat op een logische plek.',
  },
  {
    component: Wcag133,
    sc: '1.3.3',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Instructies in de Form Field Description zijn op een inclusieve manier beschreven.',
  },
  {
    component: Wcag141,
    sc: '1.4.1',
    status: '',
    tags: ['designer', 'contentmaker'],
    title:
      'De kleur van de Form Field Description geeft geen informatie die niet ook op minimaal 1 andere manier wordt gegeven.',
  },
  {
    component: Wcag143,
    sc: '1.4.3',
    status: '',
    tags: ['designer'],
    title: 'De tekst in de Form Field Description heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.',
  },
  {
    component: Wcag144,
    sc: '1.4.4',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekst van de Form Field Description vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
  },
  {
    component: Wcag1410,
    sc: '1.4.10',
    status: '',
    tags: ['developer', 'designer'],
    title:
      'De bezoeker kan de Form Field Description tot 400% vergroten zonder verlies van functionaliteit of informatie.',
  },
  {
    component: Wcag211NI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Description is niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Description komt niet voor in de normale focusvolgorde van de pagina.',
  },
  {
    component: Wcag312,
    sc: '3.1.2',
    status: '',
    tags: ['developer'],
    title:
      'Als de Form Field Description in een andere taal is dan de taal van de pagina, dan heeft het een lang-attribuut met de juiste taalcode.',
  },
];

export const component = [
  {
    component: Wcag131NLDSFormFieldDescription,
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Description kan aan een element voor formulierinvoer gekoppeld worden.',
  },
  {
    component: Wcag1412,
    sc: '1.4.12',
    status: '',
    tags: ['developer'],
    title: 'Tekst in de Form Field Description blijft leesbaar wanneer de tekstafstand vergroot wordt. ',
  },
  {
    component: Wcag211NLDSNI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Description is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NLDSNI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Description komt standaard niet voor in de focusvolgorde van de pagina.',
  },
];
