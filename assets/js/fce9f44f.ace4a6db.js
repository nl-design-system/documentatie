'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [1132],
 {
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => o });
   var i = t(30758);
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), i.createElement(r.Provider, { value: n }, e.children));
   }
  },
  54156(e, n, t) {
   (t.r(n), t.d(n, { assets: () => m, contentTitle: () => h, default: () => b, frontMatter: () => p, metadata: () => i, toc: () => g }));
   const i = JSON.parse('{"id":"richtlijnen/formulieren/fieldset/legend/README","title":"Legends","description":"Richtlijnen voor legends in een fieldset in een formulier.","source":"@site/docs/richtlijnen/formulieren/fieldset/1-legend/README.mdx","sourceDirName":"richtlijnen/formulieren/fieldset/1-legend","slug":"/richtlijnen/formulieren/fieldsets/legends","permalink":"/richtlijnen/formulieren/fieldsets/legends","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/fieldset/1-legend/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Legends","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Legends in een fieldset","pagination_label":"Legends in een fieldset","description":"Richtlijnen voor legends in een fieldset in een formulier.","slug":"/richtlijnen/formulieren/fieldsets/legends","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Fieldsets","permalink":"/richtlijnen/formulieren/fieldsets/"},"next":{"title":"Descriptions in een fieldset","permalink":"/richtlijnen/formulieren/fieldsets/descriptions"}}');
   var l = t(86070),
    r = t(18439),
    s = t(78734),
    o = t(75397);
   function a(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'legends-bij-een-fieldset', children: 'Legends bij een fieldset' }) }), '\n', (0, l.jsxs)(n.p, { children: ['Een ', (0, l.jsx)(n.code, { children: '<legend>' }), ' dient als de naam van de groep. ', (0, l.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' lezen deze legend voor bij elk invoerveld in de fieldset (groep), zodat deze koppeling ook duidelijk is zonder de visuele informatie.'] }), '\n', (0, l.jsx)(n.p, { children: (0, l.jsx)(n.code, { children: '<legend>Uw adresgegevens</legend>' }) }), '\n', (0, l.jsx)(n.p, { children: 'Maak de inhoud van de legend kort en omschrijvend.' }), '\n', (0, l.jsx)(n.p, { children: 'In onderstaande video leest VoiceOver in Safari drie verschillende fieldsets voor, een groep met keuzerondjes (radio buttons) en een bezorg- en factuuradres. De legend wordt steeds bij het formulierveld voorgelezen.\nVoiceOver leest de legend twee keer voor bij het eerste veld van een groep, dit is een bug van VoiceOver.' }), '\n', (0, l.jsx)(o.L, { id: 'WMa7LToyZVc', title: 'Demo fieldsets met VoiceOver in Safari' }), '\n', (0, l.jsx)(n.h2, { id: 'koppen-in-een-legend', children: 'Koppen in een legend' }), '\n', (0, l.jsxs)(n.p, { children: ['Een legend kan ook een kopje bevatten. Zorg er wel voor dat het niveau van deze kopjes klopt in de ', (0, l.jsx)('a', { href: 'https://www.a11yproject.com/posts/how-to-accessible-heading-structure/', children: 'hi\xebrarchische koppenstructuur' }), ' van de hele pagina.'] }), '\n', (0, l.jsx)(n.pre, { children: (0, l.jsx)(n.code, { className: 'language-html', children: '<fieldset>\n  <legend><h3>Bezorgadres</h3></legend>\n  <label for="shipping-street">Straat en huisnummer</label>\n  <input type="text" name="shipping-street" id="shipping-street" autocomplete="shipping address-line1" />\n  <label for="shipping-postal-code">Postcode</label>\n  <input type="text" name="shipping-postal-code" id="shipping-postal-code" autocomplete="shipping postal-code" />\n  <label for="shipping-city">Stad</label>\n  <input type="text" name="shipping-city" id="shipping-city" autocomplete="shipping address-level2" />\n</fieldset>\n\n<fieldset>\n  <legend><h3>Factuuradres</h3></legend>\n  <label for="billing-street">Straat en huisnummer</label>\n  <input type="text" name="billing-street" id="billing-street" autocomplete="billing address-line1" />\n  <label for="billing-postal-code">Postcode</label>\n  <input type="text" name="billing-postal-code" id="billing-postal-code" autocomplete="billing postal-code" />\n  <label for="billing-city">Stad</label>\n  <input type="text" name="billing-city" id="billing-city" autocomplete="billing address-level2" />\n</fieldset>\n' }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(a, { ...e }) }) : a(e);
   }
   function c(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e);
   }
   const p = { title: 'Legends', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Legends in een fieldset', pagination_label: 'Legends in een fieldset', description: 'Richtlijnen voor legends in een fieldset in een formulier.', slug: '/richtlijnen/formulieren/fieldsets/legends', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    m = {},
    g = [{ value: 'Koppen in een legend', id: 'koppen-in-een-legend', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function f(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(u, {}), '\n', (0, l.jsx)(s.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(f, { ...e }) }) : f();
   }
  },
  75397(e, n, t) {
   t.d(n, { L: () => a });
   var i = t(30758),
    l = t(86070);
   const r = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function s(e, n, t, i, l) {
    const r = { '@context': 'https://schema.org', '@type': 'VideoObject', name: (null == l ? void 0 : l.name) || n, thumbnailUrl: [(null == l ? void 0 : l.thumbnailUrl) || t], embedUrl: (null == l ? void 0 : l.embedUrl) || `${i}/embed/${e}`, contentUrl: (null == l ? void 0 : l.contentUrl) || `https://www.youtube.com/watch?v=${e}`, ...((null == l ? void 0 : l.description) && { description: l.description }), ...((null == l ? void 0 : l.uploadDate) && { uploadDate: l.uploadDate }), ...((null == l ? void 0 : l.duration) && { duration: l.duration }) };
    return JSON.stringify(r);
   }
   const o = i.forwardRef(function (e, n) {
     const [t, o] = i.useState(!1),
      [a, d] = i.useState(e.alwaysLoadIframe || !1),
      c = encodeURIComponent(e.id),
      u = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      p = e.title,
      h = e.poster || 'hqdefault',
      m = e.announce || 'Watch',
      g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      f = i.useMemo(() => {
       const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.playlist ? { list: c } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
          n.append(t, e);
         }),
        n
       );
      }, [e.muted, g, e.enableJsApi, e.playlist, c, e.params]),
      b = i.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      j = i.useMemo(() => (e.playlist ? `${b}/embed/videoseries?${f.toString()}` : `${b}/embed/${c}?${f.toString()}`), [e.playlist, b, c, f]),
      v = !e.thumbnail && !e.playlist && 'maxresdefault' === h,
      x = e.webp ? 'webp' : 'jpg',
      y = e.webp ? 'vi_webp' : 'vi',
      w = v
       ? ((e, n, t, l = 'maxresdefault') => {
          const [s, o] = (0, i.useState)('');
          return (
           (0, i.useEffect)(() => {
            const i = `https://img.youtube.com/${n}/${e}/${l}.${t}`,
             s = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
             a = r[l],
             d = new Image();
            ((d.onload = () => {
             d.width < a ? o(s) : o(i);
            }),
             (d.onerror = () => o(s)),
             (d.src = i));
           }, [e, n, t, l]),
           s
          );
         })(e.id, y, x, h)
       : null,
      k = i.useMemo(() => e.thumbnail || w || `https://i.ytimg.com/${y}/${e.playlist ? u : c}/${h}.${x}`, [e.thumbnail, w, y, e.playlist, u, c, h, x]),
      $ = e.activatedClass || 'lyt-activated',
      z = e.adNetwork || !1,
      S = e.aspectHeight || 9,
      L = e.aspectWidth || 16,
      _ = e.iframeClass || '',
      R = e.playerClass || 'lty-playbtn',
      C = e.wrapperClass || 'yt-lite',
      M = i.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      O = e.rel ? 'prefetch' : 'preload',
      A = e.containerElement || 'article',
      D = !1 !== e.noscriptFallback;
     return (
      i.useEffect(() => {
       a && (M(), e.focusOnLoad && 'object' == typeof n && null != n && n.current && n.current.focus());
      }, [a, M, e.focusOnLoad, n]),
      (0, l.jsxs)(l.Fragment, {
       children: [
        !e.lazyLoad && (0, l.jsx)('link', { rel: O, href: k, as: 'image' }),
        (0, l.jsx)(l.Fragment, { children: t && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('link', { rel: 'preconnect', href: b }), (0, l.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), z && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, l.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, l.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: s(e.id, p, k, b, e.seo) } }),
        D && !e.playlist && (0, l.jsx)('noscript', { children: (0, l.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${p} on YouTube`, children: ['Watch "', p, '" on YouTube'] }) }),
        (0, l.jsxs)(A, {
         onPointerOver: () => {
          t || o(!0);
         },
         onClick: () => {
          a || d(!0);
         },
         className: `${C} ${a ? $ : ''}`,
         'data-title': p,
         role: a ? void 0 : 'img',
         'aria-label': a ? void 0 : `${p} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${k})` }), '--aspect-ratio': (S / L) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !a && (0, l.jsx)('img', { src: k, alt: `${p} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), (0, l.jsx)('button', { type: 'button', className: R, 'aria-label': `${m} ${p}`, 'aria-hidden': a || void 0, tabIndex: a ? -1 : 0, children: (0, l.jsx)('span', { className: 'lty-visually-hidden', children: m }) }), a && (0, l.jsx)('iframe', { ref: n, className: _, title: p, width: '560', height: '315', style: { border: 0 }, allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: j, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    a = ({ id: e, title: n, ...t }) => {
     const r = (0, i.useCallback)((e) => {
      if (!e) return;
      const n = e.querySelector('[role="img"]');
      n && n.setAttribute('role', 'group');
      const t = new MutationObserver(() => {
       const n = e.querySelector('[role="img"]');
       n && (n.setAttribute('role', 'group'), t.disconnect());
      });
      t.observe(e, { attributes: !0, subtree: !0, attributeFilter: ['role'] });
     }, []);
     return (0, l.jsx)('div', { ref: r, children: (0, l.jsx)(o, { adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...t }) });
    };
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => o, RM: () => r });
   var i = t(86070),
    l = t(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
