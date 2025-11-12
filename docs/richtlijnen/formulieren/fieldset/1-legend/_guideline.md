<!-- @license CC0-1.0 -->

import { VideoPlayer } from "@site/src/components/VideoPlayer";

# Legends bij een fieldset

Een `<legend>` dient als de naam van de groep. [Screenreaders](/woordenlijst/#screenreader) lezen deze legend voor bij elk invoerveld in de fieldset (groep), zodat deze koppeling ook duidelijk is zonder de visuele informatie.

`<legend>Uw adresgegevens</legend>`

Maak de inhoud van de legend kort en omschrijvend.

In onderstaande video leest VoiceOver in Safari drie verschillende fieldsets voor, een groep met keuzerondjes (radio buttons) en een bezorg- en factuuradres. De legend wordt steeds bij het formulierveld voorgelezen.
VoiceOver leest de legend twee keer voor bij het eerste veld van een groep, dit is een bug van VoiceOver.

<VideoPlayer id="WMa7LToyZVc" title="Demo fieldsets met VoiceOver in Safari"/>

## Koppen in een legend

Een legend kan ook een kopje bevatten. Zorg er wel voor dat het niveau van deze kopjes klopt in de <a href="https://www.a11yproject.com/posts/how-to-accessible-heading-structure/">hiërarchische koppenstructuur</a> van de hele pagina.

```html
<fieldset>
  <legend><h3>Bezorgadres</h3></legend>
    <label for="shipping-street">Straat en huisnummer</label>
    <input type="text" name="shipping-street" id="shipping-street" autocomplete="shipping address-line1">
    <label for="shipping-postal-code">Postcode</label>
    <input type="text" name="shipping-postal-code" id="shipping-postal-code" autocomplete="shipping postal-code">
    <label for="shipping-city">Stad</label>
    <input type="text" name="shipping-city" id="shipping-city" autocomplete="shipping address-level2">
</fieldset>

<fieldset>
  <legend><h3>Factuuradres</h3></legend>
    <label for="billing-street">Straat en huisnummer</label>
    <input type="text" name="billing-street" id="billing-street" autocomplete="billing address-line1">
    <label for="billing-postal-code">Postcode</label>
    <input type="text" name="billing-postal-code" id="billing-postal-code" autocomplete="billing postal-code">
    <label for="billing-city">Stad</label>
    <input type="text" name="billing-city" id="billing-city" autocomplete="billing address-level2">
</fieldset>
```
