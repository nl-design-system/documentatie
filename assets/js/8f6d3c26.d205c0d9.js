(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [50537],
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
  33062(e, n, t) {
   'use strict';
   t.d(n, { bo: () => s, KF: () => h, mJ: () => v, VZ: () => T, cR: () => _, Pv: () => q, qZ: () => l, kD: () => b, B2: () => p, Pc: () => r, f4: () => o, GT: () => x, fX: () => i, eQ: () => j, B_: () => f, o_: () => g, Rc: () => k });
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
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return m(c(n));
    },
    p = (e, n) => v(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    v = (e) => m(c(e.projects.flatMap((e) => u(e)))),
    q = (e) => {
     const n = u(e),
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
    g = (e) => e.join('.'),
    f = (e) => '--' + e.join('-'),
    j = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? b(e[t], [...n, t]) : []));
   }
   function x(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, g(e)), n.get(e));
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
    T = () => {
     const e = a.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
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
  71909(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => x, component: () => A, contentTitle: () => b, default: () => V, description: () => _, frontMatter: () => j, issueNumber: () => T, metadata: () => a, title: () => k, toc: () => N }));
   const a = JSON.parse('{"id":"componenten/heading-3/index","title":"Heading 3","description":"Koptekst die in de koppenstructuur op het derde niveau staat.","source":"@site/docs/componenten/heading-3/index.mdx","sourceDirName":"componenten/heading-3","slug":"/heading-3","permalink":"/heading-3","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-3/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 3","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 3","pagination_label":"Heading 3","description":"Koptekst die in de koppenstructuur op het derde niveau staat.","slug":"/heading-3","keywords":["caption","content","h3","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 2","permalink":"/heading-2"},"next":{"title":"Heading 4","permalink":"/heading-4"}}');
   var s,
    i,
    l,
    o,
    r,
    d,
    c,
    m = t(86070),
    h = t(18439),
    p = t(87069),
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
   const q = ({ title: e, titleId: n, ...t }) => u.createElement('svg', v({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst die iets groter is dan gebruikelijk, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': n }, t), e ? u.createElement('title', { id: n }, e) : null, s || (s = u.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = u.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), l || (l = u.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 240v60' })), o || (o = u.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), r || (r = u.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), d || (d = u.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), c || (c = u.createElement('path', { fill: '#0A2750', d: 'M322.672 254.464v3.096l.048 3.048h.792q2.064 0 3.24-1.68 1.2-1.704 1.2-4.824 0-3.168-1.2-4.824-1.176-1.656-3.216-1.656h-.816l-.048 3v3.84m-5.88-6.936v-1.296h7.128q2.568 0 4.392.96a6.6 6.6 0 0 1 2.808 2.688q.984 1.752.984 4.2 0 2.496-1.056 4.272t-3 2.712q-1.92.936-4.56.936h-6.696v-1.296l1.8-.192q.048-1.464.048-2.976v-6.84q0-1.512-.048-2.976zM333.642 262v-1.128l1.296-.288q.024-.864.024-1.872v-2.904q0-.984-.024-1.632 0-.672-.048-1.392l-1.488-.216v-.936l5.04-1.608.408.264-.072 3.48v4.968q0 1.008.024 1.896l1.2.24V262zm3.192-13.752q-.84 0-1.44-.528-.6-.552-.6-1.368 0-.84.6-1.368.6-.552 1.44-.552t1.44.552q.6.528.6 1.368 0 .816-.6 1.368-.6.528-1.44.528m8.914 14.112q-1.608 0-2.52-.768-.912-.792-.912-2.568v-1.152q.024-.552.024-1.248v-4.584h-1.56v-1.416l1.776-.24 1.2-3.36h2.448l-.048 3.384h2.52v1.632h-2.52v6.72q0 .84.336 1.248.36.384.888.384.624 0 1.296-.528l.6.576a3.5 3.5 0 0 1-1.344 1.416q-.84.504-2.184.504m9.222-.36v-1.128l1.296-.288q.024-.864.024-1.872v-2.904q0-.984-.024-1.632 0-.672-.048-1.392l-1.488-.216v-.936l5.04-1.608.408.264-.072 3.48v4.968q0 1.008.024 1.896l1.2.24V262zm3.192-13.752q-.84 0-1.44-.528-.6-.552-.6-1.368 0-.84.6-1.368.6-.552 1.44-.552t1.44.552q.6.528.6 1.368 0 .816-.6 1.368-.6.528-1.44.528m8.578 14.112q-2.28 0-4.176-1.104l.072-2.928h1.92l.408 2.376q.432.168.864.264.432.072.936.072 1.032 0 1.584-.336.552-.36.552-1.08 0-.552-.408-.96t-1.608-.744l-1.296-.384q-1.392-.408-2.16-1.32-.744-.912-.744-2.256 0-1.656 1.296-2.784 1.296-1.152 3.72-1.152a6.8 6.8 0 0 1 1.944.264q.912.24 1.848.72l-.168 2.616h-1.92l-.48-2.064q-.504-.192-1.32-.192t-1.32.336q-.48.336-.48 1.008 0 .48.384.864.384.36 1.632.744l1.176.336q1.704.504 2.448 1.44t.744 2.28q0 1.896-1.464 2.952-1.44 1.032-3.984 1.032m17.782-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m12.468-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m6.516-.36v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V262h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V262zm27.218-10.536v-1.056h4.536v1.056l-1.392.264-3.96 10.32h-1.824l-4.32-10.344-1.176-.24v-1.056h6.816v1.056l-1.512.312 2.256 6.144 2.088-6.168zm10.824 10.896q-1.872 0-3.24-.768a5.44 5.44 0 0 1-2.112-2.184q-.744-1.416-.744-3.264t.792-3.216a5.8 5.8 0 0 1 2.208-2.136q1.392-.768 3.096-.768t3.072.744a5.56 5.56 0 0 1 2.208 2.136q.816 1.368.816 3.24t-.744 3.264a5.44 5.44 0 0 1-2.112 2.184q-1.368.768-3.24.768m0-1.248q1.008 0 1.512-1.176t.504-3.72q0-2.568-.504-3.744t-1.512-1.176q-1.032 0-1.536 1.176t-.504 3.744q0 2.544.504 3.72t1.536 1.176m13.734 1.248q-1.872 0-3.24-.768a5.44 5.44 0 0 1-2.112-2.184q-.744-1.416-.744-3.264t.792-3.216a5.8 5.8 0 0 1 2.208-2.136q1.392-.768 3.096-.768t3.072.744a5.56 5.56 0 0 1 2.208 2.136q.816 1.368.816 3.24t-.744 3.264a5.44 5.44 0 0 1-2.112 2.184q-1.368.768-3.24.768m0-1.248q1.008 0 1.512-1.176t.504-3.72q0-2.568-.504-3.744t-1.512-1.176q-1.032 0-1.536 1.176t-.504 3.744q0 2.544.504 3.72t1.536 1.176m7.426.888v-1.128l1.32-.264q.024-.888.024-1.896v-3.168q0-.672-.024-1.104 0-.432-.024-.792 0-.384-.024-.864l-1.464-.216v-.936l4.728-1.608.432.264.216 2.832q.504-1.536 1.416-2.304.912-.792 1.8-.792.792 0 1.368.456.576.432.72 1.32-.024.936-.504 1.464-.48.504-1.2.504-1.008 0-1.848-1.128l-.144-.192a6 6 0 0 0-.984 1.272 6 6 0 0 0-.624 1.608v3.336q0 .96.024 1.8l1.896.408V262zm10.619.024v-1.128l1.272-.264q.024-.864.024-1.872v-11.904l-1.488-.192v-1.008l4.968-1.08.384.24-.096 3.36v3.384q1.512-1.536 3.48-1.536 1.32 0 2.376.696 1.056.672 1.68 2.04.648 1.344.648 3.336 0 1.944-.72 3.36-.72 1.392-1.896 2.16a4.55 4.55 0 0 1-2.52.744q-1.968 0-3.168-1.416l-.408 1.392zm6.792-9.912q-.456 0-.864.192a4 4 0 0 0-.792.504v6.864q.744.672 1.632.672 1.056 0 1.728-1.032.696-1.032.696-3.144 0-2.136-.672-3.096-.648-.96-1.728-.96m13.948-.84q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m12.468-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m6.069-.36v-1.128l1.32-.288q.024-.912.024-1.824a68 68 0 0 0 .024-1.8v-10.056l-1.488-.24v-1.008l5.04-1.08.384.24-.096 3.36v10.608l.048 1.824 1.32.264V262zm11.886-5.736q0 1.968.696 3 .696 1.008 1.8 1.008.816 0 1.488-.552v-7.152a2.26 2.26 0 0 0-1.416-.504q-1.104 0-1.848 1.032-.72 1.032-.72 3.168m4.296 6-.192-1.368q-1.392 1.464-3.384 1.464a4.5 4.5 0 0 1-2.448-.696q-1.08-.696-1.704-2.04-.624-1.368-.624-3.312 0-1.968.744-3.36.768-1.416 1.968-2.16 1.224-.768 2.568-.768.936 0 1.632.336.696.312 1.272.936v-4.392l-1.68-.24v-1.008l5.064-1.08.384.24-.096 3.36v12.456l1.176.24V262zm18.303-10.8v-1.056h4.536v1.056l-1.392.264-3.96 10.32h-1.824l-4.32-10.344-1.177-.24v-1.056h6.817v1.056l-1.512.312 2.256 6.144 2.088-6.168zm14.015 10.872q-2.088 0-2.64-1.728-.768.816-1.488 1.296-.696.456-1.944.456-1.392 0-2.28-.792-.864-.792-.864-2.28 0-.864.384-1.56t1.392-1.296 2.856-1.128q.36-.12.84-.24t.984-.24v-.792q0-1.608-.408-2.184-.384-.576-1.536-.576h-.312q-.144 0-.336.024l-.12 1.056q-.024 1.176-.552 1.704-.504.528-1.2.528-1.32 0-1.608-1.2.096-1.488 1.512-2.424t4.008-.936q2.304 0 3.288 1.056 1.008 1.056 1.008 3.48v5.376q0 .696.528.696a.7.7 0 0 0 .36-.096q.168-.12.36-.432l.648.432q-.432.96-1.128 1.392-.672.408-1.752.408m-5.664-3.672q0 .888.408 1.32a1.41 1.41 0 0 0 1.584.312q.288-.12.912-.552v-3.888a10 10 0 0 0-.624.216q-.288.096-.504.192-.816.336-1.296.96-.48.6-.48 1.44m9.126 3.336v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V262h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V262zm25.874-10.728q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m12.467-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m6.516-.36v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V262h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V262zm-293.039 30v-1.128l1.296-.288q.024-.864.024-1.872v-11.808l-1.488-.24v-1.008l4.968-1.08.384.24-.096 3.36v3.864q.96-1.128 1.848-1.56a4.34 4.34 0 0 1 1.968-.456q1.584 0 2.544 1.032t.96 3.096v4.608q0 .984.024 1.872l1.2.24V292h-6.312v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.176-.288-1.632-.264-.456-1.008-.456-.48 0-1.032.288a4.9 4.9 0 0 0-1.104.816v5.28q0 1.008.024 1.896l1.128.24V292zm20.765-10.728q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.887-3.384.913-1.392 2.329-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m15.733-.024q-2.088 0-2.64-1.728-.768.816-1.488 1.296-.696.456-1.944.456-1.392 0-2.28-.792-.864-.792-.864-2.28 0-.864.384-1.56t1.392-1.296 2.856-1.128q.36-.12.84-.24t.984-.24v-.792q0-1.608-.408-2.184-.384-.576-1.536-.576h-.312q-.144 0-.336.024l-.12 1.056q-.024 1.176-.552 1.704-.504.528-1.2.528-1.32 0-1.608-1.2.096-1.488 1.512-2.424t4.008-.936q2.304 0 3.288 1.056 1.008 1.056 1.008 3.48v5.376q0 .696.528.696a.7.7 0 0 0 .36-.096q.168-.12.36-.432l.648.432q-.432.96-1.128 1.392-.672.408-1.752.408m-5.664-3.672q0 .888.408 1.32a1.41 1.41 0 0 0 1.584.312q.288-.12.912-.552v-3.888a10 10 0 0 0-.624.216q-.288.096-.504.192-.816.336-1.296.96-.48.6-.48 1.44m13.206-2.4q0 1.968.696 3 .696 1.008 1.8 1.008.816 0 1.488-.552v-7.152a2.26 2.26 0 0 0-1.416-.504q-1.104 0-1.848 1.032-.72 1.032-.72 3.168m4.296 6-.192-1.368q-1.392 1.464-3.384 1.464a4.5 4.5 0 0 1-2.448-.696q-1.08-.696-1.704-2.04-.624-1.368-.624-3.312 0-1.968.744-3.36.768-1.416 1.968-2.16 1.224-.768 2.568-.768.936 0 1.632.336.696.312 1.272.936v-4.392l-1.68-.24v-1.008l5.064-1.08.384.24-.096 3.36v12.456l1.176.24V292zm5.922-.264v-1.128l1.296-.288q.024-.864.024-1.872v-2.904q0-.984-.024-1.632 0-.672-.048-1.392l-1.488-.216v-.936l5.04-1.608.408.264-.072 3.48v4.968q0 1.008.024 1.896l1.2.24V292zm3.192-13.752q-.84 0-1.44-.528-.6-.552-.6-1.368 0-.84.6-1.368.6-.552 1.44-.552t1.44.552q.6.528.6 1.368 0 .816-.6 1.368-.6.528-1.44.528M378.524 292v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V292h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V292zm19.997-5.376q.84 0 1.248-.744.432-.744.432-2.016t-.432-1.968q-.408-.72-1.2-.72-.816 0-1.224.72t-.408 1.992.384 2.016q.384.72 1.2.72m-3.192 7.368q0 1.056.792 1.536.792.504 2.424.504 1.8 0 2.712-.528t.912-1.32q0-.528-.384-.96-.384-.408-1.368-.408h-2.52q-1.32 0-2.184-.216-.192.336-.288.648a2.6 2.6 0 0 0-.096.744m3.216-6.24q-1.248 0-2.184-.288a2.2 2.2 0 0 0-.288 1.104q0 .408.312.672.312.24 1.08.24h2.808q1.824 0 2.904.456 1.08.432 1.536 1.224.48.768.48 1.824 0 1.2-.792 2.208-.792 1.032-2.376 1.632-1.56.624-3.864.624-1.992 0-3.12-.408-1.128-.384-1.584-1.032t-.456-1.368q0-1.536 1.992-2.472-.744-.312-1.08-.816a2.06 2.06 0 0 1-.312-1.104q0-.84.48-1.584.504-.768 1.392-1.536-.984-.504-1.464-1.344a3.7 3.7 0 0 1-.48-1.872q0-1.68 1.224-2.784 1.248-1.104 3.792-1.104 1.296 0 2.256.288t1.56.816l2.688-1.152.384.24v1.848h-2.28q.432.792.432 1.848 0 1.608-1.248 2.736-1.224 1.104-3.792 1.104' })));
   var g = t(72401),
    f = t(80506);
   const j = { title: 'Heading 3', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 3', pagination_label: 'Heading 3', description: 'Koptekst die in de koppenstructuur op het derde niveau staat.', slug: '/heading-3', keywords: ['caption', 'content', 'h3', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    b = void 0,
    x = {},
    k = 'Heading 3',
    _ = 'Koptekst die in de koppenstructuur op het derde niveau staat.',
    T = 259,
    A = p.find((e) => e.number === T),
    N = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function D(e) {
    const n = { h2: 'h2', ...(0, h.R)(), ...e.components },
     { ComponentAnatomy: t } = n;
    return (
     t ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('ComponentAnatomy', !0),
     (0, m.jsxs)(m.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, m.jsx)(f.Fc, { component: A, headingLevel: 1, description: _ }), '\n', (0, m.jsx)(g.e, { component: A }), '\n', (0, m.jsx)(n.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, m.jsx)(t, { component: A, illustration: q }), '\n', (0, m.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, m.jsx)(f.VK, { component: A, headingLevel: 3 }), '\n', (0, m.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, m.jsx)(f.mu, { component: A, headingLevel: 3 }), '\n', (0, m.jsx)(f.$9, { component: A, headingLevel: 2 })] })
    );
   }
   function V(e = {}) {
    const { wrapper: n } = { ...(0, h.R)(), ...e.components };
    return n ? (0, m.jsx)(n, { ...e, children: (0, m.jsx)(D, { ...e }) }) : D(e);
   }
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
  80506(e, n, t) {
   'use strict';
   t.d(n, { VK: () => v, $9: () => g, mu: () => q, Fc: () => f });
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
    p = t(58876),
    u = t(33062);
   const v = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => u.f4.includes(e.id)),
      i = t && u.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(a.If, { sections: i.map((t) => ({ className: (0, s.A)('definition-of-done', t && `definition-of-done--${(0, u.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(p._, { children: t.tasks.map(({ checked: e, name: t, id: a }) => (0, d.jsx)(p.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, u.qZ)(a) }, a)) }), (0, d.jsx)(a.fz, { children: (0, d.jsxs)(a.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    q = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !u.f4.includes(e.id));
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
            o = (0, u.Pv)(e),
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
    g = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(a.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(a.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(a.Xy, { children: [s ? (0, d.jsxs)(a.Er, { children: ['Vul de ', (0, d.jsx)(a.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(a.Er, { children: [(0, d.jsxs)(a.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(a.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(a.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(a.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    f = ({ component: e, headingLevel: n, description: t }) => {
     const s = e && u.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(h.p, { level: n, suffix: s && (0, d.jsx)(m.D, { state: s }), children: e.title }), (0, d.jsx)(a.fz, { lead: !0, children: t })] });
    };
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
