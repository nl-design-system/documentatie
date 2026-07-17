'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [67360],
 {
  9386(e, n, l) {
   l.d(n, { H: () => f });
   var o = l(95822),
    t = l(46447),
    i = l(13526),
    s = l(68148),
    r = l(9016),
    a = l(69303),
    c = l(91635),
    d = l(30734),
    h = l(30758),
    v = l(31186),
    m = l(65904),
    p = l.n(m),
    u = l(51627),
    j = l(86070);
   const g = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(t.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(t.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        o = (0, v.qV)(l)
         .replaceAll(/&quot;/g, '"')
         .replaceAll(/\sclass="[\w-\s]+"/g, '')
         .replaceAll(/\sid="[\w-\s]+"/g, '')
         .replace('<astro-static-slot>', '')
         .replace('</astro-static-slot>', '')
         .replaceAll(/{"\s"}/g, '')
         .replaceAll(/\n{2,}/g, '\n')
         .replaceAll(/^\s\s/gm, '')
         .replaceAll(/\salt\s/g, ' alt="" ')
         .replaceAll(' loading="lazy"', ' '),
        t = p().highlight(o, p().languages[n], n);
       return (0, j.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: o } }), (0, j.jsx)(u.n, { children: (0, j.jsx)(u.K, { label: 'Code', children: (0, j.jsx)('pre', { className: 'language-html nl-code-block', children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: t } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: m = !0, children: p, container: u = 'document', language: f, designTokens: y }) => {
       const k = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : v.qV(_ || k),
        [N, z] = (0, h.useState)(w),
        [A, C] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: f, plugins: [s.A, r.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [w]);
       const S = (0, h.useId)();
       let F = h.Fragment;
       return (
        'paragraph' === u ? (F = g) : 'document' === u ? (F = b) : 'surface' === u && (F = x),
        (0, j.jsxs)('div', {
         className: (0, i.A)('nlds-canvas'),
         children: [
          k && (0, j.jsx)('div', { className: (0, i.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, j.jsx)(F, { children: (0, j.jsx)(t.v$, { children: k }) }) }) }),
          m &&
           (0, j.jsx)('div', {
            className: (0, i.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(t.$n, {
             className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!A);
             },
             'aria-expanded': A,
             'aria-controls': S,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, j.jsxs)('div', {
            className: (0, i.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, j.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: N, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, i.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(t.$n, {
                className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, n, l) {
   l.d(n, { R: () => s, x: () => r });
   var o = l(30758);
   const t = {},
    i = o.createContext(t);
   function s(e) {
    const n = o.useContext(i);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), o.createElement(i.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => a, n: () => r });
   var o = l(13526),
    t = l(96345),
    i = l(37168),
    s = l(86070);
   const r = ({ className: e, ...n }) => {
     const l = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, s.jsx)('div', { className: l, children: n.children });
    },
    a = ({ className: e, label: n, heading: l, headingLevel: r, headingApperance: a, ...c }) => {
     const d = (0, o.A)('utrecht-accordion__section', e);
     return (0, s.jsxs)('details', { className: d, ...c, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(t.A, {}) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [l && (0, s.jsx)(i.D, { level: r, appearance: a, children: l }), n] })] }) }), (0, s.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => r, RM: () => i });
   var o = l(86070),
    t = l(18439);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => h, x: () => d });
   var o = l(4077),
    t = l(58315),
    i = l(46447),
    s = l(13526),
    r = l(45980),
    a = l(30758),
    c = l(86070);
   const d = (0, a.createContext)({}),
    h = ({ title: e, appearance: n, description: l, children: a, figure: h }) => {
     const v = { do: 'Doen', dont: 'Niet doen' },
      m = h ? 'figure' : 'div',
      p = h ? 'figcaption' : 'div',
      u = 'string' == typeof l ? (0, c.jsx)(r.oz, { children: l }) : l;
     return (0, c.jsxs)(m, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(i.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: v.dont })] }), (0, c.jsx)(i.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(i.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: v.do })] }), (0, c.jsx)(i.fz, { children: e })] }), u] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: v[n] }, children: a }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => c });
   var o = l(46447),
    t = l(16194),
    i = l(30758),
    s = l(88022);
   const r = {
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
   var a = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: h, type: v } = (0, i.useContext)(s.x),
     m = (0, i.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(t.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: i }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', v ? `\u201c${v}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(o.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...t({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  98246(e, n, l) {
   (l.r(n), l.d(n, { assets: () => c, contentTitle: () => a, default: () => v, frontMatter: () => r, metadata: () => o, toc: () => d }));
   const o = JSON.parse('{"id":"richtlijnen/content/video/flitsen","title":"Flitsen in video","description":"Richtlijnen voor flitsen in video binnen NL Design System","source":"@site/docs/richtlijnen/content/video/flitsen.mdx","sourceDirName":"richtlijnen/content/video","slug":"/richtlijnen/content/video/flitsen","permalink":"/richtlijnen/content/video/flitsen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/video/flitsen.mdx","tags":[],"version":"current","frontMatter":{"title":"Flitsen in video","title_sm":"Flitsen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Flitsen","pagination_label":"Flitsen","description":"Richtlijnen voor flitsen in video binnen NL Design System","slug":"/richtlijnen/content/video/flitsen","keywords":["video","YouTube","Vimeo","flitsen","epilepsie","epileptische aanval"]},"sidebar":"richtlijnen","previous":{"title":"Video beschrijving","permalink":"/richtlijnen/content/video/beschrijving"},"next":{"title":"Gebarentaal","permalink":"/richtlijnen/content/video/gebarentaal"}}');
   var t = l(86070),
    i = l(18439),
    s = (l(9386), l(88022), l(78734));
   const r = { title: 'Flitsen in video', title_sm: 'Flitsen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Flitsen', pagination_label: 'Flitsen', description: 'Richtlijnen voor flitsen in video binnen NL Design System', slug: '/richtlijnen/content/video/flitsen', keywords: ['video', 'YouTube', 'Vimeo', 'flitsen', 'epilepsie', 'epileptische aanval'] },
    a = 'Flitsen in video',
    c = {},
    d = [{ value: 'Wie heeft last van flitsen?', id: 'wie-heeft-last-van-flitsen', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Flitsen voorkomen', id: 'flitsen-voorkomen', level: 2 }, { value: 'Voor en tijdens het opnemen van de video', id: 'voor-en-tijdens-het-opnemen-van-de-video', level: 3 }, { value: 'Bij en na het monteren van de video', id: 'bij-en-na-het-monteren-van-de-video', level: 3 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'flitsen-in-video', children: 'Flitsen in video' }) }), '\n', (0, t.jsx)(n.p, { children: 'Een flits is een kort moment van licht dat plotseling verschijnt en weer verdwijnt. Flitsen kunnen fysieke klachten veroorzaken bij mensen die daar gevoelig voor zijn. Voorkom daarom zo veel mogelijk dat er flitsen voorkomen in je video.' }), '\n', (0, t.jsx)(n.h2, { id: 'wie-heeft-last-van-flitsen', children: 'Wie heeft last van flitsen?' }), '\n', (0, t.jsx)(n.p, { children: 'Wanneer er in een hele korte tijd meerdere flitsen voorkomen in een video, kan dit een epileptische aanval uitlokken bij mensen die daar gevoelig voor zijn. Daarnaast kunnen mensen door flitsen hoofdpijn of migraine krijgen en er misselijk van worden.' }), '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(n.p, { children: 'Een flits ontstaat door een plotselinge overgang van donker (lage helderheid) naar licht (hoge helderheid), of andersom. Voorbeelden hiervan die in een video kunnen voorkomen zijn onder andere:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Stroboscopisch licht, bijvoorbeeld tijdens concerten of voor dramatisch effect in een film.' }), '\n', (0, t.jsx)(n.li, { children: 'Camera-flitsen.' }), '\n', (0, t.jsx)(n.li, { children: 'Explosies.' }), '\n', (0, t.jsx)(n.li, { children: 'Vuurwerk.' }), '\n', (0, t.jsx)(n.li, { children: 'Knipperende teksten.' }), '\n', (0, t.jsx)(n.li, { children: 'Reflecties en schitteringen, bijvoorbeeld in een spiegel of door de zon op stilstaand water.' }), '\n', (0, t.jsx)(n.li, { children: 'Snel wisselende overgangen van scenes met een groot kleurcontrast.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'flitsen-voorkomen', children: 'Flitsen voorkomen' }), '\n', (0, t.jsx)(n.p, { children: 'De makkelijkste manier om flitsen in een video te voorkomen is natuurlijk door geen opnames te maken waar flitsen in voor komen. Maar het is niet altijd te voorspellen of iets op beeld een flits veroorzaakt.' }), '\n', (0, t.jsx)(n.p, { children: 'Er zijn wel een aantal dingen die je zelf kunt doen om er voor te zorgen dat je video geen overgangen van donker naar licht (of andersom) bevat die schadelijk kunnen zijn voor mensen die daar gevoelig voor zijn.' }), '\n', (0, t.jsx)(n.h3, { id: 'voor-en-tijdens-het-opnemen-van-de-video', children: 'Voor en tijdens het opnemen van de video' }), '\n', (0, t.jsx)(n.p, { children: 'Let voorafgaand en tijdens het opnemen van je video op:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Knipperende en flitsende lichtbronnen, zoals de eerder genoemde voorbeelden.' }), '\n', (0, t.jsx)(n.li, { children: 'Led-, neon- en TL-verlichting. Afhankelijk van je camera kan deze verlichting knipper-effecten in de opname veroorzaken.' }), '\n', (0, t.jsx)(n.li, { children: 'Kleur en licht. Gebruik waar mogelijk rustige achtergronden en vermijd fel licht.' }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'bij-en-na-het-monteren-van-de-video', children: 'Bij en na het monteren van de video' }), '\n', (0, t.jsx)(n.p, { children: 'Ook tijdens en na het monteren kun je een aantal stappen nemen om flitsen te voorkomen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Maak gebruik van rustige overgangen tussen sc\xe8nes die sterk van kleur verschillen, bijvoorbeeld wanneer je van een zwart scherm naar een beeld met veel licht schakelt.' }), '\n', (0, t.jsx)(n.li, { children: 'Laat beeld met mogelijke flitsen niet het hele beeld in beslag nemen. Hoe minder ruimte de flits in beslag neemt, hoe kleiner de kans dat de flits fysieke problemen veroorzaakt.' }), '\n', (0, t.jsxs)(n.li, { children: ['Controleer je video met de ', (0, t.jsx)(n.a, { href: 'https://trace.umd.edu/peat/', children: 'PEAT analyse-tool' }), '. Dit is gratis software die flitsen boven een bepaalde schadelijke grenswaarde detecteert.'] }), '\n', (0, t.jsx)(n.li, { children: 'Controleer je video in de grootst mogelijke aangeboden weergave. Kan de bezoeker de video in fullscreen modus bekijken? Dan controleer je de video in die modus.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Is het helemaal niet mogelijk om een mogelijke flits te voorkomen? Voeg dan een waarschuwing toe, zodat bezoekers ervoor kunnen kiezen om de video niet verder te kijken.' }), '\n', (0, t.jsxs)(n.p, { children: ['Let wel op: Bevat je video meerdere flitsen in een hele korte tijd? Dan is het toevoegen van een waarschuwing niet voldoende om te voldoen aan ', (0, t.jsx)(n.a, { href: '/wcag/2.3.1/', children: 'succescriterium 2.3.1 Drie flitsen beneden drempelwaarde' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Controleer iedere video. Gebruik hierbij de onderstaande stappen als checklist:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Bekijk de video in de grootst mogelijke aangeboden weergave. Bevat de video mogelijke flitsen?' }), '\n', (0, t.jsx)(n.li, { children: 'Zo ja, controleer de video dan met een analyse tool.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG-succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.3.1/', children: 'Succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.3.2/', children: 'Succescriterium 2.3.2 Drie flitsen' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.3.3/', children: 'Succescriterium 2.3.3 Animatie uit interacties' }) }), '\n'] }), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
