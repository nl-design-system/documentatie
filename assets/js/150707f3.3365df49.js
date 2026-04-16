(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [31116],
 {
  1292(e, n, a) {
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
  12013(e, n, a) {
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
  26095(e, n, a) {
   'use strict';
   (a.r(n), a.d(n, { assets: () => k, component: () => F, contentTitle: () => x, default: () => N, description: () => T, frontMatter: () => q, issueNumber: () => D, metadata: () => t, title: () => j, toc: () => H }));
   const t = JSON.parse('{"id":"componenten/heading-1/index","title":"Heading 1","description":"Hoofdkop van een pagina.","source":"@site/docs/componenten/heading-1/index.mdx","sourceDirName":"componenten/heading-1","slug":"/heading-1","permalink":"/heading-1","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-1/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 1","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 1","pagination_label":"Heading 1","description":"Hoofdkop van een pagina.","slug":"/heading-1","keywords":["caption","content","h1","heading","heading level","headline","kop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading","permalink":"/heading"},"next":{"title":"Heading 2","permalink":"/heading-2"}}');
   var l,
    i,
    s,
    o,
    r,
    d,
    g,
    u = a(86070),
    m = a(18439),
    c = a(64792),
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
   const v = ({ title: e, titleId: n, ...a }) => h.createElement('svg', p({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een relatief grote tekst in bold, de hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': n }, a), e ? h.createElement('title', { id: n }, e) : null, l || (l = h.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = h.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), s || (s = h.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 195v150' })), o || (o = h.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), r || (r = h.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), d || (d = h.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), g || (g = h.createElement('path', { fill: '#0A2750', d: 'M327.12 219.44v5.16l.08 5.08h1.32q3.44 0 5.4-2.8 2-2.84 2-8.04 0-5.28-2-8.04-1.96-2.76-5.36-2.76h-1.36l-.08 5v6.4m-9.8-11.56v-2.16h11.88q4.28 0 7.32 1.6 3.04 1.56 4.68 4.48t1.64 7q0 4.16-1.76 7.12t-5 4.52q-3.2 1.56-7.6 1.56h-11.16v-2.16l3-.32q.08-2.44.08-4.96v-11.4q0-2.52-.08-4.96zM345.403 232v-1.88l2.16-.48q.04-1.44.04-3.12v-4.84q0-1.64-.04-2.72 0-1.12-.08-2.32l-2.48-.36v-1.56l8.4-2.68.68.44-.12 5.8v8.28q0 1.68.04 3.16l2 .4V232zm5.32-22.92q-1.4 0-2.4-.88a2.97 2.97 0 0 1-1-2.28q0-1.4 1-2.28 1-.92 2.4-.92t2.4.92q1 .88 1 2.28 0 1.36-1 2.28-1 .88-2.4.88m14.856 23.52q-2.679 0-4.2-1.28-1.52-1.32-1.52-4.28v-1.92q.04-.92.04-2.08v-7.64h-2.6v-2.36l2.96-.4 2-5.6h4.08l-.08 5.64h4.2v2.72h-4.2v11.2q0 1.4.56 2.08.6.64 1.48.64 1.041 0 2.16-.88l1 .96a5.8 5.8 0 0 1-2.24 2.36q-1.4.84-3.64.84m15.371-.6v-1.88l2.16-.48q.04-1.44.04-3.12v-4.84q0-1.64-.04-2.72 0-1.12-.08-2.32l-2.48-.36v-1.56l8.4-2.68.68.44-.12 5.8v8.28q0 1.68.04 3.16l2 .4V232zm5.32-22.92q-1.4 0-2.4-.88a2.97 2.97 0 0 1-1-2.28q0-1.4 1-2.28 1-.92 2.4-.92t2.4.92q1 .88 1 2.28 0 1.36-1 2.28-1 .88-2.4.88m14.296 23.52q-3.8 0-6.96-1.84l.12-4.88h3.2l.68 3.96q.72.28 1.44.44.72.12 1.56.12 1.72 0 2.64-.56.92-.6.92-1.8 0-.92-.68-1.6t-2.68-1.24l-2.16-.64q-2.319-.68-3.6-2.2-1.24-1.52-1.24-3.76 0-2.76 2.16-4.64 2.16-1.92 6.2-1.92 1.761 0 3.24.44a15.3 15.3 0 0 1 3.08 1.2l-.28 4.36h-3.2l-.8-3.44q-.84-.32-2.2-.32t-2.2.56q-.8.56-.8 1.68 0 .8.64 1.44.64.6 2.72 1.24l1.96.56q2.841.84 4.08 2.4 1.24 1.56 1.24 3.8 0 3.16-2.44 4.92-2.4 1.72-6.64 1.72m29.638-18.48q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.92 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.36-1.2 4.92-1.2 2.64 0 4.48 1.12a7.26 7.26 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.5 8.5 0 0 0 2.04-1.56l1.4 1.28q-1.24 2.36-3.36 3.52t-5.04 1.16m20.779-18.48q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.919 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.361-1.2 4.92-1.2 2.64 0 4.48 1.12a7.25 7.25 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.4 8.4 0 0 0 2.04-1.56l1.4 1.28q-1.239 2.36-3.36 3.52t-5.04 1.16m10.86-.6v-1.88l2.16-.48q.04-1.44.04-3.12v-5.24q0-1.64-.04-2.52 0-.92-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88q1.56-1.84 3.08-2.56a7.5 7.5 0 0 1 3.32-.76q2.6 0 4.16 1.72 1.6 1.72 1.6 5.16v7.68q0 1.64.04 3.12l2 .4V232h-10.56v-1.88l2.08-.44q.04-1.48.04-3.12v-7.16q0-1.92-.52-2.68-.52-.8-1.68-.8-1.56 0-3.44 1.44v9.2q0 1.68.04 3.16l1.88.4V232zM329.28 264.44v-1.76h7.56v1.76l-2.32.44-6.6 17.2h-3.04l-7.2-17.24-1.96-.4v-1.76h11.36v1.76l-2.52.52 3.76 10.24 3.48-10.28zm18.04 18.16q-3.12 0-5.4-1.28a9.07 9.07 0 0 1-3.52-3.64q-1.24-2.36-1.24-5.44t1.32-5.36a9.63 9.63 0 0 1 3.68-3.56q2.32-1.28 5.16-1.28t5.12 1.24q2.32 1.24 3.68 3.56 1.36 2.28 1.36 5.4t-1.24 5.44a9.07 9.07 0 0 1-3.52 3.64q-2.28 1.28-5.4 1.28m0-2.08q1.68 0 2.52-1.96t.84-6.2q0-4.28-.84-6.24t-2.52-1.96q-1.72 0-2.56 1.96t-.84 6.24q0 4.24.84 6.2t2.56 1.96m22.891 2.08q-3.12 0-5.4-1.28a9.06 9.06 0 0 1-3.52-3.64q-1.24-2.36-1.24-5.44t1.32-5.36a9.6 9.6 0 0 1 3.68-3.56q2.319-1.28 5.16-1.28 2.84 0 5.12 1.24 2.32 1.24 3.68 3.56 1.36 2.28 1.36 5.4t-1.24 5.44a9.07 9.07 0 0 1-3.52 3.64q-2.28 1.28-5.4 1.28m0-2.08q1.68 0 2.52-1.96t.84-6.2q0-4.28-.84-6.24t-2.52-1.96q-1.72 0-2.56 1.96t-.84 6.24q0 4.24.84 6.2t2.56 1.96m12.377 1.48v-1.88l2.2-.44q.04-1.48.04-3.16v-5.28q0-1.12-.04-1.84 0-.72-.04-1.32 0-.64-.04-1.44l-2.44-.36v-1.56l7.88-2.68.72.44.36 4.72q.84-2.56 2.36-3.84 1.52-1.32 3-1.32 1.32 0 2.28.76.96.72 1.2 2.2-.04 1.56-.84 2.44-.8.84-2 .84-1.68 0-3.08-1.88l-.24-.32q-.88.84-1.64 2.12a10 10 0 0 0-1.04 2.68v5.56q0 1.6.04 3l3.16.68V282zm17.697.04v-1.88l2.12-.44q.04-1.44.04-3.12v-19.84l-2.48-.32v-1.68l8.28-1.8.64.4-.16 5.6v5.64q2.52-2.56 5.8-2.56 2.2 0 3.96 1.16 1.76 1.12 2.8 3.4 1.08 2.24 1.08 5.56 0 3.24-1.2 5.6-1.2 2.32-3.16 3.6a7.6 7.6 0 0 1-4.2 1.24q-3.28 0-5.28-2.36l-.68 2.32zm11.32-16.52q-.76 0-1.44.32a6.5 6.5 0 0 0-1.32.84v11.44q1.24 1.12 2.72 1.12 1.76 0 2.88-1.72 1.16-1.72 1.16-5.24 0-3.56-1.12-5.16-1.08-1.6-2.88-1.6m23.248-1.4q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96-.801-.96-1.92-.96m.08 18.48q-2.92 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.479-5.64 1.52-2.32 3.881-3.48 2.36-1.2 4.92-1.2 2.64 0 4.48 1.12a7.26 7.26 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.5 8.5 0 0 0 2.04-1.56l1.4 1.28q-1.24 2.36-3.36 3.52t-5.04 1.16m20.779-18.48q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.92 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.36-1.2 4.92-1.2 2.64 0 4.48 1.12a7.26 7.26 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.5 8.5 0 0 0 2.04-1.56l1.4 1.28q-1.24 2.36-3.36 3.52t-5.04 1.16m10.115-.6v-1.88l2.2-.48q.04-1.52.04-3.04.04-1.52.04-3v-16.76l-2.48-.4v-1.68l8.4-1.8.64.4-.16 5.6v17.68l.08 3.04 2.2.44V282zm19.81-9.56q0 3.28 1.16 5 1.16 1.68 3 1.68 1.36 0 2.48-.92v-11.92q-1.08-.84-2.36-.84-1.84 0-3.08 1.72-1.2 1.72-1.2 5.28m7.16 10-.32-2.28q-2.32 2.44-5.64 2.44-2.24 0-4.08-1.16-1.8-1.16-2.84-3.4-1.04-2.28-1.04-5.52 0-3.28 1.24-5.6 1.28-2.36 3.28-3.6 2.04-1.28 4.28-1.28 1.56 0 2.72.56 1.16.52 2.12 1.56v-7.32l-2.8-.4v-1.68l8.44-1.8.64.4-.16 5.6v20.76l1.96.4V282zm30.505-18v-1.76h7.56v1.76l-2.32.44-6.6 17.2h-3.04l-7.2-17.24-1.96-.4v-1.76h11.36v1.76l-2.52.52 3.76 10.24 3.48-10.28zm23.359 18.12q-3.48 0-4.4-2.88-1.28 1.36-2.48 2.16-1.161.76-3.24.76-2.32 0-3.8-1.32-1.44-1.32-1.44-3.8 0-1.44.64-2.6t2.32-2.16 4.76-1.88q.6-.2 1.4-.4t1.64-.4v-1.32q0-2.68-.68-3.64-.64-.96-2.56-.96h-.52q-.24 0-.56.04l-.2 1.76q-.04 1.96-.92 2.84-.84.88-2 .88-2.2 0-2.68-2 .159-2.48 2.52-4.04 2.36-1.56 6.68-1.56 3.84 0 5.48 1.76 1.68 1.76 1.68 5.8v8.96q0 1.16.88 1.16.32 0 .6-.16.279-.2.6-.72l1.08.72q-.72 1.6-1.88 2.32-1.12.68-2.92.68m-9.44-6.12q0 1.48.68 2.2a2.35 2.35 0 0 0 2.64.52q.48-.2 1.52-.92v-6.48a16 16 0 0 0-1.04.36q-.48.16-.84.32-1.36.56-2.16 1.6-.8 1-.8 2.4m15.21 5.56v-1.88l2.16-.48q.04-1.44.04-3.12v-5.24q0-1.64-.04-2.52 0-.92-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88q1.56-1.84 3.08-2.56a7.5 7.5 0 0 1 3.32-.76q2.6 0 4.16 1.72 1.6 1.72 1.6 5.16v7.68q0 1.64.04 3.12l2 .4V282h-10.56v-1.88l2.08-.44q.04-1.48.04-3.12v-7.16q0-1.92-.52-2.68-.52-.8-1.68-.8-1.56 0-3.44 1.44v9.2q0 1.68.04 3.16l1.88.4V282zM327.04 314.12q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.92 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.36-1.2 4.92-1.2 2.64 0 4.48 1.12a7.26 7.26 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.5 8.5 0 0 0 2.04-1.56l1.4 1.28q-1.24 2.36-3.36 3.52t-5.04 1.16m20.779-18.48q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.919 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.361-1.2 4.92-1.2 2.64 0 4.48 1.12a7.25 7.25 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.4 8.4 0 0 0 2.04-1.56l1.4 1.28q-1.239 2.36-3.36 3.52t-5.04 1.16m10.86-.6v-1.88l2.16-.48q.04-1.44.04-3.12v-5.24q0-1.64-.04-2.52 0-.92-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88q1.56-1.84 3.08-2.56a7.5 7.5 0 0 1 3.32-.76q2.6 0 4.16 1.72 1.6 1.72 1.6 5.16v7.68q0 1.64.04 3.12l2 .4V332h-10.56v-1.88l2.08-.44q.04-1.48.04-3.12v-7.16q0-1.92-.52-2.68-.52-.8-1.68-.8-1.56 0-3.44 1.44v9.2q0 1.68.04 3.16l1.88.4V332zm33.203 0v-1.88l2.16-.48q.04-1.44.04-3.12v-19.68l-2.48-.4v-1.68l8.28-1.8.64.4-.16 5.6v6.44q1.6-1.88 3.08-2.6a7.2 7.2 0 0 1 3.28-.76q2.64 0 4.24 1.72t1.6 5.16v7.68q0 1.64.04 3.12l2 .4V332h-10.52v-1.88l2.08-.44q.04-1.48.04-3.12v-7.16q0-1.96-.48-2.72-.44-.76-1.68-.76-.8 0-1.72.48t-1.84 1.36v8.8q0 1.68.04 3.16l1.88.4V332zm34.607-17.88q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.919 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.361-1.2 4.92-1.2 2.64 0 4.48 1.12a7.25 7.25 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.4 8.4 0 0 0 2.04-1.56l1.4 1.28q-1.239 2.36-3.36 3.52t-5.04 1.16m26.223-.04q-3.48 0-4.4-2.88-1.28 1.36-2.48 2.16-1.161.76-3.24.76-2.32 0-3.8-1.32-1.44-1.32-1.44-3.8 0-1.44.64-2.6t2.32-2.16 4.76-1.88q.6-.2 1.4-.4t1.64-.4v-1.32q0-2.68-.68-3.64-.64-.96-2.56-.96h-.52q-.24 0-.56.04l-.2 1.76q-.04 1.96-.92 2.84-.84.88-2 .88-2.2 0-2.68-2 .159-2.48 2.52-4.04 2.36-1.56 6.68-1.56 3.84 0 5.48 1.76 1.68 1.76 1.68 5.8v8.96q0 1.16.88 1.16.32 0 .6-.16.279-.2.6-.72l1.08.72q-.72 1.6-1.88 2.32-1.12.68-2.92.68m-9.44-6.12q0 1.48.68 2.2a2.35 2.35 0 0 0 2.64.52q.48-.2 1.52-.92v-6.48a16 16 0 0 0-1.04.36q-.48.16-.84.32-1.36.56-2.16 1.6-.8 1-.8 2.4m22.01-4q0 3.28 1.16 5 1.16 1.68 3 1.68 1.36 0 2.48-.92v-11.92q-1.08-.84-2.36-.84-1.84 0-3.08 1.72-1.2 1.72-1.2 5.28m7.16 10-.32-2.28q-2.32 2.44-5.64 2.44-2.241 0-4.08-1.16-1.8-1.16-2.84-3.4-1.04-2.28-1.04-5.52 0-3.28 1.24-5.6 1.28-2.36 3.28-3.6 2.04-1.28 4.28-1.28 1.56 0 2.72.56 1.16.52 2.12 1.56v-7.32l-2.8-.4v-1.68l8.44-1.8.64.4-.16 5.6v20.76l1.96.4V332zm9.87-.44v-1.88l2.16-.48q.04-1.44.04-3.12v-4.84q0-1.64-.04-2.72 0-1.12-.08-2.32l-2.48-.36v-1.56l8.4-2.68.68.44-.12 5.8v8.28q0 1.68.04 3.16l2 .4V332zm5.32-22.92q-1.401 0-2.4-.88a2.97 2.97 0 0 1-1-2.28q0-1.4 1-2.28.999-.92 2.4-.92t2.4.92q1 .88 1 2.28 0 1.36-1 2.28-1 .88-2.4.88m7.256 22.92v-1.88l2.16-.48q.04-1.44.04-3.12v-5.24q0-1.64-.04-2.52 0-.92-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88q1.56-1.84 3.08-2.56a7.5 7.5 0 0 1 3.32-.76q2.6 0 4.16 1.72 1.6 1.72 1.6 5.16v7.68q0 1.64.04 3.12l2 .4V332h-10.56v-1.88l2.08-.44q.04-1.48.04-3.12v-7.16q0-1.92-.52-2.68-.52-.8-1.68-.8-1.56 0-3.44 1.44v9.2q0 1.68.04 3.16l1.88.4V332zm33.328-8.96q1.4 0 2.08-1.24.72-1.24.72-3.36t-.72-3.28q-.68-1.2-2-1.2-1.359 0-2.04 1.2-.68 1.2-.68 3.32t.64 3.36q.64 1.2 2 1.2m-5.32 12.28q0 1.76 1.32 2.56 1.32.84 4.04.84 3 0 4.52-.88t1.52-2.2q0-.88-.64-1.6-.639-.68-2.28-.68h-4.2q-2.2 0-3.64-.36a5.4 5.4 0 0 0-.48 1.08q-.16.52-.16 1.24m5.36-10.4q-2.08 0-3.64-.48-.48.84-.48 1.84 0 .68.52 1.12.52.4 1.8.4h4.68q3.04 0 4.84.76 1.8.72 2.56 2.04.8 1.28.8 3.04 0 2-1.32 3.68-1.32 1.72-3.96 2.72-2.6 1.04-6.44 1.04-3.32 0-5.2-.68-1.88-.64-2.64-1.72t-.76-2.28q0-2.56 3.32-4.12-1.239-.52-1.8-1.36a3.43 3.43 0 0 1-.52-1.84q0-1.4.8-2.64.84-1.28 2.32-2.56-1.64-.84-2.44-2.24t-.8-3.12q0-2.8 2.04-4.64 2.08-1.84 6.32-1.84 2.16 0 3.76.48t2.6 1.36l4.48-1.92.64.4v3.08h-3.8q.72 1.32.72 3.08 0 2.68-2.08 4.56-2.04 1.84-6.32 1.84' })));
   var f = a(72401),
    b = a(37131);
   const q = { title: 'Heading 1', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 1', pagination_label: 'Heading 1', description: 'Hoofdkop van een pagina.', slug: '/heading-1', keywords: ['caption', 'content', 'h1', 'heading', 'heading level', 'headline', 'kop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    x = void 0,
    k = {},
    j = 'Heading 1',
    T = 'Hoofdkop van een pagina.',
    D = 257,
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
     (0, u.jsxs)(u.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, u.jsx)(b.Fc, { component: F, headingLevel: 1, description: T }), '\n', (0, u.jsx)(f.e, { component: F }), '\n', (0, u.jsx)(n.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, u.jsx)(a, { component: F, illustration: v }), '\n', (0, u.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, u.jsx)(b.VK, { component: F, headingLevel: 3 }), '\n', (0, u.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, u.jsx)(b.mu, { component: F, headingLevel: 3 }), '\n', (0, u.jsx)(b.K_, { component: F }), '\n', (0, u.jsx)(b.$9, { component: F, headingLevel: 2 })] })
    );
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, m.R)(), ...e.components };
    return n ? (0, u.jsx)(n, { ...e, children: (0, u.jsx)(L, { ...e }) }) : L(e);
   }
  },
  33062(e, n, a) {
   'use strict';
   a.d(n, { bo: () => l, KF: () => m, mJ: () => p, VZ: () => D, cR: () => T, Pv: () => v, qZ: () => s, kD: () => x, B2: () => c, Pc: () => r, f4: () => o, GT: () => k, fX: () => i, eQ: () => q, B_: () => b, o_: () => f, Rc: () => j });
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
    b = (e) => '--' + e.join('-'),
    q = (e, n) => n.reduce((e, n) => e?.[n], e);
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
   function j(e) {
    const n = {};
    for (const a of e) {
     let e = n;
     for (const n of a) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const T = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    D = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  37131(e, n, a) {
   'use strict';
   a.d(n, { VK: () => v, $9: () => b, mu: () => f, Fc: () => q, K_: () => x });
   var t = a(29181),
    l = a(13526),
    i = a(1292),
    s = a(90495),
    o = a(54565);
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
   var u = a(67970),
    m = a(72642),
    c = a(58876),
    h = a(33062);
   const p = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Form Field Error Message","slug":"form-field-error message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}]}'),
    v = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => h.f4.includes(e.id)),
      i = a && h.f4.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(t.If, { sections: i.map((a) => ({ className: (0, l.A)('definition-of-done', a && `definition-of-done--${(0, h.fX)(a.title)}`), headingLevel: n, expanded: !1, label: a ? `${a.title} - ${a.progress.value} van ${a.progress.max}` : '', body: a && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(c._, { children: a.tasks.map(({ checked: e, name: a, id: t }) => (0, d.jsx)(c.Z, { headingLevel: n + 1, checked: e, heading: a, description: (0, h.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${a.url}?filterQuery=${e.title}`, children: [a.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => !h.f4.includes(e.id));
     return e && a.length
      ? (0, d.jsx)(s.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
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
             className: 'implementation-card',
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
    b = ({ component: e, headingLevel: n }) => {
     const a = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      l = a?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(t.Xy, { children: [l ? (0, d.jsxs)(t.Er, { children: ['Vul de ', (0, d.jsx)(t.N_, { href: l, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(t.Er, { children: [(0, d.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    q = ({ component: e, headingLevel: n, description: a }) => {
     const l = e && h.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: l && (0, d.jsx)(u.D, { state: l }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: a })] });
    },
    x = ({ component: e }) => {
     const n = (e && p[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(t.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, a) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(t.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, a < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  54565(e, n, a) {
   'use strict';
   a.d(n, { c: () => l });
   var t = a(30758);
   function l() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, a) {
   'use strict';
   a.d(n, { D: () => o });
   var t = a(46447),
    l = a(13526),
    i = a(33062),
    s = a(86070);
   const o = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, s.jsx)(t.KE, { className: (0, l.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72401(e, n, a) {
   'use strict';
   a.d(n, { e: () => o });
   var t = a(12013),
    l = a(30758),
    i = a(33062),
    s = a(86070);
   const o = ({ component: e }) => {
    const { title: n } = e,
     o = (0, i.fX)(n),
     r = l.lazy(() => a(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, s.jsx)(l.Suspense, { fallback: null, children: (0, s.jsx)(t.o, { omitH1: !0, headingLevel: 1, children: (0, s.jsx)(r, {}) }) });
   };
  },
  72642(e, n, a) {
   'use strict';
   a.d(n, { p: () => i });
   var t = a(13526),
    l = a(86070);
   const i = ({ children: e, className: n, level: a = 1, suffix: i, ...s }) => (0, l.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${a}`, n), ...s, children: [(0, l.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, l.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
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
  90495(e, n, a) {
   'use strict';
   a.d(n, { AC: () => d, Fu: () => s, Wu: () => o, Zp: () => r });
   var t = a(46447),
    l = a(13526),
    i = a(86070);
   const s = ({ background: e, children: n, className: a, ...t }) => (0, i.jsx)('div', { className: (0, l.A)('card__illustration', e && `card__illustration--${e}`, a), ...t, children: n }),
    o = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    r = ({ href: e, appearance: n, className: a, component: s = 'div', background: o, children: r }) => {
     const d = (e) => ('article' === s ? (0, i.jsx)('article', { ...e }) : 'section' === s ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      g = (0, i.jsx)(d, { className: (0, l.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, a), children: r });
     return e ? (0, i.jsx)(t.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: g }) : g;
    },
    d = ({ appearance: e = 'medium', children: n, className: a }) => (0, i.jsx)('div', { className: (0, l.A)('cardgroup', `cardgroup--${e}`, a), children: n });
  },
 },
]);
