'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [10488],
 {
  58082: (e, s, i) => {
   i.r(s), i.d(s, { assets: () => o, contentTitle: () => l, default: () => c, frontMatter: () => r, metadata: () => d, toc: () => m });
   var n = i(52676),
    t = i(24785),
    a = i(82415);
   const r = { title: 'Sign up for Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sign up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/sign-up' },
    l = 'Sign up for Design Systems Week',
    d = { id: 'community/events/design-systems-week/sign-up', title: 'Sign up for Design Systems Week', description: 'Design System Week 2024 will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.', source: '@site/docs/community/events/design-systems-week/sign-up.mdx', sourceDirName: 'community/events/design-systems-week', slug: '/events/design-systems-week/sign-up', permalink: '/en/events/design-systems-week/sign-up', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sign-up.mdx', tags: [], version: 'current', frontMatter: { title: 'Sign up for Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sign up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/sign-up' } },
    o = {},
    m = [];
   function u(e) {
    const s = { h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(s.h1, { id: 'sign-up-for-design-systems-week', children: 'Sign up for Design Systems Week' }), '\n', (0, n.jsx)(s.p, { children: 'Design System Week 2024 will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.' }), '\n', (0, n.jsx)(s.p, { children: 'Leave your info to receive updates from us leading up to Design Systems Week.' }), '\n', (0, n.jsx)(a.Z, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/sign-up/thanks', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '2' } })] });
   }
   function c(e = {}) {
    const { wrapper: s } = { ...(0, t.a)(), ...e.components };
    return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(u, { ...e }) }) : u(e);
   }
  },
  82415: (e, s, i) => {
   i.d(s, { Z: () => d });
   var n = i(3225),
    t = i(56150),
    a = i(75271),
    r = i(55912),
    l = i(52676);
   const d = (e) => {
    let { listId: s = '', laPostaId: i = '', thanksPage: d = '', emailFieldId: o = '', firstNameFieldId: m = '', orgId: u = '', interestsId: c = '', interests: p = [], workAreasId: h = '', privacyPolicyId: g = '', language: v = {}, submitText: x = '' } = e;
    const {
      register: y,
      handleSubmit: j,
      formState: { errors: f },
     } = (0, r.cI)(),
     k = (0, a.useRef)(null),
     b = v && '2' === v.value,
     { search: w } = (0, n.TH)(),
     S = new URLSearchParams(w),
     W = S.get('prefillEmail'),
     D = S.get('prefillName');
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: k,
     onSubmit: j(() => {
      k.current.submit();
     }),
     children: [(0, l.jsxs)(t.Wi, { type: 'email', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: `id-${o}`, children: b ? 'Email address ' : 'E-mailadres' }) }), f[o] && (0, l.jsx)(t.w7, { children: f[o].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', value: W, 'aria-required': 'true', ...y(`${o}`, { required: { value: !0, message: b ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: b ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!f[o] }) })] }), (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: m, children: b ? 'Name' : 'Naam' }) }), f[m] && (0, l.jsx)(t.w7, { children: f[m].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: m, name: m, type: 'text', value: D, autoComplete: 'given-name', 'aria-required': 'true', ...y(`${m}`, { required: { value: !0, message: b ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!f[m] }) })] }), u && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: u, children: 'Organisatie' }) }), f[u] && (0, l.jsx)(t.w7, { children: f[u].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: u, name: u, type: 'text' }) })] }), c && (0, l.jsxs)(t.pg, { children: [(0, l.jsx)(t.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, l.jsx)(t.ue, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, s) => (0, l.jsx)(t.Wi, { type: 'checkbox', children: (0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.XZ, { name: `${c}[]`, value: s >= 6 ? s + 2 : s + 1, id: `${c}-${s + 1}` }), (0, l.jsx)(t.lX, { htmlFor: `${c}-${s + 1}`, children: e })] }) }, e))] }), h && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.lX, { htmlFor: h, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.gx, { id: h, name: h }) })] }), g && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.ue, { id: `${g}-description`, children: (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.Wi, { type: 'checkbox', children: [(0, l.jsx)(t.XZ, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...y(`${g}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!f[`${g}[]`] }), (0, l.jsxs)(t.lX, { htmlFor: `${g}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), f[g] && (0, l.jsx)(t.w7, { children: f[g].message })] }), v && (0, l.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, l.jsx)(t.hE, { children: (0, l.jsx)(t.zx, { type: 'submit', appearance: 'primary-action-button', children: x || (b ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: s }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  24785: (e, s, i) => {
   i.d(s, { Z: () => l, a: () => r });
   var n = i(75271);
   const t = {},
    a = n.createContext(t);
   function r(e) {
    const s = n.useContext(a);
    return n.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function l(e) {
    let s;
    return (s = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), n.createElement(a.Provider, { value: s }, e.children);
   }
  },
 },
]);
