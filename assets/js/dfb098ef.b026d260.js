'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [39629],
 {
  18439(e, n, t) {
   t.d(n, { R: () => l, x: () => r });
   var o = t(30758);
   const i = {},
    a = o.createContext(i);
   function l(e) {
    const n = o.useContext(a);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), o.createElement(a.Provider, { value: n }, e.children));
   }
  },
  72223(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => s, default: () => p, frontMatter: () => r, metadata: () => o, toc: () => c }));
   const o = JSON.parse('{"id":"handboek/designer/zelf-componenten-maken","title":"Zelf componenten maken","description":"Informatie voor designers over hoe je zelf componenten kunt maken in Figma met design tokens.","source":"@site/docs/handboek/designer/zelf-componenten-maken.mdx","sourceDirName":"handboek/designer","slug":"/handboek/designer/zelf-componenten-maken","permalink":"/handboek/designer/zelf-componenten-maken","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/designer/zelf-componenten-maken.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Zelf componenten maken","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Zelf componenten maken","sidebar_position":5,"pagination_label":"Zelf componenten maken","description":"Informatie voor designers over hoe je zelf componenten kunt maken in Figma met design tokens.","slug":"/handboek/designer/zelf-componenten-maken","keywords":["index","designer","meedoen","componenten","figma","design tokens"]},"sidebar":"handboek","previous":{"title":"Zelf componenten uitbreiden","permalink":"/handboek/designer/zelf-componenten-uitbreiden"},"next":{"title":"Figma-bestanden overzicht","permalink":"/figma"}}');
   var i = t(86070),
    a = t(18439),
    l = t(75397);
   const r = { title: 'Zelf componenten maken', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Zelf componenten maken', sidebar_position: 5, pagination_label: 'Zelf componenten maken', description: 'Informatie voor designers over hoe je zelf componenten kunt maken in Figma met design tokens.', slug: '/handboek/designer/zelf-componenten-maken', keywords: ['index', 'designer', 'meedoen', 'componenten', 'figma', 'design tokens'] },
    s = 'Zelf componenten maken',
    d = {},
    c = [
     { value: 'Community component ontbreekt', id: 'community-component-ontbreekt', level: 2 },
     { value: 'Eigen Community component bijdragen', id: 'eigen-community-component-bijdragen', level: 2 },
     { value: 'Demo&#39;s', id: 'demos', level: 2 },
     { value: 'Component &#39;Demo Sticker&#39; maken', id: 'component-demo-sticker-maken', level: 3 },
     { value: 'Component &#39;Demo Card&#39; maken', id: 'component-demo-card-maken', level: 3 },
     { value: 'Handige links', id: 'handige-links', level: 2 },
     { value: 'Help deze documentatie te verbeteren', id: 'help-deze-documentatie-te-verbeteren', level: 2 },
     { value: 'Vragen', id: 'vragen', level: 2 },
    ];
   function m(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', hr: 'hr', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'zelf-componenten-maken', children: 'Zelf componenten maken' }) }), '\n', (0, i.jsx)(n.p, { children: 'De Figma bibliotheken van NL Design System bevatten veel componenten en worden regelmatig aangevuld. Toch zijn er situaties waarin je zelf componenten moet maken.' }), '\n', (0, i.jsx)(n.h2, { id: 'community-component-ontbreekt', children: 'Community component ontbreekt' }), '\n', (0, i.jsx)(n.p, { children: 'De Community component die jij nu juist nodig hebt ontbreekt nog. Je hebt dit doorgegeven aan het kernteam, maar er is (nog) geen tijd om dit op te pakken. In dat geval kun je de component zelf maken.' }), '\n', (0, i.jsx)(n.h2, { id: 'eigen-community-component-bijdragen', children: 'Eigen Community component bijdragen' }), '\n', (0, i.jsx)(n.p, { children: 'Je wilt als organisatie een nieuwe component ontwikkelen en delen met de community.' }), '\n', (0, i.jsx)(n.h2, { id: 'demos', children: "Demo's" }), '\n', (0, i.jsx)(n.p, { children: 'Het is fijn om componenten te ontwikkelen volgens de afspraken van NL Design System: open source, met design tokens en de juiste naamgeving. Zo blijven componenten onderling uitwisselbaar.' }), '\n', (0, i.jsx)(n.p, { children: 'We hebben twee fictieve componenten uitgewerkt om te laten zien hoe je als designer zelf een component kunt maken.' }), '\n', (0, i.jsx)(n.h3, { id: 'component-demo-sticker-maken', children: "Component 'Demo Sticker' maken" }), '\n', (0, i.jsx)(n.p, { children: "In deze video laten we zien hoe de component 'Demo Sticker' wordt ontwikkeld in Figma." }), '\n', (0, i.jsx)(l.L, { id: 'dbTcHS01IGQ', title: 'Zelf componenten maken - Demo Sticker' }), '\n', (0, i.jsx)(n.h3, { id: 'component-demo-card-maken', children: "Component 'Demo Card' maken" }), '\n', (0, i.jsx)(n.p, { children: "In deze video laten we zien hoe de component 'Demo Card' wordt ontwikkeld in Figma." }), '\n', (0, i.jsx)(l.L, { id: 'vsJjs6ehGZ0', title: 'Zelf componenten maken - Demo Card' }), '\n', (0, i.jsx)(n.h2, { id: 'handige-links', children: 'Handige links' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/definition-of-done/', children: 'Definition of Done (Estafettemodel)' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/help-wanted-stappenplan/', children: 'Help Wanted stappenplan' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/community-stappenplan/voor-organisaties/', children: 'Community stappenplan voor organisaties' }) }), '\n'] }), '\n'] }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/handboek/componenten-gebruiken/', children: 'Componenten gebruiken' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/handboek/huisstijl/design-tokens/', children: 'Design tokens' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/handboek/designer/figma-hygiene/', children: 'Figma hygi\xebne' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://help.figma.com/', children: 'help.figma.com' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://forum.figma.com/', children: 'forum.figma.com' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://tokens.studio/', children: 'tokenstudio.com' }) }), '\n'] }), '\n', (0, i.jsx)(n.hr, {}), '\n', (0, i.jsx)(n.h2, { id: 'help-deze-documentatie-te-verbeteren', children: 'Help deze documentatie te verbeteren' }), '\n', (0, i.jsxs)(n.p, { children: ['Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via ', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie', children: 'GitHub' }), '.'] }), '\n', (0, i.jsx)(n.h2, { id: 'vragen', children: 'Vragen' }), '\n', (0, i.jsxs)(n.p, { children: ['Heb je een vraag? Twijfel niet en ', (0, i.jsx)(n.a, { href: '/project/kernteam/', children: 'neem contact op met het kernteam' }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  75397(e, n, t) {
   t.d(n, { L: () => s });
   var o = t(30758),
    i = t(86070);
   const a = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function l(e, n, t, o, i) {
    const a = { '@context': 'https://schema.org', '@type': 'VideoObject', name: (null == i ? void 0 : i.name) || n, thumbnailUrl: [(null == i ? void 0 : i.thumbnailUrl) || t], embedUrl: (null == i ? void 0 : i.embedUrl) || `${o}/embed/${e}`, contentUrl: (null == i ? void 0 : i.contentUrl) || `https://www.youtube.com/watch?v=${e}`, ...((null == i ? void 0 : i.description) && { description: i.description }), ...((null == i ? void 0 : i.uploadDate) && { uploadDate: i.uploadDate }), ...((null == i ? void 0 : i.duration) && { duration: i.duration }) };
    return JSON.stringify(a);
   }
   const r = o.forwardRef(function (e, n) {
     const [t, r] = o.useState(!1),
      [s, d] = o.useState(e.alwaysLoadIframe || !1),
      c = encodeURIComponent(e.id),
      m = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      p = e.title,
      u = e.poster || 'hqdefault',
      h = e.announce || 'Watch',
      g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      k = o.useMemo(() => {
       const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.playlist ? { list: c } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
          n.append(t, e);
         }),
        n
       );
      }, [e.muted, g, e.enableJsApi, e.playlist, c, e.params]),
      f = o.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      b = o.useMemo(() => (e.playlist ? `${f}/embed/videoseries?${k.toString()}` : `${f}/embed/${c}?${k.toString()}`), [e.playlist, f, c, k]),
      j = !e.thumbnail && !e.playlist && 'maxresdefault' === u,
      v = e.webp ? 'webp' : 'jpg',
      x = e.webp ? 'vi_webp' : 'vi',
      y = j
       ? ((e, n, t, i = 'maxresdefault') => {
          const [l, r] = (0, o.useState)('');
          return (
           (0, o.useEffect)(() => {
            const o = `https://img.youtube.com/${n}/${e}/${i}.${t}`,
             l = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
             s = a[i],
             d = new Image();
            ((d.onload = () => {
             d.width < s ? r(l) : r(o);
            }),
             (d.onerror = () => r(l)),
             (d.src = o));
           }, [e, n, t, i]),
           l
          );
         })(e.id, x, v, u)
       : null,
      w = o.useMemo(() => e.thumbnail || y || `https://i.ytimg.com/${x}/${e.playlist ? m : c}/${u}.${v}`, [e.thumbnail, y, x, e.playlist, m, c, u, v]),
      z = e.activatedClass || 'lyt-activated',
      C = e.adNetwork || !1,
      $ = e.aspectHeight || 9,
      _ = e.aspectWidth || 16,
      D = e.iframeClass || '',
      S = e.playerClass || 'lty-playbtn',
      I = e.wrapperClass || 'yt-lite',
      F = o.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      L = e.rel ? 'prefetch' : 'preload',
      Z = e.containerElement || 'article',
      N = !1 !== e.noscriptFallback;
     return (
      o.useEffect(() => {
       s && (F(), e.focusOnLoad && 'object' == typeof n && null != n && n.current && n.current.focus());
      }, [s, F, e.focusOnLoad, n]),
      (0, i.jsxs)(i.Fragment, {
       children: [
        !e.lazyLoad && (0, i.jsx)('link', { rel: L, href: w, as: 'image' }),
        (0, i.jsx)(i.Fragment, { children: t && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('link', { rel: 'preconnect', href: f }), (0, i.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), C && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, i.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: l(e.id, p, w, f, e.seo) } }),
        N && !e.playlist && (0, i.jsx)('noscript', { children: (0, i.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${p} on YouTube`, children: ['Watch "', p, '" on YouTube'] }) }),
        (0, i.jsxs)(Z, {
         onPointerOver: () => {
          t || r(!0);
         },
         onClick: () => {
          s || d(!0);
         },
         className: `${I} ${s ? z : ''}`,
         'data-title': p,
         role: s ? void 0 : 'img',
         'aria-label': s ? void 0 : `${p} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${w})` }), '--aspect-ratio': ($ / _) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !s && (0, i.jsx)('img', { src: w, alt: `${p} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), (0, i.jsx)('button', { type: 'button', className: S, 'aria-label': `${h} ${p}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, children: (0, i.jsx)('span', { className: 'lty-visually-hidden', children: h }) }), s && (0, i.jsx)('iframe', { ref: n, className: D, title: p, width: '560', height: '315', style: { border: 0 }, allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: b, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    s = ({ id: e, title: n, ...t }) => {
     const a = (0, o.useCallback)((e) => {
      if (!e) return;
      const n = e.querySelector('[role="img"]');
      n && n.setAttribute('role', 'group');
      const t = new MutationObserver(() => {
       const n = e.querySelector('[role="img"]');
       n && (n.setAttribute('role', 'group'), t.disconnect());
      });
      t.observe(e, { attributes: !0, subtree: !0, attributeFilter: ['role'] });
     }, []);
     return (0, i.jsx)('div', { ref: a, children: (0, i.jsx)(r, { adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...t }) });
    };
  },
 },
]);
