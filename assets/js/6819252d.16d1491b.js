'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [13562],
 {
  7891(e, n, t) {
   t.d(n, { L: () => i });
   var r = t(20201);
   const o = { nl: { skipLink: 'Naar de inhoud', mainNavLabel: 'Hoofdmenu', footerNavLabel: 'Submenu', menu: 'Menu', close: 'Sluiten', open: 'Open', search: 'Zoeken', searchAriaLabel: 'Zoekterm', searchRequiredError: 'Dit veld is verplicht, maar het is niet ingevuld.', breadcrumbLabel: 'Kruimelpad', logoAlt: 'Logo van NL Design System', logoLinkAlt: 'Logo van NL Design System, naar de homepage', watch: 'Bekijk', subnavigation: 'subnavigatie' }, en: { skipLink: 'To main content', mainNavLabel: 'Main menu', footerNavLabel: 'Submenu', menu: 'Menu', close: 'Close', open: 'Open', search: 'Search', searchAriaLabel: 'Searchterm', searchRequiredError: 'This field is required, but it was left empty.', breadcrumbLabel: 'Breadcrumbs', logoAlt: 'Logo of NL Design System', logoLinkAlt: 'Logo of NL Design System, to the homepage', watch: 'Watch', subnavigation: 'subnavigation' } };
   var a = t(86070);
   const i = ({ id: e, title: n, lang: t = 'nl', ...i }) => (0, a.jsx)(r.Ay, { lazyLoad: !0, adNetwork: !1, announce: o[t].watch, cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...i });
  },
  14881(e, n, t) {
   t.d(n, { K: () => c, n: () => d });
   var r = t(13526),
    o = t(30758),
    a = t(30662),
    i = t(32065),
    l = t(37168),
    s = t(86070);
   const d = (0, o.forwardRef)(({ as: e, className: n, children: t, ...o }, a) => {
     const i = e || 'div',
      l = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, s.jsx)(i, { ref: a, className: l, ...o, children: t });
    }),
    c = ({ className: e, classNamePanel: n, label: t, heading: o, headingLevel: d, headingApperance: c, ...h }) => {
     const u = (0, r.A)('utrecht-accordion__section', e),
      p = (0, r.A)('utrecht-accordion__panel', n);
     return (0, s.jsxs)('details', { className: u, ...h, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(i.I, { children: (0, s.jsx)(a.rI, {}) }) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [o && (0, s.jsx)(l.D, { level: d, appearance: c, children: o }), t] })] }) }), (0, s.jsx)('div', { className: p, children: h.children })] });
    };
  },
  18439(e, n, t) {
   t.d(n, { R: () => i, x: () => l });
   var r = t(30758);
   const o = {},
    a = r.createContext(o);
   function i(e) {
    const n = r.useContext(a);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), r.createElement(a.Provider, { value: n }, e.children));
   }
  },
  20201(e, n, t) {
   t.d(n, { Ay: () => l });
   var r = t(86070),
    o = t(30758);
   const a = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function i(e, n, t, r, o) {
    const a = { '@context': 'https://schema.org', '@type': 'VideoObject', name: o?.name || n, thumbnailUrl: [o?.thumbnailUrl || t], embedUrl: o?.embedUrl || `${r}/embed/${e}`, contentUrl: o?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(o?.description && { description: o.description }), ...(o?.uploadDate && { uploadDate: o.uploadDate }), ...(o?.duration && { duration: o.duration }) };
    return JSON.stringify(a);
   }
   const l = o.forwardRef(function (e, n) {
    const [t, l] = o.useState(!1),
     [s, d] = o.useState(e.alwaysLoadIframe || !1),
     c = encodeURIComponent(e.id),
     h = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     u = e.title,
     p = e.poster || 'hqdefault',
     m = e.announce || 'Watch',
     g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     b = o.useMemo(() => {
      const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
         n.append(t, e);
        }),
       n
      );
     }, [e.muted, g, e.enableJsApi, e.playlist, c, e.params]),
     v = o.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     j = o.useMemo(() => (e.playlist ? `${v}/embed/videoseries?${b.toString()}` : `${v}/embed/${c}?${b.toString()}`), [e.playlist, v, c, b]),
     f = !e.thumbnail && !e.playlist && 'maxresdefault' === p,
     x = e.webp ? 'webp' : 'jpg',
     y = e.webp ? 'vi_webp' : 'vi',
     k = f
      ? ((e, n, t, r = 'maxresdefault') => {
         const [i, l] = (0, o.useState)('');
         return (
          (0, o.useEffect)(() => {
           const o = `https://img.youtube.com/${n}/${e}/${r}.${t}`,
            i = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
            s = a[r],
            d = new Image();
           ((d.onload = () => {
            d.width < s ? l(i) : l(o);
           }),
            (d.onerror = () => l(i)),
            (d.src = o));
          }, [e, n, t, r]),
          i
         );
        })(e.id, y, x, p)
      : null,
     w = o.useMemo(() => e.thumbnail || k || `https://i.ytimg.com/${y}/${e.playlist ? h : c}/${p}.${x}`, [e.thumbnail, k, y, e.playlist, h, c, p, x]),
     _ = e.activatedClass || 'lyt-activated',
     N = e.adNetwork || !1,
     A = e.aspectHeight || 9,
     S = e.aspectWidth || 16,
     C = e.iframeClass || '',
     L = e.playerClass || 'lty-playbtn',
     z = e.wrapperClass || 'yt-lite',
     I = o.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     $ = e.rel ? 'prefetch' : 'preload',
     P = e.containerElement || 'article',
     R = !1 !== e.noscriptFallback,
     E = () => {
      s || d(!0);
     };
    return (
     o.useEffect(() => {
      s && (I(), e.focusOnLoad && 'object' == typeof n && n?.current && n.current.focus());
     }, [s, I, e.focusOnLoad, n]),
     o.useEffect(() => {
      if (!s || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
      let t = !1,
       r = !1;
      const o = (r) => {
       if ('https://www.youtube.com' !== r.origin && 'https://www.youtube-nocookie.com' !== r.origin) return;
       let o;
       try {
        o = 'string' == typeof r.data ? JSON.parse(r.data) : r.data;
       } catch {
        return;
       }
       switch (o.event) {
        case 'onReady':
         t || ((t = !0), e.onReady && e.onReady({ videoId: e.id, title: u }));
         break;
        case 'infoDelivery':
         if (void 0 !== o.info?.playerState) {
          const t = o.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: o.info.currentTime, duration: o.info.duration }), t)) {
           case 1:
            e.onPlay?.();
            break;
           case 2:
            e.onPause?.();
            break;
           case 0:
            (e.onEnd?.(), e.stopOnEnd && 'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*'));
            break;
           case 3:
            e.onBuffering?.();
          }
         }
         (void 0 !== o.info?.playbackRate && e.onPlaybackRateChange?.(o.info.playbackRate), void 0 !== o.info?.playbackQuality && e.onPlaybackQualityChange?.(o.info.playbackQuality));
         break;
        case 'onStateChange':
         if (void 0 !== o.info?.playerState) {
          const t = o.info.playerState;
          switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: o.info.currentTime, duration: o.info.duration }), t)) {
           case 1:
            e.onPlay?.();
            break;
           case 2:
            e.onPause?.();
            break;
           case 0:
            (e.onEnd?.(), e.stopOnEnd && 'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*'));
            break;
           case 3:
            e.onBuffering?.();
          }
         }
         break;
        case 'onError':
         if (o.info && 'errorCode' in o.info) {
          const n = o.info.errorCode;
          e.onError && e.onError(n);
         }
         break;
        case 'onPlaybackRateChange':
         void 0 !== o.info?.playbackRate && e.onPlaybackRateChange?.(o.info.playbackRate);
         break;
        case 'onPlaybackQualityChange':
         void 0 !== o.info?.playbackQuality && e.onPlaybackQualityChange?.(o.info.playbackQuality);
       }
      };
      window.addEventListener('message', o);
      const a = [],
       i = () => {
        'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
       },
       l = () => {
        r ||
         ((r = !0),
         i(),
         [100, 300, 600, 1200, 2400].forEach((e) => {
          a.push(setTimeout(i, e));
         }));
       };
      return (
       'object' == typeof n && n?.current
        ? (n.current.addEventListener('load', l), 'complete' === n.current.contentDocument?.readyState && l())
        : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
           a.push(setTimeout(i, e));
          }),
       () => {
        (window.removeEventListener('message', o), a.forEach(clearTimeout), 'object' == typeof n && n?.current && n.current.removeEventListener('load', l));
       }
      );
     }, [s, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, u, n]),
     (0, r.jsxs)(r.Fragment, {
      children: [
       !e.lazyLoad && (0, r.jsx)('link', { rel: $, href: w, as: 'image' }),
       (0, r.jsx)(r.Fragment, { children: t && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('link', { rel: 'preconnect', href: v }), (0, r.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), N && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, r.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, r.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: i(e.id, u, w, v, e.seo) } }),
       R && !e.playlist && (0, r.jsx)('noscript', { children: (0, r.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${u} on YouTube`, children: ['Watch "', u, '" on YouTube'] }) }),
       (0, r.jsxs)(P, {
        onPointerOver: () => {
         t || l(!0);
        },
        onClick: E,
        className: `${z} ${s ? _ : ''}`,
        'data-title': u,
        role: s || e.lazyLoad ? void 0 : 'img',
        'aria-label': s ? void 0 : `${u} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${w})` }), '--aspect-ratio': (A / S) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !s && (0, r.jsx)('img', { src: w, alt: `${u} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !s && (0, r.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && s) && (0, r.jsx)('button', { type: 'button', className: L, 'aria-label': `${m} ${u}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, onClick: E, children: (0, r.jsx)('span', { className: 'lty-visually-hidden', children: m }) }), s && (0, r.jsx)('iframe', { ref: n, className: C, title: u, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: j, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  28369(e, n, t) {
   t.d(n, { M: () => d });
   var r = t(46447),
    o = t(16194),
    a = t(30758),
    i = t(56528);
   const l = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
     { types: ['maybe-class-name'], style: { color: 'var(--nlds-code-block-maybe-class-name-color, var(--nlds-code-block-class-name-color))' } },
     { types: ['comment'], style: { color: 'var(--nlds-code-block-comment-color)', fontStyle: 'italic' } },
     { types: ['prolog'], style: { color: 'var(--nlds-code-block-prolog-color)', fontStyle: 'italic' } },
     { types: ['cdata'], style: { color: 'var(--nlds-code-block-cdata-color)', fontStyle: 'italic' } },
     { types: ['punctuation'], style: { color: 'var(--nlds-code-block-punctuation-color)' } },
     { types: ['deleted'], style: { color: 'var(--nlds-code-block-deleted-color)', fontStyle: 'italic' } },
     { types: ['symbol'], style: { color: 'var(--nlds-code-block-symbol-color)' } },
     { types: ['property'], style: { color: 'var(--nlds-code-block-property-color)' } },
     { types: ['tag'], style: { color: 'var(--nlds-code-block-tag-color)' } },
     { types: ['operator'], style: { color: 'var(--nlds-code-block-operator-color)' } },
     { types: ['keyword'], style: { color: 'var(--nlds-code-block-keyword-color)' } },
     { types: ['boolean'], style: { color: 'var(--nlds-code-block-boolean-color)' } },
     { types: ['number'], style: { color: 'var(--nlds-code-block-number-color)' } },
     { types: ['constant'], style: { color: 'var(--nlds-code-block-constant-color)' } },
     { types: ['function'], style: { color: 'var(--nlds-code-block-function-color)' } },
     { types: ['builtin'], style: { color: 'var(--nlds-code-block-builtin-color)' } },
     { types: ['char'], style: { color: 'var(--nlds-code-block-char-color)' } },
     { types: ['selector'], style: { color: 'var(--nlds-code-block-selector-color)', fontStyle: 'italic' } },
     { types: ['doctype'], style: { color: 'var(--nlds-code-block-doctype-color)', fontStyle: 'italic' } },
     { types: ['attr-name'], style: { color: 'var(--nlds-code-block-attr-name-color)', fontStyle: 'italic' } },
     { types: ['inserted'], style: { color: 'var(--nlds-code-block-inserted-color)', fontStyle: 'italic' } },
     { types: ['string'], style: { color: 'var(--nlds-code-block-string-color)' } },
     { types: ['url'], style: { color: 'var(--nlds-code-block-url-color)' } },
     { types: ['entity'], style: { color: 'var(--nlds-code-block-entity-color)' } },
     { types: ['class-name'], style: { color: 'var(--nlds-code-block-class-name-color)' } },
     { types: ['atrule'], style: { color: 'var(--nlds-code-block-atrule-color)' } },
     { types: ['attr-value'], style: { color: 'var(--nlds-code-block-attr-value-color)' } },
     { types: ['regex'], style: { color: 'var(--nlds-code-block-regex-color)' } },
     { types: ['important'], style: { color: 'var(--nlds-code-block-important-color)', fontWeight: 'bold' } },
     { types: ['variable'], style: { color: 'var(--nlds-code-block-variable-color)' } },
     { types: ['bold'], style: { fontWeight: 'bold' } },
     { types: ['italic'], style: { fontStyle: 'italic' } },
    ],
   };
   var s = t(86070);
   function d({ lineNumber: e, syntax: n, textContent: t, trim: d }) {
    let c = t;
    const { title: h, type: u } = (0, a.useContext)(i.x),
     p = (0, a.useId)();
    return (d && (c = c.trim()), (0, s.jsx)(o.f4, { theme: l, code: c, language: n || '', children: ({ style: n, tokens: t, getLineProps: o, getTokenProps: a }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, s.jsx)(r.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: n, children: t.map((n, t) => (0, s.jsxs)('span', { ...o({ line: n }), children: [e && (0, s.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, s.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  30662(e, n, t) {
   t.d(n, { D4: () => R, GP: () => _, KC: () => T, Nd: () => w, Rt: () => C, Vj: () => A, Wk: () => D, bz: () => S, cB: () => L, e5: () => M, hY: () => E, jK: () => I, jP: () => $, ob: () => V, rI: () => N, t4: () => P, vP: () => z, vg: () => O });
   var r = t(92081),
    o = t(90578),
    a = t(96345),
    i = t(64249),
    l = t(4603),
    s = t(91525),
    d = t(23436),
    c = t(1375),
    h = t(4077),
    u = t(58315),
    p = t(73563),
    m = t(35193),
    g = t(82999),
    b = t(13088),
    v = t(43864),
    j = t(24214),
    f = t(79532),
    x = t(60529),
    y = t(86070);
   const k = { width: '1em', height: '1em' },
    w = () => (0, y.jsx)(r.A, { ...k }),
    _ = () => (0, y.jsx)(o.A, { ...k }),
    N = () => (0, y.jsx)(a.A, { ...k }),
    A = () => (0, y.jsx)(i.A, { ...k }),
    S = () => (0, y.jsx)(l.A, { ...k }),
    C = () => (0, y.jsx)(s.A, { ...k }),
    L = () => (0, y.jsx)(d.A, { ...k }),
    z = () => (0, y.jsx)(c.A, { ...k }),
    I = () => (0, y.jsx)(h.A, { ...k }),
    $ = () => (0, y.jsx)(u.A, { ...k }),
    P = () => (0, y.jsx)(p.A, { ...k }),
    R = () => (0, y.jsx)(m.A, { ...k }),
    E = () => (0, y.jsx)(g.A, { ...k }),
    T = () => (0, y.jsx)(b.A, { ...k }),
    D = () => (0, y.jsx)(v.A, { ...k }),
    M = () => (0, y.jsx)(j.A, { ...k }),
    V = () => (0, y.jsx)(f.A, { ...k }),
    O = () => (0, y.jsx)(x.A, { ...k });
  },
  32065(e, n, t) {
   t.d(n, { I: () => r.In });
   var r = t(29181);
  },
  46847(e, n, t) {
   t.d(n, { $: () => r.$n });
   var r = t(50805);
  },
  56528(e, n, t) {
   t.d(n, { $: () => c, x: () => d });
   var r = t(30662),
    o = t(46447),
    a = t(13526),
    i = t(45795),
    l = t(30758),
    s = t(86070);
   const d = (0, l.createContext)({}),
    c = ({ title: e, appearance: n, description: t, children: l, figure: c = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = c ? 'figure' : 'div',
      p = c ? 'figcaption' : 'div',
      m = 'string' == typeof t ? (0, s.jsx)(i.oz, { components: { a: o.N_ }, children: t }) : t;
     return (0, s.jsxs)(u, { className: (0, a.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, s.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(o.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, s.jsx)(r.jP, {}) }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, s.jsx)(o.fz, { children: e })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(o.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, s.jsx)(r.jK, {}) }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, s.jsx)(o.fz, { children: e })] }), m] }), (0, s.jsx)('div', { className: 'nlds-guideline__example', children: (0, s.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: l }) })] });
    };
  },
  56672(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => a });
   var r = t(86070),
    o = t(18439);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function i(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  81682(e, n, t) {
   (t.r(n), t.d(n, { assets: () => j, contentTitle: () => v, default: () => y, frontMatter: () => b, metadata: () => r, toc: () => f }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/description/content/index","title":"Gebruik alleen tekst in descriptions","description":"Richtlijnen voor de inhoud van beschrijvingen in een formulier.","source":"@site/docs/richtlijnen/formulieren/description/2-content/index.mdx","sourceDirName":"richtlijnen/formulieren/description/2-content","slug":"/richtlijnen/formulieren/descriptions/inhoud","permalink":"/richtlijnen/formulieren/descriptions/inhoud","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/2-content/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Gebruik alleen tekst in descriptions","title_sm":"Inhoud description","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Inhoud description","pagination_label":"Inhoud description","description":"Richtlijnen voor de inhoud van beschrijvingen in een formulier.","slug":"/richtlijnen/formulieren/descriptions/inhoud","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Koppel description","permalink":"/richtlijnen/formulieren/descriptions/koppelen"},"next":{"title":"Plaatsing description","permalink":"/richtlijnen/formulieren/descriptions/plaatsing"}}');
   var o = t(86070),
    a = t(18439),
    i = t(56672),
    l = t(87682),
    s = t(56528);
   function d(e) {
    const n = { h2: 'h2', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(s.$, { appearance: 'dont', title: 'Een opsomming in een description.', children: (0, o.jsx)(l.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'wachtwoord-dont', children: 'Nieuw wachtwoord' }) }), (0, o.jsxs)('div', { id: 'description-wachtwoord-dont', children: [(0, o.jsx)('p', { children: 'Je wachtwoord moet de volgende elementen bevatten:' }), (0, o.jsxs)('ul', { children: [(0, o.jsx)('li', { children: 'Minimaal 9 karakters.' }), (0, o.jsx)('li', { children: 'Een hoofdletter.' }), (0, o.jsx)('li', { children: 'Een cijfer.' })] })] }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'wachtwoord-dont', type: 'password', name: 'nieuw-wachtwoord', autocomplete: 'new-password', 'aria-describedby': 'description-wachtwoord-dont' }) })] }) }) }), '\n', (0, o.jsx)(s.$, { appearance: 'do', title: 'Alleen tekst in een description.', children: (0, o.jsx)(l.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }) }), (0, o.jsx)('p', { id: 'description-wachtwoord', children: 'Je wachtwoord moet de volgende elementen bevatten: minimaal 9 karakters, een hoofdletter en een cijfer.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', autocomplete: 'new-password', 'aria-describedby': 'description-wachtwoord' }) })] }) }) }), '\n', (0, o.jsx)(s.$, { appearance: 'do', title: 'Zet informatie in rich tekst boven het formulier en onder het bijbehorende kopje.', children: (0, o.jsx)(l.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('h3', { children: 'Open een spaarrekening' }), (0, o.jsx)('p', { children: 'Om een spaarrekening te openen hebben we de volgende gegevens nodig:' }), (0, o.jsxs)('ul', { children: [(0, o.jsx)('li', { children: 'Het nummer van je paspoort of identiteitskaart.' }), (0, o.jsx)('li', { children: 'Je Burgerservicenummer (BSN), dit kun je vinden op je paspoort of identiteitskaart.' }), (0, o.jsx)('li', { children: 'Je adresgegevens.' }), (0, o.jsx)('li', { children: 'Je e-mailadres.' })] }), (0, o.jsx)('form', { children: '[het formulier]' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   var h = t(7891);
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'gebruik-alleen-tekst-in-descriptions', children: 'Gebruik alleen tekst in descriptions' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Het HTML-attribuut ', (0, o.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby', children: 'aria-describedby' }), ", waarmee je een description toevoegt, mag alleen 'platte tekst' bevatten. Platte tekst staat voor tekst zonder verdere opmaak en heeft geen extra HTML voor opmaak of betekenis."] }), '\n', (0, o.jsxs)(n.p, { children: ['Opgemaakte tekst noemen we ', (0, o.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/289', children: "'rich text'" }), '. ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' geven deze informatie niet goed door of slaan het zelfs helemaal over in een description.'] }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Let op' }), ': NL Design System adviseert ook geen tooltip te gebruiken voor het verbergen van ', (0, o.jsx)(n.strong, { children: 'essenti\xeble informatie' }), '. Zie de discussie over ', (0, o.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/298', children: 'Toggletip' }), ' op GitHub.'] }), '\n', (0, o.jsx)(n.h2, { id: 'demo-video', children: 'Demo video' }), '\n', (0, o.jsx)(n.p, { children: 'In de demo-video kun je zien en/of horen dat VoiceOver de opsomming uit de description overslaat als een formulierveld de toetsenbordfocus krijgt. NVDA in Firefox doet hetzelfde.' }), '\n', (0, o.jsx)(h.L, { id: 'ejiB-JSJzPE', title: 'Demo video opsomming uit de description in VoiceOver' }), '\n', (0, o.jsx)(n.h2, { id: 'description-beslisboom', children: 'Description-beslisboom' }), '\n', (0, o.jsx)(n.p, { children: 'Wat zijn de opties om informatie en uitleg toe te voegen aan een formulier en de invoervelden?\nVolg de beslisboom.' }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-1-gaat-de-informatie-over-alle-formuliervelden', children: 'Vraag 1: Gaat de informatie over alle formuliervelden?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie vlak boven het formulier en onder het bijbehorende kopje. Je kunt hierbij rich text gebruiken.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 2.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-2-gaat-de-informatie-over-een-enkel-veld-of-een-groep-velden-gegroepeerd-in-een-fieldset', children: 'Vraag 2: Gaat de informatie over een enkel veld of een groep velden, gegroepeerd in een fieldset?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Een enkel veld' }), ': Ga naar vraag 3a.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Een groep velden' }), ': Ga naar vraag 4a.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-3a-is-de-informatie-bij-het-formulierveld-platte-tekst', children: 'Vraag 3a: Is de informatie bij het formulierveld platte tekst?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie in een description.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 3b.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-3b-is-het-noodzakelijk-dat-de-informatie-bij-het-formulierveld-rich-text-bevat', children: 'Vraag 3b: Is het noodzakelijk dat de informatie bij het formulierveld rich text bevat?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Ja' }), ': Overweeg een ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/', children: 'meerstappenformulier' }), ', waarbij de informatie vlak boven het formulier en onder het bijbehorende kopje van de betreffende stap staat.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nee' }), ': Herschrijf de tekst van de description, zodat deze alleen platte tekst bevat.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-4a-is-de-informatie-bij-de-gegroepeerde-velden-platte-tekst', children: 'Vraag 4a: Is de informatie bij de gegroepeerde velden platte tekst?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie in een description gekoppelt aan de ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset/', children: (0, o.jsx)(n.code, { children: '<fieldset>' }) }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 4b.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-4b-is-het-noodzakelijk-dat-de-informatie-bij-de-gegroepeerde-velden-rich-text-bevat', children: 'Vraag 4b: Is het noodzakelijk dat de informatie bij de gegroepeerde velden rich text bevat?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Ja' }), ': Overweeg een ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/', children: 'meerstappenformulier' }), ', waarbij de informatie vlak boven het formulier van de betreffende stap staat.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nee' }), ': Herschrijf de tekst van de description, zodat deze toch alleen platte tekst bevat. Dan ben je er zeker van dat \xe0lle gebruikers de informatie kunnen lezen.'] }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   const b = { title: 'Gebruik alleen tekst in descriptions', title_sm: 'Inhoud description', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Inhoud description', pagination_label: 'Inhoud description', description: 'Richtlijnen voor de inhoud van beschrijvingen in een formulier.', slug: '/richtlijnen/formulieren/descriptions/inhoud', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    f = [{ value: 'Demo video', id: 'demo-video', level: 2 }, { value: 'Description-beslisboom', id: 'description-beslisboom', level: 2 }, { value: 'Vraag 1: Gaat de informatie over alle formuliervelden?', id: 'vraag-1-gaat-de-informatie-over-alle-formuliervelden', level: 3 }, { value: 'Vraag 2: Gaat de informatie over een enkel veld of een groep velden, gegroepeerd in een fieldset?', id: 'vraag-2-gaat-de-informatie-over-een-enkel-veld-of-een-groep-velden-gegroepeerd-in-een-fieldset', level: 3 }, { value: 'Vraag 3a: Is de informatie bij het formulierveld platte tekst?', id: 'vraag-3a-is-de-informatie-bij-het-formulierveld-platte-tekst', level: 3 }, { value: 'Vraag 3b: Is het noodzakelijk dat de informatie bij het formulierveld rich text bevat?', id: 'vraag-3b-is-het-noodzakelijk-dat-de-informatie-bij-het-formulierveld-rich-text-bevat', level: 3 }, { value: 'Vraag 4a: Is de informatie bij de gegroepeerde velden platte tekst?', id: 'vraag-4a-is-de-informatie-bij-de-gegroepeerde-velden-platte-tekst', level: 3 }, { value: 'Vraag 4b: Is het noodzakelijk dat de informatie bij de gegroepeerde velden rich text bevat?', id: 'vraag-4b-is-het-noodzakelijk-dat-de-informatie-bij-de-gegroepeerde-velden-rich-text-bevat', level: 3 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function x(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(g, {}), '\n', (0, o.jsx)(i.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(x, { ...e }) }) : x();
   }
  },
  87682(e, n, t) {
   t.d(n, { H: () => w });
   var r = t(28369),
    o = t(46447),
    a = t(13526),
    i = t(68148),
    l = t(9016),
    s = t(69303),
    d = t(91635),
    c = t(30734),
    h = t(30758),
    u = t(31186),
    p = t(65904),
    m = t.n(p),
    g = t(14881),
    b = t(46847),
    v = t(86070);
   const j = ({ label: e, labelId: n, className: t, colorScheme: r, forcedColorsAdjust: o = !1, children: i, dangerouslySetInnerHTML: l, ...s }) => (0, v.jsxs)('figure', { className: (0, a.A)('ma-html-image', t), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...s, children: [e && (0, v.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, v.jsx)('div', { className: (0, a.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === r, 'ma-html-image__body--color-scheme-light': 'light' === r, 'ma-html-image__body--forced-colors-adjust': o }), inert: 'true', dangerouslySetInnerHTML: l, 'aria-hidden': 'true', children: i })] });
   var f = t(68197);
   const x = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const w = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: r, copyCode: o, colorScheme: i, defaultExpandedCode: l, designTokens: s, forcedColorsAdjust: d = !0, label: c }) => {
       const u = 'string' == typeof t ? t : r || '',
        p = 'string' == typeof t ? m().highlight(t, m().languages[e], e) : m().highlight(r || '', m().languages[e], e),
        x = (0, v.jsx)(f.b, { Component: 'div', className: (0, a.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === i, 'ma-canvas-astro__example--color-scheme-light': 'light' === i }), style: s, dangerouslySetInnerHTML: { __html: u } });
       return (0, v.jsxs)('div', { className: (0, a.A)('ma-canvas-astro', n), children: [c ? (0, v.jsx)(j, { forcedColorsAdjust: d, label: c, labelId: c ? (0, h.useId)() : void 0, children: x }) : x, (0, v.jsx)(g.n, { children: (0, v.jsxs)(g.K, { label: 'Code', open: l, children: [(0, v.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: p } }) }), 'allow' === o && (0, v.jsx)(b.$, { 'data-copy-code': u, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: p = !0, children: m, container: g = 'document', language: b, designTokens: j }) => {
       const f = 'function' == typeof m ? m() : m,
        w = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        _ = 'string' == typeof e ? e : u.qV(w || f),
        [N, A] = (0, h.useState)(_),
        [S, C] = (0, h.useState)(t);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await c.Ay.format(_, { parser: b, plugins: [i.A, l.Ay, s.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [_]);
       const L = (0, h.useId)();
       let z = h.Fragment;
       return (
        'paragraph' === g ? (z = x) : 'document' === g ? (z = y) : 'surface' === g && (z = k),
        (0, v.jsxs)('div', {
         className: (0, a.A)('nlds-canvas'),
         children: [
          f && (0, v.jsx)('div', { className: (0, a.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: j, children: (0, v.jsx)(z, { children: (0, v.jsx)(o.v$, { children: f }) }) }) }),
          p &&
           (0, v.jsx)('div', {
            className: (0, a.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(o.$n, {
             className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!S);
             },
             'aria-expanded': S,
             'aria-controls': L,
             children: S ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, v.jsxs)('div', {
            className: (0, a.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: L,
            hidden: !S,
            children: [
             (0, v.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: b, textContent: N, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, a.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(o.$n, {
                className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(N).catch((e) => console.error('Copy code failed', e));
                },
                children: 'Kopieer',
               }),
              }),
            ],
           }),
         ],
        })
       );
      };
  },
 },
]);
