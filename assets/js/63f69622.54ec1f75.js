'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25095],
 {
  31641(e, i, t) {
   t.d(i, { W: () => m });
   var n = t(29181),
    s = t(46847),
    r = t(56561),
    a = t(30758),
    l = t(27890),
    o = t(90515),
    d = t(13526),
    c = t(86070);
   const m = ({ listId: e = '', laPostaId: i = '', thanksPage: t = '', emailFieldId: m = '', firstNameFieldId: u = '', orgId: h = '', interestsId: j = '', interestsLegend: p = 'Waar wil je NL Design System voor gebruiken?', interests: x = [], interestsRequired: y = !1, disallowedInterestValues: g = [], workAreasId: v = '', privacyPolicyId: b = '', language: k, submitText: f = '', talkTitleId: w = '', talkDescriptionId: $ = '', roleId: I = '', roleLegend: D = 'Wat is jouw rol?', roles: N = [], roleRequired: R = !1 }) => {
    const {
      register: S,
      handleSubmit: B,
      formState: { errors: C },
     } = (0, l.mN)({ mode: 'onBlur' }),
     F = (0, a.useRef)(null),
     _ = '2' === k?.value,
     z = (0, o.c)() ? window.location.search : '',
     T = new URLSearchParams(z),
     q = T.get('prefillEmail'),
     L = T.get('prefillName'),
     M =
      !!(j && x.length > 0) &&
      ((e, i) => {
       const t = [];
       let n = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(n); ) n++;
        (t.push(n), n++);
       }
       return t;
      })(x, g);
    return (0, c.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: F,
     onSubmit: B(() => {
      F.current.submit();
     }),
     children: [(0, c.jsxs)(n.zB, { type: 'email', children: [(0, c.jsx)(r.f, { children: (0, c.jsx)(n.lR, { htmlFor: `id-${m}`, children: _ ? 'Email address ' : 'E-mailadres' }) }), C[m] && (0, c.jsx)(n.YB, { role: 'alert', id: `${m}-error`, children: C[m].message }), (0, c.jsx)(r.f, { children: (0, c.jsx)(n.Rj, { id: `id-${m}`, name: m, type: 'email', autoComplete: 'email', defaultValue: q, 'aria-required': 'true', 'aria-describedby': C[m] && `${m}-error`, ...S(`${m}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: _ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!C[m] }) })] }), (0, c.jsxs)(n.zB, { type: 'text', children: [(0, c.jsx)(r.f, { children: (0, c.jsx)(n.lR, { htmlFor: u, children: _ ? 'Name' : 'Naam' }) }), C[u] && (0, c.jsx)(n.YB, { role: 'alert', id: `${u}-error`, children: C[u].message }), (0, c.jsx)(r.f, { children: (0, c.jsx)(n.Rj, { id: u, name: u, type: 'text', defaultValue: L, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': C[u] && `${u}-error`, ...S(`${u}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!C[u] }) })] }), w && (0, c.jsxs)(n.zB, { type: 'text', children: [(0, c.jsxs)(r.f, { children: [(0, c.jsx)(n.lR, { htmlFor: w, children: _ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, c.jsx)(n.JM, { id: `${w}-description`, children: _ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, c.jsx)(r.f, { children: (0, c.jsx)(n.Rj, { id: w, name: w, 'aria-describedby': `${w}-description`, ...S(w, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), $ && (0, c.jsxs)(n.zB, { type: 'text', children: [(0, c.jsxs)(r.f, { children: [(0, c.jsx)(n.lR, { htmlFor: $, children: _ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, c.jsx)(n.JM, { id: `${$}-description`, children: _ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, c.jsx)(r.f, { children: (0, c.jsx)(n.TM, { id: $, name: $, rows: 12, 'aria-describedby': `${$}-description`, ...S($, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, c.jsxs)(n.zB, { type: 'text', children: [(0, c.jsx)(r.f, { children: (0, c.jsx)(n.lR, { htmlFor: h, children: _ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), C[h] && (0, c.jsx)(n.YB, { children: C[h].message }), (0, c.jsx)(r.f, { children: (0, c.jsx)(n.Rj, { id: h, name: h, type: 'text', autoComplete: 'organization' }) })] }), j && (0, c.jsxs)(n.LB, { 'aria-describedby': `${j}-description`, children: [(0, c.jsxs)(n.u4, { children: [p, !y && ' (niet verplicht)'] }), (0, c.jsx)(n.JM, { id: `${j}-description`, children: 'Meerdere antwoorden mogelijk.' }), x.map((e, i) => (0, c.jsxs)(n.zB, { type: 'checkbox', children: [(0, c.jsx)(n.Sc, { name: `${j}[]`, value: M[i], id: `${j}-${M[i]}` }), (0, c.jsx)(n.lR, { type: 'checkbox', htmlFor: `${j}-${M[i]}`, children: e })] }, e))] }), I && (0, c.jsxs)(n.LB, { 'aria-describedby': `${I}-description`, children: [(0, c.jsxs)(n.u4, { children: [D, !R && ' (niet verplicht)'] }), (0, c.jsx)(n.JM, { id: `${I}-description`, children: 'Meerdere antwoorden mogelijk.' }), N.map((e, i) => (0, c.jsxs)(n.zB, { type: 'checkbox', children: [(0, c.jsx)(n.Sc, { name: `${I}[]`, id: `${I}-${i}` }), (0, c.jsx)(n.lR, { type: 'checkbox', htmlFor: `${I}-${i}`, children: e })] }, e))] }), v && (0, c.jsxs)(n.zB, { type: 'text', children: [(0, c.jsxs)(r.f, { children: [(0, c.jsx)(n.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, c.jsx)(n.JM, { id: `${v}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, c.jsx)(r.f, { children: (0, c.jsx)(n.TM, { id: v, name: v, 'aria-describedby': `${v}-description` }) })] }), b && (0, c.jsxs)(n.zB, { type: 'text', children: [(0, c.jsx)(n.JM, { id: `${b}-description`, children: _ ? (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, c.jsxs)(n.zB, { type: 'checkbox', children: [(0, c.jsx)(n.Sc, { value: '1', id: `${b}-1`, 'aria-describedby': (0, d.A)({ [`${b}-description`]: !0, [`${b}-error`]: C[b] }), 'aria-required': 'true', ...S(`${b}[]`, { required: { value: !0, message: _ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!C[`${b}`] }), (0, c.jsx)(n.lR, { type: 'checkbox', htmlFor: `${b}-1`, children: _ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), C[`${b}`] && (0, c.jsx)(n.YB, { role: 'alert', id: `${b}-error`, children: C[`${b}`].message })] }), k?.id && (0, c.jsx)('input', { type: 'hidden', name: k.id, value: k.value }), (0, c.jsx)(n.e2, { children: (0, c.jsx)(s.$, { type: 'submit', purpose: 'primary', children: f || (_ ? 'Sign up' : 'Aanmelden') }) }), (0, c.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, c.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, c.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, c.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, c.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  37076(e, i, t) {
   (t.r(i), t.d(i, { assets: () => d, contentTitle: () => o, default: () => u, frontMatter: () => l, metadata: () => n, toc: () => c }));
   const n = JSON.parse('{"id":"community/events/community-bijeenkomst-2","title":"Communitybijeenkomst 18 oktober 2024","description":"Volgende week vrijdag 18 oktober is de 2e communitybijeenkomst van NL Design System, ben jij er ook?","source":"@site/docs/community/events/community-bijeenkomst-2.mdx","sourceDirName":"community/events","slug":"/events/communitybijeenkomst-18-10-2024","permalink":"/events/communitybijeenkomst-18-10-2024","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/community-bijeenkomst-2.mdx","tags":[],"version":"current","frontMatter":{"title":"Communitybijeenkomst 18 oktober 2024","hide_title":true,"hide_table_of_contents":false,"unlisted":true,"slug":"/events/communitybijeenkomst-18-10-2024"}}');
   var s = t(86070),
    r = t(18439),
    a = t(31641);
   const l = { title: 'Communitybijeenkomst 18 oktober 2024', hide_title: !0, hide_table_of_contents: !1, unlisted: !0, slug: '/events/communitybijeenkomst-18-10-2024' },
    o = 'Communitybijeenkomst',
    d = {},
    c = [];
   function m(e) {
    const i = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(i.header, { children: (0, s.jsx)(i.h1, { id: 'communitybijeenkomst', children: 'Communitybijeenkomst' }) }), '\n', (0, s.jsx)(i.p, { children: 'Volgende week vrijdag 18 oktober is de 2e communitybijeenkomst van NL Design System, ben jij er ook?\nNL Design System bestaat uit een groep enthousiaste Designers, Developers, Accessibility specialisten, Product Owners en Design System liefhebbers die voornamelijk online samenwerken.' }), '\n', (0, s.jsx)(i.p, { children: 'Deze Communitybijeenkomst is d\xe9 kans om elkaar te ontmoeten, kennis uit te wisselen en samenwerking te vieren onder het genot van een drankje en een hapje.' }), '\n', (0, s.jsxs)(i.ul, { children: ['\n', (0, s.jsxs)(i.li, { children: ['\ud83d\udcc6 ', (0, s.jsx)(i.strong, { children: 'Wanneer' }), ': 18 oktober van 16:00 uur tot 18:30 uur.'] }), '\n', (0, s.jsxs)(i.li, { children: ['\ud83c\udf0d ', (0, s.jsx)(i.strong, { children: 'Waar' }), ': ', (0, s.jsx)(i.a, { href: 'https://danel-utrecht.nl', children: 'Bar Danel' }), ', direct naast Utrecht Centraal.'] }), '\n', (0, s.jsxs)(i.li, { children: ['\ud83e\udef5 ', (0, s.jsx)(i.strong, { children: 'Voor wie?' }), ': Iedereen die met ons samenwerkt \xe9n alle nieuwe mensen die graag mee willen doen met de NL Design System Community.'] }), '\n'] }), '\n', (0, s.jsx)(a.W, { listId: 'w6sbgdln0j', emailFieldId: 'oYQvVF1C4s', firstNameFieldId: 'AFUcmITRwf', thanksPage: 'https://nldesignsystem.nl/community/communitybijeenkomst-18-10-2024/bedankt', laPostaId: 'iyihtuzpiq', submitText: 'Ik ben erbij!' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, r.R)(), ...e.components };
    return i ? (0, s.jsx)(i, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
  },
  46847(e, i, t) {
   t.d(i, { $: () => n.$n });
   var n = t(50805);
  },
  90515(e, i, t) {
   t.d(i, { c: () => s });
   var n = t(30758);
   function s() {
    const [e, i] = (0, n.useState)();
    return ((0, n.useEffect)(() => i(!0), []), e);
   }
  },
 },
]);
