---
title: Starten met een eigen repository
hide_title: true
hide_table_of_contents: false
sidebar_label: Repository starten
pagination_label: Repository starten
description: Starten met een eigen design system en een eigen repository in de NL Design System community.
---

# Starten met een eigen repository

## Gebruik de template

Als je componenten en templates van je eigen organisatie wilt delen met je diverse leveranciers en met de NL Design System community, dan kun je een eigen repository beginnen.

Het is handig om te beginnen met de "example repository" op GitHub met een: [nl-design-system/example](http://github.com/nl-design-system/example). Als je GitHub gebruikt, klik dan op de "Use this template" button.

Als je begint met onze example repository dan heb je gelijk heel veel dingen die handig zijn voor een design system. Een team dat er gebruik van maakt zei: "het scheelt misschien wel een half jaar werk, we konden zo veel sneller beginnen!"

- Storybook die gratis wordt gepubliceerd als website op GitHub Pages.
- Publiceer automatisch een nieuwe versie van je componenten en van je design tokens, wanneer een pull request klaar is.
- Test screenshots van je componenten, krijg een waarschuwing als per ongeluk een voorbeeld uit je design system er anders uit ziet. Dit zijn doen we met visuele regressietests van Chromatic.
- Deel updates van je huisstijl met alle leveranciers, zodat kleuren, afmetingen en lettertypes beschikbaar zijn als CSS, SCSS, JSON, JavaScript, TypeScript, etcetera.
- Automatische controle voor code conventies en secure coding ("lint tools").
- Je kunt veel leren van andere repositories in de community, omdat die op dezelfde manier zijn opgezet.

**Let op**: een eigen repository moet je elke maand vers en veilig houden, door het installeren van updates.

### github.com/nl-design-system

Wanneer je besluit een eigen repository te starten, dan kun je contact opnemen met het kernteam om een repository te maken in de NL Design System organisatie.

In de [Heartbeat van 20 februari 2024](https://youtu.be/qjNVj7wYG3k?t=1961) leggen we uit hoe we security aanpakken.

Voordelen van werken in de NL Design System GitHub:

- Jouw activiteit en ontwikkelingen zijn extra zichtbaar in de community.
- Samenwerken aan maandelijkse patch rondes.
- Je krijgt alerts over vulnerabilities en software updates.
- Gebruikers en rechten worden [beheerd in Terraform](http://github.com/nl-design-system/terraform) voor extra veiligheid, en 2FA is verplicht.
- De `main` branch wordt beveiligd met verplichte pull request reviews door een tweede persoon en door diverse automatische code controles.
- We maken backups van de code, gebruikers én de issues op GitHub met [Rewind](https://rewind.com).

Je kunt natuurlijk ook een repository maken in je eigen GitHub account, of bij GitLab. Als je design tokens in Figma gaat gebruiken, controleer eerst of jouw systeem wordt ondersteund: [Sync — Tokens Studio for Figma](https://docs.tokens.studio/sync/sync).

Voordeel van in eigen beheer:

- Je kunt betalen voor GitHub Enterprise of GitLab Enterprise.
- Je kunt zelf user beheer doen, bijvoorbeeld met single-sign on, in plaats van een pull request maken in de Terraform repository met de configuratie voor een nieuwe user.
- Je hebt zelf administrator rechten.

## Een eigen React component library

In de repository staat de component library voor React in `packages/components-react/src/`.

Je kunt kiezen om alleen de eigen componenten te delen vanuit deze npm package. Componenten die je wilt hergebruiken uit de community, moeten projecten dan rechtstreeks uit de bron installeren. Teams kunnen dan zelf een combinatie maken uit meerdere component libraries. Dit is de simpelste aanpak, maar je hebt dan minder controle over hoe je design system wordt gebruikt.

Je kunt ook zelf kiezen welke componenten uit de community je wilt hergebruiken. Je voegt dan een dependency toe op een specifieke versies van andere component libraries, en je importeert en exporteert dan alleen de componenten die je hebt gecontroleerd. Dit kost wat extra tijd, maar je heb meer controle en je kunt zelf betere garanties geven op de kwaliteit.

Bijvoorbeeld, je `packages/components-react/src/index.ts` kan zo werken:

```ts
export { Button } from "@utrecht/component-library-react";
export { PageFooter } from "./PageFooter.tsx";
```

Je kunt ook bestaande componenten hergebruiken en uitbreiden. Bijvoorbeeld, de PageHeader zou gebaseerd kunnen zijn op een bestaande component. `packages/components-react/src/PageFooter.tsx`:

```ts
import { PageFooter as CommunityPageFooter } from '@utrecht/component-library-react';
import { Logo } from './Logo.tsx';

export const PageHeader = () => <CommunityPageFooter>
  <Logo/>
  {children}
</CommunityPageFooter>;
```
