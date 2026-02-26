'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [58398],
 {
  18439(e, n, r) {
   r.d(n, { R: () => d, x: () => l });
   var i = r(30758);
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : d(e.components)), i.createElement(a.Provider, { value: n }, e.children));
   }
  },
  78734(e, n, r) {
   r.d(n, { Ay: () => l, RM: () => a });
   var i = r(86070),
    t = r(18439);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function d(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
  },
  92109(e, n, r) {
   (r.r(n), r.d(n, { assets: () => m, contentTitle: () => h, default: () => b, frontMatter: () => u, metadata: () => i, toc: () => f }));
   const i = JSON.parse('{"id":"richtlijnen/formulieren/error/feedback/README","title":"Geef feedback aan screenreadergebruikers","description":"Richtlijnen voor feedback aan screenreadergebruikers van foutmeldingen in een formulier.","source":"@site/docs/richtlijnen/formulieren/error/7-feedback/README.mdx","sourceDirName":"richtlijnen/formulieren/error/7-feedback","slug":"/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback","permalink":"/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/7-feedback/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef feedback aan screenreadergebruikers","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Screenreaderfeedback","pagination_label":"Screenreaderfeedback","description":"Richtlijnen voor feedback aan screenreadergebruikers van foutmeldingen in een formulier.","slug":"/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Samenvatting fouten","permalink":"/richtlijnen/formulieren/foutmeldingen/samenvatting"},"next":{"title":"Fieldsets","permalink":"/richtlijnen/formulieren/fieldsets/"}}');
   var t = r(86070),
    a = r(18439),
    d = r(78734);
   function l(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'geef-feedback-aan-screenreadergebruikers', children: 'Geef feedback aan screenreadergebruikers' }) }), '\n', (0, t.jsxs)(n.p, { children: ['We geven je 3 extra manieren om feedback te geven over foutmeldingen voor gebruikers van ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '. Met ', (0, t.jsx)(n.code, { children: 'aria-required' }), ', ', (0, t.jsx)(n.code, { children: 'aria-invalid' }), ' in het formulierveld en het ', (0, t.jsx)(n.code, { children: '<title>' }), ' element in de ', (0, t.jsx)(n.code, { children: '<head>' }), ' van de webpagina.'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruik-aria-voor-feedback', children: 'Gebruik ARIA voor feedback' }), '\n', (0, t.jsx)(n.p, { children: 'Gebruik ARIA om aanvullende informatie en feedback te geven aan gebruikers van screenreaders. Informatie die nodig is om het formulier goed te gebruiken en te begrijpen.' }), '\n', (0, t.jsx)(n.p, { children: 'Twee ARIA-attributen zijn belangrijk voor screenreaderfeedback:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'aria-required="true"' }), ' vertelt dat een veld verplicht is.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'aria-invalid="true"' }), ' vertelt dat een veld niet goed is ingevuld.'] }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Initieel staat de waarde van ', (0, t.jsx)(n.code, { children: 'aria-invalid' }), ' op ', (0, t.jsx)(n.code, { children: 'false' }), '. Verander bij foutmeldingen de waarde van ', (0, t.jsx)(n.code, { children: 'false' }), ' naar ', (0, t.jsx)(n.code, { children: 'true' }), '. Eventueel kan het attribuut ', (0, t.jsx)(n.code, { children: 'aria-invalid' }), ' kan ook worden weggelaten totdat de validatie is uitgevoerd.'] }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '<label for="voorbeeld">Voorbeeld</label>\n<input aria-required="true" aria-invalid="false" id="voorbeeld" name="voorbeeld" type="text" />\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'VoiceOver leest voor: "Voorbeeld, vereist, bewerkt tekst".' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '<label for="voorbeeld">Voorbeeld</label>\n<input aria-required="true" aria-invalid="true" id="voorbeeld" name="voorbeeld" type="text" />\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'VoiceOver leest voor: "Voorbeeld, vereist, ongeldige gegevens, bewerk tekst".' }), '\n', (0, t.jsx)(n.h2, { id: 'screenreaderfeedback-en-focusmanagement-na-submit', children: 'Screenreaderfeedback en focusmanagement na submit' }), '\n', (0, t.jsx)(n.p, { children: 'Voor toetsenbord- en screenreadergebruikers is het van belang dat na een submit, de visuele- en toetsenbordfocus op een logische plek komt.' }), '\n', (0, t.jsxs)(n.h2, { id: 'update-het-title-element-in-de-head', children: ['Update het ', (0, t.jsx)(n.code, { children: '<title>' }), ' element in de ', (0, t.jsx)(n.code, { children: '<head>' })] }), '\n', (0, t.jsxs)(n.p, { children: ['De inhoud van het ', (0, t.jsx)(n.code, { children: '<title>' }), ' element is het eerste wat een screenreader voorleest bij het inladen van een webpagina.'] }), '\n', (0, t.jsx)(n.p, { children: 'Je kunt hier dus waardevolle informatie kwijt zoals:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'een formulier heeft 2 foutmeldingen;' }), '\n', (0, t.jsx)(n.li, { children: 'bij welke stap je bent in een formulier met meerdere stappen;' }), '\n', (0, t.jsx)(n.li, { children: 'een formulier is succesvol verzonden.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '<head>\n  <title>2 foutmeldingen - Stap 1 van 4: Uw vraag - Gemeente Voorbeeld</title>\n  [...]\n</head>\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'Of:' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '<head>\n  <title>Uw vraag is met succes verstuurd - Gemeente Voorbeeld</title>\n  [...]\n</head>\n' }) })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
   function c(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.2/', children: 'Succescriterium 2.4.2 Paginatitel' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'Succescriterium 3.3.1 Foutidentificatie' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/4.1.2/', children: 'Succescriterium 4.1.2 Naam, rol, waarde' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/4.1.3/', children: 'Succescriterium 4.1.3 Statusberichten' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   const u = { title: 'Geef feedback aan screenreadergebruikers', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Screenreaderfeedback', pagination_label: 'Screenreaderfeedback', description: 'Richtlijnen voor feedback aan screenreadergebruikers van foutmeldingen in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    m = {},
    f = [{ value: 'Gebruik ARIA voor feedback', id: 'gebruik-aria-voor-feedback', level: 2 }, { value: 'Screenreaderfeedback en focusmanagement na submit', id: 'screenreaderfeedback-en-focusmanagement-na-submit', level: 2 }, { value: 'Update het <code>&lt;title&gt;</code> element in de <code>&lt;head&gt;</code>', id: 'update-het-title-element-in-de-head', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...d.RM];
   function j(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(s, {}), '\n', (0, t.jsx)(o, {}), '\n', (0, t.jsx)(d.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j();
   }
  },
 },
]);
