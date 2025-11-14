---
title: Tips voor het bijdragen aan componenten
slug: bijdragen
hide_title: true
hide_table_of_contents: false
sidebar_label: Tips voor het bijdragen aan componenten
pagination_label: Tips voor het bijdragen aan componenten
description: Tips voor het bijdragen aan componenten, zodat andere developers er beter op aan kunnen sluiten.
keywords:
  - developer
  - aan de slag
  - componenten
  - bijdragen
  - tips
  - verbeteringen
---

# Tips voor het bijdragen aan componenten

:::warning[Waarschuwing]
De codevoorbeelden zijn bewust vereenvoudigd om één concept tegelijk te tonen. Neem de codefragmenten niet letterlijk over.
Kijk voor meer complete voorbeelden naar de broncode van bestaande componenten.
:::

Op deze pagina wordt een aantal tips gegeven, zodat je componenten beter kunnen aansluiten op de wensen en best-practices van andere developers. De tips bevatten soms framework-specifieke informatie.

## Ontwikkel componenten met uitbreidbaarheid in gedachten

Zorg ervoor dat je componenten ontwikkeld volgens het [open-closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle). Dit betekent dat de component open moet zijn voor uitbreidingen, maar gesloten moet zijn voor aanpassingen. Uiteraard is het zonder problemen mogelijk de component aan te passen, wanneer deze nog niet in gebruik is door andere afnemers.

## CSS class naamgeving

Stel front-end developers in staat om hun eigen class-namen toe te voegen aan het buitenste HTML-element van je component. Aangezien alle componenten BEM class-namen hebben, moet je jouw BEM class-namen combineren met eventuele class-namen uit de parameters. We gebruiken doorgaans `clsx` om het `class`-attribuut te formatteren.

```jsx
import clsx from "clsx";

export const MyComponent = ({ children, className }) => (
  <div className={clsx("my-component", className)}>{children}</div>
);
```

## Sta rich text content toe

Sta `ReactNode` content toe voor tekstparameters, zodat front-end developers toegankelijke en betekenisvolle markup kunnen gebruiken. Het gebruik van `PropsWithChildren` wordt aanbevolen voor niet-lege componenten, omdat dit `ReactNode` voor _children_ toestaat.

```jsx
import clsx from "clsx";
import type { PropsWithChildren } from "react";

export interface MyComponentProps {
  // ...
}

export const MyComponent = ({
  children,
}: PropsWithChildren<MyComponentProps>) => <div>{children}</div>;
```

Voor andere parameters is het gebruik van `ReactNode` misschien niet zo voor de hand liggend, omdat je misschien geneigd bent te beginnen met `string`. Bijvoorbeeld:

```jsx
import clsx from "clsx";
import type { PropsWithChildren } from "react";

export interface MyLandmarkComponentProps {
  label: ReactNode;
}

export const MyLandmarkComponent = ({
  children,
  label,
}: PropsWithChildren<MyComponentProps>) => {
  const labelId = useId();
  return (
    <div role="region" aria-labelledby={label ? labelId : undefined}>
      {label && <div id={labelId}>{label}</div>}
      {children}
    </div>
  );
};
```

Dit stelt front-end developers in staat om elke soort markup te gebruiken:

```jsx
<MyLandmarkComponent
  label={
    <>
      <LandmarkIcon /> Landmark label
    </>
  }
>
  <p>Landmark content</p>
</MyLandmarkComponent>
```

Het toestaan van rich text is nog een reden om `aria-labelledby` te gebruiken in plaats van `aria-label`.

## Exporteer interfaces en types

Exporteer de typedefinities voor parameters, zodat andere ontwikkelaars deze gemakkelijk kunnen gebruiken om _wrapper_-componenten te ontwikkelen.

```jsx
export type TextboxTypes = "password" | "text";

export interface TextboxProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: TextboxTypes;
}

export const Textbox = ({ type }: TextboxProps) => <input {...restProps} type={type} />;
```

Op deze manier kan een andere ontwikkelaar jouw component uitbreiden:

```jsx
import type { TextboxProps, TextboxTypes } from "@my/textbox";

export interface AdvancedTextboxProps extends TextboxProps {
  type?: TextboxTypes | "date";
}

export const AdvancedTextbox = ({ type }: AdvancedTextboxProps) => <input {...restProps} type={type} />;
```

## Gebruik `forwardRef` of React ref uit de props

:::info
Het onderstaande voorbeeld is nog steeds relevant, maar sinds React 19 is het mogelijk om de ref uit de props te halen.
https://react.dev/blog/2024/12/05/react-19#ref-as-a-prop
:::

Gebruik `forwardRef` om de DOM-node beschikbaar te maken via een `ref`.

```jsx
import clsx from "clsx";
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from "react";

export interface MyComponentProps extends HTMLAttributes<HTMLDivElement> {}

export const MyComponent = forwardRef(
  (
    { children, ...restProps }: PropsWithChildren<MyComponentProps>,
    ref: ForwardedRef<HTMLDivElement>
  ) => (
    <div ref={ref} {...restProps}>
      {children}
    </div>
  )
);
```

Dit stelt front-end developers in staat om acties uit te voeren die toegang tot de DOM vereisen, zoals het focussen van een element:

```jsx
const ref = useRef < HTMLDivElement > null;

render(<MyComponent tabIndex={0} ref={ref} />);

ref.current?.focus();
```

Breek native HTML niet

## Intrinsieke elementattributen

Gebruik `restProps` om front-end developers in staat te stellen intrinsieke elementattributen en specifieke attributen aan een HTML-element toe te voegen:

```jsx
import clsx from "clsx";

export const MyComponent = ({ children, ...restProps }) => <div {...restProps}>{children}</div>;
```

Met TypeScript moet je de interface uitbreiden met de `HTMLAttributes` van het buitenste element, en dat ziet er als volgt uit:

```jsx
import clsx from "clsx";
import type { HTMLAttributes, PropsWithChildren } from "react";

export interface MyComponentProps extends HTMLAttributes<HTMLDivElement> {}

export const MyComponent = ({ children, ...restProps }) => (
  <div {...restProps}>{children}</div>
);
```

Voor verschillende elementen moet je verschillende types `HTMLAttributes` importeren, daarvoor zou je kunnen kijken in de [veelgebruikte typings voor React](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/ff41535d2d84f62f459fa56a9c462182ed9d1ab3/types/react/index.d.ts#L4100-L4282).
Op de Mozilla Developer website (MDN) kun je voor elk HTML element terugvinden wat daarvan de DOM Interface is onder "Technical Summary". Als voorbeeld [div](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div).

## Voorkom dubbele ID's

Genereer `id`-attributen met `useId()` van React. Gebruik geen hardgecodeerde `id`-waarden, omdat dat de toegankelijkheid kan breken.

```jsx
export const MyLandmarkComponent = ({ children, label }) => {
  const labelId = useId();
  return (
    <div role="region" aria-labelledby={label ? labelId : undefined}>
      {label && <div id={labelId}>{label}</div>}
      {children}
    </div>
  );
};
```
