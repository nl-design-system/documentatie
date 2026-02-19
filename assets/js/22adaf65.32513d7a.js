'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [71350],
 {
  37447(e, s, i) {
   i.d(s, { W: () => d });
   var n = i(29181),
    t = i(30758),
    r = i(27890),
    a = i(54565),
    l = i(86070);
   const d = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: c = '', interestsId: m = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: u = [], interestsRequired: p = !1, disallowedInterestValues: g = [], workAreasId: j = '', privacyPolicyId: v = '', language: x, submitText: k = '', talkTitleId: y = '', talkDescriptionId: w = '', roleId: f = '', roleLegend: b = 'Wat is jouw rol?', roles: z = [], roleRequired: S = !1 }) => {
    const {
      register: D,
      handleSubmit: R,
      formState: { errors: I },
     } = (0, r.mN)(),
     W = (0, t.useRef)(null),
     _ = '2' === x?.value,
     $ = (0, a.c)() ? window.location.search : '',
     B = new URLSearchParams($),
     M = B.get('prefillEmail'),
     q = B.get('prefillName'),
     F =
      !!(m && u.length > 0) &&
      ((e, s) => {
       const i = [];
       let n = 1;
       for (let t = 0; t < e.length; t++) {
        for (; s.includes(n); ) n++;
        (i.push(n), n++);
       }
       return i;
      })(u, g);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: W,
     onSubmit: R(() => {
      W.current.submit();
     }),
     children: [(0, l.jsxs)(n.zB, { type: 'email', children: [(0, l.jsx)(n.fz, { children: (0, l.jsx)(n.lR, { htmlFor: `id-${d}`, children: _ ? 'Email address ' : 'E-mailadres' }) }), I[d] && (0, l.jsx)(n.YB, { children: I[d].message }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: M, 'aria-required': 'true', ...D(`${d}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: _ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!I[d] }) })] }), (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsx)(n.fz, { children: (0, l.jsx)(n.lR, { htmlFor: o, children: _ ? 'Name' : 'Naam' }) }), I[o] && (0, l.jsx)(n.YB, { children: I[o].message }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: o, name: o, type: 'text', defaultValue: q, autoComplete: 'given-name', 'aria-required': 'true', ...D(`${o}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!I[o] }) })] }), y && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsxs)(n.fz, { children: [(0, l.jsx)(n.lR, { htmlFor: y, children: _ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(n.JM, { children: _ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: y, name: y, ...D(y, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsxs)(n.fz, { children: [(0, l.jsx)(n.lR, { htmlFor: w, children: _ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(n.JM, { children: _ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.TM, { id: w, name: w, rows: 12, ...D(w, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsx)(n.fz, { children: (0, l.jsx)(n.lR, { htmlFor: c, children: _ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), I[c] && (0, l.jsx)(n.YB, { children: I[c].message }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.Rj, { id: c, name: c, type: 'text' }) })] }), m && (0, l.jsxs)(n.LB, { children: [(0, l.jsx)(n.fz, { children: (0, l.jsxs)(n.u4, { children: [h, !p && ' (niet verplicht)'] }) }), (0, l.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, s) => (0, l.jsxs)(n.zB, { type: 'checkbox', children: [(0, l.jsx)(n.Sc, { name: `${m}[]`, value: F[s], id: `${m}-${F[s]}` }), (0, l.jsx)(n.lR, { htmlFor: `${m}-${F[s]}`, children: e })] }, e))] }), f && (0, l.jsxs)(n.LB, { children: [(0, l.jsx)(n.fz, { children: (0, l.jsxs)(n.u4, { children: [b, !S && ' (niet verplicht)'] }) }), (0, l.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, s) => (0, l.jsxs)(n.zB, { type: 'checkbox', children: [(0, l.jsx)(n.Sc, { name: `${f}[]`, id: `${f}-${s}` }), (0, l.jsx)(n.lR, { htmlFor: `${f}-${s}`, children: e })] }, e))] }), j && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsxs)(n.fz, { children: [(0, l.jsx)(n.lR, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(n.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(n.fz, { children: (0, l.jsx)(n.TM, { id: j, name: j }) })] }), v && (0, l.jsxs)(n.zB, { type: 'text', children: [(0, l.jsx)(n.JM, { id: `${v}-description`, children: _ ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(n.zB, { type: 'checkbox', children: [(0, l.jsx)(n.Sc, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...D(`${v}[]`, { required: { value: !0, message: _ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!I[`${v}[]`] }), (0, l.jsx)(n.lR, { htmlFor: `${v}-1`, children: _ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), I[v] && (0, l.jsx)(n.YB, { children: I[v].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(n.e2, { children: (0, l.jsx)(n.$n, { type: 'submit', appearance: 'primary-action-button', children: k || (_ ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  42342(e, s, i) {
   (i.r(s), i.d(s, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => l, metadata: () => n, toc: () => c }));
   const n = JSON.parse('{"id":"community/events/design-systems-week/sessie-voorstellen","title":"Sprekers gezocht \xb7 Design Systems Week","description":"Van 27 t/m 31 oktober 2025 organiseren we opnieuw een week vol sessies over design systems. Een week waarin we ervaringen uitwisselen, laten zien wat werkt in de praktijk en samen leren over ontwerp, code, richtlijnen en samenwerking.","source":"@site/docs/community/events/design-systems-week/sessie-voorstellen.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week/sessie-voorstellen","permalink":"/events/design-systems-week/sessie-voorstellen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sessie-voorstellen.mdx","tags":[],"version":"current","frontMatter":{"title":"Sprekers gezocht \xb7 Design Systems Week","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sprekers gezocht","pagination_label":"Sprekers gezocht","slug":"/events/design-systems-week/sessie-voorstellen","displayed_sidebar":"community"},"sidebar":"community"}');
   var t = i(86070),
    r = i(18439),
    a = i(37447);
   const l = { title: 'Sprekers gezocht \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sprekers gezocht', pagination_label: 'Sprekers gezocht', slug: '/events/design-systems-week/sessie-voorstellen', displayed_sidebar: 'community' },
    d = 'Sprekers gezocht voor de Design Systems Week 2025',
    o = {},
    c = [{ value: 'Meld jouw voorstel aan via dit formulier.', id: 'meld-jouw-voorstel-aan-via-dit-formulier', level: 2 }];
   function m(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', hr: 'hr', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(s.header, { children: (0, t.jsx)(s.h1, { id: 'sprekers-gezocht-voor-de-design-systems-week-2025', children: 'Sprekers gezocht voor de Design Systems Week 2025' }) }), '\n', (0, t.jsx)(s.p, { children: 'Van 27 t/m 31 oktober 2025 organiseren we opnieuw een week vol sessies over design systems. Een week waarin we ervaringen uitwisselen, laten zien wat werkt in de praktijk en samen leren over ontwerp, code, richtlijnen en samenwerking.' }), '\n', (0, t.jsx)(s.p, { children: 'Werk je als ontwerper, ontwikkelaar of contentmaker met een design system? Of heb je een mooi idee om te spreken over het belang van een toegankelijk design system? Dan is de Design Systems Week een mooi moment om kennis te delen met vakgenoten.' }), '\n', (0, t.jsx)(s.h2, { id: 'meld-jouw-voorstel-aan-via-dit-formulier', children: 'Meld jouw voorstel aan via dit formulier.' }), '\n', (0, t.jsx)(a.W, { listId: 'k5thcm7i86', emailFieldId: 'ieVxMqAsNc', firstNameFieldId: 'RH0bMSWloq', talkTitleId: '5DRurXNffg', talkDescriptionId: 'tT7iO8Fz3h', privacyPolicyId: '0Tw7Elhcrt', orgId: 'kdCftAyRgW', laPostaId: 'iyihtuzpiq', language: { id: 'x95hFD1RX5', value: '1' } }), '\n', (0, t.jsx)(s.hr, {}), '\n', (0, t.jsx)(s.p, { children: "Dit is het 5e jaar dat NL Design System de Design Systems Week organiseert.\nMeer weten over eerdere edities? Kijk dan de video's van voorgaande jaren terug!" }), '\n', (0, t.jsxs)(s.ul, { children: ['\n', (0, t.jsx)(s.li, { children: (0, t.jsx)(s.a, { href: '/events/design-systems-week-2024/programma/', children: 'Design Systems Week 2024' }) }), '\n', (0, t.jsx)(s.li, { children: (0, t.jsx)(s.a, { href: '/events/design-systems-week-2023/programma/', children: 'Design Systems Week 2023' }) }), '\n', (0, t.jsx)(s.li, { children: (0, t.jsx)(s.a, { href: '/events/design-systems-week-2022/', children: 'Design Systems Week 2022' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, r.R)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
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
