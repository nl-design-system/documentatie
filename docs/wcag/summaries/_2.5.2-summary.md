<!-- @license CC0-1.0 -->

Als je iets activeert met een muisaanwijzer, dan moet je de mogelijkheid hebben om de actie te voorkomen of ongedaan te maken.

Dat kan op meerdere manieren:

- De actie gebeurt pas bij de `up`-event, en je kan nog de aanwijzer verplaatsen naar buiten het element om de up-event te voorkomen.
- De actie gebeurt bij de `down`-event, maar bij de `up`-event wordt het effect weer ongedaan gemaakt.
- Je kunt het effect achteraf weer ongedaan maken.

Er is een uitzondering voor acties waarbij het essentieël is dat ze bij het `down`-event gebeuren.
