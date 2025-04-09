# Templates changelog Figma bibliotheken

Gebruik deze 2 templates om changelogs voor designers op een consistente manier te schrijven:

1. Template voor het publiceren van een nieuwe versie op de changelogpagina
2. Template voor het schrijven van changelogregels per type wijziging

## Template voor het publiceren van een nieuwe versie

```md
## 0.1.0

1 januari 2025

- Korte omschrijving van wijziging 1:
  - Subitem 1
  - Subitem 2
- Korte omschrijving van wijziging 2
- [Korte omschrijving van wijziging 3](url-figma-bibliotheek)
```

## Template voor het schrijven van changelogregels

### Tekstwijziging

#### Tekst binnen component is gewijzigd

##### Schrijfwijze

```md
Tekst '{oude-tekst}' is gewijzigd naar '{nieuwe-tekst}' in {naam-component} component.
```

##### Voorbeeld

```md
Tekst 'Label' is gewijzigd naar 'Text' in Button component.
```

#### Tekst binnen subcomponent is gewijzigd

##### Schrijfwijze

```md
Subcomponent '{naam-oude-subcomponent}' is hernoemd naar '{naam-nieuwe-subcomponent}' binnen {naam-component} component.
```

##### Voorbeeld

```md
Subcomponent 'utrecht-accordion-button' is hernoemd naar '__button' binnen Accordion component.
```

#### Tekst van property is gewijzigd

##### Schrijfwijze

```md
Property is gewijzigd van '{oude-naam-property}' naar '{nieuwe-naam-property}' in {naam-component} component.
```

##### Voorbeeld

```md
Property is gewijzigd van 'Content' naar 'Children' in Alert component.
```

#### Tekst van frame is gewijzigd 

##### Schrijfwijze

```md
Tekst '{oude-tekst} is gewijzigd naar '{nieuwe-tekst}' in {frame} frame.
```

##### Voorbeeld

```md
Tekst 'Text input' is gewijzigd naar 'Text Input' in Documentatie frame.
```

### Token hernoemd

#### Schrijfwijze

```md
Token `{oude-token}` is hernoemd naar `{nieuwe-token}` in {naam-component} component.
```

#### Voorbeeld

```md
Token `.accordion.button.icon.margin-inline` is hernoemd naar `.accordion.button.gap` in Accordion component.
```

### Token toegevoegd

#### Schrijfwijze

```md
Token `{token}` is toegevoegd aan {naam-component} component.
```

#### Voorbeeld

```md
Token `accordion.row-gap` is toegevoegd aan Accordion component.
```

### Token verwijderd

#### Schrijfwijze

```md
Token `{token}` is verwijderd uit {naam-component} component.
```

#### Voorbeeld

```md
Token `blockquote.attribution.font-family` is verwijderd uit Blockquote component. 
```

### Tokenwaarde gewijzigd

#### Component wordt genoemd

##### Schrijfwijze

```md
Waarde van token(s) `{token(s)}` is/zijn gewijzigd van {naam-component OF naam-brand-of-common-token}.
```

##### Voorbeeld

```md
Waarde van tokens `utrecht.ordered-list.padding-inline-start` zijn gewijzigd van Ordered List component. 
```

#### Brand of common token wordt genoemd

##### Schrijfwijze

```md
Waarde van token(s) `{token(s)}` is/zijn gewijzigd naar `{token-value}` van {naam-component OF naam-brand-of-common-token}.
```

##### Voorbeeld

```md
Waarde van token `utrecht.form-control.read-only.border-color` is gewijzigd naar transparant van Form Control common token.
```

### Component hernoemd

#### Schrijfwijze

```md
Component '{naam-oude-component}' is hernoemd naar '{naam-nieuwe-component}'.
```

#### Voorbeeld

```md
Component ‘utrecht-badge-counter’ is hernoemd naar ‘utrecht-number-badge’.
```

### Component toegevoegd

#### Schrijfwijze

```md
{status-estafettemodel} component '{naam-component}' van {organisatie} is toegevoegd aan de bibliotheek.
```

#### Voorbeeld

```md
Community component 'Code Block' van gemeente Utrecht is toegevoegd aan de bibliotheek.
```

### Component verwijderd

##### Schrijfwijze

```md
{status-estafettemodel} component '{naam-component}' is verwijderd uit de bibliotheek.
```

##### Voorbeeld

```md
Help Wanted component 'Badge Data' is verwijderd uit de bibliotheek.
```

### Component gewijzigd

#### Iets uit component is verwijderd

##### Schrijfwijze

```md
{iets} is verwijderd uit {naam-component} component.
```

##### Voorbeelden

```md
- Focus state is verwijderd uit Button component.
- Sluit optie is verwijderd uit Alert component.
```

#### Iets in component is gewijzigd

##### Schrijfwijze

```md
{iets} in {naam-component} is gewijzigd.
```

##### Voorbeeld

```md
Positie van de Marker in Ordered List component is gewijzigd, door deze buiten het frame te plaatsen.
```

### Lay-out of structuurwijziging

#### Schrijfwijze

```md
{Kan verschillen. Schrijf in de voltooid deelwoordsvorm (bijv. toegevoegd, aangepast, verplaatst) en begin de zin zonder lidwoord.}
```

#### Voorbeelden

```md
- Afstand tussen frames is aangepast van 400px naar 800px.
- Page dividers zijn toegevoegd aan de pagina's.
- Pagina 'Component collage' is verplaatst naar categorie '# Extra's'.
- Componenten uit NL Design System ToDo bibliotheek zijn verplaatst naar deze bibliotheek.
```

### Technische verbetering

#### Schrijfwijze

```md
{Kan verschillen. Schrijf in de voltooid deelwoordsvorm (bijv. toegevoegd, aangepast, verplaatst) en begin de zin zonder lidwoord.}
```

#### Voorbeelden

```md
- Waardes zijn omgezet van `px` naar `rem` in Token Studio.
- Tokens in Tokens Studio zijn opnieuw gelinkt aan token documentatie in Figma.
```
