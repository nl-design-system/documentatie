'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [67740],
 {
  37447(e, t, n) {
   n.d(t, { W: () => d });
   var i = n(29181),
    a = n(30758),
    s = n(27890),
    r = n(54565),
    l = n(86070);
   const d = ({ listId: e = '', laPostaId: t = '', thanksPage: n = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: c = '', interestsId: m = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: u = [], interestsRequired: g = !1, disallowedInterestValues: p = [], workAreasId: j = '', privacyPolicyId: x = '', language: v, submitText: f = '', talkTitleId: y = '', talkDescriptionId: k = '', roleId: b = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: I = !1 }) => {
    const {
      register: D,
      handleSubmit: R,
      formState: { errors: $ },
     } = (0, s.mN)(),
     E = (0, a.useRef)(null),
     _ = '2' === v?.value,
     S = (0, r.c)() ? window.location.search : '',
     B = new URLSearchParams(S),
     q = B.get('prefillEmail'),
     F = B.get('prefillName'),
     T =
      !!(m && u.length > 0) &&
      ((e, t) => {
       const n = [];
       let i = 1;
       for (let a = 0; a < e.length; a++) {
        for (; t.includes(i); ) i++;
        (n.push(i), i++);
       }
       return n;
      })(u, p);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: E,
     onSubmit: R(() => {
      E.current.submit();
     }),
     children: [(0, l.jsxs)(i.zB, { type: 'email', children: [(0, l.jsx)(i.fz, { children: (0, l.jsx)(i.lR, { htmlFor: `id-${d}`, children: _ ? 'Email address ' : 'E-mailadres' }) }), $[d] && (0, l.jsx)(i.YB, { children: $[d].message }), (0, l.jsx)(i.fz, { children: (0, l.jsx)(i.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: q, 'aria-required': 'true', ...D(`${d}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: _ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!$[d] }) })] }), (0, l.jsxs)(i.zB, { type: 'text', children: [(0, l.jsx)(i.fz, { children: (0, l.jsx)(i.lR, { htmlFor: o, children: _ ? 'Name' : 'Naam' }) }), $[o] && (0, l.jsx)(i.YB, { children: $[o].message }), (0, l.jsx)(i.fz, { children: (0, l.jsx)(i.Rj, { id: o, name: o, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...D(`${o}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!$[o] }) })] }), y && (0, l.jsxs)(i.zB, { type: 'text', children: [(0, l.jsxs)(i.fz, { children: [(0, l.jsx)(i.lR, { htmlFor: y, children: _ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(i.JM, { children: _ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(i.fz, { children: (0, l.jsx)(i.Rj, { id: y, name: y, ...D(y, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, l.jsxs)(i.zB, { type: 'text', children: [(0, l.jsxs)(i.fz, { children: [(0, l.jsx)(i.lR, { htmlFor: k, children: _ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(i.JM, { children: _ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(i.fz, { children: (0, l.jsx)(i.TM, { id: k, name: k, rows: 12, ...D(k, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(i.zB, { type: 'text', children: [(0, l.jsx)(i.fz, { children: (0, l.jsx)(i.lR, { htmlFor: c, children: _ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), $[c] && (0, l.jsx)(i.YB, { children: $[c].message }), (0, l.jsx)(i.fz, { children: (0, l.jsx)(i.Rj, { id: c, name: c, type: 'text' }) })] }), m && (0, l.jsxs)(i.LB, { children: [(0, l.jsx)(i.fz, { children: (0, l.jsxs)(i.u4, { children: [h, !g && ' (niet verplicht)'] }) }), (0, l.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, t) => (0, l.jsxs)(i.zB, { type: 'checkbox', children: [(0, l.jsx)(i.Sc, { name: `${m}[]`, value: T[t], id: `${m}-${T[t]}` }), (0, l.jsx)(i.lR, { htmlFor: `${m}-${T[t]}`, children: e })] }, e))] }), b && (0, l.jsxs)(i.LB, { children: [(0, l.jsx)(i.fz, { children: (0, l.jsxs)(i.u4, { children: [w, !I && ' (niet verplicht)'] }) }), (0, l.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, t) => (0, l.jsxs)(i.zB, { type: 'checkbox', children: [(0, l.jsx)(i.Sc, { name: `${b}[]`, id: `${b}-${t}` }), (0, l.jsx)(i.lR, { htmlFor: `${b}-${t}`, children: e })] }, e))] }), j && (0, l.jsxs)(i.zB, { type: 'text', children: [(0, l.jsxs)(i.fz, { children: [(0, l.jsx)(i.lR, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(i.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(i.fz, { children: (0, l.jsx)(i.TM, { id: j, name: j }) })] }), x && (0, l.jsxs)(i.zB, { type: 'text', children: [(0, l.jsx)(i.JM, { id: `${x}-description`, children: _ ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(i.zB, { type: 'checkbox', children: [(0, l.jsx)(i.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...D(`${x}[]`, { required: { value: !0, message: _ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!$[`${x}[]`] }), (0, l.jsx)(i.lR, { htmlFor: `${x}-1`, children: _ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), $[x] && (0, l.jsx)(i.YB, { children: $[x].message })] }), v?.id && (0, l.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, l.jsx)(i.e2, { children: (0, l.jsx)(i.$n, { type: 'submit', appearance: 'primary-action-button', children: f || (_ ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: t }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  54565(e, t, n) {
   n.d(t, { c: () => a });
   var i = n(30758);
   function a() {
    const [e, t] = (0, i.useState)();
    return ((0, i.useEffect)(() => t(!0), []), e);
   }
  },
  77063(e, t, n) {
   (n.r(t), n.d(t, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => l, metadata: () => i, toc: () => c }));
   const i = JSON.parse('{"id":"community/events/estafettemodeldag","title":"Estafettemodeldag","description":"In de Estafettemodeldag werken het kernteam en de community samen om componenten door het Estafettemodel te brengen","source":"@site/docs/community/events/estafettemodeldag.mdx","sourceDirName":"community/events","slug":"/community/events/estafettemodeldag","permalink":"/community/events/estafettemodeldag","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/estafettemodeldag.mdx","tags":[],"version":"current","frontMatter":{"title":"Estafettemodeldag","description":"In de Estafettemodeldag werken het kernteam en de community samen om componenten door het Estafettemodel te brengen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Estafettemodeldag","pagination_label":"Estafettemodeldag","slug":"/community/events/estafettemodeldag"},"sidebar":"community","previous":{"title":"Design Open Dag","permalink":"/events/design-open-dag"},"next":{"title":"Over Design Systems Week","permalink":"/events/design-systems-week"}}');
   var a = n(86070),
    s = n(18439),
    r = n(37447);
   const l = { title: 'Estafettemodeldag', description: 'In de Estafettemodeldag werken het kernteam en de community samen om componenten door het Estafettemodel te brengen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Estafettemodeldag', pagination_label: 'Estafettemodeldag', slug: '/community/events/estafettemodeldag' },
    d = 'Estafettemodeldag',
    o = {},
    c = [
     { value: 'Planning', id: 'planning', level: 2 },
     { value: 'Aanmelden', id: 'aanmelden', level: 2 },
    ];
   function m(e) {
    const t = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.header, { children: (0, a.jsx)(t.h1, { id: 'estafettemodeldag', children: 'Estafettemodeldag' }) }), '\n', (0, a.jsxs)(t.p, { children: ['Op ', (0, a.jsx)(t.strong, { children: 'estafettemodeldagen' }), ' gaan we met designers en developers langs componenten, om na te gaan of ze voldoen aan onze ', (0, a.jsx)(t.a, { href: '/componenten/definition-of-done/', children: 'Definition of Done' }), '.'] }), '\n', (0, a.jsxs)(t.p, { children: ['Zo krijgen we inzicht in welke componenten welke status hebben, en werken we toe naar het verder brengen van componenten via het ', (0, a.jsx)(t.a, { href: '/handboek/estafettemodel/', children: 'estafettemodel' }), '.'] }), '\n', (0, a.jsx)(t.h2, { id: 'planning', children: 'Planning' }), '\n', (0, a.jsx)(t.p, { children: 'Dit is de planning van onze estafettemodeldagen in 2025:' }), '\n', (0, a.jsxs)(t.ul, { children: ['\n', (0, a.jsx)(t.li, { children: 'vrijdag 10 oktober, 10:00 - 17:00 (Utrecht)' }), '\n', (0, a.jsx)(t.li, { children: 'vrijdag 7 november, 10:00 - 17:00 (Utrecht)' }), '\n', (0, a.jsx)(t.li, { children: 'vrijdag 28 november, 10:00 - 17:00 (Utrecht)' }), '\n', (0, a.jsx)(t.li, { children: 'vrijdag 19 december, 10:00 - 17:00 (Utrecht)' }), '\n'] }), '\n', (0, a.jsx)(t.p, { children: 'Laat je gegevens in het aanmeldformulier hieronder achter om de kalenderuitnodigingen te ontvangen.' }), '\n', (0, a.jsx)(t.h2, { id: 'aanmelden', children: 'Aanmelden' }), '\n', (0, a.jsx)(t.p, { children: 'Estafettemodeldagen zijn publiek toegankelijk, zolang er ruimte is. We proberen uit te komen op een goede mix van community (organisaties + leveranciers) en kernteam.' }), '\n', (0, a.jsx)(t.p, { children: 'Laat je gegevens hieronder achter om een kalenderuitnodiging te ontvangen.' }), '\n', (0, a.jsx)(r.W, { listId: '7igukerls2', emailFieldId: 'GL1eTDzrWn', firstNameFieldId: 'QYuFIjwgDC', orgId: 'n0WNZXSMs9', privacyPolicyId: 'GskTzQ4zjq', thanksPage: 'https://nldesignsystem.nl/community/estafettemodeldag/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function h(e = {}) {
    const { wrapper: t } = { ...(0, s.R)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
   }
  },
 },
]);
