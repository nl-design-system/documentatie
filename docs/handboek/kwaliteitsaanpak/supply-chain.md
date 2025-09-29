---
title: Software supply chain
hide_title: true
hide_table_of_contents: false
sidebar_label: Software supply chain
pagination_label: Software supply chain
description: Uitleg over de kwaliteitsaanpak voor de software supply chain van NL Design System.
keywords:
  - dependencies
  - deveDependencies
  - peerDependencies
---

# Software supply chain

## Veiligheid van dependencies

Vermijd installeren van onveilige dependencies. Dat kan komen:

- Je installeert een nieuwe versie van een dependency, die onveilig is.
- De inhoud van een bestaande dependency wordt aangepast in de package registry, en bestaand versienummer bevat ineens onveilige code.

De dependency kan onveilig zijn om meerdere redenen:

- De dependency voert een aanval uit tijdens de installatie.
- De dependency voort een aanval uit tijdens het uitvoeren van scripts door developers.
- De dependency voort een aanval uit tijdens het uitvoeren van scripts in productie.

Beperk het risico van een aanval tijdens installatie:

- Voer geen scripts `postinstall` scripts uit met npm, pnpm of yarn. Gebruik `ignore-scripts=true` in `.npmrc` om standaard lifecycle scripts te negeren. Je kunt ook `npm --ignore-scripts`, `pnpm --ignore-scripts` of `yarn --ignore-scripts`, maar het risico is groot dat dit een keer wordt vergeten.
- ...

Wanneer je dependencies installeert, is het handig om zo min mogelijk rechten en informatie beschikbaar te stellen, om het risico te beperken:

- In CI/CD pipelines zoals GitHub Actions, stel geen secrets en environment variables beschikbaar. Bijvoorbeeld: install zonder access tokens, en release met access tokens met schrijfrechten naar Git, container registries en package registries.

...

- package locks
- fixed version dependencies
- security vulnerabilities in github
