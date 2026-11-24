import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag243 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-skip-link.md';
import Wcag244 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.4-skip-link.md';
import Wcag253 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.3-link.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag323 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.2.3-skip-link.md';
import Wcag324 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.2.4-link.md';
import Wcag1412NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.4.12-nlds.md';
import Wcag144NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.4.4-nlds.md';
import Wcag211NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds.md';
import Wcag2413NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.13-nlds.md';
import Wcag247NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.7-nlds.md';
import Wcag252NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.5.2-nlds.md';
import Wcag255NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.5.5-nlds.md';
import Wcag412NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-4.1.2-nlds.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.10-summary.md';
import Wcag145 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.5-summary.md';
import Wcag212 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.1.2-summary.md';
import Wcag241 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.4.1-summary.md';
import Wcag2411 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.4.11-summary.md';
import Wcag321 from '@nl-design-system-unstable/documentation/wcag/summaries/_3.2.1-summary.md';

export const usage = [
  {
    component: Wcag143,
    sc: '1.4.3',
    status: '',
    tags: ['designer'],
    title: 'De tekstkleur van de Skip Link heeft voldoende contrast met de achtergrondkleur.',
  },
  {
    component: Wcag145,
    sc: '1.4.5',
    status: '',
    tags: ['developer', 'contentmaker'],
    title: 'Het label van de Skip Link bestaat uit tekst, niet uit een afbeelding van tekst.',
  },
  {
    component: Wcag241,
    sc: '2.4.1',
    status: '',
    tags: ['developer'],
    title: 'De Skip Link slaat 1 of meerdere herhalende contentblokken over.',
  },
  {
    component: Wcag243,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title:
      'De Skip Link staat vooraan in de focusvolgorde van een pagina en verwijst naar de eerste niet-herhalende content op de pagina.',
  },
  {
    component: Wcag244,
    sc: '2.4.4',
    status: '',
    tags: ['developer', 'contentmaker'],
    title: 'De linktekst van de Skip Link beschrijft duidelijk het linkdoel.',
  },
  {
    component: Wcag2411,
    sc: '2.4.11',
    status: '',
    tags: ['developer'],
    title: 'De Skip Link wordt niet bedekt door een ander element op de pagina.',
  },
  {
    component: Wcag312,
    sc: '3.1.2',
    status: '',
    tags: ['developer', 'contentmaker'],
    title:
      'Als de tekst van de Skip Link in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.',
  },
  {
    component: Wcag323,
    sc: '3.2.3',
    status: '',
    tags: ['developer', 'designer'],
    title:
      "Skip Links die op meerdere pagina's voorkomen staan op iedere pagina vooraan in de focusvolgorde van een pagina.",
  },
];

export const component = [
  {
    component: Wcag144NLDS,
    sc: '1.4.4',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
  },
  {
    component: Wcag1410,
    sc: '1.4.10',
    status: '',
    tags: ['developer', 'designer'],
    title:
      'Als je de hele webpagina inzoomt tot 400% veroorzaakt de Skip Link geen horizontale scrollbalk en blijft alle tekst op de pagina leesbaar.',
  },
  {
    component: Wcag1412NLDS,
    sc: '1.4.12',
    status: '',
    tags: ['developer', 'designer'],
    title: 'De tekst in de Skip Link blijft zichtbaar als je de tekstafstand vergoot.',
  },
  {
    component: Wcag211NLDS,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'Je kunt de Skip Link focussen met de tabtoets en activeren met de entertoets.',
  },
  {
    component: Wcag212,
    sc: '2.1.2',
    status: '',
    tags: ['developer'],
    title:
      'Als een gebruiker de Skip Link focust met het toetsenbord, dan moet deze ook weer weg kunnen gaan met het toetsenbord.',
  },
  {
    component: Wcag247NLDS,
    sc: '2.4.7',
    status: '',
    tags: ['developer', 'designer'],
    title: 'De Skip Link heeft een zichtbare focusindicator.',
  },
  {
    component: Wcag2413NLDS,
    sc: '2.4.13',
    status: '',
    tags: ['developer', 'designer'],
    title: 'De Skip Link heeft een zichtbare focusindicator met een dikte van minimaal 2 pixels.',
  },
  {
    component: Wcag252NLDS,
    sc: '2.5.2',
    status: '',
    tags: ['developer'],
    title: 'De Skip Link activeren met een enkele aanwijzer kan voorkomen of geannuleerd worden.',
  },
  {
    component: Wcag253,
    sc: '2.5.3',
    status: '',
    tags: ['developer'],
    title: 'De zichtbare naam van de Skip Link komt voor in de toegankelijke naam.',
  },
  {
    component: Wcag255NLDS,
    sc: '2.5.5',
    status: '',
    tags: ['developer'],
    title: 'Het aanwijsgebied van de Skip Link is groot genoeg.',
  },
  {
    component: Wcag321,
    sc: '3.2.1',
    status: '',
    tags: ['developer'],
    title: 'Als de Skip Link toetsenbordfocus krijgt vindt er geen contextwijziging plaats.',
  },
  {
    component: Wcag324,
    sc: '3.2.4',
    status: '',
    tags: ['developer', 'designer'],
    title: 'Skip Links met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.',
  },
  {
    component: Wcag412NLDS,
    sc: '4.1.2',
    status: '',
    tags: ['developer'],
    title: 'De Skip Link heeft een rol van link.',
  },
];
