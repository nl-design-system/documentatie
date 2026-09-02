import type { Root, Paragraph, Image } from 'mdast';
import type { VFile } from 'vfile';

/**
 * Type guard to check if an object is a Paragraph
 */
const isParagraph = (object: { type?: string }): object is Paragraph => {
  return object?.type === 'paragraph';
};

/**
 * Type guard to check if an object is an Image
 */
const isImage = (object: { type?: string }): object is Image => {
  return object?.type === 'image';
};

/**
 * Type guard to check if an object is a Paragraph containing an Image
 */
function isParagraphWithImage(object: object): object is Paragraph {
  return isParagraph(object) && object?.children?.some(isImage);
}

/**
 * A remark plugin that adds the first image to be found as cover property in
 * the frontmatter
 */
export function coverPlugin() {
  /**
   * Transform function
   */
  return function (tree: Root, file: VFile): void {
    if (file?.data?.astro?.frontmatter?.['cover']) return;

    // Get the first paragraph with an image.
    // Images are always included in a paragraph
    const paragraph = tree?.children?.find(isParagraphWithImage);

    // Get the first image from the paragraph
    const image = paragraph?.children?.find(isImage);

    if (file?.data?.astro?.frontmatter && image) {
      file.data.astro.frontmatter['cover'] = image;
    }
  };
}
