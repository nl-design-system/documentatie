'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25485],
 {
  37447(e, s, i) {
   i.d(s, { W: () => d });
   var t = i(29181),
    n = i(30758),
    r = i(27890),
    a = i(54565),
    l = i(86070);
   const d = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: c = '', interestsId: u = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: m = [], interestsRequired: p = !1, disallowedInterestValues: g = [], workAreasId: j = '', privacyPolicyId: y = '', language: x, submitText: v = '', talkTitleId: f = '', talkDescriptionId: k = '', roleId: b = '', roleLegend: w = 'Wat is jouw rol?', roles: S = [], roleRequired: z = !1 }) => {
    const {
      register: D,
      handleSubmit: W,
      formState: { errors: _ },
     } = (0, r.mN)(),
     R = (0, n.useRef)(null),
     $ = '2' === x?.value,
     I = (0, a.c)() ? window.location.search : '',
     B = new URLSearchParams(I),
     q = B.get('prefillEmail'),
     F = B.get('prefillName'),
     M =
      !!(u && m.length > 0) &&
      ((e, s) => {
       const i = [];
       let t = 1;
       for (let n = 0; n < e.length; n++) {
        for (; s.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(m, g);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: R,
     onSubmit: W(() => {
      R.current.submit();
     }),
     children: [(0, l.jsxs)(t.zB, { type: 'email', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: `id-${d}`, children: $ ? 'Email address ' : 'E-mailadres' }) }), _[d] && (0, l.jsx)(t.YB, { children: _[d].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: q, 'aria-required': 'true', ...D(`${d}`, { required: { value: !0, message: $ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: $ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!_[d] }) })] }), (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: o, children: $ ? 'Name' : 'Naam' }) }), _[o] && (0, l.jsx)(t.YB, { children: _[o].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: o, name: o, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...D(`${o}`, { required: { value: !0, message: $ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!_[o] }) })] }), f && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: f, children: $ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(t.JM, { children: $ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: f, name: f, ...D(f, { required: { value: !0, message: $ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: k, children: $ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(t.JM, { children: $ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: k, name: k, rows: 12, ...D(k, { required: { value: !0, message: $ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: c, children: $ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), _[c] && (0, l.jsx)(t.YB, { children: _[c].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: c, name: c, type: 'text' }) })] }), u && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [h, !p && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), m.map((e, s) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${u}[]`, value: M[s], id: `${u}-${M[s]}` }), (0, l.jsx)(t.lR, { htmlFor: `${u}-${M[s]}`, children: e })] }, e))] }), b && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [w, !z && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), S.map((e, s) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${b}[]`, id: `${b}-${s}` }), (0, l.jsx)(t.lR, { htmlFor: `${b}-${s}`, children: e })] }, e))] }), j && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: j, name: j }) })] }), y && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.JM, { id: `${y}-description`, children: $ ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...D(`${y}[]`, { required: { value: !0, message: $ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!_[`${y}[]`] }), (0, l.jsx)(t.lR, { htmlFor: `${y}-1`, children: $ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), _[y] && (0, l.jsx)(t.YB, { children: _[y].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(t.e2, { children: (0, l.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: v || ($ ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  54565(e, s, i) {
   i.d(s, { c: () => n });
   var t = i(30758);
   function n() {
    const [e, s] = (0, t.useState)();
    return ((0, t.useEffect)(() => s(!0), []), e);
   }
  },
  91615(e, s, i) {
   (i.r(s), i.d(s, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/sign-up","title":"Sign up \xb7 Design Systems Week","description":"Design System Week will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.","source":"@site/docs/community/events/design-systems-week/en/sign-up.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/sign-up","permalink":"/events/design-systems-week/en/sign-up","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/sign-up.mdx","tags":[],"version":"current","frontMatter":{"title":"Sign up \xb7 Design Systems Week","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sign up","pagination_label":"Sign up for Design Systems Week","slug":"/events/design-systems-week/en/sign-up","displayed_sidebar":"community"},"sidebar":"community"}');
   var n = i(86070),
    r = i(18439),
    a = i(37447);
   const l = { title: 'Sign up \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sign up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/en/sign-up', displayed_sidebar: 'community' },
    d = 'Sign up for Design Systems Week',
    o = {},
    c = [];
   function u(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(s.header, { children: (0, n.jsx)(s.h1, { id: 'sign-up-for-design-systems-week', children: 'Sign up for Design Systems Week' }) }), '\n', (0, n.jsx)(s.p, { children: 'Design System Week will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.' }), '\n', (0, n.jsxs)(s.p, { children: [(0, n.jsx)(s.strong, { children: 'Design Systems Week 2025 will take place from Oktober 27th to 30th' }), '.'] }), '\n', (0, n.jsx)(s.p, { children: 'We are now busy with all the preparations. Leave your info to receive updates!' }), '\n', (0, n.jsx)(a.W, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/en/sign-up/thanks', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '2' } })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, r.R)(), ...e.components };
    return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(u, { ...e }) }) : u(e);
   }
  },
 },
]);
