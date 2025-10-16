'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [46103],
 {
  84074: (e, t, n) => {
   n.r(t), n.d(t, { default: () => h });
   n(75271);
   var l = n(4814),
    o = n(69378),
    s = n(52035),
    r = n(84831),
    c = n(97752),
    a = n(83357),
    i = n(42800),
    d = n(75545),
    m = n(52676);
   function u(e) {
    const { nextItem: t, prevItem: n } = e;
    return (0, m.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, i.I)({ id: 'theme.blog.post.paginator.navAriaLabel', message: 'Blog post page navigation', description: 'The ARIA label for the blog posts pagination' }), children: [n && (0, m.jsx)(d.Z, { ...n, subLabel: (0, m.jsx)(i.Z, { id: 'theme.blog.post.paginator.newerPost', description: 'The blog post button label to navigate to the newer/previous post', children: 'Newer Post' }) }), t && (0, m.jsx)(d.Z, { ...t, subLabel: (0, m.jsx)(i.Z, { id: 'theme.blog.post.paginator.olderPost', description: 'The blog post button label to navigate to the older/next post', children: 'Older Post' }), isNext: !0 })] });
   }
   function p() {
    const { assets: e, metadata: t } = (0, r.C)(),
     { title: n, description: l, date: s, tags: c, authors: a, frontMatter: i } = t,
     { keywords: d } = i,
     u = e.image ?? i.image;
    return (0, m.jsxs)(o.d, {
     title: n,
     description: l,
     keywords: d,
     image: u,
     children: [
      (0, m.jsx)('meta', { property: 'og:type', content: 'article' }),
      (0, m.jsx)('meta', { property: 'article:published_time', content: s }),
      a.some((e) => e.url) &&
       (0, m.jsx)('meta', {
        property: 'article:author',
        content: a
         .map((e) => e.url)
         .filter(Boolean)
         .join(','),
       }),
      c.length > 0 && (0, m.jsx)('meta', { property: 'article:tag', content: c.map((e) => e.label).join(',') }),
     ],
    });
   }
   var v = n(6815),
    g = n(94250);
   function y(e) {
    let { sidebar: t, children: n } = e;
    const { metadata: l, toc: o } = (0, r.C)(),
     { nextItem: s, prevItem: i, frontMatter: d, unlisted: p } = l,
     { hide_table_of_contents: y, toc_min_heading_level: h, toc_max_heading_level: b } = d;
    return (0, m.jsxs)(c.Z, { sidebar: t, toc: !y && o.length > 0 ? (0, m.jsx)(v.Z, { toc: o, minHeadingLevel: h, maxHeadingLevel: b }) : void 0, children: [p && (0, m.jsx)(g.Z, {}), (0, m.jsx)(a.Z, { children: n }), (s || i) && (0, m.jsx)(u, { nextItem: s, prevItem: i })] });
   }
   function h(e) {
    const t = e.content;
    return (0, m.jsx)(r.n, { content: e.content, isBlogPostPage: !0, children: (0, m.jsxs)(o.FG, { className: (0, l.Z)(s.k.wrapper.blogPages, s.k.page.blogPostPage), children: [(0, m.jsx)(p, {}), (0, m.jsx)(y, { sidebar: e.sidebar, children: (0, m.jsx)(t, {}) })] }) });
   }
  },
  6815: (e, t, n) => {
   n.d(t, { Z: () => i });
   n(75271);
   var l = n(4814),
    o = n(96254);
   const s = { tableOfContents: 'tableOfContents_B1zO', docItemContainer: 'docItemContainer_pj7X' };
   var r = n(52676);
   const c = 'table-of-contents__link toc-highlight',
    a = 'table-of-contents__link--active';
   function i(e) {
    let { className: t, ...n } = e;
    return (0, r.jsx)('div', { className: (0, l.Z)(s.tableOfContents, 'thin-scrollbar', t), children: (0, r.jsx)(o.Z, { ...n, linkClassName: c, linkActiveClassName: a }) });
   }
  },
  96254: (e, t, n) => {
   n.d(t, { Z: () => g });
   var l = n(75271),
    o = n(69687);
   function s(e) {
    const t = e.map((e) => ({ ...e, parentIndex: -1, children: [] })),
     n = Array(7).fill(-1);
    t.forEach((e, t) => {
     const l = n.slice(2, e.level);
     (e.parentIndex = Math.max(...l)), (n[e.level] = t);
    });
    const l = [];
    return (
     t.forEach((e) => {
      const { parentIndex: n, ...o } = e;
      n >= 0 ? t[n].children.push(o) : l.push(o);
     }),
     l
    );
   }
   function r(e) {
    let { toc: t, minHeadingLevel: n, maxHeadingLevel: l } = e;
    return t.flatMap((e) => {
     const t = r({ toc: e.children, minHeadingLevel: n, maxHeadingLevel: l });
     return (function (e) {
      return e.level >= n && e.level <= l;
     })(e)
      ? [{ ...e, children: t }]
      : t;
    });
   }
   function c(e) {
    const t = e.getBoundingClientRect();
    return t.top === t.bottom ? c(e.parentNode) : t;
   }
   function a(e, t) {
    let { anchorTopOffset: n } = t;
    const l = e.find((e) => c(e).top >= n);
    if (l) {
     return (function (e) {
      return e.top > 0 && e.bottom < window.innerHeight / 2;
     })(c(l))
      ? l
      : (e[e.indexOf(l) - 1] ?? null);
    }
    return e[e.length - 1] ?? null;
   }
   function i() {
    const e = (0, l.useRef)(0),
     {
      navbar: { hideOnScroll: t },
     } = (0, o.L)();
    return (
     (0, l.useEffect)(() => {
      e.current = t ? 0 : document.querySelector('.navbar').clientHeight;
     }, [t]),
     e
    );
   }
   function d(e) {
    const t = (0, l.useRef)(void 0),
     n = i();
    (0, l.useEffect)(() => {
     if (!e) return () => {};
     const { linkClassName: l, linkActiveClassName: o, minHeadingLevel: s, maxHeadingLevel: r } = e;
     function c() {
      const e = (function (e) {
        return Array.from(document.getElementsByClassName(e));
       })(l),
       c = (function (e) {
        let { minHeadingLevel: t, maxHeadingLevel: n } = e;
        const l = [];
        for (let o = t; o <= n; o += 1) l.push(`h${o}.anchor`);
        return Array.from(document.querySelectorAll(l.join()));
       })({ minHeadingLevel: s, maxHeadingLevel: r }),
       i = a(c, { anchorTopOffset: n.current }),
       d = e.find(
        (e) =>
         i &&
         i.id ===
          (function (e) {
           return decodeURIComponent(e.href.substring(e.href.indexOf('#') + 1));
          })(e),
       );
      e.forEach((e) => {
       !(function (e, n) {
        n ? (t.current && t.current !== e && t.current.classList.remove(o), e.classList.add(o), (t.current = e)) : e.classList.remove(o);
       })(e, e === d);
      });
     }
     return (
      document.addEventListener('scroll', c),
      document.addEventListener('resize', c),
      c(),
      () => {
       document.removeEventListener('scroll', c), document.removeEventListener('resize', c);
      }
     );
    }, [e, n]);
   }
   var m = n(44679),
    u = n(52676);
   function p(e) {
    let { toc: t, className: n, linkClassName: l, isChild: o } = e;
    return t.length ? (0, u.jsx)('ul', { className: o ? void 0 : n, children: t.map((e) => (0, u.jsxs)('li', { children: [(0, u.jsx)(m.Z, { to: `#${e.id}`, className: l ?? void 0, dangerouslySetInnerHTML: { __html: e.value } }), (0, u.jsx)(p, { isChild: !0, toc: e.children, className: n, linkClassName: l })] }, e.id)) }) : null;
   }
   const v = l.memo(p);
   function g(e) {
    let { toc: t, className: n = 'table-of-contents table-of-contents__left-border', linkClassName: c = 'table-of-contents__link', linkActiveClassName: a, minHeadingLevel: i, maxHeadingLevel: m, ...p } = e;
    const g = (0, o.L)(),
     y = i ?? g.tableOfContents.minHeadingLevel,
     h = m ?? g.tableOfContents.maxHeadingLevel,
     b = (function (e) {
      let { toc: t, minHeadingLevel: n, maxHeadingLevel: o } = e;
      return (0, l.useMemo)(() => r({ toc: s(t), minHeadingLevel: n, maxHeadingLevel: o }), [t, n, o]);
     })({ toc: t, minHeadingLevel: y, maxHeadingLevel: h });
    return (
     d(
      (0, l.useMemo)(() => {
       if (c && a) return { linkClassName: c, linkActiveClassName: a, minHeadingLevel: y, maxHeadingLevel: h };
      }, [c, a, y, h]),
     ),
     (0, u.jsx)(v, { toc: b, className: n, linkClassName: c, ...p })
    );
   }
  },
  41179: (e, t, n) => {
   n.d(t, { u: () => i });
   var l = n(37943),
    o = n(60648),
    s = n(75271),
    r = n(40761);
   const c = {
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
   var a = n(52676);
   function i(e) {
    let { lineNumber: t, syntax: n, textContent: i, trim: d } = e,
     m = i;
    const { title: u, type: p } = (0, s.useContext)(r.n),
     v = (0, s.useId)();
    return (
     d && (m = m.trim()),
     (0, a.jsx)(o.y$, {
      theme: c,
      code: m,
      language: n || '',
      children: (e) => {
       let { style: n, tokens: o, getLineProps: s, getTokenProps: r } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: v, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(l.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': v, style: n, children: o.map((e, n) => (0, a.jsxs)('span', { ...s({ line: e }), children: [t && (0, a.jsx)('span', { children: n + 1 }), e.map((e, t) => (0, a.jsx)('span', { ...r({ token: e }) }, t)), '\n'] }, n)) })] });
      },
     })
    );
   }
  },
  40761: (e, t, n) => {
   n.d(t, { X: () => d, n: () => i });
   var l = n(69244),
    o = n(20061),
    s = n(37943),
    r = n(4814),
    c = n(75271),
    a = n(52676);
   const i = (0, c.createContext)({}),
    d = (e) => {
     let { title: t, appearance: n, description: c, children: d, figure: m } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      p = m ? 'figure' : 'div',
      v = m ? 'figcaption' : 'div';
     return (0, a.jsxs)(p, { className: (0, r.Z)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof t ? t?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(v, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(s.nv, { children: t })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(s.nv, { children: t })] }), c] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(i.Provider, { value: { title: t, type: u[n] }, children: d }) })] });
    };
  },
  39731: (e, t, n) => {
   n.d(t, { Z: () => p });
   var l = n(40139),
    o = n(41017),
    s = n(10930),
    r = n(75271),
    c = n(52676);
   function a(e) {
    const t = r.Children.toArray(e.children),
     n = t.find((e) => r.isValidElement(e) && 'summary' === e.props?.mdxType),
     l = (0, c.jsx)(c.Fragment, { children: t.filter((e) => e !== n) });
    return (0, c.jsx)(s.Z, { ...e, summary: n, children: l });
   }
   var i = n(41179);
   function d(e) {
    let t,
     n = '';
    if ((0, r.isValidElement)(e.children)) {
     const l = e.children.props,
      o = 'string' == typeof l.className ? l.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     o && (t = o[1]), 'string' == typeof l.children && (n = l.children);
    }
    return (0, c.jsx)(i.u, { syntax: t, textContent: n, trim: !0 });
   }
   var m = n(69514),
    u = n(37943);
   function p(e) {
    let { children: t } = e;
    return (0, c.jsx)(l.Z, {
     components: {
      code: u.EK,
      a: u.rU,
      em: u.j$,
      pre: d,
      details: a,
      ul: (e) => {
       let { children: t } = e;
       return (0, c.jsx)(u.QI, { className: 'utrecht-unordered-list--html-content', children: t });
      },
      ol: (e) => {
       let { children: t } = e;
       return (0, c.jsx)(u.GS, { className: 'utrecht-ordered-list--html-content', children: t });
      },
      img: u.Ee,
      h1: u.nL,
      h2: u.XJ,
      h3: u.aC,
      h4: u.k8,
      h5: u.by,
      h6: u.Cd,
      admonition: o.Z,
      mermaid: m.Z,
     },
     children: t,
    });
   }
  },
  94250: (e, t, n) => {
   n.d(t, { Z: () => r });
   n(75271), n(42800);
   var l = n(90495),
    o = n(52676);
   function s() {
    return (0, o.jsx)(l.Z, { children: (0, o.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function r() {
    return (0, o.jsx)(o.Fragment, { children: (0, o.jsx)(s, {}) });
   }
  },
 },
]);
