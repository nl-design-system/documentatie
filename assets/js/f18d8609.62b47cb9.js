'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [93211],
 {
  18439(e, n, r) {
   r.d(n, { R: () => s, x: () => a });
   var t = r(30758);
   const i = {},
    o = t.createContext(i);
   function s(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  19400(e, n, r) {
   r.d(n, { N: () => h });
   var t = r(48171),
    i = r(41534),
    o = r(86070),
    s = r(13526),
    a = r(30758),
    d = ['children', 'className', 'current', 'disabled', 'href', 'inlineBox'];
   function l(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      r.push.apply(r, t));
    }
    return r;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var r = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? l(Object(r), !0).forEach(function (n) {
         (0, t.A)(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : l(Object(r)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
   }
   var h = (0, a.forwardRef)(function (e, n) {
    var r = e.children,
     a = e.className,
     l = e.current,
     h = e.disabled,
     u = e.href,
     m = e.inlineBox,
     p = (0, i.A)(e, d);
    return (0, o.jsx)('a', c(c({ 'aria-current': l || void 0, 'aria-disabled': h, className: (0, s.$)('nl-link', (0, t.A)((0, t.A)((0, t.A)({}, 'nl-link--current', l), 'nl-link--disabled', h), 'nl-link--inline-box', m), a), href: h ? void 0 : u, role: h ? 'link' : void 0, ref: n, tabIndex: h ? 0 : void 0 }, p), {}, { children: r }));
   });
   h.displayName = 'Link';
  },
  21530(e, n, r) {
   r.d(n, { AC: () => l, Fu: () => s, Wu: () => a, Zp: () => d });
   var t = r(46447),
    i = r(13526),
    o = r(86070);
   const s = ({ background: e, children: n, className: r, ...t }) => (0, o.jsx)('div', { className: (0, i.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, r), ...t, children: n }),
    a = (e) => (0, o.jsx)('div', { className: 'ma-card__content', ...e }),
    d = ({ href: e, appearance: n, className: r, component: s = 'div', background: a, children: d }) => {
     const l = (e) => ('article' === s ? (0, o.jsx)('article', { ...e }) : 'section' === s ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      c = (0, o.jsx)(l, { className: (0, i.A)('ma-cardgroup__card', a && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, r), children: d });
     return e ? (0, o.jsx)(t.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    l = ({ appearance: e = 'large', children: n, className: r }) => (0, o.jsx)('div', { className: (0, i.A)('ma-cardgroup', `ma-cardgroup--${e}`, r), children: n });
  },
  41534(e, n, r) {
   function t(e, n) {
    if (null == e) return {};
    var r,
     t,
     i = (function (e, n) {
      if (null == e) return {};
      var r = {};
      for (var t in e)
       if ({}.hasOwnProperty.call(e, t)) {
        if (-1 !== n.indexOf(t)) continue;
        r[t] = e[t];
       }
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (t = 0; t < o.length; t++) ((r = o[t]), -1 === n.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
    }
    return i;
   }
   r.d(n, { A: () => t });
  },
  43283(e, n, r) {
   r.d(n, { Z: () => u });
   var t = r(86070),
    i = r(19400);
   function o(e) {
    var n,
     r,
     t = '';
    if ('string' == typeof e || 'number' == typeof e) t += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var i = e.length;
      for (n = 0; n < i; n++) e[n] && (r = o(e[n])) && (t && (t += ' '), (t += r));
     } else for (r in e) e[r] && (t && (t += ' '), (t += r));
    return t;
   }
   function s() {
    for (var e, n, r = 0, t = '', i = arguments.length; r < i; r++) (e = arguments[r]) && (n = o(e)) && (t && (t += ' '), (t += n));
    return t;
   }
   const a = ({ ref: e, children: n, className: r, inline: o, ...a }) => (0, t.jsx)(i.N, { ...a, className: s('rhc-link', { 'rhc-link--inline': o }, r), disabled: !1, ref: e, children: n });
   a.displayName = 'Link';
   var d = r(30758);
   function l(e) {
    var n,
     r,
     t = '';
    if ('string' == typeof e || 'number' == typeof e) t += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var i = e.length;
      for (n = 0; n < i; n++) e[n] && (r = l(e[n])) && (t && (t += ' '), (t += r));
     } else for (r in e) e[r] && (t && (t += ' '), (t += r));
    return t;
   }
   function c() {
    for (var e, n, r = 0, t = '', i = arguments.length; r < i; r++) (e = arguments[r]) && (n = l(e)) && (t && (t += ' '), (t += n));
    return t;
   }
   const h = ({ level: e = 2, children: n, ...r }) => {
     const t = `h${e}`;
     return d.createElement(t, r, n);
    },
    u = (0, d.forwardRef)(({ heading: e, headingLevel: n = 2, subheading: r, description: i, metadata: o, image: s, href: d, target: l, linkLabel: u, title: m, className: p, children: g, ...v }, b) => (0, t.jsxs)('div', { className: c('rhc-card', 'rhc-card--default', p), ref: b, ...v, children: [s && (0, t.jsx)('div', { className: 'rhc-card__image', children: s }), (0, t.jsxs)('div', { className: 'rhc-card__content', children: [(0, t.jsx)(h, { className: 'rhc-card__heading', level: n, children: d ? (0, t.jsx)(a, { className: 'rhc-card__link', href: d, target: l, title: m, children: e }) : e }), r && (0, t.jsx)('p', { className: 'rhc-card__subheading', children: r }), i && (0, t.jsx)('p', { className: 'rhc-card__description', children: i }), o && (0, t.jsx)('p', { className: 'rhc-card__metadata', children: o }), g] }), u && (0, t.jsx)('div', { className: 'rhc-card__footer', children: (0, t.jsx)('div', { className: 'rhc-card__link', 'data-testid': 'rhc-card__link', children: (0, t.jsx)(a, { href: d, target: l, title: m, children: u }) }) })] }));
   u.displayName = 'Card';
  },
  48171(e, n, r) {
   function t(e) {
    return (
     (t =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     t(e)
    );
   }
   function i(e) {
    var n = (function (e, n) {
     if ('object' != t(e) || !e) return e;
     var r = e[Symbol.toPrimitive];
     if (void 0 !== r) {
      var i = r.call(e, n || 'default');
      if ('object' != t(i)) return i;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == t(n) ? n : n + '';
   }
   function o(e, n, r) {
    return ((n = i(n)) in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e);
   }
   r.d(n, { A: () => o });
  },
  55133(e, n, r) {
   (r.r(n), r.d(n, { assets: () => c, contentTitle: () => l, default: () => m, frontMatter: () => d, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"handboek/developer/index","title":"NL Design System introductie voor developers","description":"Introductie voor developers","source":"@site/docs/handboek/developer/01-index.mdx","sourceDirName":"handboek/developer","slug":"/handboek/developer/introductie","permalink":"/handboek/developer/introductie","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/01-index.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"NL Design System introductie voor developers","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie","pagination_label":"Introductie","description":"Introductie voor developers","slug":"/handboek/developer/introductie","keywords":["introductie","developer","aan de slag","getting started"]},"sidebar":"handboek","previous":{"title":"Figma-bestanden overzicht","permalink":"/figma"},"next":{"title":"Introductie","permalink":"/handboek/developer/introductie"}}');
   var i = r(86070),
    o = r(18439),
    s = r(21530),
    a = r(88166);
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
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'introductie-voor-developers', children: 'Introductie voor developers' }) }), '\n', (0, i.jsx)(n.h2, { id: 'community', children: 'Community' }), '\n', (0, i.jsxs)(n.p, { children: ['Er zijn al veel developers die gebruik maken van NL Design System en actief bijdragen in de community. Dit gebeurt op ', (0, i.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ', in de ', (0, i.jsx)(n.a, { href: '/events/developer-open-hour/', children: 'Developer Open Hour' }), ', in de ', (0, i.jsx)(n.a, { href: '/community/community-sprints/rijkshuisstijl-community/', children: 'Rijkshuisstijl Community' }), ' en op ', (0, i.jsx)(n.a, { href: '/github/', children: 'GitHub' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['De leukste updates worden ook gedeeld in de tweewekelijkse ', (0, i.jsx)(n.a, { href: '/events/heartbeat/', children: 'Heartbeat' }), ' die je zelfs vanaf 2022 terug kunt kijken.'] }), '\n', (0, i.jsx)(n.h2, { id: 'aan-de-slag', children: 'Aan de slag' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System kun je gebruiken in prototypes of productie websites en webapplicaties met of zonder CMS.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System componenten zijn te gebruiken voor iedere huisstijl. Elke organisatie legt de eigen huisstijl vast met de Design Tokens JSON standaard en maakt deze beschikbaar voor hergebruik in Figma, code, websites en diverse webapplicaties.' }), '\n', (0, i.jsx)(n.p, { children: 'Combineer componenten van verschillende organisaties tot jouw perfecte oplossing. Design Systems en applicaties die met deze componenten gebouwd zijn kunnen zo makkelijk meerdere huisstijlen ondersteunen zonder de logica en toegankelijkheid van de componenten opnieuw te bouwen.' }), '\n', (0, i.jsxs)(s.AC, { children: [(0, i.jsx)(a.Z, { description: 'Bekijk de onboarding sessie voor developers op YouTube', heading: 'Onboarding video', headingLevel: 3, href: 'https://youtu.be/Yh4NqpphJQ4?si=gN0J3IllC_eoevu7&t=2809' }), (0, i.jsx)(a.Z, { description: 'Leer hoe je NL Design System kunt gebruiken voor een snel prototype.', heading: 'Prototypes', headingLevel: 3, href: '/handboek/developer/prototypes/' })] }), '\n', (0, i.jsx)(n.h2, { id: 'huisstijl-met-design-tokens', children: 'Huisstijl met design tokens' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System componenten zijn huisstijl onafhankelijk. Applicaties die hiermee gebouwd zijn kunnen zo makkelijk meerdere huisstijlen ondersteunen zonder de logica en toegankelijkheid van de componenten opnieuw te bouwen. Elke organisatie legt de eigen huisstijl vast met de Design Tokens JSON standaard en maakt deze beschikbaar voor hergebruik in Figma, code, websites en diverse webapplicaties.' }), '\n', (0, i.jsxs)(s.AC, { appearance: 'medium', children: [(0, i.jsx)(a.Z, { description: 'Leer hoe je je huisstijl kunt vastleggen als NL Design System thema met Design Tokens JSON', heading: 'Thema maken', headingLevel: 3, href: '/handboek/developer/thema-maken/' }), (0, i.jsx)(a.Z, { description: 'Lees meer over design tokens bij NL Design System', heading: 'Design Tokens', headingLevel: 3, href: '/handboek/huisstijl/design-tokens/' }), (0, i.jsx)(a.Z, { description: 'Gebruik het start-thema om sneller te starten met de huisstijl vastleggen met basis-tokens.', heading: 'Start thema', headingLevel: 3, href: '/handboek/huisstijl/themas/start-thema/' }), (0, i.jsx)(a.Z, { description: 'Gebruik het voorbeeld-thema voor prototypes zonder huisstijl', heading: 'Voorbeeld thema', headingLevel: 3, href: '/handboek/huisstijl/themas/voorbeeld-thema/' })] }), '\n', (0, i.jsx)(n.h2, { id: 'componenten', children: 'Componenten' }), '\n', (0, i.jsx)(n.p, { children: 'De HTML structuur en design beslissingen van NL Design System componenten worden \xe9\xe9n keer gemaakt en kunnen daarna hergebruikt worden in elk framework. Voor elke techniek waar de community bijdragen aan heeft geleverd werkt het kernteam aan documentatie over gebruiken, uitbreiden, bouwen en testen. Op dit moment kun je de volgende componenten vinden op het component overzicht:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/componenten/?framework=CSS', children: 'CSS componenten' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/componenten/?framework=React', children: 'React componenten' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/componenten/?framework=Web+Component', children: 'Web Componenten' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/componenten/?framework=Angular', children: 'Angular componenten' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/componenten/?framework=Vue', children: 'Vue.js componenten' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/componenten/?framework=HTML', children: 'HTML componenten' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/componenten/?framework=Twig', children: 'Twig componenten' }) }), '\n'] }), '\n', (0, i.jsx)(i.Fragment, {}), '\n', (0, i.jsx)(n.h2, { id: 'ecosysteem', children: 'Ecosysteem' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System is een ecosysteem van design systems die naar keuze te combineren zijn in prototypes, websites en webapplicaties in diverse huisstijlen.' }), '\n', (0, i.jsx)(n.p, { children: 'Om developers makkelijk te laten bijdragen aan de verschillende Open Source design systems stelt NL Design System een gedeelde infrastructuur beschikbaar.' }), '\n', (0, i.jsx)(n.p, { children: 'Een gedeelde aanpak zorgt ervoor dat componenten binnen NL Design System er consistent uitzien, voorspelbaar werken en makkelijk up-to-date te houden zijn.' }), '\n', (0, i.jsxs)(s.AC, { appearance: 'medium', children: [(0, i.jsx)(a.Z, { description: 'Lees wat de NL Design System conventies zijn voor White Label componenten, Design Tokens, herbruikbare CSS, een API conventie, geautomatiseerde tests en versionering.', heading: 'Conventies', headingLevel: 3, href: '/handboek/developer/conventies/' }), (0, i.jsx)(a.Z, { description: 'Leer hoe de infrastructuur van NL Design System helpt om samen met andere organisaties te werken in een open source design system ecosysteem', heading: 'Infrastructuur', headingLevel: 3, href: '/handboek/developer/infrastructuur/' }), (0, i.jsx)(a.Z, { description: 'Bekijk het Estafettemodel en leer hoe deze helpt om samen met verschillende organisaties toe te werken naar gestandaardiseerde componenten, patronen en templates met ruimte voor innovatie.', heading: 'Estafettemodel', headingLevel: 3, href: '/handboek/estafettemodel/' })] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
  },
  88166(e, n, r) {
   r.d(n, { Z: () => t.Z });
   var t = r(43283);
  },
 },
]);
