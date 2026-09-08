'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [91466],
 {
  45186(e, i, n) {
   n.d(i, { c: () => r });
   var t = n(30758);
   function r() {
    const [e, i] = (0, t.useState)();
    return ((0, t.useEffect)(() => i(!0), []), e);
   }
  },
  45205(e, i, n) {
   (n.r(i), n.d(i, { assets: () => d, contentTitle: () => o, default: () => j, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"project/blijf-op-de-hoogte","title":"Op de hoogte blijven","description":"De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.","source":"@site/docs/project/blijf-op-de-hoogte.mdx","sourceDirName":"project","slug":"/project/blijf-op-de-hoogte","permalink":"/project/blijf-op-de-hoogte","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/blijf-op-de-hoogte.mdx","tags":[],"version":"current","frontMatter":{"title":"Op de hoogte blijven","hide_title":true,"hide_table_of_contents":false,"navigation_order":5,"sidebar_label":"Op de hoogte blijven","pagination_label":"Op de hoogte blijven","description":"De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.","keywords":["heartbeat","blog","slack"]},"sidebar":"project","previous":{"title":"Kernteam","permalink":"/project/kernteam"},"next":{"title":"Klachten","permalink":"/project/klachten"}}');
   var r = n(86070),
    a = n(18439),
    s = n(75812);
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
  75812(e, i, n) {
   n.d(i, { W: () => c });
   var t = n(29181),
    r = n(89974),
    a = n(56561),
    s = n(30758),
    l = n(27890),
    o = n(45186),
    d = n(86070);
   const c = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: c = '', firstNameFieldId: h = '', orgId: j = '', interestsId: p = '', interestsLegend: m = 'Waar wil je NL Design System voor gebruiken?', interests: u = [], interestsRequired: g = !1, disallowedInterestValues: v = [], workAreasId: x = '', privacyPolicyId: b = '', language: f, submitText: k = '', talkTitleId: y = '', talkDescriptionId: w = '', roleId: $ = '', roleLegend: _ = 'Wat is jouw rol?', roles: I = [], roleRequired: N = !1 }) => {
    const {
      register: R,
      handleSubmit: z,
      formState: { errors: D },
     } = (0, l.mN)(),
     S = (0, s.useRef)(null),
     B = '2' === f?.value,
     q = (0, o.c)() ? window.location.search : '',
     F = new URLSearchParams(q),
     M = F.get('prefillEmail'),
     T = F.get('prefillName'),
     O =
      !!(p && u.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let r = 0; r < e.length; r++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(u, v);
    return (0, d.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: S,
     onSubmit: z(() => {
      S.current.submit();
     }),
     children: [(0, d.jsxs)(t.zB, { type: 'email', children: [(0, d.jsx)(a.f, { children: (0, d.jsx)(t.lR, { htmlFor: `id-${c}`, children: B ? 'Email address ' : 'E-mailadres' }) }), D[c] && (0, d.jsx)(t.YB, { children: D[c].message }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: `id-${c}`, name: c, type: 'email', autoComplete: 'email', defaultValue: M, 'aria-required': 'true', ...R(`${c}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: B ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!D[c] }) })] }), (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(a.f, { children: (0, d.jsx)(t.lR, { htmlFor: h, children: B ? 'Name' : 'Naam' }) }), D[h] && (0, d.jsx)(t.YB, { children: D[h].message }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: h, name: h, type: 'text', defaultValue: T, autoComplete: 'given-name', 'aria-required': 'true', ...R(`${h}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!D[h] }) })] }), y && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(a.f, { children: [(0, d.jsx)(t.lR, { htmlFor: y, children: B ? 'Title of your talk' : 'Titel van je presentatie' }), (0, d.jsx)(t.JM, { children: B ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: y, name: y, ...R(y, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(a.f, { children: [(0, d.jsx)(t.lR, { htmlFor: w, children: B ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, d.jsx)(t.JM, { children: B ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.TM, { id: w, name: w, rows: 12, ...R(w, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), j && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(a.f, { children: (0, d.jsx)(t.lR, { htmlFor: j, children: B ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), D[j] && (0, d.jsx)(t.YB, { children: D[j].message }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: j, name: j, type: 'text' }) })] }), p && (0, d.jsxs)(t.LB, { children: [(0, d.jsx)(a.f, { children: (0, d.jsxs)(t.u4, { children: [m, !g && ' (niet verplicht)'] }) }), (0, d.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, i) => (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { name: `${p}[]`, value: O[i], id: `${p}-${O[i]}` }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${p}-${O[i]}`, children: e })] }, e))] }), $ && (0, d.jsxs)(t.LB, { children: [(0, d.jsx)(a.f, { children: (0, d.jsxs)(t.u4, { children: [_, !N && ' (niet verplicht)'] }) }), (0, d.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), I.map((e, i) => (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { name: `${$}[]`, id: `${$}-${i}` }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${$}-${i}`, children: e })] }, e))] }), x && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(a.f, { children: [(0, d.jsx)(t.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, d.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.TM, { id: x, name: x }) })] }), b && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(t.JM, { id: `${b}-description`, children: B ? (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { value: '1', id: `${b}-1`, 'aria-describedby': `${b}-description`, 'aria-required': 'true', ...R(`${b}[]`, { required: { value: !0, message: B ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!D[`${b}[]`] }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${b}-1`, children: B ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), D[b] && (0, d.jsx)(t.YB, { children: D[b].message })] }), f?.id && (0, d.jsx)('input', { type: 'hidden', name: f.id, value: f.value }), (0, d.jsx)(t.e2, { children: (0, d.jsx)(r.$, { type: 'submit', purpose: 'primary', children: k || (B ? 'Sign up' : 'Aanmelden') }) }), (0, d.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, d.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, d.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, d.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, d.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  89974(e, i, n) {
   n.d(i, { $: () => t.$n });
   var t = n(50805);
  },
 },
]);
