import Wcag132 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.2-field.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag141 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.1-summary.md';
import Wcag132NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.2-nlds-field.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-noninteractives.md';

export const usage = [
  {
    title: 'Componenten in de Form Field staan in een logische en gebruiksvriendelijke volgorde.',
    sc: '1.3.2',
    status: '',
    component: Wcag132,
    tags: ['designer', 'developer'],
  },
  {
    title: 'De kleur van de Form Field geeft geen informatie die niet ook op minimaal 1 andere manier wordt gegeven.',
    sc: '1.4.1',
    status: '',
    component: Wcag141,
    tags: ['designer'],
  },
  {
    title: 'De bezoeker kan de Form Field tot 400% vergroten zonder verlies van functionaliteit of informatie.',
    sc: '1.4.10',
    status: '',
    component: Wcag1410,
    tags: ['developer', 'designer'],
  },
  {
    title: 'Niet-tekstuele content in de Form Field heeft een contrastratio van minimaal 3:1 met de achtergrond.',
    sc: '1.4.11',
    status: '',
    component: Wcag1411,
    tags: ['designer'],
  },
  {
    title: 'De Form Field is niet bereikbaar en bedienbaar met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211NI,
    tags: ['developer'],
  },
  {
    title: 'De Form Field komt niet voor in de normale focusvolgorde van de pagina.',
    sc: '2.4.3',
    status: '',
    component: Wcag243NI,
    tags: ['developer'],
  },
  {
    title:
      'Als de hele inhoud van de Form Field in een andere taal is dan de taal van de pagina, dan heeft het een lang-attribuut met de juiste taalcode.',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
    tags: ['developer'],
  },
];

export const component = [
  {
    title: 'Componenten in de Form Field kunnen in een logische, gebruiksvriendelijke volgorde worden gezet.',
    sc: '1.3.2',
    status: '',
    component: Wcag132NLDS,
    tags: ['designer', 'developer'],
  },
  {
    title: 'De Form Field is standaard niet bereikbaar en bedienbaar met het toetsenbord. ',
    sc: '2.1.1',
    status: '',
    component: Wcag211NLDSNI,
    tags: ['developer'],
  },
  {
    title: 'De Form Field komt standaard niet voor in de focusvolgorde van de pagina. ',
    sc: '2.4.3',
    status: '',
    component: Wcag243NLDSNI,
    tags: ['developer'],
  },
];
