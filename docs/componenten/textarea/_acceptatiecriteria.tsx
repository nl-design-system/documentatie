import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-textinput.md';
import Wcag132 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.2-textinput.md';
import Wcag135 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.5-textinput.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11-textinput.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4.md';
import Wcag211 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1.md';
import Wcag243 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-form.md';
import Wcag246 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.6-form.md';
import Wcag247 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.7.md';
import Wcag253 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.3-form.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag324 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.2.4-form.md';
import Wcag332 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.3.2-form.md';
import Wcag337 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.3.7-form.md';
import Wcag412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-4.1.2-textinput.md';
import Wcag412NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-4.1.2-nlds.md';
import Wcag141 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.1-summary.md';
import Wcag212 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.1.2-summary.md';
import Wcag258 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.5.8-summary.md';
import Wcag321 from '@nl-design-system-unstable/documentation/wcag/summaries/_3.2.1-summary.md';
import Wcag322 from '@nl-design-system-unstable/documentation/wcag/summaries/_3.2.2-summary.md';
import Wcag2411 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.4.11-summary.md';

export const usage = [
  {
    title:
      'Het label van de Text Area is gekoppeld aan de Text Area en het is duidelijk of de Text Area verplicht ingevuld moet worden.',
    sc: '1.3.1',
    status: '',
    component: Wcag131,
    tags: ['developer'],
  },
  {
    title: 'Instructies bij de Text Area staan op een logische plek.',
    sc: '1.3.2',
    status: '',
    component: Wcag132,
    tags: ['developer', 'designer', 'contentmaker'],
  },
  {
    title: 'Een Text Area die om persoonlijke gegevens vraagt heeft het juiste autocomplete-attribuut.',
    sc: '1.3.5',
    status: '',
    component: Wcag135,
    tags: ['developer'],
  },
  {
    title: 'Kleur is niet de enige manier om informatie over een Text Area weer te geven.',
    sc: '1.4.1',
    status: '',
    component: Wcag141,
    tags: ['designer'],
  },
  {
    title: 'Placeholderteksten hebben een contrastratio van minimaal 4,5:1 met de achtergrond. ',
    sc: '1.4.3',
    status: '',
    component: Wcag143,
    tags: ['designer'],
  },
  {
    title: 'De bezoeker kan de Text Area tot 400% vergroten zonder verlies van functionaliteit of informatie.',
    sc: '1.4.10',
    status: '',
    component: Wcag1410,
    tags: ['developer'],
  },
  {
    title: 'Niet-tekstuele informatie heeft een contrastratio van minimaal 3:1 met de achtergrond.',
    sc: '1.4.11',
    status: '',
    component: Wcag1411,
    tags: ['designer'],
  },
  {
    title: 'De Text Area veroorzaakt geen toetsenbordval.',
    sc: '2.1.2',
    status: '',
    component: Wcag212,
    tags: ['developer'],
  },
  {
    title: 'De Text Area staat op een logische plek in de focusvolgorde.',
    sc: '2.4.3',
    status: '',
    component: Wcag243,
    tags: ['developer'],
  },
  {
    title: 'De Text Area heeft een beschrijvend label en toegankelijke naam.',
    sc: '2.4.6',
    status: '',
    component: Wcag246,
    tags: ['designer', 'contentmaker'],
  },
  {
    title: 'Als de Text Area de toetsenbordfocus krijgt, is het niet volledig bedekt door andere inhoud.',
    sc: '2.4.11',
    status: '',
    component: Wcag2411,
    tags: ['developer'],
  },
  {
    title: 'De zichtbare naam van de Text Area is gelijk aan de toegankelijke naam.',
    sc: '2.5.3',
    status: '',
    component: Wcag253,
    tags: ['developer'],
  },
  {
    title: 'De Text Area heeft een minimale grootte van 24 bij 24 pixels.',
    sc: '2.5.8',
    status: '',
    component: Wcag258,
    tags: ['developer', 'designer'],
  },
  {
    title:
      'Als de placeholdertekst en invoertekst in een andere taal is dan de taal van de pagina, dan heeft het `textarea`-element een lang-attribuut met de juiste taalcode.',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
    tags: ['developer'],
  },
  {
    title: 'Als de Text Area focus krijgt, gebeurt er niets onverwachts.',
    sc: '3.2.1',
    status: '',
    component: Wcag321,
    tags: ['developer'],
  },
  {
    title: 'Bij het invullen van de Text Area gebeurt er niets onverwachts.',
    sc: '3.2.2',
    status: '',
    component: Wcag322,
    tags: ['developer', 'designer'],
  },
  {
    title: "Text Area's met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.",
    sc: '3.2.4',
    status: '',
    component: Wcag324,
    tags: ['developer', 'designer'],
  },
  {
    title: 'De naam en instructies over het invullen van de Text Area staan niet alleen in de placeholder',
    sc: '3.3.2',
    status: '',
    component: Wcag332,
    tags: ['developer', 'designer'],
  },
  {
    title:
      'Gebruikers hoeven dezelfde gegevens niet opnieuw in te voeren als deze al eerder in hetzelfde proces zijn ingevuld of beschikbaar zijn in het systeem.',
    sc: '3.3.7',
    status: '',
    component: Wcag337,
    tags: ['designer', 'contentmaker'],
  },
  {
    title:
      'De Text Area heeft een toegankelijke naam en rol, en de inhoud en eigenschappen zijn beschikbaar voor hulpsoftware. ',
    sc: '4.1.2',
    status: '',
    component: Wcag412,
    tags: ['designer', 'contentmaker'],
  },
];

export const component = [
  {
    title: 'Het is mogelijk om autocomplete in te stellen bij de Text Area.',
    sc: '1.3.5',
    status: '',
    component: Wcag135,
    tags: ['developer'],
  },
  {
    title: 'Teksten blijven leesbaar wanneer de tekstafstand vergroot wordt.',
    sc: '1.4.12',
    status: '',
    component: Wcag1412,
    tags: ['developer'],
  },
  {
    title: 'Als je de tekst van placeholders vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
    sc: '1.4.4',
    status: '',
    component: Wcag144,
    tags: ['developer'],
  },
  {
    title: 'Je kunt de Text Area bereiken en bedienen met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211,
    tags: ['developer'],
  },
  {
    title: 'Als de Text Area de toetsenbordfocus krijgt is de focus zichtbaar.',
    sc: '2.4.7',
    status: '',
    component: Wcag247,
    tags: ['developer'],
  },
  {
    title:
      'Het is mogelijk de Text Area een toegankelijke naam en de juiste rol te geven en de inhoud en rol zijn beschikbaar voor hulpsoftware.',
    sc: '4.1.2',
    status: '',
    component: Wcag412NLDS,
    tags: ['developer'],
  },
];
