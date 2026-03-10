/*! For license information please see f18d8609.764bb51d.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [93211],
 {
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => d });
   var r = t(30758);
   const i = {},
    a = r.createContext(i);
   function o(e) {
    const n = r.useContext(a);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), r.createElement(a.Provider, { value: n }, e.children));
   }
  },
  39831(e, n, t) {
   t.d(n, { Z: () => h });
   var r = t(86070),
    i = t(30758);
   function a(e) {
    var n,
     t,
     r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var i = e.length;
      for (n = 0; n < i; n++) e[n] && (t = a(e[n])) && (r && (r += ' '), (r += t));
     } else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
   }
   function o() {
    for (var e, n, t = 0, r = '', i = arguments.length; t < i; t++) (e = arguments[t]) && (n = a(e)) && (r && (r += ' '), (r += n));
    return r;
   }
   const d = (0, i.forwardRef)(({ boxContent: e, children: n, className: t, external: i, href: a, placeholder: d, role: s, ...c }, l) => (0, r.jsx)('a', { href: d ? void 0 : a, ref: l, role: s || (d ? 'link' : void 0), className: o('utrecht-link', 'utrecht-link--html-a', { 'utrecht-link--box-content': e, 'utrecht-link--external': i, 'utrecht-link--placeholder': d }, t), 'aria-disabled': d ? 'true' : void 0, rel: i ? 'external noopener noreferrer' : void 0, ...c, children: n }));
   function s(e) {
    var n,
     t,
     r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var i = e.length;
      for (n = 0; n < i; n++) e[n] && (t = s(e[n])) && (r && (r += ' '), (r += t));
     } else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
   }
   function c() {
    for (var e, n, t = 0, r = '', i = arguments.length; t < i; t++) (e = arguments[t]) && (n = s(e)) && (r && (r += ' '), (r += n));
    return r;
   }
   d.displayName = 'Link';
   const l = ({ level: e, ...n }) => {
     const t = 2 === e ? 'h2' : 3 === e ? 'h3' : 4 === e ? 'h4' : 5 === e ? 'h5' : 6 === e ? 'h6' : 'h1';
     return (0, r.jsx)(t, { ...n });
    },
    h = (0, i.forwardRef)(({ image: e, heading: n, headingLevel: t, href: a, Link: o, className: s, body: h, ...u }, m) => {
     const g = (0, i.useRef)(null),
      p = o || d,
      k = (0, i.useId)(),
      v = a
       ? {
          tabIndex: 0,
          role: 'link',
          onClick: () => {
           a && g.current && g.current.click();
          },
          onKeyDown: (e) => {
           ('Enter' === e.key || ' ' === e.key) && g.current && a && (e.preventDefault(), g.current.click());
          },
          'aria-labelledby': k,
         }
       : {};
     return (0, r.jsx)('div', { ref: m, className: c('utrecht-card', s, { 'utrecht-card--link': a }), ...v, ...u, children: (0, r.jsxs)('div', { className: 'utrecht-card__content', children: [(0, r.jsx)('div', { className: c('utrecht-card__heading'), children: t && n && (0, r.jsx)(l, { id: k, className: c(`utrecht-heading-${t}`, 'utrecht-card__header'), level: t, children: (0, r.jsx)(p, { ref: g, href: a, className: c('utrecht-card__link'), children: n }) }) }), e && (0, r.jsx)('div', { className: c('utrecht-card__image'), children: e }), h && (0, r.jsx)('div', { className: c('utrecht-card__body'), children: h })] }) });
    });
   ((h.displayName = 'Card'),
    ((e) => {
     if ('undefined' != typeof window) {
      const n = document.head || document.getElementsByTagName('head')[0],
       t = document.createElement('style');
      (t.appendChild(document.createTextNode(e)), n.appendChild(t));
     }
    })('.utrecht-card{background-color:var(--utrecht-card-background-color);border-radius:var(--utrecht-card-border-radius);box-shadow:var(--utrecht-card-box-shadow);color:var(--utrecht-card-color);display:flex;flex-direction:column;inline-size:var(--utrecht-card-inline-size,100%);max-inline-size:var(--utrecht-card-max-inline-size,100%);row-gap:var(--utrecht-card-row-gap)}.utrecht-card--link{cursor:pointer;text-decoration-skip-ink:none}.utrecht-card--link:hover{--utrecht-link-text-decoration:underline;--utrecht-link-text-decoration-thickness:var(--utrecht-card-link-hover-text-decoration-thickness)}.utrecht-card__heading{--utrecht-heading-color:var(--utrecht-card-heading-color);order:2;padding-inline-end:var(--utrecht-card-heading-padding-inline-end);padding-inline-start:var(--utrecht-card-heading-padding-inline-start)}.utrecht-card__image{order:1}.utrecht-card__image img:not(.utrecht-img):not(img[height]){height:auto}.utrecht-card__image img:not(.utrecht-img):not(img[width]){width:auto}.utrecht-card__image img:not(img[height]),.utrecht-card__image img:not(img[width]){max-height:100%;max-width:100%}.utrecht-card__content{display:flex;flex-direction:column;padding-block-end:var(--utrecht-card-content-padding-block-end);row-gap:var(--utrecht-card-content-row-gap)}.utrecht-card__content:not(:has(img)){padding-block-start:var(--utrecht-card-content-padding-block-start)}.utrecht-card__body{order:3;padding-inline-end:var(--utrecht-card-body-padding-inline-end);padding-inline-start:var(--utrecht-card-body-padding-inline-start)}'));
  },
  73140(e, n, t) {
   (t.r(n), t.d(n, { assets: () => l, contentTitle: () => c, default: () => m, frontMatter: () => s, metadata: () => r, toc: () => h }));
   const r = JSON.parse('{"id":"handboek/developer/index","title":"Introductie","description":"Introductie voor developers","source":"@site/docs/handboek/developer/01-index.mdx","sourceDirName":"handboek/developer","slug":"/handboek/developer/introductie","permalink":"/handboek/developer/introductie","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/01-index.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Introductie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie","pagination_label":"Introductie","description":"Introductie voor developers","slug":"/handboek/developer/introductie","keywords":["introductie","developer","aan de slag","getting started"]},"sidebar":"handboek","previous":{"title":"Figma-bestanden overzicht","permalink":"/figma"},"next":{"title":"Introductie","permalink":"/handboek/developer/introductie"}}');
   var i = t(86070),
    a = t(18439),
    o = t(90495),
    d = t(39831);
   const s = { title: 'Introductie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie', pagination_label: 'Introductie', description: 'Introductie voor developers', slug: '/handboek/developer/introductie', keywords: ['introductie', 'developer', 'aan de slag', 'getting started'] },
    c = 'Introductie voor developers',
    l = {},
    h = [
     { value: 'Community', id: 'community', level: 2 },
     { value: 'Aan de slag', id: 'aan-de-slag', level: 2 },
     { value: 'Huisstijl met design tokens', id: 'huisstijl-met-design-tokens', level: 2 },
     { value: 'Componenten', id: 'componenten', level: 2 },
     { value: 'Ecosysteem', id: 'ecosysteem', level: 2 },
    ];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'introductie-voor-developers', children: 'Introductie voor developers' }) }), '\n', (0, i.jsx)(n.h2, { id: 'community', children: 'Community' }), '\n', (0, i.jsxs)(n.p, { children: ['Er zijn al veel developers die gebruik maken van NL Design System en actief bijdragen in de community. Dit gebeurt op ', (0, i.jsx)(n.a, { href: '../../project//slack.mdx', children: 'Slack' }), ', in de ', (0, i.jsx)(n.a, { href: '/events/developer-open-hour/', children: 'Developer Open Hour' }), ', in de ', (0, i.jsx)(n.a, { href: '/community/community-sprints/rijkshuisstijl-community/', children: 'Rijkshuisstijl Community' }), ' en op ', (0, i.jsx)(n.a, { href: './06-infrastructuur/02-github.md', children: 'GitHub' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['De leukste updates worden ook gedeeld in de tweewekelijkse ', (0, i.jsx)(n.a, { href: '/events/heartbeat/', children: 'Heartbeat' }), ' die je zelfs vanaf 2022 terug kunt kijken.'] }), '\n', (0, i.jsx)(n.h2, { id: 'aan-de-slag', children: 'Aan de slag' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System kun je gebruiken in prototypes of productie websites en webapplicaties met of zonder CMS.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System componenten zijn te gebruiken voor iedere huisstijl. Elke organisatie legt de eigen huisstijl vast met de Design Tokens JSON standaard en maakt deze beschikbaar voor hergebruik in Figma, code, websites en diverse webapplicaties.' }), '\n', (0, i.jsx)(n.p, { children: 'Combineer componenten van verschillende organisaties tot jouw perfecte oplossing. Design Systems en applicaties die met deze componenten gebouwd zijn kunnen zo makkelijk meerdere huisstijlen ondersteunen zonder de logica en toegankelijkheid van de componenten opnieuw te bouwen.' }), '\n', (0, i.jsxs)(o.AC, { children: [(0, i.jsx)(d.Z, { body: 'Bekijk de onboarding sessie voor developers op YouTube', heading: 'Onboarding video', headingLevel: 3, href: 'https://youtu.be/Yh4NqpphJQ4?si=gN0J3IllC_eoevu7&t=2809' }), (0, i.jsx)(d.Z, { body: 'Leer hoe je NL Design System kunt gebruiken voor een snel prototype.', heading: 'Prototypes', headingLevel: 3, href: '/handboek/developer/aan-de-slag/prototypes' })] }), '\n', (0, i.jsx)(n.h2, { id: 'huisstijl-met-design-tokens', children: 'Huisstijl met design tokens' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System componenten zijn huisstijl onafhankelijk. Applicaties die hiermee gebouwd zijn kunnen zo makkelijk meerdere huisstijlen ondersteunen zonder de logica en toegankelijkheid van de componenten opnieuw te bouwen. Elke organisatie legt de eigen huisstijl vast met de Design Tokens JSON standaard en maakt deze beschikbaar voor hergebruik in Figma, code, websites en diverse webapplicaties.' }), '\n', (0, i.jsxs)(o.AC, { appearance: 'medium', children: [(0, i.jsx)(d.Z, { body: 'Leer hoe je je huisstijl kunt vastleggen als NL Design System thema met Design Tokens JSON', heading: 'Thema maken', headingLevel: 3, href: '/handboek/developer/design-tokens/thema-maken' }), (0, i.jsx)(d.Z, { body: 'Lees meer over design tokens bij NL Design System', heading: 'Design Tokens', headingLevel: 3, href: '/handboek/huisstijl-vastleggen/design-tokens' }), (0, i.jsx)(d.Z, { body: 'Gebruik het start-thema om sneller te starten met de huisstijl vastleggen met basis-tokens.', heading: 'Start thema', headingLevel: 3, href: '/handboek/huisstijl-vastleggen/themas/start-thema' }), (0, i.jsx)(d.Z, { body: 'Gebruik het voorbeeld-thema voor prototypes zonder huisstijl', heading: 'Voorbeeld thema', headingLevel: 3, href: '/handboek/huisstijl-vastleggen/themas/voorbeeld-thema' })] }), '\n', (0, i.jsx)(n.h2, { id: 'componenten', children: 'Componenten' }), '\n', (0, i.jsx)(n.p, { children: 'De HTML structuur en design beslissingen van NL Design System componenten worden \xe9\xe9n keer gemaakt en kunnen daarna hergebruikt worden in elk framework. Voor elke techniek waar de community bijdragen aan heeft geleverd werkt het kernteam aan documentatie over gebruiken, uitbreiden, bouwen en testen. Op dit moment kun je de volgende componenten vinden op het component overzicht:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/componenten/?framework=CSS', children: 'CSS componenten' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/componenten/?framework=React', children: 'React componenten' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/componenten/?framework=Web+Component', children: 'Web Componenten' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/componenten/?framework=Angular', children: 'Angular componenten' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/componenten/?framework=Vue', children: 'Vue.js componenten' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/componenten/?framework=HTML', children: 'HTML componenten' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/componenten/?framework=Twig', children: 'Twig componenten' }) }), '\n'] }), '\n', (0, i.jsx)(i.Fragment, {}), '\n', (0, i.jsx)(n.h2, { id: 'ecosysteem', children: 'Ecosysteem' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System is een ecosysteem van design systems die naar keuze te combineren zijn in prototypes, websites en webapplicaties in diverse huisstijlen.' }), '\n', (0, i.jsx)(n.p, { children: 'Om developers makkelijk te laten bijdragen aan de verschillende Open Source design systems stelt NL Design System een gedeelde infrastructuur beschikbaar.' }), '\n', (0, i.jsx)(n.p, { children: 'Een gedeelde aanpak zorgt ervoor dat componenten binnen NL Design System er consistent uitzien, voorspelbaar werken en makkelijk up-to-date te houden zijn.' }), '\n', (0, i.jsxs)(o.AC, { appearance: 'medium', children: [(0, i.jsx)(d.Z, { body: 'Leer hoe de infrastructuur van NL Design System helpt om samen met andere organisaties te werken in een open source design system ecosysteem', heading: 'Infrastructuur', headingLevel: 3, href: '/handboek/developer/infrastructuur' }), (0, i.jsx)(d.Z, { body: 'Lees wat de NL Design System aanpak is voor White Label componenten, Design Tokens, herbruikbare CSS, een API conventie, geautomatiseerde tests en versionering.', heading: 'Aanpak', headingLevel: 3, href: '/handboek/developer/aanpak' }), (0, i.jsx)(d.Z, { body: 'Bekijk het Estafettemodel en leer hoe deze helpt om samen met verschillende organisaties toe te werken naar gestandaardiseerde componenten, patronen en templates met ruimte voor innovatie.', heading: 'Estafettemodel', headingLevel: 3, href: '/handboek/estafettemodel' })] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
  },
  90495(e, n, t) {
   t.d(n, { AC: () => c, Fu: () => o, Wu: () => d, Zp: () => s });
   var r = t(46447),
    i = t(13526),
    a = t(86070);
   const o = ({ background: e, children: n, className: t, ...r }) => (0, a.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, t), ...r, children: n }),
    d = (e) => (0, a.jsx)('div', { className: 'card__content', ...e }),
    s = ({ href: e, appearance: n, className: t, component: o = 'div', background: d, children: s }) => {
     const c = (e) => ('article' === o ? (0, a.jsx)('article', { ...e }) : 'section' === o ? (0, a.jsx)('section', { ...e }) : (0, a.jsx)('div', { ...e })),
      l = (0, a.jsx)(c, { className: (0, i.A)('cardgroup__card', d && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: s });
     return e ? (0, a.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: l }) : l;
    },
    c = ({ appearance: e = 'medium', children: n, className: t }) => (0, a.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
