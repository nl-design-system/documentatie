'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [67740],
 {
  31641(e, n, t) {
   t.d(n, { W: () => m });
   var i = t(29181),
    a = t(46847),
    r = t(56561),
    s = t(30758),
    d = t(27890),
    l = t(90515),
    o = t(13526),
    c = t(86070);
   const m = ({ listId: e = '', laPostaId: n = '', thanksPage: t = '', emailFieldId: m = '', firstNameFieldId: h = '', orgId: u = '', interestsId: p = '', interestsLegend: g = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: x = !1, disallowedInterestValues: v = [], workAreasId: f = '', privacyPolicyId: y = '', language: b, submitText: k = '', talkTitleId: $ = '', talkDescriptionId: w = '', roleId: I = '', roleLegend: D = 'Wat is jouw rol?', roles: z = [], roleRequired: _ = !1 }) => {
    const {
      register: R,
      handleSubmit: E,
      formState: { errors: N },
     } = (0, d.mN)({ mode: 'onBlur' }),
     S = (0, s.useRef)(null),
     B = '2' === b?.value,
     q = (0, l.c)() ? window.location.search : '',
     F = new URLSearchParams(q),
     T = F.get('prefillEmail'),
     W = F.get('prefillName'),
     M =
      !!(p && j.length > 0) &&
      ((e, n) => {
       const t = [];
       let i = 1;
       for (let a = 0; a < e.length; a++) {
        for (; n.includes(i); ) i++;
        (t.push(i), i++);
       }
       return t;
      })(j, v);
    return (0, c.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: S,
     onSubmit: E(() => {
      S.current.submit();
     }),
     children: [(0, c.jsxs)(i.zB, { type: 'email', children: [(0, c.jsx)(r.f, { children: (0, c.jsx)(i.lR, { htmlFor: `id-${m}`, children: B ? 'Email address ' : 'E-mailadres' }) }), N[m] && (0, c.jsx)(i.YB, { role: 'alert', id: `${m}-error`, children: N[m].message }), (0, c.jsx)(r.f, { children: (0, c.jsx)(i.Rj, { id: `id-${m}`, name: m, type: 'email', autoComplete: 'email', defaultValue: T, 'aria-required': 'true', 'aria-describedby': N[m] && `${m}-error`, ...R(`${m}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: B ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!N[m] }) })] }), (0, c.jsxs)(i.zB, { type: 'text', children: [(0, c.jsx)(r.f, { children: (0, c.jsx)(i.lR, { htmlFor: h, children: B ? 'Name' : 'Naam' }) }), N[h] && (0, c.jsx)(i.YB, { role: 'alert', id: `${h}-error`, children: N[h].message }), (0, c.jsx)(r.f, { children: (0, c.jsx)(i.Rj, { id: h, name: h, type: 'text', defaultValue: W, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': N[h] && `${h}-error`, ...R(`${h}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!N[h] }) })] }), $ && (0, c.jsxs)(i.zB, { type: 'text', children: [(0, c.jsxs)(r.f, { children: [(0, c.jsx)(i.lR, { htmlFor: $, children: B ? 'Title of your talk' : 'Titel van je presentatie' }), (0, c.jsx)(i.JM, { id: `${$}-description`, children: B ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, c.jsx)(r.f, { children: (0, c.jsx)(i.Rj, { id: $, name: $, 'aria-describedby': `${$}-description`, ...R($, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, c.jsxs)(i.zB, { type: 'text', children: [(0, c.jsxs)(r.f, { children: [(0, c.jsx)(i.lR, { htmlFor: w, children: B ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, c.jsx)(i.JM, { id: `${w}-description`, children: B ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, c.jsx)(r.f, { children: (0, c.jsx)(i.TM, { id: w, name: w, rows: 12, 'aria-describedby': `${w}-description`, ...R(w, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, c.jsxs)(i.zB, { type: 'text', children: [(0, c.jsx)(r.f, { children: (0, c.jsx)(i.lR, { htmlFor: u, children: B ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), N[u] && (0, c.jsx)(i.YB, { children: N[u].message }), (0, c.jsx)(r.f, { children: (0, c.jsx)(i.Rj, { id: u, name: u, type: 'text', autoComplete: 'organization' }) })] }), p && (0, c.jsxs)(i.LB, { 'aria-describedby': `${p}-description`, children: [(0, c.jsxs)(i.u4, { children: [g, !x && ' (niet verplicht)'] }), (0, c.jsx)(i.JM, { id: `${p}-description`, children: 'Meerdere antwoorden mogelijk.' }), j.map((e, n) => (0, c.jsxs)(i.zB, { type: 'checkbox', children: [(0, c.jsx)(i.Sc, { name: `${p}[]`, value: M[n], id: `${p}-${M[n]}` }), (0, c.jsx)(i.lR, { type: 'checkbox', htmlFor: `${p}-${M[n]}`, children: e })] }, e))] }), I && (0, c.jsxs)(i.LB, { 'aria-describedby': `${I}-description`, children: [(0, c.jsxs)(i.u4, { children: [D, !_ && ' (niet verplicht)'] }), (0, c.jsx)(i.JM, { id: `${I}-description`, children: 'Meerdere antwoorden mogelijk.' }), z.map((e, n) => (0, c.jsxs)(i.zB, { type: 'checkbox', children: [(0, c.jsx)(i.Sc, { name: `${I}[]`, id: `${I}-${n}` }), (0, c.jsx)(i.lR, { type: 'checkbox', htmlFor: `${I}-${n}`, children: e })] }, e))] }), f && (0, c.jsxs)(i.zB, { type: 'text', children: [(0, c.jsxs)(r.f, { children: [(0, c.jsx)(i.lR, { htmlFor: f, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, c.jsx)(i.JM, { id: `${f}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, c.jsx)(r.f, { children: (0, c.jsx)(i.TM, { id: f, name: f, 'aria-describedby': `${f}-description` }) })] }), y && (0, c.jsxs)(i.zB, { type: 'text', children: [(0, c.jsx)(i.JM, { id: `${y}-description`, children: B ? (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, c.jsxs)(i.zB, { type: 'checkbox', children: [(0, c.jsx)(i.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': (0, o.A)({ [`${y}-description`]: !0, [`${y}-error`]: N[y] }), 'aria-required': 'true', ...R(`${y}[]`, { required: { value: !0, message: B ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!N[`${y}`] }), (0, c.jsx)(i.lR, { type: 'checkbox', htmlFor: `${y}-1`, children: B ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), N[`${y}`] && (0, c.jsx)(i.YB, { role: 'alert', id: `${y}-error`, children: N[`${y}`].message })] }), b?.id && (0, c.jsx)('input', { type: 'hidden', name: b.id, value: b.value }), (0, c.jsx)(i.e2, { children: (0, c.jsx)(a.$, { type: 'submit', purpose: 'primary', children: k || (B ? 'Sign up' : 'Aanmelden') }) }), (0, c.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, c.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, c.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, c.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, c.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, n, t) {
   t.d(n, { $: () => i.$n });
   var i = t(50805);
  },
  83944(e, n, t) {
   (t.r(n), t.d(n, { assets: () => o, contentTitle: () => l, default: () => h, frontMatter: () => d, metadata: () => i, toc: () => c }));
   const i = JSON.parse('{"id":"community/events/estafettemodeldag","title":"Estafettemodeldag","description":"In de Estafettemodeldag werken het kernteam en de community samen om componenten door het Estafettemodel te brengen","source":"@site/docs/community/events/estafettemodeldag.mdx","sourceDirName":"community/events","slug":"/community/events/estafettemodeldag","permalink":"/community/events/estafettemodeldag","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/estafettemodeldag.mdx","tags":[],"version":"current","frontMatter":{"title":"Estafettemodeldag","description":"In de Estafettemodeldag werken het kernteam en de community samen om componenten door het Estafettemodel te brengen","navigation_order":7,"hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Estafettemodeldag","pagination_label":"Estafettemodeldag","slug":"/community/events/estafettemodeldag"},"sidebar":"community","previous":{"title":"Design Open Dag","permalink":"/events/design-open-dag"},"next":{"title":"Over Design Systems Week","permalink":"/events/design-systems-week"}}');
   var a = t(86070),
    r = t(18439),
    s = t(31641);
   const d = { title: 'Estafettemodeldag', description: 'In de Estafettemodeldag werken het kernteam en de community samen om componenten door het Estafettemodel te brengen', navigation_order: 7, hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Estafettemodeldag', pagination_label: 'Estafettemodeldag', slug: '/community/events/estafettemodeldag' },
    l = 'Estafettemodeldag',
    o = {},
    c = [
     { value: 'Planning', id: 'planning', level: 2 },
     { value: 'Aanmelden', id: 'aanmelden', level: 2 },
    ];
   function m(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'estafettemodeldag', children: 'Estafettemodeldag' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Op ', (0, a.jsx)(n.strong, { children: 'estafettemodeldagen' }), ' gaan we met designers en developers langs componenten, om na te gaan of ze voldoen aan onze ', (0, a.jsx)(n.a, { href: '/handboek/component-bijdragen/definition-of-done/', children: 'Definition of Done' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Zo krijgen we inzicht in welke componenten welke status hebben, en werken we toe naar het verder brengen van componenten via het ', (0, a.jsx)(n.a, { href: '/handboek/estafettemodel/', children: 'estafettemodel' }), '.'] }), '\n', (0, a.jsx)(n.h2, { id: 'planning', children: 'Planning' }), '\n', (0, a.jsx)(n.p, { children: 'Dit is de planning van onze estafettemodeldagen in 2026:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'vrijdag 17 april, 10:00 - 17:00 (Den Haag)' }), '\n', (0, a.jsx)(n.li, { children: 'vrijdag 22 mei, 10:00 - 17:00 (Den Haag)' }), '\n', (0, a.jsx)(n.li, { children: 'vrijdag 19 juni, 10:00 - 17:00 (Utrecht)' }), '\n', (0, a.jsx)(n.li, { children: 'vrijdag 18 september, 10:00 - 17:00 (Den Haag)' }), '\n', (0, a.jsx)(n.li, { children: 'vrijdag 13 november, 10:00 - 17:00 (Den Haag)' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Laat je gegevens in het aanmeldformulier hieronder achter om de kalenderuitnodigingen te ontvangen.' }), '\n', (0, a.jsx)(n.h2, { id: 'aanmelden', children: 'Aanmelden' }), '\n', (0, a.jsx)(n.p, { children: 'Estafettemodeldagen zijn publiek toegankelijk, zolang er ruimte is. We proberen uit te komen op een goede mix van community (organisaties + leveranciers) en kernteam.' }), '\n', (0, a.jsx)(n.p, { children: 'Laat je gegevens hieronder achter om een kalenderuitnodiging te ontvangen.' }), '\n', (0, a.jsx)(s.W, { listId: '7igukerls2', emailFieldId: 'GL1eTDzrWn', firstNameFieldId: 'QYuFIjwgDC', orgId: 'n0WNZXSMs9', privacyPolicyId: 'GskTzQ4zjq', thanksPage: 'https://nldesignsystem.nl/community/estafettemodeldag/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
   }
  },
  90515(e, n, t) {
   t.d(n, { c: () => a });
   var i = t(30758);
   function a() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
 },
]);
