# Design tokens in Figma

By using design tokens, both designers and developers share a unified language. It allows all disciplines to reference design features, properties, components, etc. by the same name.

In its essence tokens are a *key : value* pair, where the key is the property, and the value, well, its value.

Through design tokens, we can draw from a ‘single source of truth‘, meaning that they live in one centralised location to be used by both front-end and design tooling. To translate the tokens between our front-end codebase and Figma we use [Style Dictionary](https://amzn.github.io/style-dictionary/).

Until Figma provides native support for design tokens we are currently dependant on a plugin. We eventually landed on the [Figma Tokens plugin](https://docs.tokens.studio/). Not only is this plugin continuously maintained, the developer is also open to suggestions and improvements.

Multiple token sets can be loaded in Figma. This allows us to easily convert to other visual styles and brands based on a white-label design. This also makes it possible to spot which design tokens a visual style might still be missing and provide sane defaults in case of missing visual properties, for instance when a brand’s visual style does not provide for feedback colors.

For this to work however, we need to pay close attention to the naming convention of tokens. One other important note is that tokens are not saved as part of Figma files, in order to use them, they have to be set up first and either manually updated or synchronised via GitHub.

## Token levels

We use a layered approach to design tokens where brand/product styling is abstracted from the underlying structural design language.

The three levels are:

1. Brand tokens,
2. Common tokens, and
3. Component tokens

## Brand tokens

Brand tokens define your brand or product’s visual language ‘options’; its colors, typography, sizing, etc. 

You are free to use your own language when naming these tokens. You might already have internal conversations about your own unique `kleur-actieblauw` or `merkkleur-rood`. We advise you to use this language for your brand tokens. After all, tokens are meant to unify language between designers and developers. If you already have an established language in your organisation it is best to continue using this over relearning a new language.

## Common tokens

One level below brand tokens are the common tokens. In these tokens, visual properties are assigned meaning. These tokens always refer to the brand tokens.

Common tokens are oft-recurring visual properties not specifically tied to a single component. A common token key:value pair is for example: `document-color: utrecht-color-black`.

Where the first `document-color` is the text foreground color, and `utrecht-color-black` references the color that the municipality of Utrecht has defined as their text foreground brand color.

Common tokens add semantic meaning to common visual styles.

## Component tokens

Component tokens are tokens used for specific components.

An example of a component token key: value pair is `button-primary-action-background-color: denhaag-color-primary-action`.

Component tokens can refer to both brand or common tokens.

## Setup and installation

- Start by [installing the plugin from the Figma plugin repository](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens).
- Once installed, open it from the plugin menu and navigate through the help screens.
- There are two ways to load the white-label design tokens which can be used as a basis for your own tokens.
    1. If you want to play around and get comfortable start by [copying the white-label design tokens](https://github.com/nl-design-system/figma-designtokens/blob/main/whitelabel.tokens.json) and pasting them into the text field in the **JSON** panel (overwriting the default curly brackets). If you now navigate back to the **Tokens** panel you should see the tokens grouped in categories.
    2. To load and synchronise the white-label design tokens, together with the tokens from other NL Design System contributors go to the **Sync** panel and select **GitHub** underneath Token Storage. [Contact Rogier](mailto:rogier.barendregt@ictu.nl) for the necessary credentials.

Our Figma tokens are stored in JSON format and currently synchronised to GitHub. This allows tokens to be shared by different Figma users and in multiple files.

In order to synchronise the tokens a text-key is needed which can be optained by [contacting Rogier](mailto:rogier.barendregt@ictu.nl)

## Editing of tokens

Editing the JSON tokens is best done in an external code editor. This allows better readability and offers all the benefits of a code editor such as global search and replace, proper indentation, syntax highlighting, etc.

In order to edit the tokens simply select all the tokens (`CTRL+A`) in the JSON tab and copy them in your code editor. 

Once you are done editing the tokens, copy them back in the JSON tab in Figma Tokens.

Keep in mind that the JSON format is strict, any comma or curly bracket that is omitted or not in the proper place will result in an invalid JSON file. The plugin will feed back an alert in case the JSON structure is invalid.

![Error message when JSON is invalid from Figma Tokens](https://user-images.githubusercontent.com/248921/140959660-5c6bbff7-524a-4e13-8f1c-8cf756b1fda4.png)

## Backup of tokens

Another benefit of editing the tokens in an external editor is that it is easy to keep a backup copy which in turn can be added to your GitHub repository for extra backup safety or keeping all related files together.

We highly recommend to make a backup each time you have done any work on tokens in Figma Tokens.

## Remarks

Figma is a great tool to design web interfaces. However due to the flexible nature of the Web it is not possible to mimic the medium and its behaviour exactly in Figma.

### Values and units are not possible in Figma

Values and units that are not possible to use in conjunction with Figma Tokens are:

- ex (X-height of font)
- ch (width of character 0 in chosen fontset, or width of any character in a monospace font)
- em
- rem

EMs and REMs should be converted to ‘absolute’ units. One tool that can help converting these is [http://pxtoem.com/](http://pxtoem.com/).

![PXtoEM tool](https://user-images.githubusercontent.com/248921/140959962-dab2fe1d-e27c-433e-a8cf-c79c103e8e6c.png)

![PXtoEM tool with em value converted to px](https://user-images.githubusercontent.com/248921/140960000-4b81b493-8b6a-4465-979c-610f056e847d.png)

It allows EMs to be converted to pixel values which can be used in Figma. The base pixel value is the size of your ‘root’ base (font) size. In most cases this will be 16px.

Since REM sizing depends on its parent sizing determining the EM value is a bit more tricky. In these cases you should calculate what the EM value is based on a sized element container(s). One solution is to use your browser’s developer tools to see what the ‘computed value’ of an element’s size is.

To do so, open your developer tools. For Chrome, go to **View** → **Developer** → **Developer tools** or use the keyboard shortcut `⌥+⌘+I` (MacOS) or `CTRL+ALT+I` (Windows) or right-click on the element and choose **Inspect**.

From there go to the **Elements** tab, where you see the source code of the current page. Underneath the source code is another set of tabs with **Styles** open by default. Click on the second **Computed** tab to see the browser’s computed CSS values.

When you have selected the element for which you want to see its calculated value, go to the property you want to know the value of. In case of the illustration below its the font-size. The value you want to attach to your token is in this case **17**.

![DevTools showing calculated CSS values](https://user-images.githubusercontent.com/248921/140960248-1beb10f7-59fa-4d8a-93a4-e4ccffb85a75.png)

## Colors

Colors can be specified in multiple CSS-compatible formats:

- Hex
- RGB
- RGBa
- HSL
- HSLa
- Linear gradients (including multiple color steps and opacity levels)

Color can be applied both to borders and fills (background). By default the Token plugin applies color as a background fill. In order to apply color to a border, right-click the token and select **Border**.

![Figma Tokens size color options](https://user-images.githubusercontent.com/248921/140960875-03df21e8-3506-4abd-82b4-fb7be661c370.png)

## Borders

The following tokens for borders can be defined:

1. Border color (see Colors section above)
2. Border width
3. Border radius

## Sizing and spacing

### Sizing

Sizing can be applied both on the *X* (horizontal) and *Y* (vertical) axis. By default sizing tokens are applied to both axes.

If you want to set a sizing token only along the *X* axis, select the token by right-clicking on the token and selecting **Width**.

![Figma Tokens size token options](https://user-images.githubusercontent.com/248921/140960907-0fc7ef14-f855-4d49-aa89-f78d44e01123.png)

The same applies to the *Y* axis for height, right-click the token and select **Height**.

### Spacing

Where sizing can be applied to an element in its default state, spacing tokens can only be applied to elements when their container is set to Auto layout.

### Padding and margins

Spacing can be applied both on the *X* (inline) and *Y* (block) axis. By default a spacing token is applied to the **Gap** property.

![Figma Tokens space token options](https://user-images.githubusercontent.com/248921/140961019-ce202625-a1a2-4b66-bc55-29aaa473c02a.png)

Right-clicking the token allows you to set the token to a number of properties:

**Gap** is the spacing between objects and allows you to set margins between elements. 

If Auto layout is set in the horizontal direction Gap can be used to add a left (`inline-start`) or right (`inline-end`) margin. When set to a vertical direction it can be used to set a top (`block-start`) or bottom (`block-end`) margin.

Selecting **All** will add a uniform inner padding to objects.

**Top**, **Right**, **Bottom**, **Left** will set the token value to the respective one-directional padding.

In order to add both inline and block margins to objects, it might sometimes be necessary to add an empty container element to your object.

## Typography

Define the base body typeface with the token `document-font-family`. Keep in mind that ‘font stacks’, where fallback options for your preferred typeface can be defined in CSS are not supported in Figma. Only a single typeface should be defined.

Font weights (such as regular, medium, and bold) have to be defined exactly as they are described by the font author. Some fonts use the term ‘regular’ for its regular weight, whereas others use ‘400’ or ‘normal’. 

![Figma native typespecs panel](https://user-images.githubusercontent.com/248921/140961125-b1a81200-97ed-4e07-91c4-edf3a3a1710e.png)

It is vital to use the same name as used in the text panel in Figma. If this is not properly set, it will result in typographic tokens not being applied.

### Modular typographic scale

Defining a flexible type scale can be done through the Token plugin by [using math](https://docs.tokens.studio/tokens/using-math). From one single base font-size (generally your body paragraph text) you can create a flexible scale by multiplying or diving the base-size. This will allow you to set a fixed size interval between your paragraph text, headings, secondary text, and micro typography.

![Type size token with math](https://user-images.githubusercontent.com/248921/140961346-929ac75b-1f10-4b2f-bac7-f33089436405.png)

Here the token `font-size-xl` uses the `font-size-md` as a base and multiplies it by 1.25. 

![Type size token](https://user-images.githubusercontent.com/248921/140961372-22c61588-ef35-4801-b368-5151bf3ba191.png)

The `font-size-md`, used for regular paragraph text is the only font-size defined at 16. All other font-sizes are automatically generated by multiplying or dividing `font-size-md`.

If you then were to change the base font-size, your modular scale will change dynamically.

Should you already use a flexible modular scale for within your visual style, it is easy to adopt one-to-one in Figma.

### Composite type tokens

In order to establish ‘combined’ typography tokens, such as headings one or a paragraph, all individual typography related tokens making up such combined tokens have to be defined first. A combined token references each of these individual tokens.

![Composite type token](https://user-images.githubusercontent.com/248921/140961614-18918637-1385-4cf4-a204-4ac415efff1e.png)

The typographic tokens that should be set in order to create a combined typographic token are:

- Font-family
- Font-weight
- Font-size
- Line-height
- Letter-spacing (spacing between characters, best left set to 0 to inherit kerning and spacing as defined by the typeface designer for most text with the possible exception of headings and text set in all-capitals)
- Paragraph-spacing (spacing between consecutive paragraphs and/or headings)
