import Wcag111Alert from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-alert.md';
import Wcag132Alert from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.2-alert.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag221Alert from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.2.1-alert.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag413Alert from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-4.1.3-alert.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSAlert from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-alert.md';
import Wcag413NLDSAlert from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-4.1.3-nlds-alert.md';
import Wcag133 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.3.3-summary.md';
import Wcag141 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.1-summary.md';

export const usage = [
  {
    component: Wcag111Alert,
    sc: '1.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Alert bevat geen informatieve icons, en decoratieve icons zijn verborgen voor hulpsoftware.',
  },
  {
    component: Wcag132Alert,
    sc: '1.3.2',
    status: '',
    tags: ['designer', 'developer'],
    title: 'De Alert staat op een logische plek op de pagina.',
  },
  {
    component: Wcag133,
    sc: '1.3.3',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Instructies in de Alert zijn op een inclusieve manier beschreven.',
  },
  {
    component: Wcag141,
    sc: '1.4.1',
    status: '',
    tags: ['designer'],
    title:
      'Als kleuren worden gebruikt om aan te geven of de melding in de Alert positief of negatief is, is die informatie ook op een andere manier beschikbaar.',
  },
  {
    component: Wcag143,
    sc: '1.4.3',
    status: '',
    tags: ['designer'],
    title: 'De tekst in de Alert heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.',
  },
  {
    component: Wcag144,
    sc: '1.4.4',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekst van de Alert vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
  },
  {
    component: Wcag1410,
    sc: '1.4.10',
    status: '',
    tags: ['developer', 'designer'],
    title: 'De bezoeker kan de Alert tot 400% vergroten zonder verlies van functionaliteit of informatie.',
  },
  {
    component: Wcag211NI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Alert is niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag221Alert,
    sc: '2.2.1',
    status: '',
    tags: ['developer'],
    title: 'Het lezen van de informatie in de Alert is niet gebonden aan een tijdslimiet.',
  },
  {
    component: Wcag243NI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Alert komt niet voor in de normale focusvolgorde van de pagina.',
  },
  {
    component: Wcag312,
    sc: '3.1.2',
    status: '',
    tags: ['developer'],
    title:
      'Als de Alert in een andere taal is dan de taal van de pagina, dan heeft het een lang-attribuut met de juiste taalcode.',
  },
  {
    component: Wcag413Alert,
    sc: '4.1.3',
    status: '',
    tags: ['developer'],
    title: 'Meldingen in de Alert worden voorgelezen aan bezoekers die een screenreader gebruiken.',
  },
];

export const component = [
  {
    component: Wcag1412,
    sc: '1.4.12',
    status: '',
    tags: ['developer'],
    title: 'Tekst in de Alert blijft leesbaar wanneer de tekstafstand vergroot wordt.',
  },
  {
    component: Wcag211NLDSNI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Alert is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NLDSAlert,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'Het is mogelijk om via code de toetsenbordfocus naar de Alert te verplaatsen.',
  },
  {
    component: Wcag413NLDSAlert,
    sc: '4.1.3',
    status: '',
    tags: ['developer'],
    title: 'Het is mogelijk om van de Alert een live-region te maken.',
  },
];
