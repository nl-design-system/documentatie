import type { PrismTheme } from 'prism-react-renderer';

const nldsPrismTheme: PrismTheme = {
  plain: {
    color: 'var(--nlds-code-block-color)',
    backgroundColor: 'var(--nlds-code-block-background-color)',
  },
  styles: [
    {
      types: ['maybe-class-name'],
      style: {
        color: 'var(--nlds-code-block-maybe-class-name-color, var(--nlds-code-block-class-name-color))',
      },
    },
    {
      types: ['comment'],
      style: {
        color: 'var(--nlds-code-block-comment-color)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['prolog'],
      style: {
        color: 'var(--nlds-code-block-prolog-color)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['cdata'],
      style: {
        color: 'var(--nlds-code-block-cdata-color)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'var(--nlds-code-block-punctuation-color)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'var(--nlds-code-block-deleted-color)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['symbol'],
      style: {
        color: 'var(--nlds-code-block-symbol-color)',
      },
    },
    {
      types: ['property'],
      style: {
        color: 'var(--nlds-code-block-property-color)',
      },
    },
    {
      types: ['tag'],
      style: {
        color: 'var(--nlds-code-block-tag-color)',
      },
    },
    {
      types: ['operator'],
      style: {
        color: 'var(--nlds-code-block-operator-color)',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: 'var(--nlds-code-block-keyword-color)',
      },
    },
    {
      types: ['boolean'],
      style: {
        color: 'var(--nlds-code-block-boolean-color)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'var(--nlds-code-block-number-color)',
      },
    },
    {
      types: ['constant'],
      style: {
        color: 'var(--nlds-code-block-constant-color)',
      },
    },
    {
      types: ['function'],
      style: {
        color: 'var(--nlds-code-block-function-color)',
      },
    },
    {
      types: ['builtin'],
      style: {
        color: 'var(--nlds-code-block-builtin-color)',
      },
    },
    {
      types: ['char'],
      style: {
        color: 'var(--nlds-code-block-char-color)',
      },
    },
    {
      types: ['selector'],
      style: {
        color: 'var(--nlds-code-block-selector-color)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['doctype'],
      style: {
        color: 'var(--nlds-code-block-doctype-color)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'var(--nlds-code-block-attr-name-color)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['inserted'],
      style: {
        color: 'var(--nlds-code-block-inserted-color)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string'],
      style: {
        color: 'var(--nlds-code-block-string-color)',
      },
    },
    {
      types: ['url'],
      style: { color: 'var(--nlds-code-block-url-color)' },
    },
    {
      types: ['entity'],
      style: {
        color: 'var(--nlds-code-block-entity-color)',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: 'var(--nlds-code-block-class-name-color)',
      },
    },
    {
      types: ['atrule'],
      style: {
        color: 'var(--nlds-code-block-atrule-color)',
      },
    },
    {
      types: ['attr-value'],
      style: {
        color: 'var(--nlds-code-block-attr-value-color)',
      },
    },
    {
      types: ['regex'],
      style: {
        color: 'var(--nlds-code-block-regex-color)',
      },
    },
    {
      types: ['important'],
      style: {
        color: 'var(--nlds-code-block-important-color)',
        fontWeight: 'bold',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'var(--nlds-code-block-variable-color)',
      },
    },
    {
      types: ['bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
  ],
};

export default nldsPrismTheme;
