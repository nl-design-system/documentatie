import Wcag111Error from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-error.md';
import Wcag131FormFieldError from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-error.md';
import Wcag131NLDSFormFieldError from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-error.md';
import Wcag132FormFieldError from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.2-error.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag133 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.3.3-summary.md';
import Wcag141 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.1-summary.md';
import Wcag413 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-4.1.3.md';
import Wcag413NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-4.1.3-nlds.md';

export const usage = [
  {
    title:
      'De Form Field Error Message bevat geen informatieve icons en decoratieve icons zijn verborgen voor hulpsoftware.',
    sc: '1.1.1',
    status: '',
    component: Wcag111Error,
    tags: ['developer'],
  },
  {
    title: 'De Form Field Error Message is gekoppeld aan het bijbehorende element voor formulierinvoer',
    sc: '1.3.1',
    status: '',
    component: Wcag131FormFieldError,
    tags: ['developer'],
  },
  {
    title: 'De Form Field Error Message staat tussen het label en het element voor formulierinvoer.',
    sc: '1.3.2',
    status: '',
    component: Wcag132FormFieldError,
    tags: ['designer', 'developer'],
  },
  {
    title: 'Instructies in de Form Field Error Message zijn op een inclusieve manier beschreven.',
    sc: '1.3.3',
    status: '',
    component: Wcag133,
    tags: ['designer', 'contentmaker'],
  },
  {
    title:
      'Als kleuren worden gebruikt om aan te geven dat er een fout gemaakt is, dan is er ook ten minste één andere manier om de foutmelding te herkennen.',
    sc: '1.4.1',
    status: '',
    component: Wcag141,
    tags: ['designer'],
  },
  {
    title:
      'De tekst in de Form Field Error Message heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.',
    sc: '1.4.3',
    status: '',
    component: Wcag143,
    tags: ['designer'],
  },
  {
    title: 'Als je de tekst van de Form Field Error Message vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
    sc: '1.4.4',
    status: '',
    component: Wcag144,
    tags: ['developer'],
  },
  {
    title:
      'De bezoeker kan de Form Field Error Message tot 400% vergroten zonder verlies van functionaliteit of informatie.',
    sc: '1.4.10',
    status: '',
    component: Wcag1410,
    tags: ['developer', 'designer'],
  },
  {
    title:
      'Als de Form Field Error Message in een andere taal is dan de taal van de pagina, dan heeft het een lang-attribuut met de juiste taalcode.',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
    tags: ['developer'],
  },
  {
    title:
      'Informatie over foutmeldingen wordt direct voorgelezen aan bezoekers die een screenreader gebruiken, ook als het formulierveld met een foutmelding geen toetsenbordfocus krijgt.',
    sc: '4.1.3',
    status: '',
    component: Wcag413,
    tags: ['developer'],
  },
];

export const component = [
  {
    title: 'De Form Field Error Message kan aan een element voor formulierinvoer gekoppeld worden',
    sc: '1.3.1',
    status: '',
    component: Wcag131NLDSFormFieldError,
    tags: ['developer'],
  },
  {
    title: 'Tekst in de Form Field Error Message blijft leesbaar wanneer de tekstafstand vergroot wordt. ',
    sc: '1.4.12',
    status: '',
    component: Wcag1412,
    tags: ['developer'],
  },
  {
    title: 'Het is mogelijk om de Form Field Error Message de rol `alert` te geven.',
    sc: '4.1.3',
    status: '',
    component: Wcag413NLDS,
    tags: ['developer'],
  },
];
