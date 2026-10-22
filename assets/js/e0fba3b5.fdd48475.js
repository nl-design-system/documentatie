'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [55579],
 {
  14881(e, n, t) {
   t.d(n, { K: () => c, n: () => i });
   var s = t(13526),
    l = t(30758),
    o = t(30662),
    r = t(32065),
    a = t(37168),
    d = t(86070);
   const i = (0, l.forwardRef)(({ as: e, className: n, children: t, ...l }, o) => {
     const r = e || 'div',
      a = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, d.jsx)(r, { ref: o, className: a, ...l, children: t });
    }),
    c = ({ className: e, classNamePanel: n, label: t, heading: l, headingLevel: i, headingApperance: c, ...h }) => {
     const k = (0, s.A)('utrecht-accordion__section', e),
      u = (0, s.A)('utrecht-accordion__panel', n);
     return (0, d.jsxs)('details', { className: k, ...h, children: [(0, d.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, d.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, d.jsx)('span', { className: 'nl-button__icon-start', children: (0, d.jsx)(r.I, { children: (0, d.jsx)(o.rI, {}) }) }), (0, d.jsxs)('span', { className: 'nl-button__label', children: [l && (0, d.jsx)(a.D, { level: i, appearance: c, children: l }), t] })] }) }), (0, d.jsx)('div', { className: u, children: h.children })] });
    };
  },
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => a });
   var s = t(30758);
   const l = {},
    o = s.createContext(l);
   function r(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : r(e.components)), s.createElement(o.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, t) {
   t.d(n, { M: () => i });
   var s = t(46447),
    l = t(16194),
    o = t(30758),
    r = t(56528);
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
   var d = t(86070);
   function i({ lineNumber: e, syntax: n, textContent: t, trim: i }) {
    let c = t;
    const { title: h, type: k } = (0, o.useContext)(r.x),
     u = (0, o.useId)();
    return (i && (c = c.trim()), (0, d.jsx)(l.f4, { theme: a, code: c, language: n || '', children: ({ style: n, tokens: t, getLineProps: l, getTokenProps: o }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', k ? `\u201c${k}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, d.jsx)(s.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: n, children: t.map((n, t) => (0, d.jsxs)('span', { ...l({ line: n }), children: [e && (0, d.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, d.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  29043(e, n, t) {
   (t.r(n), t.d(n, { assets: () => h, contentTitle: () => c, default: () => p, frontMatter: () => i, metadata: () => s, toc: () => k }));
   const s = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/emphasize-text","title":"Tekst benadrukken","description":"Leg nadruk op woorden of zinsdelen door ze dikgedrukt (bold) of schuingedrukt (italic) te maken.","source":"@site/docs/richtlijnen/content/tekstopmaak/emphasize-text.mdx","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak/tekst-benadrukken","permalink":"/richtlijnen/content/tekstopmaak/tekst-benadrukken","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/emphasize-text.mdx","tags":[],"version":"current","frontMatter":{"title":"Tekst benadrukken","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Tekst benadrukken","pagination_label":"Tekst benadrukken","description":"Leg nadruk op woorden of zinsdelen door ze dikgedrukt (bold) of schuingedrukt (italic) te maken.","slug":"/richtlijnen/content/tekstopmaak/tekst-benadrukken","keywords":["semantiek","tekstopmaak","structuur","tekststructuur","dikgedrukt","schuingedrukt","strong","em","bold","italic"]},"sidebar":"richtlijnen","previous":{"title":"Kleurgebruik in tekst","permalink":"/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst"},"next":{"title":"Koppen","permalink":"/richtlijnen/content/tekstopmaak/koppen"}}');
   var l = t(86070),
    o = t(18439),
    r = t(87682),
    a = t(56528),
    d = t(56672);
   const i = { title: 'Tekst benadrukken', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Tekst benadrukken', pagination_label: 'Tekst benadrukken', description: 'Leg nadruk op woorden of zinsdelen door ze dikgedrukt (bold) of schuingedrukt (italic) te maken.', slug: '/richtlijnen/content/tekstopmaak/tekst-benadrukken', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'dikgedrukt', 'schuingedrukt', 'strong', 'em', 'bold', 'italic'] },
    c = 'Tekst benadrukken',
    h = {},
    k = [{ value: 'Dikgedrukt en schuingedrukt', id: 'dikgedrukt-en-schuingedrukt', level: 2 }, { value: 'ALL CAPS-tekst', id: 'all-caps-tekst', level: 2 }, { value: 'Onderstrepen', id: 'onderstrepen', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...d.RM];
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'tekst-benadrukken', children: 'Tekst benadrukken' }) }), '\n', (0, l.jsx)(n.p, { children: 'Soms wil je iets extra laten opvallen in je tekst. Bijvoorbeeld een kernwoord, een belangrijke waarschuwing of een tussenkopje in lopende tekst. Dat kan, zolang je het op een toegankelijke manier doet.' }), '\n', (0, l.jsxs)(n.p, { children: ['Niet alle manieren om nadruk te geven werken voor iedereen. Hoofdletters, onderstreping of kleur kunnen verwarrend zijn of juist het tegenovergestelde bereiken van wat je bedoelt. Door te kiezen voor herkenbare en toegankelijke opmaak, zorg je dat je boodschap bij iedereen overkomt \u2014 ook bij mensen die gebruikmaken van een ', (0, l.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' of een aangepaste weergave.'] }), '\n', (0, l.jsx)(n.p, { children: 'Op deze pagina lees je hoe je tekst op een toegankelijke manier benadrukt, en wat je beter kunt vermijden.' }), '\n', (0, l.jsx)(n.h2, { id: 'dikgedrukt-en-schuingedrukt', children: 'Dikgedrukt en schuingedrukt' }), '\n', (0, l.jsx)(n.p, { children: 'Je kunt woorden of zinsdelen benadrukken door ze vet of schuingedrukt te maken.' }), '\n', (0, l.jsxs)(n.p, { children: ['Bij goed gebruik van een CMS wordt de vette of schuingedrukte tekst in ', (0, l.jsx)(n.a, { href: '/strong/', children: (0, l.jsx)(n.code, { children: 'strong' }) }), ' en ', (0, l.jsx)(n.code, { children: 'em' }), ' elementen geplaatst. Met deze elementen in de code is de nadruk ook duidelijk voor gebruikers van hulptechnologie.'] }), '\n', (0, l.jsx)(n.p, { children: "Als contentspecialist werk je meestal in een contentmanagementsysteem (CMS). Veel CMS'en bieden de mogelijkheid om met knoppen vette of schuingedrukte tekst toe te voegen. Vaak hebben de knoppen voor vette tekst of schuingedrukte tekst de letter B (bold) of I (italic)." }), '\n', (0, l.jsx)(n.p, { children: 'Door deze knoppen in een CMS te gebruiken, verander je de visuele opmaak \xe9n de onderliggende code.' }), '\n', (0, l.jsx)(a.$, { appearance: 'do', title: 'vette tekst gebruiken om een deel van de zin extra belangrijk te maken.', children: (0, l.jsx)(r.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)('p', { children: ['Je kunt op eigen gelegenheid oversteken. ', (0, l.jsx)('strong', { children: 'Pas op!' }), ' Dit is ', (0, l.jsx)('strong', { children: 'erg gevaarlijk' })] }) }) }) }), '\n', (0, l.jsx)(a.$, { appearance: 'do', title: 'schuingedrukte tekst gebruiken om de betekenis van de zin aan te passen.', children: (0, l.jsx)(r.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)('p', { children: [(0, l.jsx)('em', { children: 'Moet' }), ' ik dit nu doen? of Moet ', (0, l.jsx)('em', { children: 'ik' }), ' dit nu doen?'] }) }) }) }), '\n', (0, l.jsx)(a.$, { appearance: 'dont', title: 'Hele alinea vet maken omdat je dat mooier vindt.', children: (0, l.jsx)(r.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsx)('p', { children: (0, l.jsx)('strong', { children: 'Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. De neptekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een neptekst gaat, lezen ze toch door.' }) }) }) }) }), '\n', (0, l.jsx)(n.h2, { id: 'all-caps-tekst', children: 'ALL CAPS-tekst' }), '\n', (0, l.jsx)(n.p, { children: 'Probeer het gebruik van \u2018ALL CAPS\u2019, wat hetzelfde betekent als all\xe9\xe9n hoofdletters, tot een minimum te beperken. We herkennen letters aan hun vorm en dan met name de bovenkant van een letter. Eigenlijk maakt je oog steeds sprongetjes aan de bovenkant van een woord. Bij all caps is het onderscheid in lettervorm minder duidelijk, dit vertraagt het lezen.' }), '\n', (0, l.jsx)(a.$, { appearance: 'do', title: 'Beperkt gebruik maken van all caps', children: (0, l.jsx)(r.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('p', { children: 'Als je in de HTML all caps gebruikt lezen screenreaders dit vaak voor als losse letters. Geen probleem bij bijvoorbeeld FBI of NBA maar bij VOORNAAM of NIEUWS wordt dat wel heel vreemd.' }), (0, l.jsx)('p', { children: 'Daarnaast geeft het ook een gevoel van \u2018schreeuwen\u2019. Over het algemeen niet het gevoel dat je wilt overbrengen op de lezer toch\u2026 TOCH?!' })] }) }) }), '\n', (0, l.jsx)(n.h2, { id: 'onderstrepen', children: 'Onderstrepen' }), '\n', (0, l.jsx)(n.p, { children: 'Onderstreep tekst niet. Bezoekers verwachten dat onderstreepte woorden in een zin links zijn waar ze op kunnen klikken.' }), '\n', (0, l.jsx)(a.$, { appearance: 'dont', title: 'Tekst onderstrepen', children: (0, l.jsx)(r.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)('p', { children: ['Gebruik geen ', (0, l.jsx)('u', { children: 'underline' }), '. Bezoekers verwachten dat onderstreepte tekst een ', (0, l.jsx)('a', { href: '', children: 'link' }), ' is.'] }) }) }) }), '\n', (0, l.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, l.jsx)(n.p, { children: 'Lees de pagina goed door en kijk naar alle teksten die opvallen door hun uiterlijk. Bepaal of de nadruk daar \xe9cht nodig is en of de teksten met nadruk op de goede manier opgemaakt zijn. Gebruik de onderstaande stappen als checklist:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: 'Controleer of nadruk is aangebracht via de opmaakknoppen in het CMS (zoals \u201cvet\u201d of \u201ccursief\u201d), en niet door zelf iets op te maken met bijvoorbeeld hoofdletters of kleur.\nAlleen dan wordt de nadruk correct doorgegeven aan hulptechnologie zoals screenreaders.' }), '\n', (0, l.jsx)(n.li, { children: 'Loop alle teksten in hoofdletters na. Vraag jezelf bij elk geval af: is dit echt nodig?\nGebruik hoofdletters alleen als ze functioneel zijn (bijvoorbeeld bij afkortingen).' }), '\n', (0, l.jsx)(n.li, { children: 'Bekijk of er ergens onderstreepte tekst staat die geen link is.\nOnderstreping suggereert een hyperlink. Als de tekst geen link is, haal de onderstreping weg.' }), '\n'] }), '\n', (0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n'] }), '\n', (0, l.jsx)(d.Ay, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(u, { ...e }) }) : u(e);
   }
  },
  30662(e, n, t) {
   t.d(n, { D4: () => H, GP: () => A, KC: () => P, Nd: () => _, Rt: () => C, Vj: () => N, Wk: () => $, bz: () => w, cB: () => S, e5: () => B, hY: () => D, jK: () => T, jP: () => M, ob: () => O, rI: () => z, t4: () => I, vP: () => L, vg: () => F });
   var s = t(92081),
    l = t(90578),
    o = t(96345),
    r = t(64249),
    a = t(4603),
    d = t(91525),
    i = t(23436),
    c = t(1375),
    h = t(4077),
    k = t(58315),
    u = t(73563),
    p = t(35193),
    m = t(82999),
    g = t(13088),
    j = t(43864),
    b = t(24214),
    v = t(79532),
    x = t(60529),
    y = t(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, y.jsx)(s.A, { ...f }),
    A = () => (0, y.jsx)(l.A, { ...f }),
    z = () => (0, y.jsx)(o.A, { ...f }),
    N = () => (0, y.jsx)(r.A, { ...f }),
    w = () => (0, y.jsx)(a.A, { ...f }),
    C = () => (0, y.jsx)(d.A, { ...f }),
    S = () => (0, y.jsx)(i.A, { ...f }),
    L = () => (0, y.jsx)(c.A, { ...f }),
    T = () => (0, y.jsx)(h.A, { ...f }),
    M = () => (0, y.jsx)(k.A, { ...f }),
    I = () => (0, y.jsx)(u.A, { ...f }),
    H = () => (0, y.jsx)(p.A, { ...f }),
    D = () => (0, y.jsx)(m.A, { ...f }),
    P = () => (0, y.jsx)(g.A, { ...f }),
    $ = () => (0, y.jsx)(j.A, { ...f }),
    B = () => (0, y.jsx)(b.A, { ...f }),
    O = () => (0, y.jsx)(v.A, { ...f }),
    F = () => (0, y.jsx)(x.A, { ...f });
  },
  32065(e, n, t) {
   t.d(n, { I: () => s.In });
   var s = t(29181);
  },
  46847(e, n, t) {
   t.d(n, { $: () => s.$n });
   var s = t(50805);
  },
  56528(e, n, t) {
   t.d(n, { $: () => c, x: () => i });
   var s = t(30662),
    l = t(46447),
    o = t(13526),
    r = t(45795),
    a = t(30758),
    d = t(86070);
   const i = (0, a.createContext)({}),
    c = ({ title: e, appearance: n, description: t, children: a, figure: c = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      k = c ? 'figure' : 'div',
      u = c ? 'figcaption' : 'div',
      p = 'string' == typeof t ? (0, d.jsx)(r.oz, { components: { a: l.N_ }, children: t }) : t;
     return (0, d.jsxs)(k, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, d.jsx)(s.jP, {}) }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, d.jsx)(l.fz, { children: e })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, d.jsx)(s.jK, {}) }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, d.jsx)(l.fz, { children: e })] }), p] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(i.Provider, { value: { title: e, type: h[n] }, children: a }) })] });
    };
  },
  56672(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => o });
   var s = t(86070),
    l = t(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  87682(e, n, t) {
   t.d(n, { H: () => _ });
   var s = t(28369),
    l = t(46447),
    o = t(13526),
    r = t(68148),
    a = t(9016),
    d = t(69303),
    i = t(91635),
    c = t(30734),
    h = t(30758),
    k = t(31186),
    u = t(65904),
    p = t.n(u),
    m = t(14881),
    g = t(46847),
    j = t(86070);
   const b = ({ label: e, labelId: n, className: t, colorScheme: s, forcedColorsAdjust: l = !1, children: r, dangerouslySetInnerHTML: a, ...d }) => (0, j.jsxs)('figure', { className: (0, o.A)('ma-html-image', t), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...d, children: [e && (0, j.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, j.jsx)('div', { className: (0, o.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === s, 'ma-html-image__body--color-scheme-light': 'light' === s, 'ma-html-image__body--forced-colors-adjust': l }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: r })] });
   var v = t(68197);
   const x = ({ children: e }) => (0, j.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, j.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, j.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: s, copyCode: l, colorScheme: r, defaultExpandedCode: a, designTokens: d, forcedColorsAdjust: i = !0, label: c }) => {
       const k = 'string' == typeof t ? t : s || '',
        u = 'string' == typeof t ? p().highlight(t, p().languages[e], e) : p().highlight(s || '', p().languages[e], e),
        x = (0, j.jsx)(v.b, { Component: 'div', className: (0, o.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: d, dangerouslySetInnerHTML: { __html: k } });
       return (0, j.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [c ? (0, j.jsx)(b, { forcedColorsAdjust: i, label: c, labelId: c ? (0, h.useId)() : void 0, children: x }) : x, (0, j.jsx)(m.n, { children: (0, j.jsxs)(m.K, { label: 'Code', open: a, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: u } }) }), 'allow' === l && (0, j.jsx)(g.$, { 'data-copy-code': k, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: u = !0, children: p, container: m = 'document', language: g, designTokens: b }) => {
       const v = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        A = 'string' == typeof e ? e : k.qV(_ || v),
        [z, N] = (0, h.useState)(A),
        [w, C] = (0, h.useState)(t);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await c.Ay.format(A, { parser: g, plugins: [r.A, a.Ay, d.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [A]);
       const S = (0, h.useId)();
       let L = h.Fragment;
       return (
        'paragraph' === m ? (L = x) : 'document' === m ? (L = y) : 'surface' === m && (L = f),
        (0, j.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          v && (0, j.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: b, children: (0, j.jsx)(L, { children: (0, j.jsx)(l.v$, { children: v }) }) }) }),
          u &&
           (0, j.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(l.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!w);
             },
             'aria-expanded': w,
             'aria-controls': S,
             children: w ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, j.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !w,
            children: [
             (0, j.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: z, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(l.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
 },
]);
