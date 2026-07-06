'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25095],
 {
  22331(e, i, n) {
   (n.r(i), n.d(i, { assets: () => d, contentTitle: () => o, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/events/community-bijeenkomst-2","title":"Communitybijeenkomst 18 oktober 2024","description":"Volgende week vrijdag 18 oktober is de 2e communitybijeenkomst van NL Design System, ben jij er ook?","source":"@site/docs/community/events/community-bijeenkomst-2.mdx","sourceDirName":"community/events","slug":"/events/communitybijeenkomst-18-10-2024","permalink":"/events/communitybijeenkomst-18-10-2024","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/community-bijeenkomst-2.mdx","tags":[],"version":"current","frontMatter":{"title":"Communitybijeenkomst 18 oktober 2024","hide_title":true,"hide_table_of_contents":false,"unlisted":true,"slug":"/events/communitybijeenkomst-18-10-2024"}}');
   var s = n(86070),
    r = n(18439),
    a = n(78599);
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
  46565(e, i, n) {
   n.d(i, { c: () => s });
   var t = n(30758);
   function s() {
    const [e, i] = (0, t.useState)();
    return ((0, t.useEffect)(() => i(!0), []), e);
   }
  },
  78599(e, i, n) {
   n.d(i, { W: () => d });
   var t = n(29181),
    s = n(56561),
    r = n(30758),
    a = n(27890),
    l = n(46565),
    o = n(86070);
   const d = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: m = '', interestsId: u = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: p = !1, disallowedInterestValues: x = [], workAreasId: y = '', privacyPolicyId: g = '', language: v, submitText: k = '', talkTitleId: b = '', talkDescriptionId: f = '', roleId: w = '', roleLegend: I = 'Wat is jouw rol?', roles: D = [], roleRequired: N = !1 }) => {
    const {
      register: R,
      handleSubmit: S,
      formState: { errors: $ },
     } = (0, a.mN)(),
     B = (0, r.useRef)(null),
     C = '2' === v?.value,
     F = (0, l.c)() ? window.location.search : '',
     _ = new URLSearchParams(F),
     T = _.get('prefillEmail'),
     q = _.get('prefillName'),
     z =
      !!(u && j.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(j, x);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: B,
     onSubmit: S(() => {
      B.current.submit();
     }),
     children: [(0, o.jsxs)(t.zB, { type: 'email', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(t.lR, { htmlFor: `id-${d}`, children: C ? 'Email address ' : 'E-mailadres' }) }), $[d] && (0, o.jsx)(t.YB, { children: $[d].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: T, 'aria-required': 'true', ...R(`${d}`, { required: { value: !0, message: C ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: C ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!$[d] }) })] }), (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(t.lR, { htmlFor: c, children: C ? 'Name' : 'Naam' }) }), $[c] && (0, o.jsx)(t.YB, { children: $[c].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.Rj, { id: c, name: c, type: 'text', defaultValue: q, autoComplete: 'given-name', 'aria-required': 'true', ...R(`${c}`, { required: { value: !0, message: C ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!$[c] }) })] }), b && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(t.lR, { htmlFor: b, children: C ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(t.JM, { children: C ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.Rj, { id: b, name: b, ...R(b, { required: { value: !0, message: C ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(t.lR, { htmlFor: f, children: C ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(t.JM, { children: C ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.TM, { id: f, name: f, rows: 12, ...R(f, { required: { value: !0, message: C ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(t.lR, { htmlFor: m, children: C ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), $[m] && (0, o.jsx)(t.YB, { children: $[m].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.Rj, { id: m, name: m, type: 'text' }) })] }), u && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(s.f, { children: (0, o.jsxs)(t.u4, { children: [h, !p && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, i) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${u}[]`, value: z[i], id: `${u}-${z[i]}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${u}-${z[i]}`, children: e })] }, e))] }), w && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(s.f, { children: (0, o.jsxs)(t.u4, { children: [I, !N && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), D.map((e, i) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${w}[]`, id: `${w}-${i}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${w}-${i}`, children: e })] }, e))] }), y && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(t.lR, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.TM, { id: y, name: y }) })] }), g && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(t.JM, { id: `${g}-description`, children: C ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...R(`${g}[]`, { required: { value: !0, message: C ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!$[`${g}[]`] }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${g}-1`, children: C ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), $[g] && (0, o.jsx)(t.YB, { children: $[g].message })] }), v?.id && (0, o.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, o.jsx)(t.e2, { children: (0, o.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: k || (C ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
