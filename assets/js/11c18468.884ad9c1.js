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
    a = n(18439),
    r = n(78599);
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
  78599(e, i, n) {
   n.d(i, { W: () => d });
   var t = n(29181),
    s = n(56561),
    a = n(30758),
    r = n(27890),
    l = n(46565),
    o = n(86070);
   const d = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: d = '', firstNameFieldId: m = '', orgId: u = '', interestsId: c = '', interestsLegend: j = 'Waar wil je NL Design System voor gebruiken?', interests: h = [], interestsRequired: p = !1, disallowedInterestValues: y = [], workAreasId: g = '', privacyPolicyId: k = '', language: x, submitText: v = '', talkTitleId: f = '', talkDescriptionId: b = '', roleId: w = '', roleLegend: R = 'Wat is jouw rol?', roles: I = [], roleRequired: _ = !1 }) => {
    const {
      register: D,
      handleSubmit: $,
      formState: { errors: z },
     } = (0, r.mN)(),
     C = (0, a.useRef)(null),
     B = '2' === x?.value,
     N = (0, l.c)() ? window.location.search : '',
     q = new URLSearchParams(N),
     M = q.get('prefillEmail'),
     S = q.get('prefillName'),
     F =
      !!(c && h.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(h, y);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: C,
     onSubmit: $(() => {
      C.current.submit();
     }),
     children: [(0, o.jsxs)(t.zB, { type: 'email', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(t.lR, { htmlFor: `id-${d}`, children: B ? 'Email address ' : 'E-mailadres' }) }), z[d] && (0, o.jsx)(t.YB, { children: z[d].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: M, 'aria-required': 'true', ...D(`${d}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: B ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!z[d] }) })] }), (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(t.lR, { htmlFor: m, children: B ? 'Name' : 'Naam' }) }), z[m] && (0, o.jsx)(t.YB, { children: z[m].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.Rj, { id: m, name: m, type: 'text', defaultValue: S, autoComplete: 'given-name', 'aria-required': 'true', ...D(`${m}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!z[m] }) })] }), f && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(t.lR, { htmlFor: f, children: B ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(t.JM, { children: B ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.Rj, { id: f, name: f, ...D(f, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(t.lR, { htmlFor: b, children: B ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(t.JM, { children: B ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.TM, { id: b, name: b, rows: 12, ...D(b, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(t.lR, { htmlFor: u, children: B ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), z[u] && (0, o.jsx)(t.YB, { children: z[u].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.Rj, { id: u, name: u, type: 'text' }) })] }), c && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(s.f, { children: (0, o.jsxs)(t.u4, { children: [j, !p && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, i) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${c}[]`, value: F[i], id: `${c}-${F[i]}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${c}-${F[i]}`, children: e })] }, e))] }), w && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(s.f, { children: (0, o.jsxs)(t.u4, { children: [R, !_ && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), I.map((e, i) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${w}[]`, id: `${w}-${i}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${w}-${i}`, children: e })] }, e))] }), g && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(t.lR, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.TM, { id: g, name: g }) })] }), k && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(t.JM, { id: `${k}-description`, children: B ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { value: '1', id: `${k}-1`, 'aria-describedby': `${k}-description`, 'aria-required': 'true', ...D(`${k}[]`, { required: { value: !0, message: B ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!z[`${k}[]`] }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${k}-1`, children: B ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), z[k] && (0, o.jsx)(t.YB, { children: z[k].message })] }), x?.id && (0, o.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, o.jsx)(t.e2, { children: (0, o.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: v || (B ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
