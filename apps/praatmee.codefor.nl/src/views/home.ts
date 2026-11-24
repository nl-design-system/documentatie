// `html` escapes all interpolated values, so visitor input can't inject markup.
import { html } from 'hono/html';
import type { FieldErrors, FieldName } from '../validators/invitation.js';

export type PageState =
  | { kind: 'form'; values?: Partial<Record<FieldName, string>>; errors?: FieldErrors }
  | { kind: 'sent' }
  | { kind: 'problem'; message: string; values?: Partial<Record<FieldName, string>> };

const SITE_TITLE = 'Praat mee op Slack – Code for NL';

const fieldLabels: Record<FieldName, string> = {
  name: 'Voornaam',
  bot: 'Ben je een bot?',
  email: 'E-mailadres',
};

export const homePage = (state: PageState = { kind: 'form' }) => {
  const errors = state.kind === 'form' ? (state.errors ?? {}) : {};
  const errorEntries = Object.entries(errors) as [FieldName, string][];
  const hasErrors = errorEntries.length > 0;

  // The title shows the outcome, so screen readers announce it first.
  const title =
    state.kind === 'sent'
      ? `Gelukt – ${SITE_TITLE}`
      : hasErrors || state.kind === 'problem'
        ? `Fout – ${SITE_TITLE}`
        : SITE_TITLE;

  return html`<!DOCTYPE html>
    <html lang="nl">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${title}</title>
        <link rel="icon" href="/img/CfNL.png" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header class="praatmee-header">
          <a href="https://www.codefor.nl" class="praatmee-logo">
            <img alt="" src="/img/larger_CfNL.png" width="68" height="68" />
            <span>Code for NL</span>
          </a>
        </header>

        <main class="praatmee-main" id="inhoud">
          <h1>Praat mee op Slack</h1>

          ${state.kind === 'sent' ? sentMessage() : formView(state, errorEntries)}
        </main>
      </body>
    </html>`;
};

const sentMessage = () => {
  // autofocus makes screen readers announce the result.
  return html` <div class="praatmee-alert praatmee-alert--success" role="status" tabindex="-1" autofocus>
      <h2>Gelukt!</h2>
      <p>
        Je ontvangt binnen enkele minuten een uitnodiging per e-mail. Niets ontvangen? Kijk ook in je map met ongewenste
        e-mail.
      </p>
    </div>
    <p><a href="https://codefornl.slack.com">Naar codefornl.slack.com</a></p>`;
};

const formView = (state: Exclude<PageState, { kind: 'sent' }>, errorEntries: [FieldName, string][]) => {
  const values = state.values ?? {};
  const errors = Object.fromEntries(errorEntries) as FieldErrors;

  return html` <p>
      Vul het formulier in om een uitnodiging te krijgen voor
      <a href="https://codefornl.slack.com">codefornl.slack.com</a>. Alle velden zijn verplicht.
    </p>

    ${errorEntries.length > 0 ? errorSummary(errorEntries) : ''}
    ${state.kind === 'problem' ? problemMessage(state.message) : ''}

    <form method="post" action="/" novalidate>
      ${field({
        name: 'name',
        autocomplete: 'given-name',
        error: errors.name,
        type: 'text',
        value: values.name,
      })}
      ${field({
        name: 'email',
        autocomplete: 'email',
        error: errors.email,
        hint: 'Hier sturen we de uitnodiging naartoe.',
        type: 'email',
        value: values.email,
      })}
      ${field({
        name: 'bot',
        autocomplete: 'off',
        error: errors.bot,
        hint: 'Typ "nee" als je een mens bent.',
        short: true,
        type: 'text',
        value: values.bot,
      })}

      <div class="praatmee-hp" aria-hidden="true">
        <label for="website">Laat dit veld leeg</label>
        <input id="website" name="website" type="text" tabindex="-1" autocomplete="off" />
      </div>

      <button type="submit" class="praatmee-button">Nodig me uit!</button>
    </form>`;
};

// Error summary pattern: gets focus and links to each field.
const errorSummary = (entries: [FieldName, string][]) => {
  return html` <div
    class="praatmee-alert praatmee-alert--error"
    role="alert"
    tabindex="-1"
    autofocus
    aria-labelledby="foutmelding-titel"
  >
    <h2 id="foutmelding-titel">Controleer het formulier</h2>
    <ul>
      ${entries.map(([name, message]) => html`<li><a href="#${name}">${message}</a></li>`)}
    </ul>
  </div>`;
};

const problemMessage = (message: string) => {
  return html` <div class="praatmee-alert praatmee-alert--error" role="alert" tabindex="-1" autofocus>
    <h2>Er is iets misgegaan</h2>
    <p>${message}</p>
  </div>`;
};

interface FieldOptions {
  name: FieldName;
  type: 'text' | 'email';
  autocomplete: string;
  value?: string;
  error?: string;
  hint?: string;
  short?: boolean;
}

const field = ({ name, autocomplete, error, hint, short, type, value }: FieldOptions) => {
  const hintId = hint ? `${name}-hint` : '';
  const errorId = error ? `${name}-error` : '';
  const describedBy = [hintId, errorId].filter(Boolean).join(' ');

  return html` <div class="praatmee-field">
    <label class="praatmee-label" for="${name}">${fieldLabels[name]}</label>
    ${hint ? html`<span class="praatmee-hint" id="${hintId}">${hint}</span>` : ''}
    ${error
      ? html`<span class="praatmee-field-error" id="${errorId}"
          ><span class="praatmee-visually-hidden">Fout: </span>${error}</span
        >`
      : ''}
    <input
      class="praatmee-input${short ? ' praatmee-input--short' : ''}"
      id="${name}"
      name="${name}"
      type="${type}"
      autocomplete="${autocomplete}"
      required
      value="${value ?? ''}"
      ${describedBy ? html`aria-describedby="${describedBy}"` : ''}
      ${error ? html`aria-invalid="true"` : ''}
    />
  </div>`;
};
