# Agile sprint

Gebruik GitHub Issues voor het vastleggen van de sprint backlog. De software wordt gerealiseerd in meerdere repositories, daarom zijn de GitHub Issues van de sprint backlog ook verspreid over meerdere repositories. Gebruik een GitHub Project om de sprint backlog te maken die issues bevat uit meerdere repositories.

Sommige items op de backlog kunnen vertrouwelijke gegevens bevatten. Gebruik hiervoor de GitHub Issues in de private repository van het project.

Sprint backlog projecten:

- [NL Design System Kernteam 2025](https://github.com/orgs/nl-design-system/projects/4)
- [NL Design System kernteam 2025](https://github.com/orgs/nl-design-system/projects/68)

Elk jaar maken we een nieuw private GitHub Project om de limiet van maximum aantal issues te resetten, om te vermijden dat we de grens van circa 1400 issues bereiken.

Maak in de "Project settings" een Custom field voor "Sprint", met als type "Iteration". Hernoem de eerste sprint in de iteratie naar het sprintnummer waar het project is gebleven, bijvoorbeeld "Sprint 42" die begint op 1 januari. Hierna kun je sprints aanmaken tot het einde van het jaar of het einddatum van het project.

Voor het sprintbord maken we een "Board" met de filter `sprint:@current`. Om de volgende sprint te plannen maken we een Board met de filter `sprint:@next`. Om te controleren of er nog items uit de vorige sprint verplaatst moeten worden, maken we een Board met de filter `sprint:@previous`.

Voor de sprints willen we wel een burn-up of burn-down chart hebben, maar dat is nog niet gelukt vanwege een technisch probleem. [GitHub ondersteunt alleen een burn-up chart](https://docs.github.com/en/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects#about-historical-charts). Zie voor meer informatie: [Burn-up of burn-down chart genereren voor sprints #1228](https://github.com/nl-design-system/kernteam/issues/1228).
