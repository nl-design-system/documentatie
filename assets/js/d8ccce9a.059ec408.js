'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [43047],
 {
  45186(e, n, t) {
   t.d(n, { c: () => s });
   var i = t(30758);
   function s() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  68538(e, n, t) {
   (t.r(n), t.d(n, { assets: () => o, contentTitle: () => l, default: () => u, frontMatter: () => a, metadata: () => i, toc: () => d }));
   const i = JSON.parse('{"id":"community/events/introduction-european-design-systems","title":"Introduction into European Design Systems 2025","description":"Denmark, Greece, Italy and Portugal introduced their design systems at User Needs First International Conference in Amsterdam. We\'ve started a dialog to identify areas where we can support and learn from one another, fostering a stronger and more connected community.","source":"@site/docs/community/events/introduction-european-design-systems.mdx","sourceDirName":"community/events","slug":"/community/events/introduction-european-design-systems-2025","permalink":"/community/events/introduction-european-design-systems-2025","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/introduction-european-design-systems.mdx","tags":[],"version":"current","frontMatter":{"title":"Introduction into European Design Systems 2025","hide_title":true,"hide_table_of_contents":false,"unlisted":true,"slug":"/community/events/introduction-european-design-systems-2025"}}');
   var s = t(86070),
    r = t(18439);
   t(75812);
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
  75812(e, n, t) {
   t.d(n, { W: () => c });
   var i = t(29181),
    s = t(89974),
    r = t(56561),
    a = t(30758),
    l = t(27890),
    o = t(45186),
    d = t(86070);
   const c = ({ listId: e = '', laPostaId: n = '', thanksPage: t = '', emailFieldId: c = '', firstNameFieldId: u = '', orgId: m = '', interestsId: h = '', interestsLegend: p = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: x = !1, disallowedInterestValues: g = [], workAreasId: y = '', privacyPolicyId: v = '', language: f, submitText: k = '', talkTitleId: b = '', talkDescriptionId: w = '', roleId: I = '', roleLegend: S = 'Wat is jouw rol?', roles: $ = [], roleRequired: R = !1 }) => {
    const {
      register: D,
      handleSubmit: N,
      formState: { errors: B },
     } = (0, l.mN)(),
     T = (0, a.useRef)(null),
     _ = '2' === f?.value,
     F = (0, o.c)() ? window.location.search : '',
     q = new URLSearchParams(F),
     M = q.get('prefillEmail'),
     W = q.get('prefillName'),
     z =
      !!(h && j.length > 0) &&
      ((e, n) => {
       const t = [];
       let i = 1;
       for (let s = 0; s < e.length; s++) {
        for (; n.includes(i); ) i++;
        (t.push(i), i++);
       }
       return t;
      })(j, g);
    return (0, d.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: T,
     onSubmit: N(() => {
      T.current.submit();
     }),
     children: [(0, d.jsxs)(i.zB, { type: 'email', children: [(0, d.jsx)(r.f, { children: (0, d.jsx)(i.lR, { htmlFor: `id-${c}`, children: _ ? 'Email address ' : 'E-mailadres' }) }), B[c] && (0, d.jsx)(i.YB, { children: B[c].message }), (0, d.jsx)(r.f, { children: (0, d.jsx)(i.Rj, { id: `id-${c}`, name: c, type: 'email', autoComplete: 'email', defaultValue: M, 'aria-required': 'true', ...D(`${c}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: _ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!B[c] }) })] }), (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsx)(r.f, { children: (0, d.jsx)(i.lR, { htmlFor: u, children: _ ? 'Name' : 'Naam' }) }), B[u] && (0, d.jsx)(i.YB, { children: B[u].message }), (0, d.jsx)(r.f, { children: (0, d.jsx)(i.Rj, { id: u, name: u, type: 'text', defaultValue: W, autoComplete: 'given-name', 'aria-required': 'true', ...D(`${u}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!B[u] }) })] }), b && (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsxs)(r.f, { children: [(0, d.jsx)(i.lR, { htmlFor: b, children: _ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, d.jsx)(i.JM, { children: _ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, d.jsx)(r.f, { children: (0, d.jsx)(i.Rj, { id: b, name: b, ...D(b, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsxs)(r.f, { children: [(0, d.jsx)(i.lR, { htmlFor: w, children: _ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, d.jsx)(i.JM, { children: _ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, d.jsx)(r.f, { children: (0, d.jsx)(i.TM, { id: w, name: w, rows: 12, ...D(w, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsx)(r.f, { children: (0, d.jsx)(i.lR, { htmlFor: m, children: _ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), B[m] && (0, d.jsx)(i.YB, { children: B[m].message }), (0, d.jsx)(r.f, { children: (0, d.jsx)(i.Rj, { id: m, name: m, type: 'text' }) })] }), h && (0, d.jsxs)(i.LB, { children: [(0, d.jsx)(r.f, { children: (0, d.jsxs)(i.u4, { children: [p, !x && ' (niet verplicht)'] }) }), (0, d.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, n) => (0, d.jsxs)(i.zB, { type: 'checkbox', children: [(0, d.jsx)(i.Sc, { name: `${h}[]`, value: z[n], id: `${h}-${z[n]}` }), (0, d.jsx)(i.lR, { type: 'checkbox', htmlFor: `${h}-${z[n]}`, children: e })] }, e))] }), I && (0, d.jsxs)(i.LB, { children: [(0, d.jsx)(r.f, { children: (0, d.jsxs)(i.u4, { children: [S, !R && ' (niet verplicht)'] }) }), (0, d.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), $.map((e, n) => (0, d.jsxs)(i.zB, { type: 'checkbox', children: [(0, d.jsx)(i.Sc, { name: `${I}[]`, id: `${I}-${n}` }), (0, d.jsx)(i.lR, { type: 'checkbox', htmlFor: `${I}-${n}`, children: e })] }, e))] }), y && (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsxs)(r.f, { children: [(0, d.jsx)(i.lR, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, d.jsx)(i.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, d.jsx)(r.f, { children: (0, d.jsx)(i.TM, { id: y, name: y }) })] }), v && (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsx)(i.JM, { id: `${v}-description`, children: _ ? (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, d.jsxs)(i.zB, { type: 'checkbox', children: [(0, d.jsx)(i.Sc, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...D(`${v}[]`, { required: { value: !0, message: _ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!B[`${v}[]`] }), (0, d.jsx)(i.lR, { type: 'checkbox', htmlFor: `${v}-1`, children: _ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), B[v] && (0, d.jsx)(i.YB, { children: B[v].message })] }), f?.id && (0, d.jsx)('input', { type: 'hidden', name: f.id, value: f.value }), (0, d.jsx)(i.e2, { children: (0, d.jsx)(s.$, { type: 'submit', purpose: 'primary', children: k || (_ ? 'Sign up' : 'Aanmelden') }) }), (0, d.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, d.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, d.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, d.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, d.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  89974(e, n, t) {
   t.d(n, { $: () => i.$n });
   var i = t(50805);
  },
 },
]);
