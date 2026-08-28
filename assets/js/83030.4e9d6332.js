'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [83030],
 {
  50805(e, n, t) {
   t.d(n, { $n: () => v });
   var l = t(15540),
    r = t(69967),
    i = t(86070),
    a = t(13526),
    o = t(30758),
    s = ['children', 'className', 'iconOnly', 'iconEnd', 'iconStart', 'purpose', 'hint', 'disabled', 'htmlDisabled', 'pressed', 'busy', 'type', 'label', 'toggle'];
   function d(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var l = Object.getOwnPropertySymbols(e);
     (n &&
      (l = l.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, l));
    }
    return t;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(t), !0).forEach(function (n) {
         (0, l.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var g = function (e) {
     return function (n) {
      return e.includes(n);
     };
    },
    h = g(['primary', 'secondary', 'subtle']),
    v =
     (g(['positive', 'negative']),
     (0, o.forwardRef)(function (e, n) {
      var t = e.children,
       l = e.className,
       d = e.iconOnly,
       g = e.iconEnd,
       v = e.iconStart,
       m = e.purpose,
       p = e.hint,
       y = e.disabled,
       f = e.htmlDisabled,
       b = e.pressed,
       u = e.busy,
       x = e.type,
       O = void 0 === x ? 'button' : x,
       k = e.label,
       w = e.toggle,
       j = (0, r.A)(e, s),
       $ = Boolean(v || g),
       _ = (o.Children.toArray(t).some(o.isValidElement) && $) || d;
      return (0, i.jsxs)('button', c(c({ ref: n, type: O, className: (0, a.$)('nl-button', l, { 'nl-button--pressed': b, 'nl-button--busy': u, 'nl-button--disabled': y || f, 'nl-button--primary': 'primary' === m, 'nl-button--secondary': 'secondary' === m, 'nl-button--subtle': 'subtle' === m, 'nl-button--positive': h(m) && 'positive' === p, 'nl-button--negative': h(m) && 'negative' === p, 'nl-button--icon-only': d }), 'aria-pressed': w ? String(Boolean(b)) : void 0, 'aria-disabled': y || u ? 'true' : void 0, disabled: f }, j), {}, { children: [v && (0, i.jsx)('span', { className: 'nl-button__icon-start', children: v }), k && (0, i.jsx)('span', { className: 'nl-button__label', children: k }), _ ? (0, i.jsx)('span', { className: d ? 'nl-button__label' : '', children: t }) : t, g && (0, i.jsx)('span', { className: 'nl-button__icon-end', children: g })] }));
     }));
   v.displayName = 'Button';
  },
  56421(e, n, t) {
   t.d(n, { D: () => l.D });
   var l = t(37168);
   t(30758);
   !(function (e, n) {
    void 0 === n && (n = {});
    var t = n.insertAt;
    if ('undefined' != typeof document) {
     var l = document.head || document.getElementsByTagName('head')[0],
      r = document.createElement('style');
     ((r.type = 'text/css'), 'top' === t && l.firstChild ? l.insertBefore(r, l.firstChild) : l.appendChild(r), r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e)));
    }
   })('.nl-heading{break-after:avoid;break-inside:avoid}.nl-heading--level-1{color:var(--nl-heading-level-1-color, inherit);font-family:var(--nl-heading-level-1-font-family);font-size:var(--nl-heading-level-1-font-size, revert);font-weight:var(--nl-heading-level-1-font-weight, bold);line-height:var(--nl-heading-level-1-line-height);margin-block-end:var(--nl-heading-level-1-margin-block-end, revert);margin-block-start:var(--nl-heading-level-1-margin-block-start, revert)}.nl-heading--level-2{color:var(--nl-heading-level-2-color, inherit);font-family:var(--nl-heading-level-2-font-family);font-size:var(--nl-heading-level-2-font-size, revert);font-weight:var(--nl-heading-level-2-font-weight, bold);line-height:var(--nl-heading-level-2-line-height);margin-block-end:var(--nl-heading-level-2-margin-block-end, revert);margin-block-start:var(--nl-heading-level-2-margin-block-start, revert)}.nl-heading--level-3{color:var(--nl-heading-level-3-color, inherit);font-family:var(--nl-heading-level-3-font-family);font-size:var(--nl-heading-level-3-font-size, revert);font-weight:var(--nl-heading-level-3-font-weight, bold);line-height:var(--nl-heading-level-3-line-height);margin-block-end:var(--nl-heading-level-3-margin-block-end, revert);margin-block-start:var(--nl-heading-level-3-margin-block-start, revert)}.nl-heading--level-4{color:var(--nl-heading-level-4-color, inherit);font-family:var(--nl-heading-level-4-font-family);font-size:var(--nl-heading-level-4-font-size, revert);font-weight:var(--nl-heading-level-4-font-weight, bold);line-height:var(--nl-heading-level-4-line-height);margin-block-end:var(--nl-heading-level-4-margin-block-end, revert);margin-block-start:var(--nl-heading-level-4-margin-block-start, revert)}.nl-heading--level-5{color:var(--nl-heading-level-5-color, inherit);font-family:var(--nl-heading-level-5-font-family);font-size:var(--nl-heading-level-5-font-size, revert);font-weight:var(--nl-heading-level-5-font-weight, bold);line-height:var(--nl-heading-level-5-line-height);margin-block-end:var(--nl-heading-level-5-margin-block-end, revert);margin-block-start:var(--nl-heading-level-5-margin-block-start, revert)}.nl-heading--level-6{color:var(--nl-heading-level-6-color, inherit);font-family:var(--nl-heading-level-6-font-family);font-size:var(--nl-heading-level-6-font-size, revert);font-weight:var(--nl-heading-level-6-font-weight, bold);line-height:var(--nl-heading-level-6-line-height);margin-block-end:var(--nl-heading-level-6-margin-block-end, revert);margin-block-start:var(--nl-heading-level-6-margin-block-start, revert)}\n');
  },
  56561(e, n, t) {
   t.d(n, { f: () => g });
   var l = t(15540),
    r = t(69967),
    i = t(86070),
    a = t(13526),
    o = t(30758),
    s = ['children', 'className', 'purpose'];
   function d(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var l = Object.getOwnPropertySymbols(e);
     (n &&
      (l = l.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, l));
    }
    return t;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(t), !0).forEach(function (n) {
         (0, l.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var g = (0, o.forwardRef)(function (e, n) {
    var t = e.children,
     o = e.className,
     d = e.purpose,
     g = (0, r.A)(e, s);
    return (0, i.jsx)('p', c(c({ className: (0, a.$)('nl-paragraph', (0, l.A)({}, 'nl-paragraph--lead', 'lead' === d), o), ref: n }, g), {}, { children: 'lead' === d ? (0, i.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   g.displayName = 'Paragraph';
  },
  86334(e) {
   e.exports = JSON.parse('{"nl":{"link":{"active":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"}},"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"current":{"cursor":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<url>","pointer","*"],"nl.nldesignsystem.figma-implementation":false},"$type":"other"}},"disabled":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"cursor":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<url>","pointer","*"],"nl.nldesignsystem.figma-implementation":false},"$type":"other"}},"hover":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"text-decoration-line":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["inherit","none","underline"],"nl.nldesignsystem.figma-implementation":true},"$type":"textDecoration"},"text-decoration-thickness":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"other"}},"text-decoration-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"text-decoration-line":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["inherit","none","underline"],"nl.nldesignsystem.figma-implementation":true},"$type":"textDecoration"},"text-decoration-thickness":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"other"},"text-underline-offset":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"other"}}}}');
  },
  97105(e, n, t) {
   t(30758);
  },
 },
]);
