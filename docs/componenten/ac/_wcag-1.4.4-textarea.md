<!-- @license CC0-1.0 -->

Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.

Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in `px`, maar gebruik een relatieve waarde als `em` of `rem`.

Definieer in de CSS op `:root` niveau een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld `overflow-wrap: break-word; hyphens: auto;` eventueel in combinatie met `text-wrap-style: balance`. Zo ontstaat er geen horizontale scrollbar op de pagina en wordt tekst niet onleesbaar. Definieer daarna in de CSS op component niveau voor de Text Area dat de tekst niet tijdens het bewerken opnieuw ingedeeld wordt. Dit doe je met `text-wrap-style: stable`.

```css
* {
  overflow-wrap: break-word;
  hyphens: auto;
  text-wrap-style: balance;
}

textarea {
  text-wrap-style: stable;
}
```

Gebruik daarnaast in CSS geen:

- `resize: none`. Hiermee verdwijnt de resize handle, waardoor bezoekers het tekstveld niet meer zelf groter kunnen maken. Met een vergrootbaar veld hoeven bezoekers niet te scrollen om langere teksten na te lezen en te controleren.
- `min-inline-size`. Bij hogere zoomniveaus past de Text Area hierdoor mogelijk niet meer op de pagina, waardoor een horizontale scrollbar ontstaat.

NL Design System richtlijnen:

- [Let op voorkeursinstellingen voor typografie](/richtlijnen/stijl/typografie/voorkeur)
- [Zorg ervoor dat letters groot genoeg zijn](/richtlijnen/stijl/typografie/lettergrootte)
