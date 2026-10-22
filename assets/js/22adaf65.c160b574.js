'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [71350],
 {
  31641(e, s, i) {
   i.d(s, { W: () => m });
   var r = i(29181),
    t = i(46847),
    n = i(56561),
    a = i(30758),
    l = i(27890),
    o = i(90515),
    d = i(13526),
    c = i(86070);
   const m = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: m = '', firstNameFieldId: h = '', orgId: p = '', interestsId: u = '', interestsLegend: g = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: v = !1, disallowedInterestValues: k = [], workAreasId: y = '', privacyPolicyId: x = '', language: f, submitText: b = '', talkTitleId: w = '', talkDescriptionId: S = '', roleId: $ = '', roleLegend: z = 'Wat is jouw rol?', roles: D = [], roleRequired: W = !1 }) => {
    const {
      register: I,
      handleSubmit: R,
      formState: { errors: _ },
     } = (0, l.mN)({ mode: 'onBlur' }),
     N = (0, a.useRef)(null),
     M = '2' === f?.value,
     B = (0, o.c)() ? window.location.search : '',
     F = new URLSearchParams(B),
     q = F.get('prefillEmail'),
     T = F.get('prefillName'),
     L =
      !!(u && j.length > 0) &&
      ((e, s) => {
       const i = [];
       let r = 1;
       for (let t = 0; t < e.length; t++) {
        for (; s.includes(r); ) r++;
        (i.push(r), r++);
       }
       return i;
      })(j, k);
    return (0, c.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: N,
     onSubmit: R(() => {
      N.current.submit();
     }),
     children: [(0, c.jsxs)(r.zB, { type: 'email', children: [(0, c.jsx)(n.f, { children: (0, c.jsx)(r.lR, { htmlFor: `id-${m}`, children: M ? 'Email address ' : 'E-mailadres' }) }), _[m] && (0, c.jsx)(r.YB, { role: 'alert', id: `${m}-error`, children: _[m].message }), (0, c.jsx)(n.f, { children: (0, c.jsx)(r.Rj, { id: `id-${m}`, name: m, type: 'email', autoComplete: 'email', defaultValue: q, 'aria-required': 'true', 'aria-describedby': _[m] && `${m}-error`, ...I(`${m}`, { required: { value: !0, message: M ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: M ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!_[m] }) })] }), (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsx)(n.f, { children: (0, c.jsx)(r.lR, { htmlFor: h, children: M ? 'Name' : 'Naam' }) }), _[h] && (0, c.jsx)(r.YB, { role: 'alert', id: `${h}-error`, children: _[h].message }), (0, c.jsx)(n.f, { children: (0, c.jsx)(r.Rj, { id: h, name: h, type: 'text', defaultValue: T, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': _[h] && `${h}-error`, ...I(`${h}`, { required: { value: !0, message: M ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!_[h] }) })] }), w && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsxs)(n.f, { children: [(0, c.jsx)(r.lR, { htmlFor: w, children: M ? 'Title of your talk' : 'Titel van je presentatie' }), (0, c.jsx)(r.JM, { id: `${w}-description`, children: M ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, c.jsx)(n.f, { children: (0, c.jsx)(r.Rj, { id: w, name: w, 'aria-describedby': `${w}-description`, ...I(w, { required: { value: !0, message: M ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), S && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsxs)(n.f, { children: [(0, c.jsx)(r.lR, { htmlFor: S, children: M ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, c.jsx)(r.JM, { id: `${S}-description`, children: M ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, c.jsx)(n.f, { children: (0, c.jsx)(r.TM, { id: S, name: S, rows: 12, 'aria-describedby': `${S}-description`, ...I(S, { required: { value: !0, message: M ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), p && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsx)(n.f, { children: (0, c.jsx)(r.lR, { htmlFor: p, children: M ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), _[p] && (0, c.jsx)(r.YB, { children: _[p].message }), (0, c.jsx)(n.f, { children: (0, c.jsx)(r.Rj, { id: p, name: p, type: 'text', autoComplete: 'organization' }) })] }), u && (0, c.jsxs)(r.LB, { 'aria-describedby': `${u}-description`, children: [(0, c.jsxs)(r.u4, { children: [g, !v && ' (niet verplicht)'] }), (0, c.jsx)(r.JM, { id: `${u}-description`, children: 'Meerdere antwoorden mogelijk.' }), j.map((e, s) => (0, c.jsxs)(r.zB, { type: 'checkbox', children: [(0, c.jsx)(r.Sc, { name: `${u}[]`, value: L[s], id: `${u}-${L[s]}` }), (0, c.jsx)(r.lR, { type: 'checkbox', htmlFor: `${u}-${L[s]}`, children: e })] }, e))] }), $ && (0, c.jsxs)(r.LB, { 'aria-describedby': `${$}-description`, children: [(0, c.jsxs)(r.u4, { children: [z, !W && ' (niet verplicht)'] }), (0, c.jsx)(r.JM, { id: `${$}-description`, children: 'Meerdere antwoorden mogelijk.' }), D.map((e, s) => (0, c.jsxs)(r.zB, { type: 'checkbox', children: [(0, c.jsx)(r.Sc, { name: `${$}[]`, id: `${$}-${s}` }), (0, c.jsx)(r.lR, { type: 'checkbox', htmlFor: `${$}-${s}`, children: e })] }, e))] }), y && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsxs)(n.f, { children: [(0, c.jsx)(r.lR, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, c.jsx)(r.JM, { id: `${y}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, c.jsx)(n.f, { children: (0, c.jsx)(r.TM, { id: y, name: y, 'aria-describedby': `${y}-description` }) })] }), x && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsx)(r.JM, { id: `${x}-description`, children: M ? (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, c.jsxs)(r.zB, { type: 'checkbox', children: [(0, c.jsx)(r.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': (0, d.A)({ [`${x}-description`]: !0, [`${x}-error`]: _[x] }), 'aria-required': 'true', ...I(`${x}[]`, { required: { value: !0, message: M ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!_[`${x}`] }), (0, c.jsx)(r.lR, { type: 'checkbox', htmlFor: `${x}-1`, children: M ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), _[`${x}`] && (0, c.jsx)(r.YB, { role: 'alert', id: `${x}-error`, children: _[`${x}`].message })] }), f?.id && (0, c.jsx)('input', { type: 'hidden', name: f.id, value: f.value }), (0, c.jsx)(r.e2, { children: (0, c.jsx)(t.$, { type: 'submit', purpose: 'primary', children: b || (M ? 'Sign up' : 'Aanmelden') }) }), (0, c.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, c.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, c.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, c.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, c.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, s, i) {
   i.d(s, { $: () => r.$n });
   var r = i(50805);
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"Ic":false,"MX":"/miro","nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  64368(e, s, i) {
   (i.r(s), i.d(s, { assets: () => c, contentTitle: () => d, default: () => p, frontMatter: () => o, metadata: () => r, toc: () => m }));
   const r = JSON.parse('{"id":"community/events/design-systems-week/sessie-voorstellen","title":"Sprekers gezocht voor Design Systems Week","description":"Werk jij aan een design system, gebruikersonderzoek of toegankelijkheid en wil je hier een sessie over geven? Laat het ons weten!","source":"@site/docs/community/events/design-systems-week/sessie-voorstellen.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week/sessie-voorstellen","permalink":"/events/design-systems-week/sessie-voorstellen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sessie-voorstellen.mdx","tags":[],"version":"current","frontMatter":{"title":"Sprekers gezocht voor Design Systems Week","title_sm":"Sprekers gezocht","description":"Werk jij aan een design system, gebruikersonderzoek of toegankelijkheid en wil je hier een sessie over geven? Laat het ons weten!","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sprekers gezocht","pagination_label":"Sprekers gezocht","slug":"/events/design-systems-week/sessie-voorstellen","translations":{"en":"/events/design-systems-week/en/call-for-speakers/"},"displayed_sidebar":"community"},"sidebar":"community"}');
   var t = i(86070),
    n = i(18439),
    a = i(31641),
    l = i(51130);
   const o = { title: 'Sprekers gezocht voor Design Systems Week', title_sm: 'Sprekers gezocht', description: 'Werk jij aan een design system, gebruikersonderzoek of toegankelijkheid en wil je hier een sessie over geven? Laat het ons weten!', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sprekers gezocht', pagination_label: 'Sprekers gezocht', slug: '/events/design-systems-week/sessie-voorstellen', translations: { en: '/events/design-systems-week/en/call-for-speakers/' }, displayed_sidebar: 'community' },
    d = 'Sprekers gezocht voor de Design Systems Week settings.year',
    c = {},
    m = [{ value: 'Meld jouw voorstel aan via dit formulier.', id: 'meld-jouw-voorstel-aan-via-dit-formulier', level: 2 }];
   function h(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', hr: 'hr', li: 'li', p: 'p', ul: 'ul', ...(0, n.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(s.header, { children: (0, t.jsxs)(s.h1, { id: 'sprekers-gezocht-voor-de-design-systems-week-settingsyear', children: ['Sprekers gezocht voor de Design Systems Week ', l.Ok] }) }), '\n', (0, t.jsxs)(s.p, { children: ['Van ', l.nl.M, ' ', l.Ok, ' organiseren we opnieuw een week vol sessies over design systems. Een week waarin we ervaringen uitwisselen, laten zien wat werkt in de praktijk en samen leren over ontwerp, code, richtlijnen en samenwerking.'] }), '\n', (0, t.jsx)(s.p, { children: 'Werk je als ontwerper, ontwikkelaar of contentmaker met een design system? Of heb je een mooi idee om te spreken over het belang van een toegankelijk design system? Dan is de Design Systems Week een mooi moment om kennis te delen met vakgenoten.' }), '\n', (0, t.jsx)(s.h2, { id: 'meld-jouw-voorstel-aan-via-dit-formulier', children: 'Meld jouw voorstel aan via dit formulier.' }), '\n', (0, t.jsx)(a.W, { listId: 'k5thcm7i86', emailFieldId: 'ieVxMqAsNc', firstNameFieldId: 'RH0bMSWloq', talkTitleId: '5DRurXNffg', talkDescriptionId: 'tT7iO8Fz3h', privacyPolicyId: '0Tw7Elhcrt', orgId: 'kdCftAyRgW', laPostaId: 'iyihtuzpiq', language: { id: 'x95hFD1RX5', value: '1' }, thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/sessie-voorstellen/bedankt' }), '\n', (0, t.jsx)(s.hr, {}), '\n', (0, t.jsxs)(s.p, { children: ['Dit is het ', l.nl.Z, " jaar dat NL Design System de Design Systems Week organiseert.\nMeer weten over eerdere edities? Kijk dan de video's van voorgaande jaren terug!"] }), '\n', (0, t.jsxs)(s.ul, { children: ['\n', (0, t.jsx)(s.li, { children: (0, t.jsx)(s.a, { href: '/events/design-systems-week-2025/programma/', children: 'Design Systems Week 2025' }) }), '\n', (0, t.jsx)(s.li, { children: (0, t.jsx)(s.a, { href: '/events/design-systems-week-2024/programma/', children: 'Design Systems Week 2024' }) }), '\n', (0, t.jsx)(s.li, { children: (0, t.jsx)(s.a, { href: '/events/design-systems-week-2023/programma/', children: 'Design Systems Week 2023' }) }), '\n', (0, t.jsx)(s.li, { children: (0, t.jsx)(s.a, { href: '/events/design-systems-week-2022/', children: 'Design Systems Week 2022' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: s } = { ...(0, n.R)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  90515(e, s, i) {
   i.d(s, { c: () => t });
   var r = i(30758);
   function t() {
    const [e, s] = (0, r.useState)();
    return ((0, r.useEffect)(() => s(!0), []), e);
   }
  },
 },
]);
