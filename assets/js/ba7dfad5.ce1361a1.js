'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [2323],
 {
  51629: (e, i, n) => {
   n.d(i, { W: () => l });
   var t = n(25557),
    s = n(14537),
    r = n(30758),
    a = n(65198),
    m = n(86070);
   const l = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: l = '', firstNameFieldId: o = '', orgId: d = '', interestsId: c = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], disallowedInterestValues: h = [], workAreasId: p = '', privacyPolicyId: y = '', language: v, submitText: g = '', talkTitleId: x = '', talkDescriptionId: f = '' }) => {
    const {
      register: k,
      handleSubmit: b,
      formState: { errors: w },
     } = (0, a.mN)(),
     S = (0, r.useRef)(null),
     z = '2' === v?.value,
     { search: C } = (0, t.zy)(),
     M = new URLSearchParams(C),
     I = M.get('prefillEmail'),
     R = M.get('prefillName'),
     _ =
      !!(c && j.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(t); ) t++;
        n.push(t), t++;
       }
       return n;
      })(j, h);
    return (0, m.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: S,
     onSubmit: b(() => {
      S.current.submit();
     }),
     children: [(0, m.jsxs)(s.zB, { type: 'email', children: [(0, m.jsx)(s.fz, { children: (0, m.jsx)(s.lR, { htmlFor: `id-${l}`, children: z ? 'Email address ' : 'E-mailadres' }) }), w[l] && (0, m.jsx)(s.YB, { children: w[l].message }), (0, m.jsx)(s.fz, { children: (0, m.jsx)(s.Rj, { id: `id-${l}`, name: l, type: 'email', autoComplete: 'email', defaultValue: I, 'aria-required': 'true', ...k(`${l}`, { required: { value: !0, message: z ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: z ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!w[l] }) })] }), (0, m.jsxs)(s.zB, { type: 'text', children: [(0, m.jsx)(s.fz, { children: (0, m.jsx)(s.lR, { htmlFor: o, children: z ? 'Name' : 'Naam' }) }), w[o] && (0, m.jsx)(s.YB, { children: w[o].message }), (0, m.jsx)(s.fz, { children: (0, m.jsx)(s.Rj, { id: o, name: o, type: 'text', defaultValue: R, autoComplete: 'given-name', 'aria-required': 'true', ...k(`${o}`, { required: { value: !0, message: z ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!w[o] }) })] }), x && (0, m.jsxs)(s.zB, { type: 'text', children: [(0, m.jsxs)(s.fz, { children: [(0, m.jsx)(s.lR, { htmlFor: x, children: z ? 'Title of your talk' : 'Titel van je presentatie' }), (0, m.jsx)(s.JM, { children: z ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, m.jsx)(s.fz, { children: (0, m.jsx)(s.Rj, { id: x, name: x, ...k(x, { required: { value: !0, message: z ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, m.jsxs)(s.zB, { type: 'text', children: [(0, m.jsxs)(s.fz, { children: [(0, m.jsx)(s.lR, { htmlFor: f, children: z ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, m.jsx)(s.JM, { children: z ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, m.jsx)(s.fz, { children: (0, m.jsx)(s.TM, { id: f, name: f, rows: 12, ...k(f, { required: { value: !0, message: z ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), d && (0, m.jsxs)(s.zB, { type: 'text', children: [(0, m.jsx)(s.fz, { children: (0, m.jsx)(s.lR, { htmlFor: d, children: z ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), w[d] && (0, m.jsx)(s.YB, { children: w[d].message }), (0, m.jsx)(s.fz, { children: (0, m.jsx)(s.Rj, { id: d, name: d, type: 'text' }) })] }), c && (0, m.jsxs)(s.LB, { children: [(0, m.jsx)(s.fz, { children: (0, m.jsxs)(s.u4, { children: [u, ' (niet verplicht)'] }) }), (0, m.jsx)(s.JM, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, i) => (0, m.jsxs)(s.zB, { type: 'checkbox', children: [(0, m.jsx)(s.Sc, { name: `${c}[]`, value: _[i], id: `${c}-${_[i]}` }), (0, m.jsx)(s.lR, { htmlFor: `${c}-${_[i]}`, children: e })] }, e))] }), p && (0, m.jsxs)(s.zB, { type: 'text', children: [(0, m.jsxs)(s.fz, { children: [(0, m.jsx)(s.lR, { htmlFor: p, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, m.jsx)(s.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, m.jsx)(s.fz, { children: (0, m.jsx)(s.TM, { id: p, name: p }) })] }), y && (0, m.jsxs)(s.zB, { type: 'text', children: [(0, m.jsx)(s.JM, { id: `${y}-description`, children: z ? (0, m.jsxs)('p', { children: ['The ', (0, m.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, m.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, m.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, m.jsxs)(s.zB, { type: 'checkbox', children: [(0, m.jsx)(s.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...k(`${y}[]`, { required: { value: !0, message: z ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!w[`${y}[]`] }), (0, m.jsx)(s.lR, { htmlFor: `${y}-1`, children: z ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), w[y] && (0, m.jsx)(s.YB, { children: w[y].message })] }), v?.id && (0, m.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, m.jsx)(s.e2, { children: (0, m.jsx)(s.$n, { type: 'submit', appearance: 'primary-action-button', children: g || (z ? 'Sign up' : 'Aanmelden') }) }), (0, m.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, m.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, m.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, m.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, m.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  98517: (e, i, n) => {
   n.r(i), n.d(i, { assets: () => o, contentTitle: () => l, default: () => u, frontMatter: () => m, metadata: () => t, toc: () => d });
   const t = JSON.parse('{"id":"community/community-sprints/mijn-services-community/aanmelden","title":"Meld je aan voor de MijnServices Community \xb7 MijnServices Community \xb7 Community Sprints","description":"We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de MijnServices Community.","source":"@site/docs/community/community-sprints/mijn-services-community/aanmelden.mdx","sourceDirName":"community/community-sprints/mijn-services-community","slug":"/community/community-sprints/mijn-services-community/aanmelden","permalink":"/community/community-sprints/mijn-services-community/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/mijn-services-community/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Meld je aan voor de MijnServices Community \xb7 MijnServices Community \xb7 Community Sprints","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Aanmelden","slug":"/community/community-sprints/mijn-services-community/aanmelden","keywords":["nl design system","community sprint","mijn services community","mijnservices community","mijn services community afstemming","mijn services community check-in","overheidsbrede portalen community"]},"sidebar":"community","previous":{"title":"MijnServices Community","permalink":"/community/community-sprints/mijn-services-community/"},"next":{"title":"Rijkshuisstijl Community","permalink":"/community/community-sprints/rijkshuisstijl-community/overzicht"}}');
   var s = n(86070),
    r = n(85248),
    a = n(51629);
   const m = { title: 'Meld je aan voor de MijnServices Community \xb7 MijnServices Community \xb7 Community Sprints', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/mijn-services-community/aanmelden', keywords: ['nl design system', 'community sprint', 'mijn services community', 'mijnservices community', 'mijn services community afstemming', 'mijn services community check-in', 'overheidsbrede portalen community'] },
    l = 'Meld je aan voor de MijnServices Community',
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
