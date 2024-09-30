---
title: Programma • Design Systems Week 2024
hide_title: true
hide_table_of_contents: true
sidebar_label: Programma
pagination_label: Programma
sidebar_position: 2
slug: /events/design-systems-week-2024/programma
image: https://raw.githubusercontent.com/nl-design-system/documentatie/assets/dsw-24.png
---

import DSWSession from "../../../../src/components/DSWSession";
import speakers from "./speakers.json";
import { Link, Paragraph } from '@utrecht/component-library-react/dist/css-module';

## Programma Design Systems Week 2024

<Paragraph lead>Tijdens Design Systems Week kun je 4 dagen lang meerdere korte talks per dag volgen over het hoe en waarom van design systems. Online. Dit jaar bijvoorbeeld over het managen van design systems, toegankelijkheid, gebruikersonderzoek en code.</Paragraph>

<Paragraph>_Kijk of luister je mee? [Meld je aan](/events/design-systems-week/aanmelden) om op de hoogte te blijven en download vast het [kalender-bestand](/dsweek-2024/dsweek-2024.ics)._</Paragraph>

- Alle sessies zijn gratis online bij te wonen.
- Sessies duren ongeveer 30 minuten, inclusief tijd voor vragen.
- Bij Nederlandstalige sessies is een schrijftolk aanwezig.
- Sommige sessies worden in het Engels gegeven, dit wordt per sessie aangegeven.

<DSWSession title="RTL Styling in CSS" speakers={[speakers.AhmadShadeed]} organisation="Independent">

<Paragraph>Bij het bouwen van componenten met CSS gaat het er niet alleen om dat ze performant en responsive gebouwd zijn. We moeten er ook rekening mee houden hoe ze werken in meertalige websites. In zijn presentatie laat Ahmad zien hoe je een bestaand component kunt aanpassen zodat het werkt in zowel talen die van links naar rechts gelezen worden (LTR), als in talen die van rechts naar links gelezen worden (RTL). Hij laat ook zien hoe je veel voorkomende issues kunt testen en voorkomen.</Paragraph>

</DSWSession>

<DSWSession title="Using USWDS Accessibility Tests to Develop Accessibility Skills Across Government Teams" speakers={[speakers.AmyCole]} organisation="US Web Design System">

<Paragraph>Amy gaat ons laten zien hoe het US Web Design System toegankelijkheidstests in duidelijke taal heeft toegevoegd bij individuele componenten. In deze talk leer je hoe elk webteam – technisch of niet — deze tests kan gebruiken om een minimale baseline aan toegankelijkheidstests te doen, zoals tests met toetsenbord, screenreader, mobiele devices en vergrotingssoftware. Ze laat ook het iteratieve ontwerp- en bouwproces zien dat haar team heeft bij het maken van deze checklists.</Paragraph>

</DSWSession>

<DSWSession title="Wat je allemaal niet weet over je CSS" speakers={[speakers.BartVeneman]} organisation="Project Wallace" captioned>

<Paragraph>Met de komst van Sass, bundlers en frontend frameworks verdween een van de hoekstenen van het web development van vroeger. We hebben het over die style.css van duizend regels lang. Destijds had je nog een idee wat er allemaal in je CSS belandde, maar nu? Ga mee op expeditie door je CSS en we bekijken welke waardevolle informatie jouw CSS onthult over je Design System en je CSS kennis.</Paragraph>

</DSWSession>

<DSWSession title="Unmeasurable Accessibility: Beyond conformance" speakers={[speakers.DariceDeCuba]} organisation="darice.org" captioned>

<Paragraph>Darice gaat ons vertellen waarom zelfs als je design systeem de conformiteitscheck doorstaat, het mogelijk nog steeds niet toegankelijk is. Toegankelijkheid is meer dan ARIA, kleurcontrast en een toetsenbord-toegankelijk formulier. Aan de hand van voorbeelden en persoonlijke verhalen laat Darice zien welke ontoegankelijkheden ze regelmatig tegenkomt.</Paragraph>

</DSWSession>

<DSWSession title="Testing UI" speakers={[speakers.GertHengeveld]} organisation="Chromatic">

<Paragraph>Het bouwen van een design system is heel interessant. Maar zodra je design system gebruikt wordt ingezet voor applicaties in productie, wordt het uitrollen van updates risivovoller. Testen is een essentieel onderdeel van het maken van design systems en onderhoud helpt om de risico's te managen. In deze sessie legt Gert tools en methoden uit die je kunnen helpen om je UI componenten en integraties te testen, zodat je design system zich kan blijven doorontwikkelen.</Paragraph>

</DSWSession>

<DSWSession title="Design Systems: Choose your own adventure" speakers={[speakers.GeriReid]} organisation="Just Eat Takeaway">

<Paragraph>Kom kijken hoe Geri, een ervaren design systems verkenner met 8 jaar ervaring in design system avonturen, het onbekende terrein betreedt van toegankelijkheid in een grote productorganisatie. Zonder spelregels is Geri's zoektocht eentje die we allemaal vast herkennen: we vinden het uit terwijl we bezig zijn.</Paragraph>

<Paragraph>In deze ‘choose your own adventure’ sessie, ontdek je hoe de principes van design systems het pad naar een nieuwe uitdaging verlichten. Ben je klaar om te lachen, leren en misschien een beetje verdwalen? Ga mee op deze zoektocht naar de beste manier om teams mee te krijgen met digitale toegankelijkheid.</Paragraph>

</DSWSession>

<DSWSession title="Vlaams Design System: 10 jaar lessons learned" speakers={[speakers.GijsVeyfeyken, speakers.VincentSennesael, speakers.WarreBuysse]} organisation="Agentschap Digitaal Vlaanderen" captioned>

<Paragraph>In deze sessie vertellen Vincent, Warre en Gijs over de evolutie van het Vlaams Design System: hoe het evolueerde van een bibliotheek met web componenten naar een dienstverlening om van bij de start bouwers van e-loketten, toepassingen en websites te ondersteunen bij het ontwerpen en ontwikkelen. Met als focus: een herkenbare en eengemaakte gebruikerservaring voor burgers.</Paragraph>

<Paragraph>Ze vertellen ook over de de lessons learned uit deze voorbije tien jaar.</Paragraph>

</DSWSession>

<DSWSession title="Heartbeat: de Design Systems Week lightning talks editie" speakers={[speakers.MariekeBrouwer, speakers.BryandeJong]} organisation="NL Design System community" captioned>

<Paragraph>De [Heartbeat](/events/heartbeat) is een tweewekelijkse online bijeenkomst waarin het kernteam en de community van NL Design System delen waar ze mee bezig zijn. In deze speciale editie van de Heartbeat horen we uit verschillende organisaties in de community over hun ervaringen met NL Design System.</Paragraph>

<Paragraph>Bryan de Jong van VNG en Frameless: “We maken het makkelijker voor organisaties om aan de slag te gaan met NL Design System door het beschikbaar stellen van templates, documentatie en thema tooling binnen de community. Hiervoor gebruiken we community componenten en bestaande UX onderzoeken en designs.”</Paragraph>

<Paragraph>Marieke Brouwer van de Gemeente Groningen: “bij de gemeente zijn wij met een klein team actief bezig met het verbeteren van de gebruikerservaring voor onze inwoners en ondernemers. Een belangrijk onderdeel van mijn rol is de implementatie van het NL Design System. We gebruiken als een van de eerste gemeentes de voorbeeldbibliotheek als basis voor ons eigen design system. In mijn presentatie zal ik laten zien hoe wij de bibliotheek gebruiken (met de plugin van token studio) en wat we hiervan hebben geleerd.”</Paragraph>

</DSWSession>

<DSWSession title="Tips voor toegankelijke dienstverlening" speakers={[speakers.KimDenie]} organisation="adviseur" captioned>

<Paragraph>Hoe is het om te leven met een visuele beperking? Wat zijn de problemen waar je geheel verwacht of onverwachts tegenaan loopt? In deze sessie zal Kim Denie haar eigen verhaal vertellen en vanuit haar ervaring toelichten hoe je bijvoorbeeld achter het loket, op de werkvloer en online zo toegankelijk en inclusief mogelijk kan zijn.</Paragraph>

</DSWSession>

<DSWSession title="Je eerste gebruikersonderzoek doen, hoe doe je dat?" speakers={[speakers.JeroenDuChatinier]} organisation="Gemeente Utrecht" captioned>

<Paragraph>Gebruikersonderzoeken doen is leuk. Je krijgt van de mensen voor wie je het echt doet, te horen wat je goed doet, en wat er niet lekker gaat. Daardoor kan je verbeteringen doorvoeren die er voor je gebruikers echt toe doen.</Paragraph>

<Paragraph>Maar hoe begin je? Hoeveel mensen moet je spreken, en welke vragen stel je ze?</Paragraph>

<Paragraph>In deze presentatie vertelt Jeroen je hoe je het simpel houdt voor jezelf, zodat je morgen al zou kunnen beginnen met onderzoeken. Of het nou een stuk tekst is of een app, het principe van gebruikersonderzoek blijft hetzelfde. Stap voor stap vertelt Jeroen wat je kan doen om het simpel voor jezelf te maken, zodat je onderzoek behapbaar en significant blijft. Aan het einde van het onderzoek kan je aan de slag met het stappenplan, de checklist en de templates die je in deze presentatie hebt doorgenomen.</Paragraph>

</DSWSession>

<DSWSession title="Inclusief gebruikersonderzoek bij de Belastingdienst, een blik achter de schermen" speakers={[speakers.LotteBijl]} organisation="Belastingdienst" captioned>

<Paragraph>Als overheidsorganisatie houdt de Belastingdienst zich al jaren bezig met het digitaal toegankelijk maken van hun diensten, met als doel iedereen te kunnen bedienen, ongeacht hun beperkingen. Maar hoe bepaal je welke problemen na een WCAG-audit de hoogste prioriteit hebben, zodat ontwikkelteams snel de grootste impact voor gebruikers kunnen realiseren? En hoe voorkom je toekomstige toegankelijkheidsproblemen voor gebruikers? In deze sessie deelt Lotte Bijl hoe de Belastingdienst inclusief gebruikersonderzoek heeft ingezet om deze vragen te kunnen beantwoorden en vertelt ze over de inzichten en de uitdagingen die zij tegenkwamen bij het organiseren van deze onderzoeken.</Paragraph>

</DSWSession>

<DSWSession title="De voordelen van open werken met design systems bij de overheid" speakers={[speakers.MikeGifford]} organisation="Civic Actions">

<Paragraph>Voor veel overheden is bijdragen aan open source projecten een culturele uitdagingen. Er wordt vaak samengewerkt met mensen in andere delen van de overheid en daarbuiten. Design systems zijn een unieke kans voor overheden om met meer vertrouwen bij open source te omarmen. Mike heeft bijgedragen aan verschillende design systems van overheden en is altijd op zoek naar best practices en aanpakken van overheden over de hele wereld.</Paragraph>

</DSWSession>

<DSWSession title="Common direction, boring magic" speakers={[speakers.SteveMesser]} organisation="freelance">

<Paragraph>Steve vertelt over wat hij leerde terwijl hij werkte aan het GOV.‌UK Design System en andere platformen van de Britse overheid. Hij laat zien wat we kunnen leren van de principes die het web zo fantastisch maken, om meer waarde te creëren voor het publiek waar we het voor doen.</Paragraph>

</DSWSession>
