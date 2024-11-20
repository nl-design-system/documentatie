'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [27918],
 {
  48399: (e, t, l) => {
   l.r(t), l.d(t, { default: () => O });
   var s = l(75271),
    n = l(17310),
    o = l(15053),
    a = l(52676);
   const d = s.createContext(null);
   function r(e) {
    let { children: t, content: l } = e;
    const n = (function (e) {
     return (0, s.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(l);
    return (0, a.jsx)(d.Provider, { value: n, children: t });
   }
   function i() {
    const e = (0, s.useContext)(d);
    if (null === e) throw new o.i6('DocProvider');
    return e;
   }
   function c() {
    const { metadata: e, frontMatter: t, assets: l } = i();
    return (0, a.jsx)(n.d, { title: e.title, description: e.description, keywords: t.keywords, image: l.image ?? t.image });
   }
   var u = l(4814),
    p = l(26413),
    h = l(4690);
   function m() {
    const { metadata: e } = i();
    return (0, a.jsx)(h.Z, { previous: e.previous, next: e.next });
   }
   var b = l(83760),
    v = l(24586),
    x = l(61902),
    g = l(7512);
   function y(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: l } = e;
    return (0, a.jsx)(g.Z, { id: 'theme.lastUpdated.atDate', description: 'The words used to describe on which date a page has been last updated', values: { date: (0, a.jsx)('b', { children: (0, a.jsx)('time', { dateTime: new Date(1e3 * t).toISOString(), children: l }) }) }, children: ' on {date}' });
   }
   function j(e) {
    let { lastUpdatedBy: t } = e;
    return (0, a.jsx)(g.Z, { id: 'theme.lastUpdated.byUser', description: 'The words used to describe by who the page has been last updated', values: { user: (0, a.jsx)('b', { children: t }) }, children: ' by {user}' });
   }
   function f(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: l, lastUpdatedBy: s } = e;
    return (0, a.jsxs)('span', { className: x.k.common.lastUpdated, children: [(0, a.jsx)(g.Z, { id: 'theme.lastUpdated.lastUpdatedAtBy', description: 'The sentence used to display when a page has been last updated, and by who', values: { atDate: t && l ? (0, a.jsx)(y, { lastUpdatedAt: t, formattedLastUpdatedAt: l }) : '', byUser: s ? (0, a.jsx)(j, { lastUpdatedBy: s }) : '' }, children: 'Last updated{atDate}{byUser}' }), !1] });
   }
   var _ = l(97885),
    k = l(45538);
   const Z = { lastUpdated: 'lastUpdated_UpNN' };
   function N(e) {
    return (0, a.jsx)('div', { className: (0, u.Z)(x.k.docs.docFooterTagsRow, 'row margin-bottom--sm'), children: (0, a.jsx)('div', { className: 'col', children: (0, a.jsx)(k.Z, { ...e }) }) });
   }
   function C(e) {
    let { editUrl: t, lastUpdatedAt: l, lastUpdatedBy: s, formattedLastUpdatedAt: n } = e;
    return (0, a.jsxs)('div', { className: (0, u.Z)(x.k.docs.docFooterEditMetaRow, 'row'), children: [(0, a.jsx)('div', { className: 'col', children: t && (0, a.jsx)(_.Z, { editUrl: t }) }), (0, a.jsx)('div', { className: (0, u.Z)('col', Z.lastUpdated), children: (l || s) && (0, a.jsx)(f, { lastUpdatedAt: l, formattedLastUpdatedAt: n, lastUpdatedBy: s }) })] });
   }
   function L() {
    const { metadata: e } = i(),
     { editUrl: t, lastUpdatedAt: l, formattedLastUpdatedAt: s, lastUpdatedBy: n, tags: o } = e,
     d = o.length > 0,
     r = !!(t || l || n);
    return d || r ? (0, a.jsxs)('footer', { className: (0, u.Z)(x.k.docs.docFooter, 'docusaurus-mt-lg'), children: [d && (0, a.jsx)(N, { tags: o }), r && (0, a.jsx)(C, { editUrl: t, lastUpdatedAt: l, lastUpdatedBy: n, formattedLastUpdatedAt: s })] }) : null;
   }
   var U = l(93456),
    T = l(68139);
   const w = { tocCollapsibleButton: 'tocCollapsibleButton_j42O', tocCollapsibleButtonExpanded: 'tocCollapsibleButtonExpanded_woVJ' };
   function A(e) {
    let { collapsed: t, ...l } = e;
    return (0, a.jsx)('button', { type: 'button', ...l, className: (0, u.Z)('clean-btn', w.tocCollapsibleButton, !t && w.tocCollapsibleButtonExpanded, l.className), children: (0, a.jsx)(g.Z, { id: 'theme.TOCCollapsible.toggleButtonLabel', description: 'The label used by the button on the collapsible TOC component', children: 'On this page' }) });
   }
   const M = { tocCollapsible: 'tocCollapsible_Uc9g', tocCollapsibleContent: 'tocCollapsibleContent_KqVI', tocCollapsibleExpanded: 'tocCollapsibleExpanded_Ekt4' };
   function B(e) {
    let { toc: t, className: l, minHeadingLevel: s, maxHeadingLevel: n } = e;
    const { collapsed: o, toggleCollapsed: d } = (0, U.u)({ initialState: !0 });
    return (0, a.jsxs)('div', { className: (0, u.Z)(M.tocCollapsible, !o && M.tocCollapsibleExpanded, l), children: [(0, a.jsx)(A, { collapsed: o, onClick: d }), (0, a.jsx)(U.z, { lazy: !0, className: M.tocCollapsibleContent, collapsed: o, children: (0, a.jsx)(T.Z, { toc: t, minHeadingLevel: s, maxHeadingLevel: n }) })] });
   }
   const E = { tocMobile: 'tocMobile_N0TI' };
   function I() {
    const { toc: e, frontMatter: t } = i();
    return (0, a.jsx)(B, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: (0, u.Z)(x.k.docs.docTocMobile, E.tocMobile) });
   }
   var S = l(39201);
   function V() {
    const { toc: e, frontMatter: t } = i();
    return (0, a.jsx)(S.Z, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: x.k.docs.docTocDesktop });
   }
   var F = l(91725),
    D = l(21581);
   function H(e) {
    let { children: t } = e;
    const l = (function () {
     const { metadata: e, frontMatter: t, contentTitle: l } = i();
     return t.hide_title || void 0 !== l ? null : e.title;
    })();
    return (0, a.jsxs)('div', { className: (0, u.Z)(x.k.docs.docMarkdown), children: [l && (0, a.jsx)('header', { children: (0, a.jsx)(F.Z, { as: 'h1', children: l }) }), (0, a.jsx)(D.Z, { children: t })] });
   }
   var $ = l(9637),
    P = l(12970);
   const Q = { docItemContainer: 'docItemContainer_nQxQ', docItemCol: 'docItemCol_q9UC' };
   function J(e) {
    let { children: t } = e;
    const l = (function () {
      const { frontMatter: e, toc: t } = i(),
       l = (0, p.i)(),
       s = e.hide_table_of_contents,
       n = !s && t.length > 0;
      return { hidden: s, mobile: n ? (0, a.jsx)(I, {}) : void 0, desktop: !n || ('desktop' !== l && 'ssr' !== l) ? void 0 : (0, a.jsx)(V, {}) };
     })(),
     {
      metadata: { unlisted: s },
     } = i();
    return (0, a.jsxs)('div', { className: 'row', children: [(0, a.jsxs)('div', { className: (0, u.Z)('col', !l.hidden && Q.docItemCol), children: [s && (0, a.jsx)(P.Z, {}), (0, a.jsx)(b.Z, {}), (0, a.jsxs)('div', { className: Q.docItemContainer, children: [(0, a.jsxs)('article', { children: [(0, a.jsx)($.Z, {}), (0, a.jsx)(v.Z, {}), l.mobile, (0, a.jsx)(H, { children: t }), (0, a.jsx)(L, {})] }), (0, a.jsx)(m, {})] })] }), l.desktop && (0, a.jsx)('div', { className: 'col col--3', children: l.desktop })] });
   }
   function O(e) {
    const t = `docs-doc-id-${e.content.metadata.id}`,
     l = e.content;
    return (0, a.jsx)(r, { content: e.content, children: (0, a.jsxs)(n.FG, { className: t, children: [(0, a.jsx)(c, {}), (0, a.jsx)(J, { children: (0, a.jsx)(l, {}) })] }) });
   }
  },
  4690: (e, t, l) => {
   l.d(t, { Z: () => a });
   l(75271);
   var s = l(7512),
    n = l(6348),
    o = l(52676);
   function a(e) {
    const { previous: t, next: l } = e;
    return (0, o.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, s.I)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [t && (0, o.jsx)(n.Z, { ...t, subLabel: (0, o.jsx)(s.Z, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), l && (0, o.jsx)(n.Z, { ...l, subLabel: (0, o.jsx)(s.Z, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  24586: (e, t, l) => {
   l.d(t, { Z: () => r });
   l(75271);
   var s = l(4814),
    n = l(7512),
    o = l(61902),
    a = l(91395),
    d = l(52676);
   function r(e) {
    let { className: t } = e;
    const l = (0, a.E)();
    return l.badge ? (0, d.jsx)('span', { className: (0, s.Z)(t, o.k.docs.docVersionBadge, 'badge badge--secondary'), children: (0, d.jsx)(n.Z, { id: 'theme.docs.versionBadge.label', values: { versionLabel: l.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  83760: (e, t, l) => {
   l.d(t, { Z: () => v });
   l(75271);
   var s = l(4814),
    n = l(87502),
    o = l(90441),
    a = l(7512),
    d = l(2813),
    r = l(61902),
    i = l(49818),
    c = l(91395),
    u = l(52676);
   const p = {
    unreleased: function (e) {
     let { siteTitle: t, versionMetadata: l } = e;
     return (0, u.jsx)(a.Z, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)('b', { children: l.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function (e) {
     let { siteTitle: t, versionMetadata: l } = e;
     return (0, u.jsx)(a.Z, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)('b', { children: l.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function h(e) {
    const t = p[e.versionMetadata.banner];
    return (0, u.jsx)(t, { ...e });
   }
   function m(e) {
    let { versionLabel: t, to: l, onClick: s } = e;
    return (0, u.jsx)(a.Z, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: t, latestVersionLink: (0, u.jsx)('b', { children: (0, u.jsx)(o.Z, { to: l, onClick: s, children: (0, u.jsx)(a.Z, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function b(e) {
    let { className: t, versionMetadata: l } = e;
    const {
      siteConfig: { title: o },
     } = (0, n.Z)(),
     { pluginId: a } = (0, d.gA)({ failfast: !0 }),
     { savePreferredVersionName: c } = (0, i.J)(a),
     { latestDocSuggestion: p, latestVersionSuggestion: b } = (0, d.Jo)(a),
     v = p ?? (x = b).docs.find((e) => e.id === x.mainDocId);
    var x;
    return (0, u.jsxs)('div', { className: (0, s.Z)(t, r.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, u.jsx)('div', { children: (0, u.jsx)(h, { siteTitle: o, versionMetadata: l }) }), (0, u.jsx)('div', { className: 'margin-top--md', children: (0, u.jsx)(m, { versionLabel: b.label, to: v.path, onClick: () => c(b.name) }) })] });
   }
   function v(e) {
    let { className: t } = e;
    const l = (0, c.E)();
    return l.banner ? (0, u.jsx)(b, { className: t, versionMetadata: l }) : null;
   }
  },
  89846: (e, t, l) => {
   l.d(t, { Q: () => m });
   var s = l(90441),
    n = l(3225),
    o = l(46744),
    a = l(55525),
    d = l(46506),
    r = l(4814),
    i = l(75271);
   const c = 'breadcrumbs__73z',
    u = 'breadcrumbs--mobile_QwgF',
    p = 'breadcrumbs--desktop_v9Xv';
   var h = l(52676);
   const m = (e) => {
    let { breadcrumbs: t, ...l } = e;
    const m = [{ href: (0, o.Z)('/'), label: 'Home', rel: 'home' }, ...t],
     { pathname: b } = (0, n.TH)(),
     v = [...m].reverse().find((e) => e.href !== b);
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsx)('div', {
       className: (0, r.Z)(c, p),
       children: (0, h.jsx)(d.Qu, {
        ...l,
        label: 'breadcrumb',
        children: m.map((e, t, l) => {
         let { label: s, href: n, rel: o } = e,
          { length: a } = l;
         return (0, h.jsxs)(i.Fragment, { children: [(0, h.jsx)(d.yY, { href: n, current: t === a - 1, disabled: t === a - 1, rel: (0, r.Z)(o, { up: t === a - 2 }), children: s }), t < a - 1 && (0, h.jsx)(d.sc, { children: '/' })] }, t);
        }),
       }),
      }),
      v && (0, h.jsx)('div', { className: (0, r.Z)(c, u), children: (0, h.jsx)(d.hE, { children: (0, h.jsxs)(s.Z, { href: v.href, rel: v.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, h.jsx)(d.JO, { children: (0, h.jsx)(a.Z, {}) }), v.label] }) }) }),
     ],
    });
   };
  },
  41179: (e, t, l) => {
   l.d(t, { u: () => i });
   var s = l(46506),
    n = l(70739),
    o = l(75271),
    a = l(91050);
   const d = {
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
   var r = l(52676);
   function i(e) {
    let { lineNumber: t, syntax: l, textContent: i, trim: c } = e,
     u = i;
    const { title: p, type: h } = (0, o.useContext)(a.n),
     m = (0, o.useId)();
    return (
     c && (u = u.trim()),
     (0, r.jsx)(n.y$, {
      theme: d,
      code: u,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: n, getLineProps: o, getTokenProps: a } = e;
       return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, r.jsx)(s.dn, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': m, style: l, children: n.map((e, l) => (0, r.jsxs)('span', { ...o({ line: e }), children: [t && (0, r.jsx)('span', { children: l + 1 }), e.map((e, t) => (0, r.jsx)('span', { ...a({ token: e }) }, t)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  91050: (e, t, l) => {
   l.d(t, { n: () => c, X: () => u });
   var s = l(77355),
    n = l(67663),
    o = l(46506),
    a = l(4814),
    d = l(75271);
   const r = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var i = l(52676);
   const c = (0, d.createContext)({}),
    u = (e) => {
     let { title: t, appearance: l, description: d, children: u, figure: p } = e;
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = p ? 'figure' : 'div',
      b = p ? 'figcaption' : 'div';
     return (0, i.jsxs)(m, { className: (0, a.Z)(r['nlds-guideline'], r[`nlds-guideline--${l}`]), id: 'string' == typeof t ? t?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(b, { className: (0, a.Z)(r['nlds-guideline__description']), children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.nv, { className: (0, a.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(s.Z, { 'aria-hidden': 'true', role: 'presentation', className: r['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: r['nlds-guideline__title'], children: h.dont })] }), (0, i.jsx)(o.nv, { children: t })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.nv, { className: (0, a.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(n.Z, { 'aria-hidden': 'true', role: 'presentation', className: r['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: r['nlds-guideline__title'], children: h.do })] }), (0, i.jsx)(o.nv, { children: t })] }), d] }), (0, i.jsx)('div', { className: (0, a.Z)(r['nlds-guideline__example']), children: (0, i.jsx)(c.Provider, { value: { title: t, type: h[l] }, children: u }) })] });
    };
  },
  9637: (e, t, l) => {
   l.d(t, { Z: () => d });
   var s = l(61902),
    n = l(34221),
    o = l(89846),
    a = (l(75271), l(52676));
   function d() {
    const e = (0, n.s1)()?.map((e) => ('category' === e.type ? { ...e, ...e.items.find((e) => 'link' === e.type), label: e.label } : { href: e.href, label: e.label })) || [];
    return (0, a.jsx)(o.Q, { breadcrumbs: e, className: s.k.docs.docBreadcrumbs });
   }
  },
  21581: (e, t, l) => {
   l.d(t, { Z: () => b });
   var s = l(24785),
    n = l(49992),
    o = l(79321),
    a = l(75271),
    d = l(52676);
   function r(e) {
    const t = a.Children.toArray(e.children),
     l = t.find((e) => a.isValidElement(e) && 'summary' === e.props?.mdxType),
     s = (0, d.jsx)(d.Fragment, { children: t.filter((e) => e !== l) });
    return (0, d.jsx)(o.Z, { ...e, summary: l, children: s });
   }
   var i = l(93176);
   function c(e) {
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
    return (0, d.jsx)(i.Z, { ...e, children: t });
   }
   var u = l(41179);
   function p(e) {
    let t,
     l = '';
    if ((0, a.isValidElement)(e.children)) {
     const s = e.children.props,
      n = 'string' == typeof s.className ? s.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     n && (t = n[1]), 'string' == typeof s.children && (l = s.children);
    }
    return (0, d.jsx)(u.u, { syntax: t, textContent: l, trim: !0 });
   }
   var h = l(78377),
    m = l(46506);
   function b(e) {
    let { children: t } = e;
    return (0, d.jsx)(s.Z, { components: { head: c, code: m.EK, a: m.rU, em: m.j$, pre: p, details: r, ul: m.QI, li: m.AS, img: m.Ee, h1: m.nL, h2: m.XJ, h3: m.aC, h4: m.k8, h5: m.by, h6: m.Cd, admonition: n.Z, mermaid: h.Z }, children: t });
   }
  },
  12970: (e, t, l) => {
   l.d(t, { Z: () => a });
   l(75271), l(7512);
   var s = l(93176),
    n = l(52676);
   function o() {
    return (0, n.jsx)(s.Z, { children: (0, n.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function a() {
    return (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(o, {}) });
   }
  },
 },
]);
