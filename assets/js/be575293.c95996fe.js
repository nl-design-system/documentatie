'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [12041],
 {
  18439(e, n, i) {
   i.d(n, { R: () => a, x: () => s });
   var t = i(30758);
   const o = {},
    r = t.createContext(o);
   function a(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), t.createElement(r.Provider, { value: n }, e.children));
   }
  },
  41534(e, n, i) {
   function t(e, n) {
    if (null == e) return {};
    var i,
     t,
     o = (function (e, n) {
      if (null == e) return {};
      var i = {};
      for (var t in e)
       if ({}.hasOwnProperty.call(e, t)) {
        if (-1 !== n.indexOf(t)) continue;
        i[t] = e[t];
       }
      return i;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (t = 0; t < r.length; t++) ((i = r[t]), -1 === n.indexOf(i) && {}.propertyIsEnumerable.call(e, i) && (o[i] = e[i]));
    }
    return o;
   }
   i.d(n, { A: () => t });
  },
  48171(e, n, i) {
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
   function o(e) {
    var n = (function (e, n) {
     if ('object' != t(e) || !e) return e;
     var i = e[Symbol.toPrimitive];
     if (void 0 !== i) {
      var o = i.call(e, n || 'default');
      if ('object' != t(o)) return o;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == t(n) ? n : n + '';
   }
   function r(e, n, i) {
    return ((n = o(n)) in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = i), e);
   }
   i.d(n, { A: () => r });
  },
  59292(e, n, i) {
   i.d(n, { f: () => t.f });
   var t = i(71544);
  },
  71544(e, n, i) {
   i.d(n, { f: () => p });
   var t = i(48171),
    o = i(41534),
    r = i(86070),
    a = i(13526),
    s = i(30758),
    l = ['children', 'className', 'purpose'];
   function c(e, n) {
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
   function d(e) {
    for (var n = 1; n < arguments.length; n++) {
     var i = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(i), !0).forEach(function (n) {
         (0, t.A)(e, n, i[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : c(Object(i)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
          });
    }
    return e;
   }
   var p = (0, s.forwardRef)(function (e, n) {
    var i = e.children,
     s = e.className,
     c = e.purpose,
     p = (0, o.A)(e, l);
    return (0, r.jsx)('p', d(d({ className: (0, a.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === c), s), ref: n }, p), {}, { children: 'lead' === c ? (0, r.jsx)('b', { className: 'nl-paragraph__lead', children: i }) : i }));
   });
   p.displayName = 'Paragraph';
  },
  84542(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, contentTitle: () => l, default: () => f, frontMatter: () => s, metadata: () => t, toc: () => d }));
   const t = JSON.parse('{"id":"project/kwaliteitsaanpak/definition-of-done","title":"Definition of Done","description":"Definition of Done voor mensen die de NL Design System kwaliteitsaanpak gebruiken.","source":"@site/docs/project/kwaliteitsaanpak/definition-of-done.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/definition-of-done","permalink":"/project/kwaliteitsaanpak/definition-of-done","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/definition-of-done.mdx","tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"Definition of Done","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Definition of Done","sidebar_position":14,"pagination_label":"Definition of Done","description":"Definition of Done voor mensen die de NL Design System kwaliteitsaanpak gebruiken."},"sidebar":"project","previous":{"title":"Toegankelijkheid","permalink":"/project/kwaliteitsaanpak/toegankelijkheid"},"next":{"title":"Software supply chain","permalink":"/project/kwaliteitsaanpak/supply-chain"}}');
   var o = i(86070),
    r = i(18439),
    a = i(59292);
   const s = { title: 'Definition of Done', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Definition of Done', sidebar_position: 14, pagination_label: 'Definition of Done', description: 'Definition of Done voor mensen die de NL Design System kwaliteitsaanpak gebruiken.' },
    l = 'Definition of Done',
    c = {},
    d = [];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'definition-of-done', children: 'Definition of Done' }) }), '\n', (0, o.jsx)(a.f, { purpose: 'lead', children: (0, o.jsx)(n.p, { children: 'Controleer met Definition of Done of het werk klaar is om te presenteren aan de product owner, voor de laatste check.' }) }), '\n', '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Het resultaat voldoet aan de acceptatiecriteria uit de ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/product-backlog/', children: 'backlog' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Het resultaat getest in de ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/testomgeving/', children: 'testomgeving' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['De ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/broncodekwaliteit/', children: 'broncodekwaliteit' }), ' voldoet aan de eisen.'] }), '\n', (0, o.jsxs)(n.li, { children: ['De ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/continuous-integration/', children: 'continuous integration' }), ' checks slagen, en die controleren in elk geval de broncodekwaliteit, testautomatisering en de build.'] }), '\n', (0, o.jsx)(n.li, { children: 'Testautomatisering voldoet aan het niveau dat is afgesproken voor de repository.' }), '\n', (0, o.jsxs)(n.li, { children: ['De ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/supply-chain/', children: 'dependencies' }), ' zijn up-to-date, hebben geen kritieke kwetsbaarheden, en hebben een open source licentie die compatible is.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Het resultaat is gepubliceerd onder de juiste ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/open-source/', children: 'open source' }), ' licentie.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Het werkt in de browsers en hulpsoftware uit de ', (0, o.jsx)(n.a, { href: '/baseline/', children: 'NL Design System Baseline' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Het resultaat voldoet aan de toegankelijkseisen van de ', (0, o.jsx)(n.a, { href: '/baseline/', children: 'NL Design System Baseline' }), '.'] }), '\n', (0, o.jsx)(n.li, { children: 'De oplossing is zoveel mogelijk gemaakt met NL Design System\xa0componenten en volgens instructies in het handboek en de richtlijnen.' }), '\n', (0, o.jsxs)(n.li, { children: ['De ', (0, o.jsx)(n.a, { href: '/kwaliteitsaanpak/code-review/', children: 'code review' }), ' is klaar en goedgekeurd.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Er zijn ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/release-notes/', children: 'release notes' }), ' voor de wijzigingen, en die zijn per package vastgelegd met semantic versioning.'] }), '\n', (0, o.jsxs)(n.li, { children: ['De code en documentatie zijn ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/versiebeheer/', children: 'opgeleverd in Git' }), ' en gemerged naar de ', (0, o.jsx)(n.code, { children: 'main' }), ' branch.'] }), '\n', (0, o.jsx)(n.li, { children: 'Technical debt is vastgelegd in de backlog, en de product owner is ge\xefnformeerd dat de technical debt is gekoppeld aan dit item op de backlog.' }), '\n', (0, o.jsxs)(n.li, { children: ['De software is ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/continuous-deployment/', children: 'klaar voor een release' }), ', of de release is al gepubliceerd.'] }), '\n', (0, o.jsxs)(n.li, { children: ['De product owner accepteert de oplevering bij de ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/sprint-review/', children: 'sprint review' }), ', en is akkoord met de technical debt.'] }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Voor de volgende onderwerpen is een specifieke Definition of Done:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/candidate/', children: 'Definition of Done voor Candidate componenten' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/hall-of-fame/', children: 'Definition of Done voor Hall of Fame componenten' }) }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ['Sommige repositories hebben een eigen Definition of Done, die kun je vinden via ', (0, o.jsx)(n.code, { children: 'CONTRIBUTING.md' }), '.'] })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
