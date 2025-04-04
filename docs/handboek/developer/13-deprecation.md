---
title: Versies en packages markeren als verouderd (deprecation)
hide_title: true
hide_table_of_contents: false
sidebar_label: Verouderde versies (deprecation)
pagination_label: Verouderde versies (deprecation)
description: Hoe en waarom je een package of specifieke versie als verouderd (deprecated) markeert op NPM, zonder deze te verwijderen.
keywords:
  - developer
  - aan de slag
  - componenten
  - versionering
  - semver
  - deprecation
---

# Een package markeren als verouderd (deprecation)

Het kan voorkomen dat een package of een specifieke versie van een package overbodig is geworden. Het package zal in dat geval als verouderd gemarkeerd moeten worden bij NPM.

Het markeren als verouderd heeft als voordeel dat het package gewoon beschikbaar blijft voor mensen die het willen blijven gebruiken. Het alternatief zou zijn om het package helemaal van NPM te verwijderen maar dit is vanwege bovenstaande reden onwenselijk.

Dit is ook relevant als je een npm package hernoemt. Bijvoorbeeld: `@example/counter-badge` naar `@example/number-badge`.

Deprecation kan dan helpen met mensen wijzen op de nieuwe naam van de package. Anders weten mensen niet dat er een nieuwe package is: dan lijkt het alsof er nooit meer updates uitkomen.

## Markeren van alle versies van een package

### Via de npm website

1. Maak een bericht voor gebruikers van de deprecated package. Is de package hernoemd, dan kun je een template tekst aanbieden die verwijst naar de nieuwe naam.
1. Login bij [npm][1].
1. Navigeer naar het package dat je als verouderd wilt markeren (`https://www.npmjs.com/package/<package-naam>`).
1. Klik op "Settings".
1. Klik op de knop "Deprecate package" bijna onderaan de pagina.
1. Bevestig dat je alle versies van het package wilt markeren als verouderd door de naam van het package over te typen en op de knop "Deprecate package" te klikken.

### Via de command line

Zorg dat je bent ingelogd bij npm (`npm login`).

```bash
$ npm deprecate <package-naam> "<reden>" --otp=<123456>
```

## Markeren van een specifieke versie van een package

Het is ook mogelijk om een specifieke versie van een package te markeren als verouderd. Dit kan alleen vanaf de command line. Voeg hiervoor de `<versie>` van het package toe aan het commando.

```bash
$ npm deprecate <package-naam>@<versie> "<reden>" --otp=<123456>
```

> Let op: het is mogelijk om een versie reeks op te geven om meerdere versies tegelijk te markeren als verouderd.

## Ongedaan maken

Het is mogelijk om het markeren als verouderd weer ongedaan te maken.

```bash
$ npm deprecate <package-naam> "" --otp=<12345>
# of voor een specifieke versie
$ npm deprecate <package-naam>@<versie> "" --otp=<123456>
```

[1]: https://www.npmjs.com/login
