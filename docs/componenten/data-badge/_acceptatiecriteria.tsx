import Wcag111 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-data-badge.md';
import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-data-badge.md';
import Wcag141 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.1-data-badge.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag145 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.5.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-noninteractives.md';

export const usage = [
  {
    component: Wcag111,
    sc: '1.1.1',
    status: '',
    tags: ['developer', 'contentmaker'],
    title: 'Als er in de Data Badge een informatief icoon staat, is er een goed tekstalternatief.',
  },
  {
    component: Wcag131,
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'Gebruik zoveel mogelijk semantische HTML voor de Data Badge.',
  },
  {
    component: Wcag141,
    sc: '1.4.1',
    status: '',
    tags: ['designer'],
    title: 'Gebruik niet alleen kleur om de betekenis van de Data Badge duidelijk te maken.',
  },
  {
    component: Wcag143,
    sc: '1.4.3',
    status: '',
    tags: ['designer'],
    title: 'De tekst van de Data Badge heeft voldoende contrast tegen de achtergrond.',
  },
  {
    component: Wcag145,
    sc: '1.4.5',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Gebruik geen afbeeldingen van tekst voor de Data Badge.',
  },
  {
    component: Wcag211NI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Data Badge is niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Data Badge komt niet voor in de normale focusvolgorde van de pagina.',
  },
  {
    component: Wcag312,
    sc: '3.1.2',
    status: '',
    tags: ['contentmaker', 'developer'],
    title:
      'Als een tekst in de Data Badge in een andere taal is dan de taal van de pagina, dan heeft de Data Badge een lang-attribuut met de juiste taalcode.',
  },
];

export const component = [
  {
    component: Wcag144,
    sc: '1.4.4',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekst van de Data Badge vergroot tot 200% blijft de tekst in zijn geheel zichtbaar.',
  },
  {
    component: Wcag1412,
    sc: '1.4.12',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekstafstand van de Data Badge vergroot blijft de tekst in zijn geheel zichtbaar.',
  },
  {
    component: Wcag211NLDSNI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Data Badge is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NLDSNI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Data Badge komt standaard niet voor in de focusvolgorde van de pagina.',
  },
];
