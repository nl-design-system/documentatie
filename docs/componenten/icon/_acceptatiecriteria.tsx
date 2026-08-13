import Wcag111i from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-informative-icon.md';
import Wcag111d from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-decorative-icon.md';
import Wcag111NLDSi from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.1.1-nlds-informative-icon.md';
import Wcag111NLDSd from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.1.1-nlds-decorative-icon.md';
import Wcag131NLDS from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-1.3.1-nlds-icon.md';
import Wcag145 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.5-icon.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11.md';
import Wcag244 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.4-icon.md';
import Wcag246 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.6-icon.md';
import Wcag312 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.1.2.md';
import Wcag324 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.2.4-icon.md';
import Wcag332 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.3.2-icon.md';
import Wcag141 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.1-summary.md';
import Wcag211NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1-noninteractives.md';
import Wcag211NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.1.1-nlds-noninteractives.md';
import Wcag243NLDSNI from '@nl-design-system-unstable/documentation/componenten/ac/NLDS/_wcag-2.4.3-nlds-noninteractives.md';
import Wcag243NI from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-noninteractives.md';

export const usage = [
  {
    title: 'Informatieve Icons hebben een beschrijvende alternatieve tekst.',
    sc: '1.1.1',
    status: '',
    component: Wcag111i,
    tags: ['developer', 'contentmaker'],
  },
  {
    title: 'Decoratieve Icons zijn verborgen voor hulpsoftware.',
    sc: '1.1.1',
    status: '',
    component: Wcag111d,
    tags: ['developer', 'contentmaker'],
  },
  {
    title: 'Als een Icon een status aangeeft, is die informatie niet alleen afhankelijk van kleur.',
    sc: '1.4.1',
    status: '',
    component: Wcag141,
    tags: ['designer'],
  },
  {
    title: 'Gebruik geen Icons om teksten te vormen.',
    sc: '1.4.5',
    status: '',
    component: Wcag145,
    tags: ['designer', 'contentmaker'],
  },
  {
    title: 'Bij zoom overlapt een Icon niet met andere content.',
    sc: '1.4.10',
    status: '',
    component: Wcag1410,
    tags: ['designer', 'developer'],
  },
  {
    title: 'Een informatief Icon heeft een contrastratio van minimaal 3:1 met de achtergrond.',
    sc: '1.4.11',
    status: '',
    component: Wcag1411,
    tags: ['designer', 'contentmaker'],
  },
  {
    title: 'De Icon is niet bereikbaar en bedienbaar met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211NI,
    tags: ['developer'],
  },
  {
    title: 'De Icon komt niet voor in de normale focusvolgorde van de pagina.',
    sc: '2.4.3',
    status: '',
    component: Wcag243NI,
    tags: ['developer'],
  },
  {
    title: 'Als een Icon onderdeel is van een link, beschrijft de alternatieve tekst het doel van de Icon.',
    sc: '2.4.4',
    status: '',
    component: Wcag244,
    tags: ['developer', 'contentmaker'],
  },
  {
    title: 'Als een Icon wordt gebruikt als visueel label, is het duidelijk wat de betekenis is.',
    sc: '2.4.6',
    status: '',
    component: Wcag246,
    tags: ['designer', 'contentmaker'],
  },
  {
    title:
      'Als de alternatieve tekst van een Icon in een andere taal is dan de hoofdtaal van de pagina, is dat duidelijk aangegeven.',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
    tags: ['developer'],
  },
  {
    title:
      "Een component met dezelfde functionaliteit die op meerdere pagina's voorkomt, heeft op alle pagina's dezelfde Icon.",
    sc: '3.2.4',
    status: '',
    component: Wcag324,
    tags: ['developer', 'designer'],
  },
  {
    title:
      'Als een Icon wordt gebruikt als visueel label van een invoermogelijkheid, is het duidelijk welke invoer gevraagd wordt. ',
    sc: '3.3.2',
    status: '',
    component: Wcag332,
    tags: ['designer', 'contentmaker'],
  },
];

export const component = [
  {
    title: 'Informatieve Icons kunnen een alternatieve tekst hebben.',
    sc: '1.1.1',
    status: '',
    component: Wcag111NLDSi,
    tags: ['developer'],
  },
  {
    title: 'Decoratieve Icons kunnen verborgen worden voor hulpsoftware.',
    sc: '1.1.1',
    status: '',
    component: Wcag111NLDSd,
    tags: ['developer'],
  },
  {
    title: 'Informatieve Icons hebben de rol van afbeelding in de accessibility tree.',
    sc: '1.3.1',
    status: '',
    component: Wcag131NLDS,
    tags: ['developer'],
  },
  {
    title: 'De Icon is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
    sc: '2.1.1',
    status: '',
    component: Wcag211NLDSNI,
    tags: ['developer'],
  },
  {
    title: 'De Icon komt standaard niet voor in de focusvolgorde van de pagina.',
    sc: '2.4.3',
    status: '',
    component: Wcag243NLDSNI,
    tags: ['developer'],
  },
];
