import Wcag111 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-link.md';
import Wcag141 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.1-link.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11-link.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag211 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-link.md';
import Wcag247 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.7.md';
import Wcag252 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.2.md';
import Wcag253 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.3-link.md';
import Wcag255 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.5.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag324 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.2.4.md';
import Wcag145 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.5-summary.md';
import Wcag212 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.1.2-summary.md';
import Wcag2411 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.4.11-summary.md';
import Wcag244 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.4.4-summary.md';

export const usage = [
  {
    component: Wcag111,
    sc: '1.1.1',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Als het label van de Link uit een icoon bestaat, dan heeft deze een goed tekstalternatief.',
  },
  {
    component: Wcag141,
    sc: '1.4.1',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Links in een lopende tekst zijn duidelijk zichtbaar.',
  },
  {
    component: Wcag143,
    sc: '1.4.3',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'De contrastverhouding van de tekstkleur van de Link met de achtergrondkleur is hoog genoeg.',
  },
  {
    component: Wcag145,
    sc: '1.4.5',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Het label van de Link bestaat uit gewone tekst, niet uit een afbeelding van tekst.',
  },
  {
    component: Wcag1411,
    sc: '1.4.11',
    status: '',
    tags: ['designer', 'contentmaker'],
    title:
      'Als het zichtbare label van de Link alleen een afbeelding of icoon is, dan is het contrast tussen de afbeelding en de achtergrond minimaal 3:1.',
  },
  {
    component: Wcag244,
    sc: '2.4.4',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'De linktekst van de Link vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).',
  },
  {
    component: Wcag2411,
    sc: '2.4.11',
    status: '',
    tags: ['developer', 'designer'],
    title: 'Als de Link de toetsenbordfocus krijgt, is het element niet volledig bedekt door andere inhoud',
  },
  {
    component: Wcag312,
    sc: '3.1.2',
    status: '',
    tags: ['developer', 'contentmaker'],
    title:
      'Als de tekst van de Link in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.',
  },
  {
    component: Wcag324,
    sc: '3.2.4',
    status: '',
    tags: ['developer', 'designer', 'contentmaker'],
    title: 'Links met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label',
  },
];

export const component = [
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
    title: 'Je kunt de Link focussen met de tabtoets en activeren met de entertoets.',
  },
  {
    component: Wcag212,
    sc: '2.1.2',
    status: '',
    tags: ['developer'],
    title: 'De functionaliteit van de Link veroorzaakt geen toetsenbordval.',
  },
  {
    component: Wcag247,
    sc: '2.4.7',
    status: '',
    tags: ['developer', 'designer'],
    title: 'Wanneer de Link de toetsenbordfocus krijgt is de focus zichtbaar.',
  },
  /* Suspended until we have a common implementation of focus-indicator in 2025Q1 */
  /*
    {
      title: "De Link heeft een goed zichtbare focusindicator.",
      sc: "2.4.13",
      status: "",
      component: Wcag2413,
      tags: ["developer", "designer"],
    },
    */
  {
    component: Wcag252,
    sc: '2.5.2',
    status: '',
    tags: ['developer'],
    title:
      'Als de gebruiker de Link indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.',
  },
  {
    component: Wcag253,
    sc: '2.5.3',
    status: '',
    tags: ['developer'],
    title: 'De zichtbare naam van de Link komt voor in de toegankelijke naam.',
  },
  {
    component: Wcag255,
    sc: '2.5.5',
    status: '',
    tags: ['developer'],
    title: 'De Link heeft een aanklikbaar gedeelte van ten minste 44 bij 44 pixels.',
  },
];
