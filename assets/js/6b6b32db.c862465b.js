'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [53038],
 {
  5547: (e, n, r) => {
   r.d(n, { ZP: () => d });
   var i = r(52676),
    t = r(40139);
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  41466: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => u, contentTitle: () => o, default: () => f, frontMatter: () => s, metadata: () => c, toc: () => h });
   var i = r(52676),
    t = r(40139),
    a = r(5547);
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'geef-feedback-aan-screenreadergebruikers', children: 'Geef feedback aan screenreadergebruikers' }), '\n', (0, i.jsxs)(n.p, { children: ['We geven je 3 extra manieren om feedback te geven over foutmeldingen voor gebruikers van ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '. Met ', (0, i.jsx)(n.code, { children: 'aria-required' }), ', ', (0, i.jsx)(n.code, { children: 'aria-invalid' }), ' in het formulierveld en het ', (0, i.jsx)(n.code, { children: '<title>' }), ' element in de ', (0, i.jsx)(n.code, { children: '<head>' }), ' van de webpagina.'] }), '\n', (0, i.jsx)(n.p, { children: 'Het geven van feedback aan screenreadergebuikers over foutmeldingen is nodig om te voldoen aan de WCAG-succescriteria:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '/wcag/1.3.1/', children: '1.3.1 Info en relaties' }), ' (niveau A).'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '/wcag/3.3.1/', children: '3.3.1 Foutidentificatie' }), ' (niveau A).'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruik-aria-voor-feedback', children: 'Gebruik ARIA voor feedback' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik ARIA om aanvullende informatie en feedback te geven aan gebruikers van screenreaders. Informatie die nodig is om het formulier goed te gebruiken en te begrijpen.' }), '\n', (0, i.jsx)(n.p, { children: 'Twee ARIA-attributen zijn belangrijk voor screenreaderfeedback:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: 'aria-required="true"' }), ' vertelt dat een veld verplicht is.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: 'aria-invalid="true"' }), ' vertelt dat een veld niet goed is ingevuld.'] }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Initieel staat de waarde van ', (0, i.jsx)(n.code, { children: 'aria-invalid' }), ' op ', (0, i.jsx)(n.code, { children: 'false' }), '. Verander bij foutmeldingen de waarde van ', (0, i.jsx)(n.code, { children: 'false' }), ' naar ', (0, i.jsx)(n.code, { children: 'true' }), '. Eventueel kan het attribuut ', (0, i.jsx)(n.code, { children: 'aria-invalid' }), ' kan ook worden weggelaten totdat de validatie is uitgevoerd.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<label for="voorbeeld">Voorbeeld</label>\n<input aria-required="true" aria-invalid="false" id="voorbeeld" name="voorbeeld" type="text" />\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'VoiceOver leest voor: "Voorbeeld, vereist, bewerkt tekst".' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<label for="voorbeeld">Voorbeeld</label>\n<input aria-required="true" aria-invalid="true" id="voorbeeld" name="voorbeeld" type="text" />\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'VoiceOver leest voor: "Voorbeeld, vereist, ongeldige gegevens, bewerk tekst".' }), '\n', (0, i.jsx)(n.h2, { id: 'screenreaderfeedback-en-focusmanagement-na-submit', children: 'Screenreaderfeedback en focusmanagement na submit' }), '\n', (0, i.jsx)(n.p, { children: 'Voor toetsenbord- en screenreadergebruikers is het van belang dat na een submit, de visuele- en toetsenbordfocus op een logische plek komt.' }), '\n', (0, i.jsxs)(n.h2, { id: 'update-het-title-element-in-de-head', children: ['Update het ', (0, i.jsx)(n.code, { children: '<title>' }), ' element in de ', (0, i.jsx)(n.code, { children: '<head>' })] }), '\n', (0, i.jsxs)(n.p, { children: ['De inhoud van het ', (0, i.jsx)(n.code, { children: '<title>' }), ' element is het eerste wat een screenreader voorleest bij het inladen van een webpagina.'] }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt hier dus waardevolle informatie kwijt zoals:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'een formulier heeft 2 foutmeldingen;' }), '\n', (0, i.jsx)(n.li, { children: 'bij welke stap je bent in een formulier met meerdere stappen;' }), '\n', (0, i.jsx)(n.li, { children: 'een formulier is succesvol verzonden.' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<head>\n  <title>2 foutmeldingen - Stap 1 van 4: Uw vraag - Gemeente Voorbeeld</title>\n  [...]\n</head>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Of:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<head>\n  <title>Uw vraag is met succes verstuurd - Gemeente Voorbeeld</title>\n  [...]\n</head>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Het geven van een beschrijvend ', (0, i.jsx)(n.code, { children: '<title>' }), '-element is nodig om te voldoen aan het ', (0, i.jsx)(n.a, { href: '/wcag/2.4.2/', children: 'WCAG-succescriterium 2.4.2 Paginatitel' }), ' (niveau A).'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
   const s = { title: 'Geef feedback aan screenreadergebruikers \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Screenreaderfeedback', pagination_label: 'Screenreaderfeedback', description: 'Richtlijnen voor feedback aan screenreadergebruikers van foutmeldingen in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback', keywords: ['labels', 'formulier', 'design', 'code'] },
    o = void 0,
    c = { id: 'richtlijnen/formulieren/error/feedback/README', title: 'Geef feedback aan screenreadergebruikers \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor feedback aan screenreadergebruikers van foutmeldingen in een formulier.', source: '@site/docs/richtlijnen/formulieren/error/7-feedback/README.mdx', sourceDirName: 'richtlijnen/formulieren/error/7-feedback', slug: '/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback', permalink: '/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/7-feedback/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef feedback aan screenreadergebruikers \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Screenreaderfeedback', pagination_label: 'Screenreaderfeedback', description: 'Richtlijnen voor feedback aan screenreadergebruikers van foutmeldingen in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Samenvatting fouten', permalink: '/richtlijnen/formulieren/foutmeldingen/samenvatting' }, next: { title: 'Fieldsets', permalink: '/richtlijnen/formulieren/fieldsets/' } },
    u = {},
    h = [];
   function m(e) {
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(l, {}), '\n', (0, i.jsx)(a.ZP, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m();
   }
  },
  40139: (e, n, r) => {
   r.d(n, { Z: () => l, a: () => d });
   var i = r(75271);
   const t = {},
    a = i.createContext(t);
   function d(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : d(e.components)), i.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
