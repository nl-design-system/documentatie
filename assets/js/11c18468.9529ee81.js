'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [22790],
 {
  59243: (e, i, n) => {
   n.r(i), n.d(i, { assets: () => m, contentTitle: () => l, default: () => c, frontMatter: () => a, metadata: () => o, toc: () => d });
   var t = n(52676),
    s = n(40139),
    r = n(82415);
   const a = { title: 'Meld je aan voor de Rijkshuisstijl Community \xb7 Rijkshuisstijl Community \xb7 Community Sprints', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/rijkshuisstijl-community/aanmelden', keywords: ['nl design system', 'community sprint', 'rijkshuisstijl community', 'rijkshuisstijl community sprint', 'rijkshuisstijl community open hour'] },
    l = 'Meld je aan voor de Rijkshuisstijl Community',
    o = { id: 'community/community-sprints/rijkshuisstijl-community/aanmelden', title: 'Meld je aan voor de Rijkshuisstijl Community \xb7 Rijkshuisstijl Community \xb7 Community Sprints', description: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de Rijkshuisstijl Community.', source: '@site/docs/community/community-sprints/rijkshuisstijl-community/aanmelden.mdx', sourceDirName: 'community/community-sprints/rijkshuisstijl-community', slug: '/community/community-sprints/rijkshuisstijl-community/aanmelden', permalink: '/community/community-sprints/rijkshuisstijl-community/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/rijkshuisstijl-community/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Meld je aan voor de Rijkshuisstijl Community \xb7 Rijkshuisstijl Community \xb7 Community Sprints', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/rijkshuisstijl-community/aanmelden', keywords: ['nl design system', 'community sprint', 'rijkshuisstijl community', 'rijkshuisstijl community sprint', 'rijkshuisstijl community open hour'] }, sidebar: 'community', previous: { title: 'Rijkshuisstijl Community', permalink: '/community/community-sprints/rijkshuisstijl-community/' }, next: { title: 'Bijeenkomsten', permalink: '/community/events/overzicht' } },
    m = {},
    d = [];
   function u(e) {
    const i = { h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(i.h1, { id: 'meld-je-aan-voor-de-rijkshuisstijl-community', children: 'Meld je aan voor de Rijkshuisstijl Community' }), '\n', (0, t.jsx)(i.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de Rijkshuisstijl Community.' }), '\n', '\n', (0, t.jsx)(r.A, { listId: '9juqorlygr', emailFieldId: '6GzLKrnrdz', firstNameFieldId: 'Raz0sxxI9o', orgId: 'iFqikI2eB8', privacyPolicyId: 'HkEf7W8t0X', interestsId: 'vDVCyKrl67', interestsLegend: 'Waar liggen jouw interesses binnen de Rijkshuisstijl Community?', interests: ['Kennisdeling', 'Design', 'Development', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Gebruikersonderzoek'], disallowedInterestValues: [3, 7, 8], workAreasId: 'AVqwHVpU3H', thanksPage: 'https://nldesignsystem.nl/community/community-sprints/rijkshuisstijl-community/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function c(e = {}) {
    const { wrapper: i } = { ...(0, s.a)(), ...e.components };
    return i ? (0, t.jsx)(i, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
  },
  82415: (e, i, n) => {
   n.d(i, { A: () => o });
   var t = n(19696),
    s = n(74824),
    r = n(75271),
    a = n(25282),
    l = n(52676);
   const o = (e) => {
    let { listId: i = '', laPostaId: n = '', thanksPage: o = '', emailFieldId: m = '', firstNameFieldId: d = '', orgId: u = '', interestsId: c = '', interestsLegend: j = 'Waar wil je NL Design System voor gebruiken?', interests: h = [], disallowedInterestValues: p = [], workAreasId: y = '', privacyPolicyId: v = '', language: g, submitText: x = '', talkTitleId: k = '', talkDescriptionId: b = '' } = e;
    const {
      register: f,
      handleSubmit: w,
      formState: { errors: I },
     } = (0, a.cI)(),
     C = (0, r.useRef)(null),
     W = '2' === g?.value,
     { search: _ } = (0, t.TH)(),
     D = new URLSearchParams(_),
     R = D.get('prefillEmail'),
     q = D.get('prefillName'),
     S =
      !!(c && h.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(t); ) t++;
        n.push(t), t++;
       }
       return n;
      })(h, p);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: C,
     onSubmit: w(() => {
      C.current.submit();
     }),
     children: [(0, l.jsxs)(s.Wi, { type: 'email', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: `id-${m}`, children: W ? 'Email address ' : 'E-mailadres' }) }), I[m] && (0, l.jsx)(s.w7, { children: I[m].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: `id-${m}`, name: m, type: 'email', autoComplete: 'email', defaultValue: R, 'aria-required': 'true', ...f(`${m}`, { required: { value: !0, message: W ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: W ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!I[m] }) })] }), (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: d, children: W ? 'Name' : 'Naam' }) }), I[d] && (0, l.jsx)(s.w7, { children: I[d].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: d, name: d, type: 'text', defaultValue: q, autoComplete: 'given-name', 'aria-required': 'true', ...f(`${d}`, { required: { value: !0, message: W ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!I[d] }) })] }), k && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.lX, { htmlFor: k, children: W ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(s.ue, { children: W ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: k, name: k, ...f(k, { required: { value: !0, message: W ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.lX, { htmlFor: b, children: W ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(s.ue, { children: W ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.gx, { id: b, name: b, rows: 12, ...f(b, { required: { value: !0, message: W ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: u, children: W ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), I[u] && (0, l.jsx)(s.w7, { children: I[u].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: u, name: u, type: 'text' }) })] }), c && (0, l.jsxs)(s.pg, { children: [(0, l.jsx)(s.nv, { children: (0, l.jsxs)(s.Qv, { children: [j, ' (niet verplicht)'] }) }), (0, l.jsx)(s.ue, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, i) => (0, l.jsxs)(s.Wi, { type: 'checkbox', children: [(0, l.jsx)(s.XZ, { name: `${c}[]`, value: S[i], id: `${c}-${S[i]}` }), (0, l.jsx)(s.lX, { htmlFor: `${c}-${S[i]}`, children: e })] }, e))] }), y && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.lX, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(s.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.gx, { id: y, name: y }) })] }), v && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.ue, { id: `${v}-description`, children: W ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(s.Wi, { type: 'checkbox', children: [(0, l.jsx)(s.XZ, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...f(`${v}[]`, { required: { value: !0, message: W ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!I[`${v}[]`] }), (0, l.jsx)(s.lX, { htmlFor: `${v}-1`, children: W ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), I[v] && (0, l.jsx)(s.w7, { children: I[v].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(s.hE, { children: (0, l.jsx)(s.zx, { type: 'submit', appearance: 'primary-action-button', children: x || (W ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: o }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: i }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
 },
]);
