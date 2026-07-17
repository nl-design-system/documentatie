'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [55579],
 {
  9386(e, n, t) {
   t.d(n, { H: () => x });
   var l = t(95822),
    s = t(46447),
    r = t(13526),
    o = t(68148),
    a = t(9016),
    i = t(69303),
    d = t(91635),
    c = t(30734),
    k = t(30758),
    u = t(31186),
    p = t(65904),
    h = t.n(p),
    g = t(51627),
    m = t(86070);
   const j = ({ children: e }) => (0, m.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, m.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, m.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const x = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const t = 'function' == typeof e ? e() : e,
        l = (0, u.qV)(t)
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
        s = h().highlight(l, h().languages[n], n);
       return (0, m.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, m.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: l } }), (0, m.jsx)(g.n, { children: (0, m.jsx)(g.K, { label: 'Code', children: (0, m.jsx)('pre', { className: 'language-html nl-code-block', children: (0, m.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: s } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: p = !0, children: h, container: g = 'document', language: x, designTokens: y }) => {
       const f = 'function' == typeof h ? h() : h,
        _ = 'function' == typeof e ? e() : (0, k.isValidElement)(e) ? e : void 0,
        z = 'string' == typeof e ? e : u.qV(_ || f),
        [w, A] = (0, k.useState)(z),
        [N, C] = (0, k.useState)(t);
       (0, k.useEffect)(() => {
        (async () => {
         const e = await c.Ay.format(z, { parser: x, plugins: [o.A, a.Ay, i.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [z]);
       const S = (0, k.useId)();
       let L = k.Fragment;
       return (
        'paragraph' === g ? (L = j) : 'document' === g ? (L = b) : 'surface' === g && (L = v),
        (0, m.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          f && (0, m.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, m.jsx)(L, { children: (0, m.jsx)(s.v$, { children: f }) }) }) }),
          p &&
           (0, m.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, m.jsx)(s.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!N);
             },
             'aria-expanded': N,
             'aria-controls': S,
             children: N ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, m.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !N,
            children: [
             (0, m.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: w, trim: !0 }),
             n &&
              (0, m.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, m.jsx)(s.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  13334(e, n, t) {
   (t.r(n), t.d(n, { assets: () => k, contentTitle: () => c, default: () => h, frontMatter: () => d, metadata: () => l, toc: () => u }));
   const l = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/emphasize-text","title":"Tekst benadrukken","description":"Leg nadruk op woorden of zinsdelen door ze dikgedrukt (bold) of schuingedrukt (italic) te maken.","source":"@site/docs/richtlijnen/content/tekstopmaak/emphasize-text.mdx","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak/tekst-benadrukken","permalink":"/richtlijnen/content/tekstopmaak/tekst-benadrukken","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/emphasize-text.mdx","tags":[],"version":"current","frontMatter":{"title":"Tekst benadrukken","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Tekst benadrukken","pagination_label":"Tekst benadrukken","description":"Leg nadruk op woorden of zinsdelen door ze dikgedrukt (bold) of schuingedrukt (italic) te maken.","slug":"/richtlijnen/content/tekstopmaak/tekst-benadrukken","keywords":["semantiek","tekstopmaak","structuur","tekststructuur","dikgedrukt","schuingedrukt","strong","em","bold","italic"]},"sidebar":"richtlijnen","previous":{"title":"Kleurgebruik in tekst","permalink":"/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst"},"next":{"title":"Koppen","permalink":"/richtlijnen/content/tekstopmaak/koppen"}}');
   var s = t(86070),
    r = t(18439),
    o = t(9386),
    a = t(88022),
    i = t(78734);
   const d = { title: 'Tekst benadrukken', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Tekst benadrukken', pagination_label: 'Tekst benadrukken', description: 'Leg nadruk op woorden of zinsdelen door ze dikgedrukt (bold) of schuingedrukt (italic) te maken.', slug: '/richtlijnen/content/tekstopmaak/tekst-benadrukken', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'dikgedrukt', 'schuingedrukt', 'strong', 'em', 'bold', 'italic'] },
    c = 'Tekst benadrukken',
    k = {},
    u = [{ value: 'Dikgedrukt en schuingedrukt', id: 'dikgedrukt-en-schuingedrukt', level: 2 }, { value: 'ALL CAPS-tekst', id: 'all-caps-tekst', level: 2 }, { value: 'Onderstrepen', id: 'onderstrepen', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'tekst-benadrukken', children: 'Tekst benadrukken' }) }), '\n', (0, s.jsx)(n.p, { children: 'Soms wil je iets extra laten opvallen in je tekst. Bijvoorbeeld een kernwoord, een belangrijke waarschuwing of een tussenkopje in lopende tekst. Dat kan, zolang je het op een toegankelijke manier doet.' }), '\n', (0, s.jsxs)(n.p, { children: ['Niet alle manieren om nadruk te geven werken voor iedereen. Hoofdletters, onderstreping of kleur kunnen verwarrend zijn of juist het tegenovergestelde bereiken van wat je bedoelt. Door te kiezen voor herkenbare en toegankelijke opmaak, zorg je dat je boodschap bij iedereen overkomt \u2014 ook bij mensen die gebruikmaken van een ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' of een aangepaste weergave.'] }), '\n', (0, s.jsx)(n.p, { children: 'Op deze pagina lees je hoe je tekst op een toegankelijke manier benadrukt, en wat je beter kunt vermijden.' }), '\n', (0, s.jsx)(n.h2, { id: 'dikgedrukt-en-schuingedrukt', children: 'Dikgedrukt en schuingedrukt' }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt woorden of zinsdelen benadrukken door ze vet of schuingedrukt te maken.' }), '\n', (0, s.jsxs)(n.p, { children: ['Bij goed gebruik van een CMS wordt de vette of schuingedrukte tekst in ', (0, s.jsx)(n.a, { href: '/strong/', children: (0, s.jsx)(n.code, { children: 'strong' }) }), ' en ', (0, s.jsx)(n.code, { children: 'em' }), ' elementen geplaatst. Met deze elementen in de code is de nadruk ook duidelijk voor gebruikers van hulptechnologie.'] }), '\n', (0, s.jsx)(n.p, { children: "Als contentspecialist werk je meestal in een contentmanagementsysteem (CMS). Veel CMS'en bieden de mogelijkheid om met knoppen vette of schuingedrukte tekst toe te voegen. Vaak hebben de knoppen voor vette tekst of schuingedrukte tekst de letter B (bold) of I (italic)." }), '\n', (0, s.jsx)(n.p, { children: 'Door deze knoppen in een CMS te gebruiken, verander je de visuele opmaak \xe9n de onderliggende code.' }), '\n', (0, s.jsx)(a.$, { appearance: 'do', title: 'vette tekst gebruiken om een deel van de zin extra belangrijk te maken.', children: (0, s.jsx)(o.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)('p', { children: ['Je kunt op eigen gelegenheid oversteken. ', (0, s.jsx)('strong', { children: 'Pas op!' }), ' Dit is ', (0, s.jsx)('strong', { children: 'erg gevaarlijk' })] }) }) }) }), '\n', (0, s.jsx)(a.$, { appearance: 'do', title: 'schuingedrukte tekst gebruiken om de betekenis van de zin aan te passen.', children: (0, s.jsx)(o.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)('p', { children: [(0, s.jsx)('em', { children: 'Moet' }), ' ik dit nu doen? of Moet ', (0, s.jsx)('em', { children: 'ik' }), ' dit nu doen?'] }) }) }) }), '\n', (0, s.jsx)(a.$, { appearance: 'dont', title: 'Hele alinea vet maken omdat je dat mooier vindt.', children: (0, s.jsx)(o.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsx)('p', { children: (0, s.jsx)('strong', { children: 'Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. De neptekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een neptekst gaat, lezen ze toch door.' }) }) }) }) }), '\n', (0, s.jsx)(n.h2, { id: 'all-caps-tekst', children: 'ALL CAPS-tekst' }), '\n', (0, s.jsx)(n.p, { children: 'Probeer het gebruik van \u2018ALL CAPS\u2019, wat hetzelfde betekent als all\xe9\xe9n hoofdletters, tot een minimum te beperken. We herkennen letters aan hun vorm en dan met name de bovenkant van een letter. Eigenlijk maakt je oog steeds sprongetjes aan de bovenkant van een woord. Bij all caps is het onderscheid in lettervorm minder duidelijk, dit vertraagt het lezen.' }), '\n', (0, s.jsx)(a.$, { appearance: 'do', title: 'Beperkt gebruik maken van all caps', children: (0, s.jsx)(o.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: 'Als je in de HTML all caps gebruikt lezen screenreaders dit vaak voor als losse letters. Geen probleem bij bijvoorbeeld FBI of NBA maar bij VOORNAAM of NIEUWS wordt dat wel heel vreemd.' }), (0, s.jsx)('p', { children: 'Daarnaast geeft het ook een gevoel van \u2018schreeuwen\u2019. Over het algemeen niet het gevoel dat je wilt overbrengen op de lezer toch\u2026 TOCH?!' })] }) }) }), '\n', (0, s.jsx)(n.h2, { id: 'onderstrepen', children: 'Onderstrepen' }), '\n', (0, s.jsx)(n.p, { children: 'Onderstreep tekst niet. Bezoekers verwachten dat onderstreepte woorden in een zin links zijn waar ze op kunnen klikken.' }), '\n', (0, s.jsx)(a.$, { appearance: 'dont', title: 'Tekst onderstrepen', children: (0, s.jsx)(o.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)('p', { children: ['Gebruik geen ', (0, s.jsx)('u', { children: 'underline' }), '. Bezoekers verwachten dat onderstreepte tekst een ', (0, s.jsx)('a', { href: '', children: 'link' }), ' is.'] }) }) }) }), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsx)(n.p, { children: 'Lees de pagina goed door en kijk naar alle teksten die opvallen door hun uiterlijk. Bepaal of de nadruk daar \xe9cht nodig is en of de teksten met nadruk op de goede manier opgemaakt zijn. Gebruik de onderstaande stappen als checklist:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Controleer of nadruk is aangebracht via de opmaakknoppen in het CMS (zoals \u201cvet\u201d of \u201ccursief\u201d), en niet door zelf iets op te maken met bijvoorbeeld hoofdletters of kleur.\nAlleen dan wordt de nadruk correct doorgegeven aan hulptechnologie zoals screenreaders.' }), '\n', (0, s.jsx)(n.li, { children: 'Loop alle teksten in hoofdletters na. Vraag jezelf bij elk geval af: is dit echt nodig?\nGebruik hoofdletters alleen als ze functioneel zijn (bijvoorbeeld bij afkortingen).' }), '\n', (0, s.jsx)(n.li, { children: 'Bekijk of er ergens onderstreepte tekst staat die geen link is.\nOnderstreping suggereert een hyperlink. Als de tekst geen link is, haal de onderstreping weg.' }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n'] }), '\n', (0, s.jsx)(i.Ay, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => a });
   var l = t(30758);
   const s = {},
    r = l.createContext(s);
   function o(e) {
    const n = l.useContext(r);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), l.createElement(r.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, t) {
   t.d(n, { K: () => i, n: () => a });
   var l = t(13526),
    s = t(96345),
    r = t(37168),
    o = t(86070);
   const a = ({ className: e, ...n }) => {
     const t = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, o.jsx)('div', { className: t, children: n.children });
    },
    i = ({ className: e, label: n, heading: t, headingLevel: a, headingApperance: i, ...d }) => {
     const c = (0, l.A)('utrecht-accordion__section', e);
     return (0, o.jsxs)('details', { className: c, ...d, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(s.A, {}) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [t && (0, o.jsx)(r.D, { level: a, appearance: i, children: t }), n] })] }) }), (0, o.jsx)('div', { className: 'utrecht-accordion__panel', children: d.children })] });
    };
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => r });
   var l = t(86070),
    s = t(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(o, { ...e }) }) : o(e);
   }
  },
  88022(e, n, t) {
   t.d(n, { $: () => k, x: () => c });
   var l = t(4077),
    s = t(58315),
    r = t(46447),
    o = t(13526),
    a = t(45980),
    i = t(30758),
    d = t(86070);
   const c = (0, i.createContext)({}),
    k = ({ title: e, appearance: n, description: t, children: i, figure: k }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      p = k ? 'figure' : 'div',
      h = k ? 'figcaption' : 'div',
      g = 'string' == typeof t ? (0, d.jsx)(a.oz, { children: t }) : t;
     return (0, d.jsxs)(p, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, d.jsx)(r.fz, { children: e })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, d.jsx)(r.fz, { children: e })] }), g] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(c.Provider, { value: { title: e, type: u[n] }, children: i }) })] });
    };
  },
  95822(e, n, t) {
   t.d(n, { M: () => d });
   var l = t(46447),
    s = t(16194),
    r = t(30758),
    o = t(88022);
   const a = {
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
   var i = t(86070);
   function d({ lineNumber: e, syntax: n, textContent: t, trim: d }) {
    let c = t;
    const { title: k, type: u } = (0, r.useContext)(o.x),
     p = (0, r.useId)();
    return (d && (c = c.trim()), (0, i.jsx)(s.f4, { theme: a, code: c, language: n || '', children: ({ style: n, tokens: t, getLineProps: s, getTokenProps: r }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', k ? ': ' : ' ', k] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: k ? 'region' : void 0, 'aria-labelledby': p, style: n, children: t.map((n, t) => (0, i.jsxs)('span', { ...s({ line: n }), children: [e && (0, i.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
 },
]);
