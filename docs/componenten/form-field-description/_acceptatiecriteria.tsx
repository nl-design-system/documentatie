import Wcag131FormFieldDescription from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-description.md';
import Wcag131NLDSFormFieldDescription from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-description.md';
import Wcag132FormFieldDescription from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.2-description.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag133 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.3.3-summary.md';

export const usage = [
  {
    title: 'De Form Field Description is gekoppeld aan het bijbehorende element voor formulierinvoer',
    sc: '1.3.1',
    status: '',
    component: Wcag131FormFieldDescription,
    tags: ['developer'],
  },
  {
    title: 'De Form Field Description staat op een logische plek',
    sc: '1.3.2',
    status: '',
    component: Wcag132FormFieldDescription,
    tags: ['designer', 'developer'],
  },
  {
    title: 'Instructies in de Form Field Description zijn op een inclusieve manier beschreven.',
    sc: '1.3.3',
    status: '',
    component: Wcag133,
    tags: ['designer', 'contentmaker'],
  },
  {
    title: 'De tekst in de Form Field Description heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.',
    sc: '1.4.3',
    status: '',
    component: Wcag143,
    tags: ['designer'],
  },
  {
    title: 'Als je de tekst van de Form Field Description vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
    sc: '1.4.4',
    status: '',
    component: Wcag144,
    tags: ['developer'],
  },
  {
    title:
      'De bezoeker kan de Form Field Description tot 400% vergroten zonder verlies van functionaliteit of informatie.',
    sc: '1.4.10',
    status: '',
    component: Wcag1410,
    tags: ['developer', 'designer'],
  },
  {
    title:
      'Als de Form Field Description in een andere taal is dan de taal van de pagina, dan heeft het een lang-attribuut met de juiste taalcode.',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
    tags: ['developer'],
  },
];

export const component = [
  {
    title: 'De Form Field Description kan aan een element voor formulierinvoer gekoppeld worden.',
    sc: '1.3.1',
    status: '',
    component: Wcag131NLDSFormFieldDescription,
    tags: ['developer'],
  },
  {
    title: 'Tekst in de Form Field Description blijft leesbaar wanneer de tekstafstand vergroot wordt. ',
    sc: '1.4.12',
    status: '',
    component: Wcag1412,
    tags: ['developer'],
  },
];
