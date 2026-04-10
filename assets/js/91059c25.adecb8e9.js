(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [93787],
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
   t.d(n, { bo: () => s, KF: () => h, mJ: () => u, VZ: () => A, cR: () => _, Pv: () => g, qZ: () => l, kD: () => x, B2: () => v, Pc: () => r, f4: () => o, GT: () => b, fX: () => i, eQ: () => j, B_: () => f, o_: () => q, Rc: () => k });
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
    v = (e, n) => u(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    u = (e) => m(c(e.projects.flatMap((e) => p(e)))),
    g = (e) => {
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
   t.d(n, { VK: () => g, $9: () => f, mu: () => q, Fc: () => j, K_: () => x });
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
   const u = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    g = ({ component: e, headingLevel: n }) => {
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
     const n = (e && u[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(a.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(a.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  41895(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => b, component: () => T, contentTitle: () => x, default: () => w, description: () => _, frontMatter: () => j, issueNumber: () => A, metadata: () => a, title: () => k, toc: () => D }));
   const a = JSON.parse('{"id":"componenten/heading-6/index","title":"Heading 6","description":"Koptekst die in de koppenstructuur op het zesde niveau staat.","source":"@site/docs/componenten/heading-6/index.mdx","sourceDirName":"componenten/heading-6","slug":"/heading-6","permalink":"/heading-6","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-6/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 6","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 6","pagination_label":"Heading 6","description":"Koptekst die in de koppenstructuur op het zesde niveau staat.","slug":"/heading-6","keywords":["caption","content","h6","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 5","permalink":"/heading-5"},"next":{"title":"Heading Group","permalink":"/heading-group"}}');
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
   function u() {
    return (
     (u = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
         }
         return e;
        }),
     u.apply(null, arguments)
    );
   }
   const g = ({ title: e, titleId: n, ...t }) => p.createElement('svg', u({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': n }, t), e ? p.createElement('title', { id: n }, e) : null, s || (s = p.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = p.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), l || (l = p.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 259v22' })), o || (o = p.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), r || (r = p.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), d || (d = p.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), c || (c = p.createElement('path', { fill: '#0A2750', d: 'M319.892 270.104v1.806l.028 1.778h.462q1.204 0 1.89-.98.7-.995.7-2.814 0-1.848-.7-2.814-.686-.966-1.876-.966h-.476l-.028 1.75v2.24m-3.43-4.046v-.756h4.158q1.499 0 2.562.56a3.86 3.86 0 0 1 1.638 1.568q.574 1.022.574 2.45 0 1.456-.616 2.492a4 4 0 0 1-1.75 1.582q-1.12.546-2.66.546h-3.906v-.756l1.05-.112q.028-.854.028-1.736v-3.99q0-.882-.028-1.736zm9.829 8.442v-.658l.756-.168q.014-.504.014-1.092v-1.694q0-.574-.014-.952 0-.392-.028-.812l-.868-.126v-.546l2.94-.938.238.154-.042 2.03v2.898q0 .588.014 1.106l.7.14v.658zm1.862-8.022q-.49 0-.84-.308a1.04 1.04 0 0 1-.35-.798q0-.49.35-.798.35-.322.84-.322t.84.322q.35.307.35.798 0 .476-.35.798a1.23 1.23 0 0 1-.84.308m5.2 8.232q-.939 0-1.47-.448-.532-.462-.532-1.498v-.672q.014-.322.014-.728v-2.674h-.91v-.826l1.036-.14.7-1.96h1.428l-.028 1.974h1.47v.952h-1.47v3.92q0 .49.196.728.21.224.518.224.363 0 .756-.308l.35.336q-.28.532-.784.826-.49.294-1.274.294m5.38-.21v-.658l.756-.168q.014-.504.014-1.092v-1.694q0-.574-.014-.952 0-.392-.028-.812l-.868-.126v-.546l2.94-.938.238.154-.042 2.03v2.898q0 .588.014 1.106l.7.14v.658zm1.862-8.022q-.49 0-.84-.308a1.04 1.04 0 0 1-.35-.798q0-.49.35-.798.35-.322.84-.322.489 0 .84.322.35.307.35.798 0 .476-.35.798a1.23 1.23 0 0 1-.84.308m5.003 8.232a4.76 4.76 0 0 1-2.436-.644l.042-1.708h1.12l.238 1.386q.252.098.504.154.252.042.546.042.603 0 .924-.196.322-.21.322-.63a.77.77 0 0 0-.238-.56q-.237-.238-.938-.434l-.756-.224q-.811-.238-1.26-.77-.434-.532-.434-1.316 0-.966.756-1.624.757-.672 2.17-.672.616 0 1.134.154.532.14 1.078.42l-.098 1.526h-1.12l-.28-1.204q-.294-.112-.77-.112t-.77.196q-.28.197-.28.588 0 .28.224.504.225.21.952.434l.686.196q.995.294 1.428.84.434.546.434 1.33 0 1.106-.854 1.722-.84.602-2.324.602m10.373-6.468q-.392 0-.728.49-.321.476-.364 1.764h1.19q.504 0 .672-.196.183-.21.182-.686 0-.7-.28-1.036-.279-.336-.672-.336m.028 6.468q-1.021 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.447-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.575 0 .98-.21.406-.224.714-.546l.49.448q-.434.826-1.176 1.232-.741.406-1.764.406m7.273-6.468q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.183-.21.182-.686 0-.7-.28-1.036-.279-.336-.672-.336m.028 6.468q-1.022 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.447-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.575 0 .98-.21.406-.224.714-.546l.49.448q-.433.826-1.176 1.232-.741.406-1.764.406m3.801-.21v-.658l.756-.168q.014-.504.014-1.092v-1.834q0-.575-.014-.882 0-.322-.028-.742l-.854-.126v-.546l2.758-.938.252.154.084 1.008q.546-.644 1.078-.896a2.6 2.6 0 0 1 1.162-.266q.91 0 1.456.602.56.601.56 1.806v2.688q0 .575.014 1.092l.7.14v.658h-3.696v-.658l.728-.154q.014-.518.014-1.092v-2.506q0-.672-.182-.938-.182-.28-.588-.28-.546 0-1.204.504v3.22q0 .588.014 1.106l.658.14v.658zm15.877-6.146v-.616h2.646v.616l-.812.154-2.31 6.02h-1.064l-2.52-6.034-.686-.14v-.616h3.976v.616l-.882.182 1.316 3.584 1.218-3.598zm6.314 6.356q-1.092 0-1.89-.448a3.17 3.17 0 0 1-1.232-1.274q-.434-.826-.434-1.904t.462-1.876a3.4 3.4 0 0 1 1.288-1.246 3.67 3.67 0 0 1 1.806-.448q.994 0 1.792.434a3.24 3.24 0 0 1 1.288 1.246q.476.798.476 1.89t-.434 1.904-1.232 1.274q-.798.448-1.89.448m0-.728q.588 0 .882-.686t.294-2.17q0-1.498-.294-2.184t-.882-.686q-.602 0-.896.686t-.294 2.184q0 1.484.294 2.17t.896.686m8.012.728q-1.092 0-1.89-.448a3.17 3.17 0 0 1-1.232-1.274q-.435-.826-.434-1.904 0-1.078.462-1.876a3.37 3.37 0 0 1 1.288-1.246 3.67 3.67 0 0 1 1.806-.448q.994 0 1.792.434.811.434 1.288 1.246.476.798.476 1.89t-.434 1.904-1.232 1.274q-.798.448-1.89.448m0-.728q.588 0 .882-.686t.294-2.17q0-1.498-.294-2.184t-.882-.686q-.602 0-.896.686t-.294 2.184q0 1.484.294 2.17.293.686.896.686m4.332.518v-.658l.77-.154q.014-.518.014-1.106v-1.848q0-.392-.014-.644 0-.252-.014-.462 0-.224-.014-.504l-.854-.126v-.546l2.758-.938.252.154.126 1.652q.294-.895.826-1.344.531-.462 1.05-.462.462 0 .798.266.336.252.42.77-.015.546-.294.854a.93.93 0 0 1-.7.294q-.589 0-1.078-.658l-.084-.112a3.4 3.4 0 0 0-.574.742 3.5 3.5 0 0 0-.364.938v1.946q0 .56.014 1.05l1.106.238v.658zm6.194.014v-.658l.742-.154q.014-.504.014-1.092v-6.944l-.868-.112v-.588l2.898-.63.224.14-.056 1.96v1.974q.882-.896 2.03-.896.77 0 1.386.406.615.392.98 1.19.378.784.378 1.946 0 1.134-.42 1.96-.42.811-1.106 1.26a2.66 2.66 0 0 1-1.47.434q-1.149 0-1.848-.826l-.238.812zm3.962-5.782a1.2 1.2 0 0 0-.504.112 2.3 2.3 0 0 0-.462.294v4.004q.433.392.952.392.615 0 1.008-.602.405-.602.406-1.834 0-1.247-.392-1.806-.378-.56-1.008-.56m8.136-.49q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.183-.21.182-.686 0-.7-.28-1.036-.279-.336-.672-.336m.028 6.468q-1.022 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.447-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.575 0 .98-.21.407-.224.714-.546l.49.448q-.433.826-1.176 1.232-.741.406-1.764.406m7.273-6.468q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.183-.21.182-.686 0-.7-.28-1.036-.279-.336-.672-.336m.028 6.468q-1.022 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.447-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.575 0 .98-.21.406-.224.714-.546l.49.448q-.433.826-1.176 1.232-.741.406-1.764.406m3.541-.21v-.658l.77-.168q.014-.532.014-1.064.014-.532.014-1.05v-5.866l-.868-.14v-.588l2.94-.63.224.14-.056 1.96v6.188l.028 1.064.77.154v.658zm6.933-3.346q0 1.148.406 1.75.406.588 1.05.588.476 0 .868-.322v-4.172a1.3 1.3 0 0 0-.826-.294q-.644 0-1.078.602-.42.602-.42 1.848m2.506 3.5-.112-.798q-.812.854-1.974.854-.785 0-1.428-.406-.63-.406-.994-1.19-.364-.798-.364-1.932 0-1.148.434-1.96.448-.827 1.148-1.26a2.77 2.77 0 0 1 1.498-.448q.546 0 .952.196.406.181.742.546v-2.562l-.98-.14v-.588l2.954-.63.224.14-.056 1.96v7.266l.686.14v.658zm10.677-6.3v-.616h2.646v.616l-.812.154-2.31 6.02h-1.064l-2.52-6.034-.686-.14v-.616h3.976v.616l-.882.182 1.316 3.584 1.218-3.598zm8.175 6.342q-1.218 0-1.54-1.008a5 5 0 0 1-.868.756q-.405.266-1.134.266-.811 0-1.33-.462-.504-.462-.504-1.33 0-.504.224-.91.225-.406.812-.756t1.666-.658q.21-.07.49-.14t.574-.14v-.462q0-.938-.238-1.274-.224-.336-.896-.336h-.182a2 2 0 0 0-.196.014l-.07.616q-.013.686-.322.994a.94.94 0 0 1-.7.308q-.77 0-.938-.7.057-.868.882-1.414.826-.546 2.338-.546 1.345 0 1.918.616.588.616.588 2.03v3.136q0 .406.308.406a.4.4 0 0 0 .21-.056.9.9 0 0 0 .21-.252l.378.252q-.252.56-.658.812-.392.238-1.022.238m-3.304-2.142q0 .518.238.77a.82.82 0 0 0 .924.182q.168-.07.532-.322v-2.268a5 5 0 0 0-.364.126q-.168.056-.294.112a1.8 1.8 0 0 0-.756.56q-.28.35-.28.84m5.324 1.946v-.658l.756-.168q.014-.504.014-1.092v-1.834q0-.575-.014-.882 0-.322-.028-.742l-.854-.126v-.546l2.758-.938.252.154.084 1.008q.546-.644 1.078-.896a2.6 2.6 0 0 1 1.162-.266q.91 0 1.456.602.56.601.56 1.806v2.688q0 .575.014 1.092l.7.14v.658h-3.696v-.658l.728-.154q.014-.518.014-1.092v-2.506q0-.672-.182-.938-.183-.28-.588-.28-.547 0-1.204.504v3.22q0 .588.014 1.106l.658.14v.658zm15.093-6.258q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.182-.21.182-.686 0-.7-.28-1.036t-.672-.336m.028 6.468q-1.022 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.448-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.574 0 .98-.21.407-.224.714-.546l.49.448q-.434.826-1.176 1.232-.743.406-1.764.406m7.273-6.468q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.182-.21.182-.686 0-.7-.28-1.036t-.672-.336m.028 6.468q-1.023 0-1.806-.42a3.1 3.1 0 0 1-1.232-1.232q-.448-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218q.825-.42 1.722-.42.923 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.573 0 .98-.21.405-.224.714-.546l.49.448q-.435.826-1.176 1.232-.743.406-1.764.406m3.8-.21v-.658l.756-.168q.014-.504.014-1.092v-1.834q0-.575-.014-.882 0-.322-.028-.742l-.854-.126v-.546l2.758-.938.252.154.084 1.008q.546-.644 1.078-.896a2.6 2.6 0 0 1 1.162-.266q.91 0 1.456.602.56.601.56 1.806v2.688q0 .575.014 1.092l.7.14v.658h-3.696v-.658l.728-.154q.014-.518.014-1.092v-2.506q0-.672-.182-.938-.181-.28-.588-.28-.546 0-1.204.504v3.22q0 .588.014 1.106l.658.14v.658zm11.622 0v-.658l.756-.168q.014-.504.014-1.092v-6.888l-.868-.14v-.588l2.898-.63.224.14-.056 1.96v2.254q.56-.658 1.078-.91a2.5 2.5 0 0 1 1.148-.266q.924 0 1.484.602.56.601.56 1.806v2.688q0 .575.014 1.092l.7.14v.658h-3.682v-.658l.728-.154q.014-.518.014-1.092v-2.506q0-.686-.168-.952-.154-.266-.588-.266-.28 0-.602.168-.323.168-.644.476v3.08q0 .588.014 1.106l.658.14v.658zm12.112-6.258q-.392 0-.728.49-.322.476-.364 1.764h1.19q.504 0 .672-.196.183-.21.182-.686 0-.7-.28-1.036-.279-.336-.672-.336m.028 6.468q-1.022 0-1.806-.42a3.13 3.13 0 0 1-1.232-1.232q-.447-.812-.448-1.932 0-1.176.518-1.974a3.4 3.4 0 0 1 1.358-1.218 3.75 3.75 0 0 1 1.722-.42q.924 0 1.568.392.658.392.994 1.064.336.659.336 1.512 0 .406-.084.742h-4.046q.07 1.106.602 1.638.546.518 1.274.518.575 0 .98-.21.407-.224.714-.546l.49.448q-.433.826-1.176 1.232-.741.406-1.764.406m9.178-.014q-1.218 0-1.54-1.008a5.2 5.2 0 0 1-.868.756q-.406.266-1.134.266-.812 0-1.33-.462-.504-.462-.504-1.33 0-.504.224-.91t.812-.756 1.666-.658q.21-.07.49-.14t.574-.14v-.462q0-.938-.238-1.274-.224-.336-.896-.336h-.182a2 2 0 0 0-.196.014l-.07.616q-.014.686-.322.994a.94.94 0 0 1-.7.308q-.77 0-.938-.7.056-.868.882-1.414t2.338-.546q1.344 0 1.918.616.588.616.588 2.03v3.136q0 .406.308.406a.4.4 0 0 0 .21-.056.9.9 0 0 0 .21-.252l.378.252q-.252.56-.658.812-.392.238-1.022.238m-3.304-2.142q0 .518.238.77a.82.82 0 0 0 .924.182 3.5 3.5 0 0 0 .532-.322v-2.268a5 5 0 0 0-.364.126q-.168.056-.294.112a1.8 1.8 0 0 0-.756.56 1.3 1.3 0 0 0-.28.84m7.703-1.4q0 1.148.406 1.75.406.588 1.05.588.477 0 .868-.322v-4.172a1.3 1.3 0 0 0-.826-.294q-.643 0-1.078.602-.42.602-.42 1.848m2.506 3.5-.112-.798q-.812.854-1.974.854-.783 0-1.428-.406-.63-.406-.994-1.19-.364-.798-.364-1.932 0-1.148.434-1.96.449-.827 1.148-1.26a2.78 2.78 0 0 1 1.498-.448q.547 0 .952.196.406.181.742.546v-2.562l-.98-.14v-.588l2.954-.63.224.14-.056 1.96v7.266l.686.14v.658zm3.455-.154v-.658l.756-.168q.014-.504.014-1.092v-1.694q0-.574-.014-.952 0-.392-.028-.812l-.868-.126v-.546l2.94-.938.238.154-.042 2.03v2.898q0 .588.014 1.106l.7.14v.658zm1.862-8.022q-.49 0-.84-.308a1.04 1.04 0 0 1-.35-.798q0-.49.35-.798.35-.322.84-.322t.84.322q.35.307.35.798 0 .476-.35.798a1.23 1.23 0 0 1-.84.308m2.54 8.022v-.658l.756-.168q.014-.504.014-1.092v-1.834q0-.575-.014-.882 0-.322-.028-.742l-.854-.126v-.546l2.758-.938.252.154.084 1.008q.546-.644 1.078-.896a2.6 2.6 0 0 1 1.162-.266q.91 0 1.456.602.56.601.56 1.806v2.688q0 .575.014 1.092l.7.14v.658h-3.696v-.658l.728-.154q.014-.518.014-1.092v-2.506q0-.672-.182-.938-.183-.28-.588-.28-.546 0-1.204.504v3.22q0 .588.014 1.106l.658.14v.658zm11.665-3.136a.78.78 0 0 0 .728-.434q.252-.434.252-1.176t-.252-1.148q-.238-.42-.7-.42a.77.77 0 0 0-.714.42q-.238.42-.238 1.162 0 .743.224 1.176a.74.74 0 0 0 .7.42m-1.862 4.298q0 .616.462.896.462.294 1.414.294 1.05 0 1.582-.308t.532-.77a.83.83 0 0 0-.224-.56q-.225-.238-.798-.238h-1.47q-.77 0-1.274-.126a2 2 0 0 0-.168.378 1.5 1.5 0 0 0-.056.434m1.876-3.64q-.729 0-1.274-.168a1.3 1.3 0 0 0-.168.644q0 .238.182.392.182.14.63.14h1.638q1.064 0 1.694.266.63.252.896.714.28.448.28 1.064 0 .7-.462 1.288-.462.602-1.386.952-.91.364-2.254.364-1.163 0-1.82-.238-.658-.224-.924-.602a1.36 1.36 0 0 1-.266-.798q0-.896 1.162-1.442-.435-.182-.63-.476a1.2 1.2 0 0 1-.182-.644q0-.49.28-.924.293-.448.812-.896-.575-.294-.854-.784a2.16 2.16 0 0 1-.28-1.092q0-.98.714-1.624.727-.644 2.212-.644.755 0 1.316.168.56.168.91.476l1.568-.672.224.14v1.078h-1.33q.252.462.252 1.078 0 .938-.728 1.596-.715.644-2.212.644' })));
   var q = t(72401),
    f = t(37131);
   const j = { title: 'Heading 6', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 6', pagination_label: 'Heading 6', description: 'Koptekst die in de koppenstructuur op het zesde niveau staat.', slug: '/heading-6', keywords: ['caption', 'content', 'h6', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    x = void 0,
    b = {},
    k = 'Heading 6',
    _ = 'Koptekst die in de koppenstructuur op het zesde niveau staat.',
    A = 262,
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
     (0, m.jsxs)(m.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, m.jsx)(f.Fc, { component: T, headingLevel: 1, description: _ }), '\n', (0, m.jsx)(q.e, { component: T }), '\n', (0, m.jsx)(n.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, m.jsx)(t, { component: T, illustration: g }), '\n', (0, m.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, m.jsx)(f.VK, { component: T, headingLevel: 3 }), '\n', (0, m.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, m.jsx)(f.mu, { component: T, headingLevel: 3 }), '\n', (0, m.jsx)(f.K_, { component: T }), '\n', (0, m.jsx)(f.$9, { component: T, headingLevel: 2 })] })
    );
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, h.R)(), ...e.components };
    return n ? (0, m.jsx)(n, { ...e, children: (0, m.jsx)(N, { ...e }) }) : N(e);
   }
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
