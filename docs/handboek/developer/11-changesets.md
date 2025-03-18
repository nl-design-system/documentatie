# Versionering

We maken gebruik van [semver][1].

Voor het aanpassen van versies gebruiken we [changesets][2].

## Voor wie?

Ontwikkelaars die packages maken in het bijzonder.

## Strategie

Al onze code leeft in mono repositories waarbij packages onderling van elkaar afhankelijk kunnen zijn.

Je zult dus erg goed in de gaten moeten houden wat een breaking change in een package betekent voor een package dat daarvan afhankelijk is.

- Houd pull requests klein. Pas zo min mogelijk code aan
- Voeg een changeset toe, dit mag in dezelfde commit of in een nieuwe commit

```bash
$ pnpm changeset add

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

In het voorbeeld hierboven is een changeset met een willekeurige naam `itchy-kangaroos-grab.md` toegevoegd aan de `.changset` folder in de root van de repository. Deze file moet toegevoegd worden aan de pull request die voor deze wijziging gemaakt wordt.

> Tip: Als je tijdens het maken van een changeset een fout maakt kun je het process afbreken met <kbd>Ctrl-C</kbd> en gewoon opnieuw beginnen.

Als deze pull request gemerged is zal er automatisch een pull request aangemaakt worden voor het publiceren van nieuwe versies.

Zodra deze pull request gemerged wordt zullen alle gewijzigde packages automatisch naar het npm registry gepubliceerd worden.

Het is ook mogelijk om de pull request open te laten en eerst meer wijzigingen door te voeren en die te mergen in andere pull requests. De pull request voor publicatie zal na het mergen van verdere wijzigen steeds automatisch worden bijgewerkt.

## Changeset hygiëne

- Maak er een gewoonte van om na elke wijziging in code die je doet de wijziging in een changeset te beschrijven
- Zorg ervoor dat elke pull request met wijzigingen in code een changeset bevat, dat mag in een aparte commit of je kunt het aan de commit met wijzigingen toevoegen
- Je kunt ook meerdere changesets
- Wacht niet te lang met het publiceren van changes, de pull request voor publicatie wordt anders erg groot

[1]: https://semver.org
[2]: https://github.com/changesets
