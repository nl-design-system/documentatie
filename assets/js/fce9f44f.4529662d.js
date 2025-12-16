/*! For license information please see fce9f44f.4529662d.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [1132],
 {
  73225: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => u, contentTitle: () => p, default: () => g, frontMatter: () => d, metadata: () => i, toc: () => h });
   const i = JSON.parse('{"id":"richtlijnen/formulieren/fieldset/legend/README","title":"Legends \xb7 Fieldsets \xb7 Richtlijnen","description":"Richtlijnen voor legends in een fieldset in een formulier.","source":"@site/docs/richtlijnen/formulieren/fieldset/1-legend/README.mdx","sourceDirName":"richtlijnen/formulieren/fieldset/1-legend","slug":"/richtlijnen/formulieren/fieldsets/legends","permalink":"/richtlijnen/formulieren/fieldsets/legends","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/fieldset/1-legend/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Legends \xb7 Fieldsets \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Legends in een fieldset","pagination_label":"Legends in een fieldset","description":"Richtlijnen voor legends in een fieldset in een formulier.","slug":"/richtlijnen/formulieren/fieldsets/legends","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Fieldsets","permalink":"/richtlijnen/formulieren/fieldsets/"},"next":{"title":"Descriptions in een fieldset","permalink":"/richtlijnen/formulieren/fieldsets/descriptions"}}');
   var l = t(86070),
    r = t(85248),
    o = t(78734),
    s = t(99060);
   function a(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'legends-bij-een-fieldset', children: 'Legends bij een fieldset' }) }), '\n', (0, l.jsxs)(n.p, { children: ['Een ', (0, l.jsx)(n.code, { children: '<legend>' }), ' dient als de naam van de groep. ', (0, l.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' lezen deze legend voor bij elk invoerveld in de fieldset (groep), zodat deze koppeling ook duidelijk is zonder de visuele informatie.'] }), '\n', (0, l.jsx)(n.p, { children: (0, l.jsx)(n.code, { children: '<legend>Uw adresgegevens</legend>' }) }), '\n', (0, l.jsx)(n.p, { children: 'Maak de inhoud van de legend kort en omschrijvend.' }), '\n', (0, l.jsx)(n.p, { children: 'In onderstaande video leest VoiceOver in Safari drie verschillende fieldsets voor, een groep met keuzerondjes (radio buttons) en een bezorg- en factuuradres. De legend wordt steeds bij het formulierveld voorgelezen.\nVoiceOver leest de legend twee keer voor bij het eerste veld van een groep, dit is een bug van VoiceOver.' }), '\n', (0, l.jsx)(s.L, { id: 'WMa7LToyZVc', title: 'Demo fieldsets met VoiceOver in Safari' }), '\n', (0, l.jsx)(n.h2, { id: 'koppen-in-een-legend', children: 'Koppen in een legend' }), '\n', (0, l.jsxs)(n.p, { children: ['Een legend kan ook een kopje bevatten. Zorg er wel voor dat het niveau van deze kopjes klopt in de ', (0, l.jsx)('a', { href: 'https://www.a11yproject.com/posts/how-to-accessible-heading-structure/', children: 'hi\xebrarchische koppenstructuur' }), ' van de hele pagina.'] }), '\n', (0, l.jsx)(n.pre, { children: (0, l.jsx)(n.code, { className: 'language-html', children: '<fieldset>\n  <legend><h3>Bezorgadres</h3></legend>\n  <label for="shipping-street">Straat en huisnummer</label>\n  <input type="text" name="shipping-street" id="shipping-street" autocomplete="shipping address-line1" />\n  <label for="shipping-postal-code">Postcode</label>\n  <input type="text" name="shipping-postal-code" id="shipping-postal-code" autocomplete="shipping postal-code" />\n  <label for="shipping-city">Stad</label>\n  <input type="text" name="shipping-city" id="shipping-city" autocomplete="shipping address-level2" />\n</fieldset>\n\n<fieldset>\n  <legend><h3>Factuuradres</h3></legend>\n  <label for="billing-street">Straat en huisnummer</label>\n  <input type="text" name="billing-street" id="billing-street" autocomplete="billing address-line1" />\n  <label for="billing-postal-code">Postcode</label>\n  <input type="text" name="billing-postal-code" id="billing-postal-code" autocomplete="billing postal-code" />\n  <label for="billing-city">Stad</label>\n  <input type="text" name="billing-city" id="billing-city" autocomplete="billing address-level2" />\n</fieldset>\n' }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(a, { ...e }) }) : a(e);
   }
   const d = { title: 'Legends \xb7 Fieldsets \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Legends in een fieldset', pagination_label: 'Legends in een fieldset', description: 'Richtlijnen voor legends in een fieldset in een formulier.', slug: '/richtlijnen/formulieren/fieldsets/legends', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    u = {},
    h = [{ value: 'Koppen in een legend', id: 'koppen-in-een-legend', level: 2 }, ...o.RM];
   function m(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(c, {}), '\n', (0, l.jsx)(o.Ay, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(m, { ...e }) }) : m();
   }
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => s, RM: () => r });
   var i = t(86070),
    l = t(85248);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => o, x: () => s });
   var i = t(30758);
   const l = {},
    r = i.createContext(l);
   function o(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : o(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
  87423: (e, n, t) => {
   t.d(n, { A: () => o });
   var i = t(30758),
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
   var o = i.forwardRef(function (e, n) {
    var t = i.useState(!1),
     o = t[0],
     s = t[1],
     a = i.useState(e.alwaysLoadIframe || !1),
     c = a[0],
     d = a[1],
     p = encodeURIComponent(e.id),
     u = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     h = e.title,
     m = e.poster || 'hqdefault',
     g = e.announce || 'Watch',
     f = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     b = new URLSearchParams(l(l(l(l({}, e.muted ? { mute: '1' } : {}), f ? { autoplay: '1' } : {}), e.enableJsApi ? { enablejsapi: '1' } : {}), e.playlist ? { list: p } : {}));
    e.params &&
     new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach(function (e, n) {
      b.append(n, e);
     });
    var j = e.noCookie;
    j = e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com';
    var v = e.playlist ? ''.concat(j, '/embed/videoseries?').concat(b.toString()) : ''.concat(j, '/embed/').concat(p, '?').concat(b.toString()),
     y = !e.thumbnail && !e.playlist && 'maxresdefault' === m,
     x = e.webp ? 'webp' : 'jpg',
     w = e.webp ? 'vi_webp' : 'vi',
     k = y
      ? (function (e, n, t, l) {
         void 0 === l && (l = 'maxresdefault');
         var o = (0, i.useState)(''),
          s = o[0],
          a = o[1];
         return (
          (0, i.useEffect)(
           function () {
            var i = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/').concat(l, '.').concat(t),
             o = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/hqdefault.').concat(t),
             s = r[l],
             c = new Image();
            (c.onload = function () {
             c.width < s ? a(o) : a(i);
            }),
             (c.onerror = function () {
              return a(o);
             }),
             (c.src = i);
           },
           [e],
          ),
          s
         );
        })(e.id, w, x, m)
      : null,
     E =
      e.thumbnail ||
      k ||
      'https://i.ytimg.com/'
       .concat(w, '/')
       .concat(e.playlist ? u : p, '/')
       .concat(m, '.')
       .concat(x),
     R = e.activatedClass || 'lyt-activated',
     _ = e.adNetwork || !1,
     z = e.aspectHeight || 9,
     S = e.aspectWidth || 16,
     L = e.iframeClass || '',
     C = e.playerClass || 'lty-playbtn',
     F = e.wrapperClass || 'yt-lite',
     O = e.onIframeAdded || function () {},
     I = e.rel ? 'prefetch' : 'preload',
     M = e.containerElement || 'article',
     A = e.style || {};
    return (
     i.useEffect(
      function () {
       c && O();
      },
      [c],
     ),
     i.createElement(
      i.Fragment,
      null,
      i.createElement('link', { rel: I, href: E, as: 'image' }),
      i.createElement(i.Fragment, null, o && i.createElement(i.Fragment, null, i.createElement('link', { rel: 'preconnect', href: j }), i.createElement('link', { rel: 'preconnect', href: 'https://www.google.com' }), _ && i.createElement(i.Fragment, null, i.createElement('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), i.createElement('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })))),
      i.createElement(
       M,
       {
        onPointerOver: function () {
         o || s(!0);
        },
        onClick: function () {
         c || d(!0);
        },
        className: ''.concat(F, ' ').concat(c ? R : ''),
        'data-title': h,
        style: l(l({ backgroundImage: 'url('.concat(E, ')') }, { '--aspect-ratio': ''.concat((z / S) * 100, '%') }), A),
       },
       i.createElement('button', { type: 'button', className: C, 'aria-label': ''.concat(g, ' ').concat(h) }),
       c && i.createElement('iframe', { ref: n, className: L, title: h, width: '560', height: '315', frameBorder: '0', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: v }),
      ),
     )
    );
   });
  },
  99060: (e, n, t) => {
   t.d(n, { L: () => r });
   var i = t(87423),
    l = t(86070);
   const r = ({ id: e, title: n, ...t }) => (0, l.jsx)(i.A, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: e, title: n, poster: 'maxresdefault', ...t });
  },
 },
]);
