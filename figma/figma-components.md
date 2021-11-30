# Creating components in Figma

Figma components are reusable objects. Components can spawn multiple ‘instances’ (children) with similar properties or contents. Editing properties or contents in the parent component affects all its instances. Use components when you want to create consistent reusable objects.

Components can be nested in other components. It is good practice to begin with the smallest reusable object and create bigger components from there.

Since components behave as regular Figma frames, [auto layout can be applied to them](figma-autolayout.md).

## Variants

In order to create variants of components the best approach is to first create a component that contains all possible options and functionalities.

Functionalities not available in one or more variants can then easily be hidden.

Names of states should exactly match between component variants. This means also capitalisation of names, `focus=on` and `Focus=on` resolve in two separate variant instances.

## Locking components

After creating a component it is good practice to lock it. This has no influence on the published library and users will still be able to use and edit a component’s instance from the published library.
