"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2241],
 {
  54146: (e, i, t) => {
   t.d(i, { C: () => k });
   var n = t(80413),
    s = t(16532),
    a = t(86259),
    r = t(50959),
    l = t(6556);
   const d = "example-form_t2kS",
    o = "utrecht-textbox--example-house-number_Gpje",
    c = "utrecht-textbox--example-house-number-addition_B48h",
    m = "utrecht-textbox--example-street-name_yBRo",
    u = "utrecht-textbox--example-postal-code-nl_EiCQ",
    h = "utrecht-textbox--example-woonplaats_W8bo",
    p = "utrecht-textbox--example-voorletters_rUQ1",
    x = "utrecht-textbox--example-family-name_OW_g",
    v = "utrecht-textbox--example-tel_j5i8",
    g = "utrecht-textbox--example-tel-national_gBVb",
    j = "utrecht-textbox--example-voorvoegsel_MVYN",
    f = "utrecht-textbox--example-mail_Clno",
    b = "voorbeeld-theme--extensions_pWBG";
   var y = t(11527);
   const $ = (e) => {
     let { children: i, description: t, label: n } = e;
     const a = t ? (0, r.useId)() : null;
     return (0, y.jsxs)(s.pg, { role: "radiogroup", "aria-describedby": t ? a : void 0, children: [n ? (0, y.jsx)(s.Qv, { children: n }) : null, t ? (0, y.jsx)("div", { id: a, children: t }) : null, i] });
    },
    _ = (e) => {
     let { children: i, description: t } = e;
     return (0, y.jsxs)(s.Wi, { type: "radio", children: [(0, y.jsx)("p", { className: "utrecht-form-field__label utrecht-form-field__label--radio", children: i }), t ? (0, y.jsx)("div", { className: "utrecht-form-field__description", children: t }) : null] });
    },
    N = (e) => {
     let { children: i, description: t } = e;
     return (0, y.jsxs)(s.Wi, { type: "checkbox", children: [(0, y.jsx)("p", { className: "utrecht-form-field__label utrecht-form-field__label--checkbox", children: i }), t ? (0, y.jsx)("div", { className: "utrecht-form-field__description", children: t }) : null] });
    },
    k = (e) => {
     let { noAutoComplete: i = [], defaultOptional: t = !1, astrixOnly: k = !1, nativeNumberInput: w = [], checkboxForRadio: V = [], unclearLabel: S = [], unnecessaryQuestions: E = [], colorOnlyError: C = [], unlinkedLables: X = [], validationMode: F = "onSubmit", telNational: W = !1, postalCodeSpace: q, postalCodePattern: z = !0 } = e;
     const {
       register: U,
       handleSubmit: Z,
       formState: { errors: G },
      } = (0, l.cI)({ mode: F }),
      A = (e) => (!0 === X || X.includes(e) ? void 0 : (0, r.useId)()),
      Q = (0, r.useId)(),
      I = A("straatnaam"),
      O = A("huisnummer"),
      T = A("huisnummerToevoeging"),
      B = A("poscode"),
      H = A("woonplaats"),
      L = A("antiGraffitiCoating"),
      M = A("opmerkingen"),
      J = A("achternaam"),
      R = A("tussenvoegsels"),
      D = A("voorletters"),
      P = A("geslacht"),
      Y = A("email"),
      K = A("phone");
     return (0, y.jsx)(n.Z, { children: (0, y.jsxs)(s.JH, { className: (0, a.Z)("voorbeeld-theme", b), children: [" ", (0, y.jsxs)("main", { children: [(0, y.jsx)(s.nL, { children: "Voorbeeld formulier met fouten" }), (0, y.jsxs)("form", { onSubmit: Z((e) => console.log(e, G)), "aria-labelledby": Q, className: d, children: [(0, y.jsx)(s.XJ, { id: Q, children: "Graffiti-schoonmaakregeling aanvragen" }), (0, y.jsx)(s.nv, { children: "Graffiti of posters kunnen alleen worden verwijderd als u daarvoor toestemming geeft. U hoeft dit maar 1 keer te doen. Heeft u al een keer toestemming gegeven? Dan kunt u de vervuiling meteen melden." }), k && (0, y.jsxs)(s.nv, { children: ["Velden met een * zijn ", t ? "verplicht" : "optioneel"] }), (0, y.jsx)(s.aC, { children: "Gegevens pand" }), (0, y.jsxs)(s.Wi, { type: "text", children: [(0, y.jsx)(s.nv, { children: (0, y.jsxs)(s.lX, { htmlFor: I, children: [!0 === S || S.includes("straatnaam") ? "Straatna(a)m(en)" : "Straatnaam", t && (0, y.jsxs)("span", { children: [" ", k ? "*" : "(verplicht)"] })] }) }), !C.includes("straatnaam") && G.straatnaam && (0, y.jsx)(s.ue, { id: `${I}-description`, invalid: !0, className: `invalid-description--${G.straatnaam.type}`, children: G.straatnaam?.message.toString() }), (0, y.jsx)(s.fE, { ...U("straatnaam", { required: "Verplicht: Vergeet niet een straatnaam in te vullen" }), type: "text", id: I, autoComplete: !0 === i || i.includes("straatnaam") ? void 0 : "street-address", invalid: !!G.straatnaam, "aria-describedby": `${I}-description`, className: m })] }), (0, y.jsxs)(s.Wi, { type: "text", children: [(0, y.jsx)(s.nv, { children: (0, y.jsxs)(s.lX, { htmlFor: O, children: ["Huisnummer", t && (0, y.jsxs)("span", { children: [" ", k ? "*" : "(verplicht)"] })] }) }), !C.includes("huisnummer") && G.huisnummer && (0, y.jsx)(s.ue, { id: `${O}-description`, invalid: !0, className: `invalid-description--${G.huisnummer.type}`, children: G.huisnummer?.message.toString() }), !0 === w || w.includes("huisnummer") ? (0, y.jsx)(s.fE, { ...U("huisnummer", { required: "Verplicht: Vergeet niet een huisnummer in te vullen" }), type: "number", id: O, "aria-describedby": `${O}-description`, invalid: !!G.huisnummer, className: o }) : (0, y.jsx)(s.fE, { ...U("huisnummer", { required: "Verplicht: Vergeet niet een huisnummer in te vullen" }), type: "text", id: O, inputMode: "numeric", "aria-describedby": `${O}-description`, invalid: !!G.huisnummer, className: o })] }), (0, y.jsxs)(s.Wi, { type: "text", children: [(0, y.jsx)(s.nv, { children: (0, y.jsxs)(s.lX, { htmlFor: T, children: ["Toevoeging huisnummer", !t && (0, y.jsxs)("span", { children: [" ", k ? "*" : "(optioneel)"] })] }) }), !C.includes("huisnummer-toevoeging") && G["huisnummer-toevoeging"] && (0, y.jsx)(s.ue, { id: `${T}-description`, invalid: !0, className: `invalid-description--${G["huisnummer-toevoeging"].type}`, children: G["huisnummer-toevoeging"]?.message.toString() }), (0, y.jsx)(s.fE, { ...U("huisnummer-toevoeging"), type: "text", id: T, "aria-describedby": `${T}-description`, className: c })] }), (0, y.jsxs)(s.Wi, { type: "text", children: [(0, y.jsx)(s.nv, { children: (0, y.jsxs)(s.lX, { htmlFor: B, children: ["Postcode", t && (0, y.jsxs)("span", { children: [" ", k ? "*" : "(verplicht)"] })] }) }), !C.includes("postcode") && G.postcode && (0, y.jsx)(s.ue, { id: `${B}-description`, invalid: !0, className: `invalid-description--${G.postcode.type}`, children: G.postcode?.message.toString() }), (0, y.jsx)(s.fE, { ...U("postcode", { required: "Verplicht: Vergeet niet een postcode in te vullen", pattern: z ? (!0 === q ? /^\d{4} [A-Za-z]{2}$/ : !1 === q ? /^\d{4}[A-Za-z]{2}$/ : /^\s*\d{4}\s*[A-Za-z]{2}\s*$/) : void 0 }), type: "text", id: B, autoComplete: !0 === i || i.includes("postcode") ? void 0 : "postal-code", "aria-describedby": `${B}-description`, invalid: !!G.postcode, className: u })] }), (0, y.jsxs)(s.Wi, { type: "text", children: [(0, y.jsx)(s.nv, { children: (0, y.jsxs)(s.lX, { htmlFor: H, children: ["Woonplaats", t && (0, y.jsxs)("span", { children: [" ", k ? "*" : "(verplicht)"] })] }) }), !C.includes("woonplaats") && G.woonplaats && (0, y.jsx)(s.ue, { id: `${H}-description`, invalid: !0, className: `invalid-description--${G.woonplaats.type}`, children: G.woonplaats?.message.toString() }), (0, y.jsx)(s.fE, { ...U("woonplaats", { required: "Verplicht: Vergeet niet een woonplaats in te vullen" }), type: "text", id: H, autoComplete: !0 === i || i.includes("woonplaats") ? void 0 : "address-level2", "aria-describedby": `${H}-description`, invalid: !!G.woonplaats, className: h })] }), (0, y.jsx)(s.Wi, { children: (0, y.jsxs)(s.pg, { children: [(0, y.jsx)(s.Qv, { children: "Heeft uw pand een anti-graffiti-coating?" }), (0, y.jsxs)(N, { children: [!C.includes("anti-graffiti-coating") && G["anti-graffiti-coating"] && (0, y.jsx)(s.ue, { id: `${L}-description`, invalid: !0, className: `invalid-description--${G["anti-graffiti-coating"].type}`, children: G["anti-graffiti-coating"]?.message.toString() }), (0, y.jsxs)(s.lX, { htmlFor: `${L}-true`, type: "radio", children: [!0 === V || V.includes("anti-graffiti-coating") ? (0, y.jsx)(s.XZ, { ...U("anti-graffiti-coating"), className: "utrecht-form-field__input", id: `${L}-true`, value: "true", "aria-describedby": `${L}-description`, invalid: !!G["anti-graffiti-coating"] }) : (0, y.jsx)(s.EU, { ...U("anti-graffiti-coating"), className: "utrecht-form-field__input", id: `${L}-true`, value: "ja", "aria-describedby": `${L}-description`, invalid: !!G["anti-graffiti-coating"] }), "Ja"] })] }), (0, y.jsx)(N, { children: (0, y.jsxs)(s.lX, { htmlFor: `${L}-false`, type: "radio", children: [!0 === V || V.includes("anti-graffiti-coating") ? (0, y.jsx)(s.XZ, { ...U("anti-graffiti-coating"), className: "utrecht-form-field__input", id: `${L}-false`, value: "false", "aria-describedby": `${L}-description`, invalid: !!G["anti-graffiti-coating"] }) : (0, y.jsx)(s.EU, { ...U("anti-graffiti-coating"), className: "utrecht-form-field__input", id: `${L}-false`, value: "nee", "aria-describedby": `${L}-description`, invalid: !!G["anti-graffiti-coating"] }), "Nee"] }) })] }) }), (0, y.jsxs)(s.Wi, { type: "text", children: [(0, y.jsx)(s.nv, { children: (0, y.jsxs)(s.lX, { htmlFor: M, children: ["Aanvullende opmerkingen", !t && (0, y.jsxs)("span", { children: [" ", k ? "*" : "(optioneel)"] })] }) }), !C.includes("opmerkingen") && G.opmerkingen && (0, y.jsx)(s.ue, { id: `${M}-description`, invalid: !0, className: `invalid-description--${G.opmerkingen.type}`, children: G.opmerkingen?.message.toString() }), (0, y.jsx)(s.gx, { ...U("opmerkingen"), id: M, invalid: !!G.opmerkingen, "aria-describedby": `${M}-description` })] }), (0, y.jsx)(s.aC, { children: "Uw gegevens" }), (0, y.jsx)(s.nv, { children: "Om u zo goed mogelijk te kunnen helpen, ontvangen we graag uw contactgegevens. Deze gegevens worden zonder uw toestemming niet aan derden verstrekt." }), (0, y.jsxs)(s.Wi, { type: "text", children: [(0, y.jsx)(s.nv, { children: (0, y.jsxs)(s.lX, { htmlFor: J, children: ["Achternaam", t && (0, y.jsxs)("span", { children: [" ", k ? "*" : "(verplicht)"] })] }) }), !C.includes("achternaam") && G.achternaam && (0, y.jsx)(s.ue, { id: `${J}-description`, invalid: !0, className: `invalid-description--${G.achternaam.type}`, children: G.achternaam?.message.toString() }), (0, y.jsx)(s.fE, { ...U("achternaam", { required: "Verplicht: Vergeet niet een achternaam in te vullen" }), type: "text", id: J, autoComplete: !0 === i || i.includes("achternaam") ? void 0 : "cc-family-name", invalid: !!G.achternaam, "aria-describedby": `${J}-description`, className: x })] }), (0, y.jsxs)(s.Wi, { type: "text", children: [(0, y.jsx)(s.nv, { children: (0, y.jsxs)(s.lX, { htmlFor: R, children: [!0 === S || S.includes("tussenvoegsels") ? "Tussenvoegsel(s)" : "Tussenvoegsels", !t && (0, y.jsxs)("span", { children: [" ", k ? "*" : "(optioneel)"] })] }) }), !C.includes("tussenvoegsels") && G.tussenvoegsels && (0, y.jsx)(s.ue, { id: `${R}-description`, invalid: !0, className: `invalid-description--${G.tussenvoegsels.type}`, children: G.tussenvoegsels?.message.toString() }), (0, y.jsx)(s.fE, { ...U("tussenvoegsels"), type: "text", id: R, autoComplete: !0 === i || i.includes("tussenvoegsels") ? void 0 : "cc-family-name", "aria-describedby": `${R}-description`, invalid: !!G.tussenvoegsels, className: j })] }), (0, y.jsxs)(s.Wi, { type: "text", children: [(0, y.jsx)(s.nv, { children: (0, y.jsxs)(s.lX, { htmlFor: D, children: [!0 === S || S.includes("voorletters") ? "Voorletter(s)" : "Voorletters (1 of meerdere)", t && (0, y.jsxs)("span", { children: [" ", k ? "*" : "(verplicht)"] })] }) }), !C.includes("voorletters") && G.voorletters && (0, y.jsx)(s.ue, { id: `${D}-description`, invalid: !0, className: `invalid-description--${G.voorletters.type}`, children: G.voorletters?.message.toString() }), (0, y.jsx)(s.fE, { ...U("voorletters", { required: "Verplicht: Vergeet niet minimaal 1 voorletter in te vullen" }), type: "text", id: D, invalid: !!G.voorletters, "aria-describedby": `${D}-description`, className: p })] }), !0 === E || (E.includes("gender") && (0, y.jsxs)($, { label: "Geslacht " + (t ? (k ? "*" : "(verplicht)") : ""), description: (0, y.jsx)(s.ue, { id: `${P}-desciption`, invalid: !!G.geslacht, className: (0, a.Z)(!!G.geslacht && `invalid-description--${G.geslacht.type}`), children: "Selecteer 'Niet relevant' als u geen keuze wilt maken in geslacht" }), children: [(0, y.jsx)(_, { children: (0, y.jsxs)(s.lX, { htmlFor: `${P}-man`, type: "radio", children: [(0, y.jsx)(s.EU, { ...U("geslacht", { required: !0 }), className: "utrecht-form-field__input", id: `${P}-man`, value: "man", "aria-describedby": `${P}-desciption`, invalid: !!G.geslacht }), "Man"] }) }), (0, y.jsx)(_, { children: (0, y.jsxs)(s.lX, { htmlFor: `${P}-vrouw`, type: "radio", children: [(0, y.jsx)(s.EU, { ...U("geslacht", { required: !0 }), className: "utrecht-form-field__input", id: `${P}-vrouw`, value: "vrouw", "aria-describedby": `${P}-desciption`, invalid: !!G.geslacht }), "Vrouw"] }) }), (0, y.jsx)(_, { children: (0, y.jsxs)(s.lX, { htmlFor: `${P}-none`, type: "radio", children: [(0, y.jsx)(s.EU, { ...U("geslacht", { required: !0 }), className: "utrecht-form-field__input", id: `${P}-none`, value: "none", "aria-describedby": `${P}-desciption`, invalid: !!G.geslacht }), "Niet relevant"] }) })] })), (0, y.jsxs)(s.Wi, { type: "text", children: [(0, y.jsx)(s.nv, { children: (0, y.jsxs)(s.lX, { htmlFor: Y, children: ["E-mailadres", t && (0, y.jsxs)("span", { children: [" ", k ? "*" : "(verplicht)"] })] }) }), !C.includes("email") && G.email && (0, y.jsx)(s.ue, { id: `${Y}-description`, invalid: !0, className: `invalid-description--${G.email.type}`, children: G.email?.message.toString() }), (0, y.jsx)(s.fE, { ...U("email", { required: "Verplicht: Vergeet niet je email in te vullen" }), type: "email", id: Y, autoComplete: !0 === i || i.includes("email") ? void 0 : "email", invalid: !!G.email, "aria-describedby": `${Y}-description`, className: f })] }), (0, y.jsxs)(s.Wi, { type: "text", children: [(0, y.jsx)(s.nv, { children: (0, y.jsxs)(s.lX, { htmlFor: K, children: ["Telefoonnummer", t && (0, y.jsxs)("span", { children: [" ", k ? "*" : "(verplicht)"] })] }) }), !C.includes("telefoonnummer") && G.telefoonnummer && (0, y.jsx)(s.ue, { id: `${K}-description`, invalid: !0, className: `invalid-description--${G.telefoonnummer.type}`, children: G.telefoonnummer?.message.toString() }), (0, y.jsx)(s.fE, { ...U("telefoonnummer", { required: "Verplicht: Vergeet niet je telefoonnummer in te vullen" }), type: "tel", id: K, autoComplete: !0 === i || i.includes("telefoonnummer") ? void 0 : W ? "tel-national" : "tel", invalid: !!G.telefoonnummer, "aria-describedby": `${K}-description`, className: W ? g : v })] }), (0, y.jsx)(s.hE, { children: (0, y.jsx)(s.zx, { type: "submit", appearance: "primary-action-button", children: "Vraag aan" }) })] })] })] }) });
    };
  },
  82350: (e, i, t) => {
   t.r(i), t.d(i, { default: () => a });
   var n = t(54146),
    s = (t(50959), t(11527));
   const a = () => (0, s.jsx)(n.C, { unlinkedLables: ["woonplaats", "achternaam"], checkboxForRadio: !0, unnecessaryQuestions: ["gender"] });
  },
 },
]);