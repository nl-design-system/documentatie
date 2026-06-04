import Wcag111 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-breadcrumb.md';
import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-breadcrumb.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4-breadcrumb.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10-breadcrumb.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11-breadcrumb.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12-breadcrumb.md';
import Wcag211 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1.md';
import Wcag243 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-breadcrumb.md';
import Wcag247 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.7.md';
import Wcag2413 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.13.md';
import Wcag252 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.2-breadcrumb.md';
import Wcag258 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.8-breadcrumb.md';
import Wcag323 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.2.3-breadcrumb.md';
import Wcag412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-4.1.2-breadcrumb.md';
import Wcag132 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.3.2-summary.md';
import Wcag145 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.5-summary.md';
import Wcag212 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.1.2-summary.md';
import Wcag244 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.4.4-summary.md';
import Wcag2411 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.4.11-summary.md';
import Wcag253 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.5.3-summary.md';
import Wcag312 from '@nl-design-system-unstable/documentation/wcag/summaries/_3.1.2-summary.md';
import Wcag321 from '@nl-design-system-unstable/documentation/wcag/summaries/_3.2.1-summary.md';
import Wcag324 from '@nl-design-system-unstable/documentation/wcag/summaries/_3.2.4-summary.md';

export const general = [
  {
    title: 'De linkteksten van de links in het broodkruimelpad zijn voor iedereen duidelijk',
    sc: '2.4.4',
    status: '',
    component: Wcag244,
  },
  {
    title: 'De bezoeker kan het activeren van links in het broodkruimelpad annuleren',
    sc: '2.5.2',
    status: '',
    component: Wcag252,
  },
  {
    title:
      'De visuele naam van de links in het broodkruimelpad komen voor in de toegankelijke naam van de links in het broodkruimelpad',
    sc: '2.5.3',
    status: '',
    component: Wcag253,
  },
  {
    title: 'Het aanwijsgebied van de links in het broodkruimelpad is groot genoeg',
    sc: '2.5.8',
    status: '',
    component: Wcag258,
  },
  {
    title:
      'Als het broodkruimelpad tekst in een andere taal dan de hoofdtaal van de pagina bevat, wordt hier een taalwissel voor aangegeven',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
  },
  {
    title: 'Het gedrag van het broodkruimelpad is voorspelbaar',
    sc: '3.2.1',
    status: '',
    component: Wcag321,
  },
  {
    title:
      "Als het broodkruimelpad op meerdere pagina's voorkomt, staat het overal op dezelfde plek en de links in het broodkruimelpad staan in dezelfde volgorde",
    sc: '3.2.3',
    status: '',
    component: Wcag323,
  },
];

export const visualDesign = [
  {
    title: 'De contrastratio tussen de tekst en de achtergrondkleur in het broodkruimelpad is hoog genoeg',
    sc: '1.4.3',
    status: '',
    component: Wcag143,
  },
  {
    title: 'Het broodkruimelpad bevat niet onnodig afbeeldingen van tekst',
    sc: '1.4.5',
    status: '',
    component: Wcag145,
  },
  {
    title: 'Niet-tekstuele content in het broodkruimelpad heeft een contrastratio van minimaal 3:1 met de achtergrond',
    sc: '1.4.11',
    status: '',
    component: Wcag1411,
  },
  {
    title: 'Het is zichtbaar wanneer links in het broodkruimelpad toetsenbordfocus hebben',
    sc: '2.4.7',
    status: '',
    component: Wcag247,
  },
  {
    title: 'Het aanwijsgebied van de links in het broodkruimelpad is groot genoeg',
    sc: '2.5.8',
    status: '',
    component: Wcag258,
  },
  {
    title: 'Het is duidelijk zichtbaar wanneer links in het broodkruimelpad toetsenbordfocus hebben',
    sc: '2.4.13',
    status: '',
    component: Wcag2413,
  },
  {
    title: "Als het broodkruimelpad op meerdere pagina's voorkomt, ziet het er hetzelfde uit en werkt het hetzelfde",
    sc: '3.2.4',
    status: '',
    component: Wcag324,
  },
];

export const zoom = [
  {
    title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar',
    sc: '1.4.4',
    status: '',
    component: Wcag144,
  },
  {
    title: 'Bij inzoomen gaat er geen informatie of functionaliteit verloren',
    sc: '1.4.10',
    status: '',
    component: Wcag1410,
  },
  {
    title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar',
    sc: '1.4.12',
    status: '',
    component: Wcag1412,
  },
];

export const keyboard = [
  {
    title: 'Links in het broodkruimelpad zijn bereikbaar en bedienbaar met het toetsenbord',
    sc: '2.1.1',
    status: '',
    component: Wcag211,
  },
  {
    title: 'Het broodkruimelpad zorgt niet voor een toetsenbordval',
    sc: '2.1.2',
    status: '',
    component: Wcag212,
  },
  {
    title: 'De focus volgorde volgt de hiërarchische structuur van het broodkruimelpad',
    sc: '2.4.3',
    status: '',
    component: Wcag243,
  },
  {
    title: 'Het is zichtbaar wanneer links in het broodkruimelpad toetsenbordfocus hebben',
    sc: '2.4.7',
    status: '',
    component: Wcag247,
  },
  {
    title: 'De links in het broodkruimelpad worden niet bedekt door andere content',
    sc: '2.4.11',
    status: '',
    component: Wcag2411,
  },
  {
    title: 'Het is duidelijk zichtbaar wanneer links in het broodkruimelpad toetsenbordfocus hebben',
    sc: '2.4.13',
    status: '',
    component: Wcag2413,
  },
];

export const screenreader = [
  {
    title: 'Informatieve afbeeldingen hebben een alternatieve tekst en decoratieve tekens en iconen zijn verborgen',
    sc: '1.1.1',
    status: '',
    component: Wcag111,
  },
  {
    title:
      'Het is duidelijk dat het om een navigatiemenu gaat en de relatie tussen de links in het broodkruimelpad is voor iedereen duidelijk ',
    sc: '1.3.1',
    status: '',
    component: Wcag131,
  },
  {
    title: 'De leesvolgorde van tekst en links in het broodkruimelpad is voor iedereen logisch',
    sc: '1.3.2',
    status: '',
    component: Wcag132,
  },
  {
    title:
      'Als het broodkruimelpad tekst in een andere taal dan de hoofdtaal van de pagina bevat, wordt hier een taalwissel voor aangegeven',
    sc: '3.1.2',
    status: '',
    component: Wcag312,
  },
  {
    title: 'Het broodkruimelpad en de links in het broodkruimelpad hebben een toegankelijke naam, rol en status',
    sc: '4.1.2',
    status: '',
    component: Wcag412,
  },
];
