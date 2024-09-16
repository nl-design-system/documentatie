'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [46103],
 {
  42082: (e, t, o) => {
   o.d(t, { C: () => c, n: () => a });
   var l = o(75271),
    r = o(15053),
    s = o(52676);
   const n = l.createContext(null);
   function a(e) {
    let { children: t, content: o, isBlogPostPage: r = !1 } = e;
    const a = (function (e) {
     let { content: t, isBlogPostPage: o } = e;
     return (0, l.useMemo)(() => ({ metadata: t.metadata, frontMatter: t.frontMatter, assets: t.assets, toc: t.toc, isBlogPostPage: o }), [t, o]);
    })({ content: o, isBlogPostPage: r });
    return (0, s.jsx)(n.Provider, { value: a, children: t });
   }
   function c() {
    const e = (0, l.useContext)(n);
    if (null === e) throw new r.i6('BlogPostProvider');
    return e;
   }
  },
  30935: (e, t, o) => {
   o.d(t, { c: () => i });
   var l = o(75271),
    r = o(87502);
   const s = ['zero', 'one', 'two', 'few', 'many', 'other'];
   function n(e) {
    return s.filter((t) => e.includes(t));
   }
   const a = { locale: 'en', pluralForms: n(['one', 'other']), select: (e) => (1 === e ? 'one' : 'other') };
   function c() {
    const {
     i18n: { currentLocale: e },
    } = (0, r.Z)();
    return (0, l.useMemo)(() => {
     try {
      return (function (e) {
       const t = new Intl.PluralRules(e);
       return { locale: e, pluralForms: n(t.resolvedOptions().pluralCategories), select: (e) => t.select(e) };
      })(e);
     } catch (t) {
      return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`), a;
     }
    }, [e]);
   }
   function i() {
    const e = c();
    return {
     selectMessage: (t, o) =>
      (function (e, t, o) {
       const l = e.split('|');
       if (1 === l.length) return l[0];
       l.length > o.pluralForms.length && console.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(',')}), but the message contains ${l.length}: ${e}`);
       const r = o.select(t),
        s = o.pluralForms.indexOf(r);
       return l[Math.min(s, l.length - 1)];
      })(o, t, e),
    };
   }
  },
  89846: (e, t, o) => {
   o.d(t, { Q: () => p });
   var l = o(90441),
    r = o(3225),
    s = o(46744),
    n = o(55525),
    a = o(46506),
    c = o(4814),
    i = o(75271);
   const d = 'breadcrumbs__73z',
    m = 'breadcrumbs--mobile_QwgF',
    u = 'breadcrumbs--desktop_v9Xv';
   var h = o(52676);
   const p = (e) => {
    let { breadcrumbs: t, ...o } = e;
    const p = [{ href: (0, s.Z)('/'), label: 'Home', rel: 'home' }, ...t],
     { pathname: g } = (0, r.TH)(),
     b = [...p].reverse().find((e) => e.href !== g);
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsx)('div', {
       className: (0, c.Z)(d, u),
       children: (0, h.jsx)(a.Qu, {
        ...o,
        children: p.map((e, t, o) => {
         let { label: l, href: r, rel: s } = e,
          { length: n } = o;
         return (0, h.jsxs)(i.Fragment, { children: [(0, h.jsx)(a.yY, { href: r, current: t === n - 1, disabled: t === n - 1, rel: (0, c.Z)(s, { up: t === n - 2 }), children: l }), t < n - 1 && (0, h.jsx)(a.sc, { children: '/' })] }, t);
        }),
       }),
      }),
      b && (0, h.jsx)('div', { className: (0, c.Z)(d, m), children: (0, h.jsx)(a.hE, { children: (0, h.jsxs)(l.Z, { href: b.href, rel: b.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, h.jsx)(a.JO, { children: (0, h.jsx)(n.Z, {}) }), b.label] }) }) }),
     ],
    });
   };
  },
  41179: (e, t, o) => {
   o.d(t, { u: () => a });
   var l = o(46506),
    r = o(70739);
   o(75271);
   const s = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
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
   var n = o(52676);
   function a(e) {
    let { lineNumber: t, syntax: o, textContent: a, trim: c } = e,
     i = a;
    return (
     c && (i = i.trim()),
     (0, n.jsx)(r.y$, {
      theme: s,
      code: i,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: r, getLineProps: s, getTokenProps: a } = e;
       return (0, n.jsx)(l.dn, { style: o, children: r.map((e, o) => (0, n.jsxs)('span', { ...s({ line: e }), children: [t && (0, n.jsx)('span', { children: o + 1 }), e.map((e, t) => (0, n.jsx)('span', { ...a({ token: e }) }, t)), '\n'] }, o)) });
      },
     })
    );
   }
  },
  29450: (e, t, o) => {
   o.d(t, { Z: () => a });
   var l = o(89846),
    r = o(38889),
    s = o(4814),
    n = (o(75271), o(52676));
   function a(e) {
    const { sidebar: t, toc: o, breadcrumbs: a = [], children: c, ...i } = e,
     d = t && t.items.length > 0;
    return (0, n.jsx)(r.Z, { ...i, children: (0, n.jsx)('div', { className: 'container margin-vert--md', children: (0, n.jsxs)('div', { className: 'row', children: [(0, n.jsx)('div', { className: 'col col--9 col--offset-1', children: (0, n.jsx)(l.Q, { breadcrumbs: a }) }), (0, n.jsx)('main', { className: (0, s.Z)('utrecht-document', 'utrecht-html', 'col', { 'col--7': d, 'col--9 col--offset-1': !d }), itemScope: !0, itemType: 'http://schema.org/Blog', children: c }), o && (0, n.jsx)('div', { className: 'col col--2', children: o })] }) }) });
   }
  },
  89905: (e, t, o) => {
   o.r(t), o.d(t, { default: () => D });
   var l = o(17310),
    r = o(61902),
    s = o(42082),
    n = (o(75271), o(4814)),
    a = o(46744),
    c = o(52676);
   function i(e) {
    let { children: t, className: o } = e;
    const {
      frontMatter: l,
      assets: r,
      metadata: { description: n },
     } = (0, s.C)(),
     { withBaseUrl: i } = (0, a.C)(),
     d = r.image ?? l.image,
     m = l.keywords ?? [];
    return (0, c.jsxs)('article', { className: o, itemProp: 'blogPost', itemScope: !0, itemType: 'https://schema.org/BlogPosting', children: [n && (0, c.jsx)('meta', { itemProp: 'description', content: n }), d && (0, c.jsx)('link', { itemProp: 'image', href: i(d, { absolute: !0 }) }), m.length > 0 && (0, c.jsx)('meta', { itemProp: 'keywords', content: m.join(',') }), t] });
   }
   var d = o(90441);
   const m = { title: 'title_edok' };
   function u(e) {
    let { className: t } = e;
    const { metadata: o, isBlogPostPage: l } = (0, s.C)(),
     { permalink: r, title: a } = o,
     i = l ? 'h1' : 'h2';
    return (0, c.jsx)(i, { className: (0, n.Z)(m.title, t), itemProp: 'headline', children: l ? a : (0, c.jsx)(d.Z, { itemProp: 'url', to: r, children: a }) });
   }
   var h = o(7512),
    p = o(30935);
   const g = { container: 'container_n4ii' };
   function b(e) {
    let { readingTime: t } = e;
    const o = (function () {
     const { selectMessage: e } = (0, p.c)();
     return (t) => {
      const o = Math.ceil(t);
      return e(o, (0, h.I)({ id: 'theme.blog.post.readingTime.plurals', description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One min read|{readingTime} min read' }, { readingTime: o }));
     };
    })();
    return (0, c.jsx)(c.Fragment, { children: o(t) });
   }
   function y(e) {
    let { date: t, formattedDate: o } = e;
    return (0, c.jsx)('time', { dateTime: t, itemProp: 'datePublished', children: o });
   }
   function x() {
    return (0, c.jsx)(c.Fragment, { children: ' \xb7 ' });
   }
   function v(e) {
    let { className: t } = e;
    const { metadata: o } = (0, s.C)(),
     { date: l, formattedDate: r, readingTime: a } = o;
    return (0, c.jsxs)('div', { className: (0, n.Z)(g.container, 'margin-vert--md', t), children: [(0, c.jsx)(y, { date: l, formattedDate: r }), void 0 !== a && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(x, {}), (0, c.jsx)(b, { readingTime: a })] })] });
   }
   function f(e) {
    return e.href ? (0, c.jsx)(d.Z, { ...e }) : (0, c.jsx)(c.Fragment, { children: e.children });
   }
   function j(e) {
    let { author: t, className: o } = e;
    const { name: l, title: r, url: s, imageURL: a, email: i } = t,
     d = s || (i && `mailto:${i}`) || void 0;
    return (0, c.jsxs)('div', { className: (0, n.Z)('avatar margin-bottom--sm', o), children: [a && (0, c.jsx)(f, { href: d, className: 'avatar__photo-link', children: (0, c.jsx)('img', { className: 'avatar__photo', src: a, alt: l, itemProp: 'image' }) }), l && (0, c.jsxs)('div', { className: 'avatar__intro', itemProp: 'author', itemScope: !0, itemType: 'https://schema.org/Person', children: [(0, c.jsx)('div', { className: 'avatar__name', children: (0, c.jsx)(f, { href: d, itemProp: 'url', children: (0, c.jsx)('span', { itemProp: 'name', children: l }) }) }), r && (0, c.jsx)('small', { className: 'avatar__subtitle', itemProp: 'description', children: r })] })] });
   }
   const k = { authorCol: 'authorCol_USJ8', imageOnlyAuthorRow: 'imageOnlyAuthorRow_JHgV', imageOnlyAuthorCol: 'imageOnlyAuthorCol_yWnH' };
   function P(e) {
    let { className: t } = e;
    const {
     metadata: { authors: o },
     assets: l,
    } = (0, s.C)();
    if (0 === o.length) return null;
    const r = o.every((e) => {
     let { name: t } = e;
     return !t;
    });
    return (0, c.jsx)('div', { className: (0, n.Z)('margin-top--md margin-bottom--sm', r ? k.imageOnlyAuthorRow : 'row', t), children: o.map((e, t) => (0, c.jsx)('div', { className: (0, n.Z)(!r && 'col col--6', r ? k.imageOnlyAuthorCol : k.authorCol), children: (0, c.jsx)(j, { author: { ...e, imageURL: l.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function _() {
    return (0, c.jsxs)('header', { children: [(0, c.jsx)(u, {}), (0, c.jsx)(v, {}), (0, c.jsx)(P, {})] });
   }
   var Z = o(47216),
    N = o(21581);
   function w(e) {
    let { children: t, className: o } = e;
    const { isBlogPostPage: l } = (0, s.C)();
    return (0, c.jsx)('div', { id: l ? Z.blogPostContainerID : void 0, className: (0, n.Z)('markdown', o), itemProp: 'articleBody', children: (0, c.jsx)(N.Z, { children: t }) });
   }
   var C = o(97885),
    T = o(45538);
   function F() {
    return (0, c.jsx)('b', { children: (0, c.jsx)(h.Z, { id: 'theme.blog.post.readMore', description: 'The label used in blog post item excerpts to link to full blog posts', children: 'Read More' }) });
   }
   function B(e) {
    const { blogPostTitle: t, ...o } = e;
    return (0, c.jsx)(d.Z, { 'aria-label': (0, h.I)({ message: 'Read more about {title}', id: 'theme.blog.post.readMoreLabel', description: 'The ARIA label for the link to full blog posts from excerpts' }, { title: t }), ...o, children: (0, c.jsx)(F, {}) });
   }
   const I = { blogPostFooterDetailsFull: 'blogPostFooterDetailsFull_D_b3' };
   function M() {
    const { metadata: e, isBlogPostPage: t } = (0, s.C)(),
     { tags: o, title: l, editUrl: r, hasTruncateMarker: a } = e,
     i = !t && a,
     d = o.length > 0;
    return d || i || r ? (0, c.jsxs)('footer', { className: (0, n.Z)('row docusaurus-mt-lg', t && I.blogPostFooterDetailsFull), children: [d && (0, c.jsx)('div', { className: (0, n.Z)('col', { 'col--9': i }), children: (0, c.jsx)(T.Z, { tags: o }) }), t && r && (0, c.jsx)('div', { className: 'col margin-top--sm', children: (0, c.jsx)(C.Z, { editUrl: r }) }), i && (0, c.jsx)('div', { className: (0, n.Z)('col text--right', { 'col--3': d }), children: (0, c.jsx)(B, { blogPostTitle: l, to: e.permalink }) })] }) : null;
   }
   function S(e) {
    let { children: t, className: o } = e;
    const l = (function () {
     const { isBlogPostPage: e } = (0, s.C)();
     return e ? void 0 : 'margin-bottom--xl';
    })();
    return (0, c.jsxs)(i, { className: (0, n.Z)(l, o), children: [(0, c.jsx)(_, {}), (0, c.jsx)(w, { children: t }), (0, c.jsx)(M, {})] });
   }
   function A() {
    const { assets: e, metadata: t } = (0, s.C)(),
     { title: o, description: r, date: n, tags: a, authors: i, frontMatter: d } = t,
     { keywords: m } = d,
     u = e.image ?? d.image;
    return (0, c.jsxs)(l.d, {
     title: o,
     description: r,
     keywords: m,
     image: u,
     children: [
      (0, c.jsx)('meta', { property: 'og:type', content: 'article' }),
      (0, c.jsx)('meta', { property: 'article:published_time', content: n }),
      i.some((e) => e.url) &&
       (0, c.jsx)('meta', {
        property: 'article:author',
        content: i
         .map((e) => e.url)
         .filter(Boolean)
         .join(','),
       }),
      a.length > 0 && (0, c.jsx)('meta', { property: 'article:tag', content: a.map((e) => e.label).join(',') }),
     ],
    });
   }
   var L = o(6348);
   function R(e) {
    const { nextItem: t, prevItem: o } = e;
    return (0, c.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, h.I)({ id: 'theme.blog.post.paginator.navAriaLabel', message: 'Blog post page navigation', description: 'The ARIA label for the blog posts pagination' }), children: [o && (0, c.jsx)(L.Z, { ...o, subLabel: (0, c.jsx)(h.Z, { id: 'theme.blog.post.paginator.newerPost', description: 'The blog post button label to navigate to the newer/previous post', children: 'Newer Post' }) }), t && (0, c.jsx)(L.Z, { ...t, subLabel: (0, c.jsx)(h.Z, { id: 'theme.blog.post.paginator.olderPost', description: 'The blog post button label to navigate to the older/next post', children: 'Older Post' }), isNext: !0 })] });
   }
   var O = o(39201),
    $ = o(29450);
   function U(e) {
    let { sidebar: t, children: o } = e;
    const { metadata: l, toc: r } = (0, s.C)(),
     { nextItem: n, prevItem: a, frontMatter: i } = l,
     { hide_table_of_contents: d, toc_min_heading_level: m, toc_max_heading_level: u } = i;
    return (0, c.jsxs)($.Z, { breadcrumbs: [{ label: 'Blog', href: '/blog' }, { label: l.title }], sidebar: t, toc: !d && r.length > 0 ? (0, c.jsx)(O.Z, { toc: r, minHeadingLevel: m, maxHeadingLevel: u }) : void 0, children: [(0, c.jsx)(S, { children: o }), (n || a) && (0, c.jsx)(R, { nextItem: n, prevItem: a })] });
   }
   function D(e) {
    const t = e.content;
    return (0, c.jsx)(s.n, { content: e.content, isBlogPostPage: !0, children: (0, c.jsxs)(l.FG, { className: (0, n.Z)(r.k.wrapper.blogPages, r.k.page.blogPostPage), children: [(0, c.jsx)(A, {}), (0, c.jsx)(U, { sidebar: e.sidebar, children: (0, c.jsx)(t, {}) })] }) });
   }
  },
  21581: (e, t, o) => {
   o.d(t, { Z: () => g });
   var l = o(24785),
    r = o(49992),
    s = o(79321),
    n = o(75271),
    a = o(52676);
   function c(e) {
    const t = n.Children.toArray(e.children),
     o = t.find((e) => n.isValidElement(e) && 'summary' === e.props?.mdxType),
     l = (0, a.jsx)(a.Fragment, { children: t.filter((e) => e !== o) });
    return (0, a.jsx)(s.Z, { ...e, summary: o, children: l });
   }
   var i = o(93176);
   function d(e) {
    const t = n.Children.map(e.children, (e) =>
     n.isValidElement(e)
      ? (function (e) {
         if (e.props?.mdxType && e.props.originalType) {
          const { ...t } = e.props;
          return n.createElement(e.props.originalType, t);
         }
         return e;
        })(e)
      : e,
    );
    return (0, a.jsx)(i.Z, { ...e, children: t });
   }
   var m = o(41179);
   function u(e) {
    let t,
     o = '';
    if ((0, n.isValidElement)(e.children)) {
     const l = e.children.props,
      r = 'string' == typeof l.className ? l.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     r && (t = r[1]), 'string' == typeof l.children && (o = l.children);
    }
    return (0, a.jsx)(m.u, { syntax: t, textContent: o, trim: !0 });
   }
   var h = o(78377),
    p = o(46506);
   function g(e) {
    let { children: t } = e;
    return (0, a.jsx)(l.Z, { components: { head: d, code: p.EK, a: p.rU, em: p.j$, pre: u, details: c, ul: p.QI, li: p.AS, img: p.Ee, h1: p.nL, h2: p.XJ, h3: p.aC, h4: p.k8, h5: p.by, h6: p.Cd, admonition: r.Z, mermaid: h.Z }, children: t });
   }
  },
 },
]);
