'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [11839],
 {
  83545: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => c, frontMatter: () => s, metadata: () => o, toc: () => p });
   var i = t(52676),
    r = t(24785),
    a = t(82415);
   const s = { title: 'Aanmelden voor de Developer Open Hour', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In het Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', slug: '/events/developer-open-hour/aanmelden' },
    l = 'Meld je aan voor het Developer Open Hour',
    o = { id: 'community/events/developer-open-hour/aanmelden', title: 'Aanmelden voor de Developer Open Hour', description: 'Developer Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.', source: '@site/docs/community/events/developer-open-hour/aanmelden.mdx', sourceDirName: 'community/events/developer-open-hour', slug: '/events/developer-open-hour/aanmelden', permalink: '/en/events/developer-open-hour/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/developer-open-hour/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden voor de Developer Open Hour', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In het Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', slug: '/events/developer-open-hour/aanmelden' }, sidebar: 'community', previous: { title: 'In het Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', permalink: '/en/events/developer-open-hour' }, next: { title: 'Tijdens de Design Open Dag komen designers bij elkaar om samen te werken aan designvraagstukken.', permalink: '/en/events/design-open-dag' } },
    d = {},
    p = [];
   function m(e) {
    const n = { h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'meld-je-aan-voor-het-developer-open-hour', children: 'Meld je aan voor het Developer Open Hour' }), '\n', (0, i.jsx)(n.p, { children: 'Developer Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, i.jsx)(a.Z, { listId: 'p3jpgjmp4x', emailFieldId: 'Cx3tegsyt2', firstNameFieldId: 'QUBgX4085P', thanksPage: 'https://nldesignsystem.nl/events/developer-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  82415: (e, n, t) => {
   t.d(n, { Z: () => l });
   var i = t(47027),
    r = t(75271),
    a = t(43430),
    s = t(52676);
   const l = (e) => {
    let { listId: n = '', laPostaId: t = '', thanksPage: l = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: p = '', interestsId: m = '', interests: c = [], workAreasId: u = '', privacyPolicyId: h = '' } = e;
    const {
      register: v,
      handleSubmit: j,
      formState: { errors: x },
     } = (0, a.cI)(),
     g = (0, r.useRef)(null);
    return (0, s.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: g,
     onSubmit: j(() => {
      g.current.submit();
     }),
     children: [(0, s.jsxs)(i.Wi, { type: 'email', children: [(0, s.jsx)(i.nv, { children: (0, s.jsx)(i.lX, { htmlFor: `id-${o}`, children: 'E-mailadres' }) }), x[o] && (0, s.jsx)(i.w7, { children: x[o].message }), (0, s.jsx)(i.nv, { children: (0, s.jsx)(i.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', 'aria-required': 'true', ...v(`${o}`, { required: { value: !0, message: 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: 'Dit is geen correct emailadres.' } }), invalid: !!x[o] }) })] }), (0, s.jsxs)(i.Wi, { type: 'text', children: [(0, s.jsx)(i.nv, { children: (0, s.jsx)(i.lX, { htmlFor: d, children: 'Naam' }) }), x[d] && (0, s.jsx)(i.w7, { children: x[d].message }), (0, s.jsx)(i.nv, { children: (0, s.jsx)(i.fE, { id: d, name: d, type: 'text', autoComplete: 'given-name', 'aria-required': 'true', ...v(`${d}`, { required: { value: !0, message: 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!x[d] }) })] }), p && (0, s.jsxs)(i.Wi, { type: 'text', children: [(0, s.jsx)(i.nv, { children: (0, s.jsx)(i.lX, { htmlFor: p, children: 'Organisatie' }) }), x[p] && (0, s.jsx)(i.w7, { children: x[p].message }), (0, s.jsx)(i.nv, { children: (0, s.jsx)(i.fE, { id: p, name: p, type: 'text' }) })] }), m && (0, s.jsxs)(i.pg, { children: [(0, s.jsx)(i.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, s.jsx)(i.ue, { children: 'Meerdere antwoorden mogelijk.' }), c.map((e, n) => (0, s.jsx)(i.Wi, { type: 'checkbox', children: (0, s.jsxs)(i.nv, { children: [(0, s.jsx)(i.XZ, { name: `${m}[]`, value: n >= 6 ? n + 2 : n + 1, id: `${m}-${n + 1}` }), (0, s.jsx)(i.lX, { htmlFor: `${m}-${n + 1}`, children: e })] }) }, e))] }), u && (0, s.jsxs)(i.Wi, { type: 'text', children: [(0, s.jsxs)(i.nv, { children: [(0, s.jsx)(i.lX, { htmlFor: u, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, s.jsx)(i.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, s.jsx)(i.nv, { children: (0, s.jsx)(i.gx, { id: u, name: u }) })] }), h && (0, s.jsxs)(i.Wi, { type: 'text', children: [(0, s.jsx)(i.ue, { id: `${h}-description`, children: (0, s.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, s.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, s.jsxs)(i.Wi, { type: 'checkbox', children: [(0, s.jsx)(i.XZ, { value: '1', id: `${h}-1`, 'aria-describedby': `${h}-description`, 'aria-required': 'true', ...v(`${h}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!x[`${h}[]`] }), (0, s.jsxs)(i.lX, { htmlFor: `${h}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), x[h] && (0, s.jsx)(i.w7, { children: x[h].message })] }), (0, s.jsx)(i.hE, { children: (0, s.jsx)(i.zx, { type: 'submit', appearance: 'primary-action-button', children: 'Aanmelden' }) }), (0, s.jsx)('input', { type: 'hidden', name: 'next', value: l }), (0, s.jsx)('input', { type: 'hidden', name: 'a', value: t }), (0, s.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, s.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, s.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => s });
   var i = t(75271);
   const r = {},
    a = i.createContext(r);
   function s(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), i.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
