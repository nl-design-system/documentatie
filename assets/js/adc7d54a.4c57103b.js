'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [90134],
 {
  3718: (e, i, n) => {
   n.r(i), n.d(i, { assets: () => o, contentTitle: () => l, default: () => m, frontMatter: () => r, metadata: () => d, toc: () => u });
   var t = n(52676),
    s = n(40139),
    a = n(82415);
   const r = { title: 'Aanmelden \xb7 Design Open Hour \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden' },
    l = 'Meld je aan voor de Design Open Hour',
    d = { id: 'community/events/design-open-hour/aanmelden', title: 'Aanmelden \xb7 Design Open Hour \xb7 Bijeenkomsten', description: 'Design Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.', source: '@site/docs/community/events/design-open-hour/aanmelden.mdx', sourceDirName: 'community/events/design-open-hour', slug: '/events/design-open-hour/aanmelden', permalink: '/events/design-open-hour/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden \xb7 Design Open Hour \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden' }, sidebar: 'community', previous: { title: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', permalink: '/events/design-open-hour' }, next: { title: 'Tijdens de Rijkshuisstijl Community Open Hour wisselen verschillende organisaties informatie, inzichten en tips uit over de Rijkshuisstijl.', permalink: '/events/rijkshuisstijl-community-open-hour' } },
    o = {},
    u = [];
   function c(e) {
    const i = { h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(i.h1, { id: 'meld-je-aan-voor-de-design-open-hour', children: 'Meld je aan voor de Design Open Hour' }), '\n', (0, t.jsx)(i.p, { children: 'Design Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, t.jsx)(a.A, { listId: 'iklwgql4w2', emailFieldId: 'APNH2BBGKm', firstNameFieldId: 'QQjRkYyXpE', thanksPage: 'https://nldesignsystem.nl/events/design-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function m(e = {}) {
    const { wrapper: i } = { ...(0, s.a)(), ...e.components };
    return i ? (0, t.jsx)(i, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, i, n) => {
   n.d(i, { A: () => d });
   var t = n(19696),
    s = n(74824),
    a = n(75271),
    r = n(25282),
    l = n(52676);
   const d = (e) => {
    let { listId: i = '', laPostaId: n = '', thanksPage: d = '', emailFieldId: o = '', firstNameFieldId: u = '', orgId: c = '', interestsId: m = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], disallowedInterestValues: j = [], workAreasId: v = '', privacyPolicyId: g = '', language: x, submitText: y = '', talkTitleId: k = '', talkDescriptionId: f = '' } = e;
    const {
      register: b,
      handleSubmit: w,
      formState: { errors: D },
     } = (0, r.cI)(),
     I = (0, a.useRef)(null),
     _ = '2' === x?.value,
     { search: H } = (0, t.TH)(),
     W = new URLSearchParams(H),
     $ = W.get('prefillEmail'),
     O = W.get('prefillName'),
     S =
      !!(m && p.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(t); ) t++;
        n.push(t), t++;
       }
       return n;
      })(p, j);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: I,
     onSubmit: w(() => {
      I.current.submit();
     }),
     children: [(0, l.jsxs)(s.Wi, { type: 'email', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: `id-${o}`, children: _ ? 'Email address ' : 'E-mailadres' }) }), D[o] && (0, l.jsx)(s.w7, { children: D[o].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: $, 'aria-required': 'true', ...b(`${o}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: _ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!D[o] }) })] }), (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: u, children: _ ? 'Name' : 'Naam' }) }), D[u] && (0, l.jsx)(s.w7, { children: D[u].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: u, name: u, type: 'text', defaultValue: O, autoComplete: 'given-name', 'aria-required': 'true', ...b(`${u}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!D[u] }) })] }), k && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.lX, { htmlFor: k, children: _ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(s.ue, { children: _ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: k, name: k, ...b(k, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.lX, { htmlFor: f, children: _ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(s.ue, { children: _ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.gx, { id: f, name: f, rows: 12, ...b(f, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: c, children: _ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), D[c] && (0, l.jsx)(s.w7, { children: D[c].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: c, name: c, type: 'text' }) })] }), m && (0, l.jsxs)(s.pg, { children: [(0, l.jsx)(s.nv, { children: (0, l.jsxs)(s.Qv, { children: [h, ' (niet verplicht)'] }) }), (0, l.jsx)(s.ue, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, i) => (0, l.jsxs)(s.Wi, { type: 'checkbox', children: [(0, l.jsx)(s.XZ, { name: `${m}[]`, value: S[i], id: `${m}-${S[i]}` }), (0, l.jsx)(s.lX, { htmlFor: `${m}-${S[i]}`, children: e })] }, e))] }), v && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.lX, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(s.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.gx, { id: v, name: v }) })] }), g && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.ue, { id: `${g}-description`, children: _ ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(s.Wi, { type: 'checkbox', children: [(0, l.jsx)(s.XZ, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...b(`${g}[]`, { required: { value: !0, message: _ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!D[`${g}[]`] }), (0, l.jsx)(s.lX, { htmlFor: `${g}-1`, children: _ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), D[g] && (0, l.jsx)(s.w7, { children: D[g].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(s.hE, { children: (0, l.jsx)(s.zx, { type: 'submit', appearance: 'primary-action-button', children: y || (_ ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: i }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
 },
]);
