# Periodiek access tokens instellen

Eens in de zoveel tijd verlopen tokens, dan moeten voor die tijd de access tokens vervangen worden om de dienstverlening te garanderen.

## Eisen voor access tokens

Access tokens moeten gemaakt worden met enkele beperkingen die de veiligheid verbeteren:

- Je moet net zo veilig met tokens omgaan als met wachtwoorden.
- Sla tokens alleen op met encryptie.
- Verstuur tokens alleen met encryptie. Bijvoorbeeld via HTTPS of [via Signal met een disappearing message](https://support.signal.org/hc/en-us/articles/360007320771-Set-and-manage-disappearing-messages).
- De tokens moeten ingesteld worden met alleen de rechten die nodig zijn, niet met onnodige extra rechten. Bijvoorbeeld: gebruik "fine-grained access tokens" wanneer dat mogelijk is, en maak niet een access token met alle rechten.
- De tokens moeten na verlopen na een periode. De maximale periode die we hanteren is 1 jaar en 1 week. In de laatste week van het kalenderjaar kunnen dan de tokens vernieuwd worden tot het eind van het volgende jaar.
- De tokens moeten alleen opgeslagen worden waar ze nodig zijn. Sla tokens niet op in een password manager, omdat je ze ook opnieuw kan genereren.

Lees meer over [Token Best Practices](https://auth0.com/docs/secure/tokens/token-best-practices) best practices bij Auth0.

## Voorbereiding

Als de verantwoordelijken een tijdelijk contract hebben, dan moet voor het eind van de contractperiode besloten worden hoe na die periode access tokens worden beheerd. Stuur een Calendar-invite naar de eindverantwoordelijken om 1 maand voor het eind van de contractperiode een plan te maken voor de toekomst van het beheer.

Stuur een Calendar-invite voor naar de verantwoordelijken voor het uitvoeren van het werk om de access tokens te vervangen. Bijvoorbeeld: een halve dag werk in de laatste week van het jaar.

Zorg dat het overzicht van software met access tokens compleet is, en dat deze documentatie nog klopt.

Kijk bij het overzicht van Fine-grained access tokens van GitHub of tokens zijn die niet meer gebruikt worden. Als tokens niet meer gebruikt worden, controleer dan of de projecten gearchiveerd moeten worden. Als projecten niet meer gebruikt worden, is het beter dat er geen nieuwe access tokens ingesteld worden.

Kijk bij het overzicht van Fine-grained access tokens dat de verantwoordelijken voldoende rechten hebben om bij alle applicaties die access tokens gebruiken, de tokens opnieuw in te stellen.

Stel bij de GitHub Organisation in dat access tokens maximale levensduur hebben, onder "[Personal access tokens settings](https://github.com/organizations/nl-design-system/settings/personal-access-tokens)".

## Uitvoering

1. Bepaal de datum waarop de nieuwe tokens moeten verlopen. Bijvoorbeeld: als het de laatste week van het jaar is, dan kies je de laatste dag van het volgende jaar.
1. [Log in bij GitHub](http://github.com/login) met een user met administrator-rechten.
1. Ga naar het overzicht van [Fine-grained personal access tokens](https://github.com/settings/personal-access-tokens).
1. Open één voor één de pagina van elke access token. Klik op "Regenerate token" om een nieuwe token te maken. Stel de "Expiration" in op de datum al eerder was bepaald.
1. Bekijk in de "Description" waar de token voor gebruikt wordt. Kopieër de token, en stel die in bij de applicatie waar die gebruikt wordt. Let op dat je de token instelt op een manier dat die niet publiek wordt, bijvoorbeeld als "Sensitive" of "Secret".
1. [Log in bij npmjs.com](http://npmjs.com/login). Ga naar het overzicht van [Access Tokens voor de npm registry](https://www.npmjs.com/settings/nl-design-system-ci/tokens).
1. Open één voor één de pagina van elke access token. Er is helaas geen "Regenerate token" functie, daarom moet je een nieuwe token aanmaken met dezelfde instellingen. Kopieër de volgende dingen:
   - De naam, Bijvoorbeeld: `GitHub example repo`
   - De description onder de naam. Bijvoorbeeld: `https://github.com/nl-design-system/example/settings/secrets/actions# Repository secret: NPM_TOKEN`
   - De instellingen voor "Packages and scopes".
1. Maak een nieuwe token in met dezelfde instellingen, en de nieuwe "Expiration".
1. In de description staat waar en hoe je de token opnieuw kan instellen. Vervang de oude token door de nieuwe token in die applicatie.
1. Verwijder de oude access token.

## Communicatie

Het kan zijn dat er iets mis gaat het instellen van access tokens, waardoor er problemen ontstaan bij processen waar je zelf niet bij betrokken bent. Dat betekent dat de mensen die er van afhankelijk zijn, niet weten dat het door de access token veroorzaakt wordt, en dat het probleem moeilijk op te lossen is.

Communiceer met de Community dat de access tokens vervangen zijn. Stel voor dat ze contact opnemen als er problemen zijn, zodat je support kan bieden. Deel het volgende bericht in Slack en verstuur een e-mail naar de mailing list van Maintainers.

> In GitHub gebruiken we een access tokens (een soort wachtwoord) om nieuwe versies van componenten te te publiceren. De access tokens verlopen eens in de zoveel tijd. Dit helpt met alles veilig houden 😌 Het is weer zover: het kernteam gaat de tokens opnieuw instellen. We verlengen ze met 1 jaar.
>
> Je hoeft zelf niets te doen! Het kan zijn dat we per ongeluk iets vergeten. Laat het daarom even weten als je Pull Request in GitHub ineens onverwacht een ❌ (rood kruis) laat zien nadat je een Pull Request hebt gemerged, dan kijken we er even naar.
