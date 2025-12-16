/*! For license information please see 57493.c95c32d8.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [57493],
 {
  1941: (e, t, n) => {
   n.d(t, { A: () => a });
   var a = (0, n(99773).A)('outline', 'file-unknown', 'IconFileUnknown', [
    ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
    ['path', { d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z', key: 'svg-1' }],
    ['path', { d: 'M12 17v.01', key: 'svg-2' }],
    ['path', { d: 'M12 14a1.5 1.5 0 1 0 -1.14 -2.474', key: 'svg-3' }],
   ]);
  },
  30696: (e, t, n) => {
   n.d(t, { A: () => a });
   var a = (0, n(99773).A)('outline', 'palette', 'IconPalette', [
    ['path', { d: 'M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25', key: 'svg-0' }],
    ['path', { d: 'M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-1' }],
    ['path', { d: 'M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-2' }],
    ['path', { d: 'M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-3' }],
   ]);
  },
  38985: (e, t, n) => {
   n.d(t, { A: () => a });
   var a = (0, n(99773).A)('outline', 'text-size', 'IconTextSize', [
    ['path', { d: 'M3 7v-2h13v2', key: 'svg-0' }],
    ['path', { d: 'M10 5v14', key: 'svg-1' }],
    ['path', { d: 'M12 19h-4', key: 'svg-2' }],
    ['path', { d: 'M15 13v-1h6v1', key: 'svg-3' }],
    ['path', { d: 'M18 12v7', key: 'svg-4' }],
    ['path', { d: 'M17 19h2', key: 'svg-5' }],
   ]);
  },
  43825: (e, t, n) => {
   n.d(t, { A: () => a });
   var a = (0, n(99773).A)('outline', 'underline', 'IconUnderline', [
    ['path', { d: 'M7 5v5a5 5 0 0 0 10 0v-5', key: 'svg-0' }],
    ['path', { d: 'M5 19h14', key: 'svg-1' }],
   ]);
  },
  44132: (e, t, n) => {
   n.d(t, { A: () => a });
   var a = (0, n(99773).A)('outline', 'line-height', 'IconLineHeight', [
    ['path', { d: 'M3 8l3 -3l3 3', key: 'svg-0' }],
    ['path', { d: 'M3 16l3 3l3 -3', key: 'svg-1' }],
    ['path', { d: 'M6 5l0 14', key: 'svg-2' }],
    ['path', { d: 'M13 6l7 0', key: 'svg-3' }],
    ['path', { d: 'M13 12l7 0', key: 'svg-4' }],
    ['path', { d: 'M13 18l7 0', key: 'svg-5' }],
   ]);
  },
  51450: (e, t, n) => {
   n.d(t, { A: () => a });
   var a = (0, n(99773).A)('outline', 'file-typography', 'IconFileTypography', [
    ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
    ['path', { d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z', key: 'svg-1' }],
    ['path', { d: 'M11 18h2', key: 'svg-2' }],
    ['path', { d: 'M12 18v-7', key: 'svg-3' }],
    ['path', { d: 'M9 12v-1h6v1', key: 'svg-4' }],
   ]);
  },
  57837: (e, t, n) => {
   n.d(t, { C: () => c });
   var a = n(19371),
    l = n(47301),
    r = n(86070),
    s = n(13526),
    o = n(30758),
    i = ['children', 'className'];
   function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     t &&
      (a = a.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, a);
    }
    return n;
   }
   function h(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? d(Object(n), !0).forEach(function (t) {
         (0, a.A)(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : d(Object(n)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
   }
   var c = (0, o.forwardRef)(function (e, t) {
    var n = e.children,
     a = e.className,
     o = (0, l.A)(e, i);
    return (0, r.jsx)('code', h(h({ dir: 'ltr', translate: 'no', className: (0, s.$)('nl-code', a) }, o), {}, { ref: t, children: n }));
   });
   c.displayName = 'Code';
   !(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if ('undefined' != typeof document) {
     var a = document.head || document.getElementsByTagName('head')[0],
      l = document.createElement('style');
     (l.type = 'text/css'), 'top' === n && a.firstChild ? a.insertBefore(l, a.firstChild) : a.appendChild(l), l.styleSheet ? (l.styleSheet.cssText = e) : l.appendChild(document.createTextNode(e));
    }
   })('.nl-code{background-color:var(--nl-code-background-color);color:var(--nl-code-color);font-family:var(--nl-code-font-family, monospace),monospace;font-size:var(--nl-code-font-size, inherit);hyphens:none;white-space:pre-wrap}\n');
  },
  64730: (e, t, n) => {
   n.d(t, { A: () => a });
   var a = (0, n(99773).A)('outline', 'bold', 'IconBold', [
    ['path', { d: 'M7 5h6a3.5 3.5 0 0 1 0 7h-6z', key: 'svg-0' }],
    ['path', { d: 'M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7', key: 'svg-1' }],
   ]);
  },
  64840: (e, t, n) => {
   n.d(t, { A: () => a });
   var a = (0, n(99773).A)('outline', 'copy', 'IconCopy', [
    ['path', { d: 'M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z', key: 'svg-0' }],
    ['path', { d: 'M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1', key: 'svg-1' }],
   ]);
  },
  73769: (e, t, n) => {
   n.d(t, { A: () => a });
   var a = (0, n(99773).A)('outline', 'ruler', 'IconRuler', [
    ['path', { d: 'M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1', key: 'svg-0' }],
    ['path', { d: 'M4 8l2 0', key: 'svg-1' }],
    ['path', { d: 'M4 12l3 0', key: 'svg-2' }],
    ['path', { d: 'M4 16l2 0', key: 'svg-3' }],
    ['path', { d: 'M8 4l0 2', key: 'svg-4' }],
    ['path', { d: 'M12 4l0 3', key: 'svg-5' }],
    ['path', { d: 'M16 4l0 2', key: 'svg-6' }],
   ]);
  },
  76855: (e) => {
   e.exports = JSON.parse('{"nl":{"link":{"active":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"}},"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"current":{"cursor":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<url>","pointer","*"],"nl.nldesignsystem.figma-implementation":false},"$type":"other"}},"disabled":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"cursor":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<url>","pointer","*"],"nl.nldesignsystem.figma-implementation":false},"$type":"other"}},"hover":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"text-decoration-line":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["inherit","none","underline"],"nl.nldesignsystem.figma-implementation":true},"$type":"textDecoration"},"text-decoration-thickness":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"other"}},"text-decoration-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"text-decoration-line":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["inherit","none","underline"],"nl.nldesignsystem.figma-implementation":true},"$type":"textDecoration"},"text-decoration-thickness":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"other"},"text-underline-offset":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"other"}}}}');
  },
  96079: (e, t, n) => {
   n.d(t, { K: () => v });
   var a = n(19371),
    l = n(47301),
    r = n(86070),
    s = n(13526),
    o = n(30758),
    i = ['children'],
    d = ['dateTime'],
    h = ['value'];
   function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     t &&
      (a = a.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, a);
    }
    return n;
   }
   function m(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? c(Object(n), !0).forEach(function (t) {
         (0, a.A)(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : c(Object(n)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
   }
   var v = (0, o.forwardRef)(function (e, t) {
    var n = e.children,
     a = (0, l.A)(e, i),
     o = (0, s.$)('nl-data-badge', e.className);
    if (
     (function (e) {
      return 'dateTime' in e;
     })(a)
    ) {
     var c = a.dateTime,
      v = (0, l.A)(a, d);
     return (0, r.jsx)('time', m(m({}, v), {}, { dateTime: c, className: o, ref: t, children: n }));
    }
    if (
     (function (e) {
      return 'value' in e;
     })(a)
    ) {
     var p = a.value,
      y = (0, l.A)(a, h);
     return (0, r.jsx)('data', m(m({}, y), {}, { value: p, className: o, ref: t, children: n }));
    }
    return (0, r.jsx)('span', m(m({}, a), {}, { className: o, ref: t, children: n }));
   });
   v.displayName = 'DataBadge';
   !(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if ('undefined' != typeof document) {
     var a = document.head || document.getElementsByTagName('head')[0],
      l = document.createElement('style');
     (l.type = 'text/css'), 'top' === n && a.firstChild ? a.insertBefore(l, a.firstChild) : a.appendChild(l), l.styleSheet ? (l.styleSheet.cssText = e) : l.appendChild(document.createTextNode(e));
    }
   })('.nl-data-badge{background-color:var(--nl-data-badge-background-color);border-color:var(--nl-data-badge-border-color, currentColor);border-radius:var(--nl-data-badge-border-radius, 0);border-style:solid;border-width:var(--nl-data-badge-border-width, 1px);box-sizing:border-box;color:var(--nl-data-badge-color);display:inline-block;font-family:var(--nl-data-badge-font-family);font-size:var(--nl-data-badge-font-size);font-weight:var(--nl-data-badge-font-weight);line-height:var(--nl-data-badge-line-height);max-block-size:max-content;max-inline-size:max-content;min-block-size:var(--nl-data-badge-min-block-size);min-inline-size:var(--nl-data-badge-min-inline-size);padding-block:var(--nl-data-badge-padding-block);padding-inline:var(--nl-data-badge-padding-inline);text-decoration:none}@media screen and (forced-colors: active){.nl-data-badge{border-color:currentColor;border-width:min(var(--nl-data-badge-border-width, 1px),1px)}}\n');
  },
  97188: (e, t, n) => {
   n.d(t, { A: () => p });
   var a,
    l,
    r,
    s,
    o,
    i,
    d,
    h,
    c,
    m = n(30758);
   function v() {
    return (
     (v = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
         }
         return e;
        }),
     v.apply(null, arguments)
    );
   }
   const p = ({ title: e, titleId: t, ...n }) => m.createElement('svg', v({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een stuk lopende tekst, waarvan de laatste twee woorden blauw zijn en onderstreept. Dat deel is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van de link component\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': t }, n), e ? m.createElement('title', { id: t }, e) : null, a || (a = m.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), l || (l = m.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), r || (r = m.createElement('path', { fill: '#0A2750', d: 'M321.904 263.976q2.496 0 4 1.168 1.52 1.152 1.52 4.288 0 3.055-1.52 4.32Q324.4 275 322.24 275h-2.64v-11.024zm-.784 1.216v8.608h1.232q1.536 0 2.496-.944t.96-3.424q0-1.744-.496-2.672-.496-.943-1.264-1.248-.768-.32-1.808-.32zm10.169 1.376V275h-1.472v-8.432zm-.752-4.048q.464 0 .752.288a.98.98 0 0 1 .288.72.98.98 0 0 1-.288.72q-.288.272-.752.272-.448 0-.736-.272a.98.98 0 0 1-.288-.72q0-.432.288-.72a1 1 0 0 1 .736-.288m8.052 12.096a3.24 3.24 0 0 1-1.888.576q-1.072 0-1.68-.608-.592-.624-.592-1.792v-5.088h-1.472v-1.136h1.472v-1.904l1.472-.176v2.08h2l-.16 1.136h-1.84v5.024q0 .656.224.96.24.288.784.288.495 0 1.12-.336zm7.231-8.048V275h-1.472v-8.432zm-.752-4.048q.464 0 .752.288a.98.98 0 0 1 .288.72.98.98 0 0 1-.288.72q-.288.272-.752.272-.448 0-.736-.272a.98.98 0 0 1-.288-.72q0-.432.288-.72a1 1 0 0 1 .736-.288m6.084 3.856q.864 0 1.552.24t1.312.72l-.624.928a5 5 0 0 0-1.104-.544 3.3 3.3 0 0 0-1.088-.176q-.72 0-1.136.304a.92.92 0 0 0-.416.8q0 .512.384.8.4.288 1.424.56 1.407.353 2.096.96.704.608.704 1.664 0 1.248-.976 1.904-.96.656-2.352.656-1.92 0-3.184-1.104l.784-.896q1.072.816 2.368.816.832 0 1.312-.336.495-.352.496-.944 0-.432-.176-.688-.177-.272-.608-.464-.433-.209-1.264-.432-1.344-.352-1.952-.944-.592-.592-.592-1.504 0-.656.384-1.184.4-.544 1.088-.832a3.9 3.9 0 0 1 1.568-.304m15.783 4.16q0 .368-.032.752h-5.376q.096 1.392.704 2.048t1.568.656q.608 0 1.12-.176a4.5 4.5 0 0 0 1.072-.56l.64.88q-1.344 1.056-2.944 1.056-1.76 0-2.752-1.152-.976-1.152-.976-3.168 0-1.312.416-2.32.432-1.024 1.216-1.6.8-.576 1.872-.576 1.68 0 2.576 1.104t.896 3.056m-1.456-.432q0-1.248-.496-1.904-.497-.656-1.488-.656-1.808 0-1.968 2.656h3.952zm10.175.432q0 .368-.032.752h-5.376q.096 1.392.704 2.048t1.568.656q.607 0 1.12-.176a4.5 4.5 0 0 0 1.072-.56l.64.88q-1.344 1.056-2.944 1.056-1.76 0-2.752-1.152-.976-1.152-.976-3.168 0-1.312.416-2.32.432-1.024 1.216-1.6.8-.576 1.872-.576 1.68 0 2.576 1.104t.896 3.056m-1.456-.432q0-1.248-.496-1.904-.497-.656-1.488-.656-1.809 0-1.968 2.656h3.952zm7.774-3.728q1.152 0 1.792.688.656.688.656 1.888V275h-1.472v-5.84q0-.896-.336-1.264-.335-.368-.992-.368-.671 0-1.184.384t-.96 1.104V275h-1.472v-8.432h1.264l.128 1.248q.448-.672 1.104-1.056a2.9 2.9 0 0 1 1.472-.384m15.834.192L394.942 275h-1.776l-2.912-8.432h1.6l2.208 7.12 2.192-7.12zm4.788-.192q1.776 0 2.752 1.184.993 1.183.992 3.216 0 1.312-.448 2.32-.447.992-1.296 1.552-.848.544-2.016.544-1.776 0-2.768-1.184t-.992-3.216q0-1.312.448-2.304.448-1.008 1.296-1.552.849-.56 2.032-.56m0 1.184q-2.192 0-2.192 3.232 0 3.216 2.176 3.216t2.176-3.232q0-3.216-2.16-3.216m9.344-1.184q1.776 0 2.752 1.184.992 1.183.992 3.216 0 1.312-.448 2.32-.448.992-1.296 1.552-.848.544-2.016.544-1.776 0-2.768-1.184t-.992-3.216q0-1.312.448-2.304.448-1.008 1.296-1.552.848-.56 2.032-.56m0 1.184q-2.192 0-2.192 3.232 0 3.216 2.176 3.216t2.176-3.232q0-3.216-2.16-3.216m9.84-1.184q.447 0 .832.096l-.272 1.44a3 3 0 0 0-.736-.096q-.784 0-1.264.576t-.752 1.792V275h-1.472v-8.432h1.264l.144 1.712q.336-.944.912-1.424t1.344-.48m6.364 0q1.44 0 2.288 1.168.848 1.152.848 3.232 0 1.312-.4 2.32-.4.992-1.152 1.552-.752.544-1.76.544-1.329 0-2.24-1.12l-.144.928h-1.296v-11.824l1.472-.176v4.624q.911-1.248 2.384-1.248m-.528 7.648q.975 0 1.52-.784.56-.8.56-2.464 0-1.712-.512-2.464-.513-.768-1.456-.768-1.12 0-1.968 1.312v4.032q.336.528.816.832.495.304 1.04.304m12.54-3.488q0 .368-.032.752h-5.376q.096 1.392.704 2.048t1.568.656q.607 0 1.12-.176a4.5 4.5 0 0 0 1.072-.56l.64.88q-1.344 1.056-2.944 1.056-1.76 0-2.752-1.152-.976-1.152-.976-3.168 0-1.312.416-2.32.432-1.024 1.216-1.6.8-.576 1.872-.576 1.68 0 2.576 1.104t.896 3.056m-1.456-.432q0-1.248-.496-1.904-.497-.656-1.488-.656-1.809 0-1.968 2.656h3.952zm10.174.432q0 .368-.032.752h-5.376q.096 1.392.704 2.048t1.568.656a3.4 3.4 0 0 0 1.12-.176 4.5 4.5 0 0 0 1.072-.56l.64.88q-1.344 1.056-2.944 1.056-1.76 0-2.752-1.152-.975-1.152-.976-3.168 0-1.312.416-2.32.433-1.024 1.216-1.6.801-.576 1.872-.576 1.68 0 2.576 1.104t.896 3.056m-1.456-.432q0-1.248-.496-1.904-.495-.656-1.488-.656-1.807 0-1.968 2.656h3.952zm5.487 5.088q-.816 0-1.296-.48-.464-.496-.464-1.376v-10.16l1.472-.176v10.304q0 .352.112.512.128.16.416.16.304 0 .544-.096l.384 1.024a2.4 2.4 0 0 1-1.168.288m9.458-12.016V275h-1.296l-.144-1.168a3.1 3.1 0 0 1-1.04 1.008 2.8 2.8 0 0 1-1.392.352q-1.504 0-2.352-1.184-.832-1.184-.832-3.184 0-1.296.4-2.304.399-1.008 1.152-1.568.752-.576 1.76-.576 1.296 0 2.272 1.04V263zm-3.552 10.848q.672 0 1.152-.304.48-.32.928-.944v-4.128q-.417-.544-.896-.816a1.96 1.96 0 0 0-1.056-.288q-.977 0-1.52.816-.528.816-.528 2.432 0 1.632.496 2.432.495.8 1.424.8m17.012-7.456L472.957 275h-1.776l-2.912-8.432h1.6l2.208 7.12 2.192-7.12zm7.113 6.464q0 .512.176.768a1.1 1.1 0 0 0 .528.368l-.336 1.024q-.655-.08-1.056-.368-.4-.288-.592-.896-.847 1.264-2.512 1.264-1.248 0-1.968-.704t-.72-1.84q0-1.344.96-2.064.976-.72 2.752-.72h1.296v-.624q0-.896-.432-1.28t-1.328-.384q-.928 0-2.272.448l-.368-1.072q1.569-.576 2.912-.576 1.488 0 2.224.736.736.72.736 2.064zm-3.456 1.056q1.264 0 1.984-1.312v-1.936h-1.104q-2.336 0-2.336 1.728 0 .752.368 1.136t1.088.384m10.448-7.712q1.152 0 1.792.688.656.688.656 1.888V275h-1.472v-5.84q0-.896-.336-1.264t-.992-.368a1.92 1.92 0 0 0-1.184.384q-.513.384-.96 1.104V275h-1.472v-8.432h1.264l.128 1.248q.447-.672 1.104-1.056a2.9 2.9 0 0 1 1.472-.384m16.169-3.2V275h-1.296l-.144-1.168a3.1 3.1 0 0 1-1.04 1.008 2.8 2.8 0 0 1-1.392.352q-1.505 0-2.352-1.184-.832-1.184-.832-3.184 0-1.296.4-2.304t1.152-1.568q.752-.576 1.76-.576 1.296 0 2.272 1.04V263zm-3.552 10.848q.672 0 1.152-.304.48-.32.928-.944v-4.128q-.416-.544-.896-.816a1.96 1.96 0 0 0-1.056-.288q-.976 0-1.52.816-.528.816-.528 2.432 0 1.632.496 2.432t1.424.8m12.954-3.488q0 .368-.032.752h-5.376q.096 1.392.704 2.048t1.568.656a3.4 3.4 0 0 0 1.12-.176 4.5 4.5 0 0 0 1.072-.56l.64.88q-1.344 1.056-2.944 1.056-1.76 0-2.752-1.152-.975-1.152-.976-3.168 0-1.312.416-2.32.433-1.024 1.216-1.6.801-.576 1.872-.576 1.68 0 2.576 1.104t.896 3.056m-1.456-.432q0-1.248-.496-1.904-.495-.656-1.488-.656-1.807 0-1.968 2.656h3.952z' })), s || (s = m.createElement('path', { fill: '#5315F6', d: 'M524.2 275.192q-.816 0-1.296-.48-.464-.496-.464-1.376v-10.16l1.472-.176v10.304q0 .352.112.512.128.16.416.16.304 0 .544-.096l.384 1.024a2.4 2.4 0 0 1-1.168.288m4.48-8.624V275h-1.472v-8.432zm-.752-4.048q.464 0 .752.288a.98.98 0 0 1 .288.72.98.98 0 0 1-.288.72q-.288.272-.752.272-.448 0-.736-.272a.98.98 0 0 1-.288-.72q0-.432.288-.72a1 1 0 0 1 .736-.288m7.763 3.856q1.152 0 1.792.688.656.688.656 1.888V275h-1.472v-5.84q0-.896-.336-1.264t-.992-.368a1.92 1.92 0 0 0-1.184.384q-.511.384-.96 1.104V275h-1.472v-8.432h1.264l.128 1.248q.448-.672 1.104-1.056a2.9 2.9 0 0 1 1.472-.384M542.57 263v12h-1.472v-11.824zm4.848 3.568-3.104 3.728L547.77 275h-1.76l-3.344-4.608 3.104-3.824zm9.174-.192q.752 0 1.376.224.624.208 1.2.688l-.704.928a3.4 3.4 0 0 0-.88-.464 2.6 2.6 0 0 0-.928-.16q-1.024 0-1.6.816-.56.816-.56 2.416t.56 2.368q.56.752 1.6.752.496 0 .912-.144.416-.16.928-.496l.672.96q-1.152.928-2.576.928-1.712 0-2.704-1.152-.976-1.152-.976-3.184 0-1.344.448-2.352t1.264-1.568q.832-.56 1.968-.56m7.424 0q1.776 0 2.752 1.184.992 1.183.992 3.216 0 1.312-.448 2.32-.448.992-1.296 1.552-.848.544-2.016.544-1.776 0-2.768-1.184t-.992-3.216q0-1.312.448-2.304.448-1.008 1.296-1.552.848-.56 2.032-.56m0 1.184q-2.192 0-2.192 3.232 0 3.216 2.176 3.216t2.176-3.232q0-3.216-2.16-3.216m14.64-1.184q1.04 0 1.664.704.624.689.624 1.872V275h-1.472v-5.84q0-1.632-1.184-1.632-.624 0-1.056.368-.432.352-.928 1.12V275h-1.472v-5.84q0-1.632-1.184-1.632-.64 0-1.072.368t-.912 1.12V275h-1.472v-8.432h1.264l.128 1.232q.944-1.424 2.432-1.424.784 0 1.328.4.56.4.8 1.12.496-.736 1.088-1.12.608-.4 1.424-.4m9.127 0q1.615 0 2.368 1.152t.752 3.248q0 1.984-.864 3.2t-2.448 1.216q-1.408 0-2.208-.96v4l-1.472.176v-11.84h1.264l.112 1.136a3.14 3.14 0 0 1 1.12-.976 2.87 2.87 0 0 1 1.376-.352m-.544 7.616q2.08 0 2.08-3.216 0-3.232-1.904-3.232-.624 0-1.136.368a3.6 3.6 0 0 0-.896.944v4.112q.32.497.8.768.48.256 1.056.256m9.34-7.616q1.776 0 2.752 1.184.992 1.183.992 3.216 0 1.312-.448 2.32-.448.992-1.296 1.552-.849.544-2.016.544-1.776 0-2.768-1.184t-.992-3.216q0-1.312.448-2.304.447-1.008 1.296-1.552.847-.56 2.032-.56m0 1.184q-2.192 0-2.192 3.232 0 3.216 2.176 3.216t2.176-3.232q0-3.216-2.16-3.216m10.143-1.184q1.153 0 1.792.688.656.688.656 1.888V275h-1.472v-5.84q0-.896-.336-1.264t-.992-.368q-.671 0-1.184.384-.511.384-.96 1.104V275h-1.472v-8.432h1.264l.128 1.248q.448-.672 1.104-1.056a2.9 2.9 0 0 1 1.472-.384m11.775 4.16q0 .368-.032.752h-5.376q.096 1.392.704 2.048t1.568.656a3.4 3.4 0 0 0 1.12-.176 4.5 4.5 0 0 0 1.072-.56l.64.88q-1.344 1.056-2.944 1.056-1.76 0-2.752-1.152-.976-1.152-.976-3.168 0-1.312.416-2.32.433-1.024 1.216-1.6.801-.576 1.872-.576 1.68 0 2.576 1.104t.896 3.056m-1.456-.432q0-1.248-.496-1.904-.495-.656-1.488-.656-1.807 0-1.968 2.656h3.952zm7.775-3.728q1.152 0 1.792.688.656.688.656 1.888V275h-1.472v-5.84q0-.896-.336-1.264t-.992-.368a1.92 1.92 0 0 0-1.184.384q-.511.384-.96 1.104V275h-1.472v-8.432h1.264l.128 1.248q.448-.672 1.104-1.056a2.9 2.9 0 0 1 1.472-.384m9.663 8.24a3.24 3.24 0 0 1-1.888.576q-1.073 0-1.68-.608-.592-.624-.592-1.792v-5.088h-1.472v-1.136h1.472v-1.904l1.472-.176v2.08h2l-.16 1.136h-1.84v5.024q0 .656.224.96.24.288.784.288.496 0 1.12-.336z' })), o || (o = m.createElement('path', { fill: '#5315F6', d: 'M521 276.6h113.479v.8H521z' })), i || (i = m.createElement('path', { fill: '#0A2750', d: 'M640.904 272.968q.48 0 .8.32t.32.784-.32.8q-.32.32-.8.32-.464 0-.784-.32a1.12 1.12 0 0 1-.32-.8q0-.464.32-.784t.784-.32' })), d || (d = m.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M521 250h114M578 210v39.5' })), h || (h = m.createElement('rect', { width: 32, height: 32, x: 562, y: 178, fill: '#DE00A4', rx: 16 })), c || (c = m.createElement('path', { fill: '#fff', d: 'M580.502 188.368V200.5H578v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })));
  },
 },
]);
