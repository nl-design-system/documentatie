'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25095],
 {
  22331(e, i, n) {
   (n.r(i), n.d(i, { assets: () => d, contentTitle: () => o, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => m }));
   const t = JSON.parse('{"id":"community/events/community-bijeenkomst-2","title":"Communitybijeenkomst 18 oktober 2024 \xb7 Bijeenkomsten","description":"Volgende week vrijdag 18 oktober is de 2e communitybijeenkomst van NL Design System, ben jij er ook?","source":"@site/docs/community/events/community-bijeenkomst-2.mdx","sourceDirName":"community/events","slug":"/events/communitybijeenkomst-18-10-2024","permalink":"/events/communitybijeenkomst-18-10-2024","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/community-bijeenkomst-2.mdx","tags":[],"version":"current","frontMatter":{"title":"Communitybijeenkomst 18 oktober 2024 \xb7 Bijeenkomsten","hide_title":true,"hide_table_of_contents":false,"unlisted":true,"slug":"/events/communitybijeenkomst-18-10-2024"}}');
   var s = n(86070),
    r = n(18439),
    a = n(37447);
   const l = { title: 'Communitybijeenkomst 18 oktober 2024 \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, unlisted: !0, slug: '/events/communitybijeenkomst-18-10-2024' },
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
  37447(e, i, n) {
   n.d(i, { W: () => o });
   var t = n(25557),
    s = n(29181),
    r = n(30758),
    a = n(27890),
    l = n(86070);
   const o = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: m = '', interestsId: c = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: h = [], interestsRequired: j = !1, disallowedInterestValues: p = [], workAreasId: x = '', privacyPolicyId: y = '', language: g, submitText: v = '', talkTitleId: k = '', talkDescriptionId: b = '', roleId: f = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: I = !1 }) => {
    const {
      register: D,
      handleSubmit: R,
      formState: { errors: B },
     } = (0, a.mN)(),
     S = (0, r.useRef)(null),
     $ = '2' === g?.value,
     { search: N } = (0, t.zy)(),
     C = new URLSearchParams(N),
     F = C.get('prefillEmail'),
     _ = C.get('prefillName'),
     T =
      !!(c && h.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(h, p);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: S,
     onSubmit: R(() => {
      S.current.submit();
     }),
     children: [(0, l.jsxs)(s.zB, { type: 'email', children: [(0, l.jsx)(s.fz, { children: (0, l.jsx)(s.lR, { htmlFor: `id-${o}`, children: $ ? 'Email address ' : 'E-mailadres' }) }), B[o] && (0, l.jsx)(s.YB, { children: B[o].message }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', ...D(`${o}`, { required: { value: !0, message: $ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: $ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!B[o] }) })] }), (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsx)(s.fz, { children: (0, l.jsx)(s.lR, { htmlFor: d, children: $ ? 'Name' : 'Naam' }) }), B[d] && (0, l.jsx)(s.YB, { children: B[d].message }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: d, name: d, type: 'text', defaultValue: _, autoComplete: 'given-name', 'aria-required': 'true', ...D(`${d}`, { required: { value: !0, message: $ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!B[d] }) })] }), k && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsxs)(s.fz, { children: [(0, l.jsx)(s.lR, { htmlFor: k, children: $ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(s.JM, { children: $ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: k, name: k, ...D(k, { required: { value: !0, message: $ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsxs)(s.fz, { children: [(0, l.jsx)(s.lR, { htmlFor: b, children: $ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(s.JM, { children: $ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.TM, { id: b, name: b, rows: 12, ...D(b, { required: { value: !0, message: $ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsx)(s.fz, { children: (0, l.jsx)(s.lR, { htmlFor: m, children: $ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), B[m] && (0, l.jsx)(s.YB, { children: B[m].message }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: m, name: m, type: 'text' }) })] }), c && (0, l.jsxs)(s.LB, { children: [(0, l.jsx)(s.fz, { children: (0, l.jsxs)(s.u4, { children: [u, !j && ' (niet verplicht)'] }) }), (0, l.jsx)(s.JM, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, i) => (0, l.jsxs)(s.zB, { type: 'checkbox', children: [(0, l.jsx)(s.Sc, { name: `${c}[]`, value: T[i], id: `${c}-${T[i]}` }), (0, l.jsx)(s.lR, { htmlFor: `${c}-${T[i]}`, children: e })] }, e))] }), f && (0, l.jsxs)(s.LB, { children: [(0, l.jsx)(s.fz, { children: (0, l.jsxs)(s.u4, { children: [w, !I && ' (niet verplicht)'] }) }), (0, l.jsx)(s.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, i) => (0, l.jsxs)(s.zB, { type: 'checkbox', children: [(0, l.jsx)(s.Sc, { name: `${f}[]`, id: `${f}-${i}` }), (0, l.jsx)(s.lR, { htmlFor: `${f}-${i}`, children: e })] }, e))] }), x && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsxs)(s.fz, { children: [(0, l.jsx)(s.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(s.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.TM, { id: x, name: x }) })] }), y && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsx)(s.JM, { id: `${y}-description`, children: $ ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(s.zB, { type: 'checkbox', children: [(0, l.jsx)(s.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...D(`${y}[]`, { required: { value: !0, message: $ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!B[`${y}[]`] }), (0, l.jsx)(s.lR, { htmlFor: `${y}-1`, children: $ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), B[y] && (0, l.jsx)(s.YB, { children: B[y].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(s.e2, { children: (0, l.jsx)(s.$n, { type: 'submit', appearance: 'primary-action-button', children: v || ($ ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
 },
]);
