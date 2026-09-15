'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [2323],
 {
  11662(e, i, n) {
   (n.r(i), n.d(i, { assets: () => m, contentTitle: () => o, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => d }));
   const t = JSON.parse('{"id":"community/community-sprints/mijn-services-community/aanmelden","title":"Meld je aan voor de MijnServices Community","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de MijnServices Community checkin en kunnen we je mailen over relevante bijeenkomsten of wijzigingen aan de checkin","source":"@site/docs/community/community-sprints/mijn-services-community/aanmelden.mdx","sourceDirName":"community/community-sprints/mijn-services-community","slug":"/community/community-sprints/mijn-services-community/aanmelden","permalink":"/community/community-sprints/mijn-services-community/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/mijn-services-community/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Meld je aan voor de MijnServices Community","title_sm":"Aanmelden","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de MijnServices Community checkin en kunnen we je mailen over relevante bijeenkomsten of wijzigingen aan de checkin","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Aanmelden","slug":"/community/community-sprints/mijn-services-community/aanmelden","keywords":["nl design system","community sprint","mijn services community","mijnservices community","mijn services community afstemming","mijn services community check-in","overheidsbrede portalen community"]},"sidebar":"community","previous":{"title":"Over MijnServices Community","permalink":"/community/community-sprints/mijn-services-community/"},"next":{"title":"Over Rijkshuisstijl Community","permalink":"/community/community-sprints/rijkshuisstijl-community/"}}');
   var s = n(86070),
    r = n(18439),
    a = n(75812);
   const l = { title: 'Meld je aan voor de MijnServices Community', title_sm: 'Aanmelden', description: 'Door je aan te melden krijg je toegang tot een agenda-bestand voor de MijnServices Community checkin en kunnen we je mailen over relevante bijeenkomsten of wijzigingen aan de checkin', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/mijn-services-community/aanmelden', keywords: ['nl design system', 'community sprint', 'mijn services community', 'mijnservices community', 'mijn services community afstemming', 'mijn services community check-in', 'overheidsbrede portalen community'] },
    o = 'Meld je aan voor de MijnServices Community',
    m = {},
    d = [];
   function c(e) {
    const i = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(i.header, { children: (0, s.jsx)(i.h1, { id: 'meld-je-aan-voor-de-mijnservices-community', children: 'Meld je aan voor de MijnServices Community' }) }), '\n', (0, s.jsx)(i.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de MijnServices Community.' }), '\n', '\n', (0, s.jsx)(a.W, { listId: 'vaxdszwkvp', emailFieldId: 'ycOOLcSH4g', firstNameFieldId: 'DWV00upQKv', orgId: '2VvMCuCJN8', privacyPolicyId: 'Kv7Wc8XC0z', interestsId: '85LF6t32qF', interestsLegend: 'Waar liggen jouw interesses binnen de MijnServices Community?', interests: ['Kennisdeling', 'Design', 'Development', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Patronen', 'Gebruikersonderzoek'], disallowedInterestValues: [3, 7, 8], workAreasId: 'LgHwRAHHbC', thanksPage: 'https://nldesignsystem.nl/community/community-sprints/mijn-services-community/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, r.R)(), ...e.components };
    return i ? (0, s.jsx)(i, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
  45186(e, i, n) {
   n.d(i, { c: () => s });
   var t = n(30758);
   function s() {
    const [e, i] = (0, t.useState)();
    return ((0, t.useEffect)(() => i(!0), []), e);
   }
  },
  75812(e, i, n) {
   n.d(i, { W: () => d });
   var t = n(29181),
    s = n(89974),
    r = n(56561),
    a = n(30758),
    l = n(27890),
    o = n(45186),
    m = n(86070);
   const d = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: u = '', interestsId: j = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: v = !1, disallowedInterestValues: y = [], workAreasId: g = '', privacyPolicyId: x = '', language: k, submitText: f = '', talkTitleId: b = '', talkDescriptionId: w = '', roleId: M = '', roleLegend: S = 'Wat is jouw rol?', roles: I = [], roleRequired: C = !1 }) => {
    const {
      register: R,
      handleSubmit: $,
      formState: { errors: _ },
     } = (0, l.mN)(),
     D = (0, a.useRef)(null),
     z = '2' === k?.value,
     N = (0, o.c)() ? window.location.search : '',
     B = new URLSearchParams(N),
     F = B.get('prefillEmail'),
     q = B.get('prefillName'),
     T =
      !!(j && p.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(p, y);
    return (0, m.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: D,
     onSubmit: $(() => {
      D.current.submit();
     }),
     children: [(0, m.jsxs)(t.zB, { type: 'email', children: [(0, m.jsx)(r.f, { children: (0, m.jsx)(t.lR, { htmlFor: `id-${d}`, children: z ? 'Email address ' : 'E-mailadres' }) }), _[d] && (0, m.jsx)(t.YB, { children: _[d].message }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', ...R(`${d}`, { required: { value: !0, message: z ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: z ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!_[d] }) })] }), (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsx)(r.f, { children: (0, m.jsx)(t.lR, { htmlFor: c, children: z ? 'Name' : 'Naam' }) }), _[c] && (0, m.jsx)(t.YB, { children: _[c].message }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.Rj, { id: c, name: c, type: 'text', defaultValue: q, autoComplete: 'given-name', 'aria-required': 'true', ...R(`${c}`, { required: { value: !0, message: z ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!_[c] }) })] }), b && (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsxs)(r.f, { children: [(0, m.jsx)(t.lR, { htmlFor: b, children: z ? 'Title of your talk' : 'Titel van je presentatie' }), (0, m.jsx)(t.JM, { children: z ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.Rj, { id: b, name: b, ...R(b, { required: { value: !0, message: z ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsxs)(r.f, { children: [(0, m.jsx)(t.lR, { htmlFor: w, children: z ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, m.jsx)(t.JM, { children: z ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.TM, { id: w, name: w, rows: 12, ...R(w, { required: { value: !0, message: z ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsx)(r.f, { children: (0, m.jsx)(t.lR, { htmlFor: u, children: z ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), _[u] && (0, m.jsx)(t.YB, { children: _[u].message }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.Rj, { id: u, name: u, type: 'text' }) })] }), j && (0, m.jsxs)(t.LB, { children: [(0, m.jsx)(r.f, { children: (0, m.jsxs)(t.u4, { children: [h, !v && ' (niet verplicht)'] }) }), (0, m.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, i) => (0, m.jsxs)(t.zB, { type: 'checkbox', children: [(0, m.jsx)(t.Sc, { name: `${j}[]`, value: T[i], id: `${j}-${T[i]}` }), (0, m.jsx)(t.lR, { type: 'checkbox', htmlFor: `${j}-${T[i]}`, children: e })] }, e))] }), M && (0, m.jsxs)(t.LB, { children: [(0, m.jsx)(r.f, { children: (0, m.jsxs)(t.u4, { children: [S, !C && ' (niet verplicht)'] }) }), (0, m.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), I.map((e, i) => (0, m.jsxs)(t.zB, { type: 'checkbox', children: [(0, m.jsx)(t.Sc, { name: `${M}[]`, id: `${M}-${i}` }), (0, m.jsx)(t.lR, { type: 'checkbox', htmlFor: `${M}-${i}`, children: e })] }, e))] }), g && (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsxs)(r.f, { children: [(0, m.jsx)(t.lR, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, m.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.TM, { id: g, name: g }) })] }), x && (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsx)(t.JM, { id: `${x}-description`, children: z ? (0, m.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, m.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, m.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, m.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, m.jsxs)(t.zB, { type: 'checkbox', children: [(0, m.jsx)(t.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...R(`${x}[]`, { required: { value: !0, message: z ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!_[`${x}[]`] }), (0, m.jsx)(t.lR, { type: 'checkbox', htmlFor: `${x}-1`, children: z ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), _[x] && (0, m.jsx)(t.YB, { children: _[x].message })] }), k?.id && (0, m.jsx)('input', { type: 'hidden', name: k.id, value: k.value }), (0, m.jsx)(t.e2, { children: (0, m.jsx)(s.$, { type: 'submit', purpose: 'primary', children: f || (z ? 'Sign up' : 'Aanmelden') }) }), (0, m.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, m.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, m.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, m.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, m.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  89974(e, i, n) {
   n.d(i, { $: () => t.$n });
   var t = n(50805);
  },
 },
]);
