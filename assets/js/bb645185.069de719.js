'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [91698],
 {
  9386(e, n, a) {
   a.d(n, { H: () => x });
   var l = a(95822),
    o = a(46447),
    t = a(13526),
    r = a(68148),
    i = a(9016),
    s = a(69303),
    d = a(91635),
    c = a(30734),
    g = a(30758),
    h = a(31186),
    v = a(65904),
    b = a.n(v),
    m = a(51627),
    p = a(86070);
   const u = ({ children: e }) => (0, p.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(o.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   u.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, p.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(o.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, p.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const x = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const a = 'function' == typeof e ? e() : e,
        l = (0, h.qV)(a)
         .replaceAll(/&quot;/g, '"')
         .replaceAll(/\sclass="[\w-\s]+"/g, '')
         .replaceAll(/\sid="[\w-\s]+"/g, '')
         .replace('<astro-static-slot>', '')
         .replace('</astro-static-slot>', '')
         .replaceAll(/{"\s"}/g, '')
         .replaceAll(/\n{2,}/g, '\n')
         .replaceAll(/^\s\s/gm, '')
         .replaceAll(/\salt\s/g, ' alt="" ')
         .replaceAll(' loading="lazy"', ' '),
        o = b().highlight(l, b().languages[n], n);
       return (0, p.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, p.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: l } }), (0, p.jsx)(m.n, { children: (0, p.jsx)(m.K, { label: 'Code', children: (0, p.jsx)('pre', { className: 'language-html nl-code-block', children: (0, p.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: o } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: a = !1, displayCode: v = !0, children: b, container: m = 'document', language: x, designTokens: y }) => {
       const f = 'function' == typeof b ? b() : b,
        _ = 'function' == typeof e ? e() : (0, g.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(_ || f),
        [w, z] = (0, g.useState)(N),
        [A, G] = (0, g.useState)(a);
       (0, g.useEffect)(() => {
        (async () => {
         const e = await c.Ay.format(N, { parser: x, plugins: [r.A, i.Ay, s.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [N]);
       const C = (0, g.useId)();
       let L = g.Fragment;
       return (
        'paragraph' === m ? (L = u) : 'document' === m ? (L = j) : 'surface' === m && (L = k),
        (0, p.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          f && (0, p.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, p.jsx)(L, { children: (0, p.jsx)(o.v$, { children: f }) }) }) }),
          v &&
           (0, p.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, p.jsx)(o.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              G(!A);
             },
             'aria-expanded': A,
             'aria-controls': C,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          v &&
           (0, p.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: C,
            hidden: !A,
            children: [
             (0, p.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: w, trim: !0 }),
             n &&
              (0, p.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, p.jsx)(o.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(w).catch((e) => console.error('Copy code failed', e));
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
  18439(e, n, a) {
   a.d(n, { R: () => r, x: () => i });
   var l = a(30758);
   const o = {},
    t = l.createContext(o);
   function r(e) {
    const n = l.useContext(t);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), l.createElement(t.Provider, { value: n }, e.children));
   }
  },
  22045(e, n, a) {
   (a.r(n), a.d(n, { assets: () => d, contentTitle: () => s, default: () => h, frontMatter: () => i, metadata: () => l, toc: () => c }));
   const l = JSON.parse('{"id":"richtlijnen/content/video/gebarentaal","title":"Gebarentaal","description":"Richtlijnen voor gebarentaal bij video\'s binnen NL Design System","source":"@site/docs/richtlijnen/content/video/gebarentaal.mdx","sourceDirName":"richtlijnen/content/video","slug":"/richtlijnen/content/video/gebarentaal","permalink":"/richtlijnen/content/video/gebarentaal","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/video/gebarentaal.mdx","tags":[],"version":"current","frontMatter":{"title":"Gebarentaal","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Gebarentaal","pagination_label":"Gebarentaal","description":"Richtlijnen voor gebarentaal bij video\'s binnen NL Design System","slug":"/richtlijnen/content/video/gebarentaal","keywords":["video","YouTube","Vimeo","gebarentaal","sign language","gebaren tolk","Nederlandse gebarentaal","NGT","Nederlands met Gebaren","NmG","tolk"]},"sidebar":"richtlijnen","previous":{"title":"Flitsen","permalink":"/richtlijnen/content/video/flitsen"},"next":{"title":"Ondertiteling","permalink":"/richtlijnen/content/video/ondertiteling"}}');
   var o = a(86070),
    t = a(18439),
    r = (a(9386), a(88022), a(78734));
   const i = { title: 'Gebarentaal', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Gebarentaal', pagination_label: 'Gebarentaal', description: "Richtlijnen voor gebarentaal bij video's binnen NL Design System", slug: '/richtlijnen/content/video/gebarentaal', keywords: ['video', 'YouTube', 'Vimeo', 'gebarentaal', 'sign language', 'gebaren tolk', 'Nederlandse gebarentaal', 'NGT', 'Nederlands met Gebaren', 'NmG', 'tolk'] },
    s = 'Video met gebarentaal',
    d = {},
    c = [{ value: 'Voordelen', id: 'voordelen', level: 2 }, { value: 'Wanneer voeg je gebarentaal toe aan een video?', id: 'wanneer-voeg-je-gebarentaal-toe-aan-een-video', level: 2 }, { value: 'Een gebarentolk vinden', id: 'een-gebarentolk-vinden', level: 2 }, { value: 'Gebarentaal opnemen voor je video', id: 'gebarentaal-opnemen-voor-je-video', level: 2 }, { value: 'Gebarentaal toevoegen in de videospeler', id: 'gebarentaal-toevoegen-in-de-videospeler', level: 2 }, { value: 'Automatisch gegenereerde gebarentaal', id: 'automatisch-gegenereerde-gebarentaal', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function g(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'video-met-gebarentaal', children: 'Video met gebarentaal' }) }), '\n', (0, o.jsx)(n.p, { children: 'Een gebarentaal is een taal waarbij mensen met elkaar communiceren door gebaren te maken met hun handen, lichaamshouding en gezichtsuitdrukking (mimiek).' }), '\n', (0, o.jsx)(n.p, { children: 'Net zoals ieder land \xe9\xe9n of meerdere gesproken talen heeft, geldt dat ook voor gebarentalen. Zelfs binnen de landen zijn er weer regionale verschillen, net zoals gesproken talen regionale verschillen kennen. De offici\xeble gebarentaal in Nederland is Nederlandse Gebarentaal.' }), '\n', (0, o.jsx)(n.p, { children: 'Daarnaast is er ook een vorm van gebarentaal waarbij een sprekend persoon tijdens het praten af en toe gebaren toevoegt om woorden te benadrukken. Zo is diegene iets makkelijker te begrijpen voor mensen die gebarentaal gebruiken. Deze vorm van gebarentaal noemen we in Nederland "Nederlands ondersteund met gebaren (NmG)".' }), '\n', (0, o.jsx)(n.p, { children: 'Omdat gesproken talen met ondersteuning van gebaren geen volledige en offici\xeble talen zijn, hebben we het in deze richtlijnen alleen over (Nederlandse) gebarentaal.' }), '\n', (0, o.jsx)(n.h2, { id: 'voordelen', children: 'Voordelen' }), '\n', (0, o.jsxs)(n.p, { children: ['Het toevoegen van gebarentaal aan je video helpt doven en slechthorenden de informatie in de video makkelijker te begrijpen. Voor veel dove en slechthorende mensen is gebarentaal hun moedertaal en het gesproken Nederlands (of een andere gesproken taal) een tweede taal. Gebarentaal heeft ook geen geschreven vorm. Geschreven content, zoals ', (0, o.jsx)(n.a, { href: '/wcag/1.2.6/', children: 'ondertiteling' }), ' bij een video, is daarom moeilijker te volgen.'] }), '\n', (0, o.jsx)(n.h2, { id: 'wanneer-voeg-je-gebarentaal-toe-aan-een-video', children: 'Wanneer voeg je gebarentaal toe aan een video?' }), '\n', (0, o.jsx)(n.p, { children: "Het toevoegen van gebarentaal aan web-video's is in Nederland in de meeste gevallen niet verplicht. Toch is het belangrijk om na te gaan of gebarentaal een essenti\xeble toevoeging is aan de video die je aanbiedt. Bijvoorbeeld wanneer je video's maakt over onderwerpen waarbij het heel belangrijk is dat iedereen de informatie kan begrijpen, zoals:" }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Informatie rondom crisis- en noodsituaties. De overheid is verplicht deze informatie ook (zoveel mogelijk) aan te bieden in NGT. Dit staat in de ', (0, o.jsx)(n.a, { href: 'https://www.rijksoverheid.nl/onderwerpen/erkende-talen/de-nederlandse-gebarentaal-ngt', children: 'Wet Erkenning Nederlandse Gebarentaal' }), '. Heeft jouw organisatie deze verantwoordelijkheid? Zorg er dan voor dat jullie hier een plan voor hebben klaarliggen.'] }), '\n', (0, o.jsx)(n.li, { children: 'Informatie over het voldoen aan wettelijke verplichtingen, zoals het op tijd doorgeven van een verhuizing of het doorgeven van een geboorte of overlijden.' }), '\n', (0, o.jsx)(n.li, { children: 'Informatie over steun aanvragen, zoals subsidies, toeslagen en hulp bij huiselijk geweld, verslaving of schulden.' }), '\n', (0, o.jsx)(n.li, { children: 'Informatie over persoonlijke belangrijke onderwerpen, zoals opvoeding, onderwijs en mentale gezondheid.' }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'een-gebarentolk-vinden', children: 'Een gebarentolk vinden' }), '\n', (0, o.jsxs)(n.p, { children: ['Je kunt een gekwalificeerde gebarentolk vinden via een register, zoals het ', (0, o.jsx)(n.a, { href: 'https://zoekeentolkvertaler.bureauwbtv.nl/', children: 'Register be\xebdigde tolken en vertalers' }), ' en het ', (0, o.jsx)(n.a, { href: 'https://www.stichtingrtgs.nl/Tolken?page2746=1&size2746=50', children: 'Openbaar register van gekwalificeerde tolken gebarentaal en schrijftolken' }), '.'] }), '\n', (0, o.jsx)(n.h2, { id: 'gebarentaal-opnemen-voor-je-video', children: 'Gebarentaal opnemen voor je video' }), '\n', (0, o.jsx)(n.p, { children: 'Je maakt vervolgens een video-opname van de tolk, die je in of bij de video plaatst. Let daarbij op:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Dat de gebarentolk constant volledig in beeld is.' }), '\n', (0, o.jsxs)(n.li, { children: ['Dat de gebaren, mimiek en lichaamshouding goed zichtbaar zijn. Let daarbij op:', '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Goede verlichting.' }), '\n', (0, o.jsx)(n.li, { children: 'Een rustige achtergrond in \xe9\xe9n kleur, met voldoende contrast tussen de achtergrond en de tolk.\nJe kunt ook een green screen gebruiken. Let er in dat geval op dat de tolk altijd goed zichtbaar is op de achtergrond van de video.' }), '\n', (0, o.jsx)(n.li, { children: 'Kleding zonder patronen, die goed contrasteert met de huidskleur van de tolk.' }), '\n'] }), '\n'] }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Laat de gebarentaal die je voor je video maakt of laat maken altijd controleren door \xe9\xe9n of meerdere mensen die gebarentaal gebruiken, zodat de gebarentaal-opname zo min mogelijk fouten bevat.' }), '\n', (0, o.jsx)(n.h2, { id: 'gebarentaal-toevoegen-in-de-videospeler', children: 'Gebarentaal toevoegen in de videospeler' }), '\n', (0, o.jsx)(n.p, { children: 'De meeste videospelers bieden geen ruimte voor een apart video-bestand voor gebarentaal. In de meeste gevallen zul je de video-opname dan ook video-in-video moeten monteren. Let daarbij op:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Dat het beeld met de gebarentolk niet overlapt met belangrijke informatie in beeld.' }), '\n', (0, o.jsx)(n.li, { children: 'Dat het beeld met de gebarentolk groot genoeg is om de gebaren, mimiek en lichaamshouding goed te kunnen interpreteren.' }), '\n', (0, o.jsx)(n.li, { children: 'Dat de gebaren synchroon lopen met de gesproken audio in de video.' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Als de videospeler die je gebruikt wel de optie biedt voor een apart bestand kun je daar natuurlijk gebruik van maken. Lees de handleiding van de videospeler dan goed door voor de benodigde specificaties.' }), '\n', (0, o.jsx)(n.h2, { id: 'automatisch-gegenereerde-gebarentaal', children: 'Automatisch gegenereerde gebarentaal' }), '\n', (0, o.jsx)(n.p, { children: 'Je kunt de ondertiteling van je video al automatisch laten maken. Voor gebarentaal komt deze mogelijkheid ook steeds vaker voor.' }), '\n', (0, o.jsx)(n.p, { children: 'Gebarentaal verschilt per land \u2014 en soms zelfs per regio. Zorg dus dat de aanbieder expert is in de specifieke gebarentaal van jouw doelgroep. Waar je bij ondertiteling vooral moet controleren of de tekst juist is en interpunctie bevat, is het bij gebarentaal belangrijk dat zowel de handen, de mimiek en de lichaamshouding kloppen. Anders kan je boodschap totaal verkeerd overkomen.' }), '\n', (0, o.jsx)(n.p, { children: 'Gebruik automatisch gegenereerde gebarentaal pas als uit gebruikersonderzoek blijkt dat het ook daadwerkelijk werkt voor dove en slechthorende mensen. Laat de kwaliteit altijd toetsen door mensen die de taal dagelijks gebruiken. Want alleen dan weet je zeker dat je iedereen echt bereikt.' }), '\n', (0, o.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, o.jsx)(n.p, { children: 'Controleer voor iedere video met gebarentaal:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Is de tolk volledig in beeld?' }), '\n', (0, o.jsx)(n.li, { children: 'Zijn de gebaren, mimiek en lichaamshouding goed zichtbaar?' }), '\n', (0, o.jsx)(n.li, { children: 'Overlapt de tolk niet met belangrijke informatie in beeld?' }), '\n', (0, o.jsx)(n.li, { children: 'Is het beeld met de tolk groot genoeg?' }), '\n', (0, o.jsx)(n.li, { children: 'Lopen de gebaren synchroon met de audio?' }), '\n', (0, o.jsx)(n.li, { children: 'Kloppen de gebaren? Laat dit controleren door \xe9\xe9n of meerdere mensen die gebarentaal gebruiken.' }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG-succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.2.6/', children: 'Succescriterium 1.2.6 Gebarentaal (vooraf opgenomen)' }) }), '\n'] }), '\n', (0, o.jsx)(r.Ay, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g(e);
   }
  },
  51627(e, n, a) {
   a.d(n, { K: () => s, n: () => i });
   var l = a(13526),
    o = a(96345),
    t = a(37168),
    r = a(86070);
   const i = ({ className: e, ...n }) => {
     const a = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, r.jsx)('div', { className: a, children: n.children });
    },
    s = ({ className: e, label: n, heading: a, headingLevel: i, headingApperance: s, ...d }) => {
     const c = (0, l.A)('utrecht-accordion__section', e);
     return (0, r.jsxs)('details', { className: c, ...d, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(o.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [a && (0, r.jsx)(t.D, { level: i, appearance: s, children: a }), n] })] }) }), (0, r.jsx)('div', { className: 'utrecht-accordion__panel', children: d.children })] });
    };
  },
  78734(e, n, a) {
   a.d(n, { Ay: () => i, RM: () => t });
   var l = a(86070),
    o = a(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  88022(e, n, a) {
   a.d(n, { $: () => g, x: () => c });
   var l = a(4077),
    o = a(58315),
    t = a(46447),
    r = a(13526),
    i = a(45980),
    s = a(30758),
    d = a(86070);
   const c = (0, s.createContext)({}),
    g = ({ title: e, appearance: n, description: a, children: s, figure: g }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      v = g ? 'figure' : 'div',
      b = g ? 'figcaption' : 'div',
      m = 'string' == typeof a ? (0, d.jsx)(i.oz, { children: a }) : a;
     return (0, d.jsxs)(v, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(b, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, d.jsx)(t.fz, { children: e })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, d.jsx)(t.fz, { children: e })] }), m] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: s }) })] });
    };
  },
  95822(e, n, a) {
   a.d(n, { M: () => d });
   var l = a(46447),
    o = a(16194),
    t = a(30758),
    r = a(88022);
   const i = {
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
   var s = a(86070);
   function d({ lineNumber: e, syntax: n, textContent: a, trim: d }) {
    let c = a;
    const { title: g, type: h } = (0, t.useContext)(r.x),
     v = (0, t.useId)();
    return (d && (c = c.trim()), (0, s.jsx)(o.f4, { theme: i, code: c, language: n || '', children: ({ style: n, tokens: a, getLineProps: o, getTokenProps: t }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: v, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', g ? ': ' : ' ', g] }), (0, s.jsx)(l.NG, { tabIndex: 0, role: g ? 'region' : void 0, 'aria-labelledby': v, style: n, children: a.map((n, a) => (0, s.jsxs)('span', { ...o({ line: n }), children: [e && (0, s.jsx)('span', { children: a + 1 }), n.map((e, n) => (0, s.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, a)) })] }) }));
   }
  },
 },
]);
