(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65954],
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
   var v = n(36444),
    g = n(98584),
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
     return e && (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(g.p, { level: t, suffix: s && (0, h.jsx)(v.D, { state: s }), children: e.title }), (0, h.jsx)(r.fz, { lead: !0, children: n })] });
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
  73442: (e, t, n) => {
   'use strict';
   n.r(t), n.d(t, { assets: () => b, component: () => T, contentTitle: () => f, default: () => N, description: () => _, frontMatter: () => k, issueNumber: () => w, metadata: () => r, title: () => x, toc: () => z });
   const r = JSON.parse('{"id":"componenten/heading-4/index","title":"Heading 4","description":"Koptekst die in de koppenstructuur op het vierde niveau staat.","source":"@site/docs/componenten/heading-4/index.mdx","sourceDirName":"componenten/heading-4","slug":"/heading-4","permalink":"/heading-4","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-4/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 4","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 4","pagination_label":"Heading 4","description":"Koptekst die in de koppenstructuur op het vierde niveau staat.","slug":"/heading-4","keywords":["caption","content","h4","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 3","permalink":"/heading-3"},"next":{"title":"Heading 5","permalink":"/heading-5"}}');
   var s,
    c,
    i,
    o,
    a,
    l,
    h,
    d = n(86070),
    u = n(85248),
    m = n(55462),
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
   const v = ({ title: e, titleId: t, ...n }) => j.createElement('svg', y({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': t }, n), e ? j.createElement('title', { id: t }, e) : null, s || (s = j.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), c || (c = j.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), i || (i = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 240v60' })), o || (o = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), a || (a = j.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), l || (l = j.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), h || (h = j.createElement('path', { fill: '#0A2750', d: 'M321.56 254.72v2.58l.04 2.54h.66q1.72 0 2.7-1.4 1-1.42 1-4.02 0-2.64-1-4.02-.98-1.38-2.68-1.38h-.68l-.04 2.5v3.2m-4.9-5.78v-1.08h5.94q2.14 0 3.66.8a5.5 5.5 0 0 1 2.34 2.24q.82 1.46.82 3.5 0 2.08-.88 3.56t-2.5 2.26q-1.6.78-3.8.78h-5.58v-1.08l1.5-.16q.04-1.22.04-2.48v-5.7q0-1.26-.04-2.48zM330.702 261v-.94l1.08-.24q.02-.72.02-1.56v-2.42q0-.82-.02-1.36 0-.56-.04-1.16l-1.24-.18v-.78l4.2-1.34.34.22-.06 2.9v4.14q0 .84.02 1.58l1 .2v.94zm2.66-11.46q-.7 0-1.2-.44a1.49 1.49 0 0 1-.5-1.14q0-.7.5-1.14.5-.46 1.2-.46.699 0 1.2.46.5.44.5 1.14 0 .68-.5 1.14-.501.44-1.2.44m7.428 11.76q-1.341 0-2.1-.64-.76-.66-.76-2.14v-.96q.02-.46.02-1.04v-3.82h-1.3v-1.18l1.48-.2 1-2.8h2.04l-.04 2.82h2.1v1.36h-2.1v5.6q0 .7.28 1.04.3.32.74.32.519 0 1.08-.44l.5.48q-.4.76-1.12 1.18-.7.42-1.82.42m7.685-.3v-.94l1.08-.24q.02-.72.02-1.56v-2.42q0-.82-.02-1.36 0-.56-.04-1.16l-1.24-.18v-.78l4.2-1.34.34.22-.06 2.9v4.14q0 .84.02 1.58l1 .2v.94zm2.66-11.46q-.7 0-1.2-.44a1.49 1.49 0 0 1-.5-1.14q0-.7.5-1.14.5-.46 1.2-.46t1.2.46q.5.44.5 1.14 0 .68-.5 1.14-.5.44-1.2.44m7.148 11.76q-1.9 0-3.48-.92l.06-2.44h1.6l.34 1.98q.36.14.72.22.36.06.78.06.86 0 1.32-.28.46-.3.46-.9 0-.46-.34-.8t-1.34-.62l-1.08-.32q-1.16-.34-1.8-1.1-.62-.76-.62-1.88 0-1.38 1.08-2.32 1.08-.96 3.1-.96.88 0 1.62.22.76.2 1.54.6l-.14 2.18h-1.6l-.4-1.72q-.42-.16-1.1-.16t-1.1.28q-.4.28-.4.84 0 .4.32.72.32.3 1.36.62l.98.28q1.42.42 2.04 1.2t.62 1.9q0 1.58-1.22 2.46-1.2.86-3.32.86m14.819-9.24q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.46 0-2.58-.6a4.47 4.47 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82.76-1.16 1.94-1.74 1.18-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.62 1.18-1.68 1.76t-2.52.58m10.39-9.24q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.461 0-2.58-.6a4.46 4.46 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82a4.85 4.85 0 0 1 1.94-1.74q1.179-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.621 1.18-1.68 1.76-1.06.58-2.52.58m5.429-.3v-.94l1.08-.24q.02-.72.02-1.56v-2.62q0-.82-.02-1.26 0-.46-.04-1.06l-1.22-.18v-.78l3.94-1.34.36.22.12 1.44q.78-.92 1.54-1.28a3.75 3.75 0 0 1 1.66-.38q1.3 0 2.08.86.8.86.8 2.58v3.84q0 .82.02 1.56l1 .2v.94h-5.28v-.94l1.04-.22q.02-.74.02-1.56v-3.58q0-.96-.26-1.34-.26-.4-.84-.4-.78 0-1.72.72v4.6q0 .84.02 1.58l.94.2v.94zm22.682-8.78v-.88h3.78v.88l-1.16.22-3.3 8.6h-1.52l-3.6-8.62-.98-.2v-.88h5.68v.88l-1.26.26 1.88 5.12 1.74-5.14zm9.02 9.08q-1.56 0-2.7-.64a4.53 4.53 0 0 1-1.76-1.82q-.62-1.18-.62-2.72t.66-2.68a4.8 4.8 0 0 1 1.84-1.78q1.16-.64 2.58-.64t2.56.62a4.63 4.63 0 0 1 1.84 1.78q.68 1.14.68 2.7t-.62 2.72-1.76 1.82q-1.14.64-2.7.64m0-1.04q.84 0 1.26-.98t.42-3.1q0-2.14-.42-3.12t-1.26-.98q-.86 0-1.28.98t-.42 3.12q0 2.12.42 3.1t1.28.98m11.445 1.04q-1.56 0-2.7-.64a4.54 4.54 0 0 1-1.76-1.82q-.62-1.18-.62-2.72t.66-2.68a4.8 4.8 0 0 1 1.84-1.78q1.161-.64 2.58-.64t2.56.62a4.6 4.6 0 0 1 1.84 1.78q.68 1.14.68 2.7t-.62 2.72-1.76 1.82q-1.14.64-2.7.64m0-1.04q.84 0 1.26-.98t.42-3.1q0-2.14-.42-3.12t-1.26-.98q-.86 0-1.28.98t-.42 3.12q0 2.12.42 3.1t1.28.98m6.189.74v-.94l1.1-.22q.02-.74.02-1.58v-2.64q0-.56-.02-.92 0-.36-.02-.66 0-.32-.02-.72l-1.22-.18v-.78l3.94-1.34.36.22.18 2.36q.42-1.28 1.18-1.92.76-.66 1.5-.66.66 0 1.14.38.48.36.6 1.1-.02.78-.42 1.22-.4.42-1 .42-.84 0-1.54-.94l-.12-.16q-.44.42-.82 1.06a5 5 0 0 0-.52 1.34v2.78q0 .8.02 1.5l1.58.34v.94zm8.848.02v-.94l1.06-.22q.02-.72.02-1.56v-9.92l-1.24-.16v-.84l4.14-.9.32.2-.08 2.8v2.82q1.26-1.28 2.9-1.28 1.101 0 1.98.58.88.56 1.4 1.7.54 1.12.54 2.78 0 1.62-.6 2.8-.6 1.16-1.58 1.8-.96.62-2.1.62-1.64 0-2.64-1.18l-.34 1.16zm5.66-8.26q-.38 0-.72.16a3.3 3.3 0 0 0-.66.42v5.72q.62.56 1.36.56.88 0 1.44-.86.58-.86.58-2.62 0-1.78-.56-2.58-.54-.8-1.44-.8m11.624-.7q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48-.399-.48-.96-.48m.04 9.24q-1.46 0-2.58-.6a4.47 4.47 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82a4.87 4.87 0 0 1 1.94-1.74q1.18-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.62 1.18-1.68 1.76-1.059.58-2.52.58m10.39-9.24q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.46 0-2.58-.6a4.47 4.47 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82.76-1.16 1.94-1.74 1.18-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.62 1.18-1.68 1.76t-2.52.58m5.058-.3v-.94l1.1-.24q.02-.76.02-1.52.02-.76.02-1.5v-8.38l-1.24-.2v-.84l4.2-.9.32.2-.08 2.8v8.84l.04 1.52 1.1.22v.94zm9.904-4.78q0 1.64.58 2.5.58.84 1.5.84.68 0 1.24-.46v-5.96a1.88 1.88 0 0 0-1.18-.42q-.92 0-1.54.86-.6.86-.6 2.64m3.58 5-.16-1.14q-1.16 1.22-2.82 1.22a3.75 3.75 0 0 1-2.04-.58q-.9-.58-1.42-1.7-.52-1.14-.52-2.76 0-1.64.62-2.8.64-1.18 1.64-1.8 1.02-.64 2.14-.64.78 0 1.36.28.58.26 1.06.78v-3.66l-1.4-.2v-.84l4.22-.9.32.2-.08 2.8v10.38l.98.2v.94zm15.253-9v-.88h3.78v.88l-1.16.22-3.3 8.6h-1.52l-3.6-8.62-.98-.2v-.88h5.68v.88l-1.26.26 1.88 5.12 1.74-5.14zm11.679 9.06q-1.74 0-2.2-1.44a7.3 7.3 0 0 1-1.24 1.08q-.579.38-1.62.38-1.16 0-1.9-.66-.72-.66-.72-1.9 0-.72.32-1.3t1.16-1.08 2.38-.94q.3-.1.7-.2t.82-.2v-.66q0-1.34-.34-1.82-.32-.48-1.28-.48h-.26q-.12 0-.28.02l-.1.88q-.02.98-.46 1.42-.42.44-1 .44-1.1 0-1.34-1 .081-1.24 1.26-2.02t3.34-.78q1.92 0 2.74.88.84.88.84 2.9v4.48q0 .58.44.58a.6.6 0 0 0 .3-.08q.141-.1.3-.36l.54.36q-.36.8-.94 1.16-.56.34-1.46.34m-4.72-3.06q0 .74.34 1.1a1.17 1.17 0 0 0 1.32.26q.24-.1.76-.46v-3.24a8 8 0 0 0-.52.18q-.24.08-.42.16a2.56 2.56 0 0 0-1.08.8q-.4.5-.4 1.2m7.605 2.78v-.94l1.08-.24q.02-.72.02-1.56v-2.62q0-.82-.02-1.26 0-.46-.04-1.06l-1.22-.18v-.78l3.94-1.34.36.22.12 1.44q.78-.92 1.54-1.28a3.75 3.75 0 0 1 1.66-.38q1.3 0 2.08.86.8.86.8 2.58v3.84q0 .82.02 1.56l1 .2v.94h-5.28v-.94l1.04-.22q.02-.74.02-1.56v-3.58q0-.96-.26-1.34-.26-.4-.84-.4-.78 0-1.72.72v4.6q0 .84.02 1.58l.94.2v.94zm21.562-8.94q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.46 0-2.58-.6a4.47 4.47 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82.76-1.16 1.94-1.74 1.18-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.62 1.18-1.68 1.76t-2.52.58m10.39-9.24q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.461 0-2.58-.6a4.46 4.46 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82a4.85 4.85 0 0 1 1.94-1.74q1.179-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.621 1.18-1.68 1.76-1.06.58-2.52.58m5.429-.3v-.94l1.08-.24q.02-.72.02-1.56v-2.62q0-.82-.02-1.26 0-.46-.04-1.06l-1.22-.18v-.78l3.94-1.34.36.22.12 1.44q.78-.92 1.54-1.28a3.75 3.75 0 0 1 1.66-.38q1.3 0 2.08.86.8.86.8 2.58v3.84q0 .82.02 1.56l1 .2v.94h-5.28v-.94l1.04-.22q.02-.74.02-1.56v-3.58q0-.96-.26-1.34-.26-.4-.84-.4-.78 0-1.72.72v4.6q0 .84.02 1.58l.94.2v.94zM316.56 291v-.94l1.08-.24q.02-.72.02-1.56v-9.84l-1.24-.2v-.84l4.14-.9.32.2-.08 2.8v3.22q.8-.94 1.54-1.3a3.6 3.6 0 0 1 1.64-.38q1.32 0 2.12.86t.8 2.58v3.84q0 .82.02 1.56l1 .2v.94h-5.26v-.94l1.04-.22q.02-.74.02-1.56v-3.58q0-.98-.24-1.36-.22-.38-.84-.38-.4 0-.86.24t-.92.68v4.4q0 .84.02 1.58l.94.2v.94zm17.304-8.94q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.461 0-2.58-.6a4.46 4.46 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82a4.85 4.85 0 0 1 1.94-1.74q1.179-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.621 1.18-1.68 1.76-1.06.58-2.52.58m13.111-.02q-1.74 0-2.2-1.44-.64.68-1.24 1.08-.58.38-1.62.38-1.16 0-1.9-.66-.72-.66-.72-1.9 0-.72.32-1.3t1.16-1.08 2.38-.94q.3-.1.7-.2t.82-.2v-.66q0-1.34-.34-1.82-.32-.48-1.28-.48h-.26q-.12 0-.28.02l-.1.88q-.02.98-.46 1.42-.42.44-1 .44-1.1 0-1.34-1 .08-1.24 1.26-2.02t3.34-.78q1.92 0 2.74.88.84.88.84 2.9v4.48q0 .58.44.58a.6.6 0 0 0 .3-.08q.14-.1.3-.36l.54.36q-.36.8-.94 1.16-.56.34-1.46.34m-4.72-3.06q0 .74.34 1.1a1.17 1.17 0 0 0 1.32.26q.24-.1.76-.46v-3.24a8 8 0 0 0-.52.18q-.24.08-.42.16a2.56 2.56 0 0 0-1.08.8q-.4.5-.4 1.2m11.005-2q0 1.64.58 2.5.58.84 1.5.84.68 0 1.24-.46v-5.96a1.88 1.88 0 0 0-1.18-.42q-.92 0-1.54.86-.6.86-.6 2.64m3.58 5-.16-1.14q-1.16 1.22-2.82 1.22a3.74 3.74 0 0 1-2.04-.58q-.9-.58-1.42-1.7-.52-1.14-.52-2.76 0-1.64.62-2.8.64-1.18 1.64-1.8 1.02-.64 2.14-.64.78 0 1.36.28.58.26 1.06.78v-3.66l-1.4-.2v-.84l4.22-.9.32.2-.08 2.8v10.38l.98.2v.94zm4.935-.22v-.94l1.08-.24q.02-.72.02-1.56v-2.42q0-.82-.02-1.36 0-.56-.04-1.16l-1.24-.18v-.78l4.2-1.34.34.22-.06 2.9v4.14q0 .84.02 1.58l1 .2v.94zm2.66-11.46q-.7 0-1.2-.44a1.49 1.49 0 0 1-.5-1.14q0-.7.5-1.14.5-.46 1.2-.46t1.2.46q.5.44.5 1.14 0 .68-.5 1.14-.5.44-1.2.44m3.628 11.46v-.94l1.08-.24q.02-.72.02-1.56v-2.62q0-.82-.02-1.26 0-.46-.04-1.06l-1.22-.18v-.78l3.94-1.34.36.22.12 1.44q.78-.92 1.54-1.28a3.75 3.75 0 0 1 1.66-.38q1.3 0 2.08.86.8.86.8 2.58v3.84q0 .82.02 1.56l1 .2v.94h-5.28v-.94l1.04-.22q.02-.74.02-1.56v-3.58q0-.96-.26-1.34-.26-.4-.84-.4-.78 0-1.72.72v4.6q0 .84.02 1.58l.94.2v.94zm16.664-4.48q.7 0 1.04-.62.36-.62.36-1.68t-.36-1.64q-.34-.6-1-.6-.68 0-1.02.6t-.34 1.66.32 1.68q.32.6 1 .6m-2.66 6.14q0 .88.66 1.28.66.42 2.02.42 1.5 0 2.26-.44t.76-1.1q0-.44-.32-.8-.32-.34-1.14-.34h-2.1q-1.1 0-1.82-.18a2.8 2.8 0 0 0-.24.54q-.08.26-.08.62m2.68-5.2q-1.04 0-1.82-.24-.24.42-.24.92 0 .34.26.56.261.2.9.2h2.34q1.52 0 2.42.38.9.36 1.28 1.02.4.64.4 1.52 0 1-.66 1.84-.66.86-1.98 1.36-1.3.52-3.22.52-1.66 0-2.6-.34-.939-.32-1.32-.86-.38-.54-.38-1.14 0-1.28 1.66-2.06-.62-.26-.9-.68a1.7 1.7 0 0 1-.26-.92q0-.7.4-1.32.42-.64 1.16-1.28-.82-.42-1.22-1.12a3.1 3.1 0 0 1-.4-1.56q0-1.4 1.02-2.32 1.04-.92 3.16-.92 1.08 0 1.88.24t1.3.68l2.24-.96.32.2v1.54h-1.9q.36.66.36 1.54 0 1.34-1.04 2.28-1.02.92-3.16.92' })));
   var g = n(42759),
    p = n(62254),
    q = n(50341);
   const k = { title: 'Heading 4', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 4', pagination_label: 'Heading 4', description: 'Koptekst die in de koppenstructuur op het vierde niveau staat.', slug: '/heading-4', keywords: ['caption', 'content', 'h4', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    f = void 0,
    b = {},
    x = 'Heading 4',
    _ = 'Koptekst die in de koppenstructuur op het vierde niveau staat.',
    w = 260,
    T = m.find((e) => e.number === w),
    z = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ];
   function A(e) {
    const t = { h2: 'h2', ...(0, u.R)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, d.jsx)(q.Fc, { component: T, headingLevel: 1, description: _ }), '\n', (0, d.jsx)(g.e, { component: T }), '\n', (0, d.jsx)(t.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, d.jsx)(p.H, { component: T, illustration: v }), '\n', (0, d.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, d.jsx)(q.VK, { component: T, headingLevel: 3 }), '\n', (0, d.jsx)(t.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, d.jsx)(q.mu, { component: T, headingLevel: 3 }), '\n', (0, d.jsx)(t.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }), '\n', (0, d.jsx)(q.$9, { component: T, headingLevel: 3 })] });
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
   n.d(t, { B2: () => u, B_: () => g, GT: () => k, KF: () => d, Pc: () => o, Pv: () => y, Rc: () => f, bo: () => r, eQ: () => p, f4: () => i, fX: () => s, kD: () => q, mJ: () => j, o_: () => v, qZ: () => c });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    c = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    i = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
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
       .map(({ name: r, id: s, value: c }) => {
        const i = /^(.+) URL/.exec(r)[1],
         o = 'Storybook' === i ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${i}`;
        return { brand: i.toLowerCase(), name: r, id: s, value: c, description: o };
       });
      return { frameworkName: t, tasks: r };
     });
    },
    v = (e) => e.join('.'),
    g = (e) => '--' + e.join('-'),
    p = (e, t) => t.reduce((e, t) => e?.[t], e);
   function q(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? q(e[n], [...t, n]) : []));
   }
   function k(e) {
    const t = new Map();
    function n(e) {
     return t.has(e) || t.set(e, v(e)), t.get(e);
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
   n.d(t, { p: () => c });
   var r = n(13526),
    s = n(86070);
   const c = ({ children: e, className: t, level: n = 1, suffix: c, ...i }) => (0, s.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${n}`, t), ...i, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), c && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [c ? ' ' : '', c] })] });
  },
 },
]);
