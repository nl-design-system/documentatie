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
---

# Componenten testen

Op deze pagina vindt je tips om componenten te testen op de juiste aspecten.

## Testen op uitbreidbaarheid

Zoals op de [bijdragen pagina](/handboek/developer/bijdragen) is beschreven, is uitbreidbaarheid erg belangrijk. Daarom is het van belang om uitbreidbaarheid te testen.

### Class namen

Front-end developers vertrouwen op de BEM-klassnamen om hun eigen CSS toe te voegen. Wanneer het component een class naam hernoemt of verwijdert, is er sprake van een 'breaking change'. Unit tests moeten elke class naam controleren, zodat het betrouwbare API's zijn. Je zult veel tests zoals deze tegenkomen:

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
      The French national motto: <span lang="fr">Liberté, égalité, fraternité</span>
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
      <EmailIcon/> E-mail address
    }></FormFieldTextbox>,
  );

  const richText = container.querySelector('svg');

  expect(richText).toBeInTheDocument();
});
```

## Maak native HTML niet kapot

### Globale attributen

Globale attributen kunnen op alle HTML-elementen worden gebruikt, dus componenten die HTML renderen moeten deze ook ondersteunen. In React is dit eenvoudig te ondersteunen met ...restProps. De volgende codevoorbeelden gebruiken globale attributen:

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

### Het hidden attribuut

De CSS voor een component breekt vaak het hidden attribuut, omdat code zoals display: flex de standaardstijlen overschrijft. Test of het hidden attribuut het [element] nog steeds onzichtbaar maakt.

```javascript
it("can be hidden", () => {
  const { container } = render(<MyComponent hidden />);

  const component = container.querySelector("div");

  expect(component).not.toBeVisible();
});
```

## De className property

Componenten renderen BEM-klassnamen, maar front-end developers moeten ook hun eigen klassnamen kunnen gebruiken. Extra klassnamen moeten de klassenlijst uitbreiden, niet de klassnamen van het component overschrijven.

```javascript
it("can have a additional class name", () => {
  const { container } = render(<MyComponent className="large" />);

  const component = container.querySelector(":only-child");

  expect(component).toHaveClass("large");
  expect(component).toHaveClass("my-component");
});
```

## Test de accessibility tree

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
it("renders an complementary role element with a name", () => {
  render(<BreadcrumbNav label="Breadcrumbs" />);

  const nav = screen.getByRole("navigation", { name: "Breadcrumbs" });

  expect(nav).toBeInTheDocument();
});
```

Andere componenten moeten vertrouwen op aria-labelledby of aria-label.

```javascript
it('renders an complementary role element with a name', () => {
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

Voor WCAG 4.1.2 is het belangrijk dat de state (toestand) van componenten beschikbaar is in de accessibility tree. Testing Library heeft API's om de informatie uit de accessibility tree op te vragen, in plaats van via de DOM.

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

Helaas ondersteunt Testing Library nog niet elke state in de accessibility tree. Maak alvast wel de test, maar sla de test over (todo). Gebruik de DOM om de test op een alternatieve manier te doen.

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
