'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [11839],
 {
  83545: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => l, default: () => u, frontMatter: () => s, metadata: () => o, toc: () => p });
   var t = i(52676),
    r = i(24785),
    a = i(82415);
   const s = { title: 'Aanmelden voor de Developer Open Hour', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In het Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', slug: '/events/developer-open-hour/aanmelden' },
    l = 'Meld je aan voor het Developer Open Hour',
    o = { id: 'community/events/developer-open-hour/aanmelden', title: 'Aanmelden voor de Developer Open Hour', description: 'Developer Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.', source: '@site/docs/community/events/developer-open-hour/aanmelden.mdx', sourceDirName: 'community/events/developer-open-hour', slug: '/events/developer-open-hour/aanmelden', permalink: '/en/events/developer-open-hour/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/developer-open-hour/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden voor de Developer Open Hour', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In het Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', slug: '/events/developer-open-hour/aanmelden' }, sidebar: 'community', previous: { title: 'In het Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', permalink: '/en/events/developer-open-hour' }, next: { title: 'Tijdens de Design Open Dag komen designers bij elkaar om samen te werken aan designvraagstukken.', permalink: '/en/events/design-open-dag' } },
    d = {},
    p = [];
   function m(e) {
    const n = { h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'meld-je-aan-voor-het-developer-open-hour', children: 'Meld je aan voor het Developer Open Hour' }), '\n', (0, t.jsx)(n.p, { children: 'Developer Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, t.jsx)(a.Z, { listId: 'p3jpgjmp4x', emailFieldId: 'Cx3tegsyt2', firstNameFieldId: 'QUBgX4085P', thanksPage: 'https://nldesignsystem.nl/events/developer-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
  },
  82415: (e, n, i) => {
   i.d(n, { Z: () => l });
   var t = i(47027),
    r = i(75271),
    a = i(43430),
    s = i(52676);
   const l = (e) => {
    let { listId: n = '', laPostaId: i = '', thanksPage: l = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: p = '', interestsId: m = '', interests: u = [], workAreasId: c = '', privacyPolicyId: h = '', language: v = {} } = e;
    const {
      register: j,
      handleSubmit: x,
      formState: { errors: g },
     } = (0, a.cI)(),
     k = (0, r.useRef)(null),
     y = v && '2' === v.value;
    return (0, s.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: k,
     onSubmit: x(() => {
      k.current.submit();
     }),
     children: [(0, s.jsxs)(t.Wi, { type: 'email', children: [(0, s.jsx)(t.nv, { children: (0, s.jsx)(t.lX, { htmlFor: `id-${o}`, children: y ? 'Email address ' : 'E-mailadres' }) }), g[o] && (0, s.jsx)(t.w7, { children: g[o].message }), (0, s.jsx)(t.nv, { children: (0, s.jsx)(t.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', 'aria-required': 'true', ...j(`${o}`, { required: { value: !0, message: y ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: y ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!g[o] }) })] }), (0, s.jsxs)(t.Wi, { type: 'text', children: [(0, s.jsx)(t.nv, { children: (0, s.jsx)(t.lX, { htmlFor: d, children: y ? 'Name' : 'Naam' }) }), g[d] && (0, s.jsx)(t.w7, { children: g[d].message }), (0, s.jsx)(t.nv, { children: (0, s.jsx)(t.fE, { id: d, name: d, type: 'text', autoComplete: 'given-name', 'aria-required': 'true', ...j(`${d}`, { required: { value: !0, message: y ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!g[d] }) })] }), p && (0, s.jsxs)(t.Wi, { type: 'text', children: [(0, s.jsx)(t.nv, { children: (0, s.jsx)(t.lX, { htmlFor: p, children: 'Organisatie' }) }), g[p] && (0, s.jsx)(t.w7, { children: g[p].message }), (0, s.jsx)(t.nv, { children: (0, s.jsx)(t.fE, { id: p, name: p, type: 'text' }) })] }), m && (0, s.jsxs)(t.pg, { children: [(0, s.jsx)(t.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, s.jsx)(t.ue, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, n) => (0, s.jsx)(t.Wi, { type: 'checkbox', children: (0, s.jsxs)(t.nv, { children: [(0, s.jsx)(t.XZ, { name: `${m}[]`, value: n >= 6 ? n + 2 : n + 1, id: `${m}-${n + 1}` }), (0, s.jsx)(t.lX, { htmlFor: `${m}-${n + 1}`, children: e })] }) }, e))] }), c && (0, s.jsxs)(t.Wi, { type: 'text', children: [(0, s.jsxs)(t.nv, { children: [(0, s.jsx)(t.lX, { htmlFor: c, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, s.jsx)(t.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, s.jsx)(t.nv, { children: (0, s.jsx)(t.gx, { id: c, name: c }) })] }), h && (0, s.jsxs)(t.Wi, { type: 'text', children: [(0, s.jsx)(t.ue, { id: `${h}-description`, children: (0, s.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, s.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, s.jsxs)(t.Wi, { type: 'checkbox', children: [(0, s.jsx)(t.XZ, { value: '1', id: `${h}-1`, 'aria-describedby': `${h}-description`, 'aria-required': 'true', ...j(`${h}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!g[`${h}[]`] }), (0, s.jsxs)(t.lX, { htmlFor: `${h}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), g[h] && (0, s.jsx)(t.w7, { children: g[h].message })] }), v && (0, s.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, s.jsx)(t.hE, { children: (0, s.jsx)(t.zx, { type: 'submit', appearance: 'primary-action-button', children: y ? 'Sign up' : 'Aanmelden' }) }), (0, s.jsx)('input', { type: 'hidden', name: 'next', value: l }), (0, s.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, s.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, s.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, s.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => s });
   var t = i(75271);
   const r = {},
    a = t.createContext(r);
   function s(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
