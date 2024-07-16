'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [90134],
 {
  41487: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => o, contentTitle: () => l, default: () => u, frontMatter: () => a, metadata: () => d, toc: () => m });
   var t = i(52676),
    s = i(24785),
    r = i(82415);
   const a = { title: 'Aanmelden voor de Design Open Hour', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden' },
    l = 'Meld je aan voor de Design Open Hour',
    d = { id: 'community/events/design-open-hour/aanmelden', title: 'Aanmelden voor de Design Open Hour', description: 'Design Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.', source: '@site/docs/community/events/design-open-hour/aanmelden.mdx', sourceDirName: 'community/events/design-open-hour', slug: '/events/design-open-hour/aanmelden', permalink: '/events/design-open-hour/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden voor de Design Open Hour', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden' }, sidebar: 'community', previous: { title: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', permalink: '/events/design-open-hour' }, next: { title: 'Developer Open Hour', permalink: '/events/developer-open-hour/overzicht' } },
    o = {},
    m = [];
   function c(e) {
    const n = { h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'meld-je-aan-voor-de-design-open-hour', children: 'Meld je aan voor de Design Open Hour' }), '\n', (0, t.jsx)(n.p, { children: 'Design Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, t.jsx)(r.Z, { listId: 'iklwgql4w2', emailFieldId: 'APNH2BBGKm', firstNameFieldId: 'QQjRkYyXpE', thanksPage: 'https://nldesignsystem.nl/events/design-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
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
    r = i(43430),
    a = i(52676);
   const l = (e) => {
    let { listId: n = '', laPostaId: i = '', thanksPage: l = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: m = '', interestsId: c = '', interests: u = [], workAreasId: p = '', privacyPolicyId: h = '' } = e;
    const {
      register: v,
      handleSubmit: g,
      formState: { errors: j },
     } = (0, r.cI)(),
     x = (0, s.useRef)(null);
    return (0, a.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: x,
     onSubmit: g(() => {
      x.current.submit();
     }),
     children: [(0, a.jsxs)(t.Wi, { type: 'email', children: [(0, a.jsx)(t.nv, { children: (0, a.jsx)(t.lX, { htmlFor: `id-${d}`, children: 'E-mailadres' }) }), j[d] && (0, a.jsx)(t.w7, { children: j[d].message }), (0, a.jsx)(t.nv, { children: (0, a.jsx)(t.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', 'aria-required': 'true', ...v(`${d}`, { required: { value: !0, message: 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: 'Dit is geen correct emailadres.' } }), invalid: !!j[d] }) })] }), (0, a.jsxs)(t.Wi, { type: 'text', children: [(0, a.jsx)(t.nv, { children: (0, a.jsx)(t.lX, { htmlFor: o, children: 'Naam' }) }), j[o] && (0, a.jsx)(t.w7, { children: j[o].message }), (0, a.jsx)(t.nv, { children: (0, a.jsx)(t.fE, { id: o, name: o, type: 'text', autoComplete: 'given-name', 'aria-required': 'true', ...v(`${o}`, { required: { value: !0, message: 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!j[o] }) })] }), m && (0, a.jsxs)(t.Wi, { type: 'text', children: [(0, a.jsx)(t.nv, { children: (0, a.jsx)(t.lX, { htmlFor: m, children: 'Organisatie' }) }), j[m] && (0, a.jsx)(t.w7, { children: j[m].message }), (0, a.jsx)(t.nv, { children: (0, a.jsx)(t.fE, { id: m, name: m, type: 'text' }) })] }), c && (0, a.jsxs)(t.pg, { children: [(0, a.jsx)(t.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, a.jsx)(t.ue, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, n) => (0, a.jsx)(t.Wi, { type: 'checkbox', children: (0, a.jsxs)(t.nv, { children: [(0, a.jsx)(t.XZ, { name: `${c}[]`, value: n >= 6 ? n + 2 : n + 1, id: `${c}-${n + 1}` }), (0, a.jsx)(t.lX, { htmlFor: `${c}-${n + 1}`, children: e })] }) }, e))] }), p && (0, a.jsxs)(t.Wi, { type: 'text', children: [(0, a.jsxs)(t.nv, { children: [(0, a.jsx)(t.lX, { htmlFor: p, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, a.jsx)(t.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, a.jsx)(t.nv, { children: (0, a.jsx)(t.gx, { id: p, name: p }) })] }), h && (0, a.jsxs)(t.Wi, { type: 'text', children: [(0, a.jsx)(t.ue, { id: `${h}-description`, children: (0, a.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, a.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, a.jsxs)(t.Wi, { type: 'checkbox', children: [(0, a.jsx)(t.XZ, { value: '1', id: `${h}-1`, 'aria-describedby': `${h}-description`, 'aria-required': 'true', ...v(`${h}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!j[`${h}[]`] }), (0, a.jsxs)(t.lX, { htmlFor: `${h}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), j[h] && (0, a.jsx)(t.w7, { children: j[h].message })] }), (0, a.jsx)(t.hE, { children: (0, a.jsx)(t.zx, { type: 'submit', appearance: 'primary-action-button', children: 'Aanmelden' }) }), (0, a.jsx)('input', { type: 'hidden', name: 'next', value: l }), (0, a.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, a.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, a.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, a.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => a });
   var t = i(75271);
   const s = {},
    r = t.createContext(s);
   function a(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
