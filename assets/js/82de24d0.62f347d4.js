'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [51850],
 {
  18439(e, n, r) {
   r.d(n, { R: () => d, x: () => l });
   var i = r(30758);
   const o = {},
    t = i.createContext(o);
   function d(e) {
    const n = i.useContext(t);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : d(e.components)), i.createElement(t.Provider, { value: n }, e.children));
   }
  },
  41534(e, n, r) {
   function i(e, n) {
    if (null == e) return {};
    var r,
     i,
     o = (function (e, n) {
      if (null == e) return {};
      var r = {};
      for (var i in e)
       if ({}.hasOwnProperty.call(e, i)) {
        if (-1 !== n.indexOf(i)) continue;
        r[i] = e[i];
       }
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     for (i = 0; i < t.length; i++) ((r = t[i]), -1 === n.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   r.d(n, { A: () => i });
  },
  48171(e, n, r) {
   function i(e) {
    return (
     (i =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     i(e)
    );
   }
   function o(e) {
    var n = (function (e, n) {
     if ('object' != i(e) || !e) return e;
     var r = e[Symbol.toPrimitive];
     if (void 0 !== r) {
      var o = r.call(e, n || 'default');
      if ('object' != i(o)) return o;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == i(n) ? n : n + '';
   }
   function t(e, n, r) {
    return ((n = o(n)) in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e);
   }
   r.d(n, { A: () => t });
  },
  59292(e, n, r) {
   r.d(n, { f: () => i.f });
   var i = r(71544);
  },
  71544(e, n, r) {
   r.d(n, { f: () => h });
   var i = r(48171),
    o = r(41534),
    t = r(86070),
    d = r(13526),
    l = r(30758),
    s = ['children', 'className', 'purpose'];
   function c(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     (n &&
      (i = i.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      r.push.apply(r, i));
    }
    return r;
   }
   function a(e) {
    for (var n = 1; n < arguments.length; n++) {
     var r = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(r), !0).forEach(function (n) {
         (0, i.A)(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : c(Object(r)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
   }
   var h = (0, l.forwardRef)(function (e, n) {
    var r = e.children,
     l = e.className,
     c = e.purpose,
     h = (0, o.A)(e, s);
    return (0, t.jsx)('p', a(a({ className: (0, d.$)('nl-paragraph', (0, i.A)({}, 'nl-paragraph--lead', 'lead' === c), l), ref: n }, h), {}, { children: 'lead' === c ? (0, t.jsx)('b', { className: 'nl-paragraph__lead', children: r }) : r }));
   });
   h.displayName = 'Paragraph';
  },
  98575(e, n, r) {
   (r.r(n), r.d(n, { assets: () => c, contentTitle: () => s, default: () => j, frontMatter: () => l, metadata: () => i, toc: () => a }));
   const i = JSON.parse('{"id":"project/schrijfwijzer/code","title":"Code","description":"Richtlijnen voor code-voorbeelden in communicatie vanuit het project NL Design System.","source":"@site/docs/project/schrijfwijzer/code.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/code","permalink":"/project/schrijfwijzer/code","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/code.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Code","hide_title":true,"sidebar_label":"Code","sidebar_position":8,"pagination_label":"Code","description":"Richtlijnen voor code-voorbeelden in communicatie vanuit het project NL Design System.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Beslissingen voor schrijfwijze","permalink":"/project/schrijfwijzer/beslissingen"},"next":{"title":"Reviews","permalink":"/project/schrijfwijzer/reviews"}}');
   var o = r(86070),
    t = r(18439),
    d = r(59292);
   const l = { title: 'Code', hide_title: !0, sidebar_label: 'Code', sidebar_position: 8, pagination_label: 'Code', description: 'Richtlijnen voor code-voorbeelden in communicatie vanuit het project NL Design System.', keywords: ['kernteam'] },
    s = 'Code',
    c = {},
    a = [
     { value: 'Taal', id: 'taal', level: 2 },
     { value: 'Code in lopende tekst', id: 'code-in-lopende-tekst', level: 2 },
     { value: 'Code Block', id: 'code-block', level: 2 },
     { value: 'Code comments', id: 'code-comments', level: 2 },
     { value: 'Conventies', id: 'conventies', level: 2 },
     { value: 'Vendor prefix', id: 'vendor-prefix', level: 2 },
     { value: 'URLs', id: 'urls', level: 2 },
     { value: 'Regellengte', id: 'regellengte', level: 2 },
     { value: 'Minimale code-voorbeelden', id: 'minimale-code-voorbeelden', level: 2 },
     { value: 'Afkortingen', id: 'afkortingen', level: 2 },
     { value: 'Realistische content', id: 'realistische-content', level: 2 },
    ];
   function h(e) {
    const n = { a: 'a', code: 'code', em: 'em', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'code', children: 'Code' }) }), '\n', (0, o.jsx)(d.f, { purpose: 'lead', children: (0, o.jsx)(n.p, { children: 'Met herkenbare code-voorbeelden wordt het makkelijker om richtlijnen en patronen uit het design system te begrijpen.\nGebruik deze tips om goede voorbeelden te maken.' }) }), '\n', (0, o.jsx)(n.h2, { id: 'taal', children: 'Taal' }), '\n', (0, o.jsxs)(n.p, { children: ['Omdat alle Web Platform APIs Engelstalig zijn, gebruiken we Engelstalig code. Bijvoorbeeld: ', (0, o.jsx)(n.code, { children: 'next()' }), ' in plaats van ', (0, o.jsx)(n.code, { children: 'volgende()' }), '.'] }), '\n', (0, o.jsx)(n.p, { children: 'De tekstinhoud van HTML-codevoorbeelden mag wel Nederlands zijn.' }), '\n', (0, o.jsx)(n.h2, { id: 'code-in-lopende-tekst', children: 'Code in lopende tekst' }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik het ', (0, o.jsx)(n.a, { href: '/code/', children: 'Code component' }), ' om code in de lopende tekst en in koppen op te maken. Zo krijgt de code een beter leesbaar lettertype, en wordt voorkomen dat de tekst onbedoeld vertaald wordt door vertaalsoftware. In Markdown gebruik je daarvoor de "backtick" tekens. Bijvoorbeeld:'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-md', children: 'Gebruik `alertElement.focus()` om de toetsenbordfocus te verplaatsen.\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Gebruik Code in lopende tekst alleen voor korte code snippets die ook zonder syntax highlighting goed te begrijpen zijn, en kies anders voor een Code Block' }), '\n', (0, o.jsx)(n.h2, { id: 'code-block', children: 'Code Block' }), '\n', (0, o.jsxs)(n.p, { children: ['Stel de taal van de code in bij Markdown ', (0, o.jsx)(n.a, { href: '/code-block/', children: 'Code Blocks' }), ', zodat de bijpassende syntax highlighting wordt gebruikt. Bijvoorbeeld, een Markdown codeblock met het type ', (0, o.jsx)(n.code, { children: 'md' }), ':'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-md', children: '```md\nGebruik `alertElement.focus()` om de toetsenbordfocus te verplaatsen.\n```\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Veelgebruikte types zijn:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.code, { children: 'css' }), ': CSS'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.code, { children: 'html' }), ': HTML'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.code, { children: 'js' }), ': JavaScript en ECMAScript'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.code, { children: 'json' }), ': JSON'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.code, { children: 'jsx' }), ': JavaScript met React JSX'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.code, { children: 'md' }), ': Markdown'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.code, { children: 'mdx' }), ': Markdown met React JSX'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.code, { children: 'scss' }), ': SCSS'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.code, { children: 'shell' }), ": command-line commando's en code"] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.code, { children: 'text' }), ': platte tekst'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.code, { children: 'xml' }), ': XML'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.code, { children: 'yaml' }), ': YAML configuratie-bestanden'] }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'code-comments', children: 'Code comments' }), '\n', (0, o.jsx)(n.p, { children: 'Plaats de uitleg buiten de Code Block, en vermijd code comments in code-voorbeelden. Zo kan de uitleg in andere talen gelezen worden met vertaalsoftware.' }), '\n', (0, o.jsx)(n.h2, { id: 'conventies', children: 'Conventies' }), '\n', (0, o.jsxs)(n.p, { children: ['Volg ', (0, o.jsx)(n.a, { href: '/handboek/developer/conventies/', children: 'code conventies' }), '. Aandachtspunten:'] }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'gebruik moderne JavaScript, zoals arrow functions.' }), '\n', (0, o.jsxs)(n.li, { children: ['gebruik moderne events, zoals ', (0, o.jsx)(n.code, { children: 'input' }), ' in plaats van ', (0, o.jsx)(n.code, { children: 'change' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['gebruik moderne event APIs, zoals ', (0, o.jsx)(n.code, { children: 'key' }), ' in plaats van ', (0, o.jsx)(n.code, { children: 'keyCode' }), '.'] }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ["Vermijd patronen en API's die worden afgeraden, om te voorkomen dat mensen de verkeerde aanpak gaan gebruiken. Bijvoorbeeld: gebruik geen ", (0, o.jsx)(n.code, { children: 'maxlength' }), ' voor ', (0, o.jsx)(n.code, { children: 'input' }), '.'] }), '\n', '\n', (0, o.jsx)(n.h2, { id: 'vendor-prefix', children: 'Vendor prefix' }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik ', (0, o.jsx)(n.code, { children: 'example' }), ' als prefix voor code waar een vendor prefix gebruikelijk is. Bijvoorbeeld:'] }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['class names: ', (0, o.jsx)(n.code, { children: 'class="example-button"' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['CSS variables: ', (0, o.jsx)(n.code, { children: 'var(--example-button-color)' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['design tokens: ', (0, o.jsx)(n.code, { children: 'example.button.color' }), '.'] }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'urls', children: 'URLs' }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik de gereserveerde domeinnaam ', (0, o.jsx)(n.code, { children: 'example.com' }), ' in voorbeelden waar een URL nodig is. Voorkom dat je een domeinnaam gebruikt die in de toekomst in verkeerde handen kan komen.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Bijvoorbeeld: ', (0, o.jsx)(n.code, { children: '<a href="https://example.com/login">Inloggen</a>' }), '.'] }), '\n', (0, o.jsx)(n.h2, { id: 'regellengte', children: 'Regellengte' }), '\n', (0, o.jsx)(n.p, { children: 'Probeer de "nesting" van de code beperkt te houden, om te voorkomen dat onnodige niveau\'s van nesting de regels langer maken.' }), '\n', (0, o.jsx)(n.p, { children: 'Code in code-voorbeelden kan automatisch opgemaakt worden met Prettier, dus de witruimte voor inspringing hoef je niet handmatig te optimaliseren.' }), '\n', (0, o.jsx)(n.h2, { id: 'minimale-code-voorbeelden', children: 'Minimale code-voorbeelden' }), '\n', (0, o.jsx)(n.p, { children: 'Beperk code-voorbeelden tot een minimum, zodat het makkelijk is om de essentie te begrijpen. Voeg een korte uitleg toe dat het code-voorbeeld onvolledig is wanneer het risico bestaat dat mensen verkeerde voorbeelden als basis gebruiken.' }), '\n', (0, o.jsx)(n.h2, { id: 'afkortingen', children: 'Afkortingen' }), '\n', (0, o.jsxs)(n.p, { children: ['Schrijf ', (0, o.jsx)(n.em, { children: 'command line options' }), ' voluit waar mogelijk, zodat de code beter te begrijpen is zonder achtergrondkennis. Bijvoorbeeld: ', (0, o.jsx)(n.code, { children: 'npm install --save-dev' }), ' in plaats van ', (0, o.jsx)(n.code, { children: 'npm i -D' }), '.'] }), '\n', (0, o.jsx)(n.h2, { id: 'realistische-content', children: 'Realistische content' }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik realistische teksten in voorbeelden, en geen populaire placeholder-teksten zoals "', (0, o.jsx)(n.a, { href: 'https://www.lipsum.com', children: 'Lorem ipsum' }), '", "', (0, o.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/Hello%2C_world', children: 'Hello, world' }), '" en ', (0, o.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/Foobar', children: '"foo", "bar" en "quux"' }), '.'] }), '\n', (0, o.jsx)(n.p, { children: 'De tekstinhoud van het code-voorbeeld moet zelf geen documentatie bevatten, alle documentatie moet beschikbaar zijn buiten de Code Block.' })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
