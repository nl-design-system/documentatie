'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [90134],
 {
  23938: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => o, contentTitle: () => l, default: () => c, frontMatter: () => r, metadata: () => d, toc: () => m });
   var t = i(52676),
    s = i(24785),
    a = i(82415);
   const r = { title: 'Aanmelden voor de Design Open Hour', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden' },
    l = 'Meld je aan voor de Design Open Hour',
    d = { id: 'community/events/design-open-hour/aanmelden', title: 'Aanmelden voor de Design Open Hour', description: 'Design Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.', source: '@site/docs/community/events/design-open-hour/aanmelden.mdx', sourceDirName: 'community/events/design-open-hour', slug: '/events/design-open-hour/aanmelden', permalink: '/events/design-open-hour/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden voor de Design Open Hour', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden' }, sidebar: 'community', previous: { title: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', permalink: '/events/design-open-hour' }, next: { title: 'Developer Open Hour', permalink: '/events/developer-open-hour/overzicht' } },
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
   i.d(n, { Z: () => d });
   var t = i(3225),
    s = i(56150),
    a = i(75271),
    r = i(55912),
    l = i(52676);
   const d = (e) => {
    let { listId: n = '', laPostaId: i = '', thanksPage: d = '', emailFieldId: o = '', firstNameFieldId: m = '', orgId: u = '', interestsId: c = '', interests: p = [], workAreasId: h = '', privacyPolicyId: v = '', language: g = {}, submitText: j = '' } = e;
    const {
      register: x,
      handleSubmit: y,
      formState: { errors: k },
     } = (0, r.cI)(),
     f = (0, a.useRef)(null),
     b = g && '2' === g.value,
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
     onSubmit: y(() => {
      f.current.submit();
     }),
     children: [(0, l.jsxs)(s.Wi, { type: 'email', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: `id-${o}`, children: b ? 'Email address ' : 'E-mailadres' }) }), k[o] && (0, l.jsx)(s.w7, { children: k[o].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', value: _, 'aria-required': 'true', ...x(`${o}`, { required: { value: !0, message: b ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: b ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!k[o] }) })] }), (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: m, children: b ? 'Name' : 'Naam' }) }), k[m] && (0, l.jsx)(s.w7, { children: k[m].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: m, name: m, type: 'text', value: I, autoComplete: 'given-name', 'aria-required': 'true', ...x(`${m}`, { required: { value: !0, message: b ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!k[m] }) })] }), u && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: u, children: 'Organisatie' }) }), k[u] && (0, l.jsx)(s.w7, { children: k[u].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: u, name: u, type: 'text' }) })] }), c && (0, l.jsxs)(s.pg, { children: [(0, l.jsx)(s.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, l.jsx)(s.ue, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, n) => (0, l.jsx)(s.Wi, { type: 'checkbox', children: (0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.XZ, { name: `${c}[]`, value: n >= 6 ? n + 2 : n + 1, id: `${c}-${n + 1}` }), (0, l.jsx)(s.lX, { htmlFor: `${c}-${n + 1}`, children: e })] }) }, e))] }), h && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.lX, { htmlFor: h, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(s.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.gx, { id: h, name: h }) })] }), v && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.ue, { id: `${v}-description`, children: (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(s.Wi, { type: 'checkbox', children: [(0, l.jsx)(s.XZ, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...x(`${v}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!k[`${v}[]`] }), (0, l.jsxs)(s.lX, { htmlFor: `${v}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), k[v] && (0, l.jsx)(s.w7, { children: k[v].message })] }), g && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(s.hE, { children: (0, l.jsx)(s.zx, { type: 'submit', appearance: 'primary-action-button', children: j || (b ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
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
