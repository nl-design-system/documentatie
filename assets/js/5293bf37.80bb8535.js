'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [67740],
 {
  31641(e, n, t) {
   t.d(n, { W: () => m });
   var i = t(29181),
    a = t(46847),
    s = t(56561),
    r = t(30758),
    l = t(27890),
    d = t(90515),
    o = t(86070);
   const m = ({ listId: e = '', laPostaId: n = '', thanksPage: t = '', emailFieldId: m = '', firstNameFieldId: c = '', orgId: h = '', interestsId: u = '', interestsLegend: g = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: j = !1, disallowedInterestValues: x = [], workAreasId: v = '', privacyPolicyId: f = '', language: y, submitText: k = '', talkTitleId: b = '', talkDescriptionId: w = '', roleId: I = '', roleLegend: D = 'Wat is jouw rol?', roles: $ = [], roleRequired: z = !1 }) => {
    const {
      register: _,
      handleSubmit: R,
      formState: { errors: E },
     } = (0, l.mN)(),
     N = (0, r.useRef)(null),
     S = '2' === y?.value,
     B = (0, d.c)() ? window.location.search : '',
     q = new URLSearchParams(B),
     F = q.get('prefillEmail'),
     T = q.get('prefillName'),
     W =
      !!(u && p.length > 0) &&
      ((e, n) => {
       const t = [];
       let i = 1;
       for (let a = 0; a < e.length; a++) {
        for (; n.includes(i); ) i++;
        (t.push(i), i++);
       }
       return t;
      })(p, x);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: N,
     onSubmit: R(() => {
      N.current.submit();
     }),
     children: [(0, o.jsxs)(i.zB, { type: 'email', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(i.lR, { htmlFor: `id-${m}`, children: S ? 'Email address ' : 'E-mailadres' }) }), E[m] && (0, o.jsx)(i.YB, { children: E[m].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.Rj, { id: `id-${m}`, name: m, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', ..._(`${m}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: S ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!E[m] }) })] }), (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(i.lR, { htmlFor: c, children: S ? 'Name' : 'Naam' }) }), E[c] && (0, o.jsx)(i.YB, { children: E[c].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.Rj, { id: c, name: c, type: 'text', defaultValue: T, autoComplete: 'given-name', 'aria-required': 'true', ..._(`${c}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!E[c] }) })] }), b && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(i.lR, { htmlFor: b, children: S ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(i.JM, { children: S ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.Rj, { id: b, name: b, ..._(b, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(i.lR, { htmlFor: w, children: S ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(i.JM, { children: S ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.TM, { id: w, name: w, rows: 12, ..._(w, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(i.lR, { htmlFor: h, children: S ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), E[h] && (0, o.jsx)(i.YB, { children: E[h].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.Rj, { id: h, name: h, type: 'text' }) })] }), u && (0, o.jsxs)(i.LB, { children: [(0, o.jsx)(s.f, { children: (0, o.jsxs)(i.u4, { children: [g, !j && ' (niet verplicht)'] }) }), (0, o.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, n) => (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { name: `${u}[]`, value: W[n], id: `${u}-${W[n]}` }), (0, o.jsx)(i.lR, { type: 'checkbox', htmlFor: `${u}-${W[n]}`, children: e })] }, e))] }), I && (0, o.jsxs)(i.LB, { children: [(0, o.jsx)(s.f, { children: (0, o.jsxs)(i.u4, { children: [D, !z && ' (niet verplicht)'] }) }), (0, o.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), $.map((e, n) => (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { name: `${I}[]`, id: `${I}-${n}` }), (0, o.jsx)(i.lR, { type: 'checkbox', htmlFor: `${I}-${n}`, children: e })] }, e))] }), v && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(i.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(i.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.TM, { id: v, name: v }) })] }), f && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(i.JM, { id: `${f}-description`, children: S ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { value: '1', id: `${f}-1`, 'aria-describedby': `${f}-description`, 'aria-required': 'true', ..._(`${f}[]`, { required: { value: !0, message: S ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!E[`${f}[]`] }), (0, o.jsx)(i.lR, { type: 'checkbox', htmlFor: `${f}-1`, children: S ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), E[f] && (0, o.jsx)(i.YB, { children: E[f].message })] }), y?.id && (0, o.jsx)('input', { type: 'hidden', name: y.id, value: y.value }), (0, o.jsx)(i.e2, { children: (0, o.jsx)(a.$, { type: 'submit', purpose: 'primary', children: k || (S ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, n, t) {
   t.d(n, { $: () => i.$n });
   var i = t(50805);
  },
  83944(e, n, t) {
   (t.r(n), t.d(n, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => l, metadata: () => i, toc: () => m }));
   const i = JSON.parse('{"id":"community/events/estafettemodeldag","title":"Estafettemodeldag","description":"In de Estafettemodeldag werken het kernteam en de community samen om componenten door het Estafettemodel te brengen","source":"@site/docs/community/events/estafettemodeldag.mdx","sourceDirName":"community/events","slug":"/community/events/estafettemodeldag","permalink":"/community/events/estafettemodeldag","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/estafettemodeldag.mdx","tags":[],"version":"current","frontMatter":{"title":"Estafettemodeldag","description":"In de Estafettemodeldag werken het kernteam en de community samen om componenten door het Estafettemodel te brengen","navigation_order":7,"hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Estafettemodeldag","pagination_label":"Estafettemodeldag","slug":"/community/events/estafettemodeldag"},"sidebar":"community","previous":{"title":"Design Open Dag","permalink":"/events/design-open-dag"},"next":{"title":"Over Design Systems Week","permalink":"/events/design-systems-week"}}');
   var a = t(86070),
    s = t(18439),
    r = t(31641);
   const l = { title: 'Estafettemodeldag', description: 'In de Estafettemodeldag werken het kernteam en de community samen om componenten door het Estafettemodel te brengen', navigation_order: 7, hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Estafettemodeldag', pagination_label: 'Estafettemodeldag', slug: '/community/events/estafettemodeldag' },
    d = 'Estafettemodeldag',
    o = {},
    m = [
     { value: 'Planning', id: 'planning', level: 2 },
     { value: 'Aanmelden', id: 'aanmelden', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'estafettemodeldag', children: 'Estafettemodeldag' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Op ', (0, a.jsx)(n.strong, { children: 'estafettemodeldagen' }), ' gaan we met designers en developers langs componenten, om na te gaan of ze voldoen aan onze ', (0, a.jsx)(n.a, { href: '/handboek/component-bijdragen/definition-of-done/', children: 'Definition of Done' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Zo krijgen we inzicht in welke componenten welke status hebben, en werken we toe naar het verder brengen van componenten via het ', (0, a.jsx)(n.a, { href: '/handboek/estafettemodel/', children: 'estafettemodel' }), '.'] }), '\n', (0, a.jsx)(n.h2, { id: 'planning', children: 'Planning' }), '\n', (0, a.jsx)(n.p, { children: 'Dit is de planning van onze estafettemodeldagen in 2026:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'vrijdag 17 april, 10:00 - 17:00 (Den Haag)' }), '\n', (0, a.jsx)(n.li, { children: 'vrijdag 22 mei, 10:00 - 17:00 (Den Haag)' }), '\n', (0, a.jsx)(n.li, { children: 'vrijdag 19 juni, 10:00 - 17:00 (Utrecht)' }), '\n', (0, a.jsx)(n.li, { children: 'vrijdag 18 september, 10:00 - 17:00 (Den Haag)' }), '\n', (0, a.jsx)(n.li, { children: 'vrijdag 13 november, 10:00 - 17:00 (Den Haag)' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Laat je gegevens in het aanmeldformulier hieronder achter om de kalenderuitnodigingen te ontvangen.' }), '\n', (0, a.jsx)(n.h2, { id: 'aanmelden', children: 'Aanmelden' }), '\n', (0, a.jsx)(n.p, { children: 'Estafettemodeldagen zijn publiek toegankelijk, zolang er ruimte is. We proberen uit te komen op een goede mix van community (organisaties + leveranciers) en kernteam.' }), '\n', (0, a.jsx)(n.p, { children: 'Laat je gegevens hieronder achter om een kalenderuitnodiging te ontvangen.' }), '\n', (0, a.jsx)(r.W, { listId: '7igukerls2', emailFieldId: 'GL1eTDzrWn', firstNameFieldId: 'QYuFIjwgDC', orgId: 'n0WNZXSMs9', privacyPolicyId: 'GskTzQ4zjq', thanksPage: 'https://nldesignsystem.nl/community/estafettemodeldag/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
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
