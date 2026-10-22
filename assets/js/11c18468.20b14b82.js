'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [5575],
 {
  31641(e, i, n) {
   n.d(i, { W: () => c });
   var t = n(29181),
    s = n(46847),
    r = n(56561),
    a = n(30758),
    l = n(27890),
    o = n(90515),
    d = n(13526),
    m = n(86070);
   const c = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: c = '', firstNameFieldId: u = '', orgId: j = '', interestsId: h = '', interestsLegend: p = 'Waar wil je NL Design System voor gebruiken?', interests: y = [], interestsRequired: g = !1, disallowedInterestValues: k = [], workAreasId: x = '', privacyPolicyId: v = '', language: b, submitText: f = '', talkTitleId: w = '', talkDescriptionId: $ = '', roleId: R = '', roleLegend: I = 'Wat is jouw rol?', roles: _ = [], roleRequired: z = !1 }) => {
    const {
      register: C,
      handleSubmit: D,
      formState: { errors: B },
     } = (0, l.mN)({ mode: 'onBlur' }),
     N = (0, a.useRef)(null),
     q = '2' === b?.value,
     M = (0, o.c)() ? window.location.search : '',
     S = new URLSearchParams(M),
     F = S.get('prefillEmail'),
     T = S.get('prefillName'),
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
      })(y, k);
    return (0, m.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: N,
     onSubmit: D(() => {
      N.current.submit();
     }),
     children: [(0, m.jsxs)(t.zB, { type: 'email', children: [(0, m.jsx)(r.f, { children: (0, m.jsx)(t.lR, { htmlFor: `id-${c}`, children: q ? 'Email address ' : 'E-mailadres' }) }), B[c] && (0, m.jsx)(t.YB, { role: 'alert', id: `${c}-error`, children: B[c].message }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.Rj, { id: `id-${c}`, name: c, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', 'aria-describedby': B[c] && `${c}-error`, ...C(`${c}`, { required: { value: !0, message: q ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: q ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!B[c] }) })] }), (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsx)(r.f, { children: (0, m.jsx)(t.lR, { htmlFor: u, children: q ? 'Name' : 'Naam' }) }), B[u] && (0, m.jsx)(t.YB, { role: 'alert', id: `${u}-error`, children: B[u].message }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.Rj, { id: u, name: u, type: 'text', defaultValue: T, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': B[u] && `${u}-error`, ...C(`${u}`, { required: { value: !0, message: q ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!B[u] }) })] }), w && (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsxs)(r.f, { children: [(0, m.jsx)(t.lR, { htmlFor: w, children: q ? 'Title of your talk' : 'Titel van je presentatie' }), (0, m.jsx)(t.JM, { id: `${w}-description`, children: q ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.Rj, { id: w, name: w, 'aria-describedby': `${w}-description`, ...C(w, { required: { value: !0, message: q ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), $ && (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsxs)(r.f, { children: [(0, m.jsx)(t.lR, { htmlFor: $, children: q ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, m.jsx)(t.JM, { id: `${$}-description`, children: q ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.TM, { id: $, name: $, rows: 12, 'aria-describedby': `${$}-description`, ...C($, { required: { value: !0, message: q ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), j && (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsx)(r.f, { children: (0, m.jsx)(t.lR, { htmlFor: j, children: q ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), B[j] && (0, m.jsx)(t.YB, { children: B[j].message }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.Rj, { id: j, name: j, type: 'text', autoComplete: 'organization' }) })] }), h && (0, m.jsxs)(t.LB, { 'aria-describedby': `${h}-description`, children: [(0, m.jsxs)(t.u4, { children: [p, !g && ' (niet verplicht)'] }), (0, m.jsx)(t.JM, { id: `${h}-description`, children: 'Meerdere antwoorden mogelijk.' }), y.map((e, i) => (0, m.jsxs)(t.zB, { type: 'checkbox', children: [(0, m.jsx)(t.Sc, { name: `${h}[]`, value: W[i], id: `${h}-${W[i]}` }), (0, m.jsx)(t.lR, { type: 'checkbox', htmlFor: `${h}-${W[i]}`, children: e })] }, e))] }), R && (0, m.jsxs)(t.LB, { 'aria-describedby': `${R}-description`, children: [(0, m.jsxs)(t.u4, { children: [I, !z && ' (niet verplicht)'] }), (0, m.jsx)(t.JM, { id: `${R}-description`, children: 'Meerdere antwoorden mogelijk.' }), _.map((e, i) => (0, m.jsxs)(t.zB, { type: 'checkbox', children: [(0, m.jsx)(t.Sc, { name: `${R}[]`, id: `${R}-${i}` }), (0, m.jsx)(t.lR, { type: 'checkbox', htmlFor: `${R}-${i}`, children: e })] }, e))] }), x && (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsxs)(r.f, { children: [(0, m.jsx)(t.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, m.jsx)(t.JM, { id: `${x}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, m.jsx)(r.f, { children: (0, m.jsx)(t.TM, { id: x, name: x, 'aria-describedby': `${x}-description` }) })] }), v && (0, m.jsxs)(t.zB, { type: 'text', children: [(0, m.jsx)(t.JM, { id: `${v}-description`, children: q ? (0, m.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, m.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, m.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, m.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, m.jsxs)(t.zB, { type: 'checkbox', children: [(0, m.jsx)(t.Sc, { value: '1', id: `${v}-1`, 'aria-describedby': (0, d.A)({ [`${v}-description`]: !0, [`${v}-error`]: B[v] }), 'aria-required': 'true', ...C(`${v}[]`, { required: { value: !0, message: q ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!B[`${v}`] }), (0, m.jsx)(t.lR, { type: 'checkbox', htmlFor: `${v}-1`, children: q ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), B[`${v}`] && (0, m.jsx)(t.YB, { role: 'alert', id: `${v}-error`, children: B[`${v}`].message })] }), b?.id && (0, m.jsx)('input', { type: 'hidden', name: b.id, value: b.value }), (0, m.jsx)(t.e2, { children: (0, m.jsx)(s.$, { type: 'submit', purpose: 'primary', children: f || (q ? 'Sign up' : 'Aanmelden') }) }), (0, m.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, m.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, m.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, m.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, m.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  43368(e, i, n) {
   (n.r(i), n.d(i, { assets: () => d, contentTitle: () => o, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => m }));
   const t = JSON.parse('{"id":"community/community-sprints/rijkshuisstijl-community/aanmelden","title":"Meld je aan voor de Rijkshuisstijl Community","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de Rijkshuisstijl Community bijeenkomst en kunnen we je mailen met relevante updates of wijzigingen aan de bijeenkomsten","source":"@site/docs/community/community-sprints/rijkshuisstijl-community/aanmelden.mdx","sourceDirName":"community/community-sprints/rijkshuisstijl-community","slug":"/community/community-sprints/rijkshuisstijl-community/aanmelden","permalink":"/community/community-sprints/rijkshuisstijl-community/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/rijkshuisstijl-community/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Meld je aan voor de Rijkshuisstijl Community","title_sm":"Aanmelden","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de Rijkshuisstijl Community bijeenkomst en kunnen we je mailen met relevante updates of wijzigingen aan de bijeenkomsten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Aanmelden","slug":"/community/community-sprints/rijkshuisstijl-community/aanmelden","keywords":["nl design system","community sprint","rijkshuisstijl community","rijkshuisstijl community sprint","rijkshuisstijl community open hour"]},"sidebar":"community","previous":{"title":"Over Rijkshuisstijl Community","permalink":"/community/community-sprints/rijkshuisstijl-community/"},"next":{"title":"Expertteam Digitale Toegankelijkheid","permalink":"/project/expertteam-digitale-toegankelijkheid"}}');
   var s = n(86070),
    r = n(18439),
    a = n(31641);
   const l = { title: 'Meld je aan voor de Rijkshuisstijl Community', title_sm: 'Aanmelden', description: 'Door je aan te melden krijg je toegang tot een agenda-bestand voor de Rijkshuisstijl Community bijeenkomst en kunnen we je mailen met relevante updates of wijzigingen aan de bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/rijkshuisstijl-community/aanmelden', keywords: ['nl design system', 'community sprint', 'rijkshuisstijl community', 'rijkshuisstijl community sprint', 'rijkshuisstijl community open hour'] },
    o = 'Meld je aan voor de Rijkshuisstijl Community',
    d = {},
    m = [];
   function c(e) {
    const i = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(i.header, { children: (0, s.jsx)(i.h1, { id: 'meld-je-aan-voor-de-rijkshuisstijl-community', children: 'Meld je aan voor de Rijkshuisstijl Community' }) }), '\n', (0, s.jsx)(i.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de Rijkshuisstijl Community.' }), '\n', '\n', (0, s.jsx)(a.W, { listId: '9juqorlygr', emailFieldId: '6GzLKrnrdz', firstNameFieldId: 'Raz0sxxI9o', orgId: 'iFqikI2eB8', privacyPolicyId: 'HkEf7W8t0X', interestsId: 'vDVCyKrl67', interestsLegend: 'Waar liggen jouw interesses binnen de Rijkshuisstijl Community?', interests: ['Kennisdeling', 'Design', 'Development', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Gebruikersonderzoek'], disallowedInterestValues: [3, 7, 8], workAreasId: 'AVqwHVpU3H', thanksPage: 'https://nldesignsystem.nl/community/community-sprints/rijkshuisstijl-community/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, r.R)(), ...e.components };
    return i ? (0, s.jsx)(i, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
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
