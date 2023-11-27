export const PrismStyle = {
  'code[class*="language-"]': {
    color: 'var(--nlds-cod-block-code-color)',
    fontFamily: 'var(--nlds-code-block-font-family, monospace)',
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    lineHeight: 'var(--nlds-code-block-line-height, 1.5)',
    MozTabSize: 'var(--nlds-code-block-tab-size, 4)',
    OTabSize: 'var(--nlds-code-block-tab-size, 4)',
    tabSize: 'var(--nlds-code-block-tab-size, 4)',
    WebkitHyphens: 'var(--nlds-code-block-hyphens, none)',
    MozHyphens: 'var(--nlds-code-block-hyphens, none)',
    msHyphens: 'var(--nlds-code-block-hyphens, none)',
    hyphens: 'var(--nlds-code-block-hyphens, none)',
  },
  'pre[class*="language-"]': {
    color: 'var(--nlds-code-block-color)',
    fontFamily: 'var(--nlds-code-block-font-family, monospace)',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: 'var(--nlds-code-block-line-height, 1.5)',
    fontSize: 'var(--nlds-code-block-font-size, 1em)',
    MozTabSize: 'var(--nlds-code-block-tab-size, 4)',
    OTabSize: 'var(--nlds-code-block-tab-size, 4)',
    tabSize: 'var(--nlds-code-block-tab-size, 4)',
    WebkitHyphens: 'var(--nlds-code-block-hyphens, none)',
    MozHyphens: 'var(--nlds-code-block-hyphens, none)',
    msHyphens: 'var(--nlds-code-block-hyphens, none)',
    hyphens: 'var(--nlds-code-block-hyphens, none)',
    paddingInlineStart: 'var(--nlds-code-block-padding-inline-start, 1em)',
    paddingInlineEnd: 'var(--nlds-code-block-padding-inline-end, 1em)',
    paddingBlockStart: 'var(--nlds-code-block-padding-block-start, 1em)',
    paddingBlockEnd: 'var(--nlds-code-block-padding-block-end, 1em)',
    marginInlineStart: 'var(--nlds-code-block-margin-inline-start, 0)',
    marginInlineEnd: 'var(--nlds-code-block-margin-inline-end, 0)',
    marginBlockStart: 'var(--nlds-code-block-margin-inline-start, 0.5em)',
    marginBlockEnd: 'var(--nlds-code-block-margin-inline-end, 0.5em)',
    overflow: 'auto',
    backgroundColor: 'var(--nlds-code-block-background-color)',
  },
  'pre[class*="language-"]::-moz-selection': {
    textShadow: 'none',
    backgroundColor: 'var(--nlds-code-block-selected-background-color)',
  },
  'pre[class*="language-"] ::-moz-selection': {
    textShadow: 'none',
    background: 'var(--nlds-code-block-selected-background-color)',
  },
  'code[class*="language-"]::-moz-selection': {
    textShadow: 'none',
    background: 'var(--nlds-code-block-selected-background-color)',
  },
  'code[class*="language-"] ::-moz-selection': {
    textShadow: 'none',
    background: 'var(--nlds-code-block-selected-background-color)',
  },
  'pre[class*="language-"]::selection': {
    textShadow: 'none',
    background: 'var(--nlds-code-block-selected-background-color)',
  },
  'pre[class*="language-"] ::selection': {
    textShadow: 'none',
    background: 'var(--nlds-code-block-selected-background-color)',
  },
  'code[class*="language-"]::selection': {
    textShadow: 'none',
    background: 'var(--nlds-code-block-selected-background-color)',
  },
  'code[class*="language-"] ::selection': {
    textShadow: 'none',
    background: 'var(--nlds-code-block-selected-background-color)',
  },
  comment: {
    color: 'var(--nlds-code-block-comment-color)',
    fontStyle: 'var(--nlds-code-block-comment-font-style)',
  },
  prolog: {
    color: 'var(--nlds-code-block-prolog-color)',
    fontStyle: 'var(--nlds-code-block-prolog-font-style)',
  },
  cdata: {
    color: 'var(--nlds-code-block-cdata-color)',
    fontStyle: 'var(--nlds-code-block-cdata-font-style)',
  },
  punctuation: {
    color: 'var(--nlds-code-block-punctuation-color)',
  },
  '.namespace': {
    color: 'var(--nlds-code-block-namespace-color)',
  },
  deleted: {
    color: 'var(--nlds-code-block-deleted-color)',
    fontStyle: 'var(--nlds-code-block-deleted-font-style)',
  },
  symbol: {
    color: 'var(--nlds-code-block-symbol-color)',
  },
  property: {
    color: 'var(--nlds-code-block-property-color)',
  },
  tag: {
    color: 'var(--nlds-code-block-tag-color)',
  },
  operator: {
    color: 'var(--nlds-code-block-operator-color)',
  },
  keyword: {
    color: 'var(--nlds-code-block-keyword-color)',
  },
  boolean: {
    color: 'var(--nlds-code-block-boolean-color)',
  },
  number: {
    color: 'var(--nlds-code-block-number-color)',
  },
  constant: {
    color: 'var(--nlds-code-block-constant-color)',
  },
  function: {
    color: 'var(--nlds-code-block-function-color)',
  },
  builtin: {
    color: 'var(--nlds-code-block-builtin-color)',
  },
  char: {
    color: 'var(--nlds-code-block-char-color)',
  },
  selector: {
    color: 'var(--nlds-code-block-selector-color)',
    fontStyle: 'var(--nlds-code-block-selector-font-style)',
  },
  doctype: {
    color: 'var(--nlds-code-block-doctype-color)',
    fontStyle: 'var(--nlds-code-block-doctype-font-style)',
  },
  'attr-name': {
    color: 'var(--nlds-code-block-attr-name-color)',
    fontStyle: 'var(--nlds-code-block-attr-name-font-style)',
  },
  inserted: {
    color: 'var(--nlds-code-block-inserted-color)',
    fontStyle: 'var(--nlds-code-block-inserted-font-style)',
  },
  string: {
    color: 'var(--nlds-code-block-string-color)',
  },
  url: {
    color: 'var(--nlds-code-block-url-color)',
  },
  entity: {
    color: 'var(--nlds-code-block-entity-color)',
  },
  '.language-css .token.string': {
    color: 'var(--nlds-code-block-css-token-color)',
  },
  '.style .token.string': {
    color: 'var(--nlds-code-block-style-token-color)',
  },
  'class-name': {
    color: 'var(--nlds-code-block-class-name-color)',
  },
  atrule: {
    color: 'var(--nlds-code-block-atrule-color)',
  },
  'attr-value': {
    color: 'var(--nlds-code-block-attr-value-color)',
  },
  regex: {
    color: 'var(--nlds-code-block-regex-color)',
  },
  important: {
    color: 'var(--nlds-code-block-important-color)',
    fontWeight: 'bold',
  },
  variable: {
    color: 'var(--nlds-code-block-variable-color)',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
};
