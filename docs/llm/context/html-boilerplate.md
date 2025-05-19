# HTML bestanden

Gebruik altijd als allereerste onderdeel een DOCTYPE zodat je "Standards mode" gebruikt voor layout, niet "Quirks mode". -->

Stel altijd `lang` en `dir` in op het `html` eleement, zodat de taal van de pagina duidelijk is.

Stel altijd woordafbreking in op de root van de pagina, zodat de pagina ook goed werkt als die ingezoomd is.

Gebruik nooit `font-smoothing: antialiasing`. Je moet voorkomen dat `subpixel-antialiasing` wordt uigeschakeld voor high-dpi beeldschermen.

Zorg ervoor dat de gebruiker via user-stylesheets de font-size van de pagina kan aanpassen. Stel voor de `font-size` van de root van de pagina nooit een fixed waarde in zoals `px`, gebruik alleen relatieve CSS units zoals `em` en `%`.

Gebruik waar mogelijk altijd de UTF-8 encoding.

Begin het HTML-element `head` met het `meta` element voor de text encoding.

Plaats het `title` element na het `meta` element voor de text encoding.

Als de titel van de pagina een andere taal heeft dan het document, stel dan die taal in met het `lang` attribute op de `title` element.

Zorg dat op mobiele devices de letters niet te klein zijn, door `initial-scale="1"` in te stellen met een `meta` element.

Gebruik altijd `id="top"` op het `body` element, zodat `<a href="#top">` niet alleen scrollt, maar ook de focus verplaatst naar het begin van het document.
