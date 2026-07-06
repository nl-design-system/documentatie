'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [43146],
 {
  8867(e, s, i) {
   (i.r(s), i.d(s, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => l, metadata: () => n, toc: () => m }));
   const n = JSON.parse('{"id":"community/events/design-systems-week/aanmelden","title":"Aanmelden voor Design Systems Week","description":"Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het hoe en waarom van design systems.","source":"@site/docs/community/events/design-systems-week/aanmelden.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week/aanmelden","permalink":"/events/design-systems-week/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden voor Design Systems Week","title_sm":"Aanmelden","description":"Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het hoe en waarom van design systems.","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Meld je aan voor Design Systems Week","slug":"/events/design-systems-week/aanmelden","displayed_sidebar":"community"},"sidebar":"community"}');
   var t = i(86070),
    a = i(18439),
    r = i(78599);
   const l = { title: 'Aanmelden voor Design Systems Week', title_sm: 'Aanmelden', description: 'Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het hoe en waarom van design systems.', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden', displayed_sidebar: 'community' },
    d = 'Meld je aan voor Design Systems Week',
    o = {},
    m = [];
   function c(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(s.header, { children: (0, t.jsx)(s.h1, { id: 'meld-je-aan-voor-design-systems-week', children: 'Meld je aan voor Design Systems Week' }) }), '\n', (0, t.jsxs)(s.p, { children: ['Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het ', (0, t.jsx)(s.strong, { children: 'hoe en waarom van design systems' }), '.'] }), '\n', (0, t.jsx)(s.p, { children: 'Design Systems Week 2026 is van 26 tot en met 29 oktober. We zijn nu druk bezig met de planning en voorbereiding.' }), '\n', (0, t.jsx)(s.p, { children: 'Laat je gegevens achter om op de hoogte te blijven!' }), '\n', (0, t.jsx)(r.W, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/aanmelden/bedankt', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '1' } })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, a.R)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  46565(e, s, i) {
   i.d(s, { c: () => t });
   var n = i(30758);
   function t() {
    const [e, s] = (0, n.useState)();
    return ((0, n.useEffect)(() => s(!0), []), e);
   }
  },
  78599(e, s, i) {
   i.d(s, { W: () => o });
   var n = i(29181),
    t = i(56561),
    a = i(30758),
    r = i(27890),
    l = i(46565),
    d = i(86070);
   const o = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: o = '', firstNameFieldId: m = '', orgId: c = '', interestsId: h = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: j = !1, disallowedInterestValues: g = [], workAreasId: v = '', privacyPolicyId: y = '', language: x, submitText: k = '', talkTitleId: f = '', talkDescriptionId: b = '', roleId: w = '', roleLegend: S = 'Wat is jouw rol?', roles: D = [], roleRequired: W = !1 }) => {
    const {
      register: _,
      handleSubmit: I,
      formState: { errors: R },
     } = (0, r.mN)(),
     $ = (0, a.useRef)(null),
     z = '2' === x?.value,
     N = (0, l.c)() ? window.location.search : '',
     B = new URLSearchParams(N),
     M = B.get('prefillEmail'),
     T = B.get('prefillName'),
     q =
      !!(h && p.length > 0) &&
      ((e, s) => {
       const i = [];
       let n = 1;
       for (let t = 0; t < e.length; t++) {
        for (; s.includes(n); ) n++;
        (i.push(n), n++);
       }
       return i;
      })(p, g);
    return (0, d.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: $,
     onSubmit: I(() => {
      $.current.submit();
     }),
     children: [(0, d.jsxs)(n.zB, { type: 'email', children: [(0, d.jsx)(t.f, { children: (0, d.jsx)(n.lR, { htmlFor: `id-${o}`, children: z ? 'Email address ' : 'E-mailadres' }) }), R[o] && (0, d.jsx)(n.YB, { children: R[o].message }), (0, d.jsx)(t.f, { children: (0, d.jsx)(n.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: M, 'aria-required': 'true', ..._(`${o}`, { required: { value: !0, message: z ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: z ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!R[o] }) })] }), (0, d.jsxs)(n.zB, { type: 'text', children: [(0, d.jsx)(t.f, { children: (0, d.jsx)(n.lR, { htmlFor: m, children: z ? 'Name' : 'Naam' }) }), R[m] && (0, d.jsx)(n.YB, { children: R[m].message }), (0, d.jsx)(t.f, { children: (0, d.jsx)(n.Rj, { id: m, name: m, type: 'text', defaultValue: T, autoComplete: 'given-name', 'aria-required': 'true', ..._(`${m}`, { required: { value: !0, message: z ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!R[m] }) })] }), f && (0, d.jsxs)(n.zB, { type: 'text', children: [(0, d.jsxs)(t.f, { children: [(0, d.jsx)(n.lR, { htmlFor: f, children: z ? 'Title of your talk' : 'Titel van je presentatie' }), (0, d.jsx)(n.JM, { children: z ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, d.jsx)(t.f, { children: (0, d.jsx)(n.Rj, { id: f, name: f, ..._(f, { required: { value: !0, message: z ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, d.jsxs)(n.zB, { type: 'text', children: [(0, d.jsxs)(t.f, { children: [(0, d.jsx)(n.lR, { htmlFor: b, children: z ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, d.jsx)(n.JM, { children: z ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, d.jsx)(t.f, { children: (0, d.jsx)(n.TM, { id: b, name: b, rows: 12, ..._(b, { required: { value: !0, message: z ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, d.jsxs)(n.zB, { type: 'text', children: [(0, d.jsx)(t.f, { children: (0, d.jsx)(n.lR, { htmlFor: c, children: z ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), R[c] && (0, d.jsx)(n.YB, { children: R[c].message }), (0, d.jsx)(t.f, { children: (0, d.jsx)(n.Rj, { id: c, name: c, type: 'text' }) })] }), h && (0, d.jsxs)(n.LB, { children: [(0, d.jsx)(t.f, { children: (0, d.jsxs)(n.u4, { children: [u, !j && ' (niet verplicht)'] }) }), (0, d.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, s) => (0, d.jsxs)(n.zB, { type: 'checkbox', children: [(0, d.jsx)(n.Sc, { name: `${h}[]`, value: q[s], id: `${h}-${q[s]}` }), (0, d.jsx)(n.lR, { type: 'checkbox', htmlFor: `${h}-${q[s]}`, children: e })] }, e))] }), w && (0, d.jsxs)(n.LB, { children: [(0, d.jsx)(t.f, { children: (0, d.jsxs)(n.u4, { children: [S, !W && ' (niet verplicht)'] }) }), (0, d.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), D.map((e, s) => (0, d.jsxs)(n.zB, { type: 'checkbox', children: [(0, d.jsx)(n.Sc, { name: `${w}[]`, id: `${w}-${s}` }), (0, d.jsx)(n.lR, { type: 'checkbox', htmlFor: `${w}-${s}`, children: e })] }, e))] }), v && (0, d.jsxs)(n.zB, { type: 'text', children: [(0, d.jsxs)(t.f, { children: [(0, d.jsx)(n.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, d.jsx)(n.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, d.jsx)(t.f, { children: (0, d.jsx)(n.TM, { id: v, name: v }) })] }), y && (0, d.jsxs)(n.zB, { type: 'text', children: [(0, d.jsx)(n.JM, { id: `${y}-description`, children: z ? (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, d.jsxs)(n.zB, { type: 'checkbox', children: [(0, d.jsx)(n.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ..._(`${y}[]`, { required: { value: !0, message: z ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!R[`${y}[]`] }), (0, d.jsx)(n.lR, { type: 'checkbox', htmlFor: `${y}-1`, children: z ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), R[y] && (0, d.jsx)(n.YB, { children: R[y].message })] }), x?.id && (0, d.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, d.jsx)(n.e2, { children: (0, d.jsx)(n.$n, { type: 'submit', appearance: 'primary-action-button', children: k || (z ? 'Sign up' : 'Aanmelden') }) }), (0, d.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, d.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, d.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, d.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, d.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
