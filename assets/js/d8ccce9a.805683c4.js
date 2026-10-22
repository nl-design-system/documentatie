'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [43047],
 {
  31641(e, i, n) {
   n.d(i, { W: () => u });
   var t = n(29181),
    r = n(46847),
    s = n(56561),
    a = n(30758),
    o = n(27890),
    d = n(90515),
    l = n(13526),
    c = n(86070);
   const u = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: u = '', firstNameFieldId: m = '', orgId: h = '', interestsId: p = '', interestsLegend: j = 'Waar wil je NL Design System voor gebruiken?', interests: g = [], interestsRequired: x = !1, disallowedInterestValues: y = [], workAreasId: v = '', privacyPolicyId: f = '', language: b, submitText: k = '', talkTitleId: $ = '', talkDescriptionId: w = '', roleId: I = '', roleLegend: S = 'Wat is jouw rol?', roles: R = [], roleRequired: D = !1 }) => {
    const {
      register: N,
      handleSubmit: B,
      formState: { errors: T },
     } = (0, o.mN)({ mode: 'onBlur' }),
     _ = (0, a.useRef)(null),
     F = '2' === b?.value,
     q = (0, d.c)() ? window.location.search : '',
     z = new URLSearchParams(q),
     M = z.get('prefillEmail'),
     W = z.get('prefillName'),
     C =
      !!(p && g.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let r = 0; r < e.length; r++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(g, y);
    return (0, c.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: _,
     onSubmit: B(() => {
      _.current.submit();
     }),
     children: [(0, c.jsxs)(t.zB, { type: 'email', children: [(0, c.jsx)(s.f, { children: (0, c.jsx)(t.lR, { htmlFor: `id-${u}`, children: F ? 'Email address ' : 'E-mailadres' }) }), T[u] && (0, c.jsx)(t.YB, { role: 'alert', id: `${u}-error`, children: T[u].message }), (0, c.jsx)(s.f, { children: (0, c.jsx)(t.Rj, { id: `id-${u}`, name: u, type: 'email', autoComplete: 'email', defaultValue: M, 'aria-required': 'true', 'aria-describedby': T[u] && `${u}-error`, ...N(`${u}`, { required: { value: !0, message: F ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: F ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!T[u] }) })] }), (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsx)(s.f, { children: (0, c.jsx)(t.lR, { htmlFor: m, children: F ? 'Name' : 'Naam' }) }), T[m] && (0, c.jsx)(t.YB, { role: 'alert', id: `${m}-error`, children: T[m].message }), (0, c.jsx)(s.f, { children: (0, c.jsx)(t.Rj, { id: m, name: m, type: 'text', defaultValue: W, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': T[m] && `${m}-error`, ...N(`${m}`, { required: { value: !0, message: F ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!T[m] }) })] }), $ && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsxs)(s.f, { children: [(0, c.jsx)(t.lR, { htmlFor: $, children: F ? 'Title of your talk' : 'Titel van je presentatie' }), (0, c.jsx)(t.JM, { id: `${$}-description`, children: F ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, c.jsx)(s.f, { children: (0, c.jsx)(t.Rj, { id: $, name: $, 'aria-describedby': `${$}-description`, ...N($, { required: { value: !0, message: F ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsxs)(s.f, { children: [(0, c.jsx)(t.lR, { htmlFor: w, children: F ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, c.jsx)(t.JM, { id: `${w}-description`, children: F ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, c.jsx)(s.f, { children: (0, c.jsx)(t.TM, { id: w, name: w, rows: 12, 'aria-describedby': `${w}-description`, ...N(w, { required: { value: !0, message: F ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsx)(s.f, { children: (0, c.jsx)(t.lR, { htmlFor: h, children: F ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), T[h] && (0, c.jsx)(t.YB, { children: T[h].message }), (0, c.jsx)(s.f, { children: (0, c.jsx)(t.Rj, { id: h, name: h, type: 'text', autoComplete: 'organization' }) })] }), p && (0, c.jsxs)(t.LB, { 'aria-describedby': `${p}-description`, children: [(0, c.jsxs)(t.u4, { children: [j, !x && ' (niet verplicht)'] }), (0, c.jsx)(t.JM, { id: `${p}-description`, children: 'Meerdere antwoorden mogelijk.' }), g.map((e, i) => (0, c.jsxs)(t.zB, { type: 'checkbox', children: [(0, c.jsx)(t.Sc, { name: `${p}[]`, value: C[i], id: `${p}-${C[i]}` }), (0, c.jsx)(t.lR, { type: 'checkbox', htmlFor: `${p}-${C[i]}`, children: e })] }, e))] }), I && (0, c.jsxs)(t.LB, { 'aria-describedby': `${I}-description`, children: [(0, c.jsxs)(t.u4, { children: [S, !D && ' (niet verplicht)'] }), (0, c.jsx)(t.JM, { id: `${I}-description`, children: 'Meerdere antwoorden mogelijk.' }), R.map((e, i) => (0, c.jsxs)(t.zB, { type: 'checkbox', children: [(0, c.jsx)(t.Sc, { name: `${I}[]`, id: `${I}-${i}` }), (0, c.jsx)(t.lR, { type: 'checkbox', htmlFor: `${I}-${i}`, children: e })] }, e))] }), v && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsxs)(s.f, { children: [(0, c.jsx)(t.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, c.jsx)(t.JM, { id: `${v}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, c.jsx)(s.f, { children: (0, c.jsx)(t.TM, { id: v, name: v, 'aria-describedby': `${v}-description` }) })] }), f && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsx)(t.JM, { id: `${f}-description`, children: F ? (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, c.jsxs)(t.zB, { type: 'checkbox', children: [(0, c.jsx)(t.Sc, { value: '1', id: `${f}-1`, 'aria-describedby': (0, l.A)({ [`${f}-description`]: !0, [`${f}-error`]: T[f] }), 'aria-required': 'true', ...N(`${f}[]`, { required: { value: !0, message: F ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!T[`${f}`] }), (0, c.jsx)(t.lR, { type: 'checkbox', htmlFor: `${f}-1`, children: F ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), T[`${f}`] && (0, c.jsx)(t.YB, { role: 'alert', id: `${f}-error`, children: T[`${f}`].message })] }), b?.id && (0, c.jsx)('input', { type: 'hidden', name: b.id, value: b.value }), (0, c.jsx)(t.e2, { children: (0, c.jsx)(r.$, { type: 'submit', purpose: 'primary', children: k || (F ? 'Sign up' : 'Aanmelden') }) }), (0, c.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, c.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, c.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, c.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, c.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, i, n) {
   n.d(i, { $: () => t.$n });
   var t = n(50805);
  },
  75900(e, i, n) {
   (n.r(i), n.d(i, { assets: () => d, contentTitle: () => o, default: () => u, frontMatter: () => a, metadata: () => t, toc: () => l }));
   const t = JSON.parse('{"id":"community/events/introduction-european-design-systems","title":"Introduction into European Design Systems 2025","description":"Denmark, Greece, Italy and Portugal introduced their design systems at User Needs First International Conference in Amsterdam. We\'ve started a dialog to identify areas where we can support and learn from one another, fostering a stronger and more connected community.","source":"@site/docs/community/events/introduction-european-design-systems.mdx","sourceDirName":"community/events","slug":"/community/events/introduction-european-design-systems-2025","permalink":"/community/events/introduction-european-design-systems-2025","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/introduction-european-design-systems.mdx","tags":[],"version":"current","frontMatter":{"title":"Introduction into European Design Systems 2025","hide_title":true,"hide_table_of_contents":false,"unlisted":true,"slug":"/community/events/introduction-european-design-systems-2025"}}');
   var r = n(86070),
    s = n(18439);
   n(31641);
   const a = { title: 'Introduction into European Design Systems 2025', hide_title: !0, hide_table_of_contents: !1, unlisted: !0, slug: '/community/events/introduction-european-design-systems-2025' },
    o = 'Introduction into European Design Systems 2025',
    d = {},
    l = [];
   function c(e) {
    const i = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(i.header, { children: (0, r.jsx)(i.h1, { id: 'introduction-into-european-design-systems-2025', children: 'Introduction into European Design Systems 2025' }) }), '\n', (0, r.jsx)(i.p, { children: "Denmark, Greece, Italy and Portugal introduced their design systems at User Needs First International Conference in Amsterdam. We've started a dialog to identify areas where we can support and learn from one another, fostering a stronger and more connected community." }), '\n', (0, r.jsxs)(i.p, { children: [(0, r.jsx)(i.strong, { children: 'The event has already taken place' }), '. You can no longer sign up.'] }), '\n', (0, r.jsxs)(i.ul, { children: ['\n', (0, r.jsxs)(i.li, { children: ['\ud83d\udcc6 ', (0, r.jsx)(i.strong, { children: 'When' }), ': April 10th from 13:30 to 14:45 CEST.'] }), '\n', (0, r.jsxs)(i.li, { children: ['\ud83c\udf0d ', (0, r.jsx)(i.strong, { children: 'Where' }), ': In Amsterdam as part of the ', (0, r.jsx)(i.a, { href: 'https://international.gebruikercentraal.nl/conference2025/', children: 'User Needs First International Conference 2025' }), ' and online via Microsoft Teams.'] }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, s.R)(), ...e.components };
    return i ? (0, r.jsx)(i, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
  },
  90515(e, i, n) {
   n.d(i, { c: () => r });
   var t = n(30758);
   function r() {
    const [e, i] = (0, t.useState)();
    return ((0, t.useEffect)(() => i(!0), []), e);
   }
  },
 },
]);
