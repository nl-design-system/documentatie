'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [27918],
 {
  48399: (e, t, o) => {
   o.r(t), o.d(t, { default: () => $ });
   var l = o(75271),
    s = o(17310),
    n = o(15053),
    a = o(52676);
   const r = l.createContext(null);
   function c(e) {
    let { children: t, content: o } = e;
    const s = (function (e) {
     return (0, l.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(o);
    return (0, a.jsx)(r.Provider, { value: s, children: t });
   }
   function d() {
    const e = (0, l.useContext)(r);
    if (null === e) throw new n.i6('DocProvider');
    return e;
   }
   function i() {
    const { metadata: e, frontMatter: t, assets: o } = d();
    return (0, a.jsx)(s.d, { title: e.title, description: e.description, keywords: t.keywords, image: o.image ?? t.image });
   }
   var u = o(4814),
    p = o(26413),
    m = o(4690);
   function h() {
    const { metadata: e } = d();
    return (0, a.jsx)(m.Z, { previous: e.previous, next: e.next });
   }
   var b = o(83760),
    v = o(24586),
    x = o(61902),
    y = o(7512);
   function j(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: o } = e;
    return (0, a.jsx)(y.Z, { id: 'theme.lastUpdated.atDate', description: 'The words used to describe on which date a page has been last updated', values: { date: (0, a.jsx)('b', { children: (0, a.jsx)('time', { dateTime: new Date(1e3 * t).toISOString(), children: o }) }) }, children: ' on {date}' });
   }
   function f(e) {
    let { lastUpdatedBy: t } = e;
    return (0, a.jsx)(y.Z, { id: 'theme.lastUpdated.byUser', description: 'The words used to describe by who the page has been last updated', values: { user: (0, a.jsx)('b', { children: t }) }, children: ' by {user}' });
   }
   function g(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: o, lastUpdatedBy: l } = e;
    return (0, a.jsxs)('span', { className: x.k.common.lastUpdated, children: [(0, a.jsx)(y.Z, { id: 'theme.lastUpdated.lastUpdatedAtBy', description: 'The sentence used to display when a page has been last updated, and by who', values: { atDate: t && o ? (0, a.jsx)(j, { lastUpdatedAt: t, formattedLastUpdatedAt: o }) : '', byUser: l ? (0, a.jsx)(f, { lastUpdatedBy: l }) : '' }, children: 'Last updated{atDate}{byUser}' }), !1] });
   }
   var k = o(97885),
    Z = o(45538);
   const C = { lastUpdated: 'lastUpdated_UpNN' };
   function N(e) {
    return (0, a.jsx)('div', { className: (0, u.Z)(x.k.docs.docFooterTagsRow, 'row margin-bottom--sm'), children: (0, a.jsx)('div', { className: 'col', children: (0, a.jsx)(Z.Z, { ...e }) }) });
   }
   function U(e) {
    let { editUrl: t, lastUpdatedAt: o, lastUpdatedBy: l, formattedLastUpdatedAt: s } = e;
    return (0, a.jsxs)('div', { className: (0, u.Z)(x.k.docs.docFooterEditMetaRow, 'row'), children: [(0, a.jsx)('div', { className: 'col', children: t && (0, a.jsx)(k.Z, { editUrl: t }) }), (0, a.jsx)('div', { className: (0, u.Z)('col', C.lastUpdated), children: (o || l) && (0, a.jsx)(g, { lastUpdatedAt: o, formattedLastUpdatedAt: s, lastUpdatedBy: l }) })] });
   }
   function L() {
    const { metadata: e } = d(),
     { editUrl: t, lastUpdatedAt: o, formattedLastUpdatedAt: l, lastUpdatedBy: s, tags: n } = e,
     r = n.length > 0,
     c = !!(t || o || s);
    return r || c ? (0, a.jsxs)('footer', { className: (0, u.Z)(x.k.docs.docFooter, 'docusaurus-mt-lg'), children: [r && (0, a.jsx)(N, { tags: n }), c && (0, a.jsx)(U, { editUrl: t, lastUpdatedAt: o, lastUpdatedBy: s, formattedLastUpdatedAt: l })] }) : null;
   }
   var _ = o(93456),
    T = o(68139);
   const w = { tocCollapsibleButton: 'tocCollapsibleButton_j42O', tocCollapsibleButtonExpanded: 'tocCollapsibleButtonExpanded_woVJ' };
   function A(e) {
    let { collapsed: t, ...o } = e;
    return (0, a.jsx)('button', { type: 'button', ...o, className: (0, u.Z)('clean-btn', w.tocCollapsibleButton, !t && w.tocCollapsibleButtonExpanded, o.className), children: (0, a.jsx)(y.Z, { id: 'theme.TOCCollapsible.toggleButtonLabel', description: 'The label used by the button on the collapsible TOC component', children: 'On this page' }) });
   }
   const M = { tocCollapsible: 'tocCollapsible_Uc9g', tocCollapsibleContent: 'tocCollapsibleContent_KqVI', tocCollapsibleExpanded: 'tocCollapsibleExpanded_Ekt4' };
   function B(e) {
    let { toc: t, className: o, minHeadingLevel: l, maxHeadingLevel: s } = e;
    const { collapsed: n, toggleCollapsed: r } = (0, _.u)({ initialState: !0 });
    return (0, a.jsxs)('div', { className: (0, u.Z)(M.tocCollapsible, !n && M.tocCollapsibleExpanded, o), children: [(0, a.jsx)(A, { collapsed: n, onClick: r }), (0, a.jsx)(_.z, { lazy: !0, className: M.tocCollapsibleContent, collapsed: n, children: (0, a.jsx)(T.Z, { toc: t, minHeadingLevel: l, maxHeadingLevel: s }) })] });
   }
   const E = { tocMobile: 'tocMobile_N0TI' };
   function S() {
    const { toc: e, frontMatter: t } = d();
    return (0, a.jsx)(B, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: (0, u.Z)(x.k.docs.docTocMobile, E.tocMobile) });
   }
   var V = o(39201);
   function I() {
    const { toc: e, frontMatter: t } = d();
    return (0, a.jsx)(V.Z, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: x.k.docs.docTocDesktop });
   }
   var F = o(91725),
    H = o(21581);
   function D(e) {
    let { children: t } = e;
    const o = (function () {
     const { metadata: e, frontMatter: t, contentTitle: o } = d();
     return t.hide_title || void 0 !== o ? null : e.title;
    })();
    return (0, a.jsxs)('div', { className: (0, u.Z)(x.k.docs.docMarkdown), children: [o && (0, a.jsx)('header', { children: (0, a.jsx)(F.Z, { as: 'h1', children: o }) }), (0, a.jsx)(H.Z, { children: t })] });
   }
   var Q = o(9637),
    O = o(12970);
   const P = { docItemContainer: 'docItemContainer_nQxQ', docItemCol: 'docItemCol_q9UC' };
   function J(e) {
    let { children: t } = e;
    const o = (function () {
      const { frontMatter: e, toc: t } = d(),
       o = (0, p.i)(),
       l = e.hide_table_of_contents,
       s = !l && t.length > 0;
      return { hidden: l, mobile: s ? (0, a.jsx)(S, {}) : void 0, desktop: !s || ('desktop' !== o && 'ssr' !== o) ? void 0 : (0, a.jsx)(I, {}) };
     })(),
     {
      metadata: { unlisted: l },
     } = d();
    return (0, a.jsxs)('div', { className: 'row', children: [(0, a.jsxs)('div', { className: (0, u.Z)('col', !o.hidden && P.docItemCol), children: [l && (0, a.jsx)(O.Z, {}), (0, a.jsx)(b.Z, {}), (0, a.jsxs)('div', { className: P.docItemContainer, children: [(0, a.jsxs)('article', { children: [(0, a.jsx)(Q.Z, {}), (0, a.jsx)(v.Z, {}), o.mobile, (0, a.jsx)(D, { children: t }), (0, a.jsx)(L, {})] }), (0, a.jsx)(h, {})] })] }), o.desktop && (0, a.jsx)('div', { className: 'col col--3', children: o.desktop })] });
   }
   function $(e) {
    const t = `docs-doc-id-${e.content.metadata.id}`,
     o = e.content;
    return (0, a.jsx)(c, { content: e.content, children: (0, a.jsxs)(s.FG, { className: t, children: [(0, a.jsx)(i, {}), (0, a.jsx)(J, { children: (0, a.jsx)(o, {}) })] }) });
   }
  },
  4690: (e, t, o) => {
   o.d(t, { Z: () => a });
   o(75271);
   var l = o(7512),
    s = o(6348),
    n = o(52676);
   function a(e) {
    const { previous: t, next: o } = e;
    return (0, n.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, l.I)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [t && (0, n.jsx)(s.Z, { ...t, subLabel: (0, n.jsx)(l.Z, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), o && (0, n.jsx)(s.Z, { ...o, subLabel: (0, n.jsx)(l.Z, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  24586: (e, t, o) => {
   o.d(t, { Z: () => c });
   o(75271);
   var l = o(4814),
    s = o(7512),
    n = o(61902),
    a = o(91395),
    r = o(52676);
   function c(e) {
    let { className: t } = e;
    const o = (0, a.E)();
    return o.badge ? (0, r.jsx)('span', { className: (0, l.Z)(t, n.k.docs.docVersionBadge, 'badge badge--secondary'), children: (0, r.jsx)(s.Z, { id: 'theme.docs.versionBadge.label', values: { versionLabel: o.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  83760: (e, t, o) => {
   o.d(t, { Z: () => v });
   o(75271);
   var l = o(4814),
    s = o(87502),
    n = o(90441),
    a = o(7512),
    r = o(2813),
    c = o(61902),
    d = o(49818),
    i = o(91395),
    u = o(52676);
   const p = {
    unreleased: function (e) {
     let { siteTitle: t, versionMetadata: o } = e;
     return (0, u.jsx)(a.Z, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)('b', { children: o.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function (e) {
     let { siteTitle: t, versionMetadata: o } = e;
     return (0, u.jsx)(a.Z, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)('b', { children: o.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function m(e) {
    const t = p[e.versionMetadata.banner];
    return (0, u.jsx)(t, { ...e });
   }
   function h(e) {
    let { versionLabel: t, to: o, onClick: l } = e;
    return (0, u.jsx)(a.Z, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: t, latestVersionLink: (0, u.jsx)('b', { children: (0, u.jsx)(n.Z, { to: o, onClick: l, children: (0, u.jsx)(a.Z, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function b(e) {
    let { className: t, versionMetadata: o } = e;
    const {
      siteConfig: { title: n },
     } = (0, s.Z)(),
     { pluginId: a } = (0, r.gA)({ failfast: !0 }),
     { savePreferredVersionName: i } = (0, d.J)(a),
     { latestDocSuggestion: p, latestVersionSuggestion: b } = (0, r.Jo)(a),
     v = p ?? (x = b).docs.find((e) => e.id === x.mainDocId);
    var x;
    return (0, u.jsxs)('div', { className: (0, l.Z)(t, c.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, u.jsx)('div', { children: (0, u.jsx)(m, { siteTitle: n, versionMetadata: o }) }), (0, u.jsx)('div', { className: 'margin-top--md', children: (0, u.jsx)(h, { versionLabel: b.label, to: v.path, onClick: () => i(b.name) }) })] });
   }
   function v(e) {
    let { className: t } = e;
    const o = (0, i.E)();
    return o.banner ? (0, u.jsx)(b, { className: t, versionMetadata: o }) : null;
   }
  },
  89846: (e, t, o) => {
   o.d(t, { Q: () => h });
   var l = o(90441),
    s = o(3225),
    n = o(46744),
    a = o(55525),
    r = o(46506),
    c = o(4814),
    d = o(75271);
   const i = 'breadcrumbs__73z',
    u = 'breadcrumbs--mobile_QwgF',
    p = 'breadcrumbs--desktop_v9Xv';
   var m = o(52676);
   const h = (e) => {
    let { breadcrumbs: t, ...o } = e;
    const h = [{ href: (0, n.Z)('/'), label: 'Home', rel: 'home' }, ...t],
     { pathname: b } = (0, s.TH)(),
     v = [...h].reverse().find((e) => e.href !== b);
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsx)('div', {
       className: (0, c.Z)(i, p),
       children: (0, m.jsx)(r.Qu, {
        ...o,
        label: 'breadcrumb',
        children: h.map((e, t, o) => {
         let { label: l, href: s, rel: n } = e,
          { length: a } = o;
         return (0, m.jsxs)(d.Fragment, { children: [(0, m.jsx)(r.yY, { href: s, current: t === a - 1, disabled: t === a - 1, rel: (0, c.Z)(n, { up: t === a - 2 }), children: l }), t < a - 1 && (0, m.jsx)(r.sc, { children: '/' })] }, t);
        }),
       }),
      }),
      v && (0, m.jsx)('div', { className: (0, c.Z)(i, u), children: (0, m.jsx)(r.hE, { children: (0, m.jsxs)(l.Z, { href: v.href, rel: v.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, m.jsx)(r.JO, { children: (0, m.jsx)(a.Z, {}) }), v.label] }) }) }),
     ],
    });
   };
  },
  41179: (e, t, o) => {
   o.d(t, { u: () => r });
   var l = o(46506),
    s = o(70739);
   o(75271);
   const n = {
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
   var a = o(52676);
   function r(e) {
    let { lineNumber: t, syntax: o, textContent: r, trim: c } = e,
     d = r;
    return (
     c && (d = d.trim()),
     (0, a.jsx)(s.y$, {
      theme: n,
      code: d,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: s, getLineProps: n, getTokenProps: r } = e;
       return (0, a.jsx)(l.dn, { style: o, children: s.map((e, o) => (0, a.jsxs)('span', { ...n({ line: e }), children: [t && (0, a.jsx)('span', { children: o + 1 }), e.map((e, t) => (0, a.jsx)('span', { ...r({ token: e }) }, t)), '\n'] }, o)) });
      },
     })
    );
   }
  },
  9637: (e, t, o) => {
   o.d(t, { Z: () => r });
   var l = o(61902),
    s = o(34221),
    n = o(89846),
    a = (o(75271), o(52676));
   function r() {
    const e = (0, s.s1)()?.map((e) => ('category' === e.type ? { ...e, ...e.items.find((e) => 'link' === e.type), label: e.label } : { href: e.href, label: e.label })) || [];
    return (0, a.jsx)(n.Q, { breadcrumbs: e, className: l.k.docs.docBreadcrumbs });
   }
  },
  21581: (e, t, o) => {
   o.d(t, { Z: () => b });
   var l = o(24785),
    s = o(49992),
    n = o(79321),
    a = o(75271),
    r = o(52676);
   function c(e) {
    const t = a.Children.toArray(e.children),
     o = t.find((e) => a.isValidElement(e) && 'summary' === e.props?.mdxType),
     l = (0, r.jsx)(r.Fragment, { children: t.filter((e) => e !== o) });
    return (0, r.jsx)(n.Z, { ...e, summary: o, children: l });
   }
   var d = o(93176);
   function i(e) {
    const t = a.Children.map(e.children, (e) =>
     a.isValidElement(e)
      ? (function (e) {
         if (e.props?.mdxType && e.props.originalType) {
          const { ...t } = e.props;
          return a.createElement(e.props.originalType, t);
         }
         return e;
        })(e)
      : e,
    );
    return (0, r.jsx)(d.Z, { ...e, children: t });
   }
   var u = o(41179);
   function p(e) {
    let t,
     o = '';
    if ((0, a.isValidElement)(e.children)) {
     const l = e.children.props,
      s = 'string' == typeof l.className ? l.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     s && (t = s[1]), 'string' == typeof l.children && (o = l.children);
    }
    return (0, r.jsx)(u.u, { syntax: t, textContent: o, trim: !0 });
   }
   var m = o(78377),
    h = o(46506);
   function b(e) {
    let { children: t } = e;
    return (0, r.jsx)(l.Z, { components: { head: i, code: h.EK, a: h.rU, em: h.j$, pre: p, details: c, ul: h.QI, li: h.AS, img: h.Ee, h1: h.nL, h2: h.XJ, h3: h.aC, h4: h.k8, h5: h.by, h6: h.Cd, admonition: s.Z, mermaid: m.Z }, children: t });
   }
  },
  12970: (e, t, o) => {
   o.d(t, { Z: () => a });
   o(75271), o(7512);
   var l = o(93176),
    s = o(52676);
   function n() {
    return (0, s.jsx)(l.Z, { children: (0, s.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function a() {
    return (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(n, {}) });
   }
  },
 },
]);
