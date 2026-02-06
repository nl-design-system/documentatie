'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [82151],
 {
  37447(e, s, i) {
   i.d(s, { W: () => d });
   var t = i(25557),
    n = i(29181),
    r = i(30758),
    a = i(27890),
    l = i(86070);
   const d = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: c = '', interestsId: m = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: u = [], interestsRequired: p = !1, disallowedInterestValues: j = [], workAreasId: v = '', privacyPolicyId: x = '', language: g, submitText: y = '', talkTitleId: k = '', talkDescriptionId: b = '', roleId: f = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: S = !1 }) => {
    const {
      register: _,
      handleSubmit: R,
      formState: { errors: $ },
     } = (0, a.mN)(),
     B = (0, r.useRef)(null),
     D = '2' === g?.value,
     { search: I } = (0, t.zy)(),
     W = new URLSearchParams(I),
     q = W.get('prefillEmail'),
     T = W.get('prefillName'),
     F =
      !!(m && u.length > 0) &&
      ((e, s) => {
       const i = [];
       let t = 1;
       for (let n = 0; n < e.length; n++) {
        for (; s.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(u, j);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: B,
     onSubmit: R(() => {
      B.current.submit();
     }),
     children: [(0, l.jsxs)(n.zB, { type: 'email', children: [(0, l.jsx)(n.fz, { children: (0, l.jsx)(n.lR, { htmlFor: `id-${d}`, children: D ? 'Email address ' : 'E-mailadres' }) }), $[d] && (0, l.jsx)(n.YB, { children: $[d].message }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: q, 'aria-required': 'true', ..._(`${d}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: D ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!$[d] }) })] }), (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsx)(n.fz, { children: (0, l.jsx)(n.lR, { htmlFor: o, children: D ? 'Name' : 'Naam' }) }), $[o] && (0, l.jsx)(n.YB, { children: $[o].message }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: o, name: o, type: 'text', defaultValue: T, autoComplete: 'given-name', 'aria-required': 'true', ..._(`${o}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!$[o] }) })] }), k && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsxs)(n.fz, { children: [(0, l.jsx)(n.lR, { htmlFor: k, children: D ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(n.JM, { children: D ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: k, name: k, ..._(k, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsxs)(n.fz, { children: [(0, l.jsx)(n.lR, { htmlFor: b, children: D ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(n.JM, { children: D ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.TM, { id: b, name: b, rows: 12, ..._(b, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsx)(n.fz, { children: (0, l.jsx)(n.lR, { htmlFor: c, children: D ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), $[c] && (0, l.jsx)(n.YB, { children: $[c].message }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: c, name: c, type: 'text' }) })] }), m && (0, l.jsxs)(n.LB, { children: [(0, l.jsx)(n.fz, { children: (0, l.jsxs)(n.u4, { children: [h, !p && ' (niet verplicht)'] }) }), (0, l.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, s) => (0, l.jsxs)(n.zB, { type: 'checkbox', children: [(0, l.jsx)(n.Sc, { name: `${m}[]`, value: F[s], id: `${m}-${F[s]}` }), (0, l.jsx)(n.lR, { htmlFor: `${m}-${F[s]}`, children: e })] }, e))] }), f && (0, l.jsxs)(n.LB, { children: [(0, l.jsx)(n.fz, { children: (0, l.jsxs)(n.u4, { children: [w, !S && ' (niet verplicht)'] }) }), (0, l.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, s) => (0, l.jsxs)(n.zB, { type: 'checkbox', children: [(0, l.jsx)(n.Sc, { name: `${f}[]`, id: `${f}-${s}` }), (0, l.jsx)(n.lR, { htmlFor: `${f}-${s}`, children: e })] }, e))] }), v && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsxs)(n.fz, { children: [(0, l.jsx)(n.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(n.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.TM, { id: v, name: v }) })] }), x && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsx)(n.JM, { id: `${x}-description`, children: D ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(n.zB, { type: 'checkbox', children: [(0, l.jsx)(n.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ..._(`${x}[]`, { required: { value: !0, message: D ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!$[`${x}[]`] }), (0, l.jsx)(n.lR, { htmlFor: `${x}-1`, children: D ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), $[x] && (0, l.jsx)(n.YB, { children: $[x].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(n.e2, { children: (0, l.jsx)(n.$n, { type: 'submit', appearance: 'primary-action-button', children: y || (D ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  76861(e, s, i) {
   (i.r(s), i.d(s, { assets: () => d, contentTitle: () => l, default: () => m, frontMatter: () => a, metadata: () => t, toc: () => o }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/sessie-voorstellen-bedankt","title":"Sessie voorstellen \xb7 Design Systems Week","description":"We zijn druk bezig om het programma van de week samen te stellen en laten je weten of jouw presentatie past!","source":"@site/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week/sessie-voorstellen/bedankt","permalink":"/events/design-systems-week/sessie-voorstellen/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx","tags":[],"version":"current","frontMatter":{"title":"Sessie voorstellen \xb7 Design Systems Week","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sessie voorstellen","pagination_label":"Sessie voorstellen","slug":"/events/design-systems-week/sessie-voorstellen/bedankt","unlisted":true,"displayed_sidebar":"community"},"sidebar":"community"}');
   var n = i(86070),
    r = i(18439);
   i(37447);
   const a = { title: 'Sessie voorstellen \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sessie voorstellen', pagination_label: 'Sessie voorstellen', slug: '/events/design-systems-week/sessie-voorstellen/bedankt', unlisted: !0, displayed_sidebar: 'community' },
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
