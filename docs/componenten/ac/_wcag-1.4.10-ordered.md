<!-- @license CC0-1.0 -->

Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).

Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld `word-break: break-word; hyphens: auto;` in combinatie met `text-wrap-style: pretty` of `text-wrap-style: balance`. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op `:root` niveau.

Bij de Ordered List kan er informatie verloren gaan als het startgetal (de marker) veel ruimte inneemt. Bijvoorbeeld:

```html
<ol start="10000090">
  <li>Hallo</li>
  <li>Ik</li>
  <li>Ben</li>
  <li>Een</li>
  <li>Lijst</li>
</ol>
```

Een deel van het getal is dan niet meer zichtbaar. Je kunt dit oplossen door in CSS een grotere `margin-left` te gebruiken voor Ordered Lists met brede markers.
