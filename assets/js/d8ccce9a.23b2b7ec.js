'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [43047],
 {
  46565(e, n, t) {
   t.d(n, { c: () => s });
   var i = t(30758);
   function s() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  78599(e, n, t) {
   t.d(n, { W: () => d });
   var i = t(29181),
    s = t(56561),
    r = t(30758),
    a = t(27890),
    l = t(46565),
    o = t(86070);
   const d = ({ listId: e = '', laPostaId: n = '', thanksPage: t = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: u = '', interestsId: m = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: j = !1, disallowedInterestValues: x = [], workAreasId: g = '', privacyPolicyId: y = '', language: v, submitText: f = '', talkTitleId: k = '', talkDescriptionId: b = '', roleId: w = '', roleLegend: I = 'Wat is jouw rol?', roles: S = [], roleRequired: R = !1 }) => {
    const {
      register: $,
      handleSubmit: D,
      formState: { errors: N },
     } = (0, a.mN)(),
     B = (0, r.useRef)(null),
     T = '2' === v?.value,
     _ = (0, l.c)() ? window.location.search : '',
     F = new URLSearchParams(_),
     q = F.get('prefillEmail'),
     M = F.get('prefillName'),
     W =
      !!(m && p.length > 0) &&
      ((e, n) => {
       const t = [];
       let i = 1;
       for (let s = 0; s < e.length; s++) {
        for (; n.includes(i); ) i++;
        (t.push(i), i++);
       }
       return t;
      })(p, x);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: B,
     onSubmit: D(() => {
      B.current.submit();
     }),
     children: [(0, o.jsxs)(i.zB, { type: 'email', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(i.lR, { htmlFor: `id-${d}`, children: T ? 'Email address ' : 'E-mailadres' }) }), N[d] && (0, o.jsx)(i.YB, { children: N[d].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: q, 'aria-required': 'true', ...$(`${d}`, { required: { value: !0, message: T ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: T ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!N[d] }) })] }), (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(i.lR, { htmlFor: c, children: T ? 'Name' : 'Naam' }) }), N[c] && (0, o.jsx)(i.YB, { children: N[c].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.Rj, { id: c, name: c, type: 'text', defaultValue: M, autoComplete: 'given-name', 'aria-required': 'true', ...$(`${c}`, { required: { value: !0, message: T ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!N[c] }) })] }), k && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(i.lR, { htmlFor: k, children: T ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(i.JM, { children: T ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.Rj, { id: k, name: k, ...$(k, { required: { value: !0, message: T ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(i.lR, { htmlFor: b, children: T ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(i.JM, { children: T ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.TM, { id: b, name: b, rows: 12, ...$(b, { required: { value: !0, message: T ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(i.lR, { htmlFor: u, children: T ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), N[u] && (0, o.jsx)(i.YB, { children: N[u].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.Rj, { id: u, name: u, type: 'text' }) })] }), m && (0, o.jsxs)(i.LB, { children: [(0, o.jsx)(s.f, { children: (0, o.jsxs)(i.u4, { children: [h, !j && ' (niet verplicht)'] }) }), (0, o.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, n) => (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { name: `${m}[]`, value: W[n], id: `${m}-${W[n]}` }), (0, o.jsx)(i.lR, { type: 'checkbox', htmlFor: `${m}-${W[n]}`, children: e })] }, e))] }), w && (0, o.jsxs)(i.LB, { children: [(0, o.jsx)(s.f, { children: (0, o.jsxs)(i.u4, { children: [I, !R && ' (niet verplicht)'] }) }), (0, o.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), S.map((e, n) => (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { name: `${w}[]`, id: `${w}-${n}` }), (0, o.jsx)(i.lR, { type: 'checkbox', htmlFor: `${w}-${n}`, children: e })] }, e))] }), g && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(i.lR, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(i.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.TM, { id: g, name: g }) })] }), y && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(i.JM, { id: `${y}-description`, children: T ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...$(`${y}[]`, { required: { value: !0, message: T ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!N[`${y}[]`] }), (0, o.jsx)(i.lR, { type: 'checkbox', htmlFor: `${y}-1`, children: T ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), N[y] && (0, o.jsx)(i.YB, { children: N[y].message })] }), v?.id && (0, o.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, o.jsx)(i.e2, { children: (0, o.jsx)(i.$n, { type: 'submit', appearance: 'primary-action-button', children: f || (T ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  91463(e, n, t) {
   (t.r(n), t.d(n, { assets: () => o, contentTitle: () => l, default: () => u, frontMatter: () => a, metadata: () => i, toc: () => d }));
   const i = JSON.parse('{"id":"community/events/introduction-european-design-systems","title":"Introduction into European Design Systems 2025","description":"Denmark, Greece, Italy and Portugal introduced their design systems at User Needs First International Conference in Amsterdam. We\'ve started a dialog to identify areas where we can support and learn from one another, fostering a stronger and more connected community.","source":"@site/docs/community/events/introduction-european-design-systems.mdx","sourceDirName":"community/events","slug":"/community/events/introduction-european-design-systems-2025","permalink":"/community/events/introduction-european-design-systems-2025","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/introduction-european-design-systems.mdx","tags":[],"version":"current","frontMatter":{"title":"Introduction into European Design Systems 2025","hide_title":true,"hide_table_of_contents":false,"unlisted":true,"slug":"/community/events/introduction-european-design-systems-2025"}}');
   var s = t(86070),
    r = t(18439);
   t(78599);
   const a = { title: 'Introduction into European Design Systems 2025', hide_title: !0, hide_table_of_contents: !1, unlisted: !0, slug: '/community/events/introduction-european-design-systems-2025' },
    l = 'Introduction into European Design Systems 2025',
    o = {},
    d = [];
   function c(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'introduction-into-european-design-systems-2025', children: 'Introduction into European Design Systems 2025' }) }), '\n', (0, s.jsx)(n.p, { children: "Denmark, Greece, Italy and Portugal introduced their design systems at User Needs First International Conference in Amsterdam. We've started a dialog to identify areas where we can support and learn from one another, fostering a stronger and more connected community." }), '\n', (0, s.jsxs)(n.p, { children: [(0, s.jsx)(n.strong, { children: 'The event has already taken place' }), '. You can no longer sign up.'] }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['\ud83d\udcc6 ', (0, s.jsx)(n.strong, { children: 'When' }), ': April 10th from 13:30 to 14:45 CEST.'] }), '\n', (0, s.jsxs)(n.li, { children: ['\ud83c\udf0d ', (0, s.jsx)(n.strong, { children: 'Where' }), ': In Amsterdam as part of the ', (0, s.jsx)(n.a, { href: 'https://international.gebruikercentraal.nl/conference2025/', children: 'User Needs First International Conference 2025' }), ' and online via Microsoft Teams.'] }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
