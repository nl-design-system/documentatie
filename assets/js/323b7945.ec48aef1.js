'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [31875],
 {
  56758: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => o, contentTitle: () => l, default: () => u, frontMatter: () => r, metadata: () => d, toc: () => c });
   var i = n(52676),
    a = n(40139),
    s = n(82415);
   const r = { title: 'Aanmelden \xb7 Heartbeat \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/events/heartbeat/aanmelden' },
    l = 'Meld je aan voor de Heartbeat',
    d = { id: 'community/events/heartbeat/aanmelden', title: 'Aanmelden \xb7 Heartbeat \xb7 Bijeenkomsten', description: 'Heartbeats zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige bijeenkomsten.', source: '@site/docs/community/events/heartbeat/aanmelden.mdx', sourceDirName: 'community/events/heartbeat', slug: '/events/heartbeat/aanmelden', permalink: '/events/heartbeat/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden \xb7 Heartbeat \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/events/heartbeat/aanmelden' }, sidebar: 'community', previous: { title: "Video's van de afgelopen Heartbeats", permalink: '/events/heartbeat/videos' }, next: { title: 'Wat moet ik weten als ik zelf iets wil vertellen tijdens de Heartbeat?', permalink: '/events/heartbeat/zelf-iets-vertellen' } },
    o = {},
    c = [];
   function m(e) {
    const t = { h1: 'h1', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t.h1, { id: 'meld-je-aan-voor-de-heartbeat', children: 'Meld je aan voor de Heartbeat' }), '\n', (0, i.jsx)(t.p, { children: 'Heartbeats zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige bijeenkomsten.' }), '\n', (0, i.jsx)(t.p, { children: 'We nodigen je op dit emailadres dan ook uit voor de daadwerkelijke meeting.' }), '\n', (0, i.jsx)(s.A, { listId: '601sv3rzai', emailFieldId: 'GivkPnqc1o', firstNameFieldId: 'p8ZNN4fpMI', thanksPage: 'https://nldesignsystem.nl/events/heartbeat/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: t } = { ...(0, a.a)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  82415: (e, t, n) => {
   n.d(t, { A: () => d });
   var i = n(87573),
    a = n(35076),
    s = n(75271),
    r = n(25282),
    l = n(52676);
   const d = (e) => {
    let { listId: t = '', laPostaId: n = '', thanksPage: d = '', emailFieldId: o = '', firstNameFieldId: c = '', orgId: m = '', interestsId: u = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], disallowedInterestValues: v = [], workAreasId: j = '', privacyPolicyId: x = '', language: g, submitText: y = '', talkTitleId: b = '', talkDescriptionId: k = '' } = e;
    const {
      register: f,
      handleSubmit: w,
      formState: { errors: I },
     } = (0, r.cI)(),
     _ = (0, s.useRef)(null),
     W = '2' === g?.value,
     { search: $ } = (0, i.TH)(),
     q = new URLSearchParams($),
     D = q.get('prefillEmail'),
     F = q.get('prefillName'),
     H =
      !!(u && p.length > 0) &&
      ((e, t) => {
       const n = [];
       let i = 1;
       for (let a = 0; a < e.length; a++) {
        for (; t.includes(i); ) i++;
        n.push(i), i++;
       }
       return n;
      })(p, v);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: _,
     onSubmit: w(() => {
      _.current.submit();
     }),
     children: [(0, l.jsxs)(a.Wi, { type: 'email', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: `id-${o}`, children: W ? 'Email address ' : 'E-mailadres' }) }), I[o] && (0, l.jsx)(a.w7, { children: I[o].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: D, 'aria-required': 'true', ...f(`${o}`, { required: { value: !0, message: W ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: W ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!I[o] }) })] }), (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: c, children: W ? 'Name' : 'Naam' }) }), I[c] && (0, l.jsx)(a.w7, { children: I[c].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: c, name: c, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...f(`${c}`, { required: { value: !0, message: W ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!I[c] }) })] }), b && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.lX, { htmlFor: b, children: W ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(a.ue, { children: W ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: b, name: b, ...f(b, { required: { value: !0, message: W ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.lX, { htmlFor: k, children: W ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(a.ue, { children: W ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.gx, { id: k, name: k, rows: 12, ...f(k, { required: { value: !0, message: W ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: m, children: W ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), I[m] && (0, l.jsx)(a.w7, { children: I[m].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: m, name: m, type: 'text' }) })] }), u && (0, l.jsxs)(a.pg, { children: [(0, l.jsxs)(a.Qv, { children: [h, ' (niet verplicht)'] }), (0, l.jsx)(a.ue, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, t) => (0, l.jsx)(a.Wi, { type: 'checkbox', children: (0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.XZ, { name: `${u}[]`, value: H[t], id: `${u}-${H[t]}` }), (0, l.jsx)(a.lX, { htmlFor: `${u}-${H[t]}`, children: e })] }) }, e))] }), j && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.lX, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(a.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.gx, { id: j, name: j }) })] }), x && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.ue, { id: `${x}-description`, children: W ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(a.Wi, { type: 'checkbox', children: [(0, l.jsx)(a.XZ, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...f(`${x}[]`, { required: { value: !0, message: W ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!I[`${x}[]`] }), (0, l.jsx)(a.lX, { htmlFor: `${x}-1`, children: W ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), I[x] && (0, l.jsx)(a.w7, { children: I[x].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(a.hE, { children: (0, l.jsx)(a.zx, { type: 'submit', appearance: 'primary-action-button', children: y || (W ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: t }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, t, n) => {
   n.d(t, { Z: () => l, a: () => r });
   var i = n(75271);
   const a = {},
    s = i.createContext(a);
   function r(e) {
    const t = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function l(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), i.createElement(s.Provider, { value: t }, e.children);
   }
  },
 },
]);
