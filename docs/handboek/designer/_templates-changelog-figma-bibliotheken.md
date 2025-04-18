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

Soort wijziging: `patch`

##### Schrijfwijze

```md
Tekst '{oude-tekst}' is gewijzigd naar '{nieuwe-tekst}' in {naam-component} component.
```

##### Voorbeeld

```md
Tekst 'Label' is gewijzigd naar 'Text' in Button component.
```

#### Tekst van property name is gewijzigd

##### Schrijfwijze

```md
Property name is gewijzigd van '{oude-naam-property}' naar '{nieuwe-naam-property}' in {naam-component} component.
```

##### Voorbeeld

```md
Property name is gewijzigd van 'Content' naar 'Children' in Alert component.
```

#### Tekst van property value is gewijzigd

##### Schrijfwijze

```md
Property value is gewijzigd van '{oude-waarde-property}' naar '{nieuwe-waarde-property}' in {naam-component} component.
```

##### Voorbeeld

```md
Property value is gewijzigd van 'OK' naar 'Positive' in Alert component.
```

#### Tekst in frame is gewijzigd 

##### Schrijfwijze

```md
Tekst '{oude-tekst} is gewijzigd naar '{nieuwe-tekst}' in {frame} frame.
```

##### Voorbeeld

```md
Tekst 'Text input' is gewijzigd naar 'Text Input' in Documentatie frame.
```

### Token hernoemd

Soort wijziging: `major`

#### 1 token hernoemd

##### Schrijfwijze

```md
Token `{oude-token}` is hernoemd naar `{nieuwe-token}` in {naam-component} component.
```

##### Voorbeeld

```md
Token `.accordion.button.icon.margin-inline` is hernoemd naar `.accordion.button.gap` in Accordion component.
```

#### Meer dan 1 token hernoemd

##### Schrijfwijze

```md
De volgende tokens zijn hernoemd in {naam-component} component:
- `{oude-token}` naar `{nieuwe-token}`
- `{oude-token}` naar `{nieuwe-token}`
```

##### Voorbeeld

```md
De volgende tokens zijn hernoemd in Accordion component:
- `nl.heading.level-1.margin-block-start` naar `nl.heading.level-1.padding-block-start`
- `nl.heading.level-1.margin-block-end` naar `nl.heading.level-1.padding-block-end`
```

### Token toegevoegd

Soort wijziging: `minor`

#### 1 token toegevoegd

##### Schrijfwijze

```md
Token `{token}` is toegevoegd aan {naam-component} component.
```

##### Voorbeeld

```md
Token `accordion.row-gap` is toegevoegd aan Accordion component.
```

#### Meer dan 1 token toegevoegd

##### Schrijfwijze

```md
De volgende tokens zijn toegevoegd aan {naam-component} component:
- `{token}`
- `{token}`
```

##### Voorbeeld

```md
De volgende tokens zijn toegevoegd aan Heading component:
- `nl.heading.level-1.margin-block-start`
- `nl.heading.level-1.margin-block-end`
```

### Token verwijderd

Soort wijziging: `major`

#### 1 token verwijderd

##### Schrijfwijze

```md
Token `{token}` is verwijderd uit {naam-component} component.
```

##### Voorbeeld

```md
Token `blockquote.attribution.font-family` is verwijderd uit Blockquote component. 
```

#### Meer dan 1 token verwijderd

##### Schrijfwijze

```md
De volgende tokens zijn verwijderd uit {naam-component} component:
- `{token}`
- `{token}`
```

##### Voorbeeld

```md
De volgende tokens zijn verwijderd uit Heading component:
- `nl.heading.level-1.padding-block-start`
- `nl.heading.level-1.padding-block-end`
```

### Tokenwaarde gewijzigd

De wijziging kan `major`, `minor` of `patch` zijn. Ga na wat de impact zou kunnen zijn van deze wijziging bij afnemers. Bij twijfel kies voor het hoogste type.

#### 1 tokenwaarde gewijzigd

##### Schrijfwijze

```md
Waarde van token `{oude-token}` is gewijzigd naar {brand token/common token} `{nieuwe-waarde-token}`.
```

##### Voorbeeld

```md
Waarde van token `utrecht.ordered-list.padding-inline-start` is gewijzigd naar brand token `voorbeeld.space.inline.beetle`. 
```

#### Meer dan 1 tokenwaarde gewijzigd

##### Schrijfwijze

```md
De waarde van de volgende tokens zijn gewijzigd:
- `{oude-token}` naar {brand token/common token} `{nieuwe-waarde-token}`
- `{oude-token}` naar {brand token/common token} `{nieuwe-waarde-token}`
```

##### Voorbeeld

```md
De waarde van de volgende tokens zijn gewijzigd:
- `utrecht.ordered-list.padding-inline-start` naar brand token `voorbeeld.space.inline.beetle`
- `utrecht.ordered-list.padding-inline-end` naar brand token `voorbeeld.space.inline.beetle`
```

### Component of subcomponent hernoemd

Soort wijziging: `patch`

#### Component hernoemd

##### Schrijfwijze

```md
Component '{naam-oude-component}' is hernoemd naar '{naam-nieuwe-component}'.
```

##### Voorbeeld

```md
Component 'utrecht-badge-counter' is hernoemd naar 'utrecht-number-badge'.
```

#### Subcomponent hernoemd

##### Schrijfwijze

```md
Subcomponent '{naam-oude-subcomponent}' is hernoemd naar '{naam-nieuwe-subcomponent}' binnen {naam-component} component.
```

##### Voorbeeld

```md
Subcomponent 'utrecht-accordion-button' is hernoemd naar '__button' binnen Accordion component.
```

### Component toegevoegd

Soort wijziging: `minor`

#### Schrijfwijze

```md
{status-estafettemodel} component '{naam-component}' van {organisatie} is toegevoegd aan de bibliotheek.
```

#### Voorbeeld

```md
Community component 'Code Block' van gemeente Utrecht is toegevoegd aan de bibliotheek.
```

### Component verwijderd

Soort wijziging: `major`

##### Schrijfwijze

```md
{status-estafettemodel} component '{naam-component}' is verwijderd uit de bibliotheek.
```

##### Voorbeeld

```md
Help Wanted component 'Badge Data' is verwijderd uit de bibliotheek.
```

### Component gewijzigd

Soort wijziging: `minor`

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
{iets} in {naam-component} is gewijzigd {reden}.
```

##### Voorbeeld

```md
Positie van de Marker in Ordered List component is gewijzigd, door deze buiten het frame te plaatsen.
```

### Lay-out of structuurwijziging

Soort wijziging: `patch`

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

Soort wijziging: `patch`

#### Schrijfwijze

```md
{Kan verschillen. Schrijf in de voltooid deelwoordsvorm (bijv. toegevoegd, aangepast, verplaatst) en begin de zin zonder lidwoord.}
```

#### Voorbeelden

```md
- Waardes zijn omgezet van `px` naar `rem` in Token Studio.
- Tokens in Tokens Studio zijn opnieuw gelinkt aan token documentatie in Figma.
```
