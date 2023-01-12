# Assets branch voor NL Design System documentatie

Het bijhouden en opslaan van grote bestanden zoals plaatjes, video, audio etc. is altijd een van de Git tekortkomingen geweest. Ze zorgen voor enorme diffs en ook voor npm packages zorgt het automatisch voor enorme pakketjes.

Om dat te voorkomen en doordat onze documentatie niet alleen voor onze eigen website zal worden gebruikt, maar ook als npm packages wordt verspreid is het belangrijk dat we dat slimmer aanpakken.

Door een `assets` branch te gebruiken waar alleen deze plaatjes etc. in zitten en Vimeo te gebruiken voor video's worden deze bestanden wel voor iedereen beschikbaar zolang ze daar bestaan, maar tellen ze niet mee in de Git of package grootte.

## Plaatje toevoegen aan Documentatie

1. Zorg dat je plaatje een logische naam heeft en gebruik bijvoorbeeld ook het pad zoals hij in de documentatie wordt gebruikt. Bijvoorbeeld `richtlijnen_stijl_kleuren_machtig-prachtig-voorbeeld.png` of `kernteam_jeffrey.svg`.
2. Ga naar[de assets branch](https://github.com/nl-design-system/documentatie/tree/assets) en upload het plaatje<img width="1079" alt="Screenshot 2023-01-12 at 14 13 53" src="https://user-images.githubusercontent.com/877246/212078115-a694689b-fa8a-42b3-857d-f622923806f2.png">
<img width="1221" alt="Screenshot 2023-01-12 at 14 15 22" src="https://user-images.githubusercontent.com/877246/212078203-83e17c92-3f9a-402f-ae67-8c77b423cf20.png">
3. commit dit plaatje, je hoeft hier niets anders voor te doen dan op de groene knop te drukken, want de geschiedenis kan ons niets schelen
<img width="1240" alt="Screenshot 2023-01-12 at 14 15 34" src="https://user-images.githubusercontent.com/877246/212078227-a59e07c0-2e2f-4fcf-9e9a-56d0f4db40ed.png">
4. Nu kun je het plaatje in elke willekeurige branch gebruiken
5. Ga naar de plek waar je de documentatie aan het toevoegen bent en gebruik `https://raw.githubusercontent.com/nl-design-system/documentatie/assets/<naam-van-het-plaatje>` dus bijvoorbeeld `https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_kleuren_machtig-prachtig-voorbeeld.png`
6. sla op en kijk of het plaatje geladen kan worden, dubbelcheck anders of de bestandsnaam klopt en of hij ook echt in [de assets branch](https://github.com/nl-design-system/documentatie/tree/assets) staat
