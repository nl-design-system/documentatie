'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [43047],
 {
  37447(e, n, t) {
   t.d(n, { W: () => l });
   var i = t(29181),
    s = t(30758),
    r = t(27890),
    a = t(54565),
    o = t(86070);
   const l = ({ listId: e = '', laPostaId: n = '', thanksPage: t = '', emailFieldId: l = '', firstNameFieldId: d = '', orgId: c = '', interestsId: u = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: m = [], interestsRequired: p = !1, disallowedInterestValues: j = [], workAreasId: x = '', privacyPolicyId: g = '', language: y, submitText: v = '', talkTitleId: f = '', talkDescriptionId: k = '', roleId: b = '', roleLegend: w = 'Wat is jouw rol?', roles: I = [], roleRequired: z = !1 }) => {
    const {
      register: S,
      handleSubmit: R,
      formState: { errors: $ },
     } = (0, r.mN)(),
     D = (0, s.useRef)(null),
     B = '2' === y?.value,
     T = (0, a.c)() ? window.location.search : '',
     _ = new URLSearchParams(T),
     F = _.get('prefillEmail'),
     N = _.get('prefillName'),
     q =
      !!(u && m.length > 0) &&
      ((e, n) => {
       const t = [];
       let i = 1;
       for (let s = 0; s < e.length; s++) {
        for (; n.includes(i); ) i++;
        (t.push(i), i++);
       }
       return t;
      })(m, j);
    return (0, o.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: D,
     onSubmit: R(() => {
      D.current.submit();
     }),
     children: [(0, o.jsxs)(i.zB, { type: 'email', children: [(0, o.jsx)(i.fz, { children: (0, o.jsx)(i.lR, { htmlFor: `id-${l}`, children: B ? 'Email address ' : 'E-mailadres' }) }), $[l] && (0, o.jsx)(i.YB, { children: $[l].message }), (0, o.jsx)(i.fz, { children: (0, o.jsx)(i.Rj, { id: `id-${l}`, name: l, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', ...S(`${l}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: B ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!$[l] }) })] }), (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(i.fz, { children: (0, o.jsx)(i.lR, { htmlFor: d, children: B ? 'Name' : 'Naam' }) }), $[d] && (0, o.jsx)(i.YB, { children: $[d].message }), (0, o.jsx)(i.fz, { children: (0, o.jsx)(i.Rj, { id: d, name: d, type: 'text', defaultValue: N, autoComplete: 'given-name', 'aria-required': 'true', ...S(`${d}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!$[d] }) })] }), f && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(i.fz, { children: [(0, o.jsx)(i.lR, { htmlFor: f, children: B ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(i.JM, { children: B ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(i.fz, { children: (0, o.jsx)(i.Rj, { id: f, name: f, ...S(f, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(i.fz, { children: [(0, o.jsx)(i.lR, { htmlFor: k, children: B ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(i.JM, { children: B ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(i.fz, { children: (0, o.jsx)(i.TM, { id: k, name: k, rows: 12, ...S(k, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(i.fz, { children: (0, o.jsx)(i.lR, { htmlFor: c, children: B ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), $[c] && (0, o.jsx)(i.YB, { children: $[c].message }), (0, o.jsx)(i.fz, { children: (0, o.jsx)(i.Rj, { id: c, name: c, type: 'text' }) })] }), u && (0, o.jsxs)(i.LB, { children: [(0, o.jsx)(i.fz, { children: (0, o.jsxs)(i.u4, { children: [h, !p && ' (niet verplicht)'] }) }), (0, o.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), m.map((e, n) => (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { name: `${u}[]`, value: q[n], id: `${u}-${q[n]}` }), (0, o.jsx)(i.lR, { htmlFor: `${u}-${q[n]}`, children: e })] }, e))] }), b && (0, o.jsxs)(i.LB, { children: [(0, o.jsx)(i.fz, { children: (0, o.jsxs)(i.u4, { children: [w, !z && ' (niet verplicht)'] }) }), (0, o.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), I.map((e, n) => (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { name: `${b}[]`, id: `${b}-${n}` }), (0, o.jsx)(i.lR, { htmlFor: `${b}-${n}`, children: e })] }, e))] }), x && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(i.fz, { children: [(0, o.jsx)(i.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(i.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(i.fz, { children: (0, o.jsx)(i.TM, { id: x, name: x }) })] }), g && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(i.JM, { id: `${g}-description`, children: B ? (0, o.jsxs)('p', { children: ['The ', (0, o.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, o.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...S(`${g}[]`, { required: { value: !0, message: B ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!$[`${g}[]`] }), (0, o.jsx)(i.lR, { htmlFor: `${g}-1`, children: B ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), $[g] && (0, o.jsx)(i.YB, { children: $[g].message })] }), y?.id && (0, o.jsx)('input', { type: 'hidden', name: y.id, value: y.value }), (0, o.jsx)(i.e2, { children: (0, o.jsx)(i.$n, { type: 'submit', appearance: 'primary-action-button', children: v || (B ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  54565(e, n, t) {
   t.d(n, { c: () => s });
   var i = t(30758);
   function s() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  91463(e, n, t) {
   (t.r(n), t.d(n, { assets: () => l, contentTitle: () => o, default: () => u, frontMatter: () => a, metadata: () => i, toc: () => d }));
   const i = JSON.parse('{"id":"community/events/introduction-european-design-systems","title":"Introduction into European Design Systems 2025","description":"Denmark, Greece, Italy and Portugal introduced their design systems at User Needs First International Conference in Amsterdam. We\'ve started a dialog to identify areas where we can support and learn from one another, fostering a stronger and more connected community.","source":"@site/docs/community/events/introduction-european-design-systems.mdx","sourceDirName":"community/events","slug":"/community/events/introduction-european-design-systems-2025","permalink":"/community/events/introduction-european-design-systems-2025","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/introduction-european-design-systems.mdx","tags":[],"version":"current","frontMatter":{"title":"Introduction into European Design Systems 2025","hide_title":true,"hide_table_of_contents":false,"unlisted":true,"slug":"/community/events/introduction-european-design-systems-2025"}}');
   var s = t(86070),
    r = t(18439);
   t(37447);
   const a = { title: 'Introduction into European Design Systems 2025', hide_title: !0, hide_table_of_contents: !1, unlisted: !0, slug: '/community/events/introduction-european-design-systems-2025' },
    o = 'Introduction into European Design Systems 2025',
    l = {},
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
