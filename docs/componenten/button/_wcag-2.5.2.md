<!-- @license CC0-1.0 -->

Als de gebruiker een button indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid is om actie te voorkomen of ongedaan te maken.

Dat kan op meerdere manieren:

- De actie gebeurt pas bij de `up`-event, en de gebruiker kan nog de aanwijzer verplaatsen naar buiten het element om de `up`-event te voorkomen.
- De actie gebeurt bij de `down`-event, maar bij de `up`-event wordt het effect weer ongedaan gemaakt.
- Je kunt het effect achteraf weer ongedaan maken.
