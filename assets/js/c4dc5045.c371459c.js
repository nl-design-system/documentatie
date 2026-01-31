'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [92043],
 {
  4258(e, n, t) {
   t.d(n, { L: () => a });
   var i = t(78236),
    o = t(86070);
   const a = ({ id: e, title: n, ...t }) => (0, o.jsx)(i.A, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: e, title: n, poster: 'maxresdefault', ...t });
  },
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => l });
   var i = t(30758);
   const o = {},
    a = i.createContext(o);
   function r(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), i.createElement(a.Provider, { value: n }, e.children));
   }
  },
  53838(e, n, t) {
   (t.r(n), t.d(n, { assets: () => s, contentTitle: () => d, default: () => u, frontMatter: () => l, metadata: () => i, toc: () => c }));
   const i = JSON.parse('{"id":"handboek/designer/zelf-componenten-uitbreiden","title":"Zelf componenten uitbreiden \xb7 Designer \xb7 Handboek","description":"Informatie voor designers over hoe je zelf componenten kunt uitbreiden in Figma met design tokens.","source":"@site/docs/handboek/designer/zelf-componenten-uitbreiden.mdx","sourceDirName":"handboek/designer","slug":"/handboek/designer/zelf-componenten-uitbreiden","permalink":"/handboek/designer/zelf-componenten-uitbreiden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/designer/zelf-componenten-uitbreiden.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Zelf componenten uitbreiden \xb7 Designer \xb7 Handboek","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Zelf componenten uitbreiden","sidebar_position":4,"pagination_label":"Zelf componenten uitbreiden","description":"Informatie voor designers over hoe je zelf componenten kunt uitbreiden in Figma met design tokens.","slug":"/handboek/designer/zelf-componenten-uitbreiden","keywords":["index","designer","meedoen","componenten","figma","design tokens"]},"sidebar":"handboek","previous":{"title":"Zelf een thema maken","permalink":"/handboek/designer/zelf-thema-maken"},"next":{"title":"Zelf componenten maken","permalink":"/handboek/designer/zelf-componenten-maken"}}');
   var o = t(86070),
    a = t(18439),
    r = t(4258);
   const l = { title: 'Zelf componenten uitbreiden \xb7 Designer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Zelf componenten uitbreiden', sidebar_position: 4, pagination_label: 'Zelf componenten uitbreiden', description: 'Informatie voor designers over hoe je zelf componenten kunt uitbreiden in Figma met design tokens.', slug: '/handboek/designer/zelf-componenten-uitbreiden', keywords: ['index', 'designer', 'meedoen', 'componenten', 'figma', 'design tokens'] },
    d = 'Zelf componenten uitbreiden',
    s = {},
    c = [
     { value: 'Community component mist functionaliteit', id: 'community-component-mist-functionaliteit', level: 2 },
     { value: 'Candidate (of Hall of Fame) component mist functionaliteit', id: 'candidate-of-hall-of-fame-component-mist-functionaliteit', level: 2 },
     { value: 'Demo&#39;s', id: 'demos', level: 2 },
     { value: 'Community component Button uitbreiden', id: 'community-component-button-uitbreiden', level: 3 },
     { value: 'Candidate component Paragraph uitbreiden', id: 'candidate-component-paragraph-uitbreiden', level: 3 },
     { value: 'Handige links', id: 'handige-links', level: 2 },
     { value: 'Help deze documentatie te verbeteren', id: 'help-deze-documentatie-te-verbeteren', level: 2 },
     { value: 'Vragen', id: 'vragen', level: 2 },
    ];
   function m(e) {
    const n = { a: 'a', admonition: 'admonition', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', hr: 'hr', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'zelf-componenten-uitbreiden', children: 'Zelf componenten uitbreiden' }) }), '\n', (0, o.jsx)(n.p, { children: 'De Figma bibliotheken van NL Design System bevatten veel componenten en worden regelmatig aangevuld. Toch zijn er situaties waarin je zelf componenten wilt uitbreiden.' }), '\n', (0, o.jsx)(n.h2, { id: 'community-component-mist-functionaliteit', children: 'Community component mist functionaliteit' }), '\n', (0, o.jsx)(n.p, { children: 'Er is wel een Community component, maar die sluit niet goed aan bij de behoeften van jouw organisatie. Gebruik dan het bestaande ontwerp (of de code) als basis om daar verder op door te ontwikkelen. Neem daarbij zoveel mogelijk elementen uit de bestaande component over. Het is helemaal super om hierbij samen te werken met de organisatie die de oorspronkelijke component heeft ontwikkeld. Zo kan de uitbreiding eventueel direct worden doorgevoerd bij die organisatie.' }), '\n', (0, o.jsx)(n.h2, { id: 'candidate-of-hall-of-fame-component-mist-functionaliteit', children: 'Candidate (of Hall of Fame) component mist functionaliteit' }), '\n', (0, o.jsx)(n.p, { children: 'Net als bij een Community component kan een Candidate (of Hall of Fame) component een functionaliteit missen die jouw organisatie nodig heeft. Ook dan neem je zoveel mogelijk elementen uit de bestaande component over en deel je de wens voor deze uitbreiding met het kernteam.' }), '\n', (0, o.jsx)(n.h2, { id: 'demos', children: "Demo's" }), '\n', (0, o.jsx)(n.p, { children: 'Het is fijn om componenten uit te breiden volgens de afspraken van NL Design System: open source, met design tokens en de juiste naamgeving. Zo blijven componenten onderling uitwisselbaar.' }), '\n', (0, o.jsx)(n.p, { children: 'We hebben twee fictieve situaties uitgewerkt om te laten zien hoe je als designer zelf een component kunt uitbreiden.' }), '\n', (0, o.jsx)(n.admonition, { title: 'Goed om te weten', type: 'info', children: (0, o.jsx)(n.p, { children: "Is de uitbreiding alleen bedoeld om een idee uit te werken? Of om door middel van gebruikersonderzoek te achterhalen of deze uitbreiding goed werkt? Dan kun je een component natuurlijk ook simpelweg 'detachen' voordat je de uitbreiding 'officieel' doorvoerd." }) }), '\n', (0, o.jsx)(n.h3, { id: 'community-component-button-uitbreiden', children: 'Community component Button uitbreiden' }), '\n', (0, o.jsx)(n.p, { children: "In deze video laten we zien hoe Community component 'Button' wordt uitgebreid met design tokens voor schaduw." }), '\n', (0, o.jsx)(r.L, { id: 'DRj7WaZFOv0', title: 'Zelf componenten uitbreiden - Button' }), '\n', (0, o.jsx)(n.h3, { id: 'candidate-component-paragraph-uitbreiden', children: 'Candidate component Paragraph uitbreiden' }), '\n', (0, o.jsx)(n.p, { children: "In deze video laten we zien hoe Candidate component 'Paragraph' wordt uitgebreid met een aanvullende 'Purpose'." }), '\n', (0, o.jsx)(r.L, { id: 'f3Ng8qF0F3g', title: 'Zelf componenten uitbreiden - Paragraph' }), '\n', (0, o.jsx)(n.h2, { id: 'handige-links', children: 'Handige links' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/definition-of-done/', children: 'Definition of Done (Estafettemodel)' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/help-wanted-stappenplan/', children: 'Help Wanted stappenplan' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/community-stappenplan/voor-organisaties/', children: 'Community stappenplan voor organisaties' }) }), '\n'] }), '\n'] }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/handboek/componenten-gebruiken/', children: 'Componenten gebruiken' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/handboek/huisstijl/design-tokens/', children: 'Design tokens' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/handboek/designer/figma-hygiene/', children: 'Figma hygi\xebne' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: 'https://help.figma.com/', children: 'help.figma.com' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: 'https://forum.figma.com/', children: 'forum.figma.com' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: 'https://tokens.studio/', children: 'tokenstudio.com' }) }), '\n'] }), '\n', (0, o.jsx)(n.hr, {}), '\n', (0, o.jsx)(n.h2, { id: 'help-deze-documentatie-te-verbeteren', children: 'Help deze documentatie te verbeteren' }), '\n', (0, o.jsxs)(n.p, { children: ['Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via ', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie', children: 'GitHub' }), '.'] }), '\n', (0, o.jsx)(n.h2, { id: 'vragen', children: 'Vragen' }), '\n', (0, o.jsxs)(n.p, { children: ['Heb je een vraag? Twijfel niet en ', (0, o.jsx)(n.a, { href: '/project/kernteam/', children: 'neem contact op met het kernteam' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
  },
  78236(e, n, t) {
   t.d(n, { A: () => l });
   var i = t(86070),
    o = t(30758);
   const a = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function r(e, n, t, i, o) {
    const a = { '@context': 'https://schema.org', '@type': 'VideoObject', name: (null == o ? void 0 : o.name) || n, thumbnailUrl: [(null == o ? void 0 : o.thumbnailUrl) || t], embedUrl: (null == o ? void 0 : o.embedUrl) || `${i}/embed/${e}`, contentUrl: (null == o ? void 0 : o.contentUrl) || `https://www.youtube.com/watch?v=${e}`, ...((null == o ? void 0 : o.description) && { description: o.description }), ...((null == o ? void 0 : o.uploadDate) && { uploadDate: o.uploadDate }), ...((null == o ? void 0 : o.duration) && { duration: o.duration }) };
    return JSON.stringify(a);
   }
   const l = o.forwardRef(function (e, n) {
    const [t, l] = o.useState(!1),
     [d, s] = o.useState(e.alwaysLoadIframe || !1),
     c = encodeURIComponent(e.id),
     m = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     u = e.title,
     p = e.poster || 'hqdefault',
     h = e.announce || 'Watch',
     b = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     f = o.useMemo(() => {
      const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(b ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.playlist ? { list: c } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
         n.append(t, e);
        }),
       n
      );
     }, [e.muted, b, e.enableJsApi, e.playlist, c, e.params]),
     g = o.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     j = o.useMemo(() => (e.playlist ? `${g}/embed/videoseries?${f.toString()}` : `${g}/embed/${c}?${f.toString()}`), [e.playlist, g, c, f]),
     k = !e.thumbnail && !e.playlist && 'maxresdefault' === p,
     v = e.webp ? 'webp' : 'jpg',
     x = e.webp ? 'vi_webp' : 'vi',
     y = k
      ? ((e, n, t, i = 'maxresdefault') => {
         const [r, l] = (0, o.useState)('');
         return (
          (0, o.useEffect)(() => {
           const o = `https://img.youtube.com/${n}/${e}/${i}.${t}`,
            r = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
            d = a[i],
            s = new Image();
           ((s.onload = () => {
            s.width < d ? l(r) : l(o);
           }),
            (s.onerror = () => l(r)),
            (s.src = o));
          }, [e, n, t, i]),
          r
         );
        })(e.id, x, v, p)
      : null,
     w = o.useMemo(() => e.thumbnail || y || `https://i.ytimg.com/${x}/${e.playlist ? m : c}/${p}.${v}`, [e.thumbnail, y, x, e.playlist, m, c, p, v]),
     z = e.activatedClass || 'lyt-activated',
     C = e.adNetwork || !1,
     $ = e.aspectHeight || 9,
     _ = e.aspectWidth || 16,
     F = e.iframeClass || '',
     I = e.playerClass || 'lty-playbtn',
     D = e.wrapperClass || 'yt-lite',
     H = o.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     Z = e.rel ? 'prefetch' : 'preload',
     L = e.containerElement || 'article',
     N = !1 !== e.noscriptFallback;
    return (
     o.useEffect(() => {
      d && (H(), e.focusOnLoad && 'object' == typeof n && null != n && n.current && n.current.focus());
     }, [d, H, e.focusOnLoad, n]),
     (0, i.jsxs)(i.Fragment, {
      children: [
       !e.lazyLoad && (0, i.jsx)('link', { rel: Z, href: w, as: 'image' }),
       (0, i.jsx)(i.Fragment, { children: t && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('link', { rel: 'preconnect', href: g }), (0, i.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), C && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, i.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: r(e.id, u, w, g, e.seo) } }),
       N && !e.playlist && (0, i.jsx)('noscript', { children: (0, i.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${u} on YouTube`, children: ['Watch "', u, '" on YouTube'] }) }),
       (0, i.jsxs)(L, {
        onPointerOver: () => {
         t || l(!0);
        },
        onClick: () => {
         d || s(!0);
        },
        className: `${D} ${d ? z : ''}`,
        'data-title': u,
        role: d ? void 0 : 'img',
        'aria-label': d ? void 0 : `${u} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${w})` }), '--aspect-ratio': ($ / _) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !d && (0, i.jsx)('img', { src: w, alt: `${u} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), (0, i.jsx)('button', { type: 'button', className: I, 'aria-label': `${h} ${u}`, 'aria-hidden': d || void 0, tabIndex: d ? -1 : 0, children: (0, i.jsx)('span', { className: 'lty-visually-hidden', children: h }) }), d && (0, i.jsx)('iframe', { ref: n, className: F, title: u, width: '560', height: '315', style: { border: 0 }, allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: j, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
 },
]);
