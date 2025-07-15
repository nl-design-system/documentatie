'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [27918],
 {
  95111: (e, t, l) => {
   l.r(t), l.d(t, { default: () => Q });
   var s = l(75271),
    o = l(14225),
    n = l(40465),
    a = l(52676);
   const r = s.createContext(null);
   function d(e) {
    let { children: t, content: l } = e;
    const o = (function (e) {
     return (0, s.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(l);
    return (0, a.jsx)(r.Provider, { value: o, children: t });
   }
   function c() {
    const e = (0, s.useContext)(r);
    if (null === e) throw new n.i6('DocProvider');
    return e;
   }
   function i() {
    const { metadata: e, frontMatter: t, assets: l } = c();
    return (0, a.jsx)(o.d, { title: e.title, description: e.description, keywords: t.keywords, image: l.image ?? t.image });
   }
   var u = l(4814),
    h = l(68175),
    m = l(92139);
   function p() {
    const { metadata: e } = c();
    return (0, a.jsx)(m.Z, { previous: e.previous, next: e.next });
   }
   var b = l(35353),
    v = l(46663),
    x = l(65697),
    y = l(40217);
   function j(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: l } = e;
    return (0, a.jsx)(y.Z, { id: 'theme.lastUpdated.atDate', description: 'The words used to describe on which date a page has been last updated', values: { date: (0, a.jsx)('b', { children: (0, a.jsx)('time', { dateTime: new Date(1e3 * t).toISOString(), children: l }) }) }, children: ' on {date}' });
   }
   function g(e) {
    let { lastUpdatedBy: t } = e;
    return (0, a.jsx)(y.Z, { id: 'theme.lastUpdated.byUser', description: 'The words used to describe by who the page has been last updated', values: { user: (0, a.jsx)('b', { children: t }) }, children: ' by {user}' });
   }
   function f(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: l, lastUpdatedBy: s } = e;
    return (0, a.jsxs)('span', { className: x.k.common.lastUpdated, children: [(0, a.jsx)(y.Z, { id: 'theme.lastUpdated.lastUpdatedAtBy', description: 'The sentence used to display when a page has been last updated, and by who', values: { atDate: t && l ? (0, a.jsx)(j, { lastUpdatedAt: t, formattedLastUpdatedAt: l }) : '', byUser: s ? (0, a.jsx)(g, { lastUpdatedBy: s }) : '' }, children: 'Last updated{atDate}{byUser}' }), !1] });
   }
   var k = l(64477),
    Z = l(8481);
   const _ = { lastUpdated: 'lastUpdated_ka3N' };
   function N(e) {
    return (0, a.jsx)('div', { className: (0, u.Z)(x.k.docs.docFooterTagsRow, 'row margin-bottom--sm'), children: (0, a.jsx)('div', { className: 'col', children: (0, a.jsx)(Z.Z, { ...e }) }) });
   }
   function C(e) {
    let { editUrl: t, lastUpdatedAt: l, lastUpdatedBy: s, formattedLastUpdatedAt: o } = e;
    return (0, a.jsxs)('div', { className: (0, u.Z)(x.k.docs.docFooterEditMetaRow, 'row'), children: [(0, a.jsx)('div', { className: 'col', children: t && (0, a.jsx)(k.Z, { editUrl: t }) }), (0, a.jsx)('div', { className: (0, u.Z)('col', _.lastUpdated), children: (l || s) && (0, a.jsx)(f, { lastUpdatedAt: l, formattedLastUpdatedAt: o, lastUpdatedBy: s }) })] });
   }
   function L() {
    const { metadata: e } = c(),
     { editUrl: t, lastUpdatedAt: l, formattedLastUpdatedAt: s, lastUpdatedBy: o, tags: n } = e,
     r = n.length > 0,
     d = !!(t || l || o);
    return r || d ? (0, a.jsxs)('footer', { className: (0, u.Z)(x.k.docs.docFooter, 'docusaurus-mt-lg'), children: [r && (0, a.jsx)(N, { tags: n }), d && (0, a.jsx)(C, { editUrl: t, lastUpdatedAt: l, lastUpdatedBy: o, formattedLastUpdatedAt: s })] }) : null;
   }
   var U = l(96401),
    T = l(68721);
   const w = { tocCollapsibleButton: 'tocCollapsibleButton_phta', tocCollapsibleButtonExpanded: 'tocCollapsibleButtonExpanded_rU2P' };
   function A(e) {
    let { collapsed: t, ...l } = e;
    return (0, a.jsx)('button', { type: 'button', ...l, className: (0, u.Z)('clean-btn', w.tocCollapsibleButton, !t && w.tocCollapsibleButtonExpanded, l.className), children: (0, a.jsx)(y.Z, { id: 'theme.TOCCollapsible.toggleButtonLabel', description: 'The label used by the button on the collapsible TOC component', children: 'On this page' }) });
   }
   const M = { tocCollapsible: 'tocCollapsible_DnGi', tocCollapsibleContent: 'tocCollapsibleContent_ss2L', tocCollapsibleExpanded: 'tocCollapsibleExpanded_Ss39' };
   function B(e) {
    let { toc: t, className: l, minHeadingLevel: s, maxHeadingLevel: o } = e;
    const { collapsed: n, toggleCollapsed: r } = (0, U.u)({ initialState: !0 });
    return (0, a.jsxs)('div', { className: (0, u.Z)(M.tocCollapsible, !n && M.tocCollapsibleExpanded, l), children: [(0, a.jsx)(A, { collapsed: n, onClick: r }), (0, a.jsx)(U.z, { lazy: !0, className: M.tocCollapsibleContent, collapsed: n, children: (0, a.jsx)(T.Z, { toc: t, minHeadingLevel: s, maxHeadingLevel: o }) })] });
   }
   const S = { tocMobile: 'tocMobile_WWCy' };
   function I() {
    const { toc: e, frontMatter: t } = c();
    return (0, a.jsx)(B, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: (0, u.Z)(x.k.docs.docTocMobile, S.tocMobile) });
   }
   var E = l(62178);
   function V() {
    const { toc: e, frontMatter: t } = c();
    return (0, a.jsx)(E.Z, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: x.k.docs.docTocDesktop });
   }
   var F = l(6709),
    D = l(39731);
   function H(e) {
    let { children: t } = e;
    const l = (function () {
     const { metadata: e, frontMatter: t, contentTitle: l } = c();
     return t.hide_title || void 0 !== l ? null : e.title;
    })();
    return (0, a.jsxs)('div', { className: (0, u.Z)(x.k.docs.docMarkdown), children: [l && (0, a.jsx)('header', { children: (0, a.jsx)(F.Z, { as: 'h1', children: l }) }), (0, a.jsx)(D.Z, { children: t })] });
   }
   var P = l(9637),
    $ = l(17902);
   const O = { docItemContainer: 'docItemContainer_PI1c', docItemCol: 'docItemCol_h8Im' };
   function J(e) {
    let { children: t } = e;
    const l = (function () {
      const { frontMatter: e, toc: t } = c(),
       l = (0, h.i)(),
       s = e.hide_table_of_contents,
       o = !s && t.length > 0;
      return { hidden: s, mobile: o ? (0, a.jsx)(I, {}) : void 0, desktop: !o || ('desktop' !== l && 'ssr' !== l) ? void 0 : (0, a.jsx)(V, {}) };
     })(),
     {
      metadata: { unlisted: s },
     } = c();
    return (0, a.jsxs)('div', { className: 'row', children: [(0, a.jsxs)('div', { className: (0, u.Z)('col', !l.hidden && O.docItemCol), children: [s && (0, a.jsx)($.Z, {}), (0, a.jsx)(b.Z, {}), (0, a.jsxs)('div', { className: O.docItemContainer, children: [(0, a.jsxs)('article', { children: [(0, a.jsx)(P.Z, {}), (0, a.jsx)(v.Z, {}), l.mobile, (0, a.jsx)(H, { children: t }), (0, a.jsx)(L, {})] }), (0, a.jsx)(p, {})] })] }), l.desktop && (0, a.jsx)('div', { className: 'col col--3', children: l.desktop })] });
   }
   function Q(e) {
    const t = `docs-doc-id-${e.content.metadata.id}`,
     l = e.content;
    return (0, a.jsx)(d, { content: e.content, children: (0, a.jsxs)(o.FG, { className: t, children: [(0, a.jsx)(i, {}), (0, a.jsx)(J, { children: (0, a.jsx)(l, {}) })] }) });
   }
  },
  92139: (e, t, l) => {
   l.d(t, { Z: () => a });
   l(75271);
   var s = l(40217),
    o = l(49687),
    n = l(52676);
   function a(e) {
    const { previous: t, next: l } = e;
    return (0, n.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, s.I)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [t && (0, n.jsx)(o.Z, { ...t, subLabel: (0, n.jsx)(s.Z, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), l && (0, n.jsx)(o.Z, { ...l, subLabel: (0, n.jsx)(s.Z, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  46663: (e, t, l) => {
   l.d(t, { Z: () => d });
   l(75271);
   var s = l(4814),
    o = l(40217),
    n = l(65697),
    a = l(88758),
    r = l(52676);
   function d(e) {
    let { className: t } = e;
    const l = (0, a.E)();
    return l.badge ? (0, r.jsx)('span', { className: (0, s.Z)(t, n.k.docs.docVersionBadge, 'badge badge--secondary'), children: (0, r.jsx)(o.Z, { id: 'theme.docs.versionBadge.label', values: { versionLabel: l.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  35353: (e, t, l) => {
   l.d(t, { Z: () => v });
   l(75271);
   var s = l(4814),
    o = l(94699),
    n = l(83033),
    a = l(40217),
    r = l(76694),
    d = l(65697),
    c = l(19655),
    i = l(88758),
    u = l(52676);
   const h = {
    unreleased: function (e) {
     let { siteTitle: t, versionMetadata: l } = e;
     return (0, u.jsx)(a.Z, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)('b', { children: l.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function (e) {
     let { siteTitle: t, versionMetadata: l } = e;
     return (0, u.jsx)(a.Z, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)('b', { children: l.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function m(e) {
    const t = h[e.versionMetadata.banner];
    return (0, u.jsx)(t, { ...e });
   }
   function p(e) {
    let { versionLabel: t, to: l, onClick: s } = e;
    return (0, u.jsx)(a.Z, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: t, latestVersionLink: (0, u.jsx)('b', { children: (0, u.jsx)(n.Z, { to: l, onClick: s, children: (0, u.jsx)(a.Z, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function b(e) {
    let { className: t, versionMetadata: l } = e;
    const {
      siteConfig: { title: n },
     } = (0, o.Z)(),
     { pluginId: a } = (0, r.gA)({ failfast: !0 }),
     { savePreferredVersionName: i } = (0, c.J)(a),
     { latestDocSuggestion: h, latestVersionSuggestion: b } = (0, r.Jo)(a),
     v = h ?? (x = b).docs.find((e) => e.id === x.mainDocId);
    var x;
    return (0, u.jsxs)('div', { className: (0, s.Z)(t, d.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, u.jsx)('div', { children: (0, u.jsx)(m, { siteTitle: n, versionMetadata: l }) }), (0, u.jsx)('div', { className: 'margin-top--md', children: (0, u.jsx)(p, { versionLabel: b.label, to: v.path, onClick: () => i(b.name) }) })] });
   }
   function v(e) {
    let { className: t } = e;
    const l = (0, i.E)();
    return l.banner ? (0, u.jsx)(b, { className: t, versionMetadata: l }) : null;
   }
  },
  24009: (e, t, l) => {
   l.d(t, { Q: () => u });
   var s = l(57229),
    o = l(87573),
    n = l(92826),
    a = l(34616),
    r = l(16167),
    d = l(4814),
    c = l(75271),
    i = l(52676);
   const u = (e) => {
    let { breadcrumbs: t, ...l } = e;
    const u = [{ href: (0, n.Z)('/'), label: 'Home', rel: 'home' }, ...t],
     { pathname: h } = (0, o.TH)(),
     m = [...u].reverse().find((e) => e.href !== h);
    return (0, i.jsxs)(i.Fragment, {
     children: [
      (0, i.jsx)('div', {
       className: (0, d.Z)('breadcrumbs', 'breadcrumbs--desktop'),
       children: (0, i.jsx)(r.Qu, {
        ...l,
        label: 'breadcrumb',
        children: u.map((e, t, l) => {
         let { label: s, href: o, rel: n } = e,
          { length: a } = l;
         return (0, i.jsxs)(c.Fragment, { children: [(0, i.jsx)(r.yY, { href: o, current: t === a - 1, disabled: t === a - 1, rel: (0, d.Z)(n, { up: t === a - 2 }), children: s }), t < a - 1 && (0, i.jsx)(r.sc, { children: '/' })] }, t);
        }),
       }),
      }),
      m && (0, i.jsx)('div', { className: (0, d.Z)('breadcrumbs', 'breadcrumbs--mobile'), children: (0, i.jsx)(r.hE, { children: (0, i.jsxs)(s.r, { href: m.href, rel: m.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, i.jsx)(r.JO, { children: (0, i.jsx)(a.Z, {}) }), m.label] }) }) }),
     ],
    });
   };
  },
  41179: (e, t, l) => {
   l.d(t, { u: () => c });
   var s = l(16167),
    o = l(60648),
    n = l(75271),
    a = l(40761);
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
   var d = l(52676);
   function c(e) {
    let { lineNumber: t, syntax: l, textContent: c, trim: i } = e,
     u = c;
    const { title: h, type: m } = (0, n.useContext)(a.n),
     p = (0, n.useId)();
    return (
     i && (u = u.trim()),
     (0, d.jsx)(o.y$, {
      theme: r,
      code: u,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: o, getLineProps: n, getTokenProps: a } = e;
       return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, d.jsx)(s.dn, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: l, children: o.map((e, l) => (0, d.jsxs)('span', { ...n({ line: e }), children: [t && (0, d.jsx)('span', { children: l + 1 }), e.map((e, t) => (0, d.jsx)('span', { ...a({ token: e }) }, t)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  40761: (e, t, l) => {
   l.d(t, { X: () => i, n: () => c });
   var s = l(69244),
    o = l(20061),
    n = l(16167),
    a = l(4814),
    r = l(75271),
    d = l(52676);
   const c = (0, r.createContext)({}),
    i = (e) => {
     let { title: t, appearance: l, description: r, children: i, figure: u } = e;
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      p = u ? 'figcaption' : 'div';
     return (0, d.jsxs)(m, { className: (0, a.Z)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof t ? t?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(n.nv, { className: (0, a.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, d.jsx)(s.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, d.jsx)(n.nv, { children: t })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(n.nv, { className: (0, a.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, d.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, d.jsx)(n.nv, { children: t })] }), r] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(c.Provider, { value: { title: t, type: h[l] }, children: i }) })] });
    };
  },
  9637: (e, t, l) => {
   l.d(t, { Z: () => r });
   var s = l(65697),
    o = l(73436),
    n = l(24009),
    a = l(52676);
   function r() {
    const e = (0, o.s1)()?.map((e) => ({ href: e.href, label: e.label })) || [];
    return (0, a.jsx)(n.Q, { breadcrumbs: e, className: s.k.docs.docBreadcrumbs });
   }
  },
  39731: (e, t, l) => {
   l.d(t, { Z: () => m });
   var s = l(40139),
    o = l(73497),
    n = l(27583),
    a = l(75271),
    r = l(52676);
   function d(e) {
    const t = a.Children.toArray(e.children),
     l = t.find((e) => a.isValidElement(e) && 'summary' === e.props?.mdxType),
     s = (0, r.jsx)(r.Fragment, { children: t.filter((e) => e !== l) });
    return (0, r.jsx)(n.Z, { ...e, summary: l, children: s });
   }
   var c = l(41179);
   function i(e) {
    let t,
     l = '';
    if ((0, a.isValidElement)(e.children)) {
     const s = e.children.props,
      o = 'string' == typeof s.className ? s.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     o && (t = o[1]), 'string' == typeof s.children && (l = s.children);
    }
    return (0, r.jsx)(c.u, { syntax: t, textContent: l, trim: !0 });
   }
   var u = l(35519),
    h = l(16167);
   function m(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.Z, {
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
  17902: (e, t, l) => {
   l.d(t, { Z: () => a });
   l(75271), l(40217);
   var s = l(97623),
    o = l(52676);
   function n() {
    return (0, o.jsx)(s.Z, { children: (0, o.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function a() {
    return (0, o.jsx)(o.Fragment, { children: (0, o.jsx)(n, {}) });
   }
  },
 },
]);
