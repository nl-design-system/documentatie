(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [32139],
 {
  14889: (e, t, n) => {
   'use strict';
   n.d(t, { AC: () => l, Fu: () => i, Wu: () => o, Zp: () => a });
   var r = n(68873),
    s = n(13526),
    c = n(86070);
   const i = ({ background: e, children: t, className: n, ...r }) => (0, c.jsx)('div', { className: (0, s.A)('card__illustration', e && `card__illustration--${e}`, n), ...r, children: t }),
    o = (e) => (0, c.jsx)('div', { className: 'card__content', ...e }),
    a = ({ href: e, appearance: t, className: n, component: i = 'div', background: o, children: a }) => {
     const l = (e) => ('article' === i ? (0, c.jsx)('article', { ...e }) : 'section' === i ? (0, c.jsx)('section', { ...e }) : (0, c.jsx)('div', { ...e })),
      h = (0, c.jsx)(l, { className: (0, s.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, n), children: a });
     return e ? (0, c.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: h }) : h;
    },
    l = ({ appearance: e = 'medium', children: t, className: n }) => (0, c.jsx)('div', { className: (0, s.A)('cardgroup', `cardgroup--${e}`, n), children: t });
  },
  36444: (e, t, n) => {
   'use strict';
   n.d(t, { D: () => o });
   var r = n(68873),
    s = n(13526),
    c = n(75916),
    i = n(86070);
   const o = ({ state: e }) => {
    const t = (0, c.fX)(e);
    return (0, i.jsx)(r.KE, { className: (0, s.A)('estafette-badge', t && `estafette-badge--${t}`), children: e });
   };
  },
  42759: (e, t, n) => {
   'use strict';
   n.d(t, { e: () => o });
   var r = n(46563),
    s = n(30758),
    c = n(75916),
    i = n(86070);
   const o = ({ component: e }) => {
    const { title: t } = e,
     o = (0, c.fX)(t),
     a = s.lazy(() => n(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, i.jsx)(s.Suspense, { fallback: null, children: (0, i.jsx)(r.o, { omitH1: !0, headingLevel: 1, children: (0, i.jsx)(a, {}) }) });
   };
  },
  46563: (e, t, n) => {
   'use strict';
   n.d(t, { o: () => h });
   var r = n(85248),
    s = n(68873),
    c = n(86070);
   const i = (e, t) => {
     const n = new URL(t, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === n.protocol) {
      const { pathname: n, search: r, hash: s } = new URL(t, new URL(e, 'http://example.com/'));
      return n + r + s;
     }
     return n.toString();
    },
    o = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    a = (e) => ({ img: ({ src: t, ...n }) => (0, c.jsx)('img', { ...n, src: i(e, t), className: 'utrecht-img utrecht-img--fit' }) }),
    l = (e, t) => {
     if (e) {
      const e = { ...o[t - 1] };
      return (e.h1 = () => null), e;
     }
     return o[t];
    },
    h = ({ children: e, omitH1: t = !1, headingLevel: n = 1, baseUrl: s = '', components: i = {} }) => (0, c.jsx)(r.x, { components: { ...l(t, n), ...a(s), ...i }, children: e });
  },
  47451: (e, t, n) => {
   'use strict';
   n.r(t), n.d(t, { assets: () => b, component: () => T, contentTitle: () => f, default: () => N, description: () => _, frontMatter: () => k, issueNumber: () => w, metadata: () => r, title: () => x, toc: () => z });
   const r = JSON.parse('{"id":"componenten/heading-2/index","title":"Heading 2","description":"Koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat.","source":"@site/docs/componenten/heading-2/index.mdx","sourceDirName":"componenten/heading-2","slug":"/heading-2","permalink":"/heading-2","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-2/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 2","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 2","pagination_label":"Heading 2","description":"Koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat.","slug":"/heading-2","keywords":["caption","content","h2","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 1","permalink":"/heading-1"},"next":{"title":"Heading 3","permalink":"/heading-3"}}');
   var s,
    c,
    i,
    o,
    a,
    l,
    h,
    d = n(86070),
    u = n(85248),
    m = n(48976),
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
   const g = ({ title: e, titleId: t, ...n }) => j.createElement('svg', y({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst die iets groter is dan gebruikelijk, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': t }, n), e ? j.createElement('title', { id: t }, e) : null, s || (s = j.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), c || (c = j.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), i || (i = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 230v80' })), o || (o = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), a || (a = j.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), l || (l = j.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), h || (h = j.createElement('path', { fill: '#0A2750', d: 'M324.896 248.952v4.128l.064 4.064h1.056q2.752 0 4.32-2.24 1.6-2.272 1.6-6.432 0-4.224-1.6-6.432-1.568-2.208-4.288-2.208h-1.088l-.064 4v5.12m-7.84-9.248v-1.728h9.504q3.425 0 5.856 1.28 2.431 1.248 3.744 3.584 1.312 2.336 1.312 5.6 0 3.328-1.408 5.696t-4 3.616q-2.56 1.248-6.08 1.248h-8.928v-1.728l2.4-.256q.064-1.952.064-3.968v-9.12q0-2.016-.064-3.968zM339.523 259v-1.504l1.728-.384q.032-1.152.032-2.496v-3.872q0-1.312-.032-2.176 0-.896-.064-1.856l-1.984-.288v-1.248l6.72-2.144.544.352-.096 4.64v6.624q0 1.344.032 2.528l1.6.32V259zm4.256-18.336q-1.12 0-1.92-.704a2.38 2.38 0 0 1-.8-1.824q0-1.12.8-1.824.8-.736 1.92-.736t1.92.736q.8.704.8 1.824a2.38 2.38 0 0 1-.8 1.824q-.801.704-1.92.704m11.885 18.816q-2.145 0-3.36-1.024-1.216-1.056-1.216-3.424v-1.536q.032-.736.032-1.664v-6.112h-2.08v-1.888l2.368-.32 1.6-4.48h3.264l-.064 4.512h3.36v2.176h-3.36v8.96q0 1.12.448 1.664.48.512 1.184.512.831 0 1.728-.704l.8.768a4.64 4.64 0 0 1-1.792 1.888q-1.12.672-2.912.672m12.296-.48v-1.504l1.728-.384q.032-1.152.032-2.496v-3.872q0-1.312-.032-2.176 0-.896-.064-1.856l-1.984-.288v-1.248l6.72-2.144.544.352-.096 4.64v6.624q0 1.344.032 2.528l1.6.32V259zm4.256-18.336q-1.12 0-1.92-.704a2.38 2.38 0 0 1-.8-1.824q0-1.12.8-1.824.8-.736 1.92-.736t1.92.736q.8.704.8 1.824a2.38 2.38 0 0 1-.8 1.824q-.8.704-1.92.704m11.437 18.816q-3.04 0-5.568-1.472l.096-3.904h2.56l.544 3.168q.576.224 1.152.352.576.096 1.248.096 1.375 0 2.112-.448.736-.48.736-1.44a1.75 1.75 0 0 0-.544-1.28q-.544-.544-2.144-.992l-1.728-.512q-1.856-.544-2.88-1.76-.992-1.216-.992-3.008 0-2.208 1.728-3.712 1.728-1.536 4.96-1.536 1.409 0 2.592.352 1.216.32 2.464.96l-.224 3.488h-2.56l-.64-2.752q-.672-.256-1.76-.256t-1.76.448q-.64.449-.64 1.344 0 .64.512 1.152.512.48 2.176.992l1.568.448q2.272.672 3.264 1.92t.992 3.04q0 2.528-1.952 3.936-1.92 1.376-5.312 1.376m23.71-14.784q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368-.639-.768-1.536-.768m.064 14.784q-2.336 0-4.128-.96a7.16 7.16 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.217-1.855 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.112 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.528 1.376 3.744 1.248 1.184 2.912 1.184 1.313 0 2.24-.48a6.7 6.7 0 0 0 1.632-1.248l1.12 1.024q-.991 1.888-2.688 2.816-1.695.928-4.032.928m16.624-14.784q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368t-1.536-.768m.064 14.784q-2.337 0-4.128-.96a7.14 7.14 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.215-1.855 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.111 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.528 1.376 3.744 1.248 1.184 2.912 1.184 1.311 0 2.24-.48a6.8 6.8 0 0 0 1.632-1.248l1.12 1.024q-.993 1.888-2.688 2.816-1.697.928-4.032.928m8.687-.48v-1.504l1.728-.384q.033-1.152.032-2.496v-4.192q0-1.312-.032-2.016a26 26 0 0 0-.064-1.696l-1.952-.288v-1.248l6.304-2.144.576.352.192 2.304q1.248-1.472 2.464-2.048a6 6 0 0 1 2.656-.608q2.08 0 3.328 1.376 1.28 1.375 1.28 4.128v6.144q0 1.313.032 2.496l1.6.32V259h-8.448v-1.504l1.664-.352q.032-1.184.032-2.496v-5.728q0-1.536-.416-2.144-.415-.64-1.344-.64-1.248 0-2.752 1.152v7.36q0 1.344.032 2.528l1.504.32V259zm36.291-14.048v-1.408h6.048v1.408l-1.856.352-5.28 13.76h-2.432l-5.76-13.792-1.568-.32v-1.408h9.088v1.408l-2.016.416 3.008 8.192 2.784-8.224zm14.432 14.528q-2.496 0-4.32-1.024a7.25 7.25 0 0 1-2.816-2.912q-.992-1.888-.992-4.352t1.056-4.288a7.7 7.7 0 0 1 2.944-2.848q1.856-1.024 4.128-1.024t4.096.992a7.4 7.4 0 0 1 2.944 2.848q1.088 1.824 1.088 4.32t-.992 4.352a7.26 7.26 0 0 1-2.816 2.912q-1.824 1.024-4.32 1.024m0-1.664q1.344 0 2.016-1.568t.672-4.96q0-3.424-.672-4.992t-2.016-1.568q-1.377 0-2.048 1.568-.672 1.567-.672 4.992 0 3.392.672 4.96.671 1.568 2.048 1.568m18.312 1.664q-2.496 0-4.32-1.024a7.26 7.26 0 0 1-2.816-2.912q-.992-1.888-.992-4.352t1.056-4.288a7.7 7.7 0 0 1 2.944-2.848q1.857-1.024 4.128-1.024t4.096.992a7.4 7.4 0 0 1 2.944 2.848q1.089 1.824 1.088 4.32t-.992 4.352a7.25 7.25 0 0 1-2.816 2.912q-1.824 1.024-4.32 1.024m0-1.664q1.344 0 2.016-1.568t.672-4.96q0-3.424-.672-4.992t-2.016-1.568q-1.376 0-2.048 1.568-.672 1.567-.672 4.992 0 3.392.672 4.96t2.048 1.568m9.902 1.184v-1.504l1.76-.352q.032-1.184.032-2.528v-4.224q0-.896-.032-1.472 0-.576-.032-1.056 0-.512-.032-1.152l-1.952-.288v-1.248l6.304-2.144.576.352.288 3.776q.672-2.047 1.888-3.072 1.216-1.056 2.4-1.056 1.056 0 1.824.608.768.576.96 1.76-.032 1.248-.672 1.952-.64.672-1.6.672-1.344 0-2.464-1.504l-.192-.256q-.704.672-1.312 1.696a8 8 0 0 0-.832 2.144v4.448q0 1.28.032 2.4l2.528.544V259zm14.158.032v-1.504l1.696-.352q.032-1.152.032-2.496v-15.872l-1.984-.256v-1.344l6.624-1.44.512.32-.128 4.48v4.512q2.016-2.048 4.64-2.048 1.76 0 3.168.928 1.407.896 2.24 2.72.864 1.792.864 4.448 0 2.592-.96 4.48-.96 1.856-2.528 2.88a6.07 6.07 0 0 1-3.36.992q-2.625 0-4.224-1.888l-.544 1.856zm9.056-13.216q-.609 0-1.152.256a5.2 5.2 0 0 0-1.056.672v9.152q.991.896 2.176.896 1.407 0 2.304-1.376.928-1.376.928-4.192 0-2.849-.896-4.128-.864-1.28-2.304-1.28m18.598-1.12q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368t-1.536-.768m.064 14.784q-2.337 0-4.128-.96a7.14 7.14 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.215-1.855 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.111 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.528 1.376 3.744 1.247 1.184 2.912 1.184 1.311 0 2.24-.48a6.8 6.8 0 0 0 1.632-1.248l1.12 1.024q-.993 1.888-2.688 2.816t-4.032.928m16.623-14.784q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.417-.48.416-1.568 0-1.6-.64-2.368-.639-.768-1.536-.768m.064 14.784q-2.336 0-4.128-.96a7.16 7.16 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.217-1.855 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.112 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.528 1.376 3.744 1.248 1.184 2.912 1.184 1.313 0 2.24-.48a6.7 6.7 0 0 0 1.632-1.248l1.12 1.024q-.991 1.888-2.688 2.816-1.695.928-4.032.928m8.093-.48v-1.504l1.76-.384q.032-1.216.032-2.432.032-1.216.032-2.4v-13.408l-1.984-.32v-1.344l6.72-1.44.512.32-.128 4.48v14.144l.064 2.432 1.76.352V259zm15.847-7.648q0 2.624.928 4 .929 1.344 2.4 1.344 1.089 0 1.984-.736v-9.536q-.864-.672-1.888-.672-1.471 0-2.464 1.376-.96 1.375-.96 4.224m5.728 8-.256-1.824q-1.856 1.952-4.512 1.952a6 6 0 0 1-3.264-.928q-1.44-.928-2.272-2.72-.832-1.824-.832-4.416 0-2.624.992-4.48 1.025-1.888 2.624-2.88 1.632-1.024 3.424-1.024 1.248 0 2.176.448a5.2 5.2 0 0 1 1.696 1.248v-5.856l-2.24-.32v-1.344l6.752-1.44.512.32-.128 4.48v16.608l1.568.32V259zm-273.346 25.6v-1.408h6.048v1.408l-1.856.352-5.28 13.76h-2.432l-5.76-13.792-1.568-.32v-1.408h9.088v1.408l-2.016.416 3.008 8.192 2.784-8.224zm18.687 14.496q-2.784 0-3.52-2.304-1.023 1.087-1.984 1.728-.927.608-2.592.608-1.855 0-3.04-1.056-1.152-1.056-1.152-3.04 0-1.152.512-2.08t1.856-1.728 3.808-1.504q.48-.16 1.12-.32t1.312-.32v-1.056q0-2.144-.544-2.912-.512-.768-2.048-.768h-.416q-.192 0-.448.032l-.16 1.408q-.031 1.568-.736 2.272-.672.704-1.6.704-1.76 0-2.144-1.6.129-1.984 2.016-3.232t5.344-1.248q3.072 0 4.384 1.408 1.344 1.408 1.344 4.64v7.168q0 .928.704.928a.95.95 0 0 0 .48-.128q.225-.16.48-.576l.864.576q-.576 1.28-1.504 1.856-.896.544-2.336.544m-7.552-4.896q0 1.184.544 1.76a1.88 1.88 0 0 0 2.112.416q.384-.16 1.216-.736v-5.184a13 13 0 0 0-.832.288 8 8 0 0 0-.672.256q-1.088.448-1.728 1.28-.64.8-.64 1.92M349.927 299v-1.504l1.728-.384q.033-1.152.032-2.496v-4.192q0-1.312-.032-2.016a26 26 0 0 0-.064-1.696l-1.952-.288v-1.248l6.304-2.144.576.352.192 2.304q1.248-1.472 2.464-2.048a6 6 0 0 1 2.656-.608q2.08 0 3.328 1.376 1.28 1.375 1.28 4.128v6.144q0 1.313.032 2.496l1.6.32V299h-8.448v-1.504l1.664-.352q.032-1.183.032-2.496v-5.728q0-1.536-.416-2.144-.415-.64-1.344-.64-1.248 0-2.752 1.152v7.36q0 1.344.032 2.528l1.504.32V299zm34.499-14.304q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368t-1.536-.768m.064 14.784q-2.337 0-4.128-.96a7.14 7.14 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.215-1.856 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.111 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.527 1.376 3.744 1.248 1.184 2.912 1.184 1.311 0 2.24-.48a6.8 6.8 0 0 0 1.632-1.248l1.12 1.024q-.993 1.888-2.688 2.816-1.697.928-4.032.928m16.623-14.784q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368-.639-.768-1.536-.768m.064 14.784q-2.336 0-4.128-.96a7.16 7.16 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.217-1.856 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.112 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.527 1.376 3.744 1.248 1.184 2.912 1.184 1.313 0 2.24-.48a6.7 6.7 0 0 0 1.632-1.248l1.12 1.024q-.991 1.888-2.688 2.816-1.695.928-4.032.928m8.688-.48v-1.504l1.728-.384q.032-1.152.032-2.496v-4.192q0-1.312-.032-2.016 0-.736-.064-1.696l-1.952-.288v-1.248l6.304-2.144.576.352.192 2.304q1.248-1.472 2.464-2.048a6 6 0 0 1 2.656-.608q2.08 0 3.328 1.376 1.28 1.375 1.28 4.128v6.144q0 1.313.032 2.496l1.6.32V299h-8.448v-1.504l1.664-.352q.032-1.183.032-2.496v-5.728q0-1.536-.416-2.144-.417-.64-1.344-.64-1.248 0-2.752 1.152v7.36q0 1.344.032 2.528l1.504.32V299zm26.562 0v-1.504l1.728-.384q.033-1.152.032-2.496v-15.744l-1.984-.32v-1.344l6.624-1.44.512.32-.128 4.48v5.152q1.28-1.504 2.464-2.08a5.8 5.8 0 0 1 2.624-.608q2.112 0 3.392 1.376t1.28 4.128v6.144q0 1.313.032 2.496l1.6.32V299h-8.416v-1.504l1.664-.352q.032-1.183.032-2.496v-5.728q0-1.568-.384-2.176-.351-.608-1.344-.608-.64 0-1.376.384t-1.472 1.088v7.04q0 1.344.032 2.528l1.504.32V299zm27.686-14.304q-.896 0-1.664 1.12-.736 1.088-.832 4.032h2.72q1.152 0 1.536-.448.416-.48.416-1.568 0-1.6-.64-2.368-.639-.768-1.536-.768m.064 14.784q-2.336 0-4.128-.96a7.16 7.16 0 0 1-2.816-2.816q-1.024-1.856-1.024-4.416 0-2.688 1.184-4.512 1.217-1.856 3.104-2.784a8.6 8.6 0 0 1 3.936-.96q2.112 0 3.584.896a5.8 5.8 0 0 1 2.272 2.432q.768 1.504.768 3.456a7 7 0 0 1-.192 1.696h-9.248q.16 2.527 1.376 3.744 1.248 1.184 2.912 1.184 1.313 0 2.24-.48a6.7 6.7 0 0 0 1.632-1.248l1.12 1.024q-.991 1.888-2.688 2.816-1.695.928-4.032.928m20.978-.032q-2.784 0-3.52-2.304-1.024 1.087-1.984 1.728-.929.608-2.592.608-1.856 0-3.04-1.056-1.152-1.056-1.152-3.04 0-1.152.512-2.08t1.856-1.728 3.808-1.504q.48-.16 1.12-.32t1.312-.32v-1.056q0-2.144-.544-2.912-.512-.768-2.048-.768h-.416q-.192 0-.448.032l-.16 1.408q-.032 1.568-.736 2.272-.672.704-1.6.704-1.76 0-2.144-1.6.128-1.984 2.016-3.232t5.344-1.248q3.072 0 4.384 1.408 1.344 1.408 1.344 4.64v7.168q0 .928.704.928a.95.95 0 0 0 .48-.128q.224-.16.48-.576l.864.576q-.576 1.28-1.504 1.856-.896.544-2.336.544m-7.552-4.896q0 1.184.544 1.76a1.88 1.88 0 0 0 2.112.416q.384-.16 1.216-.736v-5.184q-.416.127-.832.288a8 8 0 0 0-.672.256q-1.088.448-1.728 1.28-.64.8-.64 1.92m17.608-3.2q0 2.624.928 4 .928 1.344 2.4 1.344 1.088 0 1.984-.736v-9.536q-.864-.672-1.888-.672-1.472 0-2.464 1.376-.96 1.375-.96 4.224m5.728 8-.256-1.824q-1.856 1.952-4.512 1.952a6 6 0 0 1-3.264-.928q-1.44-.928-2.272-2.72-.832-1.824-.832-4.416 0-2.624.992-4.48 1.024-1.888 2.624-2.88 1.632-1.024 3.424-1.024 1.248 0 2.176.448a5.2 5.2 0 0 1 1.696 1.248v-5.856l-2.24-.32v-1.344l6.752-1.44.512.32-.128 4.48v16.608l1.568.32V299zm7.896-.352v-1.504l1.728-.384q.032-1.152.032-2.496v-3.872q0-1.312-.032-2.176 0-.896-.064-1.856l-1.984-.288v-1.248l6.72-2.144.544.352-.096 4.64v6.624q0 1.344.032 2.528l1.6.32V299zm4.256-18.336q-1.12 0-1.92-.704a2.38 2.38 0 0 1-.8-1.824q0-1.12.8-1.824.8-.736 1.92-.736t1.92.736q.8.703.8 1.824a2.38 2.38 0 0 1-.8 1.824q-.8.704-1.92.704M518.896 299v-1.504l1.728-.384q.032-1.152.032-2.496v-4.192q0-1.312-.032-2.016a26 26 0 0 0-.064-1.696l-1.952-.288v-1.248l6.304-2.144.576.352.192 2.304q1.248-1.472 2.464-2.048a6 6 0 0 1 2.656-.608q2.08 0 3.328 1.376 1.28 1.375 1.28 4.128v6.144q0 1.313.032 2.496l1.6.32V299h-8.448v-1.504l1.664-.352q.032-1.183.032-2.496v-5.728q0-1.536-.416-2.144-.415-.64-1.344-.64-1.248 0-2.752 1.152v7.36q0 1.344.032 2.528l1.504.32V299zm26.663-7.168q1.12 0 1.664-.992.576-.992.576-2.688t-.576-2.624q-.544-.96-1.6-.96-1.089 0-1.632.96-.544.96-.544 2.656t.512 2.688q.511.96 1.6.96m-4.256 9.824q0 1.408 1.056 2.048 1.056.672 3.232.672 2.4 0 3.616-.704t1.216-1.76q0-.704-.512-1.28-.513-.544-1.824-.544h-3.36q-1.76 0-2.912-.288a4.3 4.3 0 0 0-.384.864 3.4 3.4 0 0 0-.128.992m4.288-8.32q-1.665 0-2.912-.384a2.9 2.9 0 0 0-.384 1.472q0 .544.416.896.416.32 1.44.32h3.744q2.432 0 3.872.608 1.44.576 2.048 1.632.64 1.024.64 2.432 0 1.6-1.056 2.944-1.056 1.376-3.168 2.176-2.08.832-5.152.832-2.657 0-4.16-.544-1.505-.512-2.112-1.376t-.608-1.824q0-2.048 2.656-3.296-.993-.416-1.44-1.088a2.74 2.74 0 0 1-.416-1.472q0-1.12.64-2.112.672-1.024 1.856-2.048-1.313-.672-1.952-1.792-.64-1.12-.64-2.496 0-2.24 1.632-3.712 1.663-1.472 5.056-1.472 1.728 0 3.008.384t2.08 1.088l3.584-1.536.512.32v2.464h-3.04q.576 1.056.576 2.464 0 2.143-1.664 3.648-1.632 1.472-5.056 1.472' })));
   var v = n(42759),
    p = n(62254),
    q = n(50341);
   const k = { title: 'Heading 2', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 2', pagination_label: 'Heading 2', description: 'Koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat.', slug: '/heading-2', keywords: ['caption', 'content', 'h2', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    f = void 0,
    b = {},
    x = 'Heading 2',
    _ = 'Koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat.',
    w = 258,
    T = m.find((e) => e.number === w),
    z = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ];
   function A(e) {
    const t = { h2: 'h2', ...(0, u.R)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, d.jsx)(q.Fc, { component: T, headingLevel: 1, description: _ }), '\n', (0, d.jsx)(v.e, { component: T }), '\n', (0, d.jsx)(t.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, d.jsx)(p.H, { component: T, illustration: g }), '\n', (0, d.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, d.jsx)(q.VK, { component: T, headingLevel: 3 }), '\n', (0, d.jsx)(t.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, d.jsx)(q.mu, { component: T, headingLevel: 3 }), '\n', (0, d.jsx)(t.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }), '\n', (0, d.jsx)(q.$9, { component: T, headingLevel: 3 })] });
   }
   function N(e = {}) {
    const { wrapper: t } = { ...(0, u.R)(), ...e.components };
    return t ? (0, d.jsx)(t, { ...e, children: (0, d.jsx)(A, { ...e }) }) : A(e);
   }
  },
  50341: (e, t, n) => {
   'use strict';
   n.d(t, { VK: () => x, $9: () => w, mu: () => _, Fc: () => T });
   var r = n(14537),
    s = n(13526),
    c = n(74172),
    i = n(15089),
    o = n(28377),
    a = n(33648),
    l = n(83386),
    h = n(86070);
   const d = { figma: (0, h.jsx)(c.A, {}), github: (0, h.jsx)(i.A, {}), npm: (0, h.jsx)(o.A, {}), storybook: (0, h.jsx)(a.A, {}) },
    u = ({ brand: e }) => (0, h.jsx)(r.In, { children: d[e] || (0, h.jsx)(l.A, {}) });
   var m = n(14889),
    j = n(98274);
   const y = ({ checked: e, unchecked: t }) =>
    (0, h.jsx)(j.A, {
     fallback: (0, h.jsx)(h.Fragment, {}),
     children: () => {
      const r = n(83294).V6;
      return (0, h.jsx)(r, {
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
   var g = n(36444),
    v = n(98584),
    p = n(68873),
    q = n(51797);
   const k = ({ children: e }) => (0, h.jsx)('ul', { className: 'task-list', children: e }),
    f = ({ checked: e, children: t, title: n, description: r, headingLevel: c = 3 }) => (0, h.jsxs)('li', { className: (0, s.A)('task-list-item'), children: [(0, h.jsxs)('div', { className: (0, s.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, h.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, h.jsx)(q.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, h.jsxs)('div', { children: [(0, h.jsx)(p.DZ, { appearance: 'utrecht-heading-3', level: c, children: n }), r, t] })] });
   var b = n(75916);
   const x = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => b.f4.includes(e.id)),
      c = n && b.f4.map((e) => n.find((t) => t.id === e)).filter(Boolean);
     return e && (0, h.jsx)(r.If, { sections: c.map((n) => ({ className: (0, s.A)('definition-of-done', n && `definition-of-done--${(0, b.fX)(n.title)}`), headingLevel: t, expanded: !1, label: n ? `${n.title} - ${n.progress.value} van ${n.progress.max}` : '', body: n && (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(k, { children: n.tasks.map(({ checked: e, name: n, id: r }) => (0, h.jsx)(f, { headingLevel: t + 1, checked: e, title: n, description: (0, b.qZ)(r) }, r)) }), (0, h.jsx)(r.fz, { children: (0, h.jsxs)(r.N_, { href: `${n.url}?filterQuery=${e.title}`, children: [n.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    _ = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => !b.f4.includes(e.id));
     return e && n.length
      ? (0, h.jsx)(m.AC, {
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
            s = n?.value,
            c = (0, b.Pv)(e),
            i = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            o = e.tasks.filter(({ name: e, value: t }) => i.has(e) && URL.canParse(t) && 'https:' === new URL(t).protocol);
           return (0, h.jsx)(
            m.Zp,
            {
             className: 'implementation-card',
             children: (0, h.jsxs)(m.Wu, {
              children: [
               (0, h.jsx)(r.DZ, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, h.jsxs)(r.fz, { children: [(0, h.jsx)(y, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, h.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (o.length > 0 || c.length > 0) && (0, h.jsx)(r.DZ, { level: t + 1, children: 'Snel aan de slag' }),
               o.length > 0 &&
                (0, h.jsx)(h.Fragment, {
                 children: (0, h.jsx)(r.dk, {
                  links: o
                   .filter((e) => !!i.get(e.name))
                   .map((e) => {
                    const t = i.get(e.name);
                    return { children: t.desciption, icon: (0, h.jsx)(u, { brand: t.brand }), href: e.value };
                   }),
                 }),
                }),
               c.length > 0 && (0, h.jsx)(h.Fragment, { children: c.map(({ frameworkName: e, tasks: n }) => (0, h.jsxs)(h.Fragment, { children: [(0, h.jsxs)(r.DZ, { level: t + 2, children: [s, ' in ', e] }), (0, h.jsx)(r.dk, { links: n.map((e) => ({ children: e.description, icon: (0, h.jsx)(u, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, h.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    w = ({ component: e }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      n = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return e && (0, h.jsxs)(h.Fragment, { children: [(0, h.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, h.jsxs)(r.Xy, { children: [n ? (0, h.jsxs)(r.Er, { children: ['Vul de ', (0, h.jsx)(r.N_, { href: n, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, h.jsxs)(r.Er, { children: [(0, h.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, h.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, h.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, h.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    T = ({ component: e, headingLevel: t, description: n }) => {
     const s = e && b.bo[e.relayStep];
     return e && (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(v.p, { level: t, suffix: s && (0, h.jsx)(g.D, { state: s }), children: e.title }), (0, h.jsx)(r.fz, { lead: !0, children: n })] });
    };
  },
  51580: (e, t, n) => {
   var r = { './code-block-docs/docs/anatomy/anatomy.md': [46793, 46793], './code-docs/docs/anatomy/anatomy.md': [67733, 67733], './color-sample-docs/docs/anatomy/anatomy.md': [72723, 72723], './data-badge-docs/docs/anatomy/anatomy.md': [24343, 24343], './heading-1-docs/docs/anatomy/anatomy.md': [28456, 28456], './heading-2-docs/docs/anatomy/anatomy.md': [1572, 1572], './heading-3-docs/docs/anatomy/anatomy.md': [39512, 39512], './heading-4-docs/docs/anatomy/anatomy.md': [89948, 89948], './heading-5-docs/docs/anatomy/anatomy.md': [69896, 69896], './heading-6-docs/docs/anatomy/anatomy.md': [74572, 74572], './heading-docs/docs/anatomy/anatomy.md': [1259, 1259], './link-docs/docs/anatomy/anatomy.md': [5779, 5779], './mark-docs/docs/anatomy/anatomy.md': [96029, 96029], './number-badge-docs/docs/anatomy/anatomy.md': [86601, 86601], './paragraph-docs/docs/anatomy/anatomy.md': [13321, 13321], './skip-link-docs/docs/anatomy/anatomy.md': [68019, 68019] };
   function s(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     s = t[0];
    return n.e(t[1]).then(() => n(s));
   }
   (s.keys = () => Object.keys(r)), (s.id = 51580), (e.exports = s);
  },
  62254: (e, t, n) => {
   'use strict';
   n.d(t, { H: () => h });
   var r = n(46563),
    s = n(13526),
    c = n(30758),
    i = n(75916),
    o = n(86070);
   const a = ({ children: e }) => (0, o.jsx)('ol', { className: 'nlds-anatomy-list', children: e }),
    l = ({ children: e }) => (0, o.jsx)('li', { className: 'nlds-anatomy-list__item', children: e }),
    h = ({ component: e, illustration: t }) => {
     const { title: h } = e,
      d = (0, i.fX)(h),
      u = c.lazy(() => n(51580)(`./${d}-docs/docs/anatomy/anatomy.md`).catch(() => ({ default: () => null })));
     return (0, o.jsx)(c.Suspense, { fallback: null, children: (0, o.jsxs)('figure', { className: (0, s.A)('component-anatomy'), children: [t && (0, o.jsx)(t, { height: null, className: (0, s.A)('component-anatomy__illustration') }), t && u && (0, o.jsx)('figcaption', { children: (0, o.jsx)(r.o, { omitH1: !0, headingLevel: 1, components: { ol: ({ children: e }) => (0, o.jsx)(a, { children: e }), li: ({ children: e }) => (0, o.jsx)(l, { children: e }) }, children: (0, o.jsx)(u, {}) }) })] }) });
    };
  },
  74111: (e, t, n) => {
   var r = { './utrecht-alert_46.entry.js': [21118, 21118], './utrecht-backdrop.entry.js': [59925, 82306], './utrecht-body.entry.js': [48603, 70984], './utrecht-breadcrumb-nav.entry.js': [35894, 13513], './utrecht-checkbox.entry.js': [32406, 10025], './utrecht-column-layout.entry.js': [28996, 6615], './utrecht-contact-card-template.entry.js': [8469, 30850], './utrecht-custom-checkbox.entry.js': [74796, 52415], './utrecht-data-list-actions.entry.js': [50286, 27905], './utrecht-data-list-item.entry.js': [29722, 7341], './utrecht-data-list-key.entry.js': [22346, 99965], './utrecht-data-list-value.entry.js': [50348, 27967], './utrecht-data-list.entry.js': [26112, 3731], './utrecht-digid-button.entry.js': [3603, 25984], './utrecht-digid-logo.entry.js': [6128, 83747], './utrecht-eherkenning-logo.entry.js': [665, 23046], './utrecht-eidas-logo.entry.js': [31245, 53626], './utrecht-form-field-error-message.entry.js': [50061, 72442], './utrecht-form-toggle.entry.js': [20334, 97953], './utrecht-html-content.entry.js': [96334, 96334], './utrecht-icon-afspraak-maken.entry.js': [77059, 99440], './utrecht-icon-afval-container.entry.js': [40503, 62884], './utrecht-icon-afval-containerpas.entry.js': [82447, 4828], './utrecht-icon-afval-kalender.entry.js': [35440, 13059], './utrecht-icon-afval-pmd.entry.js': [9417, 31798], './utrecht-icon-afval-scheiden.entry.js': [85137, 7518], './utrecht-icon-afval.entry.js': [36373, 58754], './utrecht-icon-afvalkalender.entry.js': [51039, 73420], './utrecht-icon-alleen.entry.js': [51706, 29325], './utrecht-icon-arrow.entry.js': [96722, 19103], './utrecht-icon-auto.entry.js': [23336, 955], './utrecht-icon-begroting.entry.js': [61910, 39529], './utrecht-icon-bestemmingsplan.entry.js': [95466, 73085], './utrecht-icon-betaaldatum.entry.js': [34725, 57106], './utrecht-icon-bewijsstukken.entry.js': [86706, 64325], './utrecht-icon-bijstand.entry.js': [79608, 57227], './utrecht-icon-blad.entry.js': [23396, 1015], './utrecht-icon-bluesky.entry.js': [41230, 18849], './utrecht-icon-bouwproject.entry.js': [71527, 93908], './utrecht-icon-brandgevaar.entry.js': [78336, 55955], './utrecht-icon-brief-betalen.entry.js': [45975, 68356], './utrecht-icon-checkmark.entry.js': [41542, 19161], './utrecht-icon-chevron-down.entry.js': [19997, 42378], './utrecht-icon-chevron-left.entry.js': [3508, 81127], './utrecht-icon-chevron-right.entry.js': [32507, 54888], './utrecht-icon-chevron-up.entry.js': [41032, 18651], './utrecht-icon-close.entry.js': [67295, 89676], './utrecht-icon-college-b-w.entry.js': [49777, 72158], './utrecht-icon-container-bio.entry.js': [71539, 93920], './utrecht-icon-container-glas.entry.js': [29302, 6921], './utrecht-icon-container-groenafval.entry.js': [93948, 71567], './utrecht-icon-container-met-zak.entry.js': [1624, 79243], './utrecht-icon-container-papier.entry.js': [47694, 25313], './utrecht-icon-container-pmd.entry.js': [73840, 51459], './utrecht-icon-container-restafval.entry.js': [44453, 66834], './utrecht-icon-container-textiel.entry.js': [69930, 47549], './utrecht-icon-container.entry.js': [48100, 25719], './utrecht-icon-cross.entry.js': [50587, 72968], './utrecht-icon-dakloos.entry.js': [57056, 34675], './utrecht-icon-dementie.entry.js': [4326, 81945], './utrecht-icon-documenten.entry.js': [85193, 7574], './utrecht-icon-duurzaam.entry.js': [45600, 23219], './utrecht-icon-eenzaamheid.entry.js': [60650, 38269], './utrecht-icon-eikenprocessie.entry.js': [88400, 66019], './utrecht-icon-elektrisch-rijden.entry.js': [2720, 80339], './utrecht-icon-energie-vergoeding.entry.js': [26791, 49172], './utrecht-icon-energietransitie.entry.js': [34383, 56764], './utrecht-icon-error.entry.js': [57205, 79586], './utrecht-icon-evenementen.entry.js': [52447, 74828], './utrecht-icon-facebook.entry.js': [76311, 98692], './utrecht-icon-fiets.entry.js': [11770, 89389], './utrecht-icon-filter.entry.js': [17757, 40138], './utrecht-icon-geboorte.entry.js': [34206, 11825], './utrecht-icon-gebruiker-centraal.entry.js': [67230, 44849], './utrecht-icon-gebruiker-ingelogd.entry.js': [48305, 70686], './utrecht-icon-gegevenswoordenboek.entry.js': [73424, 51043], './utrecht-icon-geluid.entry.js': [11789, 34170], './utrecht-icon-gemeente-locatie.entry.js': [97085, 19466], './utrecht-icon-gemeenteraad.entry.js': [64741, 87122], './utrecht-icon-gereedschap.entry.js': [95044, 72663], './utrecht-icon-gezicht.entry.js': [29497, 51878], './utrecht-icon-gezin.entry.js': [26654, 4273], './utrecht-icon-glas-afval.entry.js': [60819, 83200], './utrecht-icon-glijbaan.entry.js': [18637, 41018], './utrecht-icon-grafiek.entry.js': [26546, 4165], './utrecht-icon-grofvuil-ophalen.entry.js': [58649, 81030], './utrecht-icon-grofvuil.entry.js': [35927, 58308], './utrecht-icon-hamburger-menu.entry.js': [12466, 90085], './utrecht-icon-herdenking.entry.js': [48810, 26429], './utrecht-icon-hondenbelasting.entry.js': [82480, 60099], './utrecht-icon-horeca.entry.js': [74919, 97300], './utrecht-icon-horecavergunning.entry.js': [61636, 39255], './utrecht-icon-huis-en-omgeving.entry.js': [41809, 64190], './utrecht-icon-huis.entry.js': [3444, 81063], './utrecht-icon-huishoudelijk-geweld.entry.js': [57590, 35209], './utrecht-icon-hulp-huishouden.entry.js': [43517, 65898], './utrecht-icon-hulp-vervoer.entry.js': [86248, 63867], './utrecht-icon-hulp-zorg.entry.js': [68565, 90946], './utrecht-icon-hulpmiddelen-gezin.entry.js': [57304, 34923], './utrecht-icon-hulpverlening.entry.js': [72714, 50333], './utrecht-icon-idee.entry.js': [91204, 68823], './utrecht-icon-informatie.entry.js': [96677, 19058], './utrecht-icon-information.entry.js': [43781, 66162], './utrecht-icon-innovatie.entry.js': [47394, 25013], './utrecht-icon-inspraak-inwoners.entry.js': [560, 78179], './utrecht-icon-instagram.entry.js': [20179, 42560], './utrecht-icon-kalender.entry.js': [31401, 53782], './utrecht-icon-kennis.entry.js': [63475, 85856], './utrecht-icon-kerstbomen.entry.js': [10601, 32982], './utrecht-icon-klachten.entry.js': [44359, 66740], './utrecht-icon-kroon.entry.js': [85264, 62883], './utrecht-icon-laadpaal.entry.js': [28283, 50664], './utrecht-icon-language.entry.js': [47513, 69894], './utrecht-icon-lantaarnpaal-oud.entry.js': [48383, 70764], './utrecht-icon-lantaarnpaal.entry.js': [12270, 89889], './utrecht-icon-leren.entry.js': [26235, 81473], './utrecht-icon-let-op.entry.js': [34432, 12051], './utrecht-icon-linkedin.entry.js': [62321, 84702], './utrecht-icon-list-check.entry.js': [14150, 91769], './utrecht-icon-list-number.entry.js': [66693, 89074], './utrecht-icon-list.entry.js': [8815, 31196], './utrecht-icon-loupe.entry.js': [48760, 26379], './utrecht-icon-markt.entry.js': [7224, 84843], './utrecht-icon-mastodon.entry.js': [18956, 96575], './utrecht-icon-melding-boom.entry.js': [49769, 72150], './utrecht-icon-melding-klacht.entry.js': [94525, 16906], './utrecht-icon-melding-openbareruimte.entry.js': [51554, 29173], './utrecht-icon-melding-verlichting.entry.js': [31913, 54294], './utrecht-icon-melding.entry.js': [95625, 18006], './utrecht-icon-menselijk.entry.js': [74647, 97028], './utrecht-icon-menu-dot-open.entry.js': [30823, 53204], './utrecht-icon-menu-dot.entry.js': [65842, 43461], './utrecht-icon-meterkast.entry.js': [74341, 96722], './utrecht-icon-milieu-ontheffing.entry.js': [30533, 52914], './utrecht-icon-milieu-zone.entry.js': [22919, 45300], './utrecht-icon-minus-vertical.entry.js': [11346, 88965], './utrecht-icon-minus.entry.js': [59951, 82332], './utrecht-icon-mobiliteit.entry.js': [22519, 44900], './utrecht-icon-natuur.entry.js': [77430, 55049], './utrecht-icon-nieuw-huis.entry.js': [50659, 5897], './utrecht-icon-nieuwsbrief.entry.js': [20472, 98091], './utrecht-icon-nummerbord.entry.js': [95490, 73109], './utrecht-icon-om-het-huis.entry.js': [77323, 99704], './utrecht-icon-omgeving.entry.js': [68789, 91170], './utrecht-icon-omgevingsvisie.entry.js': [43154, 20773], './utrecht-icon-omgevingswet.entry.js': [94058, 71677], './utrecht-icon-onderhoud.entry.js': [35703, 58084], './utrecht-icon-ondernemen.entry.js': [58848, 36467], './utrecht-icon-openingstijden.entry.js': [2560, 80179], './utrecht-icon-over-de-stad.entry.js': [65860, 43479], './utrecht-icon-overlijden.entry.js': [19583, 41964], './utrecht-icon-panden.entry.js': [40233, 62614], './utrecht-icon-park.entry.js': [41699, 64080], './utrecht-icon-parkeerkaart.entry.js': [50138, 27757], './utrecht-icon-parkeervergunning.entry.js': [48220, 25839], './utrecht-icon-parken.entry.js': [10284, 87903], './utrecht-icon-parkeren-bedrijven.entry.js': [63427, 85808], './utrecht-icon-parkeren-betaalautomaat.entry.js': [79079, 1460], './utrecht-icon-parkeren-betalen.entry.js': [45967, 68348], './utrecht-icon-parkeren.entry.js': [55019, 77400], './utrecht-icon-participatie-campagne.entry.js': [20493, 42874], './utrecht-icon-participatie-like.entry.js': [81042, 58661], './utrecht-icon-participatie-pitch.entry.js': [96203, 18584], './utrecht-icon-paspoort.entry.js': [70771, 93152], './utrecht-icon-presentatie.entry.js': [66819, 89200], './utrecht-icon-prijskaartje.entry.js': [50869, 73250], './utrecht-icon-read-aloud.entry.js': [29333, 51714], './utrecht-icon-rijbewijs.entry.js': [16388, 94007], './utrecht-icon-rioolheffing.entry.js': [67517, 89898], './utrecht-icon-rolstoel.entry.js': [69169, 91550], './utrecht-icon-schild-gemeente-utrecht.entry.js': [76081, 98462], './utrecht-icon-search.entry.js': [57891, 80272], './utrecht-icon-shoppen.entry.js': [82732, 60351], './utrecht-icon-sinterklaas.entry.js': [17030, 94649], './utrecht-icon-slechtziende-hoordende.entry.js': [69228, 46847], './utrecht-icon-sport-en-cultuur.entry.js': [98796, 76415], './utrecht-icon-sport-voetbal.entry.js': [31085, 53466], './utrecht-icon-sport.entry.js': [95485, 17866], './utrecht-icon-stookverbod.entry.js': [47079, 69460], './utrecht-icon-strand.entry.js': [39735, 62116], './utrecht-icon-strooien.entry.js': [92040, 69659], './utrecht-icon-subsidie-gezin.entry.js': [10719, 33100], './utrecht-icon-subsidie.entry.js': [39519, 61900], './utrecht-icon-t-shirt.entry.js': [32838, 10457], './utrecht-icon-threads.entry.js': [36194, 13813], './utrecht-icon-thuiswerken.entry.js': [99276, 76895], './utrecht-icon-toeslag.entry.js': [89064, 66683], './utrecht-icon-trein.entry.js': [43189, 65570], './utrecht-icon-trouwen.entry.js': [31467, 53848], './utrecht-icon-twitter.entry.js': [75360, 52979], './utrecht-icon-user.entry.js': [5632, 83251], './utrecht-icon-uw-wijk.entry.js': [2831, 25212], './utrecht-icon-vaccinatie.entry.js': [10772, 88391], './utrecht-icon-veilige-wijk.entry.js': [13306, 90925], './utrecht-icon-vergaderen.entry.js': [89164, 66783], './utrecht-icon-vergaderendigitaal.entry.js': [31109, 53490], './utrecht-icon-vergoeding.entry.js': [91097, 13478], './utrecht-icon-verhuizen.entry.js': [39473, 61854], './utrecht-icon-verkeerslicht.entry.js': [16718, 94337], './utrecht-icon-verkiezingen.entry.js': [28486, 6105], './utrecht-icon-verslaving.entry.js': [41840, 19459], './utrecht-icon-vervoersvoorziening.entry.js': [63517, 85898], './utrecht-icon-virus.entry.js': [69826, 47445], './utrecht-icon-vluchtelingen.entry.js': [77329, 99710], './utrecht-icon-voorzieningen-vervoer.entry.js': [44904, 22523], './utrecht-icon-vrijwilligerswerk.entry.js': [4045, 26426], './utrecht-icon-vuilnisbak.entry.js': [95691, 18072], './utrecht-icon-vuilniszak.entry.js': [48083, 70464], './utrecht-icon-vuurwerk.entry.js': [22418, 37], './utrecht-icon-wandelstok.entry.js': [84985, 7366], './utrecht-icon-warm.entry.js': [96434, 74053], './utrecht-icon-warning.entry.js': [39295, 61676], './utrecht-icon-werken.entry.js': [53643, 76024], './utrecht-icon-werkzaamheden.entry.js': [63301, 85682], './utrecht-icon-whatsapp.entry.js': [99673, 22054], './utrecht-icon-wonen-kosten.entry.js': [81423, 3804], './utrecht-icon-woning-zoeken.entry.js': [29431, 29431], './utrecht-icon-x.entry.js': [11711, 34092], './utrecht-icon-youtube.entry.js': [76330, 53949], './utrecht-icon-zelfstandig-wonen.entry.js': [52124, 29743], './utrecht-icon-zoom-minus.entry.js': [82693, 5074], './utrecht-icon-zoom-plus.entry.js': [59514, 59514], './utrecht-icon-zoomin.entry.js': [36851, 59232], './utrecht-icon-zoomout.entry.js': [63310, 40929], './utrecht-icon-zorg-huis.entry.js': [72095, 94476], './utrecht-icon-zweefpaal.entry.js': [83280, 60899], './utrecht-icon-zwemmen.entry.js': [53056, 30675], './utrecht-logo-button.entry.js': [23945, 46326], './utrecht-map-marker.entry.js': [65576, 43195], './utrecht-multiline-data.entry.js': [50201, 72582], './utrecht-nav-bar.entry.js': [70626, 48245], './utrecht-number-badge.entry.js': [44892, 22511], './utrecht-page-body.entry.js': [78181, 562], './utrecht-page-footer.entry.js': [7030, 84649], './utrecht-page-layout.entry.js': [57887, 80268], './utrecht-pagination.entry.js': [97911, 20292], './utrecht-preserve-data.entry.js': [31540, 9159], './utrecht-progress-list-item.entry.js': [57493, 2255], './utrecht-progress-list.entry.js': [30781, 53162], './utrecht-progress-sublist-item.entry.js': [70847, 93228], './utrecht-root.entry.js': [53667, 76048], './utrecht-sidenav.entry.js': [611, 22992], './utrecht-surface.entry.js': [61336, 38955], './utrecht-table-body.entry.js': [61912, 39531], './utrecht-table-caption.entry.js': [8296, 85915], './utrecht-table-cell.entry.js': [20760, 98379], './utrecht-table-container.entry.js': [63033, 85414], './utrecht-table-footer.entry.js': [59667, 82048], './utrecht-table-header-cell.entry.js': [2238, 79857], './utrecht-table-header.entry.js': [18705, 41086], './utrecht-table-row.entry.js': [17598, 95217], './utrecht-table.entry.js': [4667, 27048], './utrecht-textarea.entry.js': [7069, 29450], './utrecht-textbox.entry.js': [52563, 74944], './utrecht-top-task-link.entry.js': [61965, 84346], './utrecht-top-task-nav.entry.js': [29199, 29199] };
   function s(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     s = t[0];
    return n.e(t[1]).then(() => n(s));
   }
   (s.keys = () => Object.keys(r)), (s.id = 74111), (e.exports = s);
  },
  75916: (e, t, n) => {
   'use strict';
   n.d(t, { B2: () => d, B_: () => g, GT: () => q, KF: () => h, Pc: () => o, Pv: () => j, Rc: () => k, bo: () => r, eQ: () => v, f4: () => i, fX: () => s, kD: () => p, mJ: () => m, o_: () => y, qZ: () => c });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    c = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    i = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
   function a(e) {
    return Array.from(new Set(e));
   }
   const l = (e) => {
     const t = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
     return [...e].sort((e, n) => t.indexOf(e) - t.indexOf(n));
    },
    h = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return l(a(t));
    },
    d = (e, t) => m(e).includes(t),
    u = (e) => {
     const t = / URL \(([^)]+)\)/;
     return l(a(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    m = (e) => l(a(e.projects.flatMap((e) => u(e)))),
    j = (e) => {
     const t = u(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const r = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: r, id: s, value: c }) => {
        const i = /^(.+) URL/.exec(r)[1],
         o = 'Storybook' === i ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${i}`;
        return { brand: i.toLowerCase(), name: r, id: s, value: c, description: o };
       });
      return { frameworkName: t, tasks: r };
     });
    },
    y = (e) => e.join('.'),
    g = (e) => '--' + e.join('-'),
    v = (e, t) => t.reduce((e, t) => e?.[t], e);
   function p(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? p(e[n], [...t, n]) : []));
   }
   function q(e) {
    const t = new Map();
    function n(e) {
     return t.has(e) || t.set(e, y(e)), t.get(e);
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   function k(e) {
    const t = {};
    for (const n of e) {
     let e = t;
     for (const t of n) e[t] || (e[t] = {}), (e = e[t]);
    }
    return t;
   }
  },
  82839: (e, t, n) => {
   var r = { './code-block-docs/docs/aliases.md': [23918, 23918], './code-docs/docs/aliases.md': [33874, 33874], './color-sample-docs/docs/aliases.md': [44052, 44052], './data-badge-docs/docs/aliases.md': [58448, 58448], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [57308, 57308], './link-docs/docs/aliases.md': [98100, 98100], './mark-docs/docs/aliases.md': [22314, 22314], './number-badge-docs/docs/aliases.md': [78990, 78990], './paragraph-docs/docs/aliases.md': [52910, 52910], './skip-link-docs/docs/aliases.md': [6196, 6196] };
   function s(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     s = t[0];
    return n.e(t[1]).then(() => n(s));
   }
   (s.keys = () => Object.keys(r)), (s.id = 82839), (e.exports = s);
  },
  98584: (e, t, n) => {
   'use strict';
   n.d(t, { p: () => c });
   var r = n(13526),
    s = n(86070);
   const c = ({ children: e, className: t, level: n = 1, suffix: c, ...i }) => (0, s.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${n}`, t), ...i, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), c && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [c ? ' ' : '', c] })] });
  },
 },
]);
