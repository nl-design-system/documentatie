'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [91466],
 {
  37447(e, i, n) {
   n.d(i, { W: () => o });
   var t = n(29181),
    r = n(30758),
    s = n(27890),
    a = n(54565),
    l = n(86070);
   const o = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: c = '', interestsId: h = '', interestsLegend: j = 'Waar wil je NL Design System voor gebruiken?', interests: u = [], interestsRequired: p = !1, disallowedInterestValues: m = [], workAreasId: v = '', privacyPolicyId: g = '', language: x, submitText: b = '', talkTitleId: f = '', talkDescriptionId: k = '', roleId: y = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: R = !1 }) => {
    const {
      register: $,
      handleSubmit: I,
      formState: { errors: _ },
     } = (0, s.mN)(),
     D = (0, r.useRef)(null),
     S = '2' === x?.value,
     B = (0, a.c)() ? window.location.search : '',
     N = new URLSearchParams(B),
     q = N.get('prefillEmail'),
     F = N.get('prefillName'),
     M =
      !!(h && u.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let r = 0; r < e.length; r++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(u, m);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: D,
     onSubmit: I(() => {
      D.current.submit();
     }),
     children: [(0, l.jsxs)(t.zB, { type: 'email', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: `id-${o}`, children: S ? 'Email address ' : 'E-mailadres' }) }), _[o] && (0, l.jsx)(t.YB, { children: _[o].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: q, 'aria-required': 'true', ...$(`${o}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: S ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!_[o] }) })] }), (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: d, children: S ? 'Name' : 'Naam' }) }), _[d] && (0, l.jsx)(t.YB, { children: _[d].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: d, name: d, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...$(`${d}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!_[d] }) })] }), f && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: f, children: S ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(t.JM, { children: S ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: f, name: f, ...$(f, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: k, children: S ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(t.JM, { children: S ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: k, name: k, rows: 12, ...$(k, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: c, children: S ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), _[c] && (0, l.jsx)(t.YB, { children: _[c].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: c, name: c, type: 'text' }) })] }), h && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [j, !p && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, i) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${h}[]`, value: M[i], id: `${h}-${M[i]}` }), (0, l.jsx)(t.lR, { htmlFor: `${h}-${M[i]}`, children: e })] }, e))] }), y && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [w, !R && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, i) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${y}[]`, id: `${y}-${i}` }), (0, l.jsx)(t.lR, { htmlFor: `${y}-${i}`, children: e })] }, e))] }), v && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: v, name: v }) })] }), g && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.JM, { id: `${g}-description`, children: S ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...$(`${g}[]`, { required: { value: !0, message: S ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!_[`${g}[]`] }), (0, l.jsx)(t.lR, { htmlFor: `${g}-1`, children: S ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), _[g] && (0, l.jsx)(t.YB, { children: _[g].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(t.e2, { children: (0, l.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: b || (S ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  54565(e, i, n) {
   n.d(i, { c: () => r });
   var t = n(30758);
   function r() {
    const [e, i] = (0, t.useState)();
    return ((0, t.useEffect)(() => i(!0), []), e);
   }
  },
  95056(e, i, n) {
   (n.r(i), n.d(i, { assets: () => d, contentTitle: () => o, default: () => j, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"project/blijf-op-de-hoogte","title":"Op de hoogte blijven","description":"De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.","source":"@site/docs/project/blijf-op-de-hoogte.mdx","sourceDirName":"project","slug":"/project/blijf-op-de-hoogte","permalink":"/project/blijf-op-de-hoogte","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/blijf-op-de-hoogte.mdx","tags":[],"version":"current","frontMatter":{"title":"Op de hoogte blijven","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Op de hoogte blijven","pagination_label":"Op de hoogte blijven","description":"De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.","keywords":["heartbeat","blog","slack"]},"sidebar":"project","previous":{"title":"Kernteam","permalink":"/project/kernteam"},"next":{"title":"Links","permalink":"/project/links"}}');
   var r = n(86070),
    s = n(18439),
    a = n(37447);
   const l = { title: 'Op de hoogte blijven', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Op de hoogte blijven', pagination_label: 'Op de hoogte blijven', description: 'De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.', keywords: ['heartbeat', 'blog', 'slack'] },
    o = 'Op de hoogte blijven',
    d = {},
    c = [{ value: 'Nieuwsbrief', id: 'nieuwsbrief', level: 2 }];
   function h(e) {
    const i = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(i.header, { children: (0, r.jsx)(i.h1, { id: 'op-de-hoogte-blijven', children: 'Op de hoogte blijven' }) }), '\n', (0, r.jsx)(i.p, { children: "Er zijn verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.\nDe activiteiten en voortgang van het kernteam zijn voor iedereen te volgen door (vrijblijvend) deel te nemen aan onze 2-wekelijkse Heartbeat-sessies. Tijdens deze laagdrempelige online bijeenkomsten delen we de laatste ontwikkelingen door middel van demo's en voorbeelden." }), '\n', (0, r.jsxs)(i.ul, { children: ['\n', (0, r.jsxs)(i.li, { children: [(0, r.jsx)(i.a, { href: '/events/heartbeat/aanmelden/', children: 'Neem deel aan onze Heartbeat-sessies' }), ' of ', (0, r.jsx)(i.a, { href: '/events/heartbeat/', children: 'kijk opgenomen sessies terug' }), '.'] }), '\n', (0, r.jsxs)(i.li, { children: [(0, r.jsx)(i.a, { href: '#nieuwsbrief', children: 'Meld je aan voor onze nieuwsbrief' }), ' (hieronder).'] }), '\n', (0, r.jsxs)(i.li, { children: [(0, r.jsx)(i.a, { href: '/blog/', children: 'Lees ons blog voor uitgebreidere interviews en artikelen' }), '.'] }), '\n', (0, r.jsxs)(i.li, { children: ['op ', (0, r.jsx)(i.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, r.jsx)(i.code, { children: '#nl-design-system' }), ', daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen.'] }), '\n'] }), '\n', (0, r.jsx)(i.h2, { id: 'nieuwsbrief', children: 'Nieuwsbrief' }), '\n', (0, r.jsx)(i.p, { children: 'We kunnen je ook per e-mail op de hoogte houden. We zullen je maximaal \xe9\xe9n keer per maand een update sturen, en je kunt je altijd weer uitschrijven.' }), '\n', (0, r.jsx)(a.W, { listId: 'ceamfdjtu3', emailFieldId: '2x8bD6GMu5', firstNameFieldId: '40GfQGdmHU', thanksPage: 'https://nldesignsystem.nl/project/blijf-op-de-hoogte/nieuwsbrief/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function j(e = {}) {
    const { wrapper: i } = { ...(0, s.R)(), ...e.components };
    return i ? (0, r.jsx)(i, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
