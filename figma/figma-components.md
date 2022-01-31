---
menu: Figma
---

# Creating components in Figma

Figma components are reusable objects. Components can spawn multiple ‘instances’ (children) with similar properties or contents. Editing properties or contents in the parent component affects all its instances. Use components when you want to create consistent reusable objects.

Components can be nested in other components. It is good practice to begin with the smallest reusable object and create bigger components from there.

Since components behave as regular Figma frames, [auto layout can be applied to them](figma-autolayout.md).

## Variants

In order to create variants of components a good approach is to first create a ‘base’ component containing all possible options and functionalities. This allows changes to all variants from a single base component.

https://user-images.githubusercontent.com/248921/151841577-2052f0b2-7b4a-4b04-b5a7-6114524293e0.mov

Functionalities not available in one or more variants can then easily be hidden.

Names of states should exactly match between component variants. This means also capitalisation of names, `focus=on` and `Focus=on` resolve in two separate variant instances.

Set a component’s default variant to the top left of the variant frame. This allow instances to select the default component variant by default. This is also the variant that appears in the Assets panel.

## Locking components

After creating a component it is good practice to lock it. This has no influence on the published library and users will still be able to use and edit a component’s instance from the published library.

## Publishing components

When publishing components via Libraries → Publish try publishing in small batches with a detailed description of what has changed and whether there are any breaking changes.

It is good practice to accept component changes in each file that uses an instance of the changed component. This allows to pinpoint any potential bugs right away. Updating components in bulk makes it harder to pinpoint any potential bugs and tracing it back to a specific publication.

## Prevent components from being published

From time to time there might be a need to use components only locally, whether it is a often recuring design system specific component, or a component that is not functional on its own but only in a composited component.

In these cases components can be prevented from being published by adding a leading underscore (`_`).

![Example of a Figma component that will not be published due to a leading underscore in its name](https://user-images.githubusercontent.com/248921/145391406-353368de-c7b7-49e8-88fd-cd1a5018dd41.png)
