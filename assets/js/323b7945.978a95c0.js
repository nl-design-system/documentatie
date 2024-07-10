'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [31875],
 {
  57088: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => s, metadata: () => l, toc: () => m });
   var a = n(52676),
    i = n(24785),
    r = n(82415);
   const s = { title: 'Aanmelden voor de Heartbeat', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/events/heartbeat/aanmelden' },
    d = 'Meld je aan voor de Heartbeat',
    l = { id: 'community/events/heartbeat/aanmelden', title: 'Aanmelden voor de Heartbeat', description: 'Heartbeats zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige events.', source: '@site/docs/community/events/heartbeat/aanmelden.mdx', sourceDirName: 'community/events/heartbeat', slug: '/events/heartbeat/aanmelden', permalink: '/events/heartbeat/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden voor de Heartbeat', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/events/heartbeat/aanmelden' }, sidebar: 'community', previous: { title: "Video's van de afgelopen Heartbeats", permalink: '/events/heartbeat/videos' }, next: { title: 'Design Open Hour', permalink: '/events/design-open-hour/overzicht' } },
    o = {},
    m = [];
   function c(e) {
    const t = { h1: 'h1', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.h1, { id: 'meld-je-aan-voor-de-heartbeat', children: 'Meld je aan voor de Heartbeat' }), '\n', (0, a.jsx)(t.p, { children: 'Heartbeats zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige events.' }), '\n', (0, a.jsx)(t.p, { children: 'We nodigen je op dit emailadres dan ook uit voor de daadwerkelijke meeting.' }), '\n', (0, a.jsx)(r.Z, { listId: '601sv3rzai', emailFieldId: 'GivkPnqc1o', firstNameFieldId: 'p8ZNN4fpMI', thanksPage: 'https://nldesignsystem.nl/events/heartbeat/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function h(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, t, n) => {
   n.d(t, { Z: () => d });
   var a = n(47027),
    i = n(75271),
    r = n(43430),
    s = n(52676);
   const d = (e) => {
    let { listId: t = '', laPostaId: n = '', thanksPage: d = '', emailFieldId: l = '', firstNameFieldId: o = '', orgId: m = '', interestsId: c = '', interests: h = [], workAreasId: u = '', privacyPolicyId: p = '' } = e;
    const {
      register: v,
      handleSubmit: j,
      formState: { errors: x },
     } = (0, r.cI)(),
     g = (0, i.useRef)(null);
    return (0, s.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: g,
     onSubmit: j(() => {
      g.current.submit();
     }),
     children: [(0, s.jsxs)(a.Wi, { type: 'email', children: [(0, s.jsx)(a.nv, { children: (0, s.jsx)(a.lX, { htmlFor: `id-${l}`, children: 'E-mailadres' }) }), x[l] && (0, s.jsx)(a.w7, { children: x[l].message }), (0, s.jsx)(a.nv, { children: (0, s.jsx)(a.fE, { id: `id-${l}`, name: l, type: 'email', autoComplete: 'email', 'aria-required': 'true', ...v(`${l}`, { required: { value: !0, message: 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: 'Dit is geen correct emailadres.' } }), invalid: !!x[l] }) })] }), (0, s.jsxs)(a.Wi, { type: 'text', children: [(0, s.jsx)(a.nv, { children: (0, s.jsx)(a.lX, { htmlFor: o, children: 'Naam' }) }), x[o] && (0, s.jsx)(a.w7, { children: x[o].message }), (0, s.jsx)(a.nv, { children: (0, s.jsx)(a.fE, { id: o, name: o, type: 'text', autoComplete: 'given-name', 'aria-required': 'true', ...v(`${o}`, { required: { value: !0, message: 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!x[o] }) })] }), m && (0, s.jsxs)(a.Wi, { type: 'text', children: [(0, s.jsx)(a.nv, { children: (0, s.jsx)(a.lX, { htmlFor: m, children: 'Organisatie' }) }), x[m] && (0, s.jsx)(a.w7, { children: x[m].message }), (0, s.jsx)(a.nv, { children: (0, s.jsx)(a.fE, { id: m, name: m, type: 'text' }) })] }), c && (0, s.jsxs)(a.pg, { children: [(0, s.jsx)(a.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, s.jsx)(a.ue, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, t) => (0, s.jsx)(a.Wi, { type: 'checkbox', children: (0, s.jsxs)(a.nv, { children: [(0, s.jsx)(a.XZ, { name: `${c}[]`, value: t >= 6 ? t + 2 : t + 1, id: `${c}-${t + 1}` }), (0, s.jsx)(a.lX, { htmlFor: `${c}-${t + 1}`, children: e })] }) }, e))] }), u && (0, s.jsxs)(a.Wi, { type: 'text', children: [(0, s.jsxs)(a.nv, { children: [(0, s.jsx)(a.lX, { htmlFor: u, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, s.jsx)(a.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, s.jsx)(a.nv, { children: (0, s.jsx)(a.gx, { id: u, name: u }) })] }), p && (0, s.jsxs)(a.Wi, { type: 'text', children: [(0, s.jsx)(a.ue, { id: `${p}-description`, children: (0, s.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, s.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, s.jsxs)(a.Wi, { type: 'checkbox', children: [(0, s.jsx)(a.XZ, { value: '1', id: `${p}-1`, 'aria-describedby': `${p}-description`, 'aria-required': 'true', ...v(`${p}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!x[`${p}[]`] }), (0, s.jsxs)(a.lX, { htmlFor: `${p}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), x[p] && (0, s.jsx)(a.w7, { children: x[p].message })] }), (0, s.jsx)(a.hE, { children: (0, s.jsx)(a.zx, { type: 'submit', appearance: 'primary-action-button', children: 'Aanmelden' }) }), (0, s.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, s.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, s.jsx)('input', { type: 'hidden', name: 'l', value: t }), (0, s.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, s.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => d, a: () => s });
   var a = n(75271);
   const i = {},
    r = a.createContext(i);
   function s(e) {
    const t = a.useContext(r);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function d(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), a.createElement(r.Provider, { value: t }, e.children);
   }
  },
 },
]);
