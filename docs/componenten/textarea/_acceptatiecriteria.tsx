import Wcag258 from '@nl-design-system-unstable/documentation//componenten/ac/_wcag-2.5.8-textarea.md';
import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-textarea.md';
import Wcag132 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.2-textarea.md';
import Wcag135 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.5-textarea.md';
import Wcag141 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.1-textarea.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10-textarea.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11-textarea.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12-textarea.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4-textarea.md';
import Wcag211 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1.md';
import Wcag243 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-form.md';
import Wcag246 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.6-form.md';
import Wcag247 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.7.md';
import Wcag253 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.3-form.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag324 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.2.4-form.md';
import Wcag332 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.3.2-form.md';
import Wcag337 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.3.7-form.md';
import Wcag412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-4.1.2-textarea.md';
import Wcag412NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-4.1.2-nlds.md';
import Wcag212 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.1.2-summary.md';
import Wcag2411 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.4.11-summary.md';
import Wcag321 from '@nl-design-system-unstable/documentation/wcag/summaries/_3.2.1-summary.md';
import Wcag322 from '@nl-design-system-unstable/documentation/wcag/summaries/_3.2.2-summary.md';

export const usage = [
  {
    component: Wcag131,
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title:
      'Het label van de Text Area is gekoppeld aan de Text Area en het is duidelijk of de Text Area verplicht ingevuld moet worden.',
  },
  {
    component: Wcag132,
    sc: '1.3.2',
    status: '',
    tags: ['developer', 'designer', 'contentmaker'],
    title: 'Instructies bij de Text Area staan op een logische plek.',
  },
  {
    component: Wcag135,
    sc: '1.3.5',
    status: '',
    tags: ['developer'],
    title: 'Een Text Area die om persoonlijke gegevens vraagt heeft het juiste autocomplete-attribuut.',
  },
  {
    component: Wcag141,
    sc: '1.4.1',
    status: '',
    tags: ['designer'],
    title: 'Kleur is niet de enige manier om informatie over een Text Area weer te geven.',
  },
  {
    component: Wcag143,
    sc: '1.4.3',
    status: '',
    tags: ['designer'],
    title: 'Placeholderteksten hebben een contrastratio van minimaal 4,5:1 met de achtergrond. ',
  },
  {
    component: Wcag1410,
    sc: '1.4.10',
    status: '',
    tags: ['developer'],
    title: 'De bezoeker kan de Text Area tot 400% vergroten zonder verlies van functionaliteit of informatie.',
  },
  {
    component: Wcag1411,
    sc: '1.4.11',
    status: '',
    tags: ['designer'],
    title: 'Niet-tekstuele informatie heeft een contrastratio van minimaal 3:1 met de achtergrond.',
  },
  {
    component: Wcag212,
    sc: '2.1.2',
    status: '',
    tags: ['developer'],
    title: 'De Text Area veroorzaakt geen toetsenbordval.',
  },
  {
    component: Wcag243,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Text Area staat op een logische plek in de focusvolgorde.',
  },
  {
    component: Wcag246,
    sc: '2.4.6',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'De Text Area heeft een beschrijvend label en toegankelijke naam.',
  },
  {
    component: Wcag2411,
    sc: '2.4.11',
    status: '',
    tags: ['developer'],
    title: 'Als de Text Area de toetsenbordfocus krijgt, is het niet volledig bedekt door andere inhoud.',
  },
  {
    component: Wcag253,
    sc: '2.5.3',
    status: '',
    tags: ['developer'],
    title: 'De zichtbare naam van de Text Area is gelijk aan de toegankelijke naam.',
  },
  {
    component: Wcag258,
    sc: '2.5.8',
    status: '',
    tags: ['developer', 'designer'],
    title: 'De Text Area is groot genoeg.',
  },
  {
    component: Wcag312,
    sc: '3.1.2',
    status: '',
    tags: ['developer'],
    title:
      'Als de placeholdertekst en invoertekst in een andere taal is dan de taal van de pagina, dan heeft het HTML-element textarea een lang-attribuut met de juiste taalcode.',
  },
  {
    component: Wcag321,
    sc: '3.2.1',
    status: '',
    tags: ['developer'],
    title: 'Als de Text Area focus krijgt, gebeurt er niets onverwachts.',
  },
  {
    component: Wcag322,
    sc: '3.2.2',
    status: '',
    tags: ['developer', 'designer'],
    title: 'Bij het invullen van de Text Area gebeurt er niets onverwachts.',
  },
  {
    component: Wcag324,
    sc: '3.2.4',
    status: '',
    tags: ['developer', 'designer'],
    title: "Text Area's met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.",
  },
  {
    component: Wcag332,
    sc: '3.3.2',
    status: '',
    tags: ['developer', 'designer'],
    title: 'De naam en instructies over het invullen van de Text Area staan niet alleen in de placeholder',
  },
  {
    component: Wcag337,
    sc: '3.3.7',
    status: '',
    tags: ['designer', 'contentmaker'],
    title:
      'Gebruikers hoeven dezelfde gegevens niet opnieuw in te voeren als deze al eerder in hetzelfde proces zijn ingevuld of beschikbaar zijn in het systeem.',
  },
  {
    component: Wcag412,
    sc: '4.1.2',
    status: '',
    tags: ['designer', 'contentmaker'],
    title:
      'De Text Area heeft een toegankelijke naam en rol, en de inhoud en eigenschappen zijn beschikbaar voor hulpsoftware. ',
  },
];

export const component = [
  {
    component: Wcag135,
    sc: '1.3.5',
    status: '',
    tags: ['developer'],
    title: 'Het is mogelijk om autocomplete in te stellen bij de Text Area.',
  },
  {
    component: Wcag1412,
    sc: '1.4.12',
    status: '',
    tags: ['developer'],
    title: 'Teksten blijven leesbaar wanneer de tekstafstand vergroot wordt.',
  },
  {
    component: Wcag144,
    sc: '1.4.4',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekst van placeholders vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
  },
  {
    component: Wcag211,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'Je kunt de Text Area bereiken en bedienen met het toetsenbord.',
  },
  {
    component: Wcag247,
    sc: '2.4.7',
    status: '',
    tags: ['developer'],
    title: 'Als de Text Area de toetsenbordfocus krijgt is de focus zichtbaar.',
  },
  {
    component: Wcag412NLDS,
    sc: '4.1.2',
    status: '',
    tags: ['developer'],
    title:
      'Het is mogelijk de Text Area een toegankelijke naam en de juiste rol te geven en de inhoud en rol zijn beschikbaar voor hulpsoftware.',
  },
];
