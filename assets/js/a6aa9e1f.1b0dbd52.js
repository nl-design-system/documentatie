(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [18401, 37643, 83249],
 {
  15175(e, t, n) {
   'use strict';
   n.d(t, { M: () => c });
   var s = n(46447),
    o = n(16194),
    r = n(30758),
    l = n(51519);
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
   var a = n(86070);
   function c({ lineNumber: e, syntax: t, textContent: n, trim: c }) {
    let d = n;
    const { title: m, type: g } = (0, r.useContext)(l.x),
     h = (0, r.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(o.f4, { theme: i, code: d, language: t || '', children: ({ style: t, tokens: n, getLineProps: o, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', g ? `\u201c${g}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, a.jsx)(s.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: t, children: n.map((t, n) => (0, a.jsxs)('span', { ...o({ line: t }), children: [e && (0, a.jsx)('span', { children: n + 1 }), t.map((e, t) => (0, a.jsx)('span', { ...r({ token: e }) }, t)), '\n'] }, n)) })] }) }));
   }
  },
  21530(e, t, n) {
   'use strict';
   n.d(t, { AC: () => c, Fu: () => l, Wu: () => i, Zp: () => a });
   var s = n(46447),
    o = n(13526),
    r = n(86070);
   const l = ({ background: e, children: t, className: n, ...s }) => (0, r.jsx)('div', { className: (0, o.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, n), ...s, children: t }),
    i = (e) => (0, r.jsx)('div', { className: 'ma-card__content', ...e }),
    a = ({ href: e, appearance: t, className: n, component: l = 'div', background: i, children: a }) => {
     const c = (e) => ('article' === l ? (0, r.jsx)('article', { ...e }) : 'section' === l ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      d = (0, r.jsx)(c, { className: (0, o.A)('ma-cardgroup__card', i && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${t}`, n), children: a });
     return e ? (0, r.jsx)(s.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'large', children: t, className: n }) => (0, r.jsx)('div', { className: (0, o.A)('ma-cardgroup', `ma-cardgroup--${e}`, n), children: t });
  },
  32385(e, t, n) {
   'use strict';
   n.d(t, { bo: () => o, KF: () => g, mJ: () => p, VZ: () => v, cR: () => b, Pv: () => w, qZ: () => l, kD: () => x, QQ: () => C, B2: () => h, Pc: () => a, f4: () => i, GT: () => j, fX: () => r, eQ: () => y, B_: () => f, o_: () => A });
   const s = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    o = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    l = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    i = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, t) => c.indexOf(e) - c.indexOf(t)),
    g = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return m(d(t));
    },
    h = (e, t) => p(e).includes(t),
    u = (e) => {
     const t = / URL \(([^)]+)\)/;
     return m(d(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    p = (e) => m(d(e.projects.flatMap((e) => u(e)))),
    w = (e) => {
     const t = u(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const s = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: s, id: o, value: r }) => {
        const l = /^(.+) URL/.exec(s)[1],
         i = 'Storybook' === l ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${l}`;
        return { brand: l.toLowerCase(), name: s, id: o, value: r, description: i };
       });
      return { frameworkName: t, tasks: s };
     });
    },
    A = (e) => e.join('.'),
    f = (e) => '--' + e.join('-'),
    y = (e, t) => t.reduce((e, t) => e?.[t], e);
   function x(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? x(e[n], [...t, n]) : []));
   }
   function j(e) {
    const t = new Map();
    function n(e) {
     return (t.has(e) || t.set(e, A(e)), t.get(e));
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   const b = () => {
     const e = s.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    v = () => {
     const e = s.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const t = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return t ? t[1] : e.replace(/^[\^~>=<]+/, '');
    },
    T = new Set(['ics', 'json', 'pdf']),
    C = (e) => {
     const t = e.split('/').pop() ?? '',
      n = t.split('.').pop()?.toLowerCase();
     return void 0 !== n && T.has(n);
    };
  },
  39569(e, t, n) {
   'use strict';
   n.d(t, { D: () => i });
   var s = n(46447),
    o = n(13526),
    r = n(32385),
    l = n(86070);
   const i = ({ state: e }) => {
    const t = (0, r.fX)(e);
    return (0, l.jsx)(s.KE, { className: (0, o.A)('ma-estafette-badge', t && `ma-estafette-badge--${t}`), children: e });
   };
  },
  44715(e, t, n) {
   'use strict';
   n.d(t, { NO: () => r, pI: () => l });
   const s = [
     { sc: '1.1.1', title: 'Non-text Content', url: 'https://www.w3.org/TR/WCAG21/#non-text-content', conformance: 'A', nldesignsystem: !0, nl: { title: 'Niet-tekstuele content' } },
     { sc: '1.2.1', title: 'Audio-only and Video-only (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Louter-geluid en louter-videobeeld (vooraf opgenomen)' } },
     { sc: '1.2.2', title: 'Captions (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#captions-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (vooraf opgenomen)' } },
     { sc: '1.2.3', title: 'Audio Description or Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Audiodescriptie of media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.4', title: 'Captions (Live)', url: 'https://www.w3.org/TR/WCAG21/#captions-live', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (live)' } },
     { sc: '1.2.5', title: 'Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-prerecorded', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.6', title: 'Sign Language (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#sign-language-prerecorded', conformance: 'AAA', nl: { title: 'Gebarentaal (vooraf opgenomen)' } },
     { sc: '1.2.7', title: 'Extended Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded', conformance: 'AAA', nl: { title: 'Verlengde audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.8', title: 'Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded', conformance: 'AAA', nl: { title: 'Media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.9', title: 'Audio-only (Live)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-live', conformance: 'AAA', nl: { title: 'Louter-geluid (live)' } },
     { sc: '1.3.1', title: 'Info and Relationships', url: 'https://www.w3.org/TR/WCAG21/#info-and-relationships', conformance: 'A', nldesignsystem: !0, nl: { title: 'Info en relaties' } },
     { sc: '1.3.2', title: 'Meaningful Sequence', url: 'https://www.w3.org/TR/WCAG21/#meaningful-sequence', conformance: 'A', nldesignsystem: !0, nl: { title: 'Betekenisvolle volgorde' } },
     { sc: '1.3.3', title: 'Sensory Characteristics', url: 'https://www.w3.org/TR/WCAG21/#sensory-characteristics', conformance: 'A', nldesignsystem: !0, nl: { title: 'Zintuiglijke eigenschappen' } },
     { sc: '1.3.4', title: 'Orientation', url: 'https://www.w3.org/TR/WCAG21/#orientation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Weergavestand' } },
     { sc: '1.3.5', title: 'Identify Input Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-input-purpose', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Identificeer het doel van de input' } },
     { sc: '1.3.6', title: 'Identify Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-purpose', conformance: 'AAA', nl: { title: 'Identificeer het doel' } },
     { sc: '1.4.1', title: 'Use of Color', url: 'https://www.w3.org/TR/WCAG21/#use-of-color', conformance: 'A', nldesignsystem: !0, nl: { title: 'Gebruik van kleur' } },
     { sc: '1.4.2', title: 'Audio Control', url: 'https://www.w3.org/TR/WCAG21/#audio-control', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geluidsbediening' } },
     { sc: '1.4.3', title: 'Contrast (Minimum)', url: 'https://www.w3.org/TR/WCAG21/#contrast-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast (minimum)' } },
     { sc: '1.4.4', title: 'Resize text', url: 'https://www.w3.org/TR/WCAG21/#resize-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Herschalen van tekst' } },
     { sc: '1.4.5', title: 'Images of Text', url: 'https://www.w3.org/TR/WCAG21/#images-of-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Afbeeldingen van tekst' } },
     { sc: '1.4.6', title: 'Contrast (Enhanced)', url: 'https://www.w3.org/TR/WCAG21/#contrast-enhanced', conformance: 'AAA', nl: { title: 'Contrast (versterkt)' } },
     { sc: '1.4.7', title: 'Low or No Background Audio', url: 'https://www.w3.org/TR/WCAG21/#low-or-no-background-audio', conformance: 'AAA', nl: { title: 'Weinig of geen achtergrondgeluid' } },
     { sc: '1.4.8', title: 'Visual Presentation', url: 'https://www.w3.org/TR/WCAG21/#visual-presentation', conformance: 'AAA', nl: { title: 'Visuele weergave' } },
     { sc: '1.4.9', title: 'Images of Text (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#images-of-text-no-exception', conformance: 'AAA', nl: { title: 'Afbeeldingen van tekst (geen uitzondering)' } },
     { sc: '1.4.10', title: 'Reflow', url: 'https://www.w3.org/TR/WCAG21/#reflow', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Reflow' } },
     { sc: '1.4.11', title: 'Non-text Contrast', url: 'https://www.w3.org/TR/WCAG21/#non-text-contrast', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast van niet-tekstuele content' } },
     { sc: '1.4.12', title: 'Text Spacing', url: 'https://www.w3.org/TR/WCAG21/#text-spacing', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Tekstafstand' } },
     { sc: '1.4.13', title: 'Content on Hover or Focus', url: 'https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Content bij hover of focus' } },
     { sc: '2.1.1', title: 'Keyboard', url: 'https://www.w3.org/TR/WCAG21/#keyboard', conformance: 'A', nldesignsystem: !0, nl: { title: 'Toetsenbord' } },
     { sc: '2.1.2', title: 'No Keyboard Trap', url: 'https://www.w3.org/TR/WCAG21/#no-keyboard-trap', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geen toetsenbordval' } },
     { sc: '2.1.3', title: 'Keyboard (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#keyboard-no-exception', conformance: 'AAA', nl: { title: 'Toetsenbord (geen uitzondering)' } },
     { sc: '2.1.4', title: 'Character Key Shortcuts', url: 'https://www.w3.org/TR/WCAG21/#character-key-shortcuts', conformance: 'A', nldesignsystem: !0, nl: { title: 'Enkel teken sneltoetsen' } },
     { sc: '2.2.1', title: 'Timing Adjustable', url: 'https://www.w3.org/TR/WCAG21/#timing-adjustable', conformance: 'A', nldesignsystem: !0, nl: { title: 'Timing aanpasbaar' } },
     { sc: '2.2.2', title: 'Pause, Stop, Hide', url: 'https://www.w3.org/TR/WCAG21/#pause-stop-hide', conformance: 'A', nldesignsystem: !0, nl: { title: 'Pauzeren, stoppen, verbergen' } },
     { sc: '2.2.3', title: 'No Timing', url: 'https://www.w3.org/TR/WCAG21/#no-timing', conformance: 'AAA', nl: { title: 'Geen timing' } },
     { sc: '2.2.4', title: 'Interruptions', url: 'https://www.w3.org/TR/WCAG21/#interruptions', conformance: 'AAA', nl: { title: 'Onderbrekingen' } },
     { sc: '2.2.5', title: 'Re-authenticating', url: 'https://www.w3.org/TR/WCAG21/#re-authenticating', conformance: 'AAA', nl: { title: 'Herauthentisering' } },
     { sc: '2.2.6', title: 'Timeouts', url: 'https://www.w3.org/TR/WCAG21/#timeouts', conformance: 'AAA', nl: { title: 'Time-outs' } },
     { sc: '2.3.1', title: 'Three Flashes or Below Threshold', url: 'https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold', conformance: 'A', nldesignsystem: !0, nl: { title: 'Drie flitsen of beneden drempelwaarde' } },
     { sc: '2.3.2', title: 'Three Flashes', url: 'https://www.w3.org/TR/WCAG21/#three-flashes', conformance: 'AAA', nl: { title: 'Drie flitsen' } },
     { sc: '2.3.3', title: 'Animation from Interactions', url: 'https://www.w3.org/TR/WCAG21/#animation-from-interactions', conformance: 'AAA', nl: { title: 'Animatie uit interacties' } },
     { sc: '2.4.1', title: 'Bypass Blocks', url: 'https://www.w3.org/TR/WCAG21/#bypass-blocks', conformance: 'A', nldesignsystem: !0, nl: { title: 'Blokken omzeilen' } },
     { sc: '2.4.2', title: 'Page Titled', url: 'https://www.w3.org/TR/WCAG21/#page-titled', conformance: 'A', nldesignsystem: !0, nl: { title: 'Paginatitel' } },
     { sc: '2.4.3', title: 'Focus Order', url: 'https://www.w3.org/TR/WCAG21/#focus-order', conformance: 'A', nldesignsystem: !0, nl: { title: 'Focus volgorde' } },
     { sc: '2.4.4', title: 'Link Purpose (In Context)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-in-context', conformance: 'A', nldesignsystem: !0, nl: { title: 'Linkdoel (in context)' } },
     { sc: '2.4.5', title: 'Multiple Ways', url: 'https://www.w3.org/TR/WCAG21/#multiple-ways', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Meerdere manieren' } },
     { sc: '2.4.6', title: 'Headings and Labels', url: 'https://www.w3.org/TR/WCAG21/#headings-and-labels', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Koppen en labels' } },
     { sc: '2.4.7', title: 'Focus Visible', url: 'https://www.w3.org/TR/WCAG21/#focus-visible', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Focus zichtbaar' } },
     { sc: '2.4.8', title: 'Location', url: 'https://www.w3.org/TR/WCAG21/#location', conformance: 'AAA', nl: { title: 'Locatie' } },
     { sc: '2.4.9', title: 'Link Purpose (Link Only)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-link-only', conformance: 'AAA', nl: { title: 'Linkdoel (alleen link)' } },
     { sc: '2.4.10', title: 'Section Headings', url: 'https://www.w3.org/TR/WCAG21/#section-headings', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Paragraafkoppen' } },
     { sc: '2.5.1', title: 'Pointer Gestures', url: 'https://www.w3.org/TR/WCAG21/#pointer-gestures', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzergebaren' } },
     { sc: '2.5.2', title: 'Pointer Cancellation', url: 'https://www.w3.org/TR/WCAG21/#pointer-cancellation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzerannulering' } },
     { sc: '2.5.3', title: 'Label in Name', url: 'https://www.w3.org/TR/WCAG21/#label-in-name', conformance: 'A', nldesignsystem: !0, nl: { title: 'Label in naam' } },
     { sc: '2.5.4', title: 'Motion Actuation', url: 'https://www.w3.org/TR/WCAG21/#motion-actuation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bewegingsactivering' } },
     { sc: '2.5.5', title: 'Target Size', url: 'https://www.w3.org/TR/WCAG21/#target-size', conformance: 'AAA', nl: { title: 'Grootte van het aanwijsgebied (uitgebreid)' } },
     { sc: '2.5.6', title: 'Concurrent Input Mechanisms', url: 'https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms', conformance: 'AAA', nl: { title: 'Input gelijktijdige invoermechanismen' } },
     { sc: '3.1.1', title: 'Language of Page', url: 'https://www.w3.org/TR/WCAG21/#language-of-page', conformance: 'A', nldesignsystem: !0, nl: { title: 'Taal van de pagina' } },
     { sc: '3.1.2', title: 'Language of Parts', url: 'https://www.w3.org/TR/WCAG21/#language-of-parts', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Taal van onderdelen' } },
     { sc: '3.1.3', title: 'Unusual Words', url: 'https://www.w3.org/TR/WCAG21/#unusual-words', conformance: 'AAA', nl: { title: 'Ongebruikelijke woorden' } },
     { sc: '3.1.4', title: 'Abbreviations', url: 'https://www.w3.org/TR/WCAG21/#abbreviations', conformance: 'AAA', nl: { title: 'Afkortingen' } },
     { sc: '3.1.5', title: 'Reading Level', url: 'https://www.w3.org/TR/WCAG21/#reading-level', conformance: 'AAA', nl: { title: 'Leesniveau' } },
     { sc: '3.1.6', title: 'Pronunciation', url: 'https://www.w3.org/TR/WCAG21/#pronunciation', conformance: 'AAA', nl: { title: 'Uitspraak' } },
     { sc: '3.2.1', title: 'On Focus', url: 'https://www.w3.org/TR/WCAG21/#on-focus', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij focus' } },
     { sc: '3.2.2', title: 'On Input', url: 'https://www.w3.org/TR/WCAG21/#on-input', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij input' } },
     { sc: '3.2.3', title: 'Consistent Navigation', url: 'https://www.w3.org/TR/WCAG21/#consistent-navigation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente navigatie' } },
     { sc: '3.2.4', title: 'Consistent Identification', url: 'https://www.w3.org/TR/WCAG21/#consistent-identification', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente identificatie' } },
     { sc: '3.2.5', title: 'Change on Request', url: 'https://www.w3.org/TR/WCAG21/#change-on-request', conformance: 'AAA', nl: { title: 'Verandering op verzoek' } },
     { sc: '3.3.1', title: 'Error Identification', url: 'https://www.w3.org/TR/WCAG21/#error-identification', conformance: 'A', nldesignsystem: !0, nl: { title: 'Foutidentificatie' } },
     { sc: '3.3.2', title: 'Labels or Instructions', url: 'https://www.w3.org/TR/WCAG21/#labels-or-instructions', conformance: 'A', nldesignsystem: !0, nl: { title: 'Labels of instructies' } },
     { sc: '3.3.3', title: 'Error Suggestion', url: 'https://www.w3.org/TR/WCAG21/#error-suggestion', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutsuggestie' } },
     { sc: '3.3.4', title: 'Error Prevention (Legal, Financial, Data)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutpreventie (wettelijk, financieel, gegevens)' } },
     { sc: '3.3.5', title: 'Help', url: 'https://www.w3.org/TR/WCAG21/#help', conformance: 'AAA', nl: { title: 'Hulp' } },
     { sc: '3.3.6', title: 'Error Prevention (All)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-all', conformance: 'AAA', nl: { title: 'Foutpreventie (alle)' } },
     { sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' } },
     { sc: '4.1.2', title: 'Name, Role, Value', url: 'https://www.w3.org/TR/WCAG21/#name-role-value', conformance: 'A', nldesignsystem: !0, nl: { title: 'Naam, rol, waarde' } },
     { sc: '4.1.3', title: 'Status Messages', url: 'https://www.w3.org/TR/WCAG21/#status-messages', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Statusberichten' } },
    ].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })),
    o = (new Map(s.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    r = [...s.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })).filter(({ sc: e }) => !o.find((t) => t.sc === e)),
    l = new Map(r.map((e) => [e.sc, e]));
  },
  47470(e, t, n) {
   'use strict';
   n.d(t, { A: () => O });
   var s = n(18439),
    o = n(19342),
    r = n(84675),
    l = n(30758),
    i = n(86070);
   function a(e) {
    const t = l.Children.toArray(e.children),
     n = t.find((e) => l.isValidElement(e) && 'summary' === e.props?.mdxType),
     s = (0, i.jsx)(i.Fragment, { children: t.filter((e) => e !== n) });
    return (0, i.jsx)(r.A, { ...e, summary: n, children: s });
   }
   var c = n(15175);
   function d(e) {
    let t,
     n = '';
    if ((0, l.isValidElement)(e.children)) {
     const s = e.children.props,
      o = 'string' == typeof s.className ? s.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     (o && (t = o[1]), 'string' == typeof s.children && (n = s.children));
    }
    return (0, i.jsx)(c.M, { syntax: t, textContent: n, trim: !0 });
   }
   var m = n(46447),
    g = n(60691),
    h = n(13526),
    u = n(84305);
   const p = (e, t) => e.reduce((e, n) => ('link' === n.type ? (t.includes(n.docId) ? e : [...e, n]) : 'category' === n.type ? [...e, { ...n, items: p(n.items, t) }] : e), []),
    w = ({ excludeDocIDs: e = [], className: t, ...n }) => {
     const s = (0, g.$S)();
     return (0, i.jsx)('div', { ...n, className: (0, h.A)('margin-top--lg', t), children: (0, i.jsx)(u.A, { items: p(s.items, e) }) });
    };
   var A = n(25557),
    f = n(47229),
    y = n(82062),
    x = n(29181),
    j = n(32385),
    b = n(21530),
    v = n(94309),
    T = n(56421),
    C = n(48004),
    k = n(85162),
    N = n(39569);
   const G = ({ name: e, description: t, relayStep: n, headingLevel: s = 2, href: o, frameworkNames: r }) => {
     return (0, i.jsxs)(b.Zp, { appearance: 'large', className: (0, h.A)('ma-component-card', !n && 'ma-component-card--suggestion'), component: 'section', children: [(0, i.jsx)(b.Fu, { children: (0, i.jsx)(k.s, { relayStep: n, description: `Schets van de ${e} component`, name: e }) }), (0, i.jsxs)(b.Wu, { children: [(0, i.jsxs)('div', { children: [(0, i.jsx)(T.D, { level: s, className: 'ma-component-card__title', children: e }), n && (0, i.jsx)('p', { children: (0, i.jsx)(N.D, { state: n }) }), t && (0, i.jsx)(C.f, { children: t }), r && (0, i.jsx)(m._Q, { children: r.map((e) => (0, i.jsx)(m.KE, { children: e }, e)) })] }), o && (0, i.jsx)(C.f, { children: (0, i.jsxs)(v.N, { className: 'utrecht-link', to: ((l = o), 'string' == typeof l && !1 === l.endsWith('/') ? `${l}/` : l), children: ['Bekijk ', (0, i.jsx)('span', { className: 'w', children: e }), ' component'] }) })] })] });
     var l;
    },
    W = () => {
     const e = 'framework',
      t = 'status',
      n = (0, g.$S)(),
      { location: s, replace: o } = (0, A.W6)(),
      r = new URLSearchParams(s.search),
      a = (e) => e.title && y.find(({ title: t }) => t && (0, j.Pc)(t) === (0, j.Pc)(e.title)),
      c = n.items
       .filter((e) => !!e && 'string' == typeof e.docId)
       .filter((e) => 'componenten/README' !== e.docId)
       .map((e) => ({ ...e, ...(0, f.cC)(e.docId) }))
       .filter(a)
       .map((e) => ({ ...e, ...a(e) })),
      [d, h] = (0, l.useState)(c),
      [u, p] = (0, l.useState)(r.get(t)?.split(',') || []),
      [w, v] = (0, l.useState)(r.get(e)?.split(',') || []),
      T = (0, j.KF)(c);
     return (
      (0, l.useEffect)(() => {
       (h(c.filter((e) => !u.length || u.some((t) => e.relayStep === t)).filter((e) => !w.length || w.some((t) => (0, j.B2)(e, t)))), u.length ? r.set(t, u.join(',')) : r.delete(t), w.length ? r.set(e, w.join(',')) : r.delete(e), o({ ...s, search: r.toString() }));
      }, [u, w]),
      (0, i.jsxs)(i.Fragment, {
       children: [
        (0, i.jsx)('div', {
         className: 'ma-filter-accordion',
         children: (0, i.jsx)(x.If, {
          sections: [
           {
            headingLevel: 2,
            expanded: r.size > 0,
            label: (0, i.jsx)('span', { id: 'filter-results-label', children: 'Filter componenten' }),
            body: (0, i.jsxs)(i.Fragment, {
             children: [
              (0, i.jsxs)(x.LB, {
               'aria-describedby': 'filter-results',
               'aria-labelledby': 'filter-results-label',
               children: [
                (0, i.jsx)('h3', { className: 'utrecht-heading-6', children: 'Status' }),
                Object.entries({ HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of Fame' }).map(([e, t]) =>
                 (0, i.jsxs)(
                  m.zB,
                  {
                   type: 'checkbox',
                   children: [
                    (0, i.jsx)(m.Sc, {
                     defaultChecked: u.includes(e),
                     id: e,
                     onChange: (t) =>
                      ((e, t) => {
                       p((n) => (e ? [...n, t] : n.filter((e) => e !== t)));
                      })(t.target.checked, e),
                    }),
                    (0, i.jsx)(m.lR, { htmlFor: e, children: (0, i.jsx)(N.D, { state: t }) }),
                   ],
                  },
                  e,
                 ),
                ),
               ],
              }),
              T.length > 0 &&
               (0, i.jsxs)(x.LB, {
                'aria-describedby': 'filter-results',
                'aria-labelledby': 'filter-results-label',
                children: [
                 (0, i.jsx)('h3', { className: 'utrecht-heading-6', children: 'Implementatie' }),
                 T.map((e) =>
                  (0, i.jsxs)(
                   m.zB,
                   {
                    type: 'checkbox',
                    children: [
                     (0, i.jsx)(m.Sc, {
                      defaultChecked: w.includes(e),
                      id: e,
                      onChange: (t) =>
                       ((e, t) => {
                        v((n) => (e ? [...n, t] : n.filter((e) => e !== t)));
                       })(t.target.checked, e),
                     }),
                     (0, i.jsx)(m.lR, { htmlFor: e, children: e }),
                    ],
                   },
                   e,
                  ),
                 ),
                ],
               }),
             ],
            }),
           },
          ],
         }),
        }),
        (0, i.jsxs)(x.fz, { role: 'status', id: 'filter-results', children: [d.length, ' van ', c.length, ' componenten zichtbaar'] }),
        0 === d.length &&
         (0, i.jsx)(x.fz, {
          children: (0, i.jsx)(x.bm, {
           onClick: () => {
            window.location.search = '';
           },
           children: 'Toon alle componenten',
          }),
         }),
        (0, i.jsx)(b.AC, {
         appearance: 'large',
         children: d.map(({ title: e, id: t, href: n, description: s }) => {
          const o = y.find((t) => t.title === e),
           r = o && j.bo[o.relayStep],
           l = (0, j.mJ)(o);
          return (0, i.jsx)(G, { name: e, headingLevel: 2, href: n, description: s, relayStep: r, frameworkNames: l }, t);
         }),
        }),
       ],
      })
     );
    };
   var R = n(51582);
   const _ = ({ children: e }) => (0, i.jsx)('ol', { className: 'nlds-anatomy-list', children: e }),
    S = ({ children: e }) => (0, i.jsx)('li', { className: 'nlds-anatomy-list__item', children: e }),
    L = ({ component: e, illustration: t }) => {
     const { title: s } = e,
      o = (0, j.fX)(s),
      r = l.lazy(() => n(51580)(`./${o}-docs/docs/anatomy/anatomy.md`).catch(() => ({ default: () => null })));
     return (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsxs)('figure', { className: (0, h.A)('ma-component-anatomy'), children: [t && (0, i.jsx)(t, { height: null, className: (0, h.A)('ma-component-anatomy__illustration') }), t && r && (0, i.jsx)('figcaption', { children: (0, i.jsx)(R.o, { omitH1: !0, headingLevel: 1, components: { ol: ({ children: e }) => (0, i.jsx)(_, { children: e }), li: ({ children: e }) => (0, i.jsx)(S, { children: e }) }, children: (0, i.jsx)(r, {}) }) })] }) });
    };
   var P = n(44715);
   const F = ({ title: e, sc: t, status: n, children: s, headingLevel: o = 4 }) => {
     const r = P.pI.get(t),
      l = r ? `${t} ${r.nl?.title}` : t;
     return (0, i.jsxs)('div', { className: 'ma-component-criteria-section', children: [(0, i.jsx)(m.DZ, { appearance: 'utrecht-heading-4', level: o, className: 'ma-component-criteria-section__heading', children: e }), (t || n) && (0, i.jsxs)('dl', { className: 'ma-component-criteria-section__dl', children: [t && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('dt', { className: 'ma-component-criteria-section__dt', children: 'WCAG' }), (0, i.jsx)('dd', { className: 'ma-component-criteria-section__dd', children: (0, i.jsx)(m.N_, { href: `/wcag/${t}/`, children: l }) })] }), n && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('dt', { className: 'ma-component-criteria-section__dt', children: 'Status' }), (0, i.jsx)('dd', { className: 'ma-component-criteria-section__dl', children: n })] })] }), s] });
    },
    M = ({ testCategory: e, children: t }) => (0, i.jsx)(x.If, { sections: [{ className: 'utrecht-accordion--nlds-subtle', headingLevel: 3, expanded: !1, label: (0, i.jsx)('span', { children: e }), body: t }] });
   var D = n(58876);
   function O({ children: e }) {
    return (0, i.jsx)(s.x, {
     components: {
      code: m.Cy,
      a: m.N_,
      em: m.lx,
      pre: d,
      details: a,
      ul: (e) =>
       e.className?.includes('contains-task-list')
        ? (0, i.jsx)(D._, {
           children: (Array.isArray(e.children) ? e.children : [e.children]).filter(l.isValidElement).map((e) => {
            const { children: t } = e.props,
             n = t.find((e) => 'object' == typeof e),
             s = Array.isArray(t) ? t.filter((e) => 'string' == typeof e) : [];
            return (0, i.jsx)(D.Z, { checked: n.props.checked, description: [...s].join('') }, s.join(''));
           }),
          })
        : (0, i.jsx)(m.Xy, { className: 'utrecht-unordered-list--html-content', children: e.children }),
      ol: ({ children: e }) => (0, i.jsx)(m._J, { className: 'utrecht-ordered-list--html-content', children: e }),
      img: m._V,
      h1: m._,
      h2: m.fV,
      h3: m._B,
      h4: m.f_,
      h5: m.mM,
      h6: m.TT,
      admonition: o.A,
      OverviewPage: w,
      DocCardList: u.A,
      ComponentOverview: W,
      ComponentAnatomy: L,
      CriteriaList: M,
      CriteriaListItem: F,
     },
     children: e,
    });
   }
  },
  51519(e, t, n) {
   'use strict';
   n.d(t, { $: () => m, x: () => d });
   var s = n(4077),
    o = n(58315),
    r = n(46447),
    l = n(13526),
    i = n(66116),
    a = n(30758),
    c = n(86070);
   const d = (0, a.createContext)({}),
    m = ({ title: e, appearance: t, description: n, children: a, figure: m }) => {
     const g = { do: 'Doen', dont: 'Niet doen' },
      h = m ? 'figure' : 'div',
      u = m ? 'figcaption' : 'div',
      p = 'string' == typeof n ? (0, c.jsx)(i.oz, { components: { a: r.N_ }, children: n }) : n;
     return (0, c.jsxs)(h, { className: (0, l.A)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: g.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: g.do })] }), (0, c.jsx)(r.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: g[t] }, children: a }) })] });
    };
  },
  51580(e, t, n) {
   var s = { './button-docs/docs/anatomy/anatomy.md': [7787, 7787], './code-block-docs/docs/anatomy/anatomy.md': [39226, 39226], './code-docs/docs/anatomy/anatomy.md': [27162, 27162], './color-sample-docs/docs/anatomy/anatomy.md': [87057, 87057], './data-badge-docs/docs/anatomy/anatomy.md': [87071, 87071], './heading-1-docs/docs/anatomy/anatomy.md': [17985, 17985], './heading-2-docs/docs/anatomy/anatomy.md': [5429, 5429], './heading-3-docs/docs/anatomy/anatomy.md': [49361, 49361], './heading-4-docs/docs/anatomy/anatomy.md': [50469, 50469], './heading-5-docs/docs/anatomy/anatomy.md': [40857, 40857], './heading-6-docs/docs/anatomy/anatomy.md': [63989, 63989], './heading-docs/docs/anatomy/anatomy.md': [29216, 29216], './link-docs/docs/anatomy/anatomy.md': [48512, 48512], './mark-docs/docs/anatomy/anatomy.md': [73070, 73070], './number-badge-docs/docs/anatomy/anatomy.md': [95670, 95670], './paragraph-docs/docs/anatomy/anatomy.md': [31520, 31520], './skip-link-docs/docs/anatomy/anatomy.md': [57968, 57968] };
   function o(e) {
    if (!n.o(s, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = s[e],
     o = t[0];
    return n.e(t[1]).then(() => n(o));
   }
   ((o.keys = () => Object.keys(s)), (o.id = 51580), (e.exports = o));
  },
  51582(e, t, n) {
   'use strict';
   n.d(t, { o: () => d });
   var s = n(18439),
    o = n(46447),
    r = n(86070);
   const l = (e, t) => {
     const n = new URL(t, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === n.protocol) {
      const { pathname: n, search: s, hash: o } = new URL(t, new URL(e, 'http://example.com/'));
      return n + s + o;
     }
     return n.toString();
    },
    i = { 1: {}, 2: { h1: o.fV, h2: o._B, h3: o.f_, h4: o.mM, h5: o.TT }, 3: { h1: o._B, h2: o.f_, h3: o.mM, h4: o.TT, h5: o.TT }, 4: { h1: o.f_, h2: o.mM, h3: o.TT, h4: o.TT, h5: o.TT }, 5: { h1: o.mM, h2: o.TT, h3: o.TT, h4: o.TT, h5: o.TT }, 6: { h1: o.TT, h2: o.TT, h3: o.TT, h4: o.TT, h5: o.TT } },
    a = (e) => ({ img: ({ src: t, ...n }) => (0, r.jsx)('img', { ...n, src: l(e, t), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, t) => {
     if (e) {
      const e = { ...i[t - 1] };
      return ((e.h1 = () => null), e);
     }
     return i[t];
    },
    d = ({ children: e, omitH1: t = !1, headingLevel: n = 1, baseUrl: o = '', components: l = {} }) => (0, r.jsx)(s.x, { components: { ...c(t, n), ...a(o), ...l }, children: e });
  },
  57296(e, t, n) {
   'use strict';
   n.d(t, { A: () => l });
   n(30758);
   var s = n(2640),
    o = n(96907),
    r = n(86070);
   function l({ items: e, component: t = o.A }) {
    return (0, r.jsx)(r.Fragment, { children: e.map(({ content: e }) => (0, r.jsx)(s.in, { content: e, children: (0, r.jsx)(t, { children: (0, r.jsx)(e, {}) }) }, e.metadata.permalink)) });
   }
  },
  82942(e, t, n) {
   'use strict';
   (n.r(t), n.d(t, { default: () => A }));
   n(30758);
   var s = n(13526),
    o = n(44941),
    r = n(70827),
    l = n(77128),
    i = n(32234),
    a = n(94533),
    c = n(81835),
    d = n(57296),
    m = n(4919),
    g = n(2640),
    h = n(86070);
   function u(e) {
    const t = (0, g.kJ)(e);
    return (0, h.jsx)(m.A, { children: (0, h.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(t) }) });
   }
   function p(e) {
    const { metadata: t } = e,
     {
      siteConfig: { title: n },
     } = (0, o.A)(),
     { blogDescription: s, blogTitle: l, permalink: i } = t,
     a = '/' === i ? n : l;
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(r.be, { title: a, description: s }), (0, h.jsx)(c.A, { tag: 'blog_posts_list' })] });
   }
   function w(e) {
    const { metadata: t, items: n, sidebar: s } = e;
    return (0, h.jsxs)(i.A, { sidebar: s, children: [(0, h.jsx)(d.A, { items: n }), (0, h.jsx)(a.A, { metadata: t })] });
   }
   function A(e) {
    return (0, h.jsxs)(r.e3, { className: (0, s.A)(l.G.wrapper.blogPages, l.G.page.blogListPage), children: [(0, h.jsx)(p, { ...e }), (0, h.jsx)(u, { ...e }), (0, h.jsx)(w, { ...e })] });
   }
  },
  84305(e, t, n) {
   'use strict';
   n.d(t, { A: () => u });
   var s = n(60691),
    o = n(94309),
    r = n(47229),
    l = n(29181),
    i = n(13526),
    a = n(86070);
   function c({ href: e, icon: t = '', title: n, description: s, children: r }) {
    return (0, a.jsxs)('div', { className: 'card', children: [e ? (0, a.jsx)(o.N, { href: e, className: (0, i.A)('cardLink', 'utrecht-link'), children: (0, a.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', n] }) }) : (0, a.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', n] }), s && (0, a.jsx)('p', { className: 'cardDescription', children: s }), r] });
   }
   function d({ item: e }) {
    return (0, a.jsx)(c, { title: e.label, description: e.description, children: (0, a.jsx)(l.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, t) => (0, a.jsx)(l.Er, { children: 'link' === e.type ? (0, a.jsx)(o.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, a.jsxs)(o.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, a.jsx)(a.Fragment, {}) }, t)) }) });
   }
   function m({ item: e }) {
    const t = (0, r.cC)(e.docId);
    return (0, a.jsx)(c, { href: e.href, title: e.label, description: e.description ?? t?.description });
   }
   function g({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, a.jsx)(m, { item: e });
     case 'category':
      return (0, a.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function h({ className: e }) {
    const t = (0, s.$S)();
    return (0, a.jsx)(u, { items: t.items, className: e });
   }
   function u(e) {
    const { items: t, className: n } = e;
    if (!t) return (0, a.jsx)(h, { ...e });
    const o = (0, s.d1)(t);
    return (0, a.jsx)('section', { className: (0, i.A)('row', n), ...e, children: o.map((e, t) => (0, a.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, a.jsx)(g, { item: e }) }, t)) });
   }
  },
  85162(e, t, n) {
   'use strict';
   n.d(t, { s: () => a });
   var s = n(29181),
    o = n(13526),
    r = n(32385),
    l = n(86070);
   const i = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    a = ({ name: e, relayStep: t, description: n }) => {
     const a = (0, r.fX)(t),
      c = i[e] ?? e;
     return (0, l.jsxs)(s.WK, { children: [(0, l.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, o.A)('ma-component-illustration', `ma-component-illustration--${a}`), fill: 'none', children: [(0, l.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, l.jsx)('rect', { width: '960', height: '540' }), (0, l.jsx)('rect', { width: '960', height: '540' })] }), (0, l.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, l.jsx)('use', { href: `/svg/componenten_overzicht_${(0, r.fX)(c)}.svg#component-illustration` })] }), (0, l.jsx)(s.$P, { className: 'ma-component-illustration__caption', children: n })] });
    };
  },
  94309(e, t, n) {
   'use strict';
   n.d(t, { F: () => l, N: () => i });
   var s = n(13526),
    o = n(32385),
    r = n(86070);
   const l = ({ children: e, ...t }) => {
     const { to: n, href: s, ...l } = t;
     let i = n || s;
     const a = new URL(i, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === a.origin ? (a.pathname.endsWith('/') || (0, o.QQ)(a.pathname) || (a.pathname = `${a.pathname}/`), (i = a.toString().replace('https://nldesignsystem.nl', ''))) : ((l.target = '_blank'), (l.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: i, ...l, children: e }));
    },
    i = ({ className: e, ...t }) => (0, r.jsx)(l, { className: (0, s.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
  94533(e, t, n) {
   'use strict';
   n.d(t, { A: () => l });
   n(30758);
   var s = n(73285),
    o = n(24402),
    r = n(86070);
   function l(e) {
    const { metadata: t } = e,
     { previousPage: n, nextPage: l } = t;
    return (0, r.jsxs)('nav', { className: 'pagination-nav', 'aria-label': (0, s.T)({ id: 'theme.blog.paginator.navAriaLabel', message: 'Blog list page navigation', description: 'The ARIA label for the blog pagination' }), children: [n && (0, r.jsx)(o.A, { permalink: n, title: (0, r.jsx)(s.A, { id: 'theme.blog.paginator.newerEntries', description: 'The label used to navigate to the newer blog posts page (previous page)', children: 'Newer entries' }) }), l && (0, r.jsx)(o.A, { permalink: l, title: (0, r.jsx)(s.A, { id: 'theme.blog.paginator.olderEntries', description: 'The label used to navigate to the older blog posts page (next page)', children: 'Older entries' }), isNext: !0 })] });
   }
  },
  96907(e, t, n) {
   'use strict';
   n.d(t, { A: () => L });
   n(30758);
   var s = n(13526),
    o = n(2640),
    r = n(86070);
   function l({ children: e, className: t }) {
    return (0, r.jsx)('article', { className: t, children: e });
   }
   var i = n(54705);
   const a = 'title_V2Be';
   function c({ className: e }) {
    const { metadata: t, isBlogPostPage: n } = (0, o.e7)(),
     { permalink: l, title: c } = t,
     d = n ? 'h1' : 'h2';
    return (0, r.jsx)(d, { className: (0, s.A)(a, e), children: n ? c : (0, r.jsx)(i.A, { to: l, children: c }) });
   }
   var d = n(73285),
    m = n(28514),
    g = n(32325);
   const h = 'container_VP4_';
   function u({ readingTime: e }) {
    const t = (function () {
     const { selectMessage: e } = (0, m.W)();
     return (t) => {
      const n = Math.ceil(t);
      return e(n, (0, d.T)({ id: 'theme.blog.post.readingTime.plurals', description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One min read|{readingTime} min read' }, { readingTime: n }));
     };
    })();
    return (0, r.jsx)(r.Fragment, { children: t(e) });
   }
   function p({ date: e, formattedDate: t }) {
    return (0, r.jsx)('time', { dateTime: e, children: t });
   }
   function w() {
    return (0, r.jsx)(r.Fragment, { children: ' \xb7 ' });
   }
   function A({ className: e }) {
    const { metadata: t } = (0, o.e7)(),
     { date: n, readingTime: l } = t,
     i = (0, g.i)({ day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    return (0, r.jsxs)('div', { className: (0, s.A)(h, 'margin-vert--md', e), children: [(0, r.jsx)(p, { date: n, formattedDate: ((a = n), i.format(new Date(a))) }), void 0 !== l && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(w, {}), (0, r.jsx)(u, { readingTime: l })] })] });
    var a;
   }
   var f = n(51016);
   const y = 'authorCol_wipH',
    x = 'imageOnlyAuthorRow_QdzG',
    j = 'imageOnlyAuthorCol_RnvU';
   function b({ className: e }) {
    const {
     metadata: { authors: t },
     assets: n,
    } = (0, o.e7)();
    if (0 === t.length) return null;
    const l = t.every(({ name: e }) => !e),
     i = 1 === t.length;
    return (0, r.jsx)('div', { className: (0, s.A)('margin-top--md margin-bottom--sm', l ? x : 'row', e), children: t.map((e, t) => (0, r.jsx)('div', { className: (0, s.A)(!l && (i ? 'col col--12' : 'col col--6'), l ? j : y), children: (0, r.jsx)(f.A, { author: { ...e, imageURL: n.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function v() {
    return (0, r.jsxs)('header', { children: [(0, r.jsx)(c, {}), (0, r.jsx)(A, {}), (0, r.jsx)(b, {})] });
   }
   var T = n(89677),
    C = n(47470);
   function k({ children: e, className: t }) {
    const { isBlogPostPage: n } = (0, o.e7)();
    return (0, r.jsx)('div', { id: n ? T.LU : void 0, className: (0, s.A)('markdown', t), children: (0, r.jsx)(C.A, { children: e }) });
   }
   var N = n(77128),
    G = n(58302),
    W = n(90636);
   function R() {
    return (0, r.jsx)('b', { children: (0, r.jsx)(d.A, { id: 'theme.blog.post.readMore', description: 'The label used in blog post item excerpts to link to full blog posts', children: 'Read more' }) });
   }
   function _(e) {
    const { blogPostTitle: t, ...n } = e;
    return (0, r.jsx)(i.A, { 'aria-label': (0, d.T)({ message: 'Read more about {title}', id: 'theme.blog.post.readMoreLabel', description: 'The ARIA label for the link to full blog posts from excerpts' }, { title: t }), ...n, children: (0, r.jsx)(R, {}) });
   }
   function S() {
    const { metadata: e, isBlogPostPage: t } = (0, o.e7)(),
     { tags: n, title: l, editUrl: i, hasTruncateMarker: a, lastUpdatedBy: c, lastUpdatedAt: d } = e,
     m = !t && a,
     g = n.length > 0;
    if (!(g || m || i)) return null;
    if (t) {
     const e = !!(i || d || c);
     return (0, r.jsxs)('footer', { className: 'docusaurus-mt-lg', children: [g && (0, r.jsx)('div', { className: (0, s.A)('row', 'margin-top--sm', N.G.blog.blogFooterEditMetaRow), children: (0, r.jsx)('div', { className: 'col', children: (0, r.jsx)(W.A, { tags: n }) }) }), e && (0, r.jsx)(G.A, { className: (0, s.A)('margin-top--sm', N.G.blog.blogFooterEditMetaRow), editUrl: i, lastUpdatedAt: d, lastUpdatedBy: c })] });
    }
    return (0, r.jsxs)('footer', { className: 'row docusaurus-mt-lg', children: [g && (0, r.jsx)('div', { className: (0, s.A)('col', { 'col--9': m }), children: (0, r.jsx)(W.A, { tags: n }) }), m && (0, r.jsx)('div', { className: (0, s.A)('col text--right', { 'col--3': g }), children: (0, r.jsx)(_, { blogPostTitle: l, to: e.permalink }) })] });
   }
   function L({ children: e, className: t }) {
    const n = (function () {
     const { isBlogPostPage: e } = (0, o.e7)();
     return e ? void 0 : 'margin-bottom--xl';
    })();
    return (0, r.jsxs)(l, { className: (0, s.A)(n, t), children: [(0, r.jsx)(v, {}), (0, r.jsx)(k, { children: e }), (0, r.jsx)(S, {})] });
   }
  },
 },
]);
