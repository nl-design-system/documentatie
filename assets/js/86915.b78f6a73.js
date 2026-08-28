'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [86915],
 {
  41467(e) {
   e.exports = JSON.parse('{"nl":{"paragraph":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<family-name>","<generic-name>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<number>","nl.nldesignsystem.figma-implementation":true},"$type":"fontWeights"},"lead":{"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<number>","nl.nldesignsystem.figma-implementation":true},"$type":"fontWeights"},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"}},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"}}}}');
  },
  50805(e, n, t) {
   t.d(n, { $n: () => m });
   var l = t(15540),
    i = t(69967),
    r = t(86070),
    a = t(13526),
    s = t(30758),
    o = ['children', 'className', 'iconOnly', 'iconEnd', 'iconStart', 'purpose', 'hint', 'disabled', 'htmlDisabled', 'pressed', 'busy', 'type', 'label', 'toggle'];
   function g(e, n) {
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
   function d(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? g(Object(t), !0).forEach(function (n) {
         (0, l.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : g(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var c = function (e) {
     return function (n) {
      return e.includes(n);
     };
    },
    h = c(['primary', 'secondary', 'subtle']),
    m =
     (c(['positive', 'negative']),
     (0, s.forwardRef)(function (e, n) {
      var t = e.children,
       l = e.className,
       g = e.iconOnly,
       c = e.iconEnd,
       m = e.iconStart,
       v = e.purpose,
       p = e.hint,
       y = e.disabled,
       f = e.htmlDisabled,
       b = e.pressed,
       u = e.busy,
       O = e.type,
       k = void 0 === O ? 'button' : O,
       x = e.label,
       w = e.toggle,
       j = (0, i.A)(e, o),
       $ = Boolean(m || c),
       _ = (s.Children.toArray(t).some(s.isValidElement) && $) || g;
      return (0, r.jsxs)('button', d(d({ ref: n, type: k, className: (0, a.$)('nl-button', l, { 'nl-button--pressed': b, 'nl-button--busy': u, 'nl-button--disabled': y || f, 'nl-button--primary': 'primary' === v, 'nl-button--secondary': 'secondary' === v, 'nl-button--subtle': 'subtle' === v, 'nl-button--positive': h(v) && 'positive' === p, 'nl-button--negative': h(v) && 'negative' === p, 'nl-button--icon-only': g }), 'aria-pressed': w ? String(Boolean(b)) : void 0, 'aria-disabled': y || u ? 'true' : void 0, disabled: f }, j), {}, { children: [m && (0, r.jsx)('span', { className: 'nl-button__icon-start', children: m }), x && (0, r.jsx)('span', { className: 'nl-button__label', children: x }), _ ? (0, r.jsx)('span', { className: g ? 'nl-button__label' : '', children: t }) : t, c && (0, r.jsx)('span', { className: 'nl-button__icon-end', children: c })] }));
     }));
   m.displayName = 'Button';
  },
  54401(e, n, t) {
   t(30758);
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
      i = document.createElement('style');
     ((i.type = 'text/css'), 'top' === t && l.firstChild ? l.insertBefore(i, l.firstChild) : l.appendChild(i), i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e)));
    }
   })('.nl-heading{break-after:avoid;break-inside:avoid}.nl-heading--level-1{color:var(--nl-heading-level-1-color, inherit);font-family:var(--nl-heading-level-1-font-family);font-size:var(--nl-heading-level-1-font-size, revert);font-weight:var(--nl-heading-level-1-font-weight, bold);line-height:var(--nl-heading-level-1-line-height);margin-block-end:var(--nl-heading-level-1-margin-block-end, revert);margin-block-start:var(--nl-heading-level-1-margin-block-start, revert)}.nl-heading--level-2{color:var(--nl-heading-level-2-color, inherit);font-family:var(--nl-heading-level-2-font-family);font-size:var(--nl-heading-level-2-font-size, revert);font-weight:var(--nl-heading-level-2-font-weight, bold);line-height:var(--nl-heading-level-2-line-height);margin-block-end:var(--nl-heading-level-2-margin-block-end, revert);margin-block-start:var(--nl-heading-level-2-margin-block-start, revert)}.nl-heading--level-3{color:var(--nl-heading-level-3-color, inherit);font-family:var(--nl-heading-level-3-font-family);font-size:var(--nl-heading-level-3-font-size, revert);font-weight:var(--nl-heading-level-3-font-weight, bold);line-height:var(--nl-heading-level-3-line-height);margin-block-end:var(--nl-heading-level-3-margin-block-end, revert);margin-block-start:var(--nl-heading-level-3-margin-block-start, revert)}.nl-heading--level-4{color:var(--nl-heading-level-4-color, inherit);font-family:var(--nl-heading-level-4-font-family);font-size:var(--nl-heading-level-4-font-size, revert);font-weight:var(--nl-heading-level-4-font-weight, bold);line-height:var(--nl-heading-level-4-line-height);margin-block-end:var(--nl-heading-level-4-margin-block-end, revert);margin-block-start:var(--nl-heading-level-4-margin-block-start, revert)}.nl-heading--level-5{color:var(--nl-heading-level-5-color, inherit);font-family:var(--nl-heading-level-5-font-family);font-size:var(--nl-heading-level-5-font-size, revert);font-weight:var(--nl-heading-level-5-font-weight, bold);line-height:var(--nl-heading-level-5-line-height);margin-block-end:var(--nl-heading-level-5-margin-block-end, revert);margin-block-start:var(--nl-heading-level-5-margin-block-start, revert)}.nl-heading--level-6{color:var(--nl-heading-level-6-color, inherit);font-family:var(--nl-heading-level-6-font-family);font-size:var(--nl-heading-level-6-font-size, revert);font-weight:var(--nl-heading-level-6-font-weight, bold);line-height:var(--nl-heading-level-6-line-height);margin-block-end:var(--nl-heading-level-6-margin-block-end, revert);margin-block-start:var(--nl-heading-level-6-margin-block-start, revert)}\n');
  },
  56561(e, n, t) {
   t.d(n, { f: () => c });
   var l = t(15540),
    i = t(69967),
    r = t(86070),
    a = t(13526),
    s = t(30758),
    o = ['children', 'className', 'purpose'];
   function g(e, n) {
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
   function d(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? g(Object(t), !0).forEach(function (n) {
         (0, l.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : g(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var c = (0, s.forwardRef)(function (e, n) {
    var t = e.children,
     s = e.className,
     g = e.purpose,
     c = (0, i.A)(e, o);
    return (0, r.jsx)('p', d(d({ className: (0, a.$)('nl-paragraph', (0, l.A)({}, 'nl-paragraph--lead', 'lead' === g), s), ref: n }, c), {}, { children: 'lead' === g ? (0, r.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   c.displayName = 'Paragraph';
  },
 },
]);
