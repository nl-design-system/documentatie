import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-number-badge.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag145 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.5.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';

export const usage = [
  {
    title: 'De tekst van de Number Badge heeft voldoende contrast tegen de achtergrond.',
    sc: '1.4.3',
    status: '',
    component: Wcag143,
    tags: ['designer', 'contentmaker'],
  },
  {
    title: 'Gebruik geen afbeeldingen van tekst voor de Number Badge.',
    sc: '1.4.5',
    status: '',
    component: Wcag145,
    tags: ['designer', 'contentmaker'],
  },
  {
    title:
      'Als een tekst en/of het aria-label in de Number Badge in een andere taal is dan de taal van de pagina, dan heeft de Number Badge een lang-attribuut met de juiste taalcode.',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
    tags: ['developer', 'contentmaker'],
  },
];

export const component = [
  {
    title: 'Geef de informatie uit de Number Badge ook door aan screenreaders',
    sc: '1.3.1',
    status: '',
    component: Wcag131,
    tags: ['developer'],
  },
  {
    title: 'Als je de tekst van de Number Badge vergroot tot 200% blijft de tekst in zijn geheel zichtbaar',
    sc: '1.4.4',
    status: '',
    component: Wcag144,
    tags: ['developer'],
  },
  {
    title: 'Als je de tekstafstand van de Number Badge vergroot blijft de tekst in zijn geheel zichtbaar',
    sc: '1.4.12',
    status: '',
    component: Wcag1412,
    tags: ['developer'],
  },
];
