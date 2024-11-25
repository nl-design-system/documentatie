'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [63451],
 {
  60670: (e, s, n) => {
   n.r(s), n.d(s, { assets: () => m, contentTitle: () => l, default: () => h, frontMatter: () => r, metadata: () => d, toc: () => o });
   var i = n(52676),
    t = n(24785),
    a = n(82415);
   const r = { title: 'Aanmelden \xb7 Design Systems Week 2024', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden' },
    l = 'Meld je aan voor Design Systems Week 2024',
    d = { id: 'community/events/design-systems-week/aanmelden', title: 'Aanmelden \xb7 Design Systems Week 2024', description: 'Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het hoe en waarom van design systems.', source: '@site/docs/community/events/design-systems-week/aanmelden.mdx', sourceDirName: 'community/events/design-systems-week', slug: '/events/design-systems-week/aanmelden', permalink: '/events/design-systems-week/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden \xb7 Design Systems Week 2024', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden' } },
    m = {},
    o = [];
   function c(e) {
    const s = { h1: 'h1', p: 'p', strong: 'strong', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(s.h1, { id: 'meld-je-aan-voor-design-systems-week-2024', children: 'Meld je aan voor Design Systems Week 2024' }), '\n', (0, i.jsxs)(s.p, { children: ['Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het ', (0, i.jsx)(s.strong, { children: 'hoe en waarom van design systems' }), '.'] }), '\n', (0, i.jsx)(s.p, { children: 'Laat je gegevens achter om op de hoogte te blijven van Design Systems Week.' }), '\n', (0, i.jsx)(a.Z, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/aanmelden/bedankt', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '1' } })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, t.a)(), ...e.components };
    return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, s, n) => {
   n.d(s, { Z: () => d });
   var i = n(3225),
    t = n(56150),
    a = n(75271),
    r = n(51686),
    l = n(52676);
   const d = (e) => {
    let { listId: s = '', laPostaId: n = '', thanksPage: d = '', emailFieldId: m = '', firstNameFieldId: o = '', orgId: c = '', interestsId: h = '', interests: u = [], workAreasId: p = '', privacyPolicyId: g = '', language: v = {}, submitText: j = '' } = e;
    const {
      register: x,
      handleSubmit: y,
      formState: { errors: k },
     } = (0, r.cI)(),
     f = (0, a.useRef)(null),
     b = v && '2' === v.value,
     { search: w } = (0, i.TH)(),
     S = new URLSearchParams(w),
     W = S.get('prefillEmail'),
     D = S.get('prefillName');
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: f,
     onSubmit: y(() => {
      f.current.submit();
     }),
     children: [(0, l.jsxs)(t.Wi, { type: 'email', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: `id-${m}`, children: b ? 'Email address ' : 'E-mailadres' }) }), k[m] && (0, l.jsx)(t.w7, { children: k[m].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: `id-${m}`, name: m, type: 'email', autoComplete: 'email', defaultValue: W, 'aria-required': 'true', ...x(`${m}`, { required: { value: !0, message: b ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: b ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!k[m] }) })] }), (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: o, children: b ? 'Name' : 'Naam' }) }), k[o] && (0, l.jsx)(t.w7, { children: k[o].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: o, name: o, type: 'text', defaultValue: D, autoComplete: 'given-name', 'aria-required': 'true', ...x(`${o}`, { required: { value: !0, message: b ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!k[o] }) })] }), c && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: c, children: 'Organisatie (niet verplicht)' }) }), k[c] && (0, l.jsx)(t.w7, { children: k[c].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: c, name: c, type: 'text' }) })] }), h && (0, l.jsxs)(t.pg, { children: [(0, l.jsx)(t.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, l.jsx)(t.ue, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, s) => (0, l.jsx)(t.Wi, { type: 'checkbox', children: (0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.XZ, { name: `${h}[]`, value: s >= 6 ? s + 2 : s + 1, id: `${h}-${s + 1}` }), (0, l.jsx)(t.lX, { htmlFor: `${h}-${s + 1}`, children: e })] }) }, e))] }), p && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.lX, { htmlFor: p, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.gx, { id: p, name: p }) })] }), g && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.ue, { id: `${g}-description`, children: (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.Wi, { type: 'checkbox', children: [(0, l.jsx)(t.XZ, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...x(`${g}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!k[`${g}[]`] }), (0, l.jsxs)(t.lX, { htmlFor: `${g}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), k[g] && (0, l.jsx)(t.w7, { children: k[g].message })] }), v && (0, l.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, l.jsx)(t.hE, { children: (0, l.jsx)(t.zx, { type: 'submit', appearance: 'primary-action-button', children: j || (b ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: s }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  24785: (e, s, n) => {
   n.d(s, { Z: () => l, a: () => r });
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
   function l(e) {
    let s;
    return (s = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), i.createElement(a.Provider, { value: s }, e.children);
   }
  },
 },
]);
