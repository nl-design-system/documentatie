'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [18401],
 {
  16609: (e, t, s) => {
   s.d(t, { M: () => i });
   var o = s(68873),
    l = s(16194),
    n = s(30758),
    r = s(50124);
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
   var c = s(86070);
   function i({ lineNumber: e, syntax: t, textContent: s, trim: i }) {
    let d = s;
    const { title: u, type: m } = (0, n.useContext)(r.x),
     b = (0, n.useId)();
    return i && (d = d.trim()), (0, c.jsx)(l.f4, { theme: a, code: d, language: t || '', children: ({ style: t, tokens: s, getLineProps: l, getTokenProps: n }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: b, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(o.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': b, style: t, children: s.map((t, s) => (0, c.jsxs)('span', { ...l({ line: t }), children: [e && (0, c.jsx)('span', { children: s + 1 }), t.map((e, t) => (0, c.jsx)('span', { ...n({ token: e }) }, t)), '\n'] }, s)) })] }) });
   }
  },
  19080: (e, t, s) => {
   s.d(t, { A: () => v });
   s(30758);
   var o = s(13526),
    l = s(34374),
    n = s(71170),
    r = s(40359),
    a = s(41863),
    c = s(76493),
    i = s(48426),
    d = s(5069),
    u = s(86070);
   const m = {
    unreleased: function ({ siteTitle: e, versionMetadata: t }) {
     return (0, u.jsx)(r.A, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: e, versionLabel: (0, u.jsx)('b', { children: t.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function ({ siteTitle: e, versionMetadata: t }) {
     return (0, u.jsx)(r.A, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: e, versionLabel: (0, u.jsx)('b', { children: t.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function b(e) {
    const t = m[e.versionMetadata.banner];
    return (0, u.jsx)(t, { ...e });
   }
   function h({ versionLabel: e, to: t, onClick: s }) {
    return (0, u.jsx)(r.A, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: e, latestVersionLink: (0, u.jsx)('b', { children: (0, u.jsx)(n.A, { to: t, onClick: s, children: (0, u.jsx)(r.A, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function p({ className: e, versionMetadata: t }) {
    const {
      siteConfig: { title: s },
     } = (0, l.A)(),
     { pluginId: n } = (0, a.vT)({ failfast: !0 }),
     { savePreferredVersionName: r } = (0, i.g1)(n),
     { latestDocSuggestion: d, latestVersionSuggestion: m } = (0, a.HW)(n),
     p = d ?? (v = m).docs.find((e) => e.id === v.mainDocId);
    var v;
    return (0, u.jsxs)('div', { className: (0, o.A)(e, c.G.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, u.jsx)('div', { children: (0, u.jsx)(b, { siteTitle: s, versionMetadata: t }) }), (0, u.jsx)('div', { className: 'margin-top--md', children: (0, u.jsx)(h, { versionLabel: m.label, to: p.path, onClick: () => r(m.name) }) })] });
   }
   function v({ className: e }) {
    const t = (0, d.r)();
    return t.banner ? (0, u.jsx)(p, { className: e, versionMetadata: t }) : null;
   }
  },
  28817: (e, t, s) => {
   s.d(t, { A: () => c });
   s(30758);
   var o = s(13526),
    l = s(40359),
    n = s(76493),
    r = s(5069),
    a = s(86070);
   function c({ className: e }) {
    const t = (0, r.r)();
    return t.badge ? (0, a.jsx)('span', { className: (0, o.A)(e, n.G.docs.docVersionBadge, 'badge badge--secondary'), children: (0, a.jsx)(l.A, { id: 'theme.docs.versionBadge.label', values: { versionLabel: t.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  50124: (e, t, s) => {
   s.d(t, { $: () => d, x: () => i });
   var o = s(54736),
    l = s(26990),
    n = s(68873),
    r = s(13526),
    a = s(30758),
    c = s(86070);
   const i = (0, a.createContext)({}),
    d = ({ title: e, appearance: t, description: s, children: a, figure: d }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      b = d ? 'figcaption' : 'div';
     return (0, c.jsxs)(m, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(b, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(n.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(n.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(n.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(n.fz, { children: e })] }), s] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: u[t] }, children: a }) })] });
    };
  },
  50509: (e, t, s) => {
   s.d(t, { A: () => a });
   s(30758);
   var o = s(13526),
    l = s(40359),
    n = s(78612),
    r = s(86070);
   function a(e) {
    const { className: t, previous: s, next: a } = e;
    return (0, r.jsxs)('nav', { className: (0, o.A)(t, 'pagination-nav'), 'aria-label': (0, l.T)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [s && (0, r.jsx)(n.A, { ...s, subLabel: (0, r.jsx)(l.A, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), a && (0, r.jsx)(n.A, { ...a, subLabel: (0, r.jsx)(l.A, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  60324: (e, t, s) => {
   s.d(t, { A: () => j });
   s(30758);
   var o = s(13526),
    l = s(76493),
    n = s(45648),
    r = s(79555),
    a = s(71170),
    c = s(40359),
    i = s(58557),
    d = s(86070);
   function u(e) {
    return (0, d.jsx)('svg', { viewBox: '0 0 24 24', ...e, children: (0, d.jsx)('path', { d: 'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z', fill: 'currentColor' }) });
   }
   const m = { breadcrumbHomeIcon: 'breadcrumbHomeIcon_STkE' };
   function b() {
    const e = (0, i.Ay)('/');
    return (0, d.jsx)('li', { className: 'breadcrumbs__item', children: (0, d.jsx)(a.A, { 'aria-label': (0, c.T)({ id: 'theme.docs.breadcrumbs.home', message: 'Home page', description: 'The ARIA label for the home page in the breadcrumbs' }), className: 'breadcrumbs__link', href: e, children: (0, d.jsx)(u, { className: m.breadcrumbHomeIcon }) }) });
   }
   var h = s(51416),
    p = s(34374);
   function v(e) {
    const t = (function ({ breadcrumbs: e }) {
     const { siteConfig: t } = (0, p.A)();
     return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: e.filter((e) => e.href).map((e, s) => ({ '@type': 'ListItem', position: s + 1, name: e.label, item: `${t.url}${e.href}` })) };
    })({ breadcrumbs: e.breadcrumbs });
    return (0, d.jsx)(h.A, { children: (0, d.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(t) }) });
   }
   const x = { breadcrumbsContainer: 'breadcrumbsContainer_TIIe' };
   function g({ children: e, href: t, isLast: s }) {
    const o = 'breadcrumbs__link';
    return s ? (0, d.jsx)('span', { className: o, children: e }) : t ? (0, d.jsx)(a.A, { className: o, href: t, children: (0, d.jsx)('span', { children: e }) }) : (0, d.jsx)('span', { className: o, children: e });
   }
   function y({ children: e, active: t }) {
    return (0, d.jsx)('li', { className: (0, o.A)('breadcrumbs__item', { 'breadcrumbs__item--active': t }), children: e });
   }
   function j() {
    const e = (0, n.OF)(),
     t = (0, r.Dt)();
    return e
     ? (0, d.jsxs)(d.Fragment, {
        children: [
         (0, d.jsx)(v, { breadcrumbs: e }),
         (0, d.jsx)('nav', {
          className: (0, o.A)(l.G.docs.docBreadcrumbs, x.breadcrumbsContainer),
          'aria-label': (0, c.T)({ id: 'theme.docs.breadcrumbs.navAriaLabel', message: 'Breadcrumbs', description: 'The ARIA label for the breadcrumbs' }),
          children: (0, d.jsxs)('ul', {
           className: 'breadcrumbs',
           children: [
            t && (0, d.jsx)(b, {}),
            e.map((t, s) => {
             const o = s === e.length - 1,
              l = 'category' === t.type && t.linkUnlisted ? void 0 : t.href;
             return (0, d.jsx)(y, { active: o, children: (0, d.jsx)(g, { href: l, isLast: o, children: t.label }) }, s);
            }),
           ],
          }),
         }),
        ],
       })
     : null;
   }
  },
  60973: (e, t, s) => {
   s.r(t), s.d(t, { default: () => $ });
   var o = s(30758),
    l = s(85970),
    n = s(8918),
    r = s(86070);
   const a = o.createContext(null);
   function c({ children: e, content: t }) {
    const s = (function (e) {
     return (0, o.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(t);
    return (0, r.jsx)(a.Provider, { value: s, children: e });
   }
   function i() {
    const e = (0, o.useContext)(a);
    if (null === e) throw new n.dV('DocProvider');
    return e;
   }
   function d() {
    const { metadata: e, frontMatter: t, assets: s } = i();
    return (0, r.jsx)(l.be, { title: e.title, description: e.description, keywords: t.keywords, image: s.image ?? t.image });
   }
   var u = s(13526),
    m = s(81495),
    b = s(50509);
   function h() {
    const { metadata: e } = i();
    return (0, r.jsx)(b.A, { className: 'docusaurus-mt-lg', previous: e.previous, next: e.next });
   }
   var p = s(19080),
    v = s(28817),
    x = s(76493),
    g = s(62154),
    y = s(22045);
   function j() {
    const { metadata: e } = i(),
     { editUrl: t, lastUpdatedAt: s, lastUpdatedBy: o, tags: l } = e,
     n = l.length > 0,
     a = !!(t || s || o);
    return n || a ? (0, r.jsxs)('footer', { className: (0, u.A)(x.G.docs.docFooter, 'docusaurus-mt-lg'), children: [n && (0, r.jsx)('div', { className: (0, u.A)('row margin-top--sm', x.G.docs.docFooterTagsRow), children: (0, r.jsx)('div', { className: 'col', children: (0, r.jsx)(g.A, { tags: l }) }) }), a && (0, r.jsx)(y.A, { className: (0, u.A)('margin-top--sm', x.G.docs.docFooterEditMetaRow), editUrl: t, lastUpdatedAt: s, lastUpdatedBy: o })] }) : null;
   }
   var f = s(27560),
    _ = s(50873),
    k = s(40359);
   const A = { tocCollapsibleButton: 'tocCollapsibleButton_ru3C', tocCollapsibleButtonExpanded: 'tocCollapsibleButtonExpanded_ohrT' };
   function N({ collapsed: e, ...t }) {
    return (0, r.jsx)('button', { type: 'button', ...t, className: (0, u.A)('clean-btn', A.tocCollapsibleButton, !e && A.tocCollapsibleButtonExpanded, t.className), children: (0, r.jsx)(k.A, { id: 'theme.TOCCollapsible.toggleButtonLabel', description: 'The label used by the button on the collapsible TOC component', children: 'On this page' }) });
   }
   const C = { tocCollapsible: 'tocCollapsible_RYGb', tocCollapsibleContent: 'tocCollapsibleContent_KcS3', tocCollapsibleExpanded: 'tocCollapsibleExpanded_C97u' };
   function T({ toc: e, className: t, minHeadingLevel: s, maxHeadingLevel: o }) {
    const { collapsed: l, toggleCollapsed: n } = (0, f.u)({ initialState: !0 });
    return (0, r.jsxs)('div', { className: (0, u.A)(C.tocCollapsible, !l && C.tocCollapsibleExpanded, t), children: [(0, r.jsx)(N, { collapsed: l, onClick: n }), (0, r.jsx)(f.N, { lazy: !0, className: C.tocCollapsibleContent, collapsed: l, children: (0, r.jsx)(_.A, { toc: e, minHeadingLevel: s, maxHeadingLevel: o }) })] });
   }
   const L = { tocMobile: 'tocMobile_MDU5' };
   function M() {
    const { toc: e, frontMatter: t } = i();
    return (0, r.jsx)(T, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: (0, u.A)(x.G.docs.docTocMobile, L.tocMobile) });
   }
   var w = s(59416);
   function I() {
    const { toc: e, frontMatter: t } = i();
    return (0, r.jsx)(w.A, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: x.G.docs.docTocDesktop });
   }
   var B = s(60054),
    S = s(81087);
   function V({ children: e }) {
    const t = (function () {
     const { metadata: e, frontMatter: t, contentTitle: s } = i();
     return t.hide_title || void 0 !== s ? null : e.title;
    })();
    return (0, r.jsxs)('div', { className: (0, u.A)(x.G.docs.docMarkdown, 'markdown'), children: [t && (0, r.jsx)('header', { children: (0, r.jsx)(B.A, { as: 'h1', children: t }) }), (0, r.jsx)(S.A, { children: e })] });
   }
   var H = s(60324),
    E = s(42973);
   const G = { docItemContainer: 'docItemContainer_LgMq', docItemCol: 'docItemCol_kJrR' };
   function F({ children: e }) {
    const t = (function () {
      const { frontMatter: e, toc: t } = i(),
       s = (0, m.l)(),
       o = e.hide_table_of_contents,
       l = !o && t.length > 0;
      return { hidden: o, mobile: l ? (0, r.jsx)(M, {}) : void 0, desktop: !l || ('desktop' !== s && 'ssr' !== s) ? void 0 : (0, r.jsx)(I, {}) };
     })(),
     { metadata: s } = i();
    return (0, r.jsxs)('div', { className: 'row', children: [(0, r.jsxs)('div', { className: (0, u.A)('col', !t.hidden && G.docItemCol), children: [(0, r.jsx)(E.A, { metadata: s }), (0, r.jsx)(p.A, {}), (0, r.jsxs)('div', { className: G.docItemContainer, children: [(0, r.jsxs)('article', { children: [(0, r.jsx)(H.A, {}), (0, r.jsx)(v.A, {}), t.mobile, (0, r.jsx)(V, { children: e }), (0, r.jsx)(j, {})] }), (0, r.jsx)(h, {})] })] }), t.desktop && (0, r.jsx)('div', { className: 'col col--3', children: t.desktop })] });
   }
   function $(e) {
    const t = `docs-doc-id-${e.content.metadata.id}`,
     s = e.content;
    return (0, r.jsx)(c, { content: e.content, children: (0, r.jsxs)(l.e3, { className: t, children: [(0, r.jsx)(d, {}), (0, r.jsx)(F, { children: (0, r.jsx)(s, {}) })] }) });
   }
  },
  81087: (e, t, s) => {
   s.d(t, { A: () => m });
   var o = s(85248),
    l = s(51786),
    n = s(87867),
    r = s(30758),
    a = s(86070);
   function c(e) {
    const t = r.Children.toArray(e.children),
     s = t.find((e) => r.isValidElement(e) && 'summary' === e.props?.mdxType),
     o = (0, a.jsx)(a.Fragment, { children: t.filter((e) => e !== s) });
    return (0, a.jsx)(n.A, { ...e, summary: s, children: o });
   }
   var i = s(16609);
   function d(e) {
    let t,
     s = '';
    if ((0, r.isValidElement)(e.children)) {
     const o = e.children.props,
      l = 'string' == typeof o.className ? o.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     l && (t = l[1]), 'string' == typeof o.children && (s = o.children);
    }
    return (0, a.jsx)(i.M, { syntax: t, textContent: s, trim: !0 });
   }
   var u = s(68873);
   function m({ children: e }) {
    return (0, a.jsx)(o.x, { components: { code: u.Cy, a: u.N_, em: u.lx, pre: d, details: c, ul: ({ children: e }) => (0, a.jsx)(u.Xy, { className: 'utrecht-unordered-list--html-content', children: e }), ol: ({ children: e }) => (0, a.jsx)(u._J, { className: 'utrecht-ordered-list--html-content', children: e }), img: u._V, h1: u._, h2: u.fV, h3: u._B, h4: u.f_, h5: u.mM, h6: u.TT, admonition: l.A }, children: e });
   }
  },
 },
]);
