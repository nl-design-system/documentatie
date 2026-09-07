'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [93211],
 {
  18439(e, n, i) {
   i.d(n, { R: () => o, x: () => a });
   var t = i(30758);
   const r = {},
    s = t.createContext(r);
   function o(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), t.createElement(s.Provider, { value: n }, e.children));
   }
  },
  21530(e, n, i) {
   i.d(n, { AC: () => l, Fu: () => o, Wu: () => a, Zp: () => d });
   var t = i(46447),
    r = i(13526),
    s = i(86070);
   const o = ({ background: e, children: n, className: i, ...t }) => (0, s.jsx)('div', { className: (0, r.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, i), ...t, children: n }),
    a = (e) => (0, s.jsx)('div', { className: 'ma-card__content', ...e }),
    d = ({ href: e, appearance: n, className: i, component: o = 'div', background: a, children: d }) => {
     const l = (e) => ('article' === o ? (0, s.jsx)('article', { ...e }) : 'section' === o ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      c = (0, s.jsx)(l, { className: (0, r.A)('ma-cardgroup__card', a && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, i), children: d });
     return e ? (0, s.jsx)(t.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    l = ({ appearance: e = 'large', children: n, className: i }) => (0, s.jsx)('div', { className: (0, r.A)('ma-cardgroup', `ma-cardgroup--${e}`, i), children: n });
  },
  49561(e, n, i) {
   i.d(n, { Z: () => m });
   var t = i(86070),
    r = i(63009);
   function s(e) {
    var n,
     i,
     t = '';
    if ('string' == typeof e || 'number' == typeof e) t += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var r = e.length;
      for (n = 0; n < r; n++) e[n] && (i = s(e[n])) && (t && (t += ' '), (t += i));
     } else for (i in e) e[i] && (t && (t += ' '), (t += i));
    return t;
   }
   function o() {
    for (var e, n, i = 0, t = '', r = arguments.length; i < r; i++) (e = arguments[i]) && (n = s(e)) && (t && (t += ' '), (t += n));
    return t;
   }
   const a = ({ ref: e, children: n, className: i, inline: s, ...a }) => (0, t.jsx)(r.N, { ...a, className: o('rhc-link', { 'rhc-link--inline': s }, i), disabled: !1, ref: e, children: n });
   a.displayName = 'Link';
   var d = i(30758);
   function l(e) {
    var n,
     i,
     t = '';
    if ('string' == typeof e || 'number' == typeof e) t += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var r = e.length;
      for (n = 0; n < r; n++) e[n] && (i = l(e[n])) && (t && (t += ' '), (t += i));
     } else for (i in e) e[i] && (t && (t += ' '), (t += i));
    return t;
   }
   function c() {
    for (var e, n, i = 0, t = '', r = arguments.length; i < r; i++) (e = arguments[i]) && (n = l(e)) && (t && (t += ' '), (t += n));
    return t;
   }
   const h = ({ level: e = 2, children: n, ...i }) => {
     const t = `h${e}`;
     return d.createElement(t, i, n);
    },
    m = (0, d.forwardRef)(({ heading: e, headingLevel: n = 2, subheading: i, description: r, metadata: s, image: o, href: d, target: l, linkLabel: m, title: u, className: p, children: g, ...v }, j) => (0, t.jsxs)('div', { className: c('rhc-card', 'rhc-card--default', p), ref: j, ...v, children: [o && (0, t.jsx)('div', { className: 'rhc-card__image', children: o }), (0, t.jsxs)('div', { className: 'rhc-card__content', children: [(0, t.jsx)(h, { className: 'rhc-card__heading', level: n, children: d ? (0, t.jsx)(a, { className: 'rhc-card__link', href: d, target: l, title: u, children: e }) : e }), i && (0, t.jsx)('p', { className: 'rhc-card__subheading', children: i }), r && (0, t.jsx)('p', { className: 'rhc-card__description', children: r }), s && (0, t.jsx)('p', { className: 'rhc-card__metadata', children: s }), g] }), m && (0, t.jsx)('div', { className: 'rhc-card__footer', children: (0, t.jsx)('div', { className: 'rhc-card__link', 'data-testid': 'rhc-card__link', children: (0, t.jsx)(a, { href: d, target: l, title: u, children: m }) }) })] }));
   m.displayName = 'Card';
  },
  55133(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, contentTitle: () => l, default: () => u, frontMatter: () => d, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"handboek/developer/index","title":"NL Design System introductie voor developers","description":"Introductie voor developers","source":"@site/docs/handboek/developer/01-index.mdx","sourceDirName":"handboek/developer","slug":"/handboek/developer/introductie","permalink":"/handboek/developer/introductie","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/01-index.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"NL Design System introductie voor developers","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie","pagination_label":"Introductie","description":"Introductie voor developers","slug":"/handboek/developer/introductie","keywords":["introductie","developer","aan de slag","getting started"]},"sidebar":"handboek","previous":{"title":"Figma-bestanden overzicht","permalink":"/figma"},"next":{"title":"Introductie","permalink":"/handboek/developer/introductie"}}');
   var r = i(86070),
    s = i(18439),
    o = i(21530),
    a = i(49561);
   const d = { title: 'NL Design System introductie voor developers', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie', pagination_label: 'Introductie', description: 'Introductie voor developers', slug: '/handboek/developer/introductie', keywords: ['introductie', 'developer', 'aan de slag', 'getting started'] },
    l = 'Introductie voor developers',
    c = {},
    h = [
     { value: 'Community', id: 'community', level: 2 },
     { value: 'Aan de slag', id: 'aan-de-slag', level: 2 },
     { value: 'Huisstijl met design tokens', id: 'huisstijl-met-design-tokens', level: 2 },
     { value: 'Componenten', id: 'componenten', level: 2 },
     { value: 'Ecosysteem', id: 'ecosysteem', level: 2 },
    ];
   function m(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'introductie-voor-developers', children: 'Introductie voor developers' }) }), '\n', (0, r.jsx)(n.h2, { id: 'community', children: 'Community' }), '\n', (0, r.jsxs)(n.p, { children: ['Er zijn al veel developers die gebruik maken van NL Design System en actief bijdragen in de community. Dit gebeurt op ', (0, r.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ', in de ', (0, r.jsx)(n.a, { href: '/events/developer-open-hour/', children: 'Developer Open Hour' }), ', in de ', (0, r.jsx)(n.a, { href: '/community/community-sprints/rijkshuisstijl-community/', children: 'Rijkshuisstijl Community' }), ' en op ', (0, r.jsx)(n.a, { href: '/github/', children: 'GitHub' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['De leukste updates worden ook gedeeld in de tweewekelijkse ', (0, r.jsx)(n.a, { href: '/events/heartbeat/', children: 'Heartbeat' }), ' die je zelfs vanaf 2022 terug kunt kijken.'] }), '\n', (0, r.jsx)(n.h2, { id: 'aan-de-slag', children: 'Aan de slag' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System kun je gebruiken in prototypes of productie websites en webapplicaties met of zonder CMS.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System componenten zijn te gebruiken voor iedere huisstijl. Elke organisatie legt de eigen huisstijl vast met de Design Tokens JSON standaard en maakt deze beschikbaar voor hergebruik in Figma, code, websites en diverse webapplicaties.' }), '\n', (0, r.jsx)(n.p, { children: 'Combineer componenten van verschillende organisaties tot jouw perfecte oplossing. Design Systems en applicaties die met deze componenten gebouwd zijn kunnen zo makkelijk meerdere huisstijlen ondersteunen zonder de logica en toegankelijkheid van de componenten opnieuw te bouwen.' }), '\n', (0, r.jsxs)(o.AC, { children: [(0, r.jsx)(a.Z, { description: 'Bekijk de onboarding sessie voor developers op YouTube', heading: 'Onboarding video', headingLevel: 3, href: 'https://youtu.be/Yh4NqpphJQ4?si=gN0J3IllC_eoevu7&t=2809' }), (0, r.jsx)(a.Z, { description: 'Leer hoe je NL Design System kunt gebruiken voor een snel prototype.', heading: 'Prototypes', headingLevel: 3, href: '/handboek/developer/prototypes/' })] }), '\n', (0, r.jsx)(n.h2, { id: 'huisstijl-met-design-tokens', children: 'Huisstijl met design tokens' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System componenten zijn huisstijl onafhankelijk. Applicaties die hiermee gebouwd zijn kunnen zo makkelijk meerdere huisstijlen ondersteunen zonder de logica en toegankelijkheid van de componenten opnieuw te bouwen. Elke organisatie legt de eigen huisstijl vast met de Design Tokens JSON standaard en maakt deze beschikbaar voor hergebruik in Figma, code, websites en diverse webapplicaties.' }), '\n', (0, r.jsxs)(o.AC, { appearance: 'medium', children: [(0, r.jsx)(a.Z, { description: 'Leer hoe je je huisstijl kunt vastleggen als NL Design System thema met Design Tokens JSON', heading: 'Thema maken', headingLevel: 3, href: '/handboek/developer/thema-maken/' }), (0, r.jsx)(a.Z, { description: 'Lees meer over design tokens bij NL Design System', heading: 'Design Tokens', headingLevel: 3, href: '/handboek/huisstijl/design-tokens/' }), (0, r.jsx)(a.Z, { description: 'Gebruik het start-thema om sneller te starten met de huisstijl vastleggen met basis-tokens.', heading: 'Start thema', headingLevel: 3, href: '/handboek/huisstijl/themas/start-thema/' }), (0, r.jsx)(a.Z, { description: 'Gebruik het voorbeeld-thema voor prototypes zonder huisstijl', heading: 'Voorbeeld thema', headingLevel: 3, href: '/handboek/huisstijl/themas/voorbeeld-thema/' })] }), '\n', (0, r.jsx)(n.h2, { id: 'componenten', children: 'Componenten' }), '\n', (0, r.jsx)(n.p, { children: 'De HTML structuur en design beslissingen van NL Design System componenten worden \xe9\xe9n keer gemaakt en kunnen daarna hergebruikt worden in elk framework. Voor elke techniek waar de community bijdragen aan heeft geleverd werkt het kernteam aan documentatie over gebruiken, uitbreiden, bouwen en testen. Op dit moment kun je de volgende componenten vinden op het component overzicht:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/componenten/?framework=CSS', children: 'CSS componenten' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/componenten/?framework=React', children: 'React componenten' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/componenten/?framework=Web+Component', children: 'Web Componenten' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/componenten/?framework=Angular', children: 'Angular componenten' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/componenten/?framework=Vue', children: 'Vue.js componenten' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/componenten/?framework=HTML', children: 'HTML componenten' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/componenten/?framework=Twig', children: 'Twig componenten' }) }), '\n'] }), '\n', (0, r.jsx)(r.Fragment, {}), '\n', (0, r.jsx)(n.h2, { id: 'ecosysteem', children: 'Ecosysteem' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System is een ecosysteem van design systems die naar keuze te combineren zijn in prototypes, websites en webapplicaties in diverse huisstijlen.' }), '\n', (0, r.jsx)(n.p, { children: 'Om developers makkelijk te laten bijdragen aan de verschillende Open Source design systems stelt NL Design System een gedeelde infrastructuur beschikbaar.' }), '\n', (0, r.jsx)(n.p, { children: 'Een gedeelde aanpak zorgt ervoor dat componenten binnen NL Design System er consistent uitzien, voorspelbaar werken en makkelijk up-to-date te houden zijn.' }), '\n', (0, r.jsxs)(o.AC, { appearance: 'medium', children: [(0, r.jsx)(a.Z, { description: 'Lees wat de NL Design System conventies zijn voor White Label componenten, Design Tokens, herbruikbare CSS, een API conventie, geautomatiseerde tests en versionering.', heading: 'Conventies', headingLevel: 3, href: '/handboek/developer/conventies/' }), (0, r.jsx)(a.Z, { description: 'Leer hoe de infrastructuur van NL Design System helpt om samen met andere organisaties te werken in een open source design system ecosysteem', heading: 'Infrastructuur', headingLevel: 3, href: '/handboek/developer/infrastructuur/' }), (0, r.jsx)(a.Z, { description: 'Bekijk het Estafettemodel en leer hoe deze helpt om samen met verschillende organisaties toe te werken naar gestandaardiseerde componenten, patronen en templates met ruimte voor innovatie.', heading: 'Estafettemodel', headingLevel: 3, href: '/handboek/estafettemodel/' })] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
  },
  63009(e, n, i) {
   i.d(n, { N: () => h });
   var t = i(15540),
    r = i(69967),
    s = i(86070),
    o = i(13526),
    a = i(30758),
    d = ['children', 'className', 'current', 'disabled', 'href', 'inlineBox'];
   function l(e, n) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      i.push.apply(i, t));
    }
    return i;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var i = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? l(Object(i), !0).forEach(function (n) {
         (0, t.A)(e, n, i[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : l(Object(i)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
          });
    }
    return e;
   }
   var h = (0, a.forwardRef)(function (e, n) {
    var i = e.children,
     a = e.className,
     l = e.current,
     h = e.disabled,
     m = e.href,
     u = e.inlineBox,
     p = (0, r.A)(e, d);
    return (0, s.jsx)('a', c(c({ 'aria-current': l || void 0, 'aria-disabled': h, className: (0, o.$)('nl-link', (0, t.A)((0, t.A)((0, t.A)({}, 'nl-link--current', l), 'nl-link--disabled', h), 'nl-link--inline-box', u), a), href: h ? void 0 : m, role: h ? 'link' : void 0, ref: n, tabIndex: h ? 0 : void 0 }, p), {}, { children: i }));
   });
   h.displayName = 'Link';
  },
 },
]);
