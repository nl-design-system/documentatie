(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [44480],
 {
  1457(e, n, t) {
   'use strict';
   t.d(n, { e: () => l });
   var i = t(12941),
    a = t(30758),
    r = t(76097),
    s = t(86070);
   const l = ({ component: e }) => {
    const { title: n } = e,
     l = (0, r.fX)(n),
     o = a.lazy(() => t(82839)(`./${l}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, s.jsx)(a.Suspense, { fallback: null, children: (0, s.jsx)(i.o, { omitH1: !0, headingLevel: 1, children: (0, s.jsx)(o, {}) }) });
   };
  },
  2196(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als de inhoud van de link niet uit tekst bestaat, maar uit bijvoorbeeld een icoon of logo dan moet het aanklikbare gedeelte goed te onderscheiden zijn. Het contrast tussen een icoon, of kader rond een logo, en de achtergrond moet minimaal 3:1 zijn. Dit is te controleren met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  5710(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, i.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, i.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, i.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, i.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  8584(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function s(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  12941(e, n, t) {
   'use strict';
   t.d(n, { o: () => c });
   var i = t(18439),
    a = t(46447),
    r = t(86070);
   const s = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: i, hash: a } = new URL(n, new URL(e, 'http://example.com/'));
      return t + i + a;
     }
     return t.toString();
    },
    l = { 1: {}, 2: { h1: a.fV, h2: a._B, h3: a.f_, h4: a.mM, h5: a.TT }, 3: { h1: a._B, h2: a.f_, h3: a.mM, h4: a.TT, h5: a.TT }, 4: { h1: a.f_, h2: a.mM, h3: a.TT, h4: a.TT, h5: a.TT }, 5: { h1: a.mM, h2: a.TT, h3: a.TT, h4: a.TT, h5: a.TT }, 6: { h1: a.TT, h2: a.TT, h3: a.TT, h4: a.TT, h5: a.TT } },
    o = (e) => ({ img: ({ src: n, ...t }) => (0, r.jsx)('img', { ...t, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return l[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: a = '', components: s = {} }) => (0, r.jsx)(i.x, { components: { ...d(n, t), ...o(a), ...s }, children: e });
  },
  15042(e, n, t) {
   'use strict';
   t.d(n, { p: () => r });
   var i = t(13526),
    a = t(86070);
   const r = ({ children: e, className: n, level: t = 1, suffix: r, ...s }) => (0, a.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...s, children: [(0, a.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, a.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  16764(e, n, t) {
   'use strict';
   t.d(n, { B: () => F });
   var i = t(96547),
    a = t(79889),
    r = t(76097),
    s = t(46447),
    l = t(68148),
    o = t(9016),
    d = t(91635),
    c = t(30734),
    g = t(4603),
    m = t(29181),
    u = t(86070);
   function h({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, u.jsxs)(s.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await c.Ay.format(n, { parser: t, plugins: [l.A, o.Ay, d.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, u.jsx)(m.In, { children: (0, u.jsx)(g.A, {}) })],
       })
     : null;
   }
   var p = t(43864),
    k = t(35193),
    j = t(82999),
    x = t(13088),
    v = t(91525),
    b = t(24214),
    f = t(92081),
    y = t(1375),
    w = t(73563),
    A = t(23436),
    D = t(79532),
    L = t(30758);
   const z = { boxShadow: p.A, color: k.A, cursor: j.A, dimension: x.A, fontFamily: v.A, fontFamilies: v.A, fontSize: b.A, fontSizes: b.A, fontWeight: f.A, fontWeights: f.A, lineHeight: y.A, lineHeights: y.A, number: w.A, other: A.A, textDecoration: D.A },
    S = ({ type: e }) => {
     const n = Object.hasOwn(z, e) ? e : 'other';
     return (0, u.jsx)(m.In, { children: (0, L.createElement)(z[n]) });
    };
   var N = t(76223);
   function F({ tokens: e }) {
    const n = (0, r.kD)(e),
     t = (0, N.sj)(e, (e) => (((e) => null !== e && 'object' == typeof e && Object.hasOwn(e, '$type') && 'string' == typeof e.$type)(e) ? { $type: e.$type, $value: '' } : void 0)),
     l = (0, r.GT)(n),
     o = l.map((e) => (0, r.B_)(e) + ': ;').join('\n'),
     d = JSON.stringify(t);
    return (0, u.jsxs)(u.Fragment, {
     children: [
      (0, u.jsxs)(s.XI, {
       children: [
        (0, u.jsx)(s.A0, { children: (0, u.jsxs)(s.Hj, { children: [(0, u.jsx)(s.M_, { children: 'name' }), (0, u.jsx)(s.M_, { children: 'type' })] }) }),
        (0, u.jsx)(s.BF, {
         children: l.map((n) => {
          const t = (0, r.o_)(n),
           l = (0, r.eQ)(e, n).$type;
          return (0, u.jsxs)(s.Hj, { children: [(0, u.jsx)(s.nA, { children: (0, u.jsx)(i.C, { children: (0, u.jsx)(s.kf, { children: t }) }) }), (0, u.jsx)(s.nA, { children: (0, u.jsxs)(a.K, { children: [(0, u.jsx)(S, { type: l }), ' ', l] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, u.jsxs)(s.e2, { children: [(0, u.jsx)(h, { content: d, language: 'json', children: 'Kopieer als JSON' }), (0, u.jsx)(h, { content: o, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  17045(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function s(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  19776(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function s(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  23885(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Elementen met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  24838(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, i.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  26655(e, n, t) {
   'use strict';
   t.d(n, { AC: () => d, Fu: () => s, Wu: () => l, Zp: () => o });
   var i = t(46447),
    a = t(13526),
    r = t(86070);
   const s = ({ background: e, children: n, className: t, ...i }) => (0, r.jsx)('div', { className: (0, a.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...i, children: n }),
    l = (e) => (0, r.jsx)('div', { className: 'ma-card__content', ...e }),
    o = ({ href: e, appearance: n, className: t, component: s = 'div', background: l, children: o }) => {
     const d = (e) => ('article' === s ? (0, r.jsx)('article', { ...e }) : 'section' === s ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      c = (0, r.jsx)(d, { className: (0, a.A)('ma-cardgroup__card', l && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: o });
     return e ? (0, r.jsx)(i.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'large', children: n, className: t }) => (0, r.jsx)('div', { className: (0, a.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  27055(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['De zichtbare naam van de link is gelijk aan, of begint met de ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name', children: 'toegankelijke naam' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is het eenvoudigst te realiseren door een ', (0, i.jsx)(n.code, { children: 'a' }), '-element te gebruiken met daarin tekst.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Pas op met het gebruik van ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' om een naam te geven aan een link. Een ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' overschrijft de tekstinhoud van een link. Zodoende kan een link een toegankelijke naam krijgen die anders is dan de zichtbare naam, waardoor mensen die hulpsoftware gebruiken moeilijkheden kunnen krijgen met het bedienen van de link. Als je echt een ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' nodig hebt, zorg dan dat de waarde van het ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' begint met de exacte tekst die zichtbaar is in de link.'] }), '\n', (0, i.jsx)(n.p, { children: 'Dus niet:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<a href="login-url" aria-label="Klik hier om in te loggen">Log in met DigiD</a>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Maar:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<a href="login-url">Log in met DigiD</a>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam/', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  31522(e, n, t) {
   'use strict';
   t.d(n, { D: () => l });
   var i = t(46447),
    a = t(13526),
    r = t(76097),
    s = t(86070);
   const l = ({ state: e }) => {
    const n = (0, r.fX)(e);
    return (0, s.jsx)(i.KE, { className: (0, a.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  34257(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, i.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, i.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, i.jsx)(n.code, { children: 'em' }), ' of ', (0, i.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  36369(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { code: 'code', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Je kunt de link focussen met de tabtoets (en in omgekeerde richting met shift + tabtoets) en activeren met de entertoets. Als je gebruik maakt van het ', (0, i.jsx)(n.code, { children: 'a' }), '-element hoef je hier niets aan aan te passen.'] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  36599(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function s(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  39948(e, n, t) {
   'use strict';
   t.d(n, { r: () => g });
   var i = t(29181),
    a = t(74172),
    r = t(15089),
    s = t(28377),
    l = t(33648),
    o = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(a.A, {}), github: (0, d.jsx)(r.A, {}), npm: (0, d.jsx)(s.A, {}), storybook: (0, d.jsx)(l.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(i.In, { children: c[e] || (0, d.jsx)(o.A, {}) });
  },
  40808(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function s(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  41467(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => V, component: () => Z, contentTitle: () => $, default: () => J, description: () => O, frontMatter: () => I, issueNumber: () => U, metadata: () => i, title: () => E, toc: () => W }));
   const i = JSON.parse('{"id":"componenten/link/index","title":"Link","description":"Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.","source":"@site/docs/componenten/link/index.mdx","sourceDirName":"componenten/link","slug":"/link","permalink":"/link","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/link/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Link","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Link","pagination_label":"Link","description":"Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.","slug":"/link","keywords":["a","a tag","anchor","anchor element","anchor link","back link","button as link","call to action link","cta link","externe link","external link","href","hyper link","hyperlink","inline link","koppeling","label","link","link button","links","navigatie","navigation","navlink","ordinal","standalone","standalone link","text link","URL","url","verwijzing","web address"]},"sidebar":"componenten","previous":{"title":"Language Navigation","permalink":"/language-navigation"},"next":{"title":"Link List","permalink":"/link-list"}}');
   var a = t(86070),
    r = t(18439),
    s = t(82461),
    l = t(17045),
    o = t(19776),
    d = t(40808);
   t(30758);
   function c(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Als het label van de link alleen uit een icoon of logo bestaat, dan heeft deze afbeelding een goed tekstalternatief, zodat de link een naam heeft die duidelijk maakt waar de link voor dient.' }), '\n', (0, a.jsxs)(n.p, { children: ['Het beste is om altijd visueel een tekst te tonen naast of onder het icoon. Iconen zijn immers niet altijd voor iedereen duidelijk. Een tekstalternatief voor de afbeelding is niet nodig als er naast de afbeelding ook tekst in de link staat die uitlegt waar de link naartoe gaat. Een ', (0, a.jsx)(n.code, { children: 'img' }), ' kan dan een leeg ', (0, a.jsx)(n.code, { children: 'alt' }), '-attribuut krijgen (', (0, a.jsx)(n.code, { children: 'alt=""' }), ').'] }), '\n', (0, a.jsx)(n.p, { children: 'Is het toch gewenst om alleen een icoon of logo te tonen, hou dan rekening met het volgende.' }), '\n', (0, a.jsxs)(n.p, { children: ['Een ', (0, a.jsx)(n.code, { children: 'img' }), ' met een alt-attribuut is een robuuste manier om een alternatieve tekst toe te voegen. De waarde van het alt-attribuut vormt de toegankelijke naam van de link:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<a href="url">\n  <img src="ideal.svg" alt="iDeal" />\n</a>\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Maar duidelijker is:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<a href="url"> Betaal met iDeal <img src="ideal.svg" alt="" /> </a>\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/', children: 'Gebruik SVG voor iconen en geen font' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/#toepassen-van-een-svg-in-code', children: 'Toepassen van een SVG in code' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n'] })] });
   }
   var g = t(2196),
    m = t(5710);
   function u(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Onderstreep links in een lopende tekst, zodat bezoekers makkelijk kunnen zien dat er een link in de tekst staat.' }), '\n', (0, a.jsx)(n.p, { children: 'Een andere manier om links te onderscheiden van de lopende tekst is door een andere tekstkleur te gebruiken. Deze kleur moet dan wel een contrastratio van minimaal 3:1 hebben ten opzichte van de lopende tekst, maar liever hoger. Hou er rekening mee dat alle tekst altijd voldoende contrast moet hebben met de achtergrondkleur van de pagina, ook bij muishover en toetsenbordfocus.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/doel/', children: 'Gebruik kleur met een doel' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   var h = t(83672),
    p = t(34257),
    k = t(36369),
    j = t(92233),
    x = t(60577),
    v = t(27055),
    b = t(61640),
    f = t(24838),
    y = t(23885),
    w = t(96412),
    A = t(36599),
    D = t(8584),
    L = t(76334);
   const z = [
     {
      title: 'Als het label van de Link uit een icoon bestaat, dan heeft deze een goed tekstalternatief.',
      sc: '1.1.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
      },
      tags: ['designer', 'contentmaker'],
     },
     {
      title: 'Links in een lopende tekst zijn duidelijk zichtbaar.',
      sc: '1.4.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(u, { ...e }) }) : u(e);
      },
      tags: ['designer', 'contentmaker'],
     },
     { title: 'De contrastverhouding van de tekstkleur van de Link met de achtergrondkleur is hoog genoeg.', sc: '1.4.3', status: '', component: h.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Het label van de Link bestaat uit gewone tekst, niet uit een afbeelding van tekst.', sc: '1.4.5', status: '', component: w.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Als het zichtbare label van de Link alleen een afbeelding of icoon is, dan is het contrast tussen de afbeelding en de achtergrond minimaal 3:1.', sc: '1.4.11', status: '', component: g.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'De linktekst van de Link vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).', sc: '2.4.4', status: '', component: L.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Als de Link de toetsenbordfocus krijgt, is het element niet volledig bedekt door andere inhoud', sc: '2.4.11', status: '', component: D.Ay, tags: ['developer', 'designer'] },
     { title: 'Als de tekst van de Link in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: f.Ay, tags: ['developer', 'contentmaker'] },
     { title: 'Links met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label', sc: '3.2.4', status: '', component: y.Ay, tags: ['developer', 'designer', 'contentmaker'] },
    ],
    S = [
     { title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: p.Ay, tags: ['developer'] },
     { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: m.Ay, tags: ['developer'] },
     { title: 'Je kunt de Link focussen met de tabtoets en activeren met de entertoets.', sc: '2.1.1', status: '', component: k.Ay, tags: ['developer'] },
     { title: 'De functionaliteit van de Link veroorzaakt geen toetsenbordval.', sc: '2.1.2', status: '', component: A.Ay, tags: ['developer'] },
     { title: 'Wanneer de Link de toetsenbordfocus krijgt is de focus zichtbaar.', sc: '2.4.7', status: '', component: j.Ay, tags: ['developer', 'designer'] },
     { title: 'Als de gebruiker de Link indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.', sc: '2.5.2', status: '', component: x.Ay, tags: ['developer'] },
     { title: 'De zichtbare naam van de Link komt voor in de toegankelijke naam.', sc: '2.5.3', status: '', component: v.Ay, tags: ['developer'] },
     { title: 'De Link heeft een aanklikbaar gedeelte van ten minste 44 bij 44 pixels.', sc: '2.5.5', status: '', component: b.Ay, tags: ['developer'] },
    ];
   var N = t(26655),
    F = t(46447),
    T = t(56421),
    R = t(39948),
    C = t(1457),
    H = t(56167),
    _ = t(16764),
    B = t(12941);
   function G(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', pre: 'pre', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'gebruik-link', children: 'Gebruik Link' }) }), '\n', (0, a.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, a.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, a.jsx)(n.p, { children: (0, a.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-css', children: '@nl-design-system-candidate/link-css' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Gebruik de ', (0, a.jsx)(n.code, { children: 'nl-link' }), ' class name op een ', (0, a.jsx)(n.code, { children: 'a' }), ' element:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<a href="https://example.com" class="nl-link">example.com</a>\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/link-css\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/link-css@1/dist/link.css" />\n' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, a.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/link-css/dist/link.css" />\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/link-css/link.css";\n' }) }), '\n', (0, a.jsx)(n.h3, { id: 'link-om-een-image-of-andere-inline-box-componenten', children: 'Link om een Image of andere inline-box componenten' }), '\n', (0, a.jsxs)(n.p, { children: ['Om te zorgen dat de states van een Link component goed werken als een link om een inline-box element zoals een Image is gezet gebruik je de ', (0, a.jsx)(n.code, { children: 'nl-link' }), ' class name in combinatie met ', (0, a.jsx)(n.code, { children: 'nl-link--inline-box' }), ' class name.'] }), '\n', (0, a.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, a.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, a.jsx)(n.p, { children: (0, a.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-react', children: '@nl-design-system-candidate/link-react' }) }), '\n', (0, a.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/link-react\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-jsx', children: 'import { Link } from "@nl-design-system-candidate/link-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <p>\n          <Link href="https://example.com">example.com</Link>\n        </p>\n      </body>\n    </html>\n  );\n};\n' }) })] });
   }
   function M(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(G, { ...e }) }) : G(e);
   }
   const P = JSON.parse('{"nl":{"link":{"active":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"}},"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"current":{"cursor":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<url>","pointer","*"],"nl.nldesignsystem.figma-implementation":false},"$type":"other"}},"disabled":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"cursor":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<url>","pointer","*"],"nl.nldesignsystem.figma-implementation":false},"$type":"other"}},"hover":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"text-decoration-line":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["inherit","none","underline"],"nl.nldesignsystem.figma-implementation":true},"$type":"textDecoration"},"text-decoration-thickness":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"other"}},"text-decoration-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"text-decoration-line":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["inherit","none","underline"],"nl.nldesignsystem.figma-implementation":true},"$type":"textDecoration"},"text-decoration-thickness":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"other"},"text-underline-offset":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"other"}}}}'),
    I = { title: 'Link', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Link', pagination_label: 'Link', description: 'Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.', slug: '/link', keywords: ['a', 'a tag', 'anchor', 'anchor element', 'anchor link', 'back link', 'button as link', 'call to action link', 'cta link', 'externe link', 'external link', 'href', 'hyper link', 'hyperlink', 'inline link', 'koppeling', 'label', 'link', 'link button', 'links', 'navigatie', 'navigation', 'navlink', 'ordinal', 'standalone', 'standalone link', 'text link', 'URL', 'url', 'verwijzing', 'web address'] },
    $ = void 0,
    V = {},
    E = 'Link',
    O = 'Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.',
    U = 118,
    Z = s.find((e) => e.number === U),
    W = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...o.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...l.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'Link om een Image of andere inline-box componenten', id: 'link-om-een-image-of-andere-inline-box-componenten', level: 3 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function X(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, r.R)(), ...e.components },
     { Checklist: t, ChecklistItem: i } = n;
    return (t || K('Checklist', !0), i || K('ChecklistItem', !0), (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, a.jsx)(H.Fc, { component: Z, headingLevel: 1, description: O }), '\n', (0, a.jsx)(C.e, { component: Z }), '\n', (0, a.jsx)(N.Zp, { className: 'ma-implementation-card', children: (0, a.jsxs)(N.Wu, { children: [(0, a.jsx)(T.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, a.jsxs)(F.dk, { children: [(0, a.jsxs)(F.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=153-1056', children: [(0, a.jsx)(R.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, a.jsxs)(F.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=153-1056', children: [(0, a.jsx)(R.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, a.jsx)(T.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, a.jsxs)(F.dk, { children: [(0, a.jsxs)(F.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-link--documentatie', children: [(0, a.jsx)(R.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, a.jsxs)(F.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/link--documentatie', children: [(0, a.jsx)(R.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, a.jsx)(T.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, a.jsxs)(F.dk, { children: [(0, a.jsxs)(F.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-css', children: [(0, a.jsx)(R.r, { brand: 'npm' }), ' @nl-design-system-candidate/link-css'] }), (0, a.jsxs)(F.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-react', children: [(0, a.jsx)(R.r, { brand: 'npm' }), ' @nl-design-system-candidate/link-react'] }), (0, a.jsxs)(F.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-tokens', children: [(0, a.jsx)(R.r, { brand: 'npm' }), ' @nl-design-system-candidate/link-tokens'] })] })] }) }), '\n', (0, a.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, a.jsx)(d.Ay, {}), '\n', (0, a.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, a.jsx)(o.Ay, {}), '\n', (0, a.jsx)(t, { headingLevel: '4', children: z.map(({ component: e, ...n }) => (0, a.jsx)(i, { ...n, children: (0, a.jsx)(e, {}) })) }), '\n', (0, a.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, a.jsx)(l.Ay, {}), '\n', (0, a.jsx)(t, { headingLevel: '4', children: S.map(({ component: e, ...n }) => (0, a.jsx)(i, { ...n, children: (0, a.jsx)(e, {}) })) }), '\n', (0, a.jsx)(B.o, { omitH1: !0, headingLevel: 2, children: (0, a.jsx)(M, {}) }), '\n', (0, a.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, a.jsx)(_.B, { tokens: P }), '\n', (0, a.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, a.jsx)(H.VK, { component: Z, headingLevel: 3 }), '\n', (0, a.jsx)(H.$9, { component: Z, headingLevel: 2 }), '\n', (0, a.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, a.jsx)(H.mu, { component: Z, headingLevel: 3 }), '\n', (0, a.jsx)(H.K_, { component: Z })] }));
   }
   function J(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(X, { ...e }) }) : X(e);
   }
   function K(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  46565(e, n, t) {
   'use strict';
   t.d(n, { c: () => a });
   var i = t(30758);
   function a() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  51627(e, n, t) {
   'use strict';
   t.d(n, { K: () => o, n: () => l });
   var i = t(13526),
    a = t(96345),
    r = t(37168),
    s = t(86070);
   const l = ({ className: e, ...n }) => {
     const t = (0, i.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, s.jsx)('div', { className: t, children: n.children });
    },
    o = ({ className: e, label: n, heading: t, headingLevel: l, headingApperance: o, ...d }) => {
     const c = (0, i.A)('utrecht-accordion__section', e);
     return (0, s.jsxs)('details', { className: c, ...d, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(a.A, {}) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [t && (0, s.jsx)(r.D, { level: l, appearance: o, children: t }), n] })] }) }), (0, s.jsx)('div', { className: 'utrecht-accordion__panel', children: d.children })] });
    };
  },
  56167(e, n, t) {
   'use strict';
   t.d(n, { VK: () => j, $9: () => v, mu: () => x, Fc: () => b, K_: () => f });
   var i = t(29181),
    a = t(13526),
    r = t(39948),
    s = t(26655),
    l = t(46565);
   function o(e) {
    return (0, l.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(o, {
     children: () => {
      const i = t(83294).V6;
      return (0, d.jsx)(i, {
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
   var g = t(31522),
    m = t(15042),
    u = t(58876),
    h = t(76097);
   const p = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var k = t(51627);
   const j = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => h.f4.includes(e.id)),
      r = t && h.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(k.n, { children: r.map((t) => (0, d.jsx)(k.K, { className: (0, a.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, h.fX)(t.title)}`), heading: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u._, { children: t.tasks.map(({ checked: e, name: t, id: i }) => (0, d.jsx)(u.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, h.qZ)(i) }, i)) }), (0, d.jsx)(i.fz, { children: (0, d.jsxs)(i.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) }, t.title)) });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !h.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(s.AC, {
         appearance: 'large',
         className: 'ma-implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            i = n.progress.max - n.progress.value;
           return t === i ? e.title.localeCompare(n.title) : t - i;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            a = t?.value,
            l = (0, h.Pv)(e),
            o = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${a} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${a} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => o.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            s.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(s.Wu, {
              children: [
               (0, d.jsx)(i.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(i.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(i.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || l.length > 0) && (0, d.jsx)(i.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               g.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(i.dk, {
                  links: g
                   .filter((e) => !!o.get(e.name))
                   .map((e) => {
                    const n = o.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(r.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               l.length > 0 && (0, d.jsx)(d.Fragment, { children: l.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.DZ, { level: n + 2, children: [a, ' in ', e] }), (0, d.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(r.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(i.fz, { children: 'Er zijn nog geen implementaties' });
    },
    v = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      a = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(i.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(i.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(i.Xy, { children: [a ? (0, d.jsxs)(i.Er, { children: ['Vul de ', (0, d.jsx)(i.N_, { href: a, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(i.Er, { children: [(0, d.jsxs)(i.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(i.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(i.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(i.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: t }) => {
     const a = e && h.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: a && (0, d.jsx)(g.D, { state: a }), children: e.title }), (0, d.jsx)(i.fz, { lead: !0, children: t })] });
    },
    f = ({ component: e }) => {
     const n = (e && p[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(i.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(i.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  56421(e, n, t) {
   'use strict';
   t.d(n, { D: () => i.D });
   var i = t(37168);
   t(30758);
   !(function (e, n) {
    void 0 === n && (n = {});
    var t = n.insertAt;
    if ('undefined' != typeof document) {
     var i = document.head || document.getElementsByTagName('head')[0],
      a = document.createElement('style');
     ((a.type = 'text/css'), 'top' === t && i.firstChild ? i.insertBefore(a, i.firstChild) : i.appendChild(a), a.styleSheet ? (a.styleSheet.cssText = e) : a.appendChild(document.createTextNode(e)));
    }
   })('.nl-heading{break-after:avoid;break-inside:avoid}.nl-heading--level-1{color:var(--nl-heading-level-1-color, inherit);font-family:var(--nl-heading-level-1-font-family);font-size:var(--nl-heading-level-1-font-size, revert);font-weight:var(--nl-heading-level-1-font-weight, bold);line-height:var(--nl-heading-level-1-line-height);margin-block-end:var(--nl-heading-level-1-margin-block-end, revert);margin-block-start:var(--nl-heading-level-1-margin-block-start, revert)}.nl-heading--level-2{color:var(--nl-heading-level-2-color, inherit);font-family:var(--nl-heading-level-2-font-family);font-size:var(--nl-heading-level-2-font-size, revert);font-weight:var(--nl-heading-level-2-font-weight, bold);line-height:var(--nl-heading-level-2-line-height);margin-block-end:var(--nl-heading-level-2-margin-block-end, revert);margin-block-start:var(--nl-heading-level-2-margin-block-start, revert)}.nl-heading--level-3{color:var(--nl-heading-level-3-color, inherit);font-family:var(--nl-heading-level-3-font-family);font-size:var(--nl-heading-level-3-font-size, revert);font-weight:var(--nl-heading-level-3-font-weight, bold);line-height:var(--nl-heading-level-3-line-height);margin-block-end:var(--nl-heading-level-3-margin-block-end, revert);margin-block-start:var(--nl-heading-level-3-margin-block-start, revert)}.nl-heading--level-4{color:var(--nl-heading-level-4-color, inherit);font-family:var(--nl-heading-level-4-font-family);font-size:var(--nl-heading-level-4-font-size, revert);font-weight:var(--nl-heading-level-4-font-weight, bold);line-height:var(--nl-heading-level-4-line-height);margin-block-end:var(--nl-heading-level-4-margin-block-end, revert);margin-block-start:var(--nl-heading-level-4-margin-block-start, revert)}.nl-heading--level-5{color:var(--nl-heading-level-5-color, inherit);font-family:var(--nl-heading-level-5-font-family);font-size:var(--nl-heading-level-5-font-size, revert);font-weight:var(--nl-heading-level-5-font-weight, bold);line-height:var(--nl-heading-level-5-line-height);margin-block-end:var(--nl-heading-level-5-margin-block-end, revert);margin-block-start:var(--nl-heading-level-5-margin-block-start, revert)}.nl-heading--level-6{color:var(--nl-heading-level-6-color, inherit);font-family:var(--nl-heading-level-6-font-family);font-size:var(--nl-heading-level-6-font-size, revert);font-weight:var(--nl-heading-level-6-font-weight, bold);line-height:var(--nl-heading-level-6-line-height);margin-block-end:var(--nl-heading-level-6-margin-block-end, revert);margin-block-start:var(--nl-heading-level-6-margin-block-start, revert)}\n');
  },
  60577(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als de gebruiker een interactief element indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik hiervoor het ', (0, i.jsx)(n.code, { children: 'click' }), '-event. Dit is een apparaatonafhankelijke methode. Zo activeert de actie niet als de bezoeker de aanwijzer indrukt, maar pas als de bezoeker de aanwijzer weer loslaat. De bezoeker kan de aanwijzer nog verplaatsen naar buiten het element om de actie weer ongedaan te maken.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Voor knoppen waarbij het essentieel is dat ze activeren bij het indrukken (', (0, i.jsx)(n.code, { children: 'keydown' }), ') geldt een uitzondering. Dit geldt bijvoorbeeld voor knoppen in een ', (0, i.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/Virtual_keyboard', children: 'schermtoetsenbord' }), ' en pianotoetsen.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  61640(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Zorg ervoor dat het element een minimale grootte heeft van 44 bij 44 pixels. Definieer hoogte en de breedte niet in ', (0, i.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, i.jsx)(n.code, { children: 'em' }), ' of ', (0, i.jsx)(n.code, { children: 'rem' }), '. Anders kan het element niet goed meegroeien wanneer de gebruiker inzoomt.'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': Links in zinnen en paragrafen van tekst zijn uitgezonderd. De grootte van het aanwijsgebied is hier afhankelijk van de grootte van de linktekst zelf.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/interactieve-elementen/', children: 'Reserveer ruimte tussen interactieve elementen' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  76097(e, n, t) {
   'use strict';
   t.d(n, { bo: () => a, KF: () => m, mJ: () => p, VZ: () => w, cR: () => y, Pv: () => k, qZ: () => s, kD: () => b, QQ: () => D, B2: () => u, Pc: () => o, f4: () => l, GT: () => f, fX: () => r, eQ: () => v, B_: () => x, o_: () => j });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return g(c(n));
    },
    u = (e, n) => p(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => g(c(e.projects.flatMap((e) => h(e)))),
    k = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: a, value: r }) => {
        const s = /^(.+) URL/.exec(i)[1],
         l = 'Storybook' === s ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: i, id: a, value: r, description: l };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    j = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? b(e[t], [...n, t]) : []));
   }
   function f(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const y = () => {
     const e = i.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    w = () => {
     const e = i.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    A = new Set(['ics', 'json', 'pdf']),
    D = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && A.has(t);
    };
  },
  76334(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function s(e) {
    const n = { p: 'p', strong: 'strong', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De linktekst vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).' }), '\n', (0, i.jsxs)(n.p, { children: ['Wat is een ', (0, i.jsx)(n.strong, { children: 'linktekst' }), '? Het is de tekst die zichtbaar is, maar ook de tekst die aan een gebruiker van hulpsoftware wordt voorgelezen.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Wat is het ', (0, i.jsx)(n.strong, { children: 'linkdoel' }), '? De locatie waar de link naartoe gaat. Bijvoorbeeld de contactpagina, een nieuwsbericht, een andere website of een download van een document.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Wat betekent ', (0, i.jsx)(n.strong, { children: 'In context' }), '? Het doel van de link kan ook door omringende content worden aangegeven. Dit moet dan wel ook voor gebruikers van hulpmiddelen duidelijk zijn, bijvoorbeeld door aanvullende tekst of een afbeelding naast de link. Dit laatste is onderwerp van veel discussie. Het beste is om altijd goed in de linktekst zelf te vertellen want het doel is.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  82839(e, n, t) {
   var i = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [66203, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function a(e) {
    if (!t.o(i, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = i[e],
     a = n[0];
    return t.e(n[1]).then(() => t(a));
   }
   ((a.keys = () => Object.keys(i)), (a.id = 82839), (e.exports = a));
  },
  83672(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  92233(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Wanneer het element de toetsenbordfocus krijgt is de focus zichtbaar.' }), '\n', (0, i.jsxs)(n.p, { children: ['Verberg de standaard browserfocusstijl nooit met ', (0, i.jsx)(n.code, { children: 'outline:none' }), ' zonder er een goede focusstijl voor in de plaats te zetten die rekening houdt met goede zichtbaarheid.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  96412(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function s(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Laat tekst buiten afbeeldingen.' }), '\n', (0, i.jsx)(n.p, { children: 'Als je losse tekst een vergelijkbaar uiterlijk kan geven als in een afbeelding, laat het dan losse tekst zijn. Er is een uitzondering als de tekst onderdeel is van een logo.' }), '\n', (0, i.jsx)(n.p, { children: 'Sommige mensen hebben teksten nodig met een ander uiterlijk. Dit kan bij losse tekst en niet bij afbeeldingen.' })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
