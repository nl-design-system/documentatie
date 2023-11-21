"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [81700],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => u });
   var r = t(67294);
   function a(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function i(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r);
    }
    return t;
   }
   function o(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? i(Object(t), !0).forEach(function (n) {
         a(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : i(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function l(e, n) {
    if (null == e) return {};
    var t,
     r,
     a = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       a = {},
       i = Object.keys(e);
      for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
      return a;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
    }
    return a;
   }
   var s = r.createContext({}),
    d = function (e) {
     var n = r.useContext(s),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : o(o({}, n), e)), t;
    },
    m = function (e) {
     var n = d(e.components);
     return r.createElement(s.Provider, { value: n }, e.children);
    },
    g = "mdxType",
    c = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    p = r.forwardRef(function (e, n) {
     var t = e.components,
      a = e.mdxType,
      i = e.originalType,
      s = e.parentName,
      m = l(e, ["components", "mdxType", "originalType", "parentName"]),
      g = d(t),
      p = a,
      u = g["".concat(s, ".").concat(p)] || g[p] || c[p] || i;
     return t ? r.createElement(u, o(o({ ref: n }, m), {}, { components: t })) : r.createElement(u, o({ ref: n }, m));
    });
   function u(e, n) {
    var t = arguments,
     a = n && n.mdxType;
    if ("string" == typeof e || a) {
     var i = t.length,
      o = new Array(i);
     o[0] = p;
     var l = {};
     for (var s in n) hasOwnProperty.call(n, s) && (l[s] = n[s]);
     (l.originalType = e), (l[g] = "string" == typeof e ? e : a), (o[1] = l);
     for (var d = 2; d < i; d++) o[d] = t[d];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, t);
   }
   p.displayName = "MDXCreateElement";
  },
  65154: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => o, default: () => c, frontMatter: () => i, metadata: () => l, toc: () => d });
   var r = t(87462),
    a = (t(67294), t(3905));
   const i = { title: "E\xe9n over\xadheid - practise what you preach", slug: "van-start-een-gezamelijk-design-system-voor-de-overheid", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["een overheid", "NL design system"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/01/Schermafbeelding-2019-01-25-om-13.28.37-e1548707554969.png", hide_table_of_contents: !1, date: new Date("2019-03-25T00:00:00.000Z") },
    o = void 0,
    l = {
     permalink: "/blog/van-start-een-gezamelijk-design-system-voor-de-overheid",
     source: "@site/blog/2019/20190325-een-overheid-practice-what-you-preach.md",
     title: "E\xe9n over\xadheid - practise what you preach",
     description: "E\xe9n overheid - Practise what you preach. Een gezamenlijk design system voor de overheid.",
     date: "2019-03-25T00:00:00.000Z",
     formattedDate: "25 maart 2019",
     tags: [
      { label: "een overheid", permalink: "/blog/tags/een-overheid" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }],
     frontMatter: { title: "E\xe9n over\xadheid - practise what you preach", slug: "van-start-een-gezamelijk-design-system-voor-de-overheid", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["een overheid", "NL design system"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/01/Schermafbeelding-2019-01-25-om-13.28.37-e1548707554969.png", hide_table_of_contents: !1, date: "2019-03-25T00:00:00.000Z" },
     prevItem: { title: "Kick-off werkgroepen van het NL Design System", permalink: "/blog/kick-off-werkgroepen-van-het-nl-design-system" },
     nextItem: { title: "Van start! Een gezamelijk design system voor de overheid", permalink: "/blog/een-overheid-practice-what-you-preach" },
    },
    s = { authorsImageUrls: [void 0] },
    d = [],
    m = { toc: d },
    g = "wrapper";
   function c(e) {
    let { components: n, ...t } = e;
    return (0, a.kt)(g, (0, r.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("p", null, "E\xe9n overheid - Practise what you preach. Een gezamenlijk design system voor de overheid."), (0, a.kt)("p", null, (0, a.kt)("em", { parentName: "p" }, "Deze column is eerder verschenen in ", (0, a.kt)("a", { parentName: "em", href: "https://onlinetouch.nl/ingovernment/ingovernment-maart-2019?html=true#/17/" }, "InGovernment"))), (0, a.kt)("p", null, "E\xe9n overheid. Dat is nu al een tijd het mantra. We moeten niet langer van burgers verwachten dat ze weten waar ze moeten wezen voor een dienst. Het zal hen een rotzorg zijn of ze nu bij het CBS, de RDW of de gemeente Tietjerksteradeel moeten zijn. Ze willen gewoon een rijbewijs. En de aanvraag moet soepeltjes werken op een manier die ze gewend zijn. Waarom lukt dat laatste toch zo moeilijk? Waarom werkt MijnOverheid niet hetzelfde als Mijn Duo? En Mijn Belastingdienst? Laat staan Mijn Belastingsamenwerking BghU (say wh\xe1t!?)?"), (0, a.kt)("p", null, "Dat probleem kunnen we volgens mij alleen oplossen als de overheid zich anders gaat organiseren. Een inspirerend voorbeeld daarvan zag ik recentelijk bij Nuon. Als je daar vroeger klant wilde worden, had je te maken met de afdeling sales, daarna met de afdeling levering, de afdeling facturering en als je pech had met de afdeling klantenservice. Dat werkte niet lekker voor klanten. En dus richtten ze hun organisatie radicaal anders in. Zodat je als klant alleen nog maar te maken hebt met het multidisciplinaire team \u201cklantreis klant worden\u201d. Dat scheelt een hoop kastjes-naar-muren en dat zien ze nu bij Nuon terug in een hogere klanttevredenheid."), (0, a.kt)("p", null, "We moeten ook binnen de overheid bereid zijn om ons radicaal anders te organiseren. Je dienstverlening vormt zich immers naar hoe je organisatie is ingericht. Is je organisatiestructuur een harkje? Dan is je dienstverlening, nou ja, harkerig."), (0, a.kt)("p", null, "Je ziet gelukkig aan initiatieven zoals Common Ground dat er iets aan het veranderen is. Dat er samengewerkt wordt tussen organisaties, met multidisciplinaire teams, op een open manier waarbij iedereen laagdrempelig kan bijdragen. Dat komt dienstverlening ten goede."), (0, a.kt)("blockquote", null, (0, a.kt)("p", { parentName: "blockquote" }, "Ons doel is dat als je snapt hoe Mijn Overheid werkt, je ook gelijk je weg kunt vinden in Mijn DUO.")), (0, a.kt)("p", null, "Op een vergelijkbare manier zijn we dit jaar gestart met een ", (0, a.kt)("a", { parentName: "p", href: "http://www.gebruikercentraal.nl/design-system" }, "gezamenlijk design system voor de overheid"), ". Dat is een verzameling herbruikbare componenten (formulierelementen, pagina-indelingen, etc.) waarmee je digitale diensten kunt ontwikkelen. Die componenten zijn getest op gebruikers en toegankelijk. Zo kun je goedkoper, sneller en consistenter diensten ontwerpen en bouwen."), (0, a.kt)("p", null, "Zoiets gaat alleen vliegen als je over overheden heen samenwerkt. Dat gaat verder dan alleen afstemmen: we willen mensen uit alle overheden aanmoedigen om bij te dragen en uiteindelijk om zelfs tijdelijk onderdeel van het projectteam te worden. Die manier van samenwerken gaat de burger straks merken in diensten die een stuk herkenbaarder en daarmee gebruiksvriendelijker zijn. Zodat als je straks snapt hoe Mijn Overheid werkt, je ook gelijk je weg kunt vinden in Mijn DUO. En ja, zelfs in Mijn Belastingsamenwerking BghU."));
   }
   c.isMDXComponent = !0;
  },
 },
]);
