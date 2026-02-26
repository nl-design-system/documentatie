'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [5575],
 {
  37447(e, i, t) {
   t.d(i, { W: () => o });
   var n = t(29181),
    s = t(30758),
    r = t(27890),
    a = t(54565),
    l = t(86070);
   const o = ({ listId: e = '', laPostaId: i = '', thanksPage: t = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: m = '', interestsId: u = '', interestsLegend: c = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: h = !1, disallowedInterestValues: p = [], workAreasId: y = '', privacyPolicyId: x = '', language: g, submitText: v = '', talkTitleId: k = '', talkDescriptionId: f = '', roleId: b = '', roleLegend: w = 'Wat is jouw rol?', roles: R = [], roleRequired: z = !1 }) => {
    const {
      register: I,
      handleSubmit: $,
      formState: { errors: _ },
     } = (0, r.mN)(),
     D = (0, s.useRef)(null),
     B = '2' === g?.value,
     C = (0, a.c)() ? window.location.search : '',
     q = new URLSearchParams(C),
     M = q.get('prefillEmail'),
     S = q.get('prefillName'),
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
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: D,
     onSubmit: $(() => {
      D.current.submit();
     }),
     children: [(0, l.jsxs)(n.zB, { type: 'email', children: [(0, l.jsx)(n.fz, { children: (0, l.jsx)(n.lR, { htmlFor: `id-${o}`, children: B ? 'Email address ' : 'E-mailadres' }) }), _[o] && (0, l.jsx)(n.YB, { children: _[o].message }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: M, 'aria-required': 'true', ...I(`${o}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: B ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!_[o] }) })] }), (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsx)(n.fz, { children: (0, l.jsx)(n.lR, { htmlFor: d, children: B ? 'Name' : 'Naam' }) }), _[d] && (0, l.jsx)(n.YB, { children: _[d].message }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: d, name: d, type: 'text', defaultValue: S, autoComplete: 'given-name', 'aria-required': 'true', ...I(`${d}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!_[d] }) })] }), k && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsxs)(n.fz, { children: [(0, l.jsx)(n.lR, { htmlFor: k, children: B ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(n.JM, { children: B ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: k, name: k, ...I(k, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsxs)(n.fz, { children: [(0, l.jsx)(n.lR, { htmlFor: f, children: B ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(n.JM, { children: B ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.TM, { id: f, name: f, rows: 12, ...I(f, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsx)(n.fz, { children: (0, l.jsx)(n.lR, { htmlFor: m, children: B ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), _[m] && (0, l.jsx)(n.YB, { children: _[m].message }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: m, name: m, type: 'text' }) })] }), u && (0, l.jsxs)(n.LB, { children: [(0, l.jsx)(n.fz, { children: (0, l.jsxs)(n.u4, { children: [c, !h && ' (niet verplicht)'] }) }), (0, l.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, i) => (0, l.jsxs)(n.zB, { type: 'checkbox', children: [(0, l.jsx)(n.Sc, { name: `${u}[]`, value: F[i], id: `${u}-${F[i]}` }), (0, l.jsx)(n.lR, { htmlFor: `${u}-${F[i]}`, children: e })] }, e))] }), b && (0, l.jsxs)(n.LB, { children: [(0, l.jsx)(n.fz, { children: (0, l.jsxs)(n.u4, { children: [w, !z && ' (niet verplicht)'] }) }), (0, l.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), R.map((e, i) => (0, l.jsxs)(n.zB, { type: 'checkbox', children: [(0, l.jsx)(n.Sc, { name: `${b}[]`, id: `${b}-${i}` }), (0, l.jsx)(n.lR, { htmlFor: `${b}-${i}`, children: e })] }, e))] }), y && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsxs)(n.fz, { children: [(0, l.jsx)(n.lR, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(n.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.TM, { id: y, name: y }) })] }), x && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsx)(n.JM, { id: `${x}-description`, children: B ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(n.zB, { type: 'checkbox', children: [(0, l.jsx)(n.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...I(`${x}[]`, { required: { value: !0, message: B ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!_[`${x}[]`] }), (0, l.jsx)(n.lR, { htmlFor: `${x}-1`, children: B ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), _[x] && (0, l.jsx)(n.YB, { children: _[x].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(n.e2, { children: (0, l.jsx)(n.$n, { type: 'submit', appearance: 'primary-action-button', children: v || (B ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  54565(e, i, t) {
   t.d(i, { c: () => s });
   var n = t(30758);
   function s() {
    const [e, i] = (0, n.useState)();
    return ((0, n.useEffect)(() => i(!0), []), e);
   }
  },
  77335(e, i, t) {
   (t.r(i), t.d(i, { assets: () => d, contentTitle: () => o, default: () => c, frontMatter: () => l, metadata: () => n, toc: () => m }));
   const n = JSON.parse('{"id":"community/community-sprints/rijkshuisstijl-community/aanmelden","title":"Meld je aan voor de Rijkshuisstijl Community","description":"We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de Rijkshuisstijl Community.","source":"@site/docs/community/community-sprints/rijkshuisstijl-community/aanmelden.mdx","sourceDirName":"community/community-sprints/rijkshuisstijl-community","slug":"/community/community-sprints/rijkshuisstijl-community/aanmelden","permalink":"/community/community-sprints/rijkshuisstijl-community/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/rijkshuisstijl-community/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Meld je aan voor de Rijkshuisstijl Community","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Aanmelden","slug":"/community/community-sprints/rijkshuisstijl-community/aanmelden","keywords":["nl design system","community sprint","rijkshuisstijl community","rijkshuisstijl community sprint","rijkshuisstijl community open hour"]},"sidebar":"community","previous":{"title":"Over Rijkshuisstijl Community","permalink":"/community/community-sprints/rijkshuisstijl-community/"},"next":{"title":"Expertteam Digitale Toegankelijkheid","permalink":"/project/expertteam-digitale-toegankelijkheid"}}');
   var s = t(86070),
    r = t(18439),
    a = t(37447);
   const l = { title: 'Meld je aan voor de Rijkshuisstijl Community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/rijkshuisstijl-community/aanmelden', keywords: ['nl design system', 'community sprint', 'rijkshuisstijl community', 'rijkshuisstijl community sprint', 'rijkshuisstijl community open hour'] },
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
 },
]);
