'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [28568],
 {
  1292(e, n, r) {
   r.d(n, { r: () => p });
   var t = r(29181),
    i = r(74172),
    o = r(15089),
    s = r(28377),
    a = r(33648),
    l = r(83386),
    d = r(86070);
   const c = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(o.A, {}), npm: (0, d.jsx)(s.A, {}), storybook: (0, d.jsx)(a.A, {}) },
    p = ({ brand: e }) => (0, d.jsx)(t.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  17045(e, n, r) {
   r.d(n, { Ay: () => a, RM: () => o });
   var t = r(86070),
    i = r(18439);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  19776(e, n, r) {
   r.d(n, { Ay: () => a, RM: () => o });
   var t = r(86070),
    i = r(18439);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  24838(e, n, r) {
   r.d(n, { Ay: () => s });
   var t = r(86070),
    i = r(18439);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, t.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, t.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  33062(e, n, r) {
   r.d(n, { bo: () => i, KF: () => m, mJ: () => j, VZ: () => y, cR: () => D, Pv: () => g, qZ: () => s, kD: () => k, B2: () => h, Pc: () => l, f4: () => a, GT: () => b, fX: () => o, eQ: () => v, B_: () => x, o_: () => f, Rc: () => w });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const p = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return p(c(n));
    },
    h = (e, n) => j(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return p(c(e.tasks.filter(({ name: e, value: r }) => '' !== r && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    j = (e) => p(c(e.projects.flatMap((e) => u(e)))),
    g = (e) => {
     const n = u(e),
      r = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: r }) => '' !== r && e.includes(n))
       .map(({ name: t, id: i, value: o }) => {
        const s = /^(.+) URL/.exec(t)[1],
         a = 'Storybook' === s ? `${r} (${n}) in Storybook van ${e.title}` : `${r} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: t, id: i, value: o, description: a };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    f = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function k(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((r) => ('object' == typeof e[r] && null !== e[r] ? k(e[r], [...n, r]) : []));
   }
   function b(e) {
    const n = new Map();
    function r(e) {
     return (n.has(e) || n.set(e, f(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || r(e).localeCompare(r(n)));
   }
   function w(e) {
    const n = {};
    for (const r of e) {
     let e = n;
     for (const n of r) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const D = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    y = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  34257(e, n, r) {
   r.d(n, { Ay: () => s });
   var t = r(86070),
    i = r(18439);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, t.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, t.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, t.jsx)(n.code, { children: 'em' }), ' of ', (0, t.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, t.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, t.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, t.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  40808(e, n, r) {
   r.d(n, { Ay: () => a, RM: () => o });
   var t = r(86070),
    i = r(18439);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  54565(e, n, r) {
   r.d(n, { c: () => i });
   var t = r(30758);
   function i() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  55552(e, n, r) {
   r.d(n, { Ay: () => s });
   var t = r(86070),
    i = r(18439);
   function o(e) {
    const n = { code: 'code', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, t.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, t.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, t.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, t.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, t.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, t.jsx)(n.code, { children: ':root' }), ' niveau.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  58160(e, n, r) {
   (r.r(n), r.d(n, { assets: () => D, component: () => z, contentTitle: () => w, default: () => S, description: () => A, frontMatter: () => b, issueNumber: () => F, metadata: () => t, title: () => y, toc: () => N }));
   const t = JSON.parse('{"id":"componenten/form-field-description/index","title":"Form Field Description","description":"Toont ondersteunende tekst en biedt extra context over de in te vullen informatie.","source":"@site/docs/componenten/form-field-description/index.mdx","sourceDirName":"componenten/form-field-description","slug":"/form-field-description","permalink":"/form-field-description","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/form-field-description/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Form Field Description","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Form Field Description","pagination_label":"Form Field Description","description":"Toont ondersteunende tekst en biedt extra context over de in te vullen informatie.","slug":"/form-field-description","keywords":["beschrijving","description","form","form field","form field description","form field help text","form field hint","formulier","formulierelement","helper","help text","hint","hint label","hint tekst","hint text"]},"sidebar":"componenten","previous":{"title":"Form Field","permalink":"/form-field"},"next":{"title":"Form Field Error Message","permalink":"/form-field-error-message"}}');
   var i = r(86070),
    o = r(18439),
    s = r(45189),
    a = r(17045),
    l = r(19776),
    d = r(40808);
   function c(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Koppel de Form Field Description met ', (0, i.jsx)(n.code, { children: 'aria-describedby' }), ' aan het bijbehorende element voor formulierinvoer:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<label for="name">Naam</label>\n<p id="description-name">Vul je voornaam en achternaam in.</p>\n<input id="name" aria-describedby="description-name" autocomplete="name" />\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Zorg ervoor dat de tekst in de Form Field Description niet ingeklapt is, zoals het geval is in een ', (0, i.jsx)(n.code, { children: 'details' }), ' en ', (0, i.jsx)(n.code, { children: 'summary' }), ' combinatie. De verborgen tekst wordt in de browsers Firefox en Safari (', (0, i.jsx)(n.a, { href: '/baseline/2026-03/', children: 'NL Design System baseline maart 2026' }), ') niet door ', (0, i.jsx)(n.a, { href: '/woordenlijst/#:~:text=Nederlandstalige%20WCAG%20definitie-,Screenreader,-screen%20reader', children: 'screenreaders' }), ' voorgelezen.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/', children: 'Toegankelijke instructies en beschrijvingen' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   function p(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['De Form Field Description kan met ', (0, i.jsx)(n.code, { children: 'aria-describedby' }), ' aan het bijbehorende element voor formulierinvoer worden gekoppeld.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<label for="name">Naam</label>\n<p id="description-name">Vul je voornaam en achternaam in.</p>\n<input id="name" aria-describedby="description-name" autocomplete="name" />\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/', children: 'Toegankelijke descriptions bij formuliervelden' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   function m(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg ervoor dat instructies die nodig zijn om te begrijpen wat er van de bezoeker verwacht wordt op een logische plek staan en gekoppeld zijn aan het element voor formulierinvoer.' }), '\n', (0, i.jsx)(n.p, { children: 'De meest gebruiksvriendelijke plek voor instructies is tussen het label en het element voor formulierinvoer. Als instructies er \xf3nder staan, worden ze mogelijk bedekt door de autocomplete-functionaliteit van de browser.' }), '\n', (0, i.jsxs)(n.p, { children: ['Een screenreader schakelt in een formulierveld over van leesmodus naar focusmodus. Als een bezoeker daarna instructies t\xfassen de velden wil lezen, moet diegene weer handmatig terugschakelen naar de leesmodus. Koppel instructies daarom ook aan het element voor formulierinvoer met ', (0, i.jsx)(n.code, { children: 'aria-describedby' }), '. Op die manier wordt de beschrijving voorgelezen wanneer de toetsenbordfocus op dat element staat.'] }), '\n', (0, i.jsx)(n.p, { children: 'Voorbeeld:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<label for="name">Naam</label>\n<p id="description-name">Vul je voornaam en achternaam in.</p>\n<input id="name" aria-describedby="description-name" autocomplete="name" />\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/', children: 'Toegankelijke instructies en beschrijvingen' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   var h = r(55552),
    u = r(83329),
    j = r(83672),
    g = r(34257),
    f = r(24838);
   const x = [
     {
      title: 'De Form Field Description is gekoppeld aan het bijbehorende element voor formulierinvoer',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
      },
      tags: ['developer'],
     },
     {
      title: 'De Form Field Description staat op een logische plek',
      sc: '1.3.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
      },
      tags: ['designer', 'developer'],
     },
     { title: 'Instructies in de Form Field Description zijn op een inclusieve manier beschreven.', sc: '1.3.3', status: '', component: r(91391).Ay, tags: ['designer', 'contentmaker'] },
     { title: 'De tekst in de Form Field Description heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.', sc: '1.4.3', status: '', component: j.Ay, tags: ['designer'] },
     { title: 'Als je de tekst van de Form Field Description vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: g.Ay, tags: ['developer'] },
     { title: 'De bezoeker kan de Form Field Description tot 400% vergroten zonder verlies van functionaliteit of informatie.', sc: '1.4.10', status: '', component: h.Ay, tags: ['developer', 'designer'] },
     { title: 'Als de Form Field Description in een andere taal is dan de taal van de pagina, dan heeft het een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: f.Ay, tags: ['developer'] },
    ],
    v = [
     {
      title: 'De Form Field Description kan aan een element voor formulierinvoer gekoppeld worden.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
      },
      tags: ['developer'],
     },
     { title: 'Tekst in de Form Field Description blijft leesbaar wanneer de tekstafstand vergroot wordt. ', sc: '1.4.12', status: '', component: u.Ay, tags: ['developer'] },
    ];
   var k = r(80506);
   const b = { title: 'Form Field Description', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Form Field Description', pagination_label: 'Form Field Description', description: 'Toont ondersteunende tekst en biedt extra context over de in te vullen informatie.', slug: '/form-field-description', keywords: ['beschrijving', 'description', 'form', 'form field', 'form field description', 'form field help text', 'form field hint', 'formulier', 'formulierelement', 'helper', 'help text', 'hint', 'hint label', 'hint tekst', 'hint text'] },
    w = void 0,
    D = {},
    y = 'Form Field Description',
    A = 'Toont ondersteunende tekst en biedt extra context over de in te vullen informatie.',
    F = 174,
    z = s.find((e) => e.number === F),
    N = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...l.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...a.RM, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function _(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, o.R)(), ...e.components },
     { Checklist: r, ChecklistItem: t } = n;
    return (r || T('Checklist', !0), t || T('ChecklistItem', !0), (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(k.Fc, { component: z, headingLevel: 1, description: A }), '\n', (0, i.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, i.jsx)(d.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, i.jsx)(l.Ay, {}), '\n', (0, i.jsx)(r, { headingLevel: '4', children: x.map(({ component: e, ...n }) => (0, i.jsx)(t, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, i.jsx)(a.Ay, {}), '\n', (0, i.jsx)(r, { headingLevel: '4', children: v.map(({ component: e, ...n }) => (0, i.jsx)(t, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(k.VK, { component: z, headingLevel: 3 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(k.mu, { component: z, headingLevel: 3 }), '\n', (0, i.jsx)(k.$9, { component: z, headingLevel: 2 })] }));
   }
   function S(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(_, { ...e }) }) : _(e);
   }
   function T(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  67970(e, n, r) {
   r.d(n, { D: () => a });
   var t = r(46447),
    i = r(13526),
    o = r(33062),
    s = r(86070);
   const a = ({ state: e }) => {
    const n = (0, o.fX)(e);
    return (0, s.jsx)(t.KE, { className: (0, i.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, r) {
   r.d(n, { p: () => o });
   var t = r(13526),
    i = r(86070);
   const o = ({ children: e, className: n, level: r = 1, suffix: o, ...s }) => (0, i.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${r}`, n), ...s, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
  80506(e, n, r) {
   r.d(n, { VK: () => j, $9: () => f, mu: () => g, Fc: () => x });
   var t = r(29181),
    i = r(13526),
    o = r(1292),
    s = r(90495),
    a = r(54565);
   function l(e) {
    return (0, a.c)() ? e.children() : null;
   }
   var d = r(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const t = r(83294).V6;
      return (0, d.jsx)(t, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--basis-color-accent-1-inverse-bg-default)', key: 'Done', value: e, stroke: '2' },
        { fill: 'var(--basis-color-disabled-bg-default)', key: 'Todo', value: n, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   var p = r(67970),
    m = r(72642),
    h = r(58876),
    u = r(33062);
   const j = ({ component: e, headingLevel: n }) => {
     const r = e && e.projects.filter((e) => u.f4.includes(e.id)),
      o = r && u.f4.map((e) => r.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(t.If, { sections: o.map((r) => ({ className: (0, i.A)('definition-of-done', r && `definition-of-done--${(0, u.fX)(r.title)}`), headingLevel: n, expanded: !1, label: r ? `${r.title} - ${r.progress.value} van ${r.progress.max}` : '', body: r && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(h._, { children: r.tasks.map(({ checked: e, name: r, id: t }) => (0, d.jsx)(h.Z, { headingLevel: n + 1, checked: e, heading: r, description: (0, u.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${r.url}?filterQuery=${e.title}`, children: [r.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    g = ({ component: e, headingLevel: n }) => {
     const r = e && e.projects.filter((e) => !u.f4.includes(e.id));
     return e && r.length
      ? (0, d.jsx)(s.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: r
          .sort((e, n) => {
           const r = e.progress.max - e.progress.value,
            t = n.progress.max - n.progress.value;
           return r === t ? e.title.localeCompare(n.title) : r - t;
          })
          .map((e) => {
           const r = e.tasks.find(({ name: e }) => 'Naam' === e),
            i = r?.value,
            a = (0, u.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            p = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            s.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(s.Wu, {
              children: [
               (0, d.jsx)(t.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(t.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (p.length > 0 || a.length > 0) && (0, d.jsx)(t.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               p.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(t.dk, {
                  links: p
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(o.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               a.length > 0 && (0, d.jsx)(d.Fragment, { children: a.map(({ frameworkName: e, tasks: r }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, d.jsx)(t.dk, { links: r.map((e) => ({ children: e.description, icon: (0, d.jsx)(o.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    f = ({ component: e, headingLevel: n }) => {
     const r = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = r?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(t.Xy, { children: [i ? (0, d.jsxs)(t.Er, { children: ['Vul de ', (0, d.jsx)(t.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(t.Er, { children: [(0, d.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    x = ({ component: e, headingLevel: n, description: r }) => {
     const i = e && u.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: i && (0, d.jsx)(p.D, { state: i }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: r })] });
    };
  },
  83329(e, n, r) {
   r.d(n, { Ay: () => s });
   var t = r(86070),
    i = r(18439);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, t.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, t.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, t.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, t.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, t.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, t.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, t.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, t.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, t.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, t.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, t.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  83672(e, n, r) {
   r.d(n, { Ay: () => s });
   var t = r(86070),
    i = r(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, t.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, t.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, t.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  90495(e, n, r) {
   r.d(n, { AC: () => d, Fu: () => s, Wu: () => a, Zp: () => l });
   var t = r(46447),
    i = r(13526),
    o = r(86070);
   const s = ({ background: e, children: n, className: r, ...t }) => (0, o.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, r), ...t, children: n }),
    a = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: r, component: s = 'div', background: a, children: l }) => {
     const d = (e) => ('article' === s ? (0, o.jsx)('article', { ...e }) : 'section' === s ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      c = (0, o.jsx)(d, { className: (0, i.A)('cardgroup__card', a && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, r), children: l });
     return e ? (0, o.jsx)(t.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: r }) => (0, o.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, r), children: n });
  },
  91391(e, n, r) {
   r.d(n, { Ay: () => a, RM: () => o });
   var t = r(86070),
    i = r(18439);
   const o = [];
   function s(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Geef instructies op een inclusieve manier. De instructies kunnen begrijpen moet niet afhankelijk zijn van eigenschappen die sommige gebruikers niet ervaren.' }), '\n', (0, t.jsx)(n.p, { children: 'Het gaat hierbij om eigenschappen zoals vorm, kleur, afmeting, locatie op het scherm, richting, of geluid. Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: '"De fouten zijn met een rode rand gemarkeerd". Niet iedereen kan zien, niet iedereen kan de kleur rood van zwart onderscheiden.' }), '\n', (0, t.jsx)(n.li, { children: '"Klik op de meest rechtse knop". Niet iedereen kan zien, sommige gebruikers zijn ingezoomd waardoor de knoppen op twee regels staan.' }), '\n', (0, t.jsx)(n.li, { children: '"Als je het geluid hoort, heb je nog 5 minuten." Niet iedereen kan dat geluid goed horen of heeft het geluid aanstaan.' }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
