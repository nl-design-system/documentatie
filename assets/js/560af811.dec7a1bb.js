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
    d = { id: 'community/events/design-systems-week/sign-up', title: 'Sign up for Design Systems Week', description: 'Design System Week 2024 will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.', source: '@site/docs/community/events/design-systems-week/sign-up.mdx', sourceDirName: 'community/events/design-systems-week', slug: '/events/design-systems-week/sign-up', permalink: '/events/design-systems-week/sign-up', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sign-up.mdx', tags: [], version: 'current', frontMatter: { title: 'Sign up for Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sign up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/sign-up' } },
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
   i.d(s, { Z: () => l });
   var n = i(56150),
    t = i(75271),
    a = i(55912),
    r = i(52676);
   const l = (e) => {
    let { listId: s = '', laPostaId: i = '', thanksPage: l = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: m = '', interestsId: u = '', interests: c = [], workAreasId: p = '', privacyPolicyId: h = '', language: g = {} } = e;
    const {
      register: v,
      handleSubmit: x,
      formState: { errors: y },
     } = (0, a.cI)(),
     j = (0, t.useRef)(null),
     f = g && '2' === g.value;
    return (0, r.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: j,
     onSubmit: x(() => {
      j.current.submit();
     }),
     children: [(0, r.jsxs)(n.Wi, { type: 'email', children: [(0, r.jsx)(n.nv, { children: (0, r.jsx)(n.lX, { htmlFor: `id-${d}`, children: f ? 'Email address ' : 'E-mailadres' }) }), y[d] && (0, r.jsx)(n.w7, { children: y[d].message }), (0, r.jsx)(n.nv, { children: (0, r.jsx)(n.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', 'aria-required': 'true', ...v(`${d}`, { required: { value: !0, message: f ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: f ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!y[d] }) })] }), (0, r.jsxs)(n.Wi, { type: 'text', children: [(0, r.jsx)(n.nv, { children: (0, r.jsx)(n.lX, { htmlFor: o, children: f ? 'Name' : 'Naam' }) }), y[o] && (0, r.jsx)(n.w7, { children: y[o].message }), (0, r.jsx)(n.nv, { children: (0, r.jsx)(n.fE, { id: o, name: o, type: 'text', autoComplete: 'given-name', 'aria-required': 'true', ...v(`${o}`, { required: { value: !0, message: f ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!y[o] }) })] }), m && (0, r.jsxs)(n.Wi, { type: 'text', children: [(0, r.jsx)(n.nv, { children: (0, r.jsx)(n.lX, { htmlFor: m, children: 'Organisatie' }) }), y[m] && (0, r.jsx)(n.w7, { children: y[m].message }), (0, r.jsx)(n.nv, { children: (0, r.jsx)(n.fE, { id: m, name: m, type: 'text' }) })] }), u && (0, r.jsxs)(n.pg, { children: [(0, r.jsx)(n.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, r.jsx)(n.ue, { children: 'Meerdere antwoorden mogelijk.' }), c.map((e, s) => (0, r.jsx)(n.Wi, { type: 'checkbox', children: (0, r.jsxs)(n.nv, { children: [(0, r.jsx)(n.XZ, { name: `${u}[]`, value: s >= 6 ? s + 2 : s + 1, id: `${u}-${s + 1}` }), (0, r.jsx)(n.lX, { htmlFor: `${u}-${s + 1}`, children: e })] }) }, e))] }), p && (0, r.jsxs)(n.Wi, { type: 'text', children: [(0, r.jsxs)(n.nv, { children: [(0, r.jsx)(n.lX, { htmlFor: p, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, r.jsx)(n.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, r.jsx)(n.nv, { children: (0, r.jsx)(n.gx, { id: p, name: p }) })] }), h && (0, r.jsxs)(n.Wi, { type: 'text', children: [(0, r.jsx)(n.ue, { id: `${h}-description`, children: (0, r.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, r.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, r.jsxs)(n.Wi, { type: 'checkbox', children: [(0, r.jsx)(n.XZ, { value: '1', id: `${h}-1`, 'aria-describedby': `${h}-description`, 'aria-required': 'true', ...v(`${h}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!y[`${h}[]`] }), (0, r.jsxs)(n.lX, { htmlFor: `${h}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), y[h] && (0, r.jsx)(n.w7, { children: y[h].message })] }), g && (0, r.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, r.jsx)(n.hE, { children: (0, r.jsx)(n.zx, { type: 'submit', appearance: 'primary-action-button', children: f ? 'Sign up' : 'Aanmelden' }) }), (0, r.jsx)('input', { type: 'hidden', name: 'next', value: l }), (0, r.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, r.jsx)('input', { type: 'hidden', name: 'l', value: s }), (0, r.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, r.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
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
