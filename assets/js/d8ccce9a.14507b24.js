'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [43047],
 {
  37447(e, n, t) {
   t.d(n, { W: () => o });
   var i = t(25557),
    s = t(29181),
    r = t(30758),
    a = t(27890),
    l = t(86070);
   const o = ({ listId: e = '', laPostaId: n = '', thanksPage: t = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: c = '', interestsId: u = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: m = [], interestsRequired: p = !1, disallowedInterestValues: j = [], workAreasId: x = '', privacyPolicyId: g = '', language: y, submitText: v = '', talkTitleId: f = '', talkDescriptionId: k = '', roleId: b = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: I = !1 }) => {
    const {
      register: S,
      handleSubmit: R,
      formState: { errors: $ },
     } = (0, a.mN)(),
     D = (0, r.useRef)(null),
     B = '2' === y?.value,
     { search: T } = (0, i.zy)(),
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
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: D,
     onSubmit: R(() => {
      D.current.submit();
     }),
     children: [(0, l.jsxs)(s.zB, { type: 'email', children: [(0, l.jsx)(s.fz, { children: (0, l.jsx)(s.lR, { htmlFor: `id-${o}`, children: B ? 'Email address ' : 'E-mailadres' }) }), $[o] && (0, l.jsx)(s.YB, { children: $[o].message }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', ...S(`${o}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: B ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!$[o] }) })] }), (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsx)(s.fz, { children: (0, l.jsx)(s.lR, { htmlFor: d, children: B ? 'Name' : 'Naam' }) }), $[d] && (0, l.jsx)(s.YB, { children: $[d].message }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: d, name: d, type: 'text', defaultValue: N, autoComplete: 'given-name', 'aria-required': 'true', ...S(`${d}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!$[d] }) })] }), f && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsxs)(s.fz, { children: [(0, l.jsx)(s.lR, { htmlFor: f, children: B ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(s.JM, { children: B ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: f, name: f, ...S(f, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsxs)(s.fz, { children: [(0, l.jsx)(s.lR, { htmlFor: k, children: B ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(s.JM, { children: B ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.TM, { id: k, name: k, rows: 12, ...S(k, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsx)(s.fz, { children: (0, l.jsx)(s.lR, { htmlFor: c, children: B ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), $[c] && (0, l.jsx)(s.YB, { children: $[c].message }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: c, name: c, type: 'text' }) })] }), u && (0, l.jsxs)(s.LB, { children: [(0, l.jsx)(s.fz, { children: (0, l.jsxs)(s.u4, { children: [h, !p && ' (niet verplicht)'] }) }), (0, l.jsx)(s.JM, { children: 'Meerdere antwoorden mogelijk.' }), m.map((e, n) => (0, l.jsxs)(s.zB, { type: 'checkbox', children: [(0, l.jsx)(s.Sc, { name: `${u}[]`, value: q[n], id: `${u}-${q[n]}` }), (0, l.jsx)(s.lR, { htmlFor: `${u}-${q[n]}`, children: e })] }, e))] }), b && (0, l.jsxs)(s.LB, { children: [(0, l.jsx)(s.fz, { children: (0, l.jsxs)(s.u4, { children: [w, !I && ' (niet verplicht)'] }) }), (0, l.jsx)(s.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, n) => (0, l.jsxs)(s.zB, { type: 'checkbox', children: [(0, l.jsx)(s.Sc, { name: `${b}[]`, id: `${b}-${n}` }), (0, l.jsx)(s.lR, { htmlFor: `${b}-${n}`, children: e })] }, e))] }), x && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsxs)(s.fz, { children: [(0, l.jsx)(s.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(s.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.TM, { id: x, name: x }) })] }), g && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsx)(s.JM, { id: `${g}-description`, children: B ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(s.zB, { type: 'checkbox', children: [(0, l.jsx)(s.Sc, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...S(`${g}[]`, { required: { value: !0, message: B ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!$[`${g}[]`] }), (0, l.jsx)(s.lR, { htmlFor: `${g}-1`, children: B ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), $[g] && (0, l.jsx)(s.YB, { children: $[g].message })] }), y?.id && (0, l.jsx)('input', { type: 'hidden', name: y.id, value: y.value }), (0, l.jsx)(s.e2, { children: (0, l.jsx)(s.$n, { type: 'submit', appearance: 'primary-action-button', children: v || (B ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  91463(e, n, t) {
   (t.r(n), t.d(n, { assets: () => o, contentTitle: () => l, default: () => u, frontMatter: () => a, metadata: () => i, toc: () => d }));
   const i = JSON.parse('{"id":"community/events/introduction-european-design-systems","title":"Introduction into European Design Systems 2025","description":"Denmark, Greece, Italy and Portugal introduced their design systems at User Needs First International Conference in Amsterdam. We\'ve started a dialog to identify areas where we can support and learn from one another, fostering a stronger and more connected community.","source":"@site/docs/community/events/introduction-european-design-systems.mdx","sourceDirName":"community/events","slug":"/community/events/introduction-european-design-systems-2025","permalink":"/community/events/introduction-european-design-systems-2025","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/introduction-european-design-systems.mdx","tags":[],"version":"current","frontMatter":{"title":"Introduction into European Design Systems 2025","hide_title":true,"hide_table_of_contents":false,"unlisted":true,"slug":"/community/events/introduction-european-design-systems-2025"}}');
   var s = t(86070),
    r = t(18439);
   t(37447);
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
