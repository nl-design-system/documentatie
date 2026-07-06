'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [91466],
 {
  46565(e, i, n) {
   n.d(i, { c: () => r });
   var t = n(30758);
   function r() {
    const [e, i] = (0, t.useState)();
    return ((0, t.useEffect)(() => i(!0), []), e);
   }
  },
  78599(e, i, n) {
   n.d(i, { W: () => d });
   var t = n(29181),
    r = n(56561),
    a = n(30758),
    s = n(27890),
    l = n(46565),
    o = n(86070);
   const d = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: h = '', interestsId: j = '', interestsLegend: p = 'Waar wil je NL Design System voor gebruiken?', interests: m = [], interestsRequired: u = !1, disallowedInterestValues: g = [], workAreasId: v = '', privacyPolicyId: x = '', language: b, submitText: f = '', talkTitleId: k = '', talkDescriptionId: y = '', roleId: w = '', roleLegend: _ = 'Wat is jouw rol?', roles: I = [], roleRequired: N = !1 }) => {
    const {
      register: R,
      handleSubmit: $,
      formState: { errors: z },
     } = (0, s.mN)(),
     D = (0, a.useRef)(null),
     S = '2' === b?.value,
     B = (0, l.c)() ? window.location.search : '',
     q = new URLSearchParams(B),
     F = q.get('prefillEmail'),
     M = q.get('prefillName'),
     T =
      !!(j && m.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let r = 0; r < e.length; r++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(m, g);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: D,
     onSubmit: $(() => {
      D.current.submit();
     }),
     children: [(0, o.jsxs)(t.zB, { type: 'email', children: [(0, o.jsx)(r.f, { children: (0, o.jsx)(t.lR, { htmlFor: `id-${d}`, children: S ? 'Email address ' : 'E-mailadres' }) }), z[d] && (0, o.jsx)(t.YB, { children: z[d].message }), (0, o.jsx)(r.f, { children: (0, o.jsx)(t.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', ...R(`${d}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: S ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!z[d] }) })] }), (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(r.f, { children: (0, o.jsx)(t.lR, { htmlFor: c, children: S ? 'Name' : 'Naam' }) }), z[c] && (0, o.jsx)(t.YB, { children: z[c].message }), (0, o.jsx)(r.f, { children: (0, o.jsx)(t.Rj, { id: c, name: c, type: 'text', defaultValue: M, autoComplete: 'given-name', 'aria-required': 'true', ...R(`${c}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!z[c] }) })] }), k && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(r.f, { children: [(0, o.jsx)(t.lR, { htmlFor: k, children: S ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(t.JM, { children: S ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(r.f, { children: (0, o.jsx)(t.Rj, { id: k, name: k, ...R(k, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), y && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(r.f, { children: [(0, o.jsx)(t.lR, { htmlFor: y, children: S ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(t.JM, { children: S ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(r.f, { children: (0, o.jsx)(t.TM, { id: y, name: y, rows: 12, ...R(y, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(r.f, { children: (0, o.jsx)(t.lR, { htmlFor: h, children: S ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), z[h] && (0, o.jsx)(t.YB, { children: z[h].message }), (0, o.jsx)(r.f, { children: (0, o.jsx)(t.Rj, { id: h, name: h, type: 'text' }) })] }), j && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(r.f, { children: (0, o.jsxs)(t.u4, { children: [p, !u && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), m.map((e, i) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${j}[]`, value: T[i], id: `${j}-${T[i]}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${j}-${T[i]}`, children: e })] }, e))] }), w && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(r.f, { children: (0, o.jsxs)(t.u4, { children: [_, !N && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), I.map((e, i) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${w}[]`, id: `${w}-${i}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${w}-${i}`, children: e })] }, e))] }), v && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(r.f, { children: [(0, o.jsx)(t.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(r.f, { children: (0, o.jsx)(t.TM, { id: v, name: v }) })] }), x && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(t.JM, { id: `${x}-description`, children: S ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...R(`${x}[]`, { required: { value: !0, message: S ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!z[`${x}[]`] }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${x}-1`, children: S ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), z[x] && (0, o.jsx)(t.YB, { children: z[x].message })] }), b?.id && (0, o.jsx)('input', { type: 'hidden', name: b.id, value: b.value }), (0, o.jsx)(t.e2, { children: (0, o.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: f || (S ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  95056(e, i, n) {
   (n.r(i), n.d(i, { assets: () => d, contentTitle: () => o, default: () => j, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"project/blijf-op-de-hoogte","title":"Op de hoogte blijven","description":"De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.","source":"@site/docs/project/blijf-op-de-hoogte.mdx","sourceDirName":"project","slug":"/project/blijf-op-de-hoogte","permalink":"/project/blijf-op-de-hoogte","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/blijf-op-de-hoogte.mdx","tags":[],"version":"current","frontMatter":{"title":"Op de hoogte blijven","hide_title":true,"hide_table_of_contents":false,"navigation_order":5,"sidebar_label":"Op de hoogte blijven","pagination_label":"Op de hoogte blijven","description":"De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.","keywords":["heartbeat","blog","slack"]},"sidebar":"project","previous":{"title":"Kernteam","permalink":"/project/kernteam"},"next":{"title":"Klachten","permalink":"/project/klachten"}}');
   var r = n(86070),
    a = n(18439),
    s = n(78599);
   const l = { title: 'Op de hoogte blijven', hide_title: !0, hide_table_of_contents: !1, navigation_order: 5, sidebar_label: 'Op de hoogte blijven', pagination_label: 'Op de hoogte blijven', description: 'De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.', keywords: ['heartbeat', 'blog', 'slack'] },
    o = 'Op de hoogte blijven',
    d = {},
    c = [{ value: 'Nieuwsbrief', id: 'nieuwsbrief', level: 2 }];
   function h(e) {
    const i = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(i.header, { children: (0, r.jsx)(i.h1, { id: 'op-de-hoogte-blijven', children: 'Op de hoogte blijven' }) }), '\n', (0, r.jsx)(i.p, { children: "Er zijn verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.\nDe activiteiten en voortgang van het kernteam zijn voor iedereen te volgen door (vrijblijvend) deel te nemen aan onze 2-wekelijkse Heartbeat-sessies. Tijdens deze laagdrempelige online bijeenkomsten delen we de laatste ontwikkelingen door middel van demo's en voorbeelden." }), '\n', (0, r.jsxs)(i.ul, { children: ['\n', (0, r.jsxs)(i.li, { children: [(0, r.jsx)(i.a, { href: '/events/heartbeat/aanmelden/', children: 'Neem deel aan onze Heartbeat-sessies' }), ' of ', (0, r.jsx)(i.a, { href: '/events/heartbeat/', children: 'kijk opgenomen sessies terug' }), '.'] }), '\n', (0, r.jsxs)(i.li, { children: [(0, r.jsx)(i.a, { href: '#nieuwsbrief', children: 'Meld je aan voor onze nieuwsbrief' }), ' (hieronder).'] }), '\n', (0, r.jsxs)(i.li, { children: [(0, r.jsx)(i.a, { href: '/blog/', children: 'Lees ons blog voor uitgebreidere interviews en artikelen' }), '.'] }), '\n', (0, r.jsxs)(i.li, { children: ['op ', (0, r.jsx)(i.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, r.jsx)(i.code, { children: '#nl-design-system' }), ', daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen.'] }), '\n'] }), '\n', (0, r.jsx)(i.h2, { id: 'nieuwsbrief', children: 'Nieuwsbrief' }), '\n', (0, r.jsx)(i.p, { children: 'We kunnen je ook per e-mail op de hoogte houden. We zullen je maximaal \xe9\xe9n keer per maand een update sturen, en je kunt je altijd weer uitschrijven.' }), '\n', (0, r.jsx)(s.W, { listId: 'ceamfdjtu3', emailFieldId: '2x8bD6GMu5', firstNameFieldId: '40GfQGdmHU', thanksPage: 'https://nldesignsystem.nl/project/blijf-op-de-hoogte/nieuwsbrief/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function j(e = {}) {
    const { wrapper: i } = { ...(0, a.R)(), ...e.components };
    return i ? (0, r.jsx)(i, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
