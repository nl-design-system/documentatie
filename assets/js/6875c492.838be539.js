'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [48610],
 {
  24574: (e, l, t) => {
   t.d(l, { Z: () => r });
   t(75271);
   var o = t(42800),
    s = t(75545),
    n = t(52676);
   function r(e) {
    const { metadata: l } = e,
     { previousPage: t, nextPage: r } = l;
    return (0, n.jsxs)('nav', { className: 'pagination-nav', 'aria-label': (0, o.I)({ id: 'theme.blog.paginator.navAriaLabel', message: 'Blog list page navigation', description: 'The ARIA label for the blog pagination' }), children: [t && (0, n.jsx)(s.Z, { permalink: t, title: (0, n.jsx)(o.Z, { id: 'theme.blog.paginator.newerEntries', description: 'The label used to navigate to the newer blog posts page (previous page)', children: 'Newer Entries' }) }), r && (0, n.jsx)(s.Z, { permalink: r, title: (0, n.jsx)(o.Z, { id: 'theme.blog.paginator.olderEntries', description: 'The label used to navigate to the older blog posts page (next page)', children: 'Older Entries' }), isNext: !0 })] });
   }
  },
  35694: (e, l, t) => {
   t.d(l, { Z: () => r });
   t(75271);
   var o = t(84831),
    s = t(83357),
    n = t(52676);
   function r(e) {
    let { items: l, component: t = s.Z } = e;
    return (0, n.jsx)(n.Fragment, {
     children: l.map((e) => {
      let { content: l } = e;
      return (0, n.jsx)(o.n, { content: l, children: (0, n.jsx)(t, { children: (0, n.jsx)(l, {}) }) }, l.metadata.permalink);
     }),
    });
   }
  },
  95695: (e, l, t) => {
   t.r(l), t.d(l, { default: () => v });
   t(75271);
   var o = t(4814),
    s = t(42800),
    n = t(89341),
    r = t(69378),
    a = t(52035),
    c = t(44679),
    i = t(97752),
    d = t(24574),
    p = t(83613),
    g = t(35694),
    u = t(94250),
    y = t(34893),
    m = t(52676);
   function h(e) {
    const l = (function () {
     const { selectMessage: e } = (0, n.c)();
     return (l) => e(l, (0, s.I)({ id: 'theme.blog.post.plurals', description: 'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One post|{count} posts' }, { count: l }));
    })();
    return (0, s.I)({ id: 'theme.blog.tagTitle', description: 'The title of the page for a blog tag', message: '{nPosts} tagged with "{tagName}"' }, { nPosts: l(e.count), tagName: e.label });
   }
   function b(e) {
    let { tag: l } = e;
    const t = h(l);
    return (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(r.d, { title: t }), (0, m.jsx)(p.Z, { tag: 'blog_tags_posts' })] });
   }
   function x(e) {
    let { tag: l, items: t, sidebar: o, listMetadata: n } = e;
    const r = h(l);
    return (0, m.jsxs)(i.Z, { sidebar: o, children: [l.unlisted && (0, m.jsx)(u.Z, {}), (0, m.jsxs)('header', { className: 'margin-bottom--xl', children: [(0, m.jsx)(y.Z, { as: 'h1', children: r }), (0, m.jsx)(c.Z, { href: l.allTagsPath, children: (0, m.jsx)(s.Z, { id: 'theme.tags.tagsPageLink', description: 'The label of the link targeting the tag list page', children: 'View All Tags' }) })] }), (0, m.jsx)(g.Z, { items: t }), (0, m.jsx)(d.Z, { metadata: n })] });
   }
   function v(e) {
    return (0, m.jsxs)(r.FG, { className: (0, o.Z)(a.k.wrapper.blogPages, a.k.page.blogTagPostListPage), children: [(0, m.jsx)(b, { ...e }), (0, m.jsx)(x, { ...e })] });
   }
  },
  41179: (e, l, t) => {
   t.d(l, { u: () => i });
   var o = t(37943),
    s = t(60648),
    n = t(75271),
    r = t(40761);
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
   var c = t(52676);
   function i(e) {
    let { lineNumber: l, syntax: t, textContent: i, trim: d } = e,
     p = i;
    const { title: g, type: u } = (0, n.useContext)(r.n),
     y = (0, n.useId)();
    return (
     d && (p = p.trim()),
     (0, c.jsx)(s.y$, {
      theme: a,
      code: p,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: s, getLineProps: n, getTokenProps: r } = e;
       return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: y, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', g ? ': ' : ' ', g] }), (0, c.jsx)(o.dn, { tabIndex: 0, role: g ? 'region' : void 0, 'aria-labelledby': y, style: t, children: s.map((e, t) => (0, c.jsxs)('span', { ...n({ line: e }), children: [l && (0, c.jsx)('span', { children: t + 1 }), e.map((e, l) => (0, c.jsx)('span', { ...r({ token: e }) }, l)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, l, t) => {
   t.d(l, { X: () => d, n: () => i });
   var o = t(69244),
    s = t(20061),
    n = t(37943),
    r = t(4814),
    a = t(75271),
    c = t(52676);
   const i = (0, a.createContext)({}),
    d = (e) => {
     let { title: l, appearance: t, description: a, children: d, figure: p } = e;
     const g = { do: 'Doen', dont: 'Niet doen' },
      u = p ? 'figure' : 'div',
      y = p ? 'figcaption' : 'div';
     return (0, c.jsxs)(u, { className: (0, r.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof l ? l?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(y, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(n.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: g.dont })] }), (0, c.jsx)(n.nv, { children: l })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(n.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(s.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: g.do })] }), (0, c.jsx)(n.nv, { children: l })] }), a] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: l, type: g[t] }, children: d }) })] });
    };
  },
  39731: (e, l, t) => {
   t.d(l, { Z: () => u });
   var o = t(40139),
    s = t(41017),
    n = t(10930),
    r = t(75271),
    a = t(52676);
   function c(e) {
    const l = r.Children.toArray(e.children),
     t = l.find((e) => r.isValidElement(e) && 'summary' === e.props?.mdxType),
     o = (0, a.jsx)(a.Fragment, { children: l.filter((e) => e !== t) });
    return (0, a.jsx)(n.Z, { ...e, summary: t, children: o });
   }
   var i = t(41179);
   function d(e) {
    let l,
     t = '';
    if ((0, r.isValidElement)(e.children)) {
     const o = e.children.props,
      s = 'string' == typeof o.className ? o.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     s && (l = s[1]), 'string' == typeof o.children && (t = o.children);
    }
    return (0, a.jsx)(i.u, { syntax: l, textContent: t, trim: !0 });
   }
   var p = t(69514),
    g = t(37943);
   function u(e) {
    let { children: l } = e;
    return (0, a.jsx)(o.Z, {
     components: {
      code: g.EK,
      a: g.rU,
      em: g.j$,
      pre: d,
      details: c,
      ul: (e) => {
       let { children: l } = e;
       return (0, a.jsx)(g.QI, { className: 'utrecht-unordered-list--html-content', children: l });
      },
      ol: (e) => {
       let { children: l } = e;
       return (0, a.jsx)(g.GS, { className: 'utrecht-ordered-list--html-content', children: l });
      },
      img: g.Ee,
      h1: g.nL,
      h2: g.XJ,
      h3: g.aC,
      h4: g.k8,
      h5: g.by,
      h6: g.Cd,
      admonition: s.Z,
      mermaid: p.Z,
     },
     children: l,
    });
   }
  },
  94250: (e, l, t) => {
   t.d(l, { Z: () => r });
   t(75271), t(42800);
   var o = t(90495),
    s = t(52676);
   function n() {
    return (0, s.jsx)(o.Z, { children: (0, s.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function r() {
    return (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(n, {}) });
   }
  },
 },
]);
