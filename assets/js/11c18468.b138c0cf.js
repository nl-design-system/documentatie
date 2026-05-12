'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [5575],
 {
  46565(e, i, n) {
   n.d(i, { c: () => s });
   var t = n(30758);
   function s() {
    const [e, i] = (0, t.useState)();
    return ((0, t.useEffect)(() => i(!0), []), e);
   }
  },
  77335(e, i, n) {
   (n.r(i), n.d(i, { assets: () => d, contentTitle: () => o, default: () => c, frontMatter: () => l, metadata: () => t, toc: () => m }));
   const t = JSON.parse('{"id":"community/community-sprints/rijkshuisstijl-community/aanmelden","title":"Meld je aan voor de Rijkshuisstijl Community","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de Rijkshuisstijl Community bijeenkomst en kunnen we je mailen met relevante updates of wijzigingen aan de bijeenkomsten","source":"@site/docs/community/community-sprints/rijkshuisstijl-community/aanmelden.mdx","sourceDirName":"community/community-sprints/rijkshuisstijl-community","slug":"/community/community-sprints/rijkshuisstijl-community/aanmelden","permalink":"/community/community-sprints/rijkshuisstijl-community/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/rijkshuisstijl-community/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Meld je aan voor de Rijkshuisstijl Community","title_sm":"Aanmelden","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de Rijkshuisstijl Community bijeenkomst en kunnen we je mailen met relevante updates of wijzigingen aan de bijeenkomsten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Aanmelden","slug":"/community/community-sprints/rijkshuisstijl-community/aanmelden","keywords":["nl design system","community sprint","rijkshuisstijl community","rijkshuisstijl community sprint","rijkshuisstijl community open hour"]},"sidebar":"community","previous":{"title":"Over Rijkshuisstijl Community","permalink":"/community/community-sprints/rijkshuisstijl-community/"},"next":{"title":"Expertteam Digitale Toegankelijkheid","permalink":"/project/expertteam-digitale-toegankelijkheid"}}');
   var s = n(86070),
    r = n(18439),
    a = n(78599);
   const l = { title: 'Meld je aan voor de Rijkshuisstijl Community', title_sm: 'Aanmelden', description: 'Door je aan te melden krijg je toegang tot een agenda-bestand voor de Rijkshuisstijl Community bijeenkomst en kunnen we je mailen met relevante updates of wijzigingen aan de bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/rijkshuisstijl-community/aanmelden', keywords: ['nl design system', 'community sprint', 'rijkshuisstijl community', 'rijkshuisstijl community sprint', 'rijkshuisstijl community open hour'] },
    o = 'Meld je aan voor de Rijkshuisstijl Community',
    d = {},
    m = [];
   function u(e) {
    const i = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(i.header, { children: (0, s.jsx)(i.h1, { id: 'meld-je-aan-voor-de-rijkshuisstijl-community', children: 'Meld je aan voor de Rijkshuisstijl Community' }) }), '\n', (0, s.jsx)(i.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de Rijkshuisstijl Community.' }), '\n', '\n', (0, s.jsx)(a.W, { listId: '9juqorlygr', emailFieldId: '6GzLKrnrdz', firstNameFieldId: 'Raz0sxxI9o', orgId: 'iFqikI2eB8', privacyPolicyId: 'HkEf7W8t0X', interestsId: 'vDVCyKrl67', interestsLegend: 'Waar liggen jouw interesses binnen de Rijkshuisstijl Community?', interests: ['Kennisdeling', 'Design', 'Development', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Gebruikersonderzoek'], disallowedInterestValues: [3, 7, 8], workAreasId: 'AVqwHVpU3H', thanksPage: 'https://nldesignsystem.nl/community/community-sprints/rijkshuisstijl-community/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function c(e = {}) {
    const { wrapper: i } = { ...(0, r.R)(), ...e.components };
    return i ? (0, s.jsx)(i, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
  },
  78599(e, i, n) {
   n.d(i, { W: () => o });
   var t = n(29181),
    s = n(30758),
    r = n(27890),
    a = n(46565),
    l = n(86070);
   const o = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: m = '', interestsId: u = '', interestsLegend: c = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: h = !1, disallowedInterestValues: p = [], workAreasId: y = '', privacyPolicyId: g = '', language: k, submitText: x = '', talkTitleId: v = '', talkDescriptionId: f = '', roleId: b = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: R = !1 }) => {
    const {
      register: I,
      handleSubmit: _,
      formState: { errors: D },
     } = (0, r.mN)(),
     $ = (0, s.useRef)(null),
     C = '2' === k?.value,
     B = (0, a.c)() ? window.location.search : '',
     q = new URLSearchParams(B),
     M = q.get('prefillEmail'),
     S = q.get('prefillName'),
     F =
      !!(u && j.length > 0) &&
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
     ref: $,
     onSubmit: _(() => {
      $.current.submit();
     }),
     children: [(0, l.jsxs)(t.zB, { type: 'email', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: `id-${o}`, children: C ? 'Email address ' : 'E-mailadres' }) }), D[o] && (0, l.jsx)(t.YB, { children: D[o].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: M, 'aria-required': 'true', ...I(`${o}`, { required: { value: !0, message: C ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: C ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!D[o] }) })] }), (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: d, children: C ? 'Name' : 'Naam' }) }), D[d] && (0, l.jsx)(t.YB, { children: D[d].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: d, name: d, type: 'text', defaultValue: S, autoComplete: 'given-name', 'aria-required': 'true', ...I(`${d}`, { required: { value: !0, message: C ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!D[d] }) })] }), v && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: v, children: C ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(t.JM, { children: C ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: v, name: v, ...I(v, { required: { value: !0, message: C ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: f, children: C ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(t.JM, { children: C ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: f, name: f, rows: 12, ...I(f, { required: { value: !0, message: C ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: m, children: C ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), D[m] && (0, l.jsx)(t.YB, { children: D[m].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: m, name: m, type: 'text' }) })] }), u && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [c, !h && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, i) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${u}[]`, value: F[i], id: `${u}-${F[i]}` }), (0, l.jsx)(t.lR, { htmlFor: `${u}-${F[i]}`, children: e })] }, e))] }), b && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [w, !R && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, i) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${b}[]`, id: `${b}-${i}` }), (0, l.jsx)(t.lR, { htmlFor: `${b}-${i}`, children: e })] }, e))] }), y && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: y, name: y }) })] }), g && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.JM, { id: `${g}-description`, children: C ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...I(`${g}[]`, { required: { value: !0, message: C ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!D[`${g}[]`] }), (0, l.jsx)(t.lR, { htmlFor: `${g}-1`, children: C ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), D[g] && (0, l.jsx)(t.YB, { children: D[g].message })] }), k?.id && (0, l.jsx)('input', { type: 'hidden', name: k.id, value: k.value }), (0, l.jsx)(t.e2, { children: (0, l.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: x || (C ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
