(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [93787],
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
    d = ({ appearance: e = 'large', children: n, className: a }) => (0, i.jsx)('div', { className: (0, l.A)('ma-cardgroup', `ma-cardgroup--${e}`, a), children: n });
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
  41895(e, n, a) {
   'use strict';
   (a.r(n), a.d(n, { assets: () => k, component: () => F, contentTitle: () => x, default: () => _, description: () => T, frontMatter: () => q, issueNumber: () => D, metadata: () => t, title: () => j, toc: () => N }));
   const t = JSON.parse('{"id":"componenten/heading-6/index","title":"Heading 6","description":"Koptekst die in de koppenstructuur op het zesde niveau staat.","source":"@site/docs/componenten/heading-6/index.mdx","sourceDirName":"componenten/heading-6","slug":"/heading-6","permalink":"/heading-6","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-6/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 6","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 6","pagination_label":"Heading 6","description":"Koptekst die in de koppenstructuur op het zesde niveau staat.","issue_number":262,"slug":"/heading-6","keywords":["caption","content","h6","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 5","permalink":"/heading-5"},"next":{"title":"Heading Group","permalink":"/heading-group"}}');
   var l,
    i,
    s,
    o,
    r,
    d,
    g,
    u = a(86070),
    m = a(18439),
    c = a(82461),
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
   const v = ({ title: e, titleId: n, ...a }) => h.createElement('svg', p({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': n }, a), e ? h.createElement('title', { id: n }, e) : null, l || (l = h.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = h.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), s || (s = h.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 259v22' })), o || (o = h.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), r || (r = h.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), d || (d = h.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), g || (g = h.createElement('path', { fill: '#0A2750', d: 'M319.892 270.104v1.806l.028 1.778h.462q1.204 0 1.89-.98.7-.995.7-2.814 0-1.848-.7-2.814-.686-.966-1.876-.966h-.476l-.028 1.75v2.24m-3.43-4.046v-.756h4.158q1.499 0 2.562.56a3.86 3.86 0 0 1 1.638 1.568q.574 1.022.574 2.45 0 1.456-.616 2.492a4 4 0 0 1-1.75 1.582q-1.12.546-2.66.546h-3.906v-.756l1.05-.112q.028-.854.028-1.736v-3.99q0-.882-.028-1.736zm9.829 8.442v-.658l.756-.168q.014-.504.014-1.092v-1.694q0-.574-.014-.952 0-.392-.028-.812l-.868-.126v-.546l2.94-.938.238.154-.042 2.03v2.898q0 .588.014 1.106l.7.14v.658zm1.862-8.022q-.49 0-.84-.308a1.04 1.04 0 0 1-.35-.798q0-.49.35-.798.35-.322.84-.322t.84.322q.35.307.35.798 0 .476-.35.798a1.23 1.23 0 0 1-.84.308m5.2 8.232q-.939 0-1.47-.448-.532-.462-.532-1.498v-.672q.014-.322.014-.728v-2.674h-.91v-.826l1.036-.14.7-1.96h1.428l-.028 1.974h1.47v.952h-1.47v3.92q0 .49.196.728.21.224.518.224.363 0 .756-.308l.35.336q-.28.532-.784.826-.49.294-1.274.294m5.38-.21v-.658l.756-.168q.014-.504.014-1.092v-1.694q0-.574-.014-.952 0-.392-.028-.812l-.868-.126v-.546l2.94-.938.238.154-.042 2.03v2.898q0 .588.014 1.106l.7.14v.658zm1.862-8.022q-.49 0-.84-.308a1.04 1.04 0 0 1-.35-.798q0-.49.35-.798.35-.322.84-.322.489 0 .84.322.35.307.35.798 0 .476-.35.798a1.23 1.23 0 0 1-.84.308m5.003 8.232a4.76 4.76 0 0 1-2.436-.644l.042-1.708h1.12l.238 1.386q.252.098.504.154.252.042.546.042.603 0 .924-.196.322-.21.322-.63a.77.77 0 0 0-.238-.56q-.237-.238-.938-.434l-.756-.224q-.811-.238-1.26-.77-.434-.532-.434-1.316 0-.966.756-1.624.757-.672 2.17-.672.616 0 1.134.154.532.14 1.078.42l-.098 1.526h-1.12l-.28-1.204q-.294-.112-.77-.112t-.77.196q-.28.197-.28.588 0 .28.224.504.225.21.952.434l.686.196q.995.294 1.428.84.434.546.434 1.33 0 1.106-.854 1.722-.84.602-2.324.602m10.373-6.468q-.392 0-.728.49-.321.476-.364 1.764h1.19q.504 0 .672-.196.183-.21.182-.686 0-.7-.28-1.036-.279-.336-.672-.336m.028 6.468q-1.021 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.447-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.575 0 .98-.21.406-.224.714-.546l.49.448q-.434.826-1.176 1.232-.741.406-1.764.406m7.273-6.468q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.183-.21.182-.686 0-.7-.28-1.036-.279-.336-.672-.336m.028 6.468q-1.022 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.447-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.575 0 .98-.21.406-.224.714-.546l.49.448q-.433.826-1.176 1.232-.741.406-1.764.406m3.801-.21v-.658l.756-.168q.014-.504.014-1.092v-1.834q0-.575-.014-.882 0-.322-.028-.742l-.854-.126v-.546l2.758-.938.252.154.084 1.008q.546-.644 1.078-.896a2.6 2.6 0 0 1 1.162-.266q.91 0 1.456.602.56.601.56 1.806v2.688q0 .575.014 1.092l.7.14v.658h-3.696v-.658l.728-.154q.014-.518.014-1.092v-2.506q0-.672-.182-.938-.182-.28-.588-.28-.546 0-1.204.504v3.22q0 .588.014 1.106l.658.14v.658zm15.877-6.146v-.616h2.646v.616l-.812.154-2.31 6.02h-1.064l-2.52-6.034-.686-.14v-.616h3.976v.616l-.882.182 1.316 3.584 1.218-3.598zm6.314 6.356q-1.092 0-1.89-.448a3.17 3.17 0 0 1-1.232-1.274q-.434-.826-.434-1.904t.462-1.876a3.4 3.4 0 0 1 1.288-1.246 3.67 3.67 0 0 1 1.806-.448q.994 0 1.792.434a3.24 3.24 0 0 1 1.288 1.246q.476.798.476 1.89t-.434 1.904-1.232 1.274q-.798.448-1.89.448m0-.728q.588 0 .882-.686t.294-2.17q0-1.498-.294-2.184t-.882-.686q-.602 0-.896.686t-.294 2.184q0 1.484.294 2.17t.896.686m8.012.728q-1.092 0-1.89-.448a3.17 3.17 0 0 1-1.232-1.274q-.435-.826-.434-1.904 0-1.078.462-1.876a3.37 3.37 0 0 1 1.288-1.246 3.67 3.67 0 0 1 1.806-.448q.994 0 1.792.434.811.434 1.288 1.246.476.798.476 1.89t-.434 1.904-1.232 1.274q-.798.448-1.89.448m0-.728q.588 0 .882-.686t.294-2.17q0-1.498-.294-2.184t-.882-.686q-.602 0-.896.686t-.294 2.184q0 1.484.294 2.17.293.686.896.686m4.332.518v-.658l.77-.154q.014-.518.014-1.106v-1.848q0-.392-.014-.644 0-.252-.014-.462 0-.224-.014-.504l-.854-.126v-.546l2.758-.938.252.154.126 1.652q.294-.895.826-1.344.531-.462 1.05-.462.462 0 .798.266.336.252.42.77-.015.546-.294.854a.93.93 0 0 1-.7.294q-.589 0-1.078-.658l-.084-.112a3.4 3.4 0 0 0-.574.742 3.5 3.5 0 0 0-.364.938v1.946q0 .56.014 1.05l1.106.238v.658zm6.194.014v-.658l.742-.154q.014-.504.014-1.092v-6.944l-.868-.112v-.588l2.898-.63.224.14-.056 1.96v1.974q.882-.896 2.03-.896.77 0 1.386.406.615.392.98 1.19.378.784.378 1.946 0 1.134-.42 1.96-.42.811-1.106 1.26a2.66 2.66 0 0 1-1.47.434q-1.149 0-1.848-.826l-.238.812zm3.962-5.782a1.2 1.2 0 0 0-.504.112 2.3 2.3 0 0 0-.462.294v4.004q.433.392.952.392.615 0 1.008-.602.405-.602.406-1.834 0-1.247-.392-1.806-.378-.56-1.008-.56m8.136-.49q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.183-.21.182-.686 0-.7-.28-1.036-.279-.336-.672-.336m.028 6.468q-1.022 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.447-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.575 0 .98-.21.407-.224.714-.546l.49.448q-.433.826-1.176 1.232-.741.406-1.764.406m7.273-6.468q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.183-.21.182-.686 0-.7-.28-1.036-.279-.336-.672-.336m.028 6.468q-1.022 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.447-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.575 0 .98-.21.406-.224.714-.546l.49.448q-.433.826-1.176 1.232-.741.406-1.764.406m3.541-.21v-.658l.77-.168q.014-.532.014-1.064.014-.532.014-1.05v-5.866l-.868-.14v-.588l2.94-.63.224.14-.056 1.96v6.188l.028 1.064.77.154v.658zm6.933-3.346q0 1.148.406 1.75.406.588 1.05.588.476 0 .868-.322v-4.172a1.3 1.3 0 0 0-.826-.294q-.644 0-1.078.602-.42.602-.42 1.848m2.506 3.5-.112-.798q-.812.854-1.974.854-.785 0-1.428-.406-.63-.406-.994-1.19-.364-.798-.364-1.932 0-1.148.434-1.96.448-.827 1.148-1.26a2.77 2.77 0 0 1 1.498-.448q.546 0 .952.196.406.181.742.546v-2.562l-.98-.14v-.588l2.954-.63.224.14-.056 1.96v7.266l.686.14v.658zm10.677-6.3v-.616h2.646v.616l-.812.154-2.31 6.02h-1.064l-2.52-6.034-.686-.14v-.616h3.976v.616l-.882.182 1.316 3.584 1.218-3.598zm8.175 6.342q-1.218 0-1.54-1.008a5 5 0 0 1-.868.756q-.405.266-1.134.266-.811 0-1.33-.462-.504-.462-.504-1.33 0-.504.224-.91.225-.406.812-.756t1.666-.658q.21-.07.49-.14t.574-.14v-.462q0-.938-.238-1.274-.224-.336-.896-.336h-.182a2 2 0 0 0-.196.014l-.07.616q-.013.686-.322.994a.94.94 0 0 1-.7.308q-.77 0-.938-.7.057-.868.882-1.414.826-.546 2.338-.546 1.345 0 1.918.616.588.616.588 2.03v3.136q0 .406.308.406a.4.4 0 0 0 .21-.056.9.9 0 0 0 .21-.252l.378.252q-.252.56-.658.812-.392.238-1.022.238m-3.304-2.142q0 .518.238.77a.82.82 0 0 0 .924.182q.168-.07.532-.322v-2.268a5 5 0 0 0-.364.126q-.168.056-.294.112a1.8 1.8 0 0 0-.756.56q-.28.35-.28.84m5.324 1.946v-.658l.756-.168q.014-.504.014-1.092v-1.834q0-.575-.014-.882 0-.322-.028-.742l-.854-.126v-.546l2.758-.938.252.154.084 1.008q.546-.644 1.078-.896a2.6 2.6 0 0 1 1.162-.266q.91 0 1.456.602.56.601.56 1.806v2.688q0 .575.014 1.092l.7.14v.658h-3.696v-.658l.728-.154q.014-.518.014-1.092v-2.506q0-.672-.182-.938-.183-.28-.588-.28-.547 0-1.204.504v3.22q0 .588.014 1.106l.658.14v.658zm15.093-6.258q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.182-.21.182-.686 0-.7-.28-1.036t-.672-.336m.028 6.468q-1.022 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.448-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.574 0 .98-.21.407-.224.714-.546l.49.448q-.434.826-1.176 1.232-.743.406-1.764.406m7.273-6.468q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.182-.21.182-.686 0-.7-.28-1.036t-.672-.336m.028 6.468q-1.023 0-1.806-.42a3.1 3.1 0 0 1-1.232-1.232q-.448-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218q.825-.42 1.722-.42.923 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.573 0 .98-.21.405-.224.714-.546l.49.448q-.435.826-1.176 1.232-.743.406-1.764.406m3.8-.21v-.658l.756-.168q.014-.504.014-1.092v-1.834q0-.575-.014-.882 0-.322-.028-.742l-.854-.126v-.546l2.758-.938.252.154.084 1.008q.546-.644 1.078-.896a2.6 2.6 0 0 1 1.162-.266q.91 0 1.456.602.56.601.56 1.806v2.688q0 .575.014 1.092l.7.14v.658h-3.696v-.658l.728-.154q.014-.518.014-1.092v-2.506q0-.672-.182-.938-.181-.28-.588-.28-.546 0-1.204.504v3.22q0 .588.014 1.106l.658.14v.658zm11.622 0v-.658l.756-.168q.014-.504.014-1.092v-6.888l-.868-.14v-.588l2.898-.63.224.14-.056 1.96v2.254q.56-.658 1.078-.91a2.5 2.5 0 0 1 1.148-.266q.924 0 1.484.602.56.601.56 1.806v2.688q0 .575.014 1.092l.7.14v.658h-3.682v-.658l.728-.154q.014-.518.014-1.092v-2.506q0-.686-.168-.952-.154-.266-.588-.266-.28 0-.602.168-.323.168-.644.476v3.08q0 .588.014 1.106l.658.14v.658zm12.112-6.258q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.183-.21.182-.686 0-.7-.28-1.036-.279-.336-.672-.336m.028 6.468q-1.022 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.447-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.575 0 .98-.21.407-.224.714-.546l.49.448q-.433.826-1.176 1.232-.741.406-1.764.406m9.178-.014q-1.218 0-1.54-1.008a5.2 5.2 0 0 1-.868.756q-.406.266-1.134.266-.812 0-1.33-.462-.504-.462-.504-1.33 0-.504.224-.91t.812-.756 1.666-.658q.21-.07.49-.14t.574-.14v-.462q0-.938-.238-1.274-.224-.336-.896-.336h-.182a2 2 0 0 0-.196.014l-.07.616q-.014.686-.322.994a.94.94 0 0 1-.7.308q-.77 0-.938-.7.056-.868.882-1.414t2.338-.546q1.344 0 1.918.616.588.616.588 2.03v3.136q0 .406.308.406a.4.4 0 0 0 .21-.056.9.9 0 0 0 .21-.252l.378.252q-.252.56-.658.812-.392.238-1.022.238m-3.304-2.142q0 .518.238.77a.82.82 0 0 0 .924.182 3.5 3.5 0 0 0 .532-.322v-2.268a5 5 0 0 0-.364.126q-.168.056-.294.112a1.8 1.8 0 0 0-.756.56 1.3 1.3 0 0 0-.28.84m7.703-1.4q0 1.148.406 1.75.406.588 1.05.588.477 0 .868-.322v-4.172a1.3 1.3 0 0 0-.826-.294q-.643 0-1.078.602-.42.602-.42 1.848m2.506 3.5-.112-.798q-.812.854-1.974.854-.783 0-1.428-.406-.63-.406-.994-1.19-.364-.798-.364-1.932 0-1.148.434-1.96.449-.827 1.148-1.26a2.78 2.78 0 0 1 1.498-.448q.547 0 .952.196.406.181.742.546v-2.562l-.98-.14v-.588l2.954-.63.224.14-.056 1.96v7.266l.686.14v.658zm3.455-.154v-.658l.756-.168q.014-.504.014-1.092v-1.694q0-.574-.014-.952 0-.392-.028-.812l-.868-.126v-.546l2.94-.938.238.154-.042 2.03v2.898q0 .588.014 1.106l.7.14v.658zm1.862-8.022q-.49 0-.84-.308a1.04 1.04 0 0 1-.35-.798q0-.49.35-.798.35-.322.84-.322t.84.322q.35.307.35.798 0 .476-.35.798a1.23 1.23 0 0 1-.84.308m2.54 8.022v-.658l.756-.168q.014-.504.014-1.092v-1.834q0-.575-.014-.882 0-.322-.028-.742l-.854-.126v-.546l2.758-.938.252.154.084 1.008q.546-.644 1.078-.896a2.6 2.6 0 0 1 1.162-.266q.91 0 1.456.602.56.601.56 1.806v2.688q0 .575.014 1.092l.7.14v.658h-3.696v-.658l.728-.154q.014-.518.014-1.092v-2.506q0-.672-.182-.938-.183-.28-.588-.28-.546 0-1.204.504v3.22q0 .588.014 1.106l.658.14v.658zm11.665-3.136a.78.78 0 0 0 .728-.434q.252-.434.252-1.176t-.252-1.148q-.238-.42-.7-.42a.77.77 0 0 0-.714.42q-.238.42-.238 1.162 0 .743.224 1.176a.74.74 0 0 0 .7.42m-1.862 4.298q0 .616.462.896.462.294 1.414.294 1.05 0 1.582-.308t.532-.77a.83.83 0 0 0-.224-.56q-.225-.238-.798-.238h-1.47q-.77 0-1.274-.126a2 2 0 0 0-.168.378 1.5 1.5 0 0 0-.056.434m1.876-3.64q-.729 0-1.274-.168a1.3 1.3 0 0 0-.168.644q0 .238.182.392.182.14.63.14h1.638q1.064 0 1.694.266.63.252.896.714.28.448.28 1.064 0 .7-.462 1.288-.462.602-1.386.952-.91.364-2.254.364-1.163 0-1.82-.238-.658-.224-.924-.602a1.36 1.36 0 0 1-.266-.798q0-.896 1.162-1.442-.435-.182-.63-.476a1.2 1.2 0 0 1-.182-.644q0-.49.28-.924.293-.448.812-.896-.575-.294-.854-.784a2.16 2.16 0 0 1-.28-1.092q0-.98.714-1.624.727-.644 2.212-.644.755 0 1.316.168.56.168.91.476l1.568-.672.224.14v1.078h-1.33q.252.462.252 1.078 0 .938-.728 1.596-.715.644-2.212.644' })));
   var b = a(1457),
    f = a(56167);
   const q = { title: 'Heading 6', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 6', pagination_label: 'Heading 6', description: 'Koptekst die in de koppenstructuur op het zesde niveau staat.', issue_number: 262, slug: '/heading-6', keywords: ['caption', 'content', 'h6', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    x = void 0,
    k = {},
    j = 'Heading 6',
    T = 'Koptekst die in de koppenstructuur op het zesde niveau staat.',
    D = 262,
    F = c.find((e) => e.number === D),
    N = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function H(e) {
    const n = { h2: 'h2', ...(0, m.R)(), ...e.components },
     { ComponentAnatomy: a } = n;
    return (
     a ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('ComponentAnatomy', !0),
     (0, u.jsxs)(u.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, u.jsx)(f.Fc, { component: F, headingLevel: 1, description: T }), '\n', (0, u.jsx)(b.e, { component: F }), '\n', (0, u.jsx)(n.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, u.jsx)(a, { component: F, illustration: v }), '\n', (0, u.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, u.jsx)(f.VK, { component: F, headingLevel: 3 }), '\n', (0, u.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, u.jsx)(f.mu, { component: F, headingLevel: 3 }), '\n', (0, u.jsx)(f.K_, { component: F }), '\n', (0, u.jsx)(f.$9, { component: F, headingLevel: 2 })] })
    );
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, m.R)(), ...e.components };
    return n ? (0, u.jsx)(n, { ...e, children: (0, u.jsx)(H, { ...e }) }) : H(e);
   }
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
  51627(e, n, a) {
   'use strict';
   a.d(n, { K: () => r, n: () => o });
   var t = a(13526),
    l = a(96345),
    i = a(37168),
    s = a(86070);
   const o = ({ className: e, ...n }) => {
     const a = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, s.jsx)('div', { className: a, children: n.children });
    },
    r = ({ className: e, label: n, heading: a, headingLevel: o, headingApperance: r, ...d }) => {
     const g = (0, t.A)('utrecht-accordion__section', e);
     return (0, s.jsxs)('details', { className: g, ...d, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(l.A, {}) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [a && (0, s.jsx)(i.D, { level: o, appearance: r, children: a }), n] })] }) }), (0, s.jsx)('div', { className: 'utrecht-accordion__panel', children: d.children })] });
    };
  },
  56167(e, n, a) {
   'use strict';
   a.d(n, { VK: () => b, $9: () => q, mu: () => f, Fc: () => x, K_: () => k });
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
   const p = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var v = a(51627);
   const b = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => h.f4.includes(e.id)),
      i = a && h.f4.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(v.n, { children: i.map((a) => (0, d.jsx)(v.K, { className: (0, l.A)('ma-definition-of-done', a && `ma-definition-of-done--${(0, h.fX)(a.title)}`), heading: a ? `${a.title} - ${a.progress.value} van ${a.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(c._, { children: a.tasks.map(({ checked: e, name: a, id: t }) => (0, d.jsx)(c.Z, { headingLevel: n + 1, checked: e, heading: a, description: (0, h.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${a.url}?filterQuery=${e.title}`, children: [a.title, ' projectbord op GitHub'] }) })] }) }, a.title)) });
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
    x = ({ component: e, headingLevel: n, description: a }) => {
     const l = e && h.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: l && (0, d.jsx)(u.D, { state: l }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: a })] });
    },
    k = ({ component: e }) => {
     const n = (e && p[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(t.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, a) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(t.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, a < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  76097(e, n, a) {
   'use strict';
   a.d(n, { bo: () => l, KF: () => m, mJ: () => p, VZ: () => T, cR: () => j, Pv: () => v, qZ: () => s, kD: () => x, QQ: () => F, B2: () => c, Pc: () => r, f4: () => o, GT: () => k, fX: () => i, eQ: () => q, B_: () => f, o_: () => b });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
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
    b = (e) => e.join('.'),
    f = (e) => '--' + e.join('-'),
    q = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((a) => ('object' == typeof e[a] && null !== e[a] ? x(e[a], [...n, a]) : []));
   }
   function k(e) {
    const n = new Map();
    function a(e) {
     return (n.has(e) || n.set(e, b(e)), n.get(e));
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
    },
    D = new Set(['ics', 'json', 'pdf']),
    F = (e) => {
     const n = e.split('/').pop() ?? '',
      a = n.split('.').pop()?.toLowerCase();
     return void 0 !== a && D.has(a);
    };
  },
  82839(e, n, a) {
   var t = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [66203, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
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
