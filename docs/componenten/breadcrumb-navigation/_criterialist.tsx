import Wcag111 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.1.1-breadcrumb.md';
import Wcag131 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.3.1-breadcrumb.md';
import Wcag1410 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.10-breadcrumb.md';
import Wcag1411 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.11-breadcrumb.md';
import Wcag1412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.12-breadcrumb.md';
import Wcag143 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.3.md';
import Wcag144 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-1.4.4-breadcrumb.md';
import Wcag211 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.1.1.md';
import Wcag2413 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.13.md';
import Wcag243 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.3-breadcrumb.md';
import Wcag247 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.4.7.md';
import Wcag252 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.2-breadcrumb.md';
import Wcag258 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-2.5.8-breadcrumb.md';
import Wcag323 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-3.2.3-breadcrumb.md';
import Wcag412 from '@nl-design-system-unstable/documentation/componenten/ac/_wcag-4.1.2-breadcrumb.md';
import Wcag132 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.3.2-summary.md';
import Wcag145 from '@nl-design-system-unstable/documentation/wcag/summaries/_1.4.5-summary.md';
import Wcag212 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.1.2-summary.md';
import Wcag2411 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.4.11-summary.md';
import Wcag244 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.4.4-summary.md';
import Wcag253 from '@nl-design-system-unstable/documentation/wcag/summaries/_2.5.3-summary.md';
import Wcag312 from '@nl-design-system-unstable/documentation/wcag/summaries/_3.1.2-summary.md';
import Wcag321 from '@nl-design-system-unstable/documentation/wcag/summaries/_3.2.1-summary.md';
import Wcag324 from '@nl-design-system-unstable/documentation/wcag/summaries/_3.2.4-summary.md';

export const general = [
  {
    component: Wcag244,
    sc: '2.4.4',
    status: '',
    title: 'De linkteksten van de links in het broodkruimelpad zijn voor iedereen duidelijk',
  },
  {
    component: Wcag252,
    sc: '2.5.2',
    status: '',
    title: 'De bezoeker kan het activeren van links in het broodkruimelpad annuleren',
  },
  {
    component: Wcag253,
    sc: '2.5.3',
    status: '',
    title:
      'De visuele naam van de links in het broodkruimelpad komen voor in de toegankelijke naam van de links in het broodkruimelpad',
  },
  {
    component: Wcag258,
    sc: '2.5.8',
    status: '',
    title: 'Het aanwijsgebied van de links in het broodkruimelpad is groot genoeg',
  },
  {
    component: Wcag312,
    sc: '3.1.2',
    status: '',
    title:
      'Als het broodkruimelpad tekst in een andere taal dan de hoofdtaal van de pagina bevat, wordt hier een taalwissel voor aangegeven',
  },
  {
    component: Wcag321,
    sc: '3.2.1',
    status: '',
    title: 'Het gedrag van het broodkruimelpad is voorspelbaar',
  },
  {
    component: Wcag323,
    sc: '3.2.3',
    status: '',
    title:
      "Als het broodkruimelpad op meerdere pagina's voorkomt, staat het overal op dezelfde plek en de links in het broodkruimelpad staan in dezelfde volgorde",
  },
];

export const visualDesign = [
  {
    component: Wcag143,
    sc: '1.4.3',
    status: '',
    title: 'De contrastratio tussen de tekst en de achtergrondkleur in het broodkruimelpad is hoog genoeg',
  },
  {
    component: Wcag145,
    sc: '1.4.5',
    status: '',
    title: 'Het broodkruimelpad bevat niet onnodig afbeeldingen van tekst',
  },
  {
    component: Wcag1411,
    sc: '1.4.11',
    status: '',
    title: 'Niet-tekstuele content in het broodkruimelpad heeft een contrastratio van minimaal 3:1 met de achtergrond',
  },
  {
    component: Wcag247,
    sc: '2.4.7',
    status: '',
    title: 'Het is zichtbaar wanneer links in het broodkruimelpad toetsenbordfocus hebben',
  },
  {
    component: Wcag258,
    sc: '2.5.8',
    status: '',
    title: 'Het aanwijsgebied van de links in het broodkruimelpad is groot genoeg',
  },
  {
    component: Wcag2413,
    sc: '2.4.13',
    status: '',
    title: 'Het is duidelijk zichtbaar wanneer links in het broodkruimelpad toetsenbordfocus hebben',
  },
  {
    component: Wcag324,
    sc: '3.2.4',
    status: '',
    title: "Als het broodkruimelpad op meerdere pagina's voorkomt, ziet het er hetzelfde uit en werkt het hetzelfde",
  },
];

export const zoom = [
  {
    component: Wcag144,
    sc: '1.4.4',
    status: '',
    title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar',
  },
  {
    component: Wcag1410,
    sc: '1.4.10',
    status: '',
    title: 'Bij inzoomen gaat er geen informatie of functionaliteit verloren',
  },
  {
    component: Wcag1412,
    sc: '1.4.12',
    status: '',
    title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar',
  },
];

export const keyboard = [
  {
    component: Wcag211,
    sc: '2.1.1',
    status: '',
    title: 'Links in het broodkruimelpad zijn bereikbaar en bedienbaar met het toetsenbord',
  },
  {
    component: Wcag212,
    sc: '2.1.2',
    status: '',
    title: 'Het broodkruimelpad zorgt niet voor een toetsenbordval',
  },
  {
    component: Wcag243,
    sc: '2.4.3',
    status: '',
    title: 'De focus volgorde volgt de hiërarchische structuur van het broodkruimelpad',
  },
  {
    component: Wcag247,
    sc: '2.4.7',
    status: '',
    title: 'Het is zichtbaar wanneer links in het broodkruimelpad toetsenbordfocus hebben',
  },
  {
    component: Wcag2411,
    sc: '2.4.11',
    status: '',
    title: 'De links in het broodkruimelpad worden niet bedekt door andere content',
  },
  {
    component: Wcag2413,
    sc: '2.4.13',
    status: '',
    title: 'Het is duidelijk zichtbaar wanneer links in het broodkruimelpad toetsenbordfocus hebben',
  },
];

export const screenreader = [
  {
    component: Wcag111,
    sc: '1.1.1',
    status: '',
    title: 'Informatieve afbeeldingen hebben een alternatieve tekst en decoratieve tekens en iconen zijn verborgen',
  },
  {
    component: Wcag131,
    sc: '1.3.1',
    status: '',
    title:
      'Het is duidelijk dat het om een navigatiemenu gaat en de relatie tussen de links in het broodkruimelpad is voor iedereen duidelijk ',
  },
  {
    component: Wcag132,
    sc: '1.3.2',
    status: '',
    title: 'De leesvolgorde van tekst en links in het broodkruimelpad is voor iedereen logisch',
  },
  {
    component: Wcag312,
    sc: '3.1.2',
    status: '',
    title:
      'Als het broodkruimelpad tekst in een andere taal dan de hoofdtaal van de pagina bevat, wordt hier een taalwissel voor aangegeven',
  },
  {
    component: Wcag412,
    sc: '4.1.2',
    status: '',
    title: 'Het broodkruimelpad en de links in het broodkruimelpad hebben een toegankelijke naam, rol en status',
  },
];
