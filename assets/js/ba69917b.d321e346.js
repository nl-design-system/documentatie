'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [43146],
 {
  8867(e, s, i) {
   (i.r(s), i.d(s, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => l, metadata: () => n, toc: () => m }));
   const n = JSON.parse('{"id":"community/events/design-systems-week/aanmelden","title":"Aanmelden \xb7 Design Systems Week","description":"Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het hoe en waarom van design systems.","source":"@site/docs/community/events/design-systems-week/aanmelden.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week/aanmelden","permalink":"/events/design-systems-week/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden \xb7 Design Systems Week","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Meld je aan voor Design Systems Week","slug":"/events/design-systems-week/aanmelden","displayed_sidebar":"community"},"sidebar":"community"}');
   var t = i(86070),
    a = i(18439),
    r = i(37447);
   const l = { title: 'Aanmelden \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden', displayed_sidebar: 'community' },
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
  37447(e, s, i) {
   i.d(s, { W: () => d });
   var n = i(29181),
    t = i(30758),
    a = i(27890),
    r = i(54565),
    l = i(86070);
   const d = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: m = '', interestsId: c = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: u = [], interestsRequired: j = !1, disallowedInterestValues: p = [], workAreasId: g = '', privacyPolicyId: v = '', language: x, submitText: y = '', talkTitleId: k = '', talkDescriptionId: f = '', roleId: b = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: S = !1 }) => {
    const {
      register: D,
      handleSubmit: W,
      formState: { errors: _ },
     } = (0, a.mN)(),
     R = (0, t.useRef)(null),
     $ = '2' === x?.value,
     I = (0, r.c)() ? window.location.search : '',
     B = new URLSearchParams(I),
     M = B.get('prefillEmail'),
     q = B.get('prefillName'),
     F =
      !!(c && u.length > 0) &&
      ((e, s) => {
       const i = [];
       let n = 1;
       for (let t = 0; t < e.length; t++) {
        for (; s.includes(n); ) n++;
        (i.push(n), n++);
       }
       return i;
      })(u, p);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: R,
     onSubmit: W(() => {
      R.current.submit();
     }),
     children: [(0, l.jsxs)(n.zB, { type: 'email', children: [(0, l.jsx)(n.fz, { children: (0, l.jsx)(n.lR, { htmlFor: `id-${d}`, children: $ ? 'Email address ' : 'E-mailadres' }) }), _[d] && (0, l.jsx)(n.YB, { children: _[d].message }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: M, 'aria-required': 'true', ...D(`${d}`, { required: { value: !0, message: $ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: $ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!_[d] }) })] }), (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsx)(n.fz, { children: (0, l.jsx)(n.lR, { htmlFor: o, children: $ ? 'Name' : 'Naam' }) }), _[o] && (0, l.jsx)(n.YB, { children: _[o].message }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: o, name: o, type: 'text', defaultValue: q, autoComplete: 'given-name', 'aria-required': 'true', ...D(`${o}`, { required: { value: !0, message: $ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!_[o] }) })] }), k && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsxs)(n.fz, { children: [(0, l.jsx)(n.lR, { htmlFor: k, children: $ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(n.JM, { children: $ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: k, name: k, ...D(k, { required: { value: !0, message: $ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsxs)(n.fz, { children: [(0, l.jsx)(n.lR, { htmlFor: f, children: $ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(n.JM, { children: $ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.TM, { id: f, name: f, rows: 12, ...D(f, { required: { value: !0, message: $ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsx)(n.fz, { children: (0, l.jsx)(n.lR, { htmlFor: m, children: $ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), _[m] && (0, l.jsx)(n.YB, { children: _[m].message }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: m, name: m, type: 'text' }) })] }), c && (0, l.jsxs)(n.LB, { children: [(0, l.jsx)(n.fz, { children: (0, l.jsxs)(n.u4, { children: [h, !j && ' (niet verplicht)'] }) }), (0, l.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, s) => (0, l.jsxs)(n.zB, { type: 'checkbox', children: [(0, l.jsx)(n.Sc, { name: `${c}[]`, value: F[s], id: `${c}-${F[s]}` }), (0, l.jsx)(n.lR, { htmlFor: `${c}-${F[s]}`, children: e })] }, e))] }), b && (0, l.jsxs)(n.LB, { children: [(0, l.jsx)(n.fz, { children: (0, l.jsxs)(n.u4, { children: [w, !S && ' (niet verplicht)'] }) }), (0, l.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, s) => (0, l.jsxs)(n.zB, { type: 'checkbox', children: [(0, l.jsx)(n.Sc, { name: `${b}[]`, id: `${b}-${s}` }), (0, l.jsx)(n.lR, { htmlFor: `${b}-${s}`, children: e })] }, e))] }), g && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsxs)(n.fz, { children: [(0, l.jsx)(n.lR, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(n.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.TM, { id: g, name: g }) })] }), v && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsx)(n.JM, { id: `${v}-description`, children: $ ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(n.zB, { type: 'checkbox', children: [(0, l.jsx)(n.Sc, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...D(`${v}[]`, { required: { value: !0, message: $ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!_[`${v}[]`] }), (0, l.jsx)(n.lR, { htmlFor: `${v}-1`, children: $ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), _[v] && (0, l.jsx)(n.YB, { children: _[v].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(n.e2, { children: (0, l.jsx)(n.$n, { type: 'submit', appearance: 'primary-action-button', children: y || ($ ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  54565(e, s, i) {
   i.d(s, { c: () => t });
   var n = i(30758);
   function t() {
    const [e, s] = (0, n.useState)();
    return ((0, n.useEffect)(() => s(!0), []), e);
   }
  },
 },
]);
