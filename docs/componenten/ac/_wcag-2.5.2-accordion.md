<!-- @license CC0-1.0 -->

Zorg ervoor dat, als de gebruiker de accordion aanraakt met een enkele aanwijzer, zoals een muis of vinger, er de mogelijkheid is om actie te voorkomen of ongedaan te maken.

Dit voorkomt het per ongeluk aanraken en openen van content, wanneer het niet de bedoeling was.

Met een zowel een `button` element als met een `details` en `summary` combinatie gaat dit automatisch goed. Met een div-element waarop `role= "button"` is geplaatst, moet zowel de toetsenbordinteractie als de interactie voor muis en touch nog worden toegevoegd. Gebruik voor dit laatste bij voorkeur het `click`-event, omdat dit apparaatonafhankelijk is.
