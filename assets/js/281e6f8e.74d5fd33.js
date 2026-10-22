'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [91466],
 {
  31641(e, i, n) {
   n.d(i, { W: () => h });
   var r = n(29181),
    t = n(46847),
    a = n(56561),
    s = n(30758),
    l = n(27890),
    o = n(90515),
    d = n(13526),
    c = n(86070);
   const h = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: h = '', firstNameFieldId: p = '', orgId: m = '', interestsId: u = '', interestsLegend: j = 'Waar wil je NL Design System voor gebruiken?', interests: g = [], interestsRequired: v = !1, disallowedInterestValues: x = [], workAreasId: b = '', privacyPolicyId: f = '', language: y, submitText: k = '', talkTitleId: w = '', talkDescriptionId: $ = '', roleId: _ = '', roleLegend: z = 'Wat is jouw rol?', roles: I = [], roleRequired: N = !1 }) => {
    const {
      register: R,
      handleSubmit: B,
      formState: { errors: D },
     } = (0, l.mN)({ mode: 'onBlur' }),
     S = (0, s.useRef)(null),
     q = '2' === y?.value,
     F = (0, o.c)() ? window.location.search : '',
     M = new URLSearchParams(F),
     T = M.get('prefillEmail'),
     O = M.get('prefillName'),
     W =
      !!(u && g.length > 0) &&
      ((e, i) => {
       const n = [];
       let r = 1;
       for (let t = 0; t < e.length; t++) {
        for (; i.includes(r); ) r++;
        (n.push(r), r++);
       }
       return n;
      })(g, x);
    return (0, c.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: S,
     onSubmit: B(() => {
      S.current.submit();
     }),
     children: [(0, c.jsxs)(r.zB, { type: 'email', children: [(0, c.jsx)(a.f, { children: (0, c.jsx)(r.lR, { htmlFor: `id-${h}`, children: q ? 'Email address ' : 'E-mailadres' }) }), D[h] && (0, c.jsx)(r.YB, { role: 'alert', id: `${h}-error`, children: D[h].message }), (0, c.jsx)(a.f, { children: (0, c.jsx)(r.Rj, { id: `id-${h}`, name: h, type: 'email', autoComplete: 'email', defaultValue: T, 'aria-required': 'true', 'aria-describedby': D[h] && `${h}-error`, ...R(`${h}`, { required: { value: !0, message: q ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: q ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!D[h] }) })] }), (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsx)(a.f, { children: (0, c.jsx)(r.lR, { htmlFor: p, children: q ? 'Name' : 'Naam' }) }), D[p] && (0, c.jsx)(r.YB, { role: 'alert', id: `${p}-error`, children: D[p].message }), (0, c.jsx)(a.f, { children: (0, c.jsx)(r.Rj, { id: p, name: p, type: 'text', defaultValue: O, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': D[p] && `${p}-error`, ...R(`${p}`, { required: { value: !0, message: q ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!D[p] }) })] }), w && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsxs)(a.f, { children: [(0, c.jsx)(r.lR, { htmlFor: w, children: q ? 'Title of your talk' : 'Titel van je presentatie' }), (0, c.jsx)(r.JM, { id: `${w}-description`, children: q ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, c.jsx)(a.f, { children: (0, c.jsx)(r.Rj, { id: w, name: w, 'aria-describedby': `${w}-description`, ...R(w, { required: { value: !0, message: q ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), $ && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsxs)(a.f, { children: [(0, c.jsx)(r.lR, { htmlFor: $, children: q ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, c.jsx)(r.JM, { id: `${$}-description`, children: q ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, c.jsx)(a.f, { children: (0, c.jsx)(r.TM, { id: $, name: $, rows: 12, 'aria-describedby': `${$}-description`, ...R($, { required: { value: !0, message: q ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsx)(a.f, { children: (0, c.jsx)(r.lR, { htmlFor: m, children: q ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), D[m] && (0, c.jsx)(r.YB, { children: D[m].message }), (0, c.jsx)(a.f, { children: (0, c.jsx)(r.Rj, { id: m, name: m, type: 'text', autoComplete: 'organization' }) })] }), u && (0, c.jsxs)(r.LB, { 'aria-describedby': `${u}-description`, children: [(0, c.jsxs)(r.u4, { children: [j, !v && ' (niet verplicht)'] }), (0, c.jsx)(r.JM, { id: `${u}-description`, children: 'Meerdere antwoorden mogelijk.' }), g.map((e, i) => (0, c.jsxs)(r.zB, { type: 'checkbox', children: [(0, c.jsx)(r.Sc, { name: `${u}[]`, value: W[i], id: `${u}-${W[i]}` }), (0, c.jsx)(r.lR, { type: 'checkbox', htmlFor: `${u}-${W[i]}`, children: e })] }, e))] }), _ && (0, c.jsxs)(r.LB, { 'aria-describedby': `${_}-description`, children: [(0, c.jsxs)(r.u4, { children: [z, !N && ' (niet verplicht)'] }), (0, c.jsx)(r.JM, { id: `${_}-description`, children: 'Meerdere antwoorden mogelijk.' }), I.map((e, i) => (0, c.jsxs)(r.zB, { type: 'checkbox', children: [(0, c.jsx)(r.Sc, { name: `${_}[]`, id: `${_}-${i}` }), (0, c.jsx)(r.lR, { type: 'checkbox', htmlFor: `${_}-${i}`, children: e })] }, e))] }), b && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsxs)(a.f, { children: [(0, c.jsx)(r.lR, { htmlFor: b, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, c.jsx)(r.JM, { id: `${b}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, c.jsx)(a.f, { children: (0, c.jsx)(r.TM, { id: b, name: b, 'aria-describedby': `${b}-description` }) })] }), f && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsx)(r.JM, { id: `${f}-description`, children: q ? (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, c.jsxs)(r.zB, { type: 'checkbox', children: [(0, c.jsx)(r.Sc, { value: '1', id: `${f}-1`, 'aria-describedby': (0, d.A)({ [`${f}-description`]: !0, [`${f}-error`]: D[f] }), 'aria-required': 'true', ...R(`${f}[]`, { required: { value: !0, message: q ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!D[`${f}`] }), (0, c.jsx)(r.lR, { type: 'checkbox', htmlFor: `${f}-1`, children: q ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), D[`${f}`] && (0, c.jsx)(r.YB, { role: 'alert', id: `${f}-error`, children: D[`${f}`].message })] }), y?.id && (0, c.jsx)('input', { type: 'hidden', name: y.id, value: y.value }), (0, c.jsx)(r.e2, { children: (0, c.jsx)(t.$, { type: 'submit', purpose: 'primary', children: k || (q ? 'Sign up' : 'Aanmelden') }) }), (0, c.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, c.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, c.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, c.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, c.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  34773(e, i, n) {
   (n.r(i), n.d(i, { assets: () => d, contentTitle: () => o, default: () => p, frontMatter: () => l, metadata: () => r, toc: () => c }));
   const r = JSON.parse('{"id":"project/blijf-op-de-hoogte","title":"Op de hoogte blijven","description":"De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.","source":"@site/docs/project/blijf-op-de-hoogte.mdx","sourceDirName":"project","slug":"/project/blijf-op-de-hoogte","permalink":"/project/blijf-op-de-hoogte","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/blijf-op-de-hoogte.mdx","tags":[],"version":"current","frontMatter":{"title":"Op de hoogte blijven","hide_title":true,"hide_table_of_contents":false,"navigation_order":5,"sidebar_label":"Op de hoogte blijven","pagination_label":"Op de hoogte blijven","description":"De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.","keywords":["heartbeat","blog","slack"]},"sidebar":"project","previous":{"title":"Kernteam","permalink":"/project/kernteam"},"next":{"title":"Klachten","permalink":"/project/klachten"}}');
   var t = n(86070),
    a = n(18439),
    s = n(31641);
   const l = { title: 'Op de hoogte blijven', hide_title: !0, hide_table_of_contents: !1, navigation_order: 5, sidebar_label: 'Op de hoogte blijven', pagination_label: 'Op de hoogte blijven', description: 'De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.', keywords: ['heartbeat', 'blog', 'slack'] },
    o = 'Op de hoogte blijven',
    d = {},
    c = [{ value: 'Nieuwsbrief', id: 'nieuwsbrief', level: 2 }];
   function h(e) {
    const i = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(i.header, { children: (0, t.jsx)(i.h1, { id: 'op-de-hoogte-blijven', children: 'Op de hoogte blijven' }) }), '\n', (0, t.jsx)(i.p, { children: "Er zijn verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.\nDe activiteiten en voortgang van het kernteam zijn voor iedereen te volgen door (vrijblijvend) deel te nemen aan onze 2-wekelijkse Heartbeat-sessies. Tijdens deze laagdrempelige online bijeenkomsten delen we de laatste ontwikkelingen door middel van demo's en voorbeelden." }), '\n', (0, t.jsxs)(i.ul, { children: ['\n', (0, t.jsxs)(i.li, { children: [(0, t.jsx)(i.a, { href: '/events/heartbeat/aanmelden/', children: 'Neem deel aan onze Heartbeat-sessies' }), ' of ', (0, t.jsx)(i.a, { href: '/events/heartbeat/', children: 'kijk opgenomen sessies terug' }), '.'] }), '\n', (0, t.jsxs)(i.li, { children: [(0, t.jsx)(i.a, { href: '#nieuwsbrief', children: 'Meld je aan voor onze nieuwsbrief' }), ' (hieronder).'] }), '\n', (0, t.jsxs)(i.li, { children: [(0, t.jsx)(i.a, { href: '/blog/', children: 'Lees ons blog voor uitgebreidere interviews en artikelen' }), '.'] }), '\n', (0, t.jsxs)(i.li, { children: ['op ', (0, t.jsx)(i.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, t.jsx)(i.code, { children: '#nl-design-system' }), ', daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen.'] }), '\n'] }), '\n', (0, t.jsx)(i.h2, { id: 'nieuwsbrief', children: 'Nieuwsbrief' }), '\n', (0, t.jsx)(i.p, { children: 'We kunnen je ook per e-mail op de hoogte houden. We zullen je maximaal \xe9\xe9n keer per maand een update sturen, en je kunt je altijd weer uitschrijven.' }), '\n', (0, t.jsx)(s.W, { listId: 'ceamfdjtu3', emailFieldId: '2x8bD6GMu5', firstNameFieldId: '40GfQGdmHU', thanksPage: 'https://nldesignsystem.nl/project/blijf-op-de-hoogte/nieuwsbrief/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function p(e = {}) {
    const { wrapper: i } = { ...(0, a.R)(), ...e.components };
    return i ? (0, t.jsx)(i, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  46847(e, i, n) {
   n.d(i, { $: () => r.$n });
   var r = n(50805);
  },
  90515(e, i, n) {
   n.d(i, { c: () => t });
   var r = n(30758);
   function t() {
    const [e, i] = (0, r.useState)();
    return ((0, r.useEffect)(() => i(!0), []), e);
   }
  },
 },
]);
