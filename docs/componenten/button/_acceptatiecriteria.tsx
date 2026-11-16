import Wcag111 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-button.md';
import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-button.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11-button.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag145 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.5.md';
import Wcag211 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1.md';
import Wcag2411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.11.md';
import Wcag2412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.12.md';
import Wcag2413 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.13.md';
import Wcag243 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-button.md';
import Wcag246 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.6-button.md';
import Wcag247 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.7.md';
import Wcag252 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.2.md';
import Wcag253 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.3-button.md';
import Wcag255 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.5.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag324 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.2.4.md';
import Wcag412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-4.1.2-button.md';
import Wcag131NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-button.md';
import Wcag412NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-4.1.2-nlds.md';
import Wcag212 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.1.2-summary.md';
import Wcag321 from '@nl-design-system-unstable/documentation/wcag/summaries/_3.2.1-summary.md';

export const usage = [
  {
    component: Wcag111,
    sc: '1.1.1',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Als het label van een button uit alléén een icoon bestaat, dan heeft deze een goed tekstalternatief.',
  },
  {
    component: Wcag131,
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'Het is duidelijk of een button in- of uitgeklapt is en/of een relatie heeft met andere componenten.',
  },
  {
    component: Wcag143,
    sc: '1.4.3',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'De contrastverhouding van de tekstkleur in de button met de achtergrondkleur is hoog genoeg.',
  },
  {
    component: Wcag145,
    sc: '1.4.5',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Het label van de button bestaat uit gewone tekst, niet uit een afbeelding van tekst.',
  },
  {
    component: Wcag1411,
    sc: '1.4.11',
    status: '',
    tags: ['designer', 'contentmaker'],
    title:
      'Als het zichtbare label van de button een afbeelding of icoon is, dan is het contrast tussen de afbeelding en de achtergrond minimaal 3:1.',
  },
  {
    component: Wcag212,
    sc: '2.1.2',
    status: '',
    tags: ['developer'],
    title: 'De functionaliteit van de button veroorzaakt geen toetsenbordval.',
  },
  {
    component: Wcag243,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title:
      'De focusvolgorde om bij de button te komen, en de focusvolgorde na het activeren van de button is logisch en voorspelbaar.',
  },
  {
    component: Wcag246,
    sc: '2.4.6',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Het label van de button maakt kort en bondig duidelijk waar de button voor dient.',
  },
  {
    component: Wcag2411,
    sc: '2.4.11',
    status: '',
    tags: ['designer', 'developer'],
    title: 'Als de button de toetsenbordfocus krijgt, is het element niet volledig bedekt door andere inhoud.',
  },
  {
    component: Wcag2412,
    sc: '2.4.12',
    status: '',
    tags: ['designer', 'developer'],
    title: 'Als de button de toetsenbordfocus krijgt, is het element helemaal niet bedekt door andere inhoud.',
  },
  {
    component: Wcag2413,
    sc: '2.4.13',
    status: '',
    tags: ['designer', 'developer'],
    title: 'De button heeft een goed zichtbare focusindicator.',
  },
  {
    component: Wcag253,
    sc: '2.5.3',
    status: '',
    tags: ['developer'],
    title: 'De zichtbare naam van de button is gelijk aan de toegankelijke naam.',
  },
  {
    component: Wcag255,
    sc: '2.5.5',
    status: '',
    tags: ['designer', 'developer'],
    title: 'De button heeft een minimale grootte van 44 bij 44 pixels.',
  },
  {
    component: Wcag312,
    sc: '3.1.2',
    status: '',
    tags: ['developer', 'contentmaker'],
    title:
      'Als een buttontekst in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.',
  },
  {
    component: Wcag321,
    sc: '3.2.1',
    status: '',
    tags: ['developer'],
    title: 'De button activeert niet al bij toetsenbordfocus.',
  },
  {
    component: Wcag324,
    sc: '3.2.4',
    status: '',
    tags: ['designer', 'developer'],
    title: 'Buttons met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.',
  },
  {
    component: Wcag412,
    sc: '4.1.2',
    status: '',
    tags: ['designer', 'contentmaker'],
    title:
      'De button heeft een toegankelijke naam die duidelijk maakt waar de button voor dient en de staat van de button is beschikbaar.',
  },
];

export const component = [
  {
    component: Wcag131NLDS,
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'Het is mogelijk om relaties met andere componenten aan te geven.',
  },
  {
    component: Wcag144,
    sc: '1.4.4',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
  },
  {
    component: Wcag1412,
    sc: '1.4.12',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.',
  },
  {
    component: Wcag211,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'Je kunt de button focussen met de tabtoets en activeren met de spatiebalk en de entertoets.',
  },
  {
    component: Wcag247,
    sc: '2.4.7',
    status: '',
    tags: ['developer'],
    title: 'Wanneer een button de toetsenbordfocus krijgt is de focus zichtbaar.',
  },
  {
    component: Wcag252,
    sc: '2.5.2',
    status: '',
    tags: ['developer'],
    title:
      'Als de gebruiker een button indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.',
  },
  {
    component: Wcag412NLDS,
    sc: '4.1.2',
    status: '',
    tags: ['developer'],
    title: 'De button heeft een rol van button en het type is instelbaar.',
  },
];
