---
title: Versionering
hide_title: true
hide_table_of_contents: false
sidebar_label: Versionering
pagination_label: Versionering
description: Versionering
keywords:
  - developer
  - aan de slag
  - componenten
  - versionering
  - semver
  - changesets
---

# Versionering

Elke developer die een pull request maakt voor een verbetering of een bugfix, die wil dat de nieuwe versie ergens gebruikt zal worden. Bij NL Design System gaat een nieuwe versie uitbrengen met een druk op de knop. Maar om automatisch het goede versienummer te kiezen moet je wel eerst changelog-documentatie toevoegen aan je pull request.

We maken gebruik van [semver][1].

Voor het aanpassen van versies gebruiken we [changesets][2].

## Strategie

Al onze code leeft in mono repositories, waarbij packages onderling van elkaar afhankelijk kunnen zijn.

Je zult dus goed moeten nagaan wat een breaking change in een package betekent voor een afhankelijk package en hoe dit zich vertaalt naar versieverhogingen. Changesets helpen hierbij door automatisch de impact op versienummers te bepalen en inzichtelijk te maken welke wijzigingen een nieuwe release vereisen.

- **Houd pull requests klein en pas zo min mogelijk code aan.** Kleine pull requests maken het eenvoudiger om wijzigingen te begrijpen, te reviewen en te testen. Dit verkleint de kans op onvoorziene breaking changes en maakt het eenvoudiger om de juiste changesets toe te voegen.
- **Voeg een changeset toe om de impact van wijzigingen vast te leggen.** Dit mag in dezelfde commit of in een nieuwe commit.

## Wanneer heb je een changeset nodig?

Een changeset is nodig voor elke wijziging die wordt gepubliceerd in een package, zoals:

- Bugfixes
- Nieuwe features
- Breaking changes

Er is **geen changeset nodig** voor wijzigingen die niet worden gepubliceerd, zoals documentatie-updates of aanpassingen in de build-configuratie.

Changesets genereren changelogs, die ontwikkelaars helpen te begrijpen welke wijzigingen zijn doorgevoerd. Houd dit einddoel in gedachten bij het schrijven van een changeset.

## Naamgeving van een changeset

De naamgeving van een changeset maakt niet uit en kan automatisch worden gegenereerd. Let er echter op dat de gegenereerde naam niet ongepast is.

## Kies een semantische versie

Bij NL Design System gaat het versienummer kiezen geheel automatisch, volgens de regels van "[semantic versioning][1]". Je moet per onderdeel van het design system kiezen in welke groep de wijzing valt: patch, minor of major.

Gebruik de volgende richtlijnen bij het kiezen van een versie:

- **`patch`** → Voor bugfixes
- **`minor`** → Voor nieuwe features
- **`major`** → Voor breaking changes

Voor meer informatie over het kiezen van de juiste versie, zie [SemVer: Major, Minor of Patch?](./12-changes.md).

## Schrijf een changelog

Bij elke belangrijke wijziging moet je een stukje documentatie schrijven over de wijziging: dat is een "changeset". In die changeset schrijf je voor de gebruikers wat de verandering is, en welke onderdelen zo'n patch/minor/major verandering hebben.

De changelog schrijf je zodat gebruikers van het design system weten wat ze moeten doen met de nieuwe versie:

- "Kan ik veilig de update installeren, en verder niets doen?"
- "Zijn er interessante nieuwe mogelijkheden waar ik meer over wil leren?"
- "Moet ik mijn website aanpassen, voordat ik de nieuwe versie kan gebruiken?"

Daarom is de changelog opgedeeld in drie groepen:

- **`patch`**: een versie met updates die je veilig kan installeren.
- **`minor`**: een versie die nieuwe mogelijkheden heeft, die je later misschien wil gebruiken.
- **`major`**: een versie waar je zelf ook wijzigingen voor moet doen, als jij het onderdeel gebruikt dat is aangepast.

Omschrijf de volgende punten in het geval van een major change:

- Leg uit **wat** er is veranderd
- Motiveer **waarom** de wijziging nodig was
- Geef aan **hoe** gebruikers hun code moeten aanpassen

## Lege changesets

Soms is een lege changeset nodig, bijvoorbeeld om een release af te dwingen zonder daadwerkelijke wijzigingen in de code.

## Genereer een changeset via een script

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

## Voeg handmatig een changeset toe

Maak een nieuw Markdown-bestand in de `.changeset`-map en plak het volgende sjabloon:

```markdown
---
'@<organisation>/<package-name>': major
---

Beschrijving
```

- Voeg alle relevante packages toe tussen de eerste set `---`, elk op een nieuwe regel, tussen dubbele aanhalingstekens.
- Beschrijf na de tweede set `---` welke wijzigingen zijn doorgevoerd.

Voor een **lege changeset** gebruik je alleen:

```markdown
---
---
```

---

## Changesets publiceren

Na het mergen van je pull request zal er automatisch een pull request aangemaakt worden voor het publiceren van nieuwe versies.

Merge de pull request met de changelog wanneer je direct een nieuwe versie wil uitbrengen. Of wacht tot andere pull requests ook gemerged zijn, en publiceer meerdere wijzigingen in een keer, als 1 nieuwe versie. De pull request voor publicatie zal na het mergen van verdere wijzigen steeds automatisch worden bijgewerkt.

Zodra deze pull request gemerged wordt zullen alle gewijzigde packages automatisch naar het npm registry gepubliceerd worden.

## Voorbeeld changeset

In het onderstaande voorbeeld is er alleen nieuwe functionaliteit toegevoegd en gaat het dus om een minor versie ophoging.

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

## Changeset best practices

- Maak er een gewoonte van om na elke wijziging in code die je doet de wijziging in een changeset te beschrijven
- Zorg ervoor dat elke pull request met wijzigingen in code een changeset bevat, dat mag in een aparte commit of je kunt het aan de commit met wijzigingen toevoegen
- Je kunt ook meerdere changesets
- Wacht niet te lang met het publiceren van changes, de pull request voor publicatie wordt anders erg groot

[1]: https://semver.org
[2]: https://github.com/changesets
