import Wcag111 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-color-sample.md';
import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-color-sample.md';
import Wcag132 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.2-color-sample.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11-color-sample.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12-colorsample.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4-colorsample.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';
import Wcag111NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.1.1-nlds-colorsample.md';
import Wcag131NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-colorsample.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-noninteractives.md';
import Wcag141 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.1-summary.md';
import Wcag143 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.3-summary.md';

export const usage = [
  {
    component: Wcag111,
    sc: '1.1.1',
    status: '',
    tags: ['contentmaker', 'designer'],
    title: 'De eigenschappen van de kleur in de Color Sample zijn in tekst beschreven.',
  },
  {
    component: Wcag131,
    sc: '1.3.1',
    status: '',
    tags: ['contentmaker', 'designer'],
    title: 'Het kleurvlak en de bijbehorende eigenschappen horen semantisch bij elkaar.',
  },
  {
    component: Wcag132,
    sc: '1.3.2',
    status: '',
    tags: ['contentmaker', 'designer', 'developer'],
    title: 'Een screenreadergebruiker kan uit de leesvolgorde herkennen welk kleurvlak bij welke eigenschappen hoort.',
  },
  {
    component: Wcag141,
    sc: '1.4.1',
    status: '',
    tags: ['contentmaker', 'designer'],
    title: 'Kleur is niet de enige manier waarop de informatie over de Color Sample beschikbaar is.',
  },
  {
    component: Wcag143,
    sc: '1.4.3',
    status: '',
    tags: ['contentmaker', 'designer'],
    title: 'Het kleurcontrast van de tekst van de eigenschappen van de Color Sample is voldoende.',
  },
  {
    component: Wcag144,
    sc: '1.4.4',
    status: '',
    tags: ['developer'],
    title: 'Als je de beschrijvende tekst bij een Color Sample vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
  },
  {
    component: Wcag1411,
    sc: '1.4.11',
    status: '',
    tags: ['contentmaker', 'designer'],
    title: 'Het kleurvlak is duidelijk te onderscheiden ten opzichte van de achtergrond.',
  },
  {
    component: Wcag1412,
    sc: '1.4.12',
    status: '',
    tags: ['developer'],
    title:
      'Als je de tekstafstand van de beschrijvende tekst bij een Color Sample vergroot blijft de tekst in zijn geheel zichtbaar.',
  },
  {
    component: Wcag211NI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Color Sample is niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Color Sample komt niet voor in de normale focusvolgorde van de pagina.',
  },
];

export const component = [
  {
    component: Wcag111NLDS,
    sc: '1.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Color Sample kan een alternatieve tekst hebben. ',
  },
  {
    component: Wcag131NLDS,
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'De Color Sample heeft de rol van afbeelding in de accessibility tree.',
  },
  {
    component: Wcag211NLDSNI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Color Sample is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NLDSNI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Color Sample komt standaard niet voor in de focusvolgorde van de pagina.',
  },
];
