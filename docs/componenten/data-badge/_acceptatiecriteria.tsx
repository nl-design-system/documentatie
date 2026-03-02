import Wcag111 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-data-badge.md';
import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-data-badge.md';
import Wcag141 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.1-data-badge.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag145 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.5.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';

export const usage = [
  {
    title: 'Als er in de Data Badge een informatief icoon staat, is er een goed tekstalternatief.',
    sc: '1.1.1',
    status: '',
    component: Wcag111,
    tags: ['developer', 'contentmaker'],
  },
  {
    title: 'Gebruik zoveel mogelijk semantische HTML voor de Data Badge.',
    sc: '1.3.1',
    status: '',
    component: Wcag131,
    tags: ['developer'],
  },
  {
    title: 'Gebruik niet alleen kleur om de betekenis van de Data Badge duidelijk te maken.',
    sc: '1.4.1',
    status: '',
    component: Wcag141,
    tags: ['designer'],
  },
  {
    title: 'De tekst van de Data Badge heeft voldoende contrast tegen de achtergrond.',
    sc: '1.4.3',
    status: '',
    component: Wcag143,
    tags: ['designer'],
  },
  {
    title: 'Gebruik geen afbeeldingen van tekst voor de Data Badge.',
    sc: '1.4.5',
    status: '',
    component: Wcag145,
    tags: ['designer', 'contentmaker'],
  },
  {
    title:
      'Als een tekst in de Data Badge in een andere taal is dan de taal van de pagina, dan heeft de Data Badge een lang-attribuut met de juiste taalcode.',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
    tags: ['contentmaker', 'developer'],
  },
];

export const component = [
  {
    title: 'Als je de tekst van de Data Badge vergroot tot 200% blijft de tekst in zijn geheel zichtbaar.',
    sc: '1.4.4',
    status: '',
    component: Wcag144,
    tags: ['developer'],
  },
  {
    title: 'Als je de tekstafstand van de Data Badge vergroot blijft de tekst in zijn geheel zichtbaar.',
    sc: '1.4.12',
    status: '',
    component: Wcag1412,
    tags: ['developer'],
  },
];
