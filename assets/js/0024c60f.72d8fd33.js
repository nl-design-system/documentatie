/*! For license information please see 0024c60f.72d8fd33.js.LICENSE.txt */
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [73512],
 {
  918: (e, n, t) => {
   'use strict';
   t.d(n, { b: () => u });
   var r = t(92420),
    o = t(28020),
    i = t(14537),
    s = t(96079),
    l = t(13526),
    a = t(30758),
    c = t(68873),
    d = t(86070);
   const h = ({ title: e, sc: n, component: t, tags: c }) => {
     const h = (0, a.useId)(),
      u = [...c];
     if (n) {
      u.push(n);
      const e = o.pI.get(n);
      e?.conformance && u.push(`Niveau ${e.conformance}`);
     }
     return (0, d.jsx)('li', {
      className: (0, l.A)(
       'new-checklist__item',
       c.map((e) => `new-checklist__item--${e}`),
      ),
      children: (0, d.jsxs)('details', {
       children: [
        (0, d.jsx)('summary', { children: (0, d.jsx)('span', { className: 'new-checklist__title', id: h, children: e }) }),
        (0, d.jsxs)('div', {
         className: 'new-checklist__content',
         children: [
          (0, d.jsx)('div', { children: t }),
          (0, d.jsx)(i._Q, {
           className: 'new-checklist__badge-list',
           children: u.map((e, n) => {
            let t = (0, d.jsx)(s.K, { children: e }, n);
            if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
             const i = o.pI.get(e);
             t = (0, d.jsx)(r.N, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${i.sc} ${i.nl.title}`, style: { lineHeight: 1 }, children: (0, d.jsx)(s.K, { children: `WCAG ${e}` }) }, n);
            }
            return t;
           }),
          }),
         ],
        }),
       ],
      }),
     });
    },
    u = ({ items: e, headingLevel: n }) => {
     const t = e.reduce(
       (e, n) => (
        n.tags.forEach((n) => {
         e.add(n);
        }),
        e
       ),
       new Set(),
      ),
      [r, o] = (0, a.useState)(Array.from(t.values())),
      s = (e) => r.includes(e),
      l = (0, a.useId)(),
      u = r.length >= 1 ? e.filter(({ tags: e }) => e.some((e) => r.includes(e))) : e,
      m = e.length - u.length;
     return (0, d.jsxs)('div', {
      children: [
       (0, d.jsxs)('div', {
        className: 'ma-filter-block',
        children: [
         (0, d.jsxs)(c.LB, {
          'aria-describedby': 'filter-results',
          'aria-labelledby': l,
          children: [
           (0, d.jsx)(c.DZ, { level: n, id: l, children: 'Filter acceptatiecriteria voor:' }),
           Array.from(t.values()).map((e) =>
            (0, d.jsxs)(
             c.zB,
             {
              type: 'checkbox',
              children: [
               (0, d.jsx)(c.Sc, {
                defaultChecked: s(e),
                checked: s(e),
                id: e,
                onChange: () =>
                 ((e, n) => {
                  const t = ('boolean' == typeof n ? n : !s(e)) ? [...r, e] : r.filter((n) => n !== e);
                  o(t);
                 })(e),
               }),
               (0, d.jsx)(c.lR, { htmlFor: e, children: e }),
              ],
             },
             e,
            ),
           ),
          ],
         }),
         (0, d.jsx)('div', {
          children: (0, d.jsxs)(d.Fragment, {
           children: [
            (0, d.jsxs)('p', { role: 'status', children: [e.length - m, ' van de ', e.length, ' items zijn nu zichtbaar.'] }),
            m >= 1
             ? (0, d.jsx)(i.$n, {
                appearance: 'secondary-action-button',
                onClick: () => {
                 o(Array.from(t.values()));
                },
                children: 'Toon alles',
               })
             : (0, d.jsx)(d.Fragment, {}),
           ],
          }),
         }),
        ],
       }),
       (0, d.jsx)('ul', { className: 'new-checklist', role: 'list', children: u.map((e, n) => (0, d.jsx)(h, { ...e }, n)) }),
      ],
     });
    };
  },
  1941: (e, n, t) => {
   'use strict';
   t.d(n, { A: () => r });
   var r = (0, t(99773).A)('outline', 'file-unknown', 'IconFileUnknown', [
    ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
    ['path', { d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z', key: 'svg-1' }],
    ['path', { d: 'M12 17v.01', key: 'svg-2' }],
    ['path', { d: 'M12 14a1.5 1.5 0 1 0 -1.14 -2.474', key: 'svg-3' }],
   ]);
  },
  9277: (e, n, t) => {
   'use strict';
   t.r(n), t.d(n, { assets: () => K, component: () => Y, contentTitle: () => X, default: () => te, description: () => q, frontMatter: () => Z, issueNumber: () => Q, metadata: () => r, title: () => J, toc: () => ee });
   const r = JSON.parse('{"id":"componenten/color-sample/index","title":"Color Sample","description":"Toont een voorbeeld van een kleur.","source":"@site/docs/componenten/color-sample/index.mdx","sourceDirName":"componenten/color-sample","slug":"/color-sample","permalink":"/color-sample","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/color-sample/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Color Sample","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Color Sample","pagination_label":"Color Sample","description":"Toont een voorbeeld van een kleur.","slug":"/color-sample","keywords":["color","color code","color example","color fill","color hash","color preview","color sample","color theme","color visual","colour","colour code","colour example","colour fill","colour hash","colour preview","colour sample","colour theme","colour visual","image","kleur","kleurinfo","kleurstaal","kleurvoorbeeld","monster","palette","pantone","solid","sub","swatch","voorbeeld","voorbeeldkleur","voorvertoning"]},"sidebar":"componenten","previous":{"title":"Code Block","permalink":"/code-block"},"next":{"title":"Data Badge","permalink":"/data-badge"}}');
   var o,
    i,
    s,
    l,
    a,
    c,
    d,
    h = t(86070),
    u = t(85248),
    m = t(48976),
    p = t(30758);
   function g() {
    return (
     (g = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
         }
         return e;
        }),
     g.apply(null, arguments)
    );
   }
   const j = ({ title: e, titleId: n, ...t }) => p.createElement('svg', g({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een gekleurd vierkantje, aangeduid met het cijfer 1.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': n }, t), e ? p.createElement('title', { id: n }, e) : null, o || (o = p.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = p.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), s || (s = p.createElement('path', { fill: '#5315F6', d: 'M463.5 253.5h33v33h-33z' })), l || (l = p.createElement('path', { stroke: '#E4E7EC', d: 'M463.5 253.5h33v33h-33z' })), a || (a = p.createElement('rect', { width: 32, height: 32, x: 384, y: 254, fill: '#DE00A4', rx: 16 })), c || (c = p.createElement('path', { fill: '#fff', d: 'M402.502 264.368V276.5H400v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), d || (d = p.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M416 270h48' })));
   var v = t(17045),
    y = t(19776),
    f = t(40808);
   function w(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, u.R)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(n.p, { children: 'Vertel in tekst welke kleur wordt weergegeven. Denk hierbij bijvoorbeeld de naam van de kleur, de hex-code of de hsl-waarde, de transparantie, het doel van de kleur, de CSS-class.' }), '\n', (0, h.jsxs)(n.p, { children: ['Dan is het voor gebruikers van ', (0, h.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en mensen die slechtziend of kleurenblind zijn ook duidelijk welke kleur bedoeld wordt.'] }), '\n', (0, h.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, h.jsxs)(n.ul, { children: ['\n', (0, h.jsx)(n.li, { children: (0, h.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/niet-kleur-alleen/', children: 'Vertrouw niet op kleur alleen' }) }), '\n', (0, h.jsx)(n.li, { children: (0, h.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/waarneming/', children: 'Let op verschillen in waarneming van kleur' }) }), '\n', (0, h.jsx)(n.li, { children: (0, h.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n'] })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, u.R)(), ...e.components };
    return n ? (0, h.jsx)(n, { ...e, children: (0, h.jsx)(w, { ...e }) }) : w(e);
   }
   function b(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, u.R)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsxs)(n.p, { children: ['Een gebruiker van een ', (0, h.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' kan herkennen welk kleurvlak bij welke eigenschappen hoort.\nDit is niet alleen via de visuele informatie beschikbaar, maar ook vanuit de semantiek van de HTML-code.'] }), '\n', (0, h.jsxs)(n.p, { children: ['Dit kan bijvoorbeeld door het weergeven van het kleurvlak en de data in een tabel ', (0, h.jsx)(n.code, { children: '<table>' }), ', een description list ', (0, h.jsx)(n.code, { children: '<dl>' }), ' of in een ongenummerde lijst ', (0, h.jsx)(n.code, { children: '<ul>' }), '.'] }), '\n', (0, h.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, h.jsxs)(n.ul, { children: ['\n', (0, h.jsx)(n.li, { children: (0, h.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/opsommingen/', children: 'Opsommingen' }) }), '\n', (0, h.jsx)(n.li, { children: (0, h.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tabellen/', children: 'Tabellen' }) }), '\n'] })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, u.R)(), ...e.components };
    return n ? (0, h.jsx)(n, { ...e, children: (0, h.jsx)(b, { ...e }) }) : b(e);
   }
   function A(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, u.R)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsxs)(n.p, { children: ['De Color Sample kan worden voorzien van een beschrijvende alternatieve tekst, doordat ', (0, h.jsx)(n.code, { children: 'aria-label' }), ' of ', (0, h.jsx)(n.code, { children: 'aria-labelledby' }), ' in de component gebruikt kan worden.'] }), '\n', (0, h.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, h.jsxs)(n.ul, { children: ['\n', (0, h.jsx)(n.li, { children: (0, h.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n'] })] });
   }
   function C(e = {}) {
    const { wrapper: n } = { ...(0, u.R)(), ...e.components };
    return n ? (0, h.jsx)(n, { ...e, children: (0, h.jsx)(A, { ...e }) }) : A(e);
   }
   function T(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, u.R)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsxs)(n.p, { children: ['De Color Sample is herkenbaar als afbeelding voor gebruikers van hulpsoftware, zoals ', (0, h.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '. Het ', (0, h.jsx)(n.code, { children: 'svg' }), '-element in de Color Sample heeft de rol ', (0, h.jsx)(n.code, { children: 'img' }), '.'] }), '\n', (0, h.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, h.jsxs)(n.ul, { children: ['\n', (0, h.jsx)(n.li, { children: (0, h.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n'] })] });
   }
   function R(e = {}) {
    const { wrapper: n } = { ...(0, u.R)(), ...e.components };
    return n ? (0, h.jsx)(n, { ...e, children: (0, h.jsx)(T, { ...e }) }) : T(e);
   }
   function z(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, u.R)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsxs)(n.p, { children: ['Een gebruiker van een ', (0, h.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' kan herkennen welke kleurvlakken bij welke eigenschappen horen als de gebruiker van boven naar beneden de webpagina doorleest.\nDe connectie tussen kleurvlak en eigenschappen is niet alleen via de visuele informatie beschikbaar, maar ook in de volgorde van de HTML-code in de ', (0, h.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model', children: 'DOM' }), '.'] }), '\n', (0, h.jsx)(n.p, { children: 'NL Design System richtlijnen' }), '\n', (0, h.jsxs)(n.ul, { children: ['\n', (0, h.jsx)(n.li, { children: (0, h.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde/', children: 'Zorg voor een logische volgorde van de informatie' }) }), '\n'] })] });
   }
   function S(e = {}) {
    const { wrapper: n } = { ...(0, u.R)(), ...e.components };
    return n ? (0, h.jsx)(n, { ...e, children: (0, h.jsx)(z, { ...e }) }) : z(e);
   }
   var G = t(44720);
   function N(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, u.R)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsxs)(n.p, { children: ['Geef het kleurvlak (of een kader rond het kleurvlak) een kleurcontrast met de achtergrond van minimaal 3:1. Dit is te controleren met de ', (0, h.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] }), '\n', (0, h.jsx)(n.p, { children: 'Zorg ervoor dat het vlak visueel goed te onderscheiden is als kleurvlak.' }), '\n', (0, h.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, h.jsxs)(n.ul, { children: ['\n', (0, h.jsx)(n.li, { children: (0, h.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function W(e = {}) {
    const { wrapper: n } = { ...(0, u.R)(), ...e.components };
    return n ? (0, h.jsx)(n, { ...e, children: (0, h.jsx)(N, { ...e }) }) : N(e);
   }
   function D(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, u.R)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(n.p, { children: 'Gebruik de Color Sample component altijd in combinatie met tekst.' }), '\n', (0, h.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, h.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, h.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, h.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, h.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, h.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, h.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, h.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, h.jsxs)(n.ul, { children: ['\n', (0, h.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, h.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, h.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, h.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, h.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, h.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, h.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, h.jsx)(n.pre, { children: (0, h.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, h.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, h.jsxs)(n.ul, { children: ['\n', (0, h.jsx)(n.li, { children: (0, h.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, h.jsx)(n.li, { children: (0, h.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, h.jsx)(n.li, { children: (0, h.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function M(e = {}) {
    const { wrapper: n } = { ...(0, u.R)(), ...e.components };
    return n ? (0, h.jsx)(n, { ...e, children: (0, h.jsx)(D, { ...e }) }) : D(e);
   }
   function _(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, u.R)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(n.p, { children: 'Gebruik de Color Sample component altijd in combinatie met tekst.' }), '\n', (0, h.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, h.jsxs)(n.p, { children: ['Zorg ervoor dat het component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, h.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, h.jsx)(n.code, { children: 'em' }), ' of ', (0, h.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, h.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, h.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, h.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, h.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, h.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, h.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, h.jsxs)(n.ul, { children: ['\n', (0, h.jsx)(n.li, { children: (0, h.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, h.jsx)(n.li, { children: (0, h.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function L(e = {}) {
    const { wrapper: n } = { ...(0, u.R)(), ...e.components };
    return n ? (0, h.jsx)(n, { ...e, children: (0, h.jsx)(_, { ...e }) }) : _(e);
   }
   var O = t(78762),
    F = t(42759),
    P = t(62254),
    E = t(918),
    H = t(50341),
    B = t(73361),
    I = t(46563);
   function $(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, u.R)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(n.header, { children: (0, h.jsx)(n.h1, { id: 'gebruik-color-sample', children: 'Gebruik Color Sample' }) }), '\n', (0, h.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, h.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, h.jsxs)(n.p, { children: [(0, h.jsxs)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-css', children: [(0, h.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Fcolor-sample-css.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/color-sample-css'] }), '\nversie 1.'] }), '\n', (0, h.jsxs)(n.p, { children: ['Gebruik de ', (0, h.jsx)(n.code, { children: 'nl-color-sample' }), ' class name op een ', (0, h.jsx)(n.code, { children: 'svg' }), ' element:'] }), '\n', (0, h.jsx)(n.pre, { children: (0, h.jsx)(n.code, { className: 'language-html', children: '<svg role="img" xmlns="http://www.w3.org/2000/svg" class="nl-color-sample" style="color: deeppink;">\n  <path d="M0 0H32V32H0Z" fill="currentcolor" />\n</svg>\n' }) }), '\n', (0, h.jsxs)(n.p, { children: ['Zorg dat je een duidelijke beschrijving naast de Color Sample hebt en gebruik wanneer de Color Sample en beschrijving niet direct bij elkaar staan dat je ze goed aan elkaar linkt. Bijvoorbeeld door er een ', (0, h.jsx)(n.code, { children: 'figure' }), ' omheen te zetten:'] }), '\n', (0, h.jsx)(n.pre, { children: (0, h.jsx)(n.code, { className: 'language-html', children: '<h1>Huisstijlkleuren</h1>\n<figure>\n  <ColorSample value="deeppink" aria-labelledby="kleur-1" />\n  <figcaption id="kleur-1">Roze</figcaption>\n</figure>\n' }) }), '\n', (0, h.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, h.jsx)(n.pre, { children: (0, h.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/color-sample-css\n' }) }), '\n', (0, h.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, h.jsx)(n.pre, { children: (0, h.jsx)(n.code, { className: 'language-html', children: '<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/color-sample-css@1/dist/color-sample.css"\n/>\n' }) }), '\n', (0, h.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, h.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, h.jsx)(n.pre, { children: (0, h.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/color-sample-css/dist/color-sample.css" />\n' }) }), '\n', (0, h.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, h.jsx)(n.pre, { children: (0, h.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/color-sample-css/color-sample.css";\n' }) }), '\n', (0, h.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, h.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, h.jsxs)(n.p, { children: [(0, h.jsxs)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-react', children: [(0, h.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Fcolor-sample-react.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/color-sample-react'] }), '\nversie 1.'] }), '\n', (0, h.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, h.jsx)(n.pre, { children: (0, h.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/color-sample-react\n' }) }), '\n', (0, h.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, h.jsx)(n.pre, { children: (0, h.jsx)(n.code, { className: 'language-jsx', children: 'import { ColorSample } from "@nl-design-system-candidate/color-sample-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <ColorSample value="deeppink" />\n      </body>\n    </html>\n  );\n};\n' }) }), '\n', (0, h.jsxs)(n.p, { children: ['Zorg dat je een duidelijke beschrijving naast de Color Sample hebt en gebruik wanneer de Color Sample en beschrijving niet direct bij elkaar staan een ', (0, h.jsx)(n.code, { children: 'id' }), ' op de beschrijving die je met ', (0, h.jsx)(n.code, { children: 'aria-labelledby' }), ' koppelt aan de ', (0, h.jsx)(n.code, { children: 'ColorSample' }), ':'] }), '\n', (0, h.jsx)(n.pre, { children: (0, h.jsx)(n.code, { className: 'language-jsx', children: 'export const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <figure>\n          <ColorSample value="deeppink"/>\n          <figcaption>\n            Roze\n          </figcaption>\n      </body>\n    </html>\n  );\n};\n' }) }), '\n', (0, h.jsx)(n.h2, { id: 'figma', children: 'Figma' }), '\n', (0, h.jsxs)(n.p, { children: ['De Figma component staat in ', (0, h.jsx)(n.a, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=13781-17931', children: 'NL Design System Voorbeeld Bibliotheek \u2014 Color Sample' }), '.'] })] });
   }
   function V(e = {}) {
    const { wrapper: n } = { ...(0, u.R)(), ...e.components };
    return n ? (0, h.jsx)(n, { ...e, children: (0, h.jsx)($, { ...e }) }) : $(e);
   }
   const U = JSON.parse('{"nl":{"color-sample":{"background-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"block-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"border-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"border-radius":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length-percentage>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"border-width":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"inline-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"}}}}'),
    Z = { title: 'Color Sample', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Color Sample', pagination_label: 'Color Sample', description: 'Toont een voorbeeld van een kleur.', slug: '/color-sample', keywords: ['color', 'color code', 'color example', 'color fill', 'color hash', 'color preview', 'color sample', 'color theme', 'color visual', 'colour', 'colour code', 'colour example', 'colour fill', 'colour hash', 'colour preview', 'colour sample', 'colour theme', 'colour visual', 'image', 'kleur', 'kleurinfo', 'kleurstaal', 'kleurvoorbeeld', 'monster', 'palette', 'pantone', 'solid', 'sub', 'swatch', 'voorbeeld', 'voorbeeldkleur', 'voorvertoning'] },
    X = void 0,
    K = {},
    J = 'Color Sample',
    q = 'Toont een voorbeeld van een kleur.',
    Q = 325,
    Y = m.find((e) => e.number === Q),
    ee = [{ value: 'Anatomie', id: 'anatomie', level: 2 }, { value: 'Candidate component gebruiken', id: 'candidate-component-gebruiken', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 3 }, { value: 'CSS', id: 'css', level: 2 }, { value: 'React', id: 'react', level: 2 }, { value: 'Figma', id: 'figma', level: 2 }, { value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...f.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...y.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...v.RM, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 }];
   function ne(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, u.R)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, {
     children: [
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      (0, h.jsx)(H.Fc, { component: Y, headingLevel: 1, description: q }),
      '\n',
      (0, h.jsx)(F.e, { component: Y }),
      '\n',
      (0, h.jsx)(n.h2, { id: 'anatomie', children: 'Anatomie' }),
      '\n',
      (0, h.jsx)(P.H, { component: Y, illustration: j }),
      '\n',
      (0, h.jsx)(n.h2, { id: 'candidate-component-gebruiken', children: 'Candidate component gebruiken' }),
      '\n',
      (0, h.jsx)(n.h3, { id: 'design-tokens', children: 'Design tokens' }),
      '\n',
      (0, h.jsx)(B.B, { tokens: U }),
      '\n',
      (0, h.jsx)(I.o, { omitH1: !0, headingLevel: 3, children: (0, h.jsx)(V, {}) }),
      '\n',
      (0, h.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }),
      '\n',
      (0, h.jsx)(f.Ay, {}),
      '\n',
      (0, h.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }),
      '\n',
      (0, h.jsx)(y.Ay, {}),
      '\n',
      (0, h.jsx)(E.b, {
       headingLevel: '4',
       items: [
        { title: 'De eigenschappen van de kleur in de Color Sample zijn in tekst beschreven.', sc: '1.1.1', status: '', component: (0, h.jsx)(k, {}), tags: ['contentmaker', 'designer'] },
        { title: 'Het kleurvlak en de bijbehorende eigenschappen horen semantisch bij elkaar.', sc: '1.3.1', status: '', component: (0, h.jsx)(x, {}), tags: ['contentmaker', 'designer'] },
        { title: 'Een screenreadergebruiker kan uit de leesvolgorde herkennen welk kleurvlak bij welke eigenschappen hoort.', sc: '1.3.2', status: '', component: (0, h.jsx)(S, {}), tags: ['contentmaker', 'designer', 'developer'] },
        { title: 'Kleur is niet de enige manier waarop de informatie over de Color Sample beschikbaar is.', sc: '1.4.1', status: '', component: (0, h.jsx)(G.Ay, {}), tags: ['contentmaker', 'designer'] },
        { title: 'Het kleurcontrast van de tekst van de eigenschappen van de Color Sample is voldoende.', sc: '1.4.3', status: '', component: (0, h.jsx)(O.Ay, {}), tags: ['contentmaker', 'designer'] },
        { title: 'Als je de beschrijvende tekst bij een Color Sample vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: (0, h.jsx)(L, {}), tags: ['developer'] },
        { title: 'Het kleurvlak is duidelijk te onderscheiden ten opzichte van de achtergrond.', sc: '1.4.11', status: '', component: (0, h.jsx)(W, {}), tags: ['contentmaker', 'designer'] },
        { title: 'Als je de tekstafstand van de beschrijvende tekst bij een Color Sample vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: (0, h.jsx)(M, {}), tags: ['developer'] },
       ],
      }),
      '\n',
      (0, h.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }),
      '\n',
      (0, h.jsx)(v.Ay, {}),
      '\n',
      (0, h.jsx)(E.b, {
       headingLevel: '4',
       items: [
        { title: 'De Color Sample kan een alternatieve tekst hebben. ', sc: '1.1.1', status: '', component: (0, h.jsx)(C, {}), tags: ['developer'] },
        { title: 'De Color Sample heeft de rol van afbeelding in de accessibility tree.', sc: '1.3.1', status: '', component: (0, h.jsx)(R, {}), tags: ['developer'] },
       ],
      }),
      '\n',
      (0, h.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }),
      '\n',
      (0, h.jsx)(H.mu, { component: Y, headingLevel: 3 }),
      '\n',
      (0, h.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
      '\n',
      (0, h.jsx)(H.VK, { component: Y, headingLevel: 3 }),
      '\n',
      (0, h.jsx)(n.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }),
      '\n',
      (0, h.jsx)(H.$9, { component: Y, headingLevel: 3 }),
     ],
    });
   }
   function te(e = {}) {
    const { wrapper: n } = { ...(0, u.R)(), ...e.components };
    return n ? (0, h.jsx)(n, { ...e, children: (0, h.jsx)(ne, { ...e }) }) : ne(e);
   }
  },
  14889: (e, n, t) => {
   'use strict';
   t.d(n, { AC: () => c, Fu: () => s, Wu: () => l, Zp: () => a });
   var r = t(68873),
    o = t(13526),
    i = t(86070);
   const s = ({ background: e, children: n, className: t, ...r }) => (0, i.jsx)('div', { className: (0, o.A)('card__illustration', e && `card__illustration--${e}`, t), ...r, children: n }),
    l = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    a = ({ href: e, appearance: n, className: t, component: s = 'div', background: l, children: a }) => {
     const c = (e) => ('article' === s ? (0, i.jsx)('article', { ...e }) : 'section' === s ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      d = (0, i.jsx)(c, { className: (0, o.A)('cardgroup__card', l && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: a });
     return e ? (0, i.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'medium', children: n, className: t }) => (0, i.jsx)('div', { className: (0, o.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
  17045: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => l, RM: () => i });
   var r = t(86070),
    o = t(85248);
   const i = [];
   function s(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  19776: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => l, RM: () => i });
   var r = t(86070),
    o = t(85248);
   const i = [];
   function s(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  28020: (e, n, t) => {
   'use strict';
   t.d(n, { pI: () => s });
   const r = [
     { sc: '1.1.1', title: 'Non-text Content', url: 'https://www.w3.org/TR/WCAG21/#non-text-content', conformance: 'A', nldesignsystem: !0, nl: { title: 'Niet-tekstuele content' } },
     { sc: '1.2.1', title: 'Audio-only and Video-only (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Louter-geluid en louter-videobeeld (vooraf opgenomen)' } },
     { sc: '1.2.2', title: 'Captions (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#captions-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (vooraf opgenomen)' } },
     { sc: '1.2.3', title: 'Audio Description or Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Audiodescriptie of media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.4', title: 'Captions (Live)', url: 'https://www.w3.org/TR/WCAG21/#captions-live', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (live)' } },
     { sc: '1.2.5', title: 'Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-prerecorded', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.6', title: 'Sign Language (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#sign-language-prerecorded', conformance: 'AAA', nl: { title: 'Gebarentaal (vooraf opgenomen)' } },
     { sc: '1.2.7', title: 'Extended Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded', conformance: 'AAA', nl: { title: 'Verlengde audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.8', title: 'Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded', conformance: 'AAA', nl: { title: 'Media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.9', title: 'Audio-only (Live)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-live', conformance: 'AAA', nl: { title: 'Louter-geluid (live)' } },
     { sc: '1.3.1', title: 'Info and Relationships', url: 'https://www.w3.org/TR/WCAG21/#info-and-relationships', conformance: 'A', nldesignsystem: !0, nl: { title: 'Info en relaties' } },
     { sc: '1.3.2', title: 'Meaningful Sequence', url: 'https://www.w3.org/TR/WCAG21/#meaningful-sequence', conformance: 'A', nldesignsystem: !0, nl: { title: 'Betekenisvolle volgorde' } },
     { sc: '1.3.3', title: 'Sensory Characteristics', url: 'https://www.w3.org/TR/WCAG21/#sensory-characteristics', conformance: 'A', nldesignsystem: !0, nl: { title: 'Zintuiglijke eigenschappen' } },
     { sc: '1.3.4', title: 'Orientation', url: 'https://www.w3.org/TR/WCAG21/#orientation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Weergavestand' } },
     { sc: '1.3.5', title: 'Identify Input Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-input-purpose', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Identificeer het doel van de input' } },
     { sc: '1.3.6', title: 'Identify Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-purpose', conformance: 'AAA', nl: { title: 'Identificeer het doel' } },
     { sc: '1.4.1', title: 'Use of Color', url: 'https://www.w3.org/TR/WCAG21/#use-of-color', conformance: 'A', nldesignsystem: !0, nl: { title: 'Gebruik van kleur' } },
     { sc: '1.4.2', title: 'Audio Control', url: 'https://www.w3.org/TR/WCAG21/#audio-control', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geluidsbediening' } },
     { sc: '1.4.3', title: 'Contrast (Minimum)', url: 'https://www.w3.org/TR/WCAG21/#contrast-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast (minimum)' } },
     { sc: '1.4.4', title: 'Resize text', url: 'https://www.w3.org/TR/WCAG21/#resize-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Herschalen van tekst' } },
     { sc: '1.4.5', title: 'Images of Text', url: 'https://www.w3.org/TR/WCAG21/#images-of-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Afbeeldingen van tekst' } },
     { sc: '1.4.6', title: 'Contrast (Enhanced)', url: 'https://www.w3.org/TR/WCAG21/#contrast-enhanced', conformance: 'AAA', nl: { title: 'Contrast (versterkt)' } },
     { sc: '1.4.7', title: 'Low or No Background Audio', url: 'https://www.w3.org/TR/WCAG21/#low-or-no-background-audio', conformance: 'AAA', nl: { title: 'Weinig of geen achtergrondgeluid' } },
     { sc: '1.4.8', title: 'Visual Presentation', url: 'https://www.w3.org/TR/WCAG21/#visual-presentation', conformance: 'AAA', nl: { title: 'Visuele weergave' } },
     { sc: '1.4.9', title: 'Images of Text (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#images-of-text-no-exception', conformance: 'AAA', nl: { title: 'Afbeeldingen van tekst (geen uitzondering)' } },
     { sc: '1.4.10', title: 'Reflow', url: 'https://www.w3.org/TR/WCAG21/#reflow', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Reflow' } },
     { sc: '1.4.11', title: 'Non-text Contrast', url: 'https://www.w3.org/TR/WCAG21/#non-text-contrast', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast van niet-tekstuele content' } },
     { sc: '1.4.12', title: 'Text Spacing', url: 'https://www.w3.org/TR/WCAG21/#text-spacing', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Tekstafstand' } },
     { sc: '1.4.13', title: 'Content on Hover or Focus', url: 'https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Content bij hover of focus' } },
     { sc: '2.1.1', title: 'Keyboard', url: 'https://www.w3.org/TR/WCAG21/#keyboard', conformance: 'A', nldesignsystem: !0, nl: { title: 'Toetsenbord' } },
     { sc: '2.1.2', title: 'No Keyboard Trap', url: 'https://www.w3.org/TR/WCAG21/#no-keyboard-trap', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geen toetsenbordval' } },
     { sc: '2.1.3', title: 'Keyboard (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#keyboard-no-exception', conformance: 'AAA', nl: { title: 'Toetsenbord (geen uitzondering)' } },
     { sc: '2.1.4', title: 'Character Key Shortcuts', url: 'https://www.w3.org/TR/WCAG21/#character-key-shortcuts', conformance: 'A', nldesignsystem: !0, nl: { title: 'Enkel teken sneltoetsen' } },
     { sc: '2.2.1', title: 'Timing Adjustable', url: 'https://www.w3.org/TR/WCAG21/#timing-adjustable', conformance: 'A', nldesignsystem: !0, nl: { title: 'Timing aanpasbaar' } },
     { sc: '2.2.2', title: 'Pause, Stop, Hide', url: 'https://www.w3.org/TR/WCAG21/#pause-stop-hide', conformance: 'A', nldesignsystem: !0, nl: { title: 'Pauzeren, stoppen, verbergen' } },
     { sc: '2.2.3', title: 'No Timing', url: 'https://www.w3.org/TR/WCAG21/#no-timing', conformance: 'AAA', nl: { title: 'Geen timing' } },
     { sc: '2.2.4', title: 'Interruptions', url: 'https://www.w3.org/TR/WCAG21/#interruptions', conformance: 'AAA', nl: { title: 'Onderbrekingen' } },
     { sc: '2.2.5', title: 'Re-authenticating', url: 'https://www.w3.org/TR/WCAG21/#re-authenticating', conformance: 'AAA', nl: { title: 'Herauthentisering' } },
     { sc: '2.2.6', title: 'Timeouts', url: 'https://www.w3.org/TR/WCAG21/#timeouts', conformance: 'AAA', nl: { title: 'Time-outs' } },
     { sc: '2.3.1', title: 'Three Flashes or Below Threshold', url: 'https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold', conformance: 'A', nldesignsystem: !0, nl: { title: 'Drie flitsen of beneden drempelwaarde' } },
     { sc: '2.3.2', title: 'Three Flashes', url: 'https://www.w3.org/TR/WCAG21/#three-flashes', conformance: 'AAA', nl: { title: 'Drie flitsen' } },
     { sc: '2.3.3', title: 'Animation from Interactions', url: 'https://www.w3.org/TR/WCAG21/#animation-from-interactions', conformance: 'AAA', nl: { title: 'Animatie uit interacties' } },
     { sc: '2.4.1', title: 'Bypass Blocks', url: 'https://www.w3.org/TR/WCAG21/#bypass-blocks', conformance: 'A', nldesignsystem: !0, nl: { title: 'Blokken omzeilen' } },
     { sc: '2.4.2', title: 'Page Titled', url: 'https://www.w3.org/TR/WCAG21/#page-titled', conformance: 'A', nldesignsystem: !0, nl: { title: 'Paginatitel' } },
     { sc: '2.4.3', title: 'Focus Order', url: 'https://www.w3.org/TR/WCAG21/#focus-order', conformance: 'A', nldesignsystem: !0, nl: { title: 'Focus volgorde' } },
     { sc: '2.4.4', title: 'Link Purpose (In Context)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-in-context', conformance: 'A', nldesignsystem: !0, nl: { title: 'Linkdoel (in context)' } },
     { sc: '2.4.5', title: 'Multiple Ways', url: 'https://www.w3.org/TR/WCAG21/#multiple-ways', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Meerdere manieren' } },
     { sc: '2.4.6', title: 'Headings and Labels', url: 'https://www.w3.org/TR/WCAG21/#headings-and-labels', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Koppen en labels' } },
     { sc: '2.4.7', title: 'Focus Visible', url: 'https://www.w3.org/TR/WCAG21/#focus-visible', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Focus zichtbaar' } },
     { sc: '2.4.8', title: 'Location', url: 'https://www.w3.org/TR/WCAG21/#location', conformance: 'AAA', nl: { title: 'Locatie' } },
     { sc: '2.4.9', title: 'Link Purpose (Link Only)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-link-only', conformance: 'AAA', nl: { title: 'Linkdoel (alleen link)' } },
     { sc: '2.4.10', title: 'Section Headings', url: 'https://www.w3.org/TR/WCAG21/#section-headings', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Paragraafkoppen' } },
     { sc: '2.5.1', title: 'Pointer Gestures', url: 'https://www.w3.org/TR/WCAG21/#pointer-gestures', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzergebaren' } },
     { sc: '2.5.2', title: 'Pointer Cancellation', url: 'https://www.w3.org/TR/WCAG21/#pointer-cancellation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzerannulering' } },
     { sc: '2.5.3', title: 'Label in Name', url: 'https://www.w3.org/TR/WCAG21/#label-in-name', conformance: 'A', nldesignsystem: !0, nl: { title: 'Label in naam' } },
     { sc: '2.5.4', title: 'Motion Actuation', url: 'https://www.w3.org/TR/WCAG21/#motion-actuation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bewegingsactivering' } },
     { sc: '2.5.5', title: 'Target Size', url: 'https://www.w3.org/TR/WCAG21/#target-size', conformance: 'AAA', nl: { title: 'Grootte van het aanwijsgebied (uitgebreid)' } },
     { sc: '2.5.6', title: 'Concurrent Input Mechanisms', url: 'https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms', conformance: 'AAA', nl: { title: 'Input gelijktijdige invoermechanismen' } },
     { sc: '3.1.1', title: 'Language of Page', url: 'https://www.w3.org/TR/WCAG21/#language-of-page', conformance: 'A', nldesignsystem: !0, nl: { title: 'Taal van de pagina' } },
     { sc: '3.1.2', title: 'Language of Parts', url: 'https://www.w3.org/TR/WCAG21/#language-of-parts', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Taal van onderdelen' } },
     { sc: '3.1.3', title: 'Unusual Words', url: 'https://www.w3.org/TR/WCAG21/#unusual-words', conformance: 'AAA', nl: { title: 'Ongebruikelijke woorden' } },
     { sc: '3.1.4', title: 'Abbreviations', url: 'https://www.w3.org/TR/WCAG21/#abbreviations', conformance: 'AAA', nl: { title: 'Afkortingen' } },
     { sc: '3.1.5', title: 'Reading Level', url: 'https://www.w3.org/TR/WCAG21/#reading-level', conformance: 'AAA', nl: { title: 'Leesniveau' } },
     { sc: '3.1.6', title: 'Pronunciation', url: 'https://www.w3.org/TR/WCAG21/#pronunciation', conformance: 'AAA', nl: { title: 'Uitspraak' } },
     { sc: '3.2.1', title: 'On Focus', url: 'https://www.w3.org/TR/WCAG21/#on-focus', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij focus' } },
     { sc: '3.2.2', title: 'On Input', url: 'https://www.w3.org/TR/WCAG21/#on-input', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij input' } },
     { sc: '3.2.3', title: 'Consistent Navigation', url: 'https://www.w3.org/TR/WCAG21/#consistent-navigation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente navigatie' } },
     { sc: '3.2.4', title: 'Consistent Identification', url: 'https://www.w3.org/TR/WCAG21/#consistent-identification', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente identificatie' } },
     { sc: '3.2.5', title: 'Change on Request', url: 'https://www.w3.org/TR/WCAG21/#change-on-request', conformance: 'AAA', nl: { title: 'Verandering op verzoek' } },
     { sc: '3.3.1', title: 'Error Identification', url: 'https://www.w3.org/TR/WCAG21/#error-identification', conformance: 'A', nldesignsystem: !0, nl: { title: 'Foutidentificatie' } },
     { sc: '3.3.2', title: 'Labels or Instructions', url: 'https://www.w3.org/TR/WCAG21/#labels-or-instructions', conformance: 'A', nldesignsystem: !0, nl: { title: 'Labels of instructies' } },
     { sc: '3.3.3', title: 'Error Suggestion', url: 'https://www.w3.org/TR/WCAG21/#error-suggestion', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutsuggestie' } },
     { sc: '3.3.4', title: 'Error Prevention (Legal, Financial, Data)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutpreventie (wettelijk, financieel, gegevens)' } },
     { sc: '3.3.5', title: 'Help', url: 'https://www.w3.org/TR/WCAG21/#help', conformance: 'AAA', nl: { title: 'Hulp' } },
     { sc: '3.3.6', title: 'Error Prevention (All)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-all', conformance: 'AAA', nl: { title: 'Foutpreventie (alle)' } },
     { sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' } },
     { sc: '4.1.2', title: 'Name, Role, Value', url: 'https://www.w3.org/TR/WCAG21/#name-role-value', conformance: 'A', nldesignsystem: !0, nl: { title: 'Naam, rol, waarde' } },
     { sc: '4.1.3', title: 'Status Messages', url: 'https://www.w3.org/TR/WCAG21/#status-messages', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Statusberichten' } },
    ].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })),
    o = (new Map(r.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    i = [...r.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })).filter(({ sc: e }) => !o.find((n) => n.sc === e)),
    s = new Map(i.map((e) => [e.sc, e]));
  },
  30696: (e, n, t) => {
   'use strict';
   t.d(n, { A: () => r });
   var r = (0, t(99773).A)('outline', 'palette', 'IconPalette', [
    ['path', { d: 'M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25', key: 'svg-0' }],
    ['path', { d: 'M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-1' }],
    ['path', { d: 'M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-2' }],
    ['path', { d: 'M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-3' }],
   ]);
  },
  36444: (e, n, t) => {
   'use strict';
   t.d(n, { D: () => l });
   var r = t(68873),
    o = t(13526),
    i = t(75916),
    s = t(86070);
   const l = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, s.jsx)(r.KE, { className: (0, o.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  38985: (e, n, t) => {
   'use strict';
   t.d(n, { A: () => r });
   var r = (0, t(99773).A)('outline', 'text-size', 'IconTextSize', [
    ['path', { d: 'M3 7v-2h13v2', key: 'svg-0' }],
    ['path', { d: 'M10 5v14', key: 'svg-1' }],
    ['path', { d: 'M12 19h-4', key: 'svg-2' }],
    ['path', { d: 'M15 13v-1h6v1', key: 'svg-3' }],
    ['path', { d: 'M18 12v7', key: 'svg-4' }],
    ['path', { d: 'M17 19h2', key: 'svg-5' }],
   ]);
  },
  40808: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => l, RM: () => i });
   var r = t(86070),
    o = t(85248);
   const i = [];
   function s(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  42759: (e, n, t) => {
   'use strict';
   t.d(n, { e: () => l });
   var r = t(46563),
    o = t(30758),
    i = t(75916),
    s = t(86070);
   const l = ({ component: e }) => {
    const { title: n } = e,
     l = (0, i.fX)(n),
     a = o.lazy(() => t(82839)(`./${l}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, s.jsx)(o.Suspense, { fallback: null, children: (0, s.jsx)(r.o, { omitH1: !0, headingLevel: 1, children: (0, s.jsx)(a, {}) }) });
   };
  },
  43825: (e, n, t) => {
   'use strict';
   t.d(n, { A: () => r });
   var r = (0, t(99773).A)('outline', 'underline', 'IconUnderline', [
    ['path', { d: 'M7 5v5a5 5 0 0 0 10 0v-5', key: 'svg-0' }],
    ['path', { d: 'M5 19h14', key: 'svg-1' }],
   ]);
  },
  44132: (e, n, t) => {
   'use strict';
   t.d(n, { A: () => r });
   var r = (0, t(99773).A)('outline', 'line-height', 'IconLineHeight', [
    ['path', { d: 'M3 8l3 -3l3 3', key: 'svg-0' }],
    ['path', { d: 'M3 16l3 3l3 -3', key: 'svg-1' }],
    ['path', { d: 'M6 5l0 14', key: 'svg-2' }],
    ['path', { d: 'M13 6l7 0', key: 'svg-3' }],
    ['path', { d: 'M13 12l7 0', key: 'svg-4' }],
    ['path', { d: 'M13 18l7 0', key: 'svg-5' }],
   ]);
  },
  44720: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => l, RM: () => i });
   var r = t(86070),
    o = t(85248);
   const i = [];
   function s(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg ervoor dat kleur niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld: geef een foutmelding niet alleen aan met een rood randje, maar ook in tekst en eventueel met een icoontje dat een foutmelding markeert.' })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  46563: (e, n, t) => {
   'use strict';
   t.d(n, { o: () => d });
   var r = t(85248),
    o = t(68873),
    i = t(86070);
   const s = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: o } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + o;
     }
     return t.toString();
    },
    l = { 1: {}, 2: { h1: o.fV, h2: o._B, h3: o.f_, h4: o.mM, h5: o.TT }, 3: { h1: o._B, h2: o.f_, h3: o.mM, h4: o.TT, h5: o.TT }, 4: { h1: o.f_, h2: o.mM, h3: o.TT, h4: o.TT, h5: o.TT }, 5: { h1: o.mM, h2: o.TT, h3: o.TT, h4: o.TT, h5: o.TT }, 6: { h1: o.TT, h2: o.TT, h3: o.TT, h4: o.TT, h5: o.TT } },
    a = (e) => ({ img: ({ src: n, ...t }) => (0, i.jsx)('img', { ...t, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return (e.h1 = () => null), e;
     }
     return l[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: o = '', components: s = {} }) => (0, i.jsx)(r.x, { components: { ...c(n, t), ...a(o), ...s }, children: e });
  },
  50341: (e, n, t) => {
   'use strict';
   t.d(n, { VK: () => x, $9: () => C, mu: () => A, Fc: () => T });
   var r = t(14537),
    o = t(13526),
    i = t(74172),
    s = t(15089),
    l = t(28377),
    a = t(33648),
    c = t(83386),
    d = t(86070);
   const h = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(s.A, {}), npm: (0, d.jsx)(l.A, {}), storybook: (0, d.jsx)(a.A, {}) },
    u = ({ brand: e }) => (0, d.jsx)(r.In, { children: h[e] || (0, d.jsx)(c.A, {}) });
   var m = t(14889),
    p = t(98274);
   const g = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(p.A, {
     fallback: (0, d.jsx)(d.Fragment, {}),
     children: () => {
      const r = t(83294).V6;
      return (0, d.jsx)(r, {
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
   var j = t(36444),
    v = t(98584),
    y = t(68873),
    f = t(51797);
   const w = ({ children: e }) => (0, d.jsx)('ul', { className: 'task-list', children: e }),
    k = ({ checked: e, children: n, title: t, description: r, headingLevel: i = 3 }) => (0, d.jsxs)('li', { className: (0, o.A)('task-list-item'), children: [(0, d.jsxs)('div', { className: (0, o.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, d.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, d.jsx)(f.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(y.DZ, { appearance: 'utrecht-heading-3', level: i, children: t }), r, n] })] });
   var b = t(75916);
   const x = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => b.f4.includes(e.id)),
      i = t && b.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(r.If, { sections: i.map((t) => ({ className: (0, o.A)('definition-of-done', t && `definition-of-done--${(0, b.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(w, { children: t.tasks.map(({ checked: e, name: t, id: r }) => (0, d.jsx)(k, { headingLevel: n + 1, checked: e, title: t, description: (0, b.qZ)(r) }, r)) }), (0, d.jsx)(r.fz, { children: (0, d.jsxs)(r.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    A = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !b.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(m.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            r = n.progress.max - n.progress.value;
           return t === r ? e.title.localeCompare(n.title) : t - r;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            o = t?.value,
            i = (0, b.Pv)(e),
            s = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${o} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${o} voor visuele regressie tests` }],
            ]),
            l = e.tasks.filter(({ name: e, value: n }) => s.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            m.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(m.Wu, {
              children: [
               (0, d.jsx)(r.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(r.fz, { children: [(0, d.jsx)(g, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (l.length > 0 || i.length > 0) && (0, d.jsx)(r.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               l.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(r.dk, {
                  links: l
                   .filter((e) => !!s.get(e.name))
                   .map((e) => {
                    const n = s.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(u, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               i.length > 0 && (0, d.jsx)(d.Fragment, { children: i.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.DZ, { level: n + 2, children: [o, ' in ', e] }), (0, d.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(u, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    C = ({ component: e }) => {
     const n = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      t = n?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.Xy, { children: [t ? (0, d.jsxs)(r.Er, { children: ['Vul de ', (0, d.jsx)(r.N_, { href: t, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.Er, { children: [(0, d.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    T = ({ component: e, headingLevel: n, description: t }) => {
     const o = e && b.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(v.p, { level: n, suffix: o && (0, d.jsx)(j.D, { state: o }), children: e.title }), (0, d.jsx)(r.fz, { lead: !0, children: t })] });
    };
  },
  51450: (e, n, t) => {
   'use strict';
   t.d(n, { A: () => r });
   var r = (0, t(99773).A)('outline', 'file-typography', 'IconFileTypography', [
    ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
    ['path', { d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z', key: 'svg-1' }],
    ['path', { d: 'M11 18h2', key: 'svg-2' }],
    ['path', { d: 'M12 18v-7', key: 'svg-3' }],
    ['path', { d: 'M9 12v-1h6v1', key: 'svg-4' }],
   ]);
  },
  51580: (e, n, t) => {
   var r = { './code-block-docs/docs/anatomy/anatomy.md': [46793, 46793], './code-docs/docs/anatomy/anatomy.md': [67733, 67733], './color-sample-docs/docs/anatomy/anatomy.md': [72723, 72723], './data-badge-docs/docs/anatomy/anatomy.md': [24343, 24343], './heading-1-docs/docs/anatomy/anatomy.md': [28456, 28456], './heading-2-docs/docs/anatomy/anatomy.md': [1572, 1572], './heading-3-docs/docs/anatomy/anatomy.md': [39512, 39512], './heading-4-docs/docs/anatomy/anatomy.md': [89948, 89948], './heading-5-docs/docs/anatomy/anatomy.md': [69896, 69896], './heading-6-docs/docs/anatomy/anatomy.md': [74572, 74572], './heading-docs/docs/anatomy/anatomy.md': [1259, 1259], './link-docs/docs/anatomy/anatomy.md': [5779, 5779], './mark-docs/docs/anatomy/anatomy.md': [96029, 96029], './number-badge-docs/docs/anatomy/anatomy.md': [86601, 86601], './paragraph-docs/docs/anatomy/anatomy.md': [13321, 13321], './skip-link-docs/docs/anatomy/anatomy.md': [68019, 68019] };
   function o(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     o = n[0];
    return t.e(n[1]).then(() => t(o));
   }
   (o.keys = () => Object.keys(r)), (o.id = 51580), (e.exports = o);
  },
  57837: (e, n, t) => {
   'use strict';
   t.d(n, { C: () => h });
   var r = t(19371),
    o = t(47301),
    i = t(86070),
    s = t(13526),
    l = t(30758),
    a = ['children', 'className'];
   function c(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r);
    }
    return t;
   }
   function d(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : c(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var h = (0, l.forwardRef)(function (e, n) {
    var t = e.children,
     r = e.className,
     l = (0, o.A)(e, a);
    return (0, i.jsx)('code', d(d({ dir: 'ltr', translate: 'no', className: (0, s.$)('nl-code', r) }, l), {}, { ref: n, children: t }));
   });
   h.displayName = 'Code';
   !(function (e, n) {
    void 0 === n && (n = {});
    var t = n.insertAt;
    if ('undefined' != typeof document) {
     var r = document.head || document.getElementsByTagName('head')[0],
      o = document.createElement('style');
     (o.type = 'text/css'), 'top' === t && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? (o.styleSheet.cssText = e) : o.appendChild(document.createTextNode(e));
    }
   })('.nl-code{background-color:var(--nl-code-background-color);color:var(--nl-code-color);font-family:var(--nl-code-font-family, monospace),monospace;font-size:var(--nl-code-font-size, inherit);hyphens:none;white-space:pre-wrap}\n');
  },
  62254: (e, n, t) => {
   'use strict';
   t.d(n, { H: () => d });
   var r = t(46563),
    o = t(13526),
    i = t(30758),
    s = t(75916),
    l = t(86070);
   const a = ({ children: e }) => (0, l.jsx)('ol', { className: 'nlds-anatomy-list', children: e }),
    c = ({ children: e }) => (0, l.jsx)('li', { className: 'nlds-anatomy-list__item', children: e }),
    d = ({ component: e, illustration: n }) => {
     const { title: d } = e,
      h = (0, s.fX)(d),
      u = i.lazy(() => t(51580)(`./${h}-docs/docs/anatomy/anatomy.md`).catch(() => ({ default: () => null })));
     return (0, l.jsx)(i.Suspense, { fallback: null, children: (0, l.jsxs)('figure', { className: (0, o.A)('component-anatomy'), children: [n && (0, l.jsx)(n, { height: null, className: (0, o.A)('component-anatomy__illustration') }), n && u && (0, l.jsx)('figcaption', { children: (0, l.jsx)(r.o, { omitH1: !0, headingLevel: 1, components: { ol: ({ children: e }) => (0, l.jsx)(a, { children: e }), li: ({ children: e }) => (0, l.jsx)(c, { children: e }) }, children: (0, l.jsx)(u, {}) }) })] }) });
    };
  },
  64730: (e, n, t) => {
   'use strict';
   t.d(n, { A: () => r });
   var r = (0, t(99773).A)('outline', 'bold', 'IconBold', [
    ['path', { d: 'M7 5h6a3.5 3.5 0 0 1 0 7h-6z', key: 'svg-0' }],
    ['path', { d: 'M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7', key: 'svg-1' }],
   ]);
  },
  64840: (e, n, t) => {
   'use strict';
   t.d(n, { A: () => r });
   var r = (0, t(99773).A)('outline', 'copy', 'IconCopy', [
    ['path', { d: 'M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z', key: 'svg-0' }],
    ['path', { d: 'M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1', key: 'svg-1' }],
   ]);
  },
  73361: (e, n, t) => {
   'use strict';
   t.d(n, { B: () => T });
   var r = t(57837),
    o = t(96079),
    i = t(75916),
    s = t(68873),
    l = t(58713),
    a = t(87347),
    c = t(92406),
    d = t(63313),
    h = t(64840),
    u = t(14537),
    m = t(86070);
   function p({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, m.jsxs)(s.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await d.Ay.format(n, { parser: t, plugins: [l.A, a.Ay, c.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, m.jsx)(u.In, { children: (0, m.jsx)(h.A, {}) })],
       })
     : null;
   }
   var g = t(30696),
    j = t(73769),
    v = t(51450),
    y = t(38985),
    f = t(64730),
    w = t(44132),
    k = t(1941),
    b = t(43825),
    x = t(30758);
   const A = { color: g.A, dimension: j.A, fontFamilies: v.A, fontSizes: y.A, fontWeights: f.A, lineHeights: w.A, other: k.A, textDecoration: b.A },
    C = ({ type: e }) => (0, m.jsx)(u.In, { children: (0, x.createElement)(A[e]) });
   function T({ tokens: e }) {
    const n = (0, i.kD)(e),
     t = (0, i.GT)(n),
     l = t.map((e) => (0, i.B_)(e) + ': ;').join('\n'),
     a = JSON.stringify((0, i.Rc)(t));
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsxs)(s.XI, {
       children: [
        (0, m.jsx)(s.A0, { children: (0, m.jsxs)(s.Hj, { children: [(0, m.jsx)(s.M_, { children: 'name' }), (0, m.jsx)(s.M_, { children: 'type' })] }) }),
        (0, m.jsx)(s.BF, {
         children: t.map((n) => {
          const t = (0, i.o_)(n),
           l = (0, i.eQ)(e, n).$type;
          return (0, m.jsxs)(s.Hj, { children: [(0, m.jsx)(s.nA, { children: (0, m.jsx)(r.C, { children: (0, m.jsx)(s.kf, { children: t }) }) }), (0, m.jsx)(s.nA, { children: (0, m.jsxs)(o.K, { children: [(0, m.jsx)(C, { type: l }), ' ', l] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, m.jsxs)(s.e2, { children: [(0, m.jsx)(p, { content: a, language: 'json', children: 'Kopieer als JSON' }), (0, m.jsx)(p, { content: l, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  73769: (e, n, t) => {
   'use strict';
   t.d(n, { A: () => r });
   var r = (0, t(99773).A)('outline', 'ruler', 'IconRuler', [
    ['path', { d: 'M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1', key: 'svg-0' }],
    ['path', { d: 'M4 8l2 0', key: 'svg-1' }],
    ['path', { d: 'M4 12l3 0', key: 'svg-2' }],
    ['path', { d: 'M4 16l2 0', key: 'svg-3' }],
    ['path', { d: 'M8 4l0 2', key: 'svg-4' }],
    ['path', { d: 'M12 4l0 3', key: 'svg-5' }],
    ['path', { d: 'M16 4l0 2', key: 'svg-6' }],
   ]);
  },
  74111: (e, n, t) => {
   var r = { './utrecht-alert_46.entry.js': [21118, 21118], './utrecht-backdrop.entry.js': [59925, 82306], './utrecht-body.entry.js': [48603, 70984], './utrecht-breadcrumb-nav.entry.js': [35894, 13513], './utrecht-checkbox.entry.js': [32406, 10025], './utrecht-column-layout.entry.js': [28996, 6615], './utrecht-contact-card-template.entry.js': [8469, 30850], './utrecht-custom-checkbox.entry.js': [74796, 52415], './utrecht-data-list-actions.entry.js': [50286, 27905], './utrecht-data-list-item.entry.js': [29722, 7341], './utrecht-data-list-key.entry.js': [22346, 99965], './utrecht-data-list-value.entry.js': [50348, 27967], './utrecht-data-list.entry.js': [26112, 3731], './utrecht-digid-button.entry.js': [3603, 25984], './utrecht-digid-logo.entry.js': [6128, 83747], './utrecht-eherkenning-logo.entry.js': [665, 23046], './utrecht-eidas-logo.entry.js': [31245, 53626], './utrecht-form-field-error-message.entry.js': [50061, 72442], './utrecht-form-toggle.entry.js': [20334, 97953], './utrecht-html-content.entry.js': [96334, 96334], './utrecht-icon-afspraak-maken.entry.js': [77059, 99440], './utrecht-icon-afval-container.entry.js': [40503, 62884], './utrecht-icon-afval-containerpas.entry.js': [82447, 4828], './utrecht-icon-afval-kalender.entry.js': [35440, 13059], './utrecht-icon-afval-pmd.entry.js': [9417, 31798], './utrecht-icon-afval-scheiden.entry.js': [85137, 7518], './utrecht-icon-afval.entry.js': [36373, 58754], './utrecht-icon-afvalkalender.entry.js': [51039, 73420], './utrecht-icon-alleen.entry.js': [51706, 29325], './utrecht-icon-arrow.entry.js': [96722, 19103], './utrecht-icon-auto.entry.js': [23336, 955], './utrecht-icon-begroting.entry.js': [61910, 39529], './utrecht-icon-bestemmingsplan.entry.js': [95466, 73085], './utrecht-icon-betaaldatum.entry.js': [34725, 57106], './utrecht-icon-bewijsstukken.entry.js': [86706, 64325], './utrecht-icon-bijstand.entry.js': [79608, 57227], './utrecht-icon-blad.entry.js': [23396, 1015], './utrecht-icon-bluesky.entry.js': [41230, 18849], './utrecht-icon-bouwproject.entry.js': [71527, 93908], './utrecht-icon-brandgevaar.entry.js': [78336, 55955], './utrecht-icon-brief-betalen.entry.js': [45975, 68356], './utrecht-icon-checkmark.entry.js': [41542, 19161], './utrecht-icon-chevron-down.entry.js': [19997, 42378], './utrecht-icon-chevron-left.entry.js': [3508, 81127], './utrecht-icon-chevron-right.entry.js': [32507, 54888], './utrecht-icon-chevron-up.entry.js': [41032, 18651], './utrecht-icon-close.entry.js': [67295, 89676], './utrecht-icon-college-b-w.entry.js': [49777, 72158], './utrecht-icon-container-bio.entry.js': [71539, 93920], './utrecht-icon-container-glas.entry.js': [29302, 6921], './utrecht-icon-container-groenafval.entry.js': [93948, 71567], './utrecht-icon-container-met-zak.entry.js': [1624, 79243], './utrecht-icon-container-papier.entry.js': [47694, 25313], './utrecht-icon-container-pmd.entry.js': [73840, 51459], './utrecht-icon-container-restafval.entry.js': [44453, 66834], './utrecht-icon-container-textiel.entry.js': [69930, 47549], './utrecht-icon-container.entry.js': [48100, 25719], './utrecht-icon-cross.entry.js': [50587, 72968], './utrecht-icon-dakloos.entry.js': [57056, 34675], './utrecht-icon-dementie.entry.js': [4326, 81945], './utrecht-icon-documenten.entry.js': [85193, 7574], './utrecht-icon-duurzaam.entry.js': [45600, 23219], './utrecht-icon-eenzaamheid.entry.js': [60650, 38269], './utrecht-icon-eikenprocessie.entry.js': [88400, 66019], './utrecht-icon-elektrisch-rijden.entry.js': [2720, 80339], './utrecht-icon-energie-vergoeding.entry.js': [26791, 49172], './utrecht-icon-energietransitie.entry.js': [34383, 56764], './utrecht-icon-error.entry.js': [57205, 79586], './utrecht-icon-evenementen.entry.js': [52447, 74828], './utrecht-icon-facebook.entry.js': [76311, 98692], './utrecht-icon-fiets.entry.js': [11770, 89389], './utrecht-icon-filter.entry.js': [17757, 40138], './utrecht-icon-geboorte.entry.js': [34206, 11825], './utrecht-icon-gebruiker-centraal.entry.js': [67230, 44849], './utrecht-icon-gebruiker-ingelogd.entry.js': [48305, 70686], './utrecht-icon-gegevenswoordenboek.entry.js': [73424, 51043], './utrecht-icon-geluid.entry.js': [11789, 34170], './utrecht-icon-gemeente-locatie.entry.js': [97085, 19466], './utrecht-icon-gemeenteraad.entry.js': [64741, 87122], './utrecht-icon-gereedschap.entry.js': [95044, 72663], './utrecht-icon-gezicht.entry.js': [29497, 51878], './utrecht-icon-gezin.entry.js': [26654, 4273], './utrecht-icon-glas-afval.entry.js': [60819, 83200], './utrecht-icon-glijbaan.entry.js': [18637, 41018], './utrecht-icon-grafiek.entry.js': [26546, 4165], './utrecht-icon-grofvuil-ophalen.entry.js': [58649, 81030], './utrecht-icon-grofvuil.entry.js': [35927, 58308], './utrecht-icon-hamburger-menu.entry.js': [12466, 90085], './utrecht-icon-herdenking.entry.js': [48810, 26429], './utrecht-icon-hondenbelasting.entry.js': [82480, 60099], './utrecht-icon-horeca.entry.js': [74919, 97300], './utrecht-icon-horecavergunning.entry.js': [61636, 39255], './utrecht-icon-huis-en-omgeving.entry.js': [41809, 64190], './utrecht-icon-huis.entry.js': [3444, 81063], './utrecht-icon-huishoudelijk-geweld.entry.js': [57590, 35209], './utrecht-icon-hulp-huishouden.entry.js': [43517, 65898], './utrecht-icon-hulp-vervoer.entry.js': [86248, 63867], './utrecht-icon-hulp-zorg.entry.js': [68565, 90946], './utrecht-icon-hulpmiddelen-gezin.entry.js': [57304, 34923], './utrecht-icon-hulpverlening.entry.js': [72714, 50333], './utrecht-icon-idee.entry.js': [91204, 68823], './utrecht-icon-informatie.entry.js': [96677, 19058], './utrecht-icon-information.entry.js': [43781, 66162], './utrecht-icon-innovatie.entry.js': [47394, 25013], './utrecht-icon-inspraak-inwoners.entry.js': [560, 78179], './utrecht-icon-instagram.entry.js': [20179, 42560], './utrecht-icon-kalender.entry.js': [31401, 53782], './utrecht-icon-kennis.entry.js': [63475, 85856], './utrecht-icon-kerstbomen.entry.js': [10601, 32982], './utrecht-icon-klachten.entry.js': [44359, 66740], './utrecht-icon-kroon.entry.js': [85264, 62883], './utrecht-icon-laadpaal.entry.js': [28283, 50664], './utrecht-icon-language.entry.js': [47513, 69894], './utrecht-icon-lantaarnpaal-oud.entry.js': [48383, 70764], './utrecht-icon-lantaarnpaal.entry.js': [12270, 89889], './utrecht-icon-leren.entry.js': [26235, 81473], './utrecht-icon-let-op.entry.js': [34432, 12051], './utrecht-icon-linkedin.entry.js': [62321, 84702], './utrecht-icon-list-check.entry.js': [14150, 91769], './utrecht-icon-list-number.entry.js': [66693, 89074], './utrecht-icon-list.entry.js': [8815, 31196], './utrecht-icon-loupe.entry.js': [48760, 26379], './utrecht-icon-markt.entry.js': [7224, 84843], './utrecht-icon-mastodon.entry.js': [18956, 96575], './utrecht-icon-melding-boom.entry.js': [49769, 72150], './utrecht-icon-melding-klacht.entry.js': [94525, 16906], './utrecht-icon-melding-openbareruimte.entry.js': [51554, 29173], './utrecht-icon-melding-verlichting.entry.js': [31913, 54294], './utrecht-icon-melding.entry.js': [95625, 18006], './utrecht-icon-menselijk.entry.js': [74647, 97028], './utrecht-icon-menu-dot-open.entry.js': [30823, 53204], './utrecht-icon-menu-dot.entry.js': [65842, 43461], './utrecht-icon-meterkast.entry.js': [74341, 96722], './utrecht-icon-milieu-ontheffing.entry.js': [30533, 52914], './utrecht-icon-milieu-zone.entry.js': [22919, 45300], './utrecht-icon-minus-vertical.entry.js': [11346, 88965], './utrecht-icon-minus.entry.js': [59951, 82332], './utrecht-icon-mobiliteit.entry.js': [22519, 44900], './utrecht-icon-natuur.entry.js': [77430, 55049], './utrecht-icon-nieuw-huis.entry.js': [50659, 5897], './utrecht-icon-nieuwsbrief.entry.js': [20472, 98091], './utrecht-icon-nummerbord.entry.js': [95490, 73109], './utrecht-icon-om-het-huis.entry.js': [77323, 99704], './utrecht-icon-omgeving.entry.js': [68789, 91170], './utrecht-icon-omgevingsvisie.entry.js': [43154, 20773], './utrecht-icon-omgevingswet.entry.js': [94058, 71677], './utrecht-icon-onderhoud.entry.js': [35703, 58084], './utrecht-icon-ondernemen.entry.js': [58848, 36467], './utrecht-icon-openingstijden.entry.js': [2560, 80179], './utrecht-icon-over-de-stad.entry.js': [65860, 43479], './utrecht-icon-overlijden.entry.js': [19583, 41964], './utrecht-icon-panden.entry.js': [40233, 62614], './utrecht-icon-park.entry.js': [41699, 64080], './utrecht-icon-parkeerkaart.entry.js': [50138, 27757], './utrecht-icon-parkeervergunning.entry.js': [48220, 25839], './utrecht-icon-parken.entry.js': [10284, 87903], './utrecht-icon-parkeren-bedrijven.entry.js': [63427, 85808], './utrecht-icon-parkeren-betaalautomaat.entry.js': [79079, 1460], './utrecht-icon-parkeren-betalen.entry.js': [45967, 68348], './utrecht-icon-parkeren.entry.js': [55019, 77400], './utrecht-icon-participatie-campagne.entry.js': [20493, 42874], './utrecht-icon-participatie-like.entry.js': [81042, 58661], './utrecht-icon-participatie-pitch.entry.js': [96203, 18584], './utrecht-icon-paspoort.entry.js': [70771, 93152], './utrecht-icon-presentatie.entry.js': [66819, 89200], './utrecht-icon-prijskaartje.entry.js': [50869, 73250], './utrecht-icon-read-aloud.entry.js': [29333, 51714], './utrecht-icon-rijbewijs.entry.js': [16388, 94007], './utrecht-icon-rioolheffing.entry.js': [67517, 89898], './utrecht-icon-rolstoel.entry.js': [69169, 91550], './utrecht-icon-schild-gemeente-utrecht.entry.js': [76081, 98462], './utrecht-icon-search.entry.js': [57891, 80272], './utrecht-icon-shoppen.entry.js': [82732, 60351], './utrecht-icon-sinterklaas.entry.js': [17030, 94649], './utrecht-icon-slechtziende-hoordende.entry.js': [69228, 46847], './utrecht-icon-sport-en-cultuur.entry.js': [98796, 76415], './utrecht-icon-sport-voetbal.entry.js': [31085, 53466], './utrecht-icon-sport.entry.js': [95485, 17866], './utrecht-icon-stookverbod.entry.js': [47079, 69460], './utrecht-icon-strand.entry.js': [39735, 62116], './utrecht-icon-strooien.entry.js': [92040, 69659], './utrecht-icon-subsidie-gezin.entry.js': [10719, 33100], './utrecht-icon-subsidie.entry.js': [39519, 61900], './utrecht-icon-t-shirt.entry.js': [32838, 10457], './utrecht-icon-threads.entry.js': [36194, 13813], './utrecht-icon-thuiswerken.entry.js': [99276, 76895], './utrecht-icon-toeslag.entry.js': [89064, 66683], './utrecht-icon-trein.entry.js': [43189, 65570], './utrecht-icon-trouwen.entry.js': [31467, 53848], './utrecht-icon-twitter.entry.js': [75360, 52979], './utrecht-icon-user.entry.js': [5632, 83251], './utrecht-icon-uw-wijk.entry.js': [2831, 25212], './utrecht-icon-vaccinatie.entry.js': [10772, 88391], './utrecht-icon-veilige-wijk.entry.js': [13306, 90925], './utrecht-icon-vergaderen.entry.js': [89164, 66783], './utrecht-icon-vergaderendigitaal.entry.js': [31109, 53490], './utrecht-icon-vergoeding.entry.js': [91097, 13478], './utrecht-icon-verhuizen.entry.js': [39473, 61854], './utrecht-icon-verkeerslicht.entry.js': [16718, 94337], './utrecht-icon-verkiezingen.entry.js': [28486, 6105], './utrecht-icon-verslaving.entry.js': [41840, 19459], './utrecht-icon-vervoersvoorziening.entry.js': [63517, 85898], './utrecht-icon-virus.entry.js': [69826, 47445], './utrecht-icon-vluchtelingen.entry.js': [77329, 99710], './utrecht-icon-voorzieningen-vervoer.entry.js': [44904, 22523], './utrecht-icon-vrijwilligerswerk.entry.js': [4045, 26426], './utrecht-icon-vuilnisbak.entry.js': [95691, 18072], './utrecht-icon-vuilniszak.entry.js': [48083, 70464], './utrecht-icon-vuurwerk.entry.js': [22418, 37], './utrecht-icon-wandelstok.entry.js': [84985, 7366], './utrecht-icon-warm.entry.js': [96434, 74053], './utrecht-icon-warning.entry.js': [39295, 61676], './utrecht-icon-werken.entry.js': [53643, 76024], './utrecht-icon-werkzaamheden.entry.js': [63301, 85682], './utrecht-icon-whatsapp.entry.js': [99673, 22054], './utrecht-icon-wonen-kosten.entry.js': [81423, 3804], './utrecht-icon-woning-zoeken.entry.js': [29431, 29431], './utrecht-icon-x.entry.js': [11711, 34092], './utrecht-icon-youtube.entry.js': [76330, 53949], './utrecht-icon-zelfstandig-wonen.entry.js': [52124, 29743], './utrecht-icon-zoom-minus.entry.js': [82693, 5074], './utrecht-icon-zoom-plus.entry.js': [59514, 59514], './utrecht-icon-zoomin.entry.js': [36851, 59232], './utrecht-icon-zoomout.entry.js': [63310, 40929], './utrecht-icon-zorg-huis.entry.js': [72095, 94476], './utrecht-icon-zweefpaal.entry.js': [83280, 60899], './utrecht-icon-zwemmen.entry.js': [53056, 30675], './utrecht-logo-button.entry.js': [23945, 46326], './utrecht-map-marker.entry.js': [65576, 43195], './utrecht-multiline-data.entry.js': [50201, 72582], './utrecht-nav-bar.entry.js': [70626, 48245], './utrecht-number-badge.entry.js': [44892, 22511], './utrecht-page-body.entry.js': [78181, 562], './utrecht-page-footer.entry.js': [7030, 84649], './utrecht-page-layout.entry.js': [57887, 80268], './utrecht-pagination.entry.js': [97911, 20292], './utrecht-preserve-data.entry.js': [31540, 9159], './utrecht-progress-list-item.entry.js': [57493, 2255], './utrecht-progress-list.entry.js': [30781, 53162], './utrecht-progress-sublist-item.entry.js': [70847, 93228], './utrecht-root.entry.js': [53667, 76048], './utrecht-sidenav.entry.js': [611, 22992], './utrecht-surface.entry.js': [61336, 38955], './utrecht-table-body.entry.js': [61912, 39531], './utrecht-table-caption.entry.js': [8296, 85915], './utrecht-table-cell.entry.js': [20760, 98379], './utrecht-table-container.entry.js': [63033, 85414], './utrecht-table-footer.entry.js': [59667, 82048], './utrecht-table-header-cell.entry.js': [2238, 79857], './utrecht-table-header.entry.js': [18705, 41086], './utrecht-table-row.entry.js': [17598, 95217], './utrecht-table.entry.js': [4667, 27048], './utrecht-textarea.entry.js': [7069, 29450], './utrecht-textbox.entry.js': [52563, 74944], './utrecht-top-task-link.entry.js': [61965, 84346], './utrecht-top-task-nav.entry.js': [29199, 29199] };
   function o(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     o = n[0];
    return t.e(n[1]).then(() => t(o));
   }
   (o.keys = () => Object.keys(r)), (o.id = 74111), (e.exports = o);
  },
  75916: (e, n, t) => {
   'use strict';
   t.d(n, { B2: () => h, B_: () => j, GT: () => f, KF: () => d, Pc: () => l, Pv: () => p, Rc: () => w, bo: () => r, eQ: () => v, f4: () => s, fX: () => o, kD: () => y, mJ: () => m, o_: () => g, qZ: () => i });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
   function a(e) {
    return Array.from(new Set(e));
   }
   const c = (e) => {
     const n = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
     return [...e].sort((e, t) => n.indexOf(e) - n.indexOf(t));
    },
    d = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return c(a(n));
    },
    h = (e, n) => m(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return c(a(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    m = (e) => c(a(e.projects.flatMap((e) => u(e)))),
    p = (e) => {
     const n = u(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: o, value: i }) => {
        const s = /^(.+) URL/.exec(r)[1],
         l = 'Storybook' === s ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: r, id: o, value: i, description: l };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    g = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function y(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? y(e[t], [...n, t]) : []));
   }
   function f(e) {
    const n = new Map();
    function t(e) {
     return n.has(e) || n.set(e, g(e)), n.get(e);
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function w(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) e[n] || (e[n] = {}), (e = e[n]);
    }
    return n;
   }
  },
  78762: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => l, RM: () => i });
   var r = t(86070),
    o = t(85248);
   const i = [];
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Het contrast van de tekstkleur ten opzichte van de achtergrondkleur moet hoog genoeg zijn, zodat de tekst in het algemeen goed leesbaar wordt gevonden.' }), '\n', (0, r.jsx)(n.p, { children: 'De criteria voor kleurcontrast zijn:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/contrast/?background-color=white&color=%23767676', children: '4,5:1 contrast' }), ' voor normale tekst.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/contrast/?background-color=white&color=%23949494', children: '3:1 contrast' }), ' voor grotere letters (vanaf 24 pixels).'] }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Tekst die over een afbeelding staat, moet ook voldoende contrast hebben met de kleuren in de afbeelding er omheen.' }), '\n', (0, r.jsx)(n.p, { children: 'Deze eis geldt niet voor tekst op een logo of van een merknaam, of tekst op een afbeelding die alleen ter decoratie dient en geen deel uitmaakt van de inhoud.' })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  82839: (e, n, t) => {
   var r = { './code-block-docs/docs/aliases.md': [23918, 23918], './code-docs/docs/aliases.md': [33874, 33874], './color-sample-docs/docs/aliases.md': [44052, 44052], './data-badge-docs/docs/aliases.md': [58448, 58448], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [57308, 57308], './link-docs/docs/aliases.md': [98100, 98100], './mark-docs/docs/aliases.md': [22314, 22314], './number-badge-docs/docs/aliases.md': [78990, 78990], './paragraph-docs/docs/aliases.md': [52910, 52910], './skip-link-docs/docs/aliases.md': [6196, 6196] };
   function o(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     o = n[0];
    return t.e(n[1]).then(() => t(o));
   }
   (o.keys = () => Object.keys(r)), (o.id = 82839), (e.exports = o);
  },
  92420: (e, n, t) => {
   'use strict';
   t.d(n, { N: () => s });
   var r = t(71170),
    o = t(13526),
    i = t(86070);
   const s = ({ className: e, ...n }) => (0, i.jsx)(r.A, { className: (0, o.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  96079: (e, n, t) => {
   'use strict';
   t.d(n, { K: () => m });
   var r = t(19371),
    o = t(47301),
    i = t(86070),
    s = t(13526),
    l = t(30758),
    a = ['children'],
    c = ['dateTime'],
    d = ['value'];
   function h(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r);
    }
    return t;
   }
   function u(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? h(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : h(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var m = (0, l.forwardRef)(function (e, n) {
    var t = e.children,
     r = (0, o.A)(e, a),
     l = (0, s.$)('nl-data-badge', e.className);
    if (
     (function (e) {
      return 'dateTime' in e;
     })(r)
    ) {
     var h = r.dateTime,
      m = (0, o.A)(r, c);
     return (0, i.jsx)('time', u(u({}, m), {}, { dateTime: h, className: l, ref: n, children: t }));
    }
    if (
     (function (e) {
      return 'value' in e;
     })(r)
    ) {
     var p = r.value,
      g = (0, o.A)(r, d);
     return (0, i.jsx)('data', u(u({}, g), {}, { value: p, className: l, ref: n, children: t }));
    }
    return (0, i.jsx)('span', u(u({}, r), {}, { className: l, ref: n, children: t }));
   });
   m.displayName = 'DataBadge';
   !(function (e, n) {
    void 0 === n && (n = {});
    var t = n.insertAt;
    if ('undefined' != typeof document) {
     var r = document.head || document.getElementsByTagName('head')[0],
      o = document.createElement('style');
     (o.type = 'text/css'), 'top' === t && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? (o.styleSheet.cssText = e) : o.appendChild(document.createTextNode(e));
    }
   })('.nl-data-badge{background-color:var(--nl-data-badge-background-color);border-color:var(--nl-data-badge-border-color, currentColor);border-radius:var(--nl-data-badge-border-radius, 0);border-style:solid;border-width:var(--nl-data-badge-border-width, 1px);box-sizing:border-box;color:var(--nl-data-badge-color);display:inline-block;font-family:var(--nl-data-badge-font-family);font-size:var(--nl-data-badge-font-size);font-weight:var(--nl-data-badge-font-weight);line-height:var(--nl-data-badge-line-height);max-block-size:max-content;max-inline-size:max-content;min-block-size:var(--nl-data-badge-min-block-size);min-inline-size:var(--nl-data-badge-min-inline-size);padding-block:var(--nl-data-badge-padding-block);padding-inline:var(--nl-data-badge-padding-inline);text-decoration:none}@media screen and (forced-colors: active){.nl-data-badge{border-color:currentColor;border-width:min(var(--nl-data-badge-border-width, 1px),1px)}}\n');
  },
  98584: (e, n, t) => {
   'use strict';
   t.d(n, { p: () => i });
   var r = t(13526),
    o = t(86070);
   const i = ({ children: e, className: n, level: t = 1, suffix: i, ...s }) => (0, o.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...s, children: [(0, o.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, o.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
 },
]);
