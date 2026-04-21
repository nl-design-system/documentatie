import Wcag111 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-color-sample.md';
import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-color-sample.md';
import Wcag111NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.1.1-nlds-colorsample.md';
import Wcag131NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-colorsample.md';
import Wcag132 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.2-color-sample.md';
import Wcag141 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.1-summary.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11-color-sample.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12-colorsample.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4-colorsample.md';
import Wcag145 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.5-color-sample.md';
import Wcag143 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.3-summary.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';

export const usage = [
  {
    title: 'De eigenschappen van de kleur in de Color Sample zijn in tekst beschreven.',
    sc: '1.1.1',
    status: '',
    component: Wcag111,
    tags: ['contentmaker', 'designer'],
  },
  {
    title: 'Het kleurvlak en de bijbehorende eigenschappen horen semantisch bij elkaar.',
    sc: '1.3.1',
    status: '',
    component: Wcag131,
    tags: ['contentmaker', 'designer'],
  },
  {
    title: 'Een screenreadergebruiker kan uit de leesvolgorde herkennen welk kleurvlak bij welke eigenschappen hoort.',
    sc: '1.3.2',
    status: '',
    component: Wcag132,
    tags: ['contentmaker', 'designer', 'developer'],
  },
  {
    title: 'Kleur is niet de enige manier waarop de informatie over de Color Sample beschikbaar is.',
    sc: '1.4.1',
    status: '',
    component: Wcag141,
    tags: ['contentmaker', 'designer'],
  },
  {
    title: 'Het kleurcontrast van de tekst van de eigenschappen van de Color Sample is voldoende.',
    sc: '1.4.3',
    status: '',
    component: Wcag143,
    tags: ['contentmaker', 'designer'],
  },
  {
    title: 'Als je de beschrijvende tekst bij een Color Sample vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
    sc: '1.4.4',
    status: '',
    component: Wcag144,
    tags: ['developer'],
  },
  {
    title: 'Het kleurvlak is duidelijk te onderscheiden ten opzichte van de achtergrond.',
    sc: '1.4.11',
    status: '',
    component: Wcag1411,
    tags: ['contentmaker', 'designer'],
  },
  {
    title:
      'Als je de tekstafstand van de beschrijvende tekst bij een Color Sample vergroot blijft de tekst in zijn geheel zichtbaar.',
    sc: '1.4.12',
    status: '',
    component: Wcag1412,
    tags: ['developer'],
  },
  {
    title: 'De Color Sample is niet bereikbaar en bedienbaar met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211NI,
    tags: ['developer'],
  },
  {
    title: 'De Color Sample komt niet voor in de normale focusvolgorde van de pagina.',
    sc: '2.4.3',
    status: '',
    component: Wcag243NI,
    tags: ['developer'],
  },
];

export const component = [
  {
    title: 'De Color Sample kan een alternatieve tekst hebben. ',
    sc: '1.1.1',
    status: '',
    component: Wcag111NLDS,
    tags: ['developer'],
  },
  {
    title: 'De Color Sample heeft de rol van afbeelding in de accessibility tree.',
    sc: '1.3.1',
    status: '',
    component: Wcag131NLDS,
    tags: ['developer'],
  },
  {
    title: 'De Color Sample is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211NLDSNI,
    tags: ['developer'],
  },
  {
    title: 'De Color Sample komt standaard niet voor in de focusvolgorde van de pagina.',
    sc: '2.4.3',
    status: '',
    component: Wcag243NLDSNI,
    tags: ['developer'],
  },
];
