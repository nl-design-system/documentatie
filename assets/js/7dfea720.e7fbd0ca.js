'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [82151],
 {
  46565(e, s, t) {
   t.d(s, { c: () => n });
   var i = t(30758);
   function n() {
    const [e, s] = (0, i.useState)();
    return ((0, i.useEffect)(() => s(!0), []), e);
   }
  },
  76861(e, s, t) {
   (t.r(s), t.d(s, { assets: () => d, contentTitle: () => l, default: () => m, frontMatter: () => r, metadata: () => i, toc: () => o }));
   const i = JSON.parse('{"id":"community/events/design-systems-week/sessie-voorstellen-bedankt","title":"Sessie voorstellen","description":"We zijn druk bezig om het programma van de week samen te stellen en laten je weten of jouw presentatie past!","source":"@site/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week/sessie-voorstellen/bedankt","permalink":"/events/design-systems-week/sessie-voorstellen/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx","tags":[],"version":"current","frontMatter":{"title":"Sessie voorstellen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sessie voorstellen","pagination_label":"Sessie voorstellen","slug":"/events/design-systems-week/sessie-voorstellen/bedankt","unlisted":true,"displayed_sidebar":"community"},"sidebar":"community"}');
   var n = t(86070),
    a = t(18439);
   t(78599);
   const r = { title: 'Sessie voorstellen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sessie voorstellen', pagination_label: 'Sessie voorstellen', slug: '/events/design-systems-week/sessie-voorstellen/bedankt', unlisted: !0, displayed_sidebar: 'community' },
    l = 'Bedankt voor het aanmelden van een sessie voor Design Systems Week 2025',
    d = {},
    o = [];
   function c(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(s.header, { children: (0, n.jsx)(s.h1, { id: 'bedankt-voor-het-aanmelden-van-een-sessie-voor-design-systems-week-2025', children: 'Bedankt voor het aanmelden van een sessie voor Design Systems Week 2025' }) }), '\n', (0, n.jsx)(s.p, { children: 'We zijn druk bezig om het programma van de week samen te stellen en laten je weten of jouw presentatie past!' })] });
   }
   function m(e = {}) {
    const { wrapper: s } = { ...(0, a.R)(), ...e.components };
    return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(c, { ...e }) }) : c(e);
   }
  },
  78599(e, s, t) {
   t.d(s, { W: () => o });
   var i = t(29181),
    n = t(56561),
    a = t(30758),
    r = t(27890),
    l = t(46565),
    d = t(86070);
   const o = ({ listId: e = '', laPostaId: s = '', thanksPage: t = '', emailFieldId: o = '', firstNameFieldId: c = '', orgId: m = '', interestsId: h = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: j = !1, disallowedInterestValues: v = [], workAreasId: x = '', privacyPolicyId: g = '', language: y, submitText: k = '', talkTitleId: b = '', talkDescriptionId: f = '', roleId: w = '', roleLegend: S = 'Wat is jouw rol?', roles: _ = [], roleRequired: R = !1 }) => {
    const {
      register: $,
      handleSubmit: B,
      formState: { errors: I },
     } = (0, r.mN)(),
     N = (0, a.useRef)(null),
     z = '2' === y?.value,
     D = (0, l.c)() ? window.location.search : '',
     q = new URLSearchParams(D),
     T = q.get('prefillEmail'),
     W = q.get('prefillName'),
     F =
      !!(h && p.length > 0) &&
      ((e, s) => {
       const t = [];
       let i = 1;
       for (let n = 0; n < e.length; n++) {
        for (; s.includes(i); ) i++;
        (t.push(i), i++);
       }
       return t;
      })(p, v);
    return (0, d.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: N,
     onSubmit: B(() => {
      N.current.submit();
     }),
     children: [(0, d.jsxs)(i.zB, { type: 'email', children: [(0, d.jsx)(n.f, { children: (0, d.jsx)(i.lR, { htmlFor: `id-${o}`, children: z ? 'Email address ' : 'E-mailadres' }) }), I[o] && (0, d.jsx)(i.YB, { children: I[o].message }), (0, d.jsx)(n.f, { children: (0, d.jsx)(i.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: T, 'aria-required': 'true', ...$(`${o}`, { required: { value: !0, message: z ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: z ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!I[o] }) })] }), (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsx)(n.f, { children: (0, d.jsx)(i.lR, { htmlFor: c, children: z ? 'Name' : 'Naam' }) }), I[c] && (0, d.jsx)(i.YB, { children: I[c].message }), (0, d.jsx)(n.f, { children: (0, d.jsx)(i.Rj, { id: c, name: c, type: 'text', defaultValue: W, autoComplete: 'given-name', 'aria-required': 'true', ...$(`${c}`, { required: { value: !0, message: z ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!I[c] }) })] }), b && (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsxs)(n.f, { children: [(0, d.jsx)(i.lR, { htmlFor: b, children: z ? 'Title of your talk' : 'Titel van je presentatie' }), (0, d.jsx)(i.JM, { children: z ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, d.jsx)(n.f, { children: (0, d.jsx)(i.Rj, { id: b, name: b, ...$(b, { required: { value: !0, message: z ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsxs)(n.f, { children: [(0, d.jsx)(i.lR, { htmlFor: f, children: z ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, d.jsx)(i.JM, { children: z ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, d.jsx)(n.f, { children: (0, d.jsx)(i.TM, { id: f, name: f, rows: 12, ...$(f, { required: { value: !0, message: z ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsx)(n.f, { children: (0, d.jsx)(i.lR, { htmlFor: m, children: z ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), I[m] && (0, d.jsx)(i.YB, { children: I[m].message }), (0, d.jsx)(n.f, { children: (0, d.jsx)(i.Rj, { id: m, name: m, type: 'text' }) })] }), h && (0, d.jsxs)(i.LB, { children: [(0, d.jsx)(n.f, { children: (0, d.jsxs)(i.u4, { children: [u, !j && ' (niet verplicht)'] }) }), (0, d.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, s) => (0, d.jsxs)(i.zB, { type: 'checkbox', children: [(0, d.jsx)(i.Sc, { name: `${h}[]`, value: F[s], id: `${h}-${F[s]}` }), (0, d.jsx)(i.lR, { type: 'checkbox', htmlFor: `${h}-${F[s]}`, children: e })] }, e))] }), w && (0, d.jsxs)(i.LB, { children: [(0, d.jsx)(n.f, { children: (0, d.jsxs)(i.u4, { children: [S, !R && ' (niet verplicht)'] }) }), (0, d.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), _.map((e, s) => (0, d.jsxs)(i.zB, { type: 'checkbox', children: [(0, d.jsx)(i.Sc, { name: `${w}[]`, id: `${w}-${s}` }), (0, d.jsx)(i.lR, { type: 'checkbox', htmlFor: `${w}-${s}`, children: e })] }, e))] }), x && (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsxs)(n.f, { children: [(0, d.jsx)(i.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, d.jsx)(i.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, d.jsx)(n.f, { children: (0, d.jsx)(i.TM, { id: x, name: x }) })] }), g && (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsx)(i.JM, { id: `${g}-description`, children: z ? (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, d.jsxs)(i.zB, { type: 'checkbox', children: [(0, d.jsx)(i.Sc, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...$(`${g}[]`, { required: { value: !0, message: z ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!I[`${g}[]`] }), (0, d.jsx)(i.lR, { type: 'checkbox', htmlFor: `${g}-1`, children: z ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), I[g] && (0, d.jsx)(i.YB, { children: I[g].message })] }), y?.id && (0, d.jsx)('input', { type: 'hidden', name: y.id, value: y.value }), (0, d.jsx)(i.e2, { children: (0, d.jsx)(i.$n, { type: 'submit', appearance: 'primary-action-button', children: k || (z ? 'Sign up' : 'Aanmelden') }) }), (0, d.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, d.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, d.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, d.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, d.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
