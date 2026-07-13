/*! For license information please see e1d6ebcd.81003e15.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [55407],
 {
  18439(e, n, i) {
   i.d(n, { R: () => r, x: () => o });
   var t = i(30758);
   const a = {},
    s = t.createContext(a);
   function r(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), t.createElement(s.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, i) {
   i.d(n, { A: () => s });
   var t = i(30758),
    a = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const s = (e, n, i, s) => {
    const r = (0, t.forwardRef)(({ color: i = 'currentColor', size: r = 24, stroke: o = 2, title: l, className: d, children: c, ...m }, u) => (0, t.createElement)('svg', { ref: u, ...a[e], width: r, height: r, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: i } : { strokeWidth: o, stroke: i }), ...m }, [l && (0, t.createElement)('title', { key: 'svg-title' }, l), ...s.map(([e, n]) => (0, t.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((r.displayName = `${i}`), r);
   };
  },
  20698(e, n, i) {
   i.d(n, { v: () => r });
   var t = i(53538),
    a = i(13526),
    s = i(86070);
   const r = ({ appearance: e, ...n }) => (0, s.jsx)(t.F, { className: (0, a.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  53538(e, n, i) {
   i.d(n, { F: () => r, N: () => o });
   var t = i(13526),
    a = i(76097),
    s = i(86070);
   const r = ({ children: e, ...n }) => {
     const { to: i, href: t, ...r } = n;
     let o = i || t;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, a.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, s.jsx)('a', { href: o, ...r, children: e }));
    },
    o = ({ className: e, ...n }) => (0, s.jsx)(r, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  60733(e, n, i) {
   (i.r(n), i.d(n, { assets: () => u, contentTitle: () => m, default: () => g, frontMatter: () => c, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"community/community-sprints/mijn-services-community/index","title":"MijnServices Community","description":"Informatie over de NL Design System MijnServices Community Sprint","source":"@site/docs/community/community-sprints/mijn-services-community/index.mdx","sourceDirName":"community/community-sprints/mijn-services-community","slug":"/community/community-sprints/mijn-services-community/","permalink":"/community/community-sprints/mijn-services-community/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/mijn-services-community/index.mdx","tags":[],"version":"current","frontMatter":{"title":"MijnServices Community","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Over MijnServices Community","pagination_label":"Over MijnServices Community","description":"Informatie over de NL Design System MijnServices Community Sprint","slug":"/community/community-sprints/mijn-services-community/","keywords":["nl design system","community sprints","mijn services community","mijnservices community","mijn services community afstemming","mijn services community check-in","overheidsbrede portalen community"]},"sidebar":"community","previous":{"title":"Community Sprints","permalink":"/community/community-sprints/"},"next":{"title":"Over MijnServices Community","permalink":"/community/community-sprints/mijn-services-community/"}}');
   var a = i(86070),
    s = i(18439),
    r = i(72863),
    o = i(20698),
    l = i(64249),
    d = i(46447);
   const c = { title: 'MijnServices Community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Over MijnServices Community', pagination_label: 'Over MijnServices Community', description: 'Informatie over de NL Design System MijnServices Community Sprint', slug: '/community/community-sprints/mijn-services-community/', keywords: ['nl design system', 'community sprints', 'mijn services community', 'mijnservices community', 'mijn services community afstemming', 'mijn services community check-in', 'overheidsbrede portalen community'] },
    m = 'Community Sprint: MijnServices Community',
    u = {},
    h = [
     { value: 'Waar gaat deze sprint over?', id: 'waar-gaat-deze-sprint-over', level: 2 },
     { value: 'Templates', id: 'templates', level: 3 },
     { value: 'Thema&#39;s', id: 'themas', level: 3 },
     { value: 'Research en Bronnen', id: 'research-en-bronnen', level: 3 },
     { value: 'Documentatie', id: 'documentatie', level: 3 },
     { value: 'Werk en resultaten', id: 'werk-en-resultaten', level: 2 },
     { value: 'Voor wie is dit relevant?', id: 'voor-wie-is-dit-relevant', level: 2 },
     { value: 'Hoe kun je bijdragen of meedoen?', id: 'hoe-kun-je-bijdragen-of-meedoen', level: 2 },
     { value: 'Meepraten of input geven?', id: 'meepraten-of-input-geven', level: 3 },
     { value: 'Meedoen in Figma?', id: 'meedoen-in-figma', level: 3 },
     { value: 'Zelf iets aandragen of checken?', id: 'zelf-iets-aandragen-of-checken', level: 3 },
     { value: 'Vragen of idee\xebn', id: 'vragen-of-idee\xebn', level: 3 },
    ];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'community-sprint-mijnservices-community', children: 'Community Sprint: MijnServices Community' }) }), '\n', (0, a.jsx)(n.p, { children: 'Vanaf september 2024 is de tweede NL Design System Community Sprint van start gegaan. Dit keer werken teams samen aan het onderwerp MijnServices, van ontwerp en gebruikersonderzoek tot templates en implementatie.' }), '\n', (0, a.jsxs)(n.p, { children: ['Dit is een samenwerking van onder andere Ministerie van Binnenlandse Zaken en Koninkrijksrelaties, MijnOverheid van Logius, ', (0, a.jsx)(n.a, { href: 'https://vng.nl/omnichannel', children: 'VNG' }), ', Ministerie van Justitie en Veiligheid, verschillende gemeenten, NLPortal, OIP en OpenPDD.'] }), '\n', (0, a.jsx)(n.p, { children: 'Werk je aan een portaal voor een overheidsorganisatie en wil je samenwerken? Sluit je dan aan bij de MijnServices community. Deel kennis, kijk wat er al beschikbaar is voor hergebruik en werk samen aan nieuwe oplossingen.' }), '\n', (0, a.jsx)(n.h2, { id: 'waar-gaat-deze-sprint-over', children: 'Waar gaat deze sprint over?' }), '\n', (0, a.jsx)(n.p, { children: 'In deze Community Sprint ontwikkelen we aan een uitgebreide set van huisstijl-onafhankelijke templates voor Mijn Omgevingen en Formulieren die direct te gebruiken zijn voor websites en applicaties binnen de overheid.' }), '\n', (0, a.jsx)(n.h3, { id: 'templates', children: 'Templates' }), '\n', (0, a.jsx)(n.p, { children: 'Gebruik de templates van de MijnServices Community als een sterke basis voor verschillende soorten pagina\u2019s binnen je project. De templates zijn ontworpen met focus op schaalbaarheid en een intu\xeftieve gebruikerservaring. Of je nu werkt aan een pagina, een formulier of een specifieke flow, met deze templates werken we toe naar een \xe9\xe9nduidige beleving voor inwoners en ondernemers.' }), '\n', (0, a.jsx)(n.p, { children: 'Bekijk de templates:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsxs)(n.li, { children: ['in ', (0, a.jsx)(n.a, { href: 'https://nl-design-system.github.io/mijn-services/', children: 'Storybook' }), '.'] }), '\n', (0, a.jsxs)(n.li, { children: ['in ', (0, a.jsx)(n.a, { href: 'https://www.figma.com/design/pB5d6RlVSa1B088Xpm1sSo/2025---MijnServices---Templates--Voorheen--Overheidsbrede-portalen-', children: 'Figma' }), '.'] }), '\n'] }), '\n', (0, a.jsx)(n.h3, { id: 'themas', children: "Thema's" }), '\n', (0, a.jsx)(n.p, { children: 'Naast de templates bieden we vier thema\u2019s aan die elk een unieke visuele stijl introduceren zonder de layout of structuur van de templates te wijzigen. Elk thema biedt een onderscheidende look & feel, die gemakkelijk aan te passen is aan jouw huisstijl of projectbehoeften. Of je nu kiest voor een formele, moderne, speelse of neutrale uitstraling, de thema\u2019s passen zich visueel aan, terwijl de toegankelijkheid en gebruiksvriendelijkheid centraal blijven staan. Denk aan aanpassingen in kleurenschema\u2019s, typografie en iconografie\u2014allemaal afgestemd op de richtlijnen van het NL Design System.' }), '\n', (0, a.jsx)(n.h3, { id: 'research-en-bronnen', children: 'Research en Bronnen' }), '\n', (0, a.jsx)(n.p, { children: 'Bij het ontwerpen en ontwikkelen van deze templates is uitgebreid gebruik gemaakt van onderzoek en bronnen om ervoor te zorgen dat ze aansluiten bij de behoeften van gebruikers en voldoen aan de hoogste standaarden op het gebied van toegankelijkheid en gebruiksvriendelijkheid. Elk template wordt ondersteund door een aparte Research en Bronnen pagina, waarin de achtergrond, gebruikte methodologie\xebn en relevante bevindingen zijn gedocumenteerd. Deze pagina\u2019s bieden inzicht in de ontwerpprocessen en maken het eenvoudiger om verantwoorde keuzes te maken tijdens de ontwikkeling.' }), '\n', (0, a.jsx)(n.p, { children: 'Met deze templates kun je eenvoudig pagina\u2019s ontwikkelen die voldoen aan de standaarden van het NL Design System, terwijl je de flexibiliteit hebt om de visuele stijl aan te passen aan jouw project. De bijgevoegde Research en Bronnen pagina\u2019s helpen je om de thema\u2019s op de juiste manier te implementeren, zodat je snel en effici\xebnt kunt werken aan toegankelijke, betrouwbare digitale diensten.' }), '\n', (0, a.jsx)(n.h3, { id: 'documentatie', children: 'Documentatie' }), '\n', (0, a.jsx)(n.p, { children: 'De documentatie biedt gedetailleerde uitleg over de technische kant van de templates en hun componenten. Hierin wordt beschreven hoe je de componenten op de juiste manier implementeert in je codebase, inclusief voorbeelden en best practices. Dit helpt ontwikkelaars om effici\xebnt te werken en ervoor te zorgen dat de implementatie consistent blijft met de richtlijnen van het NL Design System.' }), '\n', (0, a.jsxs)(n.p, { children: ['We verzamelen alle inzichten rondom Mijn Omgevingen in ', (0, a.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/mijn-omgevingen', children: 'GitHub Discussions' }), '. Dit is een belangrijk uitgangspunt. Vanuit de Figma en Storybook zal naar deze discussions verwezen worden.'] }), '\n', (0, a.jsx)(n.h2, { id: 'werk-en-resultaten', children: 'Werk en resultaten' }), '\n', (0, a.jsx)(n.p, { children: 'Bekijk de links en documentatie die horen bij deze Community Sprint:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/mijn-services', children: 'MijnServices Community Repository op GitHub' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/mijn-omgevingen', children: 'MijnServices Community Discussions rondom Mijn Omgevingen op GitHub' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/34', children: 'MijnServices Community Sprintbord op GitHub' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: 'https://www.figma.com/design/pB5d6RlVSa1B088Xpm1sSo/2025---MijnServices---Templates--Voorheen--Overheidsbrede-portalen-', children: 'NL Design System - MijnServices Community - Templates' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: 'https://nl-design-system.github.io/mijn-services/', children: 'MijnServices Community Storybook' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/thema/mijn-omgeving', children: 'Gebruikersonderzoeken getagd met "Mijn Omgeving" op Gebruikersonderzoeken.nl' }) }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: "Bekijk hieronder de YouTube afspeellijst met de video's van de MijnServices Community." }), '\n', (0, a.jsx)(r.L, { id: 'PLnAxFMscDU3F1VYQxlJLpmV-Z-FQ6hCU_', playlist: !0, thumbnail: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/community-mijn-services-community-sprint-heartbeat-playlist.png', title: 'MijnServices Community updates' }), '\n', (0, a.jsx)(n.h2, { id: 'voor-wie-is-dit-relevant', children: 'Voor wie is dit relevant?' }), '\n', (0, a.jsx)(n.p, { children: 'Deze sprint is bedoeld voor iedereen die werkt aan portalen, Mijn Omgevingen en Formulieren, en in het bijzonder voor:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Designers die willen bijdragen aan een gedeelde visuele stijl' }), '\n', (0, a.jsx)(n.li, { children: 'Developers die componenten implementeren volgens MijnServices' }), '\n', (0, a.jsx)(n.li, { children: 'Product Owners die keuzes maken over ontwerpstandaarden' }), '\n', (0, a.jsx)(n.li, { children: 'Iedereen die bijdraagt aan een toegankelijk, samenhangend digitaal landschap' }), '\n'] }), '\n', (0, a.jsx)(n.h2, { id: 'hoe-kun-je-bijdragen-of-meedoen', children: 'Hoe kun je bijdragen of meedoen?' }), '\n', (0, a.jsx)(n.h3, { id: 'meepraten-of-input-geven', children: 'Meepraten of input geven?' }), '\n', (0, a.jsxs)(n.p, { children: ['Je kunt ons ook vinden op Slack. Meld je aan bij onze ', (0, a.jsx)(n.a, { href: '/slack/', children: 'Slackgroep \u2018NL Design System (praatmee.codefor.nl)\u2019' }), ' en sluit aan bij #nl-design-system.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Elke even week op donderdag van 10:00 tot 11:00 kan je meedoen aan de ', (0, a.jsx)(n.a, { href: '/events/mijn-services-check-in/', children: 'MijnServices Community Check-in' }), ' huddle en de thread volgen in het #nl-design-system-designers kanaal. Deze is voor zowel developers als designers.'] }), '\n', (0, a.jsx)(d.e2, { children: (0, a.jsxs)(o.v, { href: '/community/community-sprints/mijn-services-community/aanmelden', appearance: 'primary-action', children: ['Meld je aan', (0, a.jsx)(l.A, {})] }) }), '\n', (0, a.jsx)(n.h3, { id: 'meedoen-in-figma', children: 'Meedoen in Figma?' }), '\n', (0, a.jsxs)(n.p, { children: ['MijnServices Community gebruikt in Figma ', (0, a.jsx)(n.a, { href: '/handboek/designer/figma-structuur/#wat-zijn-connected-projects/', children: 'Connected Projects' }), ', een experimentele manier van samenwerken. Organisaties kunnen hun projecten koppelen aan de bibliotheek met het ', (0, a.jsx)(n.a, { href: '/handboek/huisstijl/themas/voorbeeld-thema/', children: 'Voorbeeld-thema' }), '. Zo kunnen ontwerpers eenvoudig met de nieuwste versie van componenten werken, zonder handmatig te hoeven updaten.'] }), '\n', (0, a.jsx)(n.p, { children: (0, a.jsx)(n.a, { href: 'https://www.figma.com/files/1448979839456618655/team/918521810065896033', children: 'Bekijk MijnServices Community Connected Project' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Werk je als organisatie met het Voorbeeld-thema en wil je bijdragen aan de ontwikkeling van MijnServices? Dat kan! Kom naar de volgende ', (0, a.jsx)(n.a, { href: '/events/mijn-services-check-in/', children: 'MijnServices Community Check-in' }), ' of laat een bericht achter op ', (0, a.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, a.jsx)(n.code, { children: '#nl-design-system-designers' }), ', dan helpen we je op weg.'] }), '\n', (0, a.jsx)(n.h3, { id: 'zelf-iets-aandragen-of-checken', children: 'Zelf iets aandragen of checken?' }), '\n', (0, a.jsxs)(n.p, { children: ['Bekijk het ', (0, a.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/34', children: 'GitHub sprintbord' }), ' of dien een ', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/mijn-services/issues', children: 'GitHub issue' }), ' in.'] }), '\n', (0, a.jsx)(n.h3, { id: 'vragen-of-idee\xebn', children: 'Vragen of idee\xebn' }), '\n', (0, a.jsxs)(n.p, { children: ['Heb je vragen of idee\xebn voor de MijnServices Community? Stel je vraag op ', (0, a.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' of stuur ons een mailtje op ', (0, a.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(p, { ...e }) }) : p(e);
   }
  },
  64249(e, n, i) {
   i.d(n, { A: () => t });
   const t = (0, i(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  72863(e, n, i) {
   i.d(n, { L: () => l });
   var t = i(86070),
    a = i(30758);
   const s = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function r(e, n, i, t, a) {
    const s = { '@context': 'https://schema.org', '@type': 'VideoObject', name: a?.name || n, thumbnailUrl: [a?.thumbnailUrl || i], embedUrl: a?.embedUrl || `${t}/embed/${e}`, contentUrl: a?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(a?.description && { description: a.description }), ...(a?.uploadDate && { uploadDate: a.uploadDate }), ...(a?.duration && { duration: a.duration }) };
    return JSON.stringify(s);
   }
   const o = a.forwardRef(function (e, n) {
     const [i, o] = a.useState(!1),
      [l, d] = a.useState(e.alwaysLoadIframe || !1),
      c = encodeURIComponent(e.id),
      m = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      u = e.title,
      h = e.poster || 'hqdefault',
      p = e.announce || 'Watch',
      g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      j = a.useMemo(() => {
       const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, i) => {
          n.append(i, e);
         }),
        n
       );
      }, [e.muted, g, e.enableJsApi, e.playlist, c, e.params]),
      v = a.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      y = a.useMemo(() => (e.playlist ? `${v}/embed/videoseries?${j.toString()}` : `${v}/embed/${c}?${j.toString()}`), [e.playlist, v, c, j]),
      k = !e.thumbnail && !e.playlist && 'maxresdefault' === h,
      f = e.webp ? 'webp' : 'jpg',
      b = e.webp ? 'vi_webp' : 'vi',
      w = k
       ? ((e, n, i, t = 'maxresdefault') => {
          const [r, o] = (0, a.useState)('');
          return (
           (0, a.useEffect)(() => {
            const a = `https://img.youtube.com/${n}/${e}/${t}.${i}`,
             r = `https://img.youtube.com/${n}/${e}/hqdefault.${i}`,
             l = s[t],
             d = new Image();
            ((d.onload = () => {
             d.width < l ? o(r) : o(a);
            }),
             (d.onerror = () => o(r)),
             (d.src = a));
           }, [e, n, i, t]),
           r
          );
         })(e.id, b, f, h)
       : null,
      x = a.useMemo(() => e.thumbnail || w || `https://i.ytimg.com/${b}/${e.playlist ? m : c}/${h}.${f}`, [e.thumbnail, w, b, e.playlist, m, c, h, f]),
      S = e.activatedClass || 'lyt-activated',
      C = e.adNetwork || !1,
      M = e.aspectHeight || 9,
      D = e.aspectWidth || 16,
      z = e.iframeClass || '',
      N = e.playerClass || 'lty-playbtn',
      A = e.wrapperClass || 'yt-lite',
      O = a.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      T = e.rel ? 'prefetch' : 'preload',
      L = e.containerElement || 'article',
      P = !1 !== e.noscriptFallback,
      _ = () => {
       l || d(!0);
      };
     return (
      a.useEffect(() => {
       l && (O(), e.focusOnLoad && 'object' == typeof n && n?.current && n.current.focus());
      }, [l, O, e.focusOnLoad, n]),
      a.useEffect(() => {
       if (!l || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
       let i = !1,
        t = !1;
       const a = (t) => {
        if ('https://www.youtube.com' !== t.origin && 'https://www.youtube-nocookie.com' !== t.origin) return;
        let a;
        try {
         a = 'string' == typeof t.data ? JSON.parse(t.data) : t.data;
        } catch {
         return;
        }
        switch (a.event) {
         case 'onReady':
          i || ((i = !0), e.onReady && e.onReady({ videoId: e.id, title: u }));
          break;
         case 'infoDelivery':
          if (void 0 !== a.info?.playerState) {
           const i = a.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: i, currentTime: a.info.currentTime, duration: a.info.duration }), i)) {
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
          (void 0 !== a.info?.playbackRate && e.onPlaybackRateChange?.(a.info.playbackRate), void 0 !== a.info?.playbackQuality && e.onPlaybackQualityChange?.(a.info.playbackQuality));
          break;
         case 'onStateChange':
          if (void 0 !== a.info?.playerState) {
           const i = a.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: i, currentTime: a.info.currentTime, duration: a.info.duration }), i)) {
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
          if (a.info && 'errorCode' in a.info) {
           const n = a.info.errorCode;
           e.onError && e.onError(n);
          }
          break;
         case 'onPlaybackRateChange':
          void 0 !== a.info?.playbackRate && e.onPlaybackRateChange?.(a.info.playbackRate);
          break;
         case 'onPlaybackQualityChange':
          void 0 !== a.info?.playbackQuality && e.onPlaybackQualityChange?.(a.info.playbackQuality);
        }
       };
       window.addEventListener('message', a);
       const s = [],
        r = () => {
         'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
        },
        o = () => {
         t ||
          ((t = !0),
          r(),
          [100, 300, 600, 1200, 2400].forEach((e) => {
           s.push(setTimeout(r, e));
          }));
        };
       return (
        'object' == typeof n && n?.current
         ? (n.current.addEventListener('load', o), 'complete' === n.current.contentDocument?.readyState && o())
         : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
            s.push(setTimeout(r, e));
           }),
        () => {
         (window.removeEventListener('message', a), s.forEach(clearTimeout), 'object' == typeof n && n?.current && n.current.removeEventListener('load', o));
        }
       );
      }, [l, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, u, n]),
      (0, t.jsxs)(t.Fragment, {
       children: [
        !e.lazyLoad && (0, t.jsx)('link', { rel: T, href: x, as: 'image' }),
        (0, t.jsx)(t.Fragment, { children: i && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('link', { rel: 'preconnect', href: v }), (0, t.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), C && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, t.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, t.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: r(e.id, u, x, v, e.seo) } }),
        P && !e.playlist && (0, t.jsx)('noscript', { children: (0, t.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${u} on YouTube`, children: ['Watch "', u, '" on YouTube'] }) }),
        (0, t.jsxs)(L, {
         onPointerOver: () => {
          i || o(!0);
         },
         onClick: _,
         className: `${A} ${l ? S : ''}`,
         'data-title': u,
         role: l || e.lazyLoad ? void 0 : 'img',
         'aria-label': l ? void 0 : `${u} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${x})` }), '--aspect-ratio': (M / D) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !l && (0, t.jsx)('img', { src: x, alt: `${u} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !l && (0, t.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && l) && (0, t.jsx)('button', { type: 'button', className: N, 'aria-label': `${p} ${u}`, 'aria-hidden': l || void 0, tabIndex: l ? -1 : 0, onClick: _, children: (0, t.jsx)('span', { className: 'lty-visually-hidden', children: p }) }), l && (0, t.jsx)('iframe', { ref: n, className: z, title: u, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: y, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    l = ({ id: e, title: n, ...i }) => (0, t.jsx)(o, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...i });
  },
  76097(e, n, i) {
   i.d(n, { bo: () => a, KF: () => u, mJ: () => g, VZ: () => x, cR: () => w, Pv: () => j, qZ: () => r, kD: () => f, QQ: () => C, B2: () => h, Pc: () => l, f4: () => o, GT: () => b, fX: () => s, eQ: () => k, B_: () => y, o_: () => v });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return m(c(n));
    },
    h = (e, n) => g(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: i }) => '' !== i && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    g = (e) => m(c(e.projects.flatMap((e) => p(e)))),
    j = (e) => {
     const n = p(e),
      i = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: i }) => '' !== i && e.includes(n))
       .map(({ name: t, id: a, value: s }) => {
        const r = /^(.+) URL/.exec(t)[1],
         o = 'Storybook' === r ? `${i} (${n}) in Storybook van ${e.title}` : `${i} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: t, id: a, value: s, description: o };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    v = (e) => e.join('.'),
    y = (e) => '--' + e.join('-'),
    k = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((i) => ('object' == typeof e[i] && null !== e[i] ? f(e[i], [...n, i]) : []));
   }
   function b(e) {
    const n = new Map();
    function i(e) {
     return (n.has(e) || n.set(e, v(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || i(e).localeCompare(i(n)));
   }
   const w = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    x = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    S = new Set(['ics', 'json', 'pdf']),
    C = (e) => {
     const n = e.split('/').pop() ?? '',
      i = n.split('.').pop()?.toLowerCase();
     return void 0 !== i && S.has(i);
    };
  },
 },
]);
