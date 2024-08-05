'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [90134],
 {
  41487: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => o, contentTitle: () => l, default: () => c, frontMatter: () => r, metadata: () => d, toc: () => m });
   var t = i(52676),
    s = i(24785),
    a = i(82415);
   const r = { title: 'Aanmelden voor de Design Open Hour', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden' },
    l = 'Meld je aan voor de Design Open Hour',
    d = { id: 'community/events/design-open-hour/aanmelden', title: 'Aanmelden voor de Design Open Hour', description: 'Design Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.', source: '@site/docs/community/events/design-open-hour/aanmelden.mdx', sourceDirName: 'community/events/design-open-hour', slug: '/events/design-open-hour/aanmelden', permalink: '/en/events/design-open-hour/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden voor de Design Open Hour', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden' }, sidebar: 'community', previous: { title: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', permalink: '/en/events/design-open-hour' }, next: { title: 'Developer Open Hour', permalink: '/en/events/developer-open-hour/overzicht' } },
    o = {},
    m = [];
   function u(e) {
    const n = { h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'meld-je-aan-voor-de-design-open-hour', children: 'Meld je aan voor de Design Open Hour' }), '\n', (0, t.jsx)(n.p, { children: 'Design Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, t.jsx)(a.Z, { listId: 'iklwgql4w2', emailFieldId: 'APNH2BBGKm', firstNameFieldId: 'QQjRkYyXpE', thanksPage: 'https://nldesignsystem.nl/events/design-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
  },
  82415: (e, n, i) => {
   i.d(n, { Z: () => l });
   var t = i(47027),
    s = i(75271),
    a = i(43430),
    r = i(52676);
   const l = (e) => {
    let { listId: n = '', laPostaId: i = '', thanksPage: l = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: m = '', interestsId: u = '', interests: c = [], workAreasId: p = '', privacyPolicyId: h = '', language: v = {} } = e;
    const {
      register: g,
      handleSubmit: j,
      formState: { errors: x },
     } = (0, a.cI)(),
     y = (0, s.useRef)(null),
     k = v && '2' === v.value;
    return (0, r.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: y,
     onSubmit: j(() => {
      y.current.submit();
     }),
     children: [(0, r.jsxs)(t.Wi, { type: 'email', children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: `id-${d}`, children: k ? 'Email address ' : 'E-mailadres' }) }), x[d] && (0, r.jsx)(t.w7, { children: x[d].message }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', 'aria-required': 'true', ...g(`${d}`, { required: { value: !0, message: k ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: k ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!x[d] }) })] }), (0, r.jsxs)(t.Wi, { type: 'text', children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: o, children: k ? 'Name' : 'Naam' }) }), x[o] && (0, r.jsx)(t.w7, { children: x[o].message }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: o, name: o, type: 'text', autoComplete: 'given-name', 'aria-required': 'true', ...g(`${o}`, { required: { value: !0, message: k ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!x[o] }) })] }), m && (0, r.jsxs)(t.Wi, { type: 'text', children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: m, children: 'Organisatie' }) }), x[m] && (0, r.jsx)(t.w7, { children: x[m].message }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: m, name: m, type: 'text' }) })] }), u && (0, r.jsxs)(t.pg, { children: [(0, r.jsx)(t.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, r.jsx)(t.ue, { children: 'Meerdere antwoorden mogelijk.' }), c.map((e, n) => (0, r.jsx)(t.Wi, { type: 'checkbox', children: (0, r.jsxs)(t.nv, { children: [(0, r.jsx)(t.XZ, { name: `${u}[]`, value: n >= 6 ? n + 2 : n + 1, id: `${u}-${n + 1}` }), (0, r.jsx)(t.lX, { htmlFor: `${u}-${n + 1}`, children: e })] }) }, e))] }), p && (0, r.jsxs)(t.Wi, { type: 'text', children: [(0, r.jsxs)(t.nv, { children: [(0, r.jsx)(t.lX, { htmlFor: p, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, r.jsx)(t.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.gx, { id: p, name: p }) })] }), h && (0, r.jsxs)(t.Wi, { type: 'text', children: [(0, r.jsx)(t.ue, { id: `${h}-description`, children: (0, r.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, r.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, r.jsxs)(t.Wi, { type: 'checkbox', children: [(0, r.jsx)(t.XZ, { value: '1', id: `${h}-1`, 'aria-describedby': `${h}-description`, 'aria-required': 'true', ...g(`${h}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!x[`${h}[]`] }), (0, r.jsxs)(t.lX, { htmlFor: `${h}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), x[h] && (0, r.jsx)(t.w7, { children: x[h].message })] }), v && (0, r.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, r.jsx)(t.hE, { children: (0, r.jsx)(t.zx, { type: 'submit', appearance: 'primary-action-button', children: k ? 'Sign up' : 'Aanmelden' }) }), (0, r.jsx)('input', { type: 'hidden', name: 'next', value: l }), (0, r.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, r.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, r.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, r.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
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
