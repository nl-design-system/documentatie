'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25774],
 {
  18439(e, n, i) {
   i.d(n, { R: () => r, x: () => l });
   var s = i(30758);
   const t = {},
    o = s.createContext(t);
   function r(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), s.createElement(o.Provider, { value: n }, e.children));
   }
  },
  88679(e, n, i) {
   (i.r(n), i.d(n, { assets: () => Je, contentTitle: () => Ue, default: () => Xe, frontMatter: () => Ke, metadata: () => s, toc: () => qe }));
   const s = JSON.parse('{"id":"handboek/huisstijl-vastleggen/basis-tokens/index","title":"Basis-tokens","description":"Basis-tokens bieden organisaties de mogelijkheid om hun huisstijl-beslissingen op 1 plek voor meerdere componenten vast te leggen.","source":"@site/docs/handboek/huisstijl-vastleggen/basis-tokens/index.mdx","sourceDirName":"handboek/huisstijl-vastleggen/basis-tokens","slug":"/handboek/huisstijl/basis-tokens","permalink":"/handboek/huisstijl/basis-tokens","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/huisstijl-vastleggen/basis-tokens/index.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Basis-tokens","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Basis-tokens","sidebar_position":2,"navigation_order":2,"pagination_label":"Basis-tokens","description":"Basis-tokens bieden organisaties de mogelijkheid om hun huisstijl-beslissingen op 1 plek voor meerdere componenten vast te leggen.","slug":"/handboek/huisstijl/basis-tokens","keywords":["componenten","design system","design tokens","basis tokens","thema\'s"]},"sidebar":"handboek","previous":{"title":"Design tokens - Introductie","permalink":"/handboek/huisstijl/design-tokens"},"next":{"title":"Thema\'s","permalink":"/handboek/huisstijl/themas"}}');
   var t = i(86070),
    o = i(18439);
   function r(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Gebruik ', (0, t.jsx)(n.code, { children: 'action' }), ' om kleuren toe te wijzen aan interactieve elementen.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
   function c(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Bedoeld voor knoppen.' });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   function a(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Bedoeld voor overige interactieve componenten.' });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   function j(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Om inactieve elementen visueel aan te duiden.' });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j(e);
   }
   function u(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'De belangrijke huisstijlkleur van de organisatie.' });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function g(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'De tweede huisstijlkleur van de organisatie. Als de organisatie deze heeft.' });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g(e);
   }
   function m(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'De derde huisstijlkleur van de organisatie. Als de organisatie deze heeft.' });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   function k(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Voor het aanbrengen van structuur.' });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(k, { ...e }) }) : k(e);
   }
   function w(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Om iets te markeren of uit te lichten.' });
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(w, { ...e }) }) : w(e);
   }
   function R(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Voor een negatief signaal, foutmelding of kritieke situatie.' });
   }
   function D(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(R, { ...e }) }) : R(e);
   }
   function B(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Voor een informatief of neutraal signaal.' });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(B, { ...e }) }) : B(e);
   }
   function _(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Voor een positief signaal, bevestiging of geslaagde actie.' });
   }
   function A(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(_, { ...e }) }) : _(e);
   }
   function S(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Voor actieve selecties.' });
   }
   function H(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(S, { ...e }) }) : S(e);
   }
   function C(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Voor een waarschuwend signaal of risico.' });
   }
   function T(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(C, { ...e }) }) : C(e);
   }
   function V(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'De ruimte binnen componenten, boven of onder tekst.' });
   }
   function L(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(V, { ...e }) }) : V(e);
   }
   function P(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'De ruimte binnen componenten, voor of na tekst.' });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(P, { ...e }) }) : P(e);
   }
   function M(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'De verticale ruimte tussen componenten.' });
   }
   function G(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(M, { ...e }) }) : M(e);
   }
   function I(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'De horizontale ruimte tussen componenten.' });
   }
   function O(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(I, { ...e }) }) : I(e);
   }
   function F(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'De ruimte binnen componenten, tussen tekst en iconen.' });
   }
   function E(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(F, { ...e }) }) : F(e);
   }
   function W(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Er zijn twee basis-tokens beschikbaar voor lettertype: het standaard-lettertype en een lettertype waarmee code goed leesbaar is.' });
   }
   function Z(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(W, { ...e }) }) : W(e);
   }
   function K(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Standaard lettertype voor tekst.' });
   }
   function U(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(K, { ...e }) }) : K(e);
   }
   function J(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Voor tekst die als code wordt weergegeven.' });
   }
   function q(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(J, { ...e }) }) : J(e);
   }
   function Q(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Er zijn zeven basis-tokens beschikbaar om lettergrootte te bepalen.' });
   }
   function X(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(Q, { ...e }) }) : Q(e);
   }
   function Y(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Er zijn twee basis-tokens beschikbaar om lettergewicht te bepalen: het standaard gewicht en een gewicht om tekst vetgedrukt te maken.' });
   }
   function $(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(Y, { ...e }) }) : Y(e);
   }
   function ee(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Standaard gewicht voor reguliere tekst.' });
   }
   function ne(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(ee, { ...e }) }) : ee(e);
   }
   function ie(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Gewicht voor vetgedrukte tekst.' });
   }
   function se(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(ie, { ...e }) }) : ie(e);
   }
   function te(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Voor elke lettergrootte is er een corresponderende basis-token voor regelhoogte beschikbaar.' });
   }
   function oe(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(te, { ...e }) }) : te(e);
   }
   function re(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Stijl van alle koppen.' });
   }
   function le(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(re, { ...e }) }) : re(e);
   }
   function ce(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Voor schaduw van componenten zijn 4 basis-tokens beschikbaar.' });
   }
   function de(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(ce, { ...e }) }) : ce(e);
   }
   function ae(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Voor de mate waarmee hoeken worden afgerond zijn 5 basis-tokens beschikbaar.' });
   }
   function he(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(ae, { ...e }) }) : ae(e);
   }
   function je(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Voor kader- of lijndikte zijn 4 basis-tokens beschikbaar.' });
   }
   function xe(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(je, { ...e }) }) : je(e);
   }
   function ue(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Stijl van de focus state.' });
   }
   function pe(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(ue, { ...e }) }) : ue(e);
   }
   function ge(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Stijl van alle formulier-elementen zoals Text Input en Text Area. Maar ook Checkbox en Radio Button.' });
   }
   function be(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(ge, { ...e }) }) : ge(e);
   }
   function me(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Algemene achtergrondkleur.' });
   }
   function ve(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(me, { ...e }) }) : me(e);
   }
   function ke(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Alternatieve achtergrondkleur ten opzichte van ', (0, t.jsx)(n.code, { children: 'bg-document' }), ', meestal iets donkerder.'] });
   }
   function fe(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(ke, { ...e }) }) : ke(e);
   }
   function we(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Standaard achtergrondkleur voor getinte componenten in standaardstatus.' });
   }
   function ze(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(we, { ...e }) }) : we(e);
   }
   function Re(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: "Achtergrondkleur bij 'hover' status van getinte of transparante componenten." });
   }
   function De(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(Re, { ...e }) }) : Re(e);
   }
   function Be(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: "Achtergrondkleur bij 'active' of 'selected' status van getinte of transparante componenten." });
   }
   function ye(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(Be, { ...e }) }) : Be(e);
   }
   function _e(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Subtiele lijnkleur, inzetbaar als er geen contrastverhouding van 3:1 vereist is.' });
   }
   function Ae(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(_e, { ...e }) }) : _e(e);
   }
   function Se(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Standaard lijnkleur. Moet een contrastverhouding van 3:1 of meer hebben met ', (0, t.jsx)(n.code, { children: 'bg-default' }), '.'] });
   }
   function He(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(Se, { ...e }) }) : Se(e);
   }
   function Ce(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ["Lijnkleur bij 'hover' status. Moet een contrastverhouding van 3:1 of meer hebben met ", (0, t.jsx)(n.code, { children: 'bg-hover' }), '.'] });
   }
   function Te(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(Ce, { ...e }) }) : Ce(e);
   }
   function Ve(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ["Lijnkleur voor 'active' of 'selected' status. Moet een contrastverhouding van 3:1 of meer hebben met ", (0, t.jsx)(n.code, { children: 'bg-active' }), '.'] });
   }
   function Le(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(Ve, { ...e }) }) : Ve(e);
   }
   function Pe(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Standaard tekstkleur. Moet een contrastverhouding van 4.5:1 of meer hebben met ', (0, t.jsx)(n.code, { children: 'bg-default' }), '.'] });
   }
   function Ne(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(Pe, { ...e }) }) : Pe(e);
   }
   function Me(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: "Tekstkleur bij 'hover' status. Moet een contrastverhouding van 4.5:1 of meer hebben met bg-hover." });
   }
   function Ge(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(Me, { ...e }) }) : Me(e);
   }
   function Ie(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ["Tekstkleur bij 'active' of 'selected' status. Moet een contrastverhouding van 4.5:1 of meer hebben met ", (0, t.jsx)(n.code, { children: 'bg-active' }), '.'] });
   }
   function Oe(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(Ie, { ...e }) }) : Ie(e);
   }
   function Fe(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Alternatieve, subtielere voorgrondkleur ten opzichte van ', (0, t.jsx)(n.code, { children: 'color-document' }), '. Moet een contrastverhouding van 4.5:1 of meer hebben met ', (0, t.jsx)(n.code, { children: 'bg-subtle' }), '.'] });
   }
   function Ee(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(Fe, { ...e }) }) : Fe(e);
   }
   function We(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Algemene voorgrondkleur. Moet een contrastverhouding van 4.5:1 of meer hebben met ', (0, t.jsx)(n.code, { children: 'bg-subtle' }), '.'] });
   }
   function Ze(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(We, { ...e }) }) : We(e);
   }
   const Ke = { title: 'Basis-tokens', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Basis-tokens', sidebar_position: 2, navigation_order: 2, pagination_label: 'Basis-tokens', description: 'Basis-tokens bieden organisaties de mogelijkheid om hun huisstijl-beslissingen op 1 plek voor meerdere componenten vast te leggen.', slug: '/handboek/huisstijl/basis-tokens', keywords: ['componenten', 'design system', 'design tokens', 'basis tokens', "thema's"] },
    Ue = 'Basis-tokens',
    Je = {},
    qe = [
     { value: 'Goed om te weten', id: 'goed-om-te-weten', level: 2 },
     { value: 'Naamgeving', id: 'naamgeving', level: 3 },
     { value: 'Onderling verwijzen', id: 'onderling-verwijzen', level: 3 },
     { value: 'Basis-tokens voor typografie', id: 'basis-tokens-voor-typografie', level: 2 },
     { value: 'Lettertype', id: 'lettertype', level: 3 },
     { value: 'Default', id: 'default', level: 4 },
     { value: 'Monospace', id: 'monospace', level: 4 },
     { value: 'Lettergewicht', id: 'lettergewicht', level: 3 },
     { value: 'Default', id: 'default-1', level: 4 },
     { value: 'Bold', id: 'bold', level: 4 },
     { value: 'Lettergrootte', id: 'lettergrootte', level: 3 },
     { value: 'Regelhoogte', id: 'regelhoogte', level: 3 },
     { value: 'Basis-tokens voor kleur', id: 'basis-tokens-voor-kleur', level: 2 },
     { value: 'As 1: Doel', id: 'as-1-doel', level: 3 },
     { value: 'Default', id: 'default-2', level: 4 },
     { value: 'Accent-1, accent-2 en accent-3', id: 'accent-1-accent-2-en-accent-3', level: 4 },
     { value: 'Accent-1', id: 'accent-1', level: 5 },
     { value: 'Accent-2', id: 'accent-2', level: 5 },
     { value: 'Accent-3', id: 'accent-3', level: 5 },
     { value: 'Action-1 en action-2', id: 'action-1-en-action-2', level: 4 },
     { value: 'Action-1', id: 'action-1', level: 5 },
     { value: 'Action-2', id: 'action-2', level: 5 },
     { value: 'Disabled', id: 'disabled', level: 4 },
     { value: 'Signaalkleuren', id: 'signaalkleuren', level: 4 },
     { value: 'Info', id: 'info', level: 5 },
     { value: 'Warning', id: 'warning', level: 5 },
     { value: 'Negative', id: 'negative', level: 5 },
     { value: 'Positive', id: 'positive', level: 5 },
     { value: 'Highlight', id: 'highlight', level: 4 },
     { value: 'Selected', id: 'selected', level: 4 },
     { value: 'As 2: Toepassing', id: 'as-2-toepassing', level: 3 },
     { value: 'Background Document', id: 'background-document', level: 4 },
     { value: 'Background Subtle', id: 'background-subtle', level: 4 },
     { value: 'Background Default', id: 'background-default', level: 4 },
     { value: 'Background Hover', id: 'background-hover', level: 4 },
     { value: 'Background Active', id: 'background-active', level: 4 },
     { value: 'Border Subtle', id: 'border-subtle', level: 4 },
     { value: 'Border Default', id: 'border-default', level: 4 },
     { value: 'Border Hover', id: 'border-hover', level: 4 },
     { value: 'Border Active', id: 'border-active', level: 4 },
     { value: 'Color Default', id: 'color-default', level: 4 },
     { value: 'Color Hover', id: 'color-hover', level: 4 },
     { value: 'Color Active', id: 'color-active', level: 4 },
     { value: 'Color Subtle', id: 'color-subtle', level: 4 },
     { value: 'Color Document', id: 'color-document', level: 4 },
     { value: 'Combinatie van As 1 en As 2', id: 'combinatie-van-as-1-en-as-2', level: 3 },
     { value: 'Inverse set', id: 'inverse-set', level: 3 },
     { value: 'Transparant', id: 'transparant', level: 3 },
     { value: 'Basis-tokens voor ruimte', id: 'basis-tokens-voor-ruimte', level: 2 },
     { value: 'Block', id: 'block', level: 3 },
     { value: 'Inline', id: 'inline', level: 3 },
     { value: 'Row', id: 'row', level: 3 },
     { value: 'Column', id: 'column', level: 3 },
     { value: 'Text', id: 'text', level: 3 },
     { value: 'Basis-tokens voor afmeting', id: 'basis-tokens-voor-afmeting', level: 2 },
     { value: 'Afmeting van iconen', id: 'afmeting-van-iconen', level: 3 },
     { value: 'Afmeting van interactieve componenten', id: 'afmeting-van-interactieve-componenten', level: 3 },
     { value: 'Basis-tokens voor afgeronde hoeken', id: 'basis-tokens-voor-afgeronde-hoeken', level: 2 },
     { value: 'Basis-tokens voor kader- of lijndikte', id: 'basis-tokens-voor-kader--of-lijndikte', level: 2 },
     { value: 'Basis-tokens voor schaduw', id: 'basis-tokens-voor-schaduw', level: 2 },
     { value: 'Speciale groepen', id: 'speciale-groepen', level: 2 },
     { value: 'Heading', id: 'heading', level: 3 },
     { value: 'Form Control', id: 'form-control', level: 3 },
     { value: 'Focus', id: 'focus', level: 3 },
     { value: 'Aanvullingen op basis-tokens', id: 'aanvullingen-op-basis-tokens', level: 2 },
     { value: 'Help deze documentatie te verbeteren', id: 'help-deze-documentatie-te-verbeteren', level: 2 },
     { value: 'Vragen', id: 'vragen', level: 2 },
    ];
   function Qe(e) {
    const n = { a: 'a', admonition: 'admonition', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', header: 'header', hr: 'hr', img: 'img', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'basis-tokens', children: 'Basis-tokens' }) }), '\n', (0, t.jsxs)(n.p, { children: ["Basis-tokens bieden organisaties een 'basis-set' van ", (0, t.jsx)(n.a, { href: '/handboek/huisstijl/design-tokens/#common-tokens', children: "'Common' tokens" }), '. Door organisatieoverstijgend uit dezelfde bron te werken, worden componenten eenvoudig uitwisselbaar tussen organisaties.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens.png', alt: "De afbeelding toont een blauwe en groene primaire knop. Daarboven staan de verwijzingen vanuit de verschillende token niveau's." }) }), '\n', (0, t.jsx)(n.p, { children: 'Omdat we verschillende huisstijlen willen ondersteunen, is de set bewust ruim opgezet. Het is makkelijker om ongebruikte tokens later te verwijderen dan telkens nieuwe toe te moeten voegen.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_doel.png', alt: 'De afbeelding toont 4 knoppen. Ze verschillen van kleur, lettertype en de mate waarin de hoeken zijn afgerond.' }) }), '\n', (0, t.jsx)(n.h2, { id: 'goed-om-te-weten', children: 'Goed om te weten' }), '\n', (0, t.jsx)(n.h3, { id: 'naamgeving', children: 'Naamgeving' }), '\n', (0, t.jsx)(n.p, { children: 'De basis-tokens zijn voorzien van duidelijke, voorspelbare namen. Die naamgeving is opgebouwd uit de volgende lagen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Prefix (basis)' }), '\n', (0, t.jsx)(n.li, { children: 'Groep (optioneel, bijvoorbeeld text of space)' }), '\n', (0, t.jsx)(n.li, { children: 'Eigenschap (bijvoorbeeld font-family, font-size of border-width)' }), '\n', (0, t.jsx)(n.li, { children: 'Optie (bijvoorbeeld default, bold, sm, md of lg)' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Dat resulteert in naamgeving zoals:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-family.default' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-family.monospace' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-weight.default' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-weight.bold' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-size.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-size.lg' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.line-height.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.line-height.lg' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.inline.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.inline.lg' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.block.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.block.lg' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.size.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.size.lg' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.size.icon.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.size.icon.lg' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.border-radius.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.border-radius.lg' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.border-width.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.border-width.lg' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.box-shadow.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.box-shadow.lg' }) }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'onderling-verwijzen', children: 'Onderling verwijzen' }), '\n', (0, t.jsxs)(n.p, { children: ['Omdat we uiteenlopende huisstijlen willen ondersteunen, is de set basis-tokens ruim opgezet. Maar als je een eenvoudig thema hebt, is het mogelijk om basis-tokens onderling naar elkaar te laten verwijzen. Dit gebeurt bijvoorbeeld ook bij het ', (0, t.jsx)(n.a, { href: '/handboek/huisstijl/themas/start-thema/', children: 'Start-thema' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.strong, { children: 'Voorbeeld A' }) }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.text.font-family.default' }), ' heeft als waarde ', (0, t.jsx)(n.code, { children: 'IBM Plex Sans, sans-serif' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.heading.font-family' }), ' heeft als waarde ', (0, t.jsx)(n.code, { children: '{basis.text.font-family.default}' }), '.'] }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Gebruikt jouw organisatie \xe9\xe9n lettertype voor zowel tekst als koppen? Dan hoef je enkel de waarde van ', (0, t.jsx)(n.code, { children: 'basis.text.font-family.default' }), ' aan te passen.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Wil je koppen een ander lettertype geven? Dan pas je ', (0, t.jsx)(n.code, { children: 'basis.heading.font-family' }), ' afzonderlijk aan.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_voorbeeld-a.png', alt: 'De afbeelding toont 2 voorbeelden. Links wordt voor tekst en headings hetzelfde lettertype gebruikt. Rechts wordt voor de headings een ander lettertype gebruikt.' }) }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.strong, { children: 'Voorbeeld B' }) }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.color.accent-1.color-default' }), ' heeft als waarde ', (0, t.jsx)(n.code, { children: '#1B59A4' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.color.accent-2.color-default' }), ' heeft als waarde ', (0, t.jsx)(n.code, { children: '{basis.color.accent-1.color-default}' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.color.accent-3.color-default' }), ' heeft als waarde ', (0, t.jsx)(n.code, { children: '{basis.color.accent-1.color-default}' }), '.'] }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Heeft jouw organisatie \xe9\xe9n huisstijlkleur? Dan volstaat het om ', (0, t.jsx)(n.code, { children: 'accent-1' }), ' aan te passen.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Zijn er meerdere huisstijlkleuren? Dan kun je ', (0, t.jsx)(n.code, { children: 'accent-2' }), ' en ', (0, t.jsx)(n.code, { children: 'accent-3' }), ' individueel instellen en de verwijzingen loslaten.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_voorbeeld-b.png', alt: "De afbeelding toont 2 voorbeelden. Links worden basis-tokens 'accent-2' en 'accent-3' gevuld door 'accent-1'. Rechts hebben basis-tokens 'accent-1', 'accent-2' en 'accent-3' verschillende kleuren." }) }), '\n', (0, t.jsx)(n.h2, { id: 'basis-tokens-voor-typografie', children: 'Basis-tokens voor typografie' }), '\n', (0, t.jsx)(n.p, { children: 'Voor typografie zijn er basis-tokens beschikbaar voor het instellen van:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Lettertype (', (0, t.jsx)(n.code, { children: 'font-family' }), ')'] }), '\n', (0, t.jsxs)(n.li, { children: ['Lettergewicht (', (0, t.jsx)(n.code, { children: 'font-weight' }), ')'] }), '\n', (0, t.jsxs)(n.li, { children: ['Lettergrootte (', (0, t.jsx)(n.code, { children: 'font-size' }), ')'] }), '\n', (0, t.jsxs)(n.li, { children: ['Regelhoogte (', (0, t.jsx)(n.code, { children: 'line-height' }), ')'] }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'lettertype', children: 'Lettertype' }), '\n', (0, t.jsx)(Z, {}), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-family.default' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-family.monospace' }) }), '\n'] }), '\n', (0, t.jsx)(n.h4, { id: 'default', children: 'Default' }), '\n', (0, t.jsx)(U, {}), '\n', (0, t.jsx)(n.h4, { id: 'monospace', children: 'Monospace' }), '\n', (0, t.jsx)(q, {}), '\n', (0, t.jsx)(n.h3, { id: 'lettergewicht', children: 'Lettergewicht' }), '\n', (0, t.jsx)($, {}), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-weight.default' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-weight.bold' }) }), '\n'] }), '\n', (0, t.jsx)(n.h4, { id: 'default-1', children: 'Default' }), '\n', (0, t.jsx)(ne, {}), '\n', (0, t.jsx)(n.h4, { id: 'bold', children: 'Bold' }), '\n', (0, t.jsx)(se, {}), '\n', (0, t.jsx)(n.h3, { id: 'lettergrootte', children: 'Lettergrootte' }), '\n', (0, t.jsx)(X, {}), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-size.sm' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-size.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-size.lg' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-size.xl' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-size.2xl' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-size.3xl' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.font-size.4xl' }) }), '\n'] }), '\n', (0, t.jsx)(n.admonition, { title: 'Tip', type: 'tip', children: (0, t.jsxs)(n.p, { children: ['Bij het ', (0, t.jsx)(n.a, { href: '/handboek/huisstijl/themas/start-thema/', children: 'Start-thema' }), ' zijn de waarden van deze tokens in ', (0, t.jsx)(n.code, { children: 'rem' }), ' genoteerd zodat tekst automatisch schaalt als men behoefte heeft aan grotere of kleinere letters.'] }) }), '\n', (0, t.jsx)(n.h3, { id: 'regelhoogte', children: 'Regelhoogte' }), '\n', (0, t.jsx)(oe, {}), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.line-height.sm' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.line-height.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.line-height.lg' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.line-height.xl' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.line-height.2xl' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.line-height.3xl' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.text.line-height.4xl' }) }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: "Gebruik 'unitless' (eenheidsloze) waarden voor deze tokens." }), '\n', (0, t.jsx)(n.admonition, { title: 'Tip', type: 'tip', children: (0, t.jsx)(n.p, { children: 'Door gebruik te maken van unitless waarden beweegt de regelhoogte mee met de gekozen lettergrootte.' }) }), '\n', (0, t.jsx)(n.h2, { id: 'basis-tokens-voor-kleur', children: 'Basis-tokens voor kleur' }), '\n', (0, t.jsxs)(n.p, { children: ['Voor kleur (', (0, t.jsx)(n.code, { children: 'color' }), ') is een uitgebreide set basis-tokens beschikbaar, ge\xefnspireerd op ', (0, t.jsx)(n.a, { href: 'https://www.radix-ui.com/colors', children: 'Radix' }), '. De kleuren zijn volledig aanpasbaar naar wens van jouw organisatie.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_colors.png', alt: 'De afbeelding toont een grid van verschillende kleuren, onder de kleuren staan de namen van de basis-tokens en hun waarde.' }) }), '\n', (0, t.jsx)(n.admonition, { title: 'Tip', type: 'tip', children: (0, t.jsxs)(n.p, { children: ['Het instellen van kleuren vergt wat tijd. Maar het voordeel is dat als je kleurcontrast op het Common niveau goed regelt, je je daar op Component niveau geen zorgen meer over hoeft te maken. Heeft jouw organisatie geen specifieke kleurvoorschriften? Dan kun je de standaardwaarden uit het ', (0, t.jsx)(n.a, { href: '/handboek/huisstijl/themas/start-thema/', children: 'Start-thema' }), ' prima laten staan.'] }) }), '\n', (0, t.jsx)(n.p, { children: 'De basis-tokens voor kleur zijn te verdelen in de volgende onderdelen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Twee assen: Doel en toepassing.' }), '\n', (0, t.jsx)(n.li, { children: 'Twee sets: Default en Inverse.' }), '\n', (0, t.jsx)(n.li, { children: 'Twee modi: Light en Dark.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Laten we beginnen met de eerste as.' }), '\n', (0, t.jsx)(n.h3, { id: 'as-1-doel', children: 'As 1: Doel' }), '\n', (0, t.jsx)(n.p, { children: 'Kleur gebruik je altijd met een bepaald doel of intentie. Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Huisstijl' }), '\n', (0, t.jsx)(n.li, { children: 'Interactie' }), '\n', (0, t.jsx)(n.li, { children: 'Signaal (feedback)' }), '\n', (0, t.jsx)(n.li, { children: 'Structuur' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Voor deze doelen gebruiken we de volgende termen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'default' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'accent-1' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'accent-2' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'accent-3' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'action-1' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'action-2' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'disabled' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'info' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'negative' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'positive' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'warning' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'highlight' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'selected' }) }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_kleur-as-1.png', alt: 'De afbeelding toont as 1, enkele termen verticaal uitgelijnd. Horizontaal zijn de termen van as 2 niet goed zichtbaar.' }) }), '\n', (0, t.jsx)(n.h4, { id: 'default-2', children: 'Default' }), '\n', (0, t.jsx)(f, {}), '\n', (0, t.jsxs)(n.p, { children: ['Bijvoorbeeld bij componenten zoals ', (0, t.jsx)(n.a, { href: '/paragraph/', children: 'Paragraph' }), ', ', (0, t.jsx)(n.a, { href: '/heading/', children: 'Heading' }), ' of ', (0, t.jsx)(n.a, { href: '/table/', children: 'Table' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_kleur-default.png', alt: 'De afbeelding toont de componenten Heading, Paragraph, Divider en Tabel allen met eenvoudige grijze tot donkergrijze kleuren.' }) }), '\n', (0, t.jsx)(n.h4, { id: 'accent-1-accent-2-en-accent-3', children: 'Accent-1, accent-2 en accent-3' }), '\n', (0, t.jsxs)(n.p, { children: ['Gebruik ', (0, t.jsx)(n.code, { children: 'accent' }), ' als je vanuit de huisstijl kleur wilt inzetten. Bijvoorbeeld bij componenten zoals ', (0, t.jsx)(n.a, { href: '/page-header/', children: 'Page Header' }), ' of ', (0, t.jsx)(n.a, { href: '/page-footer/', children: 'Page Footer' }), '.'] }), '\n', (0, t.jsx)(n.h5, { id: 'accent-1', children: 'Accent-1' }), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(n.h5, { id: 'accent-2', children: 'Accent-2' }), '\n', (0, t.jsx)(b, {}), '\n', (0, t.jsx)(n.h5, { id: 'accent-3', children: 'Accent-3' }), '\n', (0, t.jsx)(v, {}), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_kleur-accent-start.png', alt: 'De afbeelding toont de componenten Page Header en Page Footer op basis van een blauwe kleur.' }) }), '\n', (0, t.jsx)(n.admonition, { title: 'Tip', type: 'tip', children: (0, t.jsxs)(n.p, { children: ['Bij het ', (0, t.jsx)(n.a, { href: '/handboek/huisstijl/themas/start-thema/', children: 'Start-thema' }), ' verwijzen ', (0, t.jsx)(n.code, { children: 'accent-2' }), ' en ', (0, t.jsx)(n.code, { children: 'accent-3' }), ' naar ', (0, t.jsx)(n.code, { children: 'accent-1' }), '. Heeft jouw organisatie meerdere huisstijlkleuren? Dan kun je ', (0, t.jsx)(n.code, { children: 'accent-2' }), ' en ', (0, t.jsx)(n.code, { children: 'accent-3' }), ' los van elkaar instellen.'] }) }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_kleur-accent-alt.png', alt: 'De afbeelding toont de componenten Page Header en Page Footer op basis van een violet kleur.' }) }), '\n', (0, t.jsx)(n.h4, { id: 'action-1-en-action-2', children: 'Action-1 en action-2' }), '\n', (0, t.jsx)(l, {}), '\n', (0, t.jsxs)(n.p, { children: ['Bijvoorbeeld bij componenten zoals ', (0, t.jsx)(n.a, { href: '/button/', children: 'Button' }), ', ', (0, t.jsx)(n.a, { href: '/link/', children: 'Link' }), ', ', (0, t.jsx)(n.a, { href: '/breadcrumb-navigation/', children: 'Breadcrumb Navigation' }), ' of ', (0, t.jsx)(n.a, { href: '/page-number-navigation/', children: 'Page Number Navigation' }), '.'] }), '\n', (0, t.jsx)(n.h5, { id: 'action-1', children: 'Action-1' }), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(n.h5, { id: 'action-2', children: 'Action-2' }), '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_kleur-action-start.png', alt: 'De afbeelding toont de componenten Button, Link, Breadcrumb Navigation en Page Number Navigation op basis van een blauwe kleur.' }) }), '\n', (0, t.jsx)(n.admonition, { title: 'Tip', type: 'tip', children: (0, t.jsxs)(n.p, { children: ['Bij het ', (0, t.jsx)(n.a, { href: '/handboek/huisstijl/themas/start-thema/', children: 'Start-thema' }), '\ufffcverwijst ', (0, t.jsx)(n.code, { children: 'action-2' }), ' naar ', (0, t.jsx)(n.code, { children: 'action-1' }), '. Heeft jouw organisatie meerdere interactiekleuren? Dan kun je ', (0, t.jsx)(n.code, { children: 'action-2' }), ' los van ', (0, t.jsx)(n.code, { children: 'action-1' }), ' instellen.'] }) }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_kleur-action-voorbeeld.png', alt: 'De afbeelding toont de componenten Button, Link, Breadcrumb Navigation en Page Number Navigation. De knoppen zijn groen. Alle andere interactieve componenten zijn blauw.' }) }), '\n', (0, t.jsx)(n.h4, { id: 'disabled', children: 'Disabled' }), '\n', (0, t.jsx)(x, {}), '\n', (0, t.jsxs)(n.p, { children: ['Bijvoorbeeld bij componenten zoals ', (0, t.jsx)(n.a, { href: '/breadcrumb-navigation/', children: 'Breadcrumb Navigation' }), ', ', (0, t.jsx)(n.a, { href: '/page-number-navigation/', children: 'Page Number Navigation' }), ' en ', (0, t.jsx)(n.a, { href: '/progress-list/', children: 'Progress List' }), '. Voor elementen die disabled zijn, worden vaak lichtere kleuren gebruikt. Let erop dat de tekst- en achtergrondkleur nog wel ', (0, t.jsx)(n.a, { href: '/wcag/1.4.3/', children: 'genoeg contrast' }), ' hebben.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_kleur-disabled.png', alt: 'De afbeelding toont de componenten Breadcrumb Navigation, Page Number Navigation en Progress List met grijze kleuren.' }) }), '\n', (0, t.jsx)(n.h4, { id: 'signaalkleuren', children: 'Signaalkleuren' }), '\n', (0, t.jsx)(n.p, { children: 'Gebruik deze basis-tokens voor signalen of feedback.' }), '\n', (0, t.jsxs)(n.p, { children: ['Denk hierbij aan componenten zoals ', (0, t.jsx)(n.a, { href: '/alert/', children: 'Alert' }), ', ', (0, t.jsx)(n.a, { href: '/progress-list/', children: 'Progress List' }), ' of ', (0, t.jsx)(n.a, { href: '/status-badge/', children: 'Status Badge' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_kleur-signal.png', alt: 'De afbeelding toont de componenten Alert, Progress List en Status Badge met rode, groene, oranje en blauwe signaalkleuren.' }) }), '\n', (0, t.jsx)(n.h5, { id: 'info', children: 'Info' }), '\n', (0, t.jsx)(y, {}), '\n', (0, t.jsx)(n.h5, { id: 'warning', children: 'Warning' }), '\n', (0, t.jsx)(T, {}), '\n', (0, t.jsx)(n.h5, { id: 'negative', children: 'Negative' }), '\n', (0, t.jsx)(D, {}), '\n', (0, t.jsx)(n.h5, { id: 'positive', children: 'Positive' }), '\n', (0, t.jsx)(A, {}), '\n', (0, t.jsx)(n.h4, { id: 'highlight', children: 'Highlight' }), '\n', (0, t.jsx)(z, {}), '\n', (0, t.jsxs)(n.p, { children: ['Bijvoorbeeld met de ', (0, t.jsx)(n.a, { href: '/mark/', children: 'Mark' }), ' component.'] }), '\n', (0, t.jsx)(n.h4, { id: 'selected', children: 'Selected' }), '\n', (0, t.jsx)(H, {}), '\n', (0, t.jsxs)(n.p, { children: ['Bijvoorbeeld in een Combobox of ', (0, t.jsx)(n.a, { href: '/table/', children: 'Table' }), '.'] }), '\n', (0, t.jsx)(n.h3, { id: 'as-2-toepassing', children: 'As 2: Toepassing' }), '\n', (0, t.jsx)(n.p, { children: 'Naast het doel gebruik je kleuren ook afhankelijk van de toepassing. Denk aan:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Achtergrond' }), '\n', (0, t.jsx)(n.li, { children: 'Voorgrond (tekst en iconen)' }), '\n', (0, t.jsx)(n.li, { children: 'Kaders en lijnen' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Voor deze toepassingen gebruiken we de volgende termen, waarin ook status en hi\xebrarchie zijn meegenomen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Achtergrond:', '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'bg-document' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'bg-subtle' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'bg-default' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'bg-hover' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'bg-active' }) }), '\n'] }), '\n'] }), '\n', (0, t.jsxs)(n.li, { children: ['Kaders en lijnen:', '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'border-subtle' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'border-default' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'border-hover' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'border-active' }) }), '\n'] }), '\n'] }), '\n', (0, t.jsxs)(n.li, { children: ['Voorgrond:', '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'color-subtle' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'color-default' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'color-hover' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'color-active' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'color-document' }) }), '\n'] }), '\n'] }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_kleur-as-2.png', alt: 'De afbeelding toont as 1, enkele termen verticaal uitgelijnd. Horizontaal zijn de termen van as 2 ook goed zichtbaar.' }) }), '\n', (0, t.jsx)(n.p, { children: 'Hieronder lees je per toepassing wat het betekent, inclusief richtlijnen die zorgen voor voldoende kleurcontrast.' }), '\n', (0, t.jsx)(n.h4, { id: 'background-document', children: 'Background Document' }), '\n', (0, t.jsx)(ve, {}), '\n', (0, t.jsx)(n.h4, { id: 'background-subtle', children: 'Background Subtle' }), '\n', (0, t.jsx)(fe, {}), '\n', (0, t.jsx)(n.h4, { id: 'background-default', children: 'Background Default' }), '\n', (0, t.jsx)(ze, {}), '\n', (0, t.jsx)(n.h4, { id: 'background-hover', children: 'Background Hover' }), '\n', (0, t.jsx)(De, {}), '\n', (0, t.jsx)(n.h4, { id: 'background-active', children: 'Background Active' }), '\n', (0, t.jsx)(ye, {}), '\n', (0, t.jsx)(n.h4, { id: 'border-subtle', children: 'Border Subtle' }), '\n', (0, t.jsx)(Ae, {}), '\n', (0, t.jsx)(n.h4, { id: 'border-default', children: 'Border Default' }), '\n', (0, t.jsx)(He, {}), '\n', (0, t.jsx)(n.h4, { id: 'border-hover', children: 'Border Hover' }), '\n', (0, t.jsx)(Te, {}), '\n', (0, t.jsx)(n.h4, { id: 'border-active', children: 'Border Active' }), '\n', (0, t.jsx)(Le, {}), '\n', (0, t.jsx)(n.h4, { id: 'color-default', children: 'Color Default' }), '\n', (0, t.jsx)(Ne, {}), '\n', (0, t.jsx)(n.h4, { id: 'color-hover', children: 'Color Hover' }), '\n', (0, t.jsx)(Ge, {}), '\n', (0, t.jsx)(n.h4, { id: 'color-active', children: 'Color Active' }), '\n', (0, t.jsx)(Oe, {}), '\n', (0, t.jsx)(n.h4, { id: 'color-subtle', children: 'Color Subtle' }), '\n', (0, t.jsx)(Ee, {}), '\n', (0, t.jsx)(n.h4, { id: 'color-document', children: 'Color Document' }), '\n', (0, t.jsx)(Ze, {}), '\n', (0, t.jsx)(n.h3, { id: 'combinatie-van-as-1-en-as-2', children: 'Combinatie van As 1 en As 2' }), '\n', (0, t.jsx)(n.p, { children: 'Door termen van As 1 (doel) en As 2 (toepassing) te combineren, resulteert dat in naamgeving zoals:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1.bg-document' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1.bg-subtle' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1.bg-default' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1.bg-hover' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1.bg-active' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1.border-subtle' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1.border-default' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1.border-hover' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1.border-active' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1.color-default' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1.color-hover' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1.color-active' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1.color-subtle' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1.color-document' }) }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'inverse-set', children: 'Inverse set' }), '\n', (0, t.jsxs)(n.p, { children: ["Als we het hierbij zouden laten, zouden alle componenten subtiel getint blijven. Maar soms wil je juist componenten 'stevig' neerzetten. Denk aan een primaire knop die echt de aandacht moet trekken, of een ", (0, t.jsx)(n.a, { href: '/page-footer/', children: 'Page Footer' }), ' die je visueel duidelijk wilt scheiden van de content erboven.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_kleur-inverse.png', alt: 'De afbeelding toont de componenten Button en Page Footer, die twee keer zijn afgebeeld.. Links hebben ze subtiele kleuren, rechts hebben ze een stevige kleurstelling.' }) }), '\n', (0, t.jsx)(n.p, { children: "Daarom is er ook een 'inverse' set tokens beschikbaar:" }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1-inverse.bg-document' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1-inverse.bg-subtle' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.color.accent-1-inverse.bg-default' }) }), '\n', (0, t.jsx)(n.li, { children: 'etcetera' }), '\n'] }), '\n', (0, t.jsx)(n.admonition, { title: 'Tip', type: 'tip', children: (0, t.jsxs)(n.p, { children: ['Wil je dat een primaire knop en een secundaire knop dezelfde kleur delen? Zorg er dan voor dat ', (0, t.jsx)(n.code, { children: '*.inverse.bg-default' }), ' overeenkomt met ', (0, t.jsx)(n.code, { children: '*.color-default' }), ' en ', (0, t.jsx)(n.code, { children: '*.border-default' }), '.'] }) }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_kleur-action-gelijk.png', alt: 'De afbeelding toont 2 keer 2 knoppen van het primaire en secondaire type. Links met blauwe kleuren. Rechts met groene kleuren. Bij de primaire knop is de kleur toegepast op de achtergrond. Bij de secondaire knop is de kleur toegepast op de tekst en de rand.' }) }), '\n', (0, t.jsx)(n.p, { children: 'Onderstaande afbeelding laat zien hoe de basis-tokens voor kleur binnen een interface worden gebruikt. Uiteraard zitten hier bij een uiteindelijke implementatie Component tokens tussen.' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.color.default.bg-subtle' }), ' wordt gebruikt voor de lichtgrijze achtergrond.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.color.default.bg-document' }), ' wordt gebruikt voor de witte achtergrond die visueel boven op de lichtgrijze achtergrond ligt.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.color.default.border-subtle' }), ' wordt gebruikt voor de lichtgrijze rand rondom de witte achtergrond.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.color.positive.bg-default' }), ' wordt gebruikt voor de lichtgroene achtergrond van de melding.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.color.positive.border-default' }), ' wordt gebruikt voor de groene rand rondom de melding.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.color.positive.color-default' }), ' wordt gebruikt voor het groene icoon van de melding.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.color.positive.color-document' }), ' wordt gebruikt voor de donkergroene tekst van de melding.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.heading.color' }), ' wordt gebruikt voor de kop.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.color.default.color-document' }), ' wordt gebruikt voor de paragraaf.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.color.action-2.color-default' }), ' wordt gebruikt voor de link.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.color.action-1-inverse.bg-default' }), ' wordt gebruikt voor de achtergrond van de knop.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'basis.color.action-1-inverse.color-default' }), ' wordt gebruikt voor de tekst van de knop.'] }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_basis-tokens_color-toepassing.png', alt: 'Visueel voorbeeld van de uitleg die voorafgaand aan de afbeelding wordt beschreven.' }) }), '\n', (0, t.jsx)(n.h3, { id: 'transparant', children: 'Transparant' }), '\n', (0, t.jsxs)(n.p, { children: ['Er is een specifieke basis-token beschikbaar voor transparantie: ', (0, t.jsx)(n.code, { children: 'basis.color.transparent' }), '. Deze token zorgt ervoor dat transparantie eenduidig wordt vertaald naar verschillende outputformaten, zoals CSS of design tools.'] }), '\n', (0, t.jsx)(n.h2, { id: 'basis-tokens-voor-ruimte', children: 'Basis-tokens voor ruimte' }), '\n', (0, t.jsxs)(n.p, { children: ['Voor ruimtelijke indeling (', (0, t.jsx)(n.code, { children: 'space' }), ') binnen en tussen componenten zijn basis-tokens beschikbaar. Deze tokens zijn gebaseerd op het ', (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/spacing-concepten/', children: "'spacing concept' dat we bij NL Design System aanhouden" }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Dit zorgt voor tokens met termen zoals ', (0, t.jsx)(n.code, { children: 'inline' }), ', ', (0, t.jsx)(n.code, { children: 'block' }), ', ', (0, t.jsx)(n.code, { children: 'text' }), ', ', (0, t.jsx)(n.code, { children: 'column' }), ' en ', (0, t.jsx)(n.code, { children: 'row' }), ", gecombineerd met opties op basis van 't-shirt sizing':"] }), '\n', (0, t.jsx)(n.h3, { id: 'block', children: 'Block' }), '\n', (0, t.jsx)(L, {}), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.block.sm' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.block.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.block.lg' }) }), '\n', (0, t.jsx)(n.li, { children: 'etcetera' }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'inline', children: 'Inline' }), '\n', (0, t.jsx)(N, {}), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.inline.sm' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.inline.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.inline.lg' }) }), '\n', (0, t.jsx)(n.li, { children: 'etcetera' }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'row', children: 'Row' }), '\n', (0, t.jsx)(G, {}), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.row.sm' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.row.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.row.lg' }) }), '\n', (0, t.jsx)(n.li, { children: 'etcetera' }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'column', children: 'Column' }), '\n', (0, t.jsx)(O, {}), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.column.sm' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.column.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.column.lg' }) }), '\n', (0, t.jsx)(n.li, { children: 'etcetera' }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'text', children: 'Text' }), '\n', (0, t.jsx)(E, {}), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.text.sm' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.text.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.space.text.lg' }) }), '\n', (0, t.jsx)(n.li, { children: 'etcetera' }), '\n'] }), '\n', (0, t.jsx)(n.admonition, { title: 'Tip', type: 'tip', children: (0, t.jsxs)(n.p, { children: ['Er zijn ook tokens voor ruimte beschikbaar met de termen ', (0, t.jsx)(n.code, { children: 'min' }), ' en ', (0, t.jsx)(n.code, { children: 'max' }), '. Hiermee bereiden we ons voor op de mogelijkheid om ruimte vloeiend te laten groeien afhankelijk van de grootte van een scherm.'] }) }), '\n', (0, t.jsx)(n.h2, { id: 'basis-tokens-voor-afmeting', children: 'Basis-tokens voor afmeting' }), '\n', (0, t.jsxs)(n.p, { children: ['Wil je componenten een specifieke afmeting (', (0, t.jsx)(n.code, { children: 'size' }), ') geven? Ook daar zijn basis-tokens voor beschikbaar. En ook hier wordt gebruikgemaakt van t-shirt sizing.'] }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.size.sm' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.size.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.size.lg' }) }), '\n', (0, t.jsx)(n.li, { children: 'etcetera' }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'afmeting-van-iconen', children: 'Afmeting van iconen' }), '\n', (0, t.jsx)(n.p, { children: 'Voor het formaat van iconen is een specifieke set basis-tokens beschikbaar:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.size.icon.sm' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.size.icon.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.size.icon.lg' }) }), '\n', (0, t.jsx)(n.li, { children: 'etcetera' }), '\n'] }), '\n', (0, t.jsxs)(n.admonition, { title: 'Tip', type: 'tip', children: [(0, t.jsxs)(n.p, { children: ['Het aantal basis-tokens voor icoonformaten komt overeen met het aantal basis-tokens voor lettergrootte en regelhoogte. Hierdoor kun je iconen eenvoudig afstemmen op de tekst die ernaast staat. Voor het ', (0, t.jsx)(n.a, { href: '/handboek/huisstijl/themas/start-thema/', children: 'Start-thema' }), '\ufffcis de relatie tussen deze tokens als volgt vastgelegd:'] }), (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.code, { children: 'font-size' }), ' \xd7 ', (0, t.jsx)(n.code, { children: 'line-height' }), ' = formaat van icoon'] }), (0, t.jsxs)(n.p, { children: ['De waarde is vastgelegd in ', (0, t.jsx)(n.code, { children: 'rem' }), '. Hierdoor schaalt een icoon mee wanneer men behoefte heeft aan grotere letters.'] })] }), '\n', (0, t.jsx)(n.h3, { id: 'afmeting-van-interactieve-componenten', children: 'Afmeting van interactieve componenten' }), '\n', (0, t.jsx)(n.p, { children: 'Interactieve elementen zoals knoppen en links hebben baat bij een minimale afmeting. Dit maakt ze beter bruikbaar, vooral voor mensen met motorische beperkingen of bij gebruik van touchscreens.' }), '\n', (0, t.jsx)(n.p, { children: 'Daarvoor zijn de volgende twee tokens beschikbaar:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.pointer-target.min-block-size' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.pointer-target.min-inline-size' }) }), '\n'] }), '\n', (0, t.jsx)(n.admonition, { title: 'Tip', type: 'tip', children: (0, t.jsxs)(n.p, { children: ['De minimale afmeting die WCAG voorschrijft is 24\xd724 CSS-pixels, maar als best practice wordt een afmeting van 44\xd744 pixels aangeraden. Voor het ', (0, t.jsx)(n.a, { href: '/handboek/huisstijl/themas/start-thema/', children: 'Start-thema' }), ' gaan we nog een stapje verder en gebruiken we een waarde van 48px.'] }) }), '\n', (0, t.jsx)(n.h2, { id: 'basis-tokens-voor-afgeronde-hoeken', children: 'Basis-tokens voor afgeronde hoeken' }), '\n', (0, t.jsx)(he, {}), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.border-radius.none' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.border-radius.sm' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.border-radius.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.border-radius.lg' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.border-radius.round' }) }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'basis-tokens-voor-kader--of-lijndikte', children: 'Basis-tokens voor kader- of lijndikte' }), '\n', (0, t.jsx)(xe, {}), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.border-width.none' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.border-width.sm' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.border-width.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.border-width.lg' }) }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'basis-tokens-voor-schaduw', children: 'Basis-tokens voor schaduw' }), '\n', (0, t.jsx)(de, {}), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.box-shadow.none' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.box-shadow.sm' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.box-shadow.md' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.box-shadow.lg' }) }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'speciale-groepen', children: 'Speciale groepen' }), '\n', (0, t.jsx)(n.p, { children: 'Binnen de basis-tokens zijn enkele speciale groepen aangewezen. Deze hebben extra aandacht gekregen omdat hiervoor specifieke richtlijnen zijn of omdat wijzigingen hierin snel grote invloed hebben op de huisstijl.' }), '\n', (0, t.jsxs)(n.p, { children: ['De naamgeving van deze speciale groepen wijkt bewust af van de algemene structuur. Ze sluiten aan op de naamgeving van de ', (0, t.jsx)(n.a, { href: '/handboek/huisstijl/design-tokens/#component-tokens', children: 'Component tokens' }), ', zodat ze beter herkenbaar zijn.'] }), '\n', (0, t.jsx)(n.h3, { id: 'heading', children: 'Heading' }), '\n', (0, t.jsx)(le, {}), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.heading.font-family' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.heading.font-weight' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.heading.color' }) }), '\n', (0, t.jsx)(n.li, { children: 'etcetera' }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'form-control', children: 'Form Control' }), '\n', (0, t.jsx)(be, {}), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.form-control.font-family' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.form-control.font-weight' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.form-control.background-color' }) }), '\n', (0, t.jsx)(n.li, { children: 'etcetera' }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'focus', children: 'Focus' }), '\n', (0, t.jsx)(pe, {}), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.focus.background-color' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.focus.color' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.focus.outline-color' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'basis.focus.inverse.outline-color' }) }), '\n'] }), '\n', (0, t.jsxs)(n.admonition, { title: 'Tip', type: 'tip', children: [(0, t.jsxs)(n.p, { children: ["De 'focus' status in het ", (0, t.jsx)(n.a, { href: '/handboek/huisstijl/themas/start-thema/', children: 'Start-thema' }), ' is visueel krachtig: felgeel gecombineerd met zwart en een zwart-wit gestreepte rand.'] }), (0, t.jsx)(n.p, { children: "Deze kleurwaarden zijn bewust 'hard-coded', zodat de focus status altijd afwijkt van alle andere content. Dit bevordert de toegankelijkheid." }), (0, t.jsx)(n.p, { children: 'Bij formulieren vermijden we een gele achtergrond om verwarring met auto-complete te voorkomen.' })] }), '\n', (0, t.jsx)(n.h2, { id: 'aanvullingen-op-basis-tokens', children: 'Aanvullingen op basis-tokens' }), '\n', (0, t.jsx)(n.p, { children: 'We hopen dat de set basis-tokens voldoende mogelijkheden biedt voor jouw organisatie. Mis je design tokens op het Common niveau? Dan kun je zelf extra tokens toevoegen met een prefix van jouw organisatie.' }), '\n', (0, t.jsxs)(n.p, { children: ['Heb je vragen of suggesties? Deel ze gerust via ', (0, t.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/405', children: 'de GitHub Discussion voor Basis-tokens' }), '.'] }), '\n', (0, t.jsx)(n.hr, {}), '\n', (0, t.jsx)(n.h2, { id: 'help-deze-documentatie-te-verbeteren', children: 'Help deze documentatie te verbeteren' }), '\n', (0, t.jsxs)(n.p, { children: ['Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie', children: 'GitHub' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'vragen', children: 'Vragen' }), '\n', (0, t.jsxs)(n.p, { children: ['Heb je een vraag? Twijfel niet en ', (0, t.jsx)(n.a, { href: '/project/kernteam/', children: 'neem contact op met het kernteam' }), '.'] })] });
   }
   function Xe(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(Qe, { ...e }) }) : Qe(e);
   }
  },
 },
]);
