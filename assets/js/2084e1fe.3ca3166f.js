'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [16216],
 {
  18439(e, t, n) {
   n.d(t, { R: () => s, x: () => a });
   var r = n(30758);
   const o = {},
    i = r.createContext(o);
   function s(e) {
    const t = r.useContext(i);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function a(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), r.createElement(i.Provider, { value: t }, e.children));
   }
  },
  41534(e, t, n) {
   function r(e, t) {
    if (null == e) return {};
    var n,
     r,
     o = (function (e, t) {
      if (null == e) return {};
      var n = {};
      for (var r in e)
       if ({}.hasOwnProperty.call(e, r)) {
        if (-1 !== t.indexOf(r)) continue;
        n[r] = e[r];
       }
      return n;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (r = 0; r < i.length; r++) ((n = i[r]), -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   n.d(t, { A: () => r });
  },
  48171(e, t, n) {
   function r(e) {
    return (
     (r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     r(e)
    );
   }
   function o(e) {
    var t = (function (e, t) {
     if ('object' != r(e) || !e) return e;
     var n = e[Symbol.toPrimitive];
     if (void 0 !== n) {
      var o = n.call(e, t || 'default');
      if ('object' != r(o)) return o;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == r(t) ? t : t + '';
   }
   function i(e, t, n) {
    return ((t = o(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e);
   }
   n.d(t, { A: () => i });
  },
  59292(e, t, n) {
   n.d(t, { f: () => r.f });
   var r = n(71544);
  },
  71544(e, t, n) {
   n.d(t, { f: () => u });
   var r = n(48171),
    o = n(41534),
    i = n(86070),
    s = n(13526),
    a = n(30758),
    l = ['children', 'className', 'purpose'];
   function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
    }
    return n;
   }
   function d(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? c(Object(n), !0).forEach(function (t) {
         (0, r.A)(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : c(Object(n)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
   }
   var u = (0, a.forwardRef)(function (e, t) {
    var n = e.children,
     a = e.className,
     c = e.purpose,
     u = (0, o.A)(e, l);
    return (0, i.jsx)('p', d(d({ className: (0, s.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === c), a), ref: t }, u), {}, { children: 'lead' === c ? (0, i.jsx)('b', { className: 'nl-paragraph__lead', children: n }) : n }));
   });
   u.displayName = 'Paragraph';
  },
  96131(e, t, n) {
   (n.r(t), n.d(t, { assets: () => c, contentTitle: () => l, default: () => p, frontMatter: () => a, metadata: () => r, toc: () => d }));
   const r = JSON.parse('{"id":"project/kwaliteitsaanpak/release-notes","title":"Release notes","description":"Dit is hoe we release notes bijhouden voor NL Design System.","source":"@site/docs/project/kwaliteitsaanpak/release-notes.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/release-notes","permalink":"/project/kwaliteitsaanpak/release-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/release-notes.mdx","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"Release notes","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Release notes","sidebar_position":30,"pagination_label":"Release notes","description":"Dit is hoe we release notes bijhouden voor NL Design System.","keywords":["changelog","release notes"]},"sidebar":"project","previous":{"title":"Continuous Deployment","permalink":"/project/kwaliteitsaanpak/continuous-deployment"},"next":{"title":"Productieomgeving","permalink":"/project/kwaliteitsaanpak/productieomgeving"}}');
   var o = n(86070),
    i = n(18439),
    s = n(59292);
   const a = { title: 'Release notes', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Release notes', sidebar_position: 30, pagination_label: 'Release notes', description: 'Dit is hoe we release notes bijhouden voor NL Design System.', keywords: ['changelog', 'release notes'] },
    l = 'Release notes',
    c = {},
    d = [{ value: 'Automatiseer de release notes', id: 'automatiseer-de-release-notes', level: 2 }];
   function u(e) {
    const t = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(t.header, { children: (0, o.jsx)(t.h1, { id: 'release-notes', children: 'Release notes' }) }), '\n', (0, o.jsx)(s.f, { purpose: 'lead', children: (0, o.jsxs)(t.p, { children: ['Publiceer documentatie over de wijzigingen in softwarereleases in een ', (0, o.jsx)(t.code, { children: 'CHANGELOG.md' }), ' bestand, zodat gebruikers weten\nwat ze kunnen verwachten en hoe ze kunnen migreren naar de nieuwe versie.'] }) }), '\n', (0, o.jsxs)(t.p, { children: ['Volg de ', (0, o.jsx)(t.code, { children: 'CHANGELOG.md' }), ' filename-conventie, zodat de release notes op diverse manieren gebruiksvriendelijk beschikbaar worden gemaakt, bijvoorbeeld met in Pull Requests van Dependabot, of in de GitHub user interface.'] }), '\n', (0, o.jsx)(t.h2, { id: 'automatiseer-de-release-notes', children: 'Automatiseer de release notes' }), '\n', (0, o.jsxs)(t.p, { children: ['Voorkom dat iedereen de ', (0, o.jsx)(t.code, { children: 'CHANGELOG.md' }), ' file direct moet wijzigen via Git, en daardoor steeds weer merge conflicts ontstaan. De release notes bijhouden moet niet een tijdrovend en frustrerend proces zijn.'] }), '\n', (0, o.jsxs)(t.p, { children: ['Gebruik de ', (0, o.jsx)(t.a, { href: '/handboek/developer/changeset-conventie/', children: 'changesets workflow' }), ' voor het vastleggen van wijzigingen in ', (0, o.jsx)(t.code, { children: '.changeset/*.md' }), '-bestanden.'] }), '\n', (0, o.jsxs)(t.p, { children: ['Gebruik de ', (0, o.jsx)(t.code, { children: 'changeset' }), ' tool in de CI/CD pipeline om de ', (0, o.jsx)(t.code, { children: 'CHANGELOG.md' }), ' bestanden aan te vullen.'] })] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
  },
 },
]);
