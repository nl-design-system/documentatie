'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [31906],
 {
  35647: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => i, default: () => u, frontMatter: () => o, metadata: () => a, toc: () => m });
   var s = n(52676),
    r = n(24785);
   const o = { title: 'Jouw project inrichten op de NL Design System-architectuur', slug: 'jouw-project-inrichten-op-de-nl-design-system-architectuur', authors: [{ name: 'Robbert Broersma', title: 'Design System Lead NL Design System', url: 'http://robbertbroersma.nl' }], tags: ['architectuur', 'NL Design System'], image: 'https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/05/MicrosoftTeams-image.png', hide_table_of_contents: !1, date: new Date('2021-05-21T00:00:00.000Z') },
    i = void 0,
    a = {
     permalink: '/en/blog/jouw-project-inrichten-op-de-nl-design-system-architectuur',
     source: '@site/blog/2021/20210521-jouw-project-inrichten-op-de-nl-design-system-architectuur.md',
     title: 'Jouw project inrichten op de NL Design System-architectuur',
     description: '2 teams bij verschillende organisaties werken deze periode voor hun eigen doeleinden aan NL Design System-componenten. De ontwikkelingen zijn ver genoeg gevorderd dat ze de komende 2 weken gebruik gaan maken van elkaars componenten. Binnenkort sluiten meer teams aan.',
     date: '2021-05-21T00:00:00.000Z',
     formattedDate: 'May 21, 2021',
     tags: [
      { label: 'architectuur', permalink: '/en/blog/tags/architectuur' },
      { label: 'NL Design System', permalink: '/en/blog/tags/nl-design-system' },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: 'Robbert Broersma', title: 'Design System Lead NL Design System', url: 'http://robbertbroersma.nl' }],
     frontMatter: { title: 'Jouw project inrichten op de NL Design System-architectuur', slug: 'jouw-project-inrichten-op-de-nl-design-system-architectuur', authors: [{ name: 'Robbert Broersma', title: 'Design System Lead NL Design System', url: 'http://robbertbroersma.nl' }], tags: ['architectuur', 'NL Design System'], image: 'https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/05/MicrosoftTeams-image.png', hide_table_of_contents: !1, date: '2021-05-21T00:00:00.000Z' },
     unlisted: !1,
     prevItem: { title: 'Innovatiebudget voor de werkwijze van het NL Design System', permalink: '/en/blog/innovatiebudget-voor-de-werkwijze-van-het-nl-design-system' },
     nextItem: { title: 'Waarom NL Design System onmisbaar is voor organisaties', permalink: '/en/blog/waarom-nl-design-system-onmisbaar-is-voor-organisaties' },
    },
    c = { authorsImageUrls: [void 0] },
    m = [];
   function l(e) {
    const t = { p: 'p', ...(0, r.a)(), ...e.components };
    return (0, s.jsx)(t.p, { children: '2 teams bij verschillende organisaties werken deze periode voor hun eigen doeleinden aan NL Design System-componenten. De ontwikkelingen zijn ver genoeg gevorderd dat ze de komende 2 weken gebruik gaan maken van elkaars componenten. Binnenkort sluiten meer teams aan.' });
   }
   function u(e = {}) {
    const { wrapper: t } = { ...(0, r.a)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e);
   }
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => a, a: () => i });
   var s = n(75271);
   const r = {},
    o = s.createContext(r);
   function i(e) {
    const t = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function a(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : i(e.components)), s.createElement(o.Provider, { value: t }, e.children);
   }
  },
 },
]);
