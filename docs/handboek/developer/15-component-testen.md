---
title: Componenten testen · Developer · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Componenten testen
pagination_label: Componenten testen
description: Eigen componenten testen
keywords:
  - developer
  - bijdragen
  - componenten testen
  - css component testen
  - react.js component testen
---

# Componenten testen

Op deze pagina vind je tips om componenten te testen op de juiste aspecten. De meeste voorbeelden zijn uitgewerkt voor React.js met React Testing Library, maar kunnen soms op andere frameworks toegepast worden.

## Testen op uitbreidbaarheid

Zoals op de [bijdragen pagina](/handboek/developer/bijdragen) is beschreven, is uitbreidbaarheid erg belangrijk. Daarom is het van belang om dit te testen.

### Classes

Front-end developers vertrouwen op de BEM classnames om hun eigen CSS toe te voegen. Wanneer de component een classname hernoemt of verwijdert, is er sprake van een 'breaking change'. Unit tests moeten elke classname controleren, zodat het betrouwbare API's zijn. Je zult veel tests zoals deze tegenkomen:

```javascript
it("renders a design system BEM class name: my-component", () => {
  const { container } = render(<MyComponent />);

  const field = container.querySelector("div");

  expect(field).toHaveClass(".my-component");
});
```

## HTML-content in componenten

Tekst in componenten kan soms worden verbeterd met markup: taalmetadata, code, nadruk of afbeeldingen. Elke property die in de HTML terechtkomt, moet worden getest op uitbreidbaarheid met rich text-content.

```javascript
it("renders rich text content", () => {
  const { container } = render(
    <Heading1 {...defaultProps}>
      Wat Nederlandse tekst: <span lang="nl">aap, noot, mies</span>
    </Heading1>,
  );

  const richText = container.querySelector("span");

  expect(richText).toBeInTheDocument();
});
```

Het testen van properties is misschien nog wel belangrijker, omdat children meestal al HTML-content toestaat:

```javascript
it('renders rich text content', () => {
  const { container } = render(
    <FormFieldTextbox label={
      <EmailIcon/> E-mailadres
    }></FormFieldTextbox>,
  );

  const richText = container.querySelector('svg');

  expect(richText).toBeInTheDocument();
});
```

## Maak native HTML niet kapot

### Globale attributen

Zoals aangegeven in [de API conventie voor componenten voor HTML](https://nldesignsystem.nl/handboek/developer/api-conventie/#componenten-voor-html) moeten [Globale HTML-attributen](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) hun normale gedrag behouden. In React kun je alle overige, niet-gespecificeerde properties opvangen met de zogenaamde rest-operator (meestal door `..restProps` te spreaden):

```jsx
({ someProp, ...restProps });
```

De `someProp` wordt expliciet uit het object gehaald, terwijl `restProps` een object bevat met alle overige properties die aan het component zijn doorgegeven.

Daardoor kun je bijvoorbeeld alle globale HTML-attributen automatisch doorgeven aan het onderliggende HTML-element:

```jsx
const MyComponent = ({ someProp, ...restProps }) => {
  return <div {...restProps}>{someProp}</div>;
};
```

Zo worden alle HTML-attributen (zoals `id`, `className`, `data-*`, `aria-*`, etc.) die je op `<MyComponent>` zet automatisch op de `<div>` toegepast.

```XML
<MyComponent id="main" />
<MyComponent style={{ '--my-component-color': 'currentColor' }} />
<MyComponent hidden />
<MyComponent tabIndex={-1} />
<MyComponent lang="en" />
<MyComponent className="custom" />
<MyComponent data-test-id="component" />
<MyComponent role="group" />
```

### Het `hidden` attribuut

De CSS voor een component breekt vaak het `hidden`-attribuut, omdat code zoals `display: flex` de standaardstijlen overschrijft. Test of het `hidden`-attribuut het HTML-element nog steeds onzichtbaar maakt.

```javascript
it("can be hidden", () => {
  const { container } = render(<MyComponent hidden />);

  const component = container.querySelector("div");

  expect(component).not.toBeVisible();
});
```

## De className property

Componenten renderen BEM classnames, maar front-end developers moeten ook hun eigen classnames kunnen toevoegen. Extra classnames moeten de lijst van classnames uitbreiden, niet de classnames van de component overschrijven.

Bijvoorbeeld:

```javascript
import clsx from "clsx";

const MyComponent = ({ className, children }) => {
  return <div className={clsx("my-component", className)}>{children}</div>;
};
```

Dit rendert:

```html
<div class="my-component large"
```

De class "my-component" wordt dus niet overschreven, maar uitgebreid. Vervolgens kun je valideren in een automatische test of dit klopt:

```javascript
it("can have a additional class name", () => {
  const { container } = render(<MyComponent className="large" />);

  const component = container.querySelector(":only-child");

  expect(component).toHaveClass("large");
  expect(component).toHaveClass("my-component");
});
```

## Test de accessibility tree

Om te valideren of de accessibilty `role`s goed ingesteld staan kun je automatische tests schrijven.

### Landmarks

```javascript
it("renders an complementary role element", () => {
  render(<Aside />);

  const aside = screen.getByRole("complementary");

  expect(aside).toBeInTheDocument();
});
```

### Label voor landmarks

Sommige componenten hebben een API om het label te configureren:

```javascript
it("renders a complementary role element with a name", () => {
  render(<BreadcrumbNav label="Breadcrumbs" />);

  const nav = screen.getByRole("navigation", { name: "Breadcrumbs" });

  expect(nav).toBeInTheDocument();
});
```

Andere componenten moeten vertrouwen op aria-labelledby of aria-label.

```javascript
it('renders a complementary role element with a name', () => {
  render(
    <Aside aria-labelledby="heading">
      <h2 id="heading">See also</h1>
    </Aside>
  );

  const aside = screen.getByRole('complementary', { name: 'See also' });

  expect(aside).toBeInTheDocument();
});
```

## States

Voor [WCAG 4.1.2](https://nldesignsystem.nl/wcag/4.1.2/) is het belangrijk dat de state (toestand) van componenten beschikbaar is in de accessibility tree. Testing Library heeft API's om de informatie uit de accessibility tree op te vragen, in plaats van via de DOM.

Voorbeelden van state zijn:

- Een checkbox die checked (aangevinkt) is.
- Een textbox die disabled (uitgeschakeld) is.
- Een textarea die required (vereist) is.
- Een button die expanded (uitgeklapt) is.

```javascript
describe("checked variant", () => {
  it("is not checked by default", () => {
    const { container } = render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
  });

  it("can have a checked state", () => {
    const handleChange = () => {};
    render(<Checkbox checked onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeChecked();
  });

  it("can have a defaultChecked state (in React)", () => {
    render(<Checkbox defaultChecked />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeChecked();
  });
});
```

Helaas ondersteunt Testing Library nog niet elke state in de accessibility tree. Maak alvast wel de test, maar sla de test over middels een `todo`. Gebruik de DOM om de test op een alternatieve manier te doen.

```javascript
// `aria-disabled` is somehow not recognized as disabled state on a listbox by Testing Library
// https://github.com/testing-library/jest-dom/issues/144
it.todo("has a disabled listbox in the accessibility tree", () => {});

// Temporary alternative to the accessibility tree test
it("has a disabled listbox", () => {
  render(<Listbox disabled />);

  const listbox = screen.getByRole("listbox");

  // Look at the DOM instead of the accessibility tree
  expect(listbox).toHaveAttribute("aria-disabled", "true");
});
```

Controleer periodiek of een nieuwe versie van Testing Library de state wel ondersteunt.
