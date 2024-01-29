## Samenvatting boven het formulier

Een zeer gebruikersvriendelijke manier om fouten weer te geven is een combinatie van:

- een samenvatting boven het formulier en;
- per formulierveld de foutmelding herhalen.

Elke foutmelding in de samenvatting is ook een link naar het formulier. Hierdoor kan de toetsenbordgebruiker direct doorgaan naar het veld met de foutmelding.

De constructie is als volgt:

- Na het versturen van een formulier met fouten wordt **boven** het formulier een lijst met fouten getoond.
- Deze lijst heeft een kopje met bijvoorbeeld de tekst:
  "Er was een probleem met je inzending. Verbeter de fouten voor je verder gaat.".
- Daaronder staat een lijst met de foutmeldingen. Elke foutmelding is ook een link naar het bijbehorende formulierveld.
- Het kopje boven de fouten krijgt de toetsenbordfocus. Dan staat het meteen in beeld, wordt het voorgelezen door screenreaders en is de tabvolgorde logisch: de links naar de betreffende velden zijn de eerstvolgende items.

Door het schrijven van duidelijke foutmeldingen voldoe je aan het WCAG-succescriterium [3.3.1 Foutidentificatie](https://www.w3.org/Translations/WCAG21-nl/#foutidentificatie) (niveau A).
