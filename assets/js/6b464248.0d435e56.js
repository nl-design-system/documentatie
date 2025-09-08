'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [75989],
 {
  66968: (e, n, r) => {
   r.d(n, { ZP: () => o });
   var i = r(52676),
    s = r(40139);
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(t, { ...e }) }) : t(e);
   }
  },
  38371: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => m, contentTitle: () => h, default: () => p, frontMatter: () => d, metadata: () => u, toc: () => g });
   var i = r(52676),
    s = r(40139),
    t = r(66968);
   function o(e) {
    return (0, i.jsx)(i.Fragment, {});
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o();
   }
   function l(e) {
    const n = { a: 'a', br: 'br', code: 'code', h1: 'h1', h2: 'h2', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'informeer-gebruikers-van-screenreaders-over-het-statusbericht', children: 'Informeer gebruikers van screenreaders over het statusbericht' }), '\n', (0, i.jsxs)(n.p, { children: ['Als het statusbericht dynamisch wordt gegenereerd en zichtbaar is, maar geen toetsenbordfocus krijgt, moet de melding worden voorgelezen aan een gebruiker van een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Dit kan door van het statusbericht een live-region te maken.' }), '\n', (0, i.jsx)(n.p, { children: 'Let op: de live-region moet al in de DOM (de door de browser verwerkte HTML-code) aanwezig zijn voor je er iets in zet. Vaak verwerkt de browser alleen wijzigingen in al bestaande live-regions.' }), '\n', (0, i.jsxs)(n.h2, { id: 'live-region-met-rolealert', children: ['Live-region met ', (0, i.jsx)(n.code, { children: 'role="alert"' })] }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role', children: 'role="alert"' }), ' om belangrijke en/of tijdgevoelige berichten aan gebruikers van hulptechnologie direct over te brengen.'] }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Je inlogsessie loopt bijna af.' }), '\n', (0, i.jsx)(n.li, { children: 'De verbinding met de server is verbroken, lokale wijzigingen worden nu niet opgeslagen.' }), '\n', (0, i.jsx)(n.li, { children: 'Je hebt nog 20 seconden om het formulier te verzenden.' }), '\n'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-markup', children: '<div role="alert">\n  Waarschuwing: Je hebt nog 20 seconden\n  om het formulier te verzenden.\n</div>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Een element met ', (0, i.jsx)(n.code, { children: 'role="alert"' }), ' is een \u2018assertive\u2019 live region, en functioneel gelijk aan het gebruiken van de combinatie ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live', children: 'aria-live="assertive"' }), ' en ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic', children: 'aria-atomic="true"' }), '.', (0, i.jsx)(n.br, {}), '\n', 'Het onderbreekt de gebruiker bij wat die doet en geeft de melding onmiddellijk door.'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': gebruik alert spaarzaam, alleen in situaties waarin de onmiddellijke aandacht van de gebruiker vereist is.'] }), '\n', (0, i.jsxs)(n.h2, { id: 'live-region-met-rolestatus', children: ['Live-region met ', (0, i.jsx)(n.code, { children: 'role="status"' })] }), '\n', (0, i.jsxs)(n.p, { children: ['Een live-region met de ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role', children: 'role="status"' }), " geeft de gebruiker informatie die niet belangrijk genoeg is om een 'alert' te zijn."] }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Het aanmeldformulier is succesvol verzonden.' }), '\n', (0, i.jsx)(n.li, { children: 'Je hebt nu 3 producten in je winkelmandje.' }), '\n', (0, i.jsx)(n.li, { children: "Er zijn 5 zoekresultaten gevonden voor 'eikenprocessierups'." }), '\n'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-markup', children: '<div role="status">\n  Er zijn 5 zoekresultaten gevonden\n  voor \'eikenprocessierups\'.\n</div>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Het instellen van role="status" is gelijk aan het instellen van ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live', children: 'aria-live="polite"' }), ' en ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic', children: 'aria-atomic="true"' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Deze ', (0, i.jsx)(n.code, { children: 'role="status"' }), ' onderbreekt de gebruiker niet, maar de melding wordt pas doorgegeven als de gebruiker geen interactie met de hulptechnologie meer heeft.'] }), '\n', (0, i.jsx)(n.p, { children: "Met andere woorden, 'status' wacht op zijn beurt, 'alert' dringt voor." }), '\n', (0, i.jsx)(n.p, { children: "Veel CMS'en en frameworks hebben iets ingebouwd om screenreaderfeedback makkelijker te maken: ze plaatsen onderaan de pagina een vaste live-region, waaraan je als ontwikkelaar meldingen kan toevoegen die dan worden voorgelezen." }), '\n', (0, i.jsx)(n.p, { children: 'Voorbeelden van dit soort functionaliteit:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://make.wordpress.org/accessibility/handbook/markup/wp-a11y-speak/', children: 'wp-a11y-speak()' }), ' voor WordPress.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://www.drupal.org/node/1973218', children: 'drupal.accounce' }), ' voor Drupal.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://www.npmjs.com/package/@react-aria/live-announcer', children: 'live-announcer' }), ' voor react-aria.'] }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Het informeren van alle gebruikers over een statusbericht is verplicht om te voldoen aan het WCAG-succescriterium ', (0, i.jsx)(n.a, { href: 'https://nldesignsystem.nl/wcag/4.1.3', children: '4.1.3 Statusberichten' }), ' (niveau AA).'] }), '\n', (0, i.jsx)(n.p, { children: 'Bronnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://adrianroselli.com/2020/01/defining-toast-messages.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Defining toast messages' }) }), ' van Adrian Roselli.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://tetralogical.com/blog/2024/05/01/why-are-my-live-regions-not-working/', children: (0, i.jsx)('span', { lang: 'en', children: 'Why are my live regions not working?' }) }), ' van Patrick H. Lauke.'] }), '\n'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
   const d = { title: 'Informeer gebruikers van screenreaders over het statusbericht \xb7 Status in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Informeer screenreaders', pagination_label: 'Informeer screenreaders', description: 'Richtlijnen om gebruikers van screenreaders te informeren over statusberichten.', slug: '/richtlijnen/formulieren/status/screenreaders', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    u = { id: 'richtlijnen/formulieren/status/screenreaders/README', title: 'Informeer gebruikers van screenreaders over het statusbericht \xb7 Status in een formulier \xb7 Richtlijnen', description: 'Richtlijnen om gebruikers van screenreaders te informeren over statusberichten.', source: '@site/docs/richtlijnen/formulieren/status/1-screenreaders/README.mdx', sourceDirName: 'richtlijnen/formulieren/status/1-screenreaders', slug: '/richtlijnen/formulieren/status/screenreaders', permalink: '/richtlijnen/formulieren/status/screenreaders', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/status/1-screenreaders/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Informeer gebruikers van screenreaders over het statusbericht \xb7 Status in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Informeer screenreaders', pagination_label: 'Informeer screenreaders', description: 'Richtlijnen om gebruikers van screenreaders te informeren over statusberichten.', slug: '/richtlijnen/formulieren/status/screenreaders', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Status in formulieren', permalink: '/richtlijnen/formulieren/status/' }, next: { title: 'Informeer ingezoomde gebruikers', permalink: '/richtlijnen/formulieren/status/zoom' } },
    m = {},
    g = [];
   function j(e) {
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(c, {}), '\n', (0, i.jsx)(a, {}), '\n', (0, i.jsx)(t.ZP, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j();
   }
  },
  40139: (e, n, r) => {
   r.d(n, { Z: () => a, a: () => o });
   var i = r(75271);
   const s = {},
    t = i.createContext(s);
   function o(e) {
    const n = i.useContext(t);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), i.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
