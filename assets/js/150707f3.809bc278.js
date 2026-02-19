(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [31116],
 {
  1292(e, t, n) {
   'use strict';
   n.d(t, { r: () => d });
   var r = n(29181),
    c = n(74172),
    s = n(15089),
    o = n(28377),
    i = n(33648),
    a = n(83386),
    l = n(86070);
   const h = { figma: (0, l.jsx)(c.A, {}), github: (0, l.jsx)(s.A, {}), npm: (0, l.jsx)(o.A, {}), storybook: (0, l.jsx)(i.A, {}) },
    d = ({ brand: e }) => (0, l.jsx)(r.In, { children: h[e] || (0, l.jsx)(a.A, {}) });
  },
  12013(e, t, n) {
   'use strict';
   n.d(t, { o: () => h });
   var r = n(18439),
    c = n(46447),
    s = n(86070);
   const o = (e, t) => {
     const n = new URL(t, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === n.protocol) {
      const { pathname: n, search: r, hash: c } = new URL(t, new URL(e, 'http://example.com/'));
      return n + r + c;
     }
     return n.toString();
    },
    i = { 1: {}, 2: { h1: c.fV, h2: c._B, h3: c.f_, h4: c.mM, h5: c.TT }, 3: { h1: c._B, h2: c.f_, h3: c.mM, h4: c.TT, h5: c.TT }, 4: { h1: c.f_, h2: c.mM, h3: c.TT, h4: c.TT, h5: c.TT }, 5: { h1: c.mM, h2: c.TT, h3: c.TT, h4: c.TT, h5: c.TT }, 6: { h1: c.TT, h2: c.TT, h3: c.TT, h4: c.TT, h5: c.TT } },
    a = (e) => ({ img: ({ src: t, ...n }) => (0, s.jsx)('img', { ...n, src: o(e, t), className: 'utrecht-img utrecht-img--fit' }) }),
    l = (e, t) => {
     if (e) {
      const e = { ...i[t - 1] };
      return ((e.h1 = () => null), e);
     }
     return i[t];
    },
    h = ({ children: e, omitH1: t = !1, headingLevel: n = 1, baseUrl: c = '', components: o = {} }) => (0, s.jsx)(r.x, { components: { ...l(t, n), ...a(c), ...o }, children: e });
  },
  26095(e, t, n) {
   'use strict';
   (n.r(t), n.d(t, { assets: () => b, component: () => z, contentTitle: () => q, default: () => A, description: () => w, frontMatter: () => k, issueNumber: () => _, metadata: () => r, title: () => x, toc: () => N }));
   const r = JSON.parse('{"id":"componenten/heading-1/index","title":"Heading 1","description":"Hoofdkop van een pagina.","source":"@site/docs/componenten/heading-1/index.mdx","sourceDirName":"componenten/heading-1","slug":"/heading-1","permalink":"/heading-1","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-1/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 1","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 1","pagination_label":"Heading 1","description":"Hoofdkop van een pagina.","slug":"/heading-1","keywords":["caption","content","h1","heading","heading level","headline","kop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading","permalink":"/heading"},"next":{"title":"Heading 2","permalink":"/heading-2"}}');
   var c,
    s,
    o,
    i,
    a,
    l,
    h,
    d = n(86070),
    u = n(18439),
    m = n(57641),
    j = n(30758);
   function y() {
    return (
     (y = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
         }
         return e;
        }),
     y.apply(null, arguments)
    );
   }
   const g = ({ title: e, titleId: t, ...n }) => j.createElement('svg', y({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een relatief grote tekst in bold, de hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': t }, n), e ? j.createElement('title', { id: t }, e) : null, c || (c = j.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), s || (s = j.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), o || (o = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 195v150' })), i || (i = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), a || (a = j.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), l || (l = j.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), h || (h = j.createElement('path', { fill: '#0A2750', d: 'M327.12 219.44v5.16l.08 5.08h1.32q3.44 0 5.4-2.8 2-2.84 2-8.04 0-5.28-2-8.04-1.96-2.76-5.36-2.76h-1.36l-.08 5v6.4m-9.8-11.56v-2.16h11.88q4.28 0 7.32 1.6 3.04 1.56 4.68 4.48t1.64 7q0 4.16-1.76 7.12t-5 4.52q-3.2 1.56-7.6 1.56h-11.16v-2.16l3-.32q.08-2.44.08-4.96v-11.4q0-2.52-.08-4.96zM345.403 232v-1.88l2.16-.48q.04-1.44.04-3.12v-4.84q0-1.64-.04-2.72 0-1.12-.08-2.32l-2.48-.36v-1.56l8.4-2.68.68.44-.12 5.8v8.28q0 1.68.04 3.16l2 .4V232zm5.32-22.92q-1.4 0-2.4-.88a2.97 2.97 0 0 1-1-2.28q0-1.4 1-2.28 1-.92 2.4-.92t2.4.92q1 .88 1 2.28 0 1.36-1 2.28-1 .88-2.4.88m14.856 23.52q-2.679 0-4.2-1.28-1.52-1.32-1.52-4.28v-1.92q.04-.92.04-2.08v-7.64h-2.6v-2.36l2.96-.4 2-5.6h4.08l-.08 5.64h4.2v2.72h-4.2v11.2q0 1.4.56 2.08.6.64 1.48.64 1.041 0 2.16-.88l1 .96a5.8 5.8 0 0 1-2.24 2.36q-1.4.84-3.64.84m15.371-.6v-1.88l2.16-.48q.04-1.44.04-3.12v-4.84q0-1.64-.04-2.72 0-1.12-.08-2.32l-2.48-.36v-1.56l8.4-2.68.68.44-.12 5.8v8.28q0 1.68.04 3.16l2 .4V232zm5.32-22.92q-1.4 0-2.4-.88a2.97 2.97 0 0 1-1-2.28q0-1.4 1-2.28 1-.92 2.4-.92t2.4.92q1 .88 1 2.28 0 1.36-1 2.28-1 .88-2.4.88m14.296 23.52q-3.8 0-6.96-1.84l.12-4.88h3.2l.68 3.96q.72.28 1.44.44.72.12 1.56.12 1.72 0 2.64-.56.92-.6.92-1.8 0-.92-.68-1.6t-2.68-1.24l-2.16-.64q-2.319-.68-3.6-2.2-1.24-1.52-1.24-3.76 0-2.76 2.16-4.64 2.16-1.92 6.2-1.92 1.761 0 3.24.44a15.3 15.3 0 0 1 3.08 1.2l-.28 4.36h-3.2l-.8-3.44q-.84-.32-2.2-.32t-2.2.56q-.8.56-.8 1.68 0 .8.64 1.44.64.6 2.72 1.24l1.96.56q2.841.84 4.08 2.4 1.24 1.56 1.24 3.8 0 3.16-2.44 4.92-2.4 1.72-6.64 1.72m29.638-18.48q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.92 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.36-1.2 4.92-1.2 2.64 0 4.48 1.12a7.26 7.26 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.5 8.5 0 0 0 2.04-1.56l1.4 1.28q-1.24 2.36-3.36 3.52t-5.04 1.16m20.779-18.48q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.919 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.361-1.2 4.92-1.2 2.64 0 4.48 1.12a7.25 7.25 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.4 8.4 0 0 0 2.04-1.56l1.4 1.28q-1.239 2.36-3.36 3.52t-5.04 1.16m10.86-.6v-1.88l2.16-.48q.04-1.44.04-3.12v-5.24q0-1.64-.04-2.52 0-.92-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88q1.56-1.84 3.08-2.56a7.5 7.5 0 0 1 3.32-.76q2.6 0 4.16 1.72 1.6 1.72 1.6 5.16v7.68q0 1.64.04 3.12l2 .4V232h-10.56v-1.88l2.08-.44q.04-1.48.04-3.12v-7.16q0-1.92-.52-2.68-.52-.8-1.68-.8-1.56 0-3.44 1.44v9.2q0 1.68.04 3.16l1.88.4V232zM329.28 264.44v-1.76h7.56v1.76l-2.32.44-6.6 17.2h-3.04l-7.2-17.24-1.96-.4v-1.76h11.36v1.76l-2.52.52 3.76 10.24 3.48-10.28zm18.04 18.16q-3.12 0-5.4-1.28a9.07 9.07 0 0 1-3.52-3.64q-1.24-2.36-1.24-5.44t1.32-5.36a9.63 9.63 0 0 1 3.68-3.56q2.32-1.28 5.16-1.28t5.12 1.24q2.32 1.24 3.68 3.56 1.36 2.28 1.36 5.4t-1.24 5.44a9.07 9.07 0 0 1-3.52 3.64q-2.28 1.28-5.4 1.28m0-2.08q1.68 0 2.52-1.96t.84-6.2q0-4.28-.84-6.24t-2.52-1.96q-1.72 0-2.56 1.96t-.84 6.24q0 4.24.84 6.2t2.56 1.96m22.891 2.08q-3.12 0-5.4-1.28a9.06 9.06 0 0 1-3.52-3.64q-1.24-2.36-1.24-5.44t1.32-5.36a9.6 9.6 0 0 1 3.68-3.56q2.319-1.28 5.16-1.28 2.84 0 5.12 1.24 2.32 1.24 3.68 3.56 1.36 2.28 1.36 5.4t-1.24 5.44a9.07 9.07 0 0 1-3.52 3.64q-2.28 1.28-5.4 1.28m0-2.08q1.68 0 2.52-1.96t.84-6.2q0-4.28-.84-6.24t-2.52-1.96q-1.72 0-2.56 1.96t-.84 6.24q0 4.24.84 6.2t2.56 1.96m12.377 1.48v-1.88l2.2-.44q.04-1.48.04-3.16v-5.28q0-1.12-.04-1.84 0-.72-.04-1.32 0-.64-.04-1.44l-2.44-.36v-1.56l7.88-2.68.72.44.36 4.72q.84-2.56 2.36-3.84 1.52-1.32 3-1.32 1.32 0 2.28.76.96.72 1.2 2.2-.04 1.56-.84 2.44-.8.84-2 .84-1.68 0-3.08-1.88l-.24-.32q-.88.84-1.64 2.12a10 10 0 0 0-1.04 2.68v5.56q0 1.6.04 3l3.16.68V282zm17.697.04v-1.88l2.12-.44q.04-1.44.04-3.12v-19.84l-2.48-.32v-1.68l8.28-1.8.64.4-.16 5.6v5.64q2.52-2.56 5.8-2.56 2.2 0 3.96 1.16 1.76 1.12 2.8 3.4 1.08 2.24 1.08 5.56 0 3.24-1.2 5.6-1.2 2.32-3.16 3.6a7.6 7.6 0 0 1-4.2 1.24q-3.28 0-5.28-2.36l-.68 2.32zm11.32-16.52q-.76 0-1.44.32a6.5 6.5 0 0 0-1.32.84v11.44q1.24 1.12 2.72 1.12 1.76 0 2.88-1.72 1.16-1.72 1.16-5.24 0-3.56-1.12-5.16-1.08-1.6-2.88-1.6m23.248-1.4q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96-.801-.96-1.92-.96m.08 18.48q-2.92 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.479-5.64 1.52-2.32 3.881-3.48 2.36-1.2 4.92-1.2 2.64 0 4.48 1.12a7.26 7.26 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.5 8.5 0 0 0 2.04-1.56l1.4 1.28q-1.24 2.36-3.36 3.52t-5.04 1.16m20.779-18.48q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.92 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.36-1.2 4.92-1.2 2.64 0 4.48 1.12a7.26 7.26 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.5 8.5 0 0 0 2.04-1.56l1.4 1.28q-1.24 2.36-3.36 3.52t-5.04 1.16m10.115-.6v-1.88l2.2-.48q.04-1.52.04-3.04.04-1.52.04-3v-16.76l-2.48-.4v-1.68l8.4-1.8.64.4-.16 5.6v17.68l.08 3.04 2.2.44V282zm19.81-9.56q0 3.28 1.16 5 1.16 1.68 3 1.68 1.36 0 2.48-.92v-11.92q-1.08-.84-2.36-.84-1.84 0-3.08 1.72-1.2 1.72-1.2 5.28m7.16 10-.32-2.28q-2.32 2.44-5.64 2.44-2.24 0-4.08-1.16-1.8-1.16-2.84-3.4-1.04-2.28-1.04-5.52 0-3.28 1.24-5.6 1.28-2.36 3.28-3.6 2.04-1.28 4.28-1.28 1.56 0 2.72.56 1.16.52 2.12 1.56v-7.32l-2.8-.4v-1.68l8.44-1.8.64.4-.16 5.6v20.76l1.96.4V282zm30.505-18v-1.76h7.56v1.76l-2.32.44-6.6 17.2h-3.04l-7.2-17.24-1.96-.4v-1.76h11.36v1.76l-2.52.52 3.76 10.24 3.48-10.28zm23.359 18.12q-3.48 0-4.4-2.88-1.28 1.36-2.48 2.16-1.161.76-3.24.76-2.32 0-3.8-1.32-1.44-1.32-1.44-3.8 0-1.44.64-2.6t2.32-2.16 4.76-1.88q.6-.2 1.4-.4t1.64-.4v-1.32q0-2.68-.68-3.64-.64-.96-2.56-.96h-.52q-.24 0-.56.04l-.2 1.76q-.04 1.96-.92 2.84-.84.88-2 .88-2.2 0-2.68-2 .159-2.48 2.52-4.04 2.36-1.56 6.68-1.56 3.84 0 5.48 1.76 1.68 1.76 1.68 5.8v8.96q0 1.16.88 1.16.32 0 .6-.16.279-.2.6-.72l1.08.72q-.72 1.6-1.88 2.32-1.12.68-2.92.68m-9.44-6.12q0 1.48.68 2.2a2.35 2.35 0 0 0 2.64.52q.48-.2 1.52-.92v-6.48a16 16 0 0 0-1.04.36q-.48.16-.84.32-1.36.56-2.16 1.6-.8 1-.8 2.4m15.21 5.56v-1.88l2.16-.48q.04-1.44.04-3.12v-5.24q0-1.64-.04-2.52 0-.92-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88q1.56-1.84 3.08-2.56a7.5 7.5 0 0 1 3.32-.76q2.6 0 4.16 1.72 1.6 1.72 1.6 5.16v7.68q0 1.64.04 3.12l2 .4V282h-10.56v-1.88l2.08-.44q.04-1.48.04-3.12v-7.16q0-1.92-.52-2.68-.52-.8-1.68-.8-1.56 0-3.44 1.44v9.2q0 1.68.04 3.16l1.88.4V282zM327.04 314.12q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.92 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.36-1.2 4.92-1.2 2.64 0 4.48 1.12a7.26 7.26 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.5 8.5 0 0 0 2.04-1.56l1.4 1.28q-1.24 2.36-3.36 3.52t-5.04 1.16m20.779-18.48q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.919 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.361-1.2 4.92-1.2 2.64 0 4.48 1.12a7.25 7.25 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.4 8.4 0 0 0 2.04-1.56l1.4 1.28q-1.239 2.36-3.36 3.52t-5.04 1.16m10.86-.6v-1.88l2.16-.48q.04-1.44.04-3.12v-5.24q0-1.64-.04-2.52 0-.92-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88q1.56-1.84 3.08-2.56a7.5 7.5 0 0 1 3.32-.76q2.6 0 4.16 1.72 1.6 1.72 1.6 5.16v7.68q0 1.64.04 3.12l2 .4V332h-10.56v-1.88l2.08-.44q.04-1.48.04-3.12v-7.16q0-1.92-.52-2.68-.52-.8-1.68-.8-1.56 0-3.44 1.44v9.2q0 1.68.04 3.16l1.88.4V332zm33.203 0v-1.88l2.16-.48q.04-1.44.04-3.12v-19.68l-2.48-.4v-1.68l8.28-1.8.64.4-.16 5.6v6.44q1.6-1.88 3.08-2.6a7.2 7.2 0 0 1 3.28-.76q2.64 0 4.24 1.72t1.6 5.16v7.68q0 1.64.04 3.12l2 .4V332h-10.52v-1.88l2.08-.44q.04-1.48.04-3.12v-7.16q0-1.96-.48-2.72-.44-.76-1.68-.76-.8 0-1.72.48t-1.84 1.36v8.8q0 1.68.04 3.16l1.88.4V332zm34.607-17.88q-1.12 0-2.08 1.4-.92 1.36-1.04 5.04h3.4q1.44 0 1.92-.56.52-.6.52-1.96 0-2-.8-2.96t-1.92-.96m.08 18.48q-2.919 0-5.16-1.2-2.24-1.24-3.52-3.52-1.28-2.32-1.28-5.52 0-3.36 1.48-5.64 1.52-2.32 3.88-3.48 2.361-1.2 4.92-1.2 2.64 0 4.48 1.12a7.25 7.25 0 0 1 2.84 3.04q.96 1.88.96 4.32 0 1.16-.24 2.12h-11.56q.2 3.16 1.72 4.68 1.56 1.48 3.64 1.48 1.64 0 2.8-.6a8.4 8.4 0 0 0 2.04-1.56l1.4 1.28q-1.239 2.36-3.36 3.52t-5.04 1.16m26.223-.04q-3.48 0-4.4-2.88-1.28 1.36-2.48 2.16-1.161.76-3.24.76-2.32 0-3.8-1.32-1.44-1.32-1.44-3.8 0-1.44.64-2.6t2.32-2.16 4.76-1.88q.6-.2 1.4-.4t1.64-.4v-1.32q0-2.68-.68-3.64-.64-.96-2.56-.96h-.52q-.24 0-.56.04l-.2 1.76q-.04 1.96-.92 2.84-.84.88-2 .88-2.2 0-2.68-2 .159-2.48 2.52-4.04 2.36-1.56 6.68-1.56 3.84 0 5.48 1.76 1.68 1.76 1.68 5.8v8.96q0 1.16.88 1.16.32 0 .6-.16.279-.2.6-.72l1.08.72q-.72 1.6-1.88 2.32-1.12.68-2.92.68m-9.44-6.12q0 1.48.68 2.2a2.35 2.35 0 0 0 2.64.52q.48-.2 1.52-.92v-6.48a16 16 0 0 0-1.04.36q-.48.16-.84.32-1.36.56-2.16 1.6-.8 1-.8 2.4m22.01-4q0 3.28 1.16 5 1.16 1.68 3 1.68 1.36 0 2.48-.92v-11.92q-1.08-.84-2.36-.84-1.84 0-3.08 1.72-1.2 1.72-1.2 5.28m7.16 10-.32-2.28q-2.32 2.44-5.64 2.44-2.241 0-4.08-1.16-1.8-1.16-2.84-3.4-1.04-2.28-1.04-5.52 0-3.28 1.24-5.6 1.28-2.36 3.28-3.6 2.04-1.28 4.28-1.28 1.56 0 2.72.56 1.16.52 2.12 1.56v-7.32l-2.8-.4v-1.68l8.44-1.8.64.4-.16 5.6v20.76l1.96.4V332zm9.87-.44v-1.88l2.16-.48q.04-1.44.04-3.12v-4.84q0-1.64-.04-2.72 0-1.12-.08-2.32l-2.48-.36v-1.56l8.4-2.68.68.44-.12 5.8v8.28q0 1.68.04 3.16l2 .4V332zm5.32-22.92q-1.401 0-2.4-.88a2.97 2.97 0 0 1-1-2.28q0-1.4 1-2.28.999-.92 2.4-.92t2.4.92q1 .88 1 2.28 0 1.36-1 2.28-1 .88-2.4.88m7.256 22.92v-1.88l2.16-.48q.04-1.44.04-3.12v-5.24q0-1.64-.04-2.52 0-.92-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88q1.56-1.84 3.08-2.56a7.5 7.5 0 0 1 3.32-.76q2.6 0 4.16 1.72 1.6 1.72 1.6 5.16v7.68q0 1.64.04 3.12l2 .4V332h-10.56v-1.88l2.08-.44q.04-1.48.04-3.12v-7.16q0-1.92-.52-2.68-.52-.8-1.68-.8-1.56 0-3.44 1.44v9.2q0 1.68.04 3.16l1.88.4V332zm33.328-8.96q1.4 0 2.08-1.24.72-1.24.72-3.36t-.72-3.28q-.68-1.2-2-1.2-1.359 0-2.04 1.2-.68 1.2-.68 3.32t.64 3.36q.64 1.2 2 1.2m-5.32 12.28q0 1.76 1.32 2.56 1.32.84 4.04.84 3 0 4.52-.88t1.52-2.2q0-.88-.64-1.6-.639-.68-2.28-.68h-4.2q-2.2 0-3.64-.36a5.4 5.4 0 0 0-.48 1.08q-.16.52-.16 1.24m5.36-10.4q-2.08 0-3.64-.48-.48.84-.48 1.84 0 .68.52 1.12.52.4 1.8.4h4.68q3.04 0 4.84.76 1.8.72 2.56 2.04.8 1.28.8 3.04 0 2-1.32 3.68-1.32 1.72-3.96 2.72-2.6 1.04-6.44 1.04-3.32 0-5.2-.68-1.88-.64-2.64-1.72t-.76-2.28q0-2.56 3.32-4.12-1.239-.52-1.8-1.36a3.43 3.43 0 0 1-.52-1.84q0-1.4.8-2.64.84-1.28 2.32-2.56-1.64-.84-2.44-2.24t-.8-3.12q0-2.8 2.04-4.64 2.08-1.84 6.32-1.84 2.16 0 3.76.48t2.6 1.36l4.48-1.92.64.4v3.08h-3.8q.72 1.32.72 3.08 0 2.68-2.08 4.56-2.04 1.84-6.32 1.84' })));
   var p = n(72401),
    v = n(84068),
    f = n(85825);
   const k = { title: 'Heading 1', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 1', pagination_label: 'Heading 1', description: 'Hoofdkop van een pagina.', slug: '/heading-1', keywords: ['caption', 'content', 'h1', 'heading', 'heading level', 'headline', 'kop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    q = void 0,
    b = {},
    x = 'Heading 1',
    w = 'Hoofdkop van een pagina.',
    _ = 257,
    z = m.find((e) => e.number === _),
    N = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function T(e) {
    const t = { h2: 'h2', ...(0, u.R)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, d.jsx)(f.Fc, { component: z, headingLevel: 1, description: w }), '\n', (0, d.jsx)(p.e, { component: z }), '\n', (0, d.jsx)(t.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, d.jsx)(v.H, { component: z, illustration: g }), '\n', (0, d.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, d.jsx)(f.VK, { component: z, headingLevel: 3 }), '\n', (0, d.jsx)(t.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, d.jsx)(f.mu, { component: z, headingLevel: 3 }), '\n', (0, d.jsx)(f.$9, { component: z, headingLevel: 2 })] });
   }
   function A(e = {}) {
    const { wrapper: t } = { ...(0, u.R)(), ...e.components };
    return t ? (0, d.jsx)(t, { ...e, children: (0, d.jsx)(T, { ...e }) }) : T(e);
   }
  },
  33062(e, t, n) {
   'use strict';
   n.d(t, { bo: () => c, KF: () => u, mJ: () => y, VZ: () => w, cR: () => x, Pv: () => g, qZ: () => o, kD: () => k, B2: () => m, Pc: () => a, f4: () => i, GT: () => q, fX: () => s, eQ: () => f, B_: () => v, o_: () => p, Rc: () => b });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    c = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    i = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    l = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function h(e) {
    return Array.from(new Set(e));
   }
   const d = (e) => [...e].sort((e, t) => l.indexOf(e) - l.indexOf(t)),
    u = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => j(e));
     return d(h(t));
    },
    m = (e, t) => y(e).includes(t),
    j = (e) => {
     const t = / URL \(([^)]+)\)/;
     return d(h(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    y = (e) => d(h(e.projects.flatMap((e) => j(e)))),
    g = (e) => {
     const t = j(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const r = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: r, id: c, value: s }) => {
        const o = /^(.+) URL/.exec(r)[1],
         i = 'Storybook' === o ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${o}`;
        return { brand: o.toLowerCase(), name: r, id: c, value: s, description: i };
       });
      return { frameworkName: t, tasks: r };
     });
    },
    p = (e) => e.join('.'),
    v = (e) => '--' + e.join('-'),
    f = (e, t) => t.reduce((e, t) => e?.[t], e);
   function k(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? k(e[n], [...t, n]) : []));
   }
   function q(e) {
    const t = new Map();
    function n(e) {
     return (t.has(e) || t.set(e, p(e)), t.get(e));
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   function b(e) {
    const t = {};
    for (const n of e) {
     let e = t;
     for (const t of n) (e[t] || (e[t] = {}), (e = e[t]));
    }
    return t;
   }
   const x = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    w = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const t = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return t ? t[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  42962(e, t, n) {
   var r = { './utrecht-action-group_46.entry.js': [60267, 60267], './utrecht-backdrop.entry.js': [60696, 38315], './utrecht-body.entry.js': [64690, 42309], './utrecht-breadcrumb-nav.entry.js': [82907, 5288], './utrecht-button-group.entry.js': [59671, 59671], './utrecht-checkbox.entry.js': [73591, 95972], './utrecht-column-layout.entry.js': [23503, 45884], './utrecht-contact-card-template.entry.js': [44854, 22473], './utrecht-custom-checkbox.entry.js': [48643, 71024], './utrecht-data-list-actions.entry.js': [44381, 66762], './utrecht-data-list-item.entry.js': [25359, 47740], './utrecht-data-list-key.entry.js': [50229, 72610], './utrecht-data-list-value.entry.js': [3931, 26312], './utrecht-data-list.entry.js': [78491, 872], './utrecht-digid-button.entry.js': [90762, 68381], './utrecht-digid-logo.entry.js': [28417, 34446], './utrecht-eherkenning-logo.entry.js': [48744, 26363], './utrecht-eidas-logo.entry.js': [55572, 33191], './utrecht-form-field-error-message.entry.js': [22828, 447], './utrecht-form-toggle.entry.js': [61085, 83466], './utrecht-html-content.entry.js': [17035, 17035], './utrecht-icon-afspraak-maken.entry.js': [43596, 21215], './utrecht-icon-afval-container.entry.js': [49894, 27513], './utrecht-icon-afval-containerpas.entry.js': [40188, 17807], './utrecht-icon-afval-kalender.entry.js': [38607, 60988], './utrecht-icon-afval-pmd.entry.js': [28784, 6403], './utrecht-icon-afval-scheiden.entry.js': [19978, 97597], './utrecht-icon-afval.entry.js': [27172, 4791], './utrecht-icon-afvalkalender.entry.js': [72650, 50269], './utrecht-icon-alleen.entry.js': [61905, 84286], './utrecht-icon-arrow.entry.js': [45603, 67984], './utrecht-icon-auto.entry.js': [41395, 63776], './utrecht-icon-begroting.entry.js': [12151, 34532], './utrecht-icon-bestemmingsplan.entry.js': [27231, 49612], './utrecht-icon-betaaldatum.entry.js': [78784, 56403], './utrecht-icon-bewijsstukken.entry.js': [35307, 57688], './utrecht-icon-bijstand.entry.js': [70635, 93016], './utrecht-icon-blad.entry.js': [13459, 35840], './utrecht-icon-bluesky.entry.js': [52867, 75248], './utrecht-icon-bouw-projecten.entry.js': [70396, 48015], './utrecht-icon-bouwproject.entry.js': [39002, 16621], './utrecht-icon-brandgevaar.entry.js': [81357, 3738], './utrecht-icon-brief-betalen.entry.js': [77554, 55173], './utrecht-icon-buurtcentra.entry.js': [20811, 43192], './utrecht-icon-checkmark.entry.js': [29815, 52196], './utrecht-icon-chevron-down.entry.js': [2698, 80317], './utrecht-icon-chevron-left.entry.js': [92299, 14680], './utrecht-icon-chevron-right.entry.js': [80770, 58389], './utrecht-icon-chevron-up.entry.js': [3039, 25420], './utrecht-icon-close.entry.js': [74514, 52133], './utrecht-icon-coffee.entry.js': [432, 78051], './utrecht-icon-college-b-w.entry.js': [6516, 84135], './utrecht-icon-container-bio.entry.js': [43958, 21577], './utrecht-icon-container-glas.entry.js': [55073, 77454], './utrecht-icon-container-groenafval.entry.js': [23791, 46172], './utrecht-icon-container-met-zak.entry.js': [1937, 24318], './utrecht-icon-container-papier.entry.js': [22497, 44878], './utrecht-icon-container-pmd.entry.js': [85865, 8246], './utrecht-icon-container-restafval.entry.js': [45595, 45595], './utrecht-icon-container-textiel.entry.js': [73239, 95620], './utrecht-icon-container.entry.js': [90549, 12930], './utrecht-icon-cross.entry.js': [93866, 71485], './utrecht-icon-dakloos.entry.js': [29073, 51454], './utrecht-icon-dementie.entry.js': [6697, 29078], './utrecht-icon-documenten.entry.js': [57110, 34729], './utrecht-icon-duurzaam.entry.js': [16379, 38760], './utrecht-icon-eenzaamheid.entry.js': [19487, 41868], './utrecht-icon-eikenprocessie.entry.js': [70063, 92444], './utrecht-icon-elektrisch-rijden.entry.js': [10361, 55123], './utrecht-icon-energie-projecten.entry.js': [2126, 79745], './utrecht-icon-energie-vergoeding.entry.js': [55056, 32675], './utrecht-icon-energietransitie.entry.js': [10884, 88503], './utrecht-icon-error.entry.js': [74704, 52323], './utrecht-icon-evenementen.entry.js': [74402, 52021], './utrecht-icon-facebook.entry.js': [46344, 23963], './utrecht-icon-fiets.entry.js': [37707, 60088], './utrecht-icon-filter.entry.js': [43118, 20737], './utrecht-icon-flickr.entry.js': [69811, 92192], './utrecht-icon-geboorte.entry.js': [23417, 45798], './utrecht-icon-gebruiker-centraal.entry.js': [37869, 60250], './utrecht-icon-gebruiker-ingelogd.entry.js': [84866, 62485], './utrecht-icon-gegevenswoordenboek.entry.js': [24949, 47330], './utrecht-icon-geluid.entry.js': [20938, 98557], './utrecht-icon-gemeente-locatie.entry.js': [11253, 11253], './utrecht-icon-gemeenteraad.entry.js': [91214, 68833], './utrecht-icon-gereedschap.entry.js': [8917, 31298], './utrecht-icon-gezicht.entry.js': [64084, 41703], './utrecht-icon-gezin.entry.js': [44743, 67124], './utrecht-icon-glas-afval.entry.js': [82996, 60615], './utrecht-icon-glijbaan.entry.js': [77770, 55389], './utrecht-icon-grafiek.entry.js': [46275, 68656], './utrecht-icon-groen-projecten.entry.js': [65632, 43251], './utrecht-icon-grofvuil-ophalen.entry.js': [60782, 38401], './utrecht-icon-grofvuil.entry.js': [85152, 62771], './utrecht-icon-hamburger-menu.entry.js': [29765, 52146], './utrecht-icon-herdenking.entry.js': [53125, 75506], './utrecht-icon-hondenbelasting.entry.js': [55857, 78238], './utrecht-icon-horeca.entry.js': [92084, 69703], './utrecht-icon-horecavergunning.entry.js': [58139, 80520], './utrecht-icon-huis-en-omgeving.entry.js': [26582, 4201], './utrecht-icon-huis.entry.js': [52111, 74492], './utrecht-icon-huishoudelijk-geweld.entry.js': [25869, 48250], './utrecht-icon-hulp-huishouden.entry.js': [13504, 91123], './utrecht-icon-hulp-vervoer.entry.js': [3711, 26092], './utrecht-icon-hulp-zorg.entry.js': [18392, 96011], './utrecht-icon-hulpmiddelen-gezin.entry.js': [84335, 6716], './utrecht-icon-hulpverlening.entry.js': [54131, 76512], './utrecht-icon-idee.entry.js': [10379, 32760], './utrecht-icon-informatie.entry.js': [42746, 20365], './utrecht-icon-information.entry.js': [15844, 93463], './utrecht-icon-innovatie.entry.js': [92811, 15192], './utrecht-icon-inspraak-inwoners.entry.js': [93913, 16294], './utrecht-icon-instagram.entry.js': [70562, 48181], './utrecht-icon-kalender.entry.js': [51690, 29309], './utrecht-icon-kennis.entry.js': [65596, 43215], './utrecht-icon-kerstbomen.entry.js': [93434, 71053], './utrecht-icon-klachten.entry.js': [94968, 72587], './utrecht-icon-kroon.entry.js': [33277, 55658], './utrecht-icon-laadpaal.entry.js': [20532, 98151], './utrecht-icon-language.entry.js': [45210, 22829], './utrecht-icon-lantaarnpaal-oud.entry.js': [77808, 55427], './utrecht-icon-lantaarnpaal.entry.js': [36653, 59034], './utrecht-icon-leren.entry.js': [93122, 70741], './utrecht-icon-let-op.entry.js': [11791, 34172], './utrecht-icon-linkedin.entry.js': [45518, 23137], './utrecht-icon-list-check.entry.js': [49745, 72126], './utrecht-icon-list-number.entry.js': [58996, 36615], './utrecht-icon-list.entry.js': [16296, 93915], './utrecht-icon-loupe.entry.js': [96281, 18662], './utrecht-icon-mail.entry.js': [90035, 12416], './utrecht-icon-markt.entry.js': [61705, 84086], './utrecht-icon-mastodon.entry.js': [6999, 29380], './utrecht-icon-melding-boom.entry.js': [10094, 87713], './utrecht-icon-melding-klacht.entry.js': [58802, 36421], './utrecht-icon-melding-openbareruimte.entry.js': [96669, 19050], './utrecht-icon-melding-verlichting.entry.js': [85264, 62883], './utrecht-icon-melding.entry.js': [80216, 57835], './utrecht-icon-menselijk.entry.js': [75822, 53441], './utrecht-icon-menu-dot-open.entry.js': [84242, 61861], './utrecht-icon-menu-dot.entry.js': [2109, 24490], './utrecht-icon-meterkast.entry.js': [10643, 10643], './utrecht-icon-milieu-ontheffing.entry.js': [96292, 73911], './utrecht-icon-milieu-zone.entry.js': [96646, 74265], './utrecht-icon-minus-vertical.entry.js': [3537, 25918], './utrecht-icon-minus.entry.js': [41958, 19577], './utrecht-icon-mobiliteit.entry.js': [79036, 56655], './utrecht-icon-natuur.entry.js': [75506, 20268], './utrecht-icon-nieuw-huis.entry.js': [31040, 8659], './utrecht-icon-nieuwsbrief.entry.js': [50157, 72538], './utrecht-icon-nummerbord.entry.js': [84829, 90858], './utrecht-icon-om-het-huis.entry.js': [34810, 12429], './utrecht-icon-omgeving.entry.js': [37214, 14833], './utrecht-icon-omgevingsvisie.entry.js': [225, 22606], './utrecht-icon-omgevingswet.entry.js': [51693, 74074], './utrecht-icon-onderhoud.entry.js': [54354, 31973], './utrecht-icon-ondernemen.entry.js': [15915, 38296], './utrecht-icon-openingstijden.entry.js': [31463, 53844], './utrecht-icon-over-de-stad.entry.js': [7083, 29464], './utrecht-icon-overlijden.entry.js': [39924, 17543], './utrecht-icon-panden.entry.js': [83290, 60909], './utrecht-icon-park.entry.js': [6608, 84227], './utrecht-icon-parkeerkaart.entry.js': [85477, 7858], './utrecht-icon-parkeervergunning.entry.js': [76237, 98618], './utrecht-icon-parken.entry.js': [66515, 88896], './utrecht-icon-parkeren-bedrijven.entry.js': [81956, 59575], './utrecht-icon-parkeren-betaalautomaat.entry.js': [71478, 49097], './utrecht-icon-parkeren-betalen.entry.js': [48884, 26503], './utrecht-icon-parkeren.entry.js': [24032, 1651], './utrecht-icon-participatie-campagne.entry.js': [58012, 35631], './utrecht-icon-participatie-like.entry.js': [10211, 32592], './utrecht-icon-participatie-pitch.entry.js': [50144, 27763], './utrecht-icon-paspoort.entry.js': [95256, 72875], './utrecht-icon-phone.entry.js': [96358, 73977], './utrecht-icon-pinterest.entry.js': [92376, 69995], './utrecht-icon-presentatie.entry.js': [36558, 14177], './utrecht-icon-prijskaartje.entry.js': [45238, 22857], './utrecht-icon-read-aloud.entry.js': [51966, 29585], './utrecht-icon-report.entry.js': [60530, 38149], './utrecht-icon-rijbewijs.entry.js': [89877, 12258], './utrecht-icon-rioolheffing.entry.js': [8110, 85729], './utrecht-icon-rolstoel.entry.js': [14978, 92597], './utrecht-icon-schild-gemeente-utrecht.entry.js': [14036, 91655], './utrecht-icon-search.entry.js': [76904, 54523], './utrecht-icon-shoppen.entry.js': [38337, 60718], './utrecht-icon-sinterklaas.entry.js': [60259, 82640], './utrecht-icon-slechtziende-hoordende.entry.js': [34339, 56720], './utrecht-icon-sport-en-cultuur.entry.js': [97907, 20288], './utrecht-icon-sport-voetbal.entry.js': [63248, 40867], './utrecht-icon-sport.entry.js': [15300, 92919], './utrecht-icon-standaard-projecten.entry.js': [34009, 56390], './utrecht-icon-stookverbod.entry.js': [27350, 4969], './utrecht-icon-strand.entry.js': [29192, 6811], './utrecht-icon-strooien.entry.js': [21175, 43556], './utrecht-icon-subsidie-gezin.entry.js': [35880, 13499], './utrecht-icon-subsidie.entry.js': [34668, 12287], './utrecht-icon-t-shirt.entry.js': [94763, 17144], './utrecht-icon-threads.entry.js': [60555, 82936], './utrecht-icon-thuiswerken.entry.js': [49161, 93923], './utrecht-icon-toeslag.entry.js': [10341, 32722], './utrecht-icon-trein.entry.js': [21068, 98687], './utrecht-icon-trouwen.entry.js': [8686, 86305], './utrecht-icon-twitter.entry.js': [78009, 390], './utrecht-icon-user.entry.js': [49647, 72028], './utrecht-icon-uw-wijk.entry.js': [28514, 6133], './utrecht-icon-vaccinatie.entry.js': [83147, 5528], './utrecht-icon-veilige-wijk.entry.js': [38821, 61202], './utrecht-icon-vergaderen.entry.js': [57799, 80180], './utrecht-icon-vergaderendigitaal.entry.js': [30966, 8585], './utrecht-icon-vergoeding.entry.js': [49686, 27305], './utrecht-icon-verhuizen.entry.js': [20708, 98327], './utrecht-icon-verkeers-projecten.entry.js': [66540, 44159], './utrecht-icon-verkeerslicht.entry.js': [20735, 43116], './utrecht-icon-verkiezingen.entry.js': [98973, 21354], './utrecht-icon-verslaving.entry.js': [19591, 41972], './utrecht-icon-vervoersvoorziening.entry.js': [56848, 34467], './utrecht-icon-virus.entry.js': [1259, 23640], './utrecht-icon-vluchtelingen.entry.js': [81508, 59127], './utrecht-icon-voorzieningen-vervoer.entry.js': [18881, 41262], './utrecht-icon-vrijwilligerswerk.entry.js': [98400, 76019], './utrecht-icon-vuilnisbak.entry.js': [60028, 37647], './utrecht-icon-vuilniszak.entry.js': [31668, 9287], './utrecht-icon-vuurwerk.entry.js': [36149, 58530], './utrecht-icon-wandelstok.entry.js': [38298, 15917], './utrecht-icon-warm.entry.js': [44165, 66546], './utrecht-icon-warning.entry.js': [74190, 51809], './utrecht-icon-werken.entry.js': [29516, 7135], './utrecht-icon-werkzaamheden.entry.js': [48956, 26575], './utrecht-icon-whatsapp.entry.js': [54750, 32369], './utrecht-icon-wijk-denkmee.entry.js': [2947, 25328], './utrecht-icon-wijk-overlast.entry.js': [86790, 64409], './utrecht-icon-wijk-park.entry.js': [61032, 38651], './utrecht-icon-wijk-projecten.entry.js': [59684, 37303], './utrecht-icon-wijk-speelplaats.entry.js': [72554, 50173], './utrecht-icon-wijk-sport.entry.js': [20332, 97951], './utrecht-icon-wijk-zwemmen.entry.js': [60337, 82718], './utrecht-icon-wonen-kosten.entry.js': [48660, 26279], './utrecht-icon-woning-zoeken.entry.js': [54989, 77370], './utrecht-icon-x.entry.js': [34790, 12409], './utrecht-icon-youtube.entry.js': [37315, 59696], './utrecht-icon-zelfstandig-wonen.entry.js': [74501, 96882], './utrecht-icon-zoom-minus.entry.js': [29766, 7385], './utrecht-icon-zoom-plus.entry.js': [82404, 60023], './utrecht-icon-zoomin.entry.js': [49196, 26815], './utrecht-icon-zoomout.entry.js': [77011, 99392], './utrecht-icon-zorg-huis.entry.js': [25926, 3545], './utrecht-icon-zweefpaal.entry.js': [17129, 39510], './utrecht-icon-zwemmen.entry.js': [48217, 70598], './utrecht-logo-button.entry.js': [62178, 39797], './utrecht-map-marker.entry.js': [68805, 91186], './utrecht-multiline-data.entry.js': [9776, 87395], './utrecht-nav-bar.entry.js': [49817, 94579], './utrecht-number-badge.entry.js': [28405, 50786], './utrecht-page-body.entry.js': [16742, 94361], './utrecht-page-footer.entry.js': [16721, 39102], './utrecht-page-layout.entry.js': [64892, 42511], './utrecht-pagination.entry.js': [38129, 38129], './utrecht-preserve-data.entry.js': [19003, 41384], './utrecht-progress-list-item.entry.js': [6968, 84587], './utrecht-progress-list.entry.js': [48298, 25917], './utrecht-progress-sublist-item.entry.js': [91900, 69519], './utrecht-root.entry.js': [246, 77865], './utrecht-sidenav.entry.js': [24476, 2095], './utrecht-surface.entry.js': [27147, 49528], './utrecht-table-body.entry.js': [47681, 70062], './utrecht-table-caption.entry.js': [31551, 53932], './utrecht-table-cell.entry.js': [90793, 13174], './utrecht-table-container.entry.js': [90366, 67985], './utrecht-table-footer.entry.js': [14522, 92141], './utrecht-table-header-cell.entry.js': [73801, 96182], './utrecht-table-header.entry.js': [90924, 68543], './utrecht-table-row.entry.js': [86529, 8910], './utrecht-table.entry.js': [50668, 28287], './utrecht-textarea.entry.js': [50908, 28527], './utrecht-textbox.entry.js': [37820, 15439], './utrecht-top-task-link.entry.js': [90694, 68313], './utrecht-top-task-nav.entry.js': [63361, 85742] };
   function c(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     c = t[0];
    return n.e(t[1]).then(() => n(c));
   }
   ((c.keys = () => Object.keys(r)), (c.id = 42962), (e.exports = c));
  },
  51580(e, t, n) {
   var r = { './button-docs/docs/anatomy/anatomy.md': [46106, 46106], './code-block-docs/docs/anatomy/anatomy.md': [91631, 91631], './code-docs/docs/anatomy/anatomy.md': [69367, 69367], './color-sample-docs/docs/anatomy/anatomy.md': [73940, 73940], './data-badge-docs/docs/anatomy/anatomy.md': [69506, 69506], './heading-1-docs/docs/anatomy/anatomy.md': [28456, 28456], './heading-2-docs/docs/anatomy/anatomy.md': [1572, 1572], './heading-3-docs/docs/anatomy/anatomy.md': [39512, 39512], './heading-4-docs/docs/anatomy/anatomy.md': [89948, 89948], './heading-5-docs/docs/anatomy/anatomy.md': [69896, 69896], './heading-6-docs/docs/anatomy/anatomy.md': [74572, 74572], './heading-docs/docs/anatomy/anatomy.md': [64417, 64417], './link-docs/docs/anatomy/anatomy.md': [33185, 33185], './mark-docs/docs/anatomy/anatomy.md': [91171, 91171], './number-badge-docs/docs/anatomy/anatomy.md': [87231, 87231], './paragraph-docs/docs/anatomy/anatomy.md': [19961, 19961], './skip-link-docs/docs/anatomy/anatomy.md': [63513, 63513] };
   function c(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     c = t[0];
    return n.e(t[1]).then(() => n(c));
   }
   ((c.keys = () => Object.keys(r)), (c.id = 51580), (e.exports = c));
  },
  54565(e, t, n) {
   'use strict';
   n.d(t, { c: () => c });
   var r = n(30758);
   function c() {
    const [e, t] = (0, r.useState)();
    return ((0, r.useEffect)(() => t(!0), []), e);
   }
  },
  67970(e, t, n) {
   'use strict';
   n.d(t, { D: () => i });
   var r = n(46447),
    c = n(13526),
    s = n(33062),
    o = n(86070);
   const i = ({ state: e }) => {
    const t = (0, s.fX)(e);
    return (0, o.jsx)(r.KE, { className: (0, c.A)('estafette-badge', t && `estafette-badge--${t}`), children: e });
   };
  },
  72401(e, t, n) {
   'use strict';
   n.d(t, { e: () => i });
   var r = n(12013),
    c = n(30758),
    s = n(33062),
    o = n(86070);
   const i = ({ component: e }) => {
    const { title: t } = e,
     i = (0, s.fX)(t),
     a = c.lazy(() => n(82839)(`./${i}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, o.jsx)(c.Suspense, { fallback: null, children: (0, o.jsx)(r.o, { omitH1: !0, headingLevel: 1, children: (0, o.jsx)(a, {}) }) });
   };
  },
  72642(e, t, n) {
   'use strict';
   n.d(t, { p: () => s });
   var r = n(13526),
    c = n(86070);
   const s = ({ children: e, className: t, level: n = 1, suffix: s, ...o }) => (0, c.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${n}`, t), ...o, children: [(0, c.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, c.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  82839(e, t, n) {
   var r = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function c(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     c = t[0];
    return n.e(t[1]).then(() => n(c));
   }
   ((c.keys = () => Object.keys(r)), (c.id = 82839), (e.exports = c));
  },
  84068(e, t, n) {
   'use strict';
   n.d(t, { H: () => h });
   var r = n(12013),
    c = n(13526),
    s = n(30758),
    o = n(33062),
    i = n(86070);
   const a = ({ children: e }) => (0, i.jsx)('ol', { className: 'nlds-anatomy-list', children: e }),
    l = ({ children: e }) => (0, i.jsx)('li', { className: 'nlds-anatomy-list__item', children: e }),
    h = ({ component: e, illustration: t }) => {
     const { title: h } = e,
      d = (0, o.fX)(h),
      u = s.lazy(() => n(51580)(`./${d}-docs/docs/anatomy/anatomy.md`).catch(() => ({ default: () => null })));
     return (0, i.jsx)(s.Suspense, { fallback: null, children: (0, i.jsxs)('figure', { className: (0, c.A)('component-anatomy'), children: [t && (0, i.jsx)(t, { height: null, className: (0, c.A)('component-anatomy__illustration') }), t && u && (0, i.jsx)('figcaption', { children: (0, i.jsx)(r.o, { omitH1: !0, headingLevel: 1, components: { ol: ({ children: e }) => (0, i.jsx)(a, { children: e }), li: ({ children: e }) => (0, i.jsx)(l, { children: e }) }, children: (0, i.jsx)(u, {}) }) })] }) });
    };
  },
  85825(e, t, n) {
   'use strict';
   n.d(t, { VK: () => v, $9: () => k, mu: () => f, Fc: () => q });
   var r = n(29181),
    c = n(13526),
    s = n(1292),
    o = n(90495),
    i = n(54565);
   function a(e) {
    return (0, i.c)() ? e.children() : null;
   }
   var l = n(86070);
   const h = ({ checked: e, unchecked: t }) =>
    (0, l.jsx)(a, {
     children: () => {
      const r = n(83294).V6;
      return (0, l.jsx)(r, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--basis-color-accent-1-inverse-bg-default)', key: 'Done', value: e, stroke: '2' },
        { fill: 'var(--basis-color-disabled-bg-default)', key: 'Todo', value: t, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   var d = n(67970),
    u = n(72642),
    m = n(46447),
    j = n(45561);
   const y = ({ children: e }) => (0, l.jsx)('ul', { className: 'task-list', children: e }),
    g = ({ checked: e, children: t, title: n, description: r, headingLevel: s = 3 }) => (0, l.jsxs)('li', { className: (0, c.A)('task-list-item'), children: [(0, l.jsxs)('div', { className: (0, c.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, l.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, l.jsx)(j.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, l.jsxs)('div', { children: [n ? (0, l.jsx)(m.DZ, { appearance: 'utrecht-heading-3', level: s, children: n }) : null, r, t] })] });
   var p = n(33062);
   const v = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => p.f4.includes(e.id)),
      s = n && p.f4.map((e) => n.find((t) => t.id === e)).filter(Boolean);
     return e && (0, l.jsx)(r.If, { sections: s.map((n) => ({ className: (0, c.A)('definition-of-done', n && `definition-of-done--${(0, p.fX)(n.title)}`), headingLevel: t, expanded: !1, label: n ? `${n.title} - ${n.progress.value} van ${n.progress.max}` : '', body: n && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(y, { children: n.tasks.map(({ checked: e, name: n, id: r }) => (0, l.jsx)(g, { headingLevel: t + 1, checked: e, title: n, description: (0, p.qZ)(r) }, r)) }), (0, l.jsx)(r.fz, { children: (0, l.jsxs)(r.N_, { href: `${n.url}?filterQuery=${e.title}`, children: [n.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && n.length
      ? (0, l.jsx)(o.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: n
          .sort((e, t) => {
           const n = e.progress.max - e.progress.value,
            r = t.progress.max - t.progress.value;
           return n === r ? e.title.localeCompare(t.title) : n - r;
          })
          .map((e) => {
           const n = e.tasks.find(({ name: e }) => 'Naam' === e),
            c = n?.value,
            i = (0, p.Pv)(e),
            a = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${c} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${c} voor visuele regressie tests` }],
            ]),
            d = e.tasks.filter(({ name: e, value: t }) => a.has(e) && URL.canParse(t) && 'https:' === new URL(t).protocol);
           return (0, l.jsx)(
            o.Zp,
            {
             className: 'implementation-card',
             children: (0, l.jsxs)(o.Wu, {
              children: [
               (0, l.jsx)(r.DZ, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, l.jsxs)(r.fz, { children: [(0, l.jsx)(h, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, l.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (d.length > 0 || i.length > 0) && (0, l.jsx)(r.DZ, { level: t + 1, children: 'Snel aan de slag' }),
               d.length > 0 &&
                (0, l.jsx)(l.Fragment, {
                 children: (0, l.jsx)(r.dk, {
                  links: d
                   .filter((e) => !!a.get(e.name))
                   .map((e) => {
                    const t = a.get(e.name);
                    return { children: t.desciption, icon: (0, l.jsx)(s.r, { brand: t.brand }), href: e.value };
                   }),
                 }),
                }),
               i.length > 0 && (0, l.jsx)(l.Fragment, { children: i.map(({ frameworkName: e, tasks: n }) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(r.DZ, { level: t + 2, children: [c, ' in ', e] }), (0, l.jsx)(r.dk, { links: n.map((e) => ({ children: e.description, icon: (0, l.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, l.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    k = ({ component: e, headingLevel: t }) => {
     const n = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      c = n?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(r.DZ, { level: t, children: 'Help om deze component te verbeteren' }), (0, l.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, l.jsxs)(r.Xy, { children: [c ? (0, l.jsxs)(r.Er, { children: ['Vul de ', (0, l.jsx)(r.N_, { href: c, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, l.jsxs)(r.Er, { children: [(0, l.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, l.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, l.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, l.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    q = ({ component: e, headingLevel: t, description: n }) => {
     const c = e && p.bo[e.relayStep];
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(u.p, { level: t, suffix: c && (0, l.jsx)(d.D, { state: c }), children: e.title }), (0, l.jsx)(r.fz, { lead: !0, children: n })] });
    };
  },
  90495(e, t, n) {
   'use strict';
   n.d(t, { AC: () => l, Fu: () => o, Wu: () => i, Zp: () => a });
   var r = n(46447),
    c = n(13526),
    s = n(86070);
   const o = ({ background: e, children: t, className: n, ...r }) => (0, s.jsx)('div', { className: (0, c.A)('card__illustration', e && `card__illustration--${e}`, n), ...r, children: t }),
    i = (e) => (0, s.jsx)('div', { className: 'card__content', ...e }),
    a = ({ href: e, appearance: t, className: n, component: o = 'div', background: i, children: a }) => {
     const l = (e) => ('article' === o ? (0, s.jsx)('article', { ...e }) : 'section' === o ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      h = (0, s.jsx)(l, { className: (0, c.A)('cardgroup__card', i && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, n), children: a });
     return e ? (0, s.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: h }) : h;
    },
    l = ({ appearance: e = 'medium', children: t, className: n }) => (0, s.jsx)('div', { className: (0, c.A)('cardgroup', `cardgroup--${e}`, n), children: t });
  },
 },
]);
