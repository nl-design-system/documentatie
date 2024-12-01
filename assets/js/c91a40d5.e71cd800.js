'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [11839],
 {
  16946: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => l, default: () => u, frontMatter: () => s, metadata: () => o, toc: () => p });
   var t = i(52676),
    a = i(87118),
    r = i(82415);
   const s = { title: 'Aanmelden \xb7 Developer Open Hour \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In het Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', slug: '/events/developer-open-hour/aanmelden' },
    l = 'Meld je aan voor het Developer Open Hour',
    o = { id: 'community/events/developer-open-hour/aanmelden', title: 'Aanmelden \xb7 Developer Open Hour \xb7 Bijeenkomsten', description: 'Developer Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.', source: '@site/docs/community/events/developer-open-hour/aanmelden.mdx', sourceDirName: 'community/events/developer-open-hour', slug: '/events/developer-open-hour/aanmelden', permalink: '/events/developer-open-hour/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/developer-open-hour/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden \xb7 Developer Open Hour \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In het Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', slug: '/events/developer-open-hour/aanmelden' }, sidebar: 'community', previous: { title: 'In het Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', permalink: '/events/developer-open-hour' }, next: { title: 'Tijdens de Design Open Dag komen designers bij elkaar om samen te werken aan designvraagstukken.', permalink: '/events/design-open-dag' } },
    d = {},
    p = [];
   function m(e) {
    const n = { h1: 'h1', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'meld-je-aan-voor-het-developer-open-hour', children: 'Meld je aan voor het Developer Open Hour' }), '\n', (0, t.jsx)(n.p, { children: 'Developer Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, t.jsx)(r.A, { listId: 'p3jpgjmp4x', emailFieldId: 'Cx3tegsyt2', firstNameFieldId: 'QUBgX4085P', thanksPage: 'https://nldesignsystem.nl/events/developer-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
  },
  82415: (e, n, i) => {
   i.d(n, { A: () => o });
   var t = i(58610),
    a = i(95674),
    r = i(75271),
    s = i(7035),
    l = i(52676);
   const o = (e) => {
    let { listId: n = '', laPostaId: i = '', thanksPage: o = '', emailFieldId: d = '', firstNameFieldId: p = '', orgId: m = '', interestsId: u = '', interests: c = [], workAreasId: h = '', privacyPolicyId: v = '', language: j, submitText: x = '' } = e;
    const {
      register: g,
      handleSubmit: k,
      formState: { errors: y },
     } = (0, s.cI)(),
     f = (0, r.useRef)(null),
     b = j && '2' === j.value,
     { search: w } = (0, t.TH)(),
     D = new URLSearchParams(w),
     _ = D.get('prefillEmail'),
     I = D.get('prefillName');
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: f,
     onSubmit: k(() => {
      f.current.submit();
     }),
     children: [(0, l.jsxs)(a.Wi, { type: 'email', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: `id-${d}`, children: b ? 'Email address ' : 'E-mailadres' }) }), y[d] && (0, l.jsx)(a.w7, { children: y[d].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: _, 'aria-required': 'true', ...g(`${d}`, { required: { value: !0, message: b ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: b ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!y[d] }) })] }), (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: p, children: b ? 'Name' : 'Naam' }) }), y[p] && (0, l.jsx)(a.w7, { children: y[p].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: p, name: p, type: 'text', defaultValue: I, autoComplete: 'given-name', 'aria-required': 'true', ...g(`${p}`, { required: { value: !0, message: b ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!y[p] }) })] }), m && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: m, children: 'Organisatie (niet verplicht)' }) }), y[m] && (0, l.jsx)(a.w7, { children: y[m].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: m, name: m, type: 'text' }) })] }), u && (0, l.jsxs)(a.pg, { children: [(0, l.jsx)(a.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, l.jsx)(a.ue, { children: 'Meerdere antwoorden mogelijk.' }), c.map((e, n) => (0, l.jsx)(a.Wi, { type: 'checkbox', children: (0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.XZ, { name: `${u}[]`, value: n >= 6 ? n + 2 : n + 1, id: `${u}-${n + 1}` }), (0, l.jsx)(a.lX, { htmlFor: `${u}-${n + 1}`, children: e })] }) }, e))] }), h && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.lX, { htmlFor: h, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(a.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.gx, { id: h, name: h }) })] }), v && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.ue, { id: `${v}-description`, children: (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(a.Wi, { type: 'checkbox', children: [(0, l.jsx)(a.XZ, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...g(`${v}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!y[`${v}[]`] }), (0, l.jsxs)(a.lX, { htmlFor: `${v}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), y[v] && (0, l.jsx)(a.w7, { children: y[v].message })] }), j && (0, l.jsx)('input', { type: 'hidden', name: j.id, value: j.value }), (0, l.jsx)(a.hE, { children: (0, l.jsx)(a.zx, { type: 'submit', appearance: 'primary-action-button', children: x || (b ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: o }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  87118: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => s });
   var t = i(75271);
   const a = {},
    r = t.createContext(a);
   function s(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : s(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
