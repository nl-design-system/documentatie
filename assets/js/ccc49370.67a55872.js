'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [46103],
 {
  94818: (e, t, l) => {
   l.d(t, { C: () => c, n: () => a });
   var o = l(75271),
    r = l(40465),
    s = l(52676);
   const n = o.createContext(null);
   function a(e) {
    let { children: t, content: l, isBlogPostPage: r = !1 } = e;
    const a = (function (e) {
     let { content: t, isBlogPostPage: l } = e;
     return (0, o.useMemo)(() => ({ metadata: t.metadata, frontMatter: t.frontMatter, assets: t.assets, toc: t.toc, isBlogPostPage: l }), [t, l]);
    })({ content: l, isBlogPostPage: r });
    return (0, s.jsx)(n.Provider, { value: a, children: t });
   }
   function c() {
    const e = (0, o.useContext)(n);
    if (null === e) throw new r.i6('BlogPostProvider');
    return e;
   }
  },
  29513: (e, t, l) => {
   l.d(t, { c: () => i });
   var o = l(75271),
    r = l(94699);
   const s = ['zero', 'one', 'two', 'few', 'many', 'other'];
   function n(e) {
    return s.filter((t) => e.includes(t));
   }
   const a = { locale: 'en', pluralForms: n(['one', 'other']), select: (e) => (1 === e ? 'one' : 'other') };
   function c() {
    const {
     i18n: { currentLocale: e },
    } = (0, r.Z)();
    return (0, o.useMemo)(() => {
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
     selectMessage: (t, l) =>
      (function (e, t, l) {
       const o = e.split('|');
       if (1 === o.length) return o[0];
       o.length > l.pluralForms.length && console.error(`For locale=${l.locale}, a maximum of ${l.pluralForms.length} plural forms are expected (${l.pluralForms.join(',')}), but the message contains ${o.length}: ${e}`);
       const r = l.select(t),
        s = l.pluralForms.indexOf(r);
       return o[Math.min(s, o.length - 1)];
      })(l, t, e),
    };
   }
  },
  24009: (e, t, l) => {
   l.d(t, { Q: () => m });
   var o = l(57229),
    r = l(87573),
    s = l(92826),
    n = l(34616),
    a = l(16167),
    c = l(4814),
    i = l(75271),
    d = l(52676);
   const m = (e) => {
    let { breadcrumbs: t, ...l } = e;
    const m = [{ href: (0, s.Z)('/'), label: 'Home', rel: 'home' }, ...t],
     { pathname: u } = (0, r.TH)(),
     h = [...m].reverse().find((e) => e.href !== u);
    return (0, d.jsxs)(d.Fragment, {
     children: [
      (0, d.jsx)('div', {
       className: (0, c.Z)('breadcrumbs', 'breadcrumbs--desktop'),
       children: (0, d.jsx)(a.Qu, {
        ...l,
        label: 'breadcrumb',
        children: m.map((e, t, l) => {
         let { label: o, href: r, rel: s } = e,
          { length: n } = l;
         return (0, d.jsxs)(i.Fragment, { children: [(0, d.jsx)(a.yY, { href: r, current: t === n - 1, disabled: t === n - 1, rel: (0, c.Z)(s, { up: t === n - 2 }), children: o }), t < n - 1 && (0, d.jsx)(a.sc, { children: '/' })] }, t);
        }),
       }),
      }),
      h && (0, d.jsx)('div', { className: (0, c.Z)('breadcrumbs', 'breadcrumbs--mobile'), children: (0, d.jsx)(a.hE, { children: (0, d.jsxs)(o.r, { href: h.href, rel: h.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, d.jsx)(a.JO, { children: (0, d.jsx)(n.Z, {}) }), h.label] }) }) }),
     ],
    });
   };
  },
  41179: (e, t, l) => {
   l.d(t, { u: () => i });
   var o = l(16167),
    r = l(60648),
    s = l(75271),
    n = l(40761);
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
   var c = l(52676);
   function i(e) {
    let { lineNumber: t, syntax: l, textContent: i, trim: d } = e,
     m = i;
    const { title: u, type: h } = (0, s.useContext)(n.n),
     p = (0, s.useId)();
    return (
     d && (m = m.trim()),
     (0, c.jsx)(r.y$, {
      theme: a,
      code: m,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: r, getLineProps: s, getTokenProps: n } = e;
       return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(o.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: l, children: r.map((e, l) => (0, c.jsxs)('span', { ...s({ line: e }), children: [t && (0, c.jsx)('span', { children: l + 1 }), e.map((e, t) => (0, c.jsx)('span', { ...n({ token: e }) }, t)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  40761: (e, t, l) => {
   l.d(t, { X: () => d, n: () => i });
   var o = l(69244),
    r = l(20061),
    s = l(16167),
    n = l(4814),
    a = l(75271),
    c = l(52676);
   const i = (0, a.createContext)({}),
    d = (e) => {
     let { title: t, appearance: l, description: a, children: d, figure: m } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = m ? 'figure' : 'div',
      p = m ? 'figcaption' : 'div';
     return (0, c.jsxs)(h, { className: (0, n.Z)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof t ? t?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.nv, { className: (0, n.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(s.nv, { children: t })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.nv, { className: (0, n.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(s.nv, { children: t })] }), a] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: t, type: u[l] }, children: d }) })] });
    };
  },
  29450: (e, t, l) => {
   l.d(t, { Z: () => a });
   var o = l(24009),
    r = l(95360),
    s = l(4814),
    n = l(52676);
   function a(e) {
    const { sidebar: t, toc: l, breadcrumbs: a = [], children: c, ...i } = e,
     d = t && t.items.length > 0;
    return (0, n.jsx)(r.Z, { ...i, children: (0, n.jsx)('div', { className: 'container margin-vert--md', children: (0, n.jsxs)('div', { className: 'row', children: [(0, n.jsx)('div', { className: 'col col--9 col--offset-1', children: (0, n.jsx)(o.Q, { breadcrumbs: a }) }), (0, n.jsx)('main', { className: (0, s.Z)('utrecht-document', 'utrecht-html', 'col', { 'col--7': d, 'col--9 col--offset-1': !d }), itemScope: !0, itemType: 'http://schema.org/Blog', children: c }), l && (0, n.jsx)('div', { className: 'col col--2', children: l })] }) }) });
   }
  },
  41969: (e, t, l) => {
   l.r(t), l.d(t, { default: () => D });
   var o = l(14225),
    r = l(65697),
    s = l(94818),
    n = (l(75271), l(4814)),
    a = l(92826),
    c = l(52676);
   function i(e) {
    let { children: t, className: l } = e;
    const {
      frontMatter: o,
      assets: r,
      metadata: { description: n },
     } = (0, s.C)(),
     { withBaseUrl: i } = (0, a.C)(),
     d = r.image ?? o.image,
     m = o.keywords ?? [];
    return (0, c.jsxs)('article', { className: l, itemProp: 'blogPost', itemScope: !0, itemType: 'https://schema.org/BlogPosting', children: [n && (0, c.jsx)('meta', { itemProp: 'description', content: n }), d && (0, c.jsx)('link', { itemProp: 'image', href: i(d, { absolute: !0 }) }), m.length > 0 && (0, c.jsx)('meta', { itemProp: 'keywords', content: m.join(',') }), t] });
   }
   var d = l(83033);
   const m = { title: 'title_hXf4' };
   function u(e) {
    let { className: t } = e;
    const { metadata: l, isBlogPostPage: o } = (0, s.C)(),
     { permalink: r, title: a } = l,
     i = o ? 'h1' : 'h2';
    return (0, c.jsx)(i, { className: (0, n.Z)(m.title, t), itemProp: 'headline', children: o ? a : (0, c.jsx)(d.Z, { itemProp: 'url', to: r, children: a }) });
   }
   var h = l(40217),
    p = l(29513);
   const g = { container: 'container_t8UG' };
   function b(e) {
    let { readingTime: t } = e;
    const l = (function () {
     const { selectMessage: e } = (0, p.c)();
     return (t) => {
      const l = Math.ceil(t);
      return e(l, (0, h.I)({ id: 'theme.blog.post.readingTime.plurals', description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One min read|{readingTime} min read' }, { readingTime: l }));
     };
    })();
    return (0, c.jsx)(c.Fragment, { children: l(t) });
   }
   function x(e) {
    let { date: t, formattedDate: l } = e;
    return (0, c.jsx)('time', { dateTime: t, itemProp: 'datePublished', children: l });
   }
   function y() {
    return (0, c.jsx)(c.Fragment, { children: ' \xb7 ' });
   }
   function j(e) {
    let { className: t } = e;
    const { metadata: l } = (0, s.C)(),
     { date: o, formattedDate: r, readingTime: a } = l;
    return (0, c.jsxs)('div', { className: (0, n.Z)(g.container, 'margin-vert--md', t), children: [(0, c.jsx)(x, { date: o, formattedDate: r }), void 0 !== a && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(y, {}), (0, c.jsx)(b, { readingTime: a })] })] });
   }
   function v(e) {
    return e.href ? (0, c.jsx)(d.Z, { ...e }) : (0, c.jsx)(c.Fragment, { children: e.children });
   }
   function f(e) {
    let { author: t, className: l } = e;
    const { name: o, title: r, url: s, imageURL: a, email: i } = t,
     d = s || (i && `mailto:${i}`) || void 0;
    return (0, c.jsxs)('div', { className: (0, n.Z)('avatar margin-bottom--sm', l), children: [a && (0, c.jsx)(v, { href: d, className: 'avatar__photo-link', children: (0, c.jsx)('img', { className: 'avatar__photo', src: a, alt: o, itemProp: 'image' }) }), o && (0, c.jsxs)('div', { className: 'avatar__intro', itemProp: 'author', itemScope: !0, itemType: 'https://schema.org/Person', children: [(0, c.jsx)('div', { className: 'avatar__name', children: (0, c.jsx)(v, { href: d, itemProp: 'url', children: (0, c.jsx)('span', { itemProp: 'name', children: o }) }) }), r && (0, c.jsx)('small', { className: 'avatar__subtitle', itemProp: 'description', children: r })] })] });
   }
   const k = { authorCol: 'authorCol_nwtU', imageOnlyAuthorRow: 'imageOnlyAuthorRow_uHBR', imageOnlyAuthorCol: 'imageOnlyAuthorCol_Wkpi' };
   function P(e) {
    let { className: t } = e;
    const {
     metadata: { authors: l },
     assets: o,
    } = (0, s.C)();
    if (0 === l.length) return null;
    const r = l.every((e) => {
     let { name: t } = e;
     return !t;
    });
    return (0, c.jsx)('div', { className: (0, n.Z)('margin-top--md margin-bottom--sm', r ? k.imageOnlyAuthorRow : 'row', t), children: l.map((e, t) => (0, c.jsx)('div', { className: (0, n.Z)(!r && 'col col--6', r ? k.imageOnlyAuthorCol : k.authorCol), children: (0, c.jsx)(f, { author: { ...e, imageURL: o.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function _() {
    return (0, c.jsxs)('header', { children: [(0, c.jsx)(u, {}), (0, c.jsx)(j, {}), (0, c.jsx)(P, {})] });
   }
   var N = l(47216),
    Z = l(39731);
   function w(e) {
    let { children: t, className: l } = e;
    const { isBlogPostPage: o } = (0, s.C)();
    return (0, c.jsx)('div', { id: o ? N.blogPostContainerID : void 0, className: (0, n.Z)('markdown', l), itemProp: 'articleBody', children: (0, c.jsx)(Z.Z, { children: t }) });
   }
   var C = l(64477),
    F = l(8481);
   function T() {
    return (0, c.jsx)('b', { children: (0, c.jsx)(h.Z, { id: 'theme.blog.post.readMore', description: 'The label used in blog post item excerpts to link to full blog posts', children: 'Read More' }) });
   }
   function B(e) {
    const { blogPostTitle: t, ...l } = e;
    return (0, c.jsx)(d.Z, { 'aria-label': (0, h.I)({ message: 'Read more about {title}', id: 'theme.blog.post.readMoreLabel', description: 'The ARIA label for the link to full blog posts from excerpts' }, { title: t }), ...l, children: (0, c.jsx)(T, {}) });
   }
   const I = { blogPostFooterDetailsFull: 'blogPostFooterDetailsFull_c1qF' };
   function M() {
    const { metadata: e, isBlogPostPage: t } = (0, s.C)(),
     { tags: l, title: o, editUrl: r, hasTruncateMarker: a } = e,
     i = !t && a,
     d = l.length > 0;
    return d || i || r ? (0, c.jsxs)('footer', { className: (0, n.Z)('row docusaurus-mt-lg', t && I.blogPostFooterDetailsFull), children: [d && (0, c.jsx)('div', { className: (0, n.Z)('col', { 'col--9': i }), children: (0, c.jsx)(F.Z, { tags: l }) }), t && r && (0, c.jsx)('div', { className: 'col margin-top--sm', children: (0, c.jsx)(C.Z, { editUrl: r }) }), i && (0, c.jsx)('div', { className: (0, n.Z)('col text--right', { 'col--3': d }), children: (0, c.jsx)(B, { blogPostTitle: o, to: e.permalink }) })] }) : null;
   }
   function $(e) {
    let { children: t, className: l } = e;
    const o = (function () {
     const { isBlogPostPage: e } = (0, s.C)();
     return e ? void 0 : 'margin-bottom--xl';
    })();
    return (0, c.jsxs)(i, { className: (0, n.Z)(o, l), children: [(0, c.jsx)(_, {}), (0, c.jsx)(w, { children: t }), (0, c.jsx)(M, {})] });
   }
   function L() {
    const { assets: e, metadata: t } = (0, s.C)(),
     { title: l, description: r, date: n, tags: a, authors: i, frontMatter: d } = t,
     { keywords: m } = d,
     u = e.image ?? d.image;
    return (0, c.jsxs)(o.d, {
     title: l,
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
   var R = l(49687);
   function S(e) {
    const { nextItem: t, prevItem: l } = e;
    return (0, c.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, h.I)({ id: 'theme.blog.post.paginator.navAriaLabel', message: 'Blog post page navigation', description: 'The ARIA label for the blog posts pagination' }), children: [l && (0, c.jsx)(R.Z, { ...l, subLabel: (0, c.jsx)(h.Z, { id: 'theme.blog.post.paginator.newerPost', description: 'The blog post button label to navigate to the newer/previous post', children: 'Newer Post' }) }), t && (0, c.jsx)(R.Z, { ...t, subLabel: (0, c.jsx)(h.Z, { id: 'theme.blog.post.paginator.olderPost', description: 'The blog post button label to navigate to the older/next post', children: 'Older Post' }), isNext: !0 })] });
   }
   var A = l(62178),
    O = l(29450);
   function U(e) {
    let { sidebar: t, children: l } = e;
    const { metadata: o, toc: r } = (0, s.C)(),
     { nextItem: n, prevItem: a, frontMatter: i } = o,
     { hide_table_of_contents: d, toc_min_heading_level: m, toc_max_heading_level: u } = i;
    return (0, c.jsxs)(O.Z, {
     breadcrumbs: [
      { label: 'Blog', href: '/blog' },
      { label: o.title, href: '#' },
     ],
     sidebar: t,
     toc: !d && r.length > 0 ? (0, c.jsx)(A.Z, { toc: r, minHeadingLevel: m, maxHeadingLevel: u }) : void 0,
     children: [(0, c.jsx)($, { children: l }), (n || a) && (0, c.jsx)(S, { nextItem: n, prevItem: a })],
    });
   }
   function D(e) {
    const t = e.content;
    return (0, c.jsx)(s.n, { content: e.content, isBlogPostPage: !0, children: (0, c.jsxs)(o.FG, { className: (0, n.Z)(r.k.wrapper.blogPages, r.k.page.blogPostPage), children: [(0, c.jsx)(L, {}), (0, c.jsx)(U, { sidebar: e.sidebar, children: (0, c.jsx)(t, {}) })] }) });
   }
  },
  39731: (e, t, l) => {
   l.d(t, { Z: () => h });
   var o = l(40139),
    r = l(73497),
    s = l(27583),
    n = l(75271),
    a = l(52676);
   function c(e) {
    const t = n.Children.toArray(e.children),
     l = t.find((e) => n.isValidElement(e) && 'summary' === e.props?.mdxType),
     o = (0, a.jsx)(a.Fragment, { children: t.filter((e) => e !== l) });
    return (0, a.jsx)(s.Z, { ...e, summary: l, children: o });
   }
   var i = l(41179);
   function d(e) {
    let t,
     l = '';
    if ((0, n.isValidElement)(e.children)) {
     const o = e.children.props,
      r = 'string' == typeof o.className ? o.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     r && (t = r[1]), 'string' == typeof o.children && (l = o.children);
    }
    return (0, a.jsx)(i.u, { syntax: t, textContent: l, trim: !0 });
   }
   var m = l(35519),
    u = l(16167);
   function h(e) {
    let { children: t } = e;
    return (0, a.jsx)(o.Z, {
     components: {
      code: u.EK,
      a: u.rU,
      em: u.j$,
      pre: d,
      details: c,
      ul: (e) => {
       let { children: t } = e;
       return (0, a.jsx)(u.QI, { className: 'utrecht-unordered-list--html-content', children: t });
      },
      ol: (e) => {
       let { children: t } = e;
       return (0, a.jsx)(u.GS, { className: 'utrecht-ordered-list--html-content', children: t });
      },
      img: u.Ee,
      h1: u.nL,
      h2: u.XJ,
      h3: u.aC,
      h4: u.k8,
      h5: u.by,
      h6: u.Cd,
      admonition: r.Z,
      mermaid: m.Z,
     },
     children: t,
    });
   }
  },
 },
]);
