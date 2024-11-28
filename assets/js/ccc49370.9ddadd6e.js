'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [46103],
 {
  42082: (e, t, l) => {
   l.d(t, { C: () => i, n: () => a });
   var o = l(75271),
    r = l(15053),
    n = l(52676);
   const s = o.createContext(null);
   function a(e) {
    let { children: t, content: l, isBlogPostPage: r = !1 } = e;
    const a = (function (e) {
     let { content: t, isBlogPostPage: l } = e;
     return (0, o.useMemo)(() => ({ metadata: t.metadata, frontMatter: t.frontMatter, assets: t.assets, toc: t.toc, isBlogPostPage: l }), [t, l]);
    })({ content: l, isBlogPostPage: r });
    return (0, n.jsx)(s.Provider, { value: a, children: t });
   }
   function i() {
    const e = (0, o.useContext)(s);
    if (null === e) throw new r.i6('BlogPostProvider');
    return e;
   }
  },
  30935: (e, t, l) => {
   l.d(t, { c: () => c });
   var o = l(75271),
    r = l(87502);
   const n = ['zero', 'one', 'two', 'few', 'many', 'other'];
   function s(e) {
    return n.filter((t) => e.includes(t));
   }
   const a = { locale: 'en', pluralForms: s(['one', 'other']), select: (e) => (1 === e ? 'one' : 'other') };
   function i() {
    const {
     i18n: { currentLocale: e },
    } = (0, r.Z)();
    return (0, o.useMemo)(() => {
     try {
      return (function (e) {
       const t = new Intl.PluralRules(e);
       return { locale: e, pluralForms: s(t.resolvedOptions().pluralCategories), select: (e) => t.select(e) };
      })(e);
     } catch (t) {
      return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`), a;
     }
    }, [e]);
   }
   function c() {
    const e = i();
    return {
     selectMessage: (t, l) =>
      (function (e, t, l) {
       const o = e.split('|');
       if (1 === o.length) return o[0];
       o.length > l.pluralForms.length && console.error(`For locale=${l.locale}, a maximum of ${l.pluralForms.length} plural forms are expected (${l.pluralForms.join(',')}), but the message contains ${o.length}: ${e}`);
       const r = l.select(t),
        n = l.pluralForms.indexOf(r);
       return o[Math.min(n, o.length - 1)];
      })(l, t, e),
    };
   }
  },
  89846: (e, t, l) => {
   l.d(t, { Q: () => g });
   var o = l(90441),
    r = l(3225),
    n = l(46744),
    s = l(55525),
    a = l(46506),
    i = l(4814),
    c = l(75271);
   const d = 'breadcrumbs__73z',
    m = 'breadcrumbs--mobile_QwgF',
    u = 'breadcrumbs--desktop_v9Xv';
   var h = l(52676);
   const g = (e) => {
    let { breadcrumbs: t, ...l } = e;
    const g = [{ href: (0, n.Z)('/'), label: 'Home', rel: 'home' }, ...t],
     { pathname: p } = (0, r.TH)(),
     b = [...g].reverse().find((e) => e.href !== p);
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsx)('div', {
       className: (0, i.Z)(d, u),
       children: (0, h.jsx)(a.Qu, {
        ...l,
        label: 'breadcrumb',
        children: g.map((e, t, l) => {
         let { label: o, href: r, rel: n } = e,
          { length: s } = l;
         return (0, h.jsxs)(c.Fragment, { children: [(0, h.jsx)(a.yY, { href: r, current: t === s - 1, disabled: t === s - 1, rel: (0, i.Z)(n, { up: t === s - 2 }), children: o }), t < s - 1 && (0, h.jsx)(a.sc, { children: '/' })] }, t);
        }),
       }),
      }),
      b && (0, h.jsx)('div', { className: (0, i.Z)(d, m), children: (0, h.jsx)(a.hE, { children: (0, h.jsxs)(o.Z, { href: b.href, rel: b.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, h.jsx)(a.JO, { children: (0, h.jsx)(s.Z, {}) }), b.label] }) }) }),
     ],
    });
   };
  },
  41179: (e, t, l) => {
   l.d(t, { u: () => c });
   var o = l(46506),
    r = l(70739),
    n = l(75271),
    s = l(91050);
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
   var i = l(52676);
   function c(e) {
    let { lineNumber: t, syntax: l, textContent: c, trim: d } = e,
     m = c;
    const { title: u, type: h } = (0, n.useContext)(s.n),
     g = (0, n.useId)();
    return (
     d && (m = m.trim()),
     (0, i.jsx)(r.y$, {
      theme: a,
      code: m,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: r, getLineProps: n, getTokenProps: s } = e;
       return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: g, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(o.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': g, style: l, children: r.map((e, l) => (0, i.jsxs)('span', { ...n({ line: e }), children: [t && (0, i.jsx)('span', { children: l + 1 }), e.map((e, t) => (0, i.jsx)('span', { ...s({ token: e }) }, t)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  91050: (e, t, l) => {
   l.d(t, { n: () => d, X: () => m });
   var o = l(77355),
    r = l(67663),
    n = l(46506),
    s = l(4814),
    a = l(75271);
   const i = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var c = l(52676);
   const d = (0, a.createContext)({}),
    m = (e) => {
     let { title: t, appearance: l, description: a, children: m, figure: u } = e;
     const h = { do: 'Doen', dont: 'Niet doen' },
      g = u ? 'figure' : 'div',
      p = u ? 'figcaption' : 'div';
     return (0, c.jsxs)(g, { className: (0, s.Z)(i['nlds-guideline'], i[`nlds-guideline--${l}`]), id: 'string' == typeof t ? t?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(p, { className: (0, s.Z)(i['nlds-guideline__description']), children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(n.nv, { className: (0, s.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: i['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: i['nlds-guideline__title'], children: h.dont })] }), (0, c.jsx)(n.nv, { children: t })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(n.nv, { className: (0, s.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: i['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: i['nlds-guideline__title'], children: h.do })] }), (0, c.jsx)(n.nv, { children: t })] }), a] }), (0, c.jsx)('div', { className: (0, s.Z)(i['nlds-guideline__example']), children: (0, c.jsx)(d.Provider, { value: { title: t, type: h[l] }, children: m }) })] });
    };
  },
  29450: (e, t, l) => {
   l.d(t, { Z: () => a });
   var o = l(89846),
    r = l(38889),
    n = l(4814),
    s = (l(75271), l(52676));
   function a(e) {
    const { sidebar: t, toc: l, breadcrumbs: a = [], children: i, ...c } = e,
     d = t && t.items.length > 0;
    return (0, s.jsx)(r.Z, { ...c, children: (0, s.jsx)('div', { className: 'container margin-vert--md', children: (0, s.jsxs)('div', { className: 'row', children: [(0, s.jsx)('div', { className: 'col col--9 col--offset-1', children: (0, s.jsx)(o.Q, { breadcrumbs: a }) }), (0, s.jsx)('main', { className: (0, n.Z)('utrecht-document', 'utrecht-html', 'col', { 'col--7': d, 'col--9 col--offset-1': !d }), itemScope: !0, itemType: 'http://schema.org/Blog', children: i }), l && (0, s.jsx)('div', { className: 'col col--2', children: l })] }) }) });
   }
  },
  89905: (e, t, l) => {
   l.r(t), l.d(t, { default: () => E });
   var o = l(17310),
    r = l(61902),
    n = l(42082),
    s = (l(75271), l(4814)),
    a = l(46744),
    i = l(52676);
   function c(e) {
    let { children: t, className: l } = e;
    const {
      frontMatter: o,
      assets: r,
      metadata: { description: s },
     } = (0, n.C)(),
     { withBaseUrl: c } = (0, a.C)(),
     d = r.image ?? o.image,
     m = o.keywords ?? [];
    return (0, i.jsxs)('article', { className: l, itemProp: 'blogPost', itemScope: !0, itemType: 'https://schema.org/BlogPosting', children: [s && (0, i.jsx)('meta', { itemProp: 'description', content: s }), d && (0, i.jsx)('link', { itemProp: 'image', href: c(d, { absolute: !0 }) }), m.length > 0 && (0, i.jsx)('meta', { itemProp: 'keywords', content: m.join(',') }), t] });
   }
   var d = l(90441);
   const m = { title: 'title_edok' };
   function u(e) {
    let { className: t } = e;
    const { metadata: l, isBlogPostPage: o } = (0, n.C)(),
     { permalink: r, title: a } = l,
     c = o ? 'h1' : 'h2';
    return (0, i.jsx)(c, { className: (0, s.Z)(m.title, t), itemProp: 'headline', children: o ? a : (0, i.jsx)(d.Z, { itemProp: 'url', to: r, children: a }) });
   }
   var h = l(7512),
    g = l(30935);
   const p = { container: 'container_n4ii' };
   function b(e) {
    let { readingTime: t } = e;
    const l = (function () {
     const { selectMessage: e } = (0, g.c)();
     return (t) => {
      const l = Math.ceil(t);
      return e(l, (0, h.I)({ id: 'theme.blog.post.readingTime.plurals', description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One min read|{readingTime} min read' }, { readingTime: l }));
     };
    })();
    return (0, i.jsx)(i.Fragment, { children: l(t) });
   }
   function x(e) {
    let { date: t, formattedDate: l } = e;
    return (0, i.jsx)('time', { dateTime: t, itemProp: 'datePublished', children: l });
   }
   function y() {
    return (0, i.jsx)(i.Fragment, { children: ' \xb7 ' });
   }
   function j(e) {
    let { className: t } = e;
    const { metadata: l } = (0, n.C)(),
     { date: o, formattedDate: r, readingTime: a } = l;
    return (0, i.jsxs)('div', { className: (0, s.Z)(p.container, 'margin-vert--md', t), children: [(0, i.jsx)(x, { date: o, formattedDate: r }), void 0 !== a && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(y, {}), (0, i.jsx)(b, { readingTime: a })] })] });
   }
   function v(e) {
    return e.href ? (0, i.jsx)(d.Z, { ...e }) : (0, i.jsx)(i.Fragment, { children: e.children });
   }
   function f(e) {
    let { author: t, className: l } = e;
    const { name: o, title: r, url: n, imageURL: a, email: c } = t,
     d = n || (c && `mailto:${c}`) || void 0;
    return (0, i.jsxs)('div', { className: (0, s.Z)('avatar margin-bottom--sm', l), children: [a && (0, i.jsx)(v, { href: d, className: 'avatar__photo-link', children: (0, i.jsx)('img', { className: 'avatar__photo', src: a, alt: o, itemProp: 'image' }) }), o && (0, i.jsxs)('div', { className: 'avatar__intro', itemProp: 'author', itemScope: !0, itemType: 'https://schema.org/Person', children: [(0, i.jsx)('div', { className: 'avatar__name', children: (0, i.jsx)(v, { href: d, itemProp: 'url', children: (0, i.jsx)('span', { itemProp: 'name', children: o }) }) }), r && (0, i.jsx)('small', { className: 'avatar__subtitle', itemProp: 'description', children: r })] })] });
   }
   const _ = { authorCol: 'authorCol_USJ8', imageOnlyAuthorRow: 'imageOnlyAuthorRow_JHgV', imageOnlyAuthorCol: 'imageOnlyAuthorCol_yWnH' };
   function k(e) {
    let { className: t } = e;
    const {
     metadata: { authors: l },
     assets: o,
    } = (0, n.C)();
    if (0 === l.length) return null;
    const r = l.every((e) => {
     let { name: t } = e;
     return !t;
    });
    return (0, i.jsx)('div', { className: (0, s.Z)('margin-top--md margin-bottom--sm', r ? _.imageOnlyAuthorRow : 'row', t), children: l.map((e, t) => (0, i.jsx)('div', { className: (0, s.Z)(!r && 'col col--6', r ? _.imageOnlyAuthorCol : _.authorCol), children: (0, i.jsx)(f, { author: { ...e, imageURL: o.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function P() {
    return (0, i.jsxs)('header', { children: [(0, i.jsx)(u, {}), (0, i.jsx)(j, {}), (0, i.jsx)(k, {})] });
   }
   var N = l(47216),
    Z = l(21581);
   function w(e) {
    let { children: t, className: l } = e;
    const { isBlogPostPage: o } = (0, n.C)();
    return (0, i.jsx)('div', { id: o ? N.blogPostContainerID : void 0, className: (0, s.Z)('markdown', l), itemProp: 'articleBody', children: (0, i.jsx)(Z.Z, { children: t }) });
   }
   var C = l(97885),
    F = l(45538);
   function T() {
    return (0, i.jsx)('b', { children: (0, i.jsx)(h.Z, { id: 'theme.blog.post.readMore', description: 'The label used in blog post item excerpts to link to full blog posts', children: 'Read More' }) });
   }
   function I(e) {
    const { blogPostTitle: t, ...l } = e;
    return (0, i.jsx)(d.Z, { 'aria-label': (0, h.I)({ message: 'Read more about {title}', id: 'theme.blog.post.readMoreLabel', description: 'The ARIA label for the link to full blog posts from excerpts' }, { title: t }), ...l, children: (0, i.jsx)(T, {}) });
   }
   const B = { blogPostFooterDetailsFull: 'blogPostFooterDetailsFull_D_b3' };
   function M() {
    const { metadata: e, isBlogPostPage: t } = (0, n.C)(),
     { tags: l, title: o, editUrl: r, hasTruncateMarker: a } = e,
     c = !t && a,
     d = l.length > 0;
    return d || c || r ? (0, i.jsxs)('footer', { className: (0, s.Z)('row docusaurus-mt-lg', t && B.blogPostFooterDetailsFull), children: [d && (0, i.jsx)('div', { className: (0, s.Z)('col', { 'col--9': c }), children: (0, i.jsx)(F.Z, { tags: l }) }), t && r && (0, i.jsx)('div', { className: 'col margin-top--sm', children: (0, i.jsx)(C.Z, { editUrl: r }) }), c && (0, i.jsx)('div', { className: (0, s.Z)('col text--right', { 'col--3': d }), children: (0, i.jsx)(I, { blogPostTitle: o, to: e.permalink }) })] }) : null;
   }
   function $(e) {
    let { children: t, className: l } = e;
    const o = (function () {
     const { isBlogPostPage: e } = (0, n.C)();
     return e ? void 0 : 'margin-bottom--xl';
    })();
    return (0, i.jsxs)(c, { className: (0, s.Z)(o, l), children: [(0, i.jsx)(P, {}), (0, i.jsx)(w, { children: t }), (0, i.jsx)(M, {})] });
   }
   function S() {
    const { assets: e, metadata: t } = (0, n.C)(),
     { title: l, description: r, date: s, tags: a, authors: c, frontMatter: d } = t,
     { keywords: m } = d,
     u = e.image ?? d.image;
    return (0, i.jsxs)(o.d, {
     title: l,
     description: r,
     keywords: m,
     image: u,
     children: [
      (0, i.jsx)('meta', { property: 'og:type', content: 'article' }),
      (0, i.jsx)('meta', { property: 'article:published_time', content: s }),
      c.some((e) => e.url) &&
       (0, i.jsx)('meta', {
        property: 'article:author',
        content: c
         .map((e) => e.url)
         .filter(Boolean)
         .join(','),
       }),
      a.length > 0 && (0, i.jsx)('meta', { property: 'article:tag', content: a.map((e) => e.label).join(',') }),
     ],
    });
   }
   var A = l(6348);
   function L(e) {
    const { nextItem: t, prevItem: l } = e;
    return (0, i.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, h.I)({ id: 'theme.blog.post.paginator.navAriaLabel', message: 'Blog post page navigation', description: 'The ARIA label for the blog posts pagination' }), children: [l && (0, i.jsx)(A.Z, { ...l, subLabel: (0, i.jsx)(h.Z, { id: 'theme.blog.post.paginator.newerPost', description: 'The blog post button label to navigate to the newer/previous post', children: 'Newer Post' }) }), t && (0, i.jsx)(A.Z, { ...t, subLabel: (0, i.jsx)(h.Z, { id: 'theme.blog.post.paginator.olderPost', description: 'The blog post button label to navigate to the older/next post', children: 'Older Post' }), isNext: !0 })] });
   }
   var R = l(39201),
    D = l(29450);
   function O(e) {
    let { sidebar: t, children: l } = e;
    const { metadata: o, toc: r } = (0, n.C)(),
     { nextItem: s, prevItem: a, frontMatter: c } = o,
     { hide_table_of_contents: d, toc_min_heading_level: m, toc_max_heading_level: u } = c;
    return (0, i.jsxs)(D.Z, { breadcrumbs: [{ label: 'Blog', href: '/blog' }, { label: o.title }], sidebar: t, toc: !d && r.length > 0 ? (0, i.jsx)(R.Z, { toc: r, minHeadingLevel: m, maxHeadingLevel: u }) : void 0, children: [(0, i.jsx)($, { children: l }), (s || a) && (0, i.jsx)(L, { nextItem: s, prevItem: a })] });
   }
   function E(e) {
    const t = e.content;
    return (0, i.jsx)(n.n, { content: e.content, isBlogPostPage: !0, children: (0, i.jsxs)(o.FG, { className: (0, s.Z)(r.k.wrapper.blogPages, r.k.page.blogPostPage), children: [(0, i.jsx)(S, {}), (0, i.jsx)(O, { sidebar: e.sidebar, children: (0, i.jsx)(t, {}) })] }) });
   }
  },
  21581: (e, t, l) => {
   l.d(t, { Z: () => p });
   var o = l(24785),
    r = l(49992),
    n = l(79321),
    s = l(75271),
    a = l(52676);
   function i(e) {
    const t = s.Children.toArray(e.children),
     l = t.find((e) => s.isValidElement(e) && 'summary' === e.props?.mdxType),
     o = (0, a.jsx)(a.Fragment, { children: t.filter((e) => e !== l) });
    return (0, a.jsx)(n.Z, { ...e, summary: l, children: o });
   }
   var c = l(93176);
   function d(e) {
    const t = s.Children.map(e.children, (e) =>
     s.isValidElement(e)
      ? (function (e) {
         if (e.props?.mdxType && e.props.originalType) {
          const { ...t } = e.props;
          return s.createElement(e.props.originalType, t);
         }
         return e;
        })(e)
      : e,
    );
    return (0, a.jsx)(c.Z, { ...e, children: t });
   }
   var m = l(41179);
   function u(e) {
    let t,
     l = '';
    if ((0, s.isValidElement)(e.children)) {
     const o = e.children.props,
      r = 'string' == typeof o.className ? o.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     r && (t = r[1]), 'string' == typeof o.children && (l = o.children);
    }
    return (0, a.jsx)(m.u, { syntax: t, textContent: l, trim: !0 });
   }
   var h = l(78377),
    g = l(46506);
   function p(e) {
    let { children: t } = e;
    return (0, a.jsx)(o.Z, {
     components: {
      head: d,
      code: g.EK,
      a: g.rU,
      em: g.j$,
      pre: u,
      details: i,
      ul: (e) => {
       let { children: t } = e;
       return (0, a.jsx)(g.QI, { className: 'utrecht-unordered-list--html-content', children: t });
      },
      ol: (e) => {
       let { children: t } = e;
       return (0, a.jsx)(g.GS, { className: 'utrecht-ordered-list--html-content', children: t });
      },
      img: g.Ee,
      h1: g.nL,
      h2: g.XJ,
      h3: g.aC,
      h4: g.k8,
      h5: g.by,
      h6: g.Cd,
      admonition: r.Z,
      mermaid: h.Z,
     },
     children: t,
    });
   }
  },
 },
]);
