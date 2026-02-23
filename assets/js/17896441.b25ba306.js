'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [18401],
 {
  7619(e, n, t) {
   t.d(n, { A: () => a });
   t(30758);
   var s = t(13526),
    l = t(18236),
    o = t(52266),
    r = t(86070);
   function a(e) {
    const { className: n, previous: t, next: a } = e;
    return (0, r.jsxs)('nav', { className: (0, s.A)(n, 'pagination-nav'), 'aria-label': (0, l.T)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [t && (0, r.jsx)(o.A, { ...t, subLabel: (0, r.jsx)(l.A, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), a && (0, r.jsx)(o.A, { ...a, subLabel: (0, r.jsx)(l.A, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  15638(e, n, t) {
   t.d(n, { $: () => d, x: () => c });
   var s = t(4077),
    l = t(58315),
    o = t(46447),
    r = t(13526),
    a = t(30758),
    i = t(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: t, children: a, figure: d }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div';
     return (0, i.jsxs)(m, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(o.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(o.fz, { children: e })] }), t] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: u[n] }, children: a }) })] });
    };
  },
  69284(e, n, t) {
   t.d(n, { M: () => c });
   var s = t(46447),
    l = t(16194),
    o = t(30758),
    r = t(15638);
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
   var i = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: u, type: m } = (0, o.useContext)(r.x),
     h = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(l.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: l, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: n, children: t.map((n, t) => (0, i.jsxs)('span', { ...l({ line: n }), children: [e && (0, i.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  76310(e, n, t) {
   t.d(n, { A: () => c });
   t(30758);
   var s = t(13526),
    l = t(71639),
    o = t(79540),
    r = t(76713),
    a = t(86070);
   function i({ className: e }) {
    return (0, a.jsx)(r.A, { type: 'caution', title: (0, a.jsx)(o.Rc, {}), className: (0, s.A)(e, l.G.common.unlistedBanner), children: (0, a.jsx)(o.Uh, {}) });
   }
   function c(e) {
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(o.AE, {}), (0, a.jsx)(i, { ...e })] });
   }
  },
  78361(e, n, t) {
   (t.r(n), t.d(n, { default: () => z }));
   var s = t(30758),
    l = t(86332),
    o = t(90076),
    r = t(86070);
   const a = s.createContext(null);
   function i({ children: e, content: n }) {
    const t = (function (e) {
     return (0, s.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(n);
    return (0, r.jsx)(a.Provider, { value: t, children: e });
   }
   function c() {
    const e = (0, s.useContext)(a);
    if (null === e) throw new o.dV('DocProvider');
    return e;
   }
   function d() {
    const { metadata: e, frontMatter: n, assets: t } = c();
    return (0, r.jsx)(l.be, { title: e.title, description: e.description, keywords: n.keywords, image: t.image ?? n.image });
   }
   var u = t(13526),
    m = t(14149),
    h = t(7619);
   function v() {
    const { metadata: e } = c();
    return (0, r.jsx)(h.A, { className: 'docusaurus-mt-lg', previous: e.previous, next: e.next });
   }
   var b = t(92410),
    x = t(88519),
    p = t(71639),
    f = t(97068),
    g = t(29307);
   function j() {
    const { metadata: e } = c(),
     { editUrl: n, lastUpdatedAt: t, lastUpdatedBy: s, tags: l } = e,
     o = l.length > 0,
     a = !!(n || t || s);
    return o || a ? (0, r.jsxs)('footer', { className: (0, u.A)(p.G.docs.docFooter, 'docusaurus-mt-lg'), children: [o && (0, r.jsx)('div', { className: (0, u.A)('row margin-top--sm', p.G.docs.docFooterTagsRow), children: (0, r.jsx)('div', { className: 'col', children: (0, r.jsx)(f.A, { tags: l }) }) }), a && (0, r.jsx)(g.A, { className: (0, u.A)('margin-top--sm', p.G.docs.docFooterEditMetaRow), editUrl: n, lastUpdatedAt: t, lastUpdatedBy: s })] }) : null;
   }
   var y = t(88014),
    A = t(85412),
    N = t(18236);
   const k = 'tocCollapsibleButton_XjgU',
    _ = 'tocCollapsibleButtonExpanded_Glk4';
   function L({ collapsed: e, ...n }) {
    return (0, r.jsx)('button', { type: 'button', ...n, className: (0, u.A)('clean-btn', k, !e && _, n.className), children: (0, r.jsx)(N.A, { id: 'theme.TOCCollapsible.toggleButtonLabel', description: 'The label used by the button on the collapsible TOC component', children: 'On this page' }) });
   }
   const C = 'tocCollapsible_RuM8',
    T = 'tocCollapsibleContent_DMSN',
    H = 'tocCollapsibleExpanded_w112';
   function M({ toc: e, className: n, minHeadingLevel: t, maxHeadingLevel: s }) {
    const { collapsed: l, toggleCollapsed: o } = (0, y.u)({ initialState: !0 });
    return (0, r.jsxs)('div', { className: (0, u.A)(C, !l && H, n), children: [(0, r.jsx)(L, { collapsed: l, onClick: o }), (0, r.jsx)(y.N, { lazy: !0, className: T, collapsed: l, children: (0, r.jsx)(A.A, { toc: e, minHeadingLevel: t, maxHeadingLevel: s }) })] });
   }
   const w = 'tocMobile_zSi9';
   function B() {
    const { toc: e, frontMatter: n } = c();
    return (0, r.jsx)(M, { toc: e, minHeadingLevel: n.toc_min_heading_level, maxHeadingLevel: n.toc_max_heading_level, className: (0, u.A)(p.G.docs.docTocMobile, w) });
   }
   var S = t(78690);
   function V() {
    const { toc: e, frontMatter: n } = c();
    return (0, r.jsx)(S.A, { toc: e, minHeadingLevel: n.toc_min_heading_level, maxHeadingLevel: n.toc_max_heading_level, className: p.G.docs.docTocDesktop });
   }
   var E = t(39470),
    I = t(85963);
   function G({ children: e }) {
    const n = (function () {
     const { metadata: e, frontMatter: n, contentTitle: t } = c();
     return n.hide_title || void 0 !== t ? null : e.title;
    })();
    return (0, r.jsxs)('div', { className: (0, u.A)(p.G.docs.docMarkdown, 'markdown'), children: [n && (0, r.jsx)('header', { children: (0, r.jsx)(E.A, { as: 'h1', children: n }) }), (0, r.jsx)(I.A, { children: e })] });
   }
   var O = t(87836),
    U = t(82826);
   const F = 'docItemContainer_aQSU',
    R = 'docItemCol_pMYj';
   function $({ children: e }) {
    const n = (function () {
      const { frontMatter: e, toc: n } = c(),
       t = (0, m.l)(),
       s = e.hide_table_of_contents,
       l = !s && n.length > 0;
      return { hidden: s, mobile: l ? (0, r.jsx)(B, {}) : void 0, desktop: !l || ('desktop' !== t && 'ssr' !== t) ? void 0 : (0, r.jsx)(V, {}) };
     })(),
     { metadata: t } = c();
    return (0, r.jsxs)('div', { className: 'row', children: [(0, r.jsxs)('div', { className: (0, u.A)('col', !n.hidden && R), children: [(0, r.jsx)(U.A, { metadata: t }), (0, r.jsx)(b.A, {}), (0, r.jsxs)('div', { className: F, children: [(0, r.jsxs)('article', { children: [(0, r.jsx)(O.A, {}), (0, r.jsx)(x.A, {}), n.mobile, (0, r.jsx)(G, { children: e }), (0, r.jsx)(j, {})] }), (0, r.jsx)(v, {})] })] }), n.desktop && (0, r.jsx)('div', { className: 'col col--3', children: n.desktop })] });
   }
   function z(e) {
    const n = `docs-doc-id-${e.content.metadata.id}`,
     t = e.content;
    return (0, r.jsx)(i, { content: e.content, children: (0, r.jsxs)(l.e3, { className: n, children: [(0, r.jsx)(d, {}), (0, r.jsx)($, { children: (0, r.jsx)(t, {}) })] }) });
   }
  },
  78690(e, n, t) {
   t.d(n, { A: () => a });
   t(30758);
   var s = t(13526),
    l = t(85412);
   const o = 'tableOfContents_yXC1';
   var r = t(86070);
   function a({ className: e, ...n }) {
    return (0, r.jsx)('div', { className: (0, s.A)(o, 'thin-scrollbar', e), children: (0, r.jsx)(l.A, { ...n, linkClassName: 'table-of-contents__link toc-highlight', linkActiveClassName: 'table-of-contents__link--active' }) });
   }
  },
  79540(e, n, t) {
   t.d(n, { AE: () => i, Rc: () => r, TT: () => d, Uh: () => a, Yh: () => c });
   t(30758);
   var s = t(18236),
    l = t(70241),
    o = t(86070);
   function r() {
    return (0, o.jsx)(s.A, { id: 'theme.contentVisibility.unlistedBanner.title', description: 'The unlisted content banner title', children: 'Unlisted page' });
   }
   function a() {
    return (0, o.jsx)(s.A, { id: 'theme.contentVisibility.unlistedBanner.message', description: 'The unlisted content banner message', children: 'This page is unlisted. Search engines will not index it, and only users having a direct link can access it.' });
   }
   function i() {
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
    a = t(86070);
   function i({ className: e }) {
    return (0, a.jsx)(r.A, { type: 'caution', title: (0, a.jsx)(l.Yh, {}), className: (0, s.A)(e, o.G.common.draftBanner), children: (0, a.jsx)(l.TT, {}) });
   }
   var c = t(76310);
   function d({ metadata: e }) {
    const { unlisted: n, frontMatter: t } = e;
    return (0, a.jsxs)(a.Fragment, { children: [(n || t.unlisted) && (0, a.jsx)(c.A, {}), t.draft && (0, a.jsx)(i, {})] });
   }
  },
  85412(e, n, t) {
   t.d(n, { A: () => b });
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
   function a(e) {
    const n = e.getBoundingClientRect();
    return n.top === n.bottom ? a(e.parentNode) : n;
   }
   function i(e, { anchorTopOffset: n }) {
    const t = e.find((e) => a(e).top >= n);
    if (t) {
     return (function (e) {
      return e.top > 0 && e.bottom < window.innerHeight / 2;
     })(a(t))
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
     function a() {
      const e = (function (e) {
        return Array.from(document.getElementsByClassName(e));
       })(s),
       a = (function ({ minHeadingLevel: e, maxHeadingLevel: n }) {
        const t = [];
        for (let s = e; s <= n; s += 1) t.push(`h${s}.anchor`);
        return Array.from(document.querySelectorAll(t.join()));
       })({ minHeadingLevel: o, maxHeadingLevel: r }),
       c = i(a, { anchorTopOffset: t.current }),
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
      document.addEventListener('scroll', a),
      document.addEventListener('resize', a),
      a(),
      () => {
       (document.removeEventListener('scroll', a), document.removeEventListener('resize', a));
      }
     );
    }, [e, t]);
   }
   var u = t(63195),
    m = t(86070);
   function h({ toc: e, className: n, linkClassName: t, isChild: s }) {
    return e.length ? (0, m.jsx)('ul', { className: s ? void 0 : n, children: e.map((e) => (0, m.jsxs)('li', { children: [(0, m.jsx)(u.A, { to: `#${e.id}`, className: t ?? void 0, dangerouslySetInnerHTML: { __html: e.value } }), (0, m.jsx)(h, { isChild: !0, toc: e.children, className: n, linkClassName: t })] }, e.id)) }) : null;
   }
   const v = s.memo(h);
   function b({ toc: e, className: n = 'table-of-contents table-of-contents__left-border', linkClassName: t = 'table-of-contents__link', linkActiveClassName: a, minHeadingLevel: i, maxHeadingLevel: c, ...u }) {
    const h = (0, l.p)(),
     b = i ?? h.tableOfContents.minHeadingLevel,
     x = c ?? h.tableOfContents.maxHeadingLevel,
     p = (function ({ toc: e, minHeadingLevel: n, maxHeadingLevel: t }) {
      return (0, s.useMemo)(() => r({ toc: o(e), minHeadingLevel: n, maxHeadingLevel: t }), [e, n, t]);
     })({ toc: e, minHeadingLevel: b, maxHeadingLevel: x });
    return (
     d(
      (0, s.useMemo)(() => {
       if (t && a) return { linkClassName: t, linkActiveClassName: a, minHeadingLevel: b, maxHeadingLevel: x };
      }, [t, a, b, x]),
     ),
     (0, m.jsx)(v, { toc: p, className: n, linkClassName: t, ...u })
    );
   }
  },
  85963(e, n, t) {
   t.d(n, { A: () => m });
   var s = t(18439),
    l = t(76713),
    o = t(5784),
    r = t(30758),
    a = t(86070);
   function i(e) {
    const n = r.Children.toArray(e.children),
     t = n.find((e) => r.isValidElement(e) && 'summary' === e.props?.mdxType),
     s = (0, a.jsx)(a.Fragment, { children: n.filter((e) => e !== t) });
    return (0, a.jsx)(o.A, { ...e, summary: t, children: s });
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
    return (0, a.jsx)(c.M, { syntax: n, textContent: t, trim: !0 });
   }
   var u = t(46447);
   function m({ children: e }) {
    return (0, a.jsx)(s.x, { components: { code: u.Cy, a: u.N_, em: u.lx, pre: d, details: i, ul: ({ children: e }) => (0, a.jsx)(u.Xy, { className: 'utrecht-unordered-list--html-content', children: e }), ol: ({ children: e }) => (0, a.jsx)(u._J, { className: 'utrecht-ordered-list--html-content', children: e }), img: u._V, h1: u._, h2: u.fV, h3: u._B, h4: u.f_, h5: u.mM, h6: u.TT, admonition: l.A }, children: e });
   }
  },
  87836(e, n, t) {
   t.d(n, { A: () => j });
   t(30758);
   var s = t(13526),
    l = t(71639),
    o = t(2264),
    r = t(29281),
    a = t(63195),
    i = t(18236),
    c = t(63320),
    d = t(86070);
   function u(e) {
    return (0, d.jsx)('svg', { viewBox: '0 0 24 24', ...e, children: (0, d.jsx)('path', { d: 'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z', fill: 'currentColor' }) });
   }
   const m = 'breadcrumbHomeIcon_nXN1';
   function h() {
    const e = (0, c.Ay)('/');
    return (0, d.jsx)('li', { className: 'breadcrumbs__item', children: (0, d.jsx)(a.A, { 'aria-label': (0, i.T)({ id: 'theme.docs.breadcrumbs.home', message: 'Home page', description: 'The ARIA label for the home page in the breadcrumbs' }), className: 'breadcrumbs__link', href: e, children: (0, d.jsx)(u, { className: m }) }) });
   }
   var v = t(70241),
    b = t(74147);
   function x(e) {
    const n = (function ({ breadcrumbs: e }) {
     const { siteConfig: n } = (0, b.A)();
     return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: e.filter((e) => e.href).map((e, t) => ({ '@type': 'ListItem', position: t + 1, name: e.label, item: `${n.url}${e.href}` })) };
    })({ breadcrumbs: e.breadcrumbs });
    return (0, d.jsx)(v.A, { children: (0, d.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(n) }) });
   }
   const p = 'breadcrumbsContainer_Bqeg';
   function f({ children: e, href: n, isLast: t }) {
    const s = 'breadcrumbs__link';
    return t ? (0, d.jsx)('span', { className: s, children: e }) : n ? (0, d.jsx)(a.A, { className: s, href: n, children: (0, d.jsx)('span', { children: e }) }) : (0, d.jsx)('span', { className: s, children: e });
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
          className: (0, s.A)(l.G.docs.docBreadcrumbs, p),
          'aria-label': (0, i.T)({ id: 'theme.docs.breadcrumbs.navAriaLabel', message: 'Breadcrumbs', description: 'The ARIA label for the breadcrumbs' }),
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
   t.d(n, { A: () => i });
   t(30758);
   var s = t(13526),
    l = t(18236),
    o = t(71639),
    r = t(21093),
    a = t(86070);
   function i({ className: e }) {
    const n = (0, r.r)();
    return n.badge ? (0, a.jsx)('span', { className: (0, s.A)(e, o.G.docs.docVersionBadge, 'badge badge--secondary'), children: (0, a.jsx)(l.A, { id: 'theme.docs.versionBadge.label', values: { versionLabel: n.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  92410(e, n, t) {
   t.d(n, { A: () => x });
   t(30758);
   var s = t(13526),
    l = t(74147),
    o = t(63195),
    r = t(18236),
    a = t(97819),
    i = t(71639),
    c = t(13714),
    d = t(21093),
    u = t(86070);
   const m = {
    unreleased: function ({ siteTitle: e, versionMetadata: n }) {
     return (0, u.jsx)(r.A, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: e, versionLabel: (0, u.jsx)('b', { children: n.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function ({ siteTitle: e, versionMetadata: n }) {
     return (0, u.jsx)(r.A, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: e, versionLabel: (0, u.jsx)('b', { children: n.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function h(e) {
    const n = m[e.versionMetadata.banner];
    return (0, u.jsx)(n, { ...e });
   }
   function v({ versionLabel: e, to: n, onClick: t }) {
    return (0, u.jsx)(r.A, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: e, latestVersionLink: (0, u.jsx)('b', { children: (0, u.jsx)(o.A, { to: n, onClick: t, children: (0, u.jsx)(r.A, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function b({ className: e, versionMetadata: n }) {
    const {
      siteConfig: { title: t },
     } = (0, l.A)(),
     { pluginId: o } = (0, a.vT)({ failfast: !0 }),
     { savePreferredVersionName: r } = (0, c.g1)(o),
     { latestDocSuggestion: d, latestVersionSuggestion: m } = (0, a.HW)(o),
     b = d ?? (x = m).docs.find((e) => e.id === x.mainDocId);
    var x;
    return (0, u.jsxs)('div', { className: (0, s.A)(e, i.G.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, u.jsx)('div', { children: (0, u.jsx)(h, { siteTitle: t, versionMetadata: n }) }), (0, u.jsx)('div', { className: 'margin-top--md', children: (0, u.jsx)(v, { versionLabel: m.label, to: b.path, onClick: () => r(m.name) }) })] });
   }
   function x({ className: e }) {
    const n = (0, d.r)();
    return n.banner ? (0, u.jsx)(b, { className: e, versionMetadata: n }) : null;
   }
  },
 },
]);
