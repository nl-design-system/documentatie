<!-- @license CC0-1.0 -->

De relatie tussen de links in het broodkruimelpad moet niet alleen visueel, maar ook voor bezoekers die gebruik maken van voorleessoftware duidelijk zijn.

Het broodkruimelpad is herkenbaar als navigatiemenu door het `nav` element te gebruiken, of door `role="navigation"` te gebruiken. Gebruik bij voorkeur altijd HTML elementen, tenzij het echt niet anders kan.

Het navigatiemenu heeft een toegankelijke naam om het te onderscheiden van andere navigatiemenu's op de pagina. Bijvoorbeeld met `aria-label`, of door met `aria-labelledby` te verwijzen naar een visueel verborgen `h2` element in het broodkruimelpad.

De links in het broodkruimelpad staan binnen het `nav` element in een georderende lijst: het `ol` element. Dit geeft de hiërarchie in de links aan. Iedere link is afzonderlijk opgemaakt met een `li` element en staat genest binnen het `ol` element.

De huidige pagina in het broodkruimelpad hoeft niet als link opgemaakt te zijn, maar bevat wel het `aria-current="page"` attribuut.

```html
<nav aria-label="Broodkruimelpad">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/zelfregelen">Zelf regelen</a></li>
    <li><a aria-current="page" href="/zelfregelen/rijbewijsaanvragen">Rijbewijs aanvragen</a></li>
  </ol>
</nav>
```
