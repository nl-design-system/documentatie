# The NL Design System and Figma

At NL Design System we work with Figma for designing components and patterns.

We collaborate and share knowledge on Figma with designers from the municipality of Utrecht, The Hague and Haarlem as well as Logius amongst others.

The goal is to offer proven components and patterns designed by these and other organisations as a ‘white-label‘ variant that can be tailored to suit your organisation’s own visual style and brand experience.

The address of our Figma team is [https://www.figma.com/@nldesignsystem](https://www.figma.com/@nldesignsystem).

## A shared design language

In Figma, we aim to bridge the gap between designers and developers. We opt to use for instance the same naming conventions as we do in our front-end codebase. This facilitates communication between designers and developers and helps streamline designer to developer handoff. 

## Naming

A good approach in any design file is to explicitly name objects directly after their creation. This helps adding meaning to design objects and eases handoff of a design file to another designer or a developer.

![Unnamed nested frames and groups](https://user-images.githubusercontent.com/248921/140958292-85ccee96-2add-4613-9daf-755b11bd433b.png)


For instance, if you create a rectangle meant as background and border container for a text input it is good practice to name the rectangle `text-input-background` or similar right after creating the rectangle.

Where possible, components, layers, frames, and design tokens borrow (semantic) names from HTML and SVG tags, CSS properties, ARIA roles or BEM naming.

### Component variants

For convenience and ‘scanablity’ when working with component variants we suggest using lowercase for boolean values, such as on/off or true/false options and sentence case for interactive and feedback states.

Using the same naming as used in the front-end again eases communication and handoff. For instance for a checkbox’ checked state we use 'checked' instead of 'active'.

In Figma, variant properties can be sorted by dragging and dropping individual properties.

![Component variant panel in Figma](https://user-images.githubusercontent.com/248921/140958477-85782e98-ca0f-451a-b85e-1015ca081046.png)

These references also help quickly setting up an interactive prototype.

![Prototype settings in Figma reflect variant naming](https://user-images.githubusercontent.com/248921/140958596-9c6db66c-299b-441f-9196-af916dbe9f37.png)

### Synonyms

Synonyms in the description field help searching for components in libraries.

In below example searching on either select, dropdown, or menu all return the library’s select component.

![Synonyms for Select component](https://user-images.githubusercontent.com/248921/140958774-31867f4e-87c2-45ae-86bc-288f965b99c7.png)

### Avoid local components from being published to a library

Prefixing a component with an underscore (`_`) prevents it from being published to a shared library. This is especially useful to avoid atomic elements, in use by  components but with no use as a reusable standalone element, from being added to a shared library.

In below example searching on ‘checkbox’ returns all components with checkbox in their name. However searching on ‘placeholder’ returns no results.

![Components which will be published, and components with a prefix not being published](https://user-images.githubusercontent.com/248921/140958964-90e3ddf8-5bd2-4f0b-bcdc-3b32be0958fe.png)

### Images

Design files are a perfect place to define the intention of images. If an image is decorative, and as such would get a blank `alt=""` alternative text attribute this can be added to its description.

Likewise, if an image is informative to the user, an appropriate `alt` text can already be added as image name. Using the layer to add this image description results in this text being available in Figma’s Layer and Inspect panels.

![Image with undescriptive name](https://user-images.githubusercontent.com/248921/140959070-29703f9f-6b66-4fe8-947d-52905dc84458.png)

![Image with descriptive name](https://user-images.githubusercontent.com/248921/140959094-c7b3b87e-f49a-4f23-8893-7e93080f94a9.png)

## File structure

A proper file structure helps in scanning and navigating Figma files. High-level sectioning (such as component groups, components, component specifications, or examples) helps quickly navigate to these sections.

The keyboard shortcuts `1` and `2` allow quickly zooming in on either the whole page or a selection respectively.

With proper sections and layers, you can zoom into a section or layer by selecting it from the layer panel and zooming in by pressing `2`. Zooming back to the either page or 100% of the current view can be done by pressing `1` and `0` respectively.

### Emojis aid quick scanning

Emojis in page and layer naming can aid quick scanning or provide a means to quickly check a status.

![Emojis in page and component names](https://user-images.githubusercontent.com/248921/140959174-76e45980-73df-43c1-b918-f6cd14af3a29.png)

### Nesting

Avoid unnecessary folder nesting, but do use nesting to intentionally group related elements.

![Unintentional and intentional nesting examples](https://user-images.githubusercontent.com/248921/140959366-05df035f-3255-4346-8c65-f06056b241f0.png)

## Version history

Version history naming helps with tracking changes.

![Version history overview](https://user-images.githubusercontent.com/248921/140959456-8c2699e7-8641-4fcd-a2e8-da24664ffcc1.png)
