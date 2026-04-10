(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [32139],
 {
  1292(e, n, t) {
   'use strict';
   t.d(n, { r: () => h });
   var a = t(29181),
    s = t(74172),
    i = t(15089),
    o = t(28377),
    l = t(33648),
    r = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(s.A, {}), github: (0, d.jsx)(i.A, {}), npm: (0, d.jsx)(o.A, {}), storybook: (0, d.jsx)(l.A, {}) },
    h = ({ brand: e }) => (0, d.jsx)(a.In, { children: c[e] || (0, d.jsx)(r.A, {}) });
  },
  12013(e, n, t) {
   'use strict';
   t.d(n, { o: () => c });
   var a = t(18439),
    s = t(46447),
    i = t(86070);
   const o = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: a, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return t + a + s;
     }
     return t.toString();
    },
    l = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    r = (e) => ({ img: ({ src: n, ...t }) => (0, i.jsx)('img', { ...t, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return l[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: s = '', components: o = {} }) => (0, i.jsx)(a.x, { components: { ...d(n, t), ...r(s), ...o }, children: e });
  },
  26356(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => k, component: () => T, contentTitle: () => x, default: () => w, description: () => _, frontMatter: () => j, issueNumber: () => A, metadata: () => a, title: () => b, toc: () => D }));
   const a = JSON.parse('{"id":"componenten/heading-2/index","title":"Heading 2","description":"Koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat.","source":"@site/docs/componenten/heading-2/index.mdx","sourceDirName":"componenten/heading-2","slug":"/heading-2","permalink":"/heading-2","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-2/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 2","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 2","pagination_label":"Heading 2","description":"Koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat.","slug":"/heading-2","keywords":["caption","content","h2","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 1","permalink":"/heading-1"},"next":{"title":"Heading 3","permalink":"/heading-3"}}');
   var s,
    i,
    o,
    l,
    r,
    d,
    c,
    h = t(86070),
    m = t(18439),
    p = t(45189),
    u = t(30758);
   function v() {
    return (
     (v = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
         }
         return e;
        }),
     v.apply(null, arguments)
    );
   }
   const g = ({ title: e, titleId: n, ...t }) => u.createElement('svg', v({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst die iets groter is dan gebruikelijk, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': n }, t), e ? u.createElement('title', { id: n }, e) : null, s || (s = u.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = u.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), o || (o = u.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 230v80' })), l || (l = u.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), r || (r = u.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), d || (d = u.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), c || (c = u.createElement('path', { fill: '#0A2750', d: 'M324.896 248.952v4.128l.064 4.064h1.056q2.752 0 4.32-2.24 1.6-2.272 1.6-6.432 0-4.224-1.6-6.432-1.568-2.208-4.288-2.208h-1.088l-.064 4v5.12m-7.84-9.248v-1.728h9.504q3.425 0 5.856 1.28 2.431 1.248 3.744 3.584 1.312 2.336 1.312 5.6 0 3.328-1.408 5.696t-4 3.616q-2.56 1.248-6.08 1.248h-8.928v-1.728l2.4-.256q.064-1.952.064-3.968v-9.12q0-2.016-.064-3.968zM339.523 259v-1.504l1.728-.384q.032-1.152.032-2.496v-3.872q0-1.312-.032-2.176 0-.896-.064-1.856l-1.984-.288v-1.248l6.72-2.144.544.352-.096 4.64v6.624q0 1.344.032 2.528l1.6.32V259zm4.256-18.336q-1.12 0-1.92-.704a2.38 2.38 0 0 1-.8-1.824q0-1.12.8-1.824.8-.736 1.92-.736t1.92.736q.8.704.8 1.824a2.38 2.38 0 0 1-.8 1.824q-.801.704-1.92.704m11.885 18.816q-2.145 0-3.36-1.024-1.216-1.056-1.216-3.424v-1.536q.032-.736.032-1.664v-6.112h-2.08v-1.888l2.368-.32 1.6-4.48h3.264l-.064 4.512h3.36v2.176h-3.36v8.96q0 1.12.448 1.664.48.512 1.184.512.831 0 1.728-.704l.8.768a4.64 4.64 0 0 1-1.792 1.888q-1.12.672-2.912.672m12.296-.48v-1.504l1.728-.384q.032-1.152.032-2.496v-3.872q0-1.312-.032-2.176 0-.896-.064-1.856l-1.984-.288v-1.248l6.72-2.144.544.352-.096 4.64v6.624q0 1.344.032 2.528l1.6.32V259zm4.256-18.336q-1.12 0-1.92-.704a2.38 2.38 0 0 1-.8-1.824q0-1.12.8-1.824.8-.736 1.92-.736t1.92.736q.8.704.8 1.824a2.38 2.38 0 0 1-.8 1.824q-.8.704-1.92.704m11.437 18.816q-3.04 0-5.568-1.472l.096-3.904h2.56l.544 3.168q.576.224 1.152.352.576.096 1.248.096 1.375 0 2.112-.448.736-.48.736-1.44a1.75 1.75 0 0 0-.544-1.28q-.544-.544-2.144-.992l-1.728-.512q-1.856-.544-2.88-1.76-.992-1.216-.992-3.008 0-2.208 1.728-3.712 1.728-1.536 4.96-1.536 1.409 0 2.592.352 1.216.32 2.464.96l-.224 3.488h-2.56l-.64-2.752q-.672-.256-1.76-.256t-1.76.448q-.64.449-.64 1.344 0 .64.512 1.152.512.48 2.176.992l1.568.448q2.272.672 3.264 1.92t.992 3.04q0 2.528-1.952 3.936-1.92 1.376-5.312 1.376m23.71-14.784q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368-.639-.768-1.536-.768m.064 14.784q-2.336 0-4.128-.96a7.16 7.16 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.217-1.855 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.112 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.528 1.376 3.744 1.248 1.184 2.912 1.184 1.313 0 2.24-.48a6.7 6.7 0 0 0 1.632-1.248l1.12 1.024q-.991 1.888-2.688 2.816-1.695.928-4.032.928m16.624-14.784q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368t-1.536-.768m.064 14.784q-2.337 0-4.128-.96a7.14 7.14 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.215-1.855 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.111 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.528 1.376 3.744 1.248 1.184 2.912 1.184 1.311 0 2.24-.48a6.8 6.8 0 0 0 1.632-1.248l1.12 1.024q-.993 1.888-2.688 2.816-1.697.928-4.032.928m8.687-.48v-1.504l1.728-.384q.033-1.152.032-2.496v-4.192q0-1.312-.032-2.016a26 26 0 0 0-.064-1.696l-1.952-.288v-1.248l6.304-2.144.576.352.192 2.304q1.248-1.472 2.464-2.048a6 6 0 0 1 2.656-.608q2.08 0 3.328 1.376 1.28 1.375 1.28 4.128v6.144q0 1.313.032 2.496l1.6.32V259h-8.448v-1.504l1.664-.352q.032-1.184.032-2.496v-5.728q0-1.536-.416-2.144-.415-.64-1.344-.64-1.248 0-2.752 1.152v7.36q0 1.344.032 2.528l1.504.32V259zm36.291-14.048v-1.408h6.048v1.408l-1.856.352-5.28 13.76h-2.432l-5.76-13.792-1.568-.32v-1.408h9.088v1.408l-2.016.416 3.008 8.192 2.784-8.224zm14.432 14.528q-2.496 0-4.32-1.024a7.25 7.25 0 0 1-2.816-2.912q-.992-1.888-.992-4.352t1.056-4.288a7.7 7.7 0 0 1 2.944-2.848q1.856-1.024 4.128-1.024t4.096.992a7.4 7.4 0 0 1 2.944 2.848q1.088 1.824 1.088 4.32t-.992 4.352a7.26 7.26 0 0 1-2.816 2.912q-1.824 1.024-4.32 1.024m0-1.664q1.344 0 2.016-1.568t.672-4.96q0-3.424-.672-4.992t-2.016-1.568q-1.377 0-2.048 1.568-.672 1.567-.672 4.992 0 3.392.672 4.96.671 1.568 2.048 1.568m18.312 1.664q-2.496 0-4.32-1.024a7.26 7.26 0 0 1-2.816-2.912q-.992-1.888-.992-4.352t1.056-4.288a7.7 7.7 0 0 1 2.944-2.848q1.857-1.024 4.128-1.024t4.096.992a7.4 7.4 0 0 1 2.944 2.848q1.089 1.824 1.088 4.32t-.992 4.352a7.25 7.25 0 0 1-2.816 2.912q-1.824 1.024-4.32 1.024m0-1.664q1.344 0 2.016-1.568t.672-4.96q0-3.424-.672-4.992t-2.016-1.568q-1.376 0-2.048 1.568-.672 1.567-.672 4.992 0 3.392.672 4.96t2.048 1.568m9.902 1.184v-1.504l1.76-.352q.032-1.184.032-2.528v-4.224q0-.896-.032-1.472 0-.576-.032-1.056 0-.512-.032-1.152l-1.952-.288v-1.248l6.304-2.144.576.352.288 3.776q.672-2.047 1.888-3.072 1.216-1.056 2.4-1.056 1.056 0 1.824.608.768.576.96 1.76-.032 1.248-.672 1.952-.64.672-1.6.672-1.344 0-2.464-1.504l-.192-.256q-.704.672-1.312 1.696a8 8 0 0 0-.832 2.144v4.448q0 1.28.032 2.4l2.528.544V259zm14.158.032v-1.504l1.696-.352q.032-1.152.032-2.496v-15.872l-1.984-.256v-1.344l6.624-1.44.512.32-.128 4.48v4.512q2.016-2.048 4.64-2.048 1.76 0 3.168.928 1.407.896 2.24 2.72.864 1.792.864 4.448 0 2.592-.96 4.48-.96 1.856-2.528 2.88a6.07 6.07 0 0 1-3.36.992q-2.625 0-4.224-1.888l-.544 1.856zm9.056-13.216q-.609 0-1.152.256a5.2 5.2 0 0 0-1.056.672v9.152q.991.896 2.176.896 1.407 0 2.304-1.376.928-1.376.928-4.192 0-2.849-.896-4.128-.864-1.28-2.304-1.28m18.598-1.12q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368t-1.536-.768m.064 14.784q-2.337 0-4.128-.96a7.14 7.14 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.215-1.855 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.111 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.528 1.376 3.744 1.247 1.184 2.912 1.184 1.311 0 2.24-.48a6.8 6.8 0 0 0 1.632-1.248l1.12 1.024q-.993 1.888-2.688 2.816t-4.032.928m16.623-14.784q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.417-.48.416-1.568 0-1.6-.64-2.368-.639-.768-1.536-.768m.064 14.784q-2.336 0-4.128-.96a7.16 7.16 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.217-1.855 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.112 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.528 1.376 3.744 1.248 1.184 2.912 1.184 1.313 0 2.24-.48a6.7 6.7 0 0 0 1.632-1.248l1.12 1.024q-.991 1.888-2.688 2.816-1.695.928-4.032.928m8.093-.48v-1.504l1.76-.384q.032-1.216.032-2.432.032-1.216.032-2.4v-13.408l-1.984-.32v-1.344l6.72-1.44.512.32-.128 4.48v14.144l.064 2.432 1.76.352V259zm15.847-7.648q0 2.624.928 4 .929 1.344 2.4 1.344 1.089 0 1.984-.736v-9.536q-.864-.672-1.888-.672-1.471 0-2.464 1.376-.96 1.375-.96 4.224m5.728 8-.256-1.824q-1.856 1.952-4.512 1.952a6 6 0 0 1-3.264-.928q-1.44-.928-2.272-2.72-.832-1.824-.832-4.416 0-2.624.992-4.48 1.025-1.888 2.624-2.88 1.632-1.024 3.424-1.024 1.248 0 2.176.448a5.2 5.2 0 0 1 1.696 1.248v-5.856l-2.24-.32v-1.344l6.752-1.44.512.32-.128 4.48v16.608l1.568.32V259zm-273.346 25.6v-1.408h6.048v1.408l-1.856.352-5.28 13.76h-2.432l-5.76-13.792-1.568-.32v-1.408h9.088v1.408l-2.016.416 3.008 8.192 2.784-8.224zm18.687 14.496q-2.784 0-3.52-2.304-1.023 1.087-1.984 1.728-.927.608-2.592.608-1.855 0-3.04-1.056-1.152-1.056-1.152-3.04 0-1.152.512-2.08t1.856-1.728 3.808-1.504q.48-.16 1.12-.32t1.312-.32v-1.056q0-2.144-.544-2.912-.512-.768-2.048-.768h-.416q-.192 0-.448.032l-.16 1.408q-.031 1.568-.736 2.272-.672.704-1.6.704-1.76 0-2.144-1.6.129-1.984 2.016-3.232t5.344-1.248q3.072 0 4.384 1.408 1.344 1.408 1.344 4.64v7.168q0 .928.704.928a.95.95 0 0 0 .48-.128q.225-.16.48-.576l.864.576q-.576 1.28-1.504 1.856-.896.544-2.336.544m-7.552-4.896q0 1.184.544 1.76a1.88 1.88 0 0 0 2.112.416q.384-.16 1.216-.736v-5.184a13 13 0 0 0-.832.288 8 8 0 0 0-.672.256q-1.088.448-1.728 1.28-.64.8-.64 1.92M349.927 299v-1.504l1.728-.384q.033-1.152.032-2.496v-4.192q0-1.312-.032-2.016a26 26 0 0 0-.064-1.696l-1.952-.288v-1.248l6.304-2.144.576.352.192 2.304q1.248-1.472 2.464-2.048a6 6 0 0 1 2.656-.608q2.08 0 3.328 1.376 1.28 1.375 1.28 4.128v6.144q0 1.313.032 2.496l1.6.32V299h-8.448v-1.504l1.664-.352q.032-1.183.032-2.496v-5.728q0-1.536-.416-2.144-.415-.64-1.344-.64-1.248 0-2.752 1.152v7.36q0 1.344.032 2.528l1.504.32V299zm34.499-14.304q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368t-1.536-.768m.064 14.784q-2.337 0-4.128-.96a7.14 7.14 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.215-1.856 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.111 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.527 1.376 3.744 1.248 1.184 2.912 1.184 1.311 0 2.24-.48a6.8 6.8 0 0 0 1.632-1.248l1.12 1.024q-.993 1.888-2.688 2.816-1.697.928-4.032.928m16.623-14.784q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368-.639-.768-1.536-.768m.064 14.784q-2.336 0-4.128-.96a7.16 7.16 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.217-1.856 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.112 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.527 1.376 3.744 1.248 1.184 2.912 1.184 1.313 0 2.24-.48a6.7 6.7 0 0 0 1.632-1.248l1.12 1.024q-.991 1.888-2.688 2.816-1.695.928-4.032.928m8.688-.48v-1.504l1.728-.384q.032-1.152.032-2.496v-4.192q0-1.312-.032-2.016 0-.736-.064-1.696l-1.952-.288v-1.248l6.304-2.144.576.352.192 2.304q1.248-1.472 2.464-2.048a6 6 0 0 1 2.656-.608q2.08 0 3.328 1.376 1.28 1.375 1.28 4.128v6.144q0 1.313.032 2.496l1.6.32V299h-8.448v-1.504l1.664-.352q.032-1.183.032-2.496v-5.728q0-1.536-.416-2.144-.417-.64-1.344-.64-1.248 0-2.752 1.152v7.36q0 1.344.032 2.528l1.504.32V299zm26.562 0v-1.504l1.728-.384q.033-1.152.032-2.496v-15.744l-1.984-.32v-1.344l6.624-1.44.512.32-.128 4.48v5.152q1.28-1.504 2.464-2.08a5.8 5.8 0 0 1 2.624-.608q2.112 0 3.392 1.376t1.28 4.128v6.144q0 1.313.032 2.496l1.6.32V299h-8.416v-1.504l1.664-.352q.032-1.183.032-2.496v-5.728q0-1.568-.384-2.176-.351-.608-1.344-.608-.64 0-1.376.384t-1.472 1.088v7.04q0 1.344.032 2.528l1.504.32V299zm27.686-14.304q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368-.639-.768-1.536-.768m.064 14.784q-2.336 0-4.128-.96a7.16 7.16 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.217-1.856 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.112 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.527 1.376 3.744 1.248 1.184 2.912 1.184 1.313 0 2.24-.48a6.7 6.7 0 0 0 1.632-1.248l1.12 1.024q-.991 1.888-2.688 2.816-1.695.928-4.032.928m20.978-.032q-2.784 0-3.52-2.304-1.024 1.087-1.984 1.728-.929.608-2.592.608-1.856 0-3.04-1.056-1.152-1.056-1.152-3.04 0-1.152.512-2.08t1.856-1.728 3.808-1.504q.48-.16 1.12-.32t1.312-.32v-1.056q0-2.144-.544-2.912-.512-.768-2.048-.768h-.416q-.192 0-.448.032l-.16 1.408q-.032 1.568-.736 2.272-.672.704-1.6.704-1.76 0-2.144-1.6.128-1.984 2.016-3.232t5.344-1.248q3.072 0 4.384 1.408 1.344 1.408 1.344 4.64v7.168q0 .928.704.928a.95.95 0 0 0 .48-.128q.224-.16.48-.576l.864.576q-.576 1.28-1.504 1.856-.896.544-2.336.544m-7.552-4.896q0 1.184.544 1.76a1.88 1.88 0 0 0 2.112.416q.384-.16 1.216-.736v-5.184q-.416.127-.832.288a8 8 0 0 0-.672.256q-1.088.448-1.728 1.28-.64.8-.64 1.92m17.608-3.2q0 2.624.928 4 .928 1.344 2.4 1.344 1.088 0 1.984-.736v-9.536q-.864-.672-1.888-.672-1.472 0-2.464 1.376-.96 1.375-.96 4.224m5.728 8-.256-1.824q-1.856 1.952-4.512 1.952a6 6 0 0 1-3.264-.928q-1.44-.928-2.272-2.72-.832-1.824-.832-4.416 0-2.624.992-4.48 1.024-1.888 2.624-2.88 1.632-1.024 3.424-1.024 1.248 0 2.176.448a5.2 5.2 0 0 1 1.696 1.248v-5.856l-2.24-.32v-1.344l6.752-1.44.512.32-.128 4.48v16.608l1.568.32V299zm7.896-.352v-1.504l1.728-.384q.032-1.152.032-2.496v-3.872q0-1.312-.032-2.176 0-.896-.064-1.856l-1.984-.288v-1.248l6.72-2.144.544.352-.096 4.64v6.624q0 1.344.032 2.528l1.6.32V299zm4.256-18.336q-1.12 0-1.92-.704a2.38 2.38 0 0 1-.8-1.824q0-1.12.8-1.824.8-.736 1.92-.736t1.92.736q.8.703.8 1.824a2.38 2.38 0 0 1-.8 1.824q-.8.704-1.92.704M518.896 299v-1.504l1.728-.384q.032-1.152.032-2.496v-4.192q0-1.312-.032-2.016a26 26 0 0 0-.064-1.696l-1.952-.288v-1.248l6.304-2.144.576.352.192 2.304q1.248-1.472 2.464-2.048a6 6 0 0 1 2.656-.608q2.08 0 3.328 1.376 1.28 1.375 1.28 4.128v6.144q0 1.313.032 2.496l1.6.32V299h-8.448v-1.504l1.664-.352q.032-1.183.032-2.496v-5.728q0-1.536-.416-2.144-.415-.64-1.344-.64-1.248 0-2.752 1.152v7.36q0 1.344.032 2.528l1.504.32V299zm26.663-7.168q1.12 0 1.664-.992.576-.992.576-2.688t-.576-2.624q-.544-.96-1.6-.96-1.089 0-1.632.96-.544.96-.544 2.656t.512 2.688q.511.96 1.6.96m-4.256 9.824q0 1.408 1.056 2.048 1.056.672 3.232.672 2.4 0 3.616-.704t1.216-1.76q0-.704-.512-1.28-.513-.544-1.824-.544h-3.36q-1.76 0-2.912-.288a4.3 4.3 0 0 0-.384.864 3.4 3.4 0 0 0-.128.992m4.288-8.32q-1.665 0-2.912-.384a2.9 2.9 0 0 0-.384 1.472q0 .544.416.896.416.32 1.44.32h3.744q2.432 0 3.872.608 1.44.576 2.048 1.632.64 1.024.64 2.432 0 1.6-1.056 2.944-1.056 1.376-3.168 2.176-2.08.832-5.152.832-2.657 0-4.16-.544-1.505-.512-2.112-1.376t-.608-1.824q0-2.048 2.656-3.296-.993-.416-1.44-1.088a2.74 2.74 0 0 1-.416-1.472q0-1.12.64-2.112.672-1.024 1.856-2.048-1.313-.672-1.952-1.792-.64-1.12-.64-2.496 0-2.24 1.632-3.712 1.663-1.472 5.056-1.472 1.728 0 3.008.384t2.08 1.088l3.584-1.536.512.32v2.464h-3.04q.576 1.056.576 2.464 0 2.143-1.664 3.648-1.632 1.472-5.056 1.472' })));
   var q = t(72401),
    f = t(37131);
   const j = { title: 'Heading 2', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 2', pagination_label: 'Heading 2', description: 'Koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat.', slug: '/heading-2', keywords: ['caption', 'content', 'h2', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    x = void 0,
    k = {},
    b = 'Heading 2',
    _ = 'Koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat.',
    A = 258,
    T = p.find((e) => e.number === A),
    D = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function N(e) {
    const n = { h2: 'h2', ...(0, m.R)(), ...e.components },
     { ComponentAnatomy: t } = n;
    return (
     t ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('ComponentAnatomy', !0),
     (0, h.jsxs)(h.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, h.jsx)(f.Fc, { component: T, headingLevel: 1, description: _ }), '\n', (0, h.jsx)(q.e, { component: T }), '\n', (0, h.jsx)(n.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, h.jsx)(t, { component: T, illustration: g }), '\n', (0, h.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, h.jsx)(f.VK, { component: T, headingLevel: 3 }), '\n', (0, h.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, h.jsx)(f.mu, { component: T, headingLevel: 3 }), '\n', (0, h.jsx)(f.K_, { component: T }), '\n', (0, h.jsx)(f.$9, { component: T, headingLevel: 2 })] })
    );
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, m.R)(), ...e.components };
    return n ? (0, h.jsx)(n, { ...e, children: (0, h.jsx)(N, { ...e }) }) : N(e);
   }
  },
  33062(e, n, t) {
   'use strict';
   t.d(n, { bo: () => s, KF: () => m, mJ: () => v, VZ: () => A, cR: () => _, Pv: () => g, qZ: () => o, kD: () => x, B2: () => p, Pc: () => r, f4: () => l, GT: () => k, fX: () => i, eQ: () => j, B_: () => f, o_: () => q, Rc: () => b });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    r = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return h(c(n));
    },
    p = (e, n) => v(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return h(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    v = (e) => h(c(e.projects.flatMap((e) => u(e)))),
    g = (e) => {
     const n = u(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const a = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: a, id: s, value: i }) => {
        const o = /^(.+) URL/.exec(a)[1],
         l = 'Storybook' === o ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: a, id: s, value: i, description: l };
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
   function k(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, q(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function b(e) {
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
   t.d(n, { VK: () => g, $9: () => f, mu: () => q, Fc: () => j, K_: () => x });
   var a = t(29181),
    s = t(13526),
    i = t(1292),
    o = t(90495),
    l = t(54565);
   function r(e) {
    return (0, l.c)() ? e.children() : null;
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
   var h = t(67970),
    m = t(72642),
    p = t(58876),
    u = t(33062);
   const v = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    g = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => u.f4.includes(e.id)),
      i = t && u.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(a.If, { sections: i.map((t) => ({ className: (0, s.A)('definition-of-done', t && `definition-of-done--${(0, u.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(p._, { children: t.tasks.map(({ checked: e, name: t, id: a }) => (0, d.jsx)(p.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, u.qZ)(a) }, a)) }), (0, d.jsx)(a.fz, { children: (0, d.jsxs)(a.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    q = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !u.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(o.AC, {
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
            l = (0, u.Pv)(e),
            r = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: n }) => r.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            o.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(o.Wu, {
              children: [
               (0, d.jsx)(a.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(a.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(a.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (h.length > 0 || l.length > 0) && (0, d.jsx)(a.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               h.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(a.dk, {
                  links: h
                   .filter((e) => !!r.get(e.name))
                   .map((e) => {
                    const n = r.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(i.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               l.length > 0 && (0, d.jsx)(d.Fragment, { children: l.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(a.DZ, { level: n + 2, children: [s, ' in ', e] }), (0, d.jsx)(a.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(i.r, { brand: e.brand }), href: e.value })) })] })) }),
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
     const s = e && u.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: s && (0, d.jsx)(h.D, { state: s }), children: e.title }), (0, d.jsx)(a.fz, { lead: !0, children: t })] });
    },
    x = ({ component: e }) => {
     const n = (e && v[e.title]) || [];
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
   t.d(n, { D: () => l });
   var a = t(46447),
    s = t(13526),
    i = t(33062),
    o = t(86070);
   const l = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, o.jsx)(a.KE, { className: (0, s.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72401(e, n, t) {
   'use strict';
   t.d(n, { e: () => l });
   var a = t(12013),
    s = t(30758),
    i = t(33062),
    o = t(86070);
   const l = ({ component: e }) => {
    const { title: n } = e,
     l = (0, i.fX)(n),
     r = s.lazy(() => t(82839)(`./${l}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, o.jsx)(s.Suspense, { fallback: null, children: (0, o.jsx)(a.o, { omitH1: !0, headingLevel: 1, children: (0, o.jsx)(r, {}) }) });
   };
  },
  72642(e, n, t) {
   'use strict';
   t.d(n, { p: () => i });
   var a = t(13526),
    s = t(86070);
   const i = ({ children: e, className: n, level: t = 1, suffix: i, ...o }) => (0, s.jsxs)('hgroup', { className: (0, a.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...o, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
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
   t.d(n, { AC: () => d, Fu: () => o, Wu: () => l, Zp: () => r });
   var a = t(46447),
    s = t(13526),
    i = t(86070);
   const o = ({ background: e, children: n, className: t, ...a }) => (0, i.jsx)('div', { className: (0, s.A)('card__illustration', e && `card__illustration--${e}`, t), ...a, children: n }),
    l = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    r = ({ href: e, appearance: n, className: t, component: o = 'div', background: l, children: r }) => {
     const d = (e) => ('article' === o ? (0, i.jsx)('article', { ...e }) : 'section' === o ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      c = (0, i.jsx)(d, { className: (0, s.A)('cardgroup__card', l && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: r });
     return e ? (0, i.jsx)(a.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, i.jsx)('div', { className: (0, s.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
