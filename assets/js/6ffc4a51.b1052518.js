'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [69705],
 {
  12013(e, n, r) {
   r.d(n, { o: () => h });
   var i = r(18439),
    t = r(46447),
    s = r(86070);
   const o = (e, n) => {
     const r = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === r.protocol) {
      const { pathname: r, search: i, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return r + i + t;
     }
     return r.toString();
    },
    l = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    a = (e) => ({ img: ({ src: n, ...r }) => (0, s.jsx)('img', { ...r, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return l[n];
    },
    h = ({ children: e, omitH1: n = !1, headingLevel: r = 1, baseUrl: t = '', components: o = {} }) => (0, s.jsx)(i.x, { components: { ...c(n, r), ...a(t), ...o }, children: e });
  },
  18439(e, n, r) {
   r.d(n, { R: () => o, x: () => l });
   var i = r(30758);
   const t = {},
    s = i.createContext(t);
   function o(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children));
   }
  },
  78259(e, n, r) {
   (r.r(n), r.d(n, { assets: () => b, contentTitle: () => w, default: () => R, frontMatter: () => k, metadata: () => i, toc: () => T }));
   const i = JSON.parse('{"id":"richtlijnen/formulieren/help/approve/README","title":"Keur niet te snel af","description":"Richtlijnen om formulier input niet te snel af te keuren.","source":"@site/docs/richtlijnen/formulieren/help/3-approve/README.mdx","sourceDirName":"richtlijnen/formulieren/help/3-approve","slug":"/richtlijnen/formulieren/voorkom-fouten/keur-niet-te-snel-af","permalink":"/richtlijnen/formulieren/voorkom-fouten/keur-niet-te-snel-af","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/3-approve/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Keur niet te snel af","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Keur niet te snel af","pagination_label":"Keur niet te snel af","description":"Richtlijnen om formulier input niet te snel af te keuren.","slug":"/richtlijnen/formulieren/voorkom-fouten/keur-niet-te-snel-af","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Wachtwoord plakken","permalink":"/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/"},"next":{"title":"Geef geldige waardes aan een invoerveld","permalink":"/richtlijnen/formulieren/voorkom-fouten/geldige-waardes"}}');
   var t = r(86070),
    s = r(18439),
    o = r(78734),
    l = r(12013);
   function a(e) {
    return (0, t.jsx)(t.Fragment, {});
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a();
   }
   function h(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', img: 'img', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'geldige-e-mailadressen', children: 'Geldige e-mailadressen' }) }), '\n', (0, t.jsx)(n.p, { children: 'Sommige mensen gebruiken een + in hun e-mailadres, bijvoorbeeld om e-mails makkelijker te kunnen groeperen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Zo kiezen ze voor ', (0, t.jsx)(n.a, { href: 'mailto:naam+school@voorbeeld.nl', children: 'naam+school@voorbeeld.nl' }), ' voor e-mails van school en ', (0, t.jsx)(n.a, { href: 'mailto:naam+werk@voorbeeld.nl', children: 'naam+werk@voorbeeld.nl' }), ' voor e-mails over werk. Dit zijn geldige e-mailadressen, keur ze dus niet af.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_email.png', alt: 'email met een plus teken is goedgekeurd' }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'keur-niet-te-snel-af', children: 'Keur niet te snel af' }) }), '\n', (0, t.jsx)(n.p, { children: 'In de formuliervalidatie kan er al veel afgevangen worden.\nDenk met de gebruiker mee.' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    return (0, t.jsx)(t.Fragment, {});
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p();
   }
   function f(e) {
    const n = { h1: 'h1', header: 'header', img: 'img', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'eenduidig-te-herschrijven', children: 'Eenduidig te herschrijven' }) }), '\n', (0, t.jsx)(n.p, { children: 'Postcodes kunnen op verschillende manieren worden geschreven: bijvoorbeeld \u201c1234 AA\u201d (met spatie), \u201c1234AA\u201d (zonder spatie), \u201c1234aa\u201d (met kleine letters). Ook extra spaties aan het begin of eind kunnen meekomen bij het knippen/plakken van tekst.' }), '\n', (0, t.jsx)(n.p, { children: 'In code kunnen deze vormen gemakkelijk naar elkaar worden herschreven. Door alle vormen te accepteren en door de software te laten corrigeren, geef je prioriteit aan de gebruiker, in plaats van aan je systeem.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_herschrijven.png', alt: 'De 3 verschillende wijzen van postcode invoeren die allemaal goed zijn' }) })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(f, { ...e }) }) : f(e);
   }
   function x(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'Succescriterium 3.3.1 Foutidentificatie' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.3/', children: 'Succescriterium 3.3.3 Foutsuggestie' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.8/', children: 'Succescriterium 3.3.8 Toegankelijke authenticatie (minimum)' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.9/', children: 'Succescriterium 3.3.9 Toegankelijke authenticatie (uitgebreid)' }) }), '\n'] })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x(e);
   }
   const k = { title: 'Keur niet te snel af', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Keur niet te snel af', pagination_label: 'Keur niet te snel af', description: 'Richtlijnen om formulier input niet te snel af te keuren.', slug: '/richtlijnen/formulieren/voorkom-fouten/keur-niet-te-snel-af', keywords: ['labels', 'formulier', 'design', 'code'] },
    w = void 0,
    b = {},
    T = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function _(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(m, {}), '\n', (0, t.jsx)(l.o, { headingLevel: 2, children: (0, t.jsx)(d, {}) }), '\n', (0, t.jsx)(c, {}), '\n', (0, t.jsx)(l.o, { headingLevel: 2, children: (0, t.jsx)(g, {}) }), '\n', (0, t.jsx)(j, {}), '\n', (0, t.jsx)(v, {}), '\n', (0, t.jsx)(o.Ay, {})] });
   }
   function R(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(_, { ...e }) }) : _();
   }
  },
  78734(e, n, r) {
   r.d(n, { Ay: () => l, RM: () => s });
   var i = r(86070),
    t = r(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
 },
]);
