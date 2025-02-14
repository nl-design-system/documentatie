'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [99924],
 {
  96193: (e, t, s) => {
   s.r(t), s.d(t, { default: () => x });
   s(75271);
   var n = s(4814),
    l = s(83033),
    r = s(29513),
    a = s(14225),
    o = s(65697),
    c = s(40217),
    i = s(87318),
    u = s(17902),
    g = s(6709),
    d = s(52676);
   function h(e) {
    const t = (function () {
     const { selectMessage: e } = (0, r.c)();
     return (t) => e(t, (0, c.I)({ id: 'theme.docs.tagDocListPageTitle.nDocsTagged', description: 'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One doc tagged|{count} docs tagged' }, { count: t }));
    })();
    return (0, c.I)({ id: 'theme.docs.tagDocListPageTitle', description: 'The title of the page for a docs tag', message: '{nDocsTagged} with "{tagName}"' }, { nDocsTagged: t(e.tag.count), tagName: e.tag.label });
   }
   function m(e) {
    let { doc: t } = e;
    return (0, d.jsxs)('article', { className: 'margin-vert--lg', children: [(0, d.jsx)(l.Z, { to: t.permalink, children: (0, d.jsx)(g.Z, { as: 'h2', children: t.title }) }), t.description && (0, d.jsx)('p', { children: t.description })] });
   }
   function f(e) {
    let { title: t } = e;
    return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(a.d, { title: t }), (0, d.jsx)(i.Z, { tag: 'doc_tag_doc_list' })] });
   }
   function p(e) {
    let { tag: t, title: s } = e;
    return (0, d.jsx)(a.FG, { className: (0, n.Z)(o.k.page.docsTagDocListPage), children: (0, d.jsx)('div', { className: 'container margin-vert--lg', children: (0, d.jsx)('div', { className: 'row', children: (0, d.jsxs)('main', { className: 'col col--8 col--offset-2', children: [t.unlisted && (0, d.jsx)(u.Z, {}), (0, d.jsxs)('header', { className: 'margin-bottom--xl', children: [(0, d.jsx)(g.Z, { as: 'h1', children: s }), (0, d.jsx)(l.Z, { href: t.allTagsPath, children: (0, d.jsx)(c.Z, { id: 'theme.tags.tagsPageLink', description: 'The label of the link targeting the tag list page', children: 'View All Tags' }) })] }), (0, d.jsx)('section', { className: 'margin-vert--lg', children: t.items.map((e) => (0, d.jsx)(m, { doc: e }, e.id)) })] }) }) }) });
   }
   function x(e) {
    const t = h(e);
    return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(f, { ...e, title: t }), (0, d.jsx)(p, { ...e, title: t })] });
   }
  },
  29513: (e, t, s) => {
   s.d(t, { c: () => i });
   var n = s(75271),
    l = s(94699);
   const r = ['zero', 'one', 'two', 'few', 'many', 'other'];
   function a(e) {
    return r.filter((t) => e.includes(t));
   }
   const o = { locale: 'en', pluralForms: a(['one', 'other']), select: (e) => (1 === e ? 'one' : 'other') };
   function c() {
    const {
     i18n: { currentLocale: e },
    } = (0, l.Z)();
    return (0, n.useMemo)(() => {
     try {
      return (function (e) {
       const t = new Intl.PluralRules(e);
       return { locale: e, pluralForms: a(t.resolvedOptions().pluralCategories), select: (e) => t.select(e) };
      })(e);
     } catch (t) {
      return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`), o;
     }
    }, [e]);
   }
   function i() {
    const e = c();
    return {
     selectMessage: (t, s) =>
      (function (e, t, s) {
       const n = e.split('|');
       if (1 === n.length) return n[0];
       n.length > s.pluralForms.length && console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(',')}), but the message contains ${n.length}: ${e}`);
       const l = s.select(t),
        r = s.pluralForms.indexOf(l);
       return n[Math.min(r, n.length - 1)];
      })(s, t, e),
    };
   }
  },
  17902: (e, t, s) => {
   s.d(t, { Z: () => a });
   s(75271), s(40217);
   var n = s(97623),
    l = s(52676);
   function r() {
    return (0, l.jsx)(n.Z, { children: (0, l.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function a() {
    return (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(r, {}) });
   }
  },
 },
]);
