'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [57255],
 {
  18439(e, n, t) {
   t.d(n, { R: () => a, x: () => l });
   var s = t(30758);
   const i = {},
    r = s.createContext(i);
   function a(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), s.createElement(r.Provider, { value: n }, e.children));
   }
  },
  75397(e, n, t) {
   t.d(n, { L: () => o });
   var s = t(30758),
    i = t(86070);
   const r = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function a(e, n, t, s, i) {
    const r = { '@context': 'https://schema.org', '@type': 'VideoObject', name: (null == i ? void 0 : i.name) || n, thumbnailUrl: [(null == i ? void 0 : i.thumbnailUrl) || t], embedUrl: (null == i ? void 0 : i.embedUrl) || `${s}/embed/${e}`, contentUrl: (null == i ? void 0 : i.contentUrl) || `https://www.youtube.com/watch?v=${e}`, ...((null == i ? void 0 : i.description) && { description: i.description }), ...((null == i ? void 0 : i.uploadDate) && { uploadDate: i.uploadDate }), ...((null == i ? void 0 : i.duration) && { duration: i.duration }) };
    return JSON.stringify(r);
   }
   const l = s.forwardRef(function (e, n) {
     const [t, l] = s.useState(!1),
      [o, d] = s.useState(e.alwaysLoadIframe || !1),
      m = encodeURIComponent(e.id),
      g = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      c = e.title,
      u = e.poster || 'hqdefault',
      h = e.announce || 'Watch',
      k = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      p = s.useMemo(() => {
       const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(k ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.playlist ? { list: m } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
          n.append(t, e);
         }),
        n
       );
      }, [e.muted, k, e.enableJsApi, e.playlist, m, e.params]),
      y = s.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      v = s.useMemo(() => (e.playlist ? `${y}/embed/videoseries?${p.toString()}` : `${y}/embed/${m}?${p.toString()}`), [e.playlist, y, m, p]),
      b = !e.thumbnail && !e.playlist && 'maxresdefault' === u,
      j = e.webp ? 'webp' : 'jpg',
      w = e.webp ? 'vi_webp' : 'vi',
      f = b
       ? ((e, n, t, i = 'maxresdefault') => {
          const [a, l] = (0, s.useState)('');
          return (
           (0, s.useEffect)(() => {
            const s = `https://img.youtube.com/${n}/${e}/${i}.${t}`,
             a = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
             o = r[i],
             d = new Image();
            ((d.onload = () => {
             d.width < o ? l(a) : l(s);
            }),
             (d.onerror = () => l(a)),
             (d.src = s));
           }, [e, n, t, i]),
           a
          );
         })(e.id, w, j, u)
       : null,
      S = s.useMemo(() => e.thumbnail || f || `https://i.ytimg.com/${w}/${e.playlist ? g : m}/${u}.${j}`, [e.thumbnail, f, w, e.playlist, g, m, u, j]),
      x = e.activatedClass || 'lyt-activated',
      D = e.adNetwork || !1,
      L = e.aspectHeight || 9,
      z = e.aspectWidth || 16,
      N = e.iframeClass || '',
      O = e.playerClass || 'lty-playbtn',
      _ = e.wrapperClass || 'yt-lite',
      $ = s.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      I = e.rel ? 'prefetch' : 'preload',
      R = e.containerElement || 'article',
      C = !1 !== e.noscriptFallback;
     return (
      s.useEffect(() => {
       o && ($(), e.focusOnLoad && 'object' == typeof n && null != n && n.current && n.current.focus());
      }, [o, $, e.focusOnLoad, n]),
      (0, i.jsxs)(i.Fragment, {
       children: [
        !e.lazyLoad && (0, i.jsx)('link', { rel: I, href: S, as: 'image' }),
        (0, i.jsx)(i.Fragment, { children: t && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('link', { rel: 'preconnect', href: y }), (0, i.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), D && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, i.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: a(e.id, c, S, y, e.seo) } }),
        C && !e.playlist && (0, i.jsx)('noscript', { children: (0, i.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${c} on YouTube`, children: ['Watch "', c, '" on YouTube'] }) }),
        (0, i.jsxs)(R, {
         onPointerOver: () => {
          t || l(!0);
         },
         onClick: () => {
          o || d(!0);
         },
         className: `${_} ${o ? x : ''}`,
         'data-title': c,
         role: o ? void 0 : 'img',
         'aria-label': o ? void 0 : `${c} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${S})` }), '--aspect-ratio': (L / z) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !o && (0, i.jsx)('img', { src: S, alt: `${c} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), (0, i.jsx)('button', { type: 'button', className: O, 'aria-label': `${h} ${c}`, 'aria-hidden': o || void 0, tabIndex: o ? -1 : 0, children: (0, i.jsx)('span', { className: 'lty-visually-hidden', children: h }) }), o && (0, i.jsx)('iframe', { ref: n, className: N, title: c, width: '560', height: '315', style: { border: 0 }, allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: v, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    o = ({ id: e, title: n, ...t }) => {
     const r = (0, s.useCallback)((e) => {
      if (!e) return;
      const n = e.querySelector('[role="img"]');
      n && n.setAttribute('role', 'group');
      const t = new MutationObserver(() => {
       const n = e.querySelector('[role="img"]');
       n && (n.setAttribute('role', 'group'), t.disconnect());
      });
      t.observe(e, { attributes: !0, subtree: !0, attributeFilter: ['role'] });
     }, []);
     return (0, i.jsx)('div', { ref: r, children: (0, i.jsx)(l, { adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...t }) });
    };
  },
  84800(e, n, t) {
   (t.r(n), t.d(n, { assets: () => m, contentTitle: () => d, default: () => u, frontMatter: () => o, metadata: () => s, toc: () => g }));
   const s = JSON.parse('{"id":"community/events/design-systems-week/eerdere-edities/2022","title":"Design Systems Week 2022","description":"Tijdens Design Systems Week 2022 met sprekers uit de NL Design System community. Gelukkig hebben we de video\'s nog!","source":"@site/docs/community/events/design-systems-week/eerdere-edities/2022.mdx","sourceDirName":"community/events/design-systems-week/eerdere-edities","slug":"/events/design-systems-week-2022","permalink":"/events/design-systems-week-2022","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/eerdere-edities/2022.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Design Systems Week 2022","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2022","sidebar_position":4,"pagination_label":"Design Systems Week 2022","slug":"/events/design-systems-week-2022"},"sidebar":"community","previous":{"title":"Videos 2023","permalink":"/events/design-systems-week-2023/programma"},"next":{"title":"Design systems","permalink":"/community/design-systems"}}');
   var i = t(86070),
    r = t(18439),
    a = t(75397),
    l = t(46447);
   const o = { title: 'Design Systems Week 2022', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 2022, sidebar_position: 4, pagination_label: 'Design Systems Week 2022', slug: '/events/design-systems-week-2022' },
    d = 'Design Systems Week 2022',
    m = {},
    g = [
     { value: 'Wat is NL Design System?', id: 'wat-is-nl-design-system', level: 2 },
     { value: 'Samenwerken aan NL Design System', id: 'samenwerken-aan-nl-design-system', level: 2 },
     { value: 'RVO Design System', id: 'rvo-design-system', level: 2 },
     { value: 'Toegankelijkheid - Hidde de Vries', id: 'toegankelijkheid---hidde-de-vries', level: 2 },
     { value: 'Iconen op basis van gebruikersonderzoek', id: 'iconen-op-basis-van-gebruikersonderzoek', level: 2 },
     { value: 'Gemeente Utrecht Design System', id: 'gemeente-utrecht-design-system', level: 2 },
     { value: 'Belastingdienst Design System - Bold', id: 'belastingdienst-design-system---bold', level: 2 },
     { value: 'DSO-toolkit', id: 'dso-toolkit', level: 2 },
     { value: 'Gemeente Den Haag Design System', id: 'gemeente-den-haag-design-system', level: 2 },
     { value: 'NS Design System - Nessie', id: 'ns-design-system---nessie', level: 2 },
     { value: 'Open Formulieren en NL Design System', id: 'open-formulieren-en-nl-design-system', level: 2 },
    ];
   function c(e) {
    const n = { h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'design-systems-week-2022', children: 'Design Systems Week 2022' }) }), '\n', (0, i.jsx)(l.fz, { lead: !0, children: (0, i.jsx)(n.p, { children: "Tijdens Design Systems Week 2022 met sprekers uit de NL Design System community. Gelukkig hebben we de video's nog!" }) }), '\n', (0, i.jsx)(n.h2, { id: 'wat-is-nl-design-system', children: 'Wat is NL Design System?' }), '\n', (0, i.jsx)(n.p, { children: 'In deze eerste sessie openen we de Design Systems week en leggen Angela Imhof en Robbert Broersma uit waarom NL Design System er is, wat NL Design System is en wat jij ermee kunt.' }), '\n', (0, i.jsx)(a.L, { id: 'Fr8DAm7GDm0', title: 'Wat is NL Design System' }), '\n', (0, i.jsx)(n.h2, { id: 'samenwerken-aan-nl-design-system', children: 'Samenwerken aan NL Design System' }), '\n', (0, i.jsx)(n.p, { children: 'In deze sessie leggen Robbert Broersma, Yolijn van der Kolk en Jeffrey Lauwers van het kernteam uit hoe ze graag willen samenwerken. Hoe bouwen we nu samen aan een beter, toegankelijker en gebruiksvriendelijker design system? Wat bedoelen we met het Estafettemodel?' }), '\n', (0, i.jsx)(a.L, { id: 'ffKtQO_zlZE', title: 'Samenwerken aan NL Design System' }), '\n', (0, i.jsx)(n.h2, { id: 'rvo-design-system', children: 'RVO Design System' }), '\n', (0, i.jsx)(n.p, { children: 'Robert Roose is design lead bij de Rijksdienst voor Ondernemend Nederland (RVO), waar hij verantwoordelijk is voor het ontwikkelen van een design system gebaseerd op de Rijkshuisstijl. Hij verteld hoe de RVO het design system gebruikt en verder ontwikkelt en hoe de samenwerking met NL Design System hen vergaat.' }), '\n', (0, i.jsx)(a.L, { id: 'p5cuPu1wJdg', title: 'RVO Design System' }), '\n', (0, i.jsx)(n.h2, { id: 'toegankelijkheid---hidde-de-vries', children: 'Toegankelijkheid - Hidde de Vries' }), '\n', (0, i.jsx)(n.p, { children: 'Componenten zijn een revolutie gebleken voor onze manier van werken, omdat het wiel uitvinden nu nog meer \xe9\xe9n keer hoeft. Met een succesvolle aanpak scheelt het teams veel tijd. Samenwerken aan componenten maakt ook mogelijk een positieve impact te hebben op toegankelijkheid. Deze presentatie verkent praktische strategie\xebn om toegankelijke componenten te maken, zodat meer mensen je digitale dienstverlening goed kunnen gebruiken.\nMet zijn ervaring als front-end developer en toegankelijkheidsspecialist kan Hidde je alles vertellen over het toepassen van toegankelijkheidseisen binnen design systems. In deze sessie' }), '\n', (0, i.jsx)(a.L, { id: 'Hjn6IzmDTsY', title: 'Toegankelijkheid - Hidde de Vries' }), '\n', (0, i.jsx)(n.h2, { id: 'iconen-op-basis-van-gebruikersonderzoek', children: 'Iconen op basis van gebruikersonderzoek' }), '\n', (0, i.jsx)(n.p, { children: 'Martijn Rietveld is mede-oprichter van OpenGemeenten. OpenGemeenten bouwt samen met gemeenten aan veilige en toegankelijke online dienstverlening. Martijn vertelt hoe OpenGemeenten iconen op basis van gebruikersonderzoek ontwikkelt en hoe ze deze iconen in samenwerking verbeteren en delen met anderen.' }), '\n', (0, i.jsx)(a.L, { id: 'WPAcvV5YKF0', title: 'Iconen op basis van gebruikersonderzoek' }), '\n', (0, i.jsx)(n.h2, { id: 'gemeente-utrecht-design-system', children: 'Gemeente Utrecht Design System' }), '\n', (0, i.jsx)(n.p, { children: 'Jeroen du Chatinier, UX-designer bij de gemeente Utrecht, vertelt in deze online sessie hoe Utrecht een design system heeft gebouwd en hoe zij het doorontwikkelen.' }), '\n', (0, i.jsx)(a.L, { id: '8-GYHyCyTP4', title: 'Gemeente Utrecht Design System' }), '\n', (0, i.jsx)(n.h2, { id: 'belastingdienst-design-system---bold', children: 'Belastingdienst Design System - Bold' }), '\n', (0, i.jsx)(n.p, { children: 'De afgelopen jaren hebben we hard gewerkt aan een volwaardig design system. Nu krijgen onze verschillende websites, zoals de mijn-omgevingen en informatieve website een uniforme look and feel. Het design system helpt ons om de gebruikerservaring en toegankelijkheid te verbeteren.\nRealisatie is 1 ding, maar het is ook belangrijk dat het Design System goed gebruikt wordt. Dat gebruikers mee kunnen denken en bijdragen leveren aan Bold.' }), '\n', (0, i.jsx)(a.L, { id: 'YbVBDupVuwQ', title: 'Belastingdienst Design System - Bold' }), '\n', (0, i.jsx)(n.h2, { id: 'dso-toolkit', children: 'DSO-toolkit' }), '\n', (0, i.jsx)(n.p, { children: 'Het Digitaal Stelsel Omgevingswet (DSO) is een stelsel van vele applicaties dat uitvoering van de nieuwe Omgevingswet gaat ondersteunen. Het design system (DSO-Toolkit) speelt een cruciale rol in de ontwikkeling van een gebruiksvriendelijk en toegankelijk omgevingsloket.\nTijdens de presentatie zoomen we in op de rol van het design system binnen het Agile-ontwikkelproces (SAFE) en hoe we samenwerken aan een toegankelijke gebruikservaring voor het gehele omgevingsloket. Deze presentatie wordt gegeven door Sander Haaksma, Lead UX Digitaal Stelsel Omgevingswet.' }), '\n', (0, i.jsx)(a.L, { id: '5I_UFoZrxgM', title: 'DSO-toolkit' }), '\n', (0, i.jsx)(n.h2, { id: 'gemeente-den-haag-design-system', children: 'Gemeente Den Haag Design System' }), '\n', (0, i.jsx)(n.p, { children: 'Rozerin Ayerdem en Youri van Heumen van de gemeente Den Haag werken sinds het begin samen met NL Design System. Als digital designer en front-end developer kunnen zij je in deze online sessie vertellen hoe zij hun kennis delen om samen aan een beter NL Design System te bouwen.' }), '\n', (0, i.jsx)(a.L, { id: 'MDAvhU_WCgI', title: 'Gemeente Den Haag Design System' }), '\n', (0, i.jsx)(n.h2, { id: 'ns-design-system---nessie', children: 'NS Design System - Nessie' }), '\n', (0, i.jsx)(n.p, { children: 'In deze presentatie vertelt Digital Product Designer Jelle Pieter de Graaf alles over de ontwikkeling van Nessie. wereldklasse. Een design system zorgt ervoor dat je nieuwe oplossingen in een handomdraai kunt ontwerpen en ontwikkelen. En dat designs consistent zijn over alle platformen heen. Precies de problemen die NS wilde oplossen.' }), '\n', (0, i.jsx)(a.L, { id: 'hh0tG_Q2k8U', title: 'NS Design System - Nessie' }), '\n', (0, i.jsx)(n.h2, { id: 'open-formulieren-en-nl-design-system', children: 'Open Formulieren en NL Design System' }), '\n', (0, i.jsx)(n.p, { children: 'Sergei Maertens werkt als Django-developer bij Maykin Media. In deze sessie vertelt hij alles over Open Formulieren: wat is het? Hoe werkt het met een design system? Wat is de huidige status van de gebruikte technologie en hoe is de samenwerking met NL Design System?' }), '\n', (0, i.jsx)(a.L, { id: 'DnFOGFCnzes', title: 'Open Formulieren en NL Design System' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
