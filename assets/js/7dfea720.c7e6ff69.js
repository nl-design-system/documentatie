'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [82151],
 {
  37447(e, s, t) {
   t.d(s, { W: () => d });
   var i = t(29181),
    n = t(30758),
    r = t(27890),
    a = t(54565),
    l = t(86070);
   const d = ({ listId: e = '', laPostaId: s = '', thanksPage: t = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: c = '', interestsId: m = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: h = [], interestsRequired: p = !1, disallowedInterestValues: j = [], workAreasId: v = '', privacyPolicyId: x = '', language: g, submitText: y = '', talkTitleId: k = '', talkDescriptionId: f = '', roleId: b = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: S = !1 }) => {
    const {
      register: _,
      handleSubmit: R,
      formState: { errors: $ },
     } = (0, r.mN)(),
     B = (0, n.useRef)(null),
     I = '2' === g?.value,
     D = (0, a.c)() ? window.location.search : '',
     q = new URLSearchParams(D),
     T = q.get('prefillEmail'),
     W = q.get('prefillName'),
     F =
      !!(m && h.length > 0) &&
      ((e, s) => {
       const t = [];
       let i = 1;
       for (let n = 0; n < e.length; n++) {
        for (; s.includes(i); ) i++;
        (t.push(i), i++);
       }
       return t;
      })(h, j);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: B,
     onSubmit: R(() => {
      B.current.submit();
     }),
     children: [(0, l.jsxs)(i.zB, { type: 'email', children: [(0, l.jsx)(i.fz, { children: (0, l.jsx)(i.lR, { htmlFor: `id-${d}`, children: I ? 'Email address ' : 'E-mailadres' }) }), $[d] && (0, l.jsx)(i.YB, { children: $[d].message }), (0, l.jsx)(i.fz, { children: (0, l.jsx)(i.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: T, 'aria-required': 'true', ..._(`${d}`, { required: { value: !0, message: I ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: I ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!$[d] }) })] }), (0, l.jsxs)(i.zB, { type: 'text', children: [(0, l.jsx)(i.fz, { children: (0, l.jsx)(i.lR, { htmlFor: o, children: I ? 'Name' : 'Naam' }) }), $[o] && (0, l.jsx)(i.YB, { children: $[o].message }), (0, l.jsx)(i.fz, { children: (0, l.jsx)(i.Rj, { id: o, name: o, type: 'text', defaultValue: W, autoComplete: 'given-name', 'aria-required': 'true', ..._(`${o}`, { required: { value: !0, message: I ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!$[o] }) })] }), k && (0, l.jsxs)(i.zB, { type: 'text', children: [(0, l.jsxs)(i.fz, { children: [(0, l.jsx)(i.lR, { htmlFor: k, children: I ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(i.JM, { children: I ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(i.fz, { children: (0, l.jsx)(i.Rj, { id: k, name: k, ..._(k, { required: { value: !0, message: I ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, l.jsxs)(i.zB, { type: 'text', children: [(0, l.jsxs)(i.fz, { children: [(0, l.jsx)(i.lR, { htmlFor: f, children: I ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(i.JM, { children: I ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(i.fz, { children: (0, l.jsx)(i.TM, { id: f, name: f, rows: 12, ..._(f, { required: { value: !0, message: I ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(i.zB, { type: 'text', children: [(0, l.jsx)(i.fz, { children: (0, l.jsx)(i.lR, { htmlFor: c, children: I ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), $[c] && (0, l.jsx)(i.YB, { children: $[c].message }), (0, l.jsx)(i.fz, { children: (0, l.jsx)(i.Rj, { id: c, name: c, type: 'text' }) })] }), m && (0, l.jsxs)(i.LB, { children: [(0, l.jsx)(i.fz, { children: (0, l.jsxs)(i.u4, { children: [u, !p && ' (niet verplicht)'] }) }), (0, l.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, s) => (0, l.jsxs)(i.zB, { type: 'checkbox', children: [(0, l.jsx)(i.Sc, { name: `${m}[]`, value: F[s], id: `${m}-${F[s]}` }), (0, l.jsx)(i.lR, { htmlFor: `${m}-${F[s]}`, children: e })] }, e))] }), b && (0, l.jsxs)(i.LB, { children: [(0, l.jsx)(i.fz, { children: (0, l.jsxs)(i.u4, { children: [w, !S && ' (niet verplicht)'] }) }), (0, l.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, s) => (0, l.jsxs)(i.zB, { type: 'checkbox', children: [(0, l.jsx)(i.Sc, { name: `${b}[]`, id: `${b}-${s}` }), (0, l.jsx)(i.lR, { htmlFor: `${b}-${s}`, children: e })] }, e))] }), v && (0, l.jsxs)(i.zB, { type: 'text', children: [(0, l.jsxs)(i.fz, { children: [(0, l.jsx)(i.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(i.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(i.fz, { children: (0, l.jsx)(i.TM, { id: v, name: v }) })] }), x && (0, l.jsxs)(i.zB, { type: 'text', children: [(0, l.jsx)(i.JM, { id: `${x}-description`, children: I ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(i.zB, { type: 'checkbox', children: [(0, l.jsx)(i.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ..._(`${x}[]`, { required: { value: !0, message: I ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!$[`${x}[]`] }), (0, l.jsx)(i.lR, { htmlFor: `${x}-1`, children: I ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), $[x] && (0, l.jsx)(i.YB, { children: $[x].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(i.e2, { children: (0, l.jsx)(i.$n, { type: 'submit', appearance: 'primary-action-button', children: y || (I ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  54565(e, s, t) {
   t.d(s, { c: () => n });
   var i = t(30758);
   function n() {
    const [e, s] = (0, i.useState)();
    return ((0, i.useEffect)(() => s(!0), []), e);
   }
  },
  76861(e, s, t) {
   (t.r(s), t.d(s, { assets: () => d, contentTitle: () => l, default: () => m, frontMatter: () => a, metadata: () => i, toc: () => o }));
   const i = JSON.parse('{"id":"community/events/design-systems-week/sessie-voorstellen-bedankt","title":"Sessie voorstellen","description":"We zijn druk bezig om het programma van de week samen te stellen en laten je weten of jouw presentatie past!","source":"@site/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week/sessie-voorstellen/bedankt","permalink":"/events/design-systems-week/sessie-voorstellen/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx","tags":[],"version":"current","frontMatter":{"title":"Sessie voorstellen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sessie voorstellen","pagination_label":"Sessie voorstellen","slug":"/events/design-systems-week/sessie-voorstellen/bedankt","unlisted":true,"displayed_sidebar":"community"},"sidebar":"community"}');
   var n = t(86070),
    r = t(18439);
   t(37447);
   const a = { title: 'Sessie voorstellen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sessie voorstellen', pagination_label: 'Sessie voorstellen', slug: '/events/design-systems-week/sessie-voorstellen/bedankt', unlisted: !0, displayed_sidebar: 'community' },
    l = 'Bedankt voor het aanmelden van een sessie voor Design Systems Week 2025',
    d = {},
    o = [];
   function c(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(s.header, { children: (0, n.jsx)(s.h1, { id: 'bedankt-voor-het-aanmelden-van-een-sessie-voor-design-systems-week-2025', children: 'Bedankt voor het aanmelden van een sessie voor Design Systems Week 2025' }) }), '\n', (0, n.jsx)(s.p, { children: 'We zijn druk bezig om het programma van de week samen te stellen en laten je weten of jouw presentatie past!' })] });
   }
   function m(e = {}) {
    const { wrapper: s } = { ...(0, r.R)(), ...e.components };
    return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
