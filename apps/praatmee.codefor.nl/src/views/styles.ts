// Served as /styles.css because the CSP forbids inline styles. Colours meet WCAG AA.
export const styles = `
*, *::before, *::after { box-sizing: border-box; }

:root {
  --text: #1a1a1a;
  --muted: #4d4d4d;
  --border: #6b6b6b;
  --accent: #a34f00; /* Code for NL orange, darkened for contrast */
  --accent-hover: #7a3b00;
  --focus: #004b8d;
  --error: #b3261e;
  --error-bg: #fdecea;
  --success: #0b6b3a;
  --success-bg: #e8f5ee;
  --white: #fff;
  --black: #000;
}

body {
  margin: 0;
  color: var(--text);
  background-color: var(--white);
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  font-size: 1.125rem;
  line-height: 1.5;
}

.header, .main {
  max-inline-size: 36rem;
  margin: 0 auto;
  padding-inline: 1rem;
  padding-block: 1.5rem;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text);
  font-weight: 700;
  text-decoration: none;
}
.logo img { inline-size: 3rem; block-size: auto; }
.logo:hover span { text-decoration: underline; }

h1 { font-size: 1.75rem; line-height: 1.25; margin: 0 0 1rem; }

a { color: var(--focus); text-underline-offset: 0.15em; }

:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

.field { margin: 0 0 1.5rem; }

.label { display: block; font-weight: 700; }

.hint, .field-error { display: block; margin: 0.25rem 0 0.5rem; }
.hint { color: var(--muted); }
.field-error { color: var(--error); font-weight: 700; }

.input {
  display: block;
  inline-size: 100%;
  max-inline-size: 24rem;
  min-block-size: 2.75rem; /* touch target */
  padding: 0.5rem;
  font: inherit;
  color: inherit;
  background-color: var(--white);
  border: 2px solid var(--border);
  border-radius: 0.25rem;
}
.input--short { max-inline-size: 8rem; }
.input[aria-invalid="true"] { border-color: var(--error); border-width: 3px; }

.button {
  min-height: 2.75rem;
  padding-block: 0.75rem;
  padding-inline: 1.5rem;
  font: inherit;
  font-weight: 700;
  color: var(--white);
  background-color: var(--accent);
  border: 0;
  border-radius: 0.4em;
  box-shadow: 0 3px 0 var(--accent-hover);
  cursor: pointer;
}
.button:hover { background-color: var(--accent-hover); }

.alert {
  margin-block: 1.5rem;
  margin-inline: 0;
  padding: 1rem;
  border-left: 0.5rem solid;
  border-radius: 0.25rem;
}
.alert h2 { font-size: 1.25rem; margin: 0 0 0.5rem; }
.alert p, .alert ul { margin: 0; }
.alert--error { border-color: var(--error); background-color: var(--error-bg); }
.alert--success { border-color: var(--success); background-color: var(--success-bg); }

.visually-hidden {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Honeypot field */
.hp {
  position: absolute;
  left: -10000px;
  inline-size: 1px;
  block-size: 1px;
  overflow: hidden;
}

@media (prefers-reduced-motion: no-preference) {
  .button { transition: background-color 0.15s; }
}
`;
