'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [67740],
 {
  51629: (e, n, t) => {
   t.d(n, { W: () => d });
   var i = t(25557),
    a = t(14537),
    s = t(30758),
    r = t(65198),
    l = t(86070);
   const d = ({ listId: e = '', laPostaId: n = '', thanksPage: t = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: m = '', interestsId: c = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: u = [], disallowedInterestValues: g = [], workAreasId: p = '', privacyPolicyId: j = '', language: v, submitText: x = '', talkTitleId: f = '', talkDescriptionId: y = '' }) => {
    const {
      register: k,
      handleSubmit: b,
      formState: { errors: z },
     } = (0, r.mN)(),
     w = (0, s.useRef)(null),
     D = '2' === v?.value,
     { search: I } = (0, i.zy)(),
     _ = new URLSearchParams(I),
     B = _.get('prefillEmail'),
     R = _.get('prefillName'),
     S =
      !!(c && u.length > 0) &&
      ((e, n) => {
       const t = [];
       let i = 1;
       for (let a = 0; a < e.length; a++) {
        for (; n.includes(i); ) i++;
        t.push(i), i++;
       }
       return t;
      })(u, g);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: w,
     onSubmit: b(() => {
      w.current.submit();
     }),
     children: [(0, l.jsxs)(a.zB, { type: 'email', children: [(0, l.jsx)(a.fz, { children: (0, l.jsx)(a.lR, { htmlFor: `id-${d}`, children: D ? 'Email address ' : 'E-mailadres' }) }), z[d] && (0, l.jsx)(a.YB, { children: z[d].message }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: B, 'aria-required': 'true', ...k(`${d}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: D ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!z[d] }) })] }), (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsx)(a.fz, { children: (0, l.jsx)(a.lR, { htmlFor: o, children: D ? 'Name' : 'Naam' }) }), z[o] && (0, l.jsx)(a.YB, { children: z[o].message }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: o, name: o, type: 'text', defaultValue: R, autoComplete: 'given-name', 'aria-required': 'true', ...k(`${o}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!z[o] }) })] }), f && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsxs)(a.fz, { children: [(0, l.jsx)(a.lR, { htmlFor: f, children: D ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(a.JM, { children: D ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: f, name: f, ...k(f, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), y && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsxs)(a.fz, { children: [(0, l.jsx)(a.lR, { htmlFor: y, children: D ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(a.JM, { children: D ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.TM, { id: y, name: y, rows: 12, ...k(y, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsx)(a.fz, { children: (0, l.jsx)(a.lR, { htmlFor: m, children: D ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), z[m] && (0, l.jsx)(a.YB, { children: z[m].message }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: m, name: m, type: 'text' }) })] }), c && (0, l.jsxs)(a.LB, { children: [(0, l.jsx)(a.fz, { children: (0, l.jsxs)(a.u4, { children: [h, ' (niet verplicht)'] }) }), (0, l.jsx)(a.JM, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, n) => (0, l.jsxs)(a.zB, { type: 'checkbox', children: [(0, l.jsx)(a.Sc, { name: `${c}[]`, value: S[n], id: `${c}-${S[n]}` }), (0, l.jsx)(a.lR, { htmlFor: `${c}-${S[n]}`, children: e })] }, e))] }), p && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsxs)(a.fz, { children: [(0, l.jsx)(a.lR, { htmlFor: p, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(a.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.TM, { id: p, name: p }) })] }), j && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsx)(a.JM, { id: `${j}-description`, children: D ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(a.zB, { type: 'checkbox', children: [(0, l.jsx)(a.Sc, { value: '1', id: `${j}-1`, 'aria-describedby': `${j}-description`, 'aria-required': 'true', ...k(`${j}[]`, { required: { value: !0, message: D ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!z[`${j}[]`] }), (0, l.jsx)(a.lR, { htmlFor: `${j}-1`, children: D ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), z[j] && (0, l.jsx)(a.YB, { children: z[j].message })] }), v?.id && (0, l.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, l.jsx)(a.e2, { children: (0, l.jsx)(a.$n, { type: 'submit', appearance: 'primary-action-button', children: x || (D ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  77063: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => l, metadata: () => i, toc: () => m });
   const i = JSON.parse('{"id":"community/events/estafettemodeldag","title":"Estafettemodeldag Design Open Dagen \xb7 Bijeenkomsten","description":"Op estafettemodeldagen gaan we met designers en developers langs componenten, om na te gaan of ze voldoen aan onze Definition of Done.","source":"@site/docs/community/events/estafettemodeldag.mdx","sourceDirName":"community/events","slug":"/community/events/estafettemodeldag","permalink":"/community/events/estafettemodeldag","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/estafettemodeldag.mdx","tags":[],"version":"current","frontMatter":{"title":"Estafettemodeldag Design Open Dagen \xb7 Bijeenkomsten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Estafettemodeldag","pagination_label":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","slug":"/community/events/estafettemodeldag"},"sidebar":"community","previous":{"title":"Tijdens de Design Open Dag komen designers bij elkaar om samen te werken aan designvraagstukken.","permalink":"/events/design-open-dag"},"next":{"title":"Over Design Systems Week","permalink":"/events/design-systems-week"}}');
   var a = t(86070),
    s = t(85248),
    r = t(51629);
   const l = { title: 'Estafettemodeldag Design Open Dagen \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Estafettemodeldag', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/community/events/estafettemodeldag' },
    d = 'Estafettemodeldag',
    o = {},
    m = [
     { value: 'Planning', id: 'planning', level: 2 },
     { value: 'Aanmelden', id: 'aanmelden', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'estafettemodeldag', children: 'Estafettemodeldag' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Op ', (0, a.jsx)(n.strong, { children: 'estafettemodeldagen' }), ' gaan we met designers en developers langs componenten, om na te gaan of ze voldoen aan onze ', (0, a.jsx)(n.a, { href: '/componenten/definition-of-done/', children: 'Definition of Done' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Zo krijgen we inzicht in welke componenten welke status hebben, en werken we toe naar het verder brengen van componenten via het ', (0, a.jsx)(n.a, { href: '/handboek/estafettemodel/', children: 'estafettemodel' }), '.'] }), '\n', (0, a.jsx)(n.h2, { id: 'planning', children: 'Planning' }), '\n', (0, a.jsx)(n.p, { children: 'Dit is de planning van onze estafettemodeldagen in 2025:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'vrijdag 10 oktober, 10:00 - 17:00 (Utrecht)' }), '\n', (0, a.jsx)(n.li, { children: 'vrijdag 7 november, 10:00 - 17:00 (Utrecht)' }), '\n', (0, a.jsx)(n.li, { children: 'vrijdag 28 november, 10:00 - 17:00 (Utrecht)' }), '\n', (0, a.jsx)(n.li, { children: 'vrijdag 19 december, 10:00 - 17:00 (Utrecht)' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Laat je gegevens in het aanmeldformulier hieronder achter om de kalenderuitnodigingen te ontvangen.' }), '\n', (0, a.jsx)(n.h2, { id: 'aanmelden', children: 'Aanmelden' }), '\n', (0, a.jsx)(n.p, { children: 'Estafettemodeldagen zijn publiek toegankelijk, zolang er ruimte is. We proberen uit te komen op een goede mix van community (organisaties + leveranciers) en kernteam.' }), '\n', (0, a.jsx)(n.p, { children: 'Laat je gegevens hieronder achter om een kalenderuitnodiging te ontvangen.' }), '\n', (0, a.jsx)(r.W, { listId: '7igukerls2', emailFieldId: 'GL1eTDzrWn', firstNameFieldId: 'QYuFIjwgDC', orgId: 'n0WNZXSMs9', privacyPolicyId: 'GskTzQ4zjq', thanksPage: 'https://nldesignsystem.nl/community/estafettemodeldag/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
