# Definition of Done - Feature/PR

## Code Kwaliteit

- [ ] De code voldoet aan alle lint regels (`pnpm run lint` geeft 0 fouten) <!-- continuous integration -->
- [ ] Code formatting is consistent volgens Prettier (`prettier --check` slaagt) <!-- broncode -->
- [ ] EditorConfig instellingen worden gevolgd <!-- broncode -->
- [ ] CSS/SCSS is gecontroleerd met stylelint <!-- broncode -->
- [ ] JavaScript is gecontroleerd met ESLint <!-- broncode -->
- [ ] TypeScript compileert zonder fouten (`tsc --noEmit` slaagt) <!-- broncode -->
- [ ] `package.json` voldoet aan consistentie-eisen (package-json-lint) <!-- broncode -->
- [ ] Alle pre-commit checks slagen (lint-staged) <!-- continuous integration -->

## Testing

- [ ] De code is opgenomen in unit-tests met voldoende coverage
- [ ] Nieuwe gebruikersfunctionaliteit is opgenomen in end-to-end tests
- [ ] Er zijn geen regressies in bestaande tests gevonden
- [ ] Alle tests slagen in de CI/CD pipeline

## Browser Compatibiliteit - Basis

- [ ] Functionaliteit werkt in development browser
- [ ] Responsive design gecontroleerd via DevTools (320px, 768px, 1024px+ breakpoints)
- [ ] Geen console errors of warnings
- [ ] Web Platform features zijn "Widely available" volgens Can I Use, of hebben werkende fallbacks met Baseline ondersteuning

## Toegankelijkheid - Basis

- [ ] Keyboard navigatie werkt (tab, enter, escape, arrows waar relevant)
- [ ] Focus indicators zijn zichtbaar
- [ ] Semantische HTML is gebruikt
- [ ] ARIA attributes zijn correct toegepast (indien nodig)
- [ ] Kleurcontrast voldoet aan WCAG 2.2 Level AA
- [ ] Tekst is schaalbaar tot 200% zonder verlies van functionaliteit

## Internationalisatie en Localisatie

- [ ] Alle teksten zijn gelokaliseerd (geen hardcoded Nederlandse teksten in code)
- [ ] Aantallen, bedragen, datums en tijden gebruiken localisatie API's (bijv. `Intl`)
- [ ] NL Design System Schrijfwijzer is toegepast op teksten
- [ ] Layout werkt met langere teksten

## CI/CD en Deployment

- [ ] Alle GitHub Actions slagen zonder fouten
- [ ] De branch-deploy slaagt en is getest
- [ ] Pull Request heeft een positieve review van minimaal één andere persoon
- [ ] Code is gemerged naar `main` branch via pull request

## Versiebeheer en Release

- [ ] Een changeset-bestand is toegevoegd met changelog-entry
- [ ] Changeset beschrijft de wijziging duidelijk voor eindgebruikers

## Acceptatie en Documentatie

- [ ] De implementatie voldoet aan alle acceptatiecriteria uit het GitHub Issue
- [ ] Code comments zijn toegevoegd voor complexe logica
- [ ] Nieuwe functionaliteit is gedocumenteerd (Markdown bestanden, Storybook indien relevant)
- [ ] README is bijgewerkt indien nodig

## Design System Consistentie

- [ ] Design tokens worden correct gebruikt (kleuren, spacing, typography)
- [ ] ma-thema, start-thema of voorbeeld-thema zijn gebruikt
- [ ] Component API is consistent met bestaande componenten

## Technical Debt en Security

- [ ] Er is geen ongedocumenteerde technical debt geïntroduceerd
- [ ] Nieuwe technical debt is vastgelegd als GitHub Issue met label "technical debt"
- [ ] Geen onveilige dependencies geïnstalleerd (`pnpm audit` toont geen kritieke of hoge problemen)
- [ ] Beveiligingsuitzonderingen zijn gedocumenteerd en geaccepteerd

## Performance

- [ ] Bundle size impact is acceptabel (geen onverwachte grote toenames)
- [ ] Geen onnodige dependencies toegevoegd
- [ ] Assets zijn geoptimaliseerd waar relevant

## Open Source

- [ ] Code voldoet aan EUPL-1.2 licentie vereisten
- [ ] Documentatie voldoet aan CC0 licentie vereisten
