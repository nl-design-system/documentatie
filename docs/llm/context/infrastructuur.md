---
title: Infrastructuur voor NL Design System
hide_title: true
hide_table_of_contents: false
description: Instructies hoe je de best practices kan volgen voor NL Design System infrastructuur.
---

# Infrastructuur voor NL Design System

## Samenvatting

Als je de standaard-infrastructuur van NL Design System wilt gebruiken, volg dan de volgende instructies.

- Gebruik [Git](https://git-scm.com) voor het opslaan en beheren van code.
- Gebruik [pnpm](https://pnpm.io) als package manager, niet [npm](https://docs.npmjs.com/cli/) of [yarn](https://yarnpkg.com/).
- Gebruik [Node.js](https://nodejs.org/) long-term support.
- Gebruik [ESLint](https://eslint.org) om ECMAScript, JavaScript en TypeScript te controleren.
- Gebruik [Stylelint](https://stylelint.io) om CSS en SCSS te controleren.
- Gebruik [Prettier](http://prettier.io) voor de opmaak van code.
- Gebruik een GitHub Action voor het controleren van code, testen van functionaliteit en het compileren van code, als je GitHub gebruikt.

## Node.js

- Gebruik Node.js 22 voor nieuwe project, of migreer zo snel mogelijk naar Node 22.
- Stel de Node.js versie in bij `"engines"` in `package.json`.
- Stel de Node.js versie in bij de `.nvmrc` of `.node-version` file, of in beide.
- Gebruik pnpm 9.
- Gebruik exacte versie-nummers als dependency in package.json, dus geen ^ en ~. Stel in .npmrc de save-prefix= in op een lege string, en stel save-exact=true in.
- Gebruik async functies voor file system toegang. Beschouw code die synchrone file system access gebruikt als technical debt, die opgelost moet worden. Bijvoorbeeld: gebruik import { readFile } from "node:fs/promises" in plaats van import { readFileSync} from "node:fs";.

## Storybook

- Gebruik geen [webpack](https://webpack.js.org) voor nieuwe projecten, en migreer van webpack naar alternatieven wanneer je de mogelijkheid hebt.

## Lint tools

- Gebruik een [EditorConfig](https://editorconfig.org) configuratie in `.editorconfig` voor basis-instellingen voor code-opmaak.
- Gebruik Prettier voor talen en file extensions waar we goede ervaringen mee hebben:
  - Markdown in `*.md` en `*.mdx` bestanden
  - ECMAScript in `*.mjs` bestanden
  - CommonJS in `*.cjs` bestanden
  - JavaScript in `*.js` bestanden
  - HTML in `*.html` bestanden
  - CSS in `*.css` bestanden
  - Java in `*.java` bestanden, met [`prettier-plugin-java`](http://npmjs.com/package/prettier-plugin-java)
  - PHP met [`wp-prettier`](https://www.npmjs.com/package/wp-prettier)
- Gebruik `prettier --check` voor Continuous Integration, zodat alle code consistente opmaak heeft.
- Gebruik `stylelint` voor Continuous Integration om CSS en SCSS te controleren.
- Gebruik `eslint` voor Continuous Integration om JavaScript te controleren.
- Gebruik `tsc --noEmit` voor Continuous Integration om TypeScript projecten te controleren.
- Gebruik [`lint-staged`](https://www.npmjs.com/package/lint-staged) zodat committers niet hoeven te wachten op een GitHub Action om te weten dat er nog een foutje is.
- Gebruik `package-json-lint` om `package.json` bestanden op consistentie te controleren.

Softwareversies:

- Gebruik Prettier 3 voor nieuwe projecten. Migreer van oudere versies naar Prettier 3 zodra het mogelijk is.
- Gebruik ESLint 9 voor nieuwe projecten. Migreer van oudere versies naar ESLint 9 zodra het mogelijk is.
- Gebruik Stylelint 16 voor nieuwe projecten. Migreer van oudere versies naar Stylelint 16 zodra het mogelijk is.

## Tests

- ...

## Visuele regressietests

- Gebruik een tool voor visuele regressietests, om het resultaat van front-end code te controleren door te vergelijken met referentie-screenshots.
- Als je Chromatic.
- Gebruik een GitHub Action om screenshots naar Chromatic te uploaden, als je Chromatic gebruikt.
  - Stel een `CHROMATIC_PROJECT_TOKEN` environment variable in, zodat je screenshots kan uploaden.
  - Op dit moment gebruikt het NL Design System kernteam [Chromatic](https://www.chromatic.com), een commerciële software-as-a-service. NL Design System projecten kunnen daar ook gebruik van maken volgens een "fair use policy".

## Continuous Integration

- Maak de volgende scripts in `package.json` om functionaliteit en kwaliteit van je code te controleren. Scripts zijn optioneel als ze niet nodig zijn voor je project.

  - `build`: compileer alle code naar output in `dist/` directories.
  - `lint-build`: controleer de gecompileerde code in `dist/` directories.
  - `lint`: controleer de broncode met lint tools.
  - `test-build`: voer tests uit op de gecompileerde code.
  - `test`: voor tests uit met de broncode.

  Een indicatie: vrijwel alle projecten gebruiken `lint`. De meeste projecten gebruiken `build`. Veel projecten gebruiken `test`. Slechts enkele projecten gebruiken `lint-build` en `test-build`.

Stel de Git repository in:

- Gebruik de `main` branch als default branch.
- Stel de `main` branch in als protected branch:
  - de `main` branch mag niet verwijderd worden.
- Stel in dat een succesvolle GitHub Action verplicht is voor de volgende npm scripts, als die bestaan: `build`, `lint-build` en `test-build`, `lint` en `test`.

Als je GitHub gebruikt:

- Maak een Pull Request verplicht om code te committen naar de `main` branch.
- Maak een review verplicht om code te committen naar de `main` branch.
- Gebruik [rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets) voor branch protections. Migreer [Branch protection rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule) naar rulesets zodra je de mogelijkheid hebt.
- Stel in de branches automatisch verwijderd worden nadat Pull Requests gemerged zijn, zodat het aantal branches overzichtelijk blijft.

Als je GitLab gebruikt:

- Gebruik vergelijkbare instellingen voor GitLab Merge Requests als voor GitHub Pull Requests.

## Directory-structuur

- Gebruik een conventionele directory-structuur, zodat bestanden op een voorspelbare plek te vinden zijn:
  - `packages/`: npm packages die je wilt delen met de community.
  - `properietary/`: npm packages die je zelf nodig hebt, maar niet bedoeld zijn voor hergebruik.
  - `**/dist/`: gecompileerde code, die niet in Git wordt opgeslagen.
  - `**/src/`: broncode.
  - `**/tmp/`: tijdelijke bestanden die niet in Git worden opgeslagen.

## Documentatie

- Maak een `/README.md` bestand met de belangrijke informatie, zoals:
  - Waar kun je hulp krijgen?
  - Wat is de open source licentie?
  - Wat is de Code of Conduct?
- Maak een `/LICENSE.md` bestand met de open source licentie. Wij gebruiken de [EUPL-1.2 licentie](https://opensource.org/license/eupl-1-2).
- Maak een `/CODE_OF_CONDUCT.md` bestand met de Code of Conduct. Wij gebruiken de [Contributor Covenant 2.0](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).

Als je bestanden aanmaakt met belangrijke informatie, gebruik dan [conventionele bestandsnamen](https://github.com/joelparkerhenderson/github-special-files-and-paths?tab=readme-ov-file#readme) zodat de informatie makkelijk te vinden is, zoals bijvoorbeeld:

- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `SECURITY.txt`
- `SUPPORT.md`

## Infrastructure as code

Om de repositories in de [nl-design-system GitHub organisatie](http://github.com/nl-design-system) te beheren gebruiken we [Terraform](https://www.terraform.io), met plugins voor [github](https://registry.terraform.io/providers/integrations/github/latest/docs) en [vercel](https://registry.terraform.io/providers/vercel/vercel/latest/docs). In de [nl-design-system/terraform repository](http://github.com/nl-design-system/terraform) staan configuratie-bestanden, met diverse instellingen.

- GitHub rulesets.
- GitHub teams.
- GitHub team members.
- GitHub repository access rights.
- Vercel deployments.

Als deze instellingen in Terraform worden beheerd, dan moeten ze niet meer handmatig gewijzigd worden via de GitHub user interface. Om handmatige wijzigingen te voorkomen hebben zo min mogelijk users maintainer rechten.

Als je instellingen wilt wijzigen dan kun je bij de terraform repository een Pull Request maken met een voorstel voor de nieuwe instellingen.

## Upgrades

### December 2024

#### Node 22

[Node 22 is al beschikbaar sinds april](https://nodejs.org/en/blog/announcements/v22-release-announce), en in oktober 2024 is versie 22 [een long-term support versie geworden](https://nodejs.org/en/about/previous-releases). Eind november werd Node 22 ondersteund door Vercel. Daarmee is ondersteuning voldoende om over te stappenop Node 22.

Instructies voor de upgrade naar Node 22:

- Pas `.nvmrc` en `.node-version` aan naar `22`, als je die bestanden gebruikt.
- Voer de volgende commands uit om als developer Node 22 te gebruiken in de command line:
  1. `nvm install`
  2. `nvm use`
  3. `corepack enable`
- Upgrade npm dependencies van `@types/node` aan naar de meest recente 22.x versie, met het command: `pnpm exec npm-check-updates --filter @types/node --install always --upgrade`
- Pas `"engines"` van de `package.json` in de root van je repository aan naar `"node": "^22"`.
- GitHub Actions kun je instellen dat ze de Node-versie gebruiken die in `.nvmrc` staat, dus je hoeft voor GitHub Actions niets te doen als je dat gebruikt.
- Als je Vercel gebruikt: pas in de General Settings van je Project aan dat je [Node 22.x wilt gebruiken voor Vercel](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions). Helaas lijkt het niet mogelijk dit via Terraform te configureren.

#### ESLint 9

...

#### Style Dictionary 4

Style Dictionary 4 is al een half jaar uit, en veel teams zijn al succesvol gemigreerd. De command line tool van Style Dictionary 3 is vervangen door een Node.js API. Je kunt nu de build commands zelf vanuit JavaScript aanroepen.

De makkelijkste manier om te migreren naar Style Dictionary 4 is om [onze Style Dictionary-configuratie uit de example repository](https://github.com/nl-design-system/example/tree/main/proprietary/design-tokens) te kopieëren.
