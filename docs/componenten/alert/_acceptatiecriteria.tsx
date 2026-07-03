import Wcag111Alert from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-alert.md';
import Wcag132Alert from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.2-alert.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag221Alert from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.2.1-alert.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag133 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.3.3-summary.md';
import Wcag141 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.1-summary.md';
import Wcag413Alert from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-4.1.3-alert.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSAlert from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-alert.md';
import Wcag413NLDSAlert from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-4.1.3-nlds-alert.md';

export const usage = [
  {
    title: 'De Alert bevat geen informatieve icons, en decoratieve icons zijn verborgen voor hulpsoftware.',
    sc: '1.1.1',
    status: '',
    component: Wcag111Alert,
    tags: ['developer'],
  },
  {
    title: 'De Alert staat op een logische plek op de pagina.',
    sc: '1.3.2',
    status: '',
    component: Wcag132Alert,
    tags: ['designer', 'developer'],
  },
  {
    title: 'Instructies in de Alert zijn op een inclusieve manier beschreven.',
    sc: '1.3.3',
    status: '',
    component: Wcag133,
    tags: ['designer', 'contentmaker'],
  },
  {
    title:
      'Als kleuren worden gebruikt om aan te geven of de melding in de Alert positief of negatief is, is die informatie ook op een andere manier beschikbaar.',
    sc: '1.4.1',
    status: '',
    component: Wcag141,
    tags: ['designer'],
  },
  {
    title: 'De tekst in de Alert heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.',
    sc: '1.4.3',
    status: '',
    component: Wcag143,
    tags: ['designer'],
  },
  {
    title: 'Als je de tekst van de Alert vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
    sc: '1.4.4',
    status: '',
    component: Wcag144,
    tags: ['developer'],
  },
  {
    title: 'De bezoeker kan de Alert tot 400% vergroten zonder verlies van functionaliteit of informatie.',
    sc: '1.4.10',
    status: '',
    component: Wcag1410,
    tags: ['developer', 'designer'],
  },
  {
    title: 'De Alert is niet bereikbaar en bedienbaar met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211NI,
    tags: ['developer'],
  },
  {
    title: 'Het lezen van de informatie in de Alert is niet gebonden aan een tijdslimiet.',
    sc: '2.2.1',
    status: '',
    component: Wcag221Alert,
    tags: ['developer'],
  },
  {
    title: 'De Alert komt niet voor in de normale focusvolgorde van de pagina.',
    sc: '2.4.3',
    status: '',
    component: Wcag243NI,
    tags: ['developer'],
  },
  {
    title:
      'Als de Alert in een andere taal is dan de taal van de pagina, dan heeft het een lang-attribuut met de juiste taalcode.',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
    tags: ['developer'],
  },
  {
    title: 'Meldingen in de Alert worden voorgelezen aan bezoekers die een screenreader gebruiken.',
    sc: '4.1.3',
    status: '',
    component: Wcag413Alert,
    tags: ['developer'],
  },
];

export const component = [
  {
    title: 'Tekst in de Alert blijft leesbaar wanneer de tekstafstand vergroot wordt. ',
    sc: '1.4.12',
    status: '',
    component: Wcag1412,
    tags: ['developer'],
  },
  {
    title: 'De Alert is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211NLDSNI,
    tags: ['developer'],
  },
  {
    title: 'Het is mogelijk om de toetsenbordfocus naar de Alert te verplaatsen.',
    sc: '2.4.3',
    status: '',
    component: Wcag243NLDSAlert,
    tags: ['developer'],
  },
  {
    title: 'Het is mogelijk om van de Alert een live-region te maken.',
    sc: '4.1.3',
    status: '',
    component: Wcag413NLDSAlert,
    tags: ['developer'],
  },
];
