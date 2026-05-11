(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [32139],
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
  26356(e, n, a) {
   'use strict';
   (a.r(n), a.d(n, { assets: () => k, component: () => F, contentTitle: () => x, default: () => N, description: () => T, frontMatter: () => b, issueNumber: () => D, metadata: () => t, title: () => j, toc: () => H }));
   const t = JSON.parse('{"id":"componenten/heading-2/index","title":"Heading 2","description":"Koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat.","source":"@site/docs/componenten/heading-2/index.mdx","sourceDirName":"componenten/heading-2","slug":"/heading-2","permalink":"/heading-2","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-2/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 2","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 2","pagination_label":"Heading 2","description":"Koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat.","slug":"/heading-2","keywords":["caption","content","h2","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 1","permalink":"/heading-1"},"next":{"title":"Heading 3","permalink":"/heading-3"}}');
   var l,
    i,
    s,
    o,
    r,
    d,
    g,
    u = a(86070),
    m = a(18439),
    c = a(20151),
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
   const v = ({ title: e, titleId: n, ...a }) => h.createElement('svg', p({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst die iets groter is dan gebruikelijk, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': n }, a), e ? h.createElement('title', { id: n }, e) : null, l || (l = h.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = h.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), s || (s = h.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 230v80' })), o || (o = h.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), r || (r = h.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), d || (d = h.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), g || (g = h.createElement('path', { fill: '#0A2750', d: 'M324.896 248.952v4.128l.064 4.064h1.056q2.752 0 4.32-2.24 1.6-2.272 1.6-6.432 0-4.224-1.6-6.432-1.568-2.208-4.288-2.208h-1.088l-.064 4v5.12m-7.84-9.248v-1.728h9.504q3.425 0 5.856 1.28 2.431 1.248 3.744 3.584 1.312 2.336 1.312 5.6 0 3.328-1.408 5.696t-4 3.616q-2.56 1.248-6.08 1.248h-8.928v-1.728l2.4-.256q.064-1.952.064-3.968v-9.12q0-2.016-.064-3.968zM339.523 259v-1.504l1.728-.384q.032-1.152.032-2.496v-3.872q0-1.312-.032-2.176 0-.896-.064-1.856l-1.984-.288v-1.248l6.72-2.144.544.352-.096 4.64v6.624q0 1.344.032 2.528l1.6.32V259zm4.256-18.336q-1.12 0-1.92-.704a2.38 2.38 0 0 1-.8-1.824q0-1.12.8-1.824.8-.736 1.92-.736t1.92.736q.8.704.8 1.824a2.38 2.38 0 0 1-.8 1.824q-.801.704-1.92.704m11.885 18.816q-2.145 0-3.36-1.024-1.216-1.056-1.216-3.424v-1.536q.032-.736.032-1.664v-6.112h-2.08v-1.888l2.368-.32 1.6-4.48h3.264l-.064 4.512h3.36v2.176h-3.36v8.96q0 1.12.448 1.664.48.512 1.184.512.831 0 1.728-.704l.8.768a4.64 4.64 0 0 1-1.792 1.888q-1.12.672-2.912.672m12.296-.48v-1.504l1.728-.384q.032-1.152.032-2.496v-3.872q0-1.312-.032-2.176 0-.896-.064-1.856l-1.984-.288v-1.248l6.72-2.144.544.352-.096 4.64v6.624q0 1.344.032 2.528l1.6.32V259zm4.256-18.336q-1.12 0-1.92-.704a2.38 2.38 0 0 1-.8-1.824q0-1.12.8-1.824.8-.736 1.92-.736t1.92.736q.8.704.8 1.824a2.38 2.38 0 0 1-.8 1.824q-.8.704-1.92.704m11.437 18.816q-3.04 0-5.568-1.472l.096-3.904h2.56l.544 3.168q.576.224 1.152.352.576.096 1.248.096 1.375 0 2.112-.448.736-.48.736-1.44a1.75 1.75 0 0 0-.544-1.28q-.544-.544-2.144-.992l-1.728-.512q-1.856-.544-2.88-1.76-.992-1.216-.992-3.008 0-2.208 1.728-3.712 1.728-1.536 4.96-1.536 1.409 0 2.592.352 1.216.32 2.464.96l-.224 3.488h-2.56l-.64-2.752q-.672-.256-1.76-.256t-1.76.448q-.64.449-.64 1.344 0 .64.512 1.152.512.48 2.176.992l1.568.448q2.272.672 3.264 1.92t.992 3.04q0 2.528-1.952 3.936-1.92 1.376-5.312 1.376m23.71-14.784q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368-.639-.768-1.536-.768m.064 14.784q-2.336 0-4.128-.96a7.16 7.16 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.217-1.855 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.112 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.528 1.376 3.744 1.248 1.184 2.912 1.184 1.313 0 2.24-.48a6.7 6.7 0 0 0 1.632-1.248l1.12 1.024q-.991 1.888-2.688 2.816-1.695.928-4.032.928m16.624-14.784q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368t-1.536-.768m.064 14.784q-2.337 0-4.128-.96a7.14 7.14 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.215-1.855 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.111 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.528 1.376 3.744 1.248 1.184 2.912 1.184 1.311 0 2.24-.48a6.8 6.8 0 0 0 1.632-1.248l1.12 1.024q-.993 1.888-2.688 2.816-1.697.928-4.032.928m8.687-.48v-1.504l1.728-.384q.033-1.152.032-2.496v-4.192q0-1.312-.032-2.016a26 26 0 0 0-.064-1.696l-1.952-.288v-1.248l6.304-2.144.576.352.192 2.304q1.248-1.472 2.464-2.048a6 6 0 0 1 2.656-.608q2.08 0 3.328 1.376 1.28 1.375 1.28 4.128v6.144q0 1.313.032 2.496l1.6.32V259h-8.448v-1.504l1.664-.352q.032-1.184.032-2.496v-5.728q0-1.536-.416-2.144-.415-.64-1.344-.64-1.248 0-2.752 1.152v7.36q0 1.344.032 2.528l1.504.32V259zm36.291-14.048v-1.408h6.048v1.408l-1.856.352-5.28 13.76h-2.432l-5.76-13.792-1.568-.32v-1.408h9.088v1.408l-2.016.416 3.008 8.192 2.784-8.224zm14.432 14.528q-2.496 0-4.32-1.024a7.25 7.25 0 0 1-2.816-2.912q-.992-1.888-.992-4.352t1.056-4.288a7.7 7.7 0 0 1 2.944-2.848q1.856-1.024 4.128-1.024t4.096.992a7.4 7.4 0 0 1 2.944 2.848q1.088 1.824 1.088 4.32t-.992 4.352a7.26 7.26 0 0 1-2.816 2.912q-1.824 1.024-4.32 1.024m0-1.664q1.344 0 2.016-1.568t.672-4.96q0-3.424-.672-4.992t-2.016-1.568q-1.377 0-2.048 1.568-.672 1.567-.672 4.992 0 3.392.672 4.96.671 1.568 2.048 1.568m18.312 1.664q-2.496 0-4.32-1.024a7.26 7.26 0 0 1-2.816-2.912q-.992-1.888-.992-4.352t1.056-4.288a7.7 7.7 0 0 1 2.944-2.848q1.857-1.024 4.128-1.024t4.096.992a7.4 7.4 0 0 1 2.944 2.848q1.089 1.824 1.088 4.32t-.992 4.352a7.25 7.25 0 0 1-2.816 2.912q-1.824 1.024-4.32 1.024m0-1.664q1.344 0 2.016-1.568t.672-4.96q0-3.424-.672-4.992t-2.016-1.568q-1.376 0-2.048 1.568-.672 1.567-.672 4.992 0 3.392.672 4.96t2.048 1.568m9.902 1.184v-1.504l1.76-.352q.032-1.184.032-2.528v-4.224q0-.896-.032-1.472 0-.576-.032-1.056 0-.512-.032-1.152l-1.952-.288v-1.248l6.304-2.144.576.352.288 3.776q.672-2.047 1.888-3.072 1.216-1.056 2.4-1.056 1.056 0 1.824.608.768.576.96 1.76-.032 1.248-.672 1.952-.64.672-1.6.672-1.344 0-2.464-1.504l-.192-.256q-.704.672-1.312 1.696a8 8 0 0 0-.832 2.144v4.448q0 1.28.032 2.4l2.528.544V259zm14.158.032v-1.504l1.696-.352q.032-1.152.032-2.496v-15.872l-1.984-.256v-1.344l6.624-1.44.512.32-.128 4.48v4.512q2.016-2.048 4.64-2.048 1.76 0 3.168.928 1.407.896 2.24 2.72.864 1.792.864 4.448 0 2.592-.96 4.48-.96 1.856-2.528 2.88a6.07 6.07 0 0 1-3.36.992q-2.625 0-4.224-1.888l-.544 1.856zm9.056-13.216q-.609 0-1.152.256a5.2 5.2 0 0 0-1.056.672v9.152q.991.896 2.176.896 1.407 0 2.304-1.376.928-1.376.928-4.192 0-2.849-.896-4.128-.864-1.28-2.304-1.28m18.598-1.12q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368t-1.536-.768m.064 14.784q-2.337 0-4.128-.96a7.14 7.14 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.215-1.855 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.111 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.528 1.376 3.744 1.247 1.184 2.912 1.184 1.311 0 2.24-.48a6.8 6.8 0 0 0 1.632-1.248l1.12 1.024q-.993 1.888-2.688 2.816t-4.032.928m16.623-14.784q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.417-.48.416-1.568 0-1.6-.64-2.368-.639-.768-1.536-.768m.064 14.784q-2.336 0-4.128-.96a7.16 7.16 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.217-1.855 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.112 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.528 1.376 3.744 1.248 1.184 2.912 1.184 1.313 0 2.24-.48a6.7 6.7 0 0 0 1.632-1.248l1.12 1.024q-.991 1.888-2.688 2.816-1.695.928-4.032.928m8.093-.48v-1.504l1.76-.384q.032-1.216.032-2.432.032-1.216.032-2.4v-13.408l-1.984-.32v-1.344l6.72-1.44.512.32-.128 4.48v14.144l.064 2.432 1.76.352V259zm15.847-7.648q0 2.624.928 4 .929 1.344 2.4 1.344 1.089 0 1.984-.736v-9.536q-.864-.672-1.888-.672-1.471 0-2.464 1.376-.96 1.375-.96 4.224m5.728 8-.256-1.824q-1.856 1.952-4.512 1.952a6 6 0 0 1-3.264-.928q-1.44-.928-2.272-2.72-.832-1.824-.832-4.416 0-2.624.992-4.48 1.025-1.888 2.624-2.88 1.632-1.024 3.424-1.024 1.248 0 2.176.448a5.2 5.2 0 0 1 1.696 1.248v-5.856l-2.24-.32v-1.344l6.752-1.44.512.32-.128 4.48v16.608l1.568.32V259zm-273.346 25.6v-1.408h6.048v1.408l-1.856.352-5.28 13.76h-2.432l-5.76-13.792-1.568-.32v-1.408h9.088v1.408l-2.016.416 3.008 8.192 2.784-8.224zm18.687 14.496q-2.784 0-3.52-2.304-1.023 1.087-1.984 1.728-.927.608-2.592.608-1.855 0-3.04-1.056-1.152-1.056-1.152-3.04 0-1.152.512-2.08t1.856-1.728 3.808-1.504q.48-.16 1.12-.32t1.312-.32v-1.056q0-2.144-.544-2.912-.512-.768-2.048-.768h-.416q-.192 0-.448.032l-.16 1.408q-.031 1.568-.736 2.272-.672.704-1.6.704-1.76 0-2.144-1.6.129-1.984 2.016-3.232t5.344-1.248q3.072 0 4.384 1.408 1.344 1.408 1.344 4.64v7.168q0 .928.704.928a.95.95 0 0 0 .48-.128q.225-.16.48-.576l.864.576q-.576 1.28-1.504 1.856-.896.544-2.336.544m-7.552-4.896q0 1.184.544 1.76a1.88 1.88 0 0 0 2.112.416q.384-.16 1.216-.736v-5.184a13 13 0 0 0-.832.288 8 8 0 0 0-.672.256q-1.088.448-1.728 1.28-.64.8-.64 1.92M349.927 299v-1.504l1.728-.384q.033-1.152.032-2.496v-4.192q0-1.312-.032-2.016a26 26 0 0 0-.064-1.696l-1.952-.288v-1.248l6.304-2.144.576.352.192 2.304q1.248-1.472 2.464-2.048a6 6 0 0 1 2.656-.608q2.08 0 3.328 1.376 1.28 1.375 1.28 4.128v6.144q0 1.313.032 2.496l1.6.32V299h-8.448v-1.504l1.664-.352q.032-1.183.032-2.496v-5.728q0-1.536-.416-2.144-.415-.64-1.344-.64-1.248 0-2.752 1.152v7.36q0 1.344.032 2.528l1.504.32V299zm34.499-14.304q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368t-1.536-.768m.064 14.784q-2.337 0-4.128-.96a7.14 7.14 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.215-1.856 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.111 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.527 1.376 3.744 1.248 1.184 2.912 1.184 1.311 0 2.24-.48a6.8 6.8 0 0 0 1.632-1.248l1.12 1.024q-.993 1.888-2.688 2.816-1.697.928-4.032.928m16.623-14.784q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368-.639-.768-1.536-.768m.064 14.784q-2.336 0-4.128-.96a7.16 7.16 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.217-1.856 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.112 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.527 1.376 3.744 1.248 1.184 2.912 1.184 1.313 0 2.24-.48a6.7 6.7 0 0 0 1.632-1.248l1.12 1.024q-.991 1.888-2.688 2.816-1.695.928-4.032.928m8.688-.48v-1.504l1.728-.384q.032-1.152.032-2.496v-4.192q0-1.312-.032-2.016 0-.736-.064-1.696l-1.952-.288v-1.248l6.304-2.144.576.352.192 2.304q1.248-1.472 2.464-2.048a6 6 0 0 1 2.656-.608q2.08 0 3.328 1.376 1.28 1.375 1.28 4.128v6.144q0 1.313.032 2.496l1.6.32V299h-8.448v-1.504l1.664-.352q.032-1.183.032-2.496v-5.728q0-1.536-.416-2.144-.417-.64-1.344-.64-1.248 0-2.752 1.152v7.36q0 1.344.032 2.528l1.504.32V299zm26.562 0v-1.504l1.728-.384q.033-1.152.032-2.496v-15.744l-1.984-.32v-1.344l6.624-1.44.512.32-.128 4.48v5.152q1.28-1.504 2.464-2.08a5.8 5.8 0 0 1 2.624-.608q2.112 0 3.392 1.376t1.28 4.128v6.144q0 1.313.032 2.496l1.6.32V299h-8.416v-1.504l1.664-.352q.032-1.183.032-2.496v-5.728q0-1.568-.384-2.176-.351-.608-1.344-.608-.64 0-1.376.384t-1.472 1.088v7.04q0 1.344.032 2.528l1.504.32V299zm27.686-14.304q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368-.639-.768-1.536-.768m.064 14.784q-2.336 0-4.128-.96a7.16 7.16 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.217-1.856 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.112 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.527 1.376 3.744 1.248 1.184 2.912 1.184 1.313 0 2.24-.48a6.7 6.7 0 0 0 1.632-1.248l1.12 1.024q-.991 1.888-2.688 2.816-1.695.928-4.032.928m20.978-.032q-2.784 0-3.52-2.304-1.024 1.087-1.984 1.728-.929.608-2.592.608-1.856 0-3.04-1.056-1.152-1.056-1.152-3.04 0-1.152.512-2.08t1.856-1.728 3.808-1.504q.48-.16 1.12-.32t1.312-.32v-1.056q0-2.144-.544-2.912-.512-.768-2.048-.768h-.416q-.192 0-.448.032l-.16 1.408q-.032 1.568-.736 2.272-.672.704-1.6.704-1.76 0-2.144-1.6.128-1.984 2.016-3.232t5.344-1.248q3.072 0 4.384 1.408 1.344 1.408 1.344 4.64v7.168q0 .928.704.928a.95.95 0 0 0 .48-.128q.224-.16.48-.576l.864.576q-.576 1.28-1.504 1.856-.896.544-2.336.544m-7.552-4.896q0 1.184.544 1.76a1.88 1.88 0 0 0 2.112.416q.384-.16 1.216-.736v-5.184q-.416.127-.832.288a8 8 0 0 0-.672.256q-1.088.448-1.728 1.28-.64.8-.64 1.92m17.608-3.2q0 2.624.928 4 .928 1.344 2.4 1.344 1.088 0 1.984-.736v-9.536q-.864-.672-1.888-.672-1.472 0-2.464 1.376-.96 1.375-.96 4.224m5.728 8-.256-1.824q-1.856 1.952-4.512 1.952a6 6 0 0 1-3.264-.928q-1.44-.928-2.272-2.72-.832-1.824-.832-4.416 0-2.624.992-4.48 1.024-1.888 2.624-2.88 1.632-1.024 3.424-1.024 1.248 0 2.176.448a5.2 5.2 0 0 1 1.696 1.248v-5.856l-2.24-.32v-1.344l6.752-1.44.512.32-.128 4.48v16.608l1.568.32V299zm7.896-.352v-1.504l1.728-.384q.032-1.152.032-2.496v-3.872q0-1.312-.032-2.176 0-.896-.064-1.856l-1.984-.288v-1.248l6.72-2.144.544.352-.096 4.64v6.624q0 1.344.032 2.528l1.6.32V299zm4.256-18.336q-1.12 0-1.92-.704a2.38 2.38 0 0 1-.8-1.824q0-1.12.8-1.824.8-.736 1.92-.736t1.92.736q.8.703.8 1.824a2.38 2.38 0 0 1-.8 1.824q-.8.704-1.92.704M518.896 299v-1.504l1.728-.384q.032-1.152.032-2.496v-4.192q0-1.312-.032-2.016a26 26 0 0 0-.064-1.696l-1.952-.288v-1.248l6.304-2.144.576.352.192 2.304q1.248-1.472 2.464-2.048a6 6 0 0 1 2.656-.608q2.08 0 3.328 1.376 1.28 1.375 1.28 4.128v6.144q0 1.313.032 2.496l1.6.32V299h-8.448v-1.504l1.664-.352q.032-1.183.032-2.496v-5.728q0-1.536-.416-2.144-.415-.64-1.344-.64-1.248 0-2.752 1.152v7.36q0 1.344.032 2.528l1.504.32V299zm26.663-7.168q1.12 0 1.664-.992.576-.992.576-2.688t-.576-2.624q-.544-.96-1.6-.96-1.089 0-1.632.96-.544.96-.544 2.656t.512 2.688q.511.96 1.6.96m-4.256 9.824q0 1.408 1.056 2.048 1.056.672 3.232.672 2.4 0 3.616-.704t1.216-1.76q0-.704-.512-1.28-.513-.544-1.824-.544h-3.36q-1.76 0-2.912-.288a4.3 4.3 0 0 0-.384.864 3.4 3.4 0 0 0-.128.992m4.288-8.32q-1.665 0-2.912-.384a2.9 2.9 0 0 0-.384 1.472q0 .544.416.896.416.32 1.44.32h3.744q2.432 0 3.872.608 1.44.576 2.048 1.632.64 1.024.64 2.432 0 1.6-1.056 2.944-1.056 1.376-3.168 2.176-2.08.832-5.152.832-2.657 0-4.16-.544-1.505-.512-2.112-1.376t-.608-1.824q0-2.048 2.656-3.296-.993-.416-1.44-1.088a2.74 2.74 0 0 1-.416-1.472q0-1.12.64-2.112.672-1.024 1.856-2.048-1.313-.672-1.952-1.792-.64-1.12-.64-2.496 0-2.24 1.632-3.712 1.663-1.472 5.056-1.472 1.728 0 3.008.384t2.08 1.088l3.584-1.536.512.32v2.464h-3.04q.576 1.056.576 2.464 0 2.143-1.664 3.648-1.632 1.472-5.056 1.472' })));
   var q = a(72401),
    f = a(37131);
   const b = { title: 'Heading 2', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 2', pagination_label: 'Heading 2', description: 'Koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat.', slug: '/heading-2', keywords: ['caption', 'content', 'h2', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    x = void 0,
    k = {},
    j = 'Heading 2',
    T = 'Koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat.',
    D = 258,
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
     (0, u.jsxs)(u.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, u.jsx)(f.Fc, { component: F, headingLevel: 1, description: T }), '\n', (0, u.jsx)(q.e, { component: F }), '\n', (0, u.jsx)(n.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, u.jsx)(a, { component: F, illustration: v }), '\n', (0, u.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, u.jsx)(f.VK, { component: F, headingLevel: 3 }), '\n', (0, u.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, u.jsx)(f.mu, { component: F, headingLevel: 3 }), '\n', (0, u.jsx)(f.K_, { component: F }), '\n', (0, u.jsx)(f.$9, { component: F, headingLevel: 2 })] })
    );
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, m.R)(), ...e.components };
    return n ? (0, u.jsx)(n, { ...e, children: (0, u.jsx)(L, { ...e }) }) : L(e);
   }
  },
  33062(e, n, a) {
   'use strict';
   a.d(n, { bo: () => l, KF: () => m, mJ: () => p, VZ: () => T, cR: () => j, Pv: () => v, qZ: () => s, kD: () => x, B2: () => c, Pc: () => r, f4: () => o, GT: () => k, fX: () => i, eQ: () => b, B_: () => f, o_: () => q });
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
    q = (e) => e.join('.'),
    f = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((a) => ('object' == typeof e[a] && null !== e[a] ? x(e[a], [...n, a]) : []));
   }
   function k(e) {
    const n = new Map();
    function a(e) {
     return (n.has(e) || n.set(e, q(e)), n.get(e));
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
  37131(e, n, a) {
   'use strict';
   a.d(n, { VK: () => v, $9: () => f, mu: () => q, Fc: () => b, K_: () => x });
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
     return e && (0, d.jsx)(t.If, { sections: i.map((a) => ({ className: (0, l.A)('ma-definition-of-done', a && `ma-definition-of-done--${(0, h.fX)(a.title)}`), headingLevel: n, expanded: !1, label: a ? `${a.title} - ${a.progress.value} van ${a.progress.max}` : '', body: a && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(c._, { children: a.tasks.map(({ checked: e, name: a, id: t }) => (0, d.jsx)(c.Z, { headingLevel: n + 1, checked: e, heading: a, description: (0, h.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${a.url}?filterQuery=${e.title}`, children: [a.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    q = ({ component: e, headingLevel: n }) => {
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
    f = ({ component: e, headingLevel: n }) => {
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
    return (0, s.jsx)(t.KE, { className: (0, l.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
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
   const s = ({ background: e, children: n, className: a, ...t }) => (0, i.jsx)('div', { className: (0, l.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, a), ...t, children: n }),
    o = (e) => (0, i.jsx)('div', { className: 'ma-card__content', ...e }),
    r = ({ href: e, appearance: n, className: a, component: s = 'div', background: o, children: r }) => {
     const d = (e) => ('article' === s ? (0, i.jsx)('article', { ...e }) : 'section' === s ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      g = (0, i.jsx)(d, { className: (0, l.A)('ma-cardgroup__card', o && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, a), children: r });
     return e ? (0, i.jsx)(t.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: g }) : g;
    },
    d = ({ appearance: e = 'medium', children: n, className: a }) => (0, i.jsx)('div', { className: (0, l.A)('ma-cardgroup', `ma-cardgroup--${e}`, a), children: n });
  },
 },
]);
