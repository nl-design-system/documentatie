---
title: "Versionering: Hoe beheer je pakketversies?"
hide_title: true
hide_table_of_contents: false
sidebar_label: Versionering beheren
pagination_label: Versionering beheren
description: Inzicht in versiebeheer en hoe je semantische versionering (SemVer) toepast voor stabiele releases.
keywords:
  - developer
  - aan de slag
  - componenten
  - versionering
  - semver
  - changesets
---

# Versionering: Hoe beheer je pakketversies?

Als je als developer een pull request maakt voor een verbetering of een bugfix, wil je dat de nieuwe versie ergens gebruikt kan worden. Bij NL Design System kun je met één druk op de knop een nieuwe versie uitbrengen. Maar voordat dit automatisch kan gebeuren, moet je eerst een changelog toevoegen aan je pull request.

We gebruiken [semver][1] om betekenis te geven aan wijzigingen en [changesets][2] om versies aan te passen.

## Onze aanpak

Al onze code leeft in mono repositories, waarbij packages onderling van elkaar afhankelijk kunnen zijn.

Je zult dus goed moeten nagaan wat een breaking change in een package betekent voor een afhankelijk package en hoe dit zich vertaalt naar versieverhogingen. Changesets helpen hierbij door automatisch de impact op versienummers te bepalen en inzichtelijk te maken welke wijzigingen een nieuwe release vereisen.

- **Maak kleine pull requests.** Kleine wijzigingen zijn makkelijker te begrijpen, te reviewen en te testen. Dit verkleint de kans op onvoorziene breaking changes en maakt het eenvoudiger om de juiste changesets toe te voegen.
- **Voeg een changeset toe om de impact van wijzigingen vast te leggen.** Dit kan in dezelfde commit of in een nieuwe commit.

## Wanneer heb je een changeset nodig?

Je hebt een changeset nodig bij elke wijziging die wordt gepubliceerd in een package, zoals:

- Bugfixes.
- Nieuwe functionaliteiten.
- Breaking changes.

Je hebt **geen changeset nodig** voor wijzigingen die niet worden gepubliceerd, zoals updates in documentatie of aanpassingen in de build-configuratie.

Changesets zorgen voor changelogs. Deze helpen andere ontwikkelaars om te begrijpen welke wijzigingen zijn doorgevoerd. Houd dit einddoel in gedachten bij het schrijven van een changeset.

## Naam van een changeset

De naam van een changeset maakt niet uit en wordt automatisch gegenereerd. Let er echter op dat deze niet ongepast is.

## Kies een semantische versie

Bij NL Design System gaat het versienummer kiezen geheel automatisch, volgens de regels van "[semantic versioning][1]". Je moet per onderdeel van het design system kiezen in welke groep de wijzing valt: patch, minor of major.

Gebruik de volgende richtlijnen bij het kiezen van een versie:

- **`patch`** → Voor bugfixes.
- **`minor`** → Voor nieuwe functionaliteiten.
- **`major`** → Voor breaking changes.

Voor meer informatie over het kiezen van de juiste versie, zie [SemVer: Major, Minor of Patch?](./12-changes.md).

## Schrijf een changelog

Bij elke belangrijke wijziging schrijf je een korte uitleg voor gebruikers: dat is een "changeset". Dit helpt hen om te bepalen wat ze met de nieuwe versie moeten doen:

- "Kan ik veilig de update installeren, en verder niets doen?"
- "Zijn er interessante nieuwe mogelijkheden waar ik meer over wil leren?"
- "Moet ik mijn website aanpassen, voordat ik de nieuwe versie kan gebruiken?"

De changelog is verdeeld in drie categorieën:

- **`patch`**: een versie met updates die je veilig kan installeren.
- **`minor`**: een versie die nieuwe mogelijkheden heeft, die je later misschien wil gebruiken.
- **`major`**: een versie waar je zelf ook wijzigingen voor moet doen, als jij het onderdeel gebruikt dat is aangepast.

Bij een major update beschrijf je:

- Leg uit **wat** er is veranderd.
- Motiveer **waarom** de wijziging nodig was.
- Geef aan **hoe** gebruikers hun code moeten aanpassen.

## Lege changesets

Soms is een lege changeset nodig, bijvoorbeeld om een release af te dwingen zonder daadwerkelijke wijzigingen in de code.

## Maak een changeset met een script

In `package.json` staat een script om changesets toe te voegen:

```json
"scripts": {
  "changeset": "changeset add"
}
```

Een nieuwe changeset maak je met:

```bash
pnpm run changeset
```

Dit opent een interactieve prompt waarin je de wijzigingen kunt specificeren.

```bash
🦋  Which packages would you like to include? …
◯ changed packages
  ◯ @scope/een-package
◯ unchanged packages
  ◯ @scope/een-ander-package
  ◯ etc...
```

- Selecteer met <kbd>spatie</kbd> welke packages er veranderd zijn.

```bash
🦋  Which packages would you like to include? …
◉ changed packages
  ◉ @scope/een-package
◯ unchanged packages
  ◯ @scope/een-ander-package
  ◯ etc...
```

- Druk op <kbd>enter</kbd> om verder te gaan.

```bash
🦋  Which packages would you like to include? · @scope/een-package
🦋  Which packages should have a major bump? …
◯ all packages
  ◯ @scope/een-package@1.0.0
```

- Geef met <kbd>spatie</kbd> de packages aan die een major versie ophoging moeten krijgen of druk op <kbd>enter</kbd> om verder te gaan als er geen packages zijn die een major versie ophoging nodig hebben

> Tip: Als je tijdens het maken van een changeset een fout maakt kun je het process afbreken met <kbd>Ctrl-C</kbd> en gewoon opnieuw beginnen.

Een **lege changeset** maak je met:

```bash
pnpm run changeset --empty
```

## Handmatig een changeset toevoegen

Maak een nieuw Markdown-bestand in de map `.changeset` met deze inhoud:

```markdown
---
"@<organisatie>/<package-name>": major
---

Beschrijving van de wijziging
```

- Voeg alle relevante packages toe tussen de eerste set `---`, elk op een nieuwe regel, tussen dubbele aanhalingstekens.
- Beschrijf na de tweede set `---` welke wijzigingen zijn doorgevoerd.

Voor een **lege changeset** gebruik je alleen:

```markdown
---
---
```

## Changesets publiceren

Na het mergen van je pull request wordt er automatisch een nieuwe pull request aangemaakt om de versie te publiceren. Je kunt deze direct mergen of wachten tot er meer wijzigingen zijn. Als de publicatie-pull request niet meteen gemerged wordt zal hij automatisch worden bijgewerkt zo lang dat nodig is. Zodra de publicatie-pull request gemerged wordt, worden de pakketten automatisch gepubliceerd naar de npm Registry.

## Voorbeeld changeset

Hieronder een voorbeeld waarin een nieuwe functionaliteit is toegevoegd. Dit is een minor update:

```bash
🦋  Which packages would you like to include? · @scope/een-package
🦋  Which packages should have a major bump? · No items were selected
🦋  Which packages should have a minor bump? · @scope/een-package
🦋  Please enter a summary for this change (this will be in the changelogs).
🦋    (submit empty line to open external editor)
🦋  Summary ‣Tertiary variant voor een-package component toegevoegd
🦋
🦋  === Summary of changesets ===
🦋  minor:  @scope/een-package
🦋
🦋  Note: All dependents of these packages that will be incompatible with
🦋  the new version will be patch bumped when this changeset is applied.
🦋
🦋  Is this your desired changeset? (Y/n) ‣ true
🦋  Changeset added! - you can now commit it
🦋
🦋  If you want to modify or expand on the changeset summary, you can find it here
🦋  info /pad/naar/lokaal/repository/.changeset/itchy-kangaroos-grab.md
```

In het voorbeeld hierboven is een changeset met een willekeurige naam `itchy-kangaroos-grab.md` toegevoegd aan de `.changeset` folder in de root van de repository. Deze file moet toegevoegd worden aan de pull request die voor deze wijziging gemaakt wordt.

## Best practices voor changesets

- Maak er een gewoonte van om elke codewijziging te beschrijven in een changeset.
- Zorg dat elke pull request met wijzigingen in een package een changeset bevat. Dit kan in dezelfde commit of in een nieuwe commit.
- Je kunt meerdere changesets toevoegen.
- Wacht niet te lang met het publiceren van changes, de pull request voor publicatie wordt anders erg groot.

[1]: https://semver.org
[2]: https://github.com/changesets
