'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [5575],
 {
  37447(e, i, t) {
   t.d(i, { W: () => o });
   var n = t(25557),
    s = t(29181),
    r = t(30758),
    l = t(27890),
    a = t(86070);
   const o = ({ listId: e = '', laPostaId: i = '', thanksPage: t = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: m = '', interestsId: u = '', interestsLegend: c = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: h = !1, disallowedInterestValues: p = [], workAreasId: y = '', privacyPolicyId: x = '', language: g, submitText: k = '', talkTitleId: v = '', talkDescriptionId: f = '', roleId: b = '', roleLegend: R = 'Wat is jouw rol?', roles: w = [], roleRequired: z = !1 }) => {
    const {
      register: I,
      handleSubmit: C,
      formState: { errors: $ },
     } = (0, l.mN)(),
     _ = (0, r.useRef)(null),
     D = '2' === g?.value,
     { search: S } = (0, n.zy)(),
     B = new URLSearchParams(S),
     q = B.get('prefillEmail'),
     M = B.get('prefillName'),
     F =
      !!(u && j.length > 0) &&
      ((e, i) => {
       const t = [];
       let n = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(n); ) n++;
        (t.push(n), n++);
       }
       return t;
      })(j, p);
    return (0, a.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: _,
     onSubmit: C(() => {
      _.current.submit();
     }),
     children: [(0, a.jsxs)(s.zB, { type: 'email', children: [(0, a.jsx)(s.fz, { children: (0, a.jsx)(s.lR, { htmlFor: `id-${o}`, children: D ? 'Email address ' : 'E-mailadres' }) }), $[o] && (0, a.jsx)(s.YB, { children: $[o].message }), (0, a.jsx)(s.fz, { children: (0, a.jsx)(s.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: q, 'aria-required': 'true', ...I(`${o}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: D ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!$[o] }) })] }), (0, a.jsxs)(s.zB, { type: 'text', children: [(0, a.jsx)(s.fz, { children: (0, a.jsx)(s.lR, { htmlFor: d, children: D ? 'Name' : 'Naam' }) }), $[d] && (0, a.jsx)(s.YB, { children: $[d].message }), (0, a.jsx)(s.fz, { children: (0, a.jsx)(s.Rj, { id: d, name: d, type: 'text', defaultValue: M, autoComplete: 'given-name', 'aria-required': 'true', ...I(`${d}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!$[d] }) })] }), v && (0, a.jsxs)(s.zB, { type: 'text', children: [(0, a.jsxs)(s.fz, { children: [(0, a.jsx)(s.lR, { htmlFor: v, children: D ? 'Title of your talk' : 'Titel van je presentatie' }), (0, a.jsx)(s.JM, { children: D ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, a.jsx)(s.fz, { children: (0, a.jsx)(s.Rj, { id: v, name: v, ...I(v, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, a.jsxs)(s.zB, { type: 'text', children: [(0, a.jsxs)(s.fz, { children: [(0, a.jsx)(s.lR, { htmlFor: f, children: D ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, a.jsx)(s.JM, { children: D ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, a.jsx)(s.fz, { children: (0, a.jsx)(s.TM, { id: f, name: f, rows: 12, ...I(f, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, a.jsxs)(s.zB, { type: 'text', children: [(0, a.jsx)(s.fz, { children: (0, a.jsx)(s.lR, { htmlFor: m, children: D ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), $[m] && (0, a.jsx)(s.YB, { children: $[m].message }), (0, a.jsx)(s.fz, { children: (0, a.jsx)(s.Rj, { id: m, name: m, type: 'text' }) })] }), u && (0, a.jsxs)(s.LB, { children: [(0, a.jsx)(s.fz, { children: (0, a.jsxs)(s.u4, { children: [c, !h && ' (niet verplicht)'] }) }), (0, a.jsx)(s.JM, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, i) => (0, a.jsxs)(s.zB, { type: 'checkbox', children: [(0, a.jsx)(s.Sc, { name: `${u}[]`, value: F[i], id: `${u}-${F[i]}` }), (0, a.jsx)(s.lR, { htmlFor: `${u}-${F[i]}`, children: e })] }, e))] }), b && (0, a.jsxs)(s.LB, { children: [(0, a.jsx)(s.fz, { children: (0, a.jsxs)(s.u4, { children: [R, !z && ' (niet verplicht)'] }) }), (0, a.jsx)(s.JM, { children: 'Meerdere antwoorden mogelijk.' }), w.map((e, i) => (0, a.jsxs)(s.zB, { type: 'checkbox', children: [(0, a.jsx)(s.Sc, { name: `${b}[]`, id: `${b}-${i}` }), (0, a.jsx)(s.lR, { htmlFor: `${b}-${i}`, children: e })] }, e))] }), y && (0, a.jsxs)(s.zB, { type: 'text', children: [(0, a.jsxs)(s.fz, { children: [(0, a.jsx)(s.lR, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, a.jsx)(s.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, a.jsx)(s.fz, { children: (0, a.jsx)(s.TM, { id: y, name: y }) })] }), x && (0, a.jsxs)(s.zB, { type: 'text', children: [(0, a.jsx)(s.JM, { id: `${x}-description`, children: D ? (0, a.jsxs)('p', { children: ['The ', (0, a.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, a.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, a.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, a.jsxs)(s.zB, { type: 'checkbox', children: [(0, a.jsx)(s.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...I(`${x}[]`, { required: { value: !0, message: D ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!$[`${x}[]`] }), (0, a.jsx)(s.lR, { htmlFor: `${x}-1`, children: D ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), $[x] && (0, a.jsx)(s.YB, { children: $[x].message })] }), g?.id && (0, a.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, a.jsx)(s.e2, { children: (0, a.jsx)(s.$n, { type: 'submit', appearance: 'primary-action-button', children: k || (D ? 'Sign up' : 'Aanmelden') }) }), (0, a.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, a.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, a.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, a.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, a.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  77335(e, i, t) {
   (t.r(i), t.d(i, { assets: () => d, contentTitle: () => o, default: () => c, frontMatter: () => a, metadata: () => n, toc: () => m }));
   const n = JSON.parse('{"id":"community/community-sprints/rijkshuisstijl-community/aanmelden","title":"Meld je aan voor de Rijkshuisstijl Community \xb7 Rijkshuisstijl Community \xb7 Community Sprints","description":"We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de Rijkshuisstijl Community.","source":"@site/docs/community/community-sprints/rijkshuisstijl-community/aanmelden.mdx","sourceDirName":"community/community-sprints/rijkshuisstijl-community","slug":"/community/community-sprints/rijkshuisstijl-community/aanmelden","permalink":"/community/community-sprints/rijkshuisstijl-community/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/rijkshuisstijl-community/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Meld je aan voor de Rijkshuisstijl Community \xb7 Rijkshuisstijl Community \xb7 Community Sprints","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Aanmelden","slug":"/community/community-sprints/rijkshuisstijl-community/aanmelden","keywords":["nl design system","community sprint","rijkshuisstijl community","rijkshuisstijl community sprint","rijkshuisstijl community open hour"]},"sidebar":"community","previous":{"title":"Over Rijkshuisstijl Community","permalink":"/community/community-sprints/rijkshuisstijl-community/"},"next":{"title":"Expertteam Digitale Toegankelijkheid","permalink":"/project/expertteam-digitale-toegankelijkheid"}}');
   var s = t(86070),
    r = t(18439),
    l = t(37447);
   const a = { title: 'Meld je aan voor de Rijkshuisstijl Community \xb7 Rijkshuisstijl Community \xb7 Community Sprints', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/rijkshuisstijl-community/aanmelden', keywords: ['nl design system', 'community sprint', 'rijkshuisstijl community', 'rijkshuisstijl community sprint', 'rijkshuisstijl community open hour'] },
    o = 'Meld je aan voor de Rijkshuisstijl Community',
    d = {},
    m = [];
   function u(e) {
    const i = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(i.header, { children: (0, s.jsx)(i.h1, { id: 'meld-je-aan-voor-de-rijkshuisstijl-community', children: 'Meld je aan voor de Rijkshuisstijl Community' }) }), '\n', (0, s.jsx)(i.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de Rijkshuisstijl Community.' }), '\n', '\n', (0, s.jsx)(l.W, { listId: '9juqorlygr', emailFieldId: '6GzLKrnrdz', firstNameFieldId: 'Raz0sxxI9o', orgId: 'iFqikI2eB8', privacyPolicyId: 'HkEf7W8t0X', interestsId: 'vDVCyKrl67', interestsLegend: 'Waar liggen jouw interesses binnen de Rijkshuisstijl Community?', interests: ['Kennisdeling', 'Design', 'Development', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Gebruikersonderzoek'], disallowedInterestValues: [3, 7, 8], workAreasId: 'AVqwHVpU3H', thanksPage: 'https://nldesignsystem.nl/community/community-sprints/rijkshuisstijl-community/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function c(e = {}) {
    const { wrapper: i } = { ...(0, r.R)(), ...e.components };
    return i ? (0, s.jsx)(i, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
  },
 },
]);
