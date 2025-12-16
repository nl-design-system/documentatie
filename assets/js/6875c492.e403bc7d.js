'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [84813],
 {
  14898: (e, t, l) => {
   l.d(t, { AE: () => i, Rc: () => r, TT: () => d, Uh: () => c, Yh: () => a });
   l(30758);
   var o = l(40359),
    s = l(51416),
    n = l(86070);
   function r() {
    return (0, n.jsx)(o.A, { id: 'theme.contentVisibility.unlistedBanner.title', description: 'The unlisted content banner title', children: 'Unlisted page' });
   }
   function c() {
    return (0, n.jsx)(o.A, { id: 'theme.contentVisibility.unlistedBanner.message', description: 'The unlisted content banner message', children: 'This page is unlisted. Search engines will not index it, and only users having a direct link can access it.' });
   }
   function i() {
    return (0, n.jsx)(s.A, { children: (0, n.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function a() {
    return (0, n.jsx)(o.A, { id: 'theme.contentVisibility.draftBanner.title', description: 'The draft content banner title', children: 'Draft page' });
   }
   function d() {
    return (0, n.jsx)(o.A, { id: 'theme.contentVisibility.draftBanner.message', description: 'The draft content banner message', children: 'This page is a draft. It will only be visible in dev and be excluded from the production build.' });
   }
  },
  16609: (e, t, l) => {
   l.d(t, { M: () => a });
   var o = l(68873),
    s = l(16194),
    n = l(30758),
    r = l(50124);
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
   var i = l(86070);
   function a({ lineNumber: e, syntax: t, textContent: l, trim: a }) {
    let d = l;
    const { title: p, type: u } = (0, n.useContext)(r.x),
     y = (0, n.useId)();
    return a && (d = d.trim()), (0, i.jsx)(s.f4, { theme: c, code: d, language: t || '', children: ({ style: t, tokens: l, getLineProps: s, getTokenProps: n }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: y, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, i.jsx)(o.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': y, style: t, children: l.map((t, l) => (0, i.jsxs)('span', { ...s({ line: t }), children: [e && (0, i.jsx)('span', { children: l + 1 }), t.map((e, t) => (0, i.jsx)('span', { ...n({ token: e }) }, t)), '\n'] }, l)) })] }) });
   }
  },
  24744: (e, t, l) => {
   l.d(t, { A: () => a });
   l(30758);
   var o = l(13526),
    s = l(76493),
    n = l(14898),
    r = l(51786),
    c = l(86070);
   function i({ className: e }) {
    return (0, c.jsx)(r.A, { type: 'caution', title: (0, c.jsx)(n.Rc, {}), className: (0, o.A)(e, s.G.common.unlistedBanner), children: (0, c.jsx)(n.Uh, {}) });
   }
   function a(e) {
    return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(n.AE, {}), (0, c.jsx)(i, { ...e })] });
   }
  },
  45947: (e, t, l) => {
   l.r(t), l.d(t, { default: () => x });
   l(30758);
   var o = l(13526),
    s = l(40359),
    n = l(76493),
    r = l(85970),
    c = l(64855),
    i = l(71170),
    a = l(71462),
    d = l(93243),
    p = l(27889),
    u = l(11430),
    y = l(24744),
    h = l(60054),
    g = l(86070);
   function m({ tag: e }) {
    const t = (0, c.ZD)(e);
    return (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(r.be, { title: t, description: e.description }), (0, g.jsx)(p.A, { tag: 'blog_tags_posts' })] });
   }
   function b({ tag: e, items: t, sidebar: l, listMetadata: o }) {
    const n = (0, c.ZD)(e);
    return (0, g.jsxs)(a.A, { sidebar: l, children: [e.unlisted && (0, g.jsx)(y.A, {}), (0, g.jsxs)('header', { className: 'margin-bottom--xl', children: [(0, g.jsx)(h.A, { as: 'h1', children: n }), e.description && (0, g.jsx)('p', { children: e.description }), (0, g.jsx)(i.A, { href: e.allTagsPath, children: (0, g.jsx)(s.A, { id: 'theme.tags.tagsPageLink', description: 'The label of the link targeting the tag list page', children: 'View All Tags' }) })] }), (0, g.jsx)(u.A, { items: t }), (0, g.jsx)(d.A, { metadata: o })] });
   }
   function x(e) {
    return (0, g.jsxs)(r.e3, { className: (0, o.A)(n.G.wrapper.blogPages, n.G.page.blogTagPostListPage), children: [(0, g.jsx)(m, { ...e }), (0, g.jsx)(b, { ...e })] });
   }
  },
  50124: (e, t, l) => {
   l.d(t, { $: () => d, x: () => a });
   var o = l(54736),
    s = l(26990),
    n = l(68873),
    r = l(13526),
    c = l(30758),
    i = l(86070);
   const a = (0, c.createContext)({}),
    d = ({ title: e, appearance: t, description: l, children: c, figure: d }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      y = d ? 'figcaption' : 'div';
     return (0, i.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(y, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, i.jsx)(n.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, i.jsx)(n.fz, { children: e })] }), l] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(a.Provider, { value: { title: e, type: p[t] }, children: c }) })] });
    };
  },
  64855: (e, t, l) => {
   l.d(t, { ZD: () => r, uz: () => c });
   l(30758);
   var o = l(40359),
    s = l(47895);
   l(86070);
   function n() {
    const { selectMessage: e } = (0, s.W)();
    return (t) => e(t, (0, o.T)({ id: 'theme.blog.post.plurals', description: 'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One post|{count} posts' }, { count: t }));
   }
   function r(e) {
    const t = n();
    return (0, o.T)({ id: 'theme.blog.tagTitle', description: 'The title of the page for a blog tag', message: '{nPosts} tagged with "{tagName}"' }, { nPosts: t(e.count), tagName: e.label });
   }
   const c = () => (0, o.T)({ id: 'theme.blog.authorsList.pageTitle', message: 'Authors', description: 'The title of the authors page' });
  },
  81087: (e, t, l) => {
   l.d(t, { A: () => u });
   var o = l(85248),
    s = l(51786),
    n = l(87867),
    r = l(30758),
    c = l(86070);
   function i(e) {
    const t = r.Children.toArray(e.children),
     l = t.find((e) => r.isValidElement(e) && 'summary' === e.props?.mdxType),
     o = (0, c.jsx)(c.Fragment, { children: t.filter((e) => e !== l) });
    return (0, c.jsx)(n.A, { ...e, summary: l, children: o });
   }
   var a = l(16609);
   function d(e) {
    let t,
     l = '';
    if ((0, r.isValidElement)(e.children)) {
     const o = e.children.props,
      s = 'string' == typeof o.className ? o.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     s && (t = s[1]), 'string' == typeof o.children && (l = o.children);
    }
    return (0, c.jsx)(a.M, { syntax: t, textContent: l, trim: !0 });
   }
   var p = l(68873);
   function u({ children: e }) {
    return (0, c.jsx)(o.x, { components: { code: p.Cy, a: p.N_, em: p.lx, pre: d, details: i, ul: ({ children: e }) => (0, c.jsx)(p.Xy, { className: 'utrecht-unordered-list--html-content', children: e }), ol: ({ children: e }) => (0, c.jsx)(p._J, { className: 'utrecht-ordered-list--html-content', children: e }), img: p._V, h1: p._, h2: p.fV, h3: p._B, h4: p.f_, h5: p.mM, h6: p.TT, admonition: s.A }, children: e });
   }
  },
 },
]);
