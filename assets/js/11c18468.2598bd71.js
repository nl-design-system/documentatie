'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [5575],
 {
  22491(e, i, n) {
   (n.r(i), n.d(i, { assets: () => d, contentTitle: () => o, default: () => c, frontMatter: () => l, metadata: () => t, toc: () => m }));
   const t = JSON.parse('{"id":"community/community-sprints/rijkshuisstijl-community/aanmelden","title":"Meld je aan voor de Rijkshuisstijl Community","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de Rijkshuisstijl Community bijeenkomst en kunnen we je mailen met relevante updates of wijzigingen aan de bijeenkomsten","source":"@site/docs/community/community-sprints/rijkshuisstijl-community/aanmelden.mdx","sourceDirName":"community/community-sprints/rijkshuisstijl-community","slug":"/community/community-sprints/rijkshuisstijl-community/aanmelden","permalink":"/community/community-sprints/rijkshuisstijl-community/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/rijkshuisstijl-community/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Meld je aan voor de Rijkshuisstijl Community","title_sm":"Aanmelden","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de Rijkshuisstijl Community bijeenkomst en kunnen we je mailen met relevante updates of wijzigingen aan de bijeenkomsten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Aanmelden","slug":"/community/community-sprints/rijkshuisstijl-community/aanmelden","keywords":["nl design system","community sprint","rijkshuisstijl community","rijkshuisstijl community sprint","rijkshuisstijl community open hour"]},"sidebar":"community","previous":{"title":"Over Rijkshuisstijl Community","permalink":"/community/community-sprints/rijkshuisstijl-community/"},"next":{"title":"Expertteam Digitale Toegankelijkheid","permalink":"/project/expertteam-digitale-toegankelijkheid"}}');
   var s = n(86070),
    a = n(18439),
    r = n(75812);
   const l = { title: 'Meld je aan voor de Rijkshuisstijl Community', title_sm: 'Aanmelden', description: 'Door je aan te melden krijg je toegang tot een agenda-bestand voor de Rijkshuisstijl Community bijeenkomst en kunnen we je mailen met relevante updates of wijzigingen aan de bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/rijkshuisstijl-community/aanmelden', keywords: ['nl design system', 'community sprint', 'rijkshuisstijl community', 'rijkshuisstijl community sprint', 'rijkshuisstijl community open hour'] },
    o = 'Meld je aan voor de Rijkshuisstijl Community',
    d = {},
    m = [];
   function u(e) {
    const i = { h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(i.header, { children: (0, s.jsx)(i.h1, { id: 'meld-je-aan-voor-de-rijkshuisstijl-community', children: 'Meld je aan voor de Rijkshuisstijl Community' }) }), '\n', (0, s.jsx)(i.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de Rijkshuisstijl Community.' }), '\n', '\n', (0, s.jsx)(r.W, { listId: '9juqorlygr', emailFieldId: '6GzLKrnrdz', firstNameFieldId: 'Raz0sxxI9o', orgId: 'iFqikI2eB8', privacyPolicyId: 'HkEf7W8t0X', interestsId: 'vDVCyKrl67', interestsLegend: 'Waar liggen jouw interesses binnen de Rijkshuisstijl Community?', interests: ['Kennisdeling', 'Design', 'Development', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Gebruikersonderzoek'], disallowedInterestValues: [3, 7, 8], workAreasId: 'AVqwHVpU3H', thanksPage: 'https://nldesignsystem.nl/community/community-sprints/rijkshuisstijl-community/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function c(e = {}) {
    const { wrapper: i } = { ...(0, a.R)(), ...e.components };
    return i ? (0, s.jsx)(i, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
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
   n.d(i, { W: () => m });
   var t = n(29181),
    s = n(89974),
    a = n(56561),
    r = n(30758),
    l = n(27890),
    o = n(45186),
    d = n(86070);
   const m = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: m = '', firstNameFieldId: u = '', orgId: c = '', interestsId: j = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: y = !1, disallowedInterestValues: g = [], workAreasId: k = '', privacyPolicyId: x = '', language: v, submitText: f = '', talkTitleId: b = '', talkDescriptionId: w = '', roleId: R = '', roleLegend: I = 'Wat is jouw rol?', roles: $ = [], roleRequired: _ = !1 }) => {
    const {
      register: D,
      handleSubmit: z,
      formState: { errors: C },
     } = (0, l.mN)(),
     B = (0, r.useRef)(null),
     N = '2' === v?.value,
     q = (0, o.c)() ? window.location.search : '',
     M = new URLSearchParams(q),
     S = M.get('prefillEmail'),
     F = M.get('prefillName'),
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
      })(p, g);
    return (0, d.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: B,
     onSubmit: z(() => {
      B.current.submit();
     }),
     children: [(0, d.jsxs)(t.zB, { type: 'email', children: [(0, d.jsx)(a.f, { children: (0, d.jsx)(t.lR, { htmlFor: `id-${m}`, children: N ? 'Email address ' : 'E-mailadres' }) }), C[m] && (0, d.jsx)(t.YB, { children: C[m].message }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: `id-${m}`, name: m, type: 'email', autoComplete: 'email', defaultValue: S, 'aria-required': 'true', ...D(`${m}`, { required: { value: !0, message: N ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: N ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!C[m] }) })] }), (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(a.f, { children: (0, d.jsx)(t.lR, { htmlFor: u, children: N ? 'Name' : 'Naam' }) }), C[u] && (0, d.jsx)(t.YB, { children: C[u].message }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: u, name: u, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...D(`${u}`, { required: { value: !0, message: N ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!C[u] }) })] }), b && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(a.f, { children: [(0, d.jsx)(t.lR, { htmlFor: b, children: N ? 'Title of your talk' : 'Titel van je presentatie' }), (0, d.jsx)(t.JM, { children: N ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: b, name: b, ...D(b, { required: { value: !0, message: N ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(a.f, { children: [(0, d.jsx)(t.lR, { htmlFor: w, children: N ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, d.jsx)(t.JM, { children: N ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.TM, { id: w, name: w, rows: 12, ...D(w, { required: { value: !0, message: N ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(a.f, { children: (0, d.jsx)(t.lR, { htmlFor: c, children: N ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), C[c] && (0, d.jsx)(t.YB, { children: C[c].message }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: c, name: c, type: 'text' }) })] }), j && (0, d.jsxs)(t.LB, { children: [(0, d.jsx)(a.f, { children: (0, d.jsxs)(t.u4, { children: [h, !y && ' (niet verplicht)'] }) }), (0, d.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, i) => (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { name: `${j}[]`, value: T[i], id: `${j}-${T[i]}` }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${j}-${T[i]}`, children: e })] }, e))] }), R && (0, d.jsxs)(t.LB, { children: [(0, d.jsx)(a.f, { children: (0, d.jsxs)(t.u4, { children: [I, !_ && ' (niet verplicht)'] }) }), (0, d.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), $.map((e, i) => (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { name: `${R}[]`, id: `${R}-${i}` }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${R}-${i}`, children: e })] }, e))] }), k && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(a.f, { children: [(0, d.jsx)(t.lR, { htmlFor: k, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, d.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.TM, { id: k, name: k }) })] }), x && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(t.JM, { id: `${x}-description`, children: N ? (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...D(`${x}[]`, { required: { value: !0, message: N ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!C[`${x}[]`] }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${x}-1`, children: N ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), C[x] && (0, d.jsx)(t.YB, { children: C[x].message })] }), v?.id && (0, d.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, d.jsx)(t.e2, { children: (0, d.jsx)(s.$, { type: 'submit', purpose: 'primary', children: f || (N ? 'Sign up' : 'Aanmelden') }) }), (0, d.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, d.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, d.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, d.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, d.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  89974(e, i, n) {
   n.d(i, { $: () => t.$n });
   var t = n(50805);
  },
 },
]);
