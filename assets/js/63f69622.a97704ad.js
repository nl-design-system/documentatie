'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25095],
 {
  45186(e, i, n) {
   n.d(i, { c: () => s });
   var t = n(30758);
   function s() {
    const [e, i] = (0, t.useState)();
    return ((0, t.useEffect)(() => i(!0), []), e);
   }
  },
  75812(e, i, n) {
   n.d(i, { W: () => c });
   var t = n(29181),
    s = n(89974),
    r = n(56561),
    a = n(30758),
    l = n(27890),
    o = n(45186),
    d = n(86070);
   const c = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: c = '', firstNameFieldId: m = '', orgId: u = '', interestsId: h = '', interestsLegend: j = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: x = !1, disallowedInterestValues: y = [], workAreasId: g = '', privacyPolicyId: v = '', language: k, submitText: b = '', talkTitleId: f = '', talkDescriptionId: w = '', roleId: I = '', roleLegend: $ = 'Wat is jouw rol?', roles: D = [], roleRequired: N = !1 }) => {
    const {
      register: R,
      handleSubmit: S,
      formState: { errors: B },
     } = (0, l.mN)(),
     C = (0, a.useRef)(null),
     F = '2' === k?.value,
     _ = (0, o.c)() ? window.location.search : '',
     T = new URLSearchParams(_),
     q = T.get('prefillEmail'),
     z = T.get('prefillName'),
     L =
      !!(h && p.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(p, y);
    return (0, d.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: C,
     onSubmit: S(() => {
      C.current.submit();
     }),
     children: [(0, d.jsxs)(t.zB, { type: 'email', children: [(0, d.jsx)(r.f, { children: (0, d.jsx)(t.lR, { htmlFor: `id-${c}`, children: F ? 'Email address ' : 'E-mailadres' }) }), B[c] && (0, d.jsx)(t.YB, { children: B[c].message }), (0, d.jsx)(r.f, { children: (0, d.jsx)(t.Rj, { id: `id-${c}`, name: c, type: 'email', autoComplete: 'email', defaultValue: q, 'aria-required': 'true', ...R(`${c}`, { required: { value: !0, message: F ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: F ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!B[c] }) })] }), (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(r.f, { children: (0, d.jsx)(t.lR, { htmlFor: m, children: F ? 'Name' : 'Naam' }) }), B[m] && (0, d.jsx)(t.YB, { children: B[m].message }), (0, d.jsx)(r.f, { children: (0, d.jsx)(t.Rj, { id: m, name: m, type: 'text', defaultValue: z, autoComplete: 'given-name', 'aria-required': 'true', ...R(`${m}`, { required: { value: !0, message: F ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!B[m] }) })] }), f && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(r.f, { children: [(0, d.jsx)(t.lR, { htmlFor: f, children: F ? 'Title of your talk' : 'Titel van je presentatie' }), (0, d.jsx)(t.JM, { children: F ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, d.jsx)(r.f, { children: (0, d.jsx)(t.Rj, { id: f, name: f, ...R(f, { required: { value: !0, message: F ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(r.f, { children: [(0, d.jsx)(t.lR, { htmlFor: w, children: F ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, d.jsx)(t.JM, { children: F ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, d.jsx)(r.f, { children: (0, d.jsx)(t.TM, { id: w, name: w, rows: 12, ...R(w, { required: { value: !0, message: F ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(r.f, { children: (0, d.jsx)(t.lR, { htmlFor: u, children: F ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), B[u] && (0, d.jsx)(t.YB, { children: B[u].message }), (0, d.jsx)(r.f, { children: (0, d.jsx)(t.Rj, { id: u, name: u, type: 'text' }) })] }), h && (0, d.jsxs)(t.LB, { children: [(0, d.jsx)(r.f, { children: (0, d.jsxs)(t.u4, { children: [j, !x && ' (niet verplicht)'] }) }), (0, d.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, i) => (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { name: `${h}[]`, value: L[i], id: `${h}-${L[i]}` }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${h}-${L[i]}`, children: e })] }, e))] }), I && (0, d.jsxs)(t.LB, { children: [(0, d.jsx)(r.f, { children: (0, d.jsxs)(t.u4, { children: [$, !N && ' (niet verplicht)'] }) }), (0, d.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), D.map((e, i) => (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { name: `${I}[]`, id: `${I}-${i}` }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${I}-${i}`, children: e })] }, e))] }), g && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(r.f, { children: [(0, d.jsx)(t.lR, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, d.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, d.jsx)(r.f, { children: (0, d.jsx)(t.TM, { id: g, name: g }) })] }), v && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(t.JM, { id: `${v}-description`, children: F ? (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...R(`${v}[]`, { required: { value: !0, message: F ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!B[`${v}[]`] }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${v}-1`, children: F ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), B[v] && (0, d.jsx)(t.YB, { children: B[v].message })] }), k?.id && (0, d.jsx)('input', { type: 'hidden', name: k.id, value: k.value }), (0, d.jsx)(t.e2, { children: (0, d.jsx)(s.$, { type: 'submit', purpose: 'primary', children: b || (F ? 'Sign up' : 'Aanmelden') }) }), (0, d.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, d.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, d.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, d.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, d.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  78501(e, i, n) {
   (n.r(i), n.d(i, { assets: () => d, contentTitle: () => o, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/events/community-bijeenkomst-2","title":"Communitybijeenkomst 18 oktober 2024","description":"Volgende week vrijdag 18 oktober is de 2e communitybijeenkomst van NL Design System, ben jij er ook?","source":"@site/docs/community/events/community-bijeenkomst-2.mdx","sourceDirName":"community/events","slug":"/events/communitybijeenkomst-18-10-2024","permalink":"/events/communitybijeenkomst-18-10-2024","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/community-bijeenkomst-2.mdx","tags":[],"version":"current","frontMatter":{"title":"Communitybijeenkomst 18 oktober 2024","hide_title":true,"hide_table_of_contents":false,"unlisted":true,"slug":"/events/communitybijeenkomst-18-10-2024"}}');
   var s = n(86070),
    r = n(18439),
    a = n(75812);
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
  89974(e, i, n) {
   n.d(i, { $: () => t.$n });
   var t = n(50805);
  },
 },
]);
