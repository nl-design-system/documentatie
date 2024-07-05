'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [27918],
 {
  27668: (e, t, o) => {
   o.r(t), o.d(t, { default: () => $ });
   var l = o(75271),
    s = o(1693),
    n = o(11260),
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
    p = o(13627),
    h = o(30243);
   function m() {
    const { metadata: e } = d();
    return (0, a.jsx)(h.Z, { previous: e.previous, next: e.next });
   }
   var b = o(64435),
    v = o(89635),
    x = o(45652),
    y = o(29989);
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
   var k = o(31033),
    Z = o(62612);
   const C = { lastUpdated: 'lastUpdated_wwdI' };
   function L(e) {
    return (0, a.jsx)('div', { className: (0, u.Z)(x.k.docs.docFooterTagsRow, 'row margin-bottom--sm'), children: (0, a.jsx)('div', { className: 'col', children: (0, a.jsx)(Z.Z, { ...e }) }) });
   }
   function N(e) {
    let { editUrl: t, lastUpdatedAt: o, lastUpdatedBy: l, formattedLastUpdatedAt: s } = e;
    return (0, a.jsxs)('div', { className: (0, u.Z)(x.k.docs.docFooterEditMetaRow, 'row'), children: [(0, a.jsx)('div', { className: 'col', children: t && (0, a.jsx)(k.Z, { editUrl: t }) }), (0, a.jsx)('div', { className: (0, u.Z)('col', C.lastUpdated), children: (o || l) && (0, a.jsx)(g, { lastUpdatedAt: o, formattedLastUpdatedAt: s, lastUpdatedBy: l }) })] });
   }
   function U() {
    const { metadata: e } = d(),
     { editUrl: t, lastUpdatedAt: o, formattedLastUpdatedAt: l, lastUpdatedBy: s, tags: n } = e,
     r = n.length > 0,
     c = !!(t || o || s);
    return r || c ? (0, a.jsxs)('footer', { className: (0, u.Z)(x.k.docs.docFooter, 'docusaurus-mt-lg'), children: [r && (0, a.jsx)(L, { tags: n }), c && (0, a.jsx)(N, { editUrl: t, lastUpdatedAt: o, lastUpdatedBy: s, formattedLastUpdatedAt: l })] }) : null;
   }
   var _ = o(89265),
    T = o(18373);
   const w = { tocCollapsibleButton: 'tocCollapsibleButton_mPVv', tocCollapsibleButtonExpanded: 'tocCollapsibleButtonExpanded_YshZ' };
   function B(e) {
    let { collapsed: t, ...o } = e;
    return (0, a.jsx)('button', { type: 'button', ...o, className: (0, u.Z)('clean-btn', w.tocCollapsibleButton, !t && w.tocCollapsibleButtonExpanded, o.className), children: (0, a.jsx)(y.Z, { id: 'theme.TOCCollapsible.toggleButtonLabel', description: 'The label used by the button on the collapsible TOC component', children: 'On this page' }) });
   }
   const A = { tocCollapsible: 'tocCollapsible_vGyW', tocCollapsibleContent: 'tocCollapsibleContent_f5oo', tocCollapsibleExpanded: 'tocCollapsibleExpanded_Nxam' };
   function M(e) {
    let { toc: t, className: o, minHeadingLevel: l, maxHeadingLevel: s } = e;
    const { collapsed: n, toggleCollapsed: r } = (0, _.u)({ initialState: !0 });
    return (0, a.jsxs)('div', { className: (0, u.Z)(A.tocCollapsible, !n && A.tocCollapsibleExpanded, o), children: [(0, a.jsx)(B, { collapsed: n, onClick: r }), (0, a.jsx)(_.z, { lazy: !0, className: A.tocCollapsibleContent, collapsed: n, children: (0, a.jsx)(T.Z, { toc: t, minHeadingLevel: l, maxHeadingLevel: s }) })] });
   }
   const E = { tocMobile: 'tocMobile_BgfV' };
   function S() {
    const { toc: e, frontMatter: t } = d();
    return (0, a.jsx)(M, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: (0, u.Z)(x.k.docs.docTocMobile, E.tocMobile) });
   }
   var V = o(71738);
   function I() {
    const { toc: e, frontMatter: t } = d();
    return (0, a.jsx)(V.Z, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: x.k.docs.docTocDesktop });
   }
   var F = o(73835),
    H = o(21581);
   function D(e) {
    let { children: t } = e;
    const o = (function () {
     const { metadata: e, frontMatter: t, contentTitle: o } = d();
     return t.hide_title || void 0 !== o ? null : e.title;
    })();
    return (0, a.jsxs)('div', { className: (0, u.Z)(x.k.docs.docMarkdown), children: [o && (0, a.jsx)('header', { children: (0, a.jsx)(F.Z, { as: 'h1', children: o }) }), (0, a.jsx)(H.Z, { children: t })] });
   }
   var P = o(9637),
    O = o(91653);
   const Q = { docItemContainer: 'docItemContainer_O1Bm', docItemCol: 'docItemCol_BZuU' };
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
    return (0, a.jsxs)('div', { className: 'row', children: [(0, a.jsxs)('div', { className: (0, u.Z)('col', !o.hidden && Q.docItemCol), children: [l && (0, a.jsx)(O.Z, {}), (0, a.jsx)(b.Z, {}), (0, a.jsxs)('div', { className: Q.docItemContainer, children: [(0, a.jsxs)('article', { children: [(0, a.jsx)(P.Z, {}), (0, a.jsx)(v.Z, {}), o.mobile, (0, a.jsx)(D, { children: t }), (0, a.jsx)(U, {})] }), (0, a.jsx)(m, {})] })] }), o.desktop && (0, a.jsx)('div', { className: 'col col--3', children: o.desktop })] });
   }
   function $(e) {
    const t = `docs-doc-id-${e.content.metadata.id}`,
     o = e.content;
    return (0, a.jsx)(c, { content: e.content, children: (0, a.jsxs)(s.FG, { className: t, children: [(0, a.jsx)(i, {}), (0, a.jsx)(J, { children: (0, a.jsx)(o, {}) })] }) });
   }
  },
  30243: (e, t, o) => {
   o.d(t, { Z: () => a });
   o(75271);
   var l = o(29989),
    s = o(87087),
    n = o(52676);
   function a(e) {
    const { previous: t, next: o } = e;
    return (0, n.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, l.I)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [t && (0, n.jsx)(s.Z, { ...t, subLabel: (0, n.jsx)(l.Z, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), o && (0, n.jsx)(s.Z, { ...o, subLabel: (0, n.jsx)(l.Z, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  89635: (e, t, o) => {
   o.d(t, { Z: () => c });
   o(75271);
   var l = o(4814),
    s = o(29989),
    n = o(45652),
    a = o(25592),
    r = o(52676);
   function c(e) {
    let { className: t } = e;
    const o = (0, a.E)();
    return o.badge ? (0, r.jsx)('span', { className: (0, l.Z)(t, n.k.docs.docVersionBadge, 'badge badge--secondary'), children: (0, r.jsx)(s.Z, { id: 'theme.docs.versionBadge.label', values: { versionLabel: o.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  64435: (e, t, o) => {
   o.d(t, { Z: () => v });
   o(75271);
   var l = o(4814),
    s = o(80796),
    n = o(88594),
    a = o(29989),
    r = o(36956),
    c = o(45652),
    d = o(53368),
    i = o(25592),
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
   function h(e) {
    const t = p[e.versionMetadata.banner];
    return (0, u.jsx)(t, { ...e });
   }
   function m(e) {
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
    return (0, u.jsxs)('div', { className: (0, l.Z)(t, c.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, u.jsx)('div', { children: (0, u.jsx)(h, { siteTitle: n, versionMetadata: o }) }), (0, u.jsx)('div', { className: 'margin-top--md', children: (0, u.jsx)(m, { versionLabel: b.label, to: v.path, onClick: () => i(b.name) }) })] });
   }
   function v(e) {
    let { className: t } = e;
    const o = (0, i.E)();
    return o.banner ? (0, u.jsx)(b, { className: t, versionMetadata: o }) : null;
   }
  },
  74183: (e, t, o) => {
   o.d(t, { Q: () => m });
   var l = o(88594),
    s = o(3225),
    n = o(3319),
    a = o(29664),
    r = o(93706),
    c = o(4814),
    d = o(75271);
   const i = 'breadcrumbs__73z',
    u = 'breadcrumbs--mobile_QwgF',
    p = 'breadcrumbs--desktop_v9Xv';
   var h = o(52676);
   const m = (e) => {
    let { breadcrumbs: t, ...o } = e;
    const m = [{ href: (0, n.Z)('/'), label: 'Home', rel: 'home' }, ...t],
     { pathname: b } = (0, s.TH)(),
     v = [...m].reverse().find((e) => e.href !== b);
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsx)('div', {
       className: (0, c.Z)(i, p),
       children: (0, h.jsx)(r.Qu, {
        ...o,
        children: m.map((e, t, o) => {
         let { label: l, href: s, rel: n } = e,
          { length: a } = o;
         return (0, h.jsxs)(d.Fragment, { children: [(0, h.jsx)(r.yY, { href: s, current: t === a - 1, disabled: t === a - 1, rel: (0, c.Z)(n, { up: t === a - 2 }), children: l }), t < a - 1 && (0, h.jsx)(r.sc, { children: '/' })] }, t);
        }),
       }),
      }),
      v && (0, h.jsx)('div', { className: (0, c.Z)(i, u), children: (0, h.jsx)(r.hE, { children: (0, h.jsxs)(l.Z, { href: v.href, rel: v.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, h.jsx)(r.JO, { children: (0, h.jsx)(a.Z, {}) }), v.label] }) }) }),
     ],
    });
   };
  },
  41179: (e, t, o) => {
   o.d(t, { u: () => r });
   var l = o(93706),
    s = o(12429);
   o(75271);
   const n = {
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
   var l = o(45652),
    s = o(8194),
    n = o(74183),
    a = (o(75271), o(52676));
   function r() {
    const e = (0, s.s1)()?.map((e) => ('category' === e.type ? { ...e, ...e.items.find((e) => 'link' === e.type), label: e.label } : { href: e.href, label: e.label })) || [];
    return (0, a.jsx)(n.Q, { breadcrumbs: e, className: l.k.docs.docBreadcrumbs });
   }
  },
  21581: (e, t, o) => {
   o.d(t, { Z: () => b });
   var l = o(24785),
    s = o(50354),
    n = o(18677),
    a = o(75271),
    r = o(52676);
   function c(e) {
    const t = a.Children.toArray(e.children),
     o = t.find((e) => a.isValidElement(e) && 'summary' === e.props?.mdxType),
     l = (0, r.jsx)(r.Fragment, { children: t.filter((e) => e !== o) });
    return (0, r.jsx)(n.Z, { ...e, summary: o, children: l });
   }
   var d = o(29072);
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
   var h = o(80026),
    m = o(93706);
   function b(e) {
    let { children: t } = e;
    return (0, r.jsx)(l.Z, { components: { head: i, code: m.EK, a: m.rU, em: m.j$, pre: p, details: c, ul: m.QI, li: m.AS, img: m.Ee, h1: m.nL, h2: m.XJ, h3: m.aC, h4: m.k8, h5: m.by, h6: m.Cd, admonition: s.Z, mermaid: h.Z }, children: t });
   }
  },
  91653: (e, t, o) => {
   o.d(t, { Z: () => a });
   o(75271), o(29989);
   var l = o(29072),
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
