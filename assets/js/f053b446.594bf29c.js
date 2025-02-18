(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [88474],
 {
  93514: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => i });
   var r = n(52676),
    s = n(40139);
   function o(e) {
    const t = { a: 'a', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Gebruik jij \xe9\xe9n van de implementaties van deze component of heb je je eigen component gemaakt? In beide gevallen geldt: met onderstaande acceptatiecriteria kun je nagaan of jouw gebruik van deze component klopt met NL Design System.' }), '\n', (0, r.jsxs)(t.p, { children: ['Als je implementatie voldoet aan de acceptatiecriteria voor deze component, kun je er vanuit gaan dat je gebruik van deze component voldoet aan WCAG, niveau A en AA, en voor ', (0, r.jsx)(t.a, { href: 'https://nldesignsystem.nl/wcag/2.5.5', children: '2.5.5 Grootte van het aanwijsgebied uitgebreid' }), ') AAA.'] })] });
   }
   function i(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  56923: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => i });
   var r = n(52676),
    s = n(40139);
   function o(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(t.p, { children: ['Als je het ', (0, r.jsx)(t.code, { children: 'code' }), '-element gebruikt en met CSS een eigen kleur definieert voor ', (0, r.jsx)(t.code, { children: 'background-color' }), ', dan moet deze achtergrondkleur een contrastverhouding hebben van minimaal 3:1 met de achtergrondkleur van de pagina.'] }), '\n', (0, r.jsx)(t.p, { children: 'Dit geldt niet als je de achtergrondkleur niet zelf definieert, maar overlaat aan de browser. Daarvoor bestaat namelijk een uitzondering in het WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content.' }), '\n', (0, r.jsxs)(t.p, { children: ['Dit geldt ook niet als het lettertype of de weergave van de code duidelijke te onderscheiden is als code, door bijvoorbeeld het kiezen van een ', (0, r.jsx)(t.a, { href: 'https://en.wikipedia.org/wiki/List_of_monospaced_typefaces', children: 'monospace lettertype' }), '.'] }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  47913: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => i });
   var r = n(52676),
    s = n(40139);
   function o(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden." }), '\n', (0, r.jsx)(t.p, { children: 'Zorg ervoor dat het element mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsx)(t.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Zodat er geen horizontale scrollbar ontstaat of tekst onleesbaar wordt.' }), '\n', (0, r.jsx)(t.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte;' }), '\n', (0, r.jsx)(t.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte;" }), '\n', (0, r.jsx)(t.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte;' }), '\n', (0, r.jsx)(t.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(t.p, { children: ['Dit is te testen met een ', (0, r.jsx)(t.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(t.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/voorkeur', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/lettergrootte', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  68934: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => i });
   var r = n(52676),
    s = n(40139);
   function o(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(t.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(t.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(t.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(t.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  50553: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => i });
   var r = n(52676),
    s = n(40139);
   function o(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Als je de tekst vergroot tot 200% (via browserzoom en via de browserinstellingen voor tekstgrootte) blijft de tekst in zijn geheel zichtbaar.' }), '\n', (0, r.jsx)(t.p, { children: 'Zorg ervoor dat het element mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsx)(t.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Zodat er geen horizontale scrollbar ontstaat of tekst onleesbaar wordt.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/voorkeur', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/lettergrootte', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  99781: (e, t, n) => {
   'use strict';
   n.r(t), n.d(t, { assets: () => S, component: () => V, contentTitle: () => L, default: () => E, description: () => P, frontMatter: () => Z, issueNumber: () => F, metadata: () => _, title: () => M, toc: () => D });
   var r,
    s,
    o,
    i,
    c,
    a,
    l,
    d,
    h = n(52676),
    u = n(40139),
    m = n(13270),
    g = n(75271);
   function p() {
    return (
     (p = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
         }
         return e;
        }),
     p.apply(this, arguments)
    );
   }
   const j = (e) => {
    let { title: t, titleId: n, ...h } = e;
    return g.createElement('svg', p({ width: 960, height: 540, viewBox: '0 0 960 540', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', 'aria-label': "Een zin met in de lopende tekst het woord 'code' dat is opgemaakt met een achtergrond en een ander lettertype. Het stukje code is aangeduid met het cijfer 1.", role: 'img', 'aria-labelledby': n }, h), t ? g.createElement('title', { id: n }, t) : null, r || (r = g.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), s || (s = g.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), o || (o = g.createElement('path', { d: 'M317.904 263.976c1.664 0 2.997.389 4 1.168 1.013.768 1.52 2.197 1.52 4.288 0 2.037-.507 3.477-1.52 4.32-1.003.832-2.224 1.248-3.664 1.248h-2.64v-11.024h2.304Zm-.784 1.216v8.608h1.232c1.024 0 1.856-.315 2.496-.944.64-.629.96-1.771.96-3.424 0-1.163-.165-2.053-.496-2.672-.331-.629-.752-1.045-1.264-1.248-.512-.213-1.115-.32-1.808-.32h-1.12Zm10.169 1.376V275h-1.472v-8.432h1.472Zm-.752-4.048c.309 0 .56.096.752.288a.977.977 0 0 1 .288.72.977.977 0 0 1-.288.72c-.192.181-.443.272-.752.272-.299 0-.544-.091-.736-.272a.977.977 0 0 1-.288-.72c0-.288.096-.528.288-.72a.996.996 0 0 1 .736-.288Zm8.052 12.096a3.238 3.238 0 0 1-1.888.576c-.715 0-1.275-.203-1.68-.608-.395-.416-.592-1.013-.592-1.792v-5.088h-1.472v-1.136h1.472v-1.904l1.472-.176v2.08h2l-.16 1.136h-1.84v5.024c0 .437.074.757.224.96.16.192.421.288.784.288.33 0 .704-.112 1.12-.336l.56.976Zm7.231-8.048V275h-1.472v-8.432h1.472Zm-.752-4.048c.309 0 .56.096.752.288a.977.977 0 0 1 .288.72.977.977 0 0 1-.288.72c-.192.181-.443.272-.752.272-.299 0-.544-.091-.736-.272a.977.977 0 0 1-.288-.72c0-.288.096-.528.288-.72a.996.996 0 0 1 .736-.288Zm6.084 3.856c.576 0 1.093.08 1.552.24.458.16.896.4 1.312.72l-.624.928a5.02 5.02 0 0 0-1.104-.544 3.335 3.335 0 0 0-1.088-.176c-.48 0-.859.101-1.136.304a.918.918 0 0 0-.416.8c0 .341.128.608.384.8.266.192.741.379 1.424.56.938.235 1.637.555 2.096.96.469.405.704.96.704 1.664 0 .832-.326 1.467-.976 1.904-.64.437-1.424.656-2.352.656-1.28 0-2.342-.368-3.184-1.104l.784-.896c.714.544 1.504.816 2.368.816.554 0 .992-.112 1.312-.336.33-.235.496-.549.496-.944 0-.288-.059-.517-.176-.688-.118-.181-.32-.336-.608-.464-.288-.139-.71-.283-1.264-.432-.896-.235-1.547-.549-1.952-.944-.395-.395-.592-.896-.592-1.504 0-.437.128-.832.384-1.184.266-.363.629-.64 1.088-.832a3.909 3.909 0 0 1 1.568-.304Zm15.783 4.16c0 .245-.011.496-.032.752h-5.376c.064.928.299 1.611.704 2.048.405.437.928.656 1.568.656.405 0 .779-.059 1.12-.176a4.504 4.504 0 0 0 1.072-.56l.64.88c-.896.704-1.877 1.056-2.944 1.056-1.173 0-2.091-.384-2.752-1.152-.651-.768-.976-1.824-.976-3.168 0-.875.139-1.648.416-2.32.288-.683.693-1.216 1.216-1.6.533-.384 1.157-.576 1.872-.576 1.12 0 1.979.368 2.576 1.104.597.736.896 1.755.896 3.056Zm-1.456-.432c0-.832-.165-1.467-.496-1.904-.331-.437-.827-.656-1.488-.656-1.205 0-1.861.885-1.968 2.656h3.952v-.096Zm10.175.432c0 .245-.011.496-.032.752h-5.376c.064.928.298 1.611.704 2.048.405.437.928.656 1.568.656.405 0 .778-.059 1.12-.176a4.523 4.523 0 0 0 1.072-.56l.64.88c-.896.704-1.878 1.056-2.944 1.056-1.174 0-2.091-.384-2.752-1.152-.651-.768-.976-1.824-.976-3.168 0-.875.138-1.648.416-2.32.288-.683.693-1.216 1.216-1.6.533-.384 1.157-.576 1.872-.576 1.12 0 1.978.368 2.576 1.104.597.736.896 1.755.896 3.056Zm-1.456-.432c0-.832-.166-1.467-.496-1.904-.331-.437-.827-.656-1.488-.656-1.206 0-1.862.885-1.968 2.656h3.952v-.096Zm7.774-3.728c.768 0 1.366.229 1.792.688.438.459.656 1.088.656 1.888V275h-1.472v-5.84c0-.597-.112-1.019-.336-1.264-.224-.245-.554-.368-.992-.368-.448 0-.842.128-1.184.384-.341.256-.661.624-.96 1.104V275h-1.472v-8.432h1.264l.128 1.248c.299-.448.667-.8 1.104-1.056a2.916 2.916 0 0 1 1.472-.384Zm15.834.192L390.942 275h-1.776l-2.912-8.432h1.6l2.208 7.12 2.192-7.12h1.552Zm4.788-.192c1.184 0 2.102.395 2.752 1.184.662.789.992 1.861.992 3.216 0 .875-.149 1.648-.448 2.32-.298.661-.73 1.179-1.296 1.552-.565.363-1.237.544-2.016.544-1.184 0-2.106-.395-2.768-1.184-.661-.789-.992-1.861-.992-3.216 0-.875.15-1.643.448-2.304.299-.672.731-1.189 1.296-1.552.566-.373 1.243-.56 2.032-.56Zm0 1.184c-1.461 0-2.192 1.077-2.192 3.232 0 2.144.726 3.216 2.176 3.216 1.451 0 2.176-1.077 2.176-3.232 0-2.144-.72-3.216-2.16-3.216Zm9.344-1.184c1.184 0 2.101.395 2.752 1.184.661.789.992 1.861.992 3.216 0 .875-.149 1.648-.448 2.32-.299.661-.731 1.179-1.296 1.552-.565.363-1.237.544-2.016.544-1.184 0-2.107-.395-2.768-1.184-.661-.789-.992-1.861-.992-3.216 0-.875.149-1.643.448-2.304.299-.672.731-1.189 1.296-1.552.565-.373 1.243-.56 2.032-.56Zm0 1.184c-1.461 0-2.192 1.077-2.192 3.232 0 2.144.725 3.216 2.176 3.216s2.176-1.077 2.176-3.232c0-2.144-.72-3.216-2.16-3.216Zm9.84-1.184c.298 0 .576.032.832.096l-.272 1.44a3.038 3.038 0 0 0-.736-.096c-.523 0-.944.192-1.264.576-.32.384-.571.981-.752 1.792V275h-1.472v-8.432h1.264l.144 1.712c.224-.629.528-1.104.912-1.424.384-.32.832-.48 1.344-.48Zm6.364 0c.96 0 1.722.389 2.288 1.168.565.768.848 1.845.848 3.232 0 .875-.134 1.648-.4 2.32-.267.661-.651 1.179-1.152 1.552-.502.363-1.088.544-1.76.544-.886 0-1.632-.373-2.24-1.12l-.144.928h-1.296v-11.824l1.472-.176v4.624c.608-.832 1.402-1.248 2.384-1.248Zm-.528 7.648c.65 0 1.157-.261 1.52-.784.373-.533.56-1.355.56-2.464 0-1.141-.171-1.963-.512-2.464-.342-.512-.827-.768-1.456-.768-.747 0-1.403.437-1.968 1.312v4.032c.224.352.496.629.816.832.33.203.677.304 1.04.304Zm12.54-3.488c0 .245-.011.496-.032.752h-5.376c.064.928.298 1.611.704 2.048.405.437.928.656 1.568.656.405 0 .778-.059 1.12-.176a4.523 4.523 0 0 0 1.072-.56l.64.88c-.896.704-1.878 1.056-2.944 1.056-1.174 0-2.091-.384-2.752-1.152-.651-.768-.976-1.824-.976-3.168 0-.875.138-1.648.416-2.32.288-.683.693-1.216 1.216-1.6.533-.384 1.157-.576 1.872-.576 1.12 0 1.978.368 2.576 1.104.597.736.896 1.755.896 3.056Zm-1.456-.432c0-.832-.166-1.467-.496-1.904-.331-.437-.827-.656-1.488-.656-1.206 0-1.862.885-1.968 2.656h3.952v-.096Zm10.174.432c0 .245-.01.496-.032.752h-5.376c.064.928.299 1.611.704 2.048.406.437.928.656 1.568.656a3.43 3.43 0 0 0 1.12-.176 4.486 4.486 0 0 0 1.072-.56l.64.88c-.896.704-1.877 1.056-2.944 1.056-1.173 0-2.09-.384-2.752-1.152-.65-.768-.976-1.824-.976-3.168 0-.875.139-1.648.416-2.32.288-.683.694-1.216 1.216-1.6.534-.384 1.158-.576 1.872-.576 1.12 0 1.979.368 2.576 1.104.598.736.896 1.755.896 3.056Zm-1.456-.432c0-.832-.165-1.467-.496-1.904-.33-.437-.826-.656-1.488-.656-1.205 0-1.861.885-1.968 2.656h3.952v-.096Zm5.487 5.088c-.544 0-.976-.16-1.296-.48-.309-.331-.464-.789-.464-1.376v-10.16l1.472-.176v10.304c0 .235.037.405.112.512.085.107.224.16.416.16.203 0 .384-.032.544-.096l.384 1.024a2.398 2.398 0 0 1-1.168.288Zm9.458-12.016V275h-1.296l-.144-1.168a3.126 3.126 0 0 1-1.04 1.008 2.78 2.78 0 0 1-1.392.352c-1.003 0-1.787-.395-2.352-1.184-.555-.789-.832-1.851-.832-3.184 0-.864.133-1.632.4-2.304.266-.672.65-1.195 1.152-1.568.501-.384 1.088-.576 1.76-.576.864 0 1.621.347 2.272 1.04V263l1.472.176Zm-3.552 10.848c.448 0 .832-.101 1.152-.304.32-.213.629-.528.928-.944v-4.128c-.278-.363-.576-.635-.896-.816a1.964 1.964 0 0 0-1.056-.288c-.651 0-1.158.272-1.52.816-.352.544-.528 1.355-.528 2.432 0 1.088.165 1.899.496 2.432.33.533.805.8 1.424.8Zm17.012-7.456L468.957 275h-1.776l-2.912-8.432h1.6l2.208 7.12 2.192-7.12h1.552Zm7.113 6.464c0 .341.059.597.176.768a1.1 1.1 0 0 0 .528.368l-.336 1.024c-.437-.053-.789-.176-1.056-.368-.266-.192-.464-.491-.592-.896-.565.843-1.402 1.264-2.512 1.264-.832 0-1.488-.235-1.968-.704s-.72-1.083-.72-1.84c0-.896.32-1.584.96-2.064.651-.48 1.568-.72 2.752-.72h1.296v-.624c0-.597-.144-1.024-.432-1.28-.288-.256-.73-.384-1.328-.384-.618 0-1.376.149-2.272.448l-.368-1.072c1.046-.384 2.016-.576 2.912-.576.992 0 1.734.245 2.224.736.491.48.736 1.168.736 2.064v3.856Zm-3.456 1.056c.843 0 1.504-.437 1.984-1.312v-1.936h-1.104c-1.557 0-2.336.576-2.336 1.728 0 .501.123.88.368 1.136.246.256.608.384 1.088.384Zm10.448-7.712c.768 0 1.365.229 1.792.688.437.459.656 1.088.656 1.888V275h-1.472v-5.84c0-.597-.112-1.019-.336-1.264-.224-.245-.555-.368-.992-.368a1.92 1.92 0 0 0-1.184.384c-.342.256-.662.624-.96 1.104V275h-1.472v-8.432h1.264l.128 1.248c.298-.448.666-.8 1.104-1.056a2.914 2.914 0 0 1 1.472-.384Zm16.169-3.2V275h-1.296l-.144-1.168a3.117 3.117 0 0 1-1.04 1.008 2.78 2.78 0 0 1-1.392.352c-1.003 0-1.787-.395-2.352-1.184-.555-.789-.832-1.851-.832-3.184 0-.864.133-1.632.4-2.304.267-.672.651-1.195 1.152-1.568.501-.384 1.088-.576 1.76-.576.864 0 1.621.347 2.272 1.04V263l1.472.176Zm-3.552 10.848c.448 0 .832-.101 1.152-.304.32-.213.629-.528.928-.944v-4.128c-.277-.363-.576-.635-.896-.816a1.96 1.96 0 0 0-1.056-.288c-.651 0-1.157.272-1.52.816-.352.544-.528 1.355-.528 2.432 0 1.088.165 1.899.496 2.432.331.533.805.8 1.424.8Zm12.954-3.488c0 .245-.01.496-.032.752h-5.376c.064.928.299 1.611.704 2.048.406.437.928.656 1.568.656a3.43 3.43 0 0 0 1.12-.176 4.486 4.486 0 0 0 1.072-.56l.64.88c-.896.704-1.877 1.056-2.944 1.056-1.173 0-2.09-.384-2.752-1.152-.65-.768-.976-1.824-.976-3.168 0-.875.139-1.648.416-2.32.288-.683.694-1.216 1.216-1.6.534-.384 1.158-.576 1.872-.576 1.12 0 1.979.368 2.576 1.104.598.736.896 1.755.896 3.056Zm-1.456-.432c0-.832-.165-1.467-.496-1.904-.33-.437-.826-.656-1.488-.656-1.205 0-1.861.885-1.968 2.656h3.952v-.096Z', fill: '#0A2750' })), i || (i = g.createElement('path', { fill: '#F2F4F6', d: 'M517 258h39v24h-39z' })), c || (c = g.createElement('path', { d: 'M522.416 274.024a3.26 3.26 0 0 0 1.176-.208 4.722 4.722 0 0 0 1.016-.528l.656.88a4.102 4.102 0 0 1-1.328.744 4.585 4.585 0 0 1-1.52.272c-.837 0-1.552-.179-2.144-.536a3.513 3.513 0 0 1-1.344-1.52c-.309-.656-.464-1.424-.464-2.304 0-.843.155-1.597.464-2.264.315-.672.765-1.2 1.352-1.584.592-.384 1.309-.576 2.152-.576.539 0 1.043.083 1.512.248.475.16.909.403 1.304.728l-.656.896a4.256 4.256 0 0 0-1.08-.56 3.227 3.227 0 0 0-1.096-.192c-.725 0-1.323.272-1.792.816-.469.544-.704 1.373-.704 2.488 0 .747.107 1.357.32 1.832.219.469.515.816.888 1.04.379.219.808.328 1.288.328Zm8.994-7.624c.794 0 1.458.181 1.992.544.538.357.941.864 1.208 1.52.272.656.408 1.429.408 2.32 0 .859-.139 1.619-.416 2.28-.278.661-.686 1.181-1.224 1.56-.534.373-1.195.56-1.984.56-.79 0-1.454-.181-1.992-.544-.539-.363-.947-.872-1.224-1.528-.272-.661-.408-1.432-.408-2.312 0-.869.138-1.635.416-2.296.277-.661.685-1.176 1.224-1.544.544-.373 1.21-.56 2-.56Zm0 1.096c-.726 0-1.275.269-1.648.808-.368.533-.552 1.365-.552 2.496 0 1.109.181 1.933.544 2.472.368.539.914.808 1.64.808.725 0 1.269-.269 1.632-.808.368-.539.552-1.368.552-2.488 0-1.12-.182-1.947-.544-2.48-.363-.539-.904-.808-1.624-.808Zm11.426-4.48 1.344.168V275h-1.176l-.128-1.112c-.315.448-.678.776-1.088.984-.406.208-.84.312-1.304.312-.731 0-1.334-.184-1.808-.552-.475-.368-.827-.88-1.056-1.536-.23-.661-.344-1.427-.344-2.296 0-.843.13-1.595.392-2.256.261-.667.637-1.189 1.128-1.568.496-.384 1.09-.576 1.784-.576.485 0 .912.085 1.28.256.368.165.693.411.976.736v-4.376Zm-1.904 4.464c-.704 0-1.246.275-1.624.824-.379.549-.568 1.381-.568 2.496 0 .725.077 1.333.232 1.824.154.491.381.859.68 1.104.304.245.674.368 1.112.368.48 0 .888-.136 1.224-.408.341-.272.624-.579.848-.92v-4.208a2.516 2.516 0 0 0-.832-.792 2.073 2.073 0 0 0-1.072-.288Zm7.513 3.784c.027.651.152 1.184.376 1.6.224.411.52.715.888.912.368.192.768.288 1.2.288a3.35 3.35 0 0 0 1.168-.192 4.904 4.904 0 0 0 1.08-.568l.632.888a4.636 4.636 0 0 1-1.352.728 4.627 4.627 0 0 1-1.544.264c-.816 0-1.512-.184-2.088-.552a3.543 3.543 0 0 1-1.32-1.536c-.298-.661-.448-1.427-.448-2.296 0-.853.152-1.611.456-2.272.304-.661.731-1.181 1.28-1.56.55-.379 1.198-.568 1.944-.568.71 0 1.32.168 1.832.504.512.331.904.805 1.176 1.424.278.613.416 1.347.416 2.2 0 .144-.002.28-.008.408a4.517 4.517 0 0 1-.024.328h-5.664Zm2.288-3.76c-.624 0-1.146.221-1.568.664-.416.443-.653 1.128-.712 2.056h4.392c-.016-.901-.213-1.579-.592-2.032-.378-.459-.885-.688-1.52-.688ZM564.592 266.376c.501 0 .96.075 1.376.224.416.139.816.368 1.2.688l-.704.928a3.365 3.365 0 0 0-.88-.464 2.56 2.56 0 0 0-.928-.16c-.683 0-1.216.272-1.6.816-.373.544-.56 1.349-.56 2.416s.187 1.856.56 2.368c.373.501.907.752 1.6.752.331 0 .635-.048.912-.144.277-.107.587-.272.928-.496l.672.96c-.768.619-1.627.928-2.576.928-1.141 0-2.043-.384-2.704-1.152-.651-.768-.976-1.829-.976-3.184 0-.896.149-1.68.448-2.352.299-.672.72-1.195 1.264-1.568.555-.373 1.211-.56 1.968-.56Zm7.424 0c1.184 0 2.101.395 2.752 1.184.661.789.992 1.861.992 3.216 0 .875-.149 1.648-.448 2.32-.299.661-.731 1.179-1.296 1.552-.565.363-1.237.544-2.016.544-1.184 0-2.107-.395-2.768-1.184-.661-.789-.992-1.861-.992-3.216 0-.875.149-1.643.448-2.304.299-.672.731-1.189 1.296-1.552.565-.373 1.243-.56 2.032-.56Zm0 1.184c-1.461 0-2.192 1.077-2.192 3.232 0 2.144.725 3.216 2.176 3.216s2.176-1.077 2.176-3.232c0-2.144-.72-3.216-2.16-3.216Zm14.64-1.184c.693 0 1.248.235 1.664.704.416.459.624 1.083.624 1.872V275h-1.472v-5.84c0-1.088-.395-1.632-1.184-1.632-.416 0-.768.123-1.056.368-.288.235-.597.608-.928 1.12V275h-1.472v-5.84c0-1.088-.395-1.632-1.184-1.632-.427 0-.784.123-1.072.368-.288.245-.592.619-.912 1.12V275h-1.472v-8.432h1.264l.128 1.232c.629-.949 1.44-1.424 2.432-1.424.523 0 .965.133 1.328.4.373.267.64.64.8 1.12.331-.491.693-.864 1.088-1.12.405-.267.88-.4 1.424-.4Zm9.127 0c1.077 0 1.866.384 2.368 1.152.501.768.752 1.851.752 3.248 0 1.323-.288 2.389-.864 3.2-.576.811-1.392 1.216-2.448 1.216-.939 0-1.675-.32-2.208-.96v4l-1.472.176v-11.84h1.264l.112 1.136a3.137 3.137 0 0 1 1.12-.976 2.866 2.866 0 0 1 1.376-.352Zm-.544 7.616c1.386 0 2.08-1.072 2.08-3.216 0-2.155-.635-3.232-1.904-3.232-.416 0-.795.123-1.136.368a3.6 3.6 0 0 0-.896.944v4.112c.213.331.48.587.8.768.32.171.672.256 1.056.256Zm9.34-7.616c1.184 0 2.101.395 2.752 1.184.661.789.992 1.861.992 3.216 0 .875-.15 1.648-.448 2.32-.299.661-.731 1.179-1.296 1.552-.566.363-1.238.544-2.016.544-1.184 0-2.107-.395-2.768-1.184-.662-.789-.992-1.861-.992-3.216 0-.875.149-1.643.448-2.304.298-.672.73-1.189 1.296-1.552.565-.373 1.242-.56 2.032-.56Zm0 1.184c-1.462 0-2.192 1.077-2.192 3.232 0 2.144.725 3.216 2.176 3.216 1.45 0 2.176-1.077 2.176-3.232 0-2.144-.72-3.216-2.16-3.216Zm10.143-1.184c.768 0 1.366.229 1.792.688.438.459.656 1.088.656 1.888V275h-1.472v-5.84c0-.597-.112-1.019-.336-1.264-.224-.245-.554-.368-.992-.368-.448 0-.842.128-1.184.384-.341.256-.661.624-.96 1.104V275h-1.472v-8.432h1.264l.128 1.248c.299-.448.667-.8 1.104-1.056a2.916 2.916 0 0 1 1.472-.384Zm11.775 4.16c0 .245-.01.496-.032.752h-5.376c.064.928.299 1.611.704 2.048.406.437.928.656 1.568.656a3.43 3.43 0 0 0 1.12-.176 4.486 4.486 0 0 0 1.072-.56l.64.88c-.896.704-1.877 1.056-2.944 1.056-1.173 0-2.09-.384-2.752-1.152-.65-.768-.976-1.824-.976-3.168 0-.875.139-1.648.416-2.32.288-.683.694-1.216 1.216-1.6.534-.384 1.158-.576 1.872-.576 1.12 0 1.979.368 2.576 1.104.598.736.896 1.755.896 3.056Zm-1.456-.432c0-.832-.165-1.467-.496-1.904-.33-.437-.826-.656-1.488-.656-1.205 0-1.861.885-1.968 2.656h3.952v-.096Zm7.775-3.728c.768 0 1.365.229 1.792.688.437.459.656 1.088.656 1.888V275h-1.472v-5.84c0-.597-.112-1.019-.336-1.264-.224-.245-.555-.368-.992-.368a1.92 1.92 0 0 0-1.184.384c-.341.256-.661.624-.96 1.104V275h-1.472v-8.432h1.264l.128 1.248c.299-.448.667-.8 1.104-1.056a2.916 2.916 0 0 1 1.472-.384Zm9.663 8.24a3.238 3.238 0 0 1-1.888.576c-.715 0-1.275-.203-1.68-.608-.395-.416-.592-1.013-.592-1.792v-5.088h-1.472v-1.136h1.472v-1.904l1.472-.176v2.08h2l-.16 1.136h-1.84v5.024c0 .437.075.757.224.96.16.192.421.288.784.288.331 0 .704-.112 1.12-.336l.56.976Zm1.972-1.648c.32 0 .587.107.8.32.213.213.32.475.32.784 0 .309-.107.576-.32.8-.213.213-.48.32-.8.32-.309 0-.571-.107-.784-.32a1.122 1.122 0 0 1-.32-.8c0-.309.107-.571.32-.784.213-.213.475-.32.784-.32Z', fill: '#0A2750' })), a || (a = g.createElement('path', { d: 'M518.25 250.25h36.5M537 210v40', stroke: '#DE00A4', strokeWidth: 2, strokeLinecap: 'square', strokeLinejoin: 'bevel' })), l || (l = g.createElement('rect', { x: 521, y: 178, width: 32, height: 32, rx: 16, fill: '#DE00A4' })), d || (d = g.createElement('path', { d: 'M539.502 188.368V200.5H537v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43h2.25Z', fill: '#fff' })));
   };
   var w = n(93514);
   function y(e) {
    const t = { code: 'code', p: 'p', pre: 'pre', strong: 'strong', ...(0, u.a)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsxs)(t.p, { children: ['Gebruik voor tekst gemarkeerd als code semantische HTML. In het geval van de component Code is dat het HTML-element ', (0, h.jsx)(t.code, { children: 'code' }), '.'] }), '\n', (0, h.jsx)(t.p, { children: 'Dus niet zo:' }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\nEen zin over het element <span class="code">button</span> met een achtergrondkleur in CSS.\n' }) }), '\n', (0, h.jsx)(t.p, { children: 'Maar zo:' }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-html', children: 'Een zin over het element `<code>button</code>` met een achtergrondkleur in CSS.\n' }) }), '\n', (0, h.jsxs)(t.p, { children: [(0, h.jsx)(t.strong, { children: 'Let op' }), ': Het element ', (0, h.jsx)(t.code, { children: '<code>' }), ' wordt op het moment van schrijven (2024) nog niet ondersteund door alle hulpsoftware. Wellicht in de toekomst wel, dan is het goed om nu alvast het juiste element te gebruiken.'] })] });
   }
   function v(e = {}) {
    const { wrapper: t } = { ...(0, u.a)(), ...e.components };
    return t ? (0, h.jsx)(t, { ...e, children: (0, h.jsx)(y, { ...e }) }) : y(e);
   }
   var f = n(56923),
    A = n(47913),
    k = n(68934),
    b = n(50553),
    x = n(27794),
    C = n(97520),
    T = n(76233),
    G = n(55240),
    W = n(8657),
    R = n(57716);
   function z(e) {
    const t = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', p: 'p', pre: 'pre', ...(0, u.a)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(t.h1, { id: 'gebruik-code', children: 'Gebruik Code' }), '\n', (0, h.jsx)(t.h2, { id: 'css', children: 'CSS' }), '\n', (0, h.jsx)(t.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, h.jsxs)(t.p, { children: [(0, h.jsxs)(t.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-css', children: [(0, h.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Fcode-css.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/code-css'] }), '\nversie 1.'] }), '\n', (0, h.jsxs)(t.p, { children: ['Gebruik de ', (0, h.jsx)(t.code, { children: 'nl-code' }), ' class name op een ', (0, h.jsx)(t.code, { children: 'code' }), ' element:'] }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-html', children: '<code dir="ltr" translate="no" class="nl-code"> import { Code } from \'@nl-design-system-candidate/code-react\'; </code>\n' }) }), '\n', (0, h.jsx)(t.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/code-css\n' }) }), '\n', (0, h.jsx)(t.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/code-css/dist/code.css" />\n' }) }), '\n', (0, h.jsxs)(t.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, h.jsx)(t.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/code-css/dist/code.css" />\n' }) }), '\n', (0, h.jsx)(t.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/code-css/code.css";\n' }) }), '\n', (0, h.jsx)(t.h2, { id: 'react', children: 'React' }), '\n', (0, h.jsx)(t.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, h.jsxs)(t.p, { children: [(0, h.jsxs)(t.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-react', children: [(0, h.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Fcode-react.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/code-react'] }), '\nversie 1.'] }), '\n', (0, h.jsx)(t.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/code-react\n' }) }), '\n', (0, h.jsx)(t.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-jsx', children: 'import { Code } from "@nl-design-system-candidate/code-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <Code>import {Code} from \'@nl-design-system-candidate/code-react\';</Code>\n      </body>\n    </html>\n  );\n};\n' }) }), '\n', (0, h.jsx)(t.h2, { id: 'figma', children: 'Figma' }), '\n', (0, h.jsxs)(t.p, { children: ['De Figma component staat in ', (0, h.jsx)(t.a, { href: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=16013-20509&t=j0HWpfOYWPeYBX0r-4', children: 'NL Design System Voorbeeld Bibliotheek \u2014 Code' }), '.'] })] });
   }
   function N(e = {}) {
    const { wrapper: t } = { ...(0, u.a)(), ...e.components };
    return t ? (0, h.jsx)(t, { ...e, children: (0, h.jsx)(z, { ...e }) }) : z(e);
   }
   const Z = { title: 'Code', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Code', pagination_label: 'Code', description: 'Markeert korte tekst die code vertegenwoordigt.', slug: '/code', keywords: ['code block'] },
    L = void 0,
    _ = { id: 'componenten/code/index', title: 'Code', description: 'Markeert korte tekst die code vertegenwoordigt.', source: '@site/docs/componenten/code/index.mdx', sourceDirName: 'componenten/code', slug: '/code', permalink: '/code', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/code/index.mdx', tags: [], version: 'current', frontMatter: { title: 'Code', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Code', pagination_label: 'Code', description: 'Markeert korte tekst die code vertegenwoordigt.', slug: '/code', keywords: ['code block'] }, sidebar: 'componenten', previous: { title: 'Checkbox Group', permalink: '/checkbox-group' }, next: { title: 'Code Block', permalink: '/code-block' } },
    S = {},
    D = [
     { value: 'Gebruik deze component', id: 'gebruik-deze-component', level: 2 },
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Implementaties', id: 'implementaties', level: 2 },
     { value: 'Acceptatiecriteria', id: 'acceptatiecriteria', level: 2 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ],
    M = 'Code',
    P = 'Markeert korte tekst die code vertegenwoordigt.',
    F = 326,
    V = m.find((e) => e.number === F);
   function O(e) {
    const t = { a: 'a', h2: 'h2', p: 'p', ...(0, u.a)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, {
     children: [
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      (0, h.jsx)(W.Rv, { component: V, headingLevel: 1, description: P }),
      '\n',
      (0, h.jsx)(C.I, { component: V }),
      '\n',
      (0, h.jsx)(t.h2, { id: 'gebruik-deze-component', children: 'Gebruik deze component' }),
      '\n',
      (0, h.jsxs)(t.p, { children: ['Let op: Gebruik de component ', (0, h.jsx)(t.a, { href: '/code-block', children: 'Code Block' }), ' als de code meerdere regels beslaat.'] }),
      '\n',
      (0, h.jsx)(R.U, { omitH1: !0, headingLevel: 3, children: (0, h.jsx)(N, {}) }),
      '\n',
      (0, h.jsx)(t.h2, { id: 'anatomie', children: 'Anatomie' }),
      '\n',
      (0, h.jsx)(T.B, { component: V, illustration: j }),
      '\n',
      (0, h.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
      '\n',
      (0, h.jsx)(W.cN, { component: V, headingLevel: 3 }),
      '\n',
      (0, h.jsx)(t.h2, { id: 'implementaties', children: 'Implementaties' }),
      '\n',
      (0, h.jsx)(W.W, { component: V, headingLevel: 3 }),
      '\n',
      (0, h.jsx)(t.h2, { id: 'acceptatiecriteria', children: 'Acceptatiecriteria' }),
      '\n',
      (0, h.jsx)(w.ZP, {}),
      '\n',
      (0, h.jsx)(G.t, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid visueel ontwerp',
       items: [
        { title: 'De tekst, gemarkeerd als code, is niet alleen herkenbaar aan een andere achtergrondkleur', sc: '1.4.1', status: '', component: (0, h.jsx)(x.ZP, {}) },
        { title: 'De tekst, gemarkeerd als code, heeft voldoende contrast met de achtergrondkleur', sc: '1.4.3', status: '', component: (0, h.jsx)(k.ZP, {}) },
        { title: 'Wanneer de achtergrondkleur van de Code component anders is dan de default browserkleur, dan heeft deze een kleurcontrast van minimaal 3:1 met de achtergrondkleur van de pagina', sc: '1.4.11', status: '', component: (0, h.jsx)(f.ZP, {}) },
       ],
      }),
      '\n',
      (0, h.jsx)(G.t, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid zoom en herschalen',
       items: [
        { title: 'Als je inzoomt naar 200% blijft alle tekst leesbaar', sc: '1.4.4', status: '', component: (0, h.jsx)(b.ZP, {}) },
        { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar', sc: '1.4.12', status: '', component: (0, h.jsx)(A.ZP, {}) },
       ],
      }),
      '\n',
      (0, h.jsx)(G.t, { headingLevel: 3, testCategory: 'Toegankelijkheid screenreader', items: [{ title: 'Het juiste HTML-element voor de Code component is toegepast', sc: '1.3.1', status: '', component: (0, h.jsx)(v, {}) }] }),
      '\n',
      (0, h.jsx)(t.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }),
      '\n',
      (0, h.jsx)(W.vM, { component: V, headingLevel: 3 }),
     ],
    });
   }
   function E(e = {}) {
    const { wrapper: t } = { ...(0, u.a)(), ...e.components };
    return t ? (0, h.jsx)(t, { ...e, children: (0, h.jsx)(O, { ...e }) }) : O(e);
   }
  },
  27794: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => i });
   var r = n(52676),
    s = n(40139);
   function o(e) {
    const t = { p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Zorg ervoor dat kleur niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, r.jsx)(t.p, { children: 'Bijvoorbeeld: geef een foutmelding niet alleen aan met een rood randje, maar ook in tekst en eventueel met een icoontje dat een foutmelding markeert.' })] });
   }
   function i(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  54907: (e, t, n) => {
   var r = { './utrecht-alert_46.entry.js': [16972, 16972], './utrecht-backdrop.entry.js': [52078, 52078], './utrecht-breadcrumb-nav.entry.js': [79009, 79009], './utrecht-checkbox.entry.js': [40557, 40557], './utrecht-column-layout.entry.js': [91097, 91097], './utrecht-contact-card-template.entry.js': [78516, 78516], './utrecht-custom-checkbox.entry.js': [92912, 92912], './utrecht-data-list-actions.entry.js': [59737, 59737], './utrecht-data-list-item.entry.js': [65183, 65183], './utrecht-data-list-key.entry.js': [22659, 22659], './utrecht-data-list-value.entry.js': [22226, 22226], './utrecht-data-list.entry.js': [94967, 94967], './utrecht-digid-button.entry.js': [9767, 9767], './utrecht-digid-logo.entry.js': [70738, 70738], './utrecht-eherkenning-logo.entry.js': [97179, 97179], './utrecht-eidas-logo.entry.js': [85142, 85142], './utrecht-form-field-error-message.entry.js': [94003, 94003], './utrecht-form-toggle.entry.js': [69578, 69578], './utrecht-html-content.entry.js': [13111, 13111], './utrecht-icon-afspraak-maken.entry.js': [74085, 74085], './utrecht-icon-afval-container.entry.js': [8380, 8380], './utrecht-icon-afval-containerpas.entry.js': [73921, 73921], './utrecht-icon-afval-kalender.entry.js': [35838, 35838], './utrecht-icon-afval-pmd.entry.js': [70258, 70258], './utrecht-icon-afval-scheiden.entry.js': [73169, 73169], './utrecht-icon-afval.entry.js': [30047, 30047], './utrecht-icon-afvalkalender.entry.js': [7893, 7893], './utrecht-icon-alleen.entry.js': [96351, 96351], './utrecht-icon-arrow.entry.js': [6280, 6280], './utrecht-icon-auto.entry.js': [20926, 20926], './utrecht-icon-begroting.entry.js': [26977, 26977], './utrecht-icon-bestemmingsplan.entry.js': [19164, 19164], './utrecht-icon-betaaldatum.entry.js': [39098, 39098], './utrecht-icon-bewijsstukken.entry.js': [2026, 2026], './utrecht-icon-bijstand.entry.js': [2557, 2557], './utrecht-icon-blad.entry.js': [63857, 63857], './utrecht-icon-bouwproject.entry.js': [53604, 53604], './utrecht-icon-brandgevaar.entry.js': [74905, 74905], './utrecht-icon-brief-betalen.entry.js': [81034, 81034], './utrecht-icon-checkmark.entry.js': [60864, 74128], './utrecht-icon-chevron-down.entry.js': [64999, 64999], './utrecht-icon-chevron-left.entry.js': [24758, 24758], './utrecht-icon-chevron-right.entry.js': [77469, 77469], './utrecht-icon-chevron-up.entry.js': [55652, 55652], './utrecht-icon-close.entry.js': [79952, 79952], './utrecht-icon-college-b-w.entry.js': [75898, 75898], './utrecht-icon-container-bio.entry.js': [31755, 31755], './utrecht-icon-container-glas.entry.js': [83173, 83173], './utrecht-icon-container-groenafval.entry.js': [59761, 59761], './utrecht-icon-container-met-zak.entry.js': [96408, 96408], './utrecht-icon-container-papier.entry.js': [91158, 91158], './utrecht-icon-container-pmd.entry.js': [89783, 89783], './utrecht-icon-container-restafval.entry.js': [10406, 10406], './utrecht-icon-container-textiel.entry.js': [66131, 66131], './utrecht-icon-container.entry.js': [1461, 1461], './utrecht-icon-cross.entry.js': [38826, 38826], './utrecht-icon-dakloos.entry.js': [39885, 39885], './utrecht-icon-dementie.entry.js': [69566, 69566], './utrecht-icon-documenten.entry.js': [86548, 86548], './utrecht-icon-duurzaam.entry.js': [48962, 48962], './utrecht-icon-eenzaamheid.entry.js': [89742, 89742], './utrecht-icon-eikenprocessie.entry.js': [6216, 6216], './utrecht-icon-elektrisch-rijden.entry.js': [61879, 61879], './utrecht-icon-energie-vergoeding.entry.js': [26188, 26188], './utrecht-icon-energietransitie.entry.js': [32518, 32518], './utrecht-icon-error.entry.js': [33743, 33743], './utrecht-icon-evenementen.entry.js': [29820, 29820], './utrecht-icon-facebook.entry.js': [19030, 19030], './utrecht-icon-fiets.entry.js': [31091, 31091], './utrecht-icon-filter.entry.js': [22837, 22837], './utrecht-icon-geboorte.entry.js': [79323, 79323], './utrecht-icon-gebruiker-centraal.entry.js': [74635, 74635], './utrecht-icon-gebruiker-ingelogd.entry.js': [49541, 49541], './utrecht-icon-gegevenswoordenboek.entry.js': [43115, 43115], './utrecht-icon-geluid.entry.js': [89497, 89497], './utrecht-icon-gemeente-locatie.entry.js': [98544, 98544], './utrecht-icon-gemeenteraad.entry.js': [6130, 6130], './utrecht-icon-gereedschap.entry.js': [60876, 60876], './utrecht-icon-gezicht.entry.js': [70334, 70334], './utrecht-icon-gezin.entry.js': [54918, 54918], './utrecht-icon-glas-afval.entry.js': [26105, 26105], './utrecht-icon-glijbaan.entry.js': [34660, 34660], './utrecht-icon-grafiek.entry.js': [51307, 51307], './utrecht-icon-grofvuil-ophalen.entry.js': [43954, 43954], './utrecht-icon-grofvuil.entry.js': [14169, 14169], './utrecht-icon-hamburger-menu.entry.js': [82625, 82625], './utrecht-icon-herdenking.entry.js': [20733, 20733], './utrecht-icon-hondenbelasting.entry.js': [30716, 30716], './utrecht-icon-horeca.entry.js': [13184, 94971], './utrecht-icon-horecavergunning.entry.js': [23463, 23463], './utrecht-icon-huis-en-omgeving.entry.js': [49431, 49431], './utrecht-icon-huis.entry.js': [61342, 61342], './utrecht-icon-huishoudelijk-geweld.entry.js': [46064, 46064], './utrecht-icon-hulp-huishouden.entry.js': [83765, 83765], './utrecht-icon-hulp-vervoer.entry.js': [36393, 36393], './utrecht-icon-hulp-zorg.entry.js': [57093, 57093], './utrecht-icon-hulpmiddelen-gezin.entry.js': [47490, 47490], './utrecht-icon-hulpverlening.entry.js': [28993, 28993], './utrecht-icon-idee.entry.js': [28821, 28821], './utrecht-icon-informatie.entry.js': [53212, 53212], './utrecht-icon-information.entry.js': [45569, 45569], './utrecht-icon-innovatie.entry.js': [73749, 73749], './utrecht-icon-inspraak-inwoners.entry.js': [95335, 95335], './utrecht-icon-instagram.entry.js': [70878, 70878], './utrecht-icon-kalender.entry.js': [9566, 9566], './utrecht-icon-kennis.entry.js': [98742, 98742], './utrecht-icon-kerstbomen.entry.js': [63846, 63846], './utrecht-icon-klachten.entry.js': [2727, 2727], './utrecht-icon-kroon.entry.js': [55176, 55176], './utrecht-icon-laadpaal.entry.js': [90512, 90512], './utrecht-icon-language.entry.js': [64754, 64754], './utrecht-icon-lantaarnpaal-oud.entry.js': [69909, 36257], './utrecht-icon-lantaarnpaal.entry.js': [92511, 92511], './utrecht-icon-leren.entry.js': [17941, 17941], './utrecht-icon-let-op.entry.js': [93473, 93473], './utrecht-icon-linkedin.entry.js': [16570, 16570], './utrecht-icon-list-check.entry.js': [5875, 5875], './utrecht-icon-list-number.entry.js': [43033, 43033], './utrecht-icon-list.entry.js': [63983, 63983], './utrecht-icon-loupe.entry.js': [32649, 32649], './utrecht-icon-markt.entry.js': [2436, 2436], './utrecht-icon-melding-boom.entry.js': [750, 750], './utrecht-icon-melding-klacht.entry.js': [32543, 32543], './utrecht-icon-melding-openbareruimte.entry.js': [53376, 53376], './utrecht-icon-melding-verlichting.entry.js': [24930, 24930], './utrecht-icon-melding.entry.js': [96035, 96035], './utrecht-icon-menselijk.entry.js': [14769, 14769], './utrecht-icon-menu-dot-open.entry.js': [82806, 82806], './utrecht-icon-menu-dot.entry.js': [66049, 66049], './utrecht-icon-meterkast.entry.js': [35165, 35165], './utrecht-icon-milieu-ontheffing.entry.js': [76015, 76015], './utrecht-icon-milieu-zone.entry.js': [58570, 58570], './utrecht-icon-minus-vertical.entry.js': [42635, 42635], './utrecht-icon-minus.entry.js': [28496, 28496], './utrecht-icon-mobiliteit.entry.js': [12294, 12294], './utrecht-icon-natuur.entry.js': [99563, 99563], './utrecht-icon-nieuw-huis.entry.js': [62672, 62672], './utrecht-icon-nieuwsbrief.entry.js': [87584, 87584], './utrecht-icon-nummerbord.entry.js': [18866, 18866], './utrecht-icon-om-het-huis.entry.js': [28408, 28408], './utrecht-icon-omgeving.entry.js': [99690, 99690], './utrecht-icon-omgevingsvisie.entry.js': [32683, 32683], './utrecht-icon-omgevingswet.entry.js': [99536, 99536], './utrecht-icon-onderhoud.entry.js': [65024, 65024], './utrecht-icon-ondernemen.entry.js': [93386, 93386], './utrecht-icon-openingstijden.entry.js': [87141, 87141], './utrecht-icon-over-de-stad.entry.js': [21962, 21962], './utrecht-icon-overlijden.entry.js': [8355, 8355], './utrecht-icon-panden.entry.js': [24623, 24623], './utrecht-icon-park.entry.js': [71062, 71062], './utrecht-icon-parkeerkaart.entry.js': [39396, 39396], './utrecht-icon-parkeervergunning.entry.js': [80821, 80821], './utrecht-icon-parken.entry.js': [64639, 64639], './utrecht-icon-parkeren-bedrijven.entry.js': [63253, 63253], './utrecht-icon-parkeren-betaalautomaat.entry.js': [97549, 97549], './utrecht-icon-parkeren-betalen.entry.js': [27509, 27509], './utrecht-icon-parkeren.entry.js': [98802, 98802], './utrecht-icon-participatie-campagne.entry.js': [42189, 42189], './utrecht-icon-participatie-like.entry.js': [22727, 22727], './utrecht-icon-participatie-pitch.entry.js': [77481, 77481], './utrecht-icon-paspoort.entry.js': [31350, 31350], './utrecht-icon-presentatie.entry.js': [86378, 86378], './utrecht-icon-prijskaartje.entry.js': [66375, 66375], './utrecht-icon-read-aloud.entry.js': [56911, 56911], './utrecht-icon-rijbewijs.entry.js': [21081, 21081], './utrecht-icon-rioolheffing.entry.js': [18216, 18216], './utrecht-icon-rolstoel.entry.js': [94479, 94479], './utrecht-icon-schild-gemeente-utrecht.entry.js': [37446, 37446], './utrecht-icon-search.entry.js': [32835, 32835], './utrecht-icon-shoppen.entry.js': [24709, 24709], './utrecht-icon-sinterklaas.entry.js': [55432, 55432], './utrecht-icon-slechtziende-hoordende.entry.js': [26098, 26098], './utrecht-icon-sport-en-cultuur.entry.js': [42266, 42266], './utrecht-icon-sport-voetbal.entry.js': [71966, 71966], './utrecht-icon-sport.entry.js': [95628, 95628], './utrecht-icon-stookverbod.entry.js': [96254, 96254], './utrecht-icon-strand.entry.js': [23488, 23488], './utrecht-icon-strooien.entry.js': [32778, 32778], './utrecht-icon-subsidie-gezin.entry.js': [80567, 80567], './utrecht-icon-subsidie.entry.js': [94682, 94682], './utrecht-icon-t-shirt.entry.js': [54545, 54545], './utrecht-icon-thuiswerken.entry.js': [25321, 25321], './utrecht-icon-toeslag.entry.js': [39183, 39183], './utrecht-icon-trein.entry.js': [87486, 87486], './utrecht-icon-trouwen.entry.js': [34612, 34612], './utrecht-icon-twitter.entry.js': [82414, 82414], './utrecht-icon-user.entry.js': [65113, 65113], './utrecht-icon-uw-wijk.entry.js': [32690, 32690], './utrecht-icon-vaccinatie.entry.js': [75263, 75263], './utrecht-icon-veilige-wijk.entry.js': [28892, 28892], './utrecht-icon-vergaderen.entry.js': [74219, 74219], './utrecht-icon-vergaderendigitaal.entry.js': [19472, 19472], './utrecht-icon-vergoeding.entry.js': [42704, 42704], './utrecht-icon-verhuizen.entry.js': [7159, 7159], './utrecht-icon-verkeerslicht.entry.js': [49443, 49443], './utrecht-icon-verkiezingen.entry.js': [91507, 91507], './utrecht-icon-verslaving.entry.js': [56316, 56316], './utrecht-icon-vervoersvoorziening.entry.js': [31768, 31768], './utrecht-icon-virus.entry.js': [49030, 49030], './utrecht-icon-vluchtelingen.entry.js': [10731, 10731], './utrecht-icon-voorzieningen-vervoer.entry.js': [31915, 31915], './utrecht-icon-vrijwilligerswerk.entry.js': [77206, 77206], './utrecht-icon-vuilnisbak.entry.js': [26762, 26762], './utrecht-icon-vuilniszak.entry.js': [3290, 3290], './utrecht-icon-vuurwerk.entry.js': [81261, 21118], './utrecht-icon-wandelstok.entry.js': [44566, 44566], './utrecht-icon-warm.entry.js': [90649, 90649], './utrecht-icon-warning.entry.js': [32737, 32737], './utrecht-icon-werken.entry.js': [1415, 1415], './utrecht-icon-werkzaamheden.entry.js': [17237, 17237], './utrecht-icon-whatsapp.entry.js': [33821, 33821], './utrecht-icon-wonen-kosten.entry.js': [81883, 81883], './utrecht-icon-woning-zoeken.entry.js': [80571, 80571], './utrecht-icon-x.entry.js': [45434, 45434], './utrecht-icon-youtube.entry.js': [46609, 46609], './utrecht-icon-zelfstandig-wonen.entry.js': [29956, 29956], './utrecht-icon-zoom-minus.entry.js': [72154, 72154], './utrecht-icon-zoom-plus.entry.js': [77634, 77634], './utrecht-icon-zoomin.entry.js': [54755, 54755], './utrecht-icon-zoomout.entry.js': [21405, 21405], './utrecht-icon-zorg-huis.entry.js': [50787, 50787], './utrecht-icon-zweefpaal.entry.js': [90563, 90563], './utrecht-icon-zwemmen.entry.js': [10572, 10572], './utrecht-logo-button.entry.js': [34913, 34913], './utrecht-map-marker.entry.js': [38104, 38104], './utrecht-multiline-data.entry.js': [10150, 10150], './utrecht-number-badge.entry.js': [87062, 87062], './utrecht-page-footer.entry.js': [84907, 84907], './utrecht-pagination.entry.js': [57930, 57930], './utrecht-progress-list-item.entry.js': [26946, 26946], './utrecht-progress-list.entry.js': [36009, 36009], './utrecht-progress-sublist-item.entry.js': [26235, 26235], './utrecht-sidenav.entry.js': [38835, 38835], './utrecht-surface.entry.js': [61084, 81261], './utrecht-table-body.entry.js': [99709, 99709], './utrecht-table-caption.entry.js': [24554, 24554], './utrecht-table-cell.entry.js': [82736, 82736], './utrecht-table-footer.entry.js': [80097, 80097], './utrecht-table-header-cell.entry.js': [9931, 9931], './utrecht-table-header.entry.js': [19668, 19668], './utrecht-table-row.entry.js': [30422, 30422], './utrecht-table.entry.js': [62665, 62665], './utrecht-textarea.entry.js': [83251, 83251], './utrecht-textbox.entry.js': [958, 958] };
   function s(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     s = t[0];
    return n.e(t[1]).then(() => n(s));
   }
   (s.keys = () => Object.keys(r)), (s.id = 54907), (e.exports = s);
  },
  35038: (e, t, n) => {
   'use strict';
   n.d(t, { Zb: () => a, aY: () => c, um: () => l, wu: () => i });
   var r = n(16167),
    s = n(4814),
    o = n(52676);
   const i = (e) => {
     let { background: t, children: n, className: r, ...i } = e;
     return (0, o.jsx)('div', { className: (0, s.Z)('card__illustration', t && 'card__illustration--background', r), ...i, children: n });
    },
    c = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    a = (e) => {
     let { href: t, appearance: n, className: i, component: c = 'div', children: a } = e;
     const l = (e) => ('article' === c ? (0, o.jsx)('article', { ...e }) : 'section' === c ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      d = (0, o.jsx)(l, { className: (0, s.Z)('cardgroup__card', `cardgroup__card--${n}`, i), children: a });
     return t ? (0, o.jsx)(r.rU, { href: t, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    l = (e) => {
     let { appearance: t = 'medium', children: n, className: r } = e;
     return (0, o.jsx)('div', { className: (0, s.Z)('cardgroup', `cardgroup--${t}`, r), children: n });
    };
  },
  97520: (e, t, n) => {
   'use strict';
   n.d(t, { I: () => c });
   var r = n(57716),
    s = n(75271),
    o = n(14669),
    i = n(52676);
   const c = (e) => {
    let { component: t } = e;
    const { title: c } = t,
     a = (0, o.mA)(c),
     l = s.lazy(() => n(42767)(`./${a}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, i.jsx)(s.Suspense, { fallback: null, children: (0, i.jsx)(r.U, { omitH1: !0, headingLevel: 1, children: (0, i.jsx)(l, {}) }) });
   };
  },
  76233: (e, t, n) => {
   'use strict';
   n.d(t, { B: () => d });
   var r = n(57716),
    s = n(4814),
    o = n(75271),
    i = n(14669),
    c = n(52676);
   const a = (e) => {
     let { children: t } = e;
     return (0, c.jsx)('ol', { className: 'nlds-anatomy-list', children: t });
    },
    l = (e) => {
     let { children: t } = e;
     return (0, c.jsx)('li', { className: 'nlds-anatomy-list__item', children: t });
    },
    d = (e) => {
     let { component: t, illustration: d } = e;
     const { title: h } = t,
      u = (0, i.mA)(h),
      m = o.lazy(() => n(22930)(`./${u}-docs/docs/anatomy/anatomy.md`).catch(() => ({ default: () => null })));
     return (0, c.jsx)(o.Suspense, {
      fallback: null,
      children: (0, c.jsxs)('figure', {
       className: (0, s.Z)('component-anatomy'),
       children: [
        d && (0, c.jsx)(d, { height: null, className: (0, s.Z)('component-anatomy__illustration') }),
        d &&
         m &&
         (0, c.jsx)('figcaption', {
          children: (0, c.jsx)(r.U, {
           omitH1: !0,
           headingLevel: 1,
           components: {
            ol: (e) => {
             let { children: t } = e;
             return (0, c.jsx)(a, { children: t });
            },
            li: (e) => {
             let { children: t } = e;
             return (0, c.jsx)(l, { children: t });
            },
           },
           children: (0, c.jsx)(m, {}),
          }),
         }),
       ],
      }),
     });
    };
  },
  55240: (e, t, n) => {
   'use strict';
   n.d(t, { t: () => h });
   var r = n(16167);
   const s = [
     { sc: '1.1.1', title: 'Non-text Content', url: 'https://www.w3.org/TR/WCAG21/#non-text-content', conformance: 'A', nldesignsystem: !0, nl: { title: 'Niet-tekstuele content' } },
     { sc: '1.2.1', title: 'Audio-only and Video-only (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Louter-geluid en louter-videobeeld (vooraf opgenomen)' } },
     { sc: '1.2.2', title: 'Captions (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#captions-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (vooraf opgenomen)' } },
     { sc: '1.2.3', title: 'Audio Description or Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Audiodescriptie of media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.4', title: 'Captions (Live)', url: 'https://www.w3.org/TR/WCAG21/#captions-live', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (live)' } },
     { sc: '1.2.5', title: 'Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-prerecorded', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.6', title: 'Sign Language (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#sign-language-prerecorded', conformance: 'AAA', nl: { title: 'Gebarentaal (vooraf opgenomen)' } },
     { sc: '1.2.7', title: 'Extended Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded', conformance: 'AAA', nl: { title: 'Verlengde audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.8', title: 'Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded', conformance: 'AAA', nl: { title: 'Media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.9', title: 'Audio-only (Live)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-live', conformance: 'AAA', nl: { title: 'Louter-geluid (live)' } },
     { sc: '1.3.1', title: 'Info and Relationships', url: 'https://www.w3.org/TR/WCAG21/#info-and-relationships', conformance: 'A', nldesignsystem: !0, nl: { title: 'Info en relaties' } },
     { sc: '1.3.2', title: 'Meaningful Sequence', url: 'https://www.w3.org/TR/WCAG21/#meaningful-sequence', conformance: 'A', nldesignsystem: !0, nl: { title: 'Betekenisvolle volgorde' } },
     { sc: '1.3.3', title: 'Sensory Characteristics', url: 'https://www.w3.org/TR/WCAG21/#sensory-characteristics', conformance: 'A', nldesignsystem: !0, nl: { title: 'Zintuiglijke eigenschappen' } },
     { sc: '1.3.4', title: 'Orientation', url: 'https://www.w3.org/TR/WCAG21/#orientation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Weergavestand' } },
     { sc: '1.3.5', title: 'Identify Input Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-input-purpose', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Identificeer het doel van de input' } },
     { sc: '1.3.6', title: 'Identify Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-purpose', conformance: 'AAA', nl: { title: 'Identificeer het doel' } },
     { sc: '1.4.1', title: 'Use of Color', url: 'https://www.w3.org/TR/WCAG21/#use-of-color', conformance: 'A', nldesignsystem: !0, nl: { title: 'Gebruik van kleur' } },
     { sc: '1.4.2', title: 'Audio Control', url: 'https://www.w3.org/TR/WCAG21/#audio-control', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geluidsbediening' } },
     { sc: '1.4.3', title: 'Contrast (Minimum)', url: 'https://www.w3.org/TR/WCAG21/#contrast-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast (minimum)' } },
     { sc: '1.4.4', title: 'Resize text', url: 'https://www.w3.org/TR/WCAG21/#resize-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Herschalen van tekst' } },
     { sc: '1.4.5', title: 'Images of Text', url: 'https://www.w3.org/TR/WCAG21/#images-of-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Afbeeldingen van tekst' } },
     { sc: '1.4.6', title: 'Contrast (Enhanced)', url: 'https://www.w3.org/TR/WCAG21/#contrast-enhanced', conformance: 'AAA', nl: { title: 'Contrast (versterkt)' } },
     { sc: '1.4.7', title: 'Low or No Background Audio', url: 'https://www.w3.org/TR/WCAG21/#low-or-no-background-audio', conformance: 'AAA', nl: { title: 'Weinig of geen achtergrondgeluid' } },
     { sc: '1.4.8', title: 'Visual Presentation', url: 'https://www.w3.org/TR/WCAG21/#visual-presentation', conformance: 'AAA', nl: { title: 'Visuele weergave' } },
     { sc: '1.4.9', title: 'Images of Text (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#images-of-text-no-exception', conformance: 'AAA', nl: { title: 'Afbeeldingen van tekst (geen uitzondering)' } },
     { sc: '1.4.10', title: 'Reflow', url: 'https://www.w3.org/TR/WCAG21/#reflow', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Reflow' } },
     { sc: '1.4.11', title: 'Non-text Contrast', url: 'https://www.w3.org/TR/WCAG21/#non-text-contrast', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast van niet-tekstuele content' } },
     { sc: '1.4.12', title: 'Text Spacing', url: 'https://www.w3.org/TR/WCAG21/#text-spacing', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Tekstafstand' } },
     { sc: '1.4.13', title: 'Content on Hover or Focus', url: 'https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Content bij hover of focus' } },
     { sc: '2.1.1', title: 'Keyboard', url: 'https://www.w3.org/TR/WCAG21/#keyboard', conformance: 'A', nldesignsystem: !0, nl: { title: 'Toetsenbord' } },
     { sc: '2.1.2', title: 'No Keyboard Trap', url: 'https://www.w3.org/TR/WCAG21/#no-keyboard-trap', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geen toetsenbordval' } },
     { sc: '2.1.3', title: 'Keyboard (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#keyboard-no-exception', conformance: 'AAA', nl: { title: 'Toetsenbord (geen uitzondering)' } },
     { sc: '2.1.4', title: 'Character Key Shortcuts', url: 'https://www.w3.org/TR/WCAG21/#character-key-shortcuts', conformance: 'A', nldesignsystem: !0, nl: { title: 'Enkel teken sneltoetsen' } },
     { sc: '2.2.1', title: 'Timing Adjustable', url: 'https://www.w3.org/TR/WCAG21/#timing-adjustable', conformance: 'A', nldesignsystem: !0, nl: { title: 'Timing aanpasbaar' } },
     { sc: '2.2.2', title: 'Pause, Stop, Hide', url: 'https://www.w3.org/TR/WCAG21/#pause-stop-hide', conformance: 'A', nldesignsystem: !0, nl: { title: 'Pauzeren, stoppen, verbergen' } },
     { sc: '2.2.3', title: 'No Timing', url: 'https://www.w3.org/TR/WCAG21/#no-timing', conformance: 'AAA', nl: { title: 'Geen timing' } },
     { sc: '2.2.4', title: 'Interruptions', url: 'https://www.w3.org/TR/WCAG21/#interruptions', conformance: 'AAA', nl: { title: 'Onderbrekingen' } },
     { sc: '2.2.5', title: 'Re-authenticating', url: 'https://www.w3.org/TR/WCAG21/#re-authenticating', conformance: 'AAA', nl: { title: 'Herauthentisering' } },
     { sc: '2.2.6', title: 'Timeouts', url: 'https://www.w3.org/TR/WCAG21/#timeouts', conformance: 'AAA', nl: { title: 'Time-outs' } },
     { sc: '2.3.1', title: 'Three Flashes or Below Threshold', url: 'https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold', conformance: 'A', nldesignsystem: !0, nl: { title: 'Drie flitsen of beneden drempelwaarde' } },
     { sc: '2.3.2', title: 'Three Flashes', url: 'https://www.w3.org/TR/WCAG21/#three-flashes', conformance: 'AAA', nl: { title: 'Drie flitsen' } },
     { sc: '2.3.3', title: 'Animation from Interactions', url: 'https://www.w3.org/TR/WCAG21/#animation-from-interactions', conformance: 'AAA', nl: { title: 'Animatie uit interacties' } },
     { sc: '2.4.1', title: 'Bypass Blocks', url: 'https://www.w3.org/TR/WCAG21/#bypass-blocks', conformance: 'A', nldesignsystem: !0, nl: { title: 'Blokken omzeilen' } },
     { sc: '2.4.2', title: 'Page Titled', url: 'https://www.w3.org/TR/WCAG21/#page-titled', conformance: 'A', nldesignsystem: !0, nl: { title: 'Paginatitel' } },
     { sc: '2.4.3', title: 'Focus Order', url: 'https://www.w3.org/TR/WCAG21/#focus-order', conformance: 'A', nldesignsystem: !0, nl: { title: 'Focus volgorde' } },
     { sc: '2.4.4', title: 'Link Purpose (In Context)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-in-context', conformance: 'A', nldesignsystem: !0, nl: { title: 'Linkdoel (in context)' } },
     { sc: '2.4.5', title: 'Multiple Ways', url: 'https://www.w3.org/TR/WCAG21/#multiple-ways', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Meerdere manieren' } },
     { sc: '2.4.6', title: 'Headings and Labels', url: 'https://www.w3.org/TR/WCAG21/#headings-and-labels', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Koppen en labels' } },
     { sc: '2.4.7', title: 'Focus Visible', url: 'https://www.w3.org/TR/WCAG21/#focus-visible', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Focus zichtbaar' } },
     { sc: '2.4.8', title: 'Location', url: 'https://www.w3.org/TR/WCAG21/#location', conformance: 'AAA', nl: { title: 'Locatie' } },
     { sc: '2.4.9', title: 'Link Purpose (Link Only)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-link-only', conformance: 'AAA', nl: { title: 'Linkdoel (alleen link)' } },
     { sc: '2.4.10', title: 'Section Headings', url: 'https://www.w3.org/TR/WCAG21/#section-headings', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Paragraafkoppen' } },
     { sc: '2.5.1', title: 'Pointer Gestures', url: 'https://www.w3.org/TR/WCAG21/#pointer-gestures', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzergebaren' } },
     { sc: '2.5.2', title: 'Pointer Cancellation', url: 'https://www.w3.org/TR/WCAG21/#pointer-cancellation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzerannulering' } },
     { sc: '2.5.3', title: 'Label in Name', url: 'https://www.w3.org/TR/WCAG21/#label-in-name', conformance: 'A', nldesignsystem: !0, nl: { title: 'Label in naam' } },
     { sc: '2.5.4', title: 'Motion Actuation', url: 'https://www.w3.org/TR/WCAG21/#motion-actuation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bewegingsactivering' } },
     { sc: '2.5.5', title: 'Target Size', url: 'https://www.w3.org/TR/WCAG21/#target-size', conformance: 'AAA', nl: { title: 'Grootte van het aanwijsgebied (uitgebreid)' } },
     { sc: '2.5.6', title: 'Concurrent Input Mechanisms', url: 'https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms', conformance: 'AAA', nl: { title: 'Input gelijktijdige invoermechanismen' } },
     { sc: '3.1.1', title: 'Language of Page', url: 'https://www.w3.org/TR/WCAG21/#language-of-page', conformance: 'A', nldesignsystem: !0, nl: { title: 'Taal van de pagina' } },
     { sc: '3.1.2', title: 'Language of Parts', url: 'https://www.w3.org/TR/WCAG21/#language-of-parts', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Taal van onderdelen' } },
     { sc: '3.1.3', title: 'Unusual Words', url: 'https://www.w3.org/TR/WCAG21/#unusual-words', conformance: 'AAA', nl: { title: 'Ongebruikelijke woorden' } },
     { sc: '3.1.4', title: 'Abbreviations', url: 'https://www.w3.org/TR/WCAG21/#abbreviations', conformance: 'AAA', nl: { title: 'Afkortingen' } },
     { sc: '3.1.5', title: 'Reading Level', url: 'https://www.w3.org/TR/WCAG21/#reading-level', conformance: 'AAA', nl: { title: 'Leesniveau' } },
     { sc: '3.1.6', title: 'Pronunciation', url: 'https://www.w3.org/TR/WCAG21/#pronunciation', conformance: 'AAA', nl: { title: 'Uitspraak' } },
     { sc: '3.2.1', title: 'On Focus', url: 'https://www.w3.org/TR/WCAG21/#on-focus', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij focus' } },
     { sc: '3.2.2', title: 'On Input', url: 'https://www.w3.org/TR/WCAG21/#on-input', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij input' } },
     { sc: '3.2.3', title: 'Consistent Navigation', url: 'https://www.w3.org/TR/WCAG21/#consistent-navigation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente navigatie' } },
     { sc: '3.2.4', title: 'Consistent Identification', url: 'https://www.w3.org/TR/WCAG21/#consistent-identification', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente identificatie' } },
     { sc: '3.2.5', title: 'Change on Request', url: 'https://www.w3.org/TR/WCAG21/#change-on-request', conformance: 'AAA', nl: { title: 'Verandering op verzoek' } },
     { sc: '3.3.1', title: 'Error Identification', url: 'https://www.w3.org/TR/WCAG21/#error-identification', conformance: 'A', nldesignsystem: !0, nl: { title: 'Foutidentificatie' } },
     { sc: '3.3.2', title: 'Labels or Instructions', url: 'https://www.w3.org/TR/WCAG21/#labels-or-instructions', conformance: 'A', nldesignsystem: !0, nl: { title: 'Labels of instructies' } },
     { sc: '3.3.3', title: 'Error Suggestion', url: 'https://www.w3.org/TR/WCAG21/#error-suggestion', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutsuggestie' } },
     { sc: '3.3.4', title: 'Error Prevention (Legal, Financial, Data)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutpreventie (wettelijk, financieel, gegevens)' } },
     { sc: '3.3.5', title: 'Help', url: 'https://www.w3.org/TR/WCAG21/#help', conformance: 'AAA', nl: { title: 'Hulp' } },
     { sc: '3.3.6', title: 'Error Prevention (All)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-all', conformance: 'AAA', nl: { title: 'Foutpreventie (alle)' } },
     { sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' } },
     { sc: '4.1.2', title: 'Name, Role, Value', url: 'https://www.w3.org/TR/WCAG21/#name-role-value', conformance: 'A', nldesignsystem: !0, nl: { title: 'Naam, rol, waarde' } },
     { sc: '4.1.3', title: 'Status Messages', url: 'https://www.w3.org/TR/WCAG21/#status-messages', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Statusberichten' } },
    ].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })),
    o = (new Map(s.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    i = [...s.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }]
     .map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') }))
     .filter((e) => {
      let { sc: t } = e;
      return !o.find((e) => e.sc === t);
     }),
    c = new Map(i.map((e) => [e.sc, e]));
   var a = n(41115),
    l = n(52676);
   const d = (e) => {
     let { title: t, sc: n, status: s, component: o, headingLevel: i = 4 } = e;
     const a = c.get(n),
      d = a ? `${n} ${a.nl?.title}` : n;
     return (0, l.jsxs)('div', { className: 'component-criteria-section', children: [(0, l.jsx)(r.X6, { appearance: 'utrecht-heading-4', level: i, className: 'component-criteria-section__heading', children: t }), (n || s) && (0, l.jsxs)('dl', { className: 'component-criteria-section__dl', children: [n && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('dt', { className: 'component-criteria-section__dt', children: 'WCAG' }), (0, l.jsx)('dd', { className: 'component-criteria-section__dd', children: (0, l.jsx)(r.rU, { href: `/wcag/${n}`, children: d }) })] }), s && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('dt', { className: 'component-criteria-section__dt', children: 'Status' }), (0, l.jsx)('dd', { className: 'component-criteria-section__dl', children: s })] })] }), o] });
    },
    h = (e) => {
     let { testCategory: t, items: n } = e;
     return (0, l.jsx)(a.a2, { sections: [{ className: 'utrecht-accordion--nlds-subtle', headingLevel: 3, expanded: !1, label: (0, l.jsx)('span', { children: t }), body: n.map((e, t) => (0, l.jsx)(d, { ...e }, t)) }] });
    };
  },
  8657: (e, t, n) => {
   'use strict';
   n.d(t, { cN: () => b, vM: () => C, W: () => x, Rv: () => T });
   var r = n(41115),
    s = n(4814),
    o = n(39854),
    i = n(7522),
    c = n(62559),
    a = n(79734),
    l = n(32636),
    d = n(52676);
   const h = { figma: (0, d.jsx)(o.Z, {}), github: (0, d.jsx)(i.Z, {}), npm: (0, d.jsx)(c.Z, {}), storybook: (0, d.jsx)(a.Z, {}) },
    u = (e) => {
     let { brand: t } = e;
     return (0, d.jsx)(r.JO, { children: h[t] || (0, d.jsx)(l.Z, {}) });
    };
   var m = n(35038),
    g = n(40598);
   const p = (e) => {
    let { checked: t, unchecked: r } = e;
    return (0, d.jsx)(g.Z, {
     fallback: (0, d.jsx)(d.Fragment, {}),
     children: () => {
      const e = n(79333).YE;
      return (0, d.jsx)(e, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--component-progress-background-color--checked, currentColor)', key: 'Done', value: t, stroke: '2' },
        { fill: 'var(--component-progress-background-color--unchecked, #ddd)', key: 'Todo', value: r, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   };
   var j = n(23355),
    w = n(41757),
    y = n(16167),
    v = n(55476);
   const f = (e) => {
     let { children: t } = e;
     return (0, d.jsx)('ul', { className: 'task-list', children: t });
    },
    A = (e) => {
     let { checked: t, children: n, title: r, description: o, headingLevel: i = 3 } = e;
     return (0, d.jsxs)('li', { className: (0, s.Z)('task-list-item'), children: [(0, d.jsxs)('div', { className: (0, s.Z)('task-list-item__marker', t && 'task-list-item__marker--checked'), children: [(0, d.jsx)('span', { className: 'task-list-item__marker-label', children: t ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), t && (0, d.jsx)(v.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(y.X6, { appearance: 'utrecht-heading-3', level: i, children: r }), o, n] })] });
    };
   var k = n(14669);
   const b = (e) => {
     let { component: t, headingLevel: n } = e;
     const o = t && t.projects.filter((e) => k.e9.includes(e.id)),
      i = o && k.e9.map((e) => o.find((t) => t.id === e)).filter(Boolean);
     return (
      t &&
      (0, d.jsx)(r.a2, {
       appearance: '',
       sections: i.map((e) => ({
        className: (0, s.Z)('definition-of-done', e && `definition-of-done--${(0, k.mA)(e.title)}`),
        headingLevel: n,
        expanded: !1,
        label: e ? `${e.title} - ${e.progress.value} van ${e.progress.max}` : '',
        body:
         e &&
         (0, d.jsxs)(d.Fragment, {
          children: [
           (0, d.jsx)(f, {
            children: e.tasks.map((e) => {
             let { checked: t, name: r, id: s } = e;
             return (0, d.jsx)(A, { headingLevel: n + 1, checked: t, title: r, description: (0, k.Q6)(s) }, s);
            }),
           }),
           (0, d.jsx)(r.nv, { children: (0, d.jsxs)(r.rU, { href: `${e.url}?filterQuery=${t.title}`, children: [e.title, ' projectbord op GitHub'] }) }),
          ],
         }),
       })),
      })
     );
    },
    x = (e) => {
     let { component: t, headingLevel: n } = e;
     const s = t && t.projects.filter((e) => !k.e9.includes(e.id));
     return t && s.length
      ? (0, d.jsx)(m.um, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: s
          .sort((e, t) => {
           const n = e.progress.max - e.progress.value,
            r = t.progress.max - t.progress.value;
           return n === r ? e.title.localeCompare(t.title) : n - r;
          })
          .map((e) => {
           const t = e.tasks.find((e) => {
             let { name: t } = e;
             return 'Naam' === t;
            }),
            s = t?.value,
            o = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['NPM URL (CSS)', { brand: 'npm', desciption: `${s} op NPM` }],
             ['GitHub URL (CSS)', { brand: 'github', desciption: `${s} op GitHub` }],
             ['Storybook URL (CSS)', { brand: 'storybook', desciption: `${s} in Storybook van ${e.title}` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            i = e.tasks.filter((e) => {
             let { name: t, value: n } = e;
             return o.has(t) && URL.canParse(n) && 'https:' === new URL(n).protocol;
            });
           return (0, d.jsx)(
            m.Zb,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(m.aY, {
              children: [
               (0, d.jsx)(r.X6, { level: n, children: e.title }),
               (0, d.jsxs)(r.nv, { children: [(0, d.jsx)(p, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] })] }),
               i.length > 0 &&
                (0, d.jsxs)(d.Fragment, {
                 children: [
                  (0, d.jsx)(r.X6, { level: n + 1, children: 'Component gebruiken?' }),
                  (0, d.jsx)(r.Mc, {
                   children: i.map((e) => {
                    const t = o.get(e.name);
                    return t ? (0, d.jsxs)(r.k7, { href: e.value, children: [(0, d.jsx)(u, { brand: t.brand }), ' ', t.desciption] }, e.id) : (0, d.jsx)(d.Fragment, {});
                   }),
                  }),
                 ],
                }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(r.nv, { children: 'Er zijn nog geen implementaties' });
    },
    C = (e) => {
     let { component: t } = e;
     const n = t?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = n?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.nv, { children: ['We vinden het belangrijk dat de component ', t.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.QI, { children: [s ? (0, d.jsxs)(r.AS, { children: ['Vul de ', (0, d.jsx)(r.rU, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.AS, { children: [(0, d.jsxs)(r.rU, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', t.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.AS, { children: ['Draag bij aan de voortang van ', t.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.rU, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.rU, { href: t.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    T = (e) => {
     let { component: t, headingLevel: n, description: s } = e;
     const o = t && k.$3[t.relayStep];
     return t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(w.V, { level: n, suffix: o && (0, d.jsx)(j.y, { state: o }), children: t.title }), (0, d.jsx)(r.nv, { lead: !0, children: s })] });
    };
  },
  23355: (e, t, n) => {
   'use strict';
   n.d(t, { y: () => c });
   var r = n(16167),
    s = n(4814),
    o = n(14669),
    i = n(52676);
   const c = (e) => {
    let { state: t } = e;
    const n = (0, o.mA)(t);
    return (0, i.jsx)(r.Ou, { className: (0, s.Z)('estafette-badge', n && `estafette-badge--${n}`), children: t });
   };
  },
  41757: (e, t, n) => {
   'use strict';
   n.d(t, { V: () => o });
   var r = n(4814),
    s = n(52676);
   const o = (e) => {
    let { children: t, className: n, level: o = 1, suffix: i, ...c } = e;
    return (0, s.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${o}`, n), ...c, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: t }), i && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
   };
  },
  57716: (e, t, n) => {
   'use strict';
   n.d(t, { U: () => d });
   var r = n(40139),
    s = n(16167),
    o = n(52676);
   const i = (e, t) => {
     const n = new URL(t, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === n.protocol) {
      const { pathname: n, search: r, hash: s } = new URL(t, new URL(e, 'http://example.com/'));
      return n + r + s;
     }
     return n.toString();
    },
    c = { 1: {}, 2: { h1: s.XJ, h2: s.aC, h3: s.k8, h4: s.by, h5: s.Cd }, 3: { h1: s.aC, h2: s.k8, h3: s.by, h4: s.Cd, h5: s.Cd }, 4: { h1: s.k8, h2: s.by, h3: s.Cd, h4: s.Cd, h5: s.Cd }, 5: { h1: s.by, h2: s.Cd, h3: s.Cd, h4: s.Cd, h5: s.Cd }, 6: { h1: s.Cd, h2: s.Cd, h3: s.Cd, h4: s.Cd, h5: s.Cd } },
    a = (e) => ({
     img: (t) => {
      let { src: n, ...r } = t;
      return (0, o.jsx)('img', { ...r, src: i(e, n), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    l = (e, t) => {
     if (e) {
      const e = { ...c[t - 1] };
      return (e.h1 = () => null), e;
     }
     return c[t];
    },
    d = (e) => {
     let { children: t, omitH1: n = !1, headingLevel: s = 1, baseUrl: i = '', components: c = {} } = e;
     return (0, o.jsx)(r.Z, { components: { ...l(n, s), ...a(i), ...c }, children: t });
    };
  },
  14669: (e, t, n) => {
   'use strict';
   n.d(t, { $3: () => r, BA: () => c, Q6: () => o, e9: () => i, mA: () => s });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    i = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    c = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
  },
  42767: (e, t, n) => {
   var r = { './code-block-docs/docs/aliases.md': [33272, 33272], './code-docs/docs/aliases.md': [45077, 45077], './color-sample-docs/docs/aliases.md': [16992, 16992], './data-badge-docs/docs/aliases.md': [594, 594], './heading-1-docs/docs/aliases.md': [53016, 53016], './heading-2-docs/docs/aliases.md': [85698, 85698], './heading-3-docs/docs/aliases.md': [87232, 87232], './heading-4-docs/docs/aliases.md': [8683, 8683], './heading-docs/docs/aliases.md': [71918, 71918], './link-docs/docs/aliases.md': [63694, 63694], './mark-docs/docs/aliases.md': [69269, 69269], './number-badge-docs/docs/aliases.md': [40519, 40519], './paragraph-docs/docs/aliases.md': [47096, 47096], './skip-link-docs/docs/aliases.md': [71218, 71218] };
   function s(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     s = t[0];
    return n.e(t[1]).then(() => n(s));
   }
   (s.keys = () => Object.keys(r)), (s.id = 42767), (e.exports = s);
  },
  22930: (e, t, n) => {
   var r = { './code-block-docs/docs/anatomy/anatomy.md': [7231, 7231], './code-docs/docs/anatomy/anatomy.md': [68449, 68449], './color-sample-docs/docs/anatomy/anatomy.md': [4853, 4853], './data-badge-docs/docs/anatomy/anatomy.md': [23242, 23242], './heading-1-docs/docs/anatomy/anatomy.md': [37039, 37039], './heading-2-docs/docs/anatomy/anatomy.md': [55167, 55167], './heading-3-docs/docs/anatomy/anatomy.md': [68844, 68844], './heading-4-docs/docs/anatomy/anatomy.md': [70868, 70868], './heading-5-docs/docs/anatomy/anatomy.md': [3549, 3549], './heading-6-docs/docs/anatomy/anatomy.md': [41448, 41448], './heading-docs/docs/anatomy/anatomy.md': [36472, 36472], './link-docs/docs/anatomy/anatomy.md': [96372, 96372], './mark-docs/docs/anatomy/anatomy.md': [9429, 9429], './number-badge-docs/docs/anatomy/anatomy.md': [31598, 31598], './paragraph-docs/docs/anatomy/anatomy.md': [48260, 48260], './skip-link-docs/docs/anatomy/anatomy.md': [54962, 54962] };
   function s(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     s = t[0];
    return n.e(t[1]).then(() => n(s));
   }
   (s.keys = () => Object.keys(r)), (s.id = 22930), (e.exports = s);
  },
 },
]);
