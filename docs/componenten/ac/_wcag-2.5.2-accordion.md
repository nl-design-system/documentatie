<!-- @license CC0-1.0 -->

Zorg ervoor dat, als de gebruiker de accordion (button of details summary combinatie) indrukt met een aanwijzer zoals een muis of vinger, er de mogelijkheid is om actie te voorkomen of ongedaan te maken.
Dit voorkomt het per ongeluk aanraken en openen van content, waarvan het niet de bedoeling was.
Dat kan op meerdere manieren:

- De actie gebeurt pas bij het up-event, en de gebruiker kan nog de aanwijzer verplaatsen naar buiten het element om het up-event te voorkomen.
- De actie gebeurt bij het down-event, maar bij het up-event wordt het effect weer ongedaan gemaakt.
- Je kunt het effect achteraf weer ongedaan maken.
