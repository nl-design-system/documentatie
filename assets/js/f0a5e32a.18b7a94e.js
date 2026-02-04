/*! For license information please see f0a5e32a.18b7a94e.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [29004],
 {
  4258(e, n, i) {
   i.d(n, { L: () => r });
   var t = i(78236),
    s = i(86070);
   const r = ({ id: e, title: n, ...i }) => (0, s.jsx)(t.A, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: e, title: n, poster: 'maxresdefault', ...i });
  },
  18439(e, n, i) {
   i.d(n, { R: () => a, x: () => o });
   var t = i(30758);
   const s = {},
    r = t.createContext(s);
   function a(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), t.createElement(r.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, i) {
   i.d(n, { A: () => r });
   var t = i(30758),
    s = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const r = (e, n, i, r) => {
    const a = (0, t.forwardRef)(({ color: i = 'currentColor', size: a = 24, stroke: o = 2, title: l, className: d, children: m, ...c }, u) => (0, t.createElement)('svg', { ref: u, ...s[e], width: a, height: a, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: i } : { strokeWidth: o, stroke: i }), ...c }, [l && (0, t.createElement)('title', { key: 'svg-title' }, l), ...r.map(([e, n]) => (0, t.createElement)(e, n)), ...(Array.isArray(m) ? m : [m])]));
    return ((a.displayName = `${i}`), a);
   };
  },
  64249(e, n, i) {
   i.d(n, { A: () => t });
   const t = (0, i(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  76641(e, n, i) {
   (i.r(n), i.d(n, { assets: () => u, contentTitle: () => c, default: () => j, frontMatter: () => m, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"community/community-sprints/mijn-services-community/mijn-services-community","title":"MijnServices Community \xb7 Community Sprints \xb7 Community","description":"Informatie over de NL Design System MijnServices Community Sprint","source":"@site/docs/community/community-sprints/mijn-services-community/mijn-services-community.mdx","sourceDirName":"community/community-sprints/mijn-services-community","slug":"/community/community-sprints/mijn-services-community/","permalink":"/community/community-sprints/mijn-services-community/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/mijn-services-community/mijn-services-community.mdx","tags":[],"version":"current","frontMatter":{"title":"MijnServices Community \xb7 Community Sprints \xb7 Community","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"MijnServices Community","pagination_label":"MijnServices Community","description":"Informatie over de NL Design System MijnServices Community Sprint","keywords":["nl design system","community sprints","mijn services community","mijnservices community","mijn services community afstemming","mijn services community check-in","overheidsbrede portalen community"]},"sidebar":"community","previous":{"title":"MijnServices Community","permalink":"/community/community-sprints/mijn-services-community/overzicht"},"next":{"title":"Aanmelden","permalink":"/community/community-sprints/mijn-services-community/aanmelden"}}');
   var s = i(86070),
    r = i(18439),
    a = i(4258),
    o = i(88666),
    l = i(64249),
    d = i(46447);
   const m = { title: 'MijnServices Community \xb7 Community Sprints \xb7 Community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'MijnServices Community', pagination_label: 'MijnServices Community', description: 'Informatie over de NL Design System MijnServices Community Sprint', keywords: ['nl design system', 'community sprints', 'mijn services community', 'mijnservices community', 'mijn services community afstemming', 'mijn services community check-in', 'overheidsbrede portalen community'] },
    c = 'Community Sprint: MijnServices Community',
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
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'community-sprint-mijnservices-community', children: 'Community Sprint: MijnServices Community' }) }), '\n', (0, s.jsx)(n.p, { children: 'Vanaf september 2024 is de tweede NL Design System Community Sprint van start gegaan. Dit keer werken teams samen aan het onderwerp MijnServices, van ontwerp en gebruikersonderzoek tot templates en implementatie.' }), '\n', (0, s.jsxs)(n.p, { children: ['Dit is een samenwerking van onder andere Ministerie van Binnenlandse Zaken en Koninkrijksrelaties, MijnOverheid van Logius, ', (0, s.jsx)(n.a, { href: 'https://vng.nl/omnichannel', children: 'VNG' }), ', Ministerie van Justitie en Veiligheid, verschillende gemeenten, NLPortal, OIP en OpenPDD.'] }), '\n', (0, s.jsx)(n.p, { children: 'Werk je aan een portaal voor een overheidsorganisatie en wil je samenwerken? Sluit je dan aan bij de MijnServices community. Deel kennis, kijk wat er al beschikbaar is voor hergebruik en werk samen aan nieuwe oplossingen.' }), '\n', (0, s.jsx)(n.h2, { id: 'waar-gaat-deze-sprint-over', children: 'Waar gaat deze sprint over?' }), '\n', (0, s.jsx)(n.p, { children: 'In deze Community Sprint ontwikkelen we aan een uitgebreide set van huisstijl-onafhankelijke templates voor Mijn Omgevingen en Formulieren die direct te gebruiken zijn voor websites en applicaties binnen de overheid.' }), '\n', (0, s.jsx)(n.h3, { id: 'templates', children: 'Templates' }), '\n', (0, s.jsx)(n.p, { children: 'Gebruik de templates van de MijnServices Community als een sterke basis voor verschillende soorten pagina\u2019s binnen je project. De templates zijn ontworpen met focus op schaalbaarheid en een intu\xeftieve gebruikerservaring. Of je nu werkt aan een pagina, een formulier of een specifieke flow, met deze templates werken we toe naar een \xe9\xe9nduidige beleving voor inwoners en ondernemers.' }), '\n', (0, s.jsx)(n.p, { children: 'Bekijk de templates:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['in ', (0, s.jsx)(n.a, { href: 'https://nl-design-system.github.io/mijn-services/', children: 'Storybook' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['in ', (0, s.jsx)(n.a, { href: 'https://www.figma.com/design/pB5d6RlVSa1B088Xpm1sSo/2025---MijnServices---Templates--Voorheen--Overheidsbrede-portalen-', children: 'Figma' }), '.'] }), '\n'] }), '\n', (0, s.jsx)(n.h3, { id: 'themas', children: "Thema's" }), '\n', (0, s.jsx)(n.p, { children: 'Naast de templates bieden we vier thema\u2019s aan die elk een unieke visuele stijl introduceren zonder de layout of structuur van de templates te wijzigen. Elk thema biedt een onderscheidende look & feel, die gemakkelijk aan te passen is aan jouw huisstijl of projectbehoeften. Of je nu kiest voor een formele, moderne, speelse of neutrale uitstraling, de thema\u2019s passen zich visueel aan, terwijl de toegankelijkheid en gebruiksvriendelijkheid centraal blijven staan. Denk aan aanpassingen in kleurenschema\u2019s, typografie en iconografie\u2014allemaal afgestemd op de richtlijnen van het NL Design System.' }), '\n', (0, s.jsx)(n.h3, { id: 'research-en-bronnen', children: 'Research en Bronnen' }), '\n', (0, s.jsx)(n.p, { children: 'Bij het ontwerpen en ontwikkelen van deze templates is uitgebreid gebruik gemaakt van onderzoek en bronnen om ervoor te zorgen dat ze aansluiten bij de behoeften van gebruikers en voldoen aan de hoogste standaarden op het gebied van toegankelijkheid en gebruiksvriendelijkheid. Elk template wordt ondersteund door een aparte Research en Bronnen pagina, waarin de achtergrond, gebruikte methodologie\xebn en relevante bevindingen zijn gedocumenteerd. Deze pagina\u2019s bieden inzicht in de ontwerpprocessen en maken het eenvoudiger om verantwoorde keuzes te maken tijdens de ontwikkeling.' }), '\n', (0, s.jsx)(n.p, { children: 'Met deze templates kun je eenvoudig pagina\u2019s ontwikkelen die voldoen aan de standaarden van het NL Design System, terwijl je de flexibiliteit hebt om de visuele stijl aan te passen aan jouw project. De bijgevoegde Research en Bronnen pagina\u2019s helpen je om de thema\u2019s op de juiste manier te implementeren, zodat je snel en effici\xebnt kunt werken aan toegankelijke, betrouwbare digitale diensten.' }), '\n', (0, s.jsx)(n.h3, { id: 'documentatie', children: 'Documentatie' }), '\n', (0, s.jsx)(n.p, { children: 'De documentatie biedt gedetailleerde uitleg over de technische kant van de templates en hun componenten. Hierin wordt beschreven hoe je de componenten op de juiste manier implementeert in je codebase, inclusief voorbeelden en best practices. Dit helpt ontwikkelaars om effici\xebnt te werken en ervoor te zorgen dat de implementatie consistent blijft met de richtlijnen van het NL Design System.' }), '\n', (0, s.jsxs)(n.p, { children: ['We verzamelen alle inzichten rondom Mijn Omgevingen in ', (0, s.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/mijn-omgevingen', children: 'GitHub Discussions' }), '. Dit is een belangrijk uitgangspunt. Vanuit de Figma en Storybook zal naar deze discussions verwezen worden.'] }), '\n', (0, s.jsx)(n.h2, { id: 'werk-en-resultaten', children: 'Werk en resultaten' }), '\n', (0, s.jsx)(n.p, { children: 'Bekijk de links en documentatie die horen bij deze Community Sprint:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/mijn-services', children: 'MijnServices Community Repository op GitHub' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/mijn-omgevingen', children: 'MijnServices Community Discussions rondom Mijn Omgevingen op GitHub' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/34', children: 'MijnServices Community Sprintbord op GitHub' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: 'https://www.figma.com/design/pB5d6RlVSa1B088Xpm1sSo/2025---MijnServices---Templates--Voorheen--Overheidsbrede-portalen-', children: 'NL Design System - MijnServices Community - Templates' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: 'https://nl-design-system.github.io/mijn-services/', children: 'MijnServices Community Storybook' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/thema/mijn-omgeving', children: 'Gebruikersonderzoeken getagd met "Mijn Omgeving" op Gebruikersonderzoeken.nl' }) }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: "Bekijk hieronder de YouTube afspeellijst met de video's van de MijnServices Community." }), '\n', (0, s.jsx)(a.L, { id: 'PLnAxFMscDU3F1VYQxlJLpmV-Z-FQ6hCU_', playlist: !0, thumbnail: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/community-mijn-services-community-sprint-heartbeat-playlist.png', title: 'MijnServices Community updates' }), '\n', (0, s.jsx)(n.h2, { id: 'voor-wie-is-dit-relevant', children: 'Voor wie is dit relevant?' }), '\n', (0, s.jsx)(n.p, { children: 'Deze sprint is bedoeld voor iedereen die werkt aan portalen, Mijn Omgevingen en Formulieren, en in het bijzonder voor:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Designers die willen bijdragen aan een gedeelde visuele stijl' }), '\n', (0, s.jsx)(n.li, { children: 'Developers die componenten implementeren volgens MijnServices' }), '\n', (0, s.jsx)(n.li, { children: 'Product Owners die keuzes maken over ontwerpstandaarden' }), '\n', (0, s.jsx)(n.li, { children: 'Iedereen die bijdraagt aan een toegankelijk, samenhangend digitaal landschap' }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'hoe-kun-je-bijdragen-of-meedoen', children: 'Hoe kun je bijdragen of meedoen?' }), '\n', (0, s.jsx)(n.h3, { id: 'meepraten-of-input-geven', children: 'Meepraten of input geven?' }), '\n', (0, s.jsxs)(n.p, { children: ['Je kunt ons ook vinden op Slack. Meld je aan bij onze ', (0, s.jsx)(n.a, { href: 'https://praatmee.codefor.nl/', children: 'Slackgroep \u2018NL Design System (praatmee.codefor.nl)\u2019' }), ' en sluit aan bij #nl-design-system.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Elke week op donderdag van 10:00 tot 11:00 kan je meedoen aan de ', (0, s.jsx)(n.a, { href: '/events/mijn-services-check-in/', children: 'MijnServices Community Check-in' }), ' huddle en de thread volgen in het #nl-design-system-designers kanaal. Deze is voor zowel developers als designers.'] }), '\n', (0, s.jsx)(d.e2, { children: (0, s.jsxs)(o.v, { href: '/community/community-sprints/mijn-services-community/aanmelden', appearance: 'primary-action', children: ['Meld je aan', (0, s.jsx)(l.A, {})] }) }), '\n', (0, s.jsx)(n.h3, { id: 'meedoen-in-figma', children: 'Meedoen in Figma?' }), '\n', (0, s.jsxs)(n.p, { children: ['MijnServices Community gebruikt in Figma ', (0, s.jsx)(n.a, { href: '/handboek/designer/figma-structuur/#wat-zijn-connected-projects/', children: 'Connected Projects' }), ', een experimentele manier van samenwerken. Organisaties kunnen hun projecten koppelen aan de bibliotheek met het ', (0, s.jsx)(n.a, { href: '/handboek/huisstijl/themas/voorbeeld-thema/', children: 'Voorbeeld-thema' }), '. Zo kunnen ontwerpers eenvoudig met de nieuwste versie van componenten werken, zonder handmatig te hoeven updaten.'] }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.a, { href: 'https://www.figma.com/files/1448979839456618655/team/918521810065896033', children: 'Bekijk MijnServices Community Connected Project' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Werk je als organisatie met het Voorbeeld-thema en wil je bijdragen aan de ontwikkeling van MijnServices? Dat kan! Kom naar de volgende ', (0, s.jsx)(n.a, { href: '/events/mijn-services-check-in/', children: 'MijnServices Community Check-in' }), ' of laat een bericht achter in het ', (0, s.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C01D78C2E4E', children: '#nl-design-system-designers' }), '-kanaal in Slack, dan helpen we je op weg.'] }), '\n', (0, s.jsx)(n.h3, { id: 'zelf-iets-aandragen-of-checken', children: 'Zelf iets aandragen of checken?' }), '\n', (0, s.jsxs)(n.p, { children: ['Bekijk het ', (0, s.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/34', children: 'GitHub sprintbord' }), ' of dien een ', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/mijn-services/issues', children: 'GitHub issue' }), ' in.'] }), '\n', (0, s.jsx)(n.h3, { id: 'vragen-of-idee\xebn', children: 'Vragen of idee\xebn' }), '\n', (0, s.jsxs)(n.p, { children: ['Heb je vragen of idee\xebn voor de MijnServices Community? Stel je vraag ', (0, s.jsx)(n.a, { href: 'https://praatmee.codefor.nl/', children: 'via Slack' }), ' of stuur ons een mailtje op ', (0, s.jsx)('a', { href: 'mailto:kernteam@nldesignsystem.nl', children: (0, s.jsx)(n.a, { href: 'mailto:kernteam@nldesignsystem.nl', children: 'kernteam@nldesignsystem.nl' }) })] })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
  },
  78236(e, n, i) {
   i.d(n, { A: () => o });
   var t = i(86070),
    s = i(30758);
   const r = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function a(e, n, i, t, s) {
    const r = { '@context': 'https://schema.org', '@type': 'VideoObject', name: (null == s ? void 0 : s.name) || n, thumbnailUrl: [(null == s ? void 0 : s.thumbnailUrl) || i], embedUrl: (null == s ? void 0 : s.embedUrl) || `${t}/embed/${e}`, contentUrl: (null == s ? void 0 : s.contentUrl) || `https://www.youtube.com/watch?v=${e}`, ...((null == s ? void 0 : s.description) && { description: s.description }), ...((null == s ? void 0 : s.uploadDate) && { uploadDate: s.uploadDate }), ...((null == s ? void 0 : s.duration) && { duration: s.duration }) };
    return JSON.stringify(r);
   }
   const o = s.forwardRef(function (e, n) {
    const [i, o] = s.useState(!1),
     [l, d] = s.useState(e.alwaysLoadIframe || !1),
     m = encodeURIComponent(e.id),
     c = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     u = e.title,
     h = e.poster || 'hqdefault',
     p = e.announce || 'Watch',
     j = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     v = s.useMemo(() => {
      const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(j ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.playlist ? { list: m } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, i) => {
         n.append(i, e);
        }),
       n
      );
     }, [e.muted, j, e.enableJsApi, e.playlist, m, e.params]),
     g = s.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     k = s.useMemo(() => (e.playlist ? `${g}/embed/videoseries?${v.toString()}` : `${g}/embed/${m}?${v.toString()}`), [e.playlist, g, m, v]),
     y = !e.thumbnail && !e.playlist && 'maxresdefault' === h,
     b = e.webp ? 'webp' : 'jpg',
     f = e.webp ? 'vi_webp' : 'vi',
     w = y
      ? ((e, n, i, t = 'maxresdefault') => {
         const [a, o] = (0, s.useState)('');
         return (
          (0, s.useEffect)(() => {
           const s = `https://img.youtube.com/${n}/${e}/${t}.${i}`,
            a = `https://img.youtube.com/${n}/${e}/hqdefault.${i}`,
            l = r[t],
            d = new Image();
           ((d.onload = () => {
            d.width < l ? o(a) : o(s);
           }),
            (d.onerror = () => o(a)),
            (d.src = s));
          }, [e, n, i, t]),
          a
         );
        })(e.id, f, b, h)
      : null,
     x = s.useMemo(() => e.thumbnail || w || `https://i.ytimg.com/${f}/${e.playlist ? c : m}/${h}.${b}`, [e.thumbnail, w, f, e.playlist, c, m, h, b]),
     S = e.activatedClass || 'lyt-activated',
     C = e.adNetwork || !1,
     M = e.aspectHeight || 9,
     z = e.aspectWidth || 16,
     D = e.iframeClass || '',
     $ = e.playerClass || 'lty-playbtn',
     L = e.wrapperClass || 'yt-lite',
     N = s.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     _ = e.rel ? 'prefetch' : 'preload',
     O = e.containerElement || 'article',
     B = !1 !== e.noscriptFallback;
    return (
     s.useEffect(() => {
      l && (N(), e.focusOnLoad && 'object' == typeof n && null != n && n.current && n.current.focus());
     }, [l, N, e.focusOnLoad, n]),
     (0, t.jsxs)(t.Fragment, {
      children: [
       !e.lazyLoad && (0, t.jsx)('link', { rel: _, href: x, as: 'image' }),
       (0, t.jsx)(t.Fragment, { children: i && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('link', { rel: 'preconnect', href: g }), (0, t.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), C && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, t.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, t.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: a(e.id, u, x, g, e.seo) } }),
       B && !e.playlist && (0, t.jsx)('noscript', { children: (0, t.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${u} on YouTube`, children: ['Watch "', u, '" on YouTube'] }) }),
       (0, t.jsxs)(O, {
        onPointerOver: () => {
         i || o(!0);
        },
        onClick: () => {
         l || d(!0);
        },
        className: `${L} ${l ? S : ''}`,
        'data-title': u,
        role: l ? void 0 : 'img',
        'aria-label': l ? void 0 : `${u} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${x})` }), '--aspect-ratio': (M / z) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !l && (0, t.jsx)('img', { src: x, alt: `${u} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), (0, t.jsx)('button', { type: 'button', className: $, 'aria-label': `${p} ${u}`, 'aria-hidden': l || void 0, tabIndex: l ? -1 : 0, children: (0, t.jsx)('span', { className: 'lty-visually-hidden', children: p }) }), l && (0, t.jsx)('iframe', { ref: n, className: D, title: u, width: '560', height: '315', style: { border: 0 }, allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: k, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  88666(e, n, i) {
   i.d(n, { v: () => a });
   var t = i(63195),
    s = i(13526),
    r = i(86070);
   const a = ({ appearance: e, ...n }) => (0, r.jsx)(t.A, { className: (0, s.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
 },
]);
