'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [27918],
 {
  95111: (e, t, s) => {
   s.r(t), s.d(t, { default: () => J });
   var l = s(75271),
    o = s(14225),
    n = s(40465),
    a = s(52676);
   const r = l.createContext(null);
   function d(e) {
    let { children: t, content: s } = e;
    const o = (function (e) {
     return (0, l.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(s);
    return (0, a.jsx)(r.Provider, { value: o, children: t });
   }
   function c() {
    const e = (0, l.useContext)(r);
    if (null === e) throw new n.i6('DocProvider');
    return e;
   }
   function i() {
    const { metadata: e, frontMatter: t, assets: s } = c();
    return (0, a.jsx)(o.d, { title: e.title, description: e.description, keywords: t.keywords, image: s.image ?? t.image });
   }
   var u = s(4814),
    h = s(68175),
    m = s(92139);
   function p() {
    const { metadata: e } = c();
    return (0, a.jsx)(m.Z, { previous: e.previous, next: e.next });
   }
   var b = s(35353),
    v = s(46663),
    x = s(65697),
    y = s(40217);
   function j(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: s } = e;
    return (0, a.jsx)(y.Z, { id: 'theme.lastUpdated.atDate', description: 'The words used to describe on which date a page has been last updated', values: { date: (0, a.jsx)('b', { children: (0, a.jsx)('time', { dateTime: new Date(1e3 * t).toISOString(), children: s }) }) }, children: ' on {date}' });
   }
   function g(e) {
    let { lastUpdatedBy: t } = e;
    return (0, a.jsx)(y.Z, { id: 'theme.lastUpdated.byUser', description: 'The words used to describe by who the page has been last updated', values: { user: (0, a.jsx)('b', { children: t }) }, children: ' by {user}' });
   }
   function f(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: s, lastUpdatedBy: l } = e;
    return (0, a.jsxs)('span', { className: x.k.common.lastUpdated, children: [(0, a.jsx)(y.Z, { id: 'theme.lastUpdated.lastUpdatedAtBy', description: 'The sentence used to display when a page has been last updated, and by who', values: { atDate: t && s ? (0, a.jsx)(j, { lastUpdatedAt: t, formattedLastUpdatedAt: s }) : '', byUser: l ? (0, a.jsx)(g, { lastUpdatedBy: l }) : '' }, children: 'Last updated{atDate}{byUser}' }), !1] });
   }
   var k = s(64477),
    Z = s(8481);
   const _ = { lastUpdated: 'lastUpdated_ka3N' };
   function N(e) {
    return (0, a.jsx)('div', { className: (0, u.Z)(x.k.docs.docFooterTagsRow, 'row margin-bottom--sm'), children: (0, a.jsx)('div', { className: 'col', children: (0, a.jsx)(Z.Z, { ...e }) }) });
   }
   function C(e) {
    let { editUrl: t, lastUpdatedAt: s, lastUpdatedBy: l, formattedLastUpdatedAt: o } = e;
    return (0, a.jsxs)('div', { className: (0, u.Z)(x.k.docs.docFooterEditMetaRow, 'row'), children: [(0, a.jsx)('div', { className: 'col', children: t && (0, a.jsx)(k.Z, { editUrl: t }) }), (0, a.jsx)('div', { className: (0, u.Z)('col', _.lastUpdated), children: (s || l) && (0, a.jsx)(f, { lastUpdatedAt: s, formattedLastUpdatedAt: o, lastUpdatedBy: l }) })] });
   }
   function L() {
    const { metadata: e } = c(),
     { editUrl: t, lastUpdatedAt: s, formattedLastUpdatedAt: l, lastUpdatedBy: o, tags: n } = e,
     r = n.length > 0,
     d = !!(t || s || o);
    return r || d ? (0, a.jsxs)('footer', { className: (0, u.Z)(x.k.docs.docFooter, 'docusaurus-mt-lg'), children: [r && (0, a.jsx)(N, { tags: n }), d && (0, a.jsx)(C, { editUrl: t, lastUpdatedAt: s, lastUpdatedBy: o, formattedLastUpdatedAt: l })] }) : null;
   }
   var U = s(96401),
    T = s(68721);
   const w = { tocCollapsibleButton: 'tocCollapsibleButton_phta', tocCollapsibleButtonExpanded: 'tocCollapsibleButtonExpanded_rU2P' };
   function A(e) {
    let { collapsed: t, ...s } = e;
    return (0, a.jsx)('button', { type: 'button', ...s, className: (0, u.Z)('clean-btn', w.tocCollapsibleButton, !t && w.tocCollapsibleButtonExpanded, s.className), children: (0, a.jsx)(y.Z, { id: 'theme.TOCCollapsible.toggleButtonLabel', description: 'The label used by the button on the collapsible TOC component', children: 'On this page' }) });
   }
   const M = { tocCollapsible: 'tocCollapsible_DnGi', tocCollapsibleContent: 'tocCollapsibleContent_ss2L', tocCollapsibleExpanded: 'tocCollapsibleExpanded_Ss39' };
   function B(e) {
    let { toc: t, className: s, minHeadingLevel: l, maxHeadingLevel: o } = e;
    const { collapsed: n, toggleCollapsed: r } = (0, U.u)({ initialState: !0 });
    return (0, a.jsxs)('div', { className: (0, u.Z)(M.tocCollapsible, !n && M.tocCollapsibleExpanded, s), children: [(0, a.jsx)(A, { collapsed: n, onClick: r }), (0, a.jsx)(U.z, { lazy: !0, className: M.tocCollapsibleContent, collapsed: n, children: (0, a.jsx)(T.Z, { toc: t, minHeadingLevel: l, maxHeadingLevel: o }) })] });
   }
   const S = { tocMobile: 'tocMobile_WWCy' };
   function I() {
    const { toc: e, frontMatter: t } = c();
    return (0, a.jsx)(B, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: (0, u.Z)(x.k.docs.docTocMobile, S.tocMobile) });
   }
   var E = s(62178);
   function V() {
    const { toc: e, frontMatter: t } = c();
    return (0, a.jsx)(E.Z, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: x.k.docs.docTocDesktop });
   }
   var F = s(6709),
    D = s(39731);
   function H(e) {
    let { children: t } = e;
    const s = (function () {
     const { metadata: e, frontMatter: t, contentTitle: s } = c();
     return t.hide_title || void 0 !== s ? null : e.title;
    })();
    return (0, a.jsxs)('div', { className: (0, u.Z)(x.k.docs.docMarkdown), children: [s && (0, a.jsx)('header', { children: (0, a.jsx)(F.Z, { as: 'h1', children: s }) }), (0, a.jsx)(D.Z, { children: t })] });
   }
   var P = s(9637),
    $ = s(17902);
   const O = { docItemContainer: 'docItemContainer_PI1c', docItemCol: 'docItemCol_h8Im' };
   function W(e) {
    let { children: t } = e;
    const s = (function () {
      const { frontMatter: e, toc: t } = c(),
       s = (0, h.i)(),
       l = e.hide_table_of_contents,
       o = !l && t.length > 0;
      return { hidden: l, mobile: o ? (0, a.jsx)(I, {}) : void 0, desktop: !o || ('desktop' !== s && 'ssr' !== s) ? void 0 : (0, a.jsx)(V, {}) };
     })(),
     {
      metadata: { unlisted: l },
     } = c();
    return (0, a.jsxs)('div', { className: 'row', children: [(0, a.jsxs)('div', { className: (0, u.Z)('col', !s.hidden && O.docItemCol), children: [l && (0, a.jsx)($.Z, {}), (0, a.jsx)(b.Z, {}), (0, a.jsxs)('div', { className: O.docItemContainer, children: [(0, a.jsxs)('article', { children: [(0, a.jsx)(P.Z, {}), (0, a.jsx)(v.Z, {}), s.mobile, (0, a.jsx)(H, { children: t }), (0, a.jsx)(L, {})] }), (0, a.jsx)(p, {})] })] }), s.desktop && (0, a.jsx)('div', { className: 'col col--3', children: s.desktop })] });
   }
   function J(e) {
    const t = `docs-doc-id-${e.content.metadata.id}`,
     s = e.content;
    return (0, a.jsx)(d, { content: e.content, children: (0, a.jsxs)(o.FG, { className: t, children: [(0, a.jsx)(i, {}), (0, a.jsx)(W, { children: (0, a.jsx)(s, {}) })] }) });
   }
  },
  92139: (e, t, s) => {
   s.d(t, { Z: () => a });
   s(75271);
   var l = s(40217),
    o = s(49687),
    n = s(52676);
   function a(e) {
    const { previous: t, next: s } = e;
    return (0, n.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, l.I)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [t && (0, n.jsx)(o.Z, { ...t, subLabel: (0, n.jsx)(l.Z, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), s && (0, n.jsx)(o.Z, { ...s, subLabel: (0, n.jsx)(l.Z, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  46663: (e, t, s) => {
   s.d(t, { Z: () => d });
   s(75271);
   var l = s(4814),
    o = s(40217),
    n = s(65697),
    a = s(88758),
    r = s(52676);
   function d(e) {
    let { className: t } = e;
    const s = (0, a.E)();
    return s.badge ? (0, r.jsx)('span', { className: (0, l.Z)(t, n.k.docs.docVersionBadge, 'badge badge--secondary'), children: (0, r.jsx)(o.Z, { id: 'theme.docs.versionBadge.label', values: { versionLabel: s.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  35353: (e, t, s) => {
   s.d(t, { Z: () => v });
   s(75271);
   var l = s(4814),
    o = s(94699),
    n = s(83033),
    a = s(40217),
    r = s(76694),
    d = s(65697),
    c = s(19655),
    i = s(88758),
    u = s(52676);
   const h = {
    unreleased: function (e) {
     let { siteTitle: t, versionMetadata: s } = e;
     return (0, u.jsx)(a.Z, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)('b', { children: s.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function (e) {
     let { siteTitle: t, versionMetadata: s } = e;
     return (0, u.jsx)(a.Z, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)('b', { children: s.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function m(e) {
    const t = h[e.versionMetadata.banner];
    return (0, u.jsx)(t, { ...e });
   }
   function p(e) {
    let { versionLabel: t, to: s, onClick: l } = e;
    return (0, u.jsx)(a.Z, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: t, latestVersionLink: (0, u.jsx)('b', { children: (0, u.jsx)(n.Z, { to: s, onClick: l, children: (0, u.jsx)(a.Z, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function b(e) {
    let { className: t, versionMetadata: s } = e;
    const {
      siteConfig: { title: n },
     } = (0, o.Z)(),
     { pluginId: a } = (0, r.gA)({ failfast: !0 }),
     { savePreferredVersionName: i } = (0, c.J)(a),
     { latestDocSuggestion: h, latestVersionSuggestion: b } = (0, r.Jo)(a),
     v = h ?? (x = b).docs.find((e) => e.id === x.mainDocId);
    var x;
    return (0, u.jsxs)('div', { className: (0, l.Z)(t, d.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, u.jsx)('div', { children: (0, u.jsx)(m, { siteTitle: n, versionMetadata: s }) }), (0, u.jsx)('div', { className: 'margin-top--md', children: (0, u.jsx)(p, { versionLabel: b.label, to: v.path, onClick: () => i(b.name) }) })] });
   }
   function v(e) {
    let { className: t } = e;
    const s = (0, i.E)();
    return s.banner ? (0, u.jsx)(b, { className: t, versionMetadata: s }) : null;
   }
  },
  24009: (e, t, s) => {
   s.d(t, { Q: () => u });
   var l = s(57229),
    o = s(87573),
    n = s(92826),
    a = s(34616),
    r = s(16167),
    d = s(4814),
    c = s(75271),
    i = s(52676);
   const u = (e) => {
    let { breadcrumbs: t, ...s } = e;
    const u = (0, n.Z)('/'),
     { pathname: h } = (0, o.TH)(),
     m = [{ href: u, label: 'Home', rel: 'home' }, ...t].map((e) => {
      return { ...e, href: ((t = e.href), 'string' == typeof t && !1 === t.endsWith('/') ? `${t}/` : t) };
      var t;
     }),
     p = [...m].reverse().find((e) => e.href !== h);
    return (0, i.jsxs)(i.Fragment, {
     children: [
      (0, i.jsx)('div', {
       className: (0, d.Z)('breadcrumbs', 'breadcrumbs--desktop'),
       children: (0, i.jsx)(r.Qu, {
        ...s,
        label: 'breadcrumb',
        children: m.map((e, t, s) => {
         let { label: l, href: o, rel: n } = e,
          { length: a } = s;
         return (0, i.jsxs)(c.Fragment, { children: [(0, i.jsx)(r.yY, { href: o, current: t === a - 1, disabled: t === a - 1, rel: (0, d.Z)(n, { up: t === a - 2 }), children: l }), t < a - 1 && (0, i.jsx)(r.sc, { children: '/' })] }, t);
        }),
       }),
      }),
      p && (0, i.jsx)('div', { className: (0, d.Z)('breadcrumbs', 'breadcrumbs--mobile'), children: (0, i.jsx)(r.hE, { children: (0, i.jsxs)(l.r, { href: p.href, rel: p.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, i.jsx)(r.JO, { children: (0, i.jsx)(a.Z, {}) }), p.label] }) }) }),
     ],
    });
   };
  },
  41179: (e, t, s) => {
   s.d(t, { u: () => c });
   var l = s(16167),
    o = s(60648),
    n = s(75271),
    a = s(40761);
   const r = {
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
   var d = s(52676);
   function c(e) {
    let { lineNumber: t, syntax: s, textContent: c, trim: i } = e,
     u = c;
    const { title: h, type: m } = (0, n.useContext)(a.n),
     p = (0, n.useId)();
    return (
     i && (u = u.trim()),
     (0, d.jsx)(o.y$, {
      theme: r,
      code: u,
      language: s || '',
      children: (e) => {
       let { style: s, tokens: o, getLineProps: n, getTokenProps: a } = e;
       return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, d.jsx)(l.dn, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: s, children: o.map((e, s) => (0, d.jsxs)('span', { ...n({ line: e }), children: [t && (0, d.jsx)('span', { children: s + 1 }), e.map((e, t) => (0, d.jsx)('span', { ...a({ token: e }) }, t)), '\n'] }, s)) })] });
      },
     })
    );
   }
  },
  40761: (e, t, s) => {
   s.d(t, { X: () => i, n: () => c });
   var l = s(69244),
    o = s(20061),
    n = s(16167),
    a = s(4814),
    r = s(75271),
    d = s(52676);
   const c = (0, r.createContext)({}),
    i = (e) => {
     let { title: t, appearance: s, description: r, children: i, figure: u } = e;
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      p = u ? 'figcaption' : 'div';
     return (0, d.jsxs)(m, { className: (0, a.Z)('nlds-guideline', `nlds-guideline--${s}`), id: 'string' == typeof t ? t?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === s ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(n.nv, { className: (0, a.Z)('nlds-guideline__badge', `nlds-guideline__badge--${s}`), children: [(0, d.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, d.jsx)(n.nv, { children: t })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(n.nv, { className: (0, a.Z)('nlds-guideline__badge', `nlds-guideline__badge--${s}`), children: [(0, d.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, d.jsx)(n.nv, { children: t })] }), r] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(c.Provider, { value: { title: t, type: h[s] }, children: i }) })] });
    };
  },
  9637: (e, t, s) => {
   s.d(t, { Z: () => r });
   var l = s(65697),
    o = s(73436),
    n = s(24009),
    a = s(52676);
   function r() {
    const e = (0, o.s1)()?.map((e) => ({ href: e.href, label: e.label })) || [];
    return (0, a.jsx)(n.Q, { breadcrumbs: e, className: l.k.docs.docBreadcrumbs });
   }
  },
  39731: (e, t, s) => {
   s.d(t, { Z: () => m });
   var l = s(40139),
    o = s(73497),
    n = s(27583),
    a = s(75271),
    r = s(52676);
   function d(e) {
    const t = a.Children.toArray(e.children),
     s = t.find((e) => a.isValidElement(e) && 'summary' === e.props?.mdxType),
     l = (0, r.jsx)(r.Fragment, { children: t.filter((e) => e !== s) });
    return (0, r.jsx)(n.Z, { ...e, summary: s, children: l });
   }
   var c = s(41179);
   function i(e) {
    let t,
     s = '';
    if ((0, a.isValidElement)(e.children)) {
     const l = e.children.props,
      o = 'string' == typeof l.className ? l.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     o && (t = o[1]), 'string' == typeof l.children && (s = l.children);
    }
    return (0, r.jsx)(c.u, { syntax: t, textContent: s, trim: !0 });
   }
   var u = s(35519),
    h = s(16167);
   function m(e) {
    let { children: t } = e;
    return (0, r.jsx)(l.Z, {
     components: {
      code: h.EK,
      a: h.rU,
      em: h.j$,
      pre: i,
      details: d,
      ul: (e) => {
       let { children: t } = e;
       return (0, r.jsx)(h.QI, { className: 'utrecht-unordered-list--html-content', children: t });
      },
      ol: (e) => {
       let { children: t } = e;
       return (0, r.jsx)(h.GS, { className: 'utrecht-ordered-list--html-content', children: t });
      },
      img: h.Ee,
      h1: h.nL,
      h2: h.XJ,
      h3: h.aC,
      h4: h.k8,
      h5: h.by,
      h6: h.Cd,
      admonition: o.Z,
      mermaid: u.Z,
     },
     children: t,
    });
   }
  },
  17902: (e, t, s) => {
   s.d(t, { Z: () => a });
   s(75271), s(40217);
   var l = s(97623),
    o = s(52676);
   function n() {
    return (0, o.jsx)(l.Z, { children: (0, o.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function a() {
    return (0, o.jsx)(o.Fragment, { children: (0, o.jsx)(n, {}) });
   }
  },
 },
]);
