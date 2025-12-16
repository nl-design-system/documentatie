'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [68551],
 {
  46974: (e, s, i) => {
   i.r(s), i.d(s, { assets: () => d, contentTitle: () => o, default: () => m, frontMatter: () => l, metadata: () => t, toc: () => c });
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/call-for-speakers","title":"Propose talk \xb7 Design Systems Week","description":"From October 27th to 31st, 2025, we\'re once again organizing a week full of sessions on design systems. A week in which we\'ll share experiences, demonstrate practical applications, and learn together about design, code, guidelines, and collaboration.","source":"@site/docs/community/events/design-systems-week/en/call-for-speakers.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/call-for-speakers","permalink":"/events/design-systems-week/en/call-for-speakers","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/call-for-speakers.mdx","tags":[],"version":"current","frontMatter":{"title":"Propose talk \xb7 Design Systems Week","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Propose talk","pagination_label":"Propose talk","slug":"/events/design-systems-week/en/call-for-speakers","displayed_sidebar":"community"},"sidebar":"community"}');
   var a = i(86070),
    n = i(85248),
    r = i(51629);
   const l = { title: 'Propose talk \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Propose talk', pagination_label: 'Propose talk', slug: '/events/design-systems-week/en/call-for-speakers', displayed_sidebar: 'community' },
    o = 'Design Systems Week 2025 - Call for speakers',
    d = {},
    c = [{ value: 'Submit your proposal via this form', id: 'submit-your-proposal-via-this-form', level: 2 }];
   function h(e) {
    const s = { h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, n.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(s.header, { children: (0, a.jsx)(s.h1, { id: 'design-systems-week-2025---call-for-speakers', children: 'Design Systems Week 2025 - Call for speakers' }) }), '\n', (0, a.jsx)(s.p, { children: "From October 27th to 31st, 2025, we're once again organizing a week full of sessions on design systems. A week in which we'll share experiences, demonstrate practical applications, and learn together about design, code, guidelines, and collaboration." }), '\n', (0, a.jsx)(s.p, { children: 'Are you a designer, developer, or content creator working with a government design system? Or do you have a great idea to share about the importance of an accessible design system? Then the Design Systems Week is a great opportunity to share knowledge with colleagues.' }), '\n', (0, a.jsx)(s.h2, { id: 'submit-your-proposal-via-this-form', children: 'Submit your proposal via this form' }), '\n', (0, a.jsx)(r.W, { listId: 'k5thcm7i86', emailFieldId: 'ieVxMqAsNc', firstNameFieldId: 'RH0bMSWloq', talkTitleId: '5DRurXNffg', talkDescriptionId: 'tT7iO8Fz3h', privacyPolicyId: '0Tw7Elhcrt', orgId: 'kdCftAyRgW', laPostaId: 'iyihtuzpiq', language: { id: 'x95hFD1RX5', value: '2' } })] });
   }
   function m(e = {}) {
    const { wrapper: s } = { ...(0, n.R)(), ...e.components };
    return s ? (0, a.jsx)(s, { ...e, children: (0, a.jsx)(h, { ...e }) }) : h(e);
   }
  },
  51629: (e, s, i) => {
   i.d(s, { W: () => o });
   var t = i(25557),
    a = i(14537),
    n = i(30758),
    r = i(65198),
    l = i(86070);
   const o = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: c = '', interestsId: h = '', interestsLegend: m = 'Waar wil je NL Design System voor gebruiken?', interests: u = [], disallowedInterestValues: p = [], workAreasId: g = '', privacyPolicyId: y = '', language: j, submitText: x = '', talkTitleId: v = '', talkDescriptionId: k = '' }) => {
    const {
      register: f,
      handleSubmit: b,
      formState: { errors: w },
     } = (0, r.mN)(),
     z = (0, n.useRef)(null),
     S = '2' === j?.value,
     { search: I } = (0, t.zy)(),
     D = new URLSearchParams(I),
     R = D.get('prefillEmail'),
     _ = D.get('prefillName'),
     F =
      !!(h && u.length > 0) &&
      ((e, s) => {
       const i = [];
       let t = 1;
       for (let a = 0; a < e.length; a++) {
        for (; s.includes(t); ) t++;
        i.push(t), t++;
       }
       return i;
      })(u, p);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: z,
     onSubmit: b(() => {
      z.current.submit();
     }),
     children: [(0, l.jsxs)(a.zB, { type: 'email', children: [(0, l.jsx)(a.fz, { children: (0, l.jsx)(a.lR, { htmlFor: `id-${o}`, children: S ? 'Email address ' : 'E-mailadres' }) }), w[o] && (0, l.jsx)(a.YB, { children: w[o].message }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: R, 'aria-required': 'true', ...f(`${o}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: S ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!w[o] }) })] }), (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsx)(a.fz, { children: (0, l.jsx)(a.lR, { htmlFor: d, children: S ? 'Name' : 'Naam' }) }), w[d] && (0, l.jsx)(a.YB, { children: w[d].message }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: d, name: d, type: 'text', defaultValue: _, autoComplete: 'given-name', 'aria-required': 'true', ...f(`${d}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!w[d] }) })] }), v && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsxs)(a.fz, { children: [(0, l.jsx)(a.lR, { htmlFor: v, children: S ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(a.JM, { children: S ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: v, name: v, ...f(v, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsxs)(a.fz, { children: [(0, l.jsx)(a.lR, { htmlFor: k, children: S ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(a.JM, { children: S ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.TM, { id: k, name: k, rows: 12, ...f(k, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsx)(a.fz, { children: (0, l.jsx)(a.lR, { htmlFor: c, children: S ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), w[c] && (0, l.jsx)(a.YB, { children: w[c].message }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: c, name: c, type: 'text' }) })] }), h && (0, l.jsxs)(a.LB, { children: [(0, l.jsx)(a.fz, { children: (0, l.jsxs)(a.u4, { children: [m, ' (niet verplicht)'] }) }), (0, l.jsx)(a.JM, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, s) => (0, l.jsxs)(a.zB, { type: 'checkbox', children: [(0, l.jsx)(a.Sc, { name: `${h}[]`, value: F[s], id: `${h}-${F[s]}` }), (0, l.jsx)(a.lR, { htmlFor: `${h}-${F[s]}`, children: e })] }, e))] }), g && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsxs)(a.fz, { children: [(0, l.jsx)(a.lR, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(a.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.TM, { id: g, name: g }) })] }), y && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsx)(a.JM, { id: `${y}-description`, children: S ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(a.zB, { type: 'checkbox', children: [(0, l.jsx)(a.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...f(`${y}[]`, { required: { value: !0, message: S ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!w[`${y}[]`] }), (0, l.jsx)(a.lR, { htmlFor: `${y}-1`, children: S ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), w[y] && (0, l.jsx)(a.YB, { children: w[y].message })] }), j?.id && (0, l.jsx)('input', { type: 'hidden', name: j.id, value: j.value }), (0, l.jsx)(a.e2, { children: (0, l.jsx)(a.$n, { type: 'submit', appearance: 'primary-action-button', children: x || (S ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
 },
]);
