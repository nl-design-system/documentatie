<!-- @license CC0-1.0 -->

Gebruik de Color Sample component altijd in combinatie met tekst.

Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.

Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in `px`, maar gebruik een relatieve waarde als `em` of `rem`.

Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld `overflow-wrap: break-word; hyphens: auto;` eventueel in combinatie `text-wrap-style: balance`. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op `:root` niveau.

NL Design System richtlijnen:

- [Let op voorkeursinstellingen voor typografie](/richtlijnen/stijl/typografie/voorkeur)
- [Zorg ervoor dat letters groot genoeg zijn](/richtlijnen/stijl/typografie/lettergrootte)
