import Wcag111d from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-decorative-icon.md';
import Wcag111i from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-informative-icon.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11.md';
import Wcag145 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.5-icon.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';
import Wcag244 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.4-icon.md';
import Wcag246 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.6-icon.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag324 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.2.4-icon.md';
import Wcag332 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.3.2-icon.md';
import Wcag111NLDSd from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.1.1-nlds-decorative-icon.md';
import Wcag111NLDSi from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.1.1-nlds-informative-icon.md';
import Wcag131NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-icon.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-noninteractives.md';
import Wcag141 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.1-summary.md';

export const usage = [
  {
    component: Wcag111i,
    sc: '1.1.1',
    status: '',
    tags: ['developer', 'contentmaker'],
    title: 'Informatieve Icons hebben een beschrijvende alternatieve tekst.',
  },
  {
    component: Wcag111d,
    sc: '1.1.1',
    status: '',
    tags: ['developer', 'contentmaker'],
    title: 'Decoratieve Icons zijn verborgen voor hulpsoftware.',
  },
  {
    component: Wcag141,
    sc: '1.4.1',
    status: '',
    tags: ['designer'],
    title: 'Als een Icon een status aangeeft, is die informatie niet alleen afhankelijk van kleur.',
  },
  {
    component: Wcag145,
    sc: '1.4.5',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Gebruik geen Icons om teksten te vormen.',
  },
  {
    component: Wcag1410,
    sc: '1.4.10',
    status: '',
    tags: ['designer', 'developer'],
    title: 'Bij zoom overlapt een Icon niet met andere content.',
  },
  {
    component: Wcag1411,
    sc: '1.4.11',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Een informatief Icon heeft een contrastratio van minimaal 3:1 met de achtergrond.',
  },
  {
    component: Wcag211NI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Icon is niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Icon komt niet voor in de normale focusvolgorde van de pagina.',
  },
  {
    component: Wcag244,
    sc: '2.4.4',
    status: '',
    tags: ['developer', 'contentmaker'],
    title: 'Als een Icon onderdeel is van een link, beschrijft de alternatieve tekst het doel van de Icon.',
  },
  {
    component: Wcag246,
    sc: '2.4.6',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Als een Icon wordt gebruikt als visueel label, is het duidelijk wat de betekenis is.',
  },
  {
    component: Wcag312,
    sc: '3.1.2',
    status: '',
    tags: ['developer'],
    title:
      'Als de alternatieve tekst van een Icon in een andere taal is dan de hoofdtaal van de pagina, is dat duidelijk aangegeven.',
  },
  {
    component: Wcag324,
    sc: '3.2.4',
    status: '',
    tags: ['developer', 'designer'],
    title:
      "Een component met dezelfde functionaliteit die op meerdere pagina's voorkomt, heeft op alle pagina's dezelfde Icon.",
  },
  {
    component: Wcag332,
    sc: '3.3.2',
    status: '',
    tags: ['designer', 'contentmaker'],
    title:
      'Als een Icon wordt gebruikt als visueel label van een invoermogelijkheid, is het duidelijk welke invoer gevraagd wordt. ',
  },
];

export const component = [
  {
    component: Wcag111NLDSi,
    sc: '1.1.1',
    status: '',
    tags: ['developer'],
    title: 'Informatieve Icons kunnen een alternatieve tekst hebben.',
  },
  {
    component: Wcag111NLDSd,
    sc: '1.1.1',
    status: '',
    tags: ['developer'],
    title: 'Decoratieve Icons kunnen verborgen worden voor hulpsoftware.',
  },
  {
    component: Wcag131NLDS,
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'Informatieve Icons hebben de rol van afbeelding in de accessibility tree.',
  },
  {
    component: Wcag211NLDSNI,
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Icon is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    component: Wcag243NLDSNI,
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Icon komt standaard niet voor in de focusvolgorde van de pagina.',
  },
];
