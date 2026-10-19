'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [67360],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => a });
   var o = l(13526),
    s = l(30758),
    t = l(30662),
    i = l(37168),
    r = l(86070);
   const a = (0, s.forwardRef)(({ as: e, className: n, children: l, ...s }, t) => {
     const i = e || 'div',
      a = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, r.jsx)(i, { ref: t, className: a, ...s, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: s, headingLevel: a, headingApperance: d, ...c }) => {
     const h = (0, o.A)('utrecht-accordion__section', e),
      v = (0, o.A)('utrecht-accordion__panel', n);
     return (0, r.jsxs)('details', { className: h, ...c, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(t.rI, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [s && (0, r.jsx)(i.D, { level: a, appearance: d, children: s }), l] })] }) }), (0, r.jsx)('div', { className: v, children: c.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => i, x: () => r });
   var o = l(30758);
   const s = {},
    t = o.createContext(s);
   function i(e) {
    const n = o.useContext(t);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : i(e.components)), o.createElement(t.Provider, { value: n }, e.children));
   }
  },
  23596(e, n, l) {
   (l.r(n), l.d(n, { assets: () => d, contentTitle: () => a, default: () => v, frontMatter: () => r, metadata: () => o, toc: () => c }));
   const o = JSON.parse('{"id":"richtlijnen/content/video/flitsen","title":"Flitsen in video","description":"Richtlijnen voor flitsen in video binnen NL Design System","source":"@site/docs/richtlijnen/content/video/flitsen.mdx","sourceDirName":"richtlijnen/content/video","slug":"/richtlijnen/content/video/flitsen","permalink":"/richtlijnen/content/video/flitsen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/video/flitsen.mdx","tags":[],"version":"current","frontMatter":{"title":"Flitsen in video","title_sm":"Flitsen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Flitsen","pagination_label":"Flitsen","description":"Richtlijnen voor flitsen in video binnen NL Design System","slug":"/richtlijnen/content/video/flitsen","keywords":["video","YouTube","Vimeo","flitsen","epilepsie","epileptische aanval"]},"sidebar":"richtlijnen","previous":{"title":"Video beschrijving","permalink":"/richtlijnen/content/video/beschrijving"},"next":{"title":"Gebarentaal","permalink":"/richtlijnen/content/video/gebarentaal"}}');
   var s = l(86070),
    t = l(18439),
    i = (l(38953), l(56528), l(56672));
   const r = { title: 'Flitsen in video', title_sm: 'Flitsen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Flitsen', pagination_label: 'Flitsen', description: 'Richtlijnen voor flitsen in video binnen NL Design System', slug: '/richtlijnen/content/video/flitsen', keywords: ['video', 'YouTube', 'Vimeo', 'flitsen', 'epilepsie', 'epileptische aanval'] },
    a = 'Flitsen in video',
    d = {},
    c = [{ value: 'Wie heeft last van flitsen?', id: 'wie-heeft-last-van-flitsen', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Flitsen voorkomen', id: 'flitsen-voorkomen', level: 2 }, { value: 'Voor en tijdens het opnemen van de video', id: 'voor-en-tijdens-het-opnemen-van-de-video', level: 3 }, { value: 'Bij en na het monteren van de video', id: 'bij-en-na-het-monteren-van-de-video', level: 3 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'flitsen-in-video', children: 'Flitsen in video' }) }), '\n', (0, s.jsx)(n.p, { children: 'Een flits is een kort moment van licht dat plotseling verschijnt en weer verdwijnt. Flitsen kunnen fysieke klachten veroorzaken bij mensen die daar gevoelig voor zijn. Voorkom daarom zo veel mogelijk dat er flitsen voorkomen in je video.' }), '\n', (0, s.jsx)(n.h2, { id: 'wie-heeft-last-van-flitsen', children: 'Wie heeft last van flitsen?' }), '\n', (0, s.jsx)(n.p, { children: 'Wanneer er in een hele korte tijd meerdere flitsen voorkomen in een video, kan dit een epileptische aanval uitlokken bij mensen die daar gevoelig voor zijn. Daarnaast kunnen mensen door flitsen hoofdpijn of migraine krijgen en er misselijk van worden.' }), '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(n.p, { children: 'Een flits ontstaat door een plotselinge overgang van donker (lage helderheid) naar licht (hoge helderheid), of andersom. Voorbeelden hiervan die in een video kunnen voorkomen zijn onder andere:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Stroboscopisch licht, bijvoorbeeld tijdens concerten of voor dramatisch effect in een film.' }), '\n', (0, s.jsx)(n.li, { children: 'Camera-flitsen.' }), '\n', (0, s.jsx)(n.li, { children: 'Explosies.' }), '\n', (0, s.jsx)(n.li, { children: 'Vuurwerk.' }), '\n', (0, s.jsx)(n.li, { children: 'Knipperende teksten.' }), '\n', (0, s.jsx)(n.li, { children: 'Reflecties en schitteringen, bijvoorbeeld in een spiegel of door de zon op stilstaand water.' }), '\n', (0, s.jsx)(n.li, { children: 'Snel wisselende overgangen van scenes met een groot kleurcontrast.' }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'flitsen-voorkomen', children: 'Flitsen voorkomen' }), '\n', (0, s.jsx)(n.p, { children: 'De makkelijkste manier om flitsen in een video te voorkomen is natuurlijk door geen opnames te maken waar flitsen in voor komen. Maar het is niet altijd te voorspellen of iets op beeld een flits veroorzaakt.' }), '\n', (0, s.jsx)(n.p, { children: 'Er zijn wel een aantal dingen die je zelf kunt doen om er voor te zorgen dat je video geen overgangen van donker naar licht (of andersom) bevat die schadelijk kunnen zijn voor mensen die daar gevoelig voor zijn.' }), '\n', (0, s.jsx)(n.h3, { id: 'voor-en-tijdens-het-opnemen-van-de-video', children: 'Voor en tijdens het opnemen van de video' }), '\n', (0, s.jsx)(n.p, { children: 'Let voorafgaand en tijdens het opnemen van je video op:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Knipperende en flitsende lichtbronnen, zoals de eerder genoemde voorbeelden.' }), '\n', (0, s.jsx)(n.li, { children: 'Led-, neon- en TL-verlichting. Afhankelijk van je camera kan deze verlichting knipper-effecten in de opname veroorzaken.' }), '\n', (0, s.jsx)(n.li, { children: 'Kleur en licht. Gebruik waar mogelijk rustige achtergronden en vermijd fel licht.' }), '\n'] }), '\n', (0, s.jsx)(n.h3, { id: 'bij-en-na-het-monteren-van-de-video', children: 'Bij en na het monteren van de video' }), '\n', (0, s.jsx)(n.p, { children: 'Ook tijdens en na het monteren kun je een aantal stappen nemen om flitsen te voorkomen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Maak gebruik van rustige overgangen tussen sc\xe8nes die sterk van kleur verschillen, bijvoorbeeld wanneer je van een zwart scherm naar een beeld met veel licht schakelt.' }), '\n', (0, s.jsx)(n.li, { children: 'Laat beeld met mogelijke flitsen niet het hele beeld in beslag nemen. Hoe minder ruimte de flits in beslag neemt, hoe kleiner de kans dat de flits fysieke problemen veroorzaakt.' }), '\n', (0, s.jsxs)(n.li, { children: ['Controleer je video met de ', (0, s.jsx)(n.a, { href: 'https://trace.umd.edu/peat/', children: 'PEAT analyse-tool' }), '. Dit is gratis software die flitsen boven een bepaalde schadelijke grenswaarde detecteert.'] }), '\n', (0, s.jsx)(n.li, { children: 'Controleer je video in de grootst mogelijke aangeboden weergave. Kan de bezoeker de video in fullscreen modus bekijken? Dan controleer je de video in die modus.' }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: 'Is het helemaal niet mogelijk om een mogelijke flits te voorkomen? Voeg dan een waarschuwing toe, zodat bezoekers ervoor kunnen kiezen om de video niet verder te kijken.' }), '\n', (0, s.jsxs)(n.p, { children: ['Let wel op: Bevat je video meerdere flitsen in een hele korte tijd? Dan is het toevoegen van een waarschuwing niet voldoende om te voldoen aan ', (0, s.jsx)(n.a, { href: '/wcag/2.3.1/', children: 'succescriterium 2.3.1 Drie flitsen beneden drempelwaarde' }), '.'] }), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsx)(n.p, { children: 'Controleer iedere video. Gebruik hierbij de onderstaande stappen als checklist:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Bekijk de video in de grootst mogelijke aangeboden weergave. Bevat de video mogelijke flitsen?' }), '\n', (0, s.jsx)(n.li, { children: 'Zo ja, controleer de video dan met een analyse tool.' }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG-succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.3.1/', children: 'Succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.3.2/', children: 'Succescriterium 2.3.2 Drie flitsen' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.3.3/', children: 'Succescriterium 2.3.3 Animatie uit interacties' }) }), '\n'] }), '\n', (0, s.jsx)(i.Ay, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => d });
   var o = l(46447),
    s = l(16194),
    t = l(30758),
    i = l(56528);
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
   function d({ lineNumber: e, syntax: n, textContent: l, trim: d }) {
    let c = l;
    const { title: h, type: v } = (0, t.useContext)(i.x),
     m = (0, t.useId)();
    return (d && (c = c.trim()), (0, a.jsx)(s.f4, { theme: r, code: c, language: n || '', children: ({ style: n, tokens: l, getLineProps: s, getTokenProps: t }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', v ? `\u201c${v}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(o.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...s({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => T, GP: () => N, KC: () => P, Nd: () => _, Rt: () => C, Vj: () => A, Wk: () => R, bz: () => z, cB: () => S, e5: () => I, hY: () => M, jK: () => D, jP: () => L, ob: () => K, rI: () => w, t4: () => V, vP: () => F, vg: () => W });
   var o = l(92081),
    s = l(90578),
    t = l(96345),
    i = l(64249),
    r = l(4603),
    a = l(91525),
    d = l(23436),
    c = l(1375),
    h = l(4077),
    v = l(58315),
    m = l(73563),
    j = l(35193),
    p = l(82999),
    u = l(13088),
    g = l(43864),
    x = l(24214),
    b = l(79532),
    f = l(60529),
    y = l(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, y.jsx)(o.A, { ...k }),
    N = () => (0, y.jsx)(s.A, { ...k }),
    w = () => (0, y.jsx)(t.A, { ...k }),
    A = () => (0, y.jsx)(i.A, { ...k }),
    z = () => (0, y.jsx)(r.A, { ...k }),
    C = () => (0, y.jsx)(a.A, { ...k }),
    S = () => (0, y.jsx)(d.A, { ...k }),
    F = () => (0, y.jsx)(c.A, { ...k }),
    D = () => (0, y.jsx)(h.A, { ...k }),
    L = () => (0, y.jsx)(v.A, { ...k }),
    V = () => (0, y.jsx)(m.A, { ...k }),
    T = () => (0, y.jsx)(j.A, { ...k }),
    M = () => (0, y.jsx)(p.A, { ...k }),
    P = () => (0, y.jsx)(u.A, { ...k }),
    R = () => (0, y.jsx)(g.A, { ...k }),
    I = () => (0, y.jsx)(x.A, { ...k }),
    K = () => (0, y.jsx)(b.A, { ...k }),
    W = () => (0, y.jsx)(f.A, { ...k });
  },
  38953(e, n, l) {
   l.d(n, { H: () => y });
   var o = l(28369),
    s = l(46447),
    t = l(13526),
    i = l(68148),
    r = l(9016),
    a = l(69303),
    d = l(91635),
    c = l(30734),
    h = l(30758),
    v = l(31186),
    m = l(65904),
    j = l.n(m),
    p = l(14881),
    u = l(46847),
    g = l(86070);
   const x = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(s.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(s.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: o, copyCode: s, defaultExpandedCode: i, designTokens: r }) => {
       const a = 'string' == typeof l ? l : o || '',
        d = 'string' == typeof l ? j().highlight(l, j().languages[e], e) : j().highlight(o || '', j().languages[e], e);
       return (0, g.jsxs)('div', { className: (0, t.A)('ma-canvas-astro', n), children: [(0, g.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: r, children: (0, g.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }) }), (0, g.jsx)(p.n, { children: (0, g.jsxs)(p.K, { label: 'Code', open: i, children: [(0, g.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: d } }) }), 'allow' === s && (0, g.jsx)(u.$, { 'data-copy-code': a, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: m = !0, children: j, container: p = 'document', language: u, designTokens: y }) => {
       const k = 'function' == typeof j ? j() : j,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : v.qV(_ || k),
        [w, A] = (0, h.useState)(N),
        [z, C] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await c.Ay.format(N, { parser: u, plugins: [i.A, r.Ay, a.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let F = h.Fragment;
       return (
        'paragraph' === p ? (F = x) : 'document' === p ? (F = b) : 'surface' === p && (F = f),
        (0, g.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          k && (0, g.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, g.jsx)(F, { children: (0, g.jsx)(s.v$, { children: k }) }) }) }),
          m &&
           (0, g.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(s.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, g.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, g.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: u, textContent: w, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(s.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(w).catch((e) => console.error('Copy code failed', e));
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
  46847(e, n, l) {
   l.d(n, { $: () => o.$n });
   var o = l(50805);
  },
  56528(e, n, l) {
   l.d(n, { $: () => c, x: () => d });
   var o = l(30662),
    s = l(46447),
    t = l(13526),
    i = l(94988),
    r = l(30758),
    a = l(86070);
   const d = (0, r.createContext)({}),
    c = ({ title: e, appearance: n, description: l, children: r, figure: c }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      v = c ? 'figure' : 'div',
      m = c ? 'figcaption' : 'div',
      j = 'string' == typeof l ? (0, a.jsx)(i.oz, { components: { a: s.N_ }, children: l }) : l;
     return (0, a.jsxs)(v, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(o.jP, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(s.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(o.jK, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(s.fz, { children: e })] }), j] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: r }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => r, RM: () => t });
   var o = l(86070),
    s = l(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
  },
 },
]);
