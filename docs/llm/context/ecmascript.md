# ECMAScript

The following instructions apply to both ECMAScript and TypeScript.

- Prefer arrow functions over regular functions.
- When providing a comment for a function, prefer a JSDoc style comment over a double-slash comment. JSDoc comments are better recognized by tooling to generate code documentation.

## DOM

- Prefer `textContent` over `innerHTML`, when only setting plain text.
- When removing the conents of a Node, prefer `while (node.lastChild) { node.removeChild(node.lastChild); }` over `node.innerHTML = ''` or `node.textContent = ''`.
- Prefer setting and getting the Node property instead of setting and getting the attribute, when such a property exists.
