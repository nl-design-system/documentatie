'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [54290],
 {
  97314: (e, i, n) => {
   n.r(i), n.d(i, { assets: () => l, contentTitle: () => o, default: () => u, frontMatter: () => a, metadata: () => m, toc: () => d });
   var t = n(52676),
    s = n(40139),
    r = n(82415);
   const a = { title: 'Meld je aan voor de MijnServices Community \xb7 MijnServices Community \xb7 Community Sprints', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/mijn-services-community/aanmelden', keywords: ['nl design system', 'community sprint', 'mijn services community', 'mijnservices community', 'mijn services community afstemming', 'overheidsbrede portalen community'] },
    o = 'Meld je aan voor de MijnServices Community',
    m = { id: 'community/community-sprints/mijn-services-community/aanmelden', title: 'Meld je aan voor de MijnServices Community \xb7 MijnServices Community \xb7 Community Sprints', description: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de MijnServices Community.', source: '@site/docs/community/community-sprints/mijn-services-community/aanmelden.mdx', sourceDirName: 'community/community-sprints/mijn-services-community', slug: '/community/community-sprints/mijn-services-community/aanmelden', permalink: '/community/community-sprints/mijn-services-community/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/mijn-services-community/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Meld je aan voor de MijnServices Community \xb7 MijnServices Community \xb7 Community Sprints', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/mijn-services-community/aanmelden', keywords: ['nl design system', 'community sprint', 'mijn services community', 'mijnservices community', 'mijn services community afstemming', 'overheidsbrede portalen community'] }, sidebar: 'community', previous: { title: 'MijnServices Community', permalink: '/community/community-sprints/mijn-services-community/' }, next: { title: 'Rijkshuisstijl Community', permalink: '/community/community-sprints/rijkshuisstijl-community/overzicht' } },
    l = {},
    d = [];
   function c(e) {
    const i = { h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(i.h1, { id: 'meld-je-aan-voor-de-mijnservices-community', children: 'Meld je aan voor de MijnServices Community' }), '\n', (0, t.jsx)(i.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de MijnServices Community.' }), '\n', '\n', (0, t.jsx)(r.A, { listId: 'vaxdszwkvp', emailFieldId: 'ycOOLcSH4g', firstNameFieldId: 'DWV00upQKv', orgId: '2VvMCuCJN8', privacyPolicyId: 'Kv7Wc8XC0z', interestsId: '85LF6t32qF', interestsLegend: 'Waar liggen jouw interesses binnen de MijnServices Community?', interests: ['Kennisdeling', 'Design', 'Development', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Patronen', 'Gebruikersonderzoek'], disallowedInterestValues: [3, 7, 8], workAreasId: 'LgHwRAHHbC', thanksPage: 'https://nldesignsystem.nl/community/community-sprints/mijn-services-community/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, s.a)(), ...e.components };
    return i ? (0, t.jsx)(i, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, i, n) => {
   n.d(i, { A: () => m });
   var t = n(87573),
    s = n(35076),
    r = n(75271),
    a = n(25282),
    o = n(52676);
   const m = (e) => {
    let { listId: i = '', laPostaId: n = '', thanksPage: m = '', emailFieldId: l = '', firstNameFieldId: d = '', orgId: c = '', interestsId: u = '', interestsLegend: v = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], disallowedInterestValues: j = [], workAreasId: h = '', privacyPolicyId: y = '', language: g, submitText: x = '', talkTitleId: f = '', talkDescriptionId: k = '' } = e;
    const {
      register: b,
      handleSubmit: w,
      formState: { errors: C },
     } = (0, a.cI)(),
     S = (0, r.useRef)(null),
     I = '2' === g?.value,
     { search: M } = (0, t.TH)(),
     W = new URLSearchParams(M),
     _ = W.get('prefillEmail'),
     D = W.get('prefillName'),
     F =
      !!(u && p.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(t); ) t++;
        n.push(t), t++;
       }
       return n;
      })(p, j);
    return (0, o.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: S,
     onSubmit: w(() => {
      S.current.submit();
     }),
     children: [(0, o.jsxs)(s.Wi, { type: 'email', children: [(0, o.jsx)(s.nv, { children: (0, o.jsx)(s.lX, { htmlFor: `id-${l}`, children: I ? 'Email address ' : 'E-mailadres' }) }), C[l] && (0, o.jsx)(s.w7, { children: C[l].message }), (0, o.jsx)(s.nv, { children: (0, o.jsx)(s.fE, { id: `id-${l}`, name: l, type: 'email', autoComplete: 'email', defaultValue: _, 'aria-required': 'true', ...b(`${l}`, { required: { value: !0, message: I ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: I ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!C[l] }) })] }), (0, o.jsxs)(s.Wi, { type: 'text', children: [(0, o.jsx)(s.nv, { children: (0, o.jsx)(s.lX, { htmlFor: d, children: I ? 'Name' : 'Naam' }) }), C[d] && (0, o.jsx)(s.w7, { children: C[d].message }), (0, o.jsx)(s.nv, { children: (0, o.jsx)(s.fE, { id: d, name: d, type: 'text', defaultValue: D, autoComplete: 'given-name', 'aria-required': 'true', ...b(`${d}`, { required: { value: !0, message: I ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!C[d] }) })] }), f && (0, o.jsxs)(s.Wi, { type: 'text', children: [(0, o.jsxs)(s.nv, { children: [(0, o.jsx)(s.lX, { htmlFor: f, children: I ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(s.ue, { children: I ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(s.nv, { children: (0, o.jsx)(s.fE, { id: f, name: f, ...b(f, { required: { value: !0, message: I ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, o.jsxs)(s.Wi, { type: 'text', children: [(0, o.jsxs)(s.nv, { children: [(0, o.jsx)(s.lX, { htmlFor: k, children: I ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(s.ue, { children: I ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(s.nv, { children: (0, o.jsx)(s.gx, { id: k, name: k, rows: 12, ...b(k, { required: { value: !0, message: I ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, o.jsxs)(s.Wi, { type: 'text', children: [(0, o.jsx)(s.nv, { children: (0, o.jsx)(s.lX, { htmlFor: c, children: I ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), C[c] && (0, o.jsx)(s.w7, { children: C[c].message }), (0, o.jsx)(s.nv, { children: (0, o.jsx)(s.fE, { id: c, name: c, type: 'text' }) })] }), u && (0, o.jsxs)(s.pg, { children: [(0, o.jsxs)(s.Qv, { children: [v, ' (niet verplicht)'] }), (0, o.jsx)(s.ue, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, i) => (0, o.jsx)(s.Wi, { type: 'checkbox', children: (0, o.jsxs)(s.nv, { children: [(0, o.jsx)(s.XZ, { name: `${u}[]`, value: F[i], id: `${u}-${F[i]}` }), (0, o.jsx)(s.lX, { htmlFor: `${u}-${F[i]}`, children: e })] }) }, e))] }), h && (0, o.jsxs)(s.Wi, { type: 'text', children: [(0, o.jsxs)(s.nv, { children: [(0, o.jsx)(s.lX, { htmlFor: h, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(s.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(s.nv, { children: (0, o.jsx)(s.gx, { id: h, name: h }) })] }), y && (0, o.jsxs)(s.Wi, { type: 'text', children: [(0, o.jsx)(s.ue, { id: `${y}-description`, children: I ? (0, o.jsxs)('p', { children: ['The ', (0, o.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, o.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, o.jsxs)(s.Wi, { type: 'checkbox', children: [(0, o.jsx)(s.XZ, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...b(`${y}[]`, { required: { value: !0, message: I ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!C[`${y}[]`] }), (0, o.jsx)(s.lX, { htmlFor: `${y}-1`, children: I ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), C[y] && (0, o.jsx)(s.w7, { children: C[y].message })] }), g?.id && (0, o.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, o.jsx)(s.hE, { children: (0, o.jsx)(s.zx, { type: 'submit', appearance: 'primary-action-button', children: x || (I ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: m }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: i }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, i, n) => {
   n.d(i, { Z: () => o, a: () => a });
   var t = n(75271);
   const s = {},
    r = t.createContext(s);
   function a(e) {
    const i = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(i) : { ...i, ...e };
     },
     [i, e],
    );
   }
   function o(e) {
    let i;
    return (i = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), t.createElement(r.Provider, { value: i }, e.children);
   }
  },
 },
]);
