'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [3793],
 {
  50805(e, n, l) {
   l.d(n, { $n: () => h });
   var t = l(15540),
    r = l(69967),
    a = l(86070),
    i = l(13526),
    o = l(30758),
    s = ['children', 'className', 'iconOnly', 'iconEnd', 'iconStart', 'purpose', 'hint', 'disabled', 'htmlDisabled', 'pressed', 'busy', 'type', 'label', 'toggle'];
   function d(e, n) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      l.push.apply(l, t));
    }
    return l;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var l = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(l), !0).forEach(function (n) {
         (0, t.A)(e, n, l[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
        : d(Object(l)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(l, n));
          });
    }
    return e;
   }
   var v = function (e) {
     return function (n) {
      return e.includes(n);
     };
    },
    g = v(['primary', 'secondary', 'subtle']),
    h =
     (v(['positive', 'negative']),
     (0, o.forwardRef)(function (e, n) {
      var l = e.children,
       t = e.className,
       d = e.iconOnly,
       v = e.iconEnd,
       h = e.iconStart,
       b = e.purpose,
       f = e.hint,
       p = e.disabled,
       m = e.htmlDisabled,
       u = e.pressed,
       y = e.busy,
       O = e.type,
       k = void 0 === O ? 'button' : O,
       w = e.label,
       j = e.toggle,
       _ = (0, r.A)(e, s),
       P = Boolean(h || v),
       N = (o.Children.toArray(l).some(o.isValidElement) && P) || d;
      return (0, a.jsxs)('button', c(c({ ref: n, type: k, className: (0, i.$)('nl-button', t, { 'nl-button--pressed': u, 'nl-button--busy': y, 'nl-button--disabled': p || m, 'nl-button--primary': 'primary' === b, 'nl-button--secondary': 'secondary' === b, 'nl-button--subtle': 'subtle' === b, 'nl-button--positive': g(b) && 'positive' === f, 'nl-button--negative': g(b) && 'negative' === f, 'nl-button--icon-only': d }), 'aria-pressed': j ? String(Boolean(u)) : void 0, 'aria-disabled': p || y ? 'true' : void 0, disabled: m }, _), {}, { children: [h && (0, a.jsx)('span', { className: 'nl-button__icon-start', children: h }), w && (0, a.jsx)('span', { className: 'nl-button__label', children: w }), N ? (0, a.jsx)('span', { className: d ? 'nl-button__label' : '', children: l }) : l, v && (0, a.jsx)('span', { className: 'nl-button__icon-end', children: v })] }));
     }));
   h.displayName = 'Button';
  },
  56421(e, n, l) {
   l.d(n, { D: () => t.D });
   var t = l(37168);
   l(30758);
   !(function (e, n) {
    void 0 === n && (n = {});
    var l = n.insertAt;
    if ('undefined' != typeof document) {
     var t = document.head || document.getElementsByTagName('head')[0],
      r = document.createElement('style');
     ((r.type = 'text/css'), 'top' === l && t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r), r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e)));
    }
   })('.nl-heading{break-after:avoid;break-inside:avoid}.nl-heading--level-1{color:var(--nl-heading-level-1-color, inherit);font-family:var(--nl-heading-level-1-font-family);font-size:var(--nl-heading-level-1-font-size, revert);font-weight:var(--nl-heading-level-1-font-weight, bold);line-height:var(--nl-heading-level-1-line-height);margin-block-end:var(--nl-heading-level-1-margin-block-end, revert);margin-block-start:var(--nl-heading-level-1-margin-block-start, revert)}.nl-heading--level-2{color:var(--nl-heading-level-2-color, inherit);font-family:var(--nl-heading-level-2-font-family);font-size:var(--nl-heading-level-2-font-size, revert);font-weight:var(--nl-heading-level-2-font-weight, bold);line-height:var(--nl-heading-level-2-line-height);margin-block-end:var(--nl-heading-level-2-margin-block-end, revert);margin-block-start:var(--nl-heading-level-2-margin-block-start, revert)}.nl-heading--level-3{color:var(--nl-heading-level-3-color, inherit);font-family:var(--nl-heading-level-3-font-family);font-size:var(--nl-heading-level-3-font-size, revert);font-weight:var(--nl-heading-level-3-font-weight, bold);line-height:var(--nl-heading-level-3-line-height);margin-block-end:var(--nl-heading-level-3-margin-block-end, revert);margin-block-start:var(--nl-heading-level-3-margin-block-start, revert)}.nl-heading--level-4{color:var(--nl-heading-level-4-color, inherit);font-family:var(--nl-heading-level-4-font-family);font-size:var(--nl-heading-level-4-font-size, revert);font-weight:var(--nl-heading-level-4-font-weight, bold);line-height:var(--nl-heading-level-4-line-height);margin-block-end:var(--nl-heading-level-4-margin-block-end, revert);margin-block-start:var(--nl-heading-level-4-margin-block-start, revert)}.nl-heading--level-5{color:var(--nl-heading-level-5-color, inherit);font-family:var(--nl-heading-level-5-font-family);font-size:var(--nl-heading-level-5-font-size, revert);font-weight:var(--nl-heading-level-5-font-weight, bold);line-height:var(--nl-heading-level-5-line-height);margin-block-end:var(--nl-heading-level-5-margin-block-end, revert);margin-block-start:var(--nl-heading-level-5-margin-block-start, revert)}.nl-heading--level-6{color:var(--nl-heading-level-6-color, inherit);font-family:var(--nl-heading-level-6-font-family);font-size:var(--nl-heading-level-6-font-size, revert);font-weight:var(--nl-heading-level-6-font-weight, bold);line-height:var(--nl-heading-level-6-line-height);margin-block-end:var(--nl-heading-level-6-margin-block-end, revert);margin-block-start:var(--nl-heading-level-6-margin-block-start, revert)}\n');
  },
  56561(e, n, l) {
   l.d(n, { f: () => v });
   var t = l(15540),
    r = l(69967),
    a = l(86070),
    i = l(13526),
    o = l(30758),
    s = ['children', 'className', 'purpose'];
   function d(e, n) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      l.push.apply(l, t));
    }
    return l;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var l = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(l), !0).forEach(function (n) {
         (0, t.A)(e, n, l[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
        : d(Object(l)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(l, n));
          });
    }
    return e;
   }
   var v = (0, o.forwardRef)(function (e, n) {
    var l = e.children,
     o = e.className,
     d = e.purpose,
     v = (0, r.A)(e, s);
    return (0, a.jsx)('p', c(c({ className: (0, i.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === d), o), ref: n }, v), {}, { children: 'lead' === d ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: l }) : l }));
   });
   v.displayName = 'Paragraph';
  },
  61684(e) {
   e.exports = JSON.parse('{"nl":{"mark":{"background-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"}}}}');
  },
  70351(e, n, l) {
   l(30758);
  },
 },
]);
