'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25095],
 {
  22331(e, i, t) {
   (t.r(i), t.d(i, { assets: () => d, contentTitle: () => o, default: () => u, frontMatter: () => l, metadata: () => n, toc: () => m }));
   const n = JSON.parse('{"id":"community/events/community-bijeenkomst-2","title":"Communitybijeenkomst 18 oktober 2024","description":"Volgende week vrijdag 18 oktober is de 2e communitybijeenkomst van NL Design System, ben jij er ook?","source":"@site/docs/community/events/community-bijeenkomst-2.mdx","sourceDirName":"community/events","slug":"/events/communitybijeenkomst-18-10-2024","permalink":"/events/communitybijeenkomst-18-10-2024","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/community-bijeenkomst-2.mdx","tags":[],"version":"current","frontMatter":{"title":"Communitybijeenkomst 18 oktober 2024","hide_title":true,"hide_table_of_contents":false,"unlisted":true,"slug":"/events/communitybijeenkomst-18-10-2024"}}');
   var s = t(86070),
    r = t(18439),
    a = t(37447);
   const l = { title: 'Communitybijeenkomst 18 oktober 2024', hide_title: !0, hide_table_of_contents: !1, unlisted: !0, slug: '/events/communitybijeenkomst-18-10-2024' },
    o = 'Communitybijeenkomst',
    d = {},
    m = [];
   function c(e) {
    const i = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(i.header, { children: (0, s.jsx)(i.h1, { id: 'communitybijeenkomst', children: 'Communitybijeenkomst' }) }), '\n', (0, s.jsx)(i.p, { children: 'Volgende week vrijdag 18 oktober is de 2e communitybijeenkomst van NL Design System, ben jij er ook?\nNL Design System bestaat uit een groep enthousiaste Designers, Developers, Accessibility specialisten, Product Owners en Design System liefhebbers die voornamelijk online samenwerken.' }), '\n', (0, s.jsx)(i.p, { children: 'Deze Communitybijeenkomst is d\xe9 kans om elkaar te ontmoeten, kennis uit te wisselen en samenwerking te vieren onder het genot van een drankje en een hapje.' }), '\n', (0, s.jsxs)(i.ul, { children: ['\n', (0, s.jsxs)(i.li, { children: ['\ud83d\udcc6 ', (0, s.jsx)(i.strong, { children: 'Wanneer' }), ': 18 oktober van 16:00 uur tot 18:30 uur.'] }), '\n', (0, s.jsxs)(i.li, { children: ['\ud83c\udf0d ', (0, s.jsx)(i.strong, { children: 'Waar' }), ': ', (0, s.jsx)(i.a, { href: 'https://danel-utrecht.nl', children: 'Bar Danel' }), ', direct naast Utrecht Centraal.'] }), '\n', (0, s.jsxs)(i.li, { children: ['\ud83e\udef5 ', (0, s.jsx)(i.strong, { children: 'Voor wie?' }), ': Iedereen die met ons samenwerkt \xe9n alle nieuwe mensen die graag mee willen doen met de NL Design System Community.'] }), '\n'] }), '\n', (0, s.jsx)(a.W, { listId: 'w6sbgdln0j', emailFieldId: 'oYQvVF1C4s', firstNameFieldId: 'AFUcmITRwf', thanksPage: 'https://nldesignsystem.nl/community/communitybijeenkomst-18-10-2024/bedankt', laPostaId: 'iyihtuzpiq', submitText: 'Ik ben erbij!' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, r.R)(), ...e.components };
    return i ? (0, s.jsx)(i, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
  37447(e, i, t) {
   t.d(i, { W: () => o });
   var n = t(29181),
    s = t(30758),
    r = t(27890),
    a = t(54565),
    l = t(86070);
   const o = ({ listId: e = '', laPostaId: i = '', thanksPage: t = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: m = '', interestsId: c = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: h = [], interestsRequired: j = !1, disallowedInterestValues: p = [], workAreasId: x = '', privacyPolicyId: g = '', language: y, submitText: v = '', talkTitleId: k = '', talkDescriptionId: b = '', roleId: f = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: I = !1 }) => {
    const {
      register: D,
      handleSubmit: R,
      formState: { errors: S },
     } = (0, r.mN)(),
     $ = (0, s.useRef)(null),
     B = '2' === y?.value,
     N = (0, a.c)() ? window.location.search : '',
     C = new URLSearchParams(N),
     F = C.get('prefillEmail'),
     _ = C.get('prefillName'),
     T =
      !!(c && h.length > 0) &&
      ((e, i) => {
       const t = [];
       let n = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(n); ) n++;
        (t.push(n), n++);
       }
       return t;
      })(h, p);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: $,
     onSubmit: R(() => {
      $.current.submit();
     }),
     children: [(0, l.jsxs)(n.zB, { type: 'email', children: [(0, l.jsx)(n.fz, { children: (0, l.jsx)(n.lR, { htmlFor: `id-${o}`, children: B ? 'Email address ' : 'E-mailadres' }) }), S[o] && (0, l.jsx)(n.YB, { children: S[o].message }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', ...D(`${o}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: B ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!S[o] }) })] }), (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsx)(n.fz, { children: (0, l.jsx)(n.lR, { htmlFor: d, children: B ? 'Name' : 'Naam' }) }), S[d] && (0, l.jsx)(n.YB, { children: S[d].message }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: d, name: d, type: 'text', defaultValue: _, autoComplete: 'given-name', 'aria-required': 'true', ...D(`${d}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!S[d] }) })] }), k && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsxs)(n.fz, { children: [(0, l.jsx)(n.lR, { htmlFor: k, children: B ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(n.JM, { children: B ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: k, name: k, ...D(k, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsxs)(n.fz, { children: [(0, l.jsx)(n.lR, { htmlFor: b, children: B ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(n.JM, { children: B ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.TM, { id: b, name: b, rows: 12, ...D(b, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsx)(n.fz, { children: (0, l.jsx)(n.lR, { htmlFor: m, children: B ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), S[m] && (0, l.jsx)(n.YB, { children: S[m].message }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: m, name: m, type: 'text' }) })] }), c && (0, l.jsxs)(n.LB, { children: [(0, l.jsx)(n.fz, { children: (0, l.jsxs)(n.u4, { children: [u, !j && ' (niet verplicht)'] }) }), (0, l.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, i) => (0, l.jsxs)(n.zB, { type: 'checkbox', children: [(0, l.jsx)(n.Sc, { name: `${c}[]`, value: T[i], id: `${c}-${T[i]}` }), (0, l.jsx)(n.lR, { htmlFor: `${c}-${T[i]}`, children: e })] }, e))] }), f && (0, l.jsxs)(n.LB, { children: [(0, l.jsx)(n.fz, { children: (0, l.jsxs)(n.u4, { children: [w, !I && ' (niet verplicht)'] }) }), (0, l.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, i) => (0, l.jsxs)(n.zB, { type: 'checkbox', children: [(0, l.jsx)(n.Sc, { name: `${f}[]`, id: `${f}-${i}` }), (0, l.jsx)(n.lR, { htmlFor: `${f}-${i}`, children: e })] }, e))] }), x && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsxs)(n.fz, { children: [(0, l.jsx)(n.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(n.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.TM, { id: x, name: x }) })] }), g && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsx)(n.JM, { id: `${g}-description`, children: B ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(n.zB, { type: 'checkbox', children: [(0, l.jsx)(n.Sc, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...D(`${g}[]`, { required: { value: !0, message: B ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!S[`${g}[]`] }), (0, l.jsx)(n.lR, { htmlFor: `${g}-1`, children: B ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), S[g] && (0, l.jsx)(n.YB, { children: S[g].message })] }), y?.id && (0, l.jsx)('input', { type: 'hidden', name: y.id, value: y.value }), (0, l.jsx)(n.e2, { children: (0, l.jsx)(n.$n, { type: 'submit', appearance: 'primary-action-button', children: v || (B ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
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
 },
]);
