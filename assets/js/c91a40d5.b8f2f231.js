'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [54932],
 {
  51629: (e, n, i) => {
   i.d(n, { W: () => o });
   var t = i(25557),
    r = i(14537),
    a = i(30758),
    s = i(65198),
    l = i(86070);
   const o = ({ listId: e = '', laPostaId: n = '', thanksPage: i = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: p = '', interestsId: c = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: h = [], disallowedInterestValues: m = [], workAreasId: v = '', privacyPolicyId: j = '', language: x, submitText: g = '', talkTitleId: y = '', talkDescriptionId: k = '' }) => {
    const {
      register: f,
      handleSubmit: b,
      formState: { errors: z },
     } = (0, s.mN)(),
     w = (0, a.useRef)(null),
     D = '2' === x?.value,
     { search: I } = (0, t.zy)(),
     _ = new URLSearchParams(I),
     B = _.get('prefillEmail'),
     S = _.get('prefillName'),
     R =
      !!(c && h.length > 0) &&
      ((e, n) => {
       const i = [];
       let t = 1;
       for (let r = 0; r < e.length; r++) {
        for (; n.includes(t); ) t++;
        i.push(t), t++;
       }
       return i;
      })(h, m);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: w,
     onSubmit: b(() => {
      w.current.submit();
     }),
     children: [(0, l.jsxs)(r.zB, { type: 'email', children: [(0, l.jsx)(r.fz, { children: (0, l.jsx)(r.lR, { htmlFor: `id-${o}`, children: D ? 'Email address ' : 'E-mailadres' }) }), z[o] && (0, l.jsx)(r.YB, { children: z[o].message }), (0, l.jsx)(r.fz, { children: (0, l.jsx)(r.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: B, 'aria-required': 'true', ...f(`${o}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: D ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!z[o] }) })] }), (0, l.jsxs)(r.zB, { type: 'text', children: [(0, l.jsx)(r.fz, { children: (0, l.jsx)(r.lR, { htmlFor: d, children: D ? 'Name' : 'Naam' }) }), z[d] && (0, l.jsx)(r.YB, { children: z[d].message }), (0, l.jsx)(r.fz, { children: (0, l.jsx)(r.Rj, { id: d, name: d, type: 'text', defaultValue: S, autoComplete: 'given-name', 'aria-required': 'true', ...f(`${d}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!z[d] }) })] }), y && (0, l.jsxs)(r.zB, { type: 'text', children: [(0, l.jsxs)(r.fz, { children: [(0, l.jsx)(r.lR, { htmlFor: y, children: D ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(r.JM, { children: D ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(r.fz, { children: (0, l.jsx)(r.Rj, { id: y, name: y, ...f(y, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, l.jsxs)(r.zB, { type: 'text', children: [(0, l.jsxs)(r.fz, { children: [(0, l.jsx)(r.lR, { htmlFor: k, children: D ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(r.JM, { children: D ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(r.fz, { children: (0, l.jsx)(r.TM, { id: k, name: k, rows: 12, ...f(k, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), p && (0, l.jsxs)(r.zB, { type: 'text', children: [(0, l.jsx)(r.fz, { children: (0, l.jsx)(r.lR, { htmlFor: p, children: D ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), z[p] && (0, l.jsx)(r.YB, { children: z[p].message }), (0, l.jsx)(r.fz, { children: (0, l.jsx)(r.Rj, { id: p, name: p, type: 'text' }) })] }), c && (0, l.jsxs)(r.LB, { children: [(0, l.jsx)(r.fz, { children: (0, l.jsxs)(r.u4, { children: [u, ' (niet verplicht)'] }) }), (0, l.jsx)(r.JM, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, n) => (0, l.jsxs)(r.zB, { type: 'checkbox', children: [(0, l.jsx)(r.Sc, { name: `${c}[]`, value: R[n], id: `${c}-${R[n]}` }), (0, l.jsx)(r.lR, { htmlFor: `${c}-${R[n]}`, children: e })] }, e))] }), v && (0, l.jsxs)(r.zB, { type: 'text', children: [(0, l.jsxs)(r.fz, { children: [(0, l.jsx)(r.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(r.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(r.fz, { children: (0, l.jsx)(r.TM, { id: v, name: v }) })] }), j && (0, l.jsxs)(r.zB, { type: 'text', children: [(0, l.jsx)(r.JM, { id: `${j}-description`, children: D ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(r.zB, { type: 'checkbox', children: [(0, l.jsx)(r.Sc, { value: '1', id: `${j}-1`, 'aria-describedby': `${j}-description`, 'aria-required': 'true', ...f(`${j}[]`, { required: { value: !0, message: D ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!z[`${j}[]`] }), (0, l.jsx)(r.lR, { htmlFor: `${j}-1`, children: D ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), z[j] && (0, l.jsx)(r.YB, { children: z[j].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(r.e2, { children: (0, l.jsx)(r.$n, { type: 'submit', appearance: 'primary-action-button', children: g || (D ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  91316: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => o, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => p });
   const t = JSON.parse('{"id":"community/events/developer-open-hour/aanmelden","title":"Aanmelden \xb7 Developer Open Hour \xb7 Bijeenkomsten","description":"Developer Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.","source":"@site/docs/community/events/developer-open-hour/aanmelden.mdx","sourceDirName":"community/events/developer-open-hour","slug":"/events/developer-open-hour/aanmelden","permalink":"/events/developer-open-hour/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/developer-open-hour/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden \xb7 Developer Open Hour \xb7 Bijeenkomsten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.","slug":"/events/developer-open-hour/aanmelden"},"sidebar":"community","previous":{"title":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.","permalink":"/events/developer-open-hour"},"next":{"title":"Tijdens de MijnServices Check-in delen we inzichten, idee\xebn en voortgang rond de doorontwikkeling van NL Design System-componenten die binnen MijnOmgevingen worden gebruikt.","permalink":"/events/mijn-services-check-in"}}');
   var r = i(86070),
    a = i(85248),
    s = i(51629);
   const l = { title: 'Aanmelden \xb7 Developer Open Hour \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', slug: '/events/developer-open-hour/aanmelden' },
    o = 'Meld je aan voor de Developer Open Hour',
    d = {},
    p = [];
   function c(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'meld-je-aan-voor-de-developer-open-hour', children: 'Meld je aan voor de Developer Open Hour' }) }), '\n', (0, r.jsx)(n.p, { children: 'Developer Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, r.jsx)(s.W, { listId: 'p3jpgjmp4x', emailFieldId: 'Cx3tegsyt2', firstNameFieldId: 'QUBgX4085P', thanksPage: 'https://nldesignsystem.nl/events/developer-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
