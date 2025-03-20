<!-- @license CC0-1.0 -->

Zorg ervoor dat, als de gebruiker de accordion aanraakt met een enkele aanwijzer, zoals een muis of vinger, er de mogelijkheid is om actie te voorkomen of ongedaan te maken.

Dit voorkomt het per ongeluk aanraken en openen van content, wanneer het niet de bedoeling was.

Met een HTML link (`a` element met een `href` attribuut) gaat dit automatisch goed. Bij een `div` element met `role="button"` moet dit nog worden aangepast. Gebruik voor dit laatste bij voorkeur het `click` event, omdat dit apparaatonafhankelijk is.
