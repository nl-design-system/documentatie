## max-inline-size on inline elements

The Code component included `max-inline-size: 100%`, which I don't think has any effect on inline components.

## white-space: pre; instead of `pre-line`.

The Code component has `white-space: pre; /* Preserve space characters */` instead of `pre-line`, even with the following instruction:

## unecessarily include a property that exists on `HTMLElement`

```
export interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Additional class names to add to the component
   */
  className?: string;
}
```
