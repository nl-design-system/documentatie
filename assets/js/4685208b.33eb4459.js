'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [55180],
 {
  8649: (e, n, o) => {
   o.d(n, { H: () => g });
   var l = o(16609),
    i = o(68873),
    t = o(13526),
    s = o(58713),
    r = o(87347),
    a = o(39644),
    d = o(92406),
    c = o(63313),
    v = o(30758),
    h = o(31186),
    m = o(86070);
   const p = ({ children: e }) => (0, m.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(i.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(i.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   p.displayName = 'ParagraphContainer';
   const u = ({ children: e }) => (0, m.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(i.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   u.displayName = 'DocumentContainer';
   const j = ({ children: e }) => (0, m.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: e });
   j.displayName = 'SurfaceContainer';
   const g = ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: g = !0, children: b, container: f = 'document', language: k, designTokens: y }) => {
    const x = 'function' == typeof b ? b() : b,
     _ = 'function' == typeof e ? e() : (0, v.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : h.qV(_ || x),
     [z, N] = (0, v.useState)(w),
     [C, A] = (0, v.useState)(o);
    (0, v.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(w, { parser: k, plugins: [s.A, r.Ay, a.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [w]);
    const S = (0, v.useId)();
    let F = v.Fragment;
    return (
     'paragraph' === f ? (F = p) : 'document' === f ? (F = u) : 'surface' === f && (F = j),
     (0, m.jsxs)('div', {
      className: (0, t.A)('nlds-canvas'),
      children: [
       x && (0, m.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, m.jsx)(F, { children: (0, m.jsx)(i.v$, { children: x }) }) }) }),
       g &&
        (0, m.jsx)('div', {
         className: (0, t.A)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(i.$n, {
          className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           A(!C);
          },
          'aria-expanded': C,
          'aria-controls': S,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, m.jsxs)('div', {
         className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !C,
         children: [
          (0, m.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: z, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(i.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(z).catch((e) => console.error('Copy code failed', e));
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
  16609: (e, n, o) => {
   o.d(n, { M: () => d });
   var l = o(68873),
    i = o(16194),
    t = o(30758),
    s = o(50124);
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
   var a = o(86070);
   function d({ lineNumber: e, syntax: n, textContent: o, trim: d }) {
    let c = o;
    const { title: v, type: h } = (0, t.useContext)(s.x),
     m = (0, t.useId)();
    return d && (c = c.trim()), (0, a.jsx)(i.f4, { theme: r, code: c, language: n || '', children: ({ style: n, tokens: o, getLineProps: i, getTokenProps: t }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', v ? ': ' : ' ', v] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: v ? 'region' : void 0, 'aria-labelledby': m, style: n, children: o.map((n, o) => (0, a.jsxs)('span', { ...i({ line: n }), children: [e && (0, a.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, o)) })] }) });
   }
  },
  50124: (e, n, o) => {
   o.d(n, { $: () => c, x: () => d });
   var l = o(54736),
    i = o(26990),
    t = o(68873),
    s = o(13526),
    r = o(30758),
    a = o(86070);
   const d = (0, r.createContext)({}),
    c = ({ title: e, appearance: n, description: o, children: r, figure: c }) => {
     const v = { do: 'Doen', dont: 'Niet doen' },
      h = c ? 'figure' : 'div',
      m = c ? 'figcaption' : 'div';
     return (0, a.jsxs)(h, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(i.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: v.dont })] }), (0, a.jsx)(t.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: v.do })] }), (0, a.jsx)(t.fz, { children: e })] }), o] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: v[n] }, children: r }) })] });
    };
  },
  52757: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => d, contentTitle: () => a, default: () => h, frontMatter: () => r, metadata: () => l, toc: () => c });
   const l = JSON.parse('{"id":"richtlijnen/content/video/flitsen","title":"Flitsen in video \xb7 Video \xb7 Content \xb7 Richtlijnen","description":"Richtlijnen voor flitsen in video binnen NL Design System","source":"@site/docs/richtlijnen/content/video/flitsen.md","sourceDirName":"richtlijnen/content/video","slug":"/richtlijnen/content/video/flitsen","permalink":"/richtlijnen/content/video/flitsen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/video/flitsen.md","tags":[],"version":"current","frontMatter":{"title":"Flitsen in video \xb7 Video \xb7 Content \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Flitsen","pagination_label":"Flitsen","description":"Richtlijnen voor flitsen in video binnen NL Design System","slug":"/richtlijnen/content/video/flitsen","keywords":["video","YouTube","Vimeo","flitsen","epilepsie","epileptische aanval"]},"sidebar":"richtlijnen","previous":{"title":"Video beschrijving","permalink":"/richtlijnen/content/video/beschrijving"},"next":{"title":"Gebarentaal","permalink":"/richtlijnen/content/video/gebarentaal"}}');
   var i = o(86070),
    t = o(85248),
    s = (o(8649), o(50124), o(78734));
   const r = { title: 'Flitsen in video \xb7 Video \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Flitsen', pagination_label: 'Flitsen', description: 'Richtlijnen voor flitsen in video binnen NL Design System', slug: '/richtlijnen/content/video/flitsen', keywords: ['video', 'YouTube', 'Vimeo', 'flitsen', 'epilepsie', 'epileptische aanval'] },
    a = 'Flitsen in video',
    d = {},
    c = [{ value: 'Wie heeft last van flitsen?', id: 'wie-heeft-last-van-flitsen', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Flitsen voorkomen', id: 'flitsen-voorkomen', level: 2 }, { value: 'Voor en tijdens het opnemen van de video', id: 'voor-en-tijdens-het-opnemen-van-de-video', level: 3 }, { value: 'Bij en na het monteren van de video', id: 'bij-en-na-het-monteren-van-de-video', level: 3 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function v(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'flitsen-in-video', children: 'Flitsen in video' }) }), '\n', (0, i.jsx)(n.p, { children: 'Een flits is een kort moment van licht dat plotseling verschijnt en weer verdwijnt. Flitsen kunnen fysieke klachten veroorzaken bij mensen die daar gevoelig voor zijn. Voorkom daarom zo veel mogelijk dat er flitsen voorkomen in je video.' }), '\n', (0, i.jsx)(n.h2, { id: 'wie-heeft-last-van-flitsen', children: 'Wie heeft last van flitsen?' }), '\n', (0, i.jsx)(n.p, { children: 'Wanneer er in een hele korte tijd meerdere flitsen voorkomen in een video, kan dit een epileptische aanval uitlokken bij mensen die daar gevoelig voor zijn. Daarnaast kunnen mensen door flitsen hoofdpijn of migraine krijgen en er misselijk van worden.' }), '\n', (0, i.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, i.jsx)(n.p, { children: 'Een flits ontstaat door een plotselinge overgang van donker (lage helderheid) naar licht (hoge helderheid), of andersom. Voorbeelden hiervan die in een video kunnen voorkomen zijn onder andere:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Stroboscopisch licht, bijvoorbeeld tijdens concerten of voor dramatisch effect in een film.' }), '\n', (0, i.jsx)(n.li, { children: 'Camera-flitsen.' }), '\n', (0, i.jsx)(n.li, { children: 'Explosies.' }), '\n', (0, i.jsx)(n.li, { children: 'Vuurwerk.' }), '\n', (0, i.jsx)(n.li, { children: 'Knipperende teksten.' }), '\n', (0, i.jsx)(n.li, { children: 'Reflecties en schitteringen, bijvoorbeeld in een spiegel of door de zon op stilstaand water.' }), '\n', (0, i.jsx)(n.li, { children: 'Snel wisselende overgangen van scenes met een groot kleurcontrast.' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'flitsen-voorkomen', children: 'Flitsen voorkomen' }), '\n', (0, i.jsx)(n.p, { children: 'De makkelijkste manier om flitsen in een video te voorkomen is natuurlijk door geen opnames te maken waar flitsen in voor komen. Maar het is niet altijd te voorspellen of iets op beeld een flits veroorzaakt.' }), '\n', (0, i.jsx)(n.p, { children: 'Er zijn wel een aantal dingen die je zelf kunt doen om er voor te zorgen dat je video geen overgangen van donker naar licht (of andersom) bevat die schadelijk kunnen zijn voor mensen die daar gevoelig voor zijn.' }), '\n', (0, i.jsx)(n.h3, { id: 'voor-en-tijdens-het-opnemen-van-de-video', children: 'Voor en tijdens het opnemen van de video' }), '\n', (0, i.jsx)(n.p, { children: 'Let voorafgaand en tijdens het opnemen van je video op:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Knipperende en flitsende lichtbronnen, zoals de eerder genoemde voorbeelden.' }), '\n', (0, i.jsx)(n.li, { children: 'Led-, neon- en TL-verlichting. Afhankelijk van je camera kan deze verlichting knipper-effecten in de opname veroorzaken.' }), '\n', (0, i.jsx)(n.li, { children: 'Kleur en licht. Gebruik waar mogelijk rustige achtergronden en vermijd fel licht.' }), '\n'] }), '\n', (0, i.jsx)(n.h3, { id: 'bij-en-na-het-monteren-van-de-video', children: 'Bij en na het monteren van de video' }), '\n', (0, i.jsx)(n.p, { children: 'Ook tijdens en na het monteren kun je een aantal stappen nemen om flitsen te voorkomen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Maak gebruik van rustige overgangen tussen sc\xe8nes die sterk van kleur verschillen, bijvoorbeeld wanneer je van een zwart scherm naar een beeld met veel licht schakelt.' }), '\n', (0, i.jsx)(n.li, { children: 'Laat beeld met mogelijke flitsen niet het hele beeld in beslag nemen. Hoe minder ruimte de flits in beslag neemt, hoe kleiner de kans dat de flits fysieke problemen veroorzaakt.' }), '\n', (0, i.jsxs)(n.li, { children: ['Controleer je video met de ', (0, i.jsx)(n.a, { href: 'https://trace.umd.edu/peat/', children: 'PEAT analyse-tool' }), '. Dit is gratis software die flitsen boven een bepaalde schadelijke grenswaarde detecteert.'] }), '\n', (0, i.jsx)(n.li, { children: 'Controleer je video in de grootst mogelijke aangeboden weergave. Kan de bezoeker de video in fullscreen modus bekijken? Dan controleer je de video in die modus.' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Is het helemaal niet mogelijk om een mogelijke flits te voorkomen? Voeg dan een waarschuwing toe, zodat bezoekers ervoor kunnen kiezen om de video niet verder te kijken.' }), '\n', (0, i.jsxs)(n.p, { children: ['Let wel op: Bevat je video meerdere flitsen in een hele korte tijd? Dan is het toevoegen van een waarschuwing niet voldoende om te voldoen aan ', (0, i.jsx)(n.a, { href: '/wcag/2.3.1/', children: 'succescriterium 2.3.1 Drie flitsen beneden drempelwaarde' }), '.'] }), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsx)(n.p, { children: 'Controleer iedere video. Gebruik hierbij de onderstaande stappen als checklist:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Bekijk de video in de grootst mogelijke aangeboden weergave. Bevat de video mogelijke flitsen?' }), '\n', (0, i.jsx)(n.li, { children: 'Zo ja, controleer de video dan met een analyse tool.' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, i.jsx)(n.p, { children: "Op de WCAG-succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/2.3.1/', children: 'Succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/2.3.2/', children: 'Succescriterium 2.3.2 Drie flitsen' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/2.3.3/', children: 'Succescriterium 2.3.3 Animatie uit interacties' }) }), '\n'] }), '\n', (0, i.jsx)(s.Ay, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(v, { ...e }) }) : v(e);
   }
  },
  78734: (e, n, o) => {
   o.d(n, { Ay: () => r, RM: () => t });
   var l = o(86070),
    i = o(85248);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, o) => {
   o.d(n, { R: () => s, x: () => r });
   var l = o(30758);
   const i = {},
    t = l.createContext(i);
   function s(e) {
    const n = l.useContext(t);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), l.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
