## Zorg voor een goed kleurcontrast van de placeholdertekst

Kleurcontrast voor tekst ten opzichte van de achtergrond moet voldoen aan WCAG, dit geldt ook voor placeholders.

Sommige browsers zoals Firefox maken placeholdertekst standaard doorzichtiger. Voeg daarom in de CSS `opacity: 1` toe voor de placeholder.

```css!
::placeholder {
    opacity: 1;
    color: #757575;
}
```

Zie [::placeholder - CSS: Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder), op MDN.

**Tip:** De lichtste kleur grijs die je kunt gebruiken ten opzichte van een witte achtergrond is #757575 of rgb( 117, 117, 117).

Wanneer je zorgt voor voldoende kleurcontrast tussen placeholder en achtergrond, voldoe je aan het WCAG succescriterium: [Contrast (minimum), niveau AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
