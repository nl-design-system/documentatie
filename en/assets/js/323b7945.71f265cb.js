'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [31875],
 {
  141: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => o, contentTitle: () => l, default: () => h, frontMatter: () => r, metadata: () => d, toc: () => m });
   var a = n(52676),
    i = n(24785),
    s = n(82415);
   const r = { title: 'Aanmelden voor de Heartbeat', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/events/heartbeat/aanmelden' },
    l = 'Meld je aan voor de Heartbeat',
    d = { id: 'community/events/heartbeat/aanmelden', title: 'Aanmelden voor de Heartbeat', description: 'Heartbeats zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige bijeenkomsten.', source: '@site/docs/community/events/heartbeat/aanmelden.mdx', sourceDirName: 'community/events/heartbeat', slug: '/events/heartbeat/aanmelden', permalink: '/en/events/heartbeat/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden voor de Heartbeat', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/events/heartbeat/aanmelden' }, sidebar: 'community', previous: { title: "Video's van de afgelopen Heartbeats", permalink: '/en/events/heartbeat/videos' }, next: { title: 'Design Open Hour', permalink: '/en/events/design-open-hour/overzicht' } },
    o = {},
    m = [];
   function c(e) {
    const t = { h1: 'h1', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.h1, { id: 'meld-je-aan-voor-de-heartbeat', children: 'Meld je aan voor de Heartbeat' }), '\n', (0, a.jsx)(t.p, { children: 'Heartbeats zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige bijeenkomsten.' }), '\n', (0, a.jsx)(t.p, { children: 'We nodigen je op dit emailadres dan ook uit voor de daadwerkelijke meeting.' }), '\n', (0, a.jsx)(s.Z, { listId: '601sv3rzai', emailFieldId: 'GivkPnqc1o', firstNameFieldId: 'p8ZNN4fpMI', thanksPage: 'https://nldesignsystem.nl/events/heartbeat/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function h(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, t, n) => {
   n.d(t, { Z: () => d });
   var a = n(3225),
    i = n(56150),
    s = n(75271),
    r = n(55912),
    l = n(52676);
   const d = (e) => {
    let { listId: t = '', laPostaId: n = '', thanksPage: d = '', emailFieldId: o = '', firstNameFieldId: m = '', orgId: c = '', interestsId: h = '', interests: u = [], workAreasId: p = '', privacyPolicyId: v = '', language: j = {}, submitText: x = '' } = e;
    const {
      register: g,
      handleSubmit: b,
      formState: { errors: k },
     } = (0, r.cI)(),
     y = (0, s.useRef)(null),
     f = j && '2' === j.value,
     { search: w } = (0, a.TH)(),
     _ = new URLSearchParams(w),
     I = _.get('prefillEmail'),
     $ = _.get('prefillName');
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: y,
     onSubmit: b(() => {
      y.current.submit();
     }),
     children: [(0, l.jsxs)(i.Wi, { type: 'email', children: [(0, l.jsx)(i.nv, { children: (0, l.jsx)(i.lX, { htmlFor: `id-${o}`, children: f ? 'Email address ' : 'E-mailadres' }) }), k[o] && (0, l.jsx)(i.w7, { children: k[o].message }), (0, l.jsx)(i.nv, { children: (0, l.jsx)(i.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', value: I, 'aria-required': 'true', ...g(`${o}`, { required: { value: !0, message: f ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: f ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!k[o] }) })] }), (0, l.jsxs)(i.Wi, { type: 'text', children: [(0, l.jsx)(i.nv, { children: (0, l.jsx)(i.lX, { htmlFor: m, children: f ? 'Name' : 'Naam' }) }), k[m] && (0, l.jsx)(i.w7, { children: k[m].message }), (0, l.jsx)(i.nv, { children: (0, l.jsx)(i.fE, { id: m, name: m, type: 'text', value: $, autoComplete: 'given-name', 'aria-required': 'true', ...g(`${m}`, { required: { value: !0, message: f ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!k[m] }) })] }), c && (0, l.jsxs)(i.Wi, { type: 'text', children: [(0, l.jsx)(i.nv, { children: (0, l.jsx)(i.lX, { htmlFor: c, children: 'Organisatie' }) }), k[c] && (0, l.jsx)(i.w7, { children: k[c].message }), (0, l.jsx)(i.nv, { children: (0, l.jsx)(i.fE, { id: c, name: c, type: 'text' }) })] }), h && (0, l.jsxs)(i.pg, { children: [(0, l.jsx)(i.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, l.jsx)(i.ue, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, t) => (0, l.jsx)(i.Wi, { type: 'checkbox', children: (0, l.jsxs)(i.nv, { children: [(0, l.jsx)(i.XZ, { name: `${h}[]`, value: t >= 6 ? t + 2 : t + 1, id: `${h}-${t + 1}` }), (0, l.jsx)(i.lX, { htmlFor: `${h}-${t + 1}`, children: e })] }) }, e))] }), p && (0, l.jsxs)(i.Wi, { type: 'text', children: [(0, l.jsxs)(i.nv, { children: [(0, l.jsx)(i.lX, { htmlFor: p, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(i.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(i.nv, { children: (0, l.jsx)(i.gx, { id: p, name: p }) })] }), v && (0, l.jsxs)(i.Wi, { type: 'text', children: [(0, l.jsx)(i.ue, { id: `${v}-description`, children: (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(i.Wi, { type: 'checkbox', children: [(0, l.jsx)(i.XZ, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...g(`${v}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!k[`${v}[]`] }), (0, l.jsxs)(i.lX, { htmlFor: `${v}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), k[v] && (0, l.jsx)(i.w7, { children: k[v].message })] }), j && (0, l.jsx)('input', { type: 'hidden', name: j.id, value: j.value }), (0, l.jsx)(i.hE, { children: (0, l.jsx)(i.zx, { type: 'submit', appearance: 'primary-action-button', children: x || (f ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: t }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => l, a: () => r });
   var a = n(75271);
   const i = {},
    s = a.createContext(i);
   function r(e) {
    const t = a.useContext(s);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function l(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), a.createElement(s.Provider, { value: t }, e.children);
   }
  },
 },
]);
