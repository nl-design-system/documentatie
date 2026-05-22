'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [79655],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => d });
   var r = i(30758);
   const t = {},
    o = r.createContext(t);
   function s(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(o.Provider, { value: n }, e.children));
   }
  },
  18976(e, n, i) {
   (i.r(n), i.d(n, { assets: () => a, contentTitle: () => d, default: () => u, frontMatter: () => s, metadata: () => r, toc: () => l }));
   const r = JSON.parse('{"id":"handboek/developer/infrastructuur/github-teams-en-codeowners","title":"GitHub teams en code owners","description":"Het werken met GitHub teams en code owners binnen NL Design System","source":"@site/docs/handboek/developer/05-infrastructuur/03-github-teams-en-codeowners.md","sourceDirName":"handboek/developer/05-infrastructuur","slug":"/handboek/developer/github-teams-en-code-owners/","permalink":"/handboek/developer/github-teams-en-code-owners/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/05-infrastructuur/03-github-teams-en-codeowners.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"GitHub teams en code owners","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"GitHub teams en code owners","pagination_label":"GitHub teams en code owners","description":"Het werken met GitHub teams en code owners binnen NL Design System","slug":"/handboek/developer/github-teams-en-code-owners/","keywords":["GitHub","Teams","Codeowners","Code owners"]},"sidebar":"handboek","previous":{"title":"GitHub Actions","permalink":"/handboek/developer/github-actions/"},"next":{"title":"Linting en code formatting","permalink":"/linting-en-code-formatting/"}}');
   var t = i(86070),
    o = i(18439);
   const s = { title: 'GitHub teams en code owners', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'GitHub teams en code owners', pagination_label: 'GitHub teams en code owners', description: 'Het werken met GitHub teams en code owners binnen NL Design System', slug: '/handboek/developer/github-teams-en-code-owners/', keywords: ['GitHub', 'Teams', 'Codeowners', 'Code owners'] },
    d = 'GitHub teams en code owners',
    a = {},
    l = [
     { value: 'Rollen', id: 'rollen', level: 2 },
     { value: 'Lid worden van een team', id: 'lid-worden-van-een-team', level: 2 },
     { value: 'CODEOWNERS', id: 'codeowners', level: 2 },
     { value: 'Review van code owners verplichten', id: 'review-van-code-owners-verplichten', level: 3 },
    ];
   function c(e) {
    const n = { a: 'a', admonition: 'admonition', code: 'code', em: 'em', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'github-teams-en-code-owners', children: 'GitHub teams en code owners' }) }), '\n', (0, t.jsx)(n.p, { children: 'Binnen NL Design System gebruiken we rollen om verantwoordelijkheden duidelijk te organiseren.\nIn GitHub zijn er teams per organisatie en per rol.' }), '\n', (0, t.jsx)(n.p, { children: 'Hiermee organiseren we wie toegang heeft tot repositories, en weet je snel wie toestemming moet geven voor een aanpassing van code of voor een wijziging in toegangsrechten.' }), '\n', (0, t.jsxs)(n.p, { children: ['We gebruiken het ', (0, t.jsx)(n.code, { children: 'CODEOWNERS' }), '-bestand om te garanderen dat een code review wordt gevraagd aan de juiste personen, voor wijzigingen aan belangrijke bestanden.'] }), '\n', (0, t.jsx)(n.h2, { id: 'rollen', children: 'Rollen' }), '\n', (0, t.jsx)(n.p, { children: 'Over het algemeen is er per organisatie een contributor-team, een maintainer-team en een admin-team.' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: '<organisatie>-contributor' }), ' - heeft schrijftoegang tot de repository en kan daarmee pull requests indienen'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: '<organisatie>-maintainer' }), ' - voor het beoordelen en mergen van pull requests en onderhoudstaken op de repository'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: '<organisatie>-admin' }), ' - voor toegangsbeheer van de repository'] }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Op verzoek kunnen extra rollen gebruikt worden, maar de standaard-rollen zijn in de meeste gevallen voldoende.' }), '\n', (0, t.jsx)(n.h2, { id: 'lid-worden-van-een-team', children: 'Lid worden van een team' }), '\n', (0, t.jsxs)(n.p, { children: ['Wanneer iemand aan een team toegevoegd moet worden, dan moet een maintainer of een admin die wijziging doorvoeren door een pull request aan te maken in de ', (0, t.jsx)(n.code, { children: 'terraform' }), '-repository.\nHiervoor is een ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/terraform/blob/main/docs/adding-users.md', children: 'handleiding' }), ' beschikbaar.'] }), '\n', (0, t.jsx)(n.p, { children: 'De admin van de organisatie moet de wijzigingen indienen of goedkeuren.' }), '\n', (0, t.jsx)(n.p, { children: 'De admin moet periodiek controleren dat de toegangsrechten van gebruikers nog kloppen.' }), '\n', (0, t.jsx)(n.h2, { id: 'codeowners', children: 'CODEOWNERS' }), '\n', (0, t.jsxs)(n.p, { children: ['Met ', (0, t.jsx)(n.code, { children: 'CODEOWNERS' }), ' leg je vast welke gebruikers of rollen verantwoordelijk zijn voor bepaalde bestanden of mappen.\nAls een pull request die paden wijzigt, voegt GitHub die code owners automatisch toe als reviewer.\nHiermee worden de juiste mensen gelijk ge\xefnformeerd.\nAls beveiligingslaag kan een accordering van een code owner ook verplicht worden.'] }), '\n', (0, t.jsx)(n.p, { children: 'Een vereenvoudigd voorbeeld:' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-txt', children: 'docs/ @nl-design-system/documentatie\n\n# Infra-bestanden\n.github/ @nl-design-system/kernteam-maintainer\n' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Met dit voorbeeld vraagt GitHub bij een pull request die bestanden onder ', (0, t.jsx)(n.code, { children: 'docs/' }), ' wijzigt automatisch een review aan bij de gebruikers in het team ', (0, t.jsx)(n.code, { children: '@nl-design-system/documentatie' }), '.'] }), '\n', (0, t.jsxs)(n.admonition, { title: 'Praktisch advies', type: 'tip', children: [(0, t.jsx)(n.p, { children: 'De volgorde is belangrijk; als meerdere regels van toepassing zijn op een wijziging, wordt de laatst matchende regel toegepast.\nOver het algemeen zet je daarom de rollen met meer rechten achteraan.' }), (0, t.jsxs)(n.p, { children: ['Het kan zijn dat een team niet 1-op-1 mapt op de mensen die je als eigenaar wilt toewijzen.\nGebruik in ', (0, t.jsx)(n.code, { children: 'CODEOWNERS' }), ' dan bij voorkeur individuele accounts in plaats van teams.'] }), (0, t.jsx)(n.p, { children: 'Gebruik verder comments bij paden waar uit de naamgeving niet direct duidelijk wordt wat de scope is van de bestanden.' })] }), '\n', (0, t.jsx)(n.h3, { id: 'review-van-code-owners-verplichten', children: 'Review van code owners verplichten' }), '\n', (0, t.jsxs)(n.p, { children: ['Code owners worden altijd aan pull requests toegevoegd als reviewer.\nMiddels een ', (0, t.jsx)(n.em, { children: 'branch protection rule' }), ' kun je verplichten dat een goedkeuring van \xe9\xe9n of meer code owners nodig is.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Standaard staat deze verplichting uit.\nWe raden sterk aan om hier wel gebruik van te maken.\nIn de ', (0, t.jsx)(n.code, { children: 'terraform' }), ' infrastructuurrepository is deze functie aan te zetten door in de betreffende ', (0, t.jsx)(n.code, { children: 'github_repository_ruleset' }), ' de regel ', (0, t.jsx)(n.code, { children: 'rules.pull_requests.require_code_owner_review' }), ' op ', (0, t.jsx)(n.code, { children: 'true' }), ' te zetten.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
