# NL Design System Baseline

<Paragraph lead>
  Wij maken technologie voor gebruikers, daarom bepalen we hier welke browsers en hulpmiddelen zoveel gebruikt worden
  dat je moet zorgen dat het er goed mee werkt.
</Paragraph>

Met deze Baseline stellen we vast welke technologieën NL Design System ondersteunt. Het kernteam gebruikt de Baseline om mee te testen tijdens het ontwikkelen van de Candidate en Hall of Fame componenten en webpagina's.

We raden gebruik van de Baseline voor ontwikkelingen met NL Design System aan, maar het kernteam stelt deze niet verplicht voor Community bijdragen. Organisaties kunnen kiezen deze Baseline bij opdrachten of aanbestedingen wel verplicht te maken.

Als je een developer of tester bent, dan kun je de NL Design System Baseline gebruiken om vooraf te beslissen welke techonologie je gebruikt, en achteraf gebruiken om een testplan mee uit te voeren.

## Technologie met brede ondersteuning

De populaire website [Can I Use](https://www.caniuse.com/) biedt een gebruiksvriendelijk overzicht of de browserondersteuning voldoende is. Als een feature de Data Badge heeft met "<span lang="en">Widely available across major browsers</span>", dan kun mag je de feature gebruiken.

Features met de Data Badge "<span lang="en">Newly available across major browsers</span>" moet je alleen gebruiken als je ook een goed werkend alternatief biedt met Baseline ondersteuning.

We gebruiken Can I Use omdat ze een goed systeem hebben. Op basis van [statistieken in de RUM Archive](https://rumarchive.com/insights/#ua-marketshare) wordt bepaald welke browserversies wereldwijd veel gebruikt worden. Per technologie is bekend in welke browserversie de ondersteuning begint. Met de gecombineerde informatie kun je weten of browserondersteuning voldoende in browsersversies die tussen 30 maanden geleden en nu zijn gepubliceerd. Dit is wat Can I Use doet.

Bijvoorbeeld: [CSS Grid Layout](https://caniuse.com/css-grid) wordt goed ondersteund en daarom gebruiken we `display: grid`. Maar [CSS Subgrid](https://caniuse.com/css-subgrid) is eind 2024 nog gemarkeerd als "<span lang="en">Newly available across major browsers</span>" en daarom gebruiken we CSS Subgrid nog niet.

## Software om mee te testen

De volgende combinaties van software moet je mee testen voor functionaliteit en WCAG 2.2 successcriteria. Gebruik de laatste versie van alle software.

- Chrome met [de screenreader JAWS](https://www.freedomscientific.com/products/software/jaws/) op Windows
- Chrome met [de screenreader NVDA](https://www.nvaccess.org) op Windows
- Chrome op Android
- Chrome op Android met [de screenreader Talkback](https://support.google.com/accessibility/android/answer/6007100?hl%3Den)
- Chrome op Windows of macOS
- Firefox
- Firefox met de screenreader NVDA op Windows
- Safari op iOS
- Safari op [iOS met de screenreader VoiceOver](https://support.apple.com/en-gb/guide/iphone/iph3e2e415f/ios)
- Safari op macOS
- Safari op [macOS met de screenreader VoiceOver](https://support.apple.com/en-gb/guide/voiceover/welcome/mac)

Als bepaalde functionaliteit niet blijkt te werken in oudere softwareversies die minder oud zijn dan 30 maanden, overweeg dan wel om het probleem op te lossen en te testen in specifieke oudere softwareversies.

## Testen voor toegankelijkheid

Om vast te kunnen stellen of iets toegankelijk is en voldoet volgens WCAG, mag je zelf kiezen welke technologie je ondersteunt: de [Accessibility Support Baseline](https://www.w3.org/TR/WCAG-EM/#step1c). Voor NL Design System is dat vastgelegd op deze pagina.

Het toegankelijkheidsdoel van NL Design System is WCAG 2.2 Niveau AA. Daarmee voldoen we aan de wettelijke eis voor WCAG 2.1, plus enkele nieuwe successcriteria.

Als je een [WCAG-EM toegankelijkheidsonderzoek doet](https://www.w3.org/TR/WCAG-EM/), test dan met elke combinatie van software in lijst.

Je kunt de NL Design System Baseline noemen bij je onderzoeksrapport onder "basisniveau van toegankelijkheidsondersteuning". Je kunt verwijzen naar de Baseline momentopname onder ["bij het onderzoek gebruikte browsers en softwareprogramma's"](https://www.digitoegankelijk.nl/toegankelijkheidsverklaring/controle).
