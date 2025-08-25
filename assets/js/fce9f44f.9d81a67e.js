/*! For license information please see fce9f44f.9d81a67e.js.LICENSE.txt */
'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5211],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var i = t(52676),
    l = t(40139);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  52720: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => u, contentTitle: () => d, default: () => f, frontMatter: () => c, metadata: () => p, toc: () => m });
   var i = t(52676),
    l = t(40139),
    r = t(66968),
    s = t(97233);
   function o(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', p: 'p', pre: 'pre', ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'legends-bij-een-fieldset', children: 'Legends bij een fieldset' }), '\n', (0, i.jsxs)(n.p, { children: ['Een ', (0, i.jsx)(n.code, { children: '<legend>' }), ' dient als de naam van de groep. ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' lezen deze legend voor bij elk invoerveld in de fieldset (groep), zodat deze koppeling ook duidelijk is zonder de visuele informatie.'] }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.code, { children: '<legend>Uw adresgegevens</legend>' }) }), '\n', (0, i.jsx)(n.p, { children: 'Maak de inhoud van de legend kort en omschrijvend.' }), '\n', (0, i.jsx)(n.p, { children: 'In onderstaande video leest VoiceOver in Safari drie verschillende fieldsets voor, een groep met keuzerondjes (radio buttons) en een bezorg- en factuuradres. De legend wordt steeds bij het formulierveld voorgelezen.\nVoiceOver leest de legend twee keer voor bij het eerste veld van een groep, dit is een bug van VoiceOver.' }), '\n', (0, i.jsx)(s.Y, { id: 'WMa7LToyZVc', title: 'Demo fieldsets met VoiceOver in Safari' }), '\n', (0, i.jsx)(n.h2, { id: 'koppen-in-een-legend', children: 'Koppen in een legend' }), '\n', (0, i.jsxs)(n.p, { children: ['Een fieldset kan ook een kopje bevatten. Zorg er wel voor dat het niveau van deze kopjes klopt in de ', (0, i.jsx)('a', { href: 'https://www.a11yproject.com/posts/how-to-accessible-heading-structure/', children: 'hi\xebrarchische koppenstructuur' }), ' van de hele pagina.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<fieldset>\n  <legend><h3>Bezorgadres<h3></legend>\n    <label for="shipping-street">Straat en huisnummer</label>\n    <input type="text" name="shipping-street" id="shipping-street" autocomplete="shipping address-line1">\n    <label for="shipping-postal-code">Postcode</label>\n    <input type="text" name="shipping-postal-code" id="shipping-postal-code" autocomplete="shipping postal-code"></div>\n    <label for="shipping-city">Stad</label>\n    <input type="text" name="shipping-city" id="shipping-city" autocomplete="shipping address-level2">\n</fieldset>\n\n<fieldset>\n  <legend><h3>Factuuradres<h3></legend>\n    <label for="billing-street">Straat en huisnummer</label>\n    <input type="text" name="shipping-street" id="billing-street" autocomplete="billing address-line1">\n    <label for="billing-postal-code">Postcode</label>\n    <input type="text" name="billing-postal-code" id="billing-postal-code" autocomplete="billing postal-code">\n    <label for="billing-city">Stad</label>\n    <input type="text" name="billing-city" id="billing-city" autocomplete=" billingaddress-level2">\n</fieldset>\n' }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
   const c = { title: 'Legends \xb7 Fieldsets \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Legends in een fieldset', pagination_label: 'Legends in een fieldset', description: 'Richtlijnen voor legends in een fieldset in een formulier.', slug: '/richtlijnen/formulieren/fieldsets/legends', keywords: ['labels', 'formulier', 'design', 'code'] },
    d = void 0,
    p = { id: 'richtlijnen/formulieren/fieldset/legend/README', title: 'Legends \xb7 Fieldsets \xb7 Richtlijnen', description: 'Richtlijnen voor legends in een fieldset in een formulier.', source: '@site/docs/richtlijnen/formulieren/fieldset/1-legend/README.mdx', sourceDirName: 'richtlijnen/formulieren/fieldset/1-legend', slug: '/richtlijnen/formulieren/fieldsets/legends', permalink: '/richtlijnen/formulieren/fieldsets/legends', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/fieldset/1-legend/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Legends \xb7 Fieldsets \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Legends in een fieldset', pagination_label: 'Legends in een fieldset', description: 'Richtlijnen voor legends in een fieldset in een formulier.', slug: '/richtlijnen/formulieren/fieldsets/legends', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Fieldsets', permalink: '/richtlijnen/formulieren/fieldsets/' }, next: { title: 'Descriptions in een fieldset', permalink: '/richtlijnen/formulieren/fieldsets/descriptions' } },
    u = {},
    m = [];
   function h(e) {
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(a, {}), '\n', (0, i.jsx)(r.ZP, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h();
   }
  },
  97233: (e, n, t) => {
   t.d(n, { Y: () => r });
   var i = t(84263),
    l = t(52676);
   const r = (e) => {
    let { id: n, title: t, ...r } = e;
    return (0, l.jsx)(i.Z, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: n, title: t, poster: 'maxresdefault', ...r });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => s });
   var i = t(75271);
   const l = {},
    r = i.createContext(l);
   function s(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
  84263: (e, n, t) => {
   t.d(n, { Z: () => s });
   var i = t(75271),
    l = function () {
     return (
      (l =
       Object.assign ||
       function (e) {
        for (var n, t = 1, i = arguments.length; t < i; t++) for (var l in (n = arguments[t])) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
        return e;
       }),
      l.apply(this, arguments)
     );
    },
    r = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   var s = i.forwardRef(function (e, n) {
    var t = i.useState(!1),
     s = t[0],
     o = t[1],
     a = i.useState(e.alwaysLoadIframe || !1),
     c = a[0],
     d = a[1],
     p = encodeURIComponent(e.id),
     u = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     m = e.title,
     h = e.poster || 'hqdefault',
     f = e.announce || 'Watch',
     g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     b = new URLSearchParams(l(l(l(l({}, e.muted ? { mute: '1' } : {}), g ? { autoplay: '1' } : {}), e.enableJsApi ? { enablejsapi: '1' } : {}), e.playlist ? { list: p } : {}));
    e.params &&
     new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach(function (e, n) {
      b.append(n, e);
     });
    var j = e.noCookie;
    j = e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com';
    var v = e.playlist ? ''.concat(j, '/embed/videoseries?').concat(b.toString()) : ''.concat(j, '/embed/').concat(p, '?').concat(b.toString()),
     y = !e.thumbnail && !e.playlist && 'maxresdefault' === h,
     w = e.webp ? 'webp' : 'jpg',
     x = e.webp ? 'vi_webp' : 'vi',
     k = y
      ? (function (e, n, t, l) {
         void 0 === l && (l = 'maxresdefault');
         var s = (0, i.useState)(''),
          o = s[0],
          a = s[1];
         return (
          (0, i.useEffect)(
           function () {
            var i = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/').concat(l, '.').concat(t),
             s = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/hqdefault.').concat(t),
             o = r[l],
             c = new Image();
            (c.onload = function () {
             c.width < o ? a(s) : a(i);
            }),
             (c.onerror = function () {
              return a(s);
             }),
             (c.src = i);
           },
           [e],
          ),
          o
         );
        })(e.id, x, w, h)
      : null,
     E =
      e.thumbnail ||
      k ||
      'https://i.ytimg.com/'
       .concat(x, '/')
       .concat(e.playlist ? u : p, '/')
       .concat(h, '.')
       .concat(w),
     _ = e.activatedClass || 'lyt-activated',
     z = e.adNetwork || !1,
     S = e.aspectHeight || 9,
     C = e.aspectWidth || 16,
     L = e.iframeClass || '',
     R = e.playerClass || 'lty-playbtn',
     F = e.wrapperClass || 'yt-lite',
     I = e.onIframeAdded || function () {},
     O = e.rel ? 'prefetch' : 'preload',
     P = e.containerElement || 'article',
     D = e.style || {};
    return (
     i.useEffect(
      function () {
       c && I();
      },
      [c],
     ),
     i.createElement(
      i.Fragment,
      null,
      i.createElement('link', { rel: O, href: E, as: 'image' }),
      i.createElement(i.Fragment, null, s && i.createElement(i.Fragment, null, i.createElement('link', { rel: 'preconnect', href: j }), i.createElement('link', { rel: 'preconnect', href: 'https://www.google.com' }), z && i.createElement(i.Fragment, null, i.createElement('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), i.createElement('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })))),
      i.createElement(
       P,
       {
        onPointerOver: function () {
         s || o(!0);
        },
        onClick: function () {
         c || d(!0);
        },
        className: ''.concat(F, ' ').concat(c ? _ : ''),
        'data-title': m,
        style: l(l({ backgroundImage: 'url('.concat(E, ')') }, { '--aspect-ratio': ''.concat((S / C) * 100, '%') }), D),
       },
       i.createElement('button', { type: 'button', className: R, 'aria-label': ''.concat(f, ' ').concat(m) }),
       c && i.createElement('iframe', { ref: n, className: L, title: m, width: '560', height: '315', frameBorder: '0', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: v }),
      ),
     )
    );
   });
  },
 },
]);
