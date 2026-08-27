# Navigation

The Navigation Module is used to provide a global collection of all routes in
the website. From this collection, the side navigation and breadcrumbs are
being rendered.

The main configuration is done in [navigation.config.ts](../navigation.config.ts).

This module provides a couple of tools to interact with the navigation
structure, like finding the parent group(s) of a specific item to build a
breadcumb structure.

All available pages are rendered with Astro. Either through a standard Astro
page component or through a `.md` or `.mdx` file which is made available
through an Astro [Content Collection](https://docs.astro.build/en/guides/content-collections/).

## Configuring the main navigation structure

The since the content of the website is based on markdown files, the navigation
structure is also build around this concept. All markdown files can be found
in the `docs/` folder in the root of the project. Each reference to a file or
folder is relative to the project root.

Within the [`navigation.config.ts`](../navigation.config.ts) file, the
navigation structure can be configured. To do this, there are two concepts
available:

### `NavigationItem`

A `NavigationItem` is a reference to a page on the website, usually represented
by a markdown file. To include a `NavigationItem` in the navigation structure,
use the `navigationItem()` function. This function accepts a file path as the
first parameter.

Please note that in order for the file to be linked, it should available to
Astro.

```js
// example
navigationItem("docs/handboek/estafettemodel.mdx");
```

If you want to include a page rendered by an Astro Page component, you can
use an options object with the public path name instead

```js
navigationItem({ label: "Home", href: "/" });
```

#### The label of an `NavigationItem`

What label a `NavigationItem` gets is decided the first available condition in
the following list:

1. The `label` property in the options object passed to `navigationItem()`
2. The `title_sm` frontmatter field of the markdown file
3. The `title` frontmatter field of the markdown file

When neighter of these fields are available, the string `unknown` is used.

### `NavigationGroup`

A `NavigationGroup` is a reference to a folder relative to the `docs/` folder.

Within the `NavigationGroup`, there are a couple of concepts to be aware of:

1. The `label` of the group
2. The `index` or overview page of the group
3. The `items` within the group
4. The `filePath` is the folder that this group represents

The `label` is the text shown to the user indicating the group. When not
provided in the options object, it will fall back to the label of the `index`
field.

The `index` field is the `NavigationItem` used as an overview page of the group.
When not provided in the options object, the `index.mdx` file within the folder
is being used instead. If that is also missing, an index page will be generated
based on the `items` in the group

The `items` within the group is an array of `NavigationItem`s and
`NavigationGroup`s. It is automatically generated based on the folder contents.

The `filePath` is the folder to reference.

#### Providing the items in the group manually

Each of these concepts can be provided through the options object as well.
Make sure to include an `index` or `label` field when adding the `items`
manually.

#### Sorting items in a group

If the default sorting (alphabetically based on filenames using `filePath` or
the provided order in the `items` array) is not sufficient, a
`navigation_order` field indicating the position, can be added to the
frontmatter of the markdown document.

The `navigation_order` of an `index.mdx` file is applied to it's parent group,
since that file is not included in the list of `items`.
