'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [54932],
 {
  46565(e, n, i) {
   i.d(n, { c: () => r });
   var t = i(30758);
   function r() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  78599(e, n, i) {
   i.d(n, { W: () => d });
   var t = i(29181),
    r = i(56561),
    a = i(30758),
    s = i(27890),
    l = i(46565),
    o = i(86070);
   const d = ({ listId: e = '', laPostaId: n = '', thanksPage: i = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: p = '', interestsId: h = '', interestsLegend: m = 'Waar wil je NL Design System voor gebruiken?', interests: u = [], interestsRequired: v = !1, disallowedInterestValues: j = [], workAreasId: x = '', privacyPolicyId: g = '', language: y, submitText: f = '', talkTitleId: k = '', talkDescriptionId: b = '', roleId: w = '', roleLegend: D = 'Wat is jouw rol?', roles: I = [], roleRequired: _ = !1 }) => {
    const {
      register: z,
      handleSubmit: R,
      formState: { errors: $ },
     } = (0, s.mN)(),
     S = (0, a.useRef)(null),
     N = '2' === y?.value,
     B = (0, l.c)() ? window.location.search : '',
     M = new URLSearchParams(B),
     O = M.get('prefillEmail'),
     q = M.get('prefillName'),
     F =
      !!(h && u.length > 0) &&
      ((e, n) => {
       const i = [];
       let t = 1;
       for (let r = 0; r < e.length; r++) {
        for (; n.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(u, j);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: S,
     onSubmit: R(() => {
      S.current.submit();
     }),
     children: [(0, o.jsxs)(t.zB, { type: 'email', children: [(0, o.jsx)(r.f, { children: (0, o.jsx)(t.lR, { htmlFor: `id-${d}`, children: N ? 'Email address ' : 'E-mailadres' }) }), $[d] && (0, o.jsx)(t.YB, { children: $[d].message }), (0, o.jsx)(r.f, { children: (0, o.jsx)(t.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: O, 'aria-required': 'true', ...z(`${d}`, { required: { value: !0, message: N ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: N ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!$[d] }) })] }), (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(r.f, { children: (0, o.jsx)(t.lR, { htmlFor: c, children: N ? 'Name' : 'Naam' }) }), $[c] && (0, o.jsx)(t.YB, { children: $[c].message }), (0, o.jsx)(r.f, { children: (0, o.jsx)(t.Rj, { id: c, name: c, type: 'text', defaultValue: q, autoComplete: 'given-name', 'aria-required': 'true', ...z(`${c}`, { required: { value: !0, message: N ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!$[c] }) })] }), k && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(r.f, { children: [(0, o.jsx)(t.lR, { htmlFor: k, children: N ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(t.JM, { children: N ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(r.f, { children: (0, o.jsx)(t.Rj, { id: k, name: k, ...z(k, { required: { value: !0, message: N ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(r.f, { children: [(0, o.jsx)(t.lR, { htmlFor: b, children: N ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(t.JM, { children: N ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(r.f, { children: (0, o.jsx)(t.TM, { id: b, name: b, rows: 12, ...z(b, { required: { value: !0, message: N ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), p && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(r.f, { children: (0, o.jsx)(t.lR, { htmlFor: p, children: N ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), $[p] && (0, o.jsx)(t.YB, { children: $[p].message }), (0, o.jsx)(r.f, { children: (0, o.jsx)(t.Rj, { id: p, name: p, type: 'text' }) })] }), h && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(r.f, { children: (0, o.jsxs)(t.u4, { children: [m, !v && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, n) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${h}[]`, value: F[n], id: `${h}-${F[n]}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${h}-${F[n]}`, children: e })] }, e))] }), w && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(r.f, { children: (0, o.jsxs)(t.u4, { children: [D, !_ && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), I.map((e, n) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${w}[]`, id: `${w}-${n}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${w}-${n}`, children: e })] }, e))] }), x && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(r.f, { children: [(0, o.jsx)(t.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(r.f, { children: (0, o.jsx)(t.TM, { id: x, name: x }) })] }), g && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(t.JM, { id: `${g}-description`, children: N ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...z(`${g}[]`, { required: { value: !0, message: N ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!$[`${g}[]`] }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${g}-1`, children: N ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), $[g] && (0, o.jsx)(t.YB, { children: $[g].message })] }), y?.id && (0, o.jsx)('input', { type: 'hidden', name: y.id, value: y.value }), (0, o.jsx)(t.e2, { children: (0, o.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: f || (N ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  91316(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => o, default: () => h, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/events/developer-open-hour/aanmelden","title":"Aanmelden voor de Developer Open Hour","description":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit. Door je aan te melden houden we je op de hoogte","source":"@site/docs/community/events/developer-open-hour/aanmelden.mdx","sourceDirName":"community/events/developer-open-hour","slug":"/events/developer-open-hour/aanmelden","permalink":"/events/developer-open-hour/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/developer-open-hour/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden voor de Developer Open Hour","title_sm":"Aanmelden","description":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit. Door je aan te melden houden we je op de hoogte","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Aanmelden","slug":"/events/developer-open-hour/aanmelden"},"sidebar":"community","previous":{"title":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.","permalink":"/events/developer-open-hour"},"next":{"title":"Tijdens de MijnServices Check-in delen we inzichten, idee\xebn en voortgang rond de doorontwikkeling van NL Design System-componenten die binnen MijnOmgevingen worden gebruikt.","permalink":"/events/mijn-services-check-in"}}');
   var r = i(86070),
    a = i(18439),
    s = i(78599);
   const l = { title: 'Aanmelden voor de Developer Open Hour', title_sm: 'Aanmelden', description: 'In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit. Door je aan te melden houden we je op de hoogte', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/events/developer-open-hour/aanmelden' },
    o = 'Meld je aan voor de Developer Open Hour',
    d = {},
    c = [];
   function p(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'meld-je-aan-voor-de-developer-open-hour', children: 'Meld je aan voor de Developer Open Hour' }) }), '\n', (0, r.jsx)(n.p, { children: 'In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.' }), '\n', (0, r.jsx)(n.p, { children: 'Deze Developer Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, r.jsx)(s.W, { listId: 'p3jpgjmp4x', emailFieldId: 'Cx3tegsyt2', firstNameFieldId: 'QUBgX4085P', thanksPage: 'https://nldesignsystem.nl/events/developer-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
