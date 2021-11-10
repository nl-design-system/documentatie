# Naming in Figma

A good approach in any design file is to explicitly name objects directly after their creation. This helps adding meaning to design objects and eases handoff of a design file to another designer or a developer.

![Unnamed nested frames and groups](https://user-images.githubusercontent.com/248921/140958292-85ccee96-2add-4613-9daf-755b11bd433b.png)


For instance, if you create a rectangle meant as background and border container for a text input it is good practice to name the rectangle `text-input-background` or similar right after creating the rectangle.

Where possible, components, layers, frames, and design tokens borrow (semantic) names from HTML and SVG tags, CSS properties, ARIA roles or BEM naming.

## Component variants

For convenience and ‘scanablity’ when working with component variants we suggest using lowercase for boolean values, such as on/off or true/false options and sentence case for interactive and feedback states.

Using the same naming as used in the front-end again eases communication and handoff. For instance for a checkbox’ checked state we use 'checked' instead of 'active'.

In Figma, variant properties can be sorted by dragging and dropping individual properties.

![Component variant panel in Figma](https://user-images.githubusercontent.com/248921/140958477-85782e98-ca0f-451a-b85e-1015ca081046.png)

These references also help quickly setting up an interactive prototype.

![Prototype settings in Figma reflect variant naming](https://user-images.githubusercontent.com/248921/140958596-9c6db66c-299b-441f-9196-af916dbe9f37.png)

## Synonyms

Synonyms in the description field help searching for components in libraries.

In below example searching on either select, dropdown, or menu all return the library’s select component.

![Synonyms for Select component](https://user-images.githubusercontent.com/248921/140958774-31867f4e-87c2-45ae-86bc-288f965b99c7.png)

### Avoid local components from being published to a library

Prefixing a component with an underscore (`_`) prevents it from being published to a shared library. This is especially useful to avoid atomic elements, in use by  components but with no use as a reusable standalone element, from being added to a shared library.

In below example searching on ‘checkbox’ returns all components with checkbox in their name. However searching on ‘placeholder’ returns no results.

![Components which will be published, and components with a prefix not being published](https://user-images.githubusercontent.com/248921/140958964-90e3ddf8-5bd2-4f0b-bcdc-3b32be0958fe.png)

## Images

Design files are a perfect place to define the intention of images. If an image is decorative, and as such would get a blank `alt=""` alternative text attribute this can be added to its description.

Likewise, if an image is informative to the user, an appropriate `alt` text can already be added as image name. Using the layer to add this image description results in this text being available in Figma’s Layer and Inspect panels.

![Image with undescriptive name](https://user-images.githubusercontent.com/248921/140959070-29703f9f-6b66-4fe8-947d-52905dc84458.png)

![Image with descriptive name](https://user-images.githubusercontent.com/248921/140959094-c7b3b87e-f49a-4f23-8893-7e93080f94a9.png)
