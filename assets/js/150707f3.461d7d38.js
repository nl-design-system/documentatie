(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [31116],
 {
  1292(e, n, t) {
   'use strict';
   t.d(n, { r: () => m });
   var a = t(29181),
    s = t(74172),
    i = t(15089),
    l = t(28377),
    o = t(33648),
    r = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(s.A, {}), github: (0, d.jsx)(i.A, {}), npm: (0, d.jsx)(l.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    m = ({ brand: e }) => (0, d.jsx)(a.In, { children: c[e] || (0, d.jsx)(r.A, {}) });
  },
  12013(e, n, t) {
   'use strict';
   t.d(n, { o: () => c });
   var a = t(18439),
    s = t(46447),
    i = t(86070);
   const l = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: a, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return t + a + s;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    r = (e) => ({ img: ({ src: n, ...t }) => (0, i.jsx)('img', { ...t, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: s = '', components: l = {} }) => (0, i.jsx)(a.x, { components: { ...d(n, t), ...r(s), ...l }, children: e });
  },
  26095(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => b, component: () => T, contentTitle: () => x, default: () => w, description: () => _, frontMatter: () => j, issueNumber: () => A, metadata: () => a, title: () => k, toc: () => D }));
   const a = JSON.parse('{"id":"componenten/heading-1/index","title":"Heading 1","description":"Hoofdkop van een pagina.","source":"@site/docs/componenten/heading-1/index.mdx","sourceDirName":"componenten/heading-1","slug":"/heading-1","permalink":"/heading-1","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-1/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 1","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 1","pagination_label":"Heading 1","description":"Hoofdkop van een pagina.","slug":"/heading-1","keywords":["caption","content","h1","heading","heading level","headline","kop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading","permalink":"/heading"},"next":{"title":"Heading 2","permalink":"/heading-2"}}');
   var s,
    i,
    l,
    o,
    r,
    d,
    c,
    m = t(86070),
    h = t(18439),
    v = t(45189),
    p = t(30758);
   function g() {
    return (
     (g = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
         }
         return e;
        }),
     g.apply(null, arguments)
    );
   }
   const u = ({ title: e, titleId: n, ...t }) => p.createElement('svg', g({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een relatief grote tekst in bold, de hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': n }, t), e ? p.createElement('title', { id: n }, e) : null, s || (s = p.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = p.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), l || (l = p.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 195v150' })), o || (o = p.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), r || (r = p.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), d || (d = p.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), c || (c = p.createElement('path', { fill: '#0A2750', d: 'M327.12 219.44v5.16l.08 5.08h1.32q3.44 0 5.4-2.8 2-2.84 2-8.04 0-5.28-2-8.04-1.96-2.76-5.36-2.76h-1.36l-.08 5v6.4m-9.8-11.56v-2.16h11.88q4.28 0 7.32 1.6 3.04 1.56 4.68 4.48t1.64 7q0 4.16-1.76 7.12t-5 4.52q-3.2 1.56-7.6 1.56h-11.16v-2.16l3-.32q.08-2.44.08-4.96v-11.4q0-2.52-.08-4.96zM345.403 232v-1.88l2.16-.48q.04-1.44.04-3.12v-4.84q0-1.64-.04-2.72 0-1.12-.08-2.32l-2.48-.36v-1.56l8.4-2.68.68.44-.12 5.8v8.28q0 1.68.04 3.16l2 .4V232zm5.32-22.92q-1.4 0-2.4-.88a2.97 2.97 0 0 1-1-2.28q0-1.4 1-2.28 1-.92 2.4-.92t2.4.92q1 .88 1 2.28 0 1.36-1 2.28-1 .88-2.4.88m14.856 23.52q-2.679 0-4.2-1.28-1.52-1.32-1.52-4.28v-1.92q.04-.92.04-2.08v-7.64h-2.6v-2.36l2.96-.4 2-5.6h4.08l-.08 5.64h4.2v2.72h-4.2v11.2q0 1.4.56 2.08.6.64 1.48.64 1.041 0 2.16-.88l1 .96a5.8 5.8 0 0 1-2.24 2.36q-1.4.84-3.64.84m15.371-.6v-1.88l2.16-.48q.04-1.44.04-3.12v-4.84q0-1.64-.04-2.72 0-1.12-.08-2.32l-2.48-.36v-1.56l8.4-2.68.68.44-.12 5.8v8.28q0 1.68.04 3.16l2 .4V232zm5.32-22.92q-1.4 0-2.4-.88a2.97 2.97 0 0 1-1-2.28q0-1.4 1-2.28 1-.92 2.4-.92t2.4.92q1 .88 1 2.28 0 1.36-1 2.28-1 .88-2.4.88m14.296 23.52q-3.8 0-6.96-1.84l.12-4.88h3.2l.68 3.96q.72.28 1.44.44.72.12 1.56.12 1.72 0 2.64-.56.92-.6.92-1.8 0-.92-.68-1.6t-2.68-1.24l-2.16-.64q-2.319-.68-3.6-2.2-1.24-1.52-1.24-3.76 0-2.76 2.16-4.64 2.16-1.92 6.2-1.92 1.761 0 3.24.44a15.3 15.3 0 0 1 3.08 1.2l-.28 4.36h-3.2l-.8-3.44q-.84-.32-2.2-.32t-2.2.56q-.8.56-.8 1.68 0 .8.64 1.44.64.6 2.72 1.24l1.96.56q2.841.84 4.08 2.4 1.24 1.56 1.24 3.8 0 3.16-2.44 4.92-2.4 1.72-6.64 1.72m29.638-18.48q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.92 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.36-1.2 4.92-1.2 2.64 0 4.48 1.12a7.26 7.26 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.5 8.5 0 0 0 2.04-1.56l1.4 1.28q-1.24 2.36-3.36 3.52t-5.04 1.16m20.779-18.48q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.919 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.361-1.2 4.92-1.2 2.64 0 4.48 1.12a7.25 7.25 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.4 8.4 0 0 0 2.04-1.56l1.4 1.28q-1.239 2.36-3.36 3.52t-5.04 1.16m10.86-.6v-1.88l2.16-.48q.04-1.44.04-3.12v-5.24q0-1.64-.04-2.52 0-.92-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88q1.56-1.84 3.08-2.56a7.5 7.5 0 0 1 3.32-.76q2.6 0 4.16 1.72 1.6 1.72 1.6 5.16v7.68q0 1.64.04 3.12l2 .4V232h-10.56v-1.88l2.08-.44q.04-1.48.04-3.12v-7.16q0-1.92-.52-2.68-.52-.8-1.68-.8-1.56 0-3.44 1.44v9.2q0 1.68.04 3.16l1.88.4V232zM329.28 264.44v-1.76h7.56v1.76l-2.32.44-6.6 17.2h-3.04l-7.2-17.24-1.96-.4v-1.76h11.36v1.76l-2.52.52 3.76 10.24 3.48-10.28zm18.04 18.16q-3.12 0-5.4-1.28a9.07 9.07 0 0 1-3.52-3.64q-1.24-2.36-1.24-5.44t1.32-5.36a9.63 9.63 0 0 1 3.68-3.56q2.32-1.28 5.16-1.28t5.12 1.24q2.32 1.24 3.68 3.56 1.36 2.28 1.36 5.4t-1.24 5.44a9.07 9.07 0 0 1-3.52 3.64q-2.28 1.28-5.4 1.28m0-2.08q1.68 0 2.52-1.96t.84-6.2q0-4.28-.84-6.24t-2.52-1.96q-1.72 0-2.56 1.96t-.84 6.24q0 4.24.84 6.2t2.56 1.96m22.891 2.08q-3.12 0-5.4-1.28a9.06 9.06 0 0 1-3.52-3.64q-1.24-2.36-1.24-5.44t1.32-5.36a9.6 9.6 0 0 1 3.68-3.56q2.319-1.28 5.16-1.28 2.84 0 5.12 1.24 2.32 1.24 3.68 3.56 1.36 2.28 1.36 5.4t-1.24 5.44a9.07 9.07 0 0 1-3.52 3.64q-2.28 1.28-5.4 1.28m0-2.08q1.68 0 2.52-1.96t.84-6.2q0-4.28-.84-6.24t-2.52-1.96q-1.72 0-2.56 1.96t-.84 6.24q0 4.24.84 6.2t2.56 1.96m12.377 1.48v-1.88l2.2-.44q.04-1.48.04-3.16v-5.28q0-1.12-.04-1.84 0-.72-.04-1.32 0-.64-.04-1.44l-2.44-.36v-1.56l7.88-2.68.72.44.36 4.72q.84-2.56 2.36-3.84 1.52-1.32 3-1.32 1.32 0 2.28.76.96.72 1.2 2.2-.04 1.56-.84 2.44-.8.84-2 .84-1.68 0-3.08-1.88l-.24-.32q-.88.84-1.64 2.12a10 10 0 0 0-1.04 2.68v5.56q0 1.6.04 3l3.16.68V282zm17.697.04v-1.88l2.12-.44q.04-1.44.04-3.12v-19.84l-2.48-.32v-1.68l8.28-1.8.64.4-.16 5.6v5.64q2.52-2.56 5.8-2.56 2.2 0 3.96 1.16 1.76 1.12 2.8 3.4 1.08 2.24 1.08 5.56 0 3.24-1.2 5.6-1.2 2.32-3.16 3.6a7.6 7.6 0 0 1-4.2 1.24q-3.28 0-5.28-2.36l-.68 2.32zm11.32-16.52q-.76 0-1.44.32a6.5 6.5 0 0 0-1.32.84v11.44q1.24 1.12 2.72 1.12 1.76 0 2.88-1.72 1.16-1.72 1.16-5.24 0-3.56-1.12-5.16-1.08-1.6-2.88-1.6m23.248-1.4q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96-.801-.96-1.92-.96m.08 18.48q-2.92 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.479-5.64 1.52-2.32 3.881-3.48 2.36-1.2 4.92-1.2 2.64 0 4.48 1.12a7.26 7.26 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.5 8.5 0 0 0 2.04-1.56l1.4 1.28q-1.24 2.36-3.36 3.52t-5.04 1.16m20.779-18.48q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.92 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.36-1.2 4.92-1.2 2.64 0 4.48 1.12a7.26 7.26 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.5 8.5 0 0 0 2.04-1.56l1.4 1.28q-1.24 2.36-3.36 3.52t-5.04 1.16m10.115-.6v-1.88l2.2-.48q.04-1.52.04-3.04.04-1.52.04-3v-16.76l-2.48-.4v-1.68l8.4-1.8.64.4-.16 5.6v17.68l.08 3.04 2.2.44V282zm19.81-9.56q0 3.28 1.16 5 1.16 1.68 3 1.68 1.36 0 2.48-.92v-11.92q-1.08-.84-2.36-.84-1.84 0-3.08 1.72-1.2 1.72-1.2 5.28m7.16 10-.32-2.28q-2.32 2.44-5.64 2.44-2.24 0-4.08-1.16-1.8-1.16-2.84-3.4-1.04-2.28-1.04-5.52 0-3.28 1.24-5.6 1.28-2.36 3.28-3.6 2.04-1.28 4.28-1.28 1.56 0 2.72.56 1.16.52 2.12 1.56v-7.32l-2.8-.4v-1.68l8.44-1.8.64.4-.16 5.6v20.76l1.96.4V282zm30.505-18v-1.76h7.56v1.76l-2.32.44-6.6 17.2h-3.04l-7.2-17.24-1.96-.4v-1.76h11.36v1.76l-2.52.52 3.76 10.24 3.48-10.28zm23.359 18.12q-3.48 0-4.4-2.88-1.28 1.36-2.48 2.16-1.161.76-3.24.76-2.32 0-3.8-1.32-1.44-1.32-1.44-3.8 0-1.44.64-2.6t2.32-2.16 4.76-1.88q.6-.2 1.4-.4t1.64-.4v-1.32q0-2.68-.68-3.64-.64-.96-2.56-.96h-.52q-.24 0-.56.04l-.2 1.76q-.04 1.96-.92 2.84-.84.88-2 .88-2.2 0-2.68-2 .159-2.48 2.52-4.04 2.36-1.56 6.68-1.56 3.84 0 5.48 1.76 1.68 1.76 1.68 5.8v8.96q0 1.16.88 1.16.32 0 .6-.16.279-.2.6-.72l1.08.72q-.72 1.6-1.88 2.32-1.12.68-2.92.68m-9.44-6.12q0 1.48.68 2.2a2.35 2.35 0 0 0 2.64.52q.48-.2 1.52-.92v-6.48a16 16 0 0 0-1.04.36q-.48.16-.84.32-1.36.56-2.16 1.6-.8 1-.8 2.4m15.21 5.56v-1.88l2.16-.48q.04-1.44.04-3.12v-5.24q0-1.64-.04-2.52 0-.92-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88q1.56-1.84 3.08-2.56a7.5 7.5 0 0 1 3.32-.76q2.6 0 4.16 1.72 1.6 1.72 1.6 5.16v7.68q0 1.64.04 3.12l2 .4V282h-10.56v-1.88l2.08-.44q.04-1.48.04-3.12v-7.16q0-1.92-.52-2.68-.52-.8-1.68-.8-1.56 0-3.44 1.44v9.2q0 1.68.04 3.16l1.88.4V282zM327.04 314.12q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.92 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.36-1.2 4.92-1.2 2.64 0 4.48 1.12a7.26 7.26 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.5 8.5 0 0 0 2.04-1.56l1.4 1.28q-1.24 2.36-3.36 3.52t-5.04 1.16m20.779-18.48q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.919 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.361-1.2 4.92-1.2 2.64 0 4.48 1.12a7.25 7.25 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.4 8.4 0 0 0 2.04-1.56l1.4 1.28q-1.239 2.36-3.36 3.52t-5.04 1.16m10.86-.6v-1.88l2.16-.48q.04-1.44.04-3.12v-5.24q0-1.64-.04-2.52 0-.92-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88q1.56-1.84 3.08-2.56a7.5 7.5 0 0 1 3.32-.76q2.6 0 4.16 1.72 1.6 1.72 1.6 5.16v7.68q0 1.64.04 3.12l2 .4V332h-10.56v-1.88l2.08-.44q.04-1.48.04-3.12v-7.16q0-1.92-.52-2.68-.52-.8-1.68-.8-1.56 0-3.44 1.44v9.2q0 1.68.04 3.16l1.88.4V332zm33.203 0v-1.88l2.16-.48q.04-1.44.04-3.12v-19.68l-2.48-.4v-1.68l8.28-1.8.64.4-.16 5.6v6.44q1.6-1.88 3.08-2.6a7.2 7.2 0 0 1 3.28-.76q2.64 0 4.24 1.72t1.6 5.16v7.68q0 1.64.04 3.12l2 .4V332h-10.52v-1.88l2.08-.44q.04-1.48.04-3.12v-7.16q0-1.96-.48-2.72-.44-.76-1.68-.76-.8 0-1.72.48t-1.84 1.36v8.8q0 1.68.04 3.16l1.88.4V332zm34.607-17.88q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.919 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.361-1.2 4.92-1.2 2.64 0 4.48 1.12a7.25 7.25 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.4 8.4 0 0 0 2.04-1.56l1.4 1.28q-1.239 2.36-3.36 3.52t-5.04 1.16m26.223-.04q-3.48 0-4.4-2.88-1.28 1.36-2.48 2.16-1.161.76-3.24.76-2.32 0-3.8-1.32-1.44-1.32-1.44-3.8 0-1.44.64-2.6t2.32-2.16 4.76-1.88q.6-.2 1.4-.4t1.64-.4v-1.32q0-2.68-.68-3.64-.64-.96-2.56-.96h-.52q-.24 0-.56.04l-.2 1.76q-.04 1.96-.92 2.84-.84.88-2 .88-2.2 0-2.68-2 .159-2.48 2.52-4.04 2.36-1.56 6.68-1.56 3.84 0 5.48 1.76 1.68 1.76 1.68 5.8v8.96q0 1.16.88 1.16.32 0 .6-.16.279-.2.6-.72l1.08.72q-.72 1.6-1.88 2.32-1.12.68-2.92.68m-9.44-6.12q0 1.48.68 2.2a2.35 2.35 0 0 0 2.64.52q.48-.2 1.52-.92v-6.48a16 16 0 0 0-1.04.36q-.48.16-.84.32-1.36.56-2.16 1.6-.8 1-.8 2.4m22.01-4q0 3.28 1.16 5 1.16 1.68 3 1.68 1.36 0 2.48-.92v-11.92q-1.08-.84-2.36-.84-1.84 0-3.08 1.72-1.2 1.72-1.2 5.28m7.16 10-.32-2.28q-2.32 2.44-5.64 2.44-2.241 0-4.08-1.16-1.8-1.16-2.84-3.4-1.04-2.28-1.04-5.52 0-3.28 1.24-5.6 1.28-2.36 3.28-3.6 2.04-1.28 4.28-1.28 1.56 0 2.72.56 1.16.52 2.12 1.56v-7.32l-2.8-.4v-1.68l8.44-1.8.64.4-.16 5.6v20.76l1.96.4V332zm9.87-.44v-1.88l2.16-.48q.04-1.44.04-3.12v-4.84q0-1.64-.04-2.72 0-1.12-.08-2.32l-2.48-.36v-1.56l8.4-2.68.68.44-.12 5.8v8.28q0 1.68.04 3.16l2 .4V332zm5.32-22.92q-1.401 0-2.4-.88a2.97 2.97 0 0 1-1-2.28q0-1.4 1-2.28.999-.92 2.4-.92t2.4.92q1 .88 1 2.28 0 1.36-1 2.28-1 .88-2.4.88m7.256 22.92v-1.88l2.16-.48q.04-1.44.04-3.12v-5.24q0-1.64-.04-2.52 0-.92-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88q1.56-1.84 3.08-2.56a7.5 7.5 0 0 1 3.32-.76q2.6 0 4.16 1.72 1.6 1.72 1.6 5.16v7.68q0 1.64.04 3.12l2 .4V332h-10.56v-1.88l2.08-.44q.04-1.48.04-3.12v-7.16q0-1.92-.52-2.68-.52-.8-1.68-.8-1.56 0-3.44 1.44v9.2q0 1.68.04 3.16l1.88.4V332zm33.328-8.96q1.4 0 2.08-1.24.72-1.24.72-3.36t-.72-3.28q-.68-1.2-2-1.2-1.359 0-2.04 1.2-.68 1.2-.68 3.32t.64 3.36q.64 1.2 2 1.2m-5.32 12.28q0 1.76 1.32 2.56 1.32.84 4.04.84 3 0 4.52-.88t1.52-2.2q0-.88-.64-1.6-.639-.68-2.28-.68h-4.2q-2.2 0-3.64-.36a5.4 5.4 0 0 0-.48 1.08q-.16.52-.16 1.24m5.36-10.4q-2.08 0-3.64-.48-.48.84-.48 1.84 0 .68.52 1.12.52.4 1.8.4h4.68q3.04 0 4.84.76 1.8.72 2.56 2.04.8 1.28.8 3.04 0 2-1.32 3.68-1.32 1.72-3.96 2.72-2.6 1.04-6.44 1.04-3.32 0-5.2-.68-1.88-.64-2.64-1.72t-.76-2.28q0-2.56 3.32-4.12-1.239-.52-1.8-1.36a3.43 3.43 0 0 1-.52-1.84q0-1.4.8-2.64.84-1.28 2.32-2.56-1.64-.84-2.44-2.24t-.8-3.12q0-2.8 2.04-4.64 2.08-1.84 6.32-1.84 2.16 0 3.76.48t2.6 1.36l4.48-1.92.64.4v3.08h-3.8q.72 1.32.72 3.08 0 2.68-2.08 4.56-2.04 1.84-6.32 1.84' })));
   var q = t(72401),
    f = t(37131);
   const j = { title: 'Heading 1', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 1', pagination_label: 'Heading 1', description: 'Hoofdkop van een pagina.', slug: '/heading-1', keywords: ['caption', 'content', 'h1', 'heading', 'heading level', 'headline', 'kop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    x = void 0,
    b = {},
    k = 'Heading 1',
    _ = 'Hoofdkop van een pagina.',
    A = 257,
    T = v.find((e) => e.number === A),
    D = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function N(e) {
    const n = { h2: 'h2', ...(0, h.R)(), ...e.components },
     { ComponentAnatomy: t } = n;
    return (
     t ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('ComponentAnatomy', !0),
     (0, m.jsxs)(m.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, m.jsx)(f.Fc, { component: T, headingLevel: 1, description: _ }), '\n', (0, m.jsx)(q.e, { component: T }), '\n', (0, m.jsx)(n.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, m.jsx)(t, { component: T, illustration: u }), '\n', (0, m.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, m.jsx)(f.VK, { component: T, headingLevel: 3 }), '\n', (0, m.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, m.jsx)(f.mu, { component: T, headingLevel: 3 }), '\n', (0, m.jsx)(f.K_, { component: T }), '\n', (0, m.jsx)(f.$9, { component: T, headingLevel: 2 })] })
    );
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, h.R)(), ...e.components };
    return n ? (0, m.jsx)(n, { ...e, children: (0, m.jsx)(N, { ...e }) }) : N(e);
   }
  },
  33062(e, n, t) {
   'use strict';
   t.d(n, { bo: () => s, KF: () => h, mJ: () => g, VZ: () => A, cR: () => _, Pv: () => u, qZ: () => l, kD: () => x, B2: () => v, Pc: () => r, f4: () => o, GT: () => b, fX: () => i, eQ: () => j, B_: () => f, o_: () => q, Rc: () => k });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    l = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    r = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    h = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return m(c(n));
    },
    v = (e, n) => g(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    g = (e) => m(c(e.projects.flatMap((e) => p(e)))),
    u = (e) => {
     const n = p(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const a = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: a, id: s, value: i }) => {
        const l = /^(.+) URL/.exec(a)[1],
         o = 'Storybook' === l ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${l}`;
        return { brand: l.toLowerCase(), name: a, id: s, value: i, description: o };
       });
      return { frameworkName: n, tasks: a };
     });
    },
    q = (e) => e.join('.'),
    f = (e) => '--' + e.join('-'),
    j = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? x(e[t], [...n, t]) : []));
   }
   function b(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, q(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function k(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const _ = () => {
     const e = a.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = a.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  37131(e, n, t) {
   'use strict';
   t.d(n, { VK: () => u, $9: () => f, mu: () => q, Fc: () => j, K_: () => x });
   var a = t(29181),
    s = t(13526),
    i = t(1292),
    l = t(90495),
    o = t(54565);
   function r(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(r, {
     children: () => {
      const a = t(83294).V6;
      return (0, d.jsx)(a, {
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
   var m = t(67970),
    h = t(72642),
    v = t(58876),
    p = t(33062);
   const g = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    u = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      i = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(a.If, { sections: i.map((t) => ({ className: (0, s.A)('definition-of-done', t && `definition-of-done--${(0, p.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(v._, { children: t.tasks.map(({ checked: e, name: t, id: a }) => (0, d.jsx)(v.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(a) }, a)) }), (0, d.jsx)(a.fz, { children: (0, d.jsxs)(a.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    q = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(l.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            a = n.progress.max - n.progress.value;
           return t === a ? e.title.localeCompare(n.title) : t - a;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            s = t?.value,
            o = (0, p.Pv)(e),
            r = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            m = e.tasks.filter(({ name: e, value: n }) => r.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            l.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(l.Wu, {
              children: [
               (0, d.jsx)(a.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(a.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(a.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (m.length > 0 || o.length > 0) && (0, d.jsx)(a.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               m.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(a.dk, {
                  links: m
                   .filter((e) => !!r.get(e.name))
                   .map((e) => {
                    const n = r.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(i.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(a.DZ, { level: n + 2, children: [s, ' in ', e] }), (0, d.jsx)(a.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(i.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(a.fz, { children: 'Er zijn nog geen implementaties' });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(a.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(a.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(a.Xy, { children: [s ? (0, d.jsxs)(a.Er, { children: ['Vul de ', (0, d.jsx)(a.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(a.Er, { children: [(0, d.jsxs)(a.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(a.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(a.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(a.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    j = ({ component: e, headingLevel: n, description: t }) => {
     const s = e && p.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(h.p, { level: n, suffix: s && (0, d.jsx)(m.D, { state: s }), children: e.title }), (0, d.jsx)(a.fz, { lead: !0, children: t })] });
    },
    x = ({ component: e }) => {
     const n = (e && g[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(a.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(a.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  54565(e, n, t) {
   'use strict';
   t.d(n, { c: () => s });
   var a = t(30758);
   function s() {
    const [e, n] = (0, a.useState)();
    return ((0, a.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, t) {
   'use strict';
   t.d(n, { D: () => o });
   var a = t(46447),
    s = t(13526),
    i = t(33062),
    l = t(86070);
   const o = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, l.jsx)(a.KE, { className: (0, s.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72401(e, n, t) {
   'use strict';
   t.d(n, { e: () => o });
   var a = t(12013),
    s = t(30758),
    i = t(33062),
    l = t(86070);
   const o = ({ component: e }) => {
    const { title: n } = e,
     o = (0, i.fX)(n),
     r = s.lazy(() => t(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, l.jsx)(s.Suspense, { fallback: null, children: (0, l.jsx)(a.o, { omitH1: !0, headingLevel: 1, children: (0, l.jsx)(r, {}) }) });
   };
  },
  72642(e, n, t) {
   'use strict';
   t.d(n, { p: () => i });
   var a = t(13526),
    s = t(86070);
   const i = ({ children: e, className: n, level: t = 1, suffix: i, ...l }) => (0, s.jsxs)('hgroup', { className: (0, a.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...l, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  82839(e, n, t) {
   var a = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function s(e) {
    if (!t.o(a, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = a[e],
     s = n[0];
    return t.e(n[1]).then(() => t(s));
   }
   ((s.keys = () => Object.keys(a)), (s.id = 82839), (e.exports = s));
  },
  90495(e, n, t) {
   'use strict';
   t.d(n, { AC: () => d, Fu: () => l, Wu: () => o, Zp: () => r });
   var a = t(46447),
    s = t(13526),
    i = t(86070);
   const l = ({ background: e, children: n, className: t, ...a }) => (0, i.jsx)('div', { className: (0, s.A)('card__illustration', e && `card__illustration--${e}`, t), ...a, children: n }),
    o = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    r = ({ href: e, appearance: n, className: t, component: l = 'div', background: o, children: r }) => {
     const d = (e) => ('article' === l ? (0, i.jsx)('article', { ...e }) : 'section' === l ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      c = (0, i.jsx)(d, { className: (0, s.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: r });
     return e ? (0, i.jsx)(a.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, i.jsx)('div', { className: (0, s.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
