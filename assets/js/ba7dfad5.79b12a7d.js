'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [2323],
 {
  46565(e, i, n) {
   n.d(i, { c: () => s });
   var t = n(30758);
   function s() {
    const [e, i] = (0, t.useState)();
    return ((0, t.useEffect)(() => i(!0), []), e);
   }
  },
  78599(e, i, n) {
   n.d(i, { W: () => o });
   var t = n(29181),
    s = n(30758),
    r = n(27890),
    a = n(46565),
    l = n(86070);
   const o = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: o = '', firstNameFieldId: m = '', orgId: d = '', interestsId: c = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: h = !1, disallowedInterestValues: p = [], workAreasId: v = '', privacyPolicyId: y = '', language: g, submitText: x = '', talkTitleId: k = '', talkDescriptionId: f = '', roleId: b = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: M = !1 }) => {
    const {
      register: S,
      handleSubmit: I,
      formState: { errors: C },
     } = (0, r.mN)(),
     R = (0, s.useRef)(null),
     _ = '2' === g?.value,
     $ = (0, a.c)() ? window.location.search : '',
     D = new URLSearchParams($),
     B = D.get('prefillEmail'),
     F = D.get('prefillName'),
     q =
      !!(c && j.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(j, p);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: R,
     onSubmit: I(() => {
      R.current.submit();
     }),
     children: [(0, l.jsxs)(t.zB, { type: 'email', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: `id-${o}`, children: _ ? 'Email address ' : 'E-mailadres' }) }), C[o] && (0, l.jsx)(t.YB, { children: C[o].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: B, 'aria-required': 'true', ...S(`${o}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: _ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!C[o] }) })] }), (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: m, children: _ ? 'Name' : 'Naam' }) }), C[m] && (0, l.jsx)(t.YB, { children: C[m].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: m, name: m, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...S(`${m}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!C[m] }) })] }), k && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: k, children: _ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(t.JM, { children: _ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: k, name: k, ...S(k, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: f, children: _ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(t.JM, { children: _ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: f, name: f, rows: 12, ...S(f, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), d && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: d, children: _ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), C[d] && (0, l.jsx)(t.YB, { children: C[d].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: d, name: d, type: 'text' }) })] }), c && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [u, !h && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, i) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${c}[]`, value: q[i], id: `${c}-${q[i]}` }), (0, l.jsx)(t.lR, { htmlFor: `${c}-${q[i]}`, children: e })] }, e))] }), b && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [w, !M && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, i) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${b}[]`, id: `${b}-${i}` }), (0, l.jsx)(t.lR, { htmlFor: `${b}-${i}`, children: e })] }, e))] }), v && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: v, name: v }) })] }), y && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.JM, { id: `${y}-description`, children: _ ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy/', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...S(`${y}[]`, { required: { value: !0, message: _ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!C[`${y}[]`] }), (0, l.jsx)(t.lR, { htmlFor: `${y}-1`, children: _ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), C[y] && (0, l.jsx)(t.YB, { children: C[y].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(t.e2, { children: (0, l.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: x || (_ ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  98517(e, i, n) {
   (n.r(i), n.d(i, { assets: () => m, contentTitle: () => o, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => d }));
   const t = JSON.parse('{"id":"community/community-sprints/mijn-services-community/aanmelden","title":"Meld je aan voor de MijnServices Community","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de MijnServices Community checkin en kunnen we je mailen over relevante bijeenkomsten of wijzigingen aan de checkin","source":"@site/docs/community/community-sprints/mijn-services-community/aanmelden.mdx","sourceDirName":"community/community-sprints/mijn-services-community","slug":"/community/community-sprints/mijn-services-community/aanmelden","permalink":"/community/community-sprints/mijn-services-community/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/mijn-services-community/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Meld je aan voor de MijnServices Community","title_sm":"Aanmelden","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de MijnServices Community checkin en kunnen we je mailen over relevante bijeenkomsten of wijzigingen aan de checkin","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Aanmelden","slug":"/community/community-sprints/mijn-services-community/aanmelden","keywords":["nl design system","community sprint","mijn services community","mijnservices community","mijn services community afstemming","mijn services community check-in","overheidsbrede portalen community"]},"sidebar":"community","previous":{"title":"Over MijnServices Community","permalink":"/community/community-sprints/mijn-services-community/"},"next":{"title":"Over Rijkshuisstijl Community","permalink":"/community/community-sprints/rijkshuisstijl-community/"}}');
   var s = n(86070),
    r = n(18439),
    a = n(78599);
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
 },
]);
