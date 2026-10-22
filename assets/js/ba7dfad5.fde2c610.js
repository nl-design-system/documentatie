'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [2323],
 {
  8983(e, i, n) {
   (n.r(i), n.d(i, { assets: () => d, contentTitle: () => l, default: () => u, frontMatter: () => o, metadata: () => t, toc: () => m }));
   const t = JSON.parse('{"id":"community/community-sprints/mijn-services-community/aanmelden","title":"Meld je aan voor de MijnServices Community","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de MijnServices Community checkin en kunnen we je mailen over relevante bijeenkomsten of wijzigingen aan de checkin","source":"@site/docs/community/community-sprints/mijn-services-community/aanmelden.mdx","sourceDirName":"community/community-sprints/mijn-services-community","slug":"/community/community-sprints/mijn-services-community/aanmelden","permalink":"/community/community-sprints/mijn-services-community/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/mijn-services-community/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Meld je aan voor de MijnServices Community","title_sm":"Aanmelden","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de MijnServices Community checkin en kunnen we je mailen over relevante bijeenkomsten of wijzigingen aan de checkin","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Aanmelden","slug":"/community/community-sprints/mijn-services-community/aanmelden","keywords":["nl design system","community sprint","mijn services community","mijnservices community","mijn services community afstemming","mijn services community check-in","overheidsbrede portalen community"]},"sidebar":"community","previous":{"title":"Over MijnServices Community","permalink":"/community/community-sprints/mijn-services-community/"},"next":{"title":"Over Rijkshuisstijl Community","permalink":"/community/community-sprints/rijkshuisstijl-community/"}}');
   var s = n(86070),
    r = n(18439),
    a = n(31641);
   const o = { title: 'Meld je aan voor de MijnServices Community', title_sm: 'Aanmelden', description: 'Door je aan te melden krijg je toegang tot een agenda-bestand voor de MijnServices Community checkin en kunnen we je mailen over relevante bijeenkomsten of wijzigingen aan de checkin', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/mijn-services-community/aanmelden', keywords: ['nl design system', 'community sprint', 'mijn services community', 'mijnservices community', 'mijn services community afstemming', 'mijn services community check-in', 'overheidsbrede portalen community'] },
    l = 'Meld je aan voor de MijnServices Community',
    d = {},
    m = [];
   function c(e) {
    const i = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(i.header, { children: (0, s.jsx)(i.h1, { id: 'meld-je-aan-voor-de-mijnservices-community', children: 'Meld je aan voor de MijnServices Community' }) }), '\n', (0, s.jsx)(i.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de MijnServices Community.' }), '\n', '\n', (0, s.jsx)(a.W, { listId: 'vaxdszwkvp', emailFieldId: 'ycOOLcSH4g', firstNameFieldId: 'DWV00upQKv', orgId: '2VvMCuCJN8', privacyPolicyId: 'Kv7Wc8XC0z', interestsId: '85LF6t32qF', interestsLegend: 'Waar liggen jouw interesses binnen de MijnServices Community?', interests: ['Kennisdeling', 'Design', 'Development', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Patronen', 'Gebruikersonderzoek'], disallowedInterestValues: [3, 7, 8], workAreasId: 'LgHwRAHHbC', thanksPage: 'https://nldesignsystem.nl/community/community-sprints/mijn-services-community/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, r.R)(), ...e.components };
    return i ? (0, s.jsx)(i, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
  31641(e, i, n) {
   n.d(i, { W: () => c });
   var t = n(29181),
    s = n(46847),
    r = n(56561),
    a = n(30758),
    o = n(27890),
    l = n(90515),
    d = n(13526),
    m = n(86070);
   const c = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: c = '', firstNameFieldId: u = '', orgId: j = '', interestsId: h = '', interestsLegend: p = 'Waar wil je NL Design System voor gebruiken?', interests: y = [], interestsRequired: v = !1, disallowedInterestValues: g = [], workAreasId: x = '', privacyPolicyId: k = '', language: b, submitText: f = '', talkTitleId: w = '', talkDescriptionId: $ = '', roleId: M = '', roleLegend: S = 'Wat is jouw rol?', roles: I = [], roleRequired: C = !1 }) => {
    const {
      register: R,
      handleSubmit: _,
      formState: { errors: z },
     } = (0, o.mN)({ mode: 'onBlur' }),
     D = (0, a.useRef)(null),
     N = '2' === b?.value,
     B = (0, l.c)() ? window.location.search : '',
     F = new URLSearchParams(B),
     q = F.get('prefillEmail'),
     T = F.get('prefillName'),
     W =
      !!(h && y.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(y, g);
    return (0, m.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: D,
     onSubmit: _(() => {
      D.current.submit();
     }),
     children: [(0, m.jsxs)(t.zB, { type: 'email', children: [(0, m.jsx)(r.f, { children: (0, m.jsx)(t.lR, { htmlFor: `id-${c}`, children: N ? 'Email address ' : 'E-mailadres' }) }), z[c] && (0, m.jsx)(t.YB, { role: 'alert', id: `${c}-error`, children: z[c].message }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.Rj, { id: `id-${c}`, name: c, type: 'email', autoComplete: 'email', defaultValue: q, 'aria-required': 'true', 'aria-describedby': z[c] && `${c}-error`, ...R(`${c}`, { required: { value: !0, message: N ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: N ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!z[c] }) })] }), (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsx)(r.f, { children: (0, m.jsx)(t.lR, { htmlFor: u, children: N ? 'Name' : 'Naam' }) }), z[u] && (0, m.jsx)(t.YB, { role: 'alert', id: `${u}-error`, children: z[u].message }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.Rj, { id: u, name: u, type: 'text', defaultValue: T, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': z[u] && `${u}-error`, ...R(`${u}`, { required: { value: !0, message: N ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!z[u] }) })] }), w && (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsxs)(r.f, { children: [(0, m.jsx)(t.lR, { htmlFor: w, children: N ? 'Title of your talk' : 'Titel van je presentatie' }), (0, m.jsx)(t.JM, { id: `${w}-description`, children: N ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.Rj, { id: w, name: w, 'aria-describedby': `${w}-description`, ...R(w, { required: { value: !0, message: N ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), $ && (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsxs)(r.f, { children: [(0, m.jsx)(t.lR, { htmlFor: $, children: N ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, m.jsx)(t.JM, { id: `${$}-description`, children: N ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.TM, { id: $, name: $, rows: 12, 'aria-describedby': `${$}-description`, ...R($, { required: { value: !0, message: N ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), j && (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsx)(r.f, { children: (0, m.jsx)(t.lR, { htmlFor: j, children: N ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), z[j] && (0, m.jsx)(t.YB, { children: z[j].message }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.Rj, { id: j, name: j, type: 'text', autoComplete: 'organization' }) })] }), h && (0, m.jsxs)(t.LB, { 'aria-describedby': `${h}-description`, children: [(0, m.jsxs)(t.u4, { children: [p, !v && ' (niet verplicht)'] }), (0, m.jsx)(t.JM, { id: `${h}-description`, children: 'Meerdere antwoorden mogelijk.' }), y.map((e, i) => (0, m.jsxs)(t.zB, { type: 'checkbox', children: [(0, m.jsx)(t.Sc, { name: `${h}[]`, value: W[i], id: `${h}-${W[i]}` }), (0, m.jsx)(t.lR, { type: 'checkbox', htmlFor: `${h}-${W[i]}`, children: e })] }, e))] }), M && (0, m.jsxs)(t.LB, { 'aria-describedby': `${M}-description`, children: [(0, m.jsxs)(t.u4, { children: [S, !C && ' (niet verplicht)'] }), (0, m.jsx)(t.JM, { id: `${M}-description`, children: 'Meerdere antwoorden mogelijk.' }), I.map((e, i) => (0, m.jsxs)(t.zB, { type: 'checkbox', children: [(0, m.jsx)(t.Sc, { name: `${M}[]`, id: `${M}-${i}` }), (0, m.jsx)(t.lR, { type: 'checkbox', htmlFor: `${M}-${i}`, children: e })] }, e))] }), x && (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsxs)(r.f, { children: [(0, m.jsx)(t.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, m.jsx)(t.JM, { id: `${x}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.TM, { id: x, name: x, 'aria-describedby': `${x}-description` }) })] }), k && (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsx)(t.JM, { id: `${k}-description`, children: N ? (0, m.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, m.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, m.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, m.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, m.jsxs)(t.zB, { type: 'checkbox', children: [(0, m.jsx)(t.Sc, { value: '1', id: `${k}-1`, 'aria-describedby': (0, d.A)({ [`${k}-description`]: !0, [`${k}-error`]: z[k] }), 'aria-required': 'true', ...R(`${k}[]`, { required: { value: !0, message: N ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!z[`${k}`] }), (0, m.jsx)(t.lR, { type: 'checkbox', htmlFor: `${k}-1`, children: N ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), z[`${k}`] && (0, m.jsx)(t.YB, { role: 'alert', id: `${k}-error`, children: z[`${k}`].message })] }), b?.id && (0, m.jsx)('input', { type: 'hidden', name: b.id, value: b.value }), (0, m.jsx)(t.e2, { children: (0, m.jsx)(s.$, { type: 'submit', purpose: 'primary', children: f || (N ? 'Sign up' : 'Aanmelden') }) }), (0, m.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, m.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, m.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, m.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, m.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, i, n) {
   n.d(i, { $: () => t.$n });
   var t = n(50805);
  },
  90515(e, i, n) {
   n.d(i, { c: () => s });
   var t = n(30758);
   function s() {
    const [e, i] = (0, t.useState)();
    return ((0, t.useEffect)(() => i(!0), []), e);
   }
  },
 },
]);
