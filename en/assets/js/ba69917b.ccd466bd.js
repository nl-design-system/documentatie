'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [63451],
 {
  82257: (e, s, n) => {
   n.r(s), n.d(s, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => r, metadata: () => l, toc: () => m });
   var i = n(52676),
    t = n(24785),
    a = n(82415);
   const r = { title: 'Aanmelden voor Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden' },
    d = 'Meld je aan voor Design Systems Week',
    l = { id: 'community/events/design-systems-week/aanmelden', title: 'Aanmelden voor Design Systems Week', description: 'Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het hoe en waarom van design systems.', source: '@site/docs/community/events/design-systems-week/aanmelden.mdx', sourceDirName: 'community/events/design-systems-week', slug: '/events/design-systems-week/aanmelden', permalink: '/en/events/design-systems-week/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden voor Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden' } },
    o = {},
    m = [];
   function c(e) {
    const s = { h1: 'h1', p: 'p', strong: 'strong', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(s.h1, { id: 'meld-je-aan-voor-design-systems-week', children: 'Meld je aan voor Design Systems Week' }), '\n', (0, i.jsxs)(s.p, { children: ['Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het ', (0, i.jsx)(s.strong, { children: 'hoe en waarom van design systems' }), '.'] }), '\n', (0, i.jsx)(s.p, { children: 'Laat je gegevens achter om op de hoogte te blijven van Design Systems Week.' }), '\n', (0, i.jsx)(a.Z, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-system-week/aanmelden/bedankt', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '1' } })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, t.a)(), ...e.components };
    return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, s, n) => {
   n.d(s, { Z: () => d });
   var i = n(47027),
    t = n(75271),
    a = n(43430),
    r = n(52676);
   const d = (e) => {
    let { listId: s = '', laPostaId: n = '', thanksPage: d = '', emailFieldId: l = '', firstNameFieldId: o = '', orgId: m = '', interestsId: c = '', interests: h = [], workAreasId: u = '', privacyPolicyId: v = '', language: p = {} } = e;
    const {
      register: g,
      handleSubmit: j,
      formState: { errors: x },
     } = (0, a.cI)(),
     y = (0, t.useRef)(null),
     k = p && '2' === p.value;
    return (0, r.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: y,
     onSubmit: j(() => {
      y.current.submit();
     }),
     children: [(0, r.jsxs)(i.Wi, { type: 'email', children: [(0, r.jsx)(i.nv, { children: (0, r.jsx)(i.lX, { htmlFor: `id-${l}`, children: k ? 'Email address ' : 'E-mailadres' }) }), x[l] && (0, r.jsx)(i.w7, { children: x[l].message }), (0, r.jsx)(i.nv, { children: (0, r.jsx)(i.fE, { id: `id-${l}`, name: l, type: 'email', autoComplete: 'email', 'aria-required': 'true', ...g(`${l}`, { required: { value: !0, message: k ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: k ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!x[l] }) })] }), (0, r.jsxs)(i.Wi, { type: 'text', children: [(0, r.jsx)(i.nv, { children: (0, r.jsx)(i.lX, { htmlFor: o, children: k ? 'Name' : 'Naam' }) }), x[o] && (0, r.jsx)(i.w7, { children: x[o].message }), (0, r.jsx)(i.nv, { children: (0, r.jsx)(i.fE, { id: o, name: o, type: 'text', autoComplete: 'given-name', 'aria-required': 'true', ...g(`${o}`, { required: { value: !0, message: k ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!x[o] }) })] }), m && (0, r.jsxs)(i.Wi, { type: 'text', children: [(0, r.jsx)(i.nv, { children: (0, r.jsx)(i.lX, { htmlFor: m, children: 'Organisatie' }) }), x[m] && (0, r.jsx)(i.w7, { children: x[m].message }), (0, r.jsx)(i.nv, { children: (0, r.jsx)(i.fE, { id: m, name: m, type: 'text' }) })] }), c && (0, r.jsxs)(i.pg, { children: [(0, r.jsx)(i.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, r.jsx)(i.ue, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, s) => (0, r.jsx)(i.Wi, { type: 'checkbox', children: (0, r.jsxs)(i.nv, { children: [(0, r.jsx)(i.XZ, { name: `${c}[]`, value: s >= 6 ? s + 2 : s + 1, id: `${c}-${s + 1}` }), (0, r.jsx)(i.lX, { htmlFor: `${c}-${s + 1}`, children: e })] }) }, e))] }), u && (0, r.jsxs)(i.Wi, { type: 'text', children: [(0, r.jsxs)(i.nv, { children: [(0, r.jsx)(i.lX, { htmlFor: u, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, r.jsx)(i.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, r.jsx)(i.nv, { children: (0, r.jsx)(i.gx, { id: u, name: u }) })] }), v && (0, r.jsxs)(i.Wi, { type: 'text', children: [(0, r.jsx)(i.ue, { id: `${v}-description`, children: (0, r.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, r.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, r.jsxs)(i.Wi, { type: 'checkbox', children: [(0, r.jsx)(i.XZ, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...g(`${v}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!x[`${v}[]`] }), (0, r.jsxs)(i.lX, { htmlFor: `${v}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), x[v] && (0, r.jsx)(i.w7, { children: x[v].message })] }), p && (0, r.jsx)('input', { type: 'hidden', name: p.id, value: p.value }), (0, r.jsx)(i.hE, { children: (0, r.jsx)(i.zx, { type: 'submit', appearance: 'primary-action-button', children: k ? 'Sign up' : 'Aanmelden' }) }), (0, r.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, r.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, r.jsx)('input', { type: 'hidden', name: 'l', value: s }), (0, r.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, r.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  24785: (e, s, n) => {
   n.d(s, { Z: () => d, a: () => r });
   var i = n(75271);
   const t = {},
    a = i.createContext(t);
   function r(e) {
    const s = i.useContext(a);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function d(e) {
    let s;
    return (s = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), i.createElement(a.Provider, { value: s }, e.children);
   }
  },
 },
]);
