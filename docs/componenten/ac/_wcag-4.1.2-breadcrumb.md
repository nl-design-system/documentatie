<!-- @license CC0-1.0 -->

Het broodkruimelpad staat in een `nav` element, of heeft `role="navigation"`, met een toegankelijke naam (bijvoorbeeld 'broodkruimelpad'). Gebruik bij voorkeur altijd HTML elementen, tenzij het echt niet anders kan.

De links in het broodkruimelpad staan genest in een `ol` element en iedere link staat in een `li` element. Gebruik geen `role="list'`, omdat de hiërarchie tussen de links dan verloren gaat.

De links in het broodkruimelpad hebben de rol van link. Gebruik hiervoor bij voorkeur het `a` element (met een `href` attribuut). Het is mogelijk om met ARIA een `role="link"` toe te voegen aan een ander element dan een `a`, maar dit is niet aan te raden. Heb je het absoluut nodig, zorg er dan voor dat het gekozen element ook voldoet aan de verwachte toetsenbordinteractie, focusstijl, etc. Let erop dat je hiervoor JavaScript nodig hebt.

De huidige (laatste) pagina in het broodkruimelpad geeft daarnaast ook met `aria-current="page"` aan dat het om de huidige pagina gaat.
