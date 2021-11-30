# File structure in Figma

A proper file structure helps in scanning and navigating Figma files. High-level sectioning (such as component groups, components, component specifications, or examples) helps quickly navigate to these sections.

The keyboard shortcuts `1` and `2` allow quickly zooming in on either the whole page or a selection respectively.

With proper sections and layers, you can zoom into a section or layer by selecting it from the layer panel and zooming in by pressing `2`. Zooming back to the either page or 100% of the current view can be done by pressing `1` and `0` respectively.

## Grouping

Grouping in Figma is done by either creating a group or frame. Out of these two frames offer the most flexibility.

[Components can be considered another form of grouping](figma-components.md).

### Groups

Groups simply group multiple objects together. Resizing a group causes the object it contains to scale with it.

Properties that can be set on a group are position, dimension, blending mode, and opacity. Fill, stroke, and effects affect all objects inside of a group.

### Frames

Resizing a frame causes objects within it to respond to their individual constraints. Objects can be set to a fixed position within, or set to fill the width and/or height of the parent frame.

Another benefit of frames is that you often do not need a vector object to create an element; i.e. properties for a button such as background or border radius, width, and color can be set directly on the frame itself.

Auto layout can only be set on frames, applying auto-layout to a group will convert it into a frame automatically.

## Emojis aid quick scanning

Emojis in page and layer naming can aid quick scanning or provide a means to quickly check a status.

![Emojis in page and component names](https://user-images.githubusercontent.com/248921/140959174-76e45980-73df-43c1-b918-f6cd14af3a29.png)

## Nesting

Avoid unnecessary folder nesting, but do use nesting to intentionally group related elements.

![Unintentional and intentional nesting examples](https://user-images.githubusercontent.com/248921/140959366-05df035f-3255-4346-8c65-f06056b241f0.png)
