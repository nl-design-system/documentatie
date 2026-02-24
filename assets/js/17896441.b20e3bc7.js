'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [18401],
 {
  3227(e, n, t) {
   t.d(n, { A: () => v });
   var s = t(60316),
    l = t(45282),
    o = t(2264),
    r = t(29181),
    i = t(13526),
    a = t(86070);
   function c({ href: e, icon: n = '', title: t, description: s, children: o }) {
    return (0, a.jsxs)('div', { className: 'card', children: [e ? (0, a.jsx)(l.N, { href: e, className: (0, i.A)('cardLink', 'utrecht-link'), children: (0, a.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }) }) : (0, a.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }), s && (0, a.jsx)('p', { className: 'cardDescription', children: s }), o] });
   }
   function d({ item: e }) {
    return (0, a.jsx)(c, { title: e.label, description: e.description, children: (0, a.jsx)(r.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, a.jsx)(r.Er, { children: 'link' === e.type ? (0, a.jsx)(l.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, a.jsxs)(l.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, a.jsx)(a.Fragment, {}) }, n)) }) });
   }
   function m({ item: e }) {
    const n = (0, o.cC)(e.docId);
    return (0, a.jsx)(c, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function u({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, a.jsx)(m, { item: e });
     case 'category':
      return (0, a.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function h({ className: e }) {
    const n = (0, s.$S)();
    return (0, a.jsx)(v, { items: n.items, className: e });
   }
   function v(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, a.jsx)(h, { ...e });
    const l = (0, s.d1)(n);
    return (0, a.jsx)('section', { className: (0, i.A)('row', t), ...e, children: l.map((e, n) => (0, a.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, a.jsx)(u, { item: e }) }, n)) });
   }
  },
  7619(e, n, t) {
   t.d(n, { A: () => i });
   t(30758);
   var s = t(13526),
    l = t(18236),
    o = t(52266),
    r = t(86070);
   function i(e) {
    const { className: n, previous: t, next: i } = e;
    return (0, r.jsxs)('nav', { className: (0, s.A)(n, 'pagination-nav'), 'aria-label': (0, l.T)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [t && (0, r.jsx)(o.A, { ...t, subLabel: (0, r.jsx)(l.A, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), i && (0, r.jsx)(o.A, { ...i, subLabel: (0, r.jsx)(l.A, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  15638(e, n, t) {
   t.d(n, { $: () => d, x: () => c });
   var s = t(4077),
    l = t(58315),
    o = t(46447),
    r = t(13526),
    i = t(30758),
    a = t(86070);
   const c = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: t, children: i, figure: d }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div';
     return (0, a.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, a.jsx)(o.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, a.jsx)(o.fz, { children: e })] }), t] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: m[n] }, children: i }) })] });
    };
  },
  45282(e, n, t) {
   t.d(n, { F: () => o, N: () => r });
   var s = t(13526),
    l = t(86070);
   const o = ({ children: e, ...n }) => {
     const { to: t, href: s, ...o } = n;
     let r = t || s;
     const i = new URL(r, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === i.origin ? ((i.pathname = i.pathname.endsWith('/') ? i.pathname : `${i.pathname}/`), (r = i.toString().replace('https://nldesignsystem.nl', ''))) : ((o.target = '_blank'), (o.rel = 'noopener noreferrer')), (0, l.jsx)('a', { href: r, ...o, children: e }));
    },
    r = ({ className: e, ...n }) => (0, l.jsx)(o, { className: (0, s.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  69284(e, n, t) {
   t.d(n, { M: () => c });
   var s = t(46447),
    l = t(16194),
    o = t(30758),
    r = t(15638);
   const i = {
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
   var a = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: m, type: u } = (0, o.useContext)(r.x),
     h = (0, o.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(l.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: l, getTokenProps: o }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, a.jsx)(s.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: n, children: t.map((n, t) => (0, a.jsxs)('span', { ...l({ line: n }), children: [e && (0, a.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  76310(e, n, t) {
   t.d(n, { A: () => c });
   t(30758);
   var s = t(13526),
    l = t(71639),
    o = t(79540),
    r = t(76713),
    i = t(86070);
   function a({ className: e }) {
    return (0, i.jsx)(r.A, { type: 'caution', title: (0, i.jsx)(o.Rc, {}), className: (0, s.A)(e, l.G.common.unlistedBanner), children: (0, i.jsx)(o.Uh, {}) });
   }
   function c(e) {
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.AE, {}), (0, i.jsx)(a, { ...e })] });
   }
  },
  78361(e, n, t) {
   (t.r(n), t.d(n, { default: () => D }));
   var s = t(30758),
    l = t(86332),
    o = t(90076),
    r = t(86070);
   const i = s.createContext(null);
   function a({ children: e, content: n }) {
    const t = (function (e) {
     return (0, s.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(n);
    return (0, r.jsx)(i.Provider, { value: t, children: e });
   }
   function c() {
    const e = (0, s.useContext)(i);
    if (null === e) throw new o.dV('DocProvider');
    return e;
   }
   function d() {
    const { metadata: e, frontMatter: n, assets: t } = c();
    return (0, r.jsx)(l.be, { title: e.title, description: e.description, keywords: n.keywords, image: t.image ?? n.image });
   }
   var m = t(13526),
    u = t(14149),
    h = t(7619);
   function v() {
    const { metadata: e } = c();
    return (0, r.jsx)(h.A, { className: 'docusaurus-mt-lg', previous: e.previous, next: e.next });
   }
   var p = t(92410),
    x = t(88519),
    b = t(71639),
    f = t(97068),
    g = t(29307);
   function j() {
    const { metadata: e } = c(),
     { editUrl: n, lastUpdatedAt: t, lastUpdatedBy: s, tags: l } = e,
     o = l.length > 0,
     i = !!(n || t || s);
    return o || i ? (0, r.jsxs)('footer', { className: (0, m.A)(b.G.docs.docFooter, 'docusaurus-mt-lg'), children: [o && (0, r.jsx)('div', { className: (0, m.A)('row margin-top--sm', b.G.docs.docFooterTagsRow), children: (0, r.jsx)('div', { className: 'col', children: (0, r.jsx)(f.A, { tags: l }) }) }), i && (0, r.jsx)(g.A, { className: (0, m.A)('margin-top--sm', b.G.docs.docFooterEditMetaRow), editUrl: n, lastUpdatedAt: t, lastUpdatedBy: s })] }) : null;
   }
   var y = t(88014),
    N = t(85412),
    A = t(18236);
   const k = 'tocCollapsibleButton_XjgU',
    _ = 'tocCollapsibleButtonExpanded_Glk4';
   function L({ collapsed: e, ...n }) {
    return (0, r.jsx)('button', { type: 'button', ...n, className: (0, m.A)('clean-btn', k, !e && _, n.className), children: (0, r.jsx)(A.A, { id: 'theme.TOCCollapsible.toggleButtonLabel', description: 'The label used by the button on the collapsible TOC component', children: 'On this page' }) });
   }
   const C = 'tocCollapsible_RuM8',
    T = 'tocCollapsibleContent_DMSN',
    H = 'tocCollapsibleExpanded_w112';
   function w({ toc: e, className: n, minHeadingLevel: t, maxHeadingLevel: s }) {
    const { collapsed: l, toggleCollapsed: o } = (0, y.u)({ initialState: !0 });
    return (0, r.jsxs)('div', { className: (0, m.A)(C, !l && H, n), children: [(0, r.jsx)(L, { collapsed: l, onClick: o }), (0, r.jsx)(y.N, { lazy: !0, className: T, collapsed: l, children: (0, r.jsx)(N.A, { toc: e, minHeadingLevel: t, maxHeadingLevel: s }) })] });
   }
   const M = 'tocMobile_zSi9';
   function S() {
    const { toc: e, frontMatter: n } = c();
    return (0, r.jsx)(w, { toc: e, minHeadingLevel: n.toc_min_heading_level, maxHeadingLevel: n.toc_max_heading_level, className: (0, m.A)(b.G.docs.docTocMobile, M) });
   }
   var B = t(78690);
   function E() {
    const { toc: e, frontMatter: n } = c();
    return (0, r.jsx)(B.A, { toc: e, minHeadingLevel: n.toc_min_heading_level, maxHeadingLevel: n.toc_max_heading_level, className: b.G.docs.docTocDesktop });
   }
   var I = t(39470),
    V = t(85963);
   function F({ children: e }) {
    const n = (function () {
     const { metadata: e, frontMatter: n, contentTitle: t } = c();
     return n.hide_title || void 0 !== t ? null : e.title;
    })();
    return (0, r.jsxs)('div', { className: (0, m.A)(b.G.docs.docMarkdown, 'markdown'), children: [n && (0, r.jsx)('header', { children: (0, r.jsx)(I.A, { as: 'h1', children: n }) }), (0, r.jsx)(V.A, { children: e })] });
   }
   var $ = t(87836),
    O = t(82826);
   const U = 'docItemContainer_aQSU',
    G = 'docItemCol_pMYj';
   function R({ children: e }) {
    const n = (function () {
      const { frontMatter: e, toc: n } = c(),
       t = (0, u.l)(),
       s = e.hide_table_of_contents,
       l = !s && n.length > 0;
      return { hidden: s, mobile: l ? (0, r.jsx)(S, {}) : void 0, desktop: !l || ('desktop' !== t && 'ssr' !== t) ? void 0 : (0, r.jsx)(E, {}) };
     })(),
     { metadata: t } = c();
    return (0, r.jsxs)('div', { className: 'row', children: [(0, r.jsxs)('div', { className: (0, m.A)('col', !n.hidden && G), children: [(0, r.jsx)(O.A, { metadata: t }), (0, r.jsx)(p.A, {}), (0, r.jsxs)('div', { className: U, children: [(0, r.jsxs)('article', { children: [(0, r.jsx)($.A, {}), (0, r.jsx)(x.A, {}), n.mobile, (0, r.jsx)(F, { children: e }), (0, r.jsx)(j, {})] }), (0, r.jsx)(v, {})] })] }), n.desktop && (0, r.jsx)('div', { className: 'col col--3', children: n.desktop })] });
   }
   function D(e) {
    const n = `docs-doc-id-${e.content.metadata.id}`,
     t = e.content;
    return (0, r.jsx)(a, { content: e.content, children: (0, r.jsxs)(l.e3, { className: n, children: [(0, r.jsx)(d, {}), (0, r.jsx)(R, { children: (0, r.jsx)(t, {}) })] }) });
   }
  },
  78690(e, n, t) {
   t.d(n, { A: () => i });
   t(30758);
   var s = t(13526),
    l = t(85412);
   const o = 'tableOfContents_yXC1';
   var r = t(86070);
   function i({ className: e, ...n }) {
    return (0, r.jsx)('div', { className: (0, s.A)(o, 'thin-scrollbar', e), children: (0, r.jsx)(l.A, { ...n, linkClassName: 'table-of-contents__link toc-highlight', linkActiveClassName: 'table-of-contents__link--active' }) });
   }
  },
  79540(e, n, t) {
   t.d(n, { AE: () => a, Rc: () => r, TT: () => d, Uh: () => i, Yh: () => c });
   t(30758);
   var s = t(18236),
    l = t(70241),
    o = t(86070);
   function r() {
    return (0, o.jsx)(s.A, { id: 'theme.contentVisibility.unlistedBanner.title', description: 'The unlisted content banner title', children: 'Unlisted page' });
   }
   function i() {
    return (0, o.jsx)(s.A, { id: 'theme.contentVisibility.unlistedBanner.message', description: 'The unlisted content banner message', children: 'This page is unlisted. Search engines will not index it, and only users having a direct link can access it.' });
   }
   function a() {
    return (0, o.jsx)(l.A, { children: (0, o.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function c() {
    return (0, o.jsx)(s.A, { id: 'theme.contentVisibility.draftBanner.title', description: 'The draft content banner title', children: 'Draft page' });
   }
   function d() {
    return (0, o.jsx)(s.A, { id: 'theme.contentVisibility.draftBanner.message', description: 'The draft content banner message', children: 'This page is a draft. It will only be visible in dev and be excluded from the production build.' });
   }
  },
  82826(e, n, t) {
   t.d(n, { A: () => d });
   t(30758);
   var s = t(13526),
    l = t(79540),
    o = t(71639),
    r = t(76713),
    i = t(86070);
   function a({ className: e }) {
    return (0, i.jsx)(r.A, { type: 'caution', title: (0, i.jsx)(l.Yh, {}), className: (0, s.A)(e, o.G.common.draftBanner), children: (0, i.jsx)(l.TT, {}) });
   }
   var c = t(76310);
   function d({ metadata: e }) {
    const { unlisted: n, frontMatter: t } = e;
    return (0, i.jsxs)(i.Fragment, { children: [(n || t.unlisted) && (0, i.jsx)(c.A, {}), t.draft && (0, i.jsx)(a, {})] });
   }
  },
  85412(e, n, t) {
   t.d(n, { A: () => p });
   var s = t(30758),
    l = t(87014);
   function o(e) {
    const n = e.map((e) => ({ ...e, parentIndex: -1, children: [] })),
     t = Array(7).fill(-1);
    n.forEach((e, n) => {
     const s = t.slice(2, e.level);
     ((e.parentIndex = Math.max(...s)), (t[e.level] = n));
    });
    const s = [];
    return (
     n.forEach((e) => {
      const { parentIndex: t, ...l } = e;
      t >= 0 ? n[t].children.push(l) : s.push(l);
     }),
     s
    );
   }
   function r({ toc: e, minHeadingLevel: n, maxHeadingLevel: t }) {
    return e.flatMap((e) => {
     const s = r({ toc: e.children, minHeadingLevel: n, maxHeadingLevel: t });
     return (function (e) {
      return e.level >= n && e.level <= t;
     })(e)
      ? [{ ...e, children: s }]
      : s;
    });
   }
   function i(e) {
    const n = e.getBoundingClientRect();
    return n.top === n.bottom ? i(e.parentNode) : n;
   }
   function a(e, { anchorTopOffset: n }) {
    const t = e.find((e) => i(e).top >= n);
    if (t) {
     return (function (e) {
      return e.top > 0 && e.bottom < window.innerHeight / 2;
     })(i(t))
      ? t
      : (e[e.indexOf(t) - 1] ?? null);
    }
    return e[e.length - 1] ?? null;
   }
   function c() {
    const e = (0, s.useRef)(0),
     {
      navbar: { hideOnScroll: n },
     } = (0, l.p)();
    return (
     (0, s.useEffect)(() => {
      e.current = n ? 0 : document.querySelector('.navbar').clientHeight;
     }, [n]),
     e
    );
   }
   function d(e) {
    const n = (0, s.useRef)(void 0),
     t = c();
    (0, s.useEffect)(() => {
     if (!e) return () => {};
     const { linkClassName: s, linkActiveClassName: l, minHeadingLevel: o, maxHeadingLevel: r } = e;
     function i() {
      const e = (function (e) {
        return Array.from(document.getElementsByClassName(e));
       })(s),
       i = (function ({ minHeadingLevel: e, maxHeadingLevel: n }) {
        const t = [];
        for (let s = e; s <= n; s += 1) t.push(`h${s}.anchor`);
        return Array.from(document.querySelectorAll(t.join()));
       })({ minHeadingLevel: o, maxHeadingLevel: r }),
       c = a(i, { anchorTopOffset: t.current }),
       d = e.find(
        (e) =>
         c &&
         c.id ===
          (function (e) {
           return decodeURIComponent(e.href.substring(e.href.indexOf('#') + 1));
          })(e),
       );
      e.forEach((e) => {
       !(function (e, t) {
        t ? (n.current && n.current !== e && n.current.classList.remove(l), e.classList.add(l), (n.current = e)) : e.classList.remove(l);
       })(e, e === d);
      });
     }
     return (
      document.addEventListener('scroll', i),
      document.addEventListener('resize', i),
      i(),
      () => {
       (document.removeEventListener('scroll', i), document.removeEventListener('resize', i));
      }
     );
    }, [e, t]);
   }
   var m = t(63195),
    u = t(86070);
   function h({ toc: e, className: n, linkClassName: t, isChild: s }) {
    return e.length ? (0, u.jsx)('ul', { className: s ? void 0 : n, children: e.map((e) => (0, u.jsxs)('li', { children: [(0, u.jsx)(m.A, { to: `#${e.id}`, className: t ?? void 0, dangerouslySetInnerHTML: { __html: e.value } }), (0, u.jsx)(h, { isChild: !0, toc: e.children, className: n, linkClassName: t })] }, e.id)) }) : null;
   }
   const v = s.memo(h);
   function p({ toc: e, className: n = 'table-of-contents table-of-contents__left-border', linkClassName: t = 'table-of-contents__link', linkActiveClassName: i, minHeadingLevel: a, maxHeadingLevel: c, ...m }) {
    const h = (0, l.p)(),
     p = a ?? h.tableOfContents.minHeadingLevel,
     x = c ?? h.tableOfContents.maxHeadingLevel,
     b = (function ({ toc: e, minHeadingLevel: n, maxHeadingLevel: t }) {
      return (0, s.useMemo)(() => r({ toc: o(e), minHeadingLevel: n, maxHeadingLevel: t }), [e, n, t]);
     })({ toc: e, minHeadingLevel: p, maxHeadingLevel: x });
    return (
     d(
      (0, s.useMemo)(() => {
       if (t && i) return { linkClassName: t, linkActiveClassName: i, minHeadingLevel: p, maxHeadingLevel: x };
      }, [t, i, p, x]),
     ),
     (0, u.jsx)(v, { toc: b, className: n, linkClassName: t, ...m })
    );
   }
  },
  85963(e, n, t) {
   t.d(n, { A: () => h });
   var s = t(18439),
    l = t(76713),
    o = t(5784),
    r = t(30758),
    i = t(86070);
   function a(e) {
    const n = r.Children.toArray(e.children),
     t = n.find((e) => r.isValidElement(e) && 'summary' === e.props?.mdxType),
     s = (0, i.jsx)(i.Fragment, { children: n.filter((e) => e !== t) });
    return (0, i.jsx)(o.A, { ...e, summary: t, children: s });
   }
   var c = t(69284);
   function d(e) {
    let n,
     t = '';
    if ((0, r.isValidElement)(e.children)) {
     const s = e.children.props,
      l = 'string' == typeof s.className ? s.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     (l && (n = l[1]), 'string' == typeof s.children && (t = s.children));
    }
    return (0, i.jsx)(c.M, { syntax: n, textContent: t, trim: !0 });
   }
   var m = t(46447),
    u = t(89874);
   function h({ children: e }) {
    return (0, i.jsx)(s.x, { components: { code: m.Cy, a: m.N_, em: m.lx, pre: d, details: a, ul: ({ children: e }) => (0, i.jsx)(m.Xy, { className: 'utrecht-unordered-list--html-content', children: e }), ol: ({ children: e }) => (0, i.jsx)(m._J, { className: 'utrecht-ordered-list--html-content', children: e }), img: m._V, h1: m._, h2: m.fV, h3: m._B, h4: m.f_, h5: m.mM, h6: m.TT, admonition: l.A, OverviewPage: u.F }, children: e });
   }
  },
  87836(e, n, t) {
   t.d(n, { A: () => j });
   t(30758);
   var s = t(13526),
    l = t(71639),
    o = t(2264),
    r = t(29281),
    i = t(63195),
    a = t(18236),
    c = t(63320),
    d = t(86070);
   function m(e) {
    return (0, d.jsx)('svg', { viewBox: '0 0 24 24', ...e, children: (0, d.jsx)('path', { d: 'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z', fill: 'currentColor' }) });
   }
   const u = 'breadcrumbHomeIcon_nXN1';
   function h() {
    const e = (0, c.Ay)('/');
    return (0, d.jsx)('li', { className: 'breadcrumbs__item', children: (0, d.jsx)(i.A, { 'aria-label': (0, a.T)({ id: 'theme.docs.breadcrumbs.home', message: 'Home page', description: 'The ARIA label for the home page in the breadcrumbs' }), className: 'breadcrumbs__link', href: e, children: (0, d.jsx)(m, { className: u }) }) });
   }
   var v = t(70241),
    p = t(74147);
   function x(e) {
    const n = (function ({ breadcrumbs: e }) {
     const { siteConfig: n } = (0, p.A)();
     return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: e.filter((e) => e.href).map((e, t) => ({ '@type': 'ListItem', position: t + 1, name: e.label, item: `${n.url}${e.href}` })) };
    })({ breadcrumbs: e.breadcrumbs });
    return (0, d.jsx)(v.A, { children: (0, d.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(n) }) });
   }
   const b = 'breadcrumbsContainer_Bqeg';
   function f({ children: e, href: n, isLast: t }) {
    const s = 'breadcrumbs__link';
    return t ? (0, d.jsx)('span', { className: s, children: e }) : n ? (0, d.jsx)(i.A, { className: s, href: n, children: (0, d.jsx)('span', { children: e }) }) : (0, d.jsx)('span', { className: s, children: e });
   }
   function g({ children: e, active: n }) {
    return (0, d.jsx)('li', { className: (0, s.A)('breadcrumbs__item', { 'breadcrumbs__item--active': n }), children: e });
   }
   function j() {
    const e = (0, o.OF)(),
     n = (0, r.Dt)();
    return e
     ? (0, d.jsxs)(d.Fragment, {
        children: [
         (0, d.jsx)(x, { breadcrumbs: e }),
         (0, d.jsx)('nav', {
          className: (0, s.A)(l.G.docs.docBreadcrumbs, b),
          'aria-label': (0, a.T)({ id: 'theme.docs.breadcrumbs.navAriaLabel', message: 'Breadcrumbs', description: 'The ARIA label for the breadcrumbs' }),
          children: (0, d.jsxs)('ul', {
           className: 'breadcrumbs',
           children: [
            n && (0, d.jsx)(h, {}),
            e.map((n, t) => {
             const s = t === e.length - 1,
              l = 'category' === n.type && n.linkUnlisted ? void 0 : n.href;
             return (0, d.jsx)(g, { active: s, children: (0, d.jsx)(f, { href: l, isLast: s, children: n.label }) }, t);
            }),
           ],
          }),
         }),
        ],
       })
     : null;
   }
  },
  88519(e, n, t) {
   t.d(n, { A: () => a });
   t(30758);
   var s = t(13526),
    l = t(18236),
    o = t(71639),
    r = t(21093),
    i = t(86070);
   function a({ className: e }) {
    const n = (0, r.r)();
    return n.badge ? (0, i.jsx)('span', { className: (0, s.A)(e, o.G.docs.docVersionBadge, 'badge badge--secondary'), children: (0, i.jsx)(l.A, { id: 'theme.docs.versionBadge.label', values: { versionLabel: n.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  89874(e, n, t) {
   t.d(n, { F: () => a });
   var s = t(60316),
    l = t(13526),
    o = t(3227),
    r = t(86070);
   const i = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: i(t.items, n) }] : e), []),
    a = ({ excludeDocIDs: e = [], className: n, ...t }) => {
     const a = (0, s.$S)();
     return (0, r.jsx)('div', { ...t, className: (0, l.A)('margin-top--lg', n), children: (0, r.jsx)(o.A, { items: i(a.items, e) }) });
    };
  },
  92410(e, n, t) {
   t.d(n, { A: () => x });
   t(30758);
   var s = t(13526),
    l = t(74147),
    o = t(63195),
    r = t(18236),
    i = t(97819),
    a = t(71639),
    c = t(13714),
    d = t(21093),
    m = t(86070);
   const u = {
    unreleased: function ({ siteTitle: e, versionMetadata: n }) {
     return (0, m.jsx)(r.A, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: e, versionLabel: (0, m.jsx)('b', { children: n.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function ({ siteTitle: e, versionMetadata: n }) {
     return (0, m.jsx)(r.A, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: e, versionLabel: (0, m.jsx)('b', { children: n.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function h(e) {
    const n = u[e.versionMetadata.banner];
    return (0, m.jsx)(n, { ...e });
   }
   function v({ versionLabel: e, to: n, onClick: t }) {
    return (0, m.jsx)(r.A, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: e, latestVersionLink: (0, m.jsx)('b', { children: (0, m.jsx)(o.A, { to: n, onClick: t, children: (0, m.jsx)(r.A, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function p({ className: e, versionMetadata: n }) {
    const {
      siteConfig: { title: t },
     } = (0, l.A)(),
     { pluginId: o } = (0, i.vT)({ failfast: !0 }),
     { savePreferredVersionName: r } = (0, c.g1)(o),
     { latestDocSuggestion: d, latestVersionSuggestion: u } = (0, i.HW)(o),
     p = d ?? (x = u).docs.find((e) => e.id === x.mainDocId);
    var x;
    return (0, m.jsxs)('div', { className: (0, s.A)(e, a.G.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, m.jsx)('div', { children: (0, m.jsx)(h, { siteTitle: t, versionMetadata: n }) }), (0, m.jsx)('div', { className: 'margin-top--md', children: (0, m.jsx)(v, { versionLabel: u.label, to: p.path, onClick: () => r(u.name) }) })] });
   }
   function x({ className: e }) {
    const n = (0, d.r)();
    return n.banner ? (0, m.jsx)(p, { className: e, versionMetadata: n }) : null;
   }
  },
 },
]);
