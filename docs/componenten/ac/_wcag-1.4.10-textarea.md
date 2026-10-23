<!-- @license CC0-1.0 -->

De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.

Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).

Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten.

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
