(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [50537],
 {
  14889: (e, t, n) => {
   'use strict';
   n.d(t, { AC: () => l, Fu: () => c, Wu: () => o, Zp: () => a });
   var r = n(68873),
    s = n(13526),
    i = n(86070);
   const c = ({ background: e, children: t, className: n, ...r }) => (0, i.jsx)('div', { className: (0, s.A)('card__illustration', e && `card__illustration--${e}`, n), ...r, children: t }),
    o = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    a = ({ href: e, appearance: t, className: n, component: c = 'div', background: o, children: a }) => {
     const l = (e) => ('article' === c ? (0, i.jsx)('article', { ...e }) : 'section' === c ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      h = (0, i.jsx)(l, { className: (0, s.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, n), children: a });
     return e ? (0, i.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: h }) : h;
    },
    l = ({ appearance: e = 'medium', children: t, className: n }) => (0, i.jsx)('div', { className: (0, s.A)('cardgroup', `cardgroup--${e}`, n), children: t });
  },
  36444: (e, t, n) => {
   'use strict';
   n.d(t, { D: () => o });
   var r = n(68873),
    s = n(13526),
    i = n(75916),
    c = n(86070);
   const o = ({ state: e }) => {
    const t = (0, i.fX)(e);
    return (0, c.jsx)(r.KE, { className: (0, s.A)('estafette-badge', t && `estafette-badge--${t}`), children: e });
   };
  },
  42759: (e, t, n) => {
   'use strict';
   n.d(t, { e: () => o });
   var r = n(46563),
    s = n(30758),
    i = n(75916),
    c = n(86070);
   const o = ({ component: e }) => {
    const { title: t } = e,
     o = (0, i.fX)(t),
     a = s.lazy(() => n(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, c.jsx)(s.Suspense, { fallback: null, children: (0, c.jsx)(r.o, { omitH1: !0, headingLevel: 1, children: (0, c.jsx)(a, {}) }) });
   };
  },
  46563: (e, t, n) => {
   'use strict';
   n.d(t, { o: () => h });
   var r = n(85248),
    s = n(68873),
    i = n(86070);
   const c = (e, t) => {
     const n = new URL(t, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === n.protocol) {
      const { pathname: n, search: r, hash: s } = new URL(t, new URL(e, 'http://example.com/'));
      return n + r + s;
     }
     return n.toString();
    },
    o = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    a = (e) => ({ img: ({ src: t, ...n }) => (0, i.jsx)('img', { ...n, src: c(e, t), className: 'utrecht-img utrecht-img--fit' }) }),
    l = (e, t) => {
     if (e) {
      const e = { ...o[t - 1] };
      return (e.h1 = () => null), e;
     }
     return o[t];
    },
    h = ({ children: e, omitH1: t = !1, headingLevel: n = 1, baseUrl: s = '', components: c = {} }) => (0, i.jsx)(r.x, { components: { ...l(t, n), ...a(s), ...c }, children: e });
  },
  50341: (e, t, n) => {
   'use strict';
   n.d(t, { VK: () => x, $9: () => w, mu: () => _, Fc: () => T });
   var r = n(14537),
    s = n(13526),
    i = n(74172),
    c = n(15089),
    o = n(28377),
    a = n(33648),
    l = n(83386),
    h = n(86070);
   const d = { figma: (0, h.jsx)(i.A, {}), github: (0, h.jsx)(c.A, {}), npm: (0, h.jsx)(o.A, {}), storybook: (0, h.jsx)(a.A, {}) },
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
    f = ({ checked: e, children: t, title: n, description: r, headingLevel: i = 3 }) => (0, h.jsxs)('li', { className: (0, s.A)('task-list-item'), children: [(0, h.jsxs)('div', { className: (0, s.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, h.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, h.jsx)(q.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, h.jsxs)('div', { children: [(0, h.jsx)(p.DZ, { appearance: 'utrecht-heading-3', level: i, children: n }), r, t] })] });
   var b = n(75916);
   const x = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => b.f4.includes(e.id)),
      i = n && b.f4.map((e) => n.find((t) => t.id === e)).filter(Boolean);
     return e && (0, h.jsx)(r.If, { sections: i.map((n) => ({ className: (0, s.A)('definition-of-done', n && `definition-of-done--${(0, b.fX)(n.title)}`), headingLevel: t, expanded: !1, label: n ? `${n.title} - ${n.progress.value} van ${n.progress.max}` : '', body: n && (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(k, { children: n.tasks.map(({ checked: e, name: n, id: r }) => (0, h.jsx)(f, { headingLevel: t + 1, checked: e, title: n, description: (0, b.qZ)(r) }, r)) }), (0, h.jsx)(r.fz, { children: (0, h.jsxs)(r.N_, { href: `${n.url}?filterQuery=${e.title}`, children: [n.title, ' projectbord op GitHub'] }) })] }) })) });
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
            i = (0, b.Pv)(e),
            c = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            o = e.tasks.filter(({ name: e, value: t }) => c.has(e) && URL.canParse(t) && 'https:' === new URL(t).protocol);
           return (0, h.jsx)(
            m.Zp,
            {
             className: 'implementation-card',
             children: (0, h.jsxs)(m.Wu, {
              children: [
               (0, h.jsx)(r.DZ, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, h.jsxs)(r.fz, { children: [(0, h.jsx)(y, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, h.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (o.length > 0 || i.length > 0) && (0, h.jsx)(r.DZ, { level: t + 1, children: 'Snel aan de slag' }),
               o.length > 0 &&
                (0, h.jsx)(h.Fragment, {
                 children: (0, h.jsx)(r.dk, {
                  links: o
                   .filter((e) => !!c.get(e.name))
                   .map((e) => {
                    const t = c.get(e.name);
                    return { children: t.desciption, icon: (0, h.jsx)(u, { brand: t.brand }), href: e.value };
                   }),
                 }),
                }),
               i.length > 0 && (0, h.jsx)(h.Fragment, { children: i.map(({ frameworkName: e, tasks: n }) => (0, h.jsxs)(h.Fragment, { children: [(0, h.jsxs)(r.DZ, { level: t + 2, children: [s, ' in ', e] }), (0, h.jsx)(r.dk, { links: n.map((e) => ({ children: e.description, icon: (0, h.jsx)(u, { brand: e.brand }), href: e.value })) })] })) }),
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
    i = n(30758),
    c = n(75916),
    o = n(86070);
   const a = ({ children: e }) => (0, o.jsx)('ol', { className: 'nlds-anatomy-list', children: e }),
    l = ({ children: e }) => (0, o.jsx)('li', { className: 'nlds-anatomy-list__item', children: e }),
    h = ({ component: e, illustration: t }) => {
     const { title: h } = e,
      d = (0, c.fX)(h),
      u = i.lazy(() => n(51580)(`./${d}-docs/docs/anatomy/anatomy.md`).catch(() => ({ default: () => null })));
     return (0, o.jsx)(i.Suspense, { fallback: null, children: (0, o.jsxs)('figure', { className: (0, s.A)('component-anatomy'), children: [t && (0, o.jsx)(t, { height: null, className: (0, s.A)('component-anatomy__illustration') }), t && u && (0, o.jsx)('figcaption', { children: (0, o.jsx)(r.o, { omitH1: !0, headingLevel: 1, components: { ol: ({ children: e }) => (0, o.jsx)(a, { children: e }), li: ({ children: e }) => (0, o.jsx)(l, { children: e }) }, children: (0, o.jsx)(u, {}) }) })] }) });
    };
  },
  62340: (e, t, n) => {
   'use strict';
   n.r(t), n.d(t, { assets: () => b, component: () => T, contentTitle: () => f, default: () => N, description: () => _, frontMatter: () => k, issueNumber: () => w, metadata: () => r, title: () => x, toc: () => z });
   const r = JSON.parse('{"id":"componenten/heading-3/index","title":"Heading 3","description":"Koptekst die in de koppenstructuur op het derde niveau staat.","source":"@site/docs/componenten/heading-3/index.mdx","sourceDirName":"componenten/heading-3","slug":"/heading-3","permalink":"/heading-3","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-3/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 3","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 3","pagination_label":"Heading 3","description":"Koptekst die in de koppenstructuur op het derde niveau staat.","slug":"/heading-3","keywords":["caption","content","h3","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 2","permalink":"/heading-2"},"next":{"title":"Heading 4","permalink":"/heading-4"}}');
   var s,
    i,
    c,
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
   const g = ({ title: e, titleId: t, ...n }) => j.createElement('svg', y({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst die iets groter is dan gebruikelijk, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': t }, n), e ? j.createElement('title', { id: t }, e) : null, s || (s = j.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = j.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), c || (c = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 240v60' })), o || (o = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), a || (a = j.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), l || (l = j.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), h || (h = j.createElement('path', { fill: '#0A2750', d: 'M322.672 254.464v3.096l.048 3.048h.792q2.064 0 3.24-1.68 1.2-1.704 1.2-4.824 0-3.168-1.2-4.824-1.176-1.656-3.216-1.656h-.816l-.048 3v3.84m-5.88-6.936v-1.296h7.128q2.568 0 4.392.96a6.6 6.6 0 0 1 2.808 2.688q.984 1.752.984 4.2 0 2.496-1.056 4.272t-3 2.712q-1.92.936-4.56.936h-6.696v-1.296l1.8-.192q.048-1.464.048-2.976v-6.84q0-1.512-.048-2.976zM333.642 262v-1.128l1.296-.288q.024-.864.024-1.872v-2.904q0-.984-.024-1.632 0-.672-.048-1.392l-1.488-.216v-.936l5.04-1.608.408.264-.072 3.48v4.968q0 1.008.024 1.896l1.2.24V262zm3.192-13.752q-.84 0-1.44-.528-.6-.552-.6-1.368 0-.84.6-1.368.6-.552 1.44-.552t1.44.552q.6.528.6 1.368 0 .816-.6 1.368-.6.528-1.44.528m8.914 14.112q-1.608 0-2.52-.768-.912-.792-.912-2.568v-1.152q.024-.552.024-1.248v-4.584h-1.56v-1.416l1.776-.24 1.2-3.36h2.448l-.048 3.384h2.52v1.632h-2.52v6.72q0 .84.336 1.248.36.384.888.384.624 0 1.296-.528l.6.576a3.5 3.5 0 0 1-1.344 1.416q-.84.504-2.184.504m9.222-.36v-1.128l1.296-.288q.024-.864.024-1.872v-2.904q0-.984-.024-1.632 0-.672-.048-1.392l-1.488-.216v-.936l5.04-1.608.408.264-.072 3.48v4.968q0 1.008.024 1.896l1.2.24V262zm3.192-13.752q-.84 0-1.44-.528-.6-.552-.6-1.368 0-.84.6-1.368.6-.552 1.44-.552t1.44.552q.6.528.6 1.368 0 .816-.6 1.368-.6.528-1.44.528m8.578 14.112q-2.28 0-4.176-1.104l.072-2.928h1.92l.408 2.376q.432.168.864.264.432.072.936.072 1.032 0 1.584-.336.552-.36.552-1.08 0-.552-.408-.96t-1.608-.744l-1.296-.384q-1.392-.408-2.16-1.32-.744-.912-.744-2.256 0-1.656 1.296-2.784 1.296-1.152 3.72-1.152a6.8 6.8 0 0 1 1.944.264q.912.24 1.848.72l-.168 2.616h-1.92l-.48-2.064q-.504-.192-1.32-.192t-1.32.336q-.48.336-.48 1.008 0 .48.384.864.384.36 1.632.744l1.176.336q1.704.504 2.448 1.44t.744 2.28q0 1.896-1.464 2.952-1.44 1.032-3.984 1.032m17.782-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m12.468-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m6.516-.36v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V262h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V262zm27.218-10.536v-1.056h4.536v1.056l-1.392.264-3.96 10.32h-1.824l-4.32-10.344-1.176-.24v-1.056h6.816v1.056l-1.512.312 2.256 6.144 2.088-6.168zm10.824 10.896q-1.872 0-3.24-.768a5.44 5.44 0 0 1-2.112-2.184q-.744-1.416-.744-3.264t.792-3.216a5.8 5.8 0 0 1 2.208-2.136q1.392-.768 3.096-.768t3.072.744a5.56 5.56 0 0 1 2.208 2.136q.816 1.368.816 3.24t-.744 3.264a5.44 5.44 0 0 1-2.112 2.184q-1.368.768-3.24.768m0-1.248q1.008 0 1.512-1.176t.504-3.72q0-2.568-.504-3.744t-1.512-1.176q-1.032 0-1.536 1.176t-.504 3.744q0 2.544.504 3.72t1.536 1.176m13.734 1.248q-1.872 0-3.24-.768a5.44 5.44 0 0 1-2.112-2.184q-.744-1.416-.744-3.264t.792-3.216a5.8 5.8 0 0 1 2.208-2.136q1.392-.768 3.096-.768t3.072.744a5.56 5.56 0 0 1 2.208 2.136q.816 1.368.816 3.24t-.744 3.264a5.44 5.44 0 0 1-2.112 2.184q-1.368.768-3.24.768m0-1.248q1.008 0 1.512-1.176t.504-3.72q0-2.568-.504-3.744t-1.512-1.176q-1.032 0-1.536 1.176t-.504 3.744q0 2.544.504 3.72t1.536 1.176m7.426.888v-1.128l1.32-.264q.024-.888.024-1.896v-3.168q0-.672-.024-1.104 0-.432-.024-.792 0-.384-.024-.864l-1.464-.216v-.936l4.728-1.608.432.264.216 2.832q.504-1.536 1.416-2.304.912-.792 1.8-.792.792 0 1.368.456.576.432.72 1.32-.024.936-.504 1.464-.48.504-1.2.504-1.008 0-1.848-1.128l-.144-.192a6 6 0 0 0-.984 1.272 6 6 0 0 0-.624 1.608v3.336q0 .96.024 1.8l1.896.408V262zm10.619.024v-1.128l1.272-.264q.024-.864.024-1.872v-11.904l-1.488-.192v-1.008l4.968-1.08.384.24-.096 3.36v3.384q1.512-1.536 3.48-1.536 1.32 0 2.376.696 1.056.672 1.68 2.04.648 1.344.648 3.336 0 1.944-.72 3.36-.72 1.392-1.896 2.16a4.55 4.55 0 0 1-2.52.744q-1.968 0-3.168-1.416l-.408 1.392zm6.792-9.912q-.456 0-.864.192a4 4 0 0 0-.792.504v6.864q.744.672 1.632.672 1.056 0 1.728-1.032.696-1.032.696-3.144 0-2.136-.672-3.096-.648-.96-1.728-.96m13.948-.84q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m12.468-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m6.069-.36v-1.128l1.32-.288q.024-.912.024-1.824a68 68 0 0 0 .024-1.8v-10.056l-1.488-.24v-1.008l5.04-1.08.384.24-.096 3.36v10.608l.048 1.824 1.32.264V262zm11.886-5.736q0 1.968.696 3 .696 1.008 1.8 1.008.816 0 1.488-.552v-7.152a2.26 2.26 0 0 0-1.416-.504q-1.104 0-1.848 1.032-.72 1.032-.72 3.168m4.296 6-.192-1.368q-1.392 1.464-3.384 1.464a4.5 4.5 0 0 1-2.448-.696q-1.08-.696-1.704-2.04-.624-1.368-.624-3.312 0-1.968.744-3.36.768-1.416 1.968-2.16 1.224-.768 2.568-.768.936 0 1.632.336.696.312 1.272.936v-4.392l-1.68-.24v-1.008l5.064-1.08.384.24-.096 3.36v12.456l1.176.24V262zm18.303-10.8v-1.056h4.536v1.056l-1.392.264-3.96 10.32h-1.824l-4.32-10.344-1.177-.24v-1.056h6.817v1.056l-1.512.312 2.256 6.144 2.088-6.168zm14.015 10.872q-2.088 0-2.64-1.728-.768.816-1.488 1.296-.696.456-1.944.456-1.392 0-2.28-.792-.864-.792-.864-2.28 0-.864.384-1.56t1.392-1.296 2.856-1.128q.36-.12.84-.24t.984-.24v-.792q0-1.608-.408-2.184-.384-.576-1.536-.576h-.312q-.144 0-.336.024l-.12 1.056q-.024 1.176-.552 1.704-.504.528-1.2.528-1.32 0-1.608-1.2.096-1.488 1.512-2.424t4.008-.936q2.304 0 3.288 1.056 1.008 1.056 1.008 3.48v5.376q0 .696.528.696a.7.7 0 0 0 .36-.096q.168-.12.36-.432l.648.432q-.432.96-1.128 1.392-.672.408-1.752.408m-5.664-3.672q0 .888.408 1.32a1.41 1.41 0 0 0 1.584.312q.288-.12.912-.552v-3.888a10 10 0 0 0-.624.216q-.288.096-.504.192-.816.336-1.296.96-.48.6-.48 1.44m9.126 3.336v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V262h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V262zm25.874-10.728q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m12.467-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m6.516-.36v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V262h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V262zm-293.039 30v-1.128l1.296-.288q.024-.864.024-1.872v-11.808l-1.488-.24v-1.008l4.968-1.08.384.24-.096 3.36v3.864q.96-1.128 1.848-1.56a4.34 4.34 0 0 1 1.968-.456q1.584 0 2.544 1.032t.96 3.096v4.608q0 .984.024 1.872l1.2.24V292h-6.312v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.176-.288-1.632-.264-.456-1.008-.456-.48 0-1.032.288a4.9 4.9 0 0 0-1.104.816v5.28q0 1.008.024 1.896l1.128.24V292zm20.765-10.728q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.887-3.384.913-1.392 2.329-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m15.733-.024q-2.088 0-2.64-1.728-.768.816-1.488 1.296-.696.456-1.944.456-1.392 0-2.28-.792-.864-.792-.864-2.28 0-.864.384-1.56t1.392-1.296 2.856-1.128q.36-.12.84-.24t.984-.24v-.792q0-1.608-.408-2.184-.384-.576-1.536-.576h-.312q-.144 0-.336.024l-.12 1.056q-.024 1.176-.552 1.704-.504.528-1.2.528-1.32 0-1.608-1.2.096-1.488 1.512-2.424t4.008-.936q2.304 0 3.288 1.056 1.008 1.056 1.008 3.48v5.376q0 .696.528.696a.7.7 0 0 0 .36-.096q.168-.12.36-.432l.648.432q-.432.96-1.128 1.392-.672.408-1.752.408m-5.664-3.672q0 .888.408 1.32a1.41 1.41 0 0 0 1.584.312q.288-.12.912-.552v-3.888a10 10 0 0 0-.624.216q-.288.096-.504.192-.816.336-1.296.96-.48.6-.48 1.44m13.206-2.4q0 1.968.696 3 .696 1.008 1.8 1.008.816 0 1.488-.552v-7.152a2.26 2.26 0 0 0-1.416-.504q-1.104 0-1.848 1.032-.72 1.032-.72 3.168m4.296 6-.192-1.368q-1.392 1.464-3.384 1.464a4.5 4.5 0 0 1-2.448-.696q-1.08-.696-1.704-2.04-.624-1.368-.624-3.312 0-1.968.744-3.36.768-1.416 1.968-2.16 1.224-.768 2.568-.768.936 0 1.632.336.696.312 1.272.936v-4.392l-1.68-.24v-1.008l5.064-1.08.384.24-.096 3.36v12.456l1.176.24V292zm5.922-.264v-1.128l1.296-.288q.024-.864.024-1.872v-2.904q0-.984-.024-1.632 0-.672-.048-1.392l-1.488-.216v-.936l5.04-1.608.408.264-.072 3.48v4.968q0 1.008.024 1.896l1.2.24V292zm3.192-13.752q-.84 0-1.44-.528-.6-.552-.6-1.368 0-.84.6-1.368.6-.552 1.44-.552t1.44.552q.6.528.6 1.368 0 .816-.6 1.368-.6.528-1.44.528M378.524 292v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V292h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V292zm19.997-5.376q.84 0 1.248-.744.432-.744.432-2.016t-.432-1.968q-.408-.72-1.2-.72-.816 0-1.224.72t-.408 1.992.384 2.016q.384.72 1.2.72m-3.192 7.368q0 1.056.792 1.536.792.504 2.424.504 1.8 0 2.712-.528t.912-1.32q0-.528-.384-.96-.384-.408-1.368-.408h-2.52q-1.32 0-2.184-.216-.192.336-.288.648a2.6 2.6 0 0 0-.096.744m3.216-6.24q-1.248 0-2.184-.288a2.2 2.2 0 0 0-.288 1.104q0 .408.312.672.312.24 1.08.24h2.808q1.824 0 2.904.456 1.08.432 1.536 1.224.48.768.48 1.824 0 1.2-.792 2.208-.792 1.032-2.376 1.632-1.56.624-3.864.624-1.992 0-3.12-.408-1.128-.384-1.584-1.032t-.456-1.368q0-1.536 1.992-2.472-.744-.312-1.08-.816a2.06 2.06 0 0 1-.312-1.104q0-.84.48-1.584.504-.768 1.392-1.536-.984-.504-1.464-1.344a3.7 3.7 0 0 1-.48-1.872q0-1.68 1.224-2.784 1.248-1.104 3.792-1.104 1.296 0 2.256.288t1.56.816l2.688-1.152.384.24v1.848h-2.28q.432.792.432 1.848 0 1.608-1.248 2.736-1.224 1.104-3.792 1.104' })));
   var v = n(42759),
    p = n(62254),
    q = n(50341);
   const k = { title: 'Heading 3', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 3', pagination_label: 'Heading 3', description: 'Koptekst die in de koppenstructuur op het derde niveau staat.', slug: '/heading-3', keywords: ['caption', 'content', 'h3', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    f = void 0,
    b = {},
    x = 'Heading 3',
    _ = 'Koptekst die in de koppenstructuur op het derde niveau staat.',
    w = 259,
    T = m.find((e) => e.number === w),
    z = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ];
   function A(e) {
    const t = { h2: 'h2', ...(0, u.R)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, d.jsx)(q.Fc, { component: T, headingLevel: 1, description: _ }), '\n', (0, d.jsx)(v.e, { component: T }), '\n', (0, d.jsx)(t.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, d.jsx)(p.H, { component: T, illustration: g }), '\n', (0, d.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, d.jsx)(q.VK, { component: T, headingLevel: 3 }), '\n', (0, d.jsx)(t.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, d.jsx)(q.mu, { component: T, headingLevel: 3 }), '\n', (0, d.jsx)(t.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }), '\n', (0, d.jsx)(q.$9, { component: T, headingLevel: 3 })] });
   }
   function N(e = {}) {
    const { wrapper: t } = { ...(0, u.R)(), ...e.components };
    return t ? (0, d.jsx)(t, { ...e, children: (0, d.jsx)(A, { ...e }) }) : A(e);
   }
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
   n.d(t, { B2: () => u, B_: () => v, GT: () => k, KF: () => d, Pc: () => o, Pv: () => y, Rc: () => f, bo: () => r, eQ: () => p, f4: () => c, fX: () => s, kD: () => q, mJ: () => j, o_: () => g, qZ: () => i });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    c = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    a = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function l(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, t) => a.indexOf(e) - a.indexOf(t)),
    d = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => m(e));
     return h(l(t));
    },
    u = (e, t) => j(e).includes(t),
    m = (e) => {
     const t = / URL \(([^)]+)\)/;
     return h(l(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    j = (e) => h(l(e.projects.flatMap((e) => m(e)))),
    y = (e) => {
     const t = m(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const r = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: r, id: s, value: i }) => {
        const c = /^(.+) URL/.exec(r)[1],
         o = 'Storybook' === c ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${c}`;
        return { brand: c.toLowerCase(), name: r, id: s, value: i, description: o };
       });
      return { frameworkName: t, tasks: r };
     });
    },
    g = (e) => e.join('.'),
    v = (e) => '--' + e.join('-'),
    p = (e, t) => t.reduce((e, t) => e?.[t], e);
   function q(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? q(e[n], [...t, n]) : []));
   }
   function k(e) {
    const t = new Map();
    function n(e) {
     return t.has(e) || t.set(e, g(e)), t.get(e);
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   function f(e) {
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
   n.d(t, { p: () => i });
   var r = n(13526),
    s = n(86070);
   const i = ({ children: e, className: t, level: n = 1, suffix: i, ...c }) => (0, s.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${n}`, t), ...c, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
 },
]);
