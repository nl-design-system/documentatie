'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [75989],
 {
  49824: (e, n, r) => {
   r.d(n, { ZP: () => o });
   var s = r(52676),
    t = r(87118);
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e);
   }
  },
  21759: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => g, contentTitle: () => p, default: () => j, frontMatter: () => h, metadata: () => m, toc: () => v });
   var s = r(52676),
    t = r(87118),
    l = r(49824),
    o = r(43599),
    i = r(40761);
   function a(e) {
    const n = { p: 'p', ...(0, t.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', (0, s.jsx)(i.X, { appearance: 'do', title: 'Geef updates over het winkelwagentje met role=status.', description: (0, s.jsx)(s.Fragment, { children: 'Wanneer een nieuw product in een winkelwagen is geplaatst of de winkelwagen geleegd is, verandert het winkelwagen-icoon visueel. Een live region kan deze update ook overbrengen.' }), children: (0, s.jsx)(o.X, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(n.p, { children: 'todo: voorbeeld met winkelwagen-icoon + live region' }) }) }) }), '\n', (0, s.jsx)(i.X, { appearance: 'dont', title: "Gevonden zoekresultaten aangeven met role='alert'.", children: (0, s.jsx)(o.X, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(n.p, { role: 'alert', children: '10 resultaten' }) }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
   }
   function d(e) {
    const n = { a: 'a', br: 'br', code: 'code', h1: 'h1', h2: 'h2', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: 'informeer-gebruikers-van-screenreaders-over-het-statusbericht', children: 'Informeer gebruikers van screenreaders over het statusbericht' }), '\n', (0, s.jsx)(n.p, { children: 'Als het statusbericht dynamisch wordt gegenereerd en zichtbaar is, maar geen toetsenbordfocus krijgt, moet de melding worden voorgelezen aan een screenreadergebruiker.' }), '\n', (0, s.jsx)(n.p, { children: 'Dit kan door van het statusbericht een live-region te maken.' }), '\n', (0, s.jsx)(n.p, { children: 'Let op: de live-region moet al in de DOM (de door de browser verwerkte HTML-code) aanwezig zijn voor je er iets in zet. Vaak verwerkt de browser alleen wijzigingen in al bestaande live-regions.' }), '\n', (0, s.jsxs)(n.h2, { id: 'live-region-met-rolealert', children: ['Live-region met ', (0, s.jsx)(n.code, { children: 'role="alert"' })] }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik ', (0, s.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role', children: 'role="alert"' }), ' om belangrijke en/of tijdgevoelige berichten aan gebruikers van hulptechnologie direct over te brengen.'] }), '\n', (0, s.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Je inlogsessie loopt bijna af.' }), '\n', (0, s.jsx)(n.li, { children: 'De verbinding met de server is verbroken, lokale wijzigingen worden nu niet opgeslagen.' }), '\n', (0, s.jsx)(n.li, { children: 'Je hebt nog 20 seconden om het formulier te verzenden.' }), '\n'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-markup', children: '<div role="alert">\n  Waarschuwing: Je hebt nog 20 seconden\n  om het formulier te verzenden.\n</div>\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Een element met ', (0, s.jsx)(n.code, { children: 'role="alert"' }), ' is een \u2018assertive\u2019 live region, en functioneel gelijk aan het gebruiken van de combinatie ', (0, s.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live', children: 'aria-live="assertive"' }), ' en ', (0, s.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic', children: 'aria-atomic="true"' }), '.', (0, s.jsx)(n.br, {}), '\n', 'Het onderbreekt de gebruiker bij wat die doet en geeft de melding onmiddellijk door.'] }), '\n', (0, s.jsxs)(n.p, { children: [(0, s.jsx)(n.strong, { children: 'Let op' }), ': gebruik alert spaarzaam, alleen in situaties waarin de onmiddellijke aandacht van de gebruiker vereist is.'] }), '\n', (0, s.jsxs)(n.h2, { id: 'live-region-met-rolestatus', children: ['Live-region met ', (0, s.jsx)(n.code, { children: 'role="status"' })] }), '\n', (0, s.jsxs)(n.p, { children: ['Een live-region met de ', (0, s.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role', children: 'role="status"' }), " geeft de gebruiker informatie die niet belangrijk genoeg is om een 'alert' te zijn."] }), '\n', (0, s.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Het aanmeldformulier is succesvol verzonden.' }), '\n', (0, s.jsx)(n.li, { children: 'Je hebt nu 3 producten in je winkelmandje.' }), '\n', (0, s.jsx)(n.li, { children: "Er zijn 5 zoekresultaten gevonden voor 'eikenprocessierups'." }), '\n'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-markup', children: '<div role="status">\n  Er zijn 5 zoekresultaten gevonden\n  voor \'eikenprocessierups\'.\n</div>\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Het instellen van role="status" is gelijk aan het instellen van ', (0, s.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live', children: 'aria-live="polite"' }), ' en ', (0, s.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic', children: 'aria-atomic="true"' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Deze ', (0, s.jsx)(n.code, { children: 'role="status"' }), ' onderbreekt de gebruiker niet, maar de melding wordt pas doorgegeven als de gebruiker geen interactie met de hulptechnologie meer heeft.'] }), '\n', (0, s.jsx)(n.p, { children: "Met andere woorden, 'status' wacht op zijn beurt, 'alert' dringt voor." }), '\n', (0, s.jsx)(n.p, { children: "Veel CMS'en en frameworks hebben iets ingebouwd om screenreaderfeedback makkelijker te maken: ze plaatsen onderaan de pagina een vaste live-region, waaraan je als ontwikkelaar meldingen kan toevoegen die dan worden voorgelezen." }), '\n', (0, s.jsx)(n.p, { children: 'Voorbeelden van dit soort functionaliteit:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://make.wordpress.org/accessibility/handbook/markup/wp-a11y-speak/', children: 'wp-a11y-speak()' }), ' voor WordPress.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://www.drupal.org/node/1973218', children: 'drupal.accounce' }), ' voor Drupal.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://www.npmjs.com/package/@react-aria/live-announcer', children: 'live-announcer' }), ' voor react-aria.'] }), '\n'] }), '\n', (0, s.jsxs)(n.p, { children: ['Het informeren van alle gebruikers over een statusbericht is verplicht om te voldoen aan het WCAG-succescriterium ', (0, s.jsx)(n.a, { href: 'https://nldesignsystem.nl/wcag/4.1.3', children: '4.1.3 Statusberichten' }), ' (niveau AA).'] }), '\n', (0, s.jsx)(n.p, { children: 'Bronnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://adrianroselli.com/2020/01/defining-toast-messages.html', children: (0, s.jsx)('span', { lang: 'en', children: 'Defining toast messages' }) }), ' van Adrian Roselli.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://tetralogical.com/blog/2024/05/01/why-are-my-live-regions-not-working/', children: (0, s.jsx)('span', { lang: 'en', children: 'Patrick H. Lauke' }) }), ' van Patrick H. Lauke.'] }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
   const h = { title: 'Informeer gebruikers van screenreaders over het statusbericht \xb7 Status in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Informeer screenreaders', pagination_label: 'Informeer screenreaders', description: 'Richtlijnen om gebruikers van screenreaders te informeren over statusberichten.', slug: '/richtlijnen/formulieren/status/screenreaders', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    m = { id: 'richtlijnen/formulieren/status/screenreaders/README', title: 'Informeer gebruikers van screenreaders over het statusbericht \xb7 Status in een formulier \xb7 Richtlijnen', description: 'Richtlijnen om gebruikers van screenreaders te informeren over statusberichten.', source: '@site/docs/richtlijnen/formulieren/status/1-screenreaders/README.mdx', sourceDirName: 'richtlijnen/formulieren/status/1-screenreaders', slug: '/richtlijnen/formulieren/status/screenreaders', permalink: '/richtlijnen/formulieren/status/screenreaders', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/status/1-screenreaders/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Informeer gebruikers van screenreaders over het statusbericht \xb7 Status in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Informeer screenreaders', pagination_label: 'Informeer screenreaders', description: 'Richtlijnen om gebruikers van screenreaders te informeren over statusberichten.', slug: '/richtlijnen/formulieren/status/screenreaders', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Status in formulieren', permalink: '/richtlijnen/formulieren/status/' }, next: { title: 'Informeer ingezoomde gebruikers', permalink: '/richtlijnen/formulieren/status/zoom' } },
    g = {},
    v = [];
   function b(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', (0, s.jsx)(u, {}), '\n', (0, s.jsx)(c, {}), '\n', (0, s.jsx)(l.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b();
   }
  },
  43599: (e, n, r) => {
   r.d(n, { X: () => b });
   var s = r(41179),
    t = r(31916),
    l = r(4814),
    o = r(25585),
    i = r(40282),
    a = r(40678),
    c = r(85722),
    d = r(6374),
    u = r(75271),
    h = r(60027),
    p = r(52676);
   const m = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(t.BB, { className: (0, l.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(t.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   m.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(t.BB, { className: (0, l.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   v.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: r = !0, defaultExpandedCode: b = !1, displayCode: j = !0, children: x, container: y = 'document', language: k, designTokens: f } = e;
    const _ = 'function' == typeof x ? x() : x,
     w = 'function' == typeof n ? n() : (0, u.isValidElement)(n) ? n : void 0,
     z = 'string' == typeof n ? n : h.uS(w || _),
     [N, A] = (0, u.useState)(z),
     [S, C] = (0, u.useState)(b);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(z, { parser: k, plugins: [o.Z, i.ZP, a.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [z]);
    const Z = (0, u.useId)();
    let I = u.Fragment;
    return (
     'paragraph' === y ? (I = m) : 'document' === y ? (I = g) : 'surface' === y && (I = v),
     (0, p.jsxs)('div', {
      className: (0, l.Z)('nlds-canvas'),
      children: [
       _ && (0, p.jsx)('div', { className: (0, l.Z)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, p.jsx)(I, { children: (0, p.jsx)(t.pu, { children: _ }) }) }) }),
       j &&
        (0, p.jsx)('div', {
         className: (0, l.Z)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(t.zx, {
          className: (0, l.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!S);
          },
          'aria-expanded': S,
          'aria-controls': Z,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, p.jsxs)('div', {
         className: (0, l.Z)('nlds-canvas__code-block', !r && 'nlds-canvas__code-block--user-select-none'),
         id: Z,
         hidden: !S,
         children: [
          (0, p.jsx)(s.u, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: N, trim: !0 }),
          r &&
           (0, p.jsx)('div', {
            className: (0, l.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(t.zx, {
             className: (0, l.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(N).catch((e) => console.error('Copy code failed', e));
             },
             children: 'Kopieer',
            }),
           }),
         ],
        }),
      ],
     })
    );
   };
  },
  41179: (e, n, r) => {
   r.d(n, { u: () => c });
   var s = r(31916),
    t = r(70739),
    l = r(75271),
    o = r(40761);
   const i = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
     { types: ['maybe-class-name'], style: { color: 'var(--nlds-code-block-maybe-class-name-color, var(--nlds-code-block-class-name-color))' } },
     { types: ['comment'], style: { color: 'var(--nlds-code-block-comment-color)', fontStyle: 'italic' } },
     { types: ['prolog'], style: { color: 'var(--nlds-code-block-prolog-color)', fontStyle: 'italic' } },
     { types: ['cdata'], style: { color: 'var(--nlds-code-block-cdata-color)', fontStyle: 'italic' } },
     { types: ['punctuation'], style: { color: 'var(--nlds-code-block-punctuation-color)' } },
     { types: ['deleted'], style: { color: 'var(--nlds-code-block-deleted-color)', fontStyle: 'italic' } },
     { types: ['symbol'], style: { color: 'var(--nlds-code-block-symbol-color)' } },
     { types: ['property'], style: { color: 'var(--nlds-code-block-property-color)' } },
     { types: ['tag'], style: { color: 'var(--nlds-code-block-tag-color)' } },
     { types: ['operator'], style: { color: 'var(--nlds-code-block-operator-color)' } },
     { types: ['keyword'], style: { color: 'var(--nlds-code-block-keyword-color)' } },
     { types: ['boolean'], style: { color: 'var(--nlds-code-block-boolean-color)' } },
     { types: ['number'], style: { color: 'var(--nlds-code-block-number-color)' } },
     { types: ['constant'], style: { color: 'var(--nlds-code-block-constant-color)' } },
     { types: ['function'], style: { color: 'var(--nlds-code-block-function-color)' } },
     { types: ['builtin'], style: { color: 'var(--nlds-code-block-builtin-color)' } },
     { types: ['char'], style: { color: 'var(--nlds-code-block-char-color)' } },
     { types: ['selector'], style: { color: 'var(--nlds-code-block-selector-color)', fontStyle: 'italic' } },
     { types: ['doctype'], style: { color: 'var(--nlds-code-block-doctype-color)', fontStyle: 'italic' } },
     { types: ['attr-name'], style: { color: 'var(--nlds-code-block-attr-name-color)', fontStyle: 'italic' } },
     { types: ['inserted'], style: { color: 'var(--nlds-code-block-inserted-color)', fontStyle: 'italic' } },
     { types: ['string'], style: { color: 'var(--nlds-code-block-string-color)' } },
     { types: ['url'], style: { color: 'var(--nlds-code-block-url-color)' } },
     { types: ['entity'], style: { color: 'var(--nlds-code-block-entity-color)' } },
     { types: ['class-name'], style: { color: 'var(--nlds-code-block-class-name-color)' } },
     { types: ['atrule'], style: { color: 'var(--nlds-code-block-atrule-color)' } },
     { types: ['attr-value'], style: { color: 'var(--nlds-code-block-attr-value-color)' } },
     { types: ['regex'], style: { color: 'var(--nlds-code-block-regex-color)' } },
     { types: ['important'], style: { color: 'var(--nlds-code-block-important-color)', fontWeight: 'bold' } },
     { types: ['variable'], style: { color: 'var(--nlds-code-block-variable-color)' } },
     { types: ['bold'], style: { fontWeight: 'bold' } },
     { types: ['italic'], style: { fontStyle: 'italic' } },
    ],
   };
   var a = r(52676);
   function c(e) {
    let { lineNumber: n, syntax: r, textContent: c, trim: d } = e,
     u = c;
    const { title: h, type: p } = (0, l.useContext)(o.n),
     m = (0, l.useId)();
    return (
     d && (u = u.trim()),
     (0, a.jsx)(t.y$, {
      theme: i,
      code: u,
      language: r || '',
      children: (e) => {
       let { style: r, tokens: t, getLineProps: l, getTokenProps: o } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(s.dn, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: r, children: t.map((e, r) => (0, a.jsxs)('span', { ...l({ line: e }), children: [n && (0, a.jsx)('span', { children: r + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, r)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, r) => {
   r.d(n, { X: () => d, n: () => c });
   var s = r(77355),
    t = r(67663),
    l = r(31916),
    o = r(4814),
    i = r(75271),
    a = r(52676);
   const c = (0, i.createContext)({}),
    d = (e) => {
     let { title: n, appearance: r, description: i, children: d, figure: u } = e;
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div';
     return (0, a.jsxs)(p, { className: (0, o.Z)('nlds-guideline', `nlds-guideline--${r}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === r ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.nv, { className: (0, o.Z)('nlds-guideline__badge', `nlds-guideline__badge--${r}`), children: [(0, a.jsx)(s.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(l.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.nv, { className: (0, o.Z)('nlds-guideline__badge', `nlds-guideline__badge--${r}`), children: [(0, a.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(l.nv, { children: n })] }), i] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: n, type: h[r] }, children: d }) })] });
    };
  },
  87118: (e, n, r) => {
   r.d(n, { Z: () => i, a: () => o });
   var s = r(75271);
   const t = {},
    l = s.createContext(t);
   function o(e) {
    const n = s.useContext(l);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), s.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
