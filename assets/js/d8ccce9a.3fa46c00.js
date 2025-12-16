'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [43047],
 {
  51629: (e, n, t) => {
   t.d(n, { W: () => l });
   var i = t(25557),
    s = t(14537),
    r = t(30758),
    a = t(65198),
    o = t(86070);
   const l = ({ listId: e = '', laPostaId: n = '', thanksPage: t = '', emailFieldId: l = '', firstNameFieldId: d = '', orgId: c = '', interestsId: u = '', interestsLegend: m = 'Waar wil je NL Design System voor gebruiken?', interests: h = [], disallowedInterestValues: p = [], workAreasId: j = '', privacyPolicyId: g = '', language: x, submitText: y = '', talkTitleId: v = '', talkDescriptionId: f = '' }) => {
    const {
      register: k,
      handleSubmit: b,
      formState: { errors: w },
     } = (0, a.mN)(),
     I = (0, r.useRef)(null),
     z = '2' === x?.value,
     { search: S } = (0, i.zy)(),
     D = new URLSearchParams(S),
     R = D.get('prefillEmail'),
     T = D.get('prefillName'),
     $ =
      !!(u && h.length > 0) &&
      ((e, n) => {
       const t = [];
       let i = 1;
       for (let s = 0; s < e.length; s++) {
        for (; n.includes(i); ) i++;
        t.push(i), i++;
       }
       return t;
      })(h, p);
    return (0, o.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: I,
     onSubmit: b(() => {
      I.current.submit();
     }),
     children: [(0, o.jsxs)(s.zB, { type: 'email', children: [(0, o.jsx)(s.fz, { children: (0, o.jsx)(s.lR, { htmlFor: `id-${l}`, children: z ? 'Email address ' : 'E-mailadres' }) }), w[l] && (0, o.jsx)(s.YB, { children: w[l].message }), (0, o.jsx)(s.fz, { children: (0, o.jsx)(s.Rj, { id: `id-${l}`, name: l, type: 'email', autoComplete: 'email', defaultValue: R, 'aria-required': 'true', ...k(`${l}`, { required: { value: !0, message: z ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: z ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!w[l] }) })] }), (0, o.jsxs)(s.zB, { type: 'text', children: [(0, o.jsx)(s.fz, { children: (0, o.jsx)(s.lR, { htmlFor: d, children: z ? 'Name' : 'Naam' }) }), w[d] && (0, o.jsx)(s.YB, { children: w[d].message }), (0, o.jsx)(s.fz, { children: (0, o.jsx)(s.Rj, { id: d, name: d, type: 'text', defaultValue: T, autoComplete: 'given-name', 'aria-required': 'true', ...k(`${d}`, { required: { value: !0, message: z ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!w[d] }) })] }), v && (0, o.jsxs)(s.zB, { type: 'text', children: [(0, o.jsxs)(s.fz, { children: [(0, o.jsx)(s.lR, { htmlFor: v, children: z ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(s.JM, { children: z ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(s.fz, { children: (0, o.jsx)(s.Rj, { id: v, name: v, ...k(v, { required: { value: !0, message: z ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, o.jsxs)(s.zB, { type: 'text', children: [(0, o.jsxs)(s.fz, { children: [(0, o.jsx)(s.lR, { htmlFor: f, children: z ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(s.JM, { children: z ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(s.fz, { children: (0, o.jsx)(s.TM, { id: f, name: f, rows: 12, ...k(f, { required: { value: !0, message: z ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, o.jsxs)(s.zB, { type: 'text', children: [(0, o.jsx)(s.fz, { children: (0, o.jsx)(s.lR, { htmlFor: c, children: z ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), w[c] && (0, o.jsx)(s.YB, { children: w[c].message }), (0, o.jsx)(s.fz, { children: (0, o.jsx)(s.Rj, { id: c, name: c, type: 'text' }) })] }), u && (0, o.jsxs)(s.LB, { children: [(0, o.jsx)(s.fz, { children: (0, o.jsxs)(s.u4, { children: [m, ' (niet verplicht)'] }) }), (0, o.jsx)(s.JM, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, n) => (0, o.jsxs)(s.zB, { type: 'checkbox', children: [(0, o.jsx)(s.Sc, { name: `${u}[]`, value: $[n], id: `${u}-${$[n]}` }), (0, o.jsx)(s.lR, { htmlFor: `${u}-${$[n]}`, children: e })] }, e))] }), j && (0, o.jsxs)(s.zB, { type: 'text', children: [(0, o.jsxs)(s.fz, { children: [(0, o.jsx)(s.lR, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(s.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(s.fz, { children: (0, o.jsx)(s.TM, { id: j, name: j }) })] }), g && (0, o.jsxs)(s.zB, { type: 'text', children: [(0, o.jsx)(s.JM, { id: `${g}-description`, children: z ? (0, o.jsxs)('p', { children: ['The ', (0, o.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, o.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, o.jsxs)(s.zB, { type: 'checkbox', children: [(0, o.jsx)(s.Sc, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...k(`${g}[]`, { required: { value: !0, message: z ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!w[`${g}[]`] }), (0, o.jsx)(s.lR, { htmlFor: `${g}-1`, children: z ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), w[g] && (0, o.jsx)(s.YB, { children: w[g].message })] }), x?.id && (0, o.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, o.jsx)(s.e2, { children: (0, o.jsx)(s.$n, { type: 'submit', appearance: 'primary-action-button', children: y || (z ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  91463: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => o, default: () => u, frontMatter: () => a, metadata: () => i, toc: () => d });
   const i = JSON.parse('{"id":"community/events/introduction-european-design-systems","title":"Introduction into European Design Systems 2025","description":"Denmark, Greece, Italy and Portugal introduced their design systems at User Needs First International Conference in Amsterdam. We\'ve started a dialog to identify areas where we can support and learn from one another, fostering a stronger and more connected community.","source":"@site/docs/community/events/introduction-european-design-systems.mdx","sourceDirName":"community/events","slug":"/community/events/introduction-european-design-systems-2025","permalink":"/community/events/introduction-european-design-systems-2025","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/introduction-european-design-systems.mdx","tags":[],"version":"current","frontMatter":{"title":"Introduction into European Design Systems 2025","hide_title":true,"hide_table_of_contents":false,"unlisted":true,"slug":"/community/events/introduction-european-design-systems-2025"}}');
   var s = t(86070),
    r = t(85248);
   t(51629);
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
