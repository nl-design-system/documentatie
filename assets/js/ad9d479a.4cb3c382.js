'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [22746],
 {
  87370: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => o, contentTitle: () => l, default: () => u, frontMatter: () => r, metadata: () => d, toc: () => m });
   var t = i(52676),
    s = i(24785),
    a = i(82415);
   const r = { title: 'Sluit je aan bij onze community', hide_title: !1, hide_table_of_contents: !1, sidebar_label: 'Sluit je aan', pagination_label: 'Sluit je aan', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', keywords: ['nl design system'] },
    l = void 0,
    d = { id: 'community/sluit-je-aan', title: 'Sluit je aan bij onze community', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', source: '@site/docs/community/sluit-je-aan.mdx', sourceDirName: 'community', slug: '/community/sluit-je-aan', permalink: '/community/sluit-je-aan', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/sluit-je-aan.mdx', tags: [], version: 'current', frontMatter: { title: 'Sluit je aan bij onze community', hide_title: !1, hide_table_of_contents: !1, sidebar_label: 'Sluit je aan', pagination_label: 'Sluit je aan', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', keywords: ['nl design system'] }, sidebar: 'community', previous: { title: 'Community', permalink: '/community' }, next: { title: 'Events', permalink: '/community/events/overzicht' } },
    o = {},
    m = [
     { value: 'Voor wie?', id: 'voor-wie', level: 2 },
     { value: 'Aanmelden', id: 'aanmelden', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsxs)(n.p, { children: ['De NL Design System community brengt specialisten bij elkaar, zoals designers, developers, researchers en toegankelijkheidsspecialisten. Samen met het ', (0, t.jsx)(n.a, { href: '/project/kernteam', children: 'kernteam' }), ' verzamelt de community de beste richtlijnen, componenten en voorbeelden om robuuste websites en webapplicaties voor de digitale overheid te bouwen.'] }), '\n', (0, t.jsx)(n.p, { children: 'Op deze pagina kun je je aanmelden voor onze community, gratis en vrijblijvend.' }), '\n', (0, t.jsx)(n.h2, { id: 'voor-wie', children: 'Voor wie?' }), '\n', (0, t.jsx)(n.p, { children: 'Deze community is voor specialisten die werken aan digitale (overheids)diensten en willen samenwerken met anderen.' }), '\n', (0, t.jsx)(n.p, { children: 'Ben je net begonnen of heb je al jaren ervaring? Wil je veel bijdragen of weinig? Misschien eerst vooral meekijken? Iedereen is welkom.' }), '\n', (0, t.jsx)(n.p, { children: 'Voordelen van aanmelden:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Je kunt makkelijker worden uitgenodigd voor speciale bijeenkomsten, zoals de communityborrel.' }), '\n', (0, t.jsx)(n.li, { children: 'Het kernteam krijgt een beter beeld van wie er meedoet en met welke interesses.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'aanmelden', children: 'Aanmelden' }), '\n', (0, t.jsx)(n.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor events. De andere gegevens geven ons een beeld van de NL Design System community.' }), '\n', '\n', (0, t.jsx)(a.Z, { listId: 'tba1xjir6z', emailFieldId: 'T5JEj4xbpn', firstNameFieldId: 'kBqgRi7iqw', orgId: 'OmROkCnDOY', interestsId: 'g1xwvlgA29', interests: ['Design', 'Development', 'Management', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Gebruikersonderzoek', 'CMS'], workAreasId: 'oAPGPtHrUt', thanksPage: 'https://nldesignsystem.nl/community/sluit-je-aan/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, n, i) => {
   i.d(n, { Z: () => l });
   var t = i(47027),
    s = i(75271),
    a = i(43430),
    r = i(52676);
   const l = (e) => {
    let { listId: n = '', laPostaId: i = '', thanksPage: l = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: m = '', interestsId: c = '', interests: u = [], workAreasId: j = '' } = e;
    const {
      register: h,
      handleSubmit: p,
      formState: { errors: v },
     } = (0, a.cI)(),
     x = (0, s.useRef)(null);
    return (0, r.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: x,
     onSubmit: p(() => {
      x.current.submit();
     }),
     children: [(0, r.jsxs)(t.Wi, { type: 'email', children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: `id-${d}`, children: 'E-mailadres' }) }), v[d] && (0, r.jsx)(t.w7, { children: v[d].message }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', 'aria-required': 'true', ...h(`${d}`, { required: { value: !0, message: 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: 'Dit is geen correct emailadres.' } }), invalid: !!v[d] }) })] }), (0, r.jsxs)(t.Wi, { type: 'text', children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: o, children: 'Naam' }) }), v[o] && (0, r.jsx)(t.w7, { children: v[o].message }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: o, name: o, type: 'text', autoComplete: 'given-name', 'aria-required': 'true', ...h(`${o}`, { required: { value: !0, message: 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!v[o] }) })] }), m && (0, r.jsxs)(t.Wi, { type: 'text', children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: m, children: 'Organisatie' }) }), v[m] && (0, r.jsx)(t.w7, { children: v[m].message }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: m, name: m, type: 'text', 'aria-required': 'true', ...h(`${m}`, { required: { value: !0, message: 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!v[m] }) })] }), c && (0, r.jsxs)(t.pg, { children: [(0, r.jsx)(t.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, r.jsx)(t.ue, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, n) => (0, r.jsx)(t.Wi, { type: 'checkbox', children: (0, r.jsxs)(t.nv, { children: [(0, r.jsx)(t.XZ, { name: `${c}[]`, value: n >= 6 ? n + 2 : n + 1, id: `${c}-${n + 1}` }), (0, r.jsx)(t.lX, { htmlFor: `${c}-${n + 1}`, children: e })] }) }, e))] }), j && (0, r.jsxs)(t.Wi, { type: 'text', children: [(0, r.jsxs)(t.nv, { children: [(0, r.jsx)(t.lX, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, r.jsx)(t.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.gx, { id: j, name: j }) })] }), (0, r.jsx)(t.hE, { children: (0, r.jsx)(t.zx, { type: 'submit', appearance: 'primary-action-button', children: 'Aanmelden' }) }), (0, r.jsx)('input', { type: 'hidden', name: 'next', value: l }), (0, r.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, r.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, r.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, r.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => r });
   var t = i(75271);
   const s = {},
    a = t.createContext(s);
   function r(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), t.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
