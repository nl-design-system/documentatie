'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [2323],
 {
  37447(e, i, n) {
   n.d(i, { W: () => m });
   var t = n(25557),
    s = n(29181),
    r = n(30758),
    a = n(27890),
    l = n(86070);
   const m = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: m = '', firstNameFieldId: o = '', orgId: d = '', interestsId: c = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: h = !1, disallowedInterestValues: p = [], workAreasId: y = '', privacyPolicyId: v = '', language: g, submitText: x = '', talkTitleId: f = '', talkDescriptionId: k = '', roleId: b = '', roleLegend: w = 'Wat is jouw rol?', roles: S = [], roleRequired: z = !1 }) => {
    const {
      register: M,
      handleSubmit: C,
      formState: { errors: I },
     } = (0, a.mN)(),
     R = (0, r.useRef)(null),
     $ = '2' === g?.value,
     { search: _ } = (0, t.zy)(),
     D = new URLSearchParams(_),
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
     onSubmit: C(() => {
      R.current.submit();
     }),
     children: [(0, l.jsxs)(s.zB, { type: 'email', children: [(0, l.jsx)(s.fz, { children: (0, l.jsx)(s.lR, { htmlFor: `id-${m}`, children: $ ? 'Email address ' : 'E-mailadres' }) }), I[m] && (0, l.jsx)(s.YB, { children: I[m].message }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: `id-${m}`, name: m, type: 'email', autoComplete: 'email', defaultValue: B, 'aria-required': 'true', ...M(`${m}`, { required: { value: !0, message: $ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: $ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!I[m] }) })] }), (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsx)(s.fz, { children: (0, l.jsx)(s.lR, { htmlFor: o, children: $ ? 'Name' : 'Naam' }) }), I[o] && (0, l.jsx)(s.YB, { children: I[o].message }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: o, name: o, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...M(`${o}`, { required: { value: !0, message: $ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!I[o] }) })] }), f && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsxs)(s.fz, { children: [(0, l.jsx)(s.lR, { htmlFor: f, children: $ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(s.JM, { children: $ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: f, name: f, ...M(f, { required: { value: !0, message: $ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsxs)(s.fz, { children: [(0, l.jsx)(s.lR, { htmlFor: k, children: $ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(s.JM, { children: $ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.TM, { id: k, name: k, rows: 12, ...M(k, { required: { value: !0, message: $ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), d && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsx)(s.fz, { children: (0, l.jsx)(s.lR, { htmlFor: d, children: $ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), I[d] && (0, l.jsx)(s.YB, { children: I[d].message }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: d, name: d, type: 'text' }) })] }), c && (0, l.jsxs)(s.LB, { children: [(0, l.jsx)(s.fz, { children: (0, l.jsxs)(s.u4, { children: [u, !h && ' (niet verplicht)'] }) }), (0, l.jsx)(s.JM, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, i) => (0, l.jsxs)(s.zB, { type: 'checkbox', children: [(0, l.jsx)(s.Sc, { name: `${c}[]`, value: q[i], id: `${c}-${q[i]}` }), (0, l.jsx)(s.lR, { htmlFor: `${c}-${q[i]}`, children: e })] }, e))] }), b && (0, l.jsxs)(s.LB, { children: [(0, l.jsx)(s.fz, { children: (0, l.jsxs)(s.u4, { children: [w, !z && ' (niet verplicht)'] }) }), (0, l.jsx)(s.JM, { children: 'Meerdere antwoorden mogelijk.' }), S.map((e, i) => (0, l.jsxs)(s.zB, { type: 'checkbox', children: [(0, l.jsx)(s.Sc, { name: `${b}[]`, id: `${b}-${i}` }), (0, l.jsx)(s.lR, { htmlFor: `${b}-${i}`, children: e })] }, e))] }), y && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsxs)(s.fz, { children: [(0, l.jsx)(s.lR, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(s.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.TM, { id: y, name: y }) })] }), v && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsx)(s.JM, { id: `${v}-description`, children: $ ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(s.zB, { type: 'checkbox', children: [(0, l.jsx)(s.Sc, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...M(`${v}[]`, { required: { value: !0, message: $ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!I[`${v}[]`] }), (0, l.jsx)(s.lR, { htmlFor: `${v}-1`, children: $ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), I[v] && (0, l.jsx)(s.YB, { children: I[v].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(s.e2, { children: (0, l.jsx)(s.$n, { type: 'submit', appearance: 'primary-action-button', children: x || ($ ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  98517(e, i, n) {
   (n.r(i), n.d(i, { assets: () => o, contentTitle: () => m, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => d }));
   const t = JSON.parse('{"id":"community/community-sprints/mijn-services-community/aanmelden","title":"Meld je aan voor de MijnServices Community \xb7 MijnServices Community \xb7 Community Sprints","description":"We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de MijnServices Community.","source":"@site/docs/community/community-sprints/mijn-services-community/aanmelden.mdx","sourceDirName":"community/community-sprints/mijn-services-community","slug":"/community/community-sprints/mijn-services-community/aanmelden","permalink":"/community/community-sprints/mijn-services-community/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/mijn-services-community/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Meld je aan voor de MijnServices Community \xb7 MijnServices Community \xb7 Community Sprints","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Aanmelden","slug":"/community/community-sprints/mijn-services-community/aanmelden","keywords":["nl design system","community sprint","mijn services community","mijnservices community","mijn services community afstemming","mijn services community check-in","overheidsbrede portalen community"]},"sidebar":"community","previous":{"title":"Over MijnServices Community","permalink":"/community/community-sprints/mijn-services-community/"},"next":{"title":"Over Rijkshuisstijl Community","permalink":"/community/community-sprints/rijkshuisstijl-community/"}}');
   var s = n(86070),
    r = n(18439),
    a = n(37447);
   const l = { title: 'Meld je aan voor de MijnServices Community \xb7 MijnServices Community \xb7 Community Sprints', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/mijn-services-community/aanmelden', keywords: ['nl design system', 'community sprint', 'mijn services community', 'mijnservices community', 'mijn services community afstemming', 'mijn services community check-in', 'overheidsbrede portalen community'] },
    m = 'Meld je aan voor de MijnServices Community',
    o = {},
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
