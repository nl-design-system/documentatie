'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [68551],
 {
  37447(e, s, i) {
   i.d(s, { W: () => o });
   var t = i(29181),
    r = i(30758),
    n = i(27890),
    a = i(54565),
    l = i(86070);
   const o = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: c = '', interestsId: h = '', interestsLegend: m = 'Waar wil je NL Design System voor gebruiken?', interests: u = [], interestsRequired: p = !1, disallowedInterestValues: g = [], workAreasId: j = '', privacyPolicyId: x = '', language: y, submitText: v = '', talkTitleId: k = '', talkDescriptionId: f = '', roleId: b = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: S = !1 }) => {
    const {
      register: R,
      handleSubmit: I,
      formState: { errors: D },
     } = (0, n.mN)(),
     _ = (0, r.useRef)(null),
     $ = '2' === y?.value,
     F = (0, a.c)() ? window.location.search : '',
     W = new URLSearchParams(F),
     B = W.get('prefillEmail'),
     T = W.get('prefillName'),
     q =
      !!(h && u.length > 0) &&
      ((e, s) => {
       const i = [];
       let t = 1;
       for (let r = 0; r < e.length; r++) {
        for (; s.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(u, g);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: _,
     onSubmit: I(() => {
      _.current.submit();
     }),
     children: [(0, l.jsxs)(t.zB, { type: 'email', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: `id-${o}`, children: $ ? 'Email address ' : 'E-mailadres' }) }), D[o] && (0, l.jsx)(t.YB, { children: D[o].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: B, 'aria-required': 'true', ...R(`${o}`, { required: { value: !0, message: $ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: $ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!D[o] }) })] }), (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: d, children: $ ? 'Name' : 'Naam' }) }), D[d] && (0, l.jsx)(t.YB, { children: D[d].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: d, name: d, type: 'text', defaultValue: T, autoComplete: 'given-name', 'aria-required': 'true', ...R(`${d}`, { required: { value: !0, message: $ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!D[d] }) })] }), k && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: k, children: $ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(t.JM, { children: $ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: k, name: k, ...R(k, { required: { value: !0, message: $ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: f, children: $ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(t.JM, { children: $ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: f, name: f, rows: 12, ...R(f, { required: { value: !0, message: $ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: c, children: $ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), D[c] && (0, l.jsx)(t.YB, { children: D[c].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: c, name: c, type: 'text' }) })] }), h && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [m, !p && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, s) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${h}[]`, value: q[s], id: `${h}-${q[s]}` }), (0, l.jsx)(t.lR, { htmlFor: `${h}-${q[s]}`, children: e })] }, e))] }), b && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [w, !S && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, s) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${b}[]`, id: `${b}-${s}` }), (0, l.jsx)(t.lR, { htmlFor: `${b}-${s}`, children: e })] }, e))] }), j && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: j, name: j }) })] }), x && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.JM, { id: `${x}-description`, children: $ ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...R(`${x}[]`, { required: { value: !0, message: $ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!D[`${x}[]`] }), (0, l.jsx)(t.lR, { htmlFor: `${x}-1`, children: $ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), D[x] && (0, l.jsx)(t.YB, { children: D[x].message })] }), y?.id && (0, l.jsx)('input', { type: 'hidden', name: y.id, value: y.value }), (0, l.jsx)(t.e2, { children: (0, l.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: v || ($ ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  46974(e, s, i) {
   (i.r(s), i.d(s, { assets: () => d, contentTitle: () => o, default: () => m, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/call-for-speakers","title":"Propose talk \xb7 Design Systems Week","description":"From October 27th to 31st, 2025, we\'re once again organizing a week full of sessions on design systems. A week in which we\'ll share experiences, demonstrate practical applications, and learn together about design, code, guidelines, and collaboration.","source":"@site/docs/community/events/design-systems-week/en/call-for-speakers.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/call-for-speakers","permalink":"/events/design-systems-week/en/call-for-speakers","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/call-for-speakers.mdx","tags":[],"version":"current","frontMatter":{"title":"Propose talk \xb7 Design Systems Week","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Propose talk","pagination_label":"Propose talk","slug":"/events/design-systems-week/en/call-for-speakers","displayed_sidebar":"community"},"sidebar":"community"}');
   var r = i(86070),
    n = i(18439),
    a = i(37447);
   const l = { title: 'Propose talk \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Propose talk', pagination_label: 'Propose talk', slug: '/events/design-systems-week/en/call-for-speakers', displayed_sidebar: 'community' },
    o = 'Design Systems Week 2025 - Call for speakers',
    d = {},
    c = [{ value: 'Submit your proposal via this form', id: 'submit-your-proposal-via-this-form', level: 2 }];
   function h(e) {
    const s = { h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, n.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s.header, { children: (0, r.jsx)(s.h1, { id: 'design-systems-week-2025---call-for-speakers', children: 'Design Systems Week 2025 - Call for speakers' }) }), '\n', (0, r.jsx)(s.p, { children: "From October 27th to 31st, 2025, we're once again organizing a week full of sessions on design systems. A week in which we'll share experiences, demonstrate practical applications, and learn together about design, code, guidelines, and collaboration." }), '\n', (0, r.jsx)(s.p, { children: 'Are you a designer, developer, or content creator working with a government design system? Or do you have a great idea to share about the importance of an accessible design system? Then the Design Systems Week is a great opportunity to share knowledge with colleagues.' }), '\n', (0, r.jsx)(s.h2, { id: 'submit-your-proposal-via-this-form', children: 'Submit your proposal via this form' }), '\n', (0, r.jsx)(a.W, { listId: 'k5thcm7i86', emailFieldId: 'ieVxMqAsNc', firstNameFieldId: 'RH0bMSWloq', talkTitleId: '5DRurXNffg', talkDescriptionId: 'tT7iO8Fz3h', privacyPolicyId: '0Tw7Elhcrt', orgId: 'kdCftAyRgW', laPostaId: 'iyihtuzpiq', language: { id: 'x95hFD1RX5', value: '2' } })] });
   }
   function m(e = {}) {
    const { wrapper: s } = { ...(0, n.R)(), ...e.components };
    return s ? (0, r.jsx)(s, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
  54565(e, s, i) {
   i.d(s, { c: () => r });
   var t = i(30758);
   function r() {
    const [e, s] = (0, t.useState)();
    return ((0, t.useEffect)(() => s(!0), []), e);
   }
  },
 },
]);
