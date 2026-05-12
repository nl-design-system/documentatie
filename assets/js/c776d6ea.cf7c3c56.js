(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65954],
 {
  1457(e, n, a) {
   'use strict';
   a.d(n, { e: () => o });
   var t = a(12941),
    l = a(30758),
    i = a(76097),
    s = a(86070);
   const o = ({ component: e }) => {
    const { title: n } = e,
     o = (0, i.fX)(n),
     r = l.lazy(() => a(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, s.jsx)(l.Suspense, { fallback: null, children: (0, s.jsx)(t.o, { omitH1: !0, headingLevel: 1, children: (0, s.jsx)(r, {}) }) });
   };
  },
  12941(e, n, a) {
   'use strict';
   a.d(n, { o: () => g });
   var t = a(18439),
    l = a(46447),
    i = a(86070);
   const s = (e, n) => {
     const a = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === a.protocol) {
      const { pathname: a, search: t, hash: l } = new URL(n, new URL(e, 'http://example.com/'));
      return a + t + l;
     }
     return a.toString();
    },
    o = { 1: {}, 2: { h1: l.fV, h2: l._B, h3: l.f_, h4: l.mM, h5: l.TT }, 3: { h1: l._B, h2: l.f_, h3: l.mM, h4: l.TT, h5: l.TT }, 4: { h1: l.f_, h2: l.mM, h3: l.TT, h4: l.TT, h5: l.TT }, 5: { h1: l.mM, h2: l.TT, h3: l.TT, h4: l.TT, h5: l.TT }, 6: { h1: l.TT, h2: l.TT, h3: l.TT, h4: l.TT, h5: l.TT } },
    r = (e) => ({ img: ({ src: n, ...a }) => (0, i.jsx)('img', { ...a, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    g = ({ children: e, omitH1: n = !1, headingLevel: a = 1, baseUrl: l = '', components: s = {} }) => (0, i.jsx)(t.x, { components: { ...d(n, a), ...r(l), ...s }, children: e });
  },
  15042(e, n, a) {
   'use strict';
   a.d(n, { p: () => i });
   var t = a(13526),
    l = a(86070);
   const i = ({ children: e, className: n, level: a = 1, suffix: i, ...s }) => (0, l.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${a}`, n), ...s, children: [(0, l.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, l.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  26655(e, n, a) {
   'use strict';
   a.d(n, { AC: () => d, Fu: () => s, Wu: () => o, Zp: () => r });
   var t = a(46447),
    l = a(13526),
    i = a(86070);
   const s = ({ background: e, children: n, className: a, ...t }) => (0, i.jsx)('div', { className: (0, l.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, a), ...t, children: n }),
    o = (e) => (0, i.jsx)('div', { className: 'ma-card__content', ...e }),
    r = ({ href: e, appearance: n, className: a, component: s = 'div', background: o, children: r }) => {
     const d = (e) => ('article' === s ? (0, i.jsx)('article', { ...e }) : 'section' === s ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      g = (0, i.jsx)(d, { className: (0, l.A)('ma-cardgroup__card', o && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, a), children: r });
     return e ? (0, i.jsx)(t.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: g }) : g;
    },
    d = ({ appearance: e = 'medium', children: n, className: a }) => (0, i.jsx)('div', { className: (0, l.A)('ma-cardgroup', `ma-cardgroup--${e}`, a), children: n });
  },
  31522(e, n, a) {
   'use strict';
   a.d(n, { D: () => o });
   var t = a(46447),
    l = a(13526),
    i = a(76097),
    s = a(86070);
   const o = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, s.jsx)(t.KE, { className: (0, l.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  39948(e, n, a) {
   'use strict';
   a.d(n, { r: () => u });
   var t = a(29181),
    l = a(74172),
    i = a(15089),
    s = a(28377),
    o = a(33648),
    r = a(83386),
    d = a(86070);
   const g = { figma: (0, d.jsx)(l.A, {}), github: (0, d.jsx)(i.A, {}), npm: (0, d.jsx)(s.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    u = ({ brand: e }) => (0, d.jsx)(t.In, { children: g[e] || (0, d.jsx)(r.A, {}) });
  },
  46565(e, n, a) {
   'use strict';
   a.d(n, { c: () => l });
   var t = a(30758);
   function l() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  50487(e, n, a) {
   'use strict';
   (a.r(n), a.d(n, { assets: () => k, component: () => F, contentTitle: () => x, default: () => N, description: () => T, frontMatter: () => b, issueNumber: () => D, metadata: () => t, title: () => j, toc: () => H }));
   const t = JSON.parse('{"id":"componenten/heading-4/index","title":"Heading 4","description":"Koptekst die in de koppenstructuur op het vierde niveau staat.","source":"@site/docs/componenten/heading-4/index.mdx","sourceDirName":"componenten/heading-4","slug":"/heading-4","permalink":"/heading-4","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-4/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 4","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 4","pagination_label":"Heading 4","description":"Koptekst die in de koppenstructuur op het vierde niveau staat.","slug":"/heading-4","keywords":["caption","content","h4","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 3","permalink":"/heading-3"},"next":{"title":"Heading 5","permalink":"/heading-5"}}');
   var l,
    i,
    s,
    o,
    r,
    d,
    g,
    u = a(86070),
    m = a(18439),
    c = a(72924),
    h = a(30758);
   function p() {
    return (
     (p = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var n = 1; n < arguments.length; n++) {
          var a = arguments[n];
          for (var t in a) ({}).hasOwnProperty.call(a, t) && (e[t] = a[t]);
         }
         return e;
        }),
     p.apply(null, arguments)
    );
   }
   const v = ({ title: e, titleId: n, ...a }) => h.createElement('svg', p({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': n }, a), e ? h.createElement('title', { id: n }, e) : null, l || (l = h.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = h.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), s || (s = h.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 240v60' })), o || (o = h.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), r || (r = h.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), d || (d = h.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), g || (g = h.createElement('path', { fill: '#0A2750', d: 'M321.56 254.72v2.58l.04 2.54h.66q1.72 0 2.7-1.4 1-1.42 1-4.02 0-2.64-1-4.02-.98-1.38-2.68-1.38h-.68l-.04 2.5v3.2m-4.9-5.78v-1.08h5.94q2.14 0 3.66.8a5.5 5.5 0 0 1 2.34 2.24q.82 1.46.82 3.5 0 2.08-.88 3.56t-2.5 2.26q-1.6.78-3.8.78h-5.58v-1.08l1.5-.16q.04-1.22.04-2.48v-5.7q0-1.26-.04-2.48zM330.702 261v-.94l1.08-.24q.02-.72.02-1.56v-2.42q0-.82-.02-1.36 0-.56-.04-1.16l-1.24-.18v-.78l4.2-1.34.34.22-.06 2.9v4.14q0 .84.02 1.58l1 .2v.94zm2.66-11.46q-.7 0-1.2-.44a1.49 1.49 0 0 1-.5-1.14q0-.7.5-1.14.5-.46 1.2-.46.699 0 1.2.46.5.44.5 1.14 0 .68-.5 1.14-.501.44-1.2.44m7.428 11.76q-1.341 0-2.1-.64-.76-.66-.76-2.14v-.96q.02-.46.02-1.04v-3.82h-1.3v-1.18l1.48-.2 1-2.8h2.04l-.04 2.82h2.1v1.36h-2.1v5.6q0 .7.28 1.04.3.32.74.32.519 0 1.08-.44l.5.48q-.4.76-1.12 1.18-.7.42-1.82.42m7.685-.3v-.94l1.08-.24q.02-.72.02-1.56v-2.42q0-.82-.02-1.36 0-.56-.04-1.16l-1.24-.18v-.78l4.2-1.34.34.22-.06 2.9v4.14q0 .84.02 1.58l1 .2v.94zm2.66-11.46q-.7 0-1.2-.44a1.49 1.49 0 0 1-.5-1.14q0-.7.5-1.14.5-.46 1.2-.46t1.2.46q.5.44.5 1.14 0 .68-.5 1.14-.5.44-1.2.44m7.148 11.76q-1.9 0-3.48-.92l.06-2.44h1.6l.34 1.98q.36.14.72.22.36.06.78.06.86 0 1.32-.28.46-.3.46-.9 0-.46-.34-.8t-1.34-.62l-1.08-.32q-1.16-.34-1.8-1.1-.62-.76-.62-1.88 0-1.38 1.08-2.32 1.08-.96 3.1-.96.88 0 1.62.22.76.2 1.54.6l-.14 2.18h-1.6l-.4-1.72q-.42-.16-1.1-.16t-1.1.28q-.4.28-.4.84 0 .4.32.72.32.3 1.36.62l.98.28q1.42.42 2.04 1.2t.62 1.9q0 1.58-1.22 2.46-1.2.86-3.32.86m14.819-9.24q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.46 0-2.58-.6a4.47 4.47 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82.76-1.16 1.94-1.74 1.18-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.62 1.18-1.68 1.76t-2.52.58m10.39-9.24q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.461 0-2.58-.6a4.46 4.46 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82a4.85 4.85 0 0 1 1.94-1.74q1.179-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.621 1.18-1.68 1.76-1.06.58-2.52.58m5.429-.3v-.94l1.08-.24q.02-.72.02-1.56v-2.62q0-.82-.02-1.26 0-.46-.04-1.06l-1.22-.18v-.78l3.94-1.34.36.22.12 1.44q.78-.92 1.54-1.28a3.75 3.75 0 0 1 1.66-.38q1.3 0 2.08.86.8.86.8 2.58v3.84q0 .82.02 1.56l1 .2v.94h-5.28v-.94l1.04-.22q.02-.74.02-1.56v-3.58q0-.96-.26-1.34-.26-.4-.84-.4-.78 0-1.72.72v4.6q0 .84.02 1.58l.94.2v.94zm22.682-8.78v-.88h3.78v.88l-1.16.22-3.3 8.6h-1.52l-3.6-8.62-.98-.2v-.88h5.68v.88l-1.26.26 1.88 5.12 1.74-5.14zm9.02 9.08q-1.56 0-2.7-.64a4.53 4.53 0 0 1-1.76-1.82q-.62-1.18-.62-2.72t.66-2.68a4.8 4.8 0 0 1 1.84-1.78q1.16-.64 2.58-.64t2.56.62a4.63 4.63 0 0 1 1.84 1.78q.68 1.14.68 2.7t-.62 2.72-1.76 1.82q-1.14.64-2.7.64m0-1.04q.84 0 1.26-.98t.42-3.1q0-2.14-.42-3.12t-1.26-.98q-.86 0-1.28.98t-.42 3.12q0 2.12.42 3.1t1.28.98m11.445 1.04q-1.56 0-2.7-.64a4.54 4.54 0 0 1-1.76-1.82q-.62-1.18-.62-2.72t.66-2.68a4.8 4.8 0 0 1 1.84-1.78q1.161-.64 2.58-.64t2.56.62a4.6 4.6 0 0 1 1.84 1.78q.68 1.14.68 2.7t-.62 2.72-1.76 1.82q-1.14.64-2.7.64m0-1.04q.84 0 1.26-.98t.42-3.1q0-2.14-.42-3.12t-1.26-.98q-.86 0-1.28.98t-.42 3.12q0 2.12.42 3.1t1.28.98m6.189.74v-.94l1.1-.22q.02-.74.02-1.58v-2.64q0-.56-.02-.92 0-.36-.02-.66 0-.32-.02-.72l-1.22-.18v-.78l3.94-1.34.36.22.18 2.36q.42-1.28 1.18-1.92.76-.66 1.5-.66.66 0 1.14.38.48.36.6 1.1-.02.78-.42 1.22-.4.42-1 .42-.84 0-1.54-.94l-.12-.16q-.44.42-.82 1.06a5 5 0 0 0-.52 1.34v2.78q0 .8.02 1.5l1.58.34v.94zm8.848.02v-.94l1.06-.22q.02-.72.02-1.56v-9.92l-1.24-.16v-.84l4.14-.9.32.2-.08 2.8v2.82q1.26-1.28 2.9-1.28 1.101 0 1.98.58.88.56 1.4 1.7.54 1.12.54 2.78 0 1.62-.6 2.8-.6 1.16-1.58 1.8-.96.62-2.1.62-1.64 0-2.64-1.18l-.34 1.16zm5.66-8.26q-.38 0-.72.16a3.3 3.3 0 0 0-.66.42v5.72q.62.56 1.36.56.88 0 1.44-.86.58-.86.58-2.62 0-1.78-.56-2.58-.54-.8-1.44-.8m11.624-.7q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48-.399-.48-.96-.48m.04 9.24q-1.46 0-2.58-.6a4.47 4.47 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82a4.87 4.87 0 0 1 1.94-1.74q1.18-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.62 1.18-1.68 1.76-1.059.58-2.52.58m10.39-9.24q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.46 0-2.58-.6a4.47 4.47 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82.76-1.16 1.94-1.74 1.18-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.62 1.18-1.68 1.76t-2.52.58m5.058-.3v-.94l1.1-.24q.02-.76.02-1.52.02-.76.02-1.5v-8.38l-1.24-.2v-.84l4.2-.9.32.2-.08 2.8v8.84l.04 1.52 1.1.22v.94zm9.904-4.78q0 1.64.58 2.5.58.84 1.5.84.68 0 1.24-.46v-5.96a1.88 1.88 0 0 0-1.18-.42q-.92 0-1.54.86-.6.86-.6 2.64m3.58 5-.16-1.14q-1.16 1.22-2.82 1.22a3.75 3.75 0 0 1-2.04-.58q-.9-.58-1.42-1.7-.52-1.14-.52-2.76 0-1.64.62-2.8.64-1.18 1.64-1.8 1.02-.64 2.14-.64.78 0 1.36.28.58.26 1.06.78v-3.66l-1.4-.2v-.84l4.22-.9.32.2-.08 2.8v10.38l.98.2v.94zm15.253-9v-.88h3.78v.88l-1.16.22-3.3 8.6h-1.52l-3.6-8.62-.98-.2v-.88h5.68v.88l-1.26.26 1.88 5.12 1.74-5.14zm11.679 9.06q-1.74 0-2.2-1.44a7.3 7.3 0 0 1-1.24 1.08q-.579.38-1.62.38-1.16 0-1.9-.66-.72-.66-.72-1.9 0-.72.32-1.3t1.16-1.08 2.38-.94q.3-.1.7-.2t.82-.2v-.66q0-1.34-.34-1.82-.32-.48-1.28-.48h-.26q-.12 0-.28.02l-.1.88q-.02.98-.46 1.42-.42.44-1 .44-1.1 0-1.34-1 .081-1.24 1.26-2.02t3.34-.78q1.92 0 2.74.88.84.88.84 2.9v4.48q0 .58.44.58a.6.6 0 0 0 .3-.08q.141-.1.3-.36l.54.36q-.36.8-.94 1.16-.56.34-1.46.34m-4.72-3.06q0 .74.34 1.1a1.17 1.17 0 0 0 1.32.26q.24-.1.76-.46v-3.24a8 8 0 0 0-.52.18q-.24.08-.42.16a2.56 2.56 0 0 0-1.08.8q-.4.5-.4 1.2m7.605 2.78v-.94l1.08-.24q.02-.72.02-1.56v-2.62q0-.82-.02-1.26 0-.46-.04-1.06l-1.22-.18v-.78l3.94-1.34.36.22.12 1.44q.78-.92 1.54-1.28a3.75 3.75 0 0 1 1.66-.38q1.3 0 2.08.86.8.86.8 2.58v3.84q0 .82.02 1.56l1 .2v.94h-5.28v-.94l1.04-.22q.02-.74.02-1.56v-3.58q0-.96-.26-1.34-.26-.4-.84-.4-.78 0-1.72.72v4.6q0 .84.02 1.58l.94.2v.94zm21.562-8.94q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.46 0-2.58-.6a4.47 4.47 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82.76-1.16 1.94-1.74 1.18-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.62 1.18-1.68 1.76t-2.52.58m10.39-9.24q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.461 0-2.58-.6a4.46 4.46 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82a4.85 4.85 0 0 1 1.94-1.74q1.179-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.621 1.18-1.68 1.76-1.06.58-2.52.58m5.429-.3v-.94l1.08-.24q.02-.72.02-1.56v-2.62q0-.82-.02-1.26 0-.46-.04-1.06l-1.22-.18v-.78l3.94-1.34.36.22.12 1.44q.78-.92 1.54-1.28a3.75 3.75 0 0 1 1.66-.38q1.3 0 2.08.86.8.86.8 2.58v3.84q0 .82.02 1.56l1 .2v.94h-5.28v-.94l1.04-.22q.02-.74.02-1.56v-3.58q0-.96-.26-1.34-.26-.4-.84-.4-.78 0-1.72.72v4.6q0 .84.02 1.58l.94.2v.94zM316.56 291v-.94l1.08-.24q.02-.72.02-1.56v-9.84l-1.24-.2v-.84l4.14-.9.32.2-.08 2.8v3.22q.8-.94 1.54-1.3a3.6 3.6 0 0 1 1.64-.38q1.32 0 2.12.86t.8 2.58v3.84q0 .82.02 1.56l1 .2v.94h-5.26v-.94l1.04-.22q.02-.74.02-1.56v-3.58q0-.98-.24-1.36-.22-.38-.84-.38-.4 0-.86.24t-.92.68v4.4q0 .84.02 1.58l.94.2v.94zm17.304-8.94q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.461 0-2.58-.6a4.46 4.46 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82a4.85 4.85 0 0 1 1.94-1.74q1.179-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.621 1.18-1.68 1.76-1.06.58-2.52.58m13.111-.02q-1.74 0-2.2-1.44-.64.68-1.24 1.08-.58.38-1.62.38-1.16 0-1.9-.66-.72-.66-.72-1.9 0-.72.32-1.3t1.16-1.08 2.38-.94q.3-.1.7-.2t.82-.2v-.66q0-1.34-.34-1.82-.32-.48-1.28-.48h-.26q-.12 0-.28.02l-.1.88q-.02.98-.46 1.42-.42.44-1 .44-1.1 0-1.34-1 .08-1.24 1.26-2.02t3.34-.78q1.92 0 2.74.88.84.88.84 2.9v4.48q0 .58.44.58a.6.6 0 0 0 .3-.08q.14-.1.3-.36l.54.36q-.36.8-.94 1.16-.56.34-1.46.34m-4.72-3.06q0 .74.34 1.1a1.17 1.17 0 0 0 1.32.26q.24-.1.76-.46v-3.24a8 8 0 0 0-.52.18q-.24.08-.42.16a2.56 2.56 0 0 0-1.08.8q-.4.5-.4 1.2m11.005-2q0 1.64.58 2.5.58.84 1.5.84.68 0 1.24-.46v-5.96a1.88 1.88 0 0 0-1.18-.42q-.92 0-1.54.86-.6.86-.6 2.64m3.58 5-.16-1.14q-1.16 1.22-2.82 1.22a3.74 3.74 0 0 1-2.04-.58q-.9-.58-1.42-1.7-.52-1.14-.52-2.76 0-1.64.62-2.8.64-1.18 1.64-1.8 1.02-.64 2.14-.64.78 0 1.36.28.58.26 1.06.78v-3.66l-1.4-.2v-.84l4.22-.9.32.2-.08 2.8v10.38l.98.2v.94zm4.935-.22v-.94l1.08-.24q.02-.72.02-1.56v-2.42q0-.82-.02-1.36 0-.56-.04-1.16l-1.24-.18v-.78l4.2-1.34.34.22-.06 2.9v4.14q0 .84.02 1.58l1 .2v.94zm2.66-11.46q-.7 0-1.2-.44a1.49 1.49 0 0 1-.5-1.14q0-.7.5-1.14.5-.46 1.2-.46t1.2.46q.5.44.5 1.14 0 .68-.5 1.14-.5.44-1.2.44m3.628 11.46v-.94l1.08-.24q.02-.72.02-1.56v-2.62q0-.82-.02-1.26 0-.46-.04-1.06l-1.22-.18v-.78l3.94-1.34.36.22.12 1.44q.78-.92 1.54-1.28a3.75 3.75 0 0 1 1.66-.38q1.3 0 2.08.86.8.86.8 2.58v3.84q0 .82.02 1.56l1 .2v.94h-5.28v-.94l1.04-.22q.02-.74.02-1.56v-3.58q0-.96-.26-1.34-.26-.4-.84-.4-.78 0-1.72.72v4.6q0 .84.02 1.58l.94.2v.94zm16.664-4.48q.7 0 1.04-.62.36-.62.36-1.68t-.36-1.64q-.34-.6-1-.6-.68 0-1.02.6t-.34 1.66.32 1.68q.32.6 1 .6m-2.66 6.14q0 .88.66 1.28.66.42 2.02.42 1.5 0 2.26-.44t.76-1.1q0-.44-.32-.8-.32-.34-1.14-.34h-2.1q-1.1 0-1.82-.18a2.8 2.8 0 0 0-.24.54q-.08.26-.08.62m2.68-5.2q-1.04 0-1.82-.24-.24.42-.24.92 0 .34.26.56.261.2.9.2h2.34q1.52 0 2.42.38.9.36 1.28 1.02.4.64.4 1.52 0 1-.66 1.84-.66.86-1.98 1.36-1.3.52-3.22.52-1.66 0-2.6-.34-.939-.32-1.32-.86-.38-.54-.38-1.14 0-1.28 1.66-2.06-.62-.26-.9-.68a1.7 1.7 0 0 1-.26-.92q0-.7.4-1.32.42-.64 1.16-1.28-.82-.42-1.22-1.12a3.1 3.1 0 0 1-.4-1.56q0-1.4 1.02-2.32 1.04-.92 3.16-.92 1.08 0 1.88.24t1.3.68l2.24-.96.32.2v1.54h-1.9q.36.66.36 1.54 0 1.34-1.04 2.28-1.02.92-3.16.92' })));
   var f = a(1457),
    q = a(56167);
   const b = { title: 'Heading 4', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 4', pagination_label: 'Heading 4', description: 'Koptekst die in de koppenstructuur op het vierde niveau staat.', slug: '/heading-4', keywords: ['caption', 'content', 'h4', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    x = void 0,
    k = {},
    j = 'Heading 4',
    T = 'Koptekst die in de koppenstructuur op het vierde niveau staat.',
    D = 260,
    F = c.find((e) => e.number === D),
    H = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function L(e) {
    const n = { h2: 'h2', ...(0, m.R)(), ...e.components },
     { ComponentAnatomy: a } = n;
    return (
     a ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('ComponentAnatomy', !0),
     (0, u.jsxs)(u.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, u.jsx)(q.Fc, { component: F, headingLevel: 1, description: T }), '\n', (0, u.jsx)(f.e, { component: F }), '\n', (0, u.jsx)(n.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, u.jsx)(a, { component: F, illustration: v }), '\n', (0, u.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, u.jsx)(q.VK, { component: F, headingLevel: 3 }), '\n', (0, u.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, u.jsx)(q.mu, { component: F, headingLevel: 3 }), '\n', (0, u.jsx)(q.K_, { component: F }), '\n', (0, u.jsx)(q.$9, { component: F, headingLevel: 2 })] })
    );
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, m.R)(), ...e.components };
    return n ? (0, u.jsx)(n, { ...e, children: (0, u.jsx)(L, { ...e }) }) : L(e);
   }
  },
  56167(e, n, a) {
   'use strict';
   a.d(n, { VK: () => v, $9: () => q, mu: () => f, Fc: () => b, K_: () => x });
   var t = a(29181),
    l = a(13526),
    i = a(39948),
    s = a(26655),
    o = a(46565);
   function r(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var d = a(86070);
   const g = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(r, {
     children: () => {
      const t = a(83294).V6;
      return (0, d.jsx)(t, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--basis-color-accent-1-inverse-bg-default)', key: 'Done', value: e, stroke: '2' },
        { fill: 'var(--basis-color-disabled-bg-default)', key: 'Todo', value: n, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   var u = a(31522),
    m = a(15042),
    c = a(58876),
    h = a(76097);
   const p = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Form Field Error Message","slug":"form-field-error message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}]}'),
    v = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => h.f4.includes(e.id)),
      i = a && h.f4.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(t.If, { sections: i.map((a) => ({ className: (0, l.A)('ma-definition-of-done', a && `ma-definition-of-done--${(0, h.fX)(a.title)}`), headingLevel: n, expanded: !1, label: a ? `${a.title} - ${a.progress.value} van ${a.progress.max}` : '', body: a && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(c._, { children: a.tasks.map(({ checked: e, name: a, id: t }) => (0, d.jsx)(c.Z, { headingLevel: n + 1, checked: e, heading: a, description: (0, h.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${a.url}?filterQuery=${e.title}`, children: [a.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => !h.f4.includes(e.id));
     return e && a.length
      ? (0, d.jsx)(s.AC, {
         appearance: 'large',
         className: 'ma-implementation-card-group',
         children: a
          .sort((e, n) => {
           const a = e.progress.max - e.progress.value,
            t = n.progress.max - n.progress.value;
           return a === t ? e.title.localeCompare(n.title) : a - t;
          })
          .map((e) => {
           const a = e.tasks.find(({ name: e }) => 'Naam' === e),
            l = a?.value,
            o = (0, h.Pv)(e),
            r = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${l} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${l} voor visuele regressie tests` }],
            ]),
            u = e.tasks.filter(({ name: e, value: n }) => r.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            s.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(s.Wu, {
              children: [
               (0, d.jsx)(t.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(t.fz, { children: [(0, d.jsx)(g, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (u.length > 0 || o.length > 0) && (0, d.jsx)(t.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               u.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(t.dk, {
                  links: u
                   .filter((e) => !!r.get(e.name))
                   .map((e) => {
                    const n = r.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(i.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: a }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.DZ, { level: n + 2, children: [l, ' in ', e] }), (0, d.jsx)(t.dk, { links: a.map((e) => ({ children: e.description, icon: (0, d.jsx)(i.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    q = ({ component: e, headingLevel: n }) => {
     const a = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      l = a?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(t.Xy, { children: [l ? (0, d.jsxs)(t.Er, { children: ['Vul de ', (0, d.jsx)(t.N_, { href: l, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(t.Er, { children: [(0, d.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: a }) => {
     const l = e && h.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: l && (0, d.jsx)(u.D, { state: l }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: a })] });
    },
    x = ({ component: e }) => {
     const n = (e && p[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(t.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, a) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(t.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, a < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  76097(e, n, a) {
   'use strict';
   a.d(n, { bo: () => l, KF: () => m, mJ: () => p, VZ: () => T, cR: () => j, Pv: () => v, qZ: () => s, kD: () => x, B2: () => c, Pc: () => r, f4: () => o, GT: () => k, fX: () => i, eQ: () => b, B_: () => q, o_: () => f });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    l = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    r = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function g(e) {
    return Array.from(new Set(e));
   }
   const u = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return u(g(n));
    },
    c = (e, n) => p(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return u(g(e.tasks.filter(({ name: e, value: a }) => '' !== a && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => u(g(e.projects.flatMap((e) => h(e)))),
    v = (e) => {
     const n = h(e),
      a = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: a }) => '' !== a && e.includes(n))
       .map(({ name: t, id: l, value: i }) => {
        const s = /^(.+) URL/.exec(t)[1],
         o = 'Storybook' === s ? `${a} (${n}) in Storybook van ${e.title}` : `${a} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: t, id: l, value: i, description: o };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    f = (e) => e.join('.'),
    q = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((a) => ('object' == typeof e[a] && null !== e[a] ? x(e[a], [...n, a]) : []));
   }
   function k(e) {
    const n = new Map();
    function a(e) {
     return (n.has(e) || n.set(e, f(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || a(e).localeCompare(a(n)));
   }
   const j = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    T = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  82839(e, n, a) {
   var t = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function l(e) {
    if (!a.o(t, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = t[e],
     l = n[0];
    return a.e(n[1]).then(() => a(l));
   }
   ((l.keys = () => Object.keys(t)), (l.id = 82839), (e.exports = l));
  },
 },
]);
