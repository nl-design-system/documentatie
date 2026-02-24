(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [93787],
 {
  1292(e, t, n) {
   'use strict';
   n.d(t, { r: () => d });
   var r = n(29181),
    s = n(74172),
    c = n(15089),
    i = n(28377),
    o = n(33648),
    a = n(83386),
    l = n(86070);
   const h = { figma: (0, l.jsx)(s.A, {}), github: (0, l.jsx)(c.A, {}), npm: (0, l.jsx)(i.A, {}), storybook: (0, l.jsx)(o.A, {}) },
    d = ({ brand: e }) => (0, l.jsx)(r.In, { children: h[e] || (0, l.jsx)(a.A, {}) });
  },
  12013(e, t, n) {
   'use strict';
   n.d(t, { o: () => h });
   var r = n(18439),
    s = n(46447),
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
      return ((e.h1 = () => null), e);
     }
     return o[t];
    },
    h = ({ children: e, omitH1: t = !1, headingLevel: n = 1, baseUrl: s = '', components: i = {} }) => (0, c.jsx)(r.x, { components: { ...l(t, n), ...a(s), ...i }, children: e });
  },
  33062(e, t, n) {
   'use strict';
   n.d(t, { bo: () => s, KF: () => u, mJ: () => y, VZ: () => w, cR: () => x, Pv: () => v, qZ: () => i, kD: () => q, B2: () => m, Pc: () => a, f4: () => o, GT: () => f, fX: () => c, eQ: () => k, B_: () => g, o_: () => p, Rc: () => b });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    c = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
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
    v = (e) => {
     const t = j(e),
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
    p = (e) => e.join('.'),
    g = (e) => '--' + e.join('-'),
    k = (e, t) => t.reduce((e, t) => e?.[t], e);
   function q(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? q(e[n], [...t, n]) : []));
   }
   function f(e) {
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
  41895(e, t, n) {
   'use strict';
   (n.r(t), n.d(t, { assets: () => b, component: () => z, contentTitle: () => f, default: () => A, description: () => w, frontMatter: () => q, issueNumber: () => _, metadata: () => r, title: () => x, toc: () => N }));
   const r = JSON.parse('{"id":"componenten/heading-6/index","title":"Heading 6","description":"Koptekst die in de koppenstructuur op het zesde niveau staat.","source":"@site/docs/componenten/heading-6/index.mdx","sourceDirName":"componenten/heading-6","slug":"/heading-6","permalink":"/heading-6","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-6/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 6","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 6","pagination_label":"Heading 6","description":"Koptekst die in de koppenstructuur op het zesde niveau staat.","slug":"/heading-6","keywords":["caption","content","h6","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 5","permalink":"/heading-5"},"next":{"title":"Heading Group","permalink":"/heading-group"}}');
   var s,
    c,
    i,
    o,
    a,
    l,
    h,
    d = n(86070),
    u = n(18439),
    m = n(36059),
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
   const v = ({ title: e, titleId: t, ...n }) => j.createElement('svg', y({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': t }, n), e ? j.createElement('title', { id: t }, e) : null, s || (s = j.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), c || (c = j.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), i || (i = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 259v22' })), o || (o = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), a || (a = j.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), l || (l = j.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), h || (h = j.createElement('path', { fill: '#0A2750', d: 'M319.892 270.104v1.806l.028 1.778h.462q1.204 0 1.89-.98.7-.995.7-2.814 0-1.848-.7-2.814-.686-.966-1.876-.966h-.476l-.028 1.75v2.24m-3.43-4.046v-.756h4.158q1.499 0 2.562.56a3.86 3.86 0 0 1 1.638 1.568q.574 1.022.574 2.45 0 1.456-.616 2.492a4 4 0 0 1-1.75 1.582q-1.12.546-2.66.546h-3.906v-.756l1.05-.112q.028-.854.028-1.736v-3.99q0-.882-.028-1.736zm9.829 8.442v-.658l.756-.168q.014-.504.014-1.092v-1.694q0-.574-.014-.952 0-.392-.028-.812l-.868-.126v-.546l2.94-.938.238.154-.042 2.03v2.898q0 .588.014 1.106l.7.14v.658zm1.862-8.022q-.49 0-.84-.308a1.04 1.04 0 0 1-.35-.798q0-.49.35-.798.35-.322.84-.322t.84.322q.35.307.35.798 0 .476-.35.798a1.23 1.23 0 0 1-.84.308m5.2 8.232q-.939 0-1.47-.448-.532-.462-.532-1.498v-.672q.014-.322.014-.728v-2.674h-.91v-.826l1.036-.14.7-1.96h1.428l-.028 1.974h1.47v.952h-1.47v3.92q0 .49.196.728.21.224.518.224.363 0 .756-.308l.35.336q-.28.532-.784.826-.49.294-1.274.294m5.38-.21v-.658l.756-.168q.014-.504.014-1.092v-1.694q0-.574-.014-.952 0-.392-.028-.812l-.868-.126v-.546l2.94-.938.238.154-.042 2.03v2.898q0 .588.014 1.106l.7.14v.658zm1.862-8.022q-.49 0-.84-.308a1.04 1.04 0 0 1-.35-.798q0-.49.35-.798.35-.322.84-.322.489 0 .84.322.35.307.35.798 0 .476-.35.798a1.23 1.23 0 0 1-.84.308m5.003 8.232a4.76 4.76 0 0 1-2.436-.644l.042-1.708h1.12l.238 1.386q.252.098.504.154.252.042.546.042.603 0 .924-.196.322-.21.322-.63a.77.77 0 0 0-.238-.56q-.237-.238-.938-.434l-.756-.224q-.811-.238-1.26-.77-.434-.532-.434-1.316 0-.966.756-1.624.757-.672 2.17-.672.616 0 1.134.154.532.14 1.078.42l-.098 1.526h-1.12l-.28-1.204q-.294-.112-.77-.112t-.77.196q-.28.197-.28.588 0 .28.224.504.225.21.952.434l.686.196q.995.294 1.428.84.434.546.434 1.33 0 1.106-.854 1.722-.84.602-2.324.602m10.373-6.468q-.392 0-.728.49-.321.476-.364 1.764h1.19q.504 0 .672-.196.183-.21.182-.686 0-.7-.28-1.036-.279-.336-.672-.336m.028 6.468q-1.021 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.447-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.575 0 .98-.21.406-.224.714-.546l.49.448q-.434.826-1.176 1.232-.741.406-1.764.406m7.273-6.468q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.183-.21.182-.686 0-.7-.28-1.036-.279-.336-.672-.336m.028 6.468q-1.022 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.447-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.575 0 .98-.21.406-.224.714-.546l.49.448q-.433.826-1.176 1.232-.741.406-1.764.406m3.801-.21v-.658l.756-.168q.014-.504.014-1.092v-1.834q0-.575-.014-.882 0-.322-.028-.742l-.854-.126v-.546l2.758-.938.252.154.084 1.008q.546-.644 1.078-.896a2.6 2.6 0 0 1 1.162-.266q.91 0 1.456.602.56.601.56 1.806v2.688q0 .575.014 1.092l.7.14v.658h-3.696v-.658l.728-.154q.014-.518.014-1.092v-2.506q0-.672-.182-.938-.182-.28-.588-.28-.546 0-1.204.504v3.22q0 .588.014 1.106l.658.14v.658zm15.877-6.146v-.616h2.646v.616l-.812.154-2.31 6.02h-1.064l-2.52-6.034-.686-.14v-.616h3.976v.616l-.882.182 1.316 3.584 1.218-3.598zm6.314 6.356q-1.092 0-1.89-.448a3.17 3.17 0 0 1-1.232-1.274q-.434-.826-.434-1.904t.462-1.876a3.4 3.4 0 0 1 1.288-1.246 3.67 3.67 0 0 1 1.806-.448q.994 0 1.792.434a3.24 3.24 0 0 1 1.288 1.246q.476.798.476 1.89t-.434 1.904-1.232 1.274q-.798.448-1.89.448m0-.728q.588 0 .882-.686t.294-2.17q0-1.498-.294-2.184t-.882-.686q-.602 0-.896.686t-.294 2.184q0 1.484.294 2.17t.896.686m8.012.728q-1.092 0-1.89-.448a3.17 3.17 0 0 1-1.232-1.274q-.435-.826-.434-1.904 0-1.078.462-1.876a3.37 3.37 0 0 1 1.288-1.246 3.67 3.67 0 0 1 1.806-.448q.994 0 1.792.434.811.434 1.288 1.246.476.798.476 1.89t-.434 1.904-1.232 1.274q-.798.448-1.89.448m0-.728q.588 0 .882-.686t.294-2.17q0-1.498-.294-2.184t-.882-.686q-.602 0-.896.686t-.294 2.184q0 1.484.294 2.17.293.686.896.686m4.332.518v-.658l.77-.154q.014-.518.014-1.106v-1.848q0-.392-.014-.644 0-.252-.014-.462 0-.224-.014-.504l-.854-.126v-.546l2.758-.938.252.154.126 1.652q.294-.895.826-1.344.531-.462 1.05-.462.462 0 .798.266.336.252.42.77-.015.546-.294.854a.93.93 0 0 1-.7.294q-.589 0-1.078-.658l-.084-.112a3.4 3.4 0 0 0-.574.742 3.5 3.5 0 0 0-.364.938v1.946q0 .56.014 1.05l1.106.238v.658zm6.194.014v-.658l.742-.154q.014-.504.014-1.092v-6.944l-.868-.112v-.588l2.898-.63.224.14-.056 1.96v1.974q.882-.896 2.03-.896.77 0 1.386.406.615.392.98 1.19.378.784.378 1.946 0 1.134-.42 1.96-.42.811-1.106 1.26a2.66 2.66 0 0 1-1.47.434q-1.149 0-1.848-.826l-.238.812zm3.962-5.782a1.2 1.2 0 0 0-.504.112 2.3 2.3 0 0 0-.462.294v4.004q.433.392.952.392.615 0 1.008-.602.405-.602.406-1.834 0-1.247-.392-1.806-.378-.56-1.008-.56m8.136-.49q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.183-.21.182-.686 0-.7-.28-1.036-.279-.336-.672-.336m.028 6.468q-1.022 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.447-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.575 0 .98-.21.407-.224.714-.546l.49.448q-.433.826-1.176 1.232-.741.406-1.764.406m7.273-6.468q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.183-.21.182-.686 0-.7-.28-1.036-.279-.336-.672-.336m.028 6.468q-1.022 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.447-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.575 0 .98-.21.406-.224.714-.546l.49.448q-.433.826-1.176 1.232-.741.406-1.764.406m3.541-.21v-.658l.77-.168q.014-.532.014-1.064.014-.532.014-1.05v-5.866l-.868-.14v-.588l2.94-.63.224.14-.056 1.96v6.188l.028 1.064.77.154v.658zm6.933-3.346q0 1.148.406 1.75.406.588 1.05.588.476 0 .868-.322v-4.172a1.3 1.3 0 0 0-.826-.294q-.644 0-1.078.602-.42.602-.42 1.848m2.506 3.5-.112-.798q-.812.854-1.974.854-.785 0-1.428-.406-.63-.406-.994-1.19-.364-.798-.364-1.932 0-1.148.434-1.96.448-.827 1.148-1.26a2.77 2.77 0 0 1 1.498-.448q.546 0 .952.196.406.181.742.546v-2.562l-.98-.14v-.588l2.954-.63.224.14-.056 1.96v7.266l.686.14v.658zm10.677-6.3v-.616h2.646v.616l-.812.154-2.31 6.02h-1.064l-2.52-6.034-.686-.14v-.616h3.976v.616l-.882.182 1.316 3.584 1.218-3.598zm8.175 6.342q-1.218 0-1.54-1.008a5 5 0 0 1-.868.756q-.405.266-1.134.266-.811 0-1.33-.462-.504-.462-.504-1.33 0-.504.224-.91.225-.406.812-.756t1.666-.658q.21-.07.49-.14t.574-.14v-.462q0-.938-.238-1.274-.224-.336-.896-.336h-.182a2 2 0 0 0-.196.014l-.07.616q-.013.686-.322.994a.94.94 0 0 1-.7.308q-.77 0-.938-.7.057-.868.882-1.414.826-.546 2.338-.546 1.345 0 1.918.616.588.616.588 2.03v3.136q0 .406.308.406a.4.4 0 0 0 .21-.056.9.9 0 0 0 .21-.252l.378.252q-.252.56-.658.812-.392.238-1.022.238m-3.304-2.142q0 .518.238.77a.82.82 0 0 0 .924.182q.168-.07.532-.322v-2.268a5 5 0 0 0-.364.126q-.168.056-.294.112a1.8 1.8 0 0 0-.756.56q-.28.35-.28.84m5.324 1.946v-.658l.756-.168q.014-.504.014-1.092v-1.834q0-.575-.014-.882 0-.322-.028-.742l-.854-.126v-.546l2.758-.938.252.154.084 1.008q.546-.644 1.078-.896a2.6 2.6 0 0 1 1.162-.266q.91 0 1.456.602.56.601.56 1.806v2.688q0 .575.014 1.092l.7.14v.658h-3.696v-.658l.728-.154q.014-.518.014-1.092v-2.506q0-.672-.182-.938-.183-.28-.588-.28-.547 0-1.204.504v3.22q0 .588.014 1.106l.658.14v.658zm15.093-6.258q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.182-.21.182-.686 0-.7-.28-1.036t-.672-.336m.028 6.468q-1.022 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.448-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.574 0 .98-.21.407-.224.714-.546l.49.448q-.434.826-1.176 1.232-.743.406-1.764.406m7.273-6.468q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.182-.21.182-.686 0-.7-.28-1.036t-.672-.336m.028 6.468q-1.023 0-1.806-.42a3.1 3.1 0 0 1-1.232-1.232q-.448-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218q.825-.42 1.722-.42.923 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.573 0 .98-.21.405-.224.714-.546l.49.448q-.435.826-1.176 1.232-.743.406-1.764.406m3.8-.21v-.658l.756-.168q.014-.504.014-1.092v-1.834q0-.575-.014-.882 0-.322-.028-.742l-.854-.126v-.546l2.758-.938.252.154.084 1.008q.546-.644 1.078-.896a2.6 2.6 0 0 1 1.162-.266q.91 0 1.456.602.56.601.56 1.806v2.688q0 .575.014 1.092l.7.14v.658h-3.696v-.658l.728-.154q.014-.518.014-1.092v-2.506q0-.672-.182-.938-.181-.28-.588-.28-.546 0-1.204.504v3.22q0 .588.014 1.106l.658.14v.658zm11.622 0v-.658l.756-.168q.014-.504.014-1.092v-6.888l-.868-.14v-.588l2.898-.63.224.14-.056 1.96v2.254q.56-.658 1.078-.91a2.5 2.5 0 0 1 1.148-.266q.924 0 1.484.602.56.601.56 1.806v2.688q0 .575.014 1.092l.7.14v.658h-3.682v-.658l.728-.154q.014-.518.014-1.092v-2.506q0-.686-.168-.952-.154-.266-.588-.266-.28 0-.602.168-.323.168-.644.476v3.08q0 .588.014 1.106l.658.14v.658zm12.112-6.258q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.183-.21.182-.686 0-.7-.28-1.036-.279-.336-.672-.336m.028 6.468q-1.022 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.447-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.575 0 .98-.21.407-.224.714-.546l.49.448q-.433.826-1.176 1.232-.741.406-1.764.406m9.178-.014q-1.218 0-1.54-1.008a5.2 5.2 0 0 1-.868.756q-.406.266-1.134.266-.812 0-1.33-.462-.504-.462-.504-1.33 0-.504.224-.91t.812-.756 1.666-.658q.21-.07.49-.14t.574-.14v-.462q0-.938-.238-1.274-.224-.336-.896-.336h-.182a2 2 0 0 0-.196.014l-.07.616q-.014.686-.322.994a.94.94 0 0 1-.7.308q-.77 0-.938-.7.056-.868.882-1.414t2.338-.546q1.344 0 1.918.616.588.616.588 2.03v3.136q0 .406.308.406a.4.4 0 0 0 .21-.056.9.9 0 0 0 .21-.252l.378.252q-.252.56-.658.812-.392.238-1.022.238m-3.304-2.142q0 .518.238.77a.82.82 0 0 0 .924.182 3.5 3.5 0 0 0 .532-.322v-2.268a5 5 0 0 0-.364.126q-.168.056-.294.112a1.8 1.8 0 0 0-.756.56 1.3 1.3 0 0 0-.28.84m7.703-1.4q0 1.148.406 1.75.406.588 1.05.588.477 0 .868-.322v-4.172a1.3 1.3 0 0 0-.826-.294q-.643 0-1.078.602-.42.602-.42 1.848m2.506 3.5-.112-.798q-.812.854-1.974.854-.783 0-1.428-.406-.63-.406-.994-1.19-.364-.798-.364-1.932 0-1.148.434-1.96.449-.827 1.148-1.26a2.78 2.78 0 0 1 1.498-.448q.547 0 .952.196.406.181.742.546v-2.562l-.98-.14v-.588l2.954-.63.224.14-.056 1.96v7.266l.686.14v.658zm3.455-.154v-.658l.756-.168q.014-.504.014-1.092v-1.694q0-.574-.014-.952 0-.392-.028-.812l-.868-.126v-.546l2.94-.938.238.154-.042 2.03v2.898q0 .588.014 1.106l.7.14v.658zm1.862-8.022q-.49 0-.84-.308a1.04 1.04 0 0 1-.35-.798q0-.49.35-.798.35-.322.84-.322t.84.322q.35.307.35.798 0 .476-.35.798a1.23 1.23 0 0 1-.84.308m2.54 8.022v-.658l.756-.168q.014-.504.014-1.092v-1.834q0-.575-.014-.882 0-.322-.028-.742l-.854-.126v-.546l2.758-.938.252.154.084 1.008q.546-.644 1.078-.896a2.6 2.6 0 0 1 1.162-.266q.91 0 1.456.602.56.601.56 1.806v2.688q0 .575.014 1.092l.7.14v.658h-3.696v-.658l.728-.154q.014-.518.014-1.092v-2.506q0-.672-.182-.938-.183-.28-.588-.28-.546 0-1.204.504v3.22q0 .588.014 1.106l.658.14v.658zm11.665-3.136a.78.78 0 0 0 .728-.434q.252-.434.252-1.176t-.252-1.148q-.238-.42-.7-.42a.77.77 0 0 0-.714.42q-.238.42-.238 1.162 0 .743.224 1.176a.74.74 0 0 0 .7.42m-1.862 4.298q0 .616.462.896.462.294 1.414.294 1.05 0 1.582-.308t.532-.77a.83.83 0 0 0-.224-.56q-.225-.238-.798-.238h-1.47q-.77 0-1.274-.126a2 2 0 0 0-.168.378 1.5 1.5 0 0 0-.056.434m1.876-3.64q-.729 0-1.274-.168a1.3 1.3 0 0 0-.168.644q0 .238.182.392.182.14.63.14h1.638q1.064 0 1.694.266.63.252.896.714.28.448.28 1.064 0 .7-.462 1.288-.462.602-1.386.952-.91.364-2.254.364-1.163 0-1.82-.238-.658-.224-.924-.602a1.36 1.36 0 0 1-.266-.798q0-.896 1.162-1.442-.435-.182-.63-.476a1.2 1.2 0 0 1-.182-.644q0-.49.28-.924.293-.448.812-.896-.575-.294-.854-.784a2.16 2.16 0 0 1-.28-1.092q0-.98.714-1.624.727-.644 2.212-.644.755 0 1.316.168.56.168.91.476l1.568-.672.224.14v1.078h-1.33q.252.462.252 1.078 0 .938-.728 1.596-.715.644-2.212.644' })));
   var p = n(72401),
    g = n(84068),
    k = n(85825);
   const q = { title: 'Heading 6', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 6', pagination_label: 'Heading 6', description: 'Koptekst die in de koppenstructuur op het zesde niveau staat.', slug: '/heading-6', keywords: ['caption', 'content', 'h6', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    f = void 0,
    b = {},
    x = 'Heading 6',
    w = 'Koptekst die in de koppenstructuur op het zesde niveau staat.',
    _ = 262,
    z = m.find((e) => e.number === _),
    N = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function T(e) {
    const t = { h2: 'h2', ...(0, u.R)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, d.jsx)(k.Fc, { component: z, headingLevel: 1, description: w }), '\n', (0, d.jsx)(p.e, { component: z }), '\n', (0, d.jsx)(t.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, d.jsx)(g.H, { component: z, illustration: v }), '\n', (0, d.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, d.jsx)(k.VK, { component: z, headingLevel: 3 }), '\n', (0, d.jsx)(t.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, d.jsx)(k.mu, { component: z, headingLevel: 3 }), '\n', (0, d.jsx)(k.$9, { component: z, headingLevel: 2 })] });
   }
   function A(e = {}) {
    const { wrapper: t } = { ...(0, u.R)(), ...e.components };
    return t ? (0, d.jsx)(t, { ...e, children: (0, d.jsx)(T, { ...e }) }) : T(e);
   }
  },
  42962(e, t, n) {
   var r = { './utrecht-action-group_46.entry.js': [60267, 60267], './utrecht-backdrop.entry.js': [60696, 38315], './utrecht-body.entry.js': [64690, 42309], './utrecht-breadcrumb-nav.entry.js': [82907, 5288], './utrecht-button-group.entry.js': [59671, 59671], './utrecht-checkbox.entry.js': [73591, 95972], './utrecht-column-layout.entry.js': [23503, 45884], './utrecht-contact-card-template.entry.js': [44854, 22473], './utrecht-custom-checkbox.entry.js': [48643, 71024], './utrecht-data-list-actions.entry.js': [44381, 66762], './utrecht-data-list-item.entry.js': [25359, 47740], './utrecht-data-list-key.entry.js': [50229, 72610], './utrecht-data-list-value.entry.js': [3931, 26312], './utrecht-data-list.entry.js': [78491, 872], './utrecht-digid-button.entry.js': [90762, 68381], './utrecht-digid-logo.entry.js': [28417, 34446], './utrecht-eherkenning-logo.entry.js': [48744, 26363], './utrecht-eidas-logo.entry.js': [55572, 33191], './utrecht-form-field-error-message.entry.js': [22828, 447], './utrecht-form-toggle.entry.js': [61085, 83466], './utrecht-html-content.entry.js': [17035, 17035], './utrecht-icon-afspraak-maken.entry.js': [43596, 21215], './utrecht-icon-afval-container.entry.js': [49894, 27513], './utrecht-icon-afval-containerpas.entry.js': [40188, 17807], './utrecht-icon-afval-kalender.entry.js': [38607, 60988], './utrecht-icon-afval-pmd.entry.js': [28784, 6403], './utrecht-icon-afval-scheiden.entry.js': [19978, 97597], './utrecht-icon-afval.entry.js': [27172, 4791], './utrecht-icon-afvalkalender.entry.js': [72650, 50269], './utrecht-icon-alleen.entry.js': [61905, 84286], './utrecht-icon-arrow.entry.js': [45603, 67984], './utrecht-icon-auto.entry.js': [41395, 63776], './utrecht-icon-begroting.entry.js': [12151, 34532], './utrecht-icon-bestemmingsplan.entry.js': [27231, 49612], './utrecht-icon-betaaldatum.entry.js': [78784, 56403], './utrecht-icon-bewijsstukken.entry.js': [35307, 57688], './utrecht-icon-bijstand.entry.js': [70635, 93016], './utrecht-icon-blad.entry.js': [13459, 35840], './utrecht-icon-bluesky.entry.js': [52867, 75248], './utrecht-icon-bouw-projecten.entry.js': [70396, 48015], './utrecht-icon-bouwproject.entry.js': [39002, 16621], './utrecht-icon-brandgevaar.entry.js': [81357, 3738], './utrecht-icon-brief-betalen.entry.js': [77554, 55173], './utrecht-icon-buurtcentra.entry.js': [20811, 43192], './utrecht-icon-checkmark.entry.js': [29815, 52196], './utrecht-icon-chevron-down.entry.js': [2698, 80317], './utrecht-icon-chevron-left.entry.js': [92299, 14680], './utrecht-icon-chevron-right.entry.js': [80770, 58389], './utrecht-icon-chevron-up.entry.js': [3039, 25420], './utrecht-icon-close.entry.js': [74514, 52133], './utrecht-icon-coffee.entry.js': [432, 78051], './utrecht-icon-college-b-w.entry.js': [6516, 84135], './utrecht-icon-container-bio.entry.js': [43958, 21577], './utrecht-icon-container-glas.entry.js': [55073, 77454], './utrecht-icon-container-groenafval.entry.js': [23791, 46172], './utrecht-icon-container-met-zak.entry.js': [1937, 24318], './utrecht-icon-container-papier.entry.js': [22497, 44878], './utrecht-icon-container-pmd.entry.js': [85865, 8246], './utrecht-icon-container-restafval.entry.js': [45595, 45595], './utrecht-icon-container-textiel.entry.js': [73239, 95620], './utrecht-icon-container.entry.js': [90549, 12930], './utrecht-icon-cross.entry.js': [93866, 71485], './utrecht-icon-dakloos.entry.js': [29073, 51454], './utrecht-icon-dementie.entry.js': [6697, 29078], './utrecht-icon-documenten.entry.js': [57110, 34729], './utrecht-icon-duurzaam.entry.js': [16379, 38760], './utrecht-icon-eenzaamheid.entry.js': [19487, 41868], './utrecht-icon-eikenprocessie.entry.js': [70063, 92444], './utrecht-icon-elektrisch-rijden.entry.js': [10361, 55123], './utrecht-icon-energie-projecten.entry.js': [2126, 79745], './utrecht-icon-energie-vergoeding.entry.js': [55056, 32675], './utrecht-icon-energietransitie.entry.js': [10884, 88503], './utrecht-icon-error.entry.js': [74704, 52323], './utrecht-icon-evenementen.entry.js': [74402, 52021], './utrecht-icon-facebook.entry.js': [46344, 23963], './utrecht-icon-fiets.entry.js': [37707, 60088], './utrecht-icon-filter.entry.js': [43118, 20737], './utrecht-icon-flickr.entry.js': [69811, 92192], './utrecht-icon-geboorte.entry.js': [23417, 45798], './utrecht-icon-gebruiker-centraal.entry.js': [37869, 60250], './utrecht-icon-gebruiker-ingelogd.entry.js': [84866, 62485], './utrecht-icon-gegevenswoordenboek.entry.js': [24949, 47330], './utrecht-icon-geluid.entry.js': [20938, 98557], './utrecht-icon-gemeente-locatie.entry.js': [11253, 11253], './utrecht-icon-gemeenteraad.entry.js': [91214, 68833], './utrecht-icon-gereedschap.entry.js': [8917, 31298], './utrecht-icon-gezicht.entry.js': [64084, 41703], './utrecht-icon-gezin.entry.js': [44743, 67124], './utrecht-icon-glas-afval.entry.js': [82996, 60615], './utrecht-icon-glijbaan.entry.js': [77770, 55389], './utrecht-icon-grafiek.entry.js': [46275, 68656], './utrecht-icon-groen-projecten.entry.js': [65632, 43251], './utrecht-icon-grofvuil-ophalen.entry.js': [60782, 38401], './utrecht-icon-grofvuil.entry.js': [85152, 62771], './utrecht-icon-hamburger-menu.entry.js': [29765, 52146], './utrecht-icon-herdenking.entry.js': [53125, 75506], './utrecht-icon-hondenbelasting.entry.js': [55857, 78238], './utrecht-icon-horeca.entry.js': [92084, 69703], './utrecht-icon-horecavergunning.entry.js': [58139, 80520], './utrecht-icon-huis-en-omgeving.entry.js': [26582, 4201], './utrecht-icon-huis.entry.js': [52111, 74492], './utrecht-icon-huishoudelijk-geweld.entry.js': [25869, 48250], './utrecht-icon-hulp-huishouden.entry.js': [13504, 91123], './utrecht-icon-hulp-vervoer.entry.js': [3711, 26092], './utrecht-icon-hulp-zorg.entry.js': [18392, 96011], './utrecht-icon-hulpmiddelen-gezin.entry.js': [84335, 6716], './utrecht-icon-hulpverlening.entry.js': [54131, 76512], './utrecht-icon-idee.entry.js': [10379, 32760], './utrecht-icon-informatie.entry.js': [42746, 20365], './utrecht-icon-information.entry.js': [15844, 93463], './utrecht-icon-innovatie.entry.js': [92811, 15192], './utrecht-icon-inspraak-inwoners.entry.js': [93913, 16294], './utrecht-icon-instagram.entry.js': [70562, 48181], './utrecht-icon-kalender.entry.js': [51690, 29309], './utrecht-icon-kennis.entry.js': [65596, 43215], './utrecht-icon-kerstbomen.entry.js': [93434, 71053], './utrecht-icon-klachten.entry.js': [94968, 72587], './utrecht-icon-kroon.entry.js': [33277, 55658], './utrecht-icon-laadpaal.entry.js': [20532, 98151], './utrecht-icon-language.entry.js': [45210, 22829], './utrecht-icon-lantaarnpaal-oud.entry.js': [77808, 55427], './utrecht-icon-lantaarnpaal.entry.js': [36653, 59034], './utrecht-icon-leren.entry.js': [93122, 70741], './utrecht-icon-let-op.entry.js': [11791, 34172], './utrecht-icon-linkedin.entry.js': [45518, 23137], './utrecht-icon-list-check.entry.js': [49745, 72126], './utrecht-icon-list-number.entry.js': [58996, 36615], './utrecht-icon-list.entry.js': [16296, 93915], './utrecht-icon-loupe.entry.js': [96281, 18662], './utrecht-icon-mail.entry.js': [90035, 12416], './utrecht-icon-markt.entry.js': [61705, 84086], './utrecht-icon-mastodon.entry.js': [6999, 29380], './utrecht-icon-melding-boom.entry.js': [10094, 87713], './utrecht-icon-melding-klacht.entry.js': [58802, 36421], './utrecht-icon-melding-openbareruimte.entry.js': [96669, 19050], './utrecht-icon-melding-verlichting.entry.js': [85264, 62883], './utrecht-icon-melding.entry.js': [80216, 57835], './utrecht-icon-menselijk.entry.js': [75822, 53441], './utrecht-icon-menu-dot-open.entry.js': [84242, 61861], './utrecht-icon-menu-dot.entry.js': [2109, 24490], './utrecht-icon-meterkast.entry.js': [10643, 10643], './utrecht-icon-milieu-ontheffing.entry.js': [96292, 73911], './utrecht-icon-milieu-zone.entry.js': [96646, 74265], './utrecht-icon-minus-vertical.entry.js': [3537, 25918], './utrecht-icon-minus.entry.js': [41958, 19577], './utrecht-icon-mobiliteit.entry.js': [79036, 56655], './utrecht-icon-natuur.entry.js': [75506, 20268], './utrecht-icon-nieuw-huis.entry.js': [31040, 8659], './utrecht-icon-nieuwsbrief.entry.js': [50157, 72538], './utrecht-icon-nummerbord.entry.js': [84829, 90858], './utrecht-icon-om-het-huis.entry.js': [34810, 12429], './utrecht-icon-omgeving.entry.js': [37214, 14833], './utrecht-icon-omgevingsvisie.entry.js': [225, 22606], './utrecht-icon-omgevingswet.entry.js': [51693, 74074], './utrecht-icon-onderhoud.entry.js': [54354, 31973], './utrecht-icon-ondernemen.entry.js': [15915, 38296], './utrecht-icon-openingstijden.entry.js': [31463, 53844], './utrecht-icon-over-de-stad.entry.js': [7083, 29464], './utrecht-icon-overlijden.entry.js': [39924, 17543], './utrecht-icon-panden.entry.js': [83290, 60909], './utrecht-icon-park.entry.js': [6608, 84227], './utrecht-icon-parkeerkaart.entry.js': [85477, 7858], './utrecht-icon-parkeervergunning.entry.js': [76237, 98618], './utrecht-icon-parken.entry.js': [66515, 88896], './utrecht-icon-parkeren-bedrijven.entry.js': [81956, 59575], './utrecht-icon-parkeren-betaalautomaat.entry.js': [71478, 49097], './utrecht-icon-parkeren-betalen.entry.js': [48884, 26503], './utrecht-icon-parkeren.entry.js': [24032, 1651], './utrecht-icon-participatie-campagne.entry.js': [58012, 35631], './utrecht-icon-participatie-like.entry.js': [10211, 32592], './utrecht-icon-participatie-pitch.entry.js': [50144, 27763], './utrecht-icon-paspoort.entry.js': [95256, 72875], './utrecht-icon-phone.entry.js': [96358, 73977], './utrecht-icon-pinterest.entry.js': [92376, 69995], './utrecht-icon-presentatie.entry.js': [36558, 14177], './utrecht-icon-prijskaartje.entry.js': [45238, 22857], './utrecht-icon-read-aloud.entry.js': [51966, 29585], './utrecht-icon-report.entry.js': [60530, 38149], './utrecht-icon-rijbewijs.entry.js': [89877, 12258], './utrecht-icon-rioolheffing.entry.js': [8110, 85729], './utrecht-icon-rolstoel.entry.js': [14978, 92597], './utrecht-icon-schild-gemeente-utrecht.entry.js': [14036, 91655], './utrecht-icon-search.entry.js': [76904, 54523], './utrecht-icon-shoppen.entry.js': [38337, 60718], './utrecht-icon-sinterklaas.entry.js': [60259, 82640], './utrecht-icon-slechtziende-hoordende.entry.js': [34339, 56720], './utrecht-icon-sport-en-cultuur.entry.js': [97907, 20288], './utrecht-icon-sport-voetbal.entry.js': [63248, 40867], './utrecht-icon-sport.entry.js': [15300, 92919], './utrecht-icon-standaard-projecten.entry.js': [34009, 56390], './utrecht-icon-stookverbod.entry.js': [27350, 4969], './utrecht-icon-strand.entry.js': [29192, 6811], './utrecht-icon-strooien.entry.js': [21175, 43556], './utrecht-icon-subsidie-gezin.entry.js': [35880, 13499], './utrecht-icon-subsidie.entry.js': [34668, 12287], './utrecht-icon-t-shirt.entry.js': [94763, 17144], './utrecht-icon-threads.entry.js': [60555, 82936], './utrecht-icon-thuiswerken.entry.js': [49161, 93923], './utrecht-icon-toeslag.entry.js': [10341, 32722], './utrecht-icon-trein.entry.js': [21068, 98687], './utrecht-icon-trouwen.entry.js': [8686, 86305], './utrecht-icon-twitter.entry.js': [78009, 390], './utrecht-icon-user.entry.js': [49647, 72028], './utrecht-icon-uw-wijk.entry.js': [28514, 6133], './utrecht-icon-vaccinatie.entry.js': [83147, 5528], './utrecht-icon-veilige-wijk.entry.js': [38821, 61202], './utrecht-icon-vergaderen.entry.js': [57799, 80180], './utrecht-icon-vergaderendigitaal.entry.js': [30966, 8585], './utrecht-icon-vergoeding.entry.js': [49686, 27305], './utrecht-icon-verhuizen.entry.js': [20708, 98327], './utrecht-icon-verkeers-projecten.entry.js': [66540, 44159], './utrecht-icon-verkeerslicht.entry.js': [20735, 43116], './utrecht-icon-verkiezingen.entry.js': [98973, 21354], './utrecht-icon-verslaving.entry.js': [19591, 41972], './utrecht-icon-vervoersvoorziening.entry.js': [56848, 34467], './utrecht-icon-virus.entry.js': [1259, 23640], './utrecht-icon-vluchtelingen.entry.js': [81508, 59127], './utrecht-icon-voorzieningen-vervoer.entry.js': [18881, 41262], './utrecht-icon-vrijwilligerswerk.entry.js': [98400, 76019], './utrecht-icon-vuilnisbak.entry.js': [60028, 37647], './utrecht-icon-vuilniszak.entry.js': [31668, 9287], './utrecht-icon-vuurwerk.entry.js': [36149, 58530], './utrecht-icon-wandelstok.entry.js': [38298, 15917], './utrecht-icon-warm.entry.js': [44165, 66546], './utrecht-icon-warning.entry.js': [74190, 51809], './utrecht-icon-werken.entry.js': [29516, 7135], './utrecht-icon-werkzaamheden.entry.js': [48956, 26575], './utrecht-icon-whatsapp.entry.js': [54750, 32369], './utrecht-icon-wijk-denkmee.entry.js': [2947, 25328], './utrecht-icon-wijk-overlast.entry.js': [86790, 64409], './utrecht-icon-wijk-park.entry.js': [61032, 38651], './utrecht-icon-wijk-projecten.entry.js': [59684, 37303], './utrecht-icon-wijk-speelplaats.entry.js': [72554, 50173], './utrecht-icon-wijk-sport.entry.js': [20332, 97951], './utrecht-icon-wijk-zwemmen.entry.js': [60337, 82718], './utrecht-icon-wonen-kosten.entry.js': [48660, 26279], './utrecht-icon-woning-zoeken.entry.js': [54989, 77370], './utrecht-icon-x.entry.js': [34790, 12409], './utrecht-icon-youtube.entry.js': [37315, 59696], './utrecht-icon-zelfstandig-wonen.entry.js': [74501, 96882], './utrecht-icon-zoom-minus.entry.js': [29766, 7385], './utrecht-icon-zoom-plus.entry.js': [82404, 60023], './utrecht-icon-zoomin.entry.js': [49196, 26815], './utrecht-icon-zoomout.entry.js': [77011, 99392], './utrecht-icon-zorg-huis.entry.js': [25926, 3545], './utrecht-icon-zweefpaal.entry.js': [17129, 39510], './utrecht-icon-zwemmen.entry.js': [48217, 70598], './utrecht-logo-button.entry.js': [62178, 39797], './utrecht-map-marker.entry.js': [68805, 91186], './utrecht-multiline-data.entry.js': [9776, 87395], './utrecht-nav-bar.entry.js': [49817, 94579], './utrecht-number-badge.entry.js': [28405, 50786], './utrecht-page-body.entry.js': [16742, 94361], './utrecht-page-footer.entry.js': [16721, 39102], './utrecht-page-layout.entry.js': [64892, 42511], './utrecht-pagination.entry.js': [38129, 38129], './utrecht-preserve-data.entry.js': [19003, 41384], './utrecht-progress-list-item.entry.js': [6968, 84587], './utrecht-progress-list.entry.js': [48298, 25917], './utrecht-progress-sublist-item.entry.js': [91900, 69519], './utrecht-root.entry.js': [246, 77865], './utrecht-sidenav.entry.js': [24476, 2095], './utrecht-surface.entry.js': [27147, 49528], './utrecht-table-body.entry.js': [47681, 70062], './utrecht-table-caption.entry.js': [31551, 53932], './utrecht-table-cell.entry.js': [90793, 13174], './utrecht-table-container.entry.js': [90366, 67985], './utrecht-table-footer.entry.js': [14522, 92141], './utrecht-table-header-cell.entry.js': [73801, 96182], './utrecht-table-header.entry.js': [90924, 68543], './utrecht-table-row.entry.js': [86529, 8910], './utrecht-table.entry.js': [50668, 28287], './utrecht-textarea.entry.js': [50908, 28527], './utrecht-textbox.entry.js': [37820, 15439], './utrecht-top-task-link.entry.js': [90694, 68313], './utrecht-top-task-nav.entry.js': [63361, 85742] };
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
   ((s.keys = () => Object.keys(r)), (s.id = 42962), (e.exports = s));
  },
  51580(e, t, n) {
   var r = { './button-docs/docs/anatomy/anatomy.md': [46106, 46106], './code-block-docs/docs/anatomy/anatomy.md': [91631, 91631], './code-docs/docs/anatomy/anatomy.md': [69367, 69367], './color-sample-docs/docs/anatomy/anatomy.md': [73940, 73940], './data-badge-docs/docs/anatomy/anatomy.md': [69506, 69506], './heading-1-docs/docs/anatomy/anatomy.md': [28456, 28456], './heading-2-docs/docs/anatomy/anatomy.md': [1572, 1572], './heading-3-docs/docs/anatomy/anatomy.md': [39512, 39512], './heading-4-docs/docs/anatomy/anatomy.md': [89948, 89948], './heading-5-docs/docs/anatomy/anatomy.md': [69896, 69896], './heading-6-docs/docs/anatomy/anatomy.md': [74572, 74572], './heading-docs/docs/anatomy/anatomy.md': [64417, 64417], './link-docs/docs/anatomy/anatomy.md': [33185, 33185], './mark-docs/docs/anatomy/anatomy.md': [91171, 91171], './number-badge-docs/docs/anatomy/anatomy.md': [87231, 87231], './paragraph-docs/docs/anatomy/anatomy.md': [19961, 19961], './skip-link-docs/docs/anatomy/anatomy.md': [63513, 63513] };
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
   ((s.keys = () => Object.keys(r)), (s.id = 51580), (e.exports = s));
  },
  54565(e, t, n) {
   'use strict';
   n.d(t, { c: () => s });
   var r = n(30758);
   function s() {
    const [e, t] = (0, r.useState)();
    return ((0, r.useEffect)(() => t(!0), []), e);
   }
  },
  67970(e, t, n) {
   'use strict';
   n.d(t, { D: () => o });
   var r = n(46447),
    s = n(13526),
    c = n(33062),
    i = n(86070);
   const o = ({ state: e }) => {
    const t = (0, c.fX)(e);
    return (0, i.jsx)(r.KE, { className: (0, s.A)('estafette-badge', t && `estafette-badge--${t}`), children: e });
   };
  },
  72401(e, t, n) {
   'use strict';
   n.d(t, { e: () => o });
   var r = n(12013),
    s = n(30758),
    c = n(33062),
    i = n(86070);
   const o = ({ component: e }) => {
    const { title: t } = e,
     o = (0, c.fX)(t),
     a = s.lazy(() => n(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, i.jsx)(s.Suspense, { fallback: null, children: (0, i.jsx)(r.o, { omitH1: !0, headingLevel: 1, children: (0, i.jsx)(a, {}) }) });
   };
  },
  72642(e, t, n) {
   'use strict';
   n.d(t, { p: () => c });
   var r = n(13526),
    s = n(86070);
   const c = ({ children: e, className: t, level: n = 1, suffix: c, ...i }) => (0, s.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${n}`, t), ...i, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), c && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [c ? ' ' : '', c] })] });
  },
  82839(e, t, n) {
   var r = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
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
   ((s.keys = () => Object.keys(r)), (s.id = 82839), (e.exports = s));
  },
  84068(e, t, n) {
   'use strict';
   n.d(t, { H: () => h });
   var r = n(12013),
    s = n(13526),
    c = n(30758),
    i = n(33062),
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
  85825(e, t, n) {
   'use strict';
   n.d(t, { VK: () => g, $9: () => q, mu: () => k, Fc: () => f });
   var r = n(29181),
    s = n(13526),
    c = n(1292),
    i = n(90495),
    o = n(54565);
   function a(e) {
    return (0, o.c)() ? e.children() : null;
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
    v = ({ checked: e, children: t, title: n, description: r, headingLevel: c = 3 }) => (0, l.jsxs)('li', { className: (0, s.A)('task-list-item'), children: [(0, l.jsxs)('div', { className: (0, s.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, l.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, l.jsx)(j.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, l.jsxs)('div', { children: [n ? (0, l.jsx)(m.DZ, { appearance: 'utrecht-heading-3', level: c, children: n }) : null, r, t] })] });
   var p = n(33062);
   const g = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => p.f4.includes(e.id)),
      c = n && p.f4.map((e) => n.find((t) => t.id === e)).filter(Boolean);
     return e && (0, l.jsx)(r.If, { sections: c.map((n) => ({ className: (0, s.A)('definition-of-done', n && `definition-of-done--${(0, p.fX)(n.title)}`), headingLevel: t, expanded: !1, label: n ? `${n.title} - ${n.progress.value} van ${n.progress.max}` : '', body: n && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(y, { children: n.tasks.map(({ checked: e, name: n, id: r }) => (0, l.jsx)(v, { headingLevel: t + 1, checked: e, title: n, description: (0, p.qZ)(r) }, r)) }), (0, l.jsx)(r.fz, { children: (0, l.jsxs)(r.N_, { href: `${n.url}?filterQuery=${e.title}`, children: [n.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    k = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && n.length
      ? (0, l.jsx)(i.AC, {
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
            o = (0, p.Pv)(e),
            a = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            d = e.tasks.filter(({ name: e, value: t }) => a.has(e) && URL.canParse(t) && 'https:' === new URL(t).protocol);
           return (0, l.jsx)(
            i.Zp,
            {
             className: 'implementation-card',
             children: (0, l.jsxs)(i.Wu, {
              children: [
               (0, l.jsx)(r.DZ, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, l.jsxs)(r.fz, { children: [(0, l.jsx)(h, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, l.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (d.length > 0 || o.length > 0) && (0, l.jsx)(r.DZ, { level: t + 1, children: 'Snel aan de slag' }),
               d.length > 0 &&
                (0, l.jsx)(l.Fragment, {
                 children: (0, l.jsx)(r.dk, {
                  links: d
                   .filter((e) => !!a.get(e.name))
                   .map((e) => {
                    const t = a.get(e.name);
                    return { children: t.desciption, icon: (0, l.jsx)(c.r, { brand: t.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, l.jsx)(l.Fragment, { children: o.map(({ frameworkName: e, tasks: n }) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(r.DZ, { level: t + 2, children: [s, ' in ', e] }), (0, l.jsx)(r.dk, { links: n.map((e) => ({ children: e.description, icon: (0, l.jsx)(c.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, l.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    q = ({ component: e, headingLevel: t }) => {
     const n = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = n?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(r.DZ, { level: t, children: 'Help om deze component te verbeteren' }), (0, l.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, l.jsxs)(r.Xy, { children: [s ? (0, l.jsxs)(r.Er, { children: ['Vul de ', (0, l.jsx)(r.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, l.jsxs)(r.Er, { children: [(0, l.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, l.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, l.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, l.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    f = ({ component: e, headingLevel: t, description: n }) => {
     const s = e && p.bo[e.relayStep];
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(u.p, { level: t, suffix: s && (0, l.jsx)(d.D, { state: s }), children: e.title }), (0, l.jsx)(r.fz, { lead: !0, children: n })] });
    };
  },
  90495(e, t, n) {
   'use strict';
   n.d(t, { AC: () => l, Fu: () => i, Wu: () => o, Zp: () => a });
   var r = n(46447),
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
 },
]);
