/*! For license information please see 56718.a12a3823.js.LICENSE.txt */
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [56718],
 {
  4077(e, t, n) {
   'use strict';
   n.d(t, { A: () => r });
   const r = (0, n(18652).A)('outline', 'mood-happy', 'MoodHappy', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 9l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 9l.01 0', key: 'svg-2' }],
    ['path', { d: 'M8 13a4 4 0 1 0 8 0h-8', key: 'svg-3' }],
   ]);
  },
  18652(e, t, n) {
   'use strict';
   n.d(t, { A: () => i });
   var r = n(30758),
    a = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const i = (e, t, n, i) => {
    const s = (0, r.forwardRef)(({ color: n = 'currentColor', size: s = 24, stroke: o = 2, title: l, className: c, children: u, ...p }, d) => (0, r.createElement)('svg', { ref: d, ...a[e], width: s, height: s, className: ['tabler-icon', `tabler-icon-${t}`, c].join(' '), ...('filled' === e ? { fill: n } : { strokeWidth: o, stroke: n }), ...p }, [l && (0, r.createElement)('title', { key: 'svg-title' }, l), ...i.map(([e, t]) => (0, r.createElement)(e, t)), ...(Array.isArray(u) ? u : [u])]));
    return ((s.displayName = `${n}`), s);
   };
  },
  29521(e, t, n) {
   'use strict';
   var r = n(30758);
   function a(e) {
    for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
    return 'Minified React error #' + e + '; visit ' + t + ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
   }
   var i = null,
    s = 0;
   function o(e, t) {
    if (0 !== t.length)
     if (512 < t.length) (0 < s && (e.enqueue(new Uint8Array(i.buffer, 0, s)), (i = new Uint8Array(512)), (s = 0)), e.enqueue(t));
     else {
      var n = i.length - s;
      (n < t.length && (0 === n ? e.enqueue(i) : (i.set(t.subarray(0, n), s), e.enqueue(i), (t = t.subarray(n))), (i = new Uint8Array(512)), (s = 0)), i.set(t, s), (s += t.length));
     }
   }
   function l(e, t) {
    return (o(e, t), !0);
   }
   function c(e) {
    i && 0 < s && (e.enqueue(new Uint8Array(i.buffer, 0, s)), (i = null), (s = 0));
   }
   var u = new TextEncoder();
   function p(e) {
    return u.encode(e);
   }
   function d(e) {
    return u.encode(e);
   }
   function h(e, t) {
    'function' == typeof e.error ? e.error(t) : e.close();
   }
   var f = Object.prototype.hasOwnProperty,
    m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    v = {};
   function b(e) {
    return !!f.call(v, e) || (!f.call(g, e) && (m.test(e) ? (v[e] = !0) : ((g[e] = !0), !1)));
   }
   function S(e, t, n, r, a, i, s) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t), (this.attributeName = r), (this.attributeNamespace = a), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = i), (this.removeEmptyString = s));
   }
   var _ = {};
   ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'.split(' ').forEach(function (e) {
    _[e] = new S(e, 0, !1, e, null, !1, !1);
   }),
    [
     ['acceptCharset', 'accept-charset'],
     ['className', 'class'],
     ['htmlFor', 'for'],
     ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
     var t = e[0];
     _[t] = new S(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
     _[e] = new S(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
     _[e] = new S(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'.split(' ').forEach(function (e) {
     _[e] = new S(e, 3, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
     _[e] = new S(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
     _[e] = new S(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
     _[e] = new S(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
     _[e] = new S(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
   var k = /[\-:]([a-z])/g;
   function y(e) {
    return e[1].toUpperCase();
   }
   ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'.split(' ').forEach(function (e) {
    var t = e.replace(k, y);
    _[t] = new S(t, 1, !1, e, null, !1, !1);
   }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
     var t = e.replace(k, y);
     _[t] = new S(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
     var t = e.replace(k, y);
     _[t] = new S(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
     _[e] = new S(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (_.xlinkHref = new S('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
     _[e] = new S(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
   var w = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    C = ['Webkit', 'ms', 'Moz', 'O'];
   Object.keys(w).forEach(function (e) {
    C.forEach(function (t) {
     ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (w[t] = w[e]));
    });
   });
   var E = /["'&<>]/;
   function T(e) {
    if ('boolean' == typeof e || 'number' == typeof e) return '' + e;
    e = '' + e;
    var t = E.exec(e);
    if (t) {
     var n,
      r = '',
      a = 0;
     for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
       case 34:
        t = '&quot;';
        break;
       case 38:
        t = '&amp;';
        break;
       case 39:
        t = '&#x27;';
        break;
       case 60:
        t = '&lt;';
        break;
       case 62:
        t = '&gt;';
        break;
       default:
        continue;
      }
      (a !== n && (r += e.substring(a, n)), (a = n + 1), (r += t));
     }
     e = a !== n ? r + e.substring(a, n) : r;
    }
    return e;
   }
   var x = /([A-Z])/g,
    N = /^ms-/,
    A = Array.isArray,
    L = d('<script>'),
    P = d('<\/script>'),
    O = d('<script src="'),
    R = d('<script type="module" src="'),
    I = d('" async=""><\/script>'),
    F = /(<\/|<)(s)(cript)/gi;
   function D(e, t, n, r) {
    return t + ('s' === n ? '\\u0073' : '\\u0053') + r;
   }
   function M(e, t) {
    return { insertionMode: e, selectedValue: t };
   }
   var q = d('\x3c!-- --\x3e');
   function B(e, t, n, r) {
    return '' === t ? r : (r && e.push(q), e.push(p(T(t))), !0);
   }
   var V = new Map(),
    H = d(' style="'),
    $ = d(':'),
    U = d(';');
   function z(e, t, n) {
    if ('object' != typeof n) throw Error(a(62));
    for (var r in ((t = !0), n))
     if (f.call(n, r)) {
      var i = n[r];
      if (null != i && 'boolean' != typeof i && '' !== i) {
       if (0 === r.indexOf('--')) {
        var s = p(T(r));
        i = p(T(('' + i).trim()));
       } else {
        s = r;
        var o = V.get(s);
        (void 0 !== o || ((o = d(T(s.replace(x, '-$1').toLowerCase().replace(N, '-ms-')))), V.set(s, o)), (s = o), (i = 'number' == typeof i ? (0 === i || f.call(w, r) ? p('' + i) : p(i + 'px')) : p(T(('' + i).trim()))));
       }
       t ? ((t = !1), e.push(H, s, $, i)) : e.push(U, s, $, i);
      }
     }
    t || e.push(X);
   }
   var j = d(' '),
    W = d('="'),
    X = d('"'),
    G = d('=""');
   function K(e, t, n, r) {
    switch (n) {
     case 'style':
      return void z(e, t, r);
     case 'defaultValue':
     case 'defaultChecked':
     case 'innerHTML':
     case 'suppressContentEditableWarning':
     case 'suppressHydrationWarning':
      return;
    }
    if (!(2 < n.length) || ('o' !== n[0] && 'O' !== n[0]) || ('n' !== n[1] && 'N' !== n[1]))
     if (null !== (t = _.hasOwnProperty(n) ? _[n] : null)) {
      switch (typeof r) {
       case 'function':
       case 'symbol':
        return;
       case 'boolean':
        if (!t.acceptsBooleans) return;
      }
      switch (((n = p(t.attributeName)), t.type)) {
       case 3:
        r && e.push(j, n, G);
        break;
       case 4:
        !0 === r ? e.push(j, n, G) : !1 !== r && e.push(j, n, W, p(T(r)), X);
        break;
       case 5:
        isNaN(r) || e.push(j, n, W, p(T(r)), X);
        break;
       case 6:
        !isNaN(r) && 1 <= r && e.push(j, n, W, p(T(r)), X);
        break;
       default:
        (t.sanitizeURL && (r = '' + r), e.push(j, n, W, p(T(r)), X));
      }
     } else if (b(n)) {
      switch (typeof r) {
       case 'function':
       case 'symbol':
        return;
       case 'boolean':
        if ('data-' !== (t = n.toLowerCase().slice(0, 5)) && 'aria-' !== t) return;
      }
      e.push(j, p(n), W, p(T(r)), X);
     }
   }
   var Y = d('>'),
    Z = d('/>');
   function J(e, t, n) {
    if (null != t) {
     if (null != n) throw Error(a(60));
     if ('object' != typeof t || !('__html' in t)) throw Error(a(61));
     null != (t = t.__html) && e.push(p('' + t));
    }
   }
   var Q = d(' selected=""');
   function ee(e, t, n, r) {
    e.push(ae(n));
    var a,
     i = (n = null);
    for (a in t)
     if (f.call(t, a)) {
      var s = t[a];
      if (null != s)
       switch (a) {
        case 'children':
         n = s;
         break;
        case 'dangerouslySetInnerHTML':
         i = s;
         break;
        default:
         K(e, r, a, s);
       }
     }
    return (e.push(Y), J(e, i, n), 'string' == typeof n ? (e.push(p(T(n))), null) : n);
   }
   var te = d('\n'),
    ne = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    re = new Map();
   function ae(e) {
    var t = re.get(e);
    if (void 0 === t) {
     if (!ne.test(e)) throw Error(a(65, e));
     ((t = d('<' + e)), re.set(e, t));
    }
    return t;
   }
   var ie = d('<!DOCTYPE html>');
   function se(e, t, n, i, s) {
    switch (t) {
     case 'select':
      e.push(ae('select'));
      var o = null,
       l = null;
      for (h in n)
       if (f.call(n, h)) {
        var c = n[h];
        if (null != c)
         switch (h) {
          case 'children':
           o = c;
           break;
          case 'dangerouslySetInnerHTML':
           l = c;
           break;
          case 'defaultValue':
          case 'value':
           break;
          default:
           K(e, i, h, c);
         }
       }
      return (e.push(Y), J(e, l, o), o);
     case 'option':
      ((l = s.selectedValue), e.push(ae('option')));
      var u = (c = null),
       d = null,
       h = null;
      for (o in n)
       if (f.call(n, o)) {
        var m = n[o];
        if (null != m)
         switch (o) {
          case 'children':
           c = m;
           break;
          case 'selected':
           d = m;
           break;
          case 'dangerouslySetInnerHTML':
           h = m;
           break;
          case 'value':
           u = m;
          default:
           K(e, i, o, m);
         }
       }
      if (null != l)
       if (
        ((n =
         null !== u
          ? '' + u
          : (function (e) {
             var t = '';
             return (
              r.Children.forEach(e, function (e) {
               null != e && (t += e);
              }),
              t
             );
            })(c)),
        A(l))
       ) {
        for (i = 0; i < l.length; i++)
         if ('' + l[i] === n) {
          e.push(Q);
          break;
         }
       } else '' + l === n && e.push(Q);
      else d && e.push(Q);
      return (e.push(Y), J(e, h, c), c);
     case 'textarea':
      for (c in (e.push(ae('textarea')), (h = l = o = null), n))
       if (f.call(n, c) && null != (u = n[c]))
        switch (c) {
         case 'children':
          h = u;
          break;
         case 'value':
          o = u;
          break;
         case 'defaultValue':
          l = u;
          break;
         case 'dangerouslySetInnerHTML':
          throw Error(a(91));
         default:
          K(e, i, c, u);
        }
      if ((null === o && null !== l && (o = l), e.push(Y), null != h)) {
       if (null != o) throw Error(a(92));
       if (A(h) && 1 < h.length) throw Error(a(93));
       o = '' + h;
      }
      return ('string' == typeof o && '\n' === o[0] && e.push(te), null !== o && e.push(p(T('' + o))), null);
     case 'input':
      for (l in (e.push(ae('input')), (u = h = c = o = null), n))
       if (f.call(n, l) && null != (d = n[l]))
        switch (l) {
         case 'children':
         case 'dangerouslySetInnerHTML':
          throw Error(a(399, 'input'));
         case 'defaultChecked':
          u = d;
          break;
         case 'defaultValue':
          c = d;
          break;
         case 'checked':
          h = d;
          break;
         case 'value':
          o = d;
          break;
         default:
          K(e, i, l, d);
        }
      return (null !== h ? K(e, i, 'checked', h) : null !== u && K(e, i, 'checked', u), null !== o ? K(e, i, 'value', o) : null !== c && K(e, i, 'value', c), e.push(Z), null);
     case 'menuitem':
      for (var g in (e.push(ae('menuitem')), n))
       if (f.call(n, g) && null != (o = n[g]))
        switch (g) {
         case 'children':
         case 'dangerouslySetInnerHTML':
          throw Error(a(400));
         default:
          K(e, i, g, o);
        }
      return (e.push(Y), null);
     case 'title':
      for (m in (e.push(ae('title')), (o = null), n))
       if (f.call(n, m) && null != (l = n[m]))
        switch (m) {
         case 'children':
          o = l;
          break;
         case 'dangerouslySetInnerHTML':
          throw Error(a(434));
         default:
          K(e, i, m, l);
        }
      return (e.push(Y), o);
     case 'listing':
     case 'pre':
      for (u in (e.push(ae(t)), (l = o = null), n))
       if (f.call(n, u) && null != (c = n[u]))
        switch (u) {
         case 'children':
          o = c;
          break;
         case 'dangerouslySetInnerHTML':
          l = c;
          break;
         default:
          K(e, i, u, c);
        }
      if ((e.push(Y), null != l)) {
       if (null != o) throw Error(a(60));
       if ('object' != typeof l || !('__html' in l)) throw Error(a(61));
       null != (n = l.__html) && ('string' == typeof n && 0 < n.length && '\n' === n[0] ? e.push(te, p(n)) : e.push(p('' + n)));
      }
      return ('string' == typeof o && '\n' === o[0] && e.push(te), o);
     case 'area':
     case 'base':
     case 'br':
     case 'col':
     case 'embed':
     case 'hr':
     case 'img':
     case 'keygen':
     case 'link':
     case 'meta':
     case 'param':
     case 'source':
     case 'track':
     case 'wbr':
      for (var v in (e.push(ae(t)), n))
       if (f.call(n, v) && null != (o = n[v]))
        switch (v) {
         case 'children':
         case 'dangerouslySetInnerHTML':
          throw Error(a(399, t));
         default:
          K(e, i, v, o);
        }
      return (e.push(Z), null);
     case 'annotation-xml':
     case 'color-profile':
     case 'font-face':
     case 'font-face-src':
     case 'font-face-uri':
     case 'font-face-format':
     case 'font-face-name':
     case 'missing-glyph':
      return ee(e, n, t, i);
     case 'html':
      return (0 === s.insertionMode && e.push(ie), ee(e, n, t, i));
     default:
      if (-1 === t.indexOf('-') && 'string' != typeof n.is) return ee(e, n, t, i);
      for (d in (e.push(ae(t)), (l = o = null), n))
       if (f.call(n, d) && null != (c = n[d]))
        switch (d) {
         case 'children':
          o = c;
          break;
         case 'dangerouslySetInnerHTML':
          l = c;
          break;
         case 'style':
          z(e, i, c);
          break;
         case 'suppressContentEditableWarning':
         case 'suppressHydrationWarning':
          break;
         default:
          b(d) && 'function' != typeof c && 'symbol' != typeof c && e.push(j, p(d), W, p(T(c)), X);
        }
      return (e.push(Y), J(e, l, o), o);
    }
   }
   var oe = d('</'),
    le = d('>'),
    ce = d('<template id="'),
    ue = d('"></template>'),
    pe = d('\x3c!--$--\x3e'),
    de = d('\x3c!--$?--\x3e<template id="'),
    he = d('"></template>'),
    fe = d('\x3c!--$!--\x3e'),
    me = d('\x3c!--/$--\x3e'),
    ge = d('<template'),
    ve = d('"'),
    be = d(' data-dgst="');
   (d(' data-msg="'), d(' data-stck="'));
   var Se = d('></template>');
   function _e(e, t, n) {
    if ((o(e, de), null === n)) throw Error(a(395));
    return (o(e, n), l(e, he));
   }
   var ke = d('<div hidden id="'),
    ye = d('">'),
    we = d('</div>'),
    Ce = d('<svg aria-hidden="true" style="display:none" id="'),
    Ee = d('">'),
    Te = d('</svg>'),
    xe = d('<math aria-hidden="true" style="display:none" id="'),
    Ne = d('">'),
    Ae = d('</math>'),
    Le = d('<table hidden id="'),
    Pe = d('">'),
    Oe = d('</table>'),
    Re = d('<table hidden><tbody id="'),
    Ie = d('">'),
    Fe = d('</tbody></table>'),
    De = d('<table hidden><tr id="'),
    Me = d('">'),
    qe = d('</tr></table>'),
    Be = d('<table hidden><colgroup id="'),
    Ve = d('">'),
    He = d('</colgroup></table>');
   var $e = d('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),
    Ue = d('$RS("'),
    ze = d('","'),
    je = d('")<\/script>'),
    We = d('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),
    Xe = d('$RC("'),
    Ge = d('","'),
    Ke = d('")<\/script>'),
    Ye = d('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),
    Ze = d('$RX("'),
    Je = d('"'),
    Qe = d(')<\/script>'),
    et = d(','),
    tt = /[<\u2028\u2029]/g;
   function nt(e) {
    return JSON.stringify(e).replace(tt, function (e) {
     switch (e) {
      case '<':
       return '\\u003c';
      case '\u2028':
       return '\\u2028';
      case '\u2029':
       return '\\u2029';
      default:
       throw Error('escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React');
     }
    });
   }
   var rt = Object.assign,
    at = Symbol.for('react.element'),
    it = Symbol.for('react.portal'),
    st = Symbol.for('react.fragment'),
    ot = Symbol.for('react.strict_mode'),
    lt = Symbol.for('react.profiler'),
    ct = Symbol.for('react.provider'),
    ut = Symbol.for('react.context'),
    pt = Symbol.for('react.forward_ref'),
    dt = Symbol.for('react.suspense'),
    ht = Symbol.for('react.suspense_list'),
    ft = Symbol.for('react.memo'),
    mt = Symbol.for('react.lazy'),
    gt = Symbol.for('react.scope'),
    vt = Symbol.for('react.debug_trace_mode'),
    bt = Symbol.for('react.legacy_hidden'),
    St = Symbol.for('react.default_value'),
    _t = Symbol.iterator;
   function kt(e) {
    if (null == e) return null;
    if ('function' == typeof e) return e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
     case st:
      return 'Fragment';
     case it:
      return 'Portal';
     case lt:
      return 'Profiler';
     case ot:
      return 'StrictMode';
     case dt:
      return 'Suspense';
     case ht:
      return 'SuspenseList';
    }
    if ('object' == typeof e)
     switch (e.$$typeof) {
      case ut:
       return (e.displayName || 'Context') + '.Consumer';
      case ct:
       return (e._context.displayName || 'Context') + '.Provider';
      case pt:
       var t = e.render;
       return ((e = e.displayName) || (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'), e);
      case ft:
       return null !== (t = e.displayName || null) ? t : kt(e.type) || 'Memo';
      case mt:
       ((t = e._payload), (e = e._init));
       try {
        return kt(e(t));
       } catch (n) {}
     }
    return null;
   }
   var yt = {};
   function wt(e, t) {
    if (!(e = e.contextTypes)) return yt;
    var n,
     r = {};
    for (n in e) r[n] = t[n];
    return r;
   }
   var Ct = null;
   function Et(e, t) {
    if (e !== t) {
     ((e.context._currentValue = e.parentValue), (e = e.parent));
     var n = t.parent;
     if (null === e) {
      if (null !== n) throw Error(a(401));
     } else {
      if (null === n) throw Error(a(401));
      Et(e, n);
     }
     t.context._currentValue = t.value;
    }
   }
   function Tt(e) {
    ((e.context._currentValue = e.parentValue), null !== (e = e.parent) && Tt(e));
   }
   function xt(e) {
    var t = e.parent;
    (null !== t && xt(t), (e.context._currentValue = e.value));
   }
   function Nt(e, t) {
    if (((e.context._currentValue = e.parentValue), null === (e = e.parent))) throw Error(a(402));
    e.depth === t.depth ? Et(e, t) : Nt(e, t);
   }
   function At(e, t) {
    var n = t.parent;
    if (null === n) throw Error(a(402));
    (e.depth === n.depth ? Et(e, n) : At(e, n), (t.context._currentValue = t.value));
   }
   function Lt(e) {
    var t = Ct;
    t !== e && (null === t ? xt(e) : null === e ? Tt(t) : t.depth === e.depth ? Et(t, e) : t.depth > e.depth ? Nt(t, e) : At(t, e), (Ct = e));
   }
   var Pt = {
    isMounted: function () {
     return !1;
    },
    enqueueSetState: function (e, t) {
     null !== (e = e._reactInternals).queue && e.queue.push(t);
    },
    enqueueReplaceState: function (e, t) {
     (((e = e._reactInternals).replace = !0), (e.queue = [t]));
    },
    enqueueForceUpdate: function () {},
   };
   function Ot(e, t, n, r) {
    var a = void 0 !== e.state ? e.state : null;
    ((e.updater = Pt), (e.props = n), (e.state = a));
    var i = { queue: [], replace: !1 };
    e._reactInternals = i;
    var s = t.contextType;
    if (((e.context = 'object' == typeof s && null !== s ? s._currentValue : r), 'function' == typeof (s = t.getDerivedStateFromProps) && ((a = null == (s = s(n, a)) ? a : rt({}, a, s)), (e.state = a)), 'function' != typeof t.getDerivedStateFromProps && 'function' != typeof e.getSnapshotBeforeUpdate && ('function' == typeof e.UNSAFE_componentWillMount || 'function' == typeof e.componentWillMount)))
     if (((t = e.state), 'function' == typeof e.componentWillMount && e.componentWillMount(), 'function' == typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), t !== e.state && Pt.enqueueReplaceState(e, e.state, null), null !== i.queue && 0 < i.queue.length))
      if (((t = i.queue), (s = i.replace), (i.queue = null), (i.replace = !1), s && 1 === t.length)) e.state = t[0];
      else {
       for (i = s ? t[0] : e.state, a = !0, s = s ? 1 : 0; s < t.length; s++) {
        var o = t[s];
        null != (o = 'function' == typeof o ? o.call(e, i, n, r) : o) && (a ? ((a = !1), (i = rt({}, i, o))) : rt(i, o));
       }
       e.state = i;
      }
     else i.queue = null;
   }
   var Rt = { id: 1, overflow: '' };
   function It(e, t, n) {
    var r = e.id;
    e = e.overflow;
    var a = 32 - Ft(r) - 1;
    ((r &= ~(1 << a)), (n += 1));
    var i = 32 - Ft(t) + a;
    if (30 < i) {
     var s = a - (a % 5);
     return ((i = (r & ((1 << s) - 1)).toString(32)), (r >>= s), (a -= s), { id: (1 << (32 - Ft(t) + a)) | (n << a) | r, overflow: i + e });
    }
    return { id: (1 << i) | (n << a) | r, overflow: e };
   }
   var Ft = Math.clz32
     ? Math.clz32
     : function (e) {
        return 0 === (e >>>= 0) ? 32 : (31 - ((Dt(e) / Mt) | 0)) | 0;
       },
    Dt = Math.log,
    Mt = Math.LN2;
   var qt =
     'function' == typeof Object.is
      ? Object.is
      : function (e, t) {
         return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        },
    Bt = null,
    Vt = null,
    Ht = null,
    $t = null,
    Ut = !1,
    zt = !1,
    jt = 0,
    Wt = null,
    Xt = 0;
   function Gt() {
    if (null === Bt) throw Error(a(321));
    return Bt;
   }
   function Kt() {
    if (0 < Xt) throw Error(a(312));
    return { memoizedState: null, queue: null, next: null };
   }
   function Yt() {
    return (null === $t ? (null === Ht ? ((Ut = !1), (Ht = $t = Kt())) : ((Ut = !0), ($t = Ht))) : null === $t.next ? ((Ut = !1), ($t = $t.next = Kt())) : ((Ut = !0), ($t = $t.next)), $t);
   }
   function Zt() {
    ((Vt = Bt = null), (zt = !1), (Ht = null), (Xt = 0), ($t = Wt = null));
   }
   function Jt(e, t) {
    return 'function' == typeof t ? t(e) : t;
   }
   function Qt(e, t, n) {
    if (((Bt = Gt()), ($t = Yt()), Ut)) {
     var r = $t.queue;
     if (((t = r.dispatch), null !== Wt && void 0 !== (n = Wt.get(r)))) {
      (Wt.delete(r), (r = $t.memoizedState));
      do {
       ((r = e(r, n.action)), (n = n.next));
      } while (null !== n);
      return (($t.memoizedState = r), [r, t]);
     }
     return [$t.memoizedState, t];
    }
    return ((e = e === Jt ? ('function' == typeof t ? t() : t) : void 0 !== n ? n(t) : t), ($t.memoizedState = e), (e = (e = $t.queue = { last: null, dispatch: null }).dispatch = tn.bind(null, Bt, e)), [$t.memoizedState, e]);
   }
   function en(e, t) {
    if (((Bt = Gt()), (t = void 0 === t ? null : t), null !== ($t = Yt()))) {
     var n = $t.memoizedState;
     if (null !== n && null !== t) {
      var r = n[1];
      e: if (null === r) r = !1;
      else {
       for (var a = 0; a < r.length && a < t.length; a++)
        if (!qt(t[a], r[a])) {
         r = !1;
         break e;
        }
       r = !0;
      }
      if (r) return n[0];
     }
    }
    return ((e = e()), ($t.memoizedState = [e, t]), e);
   }
   function tn(e, t, n) {
    if (25 <= Xt) throw Error(a(301));
    if (e === Bt)
     if (((zt = !0), (e = { action: n, next: null }), null === Wt && (Wt = new Map()), void 0 === (n = Wt.get(t)))) Wt.set(t, e);
     else {
      for (t = n; null !== t.next; ) t = t.next;
      t.next = e;
     }
   }
   function nn() {
    throw Error(a(394));
   }
   function rn() {}
   var an = {
     readContext: function (e) {
      return e._currentValue;
     },
     useContext: function (e) {
      return (Gt(), e._currentValue);
     },
     useMemo: en,
     useReducer: Qt,
     useRef: function (e) {
      Bt = Gt();
      var t = ($t = Yt()).memoizedState;
      return null === t ? ((e = { current: e }), ($t.memoizedState = e)) : t;
     },
     useState: function (e) {
      return Qt(Jt, e);
     },
     useInsertionEffect: rn,
     useLayoutEffect: function () {},
     useCallback: function (e, t) {
      return en(function () {
       return e;
      }, t);
     },
     useImperativeHandle: rn,
     useEffect: rn,
     useDebugValue: rn,
     useDeferredValue: function (e) {
      return (Gt(), e);
     },
     useTransition: function () {
      return (Gt(), [!1, nn]);
     },
     useId: function () {
      var e = Vt.treeContext,
       t = e.overflow;
      e = ((e = e.id) & ~(1 << (32 - Ft(e) - 1))).toString(32) + t;
      var n = sn;
      if (null === n) throw Error(a(404));
      return ((t = jt++), (e = ':' + n.idPrefix + 'R' + e), 0 < t && (e += 'H' + t.toString(32)), e + ':');
     },
     useMutableSource: function (e, t) {
      return (Gt(), t(e._source));
     },
     useSyncExternalStore: function (e, t, n) {
      if (void 0 === n) throw Error(a(407));
      return n();
     },
    },
    sn = null,
    on = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
   function ln(e) {
    return (console.error(e), null);
   }
   function cn() {}
   function un(e, t, n, r, a, i, s, o) {
    (e.allPendingTasks++, null === n ? e.pendingRootTasks++ : n.pendingTasks++);
    var l = {
     node: t,
     ping: function () {
      var t = e.pingedTasks;
      (t.push(l), 1 === t.length && En(e));
     },
     blockedBoundary: n,
     blockedSegment: r,
     abortSet: a,
     legacyContext: i,
     context: s,
     treeContext: o,
    };
    return (a.add(l), l);
   }
   function pn(e, t, n, r, a, i) {
    return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: a, textEmbedded: i };
   }
   function dn(e, t) {
    if (null != (e = e.onError(t)) && 'string' != typeof e) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
   }
   function hn(e, t) {
    var n = e.onShellError;
    (n(t), (n = e.onFatalError)(t), null !== e.destination ? ((e.status = 2), h(e.destination, t)) : ((e.status = 1), (e.fatalError = t)));
   }
   function fn(e, t, n, r, a) {
    for (Bt = {}, Vt = t, jt = 0, e = n(r, a); zt; ) ((zt = !1), (jt = 0), (Xt += 1), ($t = null), (e = n(r, a)));
    return (Zt(), e);
   }
   function mn(e, t, n, r) {
    var i = n.render(),
     s = r.childContextTypes;
    if (null != s) {
     var o = t.legacyContext;
     if ('function' != typeof n.getChildContext) r = o;
     else {
      for (var l in (n = n.getChildContext())) if (!(l in s)) throw Error(a(108, kt(r) || 'Unknown', l));
      r = rt({}, o, n);
     }
     ((t.legacyContext = r), bn(e, t, i), (t.legacyContext = o));
    } else bn(e, t, i);
   }
   function gn(e, t) {
    if (e && e.defaultProps) {
     for (var n in ((t = rt({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
     return t;
    }
    return t;
   }
   function vn(e, t, n, r, i) {
    if ('function' == typeof n)
     if (n.prototype && n.prototype.isReactComponent) {
      i = wt(n, t.legacyContext);
      var s = n.contextType;
      (Ot((s = new n(r, 'object' == typeof s && null !== s ? s._currentValue : i)), n, r, i), mn(e, t, s, n));
     } else {
      i = fn(e, t, n, r, (s = wt(n, t.legacyContext)));
      var o = 0 !== jt;
      if ('object' == typeof i && null !== i && 'function' == typeof i.render && void 0 === i.$$typeof) (Ot(i, n, r, s), mn(e, t, i, n));
      else if (o) {
       ((r = t.treeContext), (t.treeContext = It(r, 1, 0)));
       try {
        bn(e, t, i);
       } finally {
        t.treeContext = r;
       }
      } else bn(e, t, i);
     }
    else {
     if ('string' != typeof n) {
      switch (n) {
       case bt:
       case vt:
       case ot:
       case lt:
       case st:
       case ht:
        return void bn(e, t, r.children);
       case gt:
        throw Error(a(343));
       case dt:
        e: {
         ((n = t.blockedBoundary), (i = t.blockedSegment), (s = r.fallback), (r = r.children));
         var l = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: (o = new Set()), errorDigest: null },
          c = pn(0, i.chunks.length, l, i.formatContext, !1, !1);
         (i.children.push(c), (i.lastPushedText = !1));
         var u = pn(0, 0, null, i.formatContext, !1, !1);
         ((u.parentFlushed = !0), (t.blockedBoundary = l), (t.blockedSegment = u));
         try {
          if ((_n(e, t, r), u.lastPushedText && u.textEmbedded && u.chunks.push(q), (u.status = 1), wn(l, u), 0 === l.pendingTasks)) break e;
         } catch (d) {
          ((u.status = 4), (l.forceClientRender = !0), (l.errorDigest = dn(e, d)));
         } finally {
          ((t.blockedBoundary = n), (t.blockedSegment = i));
         }
         ((t = un(e, s, n, c, o, t.legacyContext, t.context, t.treeContext)), e.pingedTasks.push(t));
        }
        return;
      }
      if ('object' == typeof n && null !== n)
       switch (n.$$typeof) {
        case pt:
         if (((r = fn(e, t, n.render, r, i)), 0 !== jt)) {
          ((n = t.treeContext), (t.treeContext = It(n, 1, 0)));
          try {
           bn(e, t, r);
          } finally {
           t.treeContext = n;
          }
         } else bn(e, t, r);
         return;
        case ft:
         return void vn(e, t, (n = n.type), (r = gn(n, r)), i);
        case ct:
         if (((i = r.children), (n = n._context), (r = r.value), (s = n._currentValue), (n._currentValue = r), (Ct = r = { parent: (o = Ct), depth: null === o ? 0 : o.depth + 1, context: n, parentValue: s, value: r }), (t.context = r), bn(e, t, i), null === (e = Ct))) throw Error(a(403));
         return ((r = e.parentValue), (e.context._currentValue = r === St ? e.context._defaultValue : r), (e = Ct = e.parent), void (t.context = e));
        case ut:
         return void bn(e, t, (r = (r = r.children)(n._currentValue)));
        case mt:
         return void vn(e, t, (n = (i = n._init)(n._payload)), (r = gn(n, r)), void 0);
       }
      throw Error(a(130, null == n ? n : typeof n, ''));
     }
     switch (
      ((s = se((i = t.blockedSegment).chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = (function (e, t, n) {
       switch (t) {
        case 'select':
         return M(1, null != n.value ? n.value : n.defaultValue);
        case 'svg':
         return M(2, null);
        case 'math':
         return M(3, null);
        case 'foreignObject':
         return M(1, null);
        case 'table':
         return M(4, null);
        case 'thead':
        case 'tbody':
        case 'tfoot':
         return M(5, null);
        case 'colgroup':
         return M(7, null);
        case 'tr':
         return M(6, null);
       }
       return 4 <= e.insertionMode || 0 === e.insertionMode ? M(1, null) : e;
      })(o, n, r)),
      _n(e, t, s),
      (i.formatContext = o),
      n)
     ) {
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'img':
      case 'input':
      case 'keygen':
      case 'link':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
       break;
      default:
       i.chunks.push(oe, p(n), le);
     }
     i.lastPushedText = !1;
    }
   }
   function bn(e, t, n) {
    if (((t.node = n), 'object' == typeof n && null !== n)) {
     switch (n.$$typeof) {
      case at:
       return void vn(e, t, n.type, n.props, n.ref);
      case it:
       throw Error(a(257));
      case mt:
       var r = n._init;
       return void bn(e, t, (n = r(n._payload)));
     }
     if (A(n)) return void Sn(e, t, n);
     if ((null === n || 'object' != typeof n ? (r = null) : (r = 'function' == typeof (r = (_t && n[_t]) || n['@@iterator']) ? r : null), r && (r = r.call(n)))) {
      if (!(n = r.next()).done) {
       var i = [];
       do {
        (i.push(n.value), (n = r.next()));
       } while (!n.done);
       Sn(e, t, i);
      }
      return;
     }
     throw ((e = Object.prototype.toString.call(n)), Error(a(31, '[object Object]' === e ? 'object with keys {' + Object.keys(n).join(', ') + '}' : e)));
    }
    'string' == typeof n ? ((r = t.blockedSegment).lastPushedText = B(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : 'number' == typeof n && ((r = t.blockedSegment).lastPushedText = B(t.blockedSegment.chunks, '' + n, e.responseState, r.lastPushedText));
   }
   function Sn(e, t, n) {
    for (var r = n.length, a = 0; a < r; a++) {
     var i = t.treeContext;
     t.treeContext = It(i, r, a);
     try {
      _n(e, t, n[a]);
     } finally {
      t.treeContext = i;
     }
    }
   }
   function _n(e, t, n) {
    var r = t.blockedSegment.formatContext,
     a = t.legacyContext,
     i = t.context;
    try {
     return bn(e, t, n);
    } catch (l) {
     if ((Zt(), 'object' != typeof l || null === l || 'function' != typeof l.then)) throw ((t.blockedSegment.formatContext = r), (t.legacyContext = a), (t.context = i), Lt(i), l);
     n = l;
     var s = t.blockedSegment,
      o = pn(0, s.chunks.length, null, s.formatContext, s.lastPushedText, !0);
     (s.children.push(o), (s.lastPushedText = !1), (e = un(e, t.node, t.blockedBoundary, o, t.abortSet, t.legacyContext, t.context, t.treeContext).ping), n.then(e, e), (t.blockedSegment.formatContext = r), (t.legacyContext = a), (t.context = i), Lt(i));
    }
   }
   function kn(e) {
    var t = e.blockedBoundary;
    (((e = e.blockedSegment).status = 3), Cn(this, t, e));
   }
   function yn(e, t, n) {
    var r = e.blockedBoundary;
    ((e.blockedSegment.status = 3),
     null === r
      ? (t.allPendingTasks--, 2 !== t.status && ((t.status = 2), null !== t.destination && t.destination.close()))
      : (r.pendingTasks--,
        r.forceClientRender || ((r.forceClientRender = !0), (e = void 0 === n ? Error(a(432)) : n), (r.errorDigest = t.onError(e)), r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
         return yn(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        0 === t.allPendingTasks && (r = t.onAllReady)()));
   }
   function wn(e, t) {
    if (0 === t.chunks.length && 1 === t.children.length && null === t.children[0].boundary) {
     var n = t.children[0];
     ((n.id = t.id), (n.parentFlushed = !0), 1 === n.status && wn(e, n));
    } else e.completedSegments.push(t);
   }
   function Cn(e, t, n) {
    if (null === t) {
     if (n.parentFlushed) {
      if (null !== e.completedRootSegment) throw Error(a(389));
      e.completedRootSegment = n;
     }
     (e.pendingRootTasks--, 0 === e.pendingRootTasks && ((e.onShellError = cn), (t = e.onShellReady)()));
    } else (t.pendingTasks--, t.forceClientRender || (0 === t.pendingTasks ? (n.parentFlushed && 1 === n.status && wn(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(kn, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && 1 === n.status && (wn(t, n), 1 === t.completedSegments.length && t.parentFlushed && e.partialBoundaries.push(t))));
    (e.allPendingTasks--, 0 === e.allPendingTasks && (e = e.onAllReady)());
   }
   function En(e) {
    if (2 !== e.status) {
     var t = Ct,
      n = on.current;
     on.current = an;
     var r = sn;
     sn = e.responseState;
     try {
      var a,
       i = e.pingedTasks;
      for (a = 0; a < i.length; a++) {
       var s = i[a],
        o = e,
        l = s.blockedSegment;
       if (0 === l.status) {
        Lt(s.context);
        try {
         (bn(o, s, s.node), l.lastPushedText && l.textEmbedded && l.chunks.push(q), s.abortSet.delete(s), (l.status = 1), Cn(o, s.blockedBoundary, l));
        } catch (h) {
         if ((Zt(), 'object' == typeof h && null !== h && 'function' == typeof h.then)) {
          var c = s.ping;
          h.then(c, c);
         } else {
          (s.abortSet.delete(s), (l.status = 4));
          var u = s.blockedBoundary,
           p = h,
           d = dn(o, p);
          if ((null === u ? hn(o, p) : (u.pendingTasks--, u.forceClientRender || ((u.forceClientRender = !0), (u.errorDigest = d), u.parentFlushed && o.clientRenderedBoundaries.push(u))), o.allPendingTasks--, 0 === o.allPendingTasks)) (0, o.onAllReady)();
         }
        }
       }
      }
      (i.splice(0, a), null !== e.destination && Pn(e, e.destination));
     } catch (h) {
      (dn(e, h), hn(e, h));
     } finally {
      ((sn = r), (on.current = n), n === an && Lt(t));
     }
    }
   }
   function Tn(e, t, n) {
    switch (((n.parentFlushed = !0), n.status)) {
     case 0:
      var r = (n.id = e.nextSegmentId++);
      return ((n.lastPushedText = !1), (n.textEmbedded = !1), (e = e.responseState), o(t, ce), o(t, e.placeholderPrefix), o(t, (e = p(r.toString(16)))), l(t, ue));
     case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var s = 0;
      n = n.children;
      for (var c = 0; c < n.length; c++) {
       for (i = n[c]; s < i.index; s++) o(t, r[s]);
       i = xn(e, t, i);
      }
      for (; s < r.length - 1; s++) o(t, r[s]);
      return (s < r.length && (i = l(t, r[s])), i);
     default:
      throw Error(a(390));
    }
   }
   function xn(e, t, n) {
    var r = n.boundary;
    if (null === r) return Tn(e, t, n);
    if (((r.parentFlushed = !0), r.forceClientRender)) ((r = r.errorDigest), l(t, fe), o(t, ge), r && (o(t, be), o(t, p(T(r))), o(t, ve)), l(t, Se), Tn(e, t, n));
    else if (0 < r.pendingTasks) {
     ((r.rootSegmentID = e.nextSegmentId++), 0 < r.completedSegments.length && e.partialBoundaries.push(r));
     var i = e.responseState,
      s = i.nextSuspenseID++;
     ((i = d(i.boundaryPrefix + s.toString(16))), (r = r.id = i), _e(t, e.responseState, r), Tn(e, t, n));
    } else if (r.byteSize > e.progressiveChunkSize) ((r.rootSegmentID = e.nextSegmentId++), e.completedBoundaries.push(r), _e(t, e.responseState, r.id), Tn(e, t, n));
    else {
     if ((l(t, pe), 1 !== (n = r.completedSegments).length)) throw Error(a(391));
     xn(e, t, n[0]);
    }
    return l(t, me);
   }
   function Nn(e, t, n) {
    return (
     (function (e, t, n, r) {
      switch (n.insertionMode) {
       case 0:
       case 1:
        return (o(e, ke), o(e, t.segmentPrefix), o(e, p(r.toString(16))), l(e, ye));
       case 2:
        return (o(e, Ce), o(e, t.segmentPrefix), o(e, p(r.toString(16))), l(e, Ee));
       case 3:
        return (o(e, xe), o(e, t.segmentPrefix), o(e, p(r.toString(16))), l(e, Ne));
       case 4:
        return (o(e, Le), o(e, t.segmentPrefix), o(e, p(r.toString(16))), l(e, Pe));
       case 5:
        return (o(e, Re), o(e, t.segmentPrefix), o(e, p(r.toString(16))), l(e, Ie));
       case 6:
        return (o(e, De), o(e, t.segmentPrefix), o(e, p(r.toString(16))), l(e, Me));
       case 7:
        return (o(e, Be), o(e, t.segmentPrefix), o(e, p(r.toString(16))), l(e, Ve));
       default:
        throw Error(a(397));
      }
     })(t, e.responseState, n.formatContext, n.id),
     xn(e, t, n),
     (function (e, t) {
      switch (t.insertionMode) {
       case 0:
       case 1:
        return l(e, we);
       case 2:
        return l(e, Te);
       case 3:
        return l(e, Ae);
       case 4:
        return l(e, Oe);
       case 5:
        return l(e, Fe);
       case 6:
        return l(e, qe);
       case 7:
        return l(e, He);
       default:
        throw Error(a(397));
      }
     })(t, n.formatContext)
    );
   }
   function An(e, t, n) {
    for (var r = n.completedSegments, i = 0; i < r.length; i++) Ln(e, t, n, r[i]);
    if (((r.length = 0), (e = e.responseState), (r = n.id), (n = n.rootSegmentID), o(t, e.startInlineScript), e.sentCompleteBoundaryFunction ? o(t, Xe) : ((e.sentCompleteBoundaryFunction = !0), o(t, We)), null === r)) throw Error(a(395));
    return ((n = p(n.toString(16))), o(t, r), o(t, Ge), o(t, e.segmentPrefix), o(t, n), l(t, Ke));
   }
   function Ln(e, t, n, r) {
    if (2 === r.status) return !0;
    var i = r.id;
    if (-1 === i) {
     if (-1 === (r.id = n.rootSegmentID)) throw Error(a(392));
     return Nn(e, t, r);
    }
    return (Nn(e, t, r), o(t, (e = e.responseState).startInlineScript), e.sentCompleteSegmentFunction ? o(t, Ue) : ((e.sentCompleteSegmentFunction = !0), o(t, $e)), o(t, e.segmentPrefix), o(t, (i = p(i.toString(16)))), o(t, ze), o(t, e.placeholderPrefix), o(t, i), l(t, je));
   }
   function Pn(e, t) {
    ((i = new Uint8Array(512)), (s = 0));
    try {
     var n = e.completedRootSegment;
     if (null !== n && 0 === e.pendingRootTasks) {
      (xn(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) o(t, r[n]);
      n < r.length && l(t, r[n]);
     }
     var u,
      d = e.clientRenderedBoundaries;
     for (u = 0; u < d.length; u++) {
      var h = d[u];
      r = t;
      var f = e.responseState,
       m = h.id,
       g = h.errorDigest,
       v = h.errorMessage,
       b = h.errorComponentStack;
      if ((o(r, f.startInlineScript), f.sentClientRenderFunction ? o(r, Ze) : ((f.sentClientRenderFunction = !0), o(r, Ye)), null === m)) throw Error(a(395));
      if ((o(r, m), o(r, Je), (g || v || b) && (o(r, et), o(r, p(nt(g || '')))), (v || b) && (o(r, et), o(r, p(nt(v || '')))), b && (o(r, et), o(r, p(nt(b)))), !l(r, Qe))) return ((e.destination = null), u++, void d.splice(0, u));
     }
     d.splice(0, u);
     var S = e.completedBoundaries;
     for (u = 0; u < S.length; u++) if (!An(e, t, S[u])) return ((e.destination = null), u++, void S.splice(0, u));
     (S.splice(0, u), c(t), (i = new Uint8Array(512)), (s = 0));
     var _ = e.partialBoundaries;
     for (u = 0; u < _.length; u++) {
      var k = _[u];
      e: {
       ((d = e), (h = t));
       var y = k.completedSegments;
       for (f = 0; f < y.length; f++)
        if (!Ln(d, h, k, y[f])) {
         (f++, y.splice(0, f));
         var w = !1;
         break e;
        }
       (y.splice(0, f), (w = !0));
      }
      if (!w) return ((e.destination = null), u++, void _.splice(0, u));
     }
     _.splice(0, u);
     var C = e.completedBoundaries;
     for (u = 0; u < C.length; u++) if (!An(e, t, C[u])) return ((e.destination = null), u++, void C.splice(0, u));
     C.splice(0, u);
    } finally {
     (c(t), 0 === e.allPendingTasks && 0 === e.pingedTasks.length && 0 === e.clientRenderedBoundaries.length && 0 === e.completedBoundaries.length && t.close());
    }
   }
   function On(e, t) {
    try {
     var n = e.abortableTasks;
     (n.forEach(function (n) {
      return yn(n, e, t);
     }),
      n.clear(),
      null !== e.destination && Pn(e, e.destination));
    } catch (r) {
     (dn(e, r), hn(e, r));
    }
   }
   ((t.renderToReadableStream = function (e, t) {
    return new Promise(function (n, r) {
     var a,
      i,
      s = new Promise(function (e, t) {
       ((i = e), (a = t));
      }),
      o = (function (e, t, n, r, a, i, s, o, l) {
       var c = [],
        u = new Set();
       return (((n = pn((t = { destination: null, responseState: t, progressiveChunkSize: void 0 === r ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: u, pingedTasks: c, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: void 0 === a ? ln : a, onAllReady: void 0 === i ? cn : i, onShellReady: void 0 === s ? cn : s, onShellError: void 0 === o ? cn : o, onFatalError: void 0 === l ? cn : l }), 0, null, n, !1, !1)).parentFlushed = !0), (e = un(t, e, null, n, u, yt, null, Rt)), c.push(e), t);
      })(
       e,
       (function (e, t, n, r, a) {
        ((e = void 0 === e ? '' : e), (t = void 0 === t ? L : d('<script nonce="' + T(t) + '">')));
        var i = [];
        if ((void 0 !== n && i.push(t, p(('' + n).replace(F, D)), P), void 0 !== r)) for (n = 0; n < r.length; n++) i.push(O, p(T(r[n])), I);
        if (void 0 !== a) for (r = 0; r < a.length; r++) i.push(R, p(T(a[r])), I);
        return { bootstrapChunks: i, startInlineScript: t, placeholderPrefix: d(e + 'P:'), segmentPrefix: d(e + 'S:'), boundaryPrefix: e + 'B:', idPrefix: e, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
       })(t ? t.identifierPrefix : void 0, t ? t.nonce : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0),
       (function (e) {
        return M('http://www.w3.org/2000/svg' === e ? 2 : 'http://www.w3.org/1998/Math/MathML' === e ? 3 : 0, null);
       })(t ? t.namespaceURI : void 0),
       t ? t.progressiveChunkSize : void 0,
       t ? t.onError : void 0,
       i,
       function () {
        var e = new ReadableStream(
         {
          type: 'bytes',
          pull: function (e) {
           if (1 === o.status) ((o.status = 2), h(e, o.fatalError));
           else if (2 !== o.status && null === o.destination) {
            o.destination = e;
            try {
             Pn(o, e);
            } catch (t) {
             (dn(o, t), hn(o, t));
            }
           }
          },
          cancel: function () {
           On(o);
          },
         },
         { highWaterMark: 0 },
        );
        ((e.allReady = s), n(e));
       },
       function (e) {
        (s.catch(function () {}), r(e));
       },
       a,
      );
     if (t && t.signal) {
      var l = t.signal,
       c = function () {
        (On(o, l.reason), l.removeEventListener('abort', c));
       };
      l.addEventListener('abort', c);
     }
     En(o);
    });
   }),
    (t.version = '18.3.1'));
  },
  31186(e, t, n) {
   'use strict';
   var r, a;
   ((r = n(67495)), (a = n(29521)), r.version, r.renderToString, (t.qV = r.renderToStaticMarkup), r.renderToNodeStream, r.renderToStaticNodeStream, a.renderToReadableStream);
  },
  37168(e, t, n) {
   'use strict';
   n.d(t, { D: () => c });
   var r = n(15540),
    a = n(69967),
    i = n(30758),
    s = ['level', 'appearance', 'children', 'className'];
   function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
    }
    return n;
   }
   var l = function () {
     for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
     return t.filter(Boolean).join(' ');
    },
    c = (0, i.forwardRef)(function (e, t) {
     var n = e.level,
      c = e.appearance,
      u = void 0 === c ? 'level-'.concat(n) : c,
      p = e.children,
      d = e.className,
      h = (0, a.A)(e, s),
      f = 'h'.concat(n);
     return (0, i.createElement)(
      f,
      (function (e) {
       for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
         ? o(Object(n), !0).forEach(function (t) {
            (0, r.A)(e, t, n[t]);
           })
         : Object.getOwnPropertyDescriptors
           ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
           : o(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
             });
       }
       return e;
      })({ className: l('nl-heading', 'nl-heading--'.concat(u), d), ref: t }, h),
      p,
     );
    });
   c.displayName = 'Heading';
  },
  58315(e, t, n) {
   'use strict';
   n.d(t, { A: () => r });
   const r = (0, n(18652).A)('outline', 'mood-sad', 'MoodSad', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 10l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 10l.01 0', key: 'svg-2' }],
    ['path', { d: 'M9.5 15.25a3.5 3.5 0 0 1 5 0', key: 'svg-3' }],
   ]);
  },
  65904(e) {
   var t = (function (e) {
    var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
     n = 0,
     r = {},
     a = {
      manual: e.Prism && e.Prism.manual,
      disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
      util: {
       encode: function e(t) {
        return t instanceof i
         ? new i(t.type, e(t.content), t.alias)
         : Array.isArray(t)
           ? t.map(e)
           : t
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/\u00a0/g, ' ');
       },
       type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
       },
       objId: function (e) {
        return (e.__id || Object.defineProperty(e, '__id', { value: ++n }), e.__id);
       },
       clone: function e(t, n) {
        var r, i;
        switch (((n = n || {}), a.util.type(t))) {
         case 'Object':
          if (((i = a.util.objId(t)), n[i])) return n[i];
          for (var s in ((r = {}), (n[i] = r), t)) t.hasOwnProperty(s) && (r[s] = e(t[s], n));
          return r;
         case 'Array':
          return (
           (i = a.util.objId(t)),
           n[i]
            ? n[i]
            : ((r = []),
              (n[i] = r),
              t.forEach(function (t, a) {
               r[a] = e(t, n);
              }),
              r)
          );
         default:
          return t;
        }
       },
       getLanguage: function (e) {
        for (; e; ) {
         var n = t.exec(e.className);
         if (n) return n[1].toLowerCase();
         e = e.parentElement;
        }
        return 'none';
       },
       setLanguage: function (e, n) {
        ((e.className = e.className.replace(RegExp(t, 'gi'), '')), e.classList.add('language-' + n));
       },
       currentScript: function () {
        if ('undefined' == typeof document) return null;
        if (document.currentScript && 'SCRIPT' === document.currentScript.tagName) return document.currentScript;
        try {
         throw new Error();
        } catch (r) {
         var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
         if (e) {
          var t = document.getElementsByTagName('script');
          for (var n in t) if (t[n].src == e) return t[n];
         }
         return null;
        }
       },
       isActive: function (e, t, n) {
        for (var r = 'no-' + t; e; ) {
         var a = e.classList;
         if (a.contains(t)) return !0;
         if (a.contains(r)) return !1;
         e = e.parentElement;
        }
        return !!n;
       },
      },
      languages: {
       plain: r,
       plaintext: r,
       text: r,
       txt: r,
       extend: function (e, t) {
        var n = a.util.clone(a.languages[e]);
        for (var r in t) n[r] = t[r];
        return n;
       },
       insertBefore: function (e, t, n, r) {
        var i = (r = r || a.languages)[e],
         s = {};
        for (var o in i)
         if (i.hasOwnProperty(o)) {
          if (o == t) for (var l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
          n.hasOwnProperty(o) || (s[o] = i[o]);
         }
        var c = r[e];
        return (
         (r[e] = s),
         a.languages.DFS(a.languages, function (t, n) {
          n === c && t != e && (this[t] = s);
         }),
         s
        );
       },
       DFS: function e(t, n, r, i) {
        i = i || {};
        var s = a.util.objId;
        for (var o in t)
         if (t.hasOwnProperty(o)) {
          n.call(t, o, t[o], r || o);
          var l = t[o],
           c = a.util.type(l);
          'Object' !== c || i[s(l)] ? 'Array' !== c || i[s(l)] || ((i[s(l)] = !0), e(l, n, o, i)) : ((i[s(l)] = !0), e(l, n, null, i));
         }
       },
      },
      plugins: {},
      highlightAll: function (e, t) {
       a.highlightAllUnder(document, e, t);
      },
      highlightAllUnder: function (e, t, n) {
       var r = { callback: n, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
       (a.hooks.run('before-highlightall', r), (r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector))), a.hooks.run('before-all-elements-highlight', r));
       for (var i, s = 0; (i = r.elements[s++]); ) a.highlightElement(i, !0 === t, r.callback);
      },
      highlightElement: function (t, n, r) {
       var i = a.util.getLanguage(t),
        s = a.languages[i];
       a.util.setLanguage(t, i);
       var o = t.parentElement;
       o && 'pre' === o.nodeName.toLowerCase() && a.util.setLanguage(o, i);
       var l = { element: t, language: i, grammar: s, code: t.textContent };
       function c(e) {
        ((l.highlightedCode = e), a.hooks.run('before-insert', l), (l.element.innerHTML = l.highlightedCode), a.hooks.run('after-highlight', l), a.hooks.run('complete', l), r && r.call(l.element));
       }
       if ((a.hooks.run('before-sanity-check', l), (o = l.element.parentElement) && 'pre' === o.nodeName.toLowerCase() && !o.hasAttribute('tabindex') && o.setAttribute('tabindex', '0'), !l.code)) return (a.hooks.run('complete', l), void (r && r.call(l.element)));
       if ((a.hooks.run('before-highlight', l), l.grammar))
        if (n && e.Worker) {
         var u = new Worker(a.filename);
         ((u.onmessage = function (e) {
          c(e.data);
         }),
          u.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: !0 })));
        } else c(a.highlight(l.code, l.grammar, l.language));
       else c(a.util.encode(l.code));
      },
      highlight: function (e, t, n) {
       var r = { code: e, grammar: t, language: n };
       if ((a.hooks.run('before-tokenize', r), !r.grammar)) throw new Error('The language "' + r.language + '" has no grammar.');
       return ((r.tokens = a.tokenize(r.code, r.grammar)), a.hooks.run('after-tokenize', r), i.stringify(a.util.encode(r.tokens), r.language));
      },
      tokenize: function (e, t) {
       var n = t.rest;
       if (n) {
        for (var r in n) t[r] = n[r];
        delete t.rest;
       }
       var a = new l();
       return (
        c(a, a.head, e),
        o(e, a, t, a.head, 0),
        (function (e) {
         var t = [],
          n = e.head.next;
         for (; n !== e.tail; ) (t.push(n.value), (n = n.next));
         return t;
        })(a)
       );
      },
      hooks: {
       all: {},
       add: function (e, t) {
        var n = a.hooks.all;
        ((n[e] = n[e] || []), n[e].push(t));
       },
       run: function (e, t) {
        var n = a.hooks.all[e];
        if (n && n.length) for (var r, i = 0; (r = n[i++]); ) r(t);
       },
      },
      Token: i,
     };
    function i(e, t, n, r) {
     ((this.type = e), (this.content = t), (this.alias = n), (this.length = 0 | (r || '').length));
    }
    function s(e, t, n, r) {
     e.lastIndex = t;
     var a = e.exec(n);
     if (a && r && a[1]) {
      var i = a[1].length;
      ((a.index += i), (a[0] = a[0].slice(i)));
     }
     return a;
    }
    function o(e, t, n, r, l, p) {
     for (var d in n)
      if (n.hasOwnProperty(d) && n[d]) {
       var h = n[d];
       h = Array.isArray(h) ? h : [h];
       for (var f = 0; f < h.length; ++f) {
        if (p && p.cause == d + ',' + f) return;
        var m = h[f],
         g = m.inside,
         v = !!m.lookbehind,
         b = !!m.greedy,
         S = m.alias;
        if (b && !m.pattern.global) {
         var _ = m.pattern.toString().match(/[imsuy]*$/)[0];
         m.pattern = RegExp(m.pattern.source, _ + 'g');
        }
        for (var k = m.pattern || m, y = r.next, w = l; y !== t.tail && !(p && w >= p.reach); w += y.value.length, y = y.next) {
         var C = y.value;
         if (t.length > e.length) return;
         if (!(C instanceof i)) {
          var E,
           T = 1;
          if (b) {
           if (!(E = s(k, w, e, v)) || E.index >= e.length) break;
           var x = E.index,
            N = E.index + E[0].length,
            A = w;
           for (A += y.value.length; x >= A; ) A += (y = y.next).value.length;
           if (((w = A -= y.value.length), y.value instanceof i)) continue;
           for (var L = y; L !== t.tail && (A < N || 'string' == typeof L.value); L = L.next) (T++, (A += L.value.length));
           (T--, (C = e.slice(w, A)), (E.index -= w));
          } else if (!(E = s(k, 0, C, v))) continue;
          x = E.index;
          var P = E[0],
           O = C.slice(0, x),
           R = C.slice(x + P.length),
           I = w + C.length;
          p && I > p.reach && (p.reach = I);
          var F = y.prev;
          if ((O && ((F = c(t, F, O)), (w += O.length)), u(t, F, T), (y = c(t, F, new i(d, g ? a.tokenize(P, g) : P, S, P))), R && c(t, y, R), T > 1)) {
           var D = { cause: d + ',' + f, reach: I };
           (o(e, t, n, y.prev, w, D), p && D.reach > p.reach && (p.reach = D.reach));
          }
         }
        }
       }
      }
    }
    function l() {
     var e = { value: null, prev: null, next: null },
      t = { value: null, prev: e, next: null };
     ((e.next = t), (this.head = e), (this.tail = t), (this.length = 0));
    }
    function c(e, t, n) {
     var r = t.next,
      a = { value: n, prev: t, next: r };
     return ((t.next = a), (r.prev = a), e.length++, a);
    }
    function u(e, t, n) {
     for (var r = t.next, a = 0; a < n && r !== e.tail; a++) r = r.next;
     ((t.next = r), (r.prev = t), (e.length -= a));
    }
    if (
     ((e.Prism = a),
     (i.stringify = function e(t, n) {
      if ('string' == typeof t) return t;
      if (Array.isArray(t)) {
       var r = '';
       return (
        t.forEach(function (t) {
         r += e(t, n);
        }),
        r
       );
      }
      var i = { type: t.type, content: e(t.content, n), tag: 'span', classes: ['token', t.type], attributes: {}, language: n },
       s = t.alias;
      (s && (Array.isArray(s) ? Array.prototype.push.apply(i.classes, s) : i.classes.push(s)), a.hooks.run('wrap', i));
      var o = '';
      for (var l in i.attributes) o += ' ' + l + '="' + (i.attributes[l] || '').replace(/"/g, '&quot;') + '"';
      return '<' + i.tag + ' class="' + i.classes.join(' ') + '"' + o + '>' + i.content + '</' + i.tag + '>';
     }),
     !e.document)
    )
     return e.addEventListener
      ? (a.disableWorkerMessageHandler ||
         e.addEventListener(
          'message',
          function (t) {
           var n = JSON.parse(t.data),
            r = n.language,
            i = n.code,
            s = n.immediateClose;
           (e.postMessage(a.highlight(i, a.languages[r], r)), s && e.close());
          },
          !1,
         ),
        a)
      : a;
    var p = a.util.currentScript();
    function d() {
     a.manual || a.highlightAll();
    }
    if ((p && ((a.filename = p.src), p.hasAttribute('data-manual') && (a.manual = !0)), !a.manual)) {
     var h = document.readyState;
     'loading' === h || ('interactive' === h && p && p.defer) ? document.addEventListener('DOMContentLoaded', d) : window.requestAnimationFrame ? window.requestAnimationFrame(d) : window.setTimeout(d, 16);
    }
    return a;
   })('undefined' != typeof window ? window : 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
   (e.exports && (e.exports = t),
    'undefined' != typeof globalThis && (globalThis.Prism = t),
    (t.languages.markup = {
     comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
     prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
     doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { 'internal-subset': { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, 'doctype-tag': /^DOCTYPE/i, name: /[^\s<>'"]+/ } },
     cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
     tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
       tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
       'special-attr': [],
       'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
         punctuation: [
          { pattern: /^=/, alias: 'attr-equals' },
          { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
         ],
        },
       },
       punctuation: /\/?>/,
       'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
      },
     },
     entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i],
    }),
    (t.languages.markup.tag.inside['attr-value'].inside.entity = t.languages.markup.entity),
    (t.languages.markup.doctype.inside['internal-subset'].inside = t.languages.markup),
    t.hooks.add('wrap', function (e) {
     'entity' === e.type && (e.attributes.title = e.content.replace(/&amp;/, '&'));
    }),
    Object.defineProperty(t.languages.markup.tag, 'addInlined', {
     value: function (e, n) {
      var r = {};
      ((r['language-' + n] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: t.languages[n] }), (r.cdata = /^<!\[CDATA\[|\]\]>$/i));
      var a = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r } };
      a['language-' + n] = { pattern: /[\s\S]+/, inside: t.languages[n] };
      var i = {};
      ((i[e] = {
       pattern: RegExp(
        /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
         return e;
        }),
        'i',
       ),
       lookbehind: !0,
       greedy: !0,
       inside: a,
      }),
       t.languages.insertBefore('markup', 'cdata', i));
     },
    }),
    Object.defineProperty(t.languages.markup.tag, 'addAttribute', {
     value: function (e, n) {
      t.languages.markup.tag.inside['special-attr'].push({ pattern: RegExp(/(^|["'\s])/.source + '(?:' + e + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'), lookbehind: !0, inside: { 'attr-name': /^[^\s=]+/, 'attr-value': { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [n, 'language-' + n], inside: t.languages[n] }, punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/] } } } });
     },
    }),
    (t.languages.html = t.languages.markup),
    (t.languages.mathml = t.languages.markup),
    (t.languages.svg = t.languages.markup),
    (t.languages.xml = t.languages.extend('markup', {})),
    (t.languages.ssml = t.languages.xml),
    (t.languages.atom = t.languages.xml),
    (t.languages.rss = t.languages.xml),
    (function (e) {
     var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
     ((e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + t.source + ')*?' + /(?:;|(?=\s*\{))/.source), inside: { rule: /^@[\w-]+/, 'selector-function-argument': { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: 'selector' }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp('\\burl\\((?:' + t.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp('^' + t.source + '$'), alias: 'url' } } }, selector: { pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + t.source + ')*(?=\\s*\\{)'), lookbehind: !0 }, string: { pattern: t, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }), (e.languages.css.atrule.inside.rest = e.languages.css));
     var n = e.languages.markup;
     n && (n.tag.addInlined('style', 'css'), n.tag.addAttribute('style', 'css'));
    })(t),
    (t.languages.clike = {
     comment: [
      { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
     ],
     string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
     'class-name': { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } },
     keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
     boolean: /\b(?:false|true)\b/,
     function: /\b\w+(?=\()/,
     number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
     operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
     punctuation: /[{}[\];(),.:]/,
    }),
    (t.languages.javascript = t.languages.extend('clike', {
     'class-name': [t.languages.clike['class-name'], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }],
     keyword: [
      { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
      { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 },
     ],
     function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
     number: { pattern: RegExp(/(^|[^\w$])/.source + '(?:' + /NaN|Infinity/.source + '|' + /0[bB][01]+(?:_[01]+)*n?/.source + '|' + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' + /\d+(?:_\d+)*n/.source + '|' + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ')' + /(?![\w$])/.source), lookbehind: !0 },
     operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
    })),
    (t.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    t.languages.insertBefore('javascript', 'keyword', {
     regex: { pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + '(?:' + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + '|' + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ')' + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source), lookbehind: !0, greedy: !0, inside: { 'regex-source': { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: 'language-regex', inside: t.languages.regex }, 'regex-delimiter': /^\/|\/$/, 'regex-flags': /^[a-z]+$/ } },
     'function-variable': { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: 'function' },
     parameter: [
      { pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: t.languages.javascript },
      { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: t.languages.javascript },
      { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: t.languages.javascript },
      { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: t.languages.javascript },
     ],
     constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    t.languages.insertBefore('javascript', 'string', { hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' }, 'template-string': { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { 'template-punctuation': { pattern: /^`|`$/, alias: 'string' }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { 'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' }, rest: t.languages.javascript } }, string: /[\s\S]+/ } }, 'string-property': { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: 'property' } }),
    t.languages.insertBefore('javascript', 'operator', { 'literal-property': { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: 'property' } }),
    t.languages.markup && (t.languages.markup.tag.addInlined('script', 'javascript'), t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript')),
    (t.languages.js = t.languages.javascript),
    (function () {
     if (void 0 !== t && 'undefined' != typeof document) {
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
      var e = { js: 'javascript', py: 'python', rb: 'ruby', ps1: 'powershell', psm1: 'powershell', sh: 'bash', bat: 'batch', h: 'c', tex: 'latex' },
       n = 'data-src-status',
       r = 'loading',
       a = 'loaded',
       i = 'pre[data-src]:not([' + n + '="' + a + '"]):not([' + n + '="' + r + '"])';
      (t.hooks.add('before-highlightall', function (e) {
       e.selector += ', ' + i;
      }),
       t.hooks.add('before-sanity-check', function (s) {
        var o = s.element;
        if (o.matches(i)) {
         ((s.code = ''), o.setAttribute(n, r));
         var l = o.appendChild(document.createElement('CODE'));
         l.textContent = 'Loading\u2026';
         var c = o.getAttribute('data-src'),
          u = s.language;
         if ('none' === u) {
          var p = (/\.(\w+)$/.exec(c) || [, 'none'])[1];
          u = e[p] || p;
         }
         (t.util.setLanguage(l, u), t.util.setLanguage(o, u));
         var d = t.plugins.autoloader;
         (d && d.loadLanguages(u),
          (function (e, t, n) {
           var r = new XMLHttpRequest();
           (r.open('GET', e, !0),
            (r.onreadystatechange = function () {
             4 == r.readyState && (r.status < 400 && r.responseText ? t(r.responseText) : r.status >= 400 ? n('\u2716 Error ' + r.status + ' while fetching file: ' + r.statusText) : n('\u2716 Error: File does not exist or is empty'));
            }),
            r.send(null));
          })(
           c,
           function (e) {
            o.setAttribute(n, a);
            var r = (function (e) {
             var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || '');
             if (t) {
              var n = Number(t[1]),
               r = t[2],
               a = t[3];
              return r ? (a ? [n, Number(a)] : [n, void 0]) : [n, n];
             }
            })(o.getAttribute('data-range'));
            if (r) {
             var i = e.split(/\r\n?|\n/g),
              s = r[0],
              c = null == r[1] ? i.length : r[1];
             (s < 0 && (s += i.length), (s = Math.max(0, Math.min(s - 1, i.length))), c < 0 && (c += i.length), (c = Math.max(0, Math.min(c, i.length))), (e = i.slice(s, c).join('\n')), o.hasAttribute('data-start') || o.setAttribute('data-start', String(s + 1)));
            }
            ((l.textContent = e), t.highlightElement(l));
           },
           function (e) {
            (o.setAttribute(n, 'failed'), (l.textContent = e));
           },
          ));
        }
       }),
       (t.plugins.fileHighlight = {
        highlight: function (e) {
         for (var n, r = (e || document).querySelectorAll(i), a = 0; (n = r[a++]); ) t.highlightElement(n);
        },
       }));
      var s = !1;
      t.fileHighlight = function () {
       (s || (console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'), (s = !0)), t.plugins.fileHighlight.highlight.apply(this, arguments));
      };
     }
    })());
  },
  67495(e, t, n) {
   'use strict';
   var r = n(30758);
   function a(e) {
    for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
    return 'Minified React error #' + e + '; visit ' + t + ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
   }
   var i = Object.prototype.hasOwnProperty,
    s = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    o = {},
    l = {};
   function c(e) {
    return !!i.call(l, e) || (!i.call(o, e) && (s.test(e) ? (l[e] = !0) : ((o[e] = !0), !1)));
   }
   function u(e, t, n, r, a, i, s) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t), (this.attributeName = r), (this.attributeNamespace = a), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = i), (this.removeEmptyString = s));
   }
   var p = {};
   ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'.split(' ').forEach(function (e) {
    p[e] = new u(e, 0, !1, e, null, !1, !1);
   }),
    [
     ['acceptCharset', 'accept-charset'],
     ['className', 'class'],
     ['htmlFor', 'for'],
     ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
     var t = e[0];
     p[t] = new u(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
     p[e] = new u(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
     p[e] = new u(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'.split(' ').forEach(function (e) {
     p[e] = new u(e, 3, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
     p[e] = new u(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
     p[e] = new u(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
     p[e] = new u(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
     p[e] = new u(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
   var d = /[\-:]([a-z])/g;
   function h(e) {
    return e[1].toUpperCase();
   }
   ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'.split(' ').forEach(function (e) {
    var t = e.replace(d, h);
    p[t] = new u(t, 1, !1, e, null, !1, !1);
   }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
     var t = e.replace(d, h);
     p[t] = new u(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
     var t = e.replace(d, h);
     p[t] = new u(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
     p[e] = new u(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (p.xlinkHref = new u('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
     p[e] = new u(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
   var f = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    m = ['Webkit', 'ms', 'Moz', 'O'];
   Object.keys(f).forEach(function (e) {
    m.forEach(function (t) {
     ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (f[t] = f[e]));
    });
   });
   var g = /["'&<>]/;
   function v(e) {
    if ('boolean' == typeof e || 'number' == typeof e) return '' + e;
    e = '' + e;
    var t = g.exec(e);
    if (t) {
     var n,
      r = '',
      a = 0;
     for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
       case 34:
        t = '&quot;';
        break;
       case 38:
        t = '&amp;';
        break;
       case 39:
        t = '&#x27;';
        break;
       case 60:
        t = '&lt;';
        break;
       case 62:
        t = '&gt;';
        break;
       default:
        continue;
      }
      (a !== n && (r += e.substring(a, n)), (a = n + 1), (r += t));
     }
     e = a !== n ? r + e.substring(a, n) : r;
    }
    return e;
   }
   var b = /([A-Z])/g,
    S = /^ms-/,
    _ = Array.isArray;
   function k(e, t) {
    return { insertionMode: e, selectedValue: t };
   }
   var y = new Map();
   function w(e, t, n) {
    if ('object' != typeof n) throw Error(a(62));
    for (var r in ((t = !0), n))
     if (i.call(n, r)) {
      var s = n[r];
      if (null != s && 'boolean' != typeof s && '' !== s) {
       if (0 === r.indexOf('--')) {
        var o = v(r);
        s = v(('' + s).trim());
       } else {
        o = r;
        var l = y.get(o);
        (void 0 !== l || ((l = v(o.replace(b, '-$1').toLowerCase().replace(S, '-ms-'))), y.set(o, l)), (o = l), (s = 'number' == typeof s ? (0 === s || i.call(f, r) ? '' + s : s + 'px') : v(('' + s).trim())));
       }
       t ? ((t = !1), e.push(' style="', o, ':', s)) : e.push(';', o, ':', s);
      }
     }
    t || e.push('"');
   }
   function C(e, t, n, r) {
    switch (n) {
     case 'style':
      return void w(e, t, r);
     case 'defaultValue':
     case 'defaultChecked':
     case 'innerHTML':
     case 'suppressContentEditableWarning':
     case 'suppressHydrationWarning':
      return;
    }
    if (!(2 < n.length) || ('o' !== n[0] && 'O' !== n[0]) || ('n' !== n[1] && 'N' !== n[1]))
     if (null !== (t = p.hasOwnProperty(n) ? p[n] : null)) {
      switch (typeof r) {
       case 'function':
       case 'symbol':
        return;
       case 'boolean':
        if (!t.acceptsBooleans) return;
      }
      switch (((n = t.attributeName), t.type)) {
       case 3:
        r && e.push(' ', n, '=""');
        break;
       case 4:
        !0 === r ? e.push(' ', n, '=""') : !1 !== r && e.push(' ', n, '="', v(r), '"');
        break;
       case 5:
        isNaN(r) || e.push(' ', n, '="', v(r), '"');
        break;
       case 6:
        !isNaN(r) && 1 <= r && e.push(' ', n, '="', v(r), '"');
        break;
       default:
        (t.sanitizeURL && (r = '' + r), e.push(' ', n, '="', v(r), '"'));
      }
     } else if (c(n)) {
      switch (typeof r) {
       case 'function':
       case 'symbol':
        return;
       case 'boolean':
        if ('data-' !== (t = n.toLowerCase().slice(0, 5)) && 'aria-' !== t) return;
      }
      e.push(' ', n, '="', v(r), '"');
     }
   }
   function E(e, t, n) {
    if (null != t) {
     if (null != n) throw Error(a(60));
     if ('object' != typeof t || !('__html' in t)) throw Error(a(61));
     null != (t = t.__html) && e.push('' + t);
    }
   }
   function T(e, t, n, r) {
    e.push(A(n));
    var a,
     s = (n = null);
    for (a in t)
     if (i.call(t, a)) {
      var o = t[a];
      if (null != o)
       switch (a) {
        case 'children':
         n = o;
         break;
        case 'dangerouslySetInnerHTML':
         s = o;
         break;
        default:
         C(e, r, a, o);
       }
     }
    return (e.push('>'), E(e, s, n), 'string' == typeof n ? (e.push(v(n)), null) : n);
   }
   var x = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    N = new Map();
   function A(e) {
    var t = N.get(e);
    if (void 0 === t) {
     if (!x.test(e)) throw Error(a(65, e));
     ((t = '<' + e), N.set(e, t));
    }
    return t;
   }
   function L(e, t, n, s, o) {
    switch (t) {
     case 'select':
      e.push(A('select'));
      var l = null,
       u = null;
      for (f in n)
       if (i.call(n, f)) {
        var p = n[f];
        if (null != p)
         switch (f) {
          case 'children':
           l = p;
           break;
          case 'dangerouslySetInnerHTML':
           u = p;
           break;
          case 'defaultValue':
          case 'value':
           break;
          default:
           C(e, s, f, p);
         }
       }
      return (e.push('>'), E(e, u, l), l);
     case 'option':
      ((u = o.selectedValue), e.push(A('option')));
      var d = (p = null),
       h = null,
       f = null;
      for (l in n)
       if (i.call(n, l)) {
        var m = n[l];
        if (null != m)
         switch (l) {
          case 'children':
           p = m;
           break;
          case 'selected':
           h = m;
           break;
          case 'dangerouslySetInnerHTML':
           f = m;
           break;
          case 'value':
           d = m;
          default:
           C(e, s, l, m);
         }
       }
      if (null != u)
       if (
        ((n =
         null !== d
          ? '' + d
          : (function (e) {
             var t = '';
             return (
              r.Children.forEach(e, function (e) {
               null != e && (t += e);
              }),
              t
             );
            })(p)),
        _(u))
       ) {
        for (s = 0; s < u.length; s++)
         if ('' + u[s] === n) {
          e.push(' selected=""');
          break;
         }
       } else '' + u === n && e.push(' selected=""');
      else h && e.push(' selected=""');
      return (e.push('>'), E(e, f, p), p);
     case 'textarea':
      for (p in (e.push(A('textarea')), (f = u = l = null), n))
       if (i.call(n, p) && null != (d = n[p]))
        switch (p) {
         case 'children':
          f = d;
          break;
         case 'value':
          l = d;
          break;
         case 'defaultValue':
          u = d;
          break;
         case 'dangerouslySetInnerHTML':
          throw Error(a(91));
         default:
          C(e, s, p, d);
        }
      if ((null === l && null !== u && (l = u), e.push('>'), null != f)) {
       if (null != l) throw Error(a(92));
       if (_(f) && 1 < f.length) throw Error(a(93));
       l = '' + f;
      }
      return ('string' == typeof l && '\n' === l[0] && e.push('\n'), null !== l && e.push(v('' + l)), null);
     case 'input':
      for (u in (e.push(A('input')), (d = f = p = l = null), n))
       if (i.call(n, u) && null != (h = n[u]))
        switch (u) {
         case 'children':
         case 'dangerouslySetInnerHTML':
          throw Error(a(399, 'input'));
         case 'defaultChecked':
          d = h;
          break;
         case 'defaultValue':
          p = h;
          break;
         case 'checked':
          f = h;
          break;
         case 'value':
          l = h;
          break;
         default:
          C(e, s, u, h);
        }
      return (null !== f ? C(e, s, 'checked', f) : null !== d && C(e, s, 'checked', d), null !== l ? C(e, s, 'value', l) : null !== p && C(e, s, 'value', p), e.push('/>'), null);
     case 'menuitem':
      for (var g in (e.push(A('menuitem')), n))
       if (i.call(n, g) && null != (l = n[g]))
        switch (g) {
         case 'children':
         case 'dangerouslySetInnerHTML':
          throw Error(a(400));
         default:
          C(e, s, g, l);
        }
      return (e.push('>'), null);
     case 'title':
      for (m in (e.push(A('title')), (l = null), n))
       if (i.call(n, m) && null != (u = n[m]))
        switch (m) {
         case 'children':
          l = u;
          break;
         case 'dangerouslySetInnerHTML':
          throw Error(a(434));
         default:
          C(e, s, m, u);
        }
      return (e.push('>'), l);
     case 'listing':
     case 'pre':
      for (d in (e.push(A(t)), (u = l = null), n))
       if (i.call(n, d) && null != (p = n[d]))
        switch (d) {
         case 'children':
          l = p;
          break;
         case 'dangerouslySetInnerHTML':
          u = p;
          break;
         default:
          C(e, s, d, p);
        }
      if ((e.push('>'), null != u)) {
       if (null != l) throw Error(a(60));
       if ('object' != typeof u || !('__html' in u)) throw Error(a(61));
       null != (n = u.__html) && ('string' == typeof n && 0 < n.length && '\n' === n[0] ? e.push('\n', n) : e.push('' + n));
      }
      return ('string' == typeof l && '\n' === l[0] && e.push('\n'), l);
     case 'area':
     case 'base':
     case 'br':
     case 'col':
     case 'embed':
     case 'hr':
     case 'img':
     case 'keygen':
     case 'link':
     case 'meta':
     case 'param':
     case 'source':
     case 'track':
     case 'wbr':
      for (var b in (e.push(A(t)), n))
       if (i.call(n, b) && null != (l = n[b]))
        switch (b) {
         case 'children':
         case 'dangerouslySetInnerHTML':
          throw Error(a(399, t));
         default:
          C(e, s, b, l);
        }
      return (e.push('/>'), null);
     case 'annotation-xml':
     case 'color-profile':
     case 'font-face':
     case 'font-face-src':
     case 'font-face-uri':
     case 'font-face-format':
     case 'font-face-name':
     case 'missing-glyph':
      return T(e, n, t, s);
     case 'html':
      return (0 === o.insertionMode && e.push('<!DOCTYPE html>'), T(e, n, t, s));
     default:
      if (-1 === t.indexOf('-') && 'string' != typeof n.is) return T(e, n, t, s);
      for (h in (e.push(A(t)), (u = l = null), n))
       if (i.call(n, h) && null != (p = n[h]))
        switch (h) {
         case 'children':
          l = p;
          break;
         case 'dangerouslySetInnerHTML':
          u = p;
          break;
         case 'style':
          w(e, s, p);
          break;
         case 'suppressContentEditableWarning':
         case 'suppressHydrationWarning':
          break;
         default:
          c(h) && 'function' != typeof p && 'symbol' != typeof p && e.push(' ', h, '="', v(p), '"');
        }
      return (e.push('>'), E(e, u, l), l);
    }
   }
   function P(e, t, n) {
    if ((e.push('\x3c!--$?--\x3e<template id="'), null === n)) throw Error(a(395));
    return (e.push(n), e.push('"></template>'));
   }
   var O = /[<\u2028\u2029]/g;
   function R(e) {
    return JSON.stringify(e).replace(O, function (e) {
     switch (e) {
      case '<':
       return '\\u003c';
      case '\u2028':
       return '\\u2028';
      case '\u2029':
       return '\\u2029';
      default:
       throw Error('escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React');
     }
    });
   }
   function I(e, t, n, r) {
    return n.generateStaticMarkup ? (e.push(v(t)), !1) : ('' === t ? (e = r) : (r && e.push('\x3c!-- --\x3e'), e.push(v(t)), (e = !0)), e);
   }
   var F = Object.assign,
    D = Symbol.for('react.element'),
    M = Symbol.for('react.portal'),
    q = Symbol.for('react.fragment'),
    B = Symbol.for('react.strict_mode'),
    V = Symbol.for('react.profiler'),
    H = Symbol.for('react.provider'),
    $ = Symbol.for('react.context'),
    U = Symbol.for('react.forward_ref'),
    z = Symbol.for('react.suspense'),
    j = Symbol.for('react.suspense_list'),
    W = Symbol.for('react.memo'),
    X = Symbol.for('react.lazy'),
    G = Symbol.for('react.scope'),
    K = Symbol.for('react.debug_trace_mode'),
    Y = Symbol.for('react.legacy_hidden'),
    Z = Symbol.for('react.default_value'),
    J = Symbol.iterator;
   function Q(e) {
    if (null == e) return null;
    if ('function' == typeof e) return e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
     case q:
      return 'Fragment';
     case M:
      return 'Portal';
     case V:
      return 'Profiler';
     case B:
      return 'StrictMode';
     case z:
      return 'Suspense';
     case j:
      return 'SuspenseList';
    }
    if ('object' == typeof e)
     switch (e.$$typeof) {
      case $:
       return (e.displayName || 'Context') + '.Consumer';
      case H:
       return (e._context.displayName || 'Context') + '.Provider';
      case U:
       var t = e.render;
       return ((e = e.displayName) || (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'), e);
      case W:
       return null !== (t = e.displayName || null) ? t : Q(e.type) || 'Memo';
      case X:
       ((t = e._payload), (e = e._init));
       try {
        return Q(e(t));
       } catch (n) {}
     }
    return null;
   }
   var ee = {};
   function te(e, t) {
    if (!(e = e.contextTypes)) return ee;
    var n,
     r = {};
    for (n in e) r[n] = t[n];
    return r;
   }
   var ne = null;
   function re(e, t) {
    if (e !== t) {
     ((e.context._currentValue2 = e.parentValue), (e = e.parent));
     var n = t.parent;
     if (null === e) {
      if (null !== n) throw Error(a(401));
     } else {
      if (null === n) throw Error(a(401));
      re(e, n);
     }
     t.context._currentValue2 = t.value;
    }
   }
   function ae(e) {
    ((e.context._currentValue2 = e.parentValue), null !== (e = e.parent) && ae(e));
   }
   function ie(e) {
    var t = e.parent;
    (null !== t && ie(t), (e.context._currentValue2 = e.value));
   }
   function se(e, t) {
    if (((e.context._currentValue2 = e.parentValue), null === (e = e.parent))) throw Error(a(402));
    e.depth === t.depth ? re(e, t) : se(e, t);
   }
   function oe(e, t) {
    var n = t.parent;
    if (null === n) throw Error(a(402));
    (e.depth === n.depth ? re(e, n) : oe(e, n), (t.context._currentValue2 = t.value));
   }
   function le(e) {
    var t = ne;
    t !== e && (null === t ? ie(e) : null === e ? ae(t) : t.depth === e.depth ? re(t, e) : t.depth > e.depth ? se(t, e) : oe(t, e), (ne = e));
   }
   var ce = {
    isMounted: function () {
     return !1;
    },
    enqueueSetState: function (e, t) {
     null !== (e = e._reactInternals).queue && e.queue.push(t);
    },
    enqueueReplaceState: function (e, t) {
     (((e = e._reactInternals).replace = !0), (e.queue = [t]));
    },
    enqueueForceUpdate: function () {},
   };
   function ue(e, t, n, r) {
    var a = void 0 !== e.state ? e.state : null;
    ((e.updater = ce), (e.props = n), (e.state = a));
    var i = { queue: [], replace: !1 };
    e._reactInternals = i;
    var s = t.contextType;
    if (((e.context = 'object' == typeof s && null !== s ? s._currentValue2 : r), 'function' == typeof (s = t.getDerivedStateFromProps) && ((a = null == (s = s(n, a)) ? a : F({}, a, s)), (e.state = a)), 'function' != typeof t.getDerivedStateFromProps && 'function' != typeof e.getSnapshotBeforeUpdate && ('function' == typeof e.UNSAFE_componentWillMount || 'function' == typeof e.componentWillMount)))
     if (((t = e.state), 'function' == typeof e.componentWillMount && e.componentWillMount(), 'function' == typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), t !== e.state && ce.enqueueReplaceState(e, e.state, null), null !== i.queue && 0 < i.queue.length))
      if (((t = i.queue), (s = i.replace), (i.queue = null), (i.replace = !1), s && 1 === t.length)) e.state = t[0];
      else {
       for (i = s ? t[0] : e.state, a = !0, s = s ? 1 : 0; s < t.length; s++) {
        var o = t[s];
        null != (o = 'function' == typeof o ? o.call(e, i, n, r) : o) && (a ? ((a = !1), (i = F({}, i, o))) : F(i, o));
       }
       e.state = i;
      }
     else i.queue = null;
   }
   var pe = { id: 1, overflow: '' };
   function de(e, t, n) {
    var r = e.id;
    e = e.overflow;
    var a = 32 - he(r) - 1;
    ((r &= ~(1 << a)), (n += 1));
    var i = 32 - he(t) + a;
    if (30 < i) {
     var s = a - (a % 5);
     return ((i = (r & ((1 << s) - 1)).toString(32)), (r >>= s), (a -= s), { id: (1 << (32 - he(t) + a)) | (n << a) | r, overflow: i + e });
    }
    return { id: (1 << i) | (n << a) | r, overflow: e };
   }
   var he = Math.clz32
     ? Math.clz32
     : function (e) {
        return 0 === (e >>>= 0) ? 32 : (31 - ((fe(e) / me) | 0)) | 0;
       },
    fe = Math.log,
    me = Math.LN2;
   var ge =
     'function' == typeof Object.is
      ? Object.is
      : function (e, t) {
         return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        },
    ve = null,
    be = null,
    Se = null,
    _e = null,
    ke = !1,
    ye = !1,
    we = 0,
    Ce = null,
    Ee = 0;
   function Te() {
    if (null === ve) throw Error(a(321));
    return ve;
   }
   function xe() {
    if (0 < Ee) throw Error(a(312));
    return { memoizedState: null, queue: null, next: null };
   }
   function Ne() {
    return (null === _e ? (null === Se ? ((ke = !1), (Se = _e = xe())) : ((ke = !0), (_e = Se))) : null === _e.next ? ((ke = !1), (_e = _e.next = xe())) : ((ke = !0), (_e = _e.next)), _e);
   }
   function Ae() {
    ((be = ve = null), (ye = !1), (Se = null), (Ee = 0), (_e = Ce = null));
   }
   function Le(e, t) {
    return 'function' == typeof t ? t(e) : t;
   }
   function Pe(e, t, n) {
    if (((ve = Te()), (_e = Ne()), ke)) {
     var r = _e.queue;
     if (((t = r.dispatch), null !== Ce && void 0 !== (n = Ce.get(r)))) {
      (Ce.delete(r), (r = _e.memoizedState));
      do {
       ((r = e(r, n.action)), (n = n.next));
      } while (null !== n);
      return ((_e.memoizedState = r), [r, t]);
     }
     return [_e.memoizedState, t];
    }
    return ((e = e === Le ? ('function' == typeof t ? t() : t) : void 0 !== n ? n(t) : t), (_e.memoizedState = e), (e = (e = _e.queue = { last: null, dispatch: null }).dispatch = Re.bind(null, ve, e)), [_e.memoizedState, e]);
   }
   function Oe(e, t) {
    if (((ve = Te()), (t = void 0 === t ? null : t), null !== (_e = Ne()))) {
     var n = _e.memoizedState;
     if (null !== n && null !== t) {
      var r = n[1];
      e: if (null === r) r = !1;
      else {
       for (var a = 0; a < r.length && a < t.length; a++)
        if (!ge(t[a], r[a])) {
         r = !1;
         break e;
        }
       r = !0;
      }
      if (r) return n[0];
     }
    }
    return ((e = e()), (_e.memoizedState = [e, t]), e);
   }
   function Re(e, t, n) {
    if (25 <= Ee) throw Error(a(301));
    if (e === ve)
     if (((ye = !0), (e = { action: n, next: null }), null === Ce && (Ce = new Map()), void 0 === (n = Ce.get(t)))) Ce.set(t, e);
     else {
      for (t = n; null !== t.next; ) t = t.next;
      t.next = e;
     }
   }
   function Ie() {
    throw Error(a(394));
   }
   function Fe() {}
   var De = {
     readContext: function (e) {
      return e._currentValue2;
     },
     useContext: function (e) {
      return (Te(), e._currentValue2);
     },
     useMemo: Oe,
     useReducer: Pe,
     useRef: function (e) {
      ve = Te();
      var t = (_e = Ne()).memoizedState;
      return null === t ? ((e = { current: e }), (_e.memoizedState = e)) : t;
     },
     useState: function (e) {
      return Pe(Le, e);
     },
     useInsertionEffect: Fe,
     useLayoutEffect: function () {},
     useCallback: function (e, t) {
      return Oe(function () {
       return e;
      }, t);
     },
     useImperativeHandle: Fe,
     useEffect: Fe,
     useDebugValue: Fe,
     useDeferredValue: function (e) {
      return (Te(), e);
     },
     useTransition: function () {
      return (Te(), [!1, Ie]);
     },
     useId: function () {
      var e = be.treeContext,
       t = e.overflow;
      e = ((e = e.id) & ~(1 << (32 - he(e) - 1))).toString(32) + t;
      var n = Me;
      if (null === n) throw Error(a(404));
      return ((t = we++), (e = ':' + n.idPrefix + 'R' + e), 0 < t && (e += 'H' + t.toString(32)), e + ':');
     },
     useMutableSource: function (e, t) {
      return (Te(), t(e._source));
     },
     useSyncExternalStore: function (e, t, n) {
      if (void 0 === n) throw Error(a(407));
      return n();
     },
    },
    Me = null,
    qe = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
   function Be(e) {
    return (console.error(e), null);
   }
   function Ve() {}
   function He(e, t, n, r, a, i, s, o) {
    (e.allPendingTasks++, null === n ? e.pendingRootTasks++ : n.pendingTasks++);
    var l = {
     node: t,
     ping: function () {
      var t = e.pingedTasks;
      (t.push(l), 1 === t.length && nt(e));
     },
     blockedBoundary: n,
     blockedSegment: r,
     abortSet: a,
     legacyContext: i,
     context: s,
     treeContext: o,
    };
    return (a.add(l), l);
   }
   function $e(e, t, n, r, a, i) {
    return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: a, textEmbedded: i };
   }
   function Ue(e, t) {
    if (null != (e = e.onError(t)) && 'string' != typeof e) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
   }
   function ze(e, t) {
    var n = e.onShellError;
    (n(t), (n = e.onFatalError)(t), null !== e.destination ? ((e.status = 2), e.destination.destroy(t)) : ((e.status = 1), (e.fatalError = t)));
   }
   function je(e, t, n, r, a) {
    for (ve = {}, be = t, we = 0, e = n(r, a); ye; ) ((ye = !1), (we = 0), (Ee += 1), (_e = null), (e = n(r, a)));
    return (Ae(), e);
   }
   function We(e, t, n, r) {
    var i = n.render(),
     s = r.childContextTypes;
    if (null != s) {
     var o = t.legacyContext;
     if ('function' != typeof n.getChildContext) r = o;
     else {
      for (var l in (n = n.getChildContext())) if (!(l in s)) throw Error(a(108, Q(r) || 'Unknown', l));
      r = F({}, o, n);
     }
     ((t.legacyContext = r), Ke(e, t, i), (t.legacyContext = o));
    } else Ke(e, t, i);
   }
   function Xe(e, t) {
    if (e && e.defaultProps) {
     for (var n in ((t = F({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
     return t;
    }
    return t;
   }
   function Ge(e, t, n, r, i) {
    if ('function' == typeof n)
     if (n.prototype && n.prototype.isReactComponent) {
      i = te(n, t.legacyContext);
      var s = n.contextType;
      (ue((s = new n(r, 'object' == typeof s && null !== s ? s._currentValue2 : i)), n, r, i), We(e, t, s, n));
     } else {
      i = je(e, t, n, r, (s = te(n, t.legacyContext)));
      var o = 0 !== we;
      if ('object' == typeof i && null !== i && 'function' == typeof i.render && void 0 === i.$$typeof) (ue(i, n, r, s), We(e, t, i, n));
      else if (o) {
       ((r = t.treeContext), (t.treeContext = de(r, 1, 0)));
       try {
        Ke(e, t, i);
       } finally {
        t.treeContext = r;
       }
      } else Ke(e, t, i);
     }
    else {
     if ('string' != typeof n) {
      switch (n) {
       case Y:
       case K:
       case B:
       case V:
       case q:
       case j:
        return void Ke(e, t, r.children);
       case G:
        throw Error(a(343));
       case z:
        e: {
         ((n = t.blockedBoundary), (i = t.blockedSegment), (s = r.fallback), (r = r.children));
         var l = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: (o = new Set()), errorDigest: null },
          c = $e(0, i.chunks.length, l, i.formatContext, !1, !1);
         (i.children.push(c), (i.lastPushedText = !1));
         var u = $e(0, 0, null, i.formatContext, !1, !1);
         ((u.parentFlushed = !0), (t.blockedBoundary = l), (t.blockedSegment = u));
         try {
          if ((Ze(e, t, r), e.responseState.generateStaticMarkup || (u.lastPushedText && u.textEmbedded && u.chunks.push('\x3c!-- --\x3e')), (u.status = 1), et(l, u), 0 === l.pendingTasks)) break e;
         } catch (p) {
          ((u.status = 4), (l.forceClientRender = !0), (l.errorDigest = Ue(e, p)));
         } finally {
          ((t.blockedBoundary = n), (t.blockedSegment = i));
         }
         ((t = He(e, s, n, c, o, t.legacyContext, t.context, t.treeContext)), e.pingedTasks.push(t));
        }
        return;
      }
      if ('object' == typeof n && null !== n)
       switch (n.$$typeof) {
        case U:
         if (((r = je(e, t, n.render, r, i)), 0 !== we)) {
          ((n = t.treeContext), (t.treeContext = de(n, 1, 0)));
          try {
           Ke(e, t, r);
          } finally {
           t.treeContext = n;
          }
         } else Ke(e, t, r);
         return;
        case W:
         return void Ge(e, t, (n = n.type), (r = Xe(n, r)), i);
        case H:
         if (((i = r.children), (n = n._context), (r = r.value), (s = n._currentValue2), (n._currentValue2 = r), (ne = r = { parent: (o = ne), depth: null === o ? 0 : o.depth + 1, context: n, parentValue: s, value: r }), (t.context = r), Ke(e, t, i), null === (e = ne))) throw Error(a(403));
         return ((r = e.parentValue), (e.context._currentValue2 = r === Z ? e.context._defaultValue : r), (e = ne = e.parent), void (t.context = e));
        case $:
         return void Ke(e, t, (r = (r = r.children)(n._currentValue2)));
        case X:
         return void Ge(e, t, (n = (i = n._init)(n._payload)), (r = Xe(n, r)), void 0);
       }
      throw Error(a(130, null == n ? n : typeof n, ''));
     }
     switch (
      ((s = L((i = t.blockedSegment).chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = (function (e, t, n) {
       switch (t) {
        case 'select':
         return k(1, null != n.value ? n.value : n.defaultValue);
        case 'svg':
         return k(2, null);
        case 'math':
         return k(3, null);
        case 'foreignObject':
         return k(1, null);
        case 'table':
         return k(4, null);
        case 'thead':
        case 'tbody':
        case 'tfoot':
         return k(5, null);
        case 'colgroup':
         return k(7, null);
        case 'tr':
         return k(6, null);
       }
       return 4 <= e.insertionMode || 0 === e.insertionMode ? k(1, null) : e;
      })(o, n, r)),
      Ze(e, t, s),
      (i.formatContext = o),
      n)
     ) {
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'img':
      case 'input':
      case 'keygen':
      case 'link':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
       break;
      default:
       i.chunks.push('</', n, '>');
     }
     i.lastPushedText = !1;
    }
   }
   function Ke(e, t, n) {
    if (((t.node = n), 'object' == typeof n && null !== n)) {
     switch (n.$$typeof) {
      case D:
       return void Ge(e, t, n.type, n.props, n.ref);
      case M:
       throw Error(a(257));
      case X:
       var r = n._init;
       return void Ke(e, t, (n = r(n._payload)));
     }
     if (_(n)) return void Ye(e, t, n);
     if ((null === n || 'object' != typeof n ? (r = null) : (r = 'function' == typeof (r = (J && n[J]) || n['@@iterator']) ? r : null), r && (r = r.call(n)))) {
      if (!(n = r.next()).done) {
       var i = [];
       do {
        (i.push(n.value), (n = r.next()));
       } while (!n.done);
       Ye(e, t, i);
      }
      return;
     }
     throw ((e = Object.prototype.toString.call(n)), Error(a(31, '[object Object]' === e ? 'object with keys {' + Object.keys(n).join(', ') + '}' : e)));
    }
    'string' == typeof n ? ((r = t.blockedSegment).lastPushedText = I(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : 'number' == typeof n && ((r = t.blockedSegment).lastPushedText = I(t.blockedSegment.chunks, '' + n, e.responseState, r.lastPushedText));
   }
   function Ye(e, t, n) {
    for (var r = n.length, a = 0; a < r; a++) {
     var i = t.treeContext;
     t.treeContext = de(i, r, a);
     try {
      Ze(e, t, n[a]);
     } finally {
      t.treeContext = i;
     }
    }
   }
   function Ze(e, t, n) {
    var r = t.blockedSegment.formatContext,
     a = t.legacyContext,
     i = t.context;
    try {
     return Ke(e, t, n);
    } catch (l) {
     if ((Ae(), 'object' != typeof l || null === l || 'function' != typeof l.then)) throw ((t.blockedSegment.formatContext = r), (t.legacyContext = a), (t.context = i), le(i), l);
     n = l;
     var s = t.blockedSegment,
      o = $e(0, s.chunks.length, null, s.formatContext, s.lastPushedText, !0);
     (s.children.push(o), (s.lastPushedText = !1), (e = He(e, t.node, t.blockedBoundary, o, t.abortSet, t.legacyContext, t.context, t.treeContext).ping), n.then(e, e), (t.blockedSegment.formatContext = r), (t.legacyContext = a), (t.context = i), le(i));
    }
   }
   function Je(e) {
    var t = e.blockedBoundary;
    (((e = e.blockedSegment).status = 3), tt(this, t, e));
   }
   function Qe(e, t, n) {
    var r = e.blockedBoundary;
    ((e.blockedSegment.status = 3),
     null === r
      ? (t.allPendingTasks--, 2 !== t.status && ((t.status = 2), null !== t.destination && t.destination.push(null)))
      : (r.pendingTasks--,
        r.forceClientRender || ((r.forceClientRender = !0), (e = void 0 === n ? Error(a(432)) : n), (r.errorDigest = t.onError(e)), r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
         return Qe(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        0 === t.allPendingTasks && (r = t.onAllReady)()));
   }
   function et(e, t) {
    if (0 === t.chunks.length && 1 === t.children.length && null === t.children[0].boundary) {
     var n = t.children[0];
     ((n.id = t.id), (n.parentFlushed = !0), 1 === n.status && et(e, n));
    } else e.completedSegments.push(t);
   }
   function tt(e, t, n) {
    if (null === t) {
     if (n.parentFlushed) {
      if (null !== e.completedRootSegment) throw Error(a(389));
      e.completedRootSegment = n;
     }
     (e.pendingRootTasks--, 0 === e.pendingRootTasks && ((e.onShellError = Ve), (t = e.onShellReady)()));
    } else (t.pendingTasks--, t.forceClientRender || (0 === t.pendingTasks ? (n.parentFlushed && 1 === n.status && et(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Je, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && 1 === n.status && (et(t, n), 1 === t.completedSegments.length && t.parentFlushed && e.partialBoundaries.push(t))));
    (e.allPendingTasks--, 0 === e.allPendingTasks && (e = e.onAllReady)());
   }
   function nt(e) {
    if (2 !== e.status) {
     var t = ne,
      n = qe.current;
     qe.current = De;
     var r = Me;
     Me = e.responseState;
     try {
      var a,
       i = e.pingedTasks;
      for (a = 0; a < i.length; a++) {
       var s = i[a],
        o = e,
        l = s.blockedSegment;
       if (0 === l.status) {
        le(s.context);
        try {
         (Ke(o, s, s.node), o.responseState.generateStaticMarkup || (l.lastPushedText && l.textEmbedded && l.chunks.push('\x3c!-- --\x3e')), s.abortSet.delete(s), (l.status = 1), tt(o, s.blockedBoundary, l));
        } catch (h) {
         if ((Ae(), 'object' == typeof h && null !== h && 'function' == typeof h.then)) {
          var c = s.ping;
          h.then(c, c);
         } else {
          (s.abortSet.delete(s), (l.status = 4));
          var u = s.blockedBoundary,
           p = h,
           d = Ue(o, p);
          if ((null === u ? ze(o, p) : (u.pendingTasks--, u.forceClientRender || ((u.forceClientRender = !0), (u.errorDigest = d), u.parentFlushed && o.clientRenderedBoundaries.push(u))), o.allPendingTasks--, 0 === o.allPendingTasks)) (0, o.onAllReady)();
         }
        }
       }
      }
      (i.splice(0, a), null !== e.destination && lt(e, e.destination));
     } catch (h) {
      (Ue(e, h), ze(e, h));
     } finally {
      ((Me = r), (qe.current = n), n === De && le(t));
     }
    }
   }
   function rt(e, t, n) {
    switch (((n.parentFlushed = !0), n.status)) {
     case 0:
      var r = (n.id = e.nextSegmentId++);
      return ((n.lastPushedText = !1), (n.textEmbedded = !1), (e = e.responseState), t.push('<template id="'), t.push(e.placeholderPrefix), (e = r.toString(16)), t.push(e), t.push('"></template>'));
     case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var s = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
       for (i = n[o]; s < i.index; s++) t.push(r[s]);
       i = at(e, t, i);
      }
      for (; s < r.length - 1; s++) t.push(r[s]);
      return (s < r.length && (i = t.push(r[s])), i);
     default:
      throw Error(a(390));
    }
   }
   function at(e, t, n) {
    var r = n.boundary;
    if (null === r) return rt(e, t, n);
    if (((r.parentFlushed = !0), r.forceClientRender)) return (e.responseState.generateStaticMarkup || ((r = r.errorDigest), t.push('\x3c!--$!--\x3e'), t.push('<template'), r && (t.push(' data-dgst="'), (r = v(r)), t.push(r), t.push('"')), t.push('></template>')), rt(e, t, n), (e = !!e.responseState.generateStaticMarkup || t.push('\x3c!--/$--\x3e')));
    if (0 < r.pendingTasks) {
     ((r.rootSegmentID = e.nextSegmentId++), 0 < r.completedSegments.length && e.partialBoundaries.push(r));
     var i = e.responseState,
      s = i.nextSuspenseID++;
     return ((i = i.boundaryPrefix + s.toString(16)), (r = r.id = i), P(t, e.responseState, r), rt(e, t, n), t.push('\x3c!--/$--\x3e'));
    }
    if (r.byteSize > e.progressiveChunkSize) return ((r.rootSegmentID = e.nextSegmentId++), e.completedBoundaries.push(r), P(t, e.responseState, r.id), rt(e, t, n), t.push('\x3c!--/$--\x3e'));
    if ((e.responseState.generateStaticMarkup || t.push('\x3c!--$--\x3e'), 1 !== (n = r.completedSegments).length)) throw Error(a(391));
    return (at(e, t, n[0]), (e = !!e.responseState.generateStaticMarkup || t.push('\x3c!--/$--\x3e')));
   }
   function it(e, t, n) {
    return (
     (function (e, t, n, r) {
      switch (n.insertionMode) {
       case 0:
       case 1:
        return (e.push('<div hidden id="'), e.push(t.segmentPrefix), (t = r.toString(16)), e.push(t), e.push('">'));
       case 2:
        return (e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), (t = r.toString(16)), e.push(t), e.push('">'));
       case 3:
        return (e.push('<math aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), (t = r.toString(16)), e.push(t), e.push('">'));
       case 4:
        return (e.push('<table hidden id="'), e.push(t.segmentPrefix), (t = r.toString(16)), e.push(t), e.push('">'));
       case 5:
        return (e.push('<table hidden><tbody id="'), e.push(t.segmentPrefix), (t = r.toString(16)), e.push(t), e.push('">'));
       case 6:
        return (e.push('<table hidden><tr id="'), e.push(t.segmentPrefix), (t = r.toString(16)), e.push(t), e.push('">'));
       case 7:
        return (e.push('<table hidden><colgroup id="'), e.push(t.segmentPrefix), (t = r.toString(16)), e.push(t), e.push('">'));
       default:
        throw Error(a(397));
      }
     })(t, e.responseState, n.formatContext, n.id),
     at(e, t, n),
     (function (e, t) {
      switch (t.insertionMode) {
       case 0:
       case 1:
        return e.push('</div>');
       case 2:
        return e.push('</svg>');
       case 3:
        return e.push('</math>');
       case 4:
        return e.push('</table>');
       case 5:
        return e.push('</tbody></table>');
       case 6:
        return e.push('</tr></table>');
       case 7:
        return e.push('</colgroup></table>');
       default:
        throw Error(a(397));
      }
     })(t, n.formatContext)
    );
   }
   function st(e, t, n) {
    for (var r = n.completedSegments, i = 0; i < r.length; i++) ot(e, t, n, r[i]);
    if (((r.length = 0), (e = e.responseState), (r = n.id), (n = n.rootSegmentID), t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push('$RC("') : ((e.sentCompleteBoundaryFunction = !0), t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), null === r)) throw Error(a(395));
    return ((n = n.toString(16)), t.push(r), t.push('","'), t.push(e.segmentPrefix), t.push(n), t.push('")<\/script>'));
   }
   function ot(e, t, n, r) {
    if (2 === r.status) return !0;
    var i = r.id;
    if (-1 === i) {
     if (-1 === (r.id = n.rootSegmentID)) throw Error(a(392));
     return it(e, t, r);
    }
    return (it(e, t, r), (e = e.responseState), t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push('$RS("') : ((e.sentCompleteSegmentFunction = !0), t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), t.push(e.segmentPrefix), (i = i.toString(16)), t.push(i), t.push('","'), t.push(e.placeholderPrefix), t.push(i), t.push('")<\/script>'));
   }
   function lt(e, t) {
    try {
     var n = e.completedRootSegment;
     if (null !== n && 0 === e.pendingRootTasks) {
      (at(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n]);
     }
     var i,
      s = e.clientRenderedBoundaries;
     for (i = 0; i < s.length; i++) {
      var o = s[i];
      r = t;
      var l = e.responseState,
       c = o.id,
       u = o.errorDigest,
       p = o.errorMessage,
       d = o.errorComponentStack;
      if ((r.push(l.startInlineScript), l.sentClientRenderFunction ? r.push('$RX("') : ((l.sentClientRenderFunction = !0), r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), null === c)) throw Error(a(395));
      if ((r.push(c), r.push('"'), u || p || d)) {
       r.push(',');
       var h = R(u || '');
       r.push(h);
      }
      if (p || d) {
       r.push(',');
       var f = R(p || '');
       r.push(f);
      }
      if (d) {
       r.push(',');
       var m = R(d);
       r.push(m);
      }
      if (!r.push(')<\/script>')) return ((e.destination = null), i++, void s.splice(0, i));
     }
     s.splice(0, i);
     var g = e.completedBoundaries;
     for (i = 0; i < g.length; i++) if (!st(e, t, g[i])) return ((e.destination = null), i++, void g.splice(0, i));
     g.splice(0, i);
     var v = e.partialBoundaries;
     for (i = 0; i < v.length; i++) {
      var b = v[i];
      e: {
       ((s = e), (o = t));
       var S = b.completedSegments;
       for (l = 0; l < S.length; l++)
        if (!ot(s, o, b, S[l])) {
         (l++, S.splice(0, l));
         var _ = !1;
         break e;
        }
       (S.splice(0, l), (_ = !0));
      }
      if (!_) return ((e.destination = null), i++, void v.splice(0, i));
     }
     v.splice(0, i);
     var k = e.completedBoundaries;
     for (i = 0; i < k.length; i++) if (!st(e, t, k[i])) return ((e.destination = null), i++, void k.splice(0, i));
     k.splice(0, i);
    } finally {
     0 === e.allPendingTasks && 0 === e.pingedTasks.length && 0 === e.clientRenderedBoundaries.length && 0 === e.completedBoundaries.length && t.push(null);
    }
   }
   function ct(e, t) {
    try {
     var n = e.abortableTasks;
     (n.forEach(function (n) {
      return Qe(n, e, t);
     }),
      n.clear(),
      null !== e.destination && lt(e, e.destination));
    } catch (r) {
     (Ue(e, r), ze(e, r));
    }
   }
   function ut() {}
   function pt(e, t, n, r) {
    var i = !1,
     s = null,
     o = '',
     l = {
      push: function (e) {
       return (null !== e && (o += e), !0);
      },
      destroy: function (e) {
       ((i = !0), (s = e));
      },
     },
     c = !1;
    if (
     ((e = (function (e, t, n, r, a, i, s, o, l) {
      var c = [],
       u = new Set();
      return (((n = $e((t = { destination: null, responseState: t, progressiveChunkSize: void 0 === r ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: u, pingedTasks: c, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: void 0 === a ? Be : a, onAllReady: void 0 === i ? Ve : i, onShellReady: void 0 === s ? Ve : s, onShellError: void 0 === o ? Ve : o, onFatalError: void 0 === l ? Ve : l }), 0, null, n, !1, !1)).parentFlushed = !0), (e = He(t, e, null, n, u, ee, null, pe)), c.push(e), t);
     })(
      e,
      (function (e, t) {
       return { bootstrapChunks: [], startInlineScript: '<script>', placeholderPrefix: (t = void 0 === t ? '' : t) + 'P:', segmentPrefix: t + 'S:', boundaryPrefix: t + 'B:', idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
      })(n, t ? t.identifierPrefix : void 0),
      { insertionMode: 1, selectedValue: null },
      1 / 0,
      ut,
      void 0,
      function () {
       c = !0;
      },
      void 0,
      void 0,
     )),
     nt(e),
     ct(e, r),
     1 === e.status)
    )
     ((e.status = 2), l.destroy(e.fatalError));
    else if (2 !== e.status && null === e.destination) {
     e.destination = l;
     try {
      lt(e, l);
     } catch (u) {
      (Ue(e, u), ze(e, u));
     }
    }
    if (i) throw s;
    if (!c) throw Error(a(426));
    return o;
   }
   ((t.renderToNodeStream = function () {
    throw Error(a(207));
   }),
    (t.renderToStaticMarkup = function (e, t) {
     return pt(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }),
    (t.renderToStaticNodeStream = function () {
     throw Error(a(208));
    }),
    (t.renderToString = function (e, t) {
     return pt(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }),
    (t.version = '18.3.1'));
  },
  69303(e, t, n) {
   'use strict';
   n.d(t, { Ay: () => l });
   var r = Object.defineProperty,
    a = (e) => {
     throw TypeError(e);
    },
    i = (e, t) => {
     for (var n in t) r(e, n, { get: t[n], enumerable: !0 });
    },
    s = (e, t, n) => ((e, t, n) => (t in e ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)))(e, 'symbol' != typeof t ? t + '' : t, n),
    o = (e, t, n) => (
     ((e, t, n) => {
      t.has(e) || a('Cannot ' + n);
     })(e, t, 'read from private field'),
     n ? n.call(e) : t.get(e)
    ),
    l = {};
   i(l, { languages: () => ea, options: () => ra, parsers: () => aa, printers: () => Da });
   var c =
     (e, t) =>
     (n, r, ...a) =>
      1 | n && null == r ? void 0 : (t.call(r) ?? r[e]).apply(r, a),
    u =
     String.prototype.replaceAll ??
     function (e, t) {
      return e.global ? this.replace(e, t) : this.split(e).join(t);
     },
    p = c('replaceAll', function () {
     if ('string' == typeof this) return u;
    });
   function d(e) {
    return this[e < 0 ? this.length + e : e];
   }
   var h = c('at', function () {
     if (Array.isArray(this) || 'string' == typeof this) return d;
    }),
    f = () => {},
    m = 'string',
    g = 'array',
    v = 'cursor',
    b = 'indent',
    S = 'align',
    _ = 'trim',
    k = 'group',
    y = 'fill',
    w = 'if-break',
    C = 'indent-if-break',
    E = 'line-suffix',
    T = 'line-suffix-boundary',
    x = 'line',
    N = 'label',
    A = 'break-parent',
    L = new Set([v, b, S, _, k, y, w, C, E, T, x, N, A]);
   var P = function (e) {
    if ('string' == typeof e) return m;
    if (Array.isArray(e)) return g;
    if (!e) return;
    let { type: t } = e;
    return L.has(t) ? t : void 0;
   };
   function O(e) {
    let t = null === e ? 'null' : typeof e;
    if ('string' !== t && 'object' !== t) return `Unexpected doc '${t}', \nExpected it to be 'string' or 'object'.`;
    if (P(e)) throw new Error('doc is valid.');
    let n = Object.prototype.toString.call(e);
    if ('[object Object]' !== n) return `Unexpected doc '${n}'.`;
    let r = ((e) => new Intl.ListFormat('en-US', { type: 'disjunction' }).format(e))([...L].map((e) => `'${e}'`));
    return `Unexpected doc.type '${e.type}'.\nExpected it to be ${r}.`;
   }
   var R = class extends Error {
    name = 'InvalidDocError';
    constructor(e) {
     (super(O(e)), (this.doc = e));
    }
   };
   function I(e, t) {
    if ('string' == typeof e) return t(e);
    let n = new Map();
    return r(e);
    function r(e) {
     if (n.has(e)) return n.get(e);
     let a = (function (e) {
      switch (P(e)) {
       case g:
        return t(e.map(r));
       case y:
        return t({ ...e, parts: e.parts.map(r) });
       case w:
        return t({ ...e, breakContents: r(e.breakContents), flatContents: r(e.flatContents) });
       case k: {
        let { expandedStates: n, contents: a } = e;
        return (n ? ((n = n.map(r)), (a = n[0])) : (a = r(a)), t({ ...e, contents: a, expandedStates: n }));
       }
       case S:
       case b:
       case C:
       case N:
       case E:
        return t({ ...e, contents: r(e.contents) });
       case m:
       case v:
       case _:
       case T:
       case x:
       case A:
        return t(e);
       default:
        throw new R(e);
      }
     })(e);
     return (n.set(e, a), a);
    }
   }
   function F(e, t = Y) {
    return I(e, (e) => ('string' == typeof e ? W(t, e.split('\n')) : e));
   }
   var D = f,
    M = f,
    q = f,
    B = f;
   function V(e) {
    return (D(e), { type: b, contents: e });
   }
   function H(e) {
    return (function (e, t) {
     return (B(e), D(t), { type: S, contents: t, n: e });
    })(Number.NEGATIVE_INFINITY, e);
   }
   var $ = { type: A };
   function U(e) {
    return (q(e), { type: y, parts: e });
   }
   function z(e, t = {}) {
    return (D(e), M(t.expandedStates, !0), { type: k, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates });
   }
   function j(e, t = '', n = {}) {
    return (D(e), '' !== t && D(t), { type: w, breakContents: e, flatContents: t, groupId: n.groupId });
   }
   function W(e, t) {
    (D(e), M(t));
    let n = [];
    for (let r = 0; r < t.length; r++) (0 !== r && n.push(e), n.push(t[r]));
    return n;
   }
   var X = { type: x },
    G = { type: x, soft: !0 },
    K = [{ type: x, hard: !0 }, $],
    Y = [{ type: x, hard: !0, literal: !0 }, $],
    Z = Object.freeze({ character: "'", codePoint: 39 }),
    J = Object.freeze({ character: '"', codePoint: 34 }),
    Q = Object.freeze({ preferred: Z, alternate: J }),
    ee = Object.freeze({ preferred: J, alternate: Z });
   var te = function (e, t) {
    let { preferred: n, alternate: r } = !0 === t || "'" === t ? Q : ee,
     { length: a } = e,
     i = 0,
     s = 0;
    for (let o = 0; o < a; o++) {
     let t = e.charCodeAt(o);
     t === n.codePoint ? i++ : t === r.codePoint && s++;
    }
    return (i > s ? r : n).character;
   };
   var ne = class {
     #e;
     constructor(e) {
      this.#e = new Set(e);
     }
     getLeadingWhitespaceCount(e) {
      let t = this.#e,
       n = 0;
      for (let r = 0; r < e.length && t.has(e.charAt(r)); r++) n++;
      return n;
     }
     getTrailingWhitespaceCount(e) {
      let t = this.#e,
       n = 0;
      for (let r = e.length - 1; r >= 0 && t.has(e.charAt(r)); r--) n++;
      return n;
     }
     getLeadingWhitespace(e) {
      let t = this.getLeadingWhitespaceCount(e);
      return e.slice(0, t);
     }
     getTrailingWhitespace(e) {
      let t = this.getTrailingWhitespaceCount(e);
      return e.slice(e.length - t);
     }
     hasLeadingWhitespace(e) {
      return this.#e.has(e.charAt(0));
     }
     hasTrailingWhitespace(e) {
      return this.#e.has(h(0, e, -1));
     }
     trimStart(e) {
      let t = this.getLeadingWhitespaceCount(e);
      return e.slice(t);
     }
     trimEnd(e) {
      let t = this.getTrailingWhitespaceCount(e);
      return e.slice(0, e.length - t);
     }
     trim(e) {
      return this.trimEnd(this.trimStart(e));
     }
     split(e, t = !1) {
      let n = `[${(function (e) {
        if ('string' != typeof e) throw new TypeError('Expected a string');
        return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
       })([...this.#e].join(''))}]+`,
       r = new RegExp(t ? `(${n})` : n, 'u');
      return e.split(r);
     }
     hasWhitespaceCharacter(e) {
      let t = this.#e;
      return Array.prototype.some.call(e, (e) => t.has(e));
     }
     hasNonWhitespaceCharacter(e) {
      let t = this.#e;
      return Array.prototype.some.call(e, (e) => !t.has(e));
     }
     isWhitespaceOnly(e) {
      let t = this.#e;
      return Array.prototype.every.call(e, (e) => t.has(e));
     }
     #t(e) {
      let t = Number.POSITIVE_INFINITY;
      for (let n of e.split('\n')) {
       if (0 === n.length) continue;
       let e = this.getLeadingWhitespaceCount(n);
       if (0 === e) return 0;
       n.length !== e && e < t && (t = e);
      }
      return t === Number.POSITIVE_INFINITY ? 0 : t;
     }
     dedentString(e) {
      let t = this.#t(e);
      return 0 === t
       ? e
       : e
          .split('\n')
          .map((e) => e.slice(t))
          .join('\n');
     }
    },
    re = new ne(['\t', '\n', '\f', '\r', ' ']),
    ae = class extends Error {
     name = 'UnexpectedNodeError';
     constructor(e, t, n = 'type') {
      (super(`Unexpected ${t} node ${n}: ${JSON.stringify(e[n])}.`), (this.node = e));
     }
    },
    ie = new Set(['sourceSpan', 'startSourceSpan', 'endSourceSpan', 'nameSpan', 'valueSpan', 'keySpan', 'tagDefinition', 'tokens', 'valueTokens', 'switchValueSourceSpan', 'expSourceSpan', 'valueSourceSpan']),
    se = new Set(['if', 'else if', 'for', 'switch', 'case']);
   function oe(e, t, n) {
    if ('text' === e.kind || 'comment' === e.kind) return null;
    if (('yaml' === e.kind && delete t.value, 'attribute' === e.kind)) {
     let { fullName: r, value: a } = e;
     'style' === r || 'class' === r || ('srcset' === r && ('img' === n.fullName || 'source' === n.fullName)) || ('allow' === r && 'iframe' === n.fullName) || r.startsWith('on') || r.startsWith('@') || r.startsWith(':') || r.startsWith('.') || r.startsWith('#') || r.startsWith('v-') || ('vars' === r && 'style' === n.fullName) || (('setup' === r || 'generic' === r) && 'script' === n.fullName) || 'slot-scope' === r || r.startsWith('(') || r.startsWith('[') || r.startsWith('*') || r.startsWith('bind') || r.startsWith('i18n') || r.startsWith('on-') || r.startsWith('ng-') || a?.includes('{{') ? delete t.value : a && (t.value = p(0, a, /'|&quot;|&apos;/gu, '"'));
    }
    if (('docType' === e.kind && (t.value = p(0, e.value.toLowerCase(), /\s+/gu, ' ')), 'angularControlFlowBlock' === e.kind && e.parameters?.children)) for (let r of t.parameters.children) se.has(e.name) ? delete r.expression : (r.expression = r.expression.trim());
    ('angularIcuExpression' === e.kind && (t.switchValue = e.switchValue.trim()), 'angularLetDeclarationInitializer' === e.kind && delete t.value, 'element' === e.kind && e.isVoid && !e.isSelfClosing && (t.isSelfClosing = !0));
   }
   oe.ignoredProperties = ie;
   var le = oe;
   function ce(e, t = !0) {
    return [V([G, e]), t ? G : ''];
   }
   function ue(e, t) {
    let n = 'NGRoot' === e.type ? ('NGMicrosyntax' === e.node.type && 1 === e.node.body.length && 'NGMicrosyntaxExpression' === e.node.body[0].type ? e.node.body[0].expression : e.node) : 'JsExpressionRoot' === e.type ? e.node : e;
    return n && ('ObjectExpression' === n.type || 'ArrayExpression' === n.type || (('__vue_expression' === t.parser || '__vue_ts_expression' === t.parser || '__ng_binding' === t.parser || '__ng_directive' === t.parser) && ('TemplateLiteral' === n.type || 'StringLiteral' === n.type)));
   }
   async function pe(e, t, n, r) {
    n = { __isInHtmlAttribute: !0, __embeddedInHtml: !0, ...n };
    let a = !0;
    r &&
     (n.__onHtmlBindingRoot = (e, t) => {
      a = r(e, t);
     });
    let i = await t(e, n, t);
    return a ? z(i) : ce(i);
   }
   var de = function (e, t, n, r) {
     let { node: a } = n,
      i = r.originalText.slice(a.sourceSpan.start.offset, a.sourceSpan.end.offset);
     return /^\s*$/u.test(i) ? '' : pe(i, e, { parser: '__ng_directive', __isInHtmlAttribute: !1 }, ue);
    },
    he =
     Array.prototype.toReversed ??
     function () {
      return [...this].reverse();
     },
    fe = c('toReversed', function () {
     if (Array.isArray(this)) return he;
    });
   var me = (function () {
    let e = globalThis,
     t = e.Deno?.build?.os;
    return 'string' == typeof t ? 'windows' === t : (e.navigator?.platform?.startsWith('Win') ?? e.process?.platform?.startsWith('win') ?? !1);
   })();
   function ge(e) {
    if ('file:' !== (e = e instanceof URL ? e : new URL(e)).protocol) throw new TypeError(`URL must be a file URL: received "${e.protocol}"`);
    return e;
   }
   function ve(e) {
    return me
     ? (function (e) {
        e = ge(e);
        let t = decodeURIComponent(e.pathname.replace(/\//g, '\\').replace(/%(?![0-9A-Fa-f]{2})/g, '%25')).replace(/^\\*([A-Za-z]:)(\\|$)/, '$1\\');
        return ('' !== e.hostname && (t = `\\\\${e.hostname}${t}`), t);
       })(e)
     : (function (e) {
        return ((e = ge(e)), decodeURIComponent(e.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, '%25')));
       })(e);
   }
   var be = function (e) {
    return Array.isArray(e) && e.length > 0;
   };
   function Se(e, t) {
    if (!t) return;
    let n = ((e) => String(e).split(/[/\\]/u).pop())(t).toLowerCase();
    return e.find(({ filenames: e }) => e?.some((e) => e.toLowerCase() === n)) ?? e.find(({ extensions: e }) => e?.some((e) => n.endsWith(e)));
   }
   function _e(e, t) {
    if (t) {
     if (((e) => String(e).startsWith('file:'))(t))
      try {
       t = ve(t);
      } catch {
       return;
      }
     if ('string' == typeof t) return e.find(({ isSupported: e }) => e?.({ filepath: t }));
    }
   }
   var ke = function (e, t) {
     let n = fe(0, e.plugins).flatMap((e) => e.languages ?? []);
     return (
      (function (e, t) {
       if (t) return e.find(({ name: e }) => e.toLowerCase() === t) ?? e.find(({ aliases: e }) => e?.includes(t)) ?? e.find(({ extensions: e }) => e?.includes(`.${t}`));
      })(n, t.language) ??
      Se(n, t.physicalFile) ??
      Se(n, t.file) ??
      _e(n, t.physicalFile) ??
      _e(n, t.file) ??
      undefined
     )?.parsers[0];
    },
    ye = Symbol.for('PRETTIER_IS_FRONT_MATTER');
   var we = function (e) {
    return !!e?.[ye];
   };
   var Ce = function (e) {
     let t = (function (e) {
      let t = e.slice(0, 3);
      if ('---' !== t && '+++' !== t) return;
      let n = e.indexOf('\n', 3);
      if (-1 === n) return;
      let r = e.slice(3, n).trim(),
       a = e.indexOf(`\n${t}`, n),
       i = r;
      if ((i || (i = '+++' === t ? 'toml' : 'yaml'), -1 === a && '---' === t && 'yaml' === i && (a = e.indexOf('\n...', n)), -1 === a)) return;
      let s = a + 1 + 3,
       o = e.charAt(s + 1);
      if (!/\s?/u.test(o)) return;
      let l,
       c = e.slice(0, s);
      return {
       language: i,
       explicitLanguage: r || null,
       value: e.slice(n + 1, a),
       startDelimiter: t,
       endDelimiter: c.slice(-3),
       raw: c,
       start: { line: 1, column: 0, index: 0 },
       end: {
        index: c.length,
        get line() {
         return (l ?? (l = c.split('\n')), l.length);
        },
        get column() {
         return (l ?? (l = c.split('\n')), h(0, l, -1).length);
        },
       },
       [ye]: !0,
      };
     })(e);
     return t
      ? {
         frontMatter: t,
         get content() {
          let { raw: n } = t;
          return p(0, n, /[^\n]/gu, ' ') + e.slice(n.length);
         },
        }
      : { content: e };
    },
    Ee = { area: 'none', base: 'none', basefont: 'none', datalist: 'none', head: 'none', link: 'none', meta: 'none', noembed: 'none', noframes: 'none', param: 'block', rp: 'none', script: 'block', style: 'none', template: 'inline', title: 'none', html: 'block', body: 'block', address: 'block', blockquote: 'block', center: 'block', dialog: 'block', div: 'block', figure: 'block', figcaption: 'block', footer: 'block', form: 'block', header: 'block', hr: 'block', legend: 'block', listing: 'block', main: 'block', p: 'block', plaintext: 'block', pre: 'block', search: 'block', xmp: 'block', slot: 'contents', ruby: 'ruby', rt: 'ruby-text', article: 'block', aside: 'block', h1: 'block', h2: 'block', h3: 'block', h4: 'block', h5: 'block', h6: 'block', hgroup: 'block', nav: 'block', section: 'block', dir: 'block', dd: 'block', dl: 'block', dt: 'block', menu: 'block', ol: 'block', ul: 'block', li: 'list-item', table: 'table', caption: 'table-caption', colgroup: 'table-column-group', col: 'table-column', thead: 'table-header-group', tbody: 'table-row-group', tfoot: 'table-footer-group', tr: 'table-row', td: 'table-cell', th: 'table-cell', input: 'inline-block', button: 'inline-block', fieldset: 'block', details: 'block', summary: 'block', marquee: 'inline-block', select: 'inline-block', source: 'block', track: 'block', meter: 'inline-block', progress: 'inline-block', object: 'inline-block', video: 'inline-block', audio: 'inline-block', option: 'block', optgroup: 'block' },
    Te = { listing: 'pre', plaintext: 'pre', pre: 'pre', xmp: 'pre', nobr: 'nowrap', table: 'initial', textarea: 'pre-wrap' };
   var xe = function (e) {
     return 'element' === e.kind && !e.hasExplicitNamespace && !['html', 'svg'].includes(e.namespace);
    },
    Ne = (e) => ((e) => p(0, e, /^[\t\f\r ]*\n/gu, ''))(re.trimEnd(e)),
    Ae = (e) => {
     let t = e,
      n = re.getLeadingWhitespace(t);
     n && (t = t.slice(n.length));
     let r = re.getTrailingWhitespace(t);
     return (r && (t = t.slice(0, -r.length)), { leadingWhitespace: n, trailingWhitespace: r, text: t });
    };
   function Le(e, t) {
    return !!(('ieConditionalComment' === e.kind && e.lastChild && !e.lastChild.isSelfClosing && !e.lastChild.endSourceSpan) || ('ieConditionalComment' === e.kind && !e.complete) || (Ye(e) && e.children.some((e) => 'text' !== e.kind && 'interpolation' !== e.kind)) || (rt(e, t) && !Re(e, t) && 'interpolation' !== e.kind));
   }
   function Pe(e) {
    return (
     !('attribute' === e.kind || !e.parent || !e.prev) &&
     (function (e) {
      return 'comment' === e.kind && 'prettier-ignore' === e.value.trim();
     })(e.prev)
    );
   }
   function Oe(e) {
    return 'text' === e.kind || 'comment' === e.kind;
   }
   function Re(e, t) {
    return 'element' === e.kind && ('script' === e.fullName || 'style' === e.fullName || 'svg:style' === e.fullName || 'svg:script' === e.fullName || ('mj-style' === e.fullName && 'mjml' === t.parser) || (xe(e) && ('script' === e.name || 'style' === e.name)));
   }
   function Ie(e) {
    return Ze(e).startsWith('pre');
   }
   function Fe(e, t) {
    let n = !(
     we(e) ||
     'angularControlFlowBlock' === e.kind ||
     ((('text' !== e.kind && 'interpolation' !== e.kind) || !e.prev || ('text' !== e.prev.kind && 'interpolation' !== e.prev.kind)) &&
      (!e.parent ||
       'none' === e.parent.cssDisplay ||
       (!Ye(e.parent) &&
        ((!e.prev &&
         ('root' === e.parent.kind ||
          (Ye(e) && e.parent) ||
          Re(e.parent, t) ||
          tt(e.parent, t) ||
          !(function (e) {
           return !Ke(e) && 'inline-block' !== e;
          })(e.parent.cssDisplay))) ||
         (e.prev &&
          !(function (e) {
           return !Ke(e);
          })(e.prev.cssDisplay))))))
    );
    return n && !e.prev && e.parent?.tagDefinition?.ignoreFirstLf ? 'interpolation' === e.kind : n;
   }
   function De(e, t) {
    return (
     !we(e) &&
     'angularControlFlowBlock' !== e.kind &&
     (!(('text' !== e.kind && 'interpolation' !== e.kind) || !e.next || ('text' !== e.next.kind && 'interpolation' !== e.next.kind)) ||
      (!(!e.parent || 'none' === e.parent.cssDisplay) &&
       (!!Ye(e.parent) ||
        !(
         (!e.next &&
          ('root' === e.parent.kind ||
           (Ye(e) && e.parent) ||
           Re(e.parent, t) ||
           tt(e.parent, t) ||
           !(function (e) {
            return !Ke(e) && 'inline-block' !== e;
           })(e.parent.cssDisplay))) ||
         (e.next &&
          !(function (e) {
           return !Ke(e);
          })(e.next.cssDisplay))
        ))))
    );
   }
   function Me(e, t) {
    return (
     (function (e) {
      return !Ke(e) && 'inline-block' !== e;
     })(e.cssDisplay) && !Re(e, t)
    );
   }
   function qe(e) {
    return we(e) || (e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line);
   }
   function Be(e) {
    return (
     Ve(e) ||
     ('element' === e.kind &&
      e.children.length > 0 &&
      (['body', 'script', 'style'].includes(e.name) ||
       e.children.some((e) =>
        (function (e) {
         return e.children?.some((e) => 'text' !== e.kind);
        })(e),
       ))) ||
     (e.firstChild && e.firstChild === e.lastChild && 'text' !== e.firstChild.kind && Ue(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || ze(e.lastChild)))
    );
   }
   function Ve(e) {
    return 'element' === e.kind && e.children.length > 0 && (['html', 'head', 'ul', 'ol', 'select'].includes(e.name) || (e.cssDisplay.startsWith('table') && 'table-cell' !== e.cssDisplay));
   }
   function He(e) {
    return (
     je(e) ||
     (e.prev &&
      (function (e) {
       return je(e) || ('element' === e.kind && 'br' === e.fullName) || $e(e);
      })(e.prev)) ||
     $e(e)
    );
   }
   function $e(e) {
    return Ue(e) && ze(e);
   }
   function Ue(e) {
    return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : 'root' === e.parent.kind || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
   }
   function ze(e) {
    return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : 'root' === e.parent.kind || (e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line));
   }
   function je(e) {
    switch (e.kind) {
     case 'ieConditionalComment':
     case 'comment':
     case 'directive':
      return !0;
     case 'element':
      return ['script', 'select'].includes(e.name);
    }
    return !1;
   }
   function We(e) {
    return e.lastChild ? We(e.lastChild) : e;
   }
   function Xe(e) {
    if (e)
     switch (e) {
      case 'module':
      case 'text/javascript':
      case 'text/babel':
      case 'text/jsx':
      case 'application/javascript':
       return 'babel';
      case 'application/x-typescript':
       return 'typescript';
      case 'text/markdown':
       return 'markdown';
      case 'text/html':
       return 'html';
      case 'text/x-handlebars-template':
       return 'glimmer';
      default:
       if (e.endsWith('json') || e.endsWith('importmap') || 'speculationrules' === e) return 'json';
     }
   }
   function Ge(e, t) {
    return (
     (function (e, t) {
      let { name: n, attrMap: r } = e;
      if ('script' !== n || Object.prototype.hasOwnProperty.call(r, 'src')) return;
      let { type: a, lang: i } = e.attrMap;
      return i || a ? (ke(t, { language: i }) ?? Xe(a)) : 'babel';
     })(e, t) ??
     (function (e, t) {
      if ('style' === e.name) {
       let { lang: n } = e.attrMap;
       return n ? ke(t, { language: n }) : 'css';
      }
      if ('mj-style' === e.name && 'mjml' === t.parser) return 'css';
     })(e, t) ??
     (function (e, t) {
      if (!rt(e, t)) return;
      let { attrMap: n } = e;
      if (Object.prototype.hasOwnProperty.call(n, 'src')) return;
      let { type: r, lang: a } = n;
      return ke(t, { language: a }) ?? Xe(r);
     })(e, t)
    );
   }
   function Ke(e) {
    return 'block' === e || 'list-item' === e || e.startsWith('table');
   }
   function Ye(e) {
    return Ze(e).startsWith('pre');
   }
   function Ze(e) {
    return 'element' !== e.kind || (e.namespace && !xe(e)) || !Object.prototype.hasOwnProperty.call(Te, e.name) ? 'normal' : Te[e.name];
   }
   function Je(e) {
    return p(0, p(0, e, '&apos;', "'"), '&quot;', '"');
   }
   function Qe(e) {
    return Je(e.value);
   }
   var et = new Set(['template', 'style', 'script']);
   function tt(e, t) {
    return nt(e, t) && !et.has(e.fullName);
   }
   function nt(e, t) {
    return 'vue' === t.parser && 'element' === e.kind && 'root' === e.parent.kind && 'html' !== e.fullName.toLowerCase();
   }
   function rt(e, t) {
    return nt(e, t) && (tt(e, t) || (e.attrMap.lang && 'html' !== e.attrMap.lang));
   }
   function at(e, t = e.value) {
    return e.parent.isWhitespaceSensitive ? (e.parent.isIndentationSensitive ? F(t) : F(re.dedentString(Ne(t)), K)) : W(X, re.split(t));
   }
   function it(e, t) {
    return nt(e, t) && 'script' === e.name;
   }
   function st(e, t) {
    if (
     (function (e) {
      let { valueSpan: t, value: n } = e;
      return t.end.offset - t.start.offset === n.length + 2;
     })(e)
    )
     return !1;
    let { value: n } = e;
    return /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(n) || ('lwc' === t.parser && n.startsWith('{') && n.endsWith('}'));
   }
   var ot = /\{\{(.+?)\}\}/su;
   var lt = (e) => (t, n, r) => pe(Qe(r.node), t, { parser: e }, ue),
    ct = [
     {
      test(e) {
       let t = e.node.fullName;
       return (t.startsWith('(') && t.endsWith(')')) || t.startsWith('on-');
      },
      print: lt('__ng_action'),
     },
     {
      test(e) {
       let t = e.node.fullName;
       return (t.startsWith('[') && t.endsWith(']')) || /^bind(?:on)?-/u.test(t) || /^ng-(?:if|show|hide|class|style)$/u.test(t);
      },
      print: lt('__ng_binding'),
     },
     { test: (e) => e.node.fullName.startsWith('*'), print: lt('__ng_directive') },
     {
      test: (e) => /^i18n(?:-.+)?$/u.test(e.node.fullName),
      print: function (e, t, { node: n }) {
       let r = Qe(n);
       return ce(U(at(n, r.trim())), !r.includes('@@'));
      },
     },
     {
      test: ({ node: { value: e } }) => ot.test(e),
      print: async function (e, t, n) {
       let r = Qe(n.node),
        a = [];
       for (let [i, s] of r.split(ot).entries())
        if (i % 2 == 0) a.push(F(s));
        else
         try {
          a.push(z(['{{', V([X, await pe(s, e, { parser: '__ng_interpolation', __isInHtmlInterpolation: !0 })]), X, '}}']));
         } catch {
          a.push('{{', F(s), '}}');
         }
       return a;
      },
     },
    ].map(({ test: e, print: t }) => ({ test: (t, n) => 'angular' === n.parser && e(t), print: t }));
   var ut = ct,
    pt = new Set(['onabort', 'onafterprint', 'onauxclick', 'onbeforeinput', 'onbeforematch', 'onbeforeprint', 'onbeforetoggle', 'onbeforeunload', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncommand', 'oncontextlost', 'oncontextmenu', 'oncontextrestored', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'onformdata', 'onhashchange', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onlanguagechange', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onmessage', 'onmessageerror', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onoffline', 'ononline', 'onpagehide', 'onpagereveal', 'onpageshow', 'onpageswap', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpopstate', 'onprogress', 'onratechange', 'onrejectionhandled', 'onreset', 'onresize', 'onscroll', 'onscrollend', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onslotchange', 'onstalled', 'onstorage', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'onunhandledrejection', 'onunload', 'onvolumechange', 'onwaiting', 'onwheel']);
   var dt = function (e) {
    let t = [];
    for (let n of e.split(';')) {
     if (((n = re.trim(n)), !n)) continue;
     let [e, ...r] = re.split(n);
     t.push({ name: e, value: r });
    }
    return t;
   };
   function ht(e) {
    return '\t' === e || '\n' === e || '\f' === e || '\r' === e || ' ' === e;
   }
   var ft = /^[ \t\n\r\u000c]+/,
    mt = /^[, \t\n\r\u000c]+/,
    gt = /^[^ \t\n\r\u000c]+/,
    vt = /[,]+$/,
    bt = /^\d+$/,
    St = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
   var _t = function (e) {
     let t,
      n,
      r,
      a,
      i,
      s,
      o = e.length,
      l = 0;
     function c(t) {
      let n,
       r = t.exec(e.substring(l));
      if (r) return (([n] = r), (l += n.length), n);
     }
     let u = [];
     for (;;) {
      if ((c(mt), l >= o)) {
       if (0 === u.length) throw new Error('Must contain one or more image candidate strings.');
       return u;
      }
      ((s = l), (t = c(gt)), (n = []), ',' === t.slice(-1) ? ((t = t.replace(vt, '')), d()) : p());
     }
     function p() {
      for (c(ft), r = '', a = 'in descriptor'; ; ) {
       if (((i = e.charAt(l)), 'in descriptor' === a))
        if (ht(i)) r && (n.push(r), (r = ''), (a = 'after descriptor'));
        else {
         if (',' === i) return ((l += 1), r && n.push(r), void d());
         if ('(' === i) ((r += i), (a = 'in parens'));
         else {
          if ('' === i) return (r && n.push(r), void d());
          r += i;
         }
        }
       else if ('in parens' === a)
        if (')' === i) ((r += i), (a = 'in descriptor'));
        else {
         if ('' === i) return (n.push(r), void d());
         r += i;
        }
       else if ('after descriptor' === a && !ht(i)) {
        if ('' === i) return void d();
        ((a = 'in descriptor'), (l -= 1));
       }
       l += 1;
      }
     }
     function d() {
      let r,
       a,
       i,
       o,
       l,
       c,
       p,
       d,
       h,
       f = !1,
       m = {};
      for (o = 0; o < n.length; o++) ((l = n[o]), (c = l[l.length - 1]), (p = l.substring(0, l.length - 1)), (d = parseInt(p, 10)), (h = parseFloat(p)), bt.test(p) && 'w' === c ? ((r || a) && (f = !0), 0 === d ? (f = !0) : (r = d)) : St.test(p) && 'x' === c ? ((r || a || i) && (f = !0), h < 0 ? (f = !0) : (a = h)) : bt.test(p) && 'h' === c ? ((i || a) && (f = !0), 0 === d ? (f = !0) : (i = d)) : (f = !0));
      if (f) throw new Error(`Invalid srcset descriptor found in "${e}" at "${l}".`);
      ((m.source = { value: t, startOffset: s }), r && (m.width = { value: r }), a && (m.density = { value: a }), i && (m.height = { value: i }), u.push(m));
     }
    },
    kt = { width: 'w', height: 'h', density: 'x' },
    yt = Object.keys(kt);
   var wt = new WeakMap();
   var Ct = function (e, t) {
    let { root: n } = e;
    return (
     wt.has(n) ||
      wt.set(
       n,
       n.children.some((e) => it(e, t) && ['ts', 'typescript'].includes(e.attrMap.lang)),
      ),
     wt.get(n)
    );
   };
   var Et = [
    {
     test: (e) => 'v-for' === e.node.fullName,
     print: async function (e, t, n, r) {
      let a = Qe(n.node),
       {
        left: i,
        operator: s,
        right: o,
       } = (function (e) {
        let t = /(.*?)\s+(in|of)\s+(.*)/su,
         n = /,([^,\]}]*)(?:,([^,\]}]*))?$/u,
         r = /^\(|\)$/gu,
         a = e.match(t);
        if (!a) return;
        let i = { for: a[3].trim() };
        if (!i.for) return;
        let s = p(0, a[1].trim(), r, ''),
         o = s.match(n);
        o ? ((i.alias = s.replace(n, '')), (i.iterator1 = o[1].trim()), o[2] && (i.iterator2 = o[2].trim())) : (i.alias = s);
        let l = [i.alias, i.iterator1, i.iterator2];
        if (!l.some((e, t) => !e && (0 === t || l.slice(t + 1).some(Boolean)))) return { left: l.filter(Boolean).join(','), operator: a[2], right: i.for };
       })(a),
       l = Ct(n, r);
      return [z(await pe(`function _(${i}) {}`, e, { parser: l ? 'babel-ts' : 'babel', __isVueForBindingLeft: !0 })), ' ', s, ' ', await pe(o, e, { parser: l ? '__ts_expression' : '__js_expression' })];
     },
    },
    {
     test: (e, t) => 'generic' === e.node.fullName && it(e.parent, t),
     print: function (e, t, n) {
      return pe(`type T<${Qe(n.node)}> = any`, e, { parser: 'babel-ts', __isEmbeddedTypescriptGenericParameters: !0 }, ue);
     },
    },
    {
     test: ({ node: e }, t) =>
      (function (e) {
       let t = e.fullName;
       return '#' === t.charAt(0) || 'slot-scope' === t || 'v-slot' === t || t.startsWith('v-slot:');
      })(e) ||
      (function (e, t) {
       let n = e.parent;
       if (!nt(n, t)) return !1;
       let r = n.fullName,
        a = e.fullName;
       return ('script' === r && 'setup' === a) || ('style' === r && 'vars' === a);
      })(e, t),
     print: function (e, t, n, r) {
      return pe(`function _(${Qe(n.node)}) {}`, e, { parser: Ct(n, r) ? 'babel-ts' : 'babel', __isVueBindings: !0 });
     },
    },
    {
     test(e) {
      let t = e.node.fullName;
      return t.startsWith('@') || t.startsWith('v-on:');
     },
     print: async function (e, t, n, r) {
      try {
       return await Tt(e, t, n, r);
      } catch (s) {
       if ('BABEL_PARSER_SYNTAX_ERROR' !== s.cause?.code) throw s;
      }
      let a = Qe(n.node),
       i = Ct(n, r) ? '__vue_ts_event_binding' : '__vue_event_binding';
      return pe(a, e, { parser: i }, ue);
     },
    },
    {
     test(e) {
      let t = e.node.fullName;
      return t.startsWith(':') || t.startsWith('.') || t.startsWith('v-bind:');
     },
     print: function (e, t, n, r) {
      let a = Qe(n.node),
       i = Ct(n, r) ? '__vue_ts_expression' : '__vue_expression';
      return pe(a, e, { parser: i }, ue);
     },
    },
    { test: (e) => e.node.fullName.startsWith('v-'), print: Tt },
   ].map(({ test: e, print: t }) => ({ test: (t, n) => 'vue' === n.parser && e(t, n), print: t }));
   function Tt(e, t, n, r) {
    return pe(Qe(n.node), e, { parser: Ct(n, r) ? '__ts_expression' : '__js_expression' }, ue);
   }
   var xt = [
    {
     test: (e) => 'srcset' === e.node.fullName && ('img' === e.parent.fullName || 'source' === e.parent.fullName),
     print: function (e, t, n) {
      let r = Qe(n.node),
       a = _t(r),
       i = yt.filter((e) => a.some((t) => Object.prototype.hasOwnProperty.call(t, e)));
      if (i.length > 1) throw new Error('Mixed descriptor in srcset is not supported');
      let [s] = i,
       o = kt[s],
       l = a.map((e) => e.source.value),
       c = Math.max(...l.map((e) => e.length)),
       u = a.map((e) => (e[s] ? String(e[s].value) : '')),
       p = u.map((e) => {
        let t = e.indexOf('.');
        return -1 === t ? e.length : t;
       }),
       d = Math.max(...p);
      return ce(
       W(
        [',', X],
        l.map((e, t) => {
         let n = [e],
          r = u[t];
         if (r) {
          let a = c - e.length + 1,
           i = d - p[t],
           s = ' '.repeat(a + i);
          n.push(j(s, ' '), r + o);
         }
         return n;
        }),
       ),
      );
     },
    },
    { test: ({ node: e }, t) => 'style' === e.fullName && !t.parentParser && !e.value.includes('{{'), print: async (e, t, n) => ce(await e(Qe(n.node), { parser: 'css', __isHTMLStyleAttribute: !0 })) },
    { test: ({ node: e }, t) => pt.has(e.fullName) && !t.parentParser && !e.value.includes('{{'), print: (e, t, n) => pe(Qe(n.node), e, { parser: 'babel', __isHtmlInlineEventHandler: !0 }, () => !1) },
    { test: ({ node: e }, t) => !t.parentParser && 'class' === e.fullName && !e.value.includes('{{'), print: (e, t, n) => Qe(n.node).trim().split(/\s+/u).join(' ') },
    {
     test: ({ node: e }, t) => 'allow' === e.fullName && !t.parentParser && 'iframe' === e.parent.fullName && !e.value.includes('{{'),
     print: function (e, t, n) {
      let { node: r } = n,
       a = dt(Qe(r));
      return 0 === a.length ? [''] : ce(a.map(({ name: e, value: t }, n) => [[e, ...t].join(' '), n === a.length - 1 ? j(';') : [';', X]]));
     },
    },
    ...Et,
    ...ut,
   ].map(({ test: e, print: t }) => ({ test: e, print: Nt(t) }));
   function Nt(e) {
    return async (t, n, r, a) => {
     let i = await e(t, n, r, a);
     if (i) return ((i = I(i, (e) => ('string' == typeof e ? p(0, e, '"', '&quot;') : e))), [r.node.rawName, '="', z(i), '"']);
    };
   }
   var At = function (e, t) {
     let { node: n } = e,
      { value: r } = n;
     if (r) return st(n, t) ? [n.rawName, '=', r] : xt.find(({ test: n }) => n(e, t))?.print;
    },
    Lt = (e) => e.sourceSpan.start.offset,
    Pt = (e) => e.sourceSpan.end.offset;
   function Ot(e, t) {
    return [e.isSelfClosing ? '' : Rt(e, t), It(e, t)];
   }
   function Rt(e, t) {
    return e.lastChild && $t(e.lastChild) ? '' : [Ft(e, t), Mt(e, t)];
   }
   function It(e, t) {
    return (e.next ? Vt(e.next) : Ht(e.parent)) ? '' : [qt(e, t), Dt(e, t)];
   }
   function Ft(e, t) {
    return Ht(e) ? qt(e.lastChild, t) : '';
   }
   function Dt(e, t) {
    return $t(e) ? Mt(e.parent, t) : Ut(e) ? Zt(e.next, t) : '';
   }
   function Mt(e, t) {
    if (Bt(e, t)) return '';
    switch (e.kind) {
     case 'ieConditionalComment':
      return '<!';
     case 'element':
      if (e.hasHtmComponentClosingTag) return '<//';
     default:
      return `</${e.rawName}`;
    }
   }
   function qt(e, t) {
    if (Bt(e, t)) return '';
    switch (e.kind) {
     case 'ieConditionalComment':
     case 'ieConditionalEndComment':
      return '[endif]--\x3e';
     case 'ieConditionalStartComment':
      return ']>\x3c!--\x3e';
     case 'interpolation':
      return '}}';
     case 'angularIcuExpression':
      return '}';
     case 'element':
      if (e.isSelfClosing) return '/>';
     default:
      return '>';
    }
   }
   function Bt(e, t) {
    return !e.isSelfClosing && !e.endSourceSpan && (Pe(e) || Le(e.parent, t));
   }
   function Vt(e) {
    return e.prev && 'docType' !== e.prev.kind && 'angularControlFlowBlock' !== e.kind && !Oe(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
   }
   function Ht(e) {
    return e.lastChild?.isTrailingSpaceSensitive && !e.lastChild.hasTrailingSpaces && !Oe(We(e.lastChild)) && !Ye(e);
   }
   function $t(e) {
    return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && Oe(We(e));
   }
   function Ut(e) {
    return e.next && !Oe(e.next) && Oe(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
   }
   function zt(e) {
    return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
   }
   function jt(e, t, n) {
    let { node: r } = e;
    if (!be(r.attrs)) return r.isSelfClosing ? ' ' : '';
    let a =
      'comment' === r.prev?.kind &&
      (function (e) {
       let t = e.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);
       return !!t && (!t[1] || t[1].split(/\s+/u));
      })(r.prev.value),
     i = 'boolean' == typeof a ? () => a : Array.isArray(a) ? (e) => a.includes(e.rawName) : () => !1,
     s = e.map(({ node: e }) => (i(e) ? F(t.originalText.slice(Lt(e), Pt(e))) : n()), 'attrs'),
     o = 'element' === r.kind && 'script' === r.fullName && 1 === r.attrs.length && 'src' === r.attrs[0].fullName && 0 === r.children.length,
     l = t.singleAttributePerLine && r.attrs.length > 1 && !nt(r, t) ? K : X,
     c = [V([o ? ' ' : X, W(l, s)])];
    return ((r.firstChild && zt(r.firstChild)) || (r.isSelfClosing && Ht(r.parent)) || o ? c.push(r.isSelfClosing ? ' ' : '') : c.push(t.bracketSameLine ? (r.isSelfClosing ? ' ' : '') : r.isSelfClosing ? X : G), c);
   }
   function Wt(e) {
    return e.firstChild && zt(e.firstChild) ? '' : Jt(e);
   }
   function Xt(e, t, n) {
    let { node: r } = e;
    return [Gt(r, t), jt(e, t, n), r.isSelfClosing ? '' : Wt(r)];
   }
   function Gt(e, t) {
    return e.prev && Ut(e.prev) ? '' : [Kt(e, t), Zt(e, t)];
   }
   function Kt(e, t) {
    return zt(e) ? Jt(e.parent) : Vt(e) ? qt(e.prev, t) : '';
   }
   var Yt = '<!doctype';
   function Zt(e, t) {
    switch (e.kind) {
     case 'ieConditionalComment':
     case 'ieConditionalStartComment':
      return `\x3c!--[if ${e.condition}`;
     case 'ieConditionalEndComment':
      return '\x3c!--<!';
     case 'interpolation':
      return '{{';
     case 'docType': {
      if ('html' === e.value) {
       let { filepath: e } = t;
       if (e && /\.html?$/u.test(e)) return Yt;
      }
      let n = Lt(e);
      return t.originalText.slice(n, n + 9);
     }
     case 'angularIcuExpression':
      return '{';
     case 'element':
      if (e.condition) return `\x3c!--[if ${e.condition}]>\x3c!--\x3e<${e.rawName}`;
     default:
      return `<${e.rawName}`;
    }
   }
   function Jt(e) {
    switch (e.kind) {
     case 'ieConditionalComment':
      return ']>';
     case 'element':
      if (e.condition) return '>\x3c!--<![endif]--\x3e';
     default:
      return '>';
    }
   }
   var Qt = function (e, t) {
     if (!e.endSourceSpan) return '';
     let n = e.startSourceSpan.end.offset;
     e.firstChild && zt(e.firstChild) && (n -= Jt(e).length);
     let r = e.endSourceSpan.start.offset;
     return (e.lastChild && $t(e.lastChild) ? (r += Mt(e, t).length) : Ht(e) && (r -= qt(e.lastChild, t).length), t.originalText.slice(n, r));
    },
    en = new Set(['if', 'else if', 'for', 'switch', 'case']);
   var tn = function (e, t) {
     let { node: n } = e;
     switch (n.kind) {
      case 'element':
       if (Re(n, t) || 'interpolation' === n.kind) return;
       if (!n.isSelfClosing && rt(n, t)) {
        let r = Ge(n, t);
        return r
         ? async (a, i) => {
            let s = Qt(n, t),
             o = /^\s*$/u.test(s),
             l = '';
            return (o || ((l = await a(Ne(s), { parser: r, __embeddedInHtml: !0 })), (o = '' === l)), [Kt(n, t), z(Xt(e, t, i)), o ? '' : K, l, o ? '' : K, Ot(n, t), Dt(n, t)]);
           }
         : void 0;
       }
       break;
      case 'text':
       if (Re(n.parent, t)) {
        let e = Ge(n.parent, t);
        if (e)
         return async (r) => {
          let a = 'markdown' === e ? re.dedentString(n.value.replace(/^[^\S\n]*\n/u, '')) : n.value,
           i = { parser: e, __embeddedInHtml: !0 };
          if ('html' === t.parser && 'babel' === e) {
           let e = 'script',
            { attrMap: t } = n.parent;
           (t && ('module' === t.type || (('text/babel' === t.type || 'text/jsx' === t.type) && 'module' === t['data-type'])) && (e = 'module'), (i.__babelSourceType = e));
          }
          return [$, Kt(n, t), await r(a, i), Dt(n, t)];
         };
       } else if ('interpolation' === n.parent.kind)
        return async (r) => {
         let a = { __isInHtmlInterpolation: !0, __embeddedInHtml: !0 };
         return ('angular' === t.parser ? (a.parser = '__ng_interpolation') : 'vue' === t.parser ? (a.parser = Ct(e, t) ? '__vue_ts_expression' : '__vue_expression') : (a.parser = '__js_expression'), [V([X, await r(n.value, a)]), n.parent.next && Vt(n.parent.next) ? ' ' : X]);
        };
       break;
      case 'attribute':
       return At(e, t);
      case 'angularControlFlowBlockParameters':
       return en.has(e.parent.name) ? de : void 0;
      case 'angularLetDeclarationInitializer':
       return (e) => pe(n.value, e, { parser: '__ng_binding', __isInHtmlAttribute: !1 });
     }
    },
    nn = null;
   function rn(e) {
    if (null !== nn && (nn.property, 1)) {
     let e = nn;
     return ((nn = rn.prototype = null), e);
    }
    return ((nn = rn.prototype = e ?? Object.create(null)), new rn());
   }
   for (let Ma = 0; Ma <= 10; Ma++) rn();
   var an = function (e, t = 'type') {
     return (
      (function (e) {
       rn(e);
      })(e),
      function (n) {
       let r = n[t],
        a = e[r];
       if (!Array.isArray(a)) throw Object.assign(new Error(`Missing visitor keys for '${r}'.`), { node: n });
       return a;
      }
     );
    },
    sn = [['children'], []],
    on = an({ root: sn[0], element: ['attrs', 'children'], ieConditionalComment: sn[0], ieConditionalStartComment: sn[1], ieConditionalEndComment: sn[1], interpolation: sn[0], text: sn[0], docType: sn[1], comment: sn[1], attribute: sn[1], cdata: sn[1], angularControlFlowBlock: ['children', 'parameters'], angularControlFlowBlockParameters: sn[0], angularControlFlowBlockParameter: sn[1], angularLetDeclaration: ['init'], angularLetDeclarationInitializer: sn[1], angularIcuExpression: ['cases'], angularIcuCase: ['expression'] }, 'kind'),
    ln = /^\s*<!--\s*@(?:noformat|noprettier)\s*-->/u,
    cn = /^\s*<!--\s*@(?:format|prettier)\s*-->/u,
    un = (e) => cn.test(e),
    pn = (e) => ln.test(e),
    dn = new Map([
     ['if', new Set(['else if', 'else'])],
     ['else if', new Set(['else if', 'else'])],
     ['for', new Set(['empty'])],
     ['defer', new Set(['placeholder', 'error', 'loading'])],
     ['placeholder', new Set(['placeholder', 'error', 'loading'])],
     ['error', new Set(['placeholder', 'error', 'loading'])],
     ['loading', new Set(['placeholder', 'error', 'loading'])],
    ]);
   function hn(e) {
    let t = Pt(e);
    return 'element' === e.kind && !e.endSourceSpan && be(e.children) ? Math.max(t, hn(h(0, e.children, -1))) : t;
   }
   function fn(e, t, n) {
    let r = e.node;
    if (Pe(r)) {
     let e = hn(r);
     return [Kt(r, t), F(re.trimEnd(t.originalText.slice(Lt(r) + (r.prev && Ut(r.prev) ? Zt(r).length : 0), e - (r.next && Vt(r.next) ? qt(r, t).length : 0)))), Dt(r, t)];
    }
    return n();
   }
   function mn(e, t) {
    return Oe(e) && Oe(t) ? (e.isTrailingSpaceSensitive ? (e.hasTrailingSpaces ? (He(t) ? K : X) : '') : He(t) ? K : G) : (Ut(e) && (Pe(t) || t.firstChild || t.isSelfClosing || ('element' === t.kind && t.attrs.length > 0))) || ('element' === e.kind && e.isSelfClosing && Vt(t)) ? '' : !t.isLeadingSpaceSensitive || He(t) || (Vt(t) && e.lastChild && $t(e.lastChild) && e.lastChild.lastChild && $t(e.lastChild.lastChild)) ? K : t.hasLeadingSpaces ? X : G;
   }
   function gn(e, t, n) {
    let { node: r } = e;
    if (Ve(r))
     return [
      $,
      ...e.map(() => {
       let r = e.node,
        a = r.prev ? mn(r.prev, r) : '';
       return [a ? [a, qe(r.prev) ? K : ''] : '', fn(e, t, n)];
      }, 'children'),
     ];
    let a = r.children.map(() => Symbol(''));
    return e.map(({ node: r, index: i }) => {
     if (Oe(r)) {
      if (r.prev && Oe(r.prev)) {
       let a = mn(r.prev, r);
       if (a) return qe(r.prev) ? [K, K, fn(e, t, n)] : [a, fn(e, t, n)];
      }
      return fn(e, t, n);
     }
     let s = [],
      o = [],
      l = [],
      c = [],
      u = r.prev ? mn(r.prev, r) : '',
      p = r.next ? mn(r, r.next) : '';
     return (u && (qe(r.prev) ? s.push(K, K) : u === K ? s.push(K) : Oe(r.prev) ? o.push(u) : o.push(j('', G, { groupId: a[i - 1] }))), p && (qe(r) ? Oe(r.next) && c.push(K, K) : p === K ? Oe(r.next) && c.push(K) : l.push(p)), [...s, z([...o, z([fn(e, t, n), ...l], { id: a[i] })]), ...c]);
    }, 'children');
   }
   function vn(e, t, n) {
    let { node: r } = e,
     a = [];
    if (
     ((function (e) {
      let { previous: t } = e;
      return 'angularControlFlowBlock' === t?.kind && !Pe(t) && !bn(t);
     })(e) && a.push('} '),
     a.push('@', r.name),
     r.parameters && a.push(' (', z(n('parameters')), ')'),
     !(function (e) {
      return ((e) => 'angularControlFlowBlock' === e?.kind && ('case' === e.name || 'default' === e.name))(e) && e.endSourceSpan && e.endSourceSpan.start.offset === e.endSourceSpan.end.offset;
     })(r))
    ) {
     a.push(' {');
     let i = bn(r);
     r.children.length > 0 ? ((r.firstChild.hasLeadingSpaces = !0), (r.lastChild.hasTrailingSpaces = !0), a.push(V([K, gn(e, t, n)])), i && a.push(K, '}')) : i && a.push('}');
    }
    return z(a, { shouldBreak: !0 });
   }
   function bn(e) {
    return !('angularControlFlowBlock' === e.next?.kind && dn.get(e.name)?.has(e.next.name));
   }
   function Sn(e, t, n) {
    let { node: r } = e;
    if (Le(r, t)) return [Kt(r, t), z(Xt(e, t, n)), F(Qt(r, t)), ...Ot(r, t), Dt(r, t)];
    let a = 1 === r.children.length && ('interpolation' === r.firstChild.kind || 'angularIcuExpression' === r.firstChild.kind) && r.firstChild.isLeadingSpaceSensitive && !r.firstChild.hasLeadingSpaces && r.lastChild.isTrailingSpaceSensitive && !r.lastChild.hasTrailingSpaces,
     i = Symbol('element-attr-group-id'),
     s = (a) => z([z(Xt(e, t, n), { id: i }), a, Ot(r, t)]);
    return 0 === r.children.length
     ? s(r.hasDanglingSpaces && r.isDanglingSpaceSensitive ? X : '')
     : s([
        Be(r) ? $ : '',
        ((o = [a ? j(G, '', { groupId: i }) : r.firstChild.hasLeadingSpaces && r.firstChild.isLeadingSpaceSensitive ? X : 'text' === r.firstChild.kind && r.isWhitespaceSensitive && r.isIndentationSensitive ? H(G) : G, gn(e, t, n)]),
        a
         ? (function (e, t) {
            return (D(e), { type: C, contents: e, groupId: t.groupId, negate: t.negate });
           })(o, { groupId: i })
         : (!Re(r, t) && !tt(r, t)) || 'root' !== r.parent.kind || 'vue' !== t.parser || t.vueIndentScriptAndStyle
           ? V(o)
           : o),
        (r.next ? Vt(r.next) : Ht(r.parent)) ? (r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? ' ' : '') : a ? j(G, '', { groupId: i }) : r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? X : ('comment' === r.lastChild.kind || ('text' === r.lastChild.kind && r.isWhitespaceSensitive && r.isIndentationSensitive)) && new RegExp(`\\n[\\t ]{${t.tabWidth * (e.ancestors.length - 1)}}$`, 'u').test(r.lastChild.value) ? '' : G,
       ]);
    var o;
   }
   var _n,
    kn = (((_n = {})[(_n.RAW_TEXT = 0)] = 'RAW_TEXT'), (_n[(_n.ESCAPABLE_RAW_TEXT = 1)] = 'ESCAPABLE_RAW_TEXT'), (_n[(_n.PARSABLE_DATA = 2)] = 'PARSABLE_DATA'), _n);
   function yn(e, t = !0) {
    if (':' != e[0]) return [null, e];
    let n = e.indexOf(':', 1);
    if (-1 === n) {
     if (t) throw new Error(`Unsupported format "${e}" expecting ":namespace:name"`);
     return [null, e];
    }
    return [e.slice(1, n), e.slice(n + 1)];
   }
   function wn(e) {
    return 'ng-container' === yn(e)[1];
   }
   function Cn(e) {
    return 'ng-content' === yn(e)[1];
   }
   function En(e) {
    return null === e ? null : yn(e)[0];
   }
   function Tn(e, t) {
    return e ? `:${e}:${t}` : t;
   }
   var xn,
    Nn = 'custom-elements',
    An = 'no-errors-schema',
    Ln = (function (e) {
     return ((e[(e.NONE = 0)] = 'NONE'), (e[(e.HTML = 1)] = 'HTML'), (e[(e.STYLE = 2)] = 'STYLE'), (e[(e.SCRIPT = 3)] = 'SCRIPT'), (e[(e.URL = 4)] = 'URL'), (e[(e.RESOURCE_URL = 5)] = 'RESOURCE_URL'), (e[(e.ATTRIBUTE_NO_BINDING = 6)] = 'ATTRIBUTE_NO_BINDING'), e);
    })({}),
    Pn = /-+([a-z0-9])/g;
   function On() {
    return (xn || ((xn = {}), Rn(Ln.HTML, ['iframe|srcdoc', '*|innerHTML', '*|outerHTML']), Rn(Ln.STYLE, ['*|style']), Rn(Ln.URL, ['*|formAction', 'area|href', 'a|href', 'a|xlink:href', 'form|action', 'annotation|href', 'annotation|xlink:href', 'annotation-xml|href', 'annotation-xml|xlink:href', 'maction|href', 'maction|xlink:href', 'malignmark|href', 'malignmark|xlink:href', 'math|href', 'math|xlink:href', 'mroot|href', 'mroot|xlink:href', 'msqrt|href', 'msqrt|xlink:href', 'merror|href', 'merror|xlink:href', 'mfrac|href', 'mfrac|xlink:href', 'mglyph|href', 'mglyph|xlink:href', 'msub|href', 'msub|xlink:href', 'msup|href', 'msup|xlink:href', 'msubsup|href', 'msubsup|xlink:href', 'mmultiscripts|href', 'mmultiscripts|xlink:href', 'mprescripts|href', 'mprescripts|xlink:href', 'mi|href', 'mi|xlink:href', 'mn|href', 'mn|xlink:href', 'mo|href', 'mo|xlink:href', 'mpadded|href', 'mpadded|xlink:href', 'mphantom|href', 'mphantom|xlink:href', 'mrow|href', 'mrow|xlink:href', 'ms|href', 'ms|xlink:href', 'mspace|href', 'mspace|xlink:href', 'mstyle|href', 'mstyle|xlink:href', 'mtable|href', 'mtable|xlink:href', 'mtd|href', 'mtd|xlink:href', 'mtr|href', 'mtr|xlink:href', 'mtext|href', 'mtext|xlink:href', 'mover|href', 'mover|xlink:href', 'munder|href', 'munder|xlink:href', 'munderover|href', 'munderover|xlink:href', 'semantics|href', 'semantics|xlink:href', 'none|href', 'none|xlink:href', 'img|src', 'video|src']), Rn(Ln.RESOURCE_URL, ['base|href', 'embed|src', 'frame|src', 'iframe|src', 'link|href', 'object|codebase', 'object|data', 'script|src', 'script|href', 'script|xlink:href']), Rn(Ln.ATTRIBUTE_NO_BINDING, ['animate|attributeName', 'set|attributeName', 'animateMotion|attributeName', 'animateTransform|attributeName', 'unknown|attributeName', 'iframe|sandbox', 'iframe|allow', 'iframe|allowFullscreen', 'iframe|referrerPolicy', 'iframe|csp', 'iframe|fetchPriority', 'unknown|sandbox', 'unknown|allow', 'unknown|allowFullscreen', 'unknown|referrerPolicy', 'unknown|csp', 'unknown|fetchPriority'])), xn);
   }
   function Rn(e, t) {
    for (let n of t) xn[n.toLowerCase()] = e;
   }
   var In = class {},
    Fn = ['[Element]|textContent,%ariaActiveDescendantElement,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColIndexText,%ariaColSpan,%ariaControlsElements,%ariaCurrent,%ariaDescribedByElements,%ariaDescription,%ariaDetailsElements,%ariaDisabled,%ariaErrorMessageElements,%ariaExpanded,%ariaFlowToElements,%ariaHasPopup,%ariaHidden,%ariaInvalid,%ariaKeyShortcuts,%ariaLabel,%ariaLabelledByElements,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaOwnsElements,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowIndexText,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored', '[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy', 'abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,search,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy', 'media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume', ':svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex', ':svg:graphics^:svg:|', ':svg:animation^:svg:|*begin,*end,*repeat', ':svg:geometry^:svg:|', ':svg:componentTransferFunction^:svg:|', ':svg:gradient^:svg:|', ':svg:textContent^:svg:graphics|', ':svg:textPositioning^:svg:textContent|', 'a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username', 'area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username', 'audio^media|', 'br^[HTMLElement]|clear', 'base^[HTMLElement]|href,target', 'body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink', 'button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value', 'canvas^[HTMLElement]|#height,#width', 'content^[HTMLElement]|select', 'dl^[HTMLElement]|!compact', 'data^[HTMLElement]|value', 'datalist^[HTMLElement]|', 'details^[HTMLElement]|!open', 'dialog^[HTMLElement]|!open,returnValue', 'dir^[HTMLElement]|!compact', 'div^[HTMLElement]|align', 'embed^[HTMLElement]|align,height,name,src,type,width', 'fieldset^[HTMLElement]|!disabled,name', 'font^[HTMLElement]|color,face,size', 'form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target', 'frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src', 'frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows', 'hr^[HTMLElement]|align,color,!noShade,size,width', 'head^[HTMLElement]|', 'h1,h2,h3,h4,h5,h6^[HTMLElement]|align', 'html^[HTMLElement]|version', 'iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width', 'img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width', 'input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width', 'li^[HTMLElement]|type,#value', 'label^[HTMLElement]|htmlFor', 'legend^[HTMLElement]|align', 'link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type', 'map^[HTMLElement]|name', 'marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width', 'menu^[HTMLElement]|!compact', 'meta^[HTMLElement]|content,httpEquiv,media,name,scheme', 'meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value', 'ins,del^[HTMLElement]|cite,dateTime', 'ol^[HTMLElement]|!compact,!reversed,#start,type', 'object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width', 'optgroup^[HTMLElement]|!disabled,label', 'option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value', 'output^[HTMLElement]|defaultValue,%htmlFor,name,value', 'p^[HTMLElement]|align', 'param^[HTMLElement]|name,type,value,valueType', 'picture^[HTMLElement]|', 'pre^[HTMLElement]|#width', 'progress^[HTMLElement]|#max,#value', 'q,blockquote,cite^[HTMLElement]|', 'script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type', 'select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value', 'selectedcontent^[HTMLElement]|', 'slot^[HTMLElement]|name', 'source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width', 'span^[HTMLElement]|', 'style^[HTMLElement]|!disabled,media,type', 'search^[HTMLELement]|', 'caption^[HTMLElement]|align', 'th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width', 'col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width', 'table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width', 'tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign', 'tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign', 'template^[HTMLElement]|', 'textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap', 'time^[HTMLElement]|dateTime', 'title^[HTMLElement]|text', 'track^[HTMLElement]|!default,kind,label,src,srclang', 'ul^[HTMLElement]|!compact,type', 'unknown^[HTMLElement]|', 'video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width', ':svg:a^:svg:graphics|', ':svg:animate^:svg:animation|', ':svg:animateMotion^:svg:animation|', ':svg:animateTransform^:svg:animation|', ':svg:circle^:svg:geometry|', ':svg:clipPath^:svg:graphics|', ':svg:defs^:svg:graphics|', ':svg:desc^:svg:|', ':svg:discard^:svg:|', ':svg:ellipse^:svg:geometry|', ':svg:feBlend^:svg:|', ':svg:feColorMatrix^:svg:|', ':svg:feComponentTransfer^:svg:|', ':svg:feComposite^:svg:|', ':svg:feConvolveMatrix^:svg:|', ':svg:feDiffuseLighting^:svg:|', ':svg:feDisplacementMap^:svg:|', ':svg:feDistantLight^:svg:|', ':svg:feDropShadow^:svg:|', ':svg:feFlood^:svg:|', ':svg:feFuncA^:svg:componentTransferFunction|', ':svg:feFuncB^:svg:componentTransferFunction|', ':svg:feFuncG^:svg:componentTransferFunction|', ':svg:feFuncR^:svg:componentTransferFunction|', ':svg:feGaussianBlur^:svg:|', ':svg:feImage^:svg:|', ':svg:feMerge^:svg:|', ':svg:feMergeNode^:svg:|', ':svg:feMorphology^:svg:|', ':svg:feOffset^:svg:|', ':svg:fePointLight^:svg:|', ':svg:feSpecularLighting^:svg:|', ':svg:feSpotLight^:svg:|', ':svg:feTile^:svg:|', ':svg:feTurbulence^:svg:|', ':svg:filter^:svg:|', ':svg:foreignObject^:svg:graphics|', ':svg:g^:svg:graphics|', ':svg:image^:svg:graphics|decoding', ':svg:line^:svg:geometry|', ':svg:linearGradient^:svg:gradient|', ':svg:mpath^:svg:|', ':svg:marker^:svg:|', ':svg:mask^:svg:|', ':svg:metadata^:svg:|', ':svg:path^:svg:geometry|', ':svg:pattern^:svg:|', ':svg:polygon^:svg:geometry|', ':svg:polyline^:svg:geometry|', ':svg:radialGradient^:svg:gradient|', ':svg:rect^:svg:geometry|', ':svg:svg^:svg:graphics|#currentScale,#zoomAndPan', ':svg:script^:svg:|type', ':svg:set^:svg:animation|', ':svg:stop^:svg:|', ':svg:style^:svg:|!disabled,media,title,type', ':svg:switch^:svg:graphics|', ':svg:symbol^:svg:|', ':svg:tspan^:svg:textPositioning|', ':svg:text^:svg:textPositioning|', ':svg:textPath^:svg:textContent|', ':svg:title^:svg:|', ':svg:use^:svg:graphics|', ':svg:view^:svg:|#zoomAndPan', 'data^[HTMLElement]|value', 'keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name', 'menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default', 'summary^[HTMLElement]|', 'time^[HTMLElement]|dateTime', ':svg:cursor^:svg:|', ':math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex', ':math:math^:math:|', ':math:maction^:math:|', ':math:menclose^:math:|', ':math:merror^:math:|', ':math:mfenced^:math:|', ':math:mfrac^:math:|', ':math:mi^:math:|', ':math:mmultiscripts^:math:|', ':math:mn^:math:|', ':math:mo^:math:|', ':math:mover^:math:|', ':math:mpadded^:math:|', ':math:mphantom^:math:|', ':math:mroot^:math:|', ':math:mrow^:math:|', ':math:ms^:math:|', ':math:mspace^:math:|', ':math:msqrt^:math:|', ':math:mstyle^:math:|', ':math:msub^:math:|', ':math:msubsup^:math:|', ':math:msup^:math:|', ':math:mtable^:math:|', ':math:mtd^:math:|', ':math:mtext^:math:|', ':math:mtr^:math:|', ':math:munder^:math:|', ':math:munderover^:math:|', ':math:semantics^:math:|'],
    Dn = new Map(Object.entries({ class: 'className', for: 'htmlFor', formaction: 'formAction', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex', 'aria-activedescendant': 'ariaActiveDescendantElement', 'aria-atomic': 'ariaAtomic', 'aria-autocomplete': 'ariaAutoComplete', 'aria-busy': 'ariaBusy', 'aria-checked': 'ariaChecked', 'aria-colcount': 'ariaColCount', 'aria-colindex': 'ariaColIndex', 'aria-colindextext': 'ariaColIndexText', 'aria-colspan': 'ariaColSpan', 'aria-controls': 'ariaControlsElements', 'aria-current': 'ariaCurrent', 'aria-describedby': 'ariaDescribedByElements', 'aria-description': 'ariaDescription', 'aria-details': 'ariaDetailsElements', 'aria-disabled': 'ariaDisabled', 'aria-errormessage': 'ariaErrorMessageElements', 'aria-expanded': 'ariaExpanded', 'aria-flowto': 'ariaFlowToElements', 'aria-haspopup': 'ariaHasPopup', 'aria-hidden': 'ariaHidden', 'aria-invalid': 'ariaInvalid', 'aria-keyshortcuts': 'ariaKeyShortcuts', 'aria-label': 'ariaLabel', 'aria-labelledby': 'ariaLabelledByElements', 'aria-level': 'ariaLevel', 'aria-live': 'ariaLive', 'aria-modal': 'ariaModal', 'aria-multiline': 'ariaMultiLine', 'aria-multiselectable': 'ariaMultiSelectable', 'aria-orientation': 'ariaOrientation', 'aria-owns': 'ariaOwnsElements', 'aria-placeholder': 'ariaPlaceholder', 'aria-posinset': 'ariaPosInSet', 'aria-pressed': 'ariaPressed', 'aria-readonly': 'ariaReadOnly', 'aria-required': 'ariaRequired', 'aria-roledescription': 'ariaRoleDescription', 'aria-rowcount': 'ariaRowCount', 'aria-rowindex': 'ariaRowIndex', 'aria-rowindextext': 'ariaRowIndexText', 'aria-rowspan': 'ariaRowSpan', 'aria-selected': 'ariaSelected', 'aria-setsize': 'ariaSetSize', 'aria-sort': 'ariaSort', 'aria-valuemax': 'ariaValueMax', 'aria-valuemin': 'ariaValueMin', 'aria-valuenow': 'ariaValueNow', 'aria-valuetext': 'ariaValueText' })),
    Mn = Array.from(Dn).reduce((e, [t, n]) => (e.set(t, n), e), new Map()),
    qn = class extends In {
     constructor() {
      (super(),
       (this._schema = new Map()),
       (this._eventSchema = new Map()),
       Fn.forEach((e) => {
        let t = new Map(),
         n = new Set(),
         [r, a] = e.split('|'),
         i = a.split(','),
         [s, o] = r.split('^');
        s.split(',').forEach((e) => {
         (this._schema.set(e.toLowerCase(), t), this._eventSchema.set(e.toLowerCase(), n));
        });
        let l = o && this._schema.get(o.toLowerCase());
        if (l) {
         for (let [e, n] of l) t.set(e, n);
         for (let e of this._eventSchema.get(o.toLowerCase())) n.add(e);
        }
        i.forEach((e) => {
         if (e.length > 0)
          switch (e[0]) {
           case '*':
            n.add(e.substring(1));
            break;
           case '!':
            t.set(e.substring(1), 'boolean');
            break;
           case '#':
            t.set(e.substring(1), 'number');
            break;
           case '%':
            t.set(e.substring(1), 'object');
            break;
           default:
            t.set(e, 'string');
          }
        });
       }));
     }
     hasProperty(e, t, n) {
      if (n.some((e) => e.name === An)) return !0;
      if (e.indexOf('-') > -1) {
       if (wn(e) || Cn(e)) return !1;
       if (n.some((e) => e.name === Nn)) return !0;
      }
      return (this._schema.get(e.toLowerCase()) || this._schema.get('unknown')).has(t);
     }
     hasElement(e, t) {
      return !!(t.some((e) => e.name === An) || (e.indexOf('-') > -1 && (wn(e) || Cn(e) || t.some((e) => e.name === Nn)))) || this._schema.has(e.toLowerCase());
     }
     securityContext(e, t, n) {
      (n && (t = this.getMappedPropName(t)), (e = e.toLowerCase()), (t = t.toLowerCase()));
      let r = On()[e + '|' + t];
      return r || ((r = On()['*|' + t]), r || Ln.NONE);
     }
     getMappedPropName(e) {
      return Dn.get(e) ?? e;
     }
     getDefaultComponentElementName() {
      return 'ng-component';
     }
     validateProperty(e) {
      return e.toLowerCase().startsWith('on') ? { error: !0, msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...\nIf '${e}' is a directive input, make sure the directive is imported by the current module.` } : { error: !1 };
     }
     validateAttribute(e) {
      return e.toLowerCase().startsWith('on') ? { error: !0, msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...` } : { error: !1 };
     }
     allKnownElementNames() {
      return Array.from(this._schema.keys());
     }
     allKnownAttributesOfElement(e) {
      let t = this._schema.get(e.toLowerCase()) || this._schema.get('unknown');
      return Array.from(t.keys()).map((e) => Mn.get(e) ?? e);
     }
     allKnownEventsOfElement(e) {
      return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
     }
     normalizeAnimationStyleProperty(e) {
      return (function (e) {
       return e.replace(Pn, (...e) => e[1].toUpperCase());
      })(e);
     }
     normalizeAnimationStyleValue(e, t, n) {
      let r = '',
       a = n.toString().trim(),
       i = null;
      if (
       (function (e) {
        switch (e) {
         case 'width':
         case 'height':
         case 'minWidth':
         case 'minHeight':
         case 'maxWidth':
         case 'maxHeight':
         case 'left':
         case 'top':
         case 'bottom':
         case 'right':
         case 'fontSize':
         case 'outlineWidth':
         case 'outlineOffset':
         case 'paddingTop':
         case 'paddingLeft':
         case 'paddingBottom':
         case 'paddingRight':
         case 'marginTop':
         case 'marginLeft':
         case 'marginBottom':
         case 'marginRight':
         case 'borderRadius':
         case 'borderWidth':
         case 'borderTopWidth':
         case 'borderLeftWidth':
         case 'borderRightWidth':
         case 'borderBottomWidth':
         case 'textIndent':
          return !0;
         default:
          return !1;
        }
       })(e) &&
       0 !== n &&
       '0' !== n
      )
       if ('number' == typeof n) r = 'px';
       else {
        let e = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
        e && 0 == e[1].length && (i = `Please provide a CSS unit value for ${t}:${n}`);
       }
      return { error: i, value: a + r };
     }
    };
   var Bn,
    Vn,
    Hn = class {
     constructor({ closedByChildren: e, implicitNamespacePrefix: t, contentType: n = kn.PARSABLE_DATA, closedByParent: r = !1, isVoid: a = !1, ignoreFirstLf: i = !1, preventNamespaceInheritance: s = !1, canSelfClose: o = !1 } = {}) {
      ((this.closedByChildren = {}), (this.closedByParent = !1), e && e.length > 0 && e.forEach((e) => (this.closedByChildren[e] = !0)), (this.isVoid = a), (this.closedByParent = r || a), (this.implicitNamespacePrefix = t || null), (this.contentType = n), (this.ignoreFirstLf = i), (this.preventNamespaceInheritance = s), (this.canSelfClose = o ?? a));
     }
     isClosedByChild(e) {
      return this.isVoid || e.toLowerCase() in this.closedByChildren;
     }
     getContentType(e) {
      return 'object' == typeof this.contentType ? ((void 0 === e ? void 0 : this.contentType[e]) ?? this.contentType.default) : this.contentType;
     }
    };
   function $n(e) {
    return (
     Vn ||
      ((Bn = new Hn({ canSelfClose: !0 })),
      (Vn = Object.assign(Object.create(null), { base: new Hn({ isVoid: !0 }), meta: new Hn({ isVoid: !0 }), area: new Hn({ isVoid: !0 }), embed: new Hn({ isVoid: !0 }), link: new Hn({ isVoid: !0 }), img: new Hn({ isVoid: !0 }), input: new Hn({ isVoid: !0 }), param: new Hn({ isVoid: !0 }), hr: new Hn({ isVoid: !0 }), br: new Hn({ isVoid: !0 }), source: new Hn({ isVoid: !0 }), track: new Hn({ isVoid: !0 }), wbr: new Hn({ isVoid: !0 }), p: new Hn({ closedByChildren: ['address', 'article', 'aside', 'blockquote', 'div', 'dl', 'fieldset', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul'], closedByParent: !0 }), thead: new Hn({ closedByChildren: ['tbody', 'tfoot'] }), tbody: new Hn({ closedByChildren: ['tbody', 'tfoot'], closedByParent: !0 }), tfoot: new Hn({ closedByChildren: ['tbody'], closedByParent: !0 }), tr: new Hn({ closedByChildren: ['tr'], closedByParent: !0 }), td: new Hn({ closedByChildren: ['td', 'th'], closedByParent: !0 }), th: new Hn({ closedByChildren: ['td', 'th'], closedByParent: !0 }), col: new Hn({ isVoid: !0 }), svg: new Hn({ implicitNamespacePrefix: 'svg' }), foreignObject: new Hn({ implicitNamespacePrefix: 'svg', preventNamespaceInheritance: !0 }), math: new Hn({ implicitNamespacePrefix: 'math' }), li: new Hn({ closedByChildren: ['li'], closedByParent: !0 }), dt: new Hn({ closedByChildren: ['dt', 'dd'] }), dd: new Hn({ closedByChildren: ['dt', 'dd'], closedByParent: !0 }), rb: new Hn({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: !0 }), rt: new Hn({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: !0 }), rtc: new Hn({ closedByChildren: ['rb', 'rtc', 'rp'], closedByParent: !0 }), rp: new Hn({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: !0 }), optgroup: new Hn({ closedByChildren: ['optgroup'], closedByParent: !0 }), option: new Hn({ closedByChildren: ['option', 'optgroup'], closedByParent: !0 }), pre: new Hn({ ignoreFirstLf: !0 }), listing: new Hn({ ignoreFirstLf: !0 }), style: new Hn({ contentType: kn.RAW_TEXT }), script: new Hn({ contentType: kn.RAW_TEXT }), title: new Hn({ contentType: { default: kn.ESCAPABLE_RAW_TEXT, svg: kn.PARSABLE_DATA } }), textarea: new Hn({ contentType: kn.ESCAPABLE_RAW_TEXT, ignoreFirstLf: !0 }) })),
      new qn().allKnownElementNames().forEach((e) => {
       !Vn[e] && null === En(e) && (Vn[e] = new Hn({ canSelfClose: !1 }));
      })),
     Vn[e] ?? Bn
    );
   }
   function Un(e) {
    return (e >= 9 && e <= 32) || 160 == e;
   }
   function zn(e) {
    return 48 <= e && e <= 57;
   }
   function jn(e) {
    return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
   }
   function Wn(e) {
    return 10 === e || 13 === e;
   }
   function Xn(e) {
    return 48 <= e && e <= 55;
   }
   function Gn(e) {
    return 39 === e || 34 === e || 96 === e;
   }
   var Kn = class e {
     constructor(e, t, n, r) {
      ((this.file = e), (this.offset = t), (this.line = n), (this.col = r));
     }
     toString() {
      return null != this.offset ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
     }
     moveBy(t) {
      let n = this.file.content,
       r = n.length,
       a = this.offset,
       i = this.line,
       s = this.col;
      for (; a > 0 && t < 0; )
       if ((a--, t++, 10 == n.charCodeAt(a))) {
        i--;
        let e = n.substring(0, a - 1).lastIndexOf(String.fromCharCode(10));
        s = e > 0 ? a - e : a;
       } else s--;
      for (; a < r && t > 0; ) {
       let e = n.charCodeAt(a);
       (a++, t--, 10 == e ? (i++, (s = 0)) : s++);
      }
      return new e(this.file, a, i, s);
     }
     getContext(e, t) {
      let n = this.file.content,
       r = this.offset;
      if (null != r) {
       r > n.length - 1 && (r = n.length - 1);
       let a = r,
        i = 0,
        s = 0;
       for (; i < e && r > 0 && (r--, i++, '\n' != n[r] || ++s != t); );
       for (i = 0, s = 0; i < e && a < n.length - 1 && (a++, i++, '\n' != n[a] || ++s != t); );
       return { before: n.substring(r, this.offset), after: n.substring(this.offset, a + 1) };
      }
      return null;
     }
    },
    Yn = class {
     constructor(e, t) {
      ((this.content = e), (this.url = t));
     }
    },
    Zn = class {
     constructor(e, t, n = e, r = null) {
      ((this.start = e), (this.end = t), (this.fullStart = n), (this.details = r));
     }
     toString() {
      return this.start.file.content.substring(this.start.offset, this.end.offset);
     }
    },
    Jn = (function (e) {
     return ((e[(e.WARNING = 0)] = 'WARNING'), (e[(e.ERROR = 1)] = 'ERROR'), e);
    })({}),
    Qn = class extends Error {
     constructor(e, t, n = Jn.ERROR, r) {
      (super(t), (this.span = e), (this.msg = t), (this.level = n), (this.relatedError = r), Object.setPrototypeOf(this, new.target.prototype));
     }
     contextualMessage() {
      let e = this.span.start.getContext(100, 3);
      return e ? `${this.msg} ("${e.before}[${Jn[this.level]} ->]${e.after}")` : this.msg;
     }
     toString() {
      let e = this.span.details ? `, ${this.span.details}` : '';
      return `${this.contextualMessage()}: ${this.span.start}${e}`;
     }
    },
    er = class {
     constructor(e, t) {
      ((this.sourceSpan = e), (this.i18n = t));
     }
    },
    tr = class extends er {
     constructor(e, t, n, r) {
      (super(t, r), (this.value = e), (this.tokens = n), (this.kind = 'text'));
     }
     visit(e, t) {
      return e.visitText(this, t);
     }
    },
    nr = class extends er {
     constructor(e, t, n, r) {
      (super(t, r), (this.value = e), (this.tokens = n), (this.kind = 'cdata'));
     }
     visit(e, t) {
      return e.visitCdata(this, t);
     }
    },
    rr = class extends er {
     constructor(e, t, n, r, a, i) {
      (super(r, i), (this.switchValue = e), (this.type = t), (this.cases = n), (this.switchValueSourceSpan = a), (this.kind = 'expansion'));
     }
     visit(e, t) {
      return e.visitExpansion(this, t);
     }
    },
    ar = class {
     constructor(e, t, n, r, a) {
      ((this.value = e), (this.expression = t), (this.sourceSpan = n), (this.valueSourceSpan = r), (this.expSourceSpan = a), (this.kind = 'expansionCase'));
     }
     visit(e, t) {
      return e.visitExpansionCase(this, t);
     }
    },
    ir = class extends er {
     constructor(e, t, n, r, a, i, s) {
      (super(n, s), (this.name = e), (this.value = t), (this.keySpan = r), (this.valueSpan = a), (this.valueTokens = i), (this.kind = 'attribute'));
     }
     visit(e, t) {
      return e.visitAttribute(this, t);
     }
     get nameSpan() {
      return this.keySpan;
     }
    },
    sr = class extends er {
     constructor(e, t, n, r, a, i, s, o = null, l = null, c, u) {
      (super(i, u), (this.name = e), (this.attrs = t), (this.directives = n), (this.children = r), (this.isSelfClosing = a), (this.startSourceSpan = s), (this.endSourceSpan = o), (this.nameSpan = l), (this.isVoid = c), (this.kind = 'element'));
     }
     visit(e, t) {
      return e.visitElement(this, t);
     }
    },
    or = class {
     constructor(e, t) {
      ((this.value = e), (this.sourceSpan = t), (this.kind = 'comment'));
     }
     visit(e, t) {
      return e.visitComment(this, t);
     }
    },
    lr = class {
     constructor(e, t) {
      ((this.value = e), (this.sourceSpan = t), (this.kind = 'docType'));
     }
     visit(e, t) {
      return e.visitDocType(this, t);
     }
    },
    cr = class extends er {
     constructor(e, t, n, r, a, i, s = null, o) {
      (super(r, o), (this.name = e), (this.parameters = t), (this.children = n), (this.nameSpan = a), (this.startSourceSpan = i), (this.endSourceSpan = s), (this.kind = 'block'));
     }
     visit(e, t) {
      return e.visitBlock(this, t);
     }
    },
    ur = class extends er {
     constructor(e, t, n, r, a, i, s, o, l, c = null, u) {
      (super(o, u), (this.componentName = e), (this.tagName = t), (this.fullName = n), (this.attrs = r), (this.directives = a), (this.children = i), (this.isSelfClosing = s), (this.startSourceSpan = l), (this.endSourceSpan = c), (this.kind = 'component'));
     }
     visit(e, t) {
      return e.visitComponent(this, t);
     }
    },
    pr = class {
     constructor(e, t, n, r, a = null) {
      ((this.name = e), (this.attrs = t), (this.sourceSpan = n), (this.startSourceSpan = r), (this.endSourceSpan = a), (this.kind = 'directive'));
     }
     visit(e, t) {
      return e.visitDirective(this, t);
     }
    },
    dr = class {
     constructor(e, t) {
      ((this.expression = e), (this.sourceSpan = t), (this.kind = 'blockParameter'), (this.startSourceSpan = null), (this.endSourceSpan = null));
     }
     visit(e, t) {
      return e.visitBlockParameter(this, t);
     }
    },
    hr = class {
     constructor(e, t, n, r, a) {
      ((this.name = e), (this.value = t), (this.sourceSpan = n), (this.nameSpan = r), (this.valueSpan = a), (this.kind = 'letDeclaration'), (this.startSourceSpan = null), (this.endSourceSpan = null));
     }
     visit(e, t) {
      return e.visitLetDeclaration(this, t);
     }
    };
   function fr(e, t, n = null) {
    let r = [],
     a = e.visit ? (t) => e.visit(t, n) || t.visit(e, n) : (t) => t.visit(e, n);
    return (
     t.forEach((e) => {
      let t = a(e);
      t && r.push(t);
     }),
     r
    );
   }
   var mr = class {
     constructor() {}
     visitElement(e, t) {
      this.visitChildren(t, (t) => {
       (t(e.attrs), t(e.directives), t(e.children));
      });
     }
     visitAttribute(e, t) {}
     visitText(e, t) {}
     visitCdata(e, t) {}
     visitComment(e, t) {}
     visitDocType(e, t) {}
     visitExpansion(e, t) {
      return this.visitChildren(t, (t) => {
       t(e.cases);
      });
     }
     visitExpansionCase(e, t) {}
     visitBlock(e, t) {
      this.visitChildren(t, (t) => {
       (t(e.parameters), t(e.children));
      });
     }
     visitBlockParameter(e, t) {}
     visitLetDeclaration(e, t) {}
     visitComponent(e, t) {
      this.visitChildren(t, (t) => {
       (t(e.attrs), t(e.children));
      });
     }
     visitDirective(e, t) {
      this.visitChildren(t, (t) => {
       t(e.attrs);
      });
     }
     visitChildren(e, t) {
      let n = [],
       r = this;
      return (
       t(function (t) {
        t && n.push(fr(r, t, e));
       }),
       Array.prototype.concat.apply([], n)
      );
     }
    },
    gr = { AElig: '\xc6', AMP: '&', amp: '&', Aacute: '\xc1', Abreve: '\u0102', Acirc: '\xc2', Acy: '\u0410', Afr: '\ud835\udd04', Agrave: '\xc0', Alpha: '\u0391', Amacr: '\u0100', And: '\u2a53', Aogon: '\u0104', Aopf: '\ud835\udd38', ApplyFunction: '\u2061', af: '\u2061', Aring: '\xc5', angst: '\xc5', Ascr: '\ud835\udc9c', Assign: '\u2254', colone: '\u2254', coloneq: '\u2254', Atilde: '\xc3', Auml: '\xc4', Backslash: '\u2216', setminus: '\u2216', setmn: '\u2216', smallsetminus: '\u2216', ssetmn: '\u2216', Barv: '\u2ae7', Barwed: '\u2306', doublebarwedge: '\u2306', Bcy: '\u0411', Because: '\u2235', becaus: '\u2235', because: '\u2235', Bernoullis: '\u212c', Bscr: '\u212c', bernou: '\u212c', Beta: '\u0392', Bfr: '\ud835\udd05', Bopf: '\ud835\udd39', Breve: '\u02d8', breve: '\u02d8', Bumpeq: '\u224e', HumpDownHump: '\u224e', bump: '\u224e', CHcy: '\u0427', COPY: '\xa9', copy: '\xa9', Cacute: '\u0106', Cap: '\u22d2', CapitalDifferentialD: '\u2145', DD: '\u2145', Cayleys: '\u212d', Cfr: '\u212d', Ccaron: '\u010c', Ccedil: '\xc7', Ccirc: '\u0108', Cconint: '\u2230', Cdot: '\u010a', Cedilla: '\xb8', cedil: '\xb8', CenterDot: '\xb7', centerdot: '\xb7', middot: '\xb7', Chi: '\u03a7', CircleDot: '\u2299', odot: '\u2299', CircleMinus: '\u2296', ominus: '\u2296', CirclePlus: '\u2295', oplus: '\u2295', CircleTimes: '\u2297', otimes: '\u2297', ClockwiseContourIntegral: '\u2232', cwconint: '\u2232', CloseCurlyDoubleQuote: '\u201d', rdquo: '\u201d', rdquor: '\u201d', CloseCurlyQuote: '\u2019', rsquo: '\u2019', rsquor: '\u2019', Colon: '\u2237', Proportion: '\u2237', Colone: '\u2a74', Congruent: '\u2261', equiv: '\u2261', Conint: '\u222f', DoubleContourIntegral: '\u222f', ContourIntegral: '\u222e', conint: '\u222e', oint: '\u222e', Copf: '\u2102', complexes: '\u2102', Coproduct: '\u2210', coprod: '\u2210', CounterClockwiseContourIntegral: '\u2233', awconint: '\u2233', Cross: '\u2a2f', Cscr: '\ud835\udc9e', Cup: '\u22d3', CupCap: '\u224d', asympeq: '\u224d', DDotrahd: '\u2911', DJcy: '\u0402', DScy: '\u0405', DZcy: '\u040f', Dagger: '\u2021', ddagger: '\u2021', Darr: '\u21a1', Dashv: '\u2ae4', DoubleLeftTee: '\u2ae4', Dcaron: '\u010e', Dcy: '\u0414', Del: '\u2207', nabla: '\u2207', Delta: '\u0394', Dfr: '\ud835\udd07', DiacriticalAcute: '\xb4', acute: '\xb4', DiacriticalDot: '\u02d9', dot: '\u02d9', DiacriticalDoubleAcute: '\u02dd', dblac: '\u02dd', DiacriticalGrave: '`', grave: '`', DiacriticalTilde: '\u02dc', tilde: '\u02dc', Diamond: '\u22c4', diam: '\u22c4', diamond: '\u22c4', DifferentialD: '\u2146', dd: '\u2146', Dopf: '\ud835\udd3b', Dot: '\xa8', DoubleDot: '\xa8', die: '\xa8', uml: '\xa8', DotDot: '\u20dc', DotEqual: '\u2250', doteq: '\u2250', esdot: '\u2250', DoubleDownArrow: '\u21d3', Downarrow: '\u21d3', dArr: '\u21d3', DoubleLeftArrow: '\u21d0', Leftarrow: '\u21d0', lArr: '\u21d0', DoubleLeftRightArrow: '\u21d4', Leftrightarrow: '\u21d4', hArr: '\u21d4', iff: '\u21d4', DoubleLongLeftArrow: '\u27f8', Longleftarrow: '\u27f8', xlArr: '\u27f8', DoubleLongLeftRightArrow: '\u27fa', Longleftrightarrow: '\u27fa', xhArr: '\u27fa', DoubleLongRightArrow: '\u27f9', Longrightarrow: '\u27f9', xrArr: '\u27f9', DoubleRightArrow: '\u21d2', Implies: '\u21d2', Rightarrow: '\u21d2', rArr: '\u21d2', DoubleRightTee: '\u22a8', vDash: '\u22a8', DoubleUpArrow: '\u21d1', Uparrow: '\u21d1', uArr: '\u21d1', DoubleUpDownArrow: '\u21d5', Updownarrow: '\u21d5', vArr: '\u21d5', DoubleVerticalBar: '\u2225', par: '\u2225', parallel: '\u2225', shortparallel: '\u2225', spar: '\u2225', DownArrow: '\u2193', ShortDownArrow: '\u2193', darr: '\u2193', downarrow: '\u2193', DownArrowBar: '\u2913', DownArrowUpArrow: '\u21f5', duarr: '\u21f5', DownBreve: '\u0311', DownLeftRightVector: '\u2950', DownLeftTeeVector: '\u295e', DownLeftVector: '\u21bd', leftharpoondown: '\u21bd', lhard: '\u21bd', DownLeftVectorBar: '\u2956', DownRightTeeVector: '\u295f', DownRightVector: '\u21c1', rhard: '\u21c1', rightharpoondown: '\u21c1', DownRightVectorBar: '\u2957', DownTee: '\u22a4', top: '\u22a4', DownTeeArrow: '\u21a7', mapstodown: '\u21a7', Dscr: '\ud835\udc9f', Dstrok: '\u0110', ENG: '\u014a', ETH: '\xd0', Eacute: '\xc9', Ecaron: '\u011a', Ecirc: '\xca', Ecy: '\u042d', Edot: '\u0116', Efr: '\ud835\udd08', Egrave: '\xc8', Element: '\u2208', in: '\u2208', isin: '\u2208', isinv: '\u2208', Emacr: '\u0112', EmptySmallSquare: '\u25fb', EmptyVerySmallSquare: '\u25ab', Eogon: '\u0118', Eopf: '\ud835\udd3c', Epsilon: '\u0395', Equal: '\u2a75', EqualTilde: '\u2242', eqsim: '\u2242', esim: '\u2242', Equilibrium: '\u21cc', rightleftharpoons: '\u21cc', rlhar: '\u21cc', Escr: '\u2130', expectation: '\u2130', Esim: '\u2a73', Eta: '\u0397', Euml: '\xcb', Exists: '\u2203', exist: '\u2203', ExponentialE: '\u2147', ee: '\u2147', exponentiale: '\u2147', Fcy: '\u0424', Ffr: '\ud835\udd09', FilledSmallSquare: '\u25fc', FilledVerySmallSquare: '\u25aa', blacksquare: '\u25aa', squarf: '\u25aa', squf: '\u25aa', Fopf: '\ud835\udd3d', ForAll: '\u2200', forall: '\u2200', Fouriertrf: '\u2131', Fscr: '\u2131', GJcy: '\u0403', GT: '>', gt: '>', Gamma: '\u0393', Gammad: '\u03dc', Gbreve: '\u011e', Gcedil: '\u0122', Gcirc: '\u011c', Gcy: '\u0413', Gdot: '\u0120', Gfr: '\ud835\udd0a', Gg: '\u22d9', ggg: '\u22d9', Gopf: '\ud835\udd3e', GreaterEqual: '\u2265', ge: '\u2265', geq: '\u2265', GreaterEqualLess: '\u22db', gel: '\u22db', gtreqless: '\u22db', GreaterFullEqual: '\u2267', gE: '\u2267', geqq: '\u2267', GreaterGreater: '\u2aa2', GreaterLess: '\u2277', gl: '\u2277', gtrless: '\u2277', GreaterSlantEqual: '\u2a7e', geqslant: '\u2a7e', ges: '\u2a7e', GreaterTilde: '\u2273', gsim: '\u2273', gtrsim: '\u2273', Gscr: '\ud835\udca2', Gt: '\u226b', NestedGreaterGreater: '\u226b', gg: '\u226b', HARDcy: '\u042a', Hacek: '\u02c7', caron: '\u02c7', Hat: '^', Hcirc: '\u0124', Hfr: '\u210c', Poincareplane: '\u210c', HilbertSpace: '\u210b', Hscr: '\u210b', hamilt: '\u210b', Hopf: '\u210d', quaternions: '\u210d', HorizontalLine: '\u2500', boxh: '\u2500', Hstrok: '\u0126', HumpEqual: '\u224f', bumpe: '\u224f', bumpeq: '\u224f', IEcy: '\u0415', IJlig: '\u0132', IOcy: '\u0401', Iacute: '\xcd', Icirc: '\xce', Icy: '\u0418', Idot: '\u0130', Ifr: '\u2111', Im: '\u2111', image: '\u2111', imagpart: '\u2111', Igrave: '\xcc', Imacr: '\u012a', ImaginaryI: '\u2148', ii: '\u2148', Int: '\u222c', Integral: '\u222b', int: '\u222b', Intersection: '\u22c2', bigcap: '\u22c2', xcap: '\u22c2', InvisibleComma: '\u2063', ic: '\u2063', InvisibleTimes: '\u2062', it: '\u2062', Iogon: '\u012e', Iopf: '\ud835\udd40', Iota: '\u0399', Iscr: '\u2110', imagline: '\u2110', Itilde: '\u0128', Iukcy: '\u0406', Iuml: '\xcf', Jcirc: '\u0134', Jcy: '\u0419', Jfr: '\ud835\udd0d', Jopf: '\ud835\udd41', Jscr: '\ud835\udca5', Jsercy: '\u0408', Jukcy: '\u0404', KHcy: '\u0425', KJcy: '\u040c', Kappa: '\u039a', Kcedil: '\u0136', Kcy: '\u041a', Kfr: '\ud835\udd0e', Kopf: '\ud835\udd42', Kscr: '\ud835\udca6', LJcy: '\u0409', LT: '<', lt: '<', Lacute: '\u0139', Lambda: '\u039b', Lang: '\u27ea', Laplacetrf: '\u2112', Lscr: '\u2112', lagran: '\u2112', Larr: '\u219e', twoheadleftarrow: '\u219e', Lcaron: '\u013d', Lcedil: '\u013b', Lcy: '\u041b', LeftAngleBracket: '\u27e8', lang: '\u27e8', langle: '\u27e8', LeftArrow: '\u2190', ShortLeftArrow: '\u2190', larr: '\u2190', leftarrow: '\u2190', slarr: '\u2190', LeftArrowBar: '\u21e4', larrb: '\u21e4', LeftArrowRightArrow: '\u21c6', leftrightarrows: '\u21c6', lrarr: '\u21c6', LeftCeiling: '\u2308', lceil: '\u2308', LeftDoubleBracket: '\u27e6', lobrk: '\u27e6', LeftDownTeeVector: '\u2961', LeftDownVector: '\u21c3', dharl: '\u21c3', downharpoonleft: '\u21c3', LeftDownVectorBar: '\u2959', LeftFloor: '\u230a', lfloor: '\u230a', LeftRightArrow: '\u2194', harr: '\u2194', leftrightarrow: '\u2194', LeftRightVector: '\u294e', LeftTee: '\u22a3', dashv: '\u22a3', LeftTeeArrow: '\u21a4', mapstoleft: '\u21a4', LeftTeeVector: '\u295a', LeftTriangle: '\u22b2', vartriangleleft: '\u22b2', vltri: '\u22b2', LeftTriangleBar: '\u29cf', LeftTriangleEqual: '\u22b4', ltrie: '\u22b4', trianglelefteq: '\u22b4', LeftUpDownVector: '\u2951', LeftUpTeeVector: '\u2960', LeftUpVector: '\u21bf', uharl: '\u21bf', upharpoonleft: '\u21bf', LeftUpVectorBar: '\u2958', LeftVector: '\u21bc', leftharpoonup: '\u21bc', lharu: '\u21bc', LeftVectorBar: '\u2952', LessEqualGreater: '\u22da', leg: '\u22da', lesseqgtr: '\u22da', LessFullEqual: '\u2266', lE: '\u2266', leqq: '\u2266', LessGreater: '\u2276', lessgtr: '\u2276', lg: '\u2276', LessLess: '\u2aa1', LessSlantEqual: '\u2a7d', leqslant: '\u2a7d', les: '\u2a7d', LessTilde: '\u2272', lesssim: '\u2272', lsim: '\u2272', Lfr: '\ud835\udd0f', Ll: '\u22d8', Lleftarrow: '\u21da', lAarr: '\u21da', Lmidot: '\u013f', LongLeftArrow: '\u27f5', longleftarrow: '\u27f5', xlarr: '\u27f5', LongLeftRightArrow: '\u27f7', longleftrightarrow: '\u27f7', xharr: '\u27f7', LongRightArrow: '\u27f6', longrightarrow: '\u27f6', xrarr: '\u27f6', Lopf: '\ud835\udd43', LowerLeftArrow: '\u2199', swarr: '\u2199', swarrow: '\u2199', LowerRightArrow: '\u2198', searr: '\u2198', searrow: '\u2198', Lsh: '\u21b0', lsh: '\u21b0', Lstrok: '\u0141', Lt: '\u226a', NestedLessLess: '\u226a', ll: '\u226a', Map: '\u2905', Mcy: '\u041c', MediumSpace: '\u205f', Mellintrf: '\u2133', Mscr: '\u2133', phmmat: '\u2133', Mfr: '\ud835\udd10', MinusPlus: '\u2213', mnplus: '\u2213', mp: '\u2213', Mopf: '\ud835\udd44', Mu: '\u039c', NJcy: '\u040a', Nacute: '\u0143', Ncaron: '\u0147', Ncedil: '\u0145', Ncy: '\u041d', NegativeMediumSpace: '\u200b', NegativeThickSpace: '\u200b', NegativeThinSpace: '\u200b', NegativeVeryThinSpace: '\u200b', ZeroWidthSpace: '\u200b', NewLine: '\n', Nfr: '\ud835\udd11', NoBreak: '\u2060', NonBreakingSpace: '\xa0', nbsp: '\xa0', Nopf: '\u2115', naturals: '\u2115', Not: '\u2aec', NotCongruent: '\u2262', nequiv: '\u2262', NotCupCap: '\u226d', NotDoubleVerticalBar: '\u2226', npar: '\u2226', nparallel: '\u2226', nshortparallel: '\u2226', nspar: '\u2226', NotElement: '\u2209', notin: '\u2209', notinva: '\u2209', NotEqual: '\u2260', ne: '\u2260', NotEqualTilde: '\u2242\u0338', nesim: '\u2242\u0338', NotExists: '\u2204', nexist: '\u2204', nexists: '\u2204', NotGreater: '\u226f', ngt: '\u226f', ngtr: '\u226f', NotGreaterEqual: '\u2271', nge: '\u2271', ngeq: '\u2271', NotGreaterFullEqual: '\u2267\u0338', ngE: '\u2267\u0338', ngeqq: '\u2267\u0338', NotGreaterGreater: '\u226b\u0338', nGtv: '\u226b\u0338', NotGreaterLess: '\u2279', ntgl: '\u2279', NotGreaterSlantEqual: '\u2a7e\u0338', ngeqslant: '\u2a7e\u0338', nges: '\u2a7e\u0338', NotGreaterTilde: '\u2275', ngsim: '\u2275', NotHumpDownHump: '\u224e\u0338', nbump: '\u224e\u0338', NotHumpEqual: '\u224f\u0338', nbumpe: '\u224f\u0338', NotLeftTriangle: '\u22ea', nltri: '\u22ea', ntriangleleft: '\u22ea', NotLeftTriangleBar: '\u29cf\u0338', NotLeftTriangleEqual: '\u22ec', nltrie: '\u22ec', ntrianglelefteq: '\u22ec', NotLess: '\u226e', nless: '\u226e', nlt: '\u226e', NotLessEqual: '\u2270', nle: '\u2270', nleq: '\u2270', NotLessGreater: '\u2278', ntlg: '\u2278', NotLessLess: '\u226a\u0338', nLtv: '\u226a\u0338', NotLessSlantEqual: '\u2a7d\u0338', nleqslant: '\u2a7d\u0338', nles: '\u2a7d\u0338', NotLessTilde: '\u2274', nlsim: '\u2274', NotNestedGreaterGreater: '\u2aa2\u0338', NotNestedLessLess: '\u2aa1\u0338', NotPrecedes: '\u2280', npr: '\u2280', nprec: '\u2280', NotPrecedesEqual: '\u2aaf\u0338', npre: '\u2aaf\u0338', npreceq: '\u2aaf\u0338', NotPrecedesSlantEqual: '\u22e0', nprcue: '\u22e0', NotReverseElement: '\u220c', notni: '\u220c', notniva: '\u220c', NotRightTriangle: '\u22eb', nrtri: '\u22eb', ntriangleright: '\u22eb', NotRightTriangleBar: '\u29d0\u0338', NotRightTriangleEqual: '\u22ed', nrtrie: '\u22ed', ntrianglerighteq: '\u22ed', NotSquareSubset: '\u228f\u0338', NotSquareSubsetEqual: '\u22e2', nsqsube: '\u22e2', NotSquareSuperset: '\u2290\u0338', NotSquareSupersetEqual: '\u22e3', nsqsupe: '\u22e3', NotSubset: '\u2282\u20d2', nsubset: '\u2282\u20d2', vnsub: '\u2282\u20d2', NotSubsetEqual: '\u2288', nsube: '\u2288', nsubseteq: '\u2288', NotSucceeds: '\u2281', nsc: '\u2281', nsucc: '\u2281', NotSucceedsEqual: '\u2ab0\u0338', nsce: '\u2ab0\u0338', nsucceq: '\u2ab0\u0338', NotSucceedsSlantEqual: '\u22e1', nsccue: '\u22e1', NotSucceedsTilde: '\u227f\u0338', NotSuperset: '\u2283\u20d2', nsupset: '\u2283\u20d2', vnsup: '\u2283\u20d2', NotSupersetEqual: '\u2289', nsupe: '\u2289', nsupseteq: '\u2289', NotTilde: '\u2241', nsim: '\u2241', NotTildeEqual: '\u2244', nsime: '\u2244', nsimeq: '\u2244', NotTildeFullEqual: '\u2247', ncong: '\u2247', NotTildeTilde: '\u2249', nap: '\u2249', napprox: '\u2249', NotVerticalBar: '\u2224', nmid: '\u2224', nshortmid: '\u2224', nsmid: '\u2224', Nscr: '\ud835\udca9', Ntilde: '\xd1', Nu: '\u039d', OElig: '\u0152', Oacute: '\xd3', Ocirc: '\xd4', Ocy: '\u041e', Odblac: '\u0150', Ofr: '\ud835\udd12', Ograve: '\xd2', Omacr: '\u014c', Omega: '\u03a9', ohm: '\u03a9', Omicron: '\u039f', Oopf: '\ud835\udd46', OpenCurlyDoubleQuote: '\u201c', ldquo: '\u201c', OpenCurlyQuote: '\u2018', lsquo: '\u2018', Or: '\u2a54', Oscr: '\ud835\udcaa', Oslash: '\xd8', Otilde: '\xd5', Otimes: '\u2a37', Ouml: '\xd6', OverBar: '\u203e', oline: '\u203e', OverBrace: '\u23de', OverBracket: '\u23b4', tbrk: '\u23b4', OverParenthesis: '\u23dc', PartialD: '\u2202', part: '\u2202', Pcy: '\u041f', Pfr: '\ud835\udd13', Phi: '\u03a6', Pi: '\u03a0', PlusMinus: '\xb1', plusmn: '\xb1', pm: '\xb1', Popf: '\u2119', primes: '\u2119', Pr: '\u2abb', Precedes: '\u227a', pr: '\u227a', prec: '\u227a', PrecedesEqual: '\u2aaf', pre: '\u2aaf', preceq: '\u2aaf', PrecedesSlantEqual: '\u227c', prcue: '\u227c', preccurlyeq: '\u227c', PrecedesTilde: '\u227e', precsim: '\u227e', prsim: '\u227e', Prime: '\u2033', Product: '\u220f', prod: '\u220f', Proportional: '\u221d', prop: '\u221d', propto: '\u221d', varpropto: '\u221d', vprop: '\u221d', Pscr: '\ud835\udcab', Psi: '\u03a8', QUOT: '"', quot: '"', Qfr: '\ud835\udd14', Qopf: '\u211a', rationals: '\u211a', Qscr: '\ud835\udcac', RBarr: '\u2910', drbkarow: '\u2910', REG: '\xae', circledR: '\xae', reg: '\xae', Racute: '\u0154', Rang: '\u27eb', Rarr: '\u21a0', twoheadrightarrow: '\u21a0', Rarrtl: '\u2916', Rcaron: '\u0158', Rcedil: '\u0156', Rcy: '\u0420', Re: '\u211c', Rfr: '\u211c', real: '\u211c', realpart: '\u211c', ReverseElement: '\u220b', SuchThat: '\u220b', ni: '\u220b', niv: '\u220b', ReverseEquilibrium: '\u21cb', leftrightharpoons: '\u21cb', lrhar: '\u21cb', ReverseUpEquilibrium: '\u296f', duhar: '\u296f', Rho: '\u03a1', RightAngleBracket: '\u27e9', rang: '\u27e9', rangle: '\u27e9', RightArrow: '\u2192', ShortRightArrow: '\u2192', rarr: '\u2192', rightarrow: '\u2192', srarr: '\u2192', RightArrowBar: '\u21e5', rarrb: '\u21e5', RightArrowLeftArrow: '\u21c4', rightleftarrows: '\u21c4', rlarr: '\u21c4', RightCeiling: '\u2309', rceil: '\u2309', RightDoubleBracket: '\u27e7', robrk: '\u27e7', RightDownTeeVector: '\u295d', RightDownVector: '\u21c2', dharr: '\u21c2', downharpoonright: '\u21c2', RightDownVectorBar: '\u2955', RightFloor: '\u230b', rfloor: '\u230b', RightTee: '\u22a2', vdash: '\u22a2', RightTeeArrow: '\u21a6', map: '\u21a6', mapsto: '\u21a6', RightTeeVector: '\u295b', RightTriangle: '\u22b3', vartriangleright: '\u22b3', vrtri: '\u22b3', RightTriangleBar: '\u29d0', RightTriangleEqual: '\u22b5', rtrie: '\u22b5', trianglerighteq: '\u22b5', RightUpDownVector: '\u294f', RightUpTeeVector: '\u295c', RightUpVector: '\u21be', uharr: '\u21be', upharpoonright: '\u21be', RightUpVectorBar: '\u2954', RightVector: '\u21c0', rharu: '\u21c0', rightharpoonup: '\u21c0', RightVectorBar: '\u2953', Ropf: '\u211d', reals: '\u211d', RoundImplies: '\u2970', Rrightarrow: '\u21db', rAarr: '\u21db', Rscr: '\u211b', realine: '\u211b', Rsh: '\u21b1', rsh: '\u21b1', RuleDelayed: '\u29f4', SHCHcy: '\u0429', SHcy: '\u0428', SOFTcy: '\u042c', Sacute: '\u015a', Sc: '\u2abc', Scaron: '\u0160', Scedil: '\u015e', Scirc: '\u015c', Scy: '\u0421', Sfr: '\ud835\udd16', ShortUpArrow: '\u2191', UpArrow: '\u2191', uarr: '\u2191', uparrow: '\u2191', Sigma: '\u03a3', SmallCircle: '\u2218', compfn: '\u2218', Sopf: '\ud835\udd4a', Sqrt: '\u221a', radic: '\u221a', Square: '\u25a1', squ: '\u25a1', square: '\u25a1', SquareIntersection: '\u2293', sqcap: '\u2293', SquareSubset: '\u228f', sqsub: '\u228f', sqsubset: '\u228f', SquareSubsetEqual: '\u2291', sqsube: '\u2291', sqsubseteq: '\u2291', SquareSuperset: '\u2290', sqsup: '\u2290', sqsupset: '\u2290', SquareSupersetEqual: '\u2292', sqsupe: '\u2292', sqsupseteq: '\u2292', SquareUnion: '\u2294', sqcup: '\u2294', Sscr: '\ud835\udcae', Star: '\u22c6', sstarf: '\u22c6', Sub: '\u22d0', Subset: '\u22d0', SubsetEqual: '\u2286', sube: '\u2286', subseteq: '\u2286', Succeeds: '\u227b', sc: '\u227b', succ: '\u227b', SucceedsEqual: '\u2ab0', sce: '\u2ab0', succeq: '\u2ab0', SucceedsSlantEqual: '\u227d', sccue: '\u227d', succcurlyeq: '\u227d', SucceedsTilde: '\u227f', scsim: '\u227f', succsim: '\u227f', Sum: '\u2211', sum: '\u2211', Sup: '\u22d1', Supset: '\u22d1', Superset: '\u2283', sup: '\u2283', supset: '\u2283', SupersetEqual: '\u2287', supe: '\u2287', supseteq: '\u2287', THORN: '\xde', TRADE: '\u2122', trade: '\u2122', TSHcy: '\u040b', TScy: '\u0426', Tab: '\t', Tau: '\u03a4', Tcaron: '\u0164', Tcedil: '\u0162', Tcy: '\u0422', Tfr: '\ud835\udd17', Therefore: '\u2234', there4: '\u2234', therefore: '\u2234', Theta: '\u0398', ThickSpace: '\u205f\u200a', ThinSpace: '\u2009', thinsp: '\u2009', Tilde: '\u223c', sim: '\u223c', thicksim: '\u223c', thksim: '\u223c', TildeEqual: '\u2243', sime: '\u2243', simeq: '\u2243', TildeFullEqual: '\u2245', cong: '\u2245', TildeTilde: '\u2248', ap: '\u2248', approx: '\u2248', asymp: '\u2248', thickapprox: '\u2248', thkap: '\u2248', Topf: '\ud835\udd4b', TripleDot: '\u20db', tdot: '\u20db', Tscr: '\ud835\udcaf', Tstrok: '\u0166', Uacute: '\xda', Uarr: '\u219f', Uarrocir: '\u2949', Ubrcy: '\u040e', Ubreve: '\u016c', Ucirc: '\xdb', Ucy: '\u0423', Udblac: '\u0170', Ufr: '\ud835\udd18', Ugrave: '\xd9', Umacr: '\u016a', UnderBar: '_', lowbar: '_', UnderBrace: '\u23df', UnderBracket: '\u23b5', bbrk: '\u23b5', UnderParenthesis: '\u23dd', Union: '\u22c3', bigcup: '\u22c3', xcup: '\u22c3', UnionPlus: '\u228e', uplus: '\u228e', Uogon: '\u0172', Uopf: '\ud835\udd4c', UpArrowBar: '\u2912', UpArrowDownArrow: '\u21c5', udarr: '\u21c5', UpDownArrow: '\u2195', updownarrow: '\u2195', varr: '\u2195', UpEquilibrium: '\u296e', udhar: '\u296e', UpTee: '\u22a5', bot: '\u22a5', bottom: '\u22a5', perp: '\u22a5', UpTeeArrow: '\u21a5', mapstoup: '\u21a5', UpperLeftArrow: '\u2196', nwarr: '\u2196', nwarrow: '\u2196', UpperRightArrow: '\u2197', nearr: '\u2197', nearrow: '\u2197', Upsi: '\u03d2', upsih: '\u03d2', Upsilon: '\u03a5', Uring: '\u016e', Uscr: '\ud835\udcb0', Utilde: '\u0168', Uuml: '\xdc', VDash: '\u22ab', Vbar: '\u2aeb', Vcy: '\u0412', Vdash: '\u22a9', Vdashl: '\u2ae6', Vee: '\u22c1', bigvee: '\u22c1', xvee: '\u22c1', Verbar: '\u2016', Vert: '\u2016', VerticalBar: '\u2223', mid: '\u2223', shortmid: '\u2223', smid: '\u2223', VerticalLine: '|', verbar: '|', vert: '|', VerticalSeparator: '\u2758', VerticalTilde: '\u2240', wr: '\u2240', wreath: '\u2240', VeryThinSpace: '\u200a', hairsp: '\u200a', Vfr: '\ud835\udd19', Vopf: '\ud835\udd4d', Vscr: '\ud835\udcb1', Vvdash: '\u22aa', Wcirc: '\u0174', Wedge: '\u22c0', bigwedge: '\u22c0', xwedge: '\u22c0', Wfr: '\ud835\udd1a', Wopf: '\ud835\udd4e', Wscr: '\ud835\udcb2', Xfr: '\ud835\udd1b', Xi: '\u039e', Xopf: '\ud835\udd4f', Xscr: '\ud835\udcb3', YAcy: '\u042f', YIcy: '\u0407', YUcy: '\u042e', Yacute: '\xdd', Ycirc: '\u0176', Ycy: '\u042b', Yfr: '\ud835\udd1c', Yopf: '\ud835\udd50', Yscr: '\ud835\udcb4', Yuml: '\u0178', ZHcy: '\u0416', Zacute: '\u0179', Zcaron: '\u017d', Zcy: '\u0417', Zdot: '\u017b', Zeta: '\u0396', Zfr: '\u2128', zeetrf: '\u2128', Zopf: '\u2124', integers: '\u2124', Zscr: '\ud835\udcb5', aacute: '\xe1', abreve: '\u0103', ac: '\u223e', mstpos: '\u223e', acE: '\u223e\u0333', acd: '\u223f', acirc: '\xe2', acy: '\u0430', aelig: '\xe6', afr: '\ud835\udd1e', agrave: '\xe0', alefsym: '\u2135', aleph: '\u2135', alpha: '\u03b1', amacr: '\u0101', amalg: '\u2a3f', and: '\u2227', wedge: '\u2227', andand: '\u2a55', andd: '\u2a5c', andslope: '\u2a58', andv: '\u2a5a', ang: '\u2220', angle: '\u2220', ange: '\u29a4', angmsd: '\u2221', measuredangle: '\u2221', angmsdaa: '\u29a8', angmsdab: '\u29a9', angmsdac: '\u29aa', angmsdad: '\u29ab', angmsdae: '\u29ac', angmsdaf: '\u29ad', angmsdag: '\u29ae', angmsdah: '\u29af', angrt: '\u221f', angrtvb: '\u22be', angrtvbd: '\u299d', angsph: '\u2222', angzarr: '\u237c', aogon: '\u0105', aopf: '\ud835\udd52', apE: '\u2a70', apacir: '\u2a6f', ape: '\u224a', approxeq: '\u224a', apid: '\u224b', apos: "'", aring: '\xe5', ascr: '\ud835\udcb6', ast: '*', midast: '*', atilde: '\xe3', auml: '\xe4', awint: '\u2a11', bNot: '\u2aed', backcong: '\u224c', bcong: '\u224c', backepsilon: '\u03f6', bepsi: '\u03f6', backprime: '\u2035', bprime: '\u2035', backsim: '\u223d', bsim: '\u223d', backsimeq: '\u22cd', bsime: '\u22cd', barvee: '\u22bd', barwed: '\u2305', barwedge: '\u2305', bbrktbrk: '\u23b6', bcy: '\u0431', bdquo: '\u201e', ldquor: '\u201e', bemptyv: '\u29b0', beta: '\u03b2', beth: '\u2136', between: '\u226c', twixt: '\u226c', bfr: '\ud835\udd1f', bigcirc: '\u25ef', xcirc: '\u25ef', bigodot: '\u2a00', xodot: '\u2a00', bigoplus: '\u2a01', xoplus: '\u2a01', bigotimes: '\u2a02', xotime: '\u2a02', bigsqcup: '\u2a06', xsqcup: '\u2a06', bigstar: '\u2605', starf: '\u2605', bigtriangledown: '\u25bd', xdtri: '\u25bd', bigtriangleup: '\u25b3', xutri: '\u25b3', biguplus: '\u2a04', xuplus: '\u2a04', bkarow: '\u290d', rbarr: '\u290d', blacklozenge: '\u29eb', lozf: '\u29eb', blacktriangle: '\u25b4', utrif: '\u25b4', blacktriangledown: '\u25be', dtrif: '\u25be', blacktriangleleft: '\u25c2', ltrif: '\u25c2', blacktriangleright: '\u25b8', rtrif: '\u25b8', blank: '\u2423', blk12: '\u2592', blk14: '\u2591', blk34: '\u2593', block: '\u2588', bne: '=\u20e5', bnequiv: '\u2261\u20e5', bnot: '\u2310', bopf: '\ud835\udd53', bowtie: '\u22c8', boxDL: '\u2557', boxDR: '\u2554', boxDl: '\u2556', boxDr: '\u2553', boxH: '\u2550', boxHD: '\u2566', boxHU: '\u2569', boxHd: '\u2564', boxHu: '\u2567', boxUL: '\u255d', boxUR: '\u255a', boxUl: '\u255c', boxUr: '\u2559', boxV: '\u2551', boxVH: '\u256c', boxVL: '\u2563', boxVR: '\u2560', boxVh: '\u256b', boxVl: '\u2562', boxVr: '\u255f', boxbox: '\u29c9', boxdL: '\u2555', boxdR: '\u2552', boxdl: '\u2510', boxdr: '\u250c', boxhD: '\u2565', boxhU: '\u2568', boxhd: '\u252c', boxhu: '\u2534', boxminus: '\u229f', minusb: '\u229f', boxplus: '\u229e', plusb: '\u229e', boxtimes: '\u22a0', timesb: '\u22a0', boxuL: '\u255b', boxuR: '\u2558', boxul: '\u2518', boxur: '\u2514', boxv: '\u2502', boxvH: '\u256a', boxvL: '\u2561', boxvR: '\u255e', boxvh: '\u253c', boxvl: '\u2524', boxvr: '\u251c', brvbar: '\xa6', bscr: '\ud835\udcb7', bsemi: '\u204f', bsol: '\\', bsolb: '\u29c5', bsolhsub: '\u27c8', bull: '\u2022', bullet: '\u2022', bumpE: '\u2aae', cacute: '\u0107', cap: '\u2229', capand: '\u2a44', capbrcup: '\u2a49', capcap: '\u2a4b', capcup: '\u2a47', capdot: '\u2a40', caps: '\u2229\ufe00', caret: '\u2041', ccaps: '\u2a4d', ccaron: '\u010d', ccedil: '\xe7', ccirc: '\u0109', ccups: '\u2a4c', ccupssm: '\u2a50', cdot: '\u010b', cemptyv: '\u29b2', cent: '\xa2', cfr: '\ud835\udd20', chcy: '\u0447', check: '\u2713', checkmark: '\u2713', chi: '\u03c7', cir: '\u25cb', cirE: '\u29c3', circ: '\u02c6', circeq: '\u2257', cire: '\u2257', circlearrowleft: '\u21ba', olarr: '\u21ba', circlearrowright: '\u21bb', orarr: '\u21bb', circledS: '\u24c8', oS: '\u24c8', circledast: '\u229b', oast: '\u229b', circledcirc: '\u229a', ocir: '\u229a', circleddash: '\u229d', odash: '\u229d', cirfnint: '\u2a10', cirmid: '\u2aef', cirscir: '\u29c2', clubs: '\u2663', clubsuit: '\u2663', colon: ':', comma: ',', commat: '@', comp: '\u2201', complement: '\u2201', congdot: '\u2a6d', copf: '\ud835\udd54', copysr: '\u2117', crarr: '\u21b5', cross: '\u2717', cscr: '\ud835\udcb8', csub: '\u2acf', csube: '\u2ad1', csup: '\u2ad0', csupe: '\u2ad2', ctdot: '\u22ef', cudarrl: '\u2938', cudarrr: '\u2935', cuepr: '\u22de', curlyeqprec: '\u22de', cuesc: '\u22df', curlyeqsucc: '\u22df', cularr: '\u21b6', curvearrowleft: '\u21b6', cularrp: '\u293d', cup: '\u222a', cupbrcap: '\u2a48', cupcap: '\u2a46', cupcup: '\u2a4a', cupdot: '\u228d', cupor: '\u2a45', cups: '\u222a\ufe00', curarr: '\u21b7', curvearrowright: '\u21b7', curarrm: '\u293c', curlyvee: '\u22ce', cuvee: '\u22ce', curlywedge: '\u22cf', cuwed: '\u22cf', curren: '\xa4', cwint: '\u2231', cylcty: '\u232d', dHar: '\u2965', dagger: '\u2020', daleth: '\u2138', dash: '\u2010', hyphen: '\u2010', dbkarow: '\u290f', rBarr: '\u290f', dcaron: '\u010f', dcy: '\u0434', ddarr: '\u21ca', downdownarrows: '\u21ca', ddotseq: '\u2a77', eDDot: '\u2a77', deg: '\xb0', delta: '\u03b4', demptyv: '\u29b1', dfisht: '\u297f', dfr: '\ud835\udd21', diamondsuit: '\u2666', diams: '\u2666', digamma: '\u03dd', gammad: '\u03dd', disin: '\u22f2', div: '\xf7', divide: '\xf7', divideontimes: '\u22c7', divonx: '\u22c7', djcy: '\u0452', dlcorn: '\u231e', llcorner: '\u231e', dlcrop: '\u230d', dollar: '$', dopf: '\ud835\udd55', doteqdot: '\u2251', eDot: '\u2251', dotminus: '\u2238', minusd: '\u2238', dotplus: '\u2214', plusdo: '\u2214', dotsquare: '\u22a1', sdotb: '\u22a1', drcorn: '\u231f', lrcorner: '\u231f', drcrop: '\u230c', dscr: '\ud835\udcb9', dscy: '\u0455', dsol: '\u29f6', dstrok: '\u0111', dtdot: '\u22f1', dtri: '\u25bf', triangledown: '\u25bf', dwangle: '\u29a6', dzcy: '\u045f', dzigrarr: '\u27ff', eacute: '\xe9', easter: '\u2a6e', ecaron: '\u011b', ecir: '\u2256', eqcirc: '\u2256', ecirc: '\xea', ecolon: '\u2255', eqcolon: '\u2255', ecy: '\u044d', edot: '\u0117', efDot: '\u2252', fallingdotseq: '\u2252', efr: '\ud835\udd22', eg: '\u2a9a', egrave: '\xe8', egs: '\u2a96', eqslantgtr: '\u2a96', egsdot: '\u2a98', el: '\u2a99', elinters: '\u23e7', ell: '\u2113', els: '\u2a95', eqslantless: '\u2a95', elsdot: '\u2a97', emacr: '\u0113', empty: '\u2205', emptyset: '\u2205', emptyv: '\u2205', varnothing: '\u2205', emsp13: '\u2004', emsp14: '\u2005', emsp: '\u2003', eng: '\u014b', ensp: '\u2002', eogon: '\u0119', eopf: '\ud835\udd56', epar: '\u22d5', eparsl: '\u29e3', eplus: '\u2a71', epsi: '\u03b5', epsilon: '\u03b5', epsiv: '\u03f5', straightepsilon: '\u03f5', varepsilon: '\u03f5', equals: '=', equest: '\u225f', questeq: '\u225f', equivDD: '\u2a78', eqvparsl: '\u29e5', erDot: '\u2253', risingdotseq: '\u2253', erarr: '\u2971', escr: '\u212f', eta: '\u03b7', eth: '\xf0', euml: '\xeb', euro: '\u20ac', excl: '!', fcy: '\u0444', female: '\u2640', ffilig: '\ufb03', fflig: '\ufb00', ffllig: '\ufb04', ffr: '\ud835\udd23', filig: '\ufb01', fjlig: 'fj', flat: '\u266d', fllig: '\ufb02', fltns: '\u25b1', fnof: '\u0192', fopf: '\ud835\udd57', fork: '\u22d4', pitchfork: '\u22d4', forkv: '\u2ad9', fpartint: '\u2a0d', frac12: '\xbd', half: '\xbd', frac13: '\u2153', frac14: '\xbc', frac15: '\u2155', frac16: '\u2159', frac18: '\u215b', frac23: '\u2154', frac25: '\u2156', frac34: '\xbe', frac35: '\u2157', frac38: '\u215c', frac45: '\u2158', frac56: '\u215a', frac58: '\u215d', frac78: '\u215e', frasl: '\u2044', frown: '\u2322', sfrown: '\u2322', fscr: '\ud835\udcbb', gEl: '\u2a8c', gtreqqless: '\u2a8c', gacute: '\u01f5', gamma: '\u03b3', gap: '\u2a86', gtrapprox: '\u2a86', gbreve: '\u011f', gcirc: '\u011d', gcy: '\u0433', gdot: '\u0121', gescc: '\u2aa9', gesdot: '\u2a80', gesdoto: '\u2a82', gesdotol: '\u2a84', gesl: '\u22db\ufe00', gesles: '\u2a94', gfr: '\ud835\udd24', gimel: '\u2137', gjcy: '\u0453', glE: '\u2a92', gla: '\u2aa5', glj: '\u2aa4', gnE: '\u2269', gneqq: '\u2269', gnap: '\u2a8a', gnapprox: '\u2a8a', gne: '\u2a88', gneq: '\u2a88', gnsim: '\u22e7', gopf: '\ud835\udd58', gscr: '\u210a', gsime: '\u2a8e', gsiml: '\u2a90', gtcc: '\u2aa7', gtcir: '\u2a7a', gtdot: '\u22d7', gtrdot: '\u22d7', gtlPar: '\u2995', gtquest: '\u2a7c', gtrarr: '\u2978', gvertneqq: '\u2269\ufe00', gvnE: '\u2269\ufe00', hardcy: '\u044a', harrcir: '\u2948', harrw: '\u21ad', leftrightsquigarrow: '\u21ad', hbar: '\u210f', hslash: '\u210f', planck: '\u210f', plankv: '\u210f', hcirc: '\u0125', hearts: '\u2665', heartsuit: '\u2665', hellip: '\u2026', mldr: '\u2026', hercon: '\u22b9', hfr: '\ud835\udd25', hksearow: '\u2925', searhk: '\u2925', hkswarow: '\u2926', swarhk: '\u2926', hoarr: '\u21ff', homtht: '\u223b', hookleftarrow: '\u21a9', larrhk: '\u21a9', hookrightarrow: '\u21aa', rarrhk: '\u21aa', hopf: '\ud835\udd59', horbar: '\u2015', hscr: '\ud835\udcbd', hstrok: '\u0127', hybull: '\u2043', iacute: '\xed', icirc: '\xee', icy: '\u0438', iecy: '\u0435', iexcl: '\xa1', ifr: '\ud835\udd26', igrave: '\xec', iiiint: '\u2a0c', qint: '\u2a0c', iiint: '\u222d', tint: '\u222d', iinfin: '\u29dc', iiota: '\u2129', ijlig: '\u0133', imacr: '\u012b', imath: '\u0131', inodot: '\u0131', imof: '\u22b7', imped: '\u01b5', incare: '\u2105', infin: '\u221e', infintie: '\u29dd', intcal: '\u22ba', intercal: '\u22ba', intlarhk: '\u2a17', intprod: '\u2a3c', iprod: '\u2a3c', iocy: '\u0451', iogon: '\u012f', iopf: '\ud835\udd5a', iota: '\u03b9', iquest: '\xbf', iscr: '\ud835\udcbe', isinE: '\u22f9', isindot: '\u22f5', isins: '\u22f4', isinsv: '\u22f3', itilde: '\u0129', iukcy: '\u0456', iuml: '\xef', jcirc: '\u0135', jcy: '\u0439', jfr: '\ud835\udd27', jmath: '\u0237', jopf: '\ud835\udd5b', jscr: '\ud835\udcbf', jsercy: '\u0458', jukcy: '\u0454', kappa: '\u03ba', kappav: '\u03f0', varkappa: '\u03f0', kcedil: '\u0137', kcy: '\u043a', kfr: '\ud835\udd28', kgreen: '\u0138', khcy: '\u0445', kjcy: '\u045c', kopf: '\ud835\udd5c', kscr: '\ud835\udcc0', lAtail: '\u291b', lBarr: '\u290e', lEg: '\u2a8b', lesseqqgtr: '\u2a8b', lHar: '\u2962', lacute: '\u013a', laemptyv: '\u29b4', lambda: '\u03bb', langd: '\u2991', lap: '\u2a85', lessapprox: '\u2a85', laquo: '\xab', larrbfs: '\u291f', larrfs: '\u291d', larrlp: '\u21ab', looparrowleft: '\u21ab', larrpl: '\u2939', larrsim: '\u2973', larrtl: '\u21a2', leftarrowtail: '\u21a2', lat: '\u2aab', latail: '\u2919', late: '\u2aad', lates: '\u2aad\ufe00', lbarr: '\u290c', lbbrk: '\u2772', lbrace: '{', lcub: '{', lbrack: '[', lsqb: '[', lbrke: '\u298b', lbrksld: '\u298f', lbrkslu: '\u298d', lcaron: '\u013e', lcedil: '\u013c', lcy: '\u043b', ldca: '\u2936', ldrdhar: '\u2967', ldrushar: '\u294b', ldsh: '\u21b2', le: '\u2264', leq: '\u2264', leftleftarrows: '\u21c7', llarr: '\u21c7', leftthreetimes: '\u22cb', lthree: '\u22cb', lescc: '\u2aa8', lesdot: '\u2a7f', lesdoto: '\u2a81', lesdotor: '\u2a83', lesg: '\u22da\ufe00', lesges: '\u2a93', lessdot: '\u22d6', ltdot: '\u22d6', lfisht: '\u297c', lfr: '\ud835\udd29', lgE: '\u2a91', lharul: '\u296a', lhblk: '\u2584', ljcy: '\u0459', llhard: '\u296b', lltri: '\u25fa', lmidot: '\u0140', lmoust: '\u23b0', lmoustache: '\u23b0', lnE: '\u2268', lneqq: '\u2268', lnap: '\u2a89', lnapprox: '\u2a89', lne: '\u2a87', lneq: '\u2a87', lnsim: '\u22e6', loang: '\u27ec', loarr: '\u21fd', longmapsto: '\u27fc', xmap: '\u27fc', looparrowright: '\u21ac', rarrlp: '\u21ac', lopar: '\u2985', lopf: '\ud835\udd5d', loplus: '\u2a2d', lotimes: '\u2a34', lowast: '\u2217', loz: '\u25ca', lozenge: '\u25ca', lpar: '(', lparlt: '\u2993', lrhard: '\u296d', lrm: '\u200e', lrtri: '\u22bf', lsaquo: '\u2039', lscr: '\ud835\udcc1', lsime: '\u2a8d', lsimg: '\u2a8f', lsquor: '\u201a', sbquo: '\u201a', lstrok: '\u0142', ltcc: '\u2aa6', ltcir: '\u2a79', ltimes: '\u22c9', ltlarr: '\u2976', ltquest: '\u2a7b', ltrPar: '\u2996', ltri: '\u25c3', triangleleft: '\u25c3', lurdshar: '\u294a', luruhar: '\u2966', lvertneqq: '\u2268\ufe00', lvnE: '\u2268\ufe00', mDDot: '\u223a', macr: '\xaf', strns: '\xaf', male: '\u2642', malt: '\u2720', maltese: '\u2720', marker: '\u25ae', mcomma: '\u2a29', mcy: '\u043c', mdash: '\u2014', mfr: '\ud835\udd2a', mho: '\u2127', micro: '\xb5', midcir: '\u2af0', minus: '\u2212', minusdu: '\u2a2a', mlcp: '\u2adb', models: '\u22a7', mopf: '\ud835\udd5e', mscr: '\ud835\udcc2', mu: '\u03bc', multimap: '\u22b8', mumap: '\u22b8', nGg: '\u22d9\u0338', nGt: '\u226b\u20d2', nLeftarrow: '\u21cd', nlArr: '\u21cd', nLeftrightarrow: '\u21ce', nhArr: '\u21ce', nLl: '\u22d8\u0338', nLt: '\u226a\u20d2', nRightarrow: '\u21cf', nrArr: '\u21cf', nVDash: '\u22af', nVdash: '\u22ae', nacute: '\u0144', nang: '\u2220\u20d2', napE: '\u2a70\u0338', napid: '\u224b\u0338', napos: '\u0149', natur: '\u266e', natural: '\u266e', ncap: '\u2a43', ncaron: '\u0148', ncedil: '\u0146', ncongdot: '\u2a6d\u0338', ncup: '\u2a42', ncy: '\u043d', ndash: '\u2013', neArr: '\u21d7', nearhk: '\u2924', nedot: '\u2250\u0338', nesear: '\u2928', toea: '\u2928', nfr: '\ud835\udd2b', nharr: '\u21ae', nleftrightarrow: '\u21ae', nhpar: '\u2af2', nis: '\u22fc', nisd: '\u22fa', njcy: '\u045a', nlE: '\u2266\u0338', nleqq: '\u2266\u0338', nlarr: '\u219a', nleftarrow: '\u219a', nldr: '\u2025', nopf: '\ud835\udd5f', not: '\xac', notinE: '\u22f9\u0338', notindot: '\u22f5\u0338', notinvb: '\u22f7', notinvc: '\u22f6', notnivb: '\u22fe', notnivc: '\u22fd', nparsl: '\u2afd\u20e5', npart: '\u2202\u0338', npolint: '\u2a14', nrarr: '\u219b', nrightarrow: '\u219b', nrarrc: '\u2933\u0338', nrarrw: '\u219d\u0338', nscr: '\ud835\udcc3', nsub: '\u2284', nsubE: '\u2ac5\u0338', nsubseteqq: '\u2ac5\u0338', nsup: '\u2285', nsupE: '\u2ac6\u0338', nsupseteqq: '\u2ac6\u0338', ntilde: '\xf1', nu: '\u03bd', num: '#', numero: '\u2116', numsp: '\u2007', nvDash: '\u22ad', nvHarr: '\u2904', nvap: '\u224d\u20d2', nvdash: '\u22ac', nvge: '\u2265\u20d2', nvgt: '>\u20d2', nvinfin: '\u29de', nvlArr: '\u2902', nvle: '\u2264\u20d2', nvlt: '<\u20d2', nvltrie: '\u22b4\u20d2', nvrArr: '\u2903', nvrtrie: '\u22b5\u20d2', nvsim: '\u223c\u20d2', nwArr: '\u21d6', nwarhk: '\u2923', nwnear: '\u2927', oacute: '\xf3', ocirc: '\xf4', ocy: '\u043e', odblac: '\u0151', odiv: '\u2a38', odsold: '\u29bc', oelig: '\u0153', ofcir: '\u29bf', ofr: '\ud835\udd2c', ogon: '\u02db', ograve: '\xf2', ogt: '\u29c1', ohbar: '\u29b5', olcir: '\u29be', olcross: '\u29bb', olt: '\u29c0', omacr: '\u014d', omega: '\u03c9', omicron: '\u03bf', omid: '\u29b6', oopf: '\ud835\udd60', opar: '\u29b7', operp: '\u29b9', or: '\u2228', vee: '\u2228', ord: '\u2a5d', order: '\u2134', orderof: '\u2134', oscr: '\u2134', ordf: '\xaa', ordm: '\xba', origof: '\u22b6', oror: '\u2a56', orslope: '\u2a57', orv: '\u2a5b', oslash: '\xf8', osol: '\u2298', otilde: '\xf5', otimesas: '\u2a36', ouml: '\xf6', ovbar: '\u233d', para: '\xb6', parsim: '\u2af3', parsl: '\u2afd', pcy: '\u043f', percnt: '%', period: '.', permil: '\u2030', pertenk: '\u2031', pfr: '\ud835\udd2d', phi: '\u03c6', phiv: '\u03d5', straightphi: '\u03d5', varphi: '\u03d5', phone: '\u260e', pi: '\u03c0', piv: '\u03d6', varpi: '\u03d6', planckh: '\u210e', plus: '+', plusacir: '\u2a23', pluscir: '\u2a22', plusdu: '\u2a25', pluse: '\u2a72', plussim: '\u2a26', plustwo: '\u2a27', pointint: '\u2a15', popf: '\ud835\udd61', pound: '\xa3', prE: '\u2ab3', prap: '\u2ab7', precapprox: '\u2ab7', precnapprox: '\u2ab9', prnap: '\u2ab9', precneqq: '\u2ab5', prnE: '\u2ab5', precnsim: '\u22e8', prnsim: '\u22e8', prime: '\u2032', profalar: '\u232e', profline: '\u2312', profsurf: '\u2313', prurel: '\u22b0', pscr: '\ud835\udcc5', psi: '\u03c8', puncsp: '\u2008', qfr: '\ud835\udd2e', qopf: '\ud835\udd62', qprime: '\u2057', qscr: '\ud835\udcc6', quatint: '\u2a16', quest: '?', rAtail: '\u291c', rHar: '\u2964', race: '\u223d\u0331', racute: '\u0155', raemptyv: '\u29b3', rangd: '\u2992', range: '\u29a5', raquo: '\xbb', rarrap: '\u2975', rarrbfs: '\u2920', rarrc: '\u2933', rarrfs: '\u291e', rarrpl: '\u2945', rarrsim: '\u2974', rarrtl: '\u21a3', rightarrowtail: '\u21a3', rarrw: '\u219d', rightsquigarrow: '\u219d', ratail: '\u291a', ratio: '\u2236', rbbrk: '\u2773', rbrace: '}', rcub: '}', rbrack: ']', rsqb: ']', rbrke: '\u298c', rbrksld: '\u298e', rbrkslu: '\u2990', rcaron: '\u0159', rcedil: '\u0157', rcy: '\u0440', rdca: '\u2937', rdldhar: '\u2969', rdsh: '\u21b3', rect: '\u25ad', rfisht: '\u297d', rfr: '\ud835\udd2f', rharul: '\u296c', rho: '\u03c1', rhov: '\u03f1', varrho: '\u03f1', rightrightarrows: '\u21c9', rrarr: '\u21c9', rightthreetimes: '\u22cc', rthree: '\u22cc', ring: '\u02da', rlm: '\u200f', rmoust: '\u23b1', rmoustache: '\u23b1', rnmid: '\u2aee', roang: '\u27ed', roarr: '\u21fe', ropar: '\u2986', ropf: '\ud835\udd63', roplus: '\u2a2e', rotimes: '\u2a35', rpar: ')', rpargt: '\u2994', rppolint: '\u2a12', rsaquo: '\u203a', rscr: '\ud835\udcc7', rtimes: '\u22ca', rtri: '\u25b9', triangleright: '\u25b9', rtriltri: '\u29ce', ruluhar: '\u2968', rx: '\u211e', sacute: '\u015b', scE: '\u2ab4', scap: '\u2ab8', succapprox: '\u2ab8', scaron: '\u0161', scedil: '\u015f', scirc: '\u015d', scnE: '\u2ab6', succneqq: '\u2ab6', scnap: '\u2aba', succnapprox: '\u2aba', scnsim: '\u22e9', succnsim: '\u22e9', scpolint: '\u2a13', scy: '\u0441', sdot: '\u22c5', sdote: '\u2a66', seArr: '\u21d8', sect: '\xa7', semi: ';', seswar: '\u2929', tosa: '\u2929', sext: '\u2736', sfr: '\ud835\udd30', sharp: '\u266f', shchcy: '\u0449', shcy: '\u0448', shy: '\xad', sigma: '\u03c3', sigmaf: '\u03c2', sigmav: '\u03c2', varsigma: '\u03c2', simdot: '\u2a6a', simg: '\u2a9e', simgE: '\u2aa0', siml: '\u2a9d', simlE: '\u2a9f', simne: '\u2246', simplus: '\u2a24', simrarr: '\u2972', smashp: '\u2a33', smeparsl: '\u29e4', smile: '\u2323', ssmile: '\u2323', smt: '\u2aaa', smte: '\u2aac', smtes: '\u2aac\ufe00', softcy: '\u044c', sol: '/', solb: '\u29c4', solbar: '\u233f', sopf: '\ud835\udd64', spades: '\u2660', spadesuit: '\u2660', sqcaps: '\u2293\ufe00', sqcups: '\u2294\ufe00', sscr: '\ud835\udcc8', star: '\u2606', sub: '\u2282', subset: '\u2282', subE: '\u2ac5', subseteqq: '\u2ac5', subdot: '\u2abd', subedot: '\u2ac3', submult: '\u2ac1', subnE: '\u2acb', subsetneqq: '\u2acb', subne: '\u228a', subsetneq: '\u228a', subplus: '\u2abf', subrarr: '\u2979', subsim: '\u2ac7', subsub: '\u2ad5', subsup: '\u2ad3', sung: '\u266a', sup1: '\xb9', sup2: '\xb2', sup3: '\xb3', supE: '\u2ac6', supseteqq: '\u2ac6', supdot: '\u2abe', supdsub: '\u2ad8', supedot: '\u2ac4', suphsol: '\u27c9', suphsub: '\u2ad7', suplarr: '\u297b', supmult: '\u2ac2', supnE: '\u2acc', supsetneqq: '\u2acc', supne: '\u228b', supsetneq: '\u228b', supplus: '\u2ac0', supsim: '\u2ac8', supsub: '\u2ad4', supsup: '\u2ad6', swArr: '\u21d9', swnwar: '\u292a', szlig: '\xdf', target: '\u2316', tau: '\u03c4', tcaron: '\u0165', tcedil: '\u0163', tcy: '\u0442', telrec: '\u2315', tfr: '\ud835\udd31', theta: '\u03b8', thetasym: '\u03d1', thetav: '\u03d1', vartheta: '\u03d1', thorn: '\xfe', times: '\xd7', timesbar: '\u2a31', timesd: '\u2a30', topbot: '\u2336', topcir: '\u2af1', topf: '\ud835\udd65', topfork: '\u2ada', tprime: '\u2034', triangle: '\u25b5', utri: '\u25b5', triangleq: '\u225c', trie: '\u225c', tridot: '\u25ec', triminus: '\u2a3a', triplus: '\u2a39', trisb: '\u29cd', tritime: '\u2a3b', trpezium: '\u23e2', tscr: '\ud835\udcc9', tscy: '\u0446', tshcy: '\u045b', tstrok: '\u0167', uHar: '\u2963', uacute: '\xfa', ubrcy: '\u045e', ubreve: '\u016d', ucirc: '\xfb', ucy: '\u0443', udblac: '\u0171', ufisht: '\u297e', ufr: '\ud835\udd32', ugrave: '\xf9', uhblk: '\u2580', ulcorn: '\u231c', ulcorner: '\u231c', ulcrop: '\u230f', ultri: '\u25f8', umacr: '\u016b', uogon: '\u0173', uopf: '\ud835\udd66', upsi: '\u03c5', upsilon: '\u03c5', upuparrows: '\u21c8', uuarr: '\u21c8', urcorn: '\u231d', urcorner: '\u231d', urcrop: '\u230e', uring: '\u016f', urtri: '\u25f9', uscr: '\ud835\udcca', utdot: '\u22f0', utilde: '\u0169', uuml: '\xfc', uwangle: '\u29a7', vBar: '\u2ae8', vBarv: '\u2ae9', vangrt: '\u299c', varsubsetneq: '\u228a\ufe00', vsubne: '\u228a\ufe00', varsubsetneqq: '\u2acb\ufe00', vsubnE: '\u2acb\ufe00', varsupsetneq: '\u228b\ufe00', vsupne: '\u228b\ufe00', varsupsetneqq: '\u2acc\ufe00', vsupnE: '\u2acc\ufe00', vcy: '\u0432', veebar: '\u22bb', veeeq: '\u225a', vellip: '\u22ee', vfr: '\ud835\udd33', vopf: '\ud835\udd67', vscr: '\ud835\udccb', vzigzag: '\u299a', wcirc: '\u0175', wedbar: '\u2a5f', wedgeq: '\u2259', weierp: '\u2118', wp: '\u2118', wfr: '\ud835\udd34', wopf: '\ud835\udd68', wscr: '\ud835\udccc', xfr: '\ud835\udd35', xi: '\u03be', xnis: '\u22fb', xopf: '\ud835\udd69', xscr: '\ud835\udccd', yacute: '\xfd', yacy: '\u044f', ycirc: '\u0177', ycy: '\u044b', yen: '\xa5', yfr: '\ud835\udd36', yicy: '\u0457', yopf: '\ud835\udd6a', yscr: '\ud835\udcce', yucy: '\u044e', yuml: '\xff', zacute: '\u017a', zcaron: '\u017e', zcy: '\u0437', zdot: '\u017c', zeta: '\u03b6', zfr: '\ud835\udd37', zhcy: '\u0436', zigrarr: '\u21dd', zopf: '\ud835\udd6b', zscr: '\ud835\udccf', zwj: '\u200d', zwnj: '\u200c' };
   gr.ngsp = '\ue500';
   var vr = (function (e) {
     return ((e[(e.TAG_OPEN_START = 0)] = 'TAG_OPEN_START'), (e[(e.TAG_OPEN_END = 1)] = 'TAG_OPEN_END'), (e[(e.TAG_OPEN_END_VOID = 2)] = 'TAG_OPEN_END_VOID'), (e[(e.TAG_CLOSE = 3)] = 'TAG_CLOSE'), (e[(e.INCOMPLETE_TAG_OPEN = 4)] = 'INCOMPLETE_TAG_OPEN'), (e[(e.TEXT = 5)] = 'TEXT'), (e[(e.ESCAPABLE_RAW_TEXT = 6)] = 'ESCAPABLE_RAW_TEXT'), (e[(e.RAW_TEXT = 7)] = 'RAW_TEXT'), (e[(e.INTERPOLATION = 8)] = 'INTERPOLATION'), (e[(e.ENCODED_ENTITY = 9)] = 'ENCODED_ENTITY'), (e[(e.COMMENT_START = 10)] = 'COMMENT_START'), (e[(e.COMMENT_END = 11)] = 'COMMENT_END'), (e[(e.CDATA_START = 12)] = 'CDATA_START'), (e[(e.CDATA_END = 13)] = 'CDATA_END'), (e[(e.ATTR_NAME = 14)] = 'ATTR_NAME'), (e[(e.ATTR_QUOTE = 15)] = 'ATTR_QUOTE'), (e[(e.ATTR_VALUE_TEXT = 16)] = 'ATTR_VALUE_TEXT'), (e[(e.ATTR_VALUE_INTERPOLATION = 17)] = 'ATTR_VALUE_INTERPOLATION'), (e[(e.DOC_TYPE_START = 18)] = 'DOC_TYPE_START'), (e[(e.DOC_TYPE_END = 19)] = 'DOC_TYPE_END'), (e[(e.EXPANSION_FORM_START = 20)] = 'EXPANSION_FORM_START'), (e[(e.EXPANSION_CASE_VALUE = 21)] = 'EXPANSION_CASE_VALUE'), (e[(e.EXPANSION_CASE_EXP_START = 22)] = 'EXPANSION_CASE_EXP_START'), (e[(e.EXPANSION_CASE_EXP_END = 23)] = 'EXPANSION_CASE_EXP_END'), (e[(e.EXPANSION_FORM_END = 24)] = 'EXPANSION_FORM_END'), (e[(e.BLOCK_OPEN_START = 25)] = 'BLOCK_OPEN_START'), (e[(e.BLOCK_OPEN_END = 26)] = 'BLOCK_OPEN_END'), (e[(e.BLOCK_CLOSE = 27)] = 'BLOCK_CLOSE'), (e[(e.BLOCK_PARAMETER = 28)] = 'BLOCK_PARAMETER'), (e[(e.INCOMPLETE_BLOCK_OPEN = 29)] = 'INCOMPLETE_BLOCK_OPEN'), (e[(e.LET_START = 30)] = 'LET_START'), (e[(e.LET_VALUE = 31)] = 'LET_VALUE'), (e[(e.LET_END = 32)] = 'LET_END'), (e[(e.INCOMPLETE_LET = 33)] = 'INCOMPLETE_LET'), (e[(e.COMPONENT_OPEN_START = 34)] = 'COMPONENT_OPEN_START'), (e[(e.COMPONENT_OPEN_END = 35)] = 'COMPONENT_OPEN_END'), (e[(e.COMPONENT_OPEN_END_VOID = 36)] = 'COMPONENT_OPEN_END_VOID'), (e[(e.COMPONENT_CLOSE = 37)] = 'COMPONENT_CLOSE'), (e[(e.INCOMPLETE_COMPONENT_OPEN = 38)] = 'INCOMPLETE_COMPONENT_OPEN'), (e[(e.DIRECTIVE_NAME = 39)] = 'DIRECTIVE_NAME'), (e[(e.DIRECTIVE_OPEN = 40)] = 'DIRECTIVE_OPEN'), (e[(e.DIRECTIVE_CLOSE = 41)] = 'DIRECTIVE_CLOSE'), (e[(e.EOF = 42)] = 'EOF'), e);
    })({}),
    br = class {
     constructor(e, t, n) {
      ((this.tokens = e), (this.errors = t), (this.nonNormalizedIcuExpressions = n));
     }
    };
   function Sr(e, t, n, r = {}) {
    let a = new xr(new Yn(e, t), n, r);
    return (
     a.tokenize(),
     new br(
      (function (e) {
       let t,
        n = [];
       for (let r = 0; r < e.length; r++) {
        let a = e[r];
        (t && t.type === vr.TEXT && a.type === vr.TEXT) || (t && t.type === vr.ATTR_VALUE_TEXT && a.type === vr.ATTR_VALUE_TEXT) ? ((t.parts[0] += a.parts[0]), (t.sourceSpan.end = a.sourceSpan.end)) : ((t = a), n.push(t));
       }
       return n;
      })(a.tokens),
      a.errors,
      a.nonNormalizedIcuExpressions,
     )
    );
   }
   var _r = /\r\n?/g;
   function kr(e) {
    return `Unexpected character "${0 === e ? 'EOF' : String.fromCharCode(e)}"`;
   }
   function yr(e) {
    return `Unknown entity "${e}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
   }
   var wr = (function (e) {
     return ((e.HEX = 'hexadecimal'), (e.DEC = 'decimal'), e);
    })(wr || {}),
    Cr = ['@if', '@else', '@for', '@switch', '@case', '@default', '@empty', '@defer', '@placeholder', '@loading', '@error'],
    Er = '{{',
    Tr = '}}',
    xr = class {
     constructor(e, t, n) {
      ((this._getTagContentType = t), (this._currentTokenStart = null), (this._currentTokenType = null), (this._expansionCaseStack = []), (this._openDirectiveCount = 0), (this._inInterpolation = !1), (this._fullNameStack = []), (this.tokens = []), (this.errors = []), (this.nonNormalizedIcuExpressions = []), (this._tokenizeIcu = n.tokenizeExpansionForms || !1), (this._leadingTriviaCodePoints = n.leadingTriviaChars && n.leadingTriviaChars.map((e) => e.codePointAt(0) || 0)), (this._canSelfClose = n.canSelfClose || !1), (this._allowHtmComponentClosingTags = n.allowHtmComponentClosingTags || !1));
      let r = n.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 };
      ((this._cursor = n.escapedString ? new Br(e, r) : new qr(e, r)), (this._preserveLineEndings = n.preserveLineEndings || !1), (this._i18nNormalizeLineEndingsInICUs = n.i18nNormalizeLineEndingsInICUs || !1), (this._tokenizeBlocks = n.tokenizeBlocks ?? !0), (this._tokenizeLet = n.tokenizeLet ?? !0), (this._selectorlessEnabled = n.selectorlessEnabled ?? !1));
      try {
       this._cursor.init();
      } catch (a) {
       this.handleError(a);
      }
     }
     _processCarriageReturns(e) {
      return this._preserveLineEndings ? e : e.replace(_r, '\n');
     }
     tokenize() {
      for (; 0 !== this._cursor.peek(); ) {
       let t = this._cursor.clone();
       try {
        if (this._attemptCharCode(60))
         if (this._attemptCharCode(33)) this._attemptStr('[CDATA[') ? this._consumeCdata(t) : this._attemptStr('--') ? this._consumeComment(t) : this._attemptStrCaseInsensitive('doctype') ? this._consumeDocType(t) : this._consumeBogusComment(t);
         else if (this._attemptCharCode(47)) this._consumeTagClose(t);
         else {
          let e = this._cursor.clone();
          this._attemptCharCode(63) ? ((this._cursor = e), this._consumeBogusComment(t)) : this._consumeTagOpen(t);
         }
        else
         this._tokenizeLet && 64 === this._cursor.peek() && !this._inInterpolation && this._isLetStart()
          ? this._consumeLetDeclaration(t)
          : this._tokenizeBlocks && this._isBlockStart()
            ? this._consumeBlockStart(t)
            : !this._tokenizeBlocks || this._inInterpolation || this._isInExpansionCase() || this._isInExpansionForm() || !this._attemptCharCode(125)
              ? (this._tokenizeIcu && this._tokenizeExpansionForm()) ||
                this._consumeWithInterpolation(
                 vr.TEXT,
                 vr.INTERPOLATION,
                 () => this._isTextEnd(),
                 () => this._isTagStart(),
                )
              : this._consumeBlockEnd(t);
       } catch (e) {
        this.handleError(e);
       }
      }
      (this._beginToken(vr.EOF), this._endToken([]));
     }
     _getBlockName() {
      let e = !1,
       t = this._cursor.clone();
      return (
       this._attemptCharCodeUntilFn((t) =>
        Un(t)
         ? !e
         : !(function (e) {
            return jn(e) || zn(e) || 95 === e;
           })(t) || ((e = !0), !1),
       ),
       this._cursor.getChars(t).trim()
      );
     }
     _consumeBlockStart(e) {
      (this._requireCharCode(64), this._beginToken(vr.BLOCK_OPEN_START, e));
      let t = this._endToken([this._getBlockName()]);
      if (40 === this._cursor.peek()) {
       if ((this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(Nr), !this._attemptCharCode(41))) return void (t.type = vr.INCOMPLETE_BLOCK_OPEN);
       this._attemptCharCodeUntilFn(Nr);
      }
      this._attemptCharCode(123) ? (this._beginToken(vr.BLOCK_OPEN_END), this._endToken([])) : !this._isBlockStart() || ('case' !== t.parts[0] && 'default' !== t.parts[0]) ? (t.type = vr.INCOMPLETE_BLOCK_OPEN) : (this._beginToken(vr.BLOCK_OPEN_END), this._endToken([]), this._beginToken(vr.BLOCK_CLOSE), this._endToken([]));
     }
     _consumeBlockEnd(e) {
      (this._beginToken(vr.BLOCK_CLOSE, e), this._endToken([]));
     }
     _consumeBlockParameters() {
      for (this._attemptCharCodeUntilFn(Ir); 41 !== this._cursor.peek() && 0 !== this._cursor.peek(); ) {
       this._beginToken(vr.BLOCK_PARAMETER);
       let e = this._cursor.clone(),
        t = null,
        n = 0;
       for (; (59 !== this._cursor.peek() && 0 !== this._cursor.peek()) || null !== t; ) {
        let e = this._cursor.peek();
        if (92 === e) this._cursor.advance();
        else if (e === t) t = null;
        else if (null === t && Gn(e)) t = e;
        else if (40 === e && null === t) n++;
        else if (41 === e && null === t) {
         if (0 === n) break;
         n > 0 && n--;
        }
        this._cursor.advance();
       }
       (this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(Ir));
      }
     }
     _consumeLetDeclaration(e) {
      if ((this._requireStr('@let'), this._beginToken(vr.LET_START, e), !Un(this._cursor.peek()))) {
       return void (this._endToken([this._cursor.getChars(e)]).type = vr.INCOMPLETE_LET);
      }
      this._attemptCharCodeUntilFn(Nr);
      let t = this._endToken([this._getLetDeclarationName()]);
      (this._attemptCharCodeUntilFn(Nr), this._attemptCharCode(61) ? (this._attemptCharCodeUntilFn((e) => Nr(e) && !Wn(e)), this._consumeLetDeclarationValue(), 59 === this._cursor.peek() ? (this._beginToken(vr.LET_END), this._endToken([]), this._cursor.advance()) : ((t.type = vr.INCOMPLETE_LET), (t.sourceSpan = this._cursor.getSpan(e)))) : (t.type = vr.INCOMPLETE_LET));
     }
     _getLetDeclarationName() {
      let e = this._cursor.clone(),
       t = !1;
      return (this._attemptCharCodeUntilFn((e) => !(jn(e) || 36 === e || 95 === e || (t && zn(e))) || ((t = !0), !1)), this._cursor.getChars(e).trim());
     }
     _consumeLetDeclarationValue() {
      let e = this._cursor.clone();
      for (this._beginToken(vr.LET_VALUE, e); 0 !== this._cursor.peek(); ) {
       let e = this._cursor.peek();
       if (59 === e) break;
       (Gn(e) && (this._cursor.advance(), this._attemptCharCodeUntilFn((t) => (92 === t ? (this._cursor.advance(), !1) : t === e))), this._cursor.advance());
      }
      this._endToken([this._cursor.getChars(e)]);
     }
     _tokenizeExpansionForm() {
      if (this.isExpansionFormStart()) return (this._consumeExpansionFormStart(), !0);
      if (
       (function (e) {
        return 125 !== e;
       })(this._cursor.peek()) &&
       this._isInExpansionForm()
      )
       return (this._consumeExpansionCaseStart(), !0);
      if (125 === this._cursor.peek()) {
       if (this._isInExpansionCase()) return (this._consumeExpansionCaseEnd(), !0);
       if (this._isInExpansionForm()) return (this._consumeExpansionFormEnd(), !0);
      }
      return !1;
     }
     _beginToken(e, t = this._cursor.clone()) {
      ((this._currentTokenStart = t), (this._currentTokenType = e));
     }
     _endToken(e, t) {
      if (null === this._currentTokenStart) throw new Qn(this._cursor.getSpan(t), 'Programming error - attempted to end a token when there was no start to the token');
      if (null === this._currentTokenType) throw new Qn(this._cursor.getSpan(this._currentTokenStart), 'Programming error - attempted to end a token which has no token type');
      let n = { type: this._currentTokenType, parts: e, sourceSpan: (t ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) };
      return (this.tokens.push(n), (this._currentTokenStart = null), (this._currentTokenType = null), n);
     }
     _createError(e, t) {
      this._isInExpansionForm() && (e += ' (Do you have an unescaped "{" in your template? Use "{{ \'{\' }}") to escape it.)');
      let n = new Qn(t, e);
      return ((this._currentTokenStart = null), (this._currentTokenType = null), n);
     }
     handleError(e) {
      if ((e instanceof Vr && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), !(e instanceof Qn))) throw e;
      this.errors.push(e);
     }
     _attemptCharCode(e) {
      return this._cursor.peek() === e && (this._cursor.advance(), !0);
     }
     _attemptCharCodeCaseInsensitive(e) {
      return (
       !!(function (e, t) {
        return Rr(e) === Rr(t);
       })(this._cursor.peek(), e) && (this._cursor.advance(), !0)
      );
     }
     _requireCharCode(e) {
      let t = this._cursor.clone();
      if (!this._attemptCharCode(e)) throw this._createError(kr(this._cursor.peek()), this._cursor.getSpan(t));
     }
     _attemptStr(e) {
      let t = e.length;
      if (this._cursor.charsLeft() < t) return !1;
      let n = this._cursor.clone();
      for (let r = 0; r < t; r++) if (!this._attemptCharCode(e.charCodeAt(r))) return ((this._cursor = n), !1);
      return !0;
     }
     _attemptStrCaseInsensitive(e) {
      for (let t = 0; t < e.length; t++) if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t))) return !1;
      return !0;
     }
     _requireStr(e) {
      let t = this._cursor.clone();
      if (!this._attemptStr(e)) throw this._createError(kr(this._cursor.peek()), this._cursor.getSpan(t));
     }
     _requireStrCaseInsensitive(e) {
      let t = this._cursor.clone();
      if (!this._attemptStrCaseInsensitive(e)) throw this._createError(kr(this._cursor.peek()), this._cursor.getSpan(t));
     }
     _attemptCharCodeUntilFn(e) {
      for (; !e(this._cursor.peek()); ) this._cursor.advance();
     }
     _requireCharCodeUntilFn(e, t) {
      let n = this._cursor.clone();
      if ((this._attemptCharCodeUntilFn(e), this._cursor.diff(n) < t)) throw this._createError(kr(this._cursor.peek()), this._cursor.getSpan(n));
     }
     _attemptUntilChar(e) {
      for (; this._cursor.peek() !== e; ) this._cursor.advance();
     }
     _readChar() {
      let e = String.fromCodePoint(this._cursor.peek());
      return (this._cursor.advance(), e);
     }
     _peekStr(e) {
      let t = e.length;
      if (this._cursor.charsLeft() < t) return !1;
      let n = this._cursor.clone();
      for (let r = 0; r < t; r++) {
       if (n.peek() !== e.charCodeAt(r)) return !1;
       n.advance();
      }
      return !0;
     }
     _isBlockStart() {
      return 64 === this._cursor.peek() && Cr.some((e) => this._peekStr(e));
     }
     _isLetStart() {
      return 64 === this._cursor.peek() && this._peekStr('@let');
     }
     _consumeEntity(e) {
      this._beginToken(vr.ENCODED_ENTITY);
      let t = this._cursor.clone();
      if ((this._cursor.advance(), this._attemptCharCode(35))) {
       let e = this._attemptCharCode(120) || this._attemptCharCode(88),
        n = this._cursor.clone();
       if ((this._attemptCharCodeUntilFn(Pr), 59 != this._cursor.peek())) {
        this._cursor.advance();
        let n = e ? wr.HEX : wr.DEC;
        throw this._createError(
         (function (e, t) {
          return `Unable to parse entity "${t}" - ${e} character reference entities must end with ";"`;
         })(n, this._cursor.getChars(t)),
         this._cursor.getSpan(),
        );
       }
       let r = this._cursor.getChars(n);
       this._cursor.advance();
       try {
        let n = parseInt(r, e ? 16 : 10);
        this._endToken([String.fromCodePoint(n), this._cursor.getChars(t)]);
       } catch {
        throw this._createError(yr(this._cursor.getChars(t)), this._cursor.getSpan());
       }
      } else {
       let n = this._cursor.clone();
       if ((this._attemptCharCodeUntilFn(Or), 59 != this._cursor.peek())) (this._beginToken(e, t), (this._cursor = n), this._endToken(['&']));
       else {
        let e = this._cursor.getChars(n);
        this._cursor.advance();
        let r = gr.hasOwnProperty(e) && gr[e];
        if (!r) throw this._createError(yr(e), this._cursor.getSpan(t));
        this._endToken([r, `&${e};`]);
       }
      }
     }
     _consumeRawText(e, t) {
      this._beginToken(e ? vr.ESCAPABLE_RAW_TEXT : vr.RAW_TEXT);
      let n = [];
      for (;;) {
       let r = this._cursor.clone(),
        a = t();
       if (((this._cursor = r), a)) break;
       e && 38 === this._cursor.peek() ? (this._endToken([this._processCarriageReturns(n.join(''))]), (n.length = 0), this._consumeEntity(vr.ESCAPABLE_RAW_TEXT), this._beginToken(vr.ESCAPABLE_RAW_TEXT)) : n.push(this._readChar());
      }
      this._endToken([this._processCarriageReturns(n.join(''))]);
     }
     _consumeComment(e) {
      (this._beginToken(vr.COMMENT_START, e), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr('--\x3e')), this._beginToken(vr.COMMENT_END), this._requireStr('--\x3e'), this._endToken([]));
     }
     _consumeBogusComment(e) {
      (this._beginToken(vr.COMMENT_START, e), this._endToken([]), this._consumeRawText(!1, () => 62 === this._cursor.peek()), this._beginToken(vr.COMMENT_END), this._cursor.advance(), this._endToken([]));
     }
     _consumeCdata(e) {
      (this._beginToken(vr.CDATA_START, e), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr(']]>')), this._beginToken(vr.CDATA_END), this._requireStr(']]>'), this._endToken([]));
     }
     _consumeDocType(e) {
      (this._beginToken(vr.DOC_TYPE_START, e), this._endToken([]), this._consumeRawText(!1, () => 62 === this._cursor.peek()), this._beginToken(vr.DOC_TYPE_END), this._cursor.advance(), this._endToken([]));
     }
     _consumePrefixAndName(e) {
      let t,
       n = this._cursor.clone(),
       r = '';
      for (; 58 !== this._cursor.peek() && !Lr(this._cursor.peek()); ) this._cursor.advance();
      return (58 === this._cursor.peek() ? ((r = this._cursor.getChars(n)), this._cursor.advance(), (t = this._cursor.clone())) : (t = n), this._requireCharCodeUntilFn(e, '' === r ? 0 : 1), [r, this._cursor.getChars(t)]);
     }
     _consumeTagOpen(e) {
      let t,
       n,
       r,
       a,
       i = [];
      try {
       if (this._selectorlessEnabled && Fr(this._cursor.peek())) ((a = this._consumeComponentOpenStart(e)), ([r, n, t] = a.parts), n && (r += `:${n}`), t && (r += `:${t}`), this._attemptCharCodeUntilFn(Nr));
       else {
        if (!jn(this._cursor.peek())) throw this._createError(kr(this._cursor.peek()), this._cursor.getSpan(e));
        ((a = this._consumeTagOpenStart(e)), (n = a.parts[0]), (t = r = a.parts[1]), this._attemptCharCodeUntilFn(Nr));
       }
       for (; !Mr(this._cursor.peek()); )
        if (this._selectorlessEnabled && 64 === this._cursor.peek()) {
         let e = this._cursor.clone(),
          t = e.clone();
         (t.advance(), Fr(t.peek()) && this._consumeDirective(e, t));
        } else {
         let e = this._consumeAttribute();
         i.push(e);
        }
       a.type === vr.COMPONENT_OPEN_START ? this._consumeComponentOpenEnd() : this._consumeTagOpenEnd();
      } catch (o) {
       if (o instanceof Qn) return void (a ? (a.type = a.type === vr.COMPONENT_OPEN_START ? vr.INCOMPLETE_COMPONENT_OPEN : vr.INCOMPLETE_TAG_OPEN) : (this._beginToken(vr.TEXT, e), this._endToken(['<'])));
       throw o;
      }
      if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === vr.TAG_OPEN_END_VOID) return;
      let s = this._getTagContentType(t, n, this._fullNameStack.length > 0, i);
      (this._handleFullNameStackForTagOpen(n, t), s === kn.RAW_TEXT ? this._consumeRawTextWithTagClose(n, a, r, !1) : s === kn.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(n, a, r, !0));
     }
     _consumeRawTextWithTagClose(e, t, n, r) {
      (this._consumeRawText(r, () => !!(this._attemptCharCode(60) && this._attemptCharCode(47) && (this._attemptCharCodeUntilFn(Nr), this._attemptStrCaseInsensitive(e && t.type !== vr.COMPONENT_OPEN_START ? `${e}:${n}` : n))) && (this._attemptCharCodeUntilFn(Nr), this._attemptCharCode(62))), this._beginToken(t.type === vr.COMPONENT_OPEN_START ? vr.COMPONENT_CLOSE : vr.TAG_CLOSE), this._requireCharCodeUntilFn((e) => 62 === e, 3), this._cursor.advance(), this._endToken(t.parts), this._handleFullNameStackForTagClose(e, n));
     }
     _consumeTagOpenStart(e) {
      this._beginToken(vr.TAG_OPEN_START, e);
      let t = this._consumePrefixAndName(Ar);
      return this._endToken(t);
     }
     _consumeComponentOpenStart(e) {
      this._beginToken(vr.COMPONENT_OPEN_START, e);
      let t = this._consumeComponentName();
      return this._endToken(t);
     }
     _consumeComponentName() {
      let e = this._cursor.clone();
      for (; Dr(this._cursor.peek()); ) this._cursor.advance();
      let t = this._cursor.getChars(e),
       n = '',
       r = '';
      return (58 === this._cursor.peek() && (this._cursor.advance(), ([n, r] = this._consumePrefixAndName(Ar))), [t, n, r]);
     }
     _consumeAttribute() {
      let e,
       [t, n] = this._consumeAttributeName();
      return (this._attemptCharCodeUntilFn(Nr), this._attemptCharCode(61) && (this._attemptCharCodeUntilFn(Nr), (e = this._consumeAttributeValue())), this._attemptCharCodeUntilFn(Nr), { prefix: t, name: n, value: e });
     }
     _consumeAttributeName() {
      let e,
       t = this._cursor.peek();
      if (39 === t || 34 === t) throw this._createError(kr(t), this._cursor.getSpan());
      if ((this._beginToken(vr.ATTR_NAME), this._openDirectiveCount > 0)) {
       let t = 0;
       e = (e) => {
        if (this._openDirectiveCount > 0)
         if (40 === e) t++;
         else if (41 === e) {
          if (0 === t) return !0;
          t--;
         }
        return Ar(e);
       };
      } else if (91 === t) {
       let t = 0;
       e = (e) => (91 === e ? t++ : 93 === e && t--, t <= 0 ? Ar(e) : Wn(e));
      } else e = Ar;
      let n = this._consumePrefixAndName(e);
      return (this._endToken(n), n);
     }
     _consumeAttributeValue() {
      let e;
      if (39 === this._cursor.peek() || 34 === this._cursor.peek()) {
       let t = this._cursor.peek();
       this._consumeQuote(t);
       let n = () => this._cursor.peek() === t;
       ((e = this._consumeWithInterpolation(vr.ATTR_VALUE_TEXT, vr.ATTR_VALUE_INTERPOLATION, n, n)), this._consumeQuote(t));
      } else {
       let t = () => Ar(this._cursor.peek());
       e = this._consumeWithInterpolation(vr.ATTR_VALUE_TEXT, vr.ATTR_VALUE_INTERPOLATION, t, t);
      }
      return e;
     }
     _consumeQuote(e) {
      (this._beginToken(vr.ATTR_QUOTE), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]));
     }
     _consumeTagOpenEnd() {
      let e = this._attemptCharCode(47) ? vr.TAG_OPEN_END_VOID : vr.TAG_OPEN_END;
      (this._beginToken(e), this._requireCharCode(62), this._endToken([]));
     }
     _consumeComponentOpenEnd() {
      let e = this._attemptCharCode(47) ? vr.COMPONENT_OPEN_END_VOID : vr.COMPONENT_OPEN_END;
      (this._beginToken(e), this._requireCharCode(62), this._endToken([]));
     }
     _consumeTagClose(e) {
      if (this._selectorlessEnabled) {
       let t = e.clone();
       for (; 62 !== t.peek() && !Fr(t.peek()); ) t.advance();
       if (Fr(t.peek())) {
        this._beginToken(vr.COMPONENT_CLOSE, e);
        let t = this._consumeComponentName();
        return (this._attemptCharCodeUntilFn(Nr), this._requireCharCode(62), void this._endToken(t));
       }
      }
      if ((this._beginToken(vr.TAG_CLOSE, e), this._attemptCharCodeUntilFn(Nr), this._allowHtmComponentClosingTags && this._attemptCharCode(47))) (this._attemptCharCodeUntilFn(Nr), this._requireCharCode(62), this._endToken([]));
      else {
       let [e, t] = this._consumePrefixAndName(Ar);
       (this._attemptCharCodeUntilFn(Nr), this._requireCharCode(62), this._endToken([e, t]), this._handleFullNameStackForTagClose(e, t));
      }
     }
     _consumeExpansionFormStart() {
      (this._beginToken(vr.EXPANSION_FORM_START), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(vr.EXPANSION_FORM_START), this._beginToken(vr.RAW_TEXT));
      let e = this._readUntil(44),
       t = this._processCarriageReturns(e);
      if (this._i18nNormalizeLineEndingsInICUs) this._endToken([t]);
      else {
       let n = this._endToken([e]);
       t !== e && this.nonNormalizedIcuExpressions.push(n);
      }
      (this._requireCharCode(44), this._attemptCharCodeUntilFn(Nr), this._beginToken(vr.RAW_TEXT));
      let n = this._readUntil(44);
      (this._endToken([n]), this._requireCharCode(44), this._attemptCharCodeUntilFn(Nr));
     }
     _consumeExpansionCaseStart() {
      this._beginToken(vr.EXPANSION_CASE_VALUE);
      let e = this._readUntil(123).trim();
      (this._endToken([e]), this._attemptCharCodeUntilFn(Nr), this._beginToken(vr.EXPANSION_CASE_EXP_START), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(Nr), this._expansionCaseStack.push(vr.EXPANSION_CASE_EXP_START));
     }
     _consumeExpansionCaseEnd() {
      (this._beginToken(vr.EXPANSION_CASE_EXP_END), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(Nr), this._expansionCaseStack.pop());
     }
     _consumeExpansionFormEnd() {
      (this._beginToken(vr.EXPANSION_FORM_END), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop());
     }
     _consumeWithInterpolation(e, t, n, r) {
      this._beginToken(e);
      let a = [];
      for (; !n(); ) {
       let n = this._cursor.clone();
       this._attemptStr(Er) ? (this._endToken([this._processCarriageReturns(a.join(''))], n), (a.length = 0), this._consumeInterpolation(t, n, r), this._beginToken(e)) : 38 === this._cursor.peek() ? (this._endToken([this._processCarriageReturns(a.join(''))]), (a.length = 0), this._consumeEntity(e), this._beginToken(e)) : a.push(this._readChar());
      }
      this._inInterpolation = !1;
      let i = this._processCarriageReturns(a.join(''));
      return (this._endToken([i]), i);
     }
     _consumeInterpolation(e, t, n) {
      let r = [];
      (this._beginToken(e, t), r.push(Er));
      let a = this._cursor.clone(),
       i = null,
       s = !1;
      for (; 0 !== this._cursor.peek() && (null === n || !n()); ) {
       let e = this._cursor.clone();
       if (this._isTagStart()) return ((this._cursor = e), r.push(this._getProcessedChars(a, e)), void this._endToken(r));
       if (null === i) {
        if (this._attemptStr(Tr)) return (r.push(this._getProcessedChars(a, e)), r.push(Tr), void this._endToken(r));
        this._attemptStr('//') && (s = !0);
       }
       let t = this._cursor.peek();
       (this._cursor.advance(), 92 === t ? this._cursor.advance() : t === i ? (i = null) : !s && null === i && Gn(t) && (i = t));
      }
      (r.push(this._getProcessedChars(a, this._cursor)), this._endToken(r));
     }
     _consumeDirective(e, t) {
      for (this._requireCharCode(64), this._cursor.advance(); Dr(this._cursor.peek()); ) this._cursor.advance();
      this._beginToken(vr.DIRECTIVE_NAME, e);
      let n = this._cursor.getChars(t);
      if ((this._endToken([n]), this._attemptCharCodeUntilFn(Nr), 40 === this._cursor.peek())) {
       for (this._openDirectiveCount++, this._beginToken(vr.DIRECTIVE_OPEN), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(Nr); !Mr(this._cursor.peek()) && 41 !== this._cursor.peek(); ) this._consumeAttribute();
       if ((this._attemptCharCodeUntilFn(Nr), this._openDirectiveCount--, 41 !== this._cursor.peek())) {
        if (62 === this._cursor.peek() || 47 === this._cursor.peek()) return;
        throw this._createError(kr(this._cursor.peek()), this._cursor.getSpan(e));
       }
       (this._beginToken(vr.DIRECTIVE_CLOSE), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(Nr));
      }
     }
     _getProcessedChars(e, t) {
      return this._processCarriageReturns(t.getChars(e));
     }
     _isTextEnd() {
      return !!(this._isTagStart() || 0 === this._cursor.peek() || (this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || (125 === this._cursor.peek() && this._isInExpansionCase()))) || (this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._isLetStart() || 125 === this._cursor.peek())));
     }
     _isTagStart() {
      if (60 === this._cursor.peek()) {
       let e = this._cursor.clone();
       e.advance();
       let t = e.peek();
       if ((97 <= t && t <= 122) || (65 <= t && t <= 90) || 47 === t || 33 === t) return !0;
      }
      return !1;
     }
     _readUntil(e) {
      let t = this._cursor.clone();
      return (this._attemptUntilChar(e), this._cursor.getChars(t));
     }
     _isInExpansion() {
      return this._isInExpansionCase() || this._isInExpansionForm();
     }
     _isInExpansionCase() {
      return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === vr.EXPANSION_CASE_EXP_START;
     }
     _isInExpansionForm() {
      return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === vr.EXPANSION_FORM_START;
     }
     isExpansionFormStart() {
      if (123 !== this._cursor.peek()) return !1;
      let e = this._cursor.clone(),
       t = this._attemptStr(Er);
      return ((this._cursor = e), !t);
     }
     _handleFullNameStackForTagOpen(e, t) {
      let n = Tn(e, t);
      (0 === this._fullNameStack.length || this._fullNameStack[this._fullNameStack.length - 1] === n) && this._fullNameStack.push(n);
     }
     _handleFullNameStackForTagClose(e, t) {
      let n = Tn(e, t);
      0 !== this._fullNameStack.length && this._fullNameStack[this._fullNameStack.length - 1] === n && this._fullNameStack.pop();
     }
    };
   function Nr(e) {
    return !Un(e) || 0 === e;
   }
   function Ar(e) {
    return Un(e) || 62 === e || 60 === e || 47 === e || 39 === e || 34 === e || 61 === e || 0 === e;
   }
   function Lr(e) {
    return (e < 97 || 122 < e) && (e < 65 || 90 < e) && (e < 48 || e > 57);
   }
   function Pr(e) {
    return (
     59 === e ||
     0 === e ||
     !(function (e) {
      return (e >= 97 && e <= 102) || (e >= 65 && e <= 70) || zn(e);
     })(e)
    );
   }
   function Or(e) {
    return 59 === e || 0 === e || !jn(e);
   }
   function Rr(e) {
    return e >= 97 && e <= 122 ? e - 97 + 65 : e;
   }
   function Ir(e) {
    return 59 !== e && Nr(e);
   }
   function Fr(e) {
    return 95 === e || (e >= 65 && e <= 90);
   }
   function Dr(e) {
    return jn(e) || zn(e) || 95 === e;
   }
   function Mr(e) {
    return 47 === e || 62 === e || 60 === e || 0 === e;
   }
   var qr = class e {
     constructor(t, n) {
      if (t instanceof e) {
       ((this.file = t.file), (this.input = t.input), (this.end = t.end));
       let e = t.state;
       this.state = { peek: e.peek, offset: e.offset, line: e.line, column: e.column };
      } else {
       if (!n) throw new Error('Programming error: the range argument must be provided with a file argument.');
       ((this.file = t), (this.input = t.content), (this.end = n.endPos), (this.state = { peek: -1, offset: n.startPos, line: n.startLine, column: n.startCol }));
      }
     }
     clone() {
      return new e(this);
     }
     peek() {
      return this.state.peek;
     }
     charsLeft() {
      return this.end - this.state.offset;
     }
     diff(e) {
      return this.state.offset - e.state.offset;
     }
     advance() {
      this.advanceState(this.state);
     }
     init() {
      this.updatePeek(this.state);
     }
     getSpan(e, t) {
      let n = (e = e || this);
      if (t) for (; this.diff(e) > 0 && -1 !== t.indexOf(e.peek()); ) (n === e && (e = e.clone()), e.advance());
      let r = this.locationFromCursor(e);
      return new Zn(r, this.locationFromCursor(this), n !== e ? this.locationFromCursor(n) : r);
     }
     getChars(e) {
      return this.input.substring(e.state.offset, this.state.offset);
     }
     charAt(e) {
      return this.input.charCodeAt(e);
     }
     advanceState(e) {
      if (e.offset >= this.end) throw ((this.state = e), new Vr('Unexpected character "EOF"', this));
      let t = this.charAt(e.offset);
      (10 === t ? (e.line++, (e.column = 0)) : Wn(t) || e.column++, e.offset++, this.updatePeek(e));
     }
     updatePeek(e) {
      e.peek = e.offset >= this.end ? 0 : this.charAt(e.offset);
     }
     locationFromCursor(e) {
      return new Kn(e.file, e.state.offset, e.state.line, e.state.column);
     }
    },
    Br = class e extends qr {
     constructor(t, n) {
      t instanceof e ? (super(t), (this.internalState = { ...t.internalState })) : (super(t, n), (this.internalState = this.state));
     }
     advance() {
      ((this.state = this.internalState), super.advance(), this.processEscapeSequence());
     }
     init() {
      (super.init(), this.processEscapeSequence());
     }
     clone() {
      return new e(this);
     }
     getChars(e) {
      let t = e.clone(),
       n = '';
      for (; t.internalState.offset < this.internalState.offset; ) ((n += String.fromCodePoint(t.peek())), t.advance());
      return n;
     }
     processEscapeSequence() {
      let e = () => this.internalState.peek;
      if (92 === e())
       if (((this.internalState = { ...this.state }), this.advanceState(this.internalState), 110 === e())) this.state.peek = 10;
       else if (114 === e()) this.state.peek = 13;
       else if (118 === e()) this.state.peek = 11;
       else if (116 === e()) this.state.peek = 9;
       else if (98 === e()) this.state.peek = 8;
       else if (102 === e()) this.state.peek = 12;
       else if (117 === e())
        if ((this.advanceState(this.internalState), 123 === e())) {
         this.advanceState(this.internalState);
         let t = this.clone(),
          n = 0;
         for (; 125 !== e(); ) (this.advanceState(this.internalState), n++);
         this.state.peek = this.decodeHexDigits(t, n);
        } else {
         let e = this.clone();
         (this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), (this.state.peek = this.decodeHexDigits(e, 4)));
        }
       else if (120 === e()) {
        this.advanceState(this.internalState);
        let e = this.clone();
        (this.advanceState(this.internalState), (this.state.peek = this.decodeHexDigits(e, 2)));
       } else if (Xn(e())) {
        let t = '',
         n = 0,
         r = this.clone();
        for (; Xn(e()) && n < 3; ) ((r = this.clone()), (t += String.fromCodePoint(e())), this.advanceState(this.internalState), n++);
        ((this.state.peek = parseInt(t, 8)), (this.internalState = r.internalState));
       } else Wn(this.internalState.peek) ? (this.advanceState(this.internalState), (this.state = this.internalState)) : (this.state.peek = this.internalState.peek);
     }
     decodeHexDigits(e, t) {
      let n = this.input.slice(e.internalState.offset, e.internalState.offset + t),
       r = parseInt(n, 16);
      if (isNaN(r)) throw ((e.state = e.internalState), new Vr('Invalid hexadecimal escape sequence', e));
      return r;
     }
    },
    Vr = class extends Error {
     constructor(e, t) {
      (super(e), (this.msg = e), (this.cursor = t), Object.setPrototypeOf(this, new.target.prototype));
     }
    },
    Hr = class e extends Qn {
     static create(t, n, r) {
      return new e(t, n, r);
     }
     constructor(e, t, n) {
      (super(t, n), (this.elementName = e));
     }
    },
    $r = class {
     constructor(e, t) {
      ((this.rootNodes = e), (this.errors = t));
     }
    },
    Ur = class {
     constructor(e) {
      this.getTagDefinition = e;
     }
     parse(e, t, n, r = !1, a) {
      let i =
        (e) =>
        (t, ...n) =>
         e(t.toLowerCase(), ...n),
       s = r ? this.getTagDefinition : i(this.getTagDefinition),
       o = (e) => s(e).getContentType(),
       l = r ? a : i(a),
       c = Sr(
        e,
        t,
        a
         ? (e, t, n, r) => {
            let a = l(e, t, n, r);
            return void 0 !== a ? a : o(e);
           }
         : o,
        n,
       ),
       u = (n && n.canSelfClose) || !1,
       p = (n && n.allowHtmComponentClosingTags) || !1,
       d = new zr(c.tokens, s, u, p, r);
      return (d.build(), new $r(d.rootNodes, [...c.errors, ...d.errors]));
     }
    },
    zr = class e {
     constructor(e, t, n, r, a) {
      ((this.tokens = e), (this.tagDefinitionResolver = t), (this.canSelfClose = n), (this.allowHtmComponentClosingTags = r), (this.isTagNameCaseSensitive = a), (this._index = -1), (this._containerStack = []), (this.rootNodes = []), (this.errors = []), this._advance());
     }
     build() {
      for (; this._peek.type !== vr.EOF; ) this._peek.type === vr.TAG_OPEN_START || this._peek.type === vr.INCOMPLETE_TAG_OPEN ? this._consumeElementStartTag(this._advance()) : this._peek.type === vr.TAG_CLOSE ? (this._closeVoidElement(), this._consumeElementEndTag(this._advance())) : this._peek.type === vr.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === vr.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === vr.TEXT || this._peek.type === vr.RAW_TEXT || this._peek.type === vr.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === vr.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === vr.BLOCK_OPEN_START ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === vr.BLOCK_CLOSE ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === vr.INCOMPLETE_BLOCK_OPEN ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === vr.LET_START ? (this._closeVoidElement(), this._consumeLet(this._advance())) : this._peek.type === vr.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._peek.type === vr.INCOMPLETE_LET ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._peek.type === vr.COMPONENT_OPEN_START || this._peek.type === vr.INCOMPLETE_COMPONENT_OPEN ? this._consumeComponentStartTag(this._advance()) : this._peek.type === vr.COMPONENT_CLOSE ? this._consumeComponentEndTag(this._advance()) : this._advance();
      for (let e of this._containerStack) e instanceof cr && this.errors.push(Hr.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`));
     }
     _advance() {
      let e = this._peek;
      return (this._index < this.tokens.length - 1 && this._index++, (this._peek = this.tokens[this._index]), e);
     }
     _advanceIf(e) {
      return this._peek.type === e ? this._advance() : null;
     }
     _consumeCdata(e) {
      let t = this._advance(),
       n = this._getText(t),
       r = this._advanceIf(vr.CDATA_END);
      this._addToParent(new nr(n, new Zn(e.sourceSpan.start, (r || t).sourceSpan.end), [t]));
     }
     _consumeComment(e) {
      let t = this._advanceIf(vr.RAW_TEXT),
       n = this._advanceIf(vr.COMMENT_END),
       r = null != t ? t.parts[0].trim() : null,
       a = null == n ? e.sourceSpan : new Zn(e.sourceSpan.start, n.sourceSpan.end, e.sourceSpan.fullStart);
      this._addToParent(new or(r, a));
     }
     _consumeDocType(e) {
      let t = this._advanceIf(vr.RAW_TEXT),
       n = this._advanceIf(vr.DOC_TYPE_END),
       r = null != t ? t.parts[0].trim() : null,
       a = new Zn(e.sourceSpan.start, (n || t || e).sourceSpan.end);
      this._addToParent(new lr(r, a));
     }
     _consumeExpansion(e) {
      let t = this._advance(),
       n = this._advance(),
       r = [];
      for (; this._peek.type === vr.EXPANSION_CASE_VALUE; ) {
       let e = this._parseExpansionCase();
       if (!e) return;
       r.push(e);
      }
      if (this._peek.type !== vr.EXPANSION_FORM_END) return void this.errors.push(Hr.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
      let a = new Zn(e.sourceSpan.start, this._peek.sourceSpan.end, e.sourceSpan.fullStart);
      (this._addToParent(new rr(t.parts[0], n.parts[0], r, a, t.sourceSpan)), this._advance());
     }
     _parseExpansionCase() {
      let t = this._advance();
      if (this._peek.type !== vr.EXPANSION_CASE_EXP_START) return (this.errors.push(Hr.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null);
      let n = this._advance(),
       r = this._collectExpansionExpTokens(n);
      if (!r) return null;
      let a = this._advance();
      r.push({ type: vr.EOF, parts: [], sourceSpan: a.sourceSpan });
      let i = new e(r, this.tagDefinitionResolver, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
      if ((i.build(), i.errors.length > 0)) return ((this.errors = this.errors.concat(i.errors)), null);
      let s = new Zn(t.sourceSpan.start, a.sourceSpan.end, t.sourceSpan.fullStart),
       o = new Zn(n.sourceSpan.start, a.sourceSpan.end, n.sourceSpan.fullStart);
      return new ar(t.parts[0], i.rootNodes, s, t.sourceSpan, o);
     }
     _collectExpansionExpTokens(e) {
      let t = [],
       n = [vr.EXPANSION_CASE_EXP_START];
      for (;;) {
       if (((this._peek.type === vr.EXPANSION_FORM_START || this._peek.type === vr.EXPANSION_CASE_EXP_START) && n.push(this._peek.type), this._peek.type === vr.EXPANSION_CASE_EXP_END)) {
        if (!jr(n, vr.EXPANSION_CASE_EXP_START)) return (this.errors.push(Hr.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null);
        if ((n.pop(), 0 === n.length)) return t;
       }
       if (this._peek.type === vr.EXPANSION_FORM_END) {
        if (!jr(n, vr.EXPANSION_FORM_START)) return (this.errors.push(Hr.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null);
        n.pop();
       }
       if (this._peek.type === vr.EOF) return (this.errors.push(Hr.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null);
       t.push(this._advance());
      }
     }
     _getText(e) {
      let t = e.parts[0];
      if (t.length > 0 && '\n' == t[0]) {
       var n;
       let e = this._getClosestElementLikeParent();
       null != e && 0 == e.children.length && null !== (n = this._getTagDefinition(e)) && void 0 !== n && n.ignoreFirstLf && (t = t.substring(1));
      }
      return t;
     }
     _consumeText(e) {
      let t = [e],
       n = e.sourceSpan,
       r = e.parts[0];
      if (r.length > 0 && '\n' === r[0]) {
       var a;
       let n = this._getContainer();
       null != n && 0 === n.children.length && null !== (a = this._getTagDefinition(n)) && void 0 !== a && a.ignoreFirstLf && ((r = r.substring(1)), (t[0] = { type: e.type, sourceSpan: e.sourceSpan, parts: [r] }));
      }
      for (; this._peek.type === vr.INTERPOLATION || this._peek.type === vr.TEXT || this._peek.type === vr.ENCODED_ENTITY; ) ((e = this._advance()), t.push(e), e.type === vr.INTERPOLATION ? (r += e.parts.join('').replace(/&([^;]+);/g, Wr)) : e.type === vr.ENCODED_ENTITY ? (r += e.parts[0]) : (r += e.parts.join('')));
      if (r.length > 0) {
       let a = e.sourceSpan;
       this._addToParent(new tr(r, new Zn(n.start, a.end, n.fullStart, n.details), t));
      }
     }
     _closeVoidElement() {
      var e;
      let t = this._getContainer();
      null !== t && null !== (e = this._getTagDefinition(t)) && void 0 !== e && e.isVoid && this._containerStack.pop();
     }
     _consumeElementStartTag(e) {
      var t;
      let n = [],
       r = [];
      this._consumeAttributesAndDirectives(n, r);
      let a = this._getElementFullName(e, this._getClosestElementLikeParent()),
       i = this._getTagDefinition(a),
       s = !1;
      if (this._peek.type === vr.TAG_OPEN_END_VOID) {
       (this._advance(), (s = !0));
       let t = this._getTagDefinition(a);
       this.canSelfClose || t?.canSelfClose || null !== En(a) || t?.isVoid || this.errors.push(Hr.create(a, e.sourceSpan, `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`));
      } else this._peek.type === vr.TAG_OPEN_END && (this._advance(), (s = !1));
      let o = this._peek.sourceSpan.fullStart,
       l = new Zn(e.sourceSpan.start, o, e.sourceSpan.fullStart),
       c = new Zn(e.sourceSpan.start, o, e.sourceSpan.fullStart),
       u = new Zn(e.sourceSpan.start.moveBy(1), e.sourceSpan.end),
       p = new sr(a, n, r, [], s, l, c, void 0, u, i?.isVoid ?? !1),
       d = this._getContainer(),
       h = null !== d && !(null === (t = this._getTagDefinition(d)) || void 0 === t || !t.isClosedByChild(p.name));
      (this._pushContainer(p, h), s ? this._popContainer(a, sr, l) : e.type === vr.INCOMPLETE_TAG_OPEN && (this._popContainer(a, sr, null), this.errors.push(Hr.create(a, l, `Opening tag "${a}" not terminated.`))));
     }
     _consumeComponentStartTag(e) {
      var t;
      let n = e.parts[0],
       r = [],
       a = [];
      this._consumeAttributesAndDirectives(r, a);
      let i = this._getClosestElementLikeParent(),
       s = this._getComponentTagName(e, i),
       o = this._getComponentFullName(e, i),
       l = this._peek.type === vr.COMPONENT_OPEN_END_VOID;
      this._advance();
      let c = this._peek.sourceSpan.fullStart,
       u = new Zn(e.sourceSpan.start, c, e.sourceSpan.fullStart),
       p = new Zn(e.sourceSpan.start, c, e.sourceSpan.fullStart),
       d = new ur(n, s, o, r, a, [], l, u, p, void 0),
       h = this._getContainer(),
       f = null !== h && null !== d.tagName && !(null === (t = this._getTagDefinition(h)) || void 0 === t || !t.isClosedByChild(d.tagName));
      (this._pushContainer(d, f), l ? this._popContainer(o, ur, u) : e.type === vr.INCOMPLETE_COMPONENT_OPEN && (this._popContainer(o, ur, null), this.errors.push(Hr.create(o, u, `Opening tag "${o}" not terminated.`))));
     }
     _consumeAttributesAndDirectives(e, t) {
      for (; this._peek.type === vr.ATTR_NAME || this._peek.type === vr.DIRECTIVE_NAME; ) this._peek.type === vr.DIRECTIVE_NAME ? t.push(this._consumeDirective(this._peek)) : e.push(this._consumeAttr(this._advance()));
     }
     _consumeComponentEndTag(e) {
      let t = this._getComponentFullName(e, this._getClosestElementLikeParent());
      if (!this._popContainer(t, ur, e.sourceSpan)) {
       let n,
        r = this._containerStack[this._containerStack.length - 1];
       n = r instanceof ur && r.componentName === e.parts[0] ? `, did you mean "${r.fullName}"?` : '. It may happen when the tag has already been closed by another tag.';
       let a = `Unexpected closing tag "${t}"${n}`;
       this.errors.push(Hr.create(t, e.sourceSpan, a));
      }
     }
     _getTagDefinition(e) {
      return 'string' == typeof e ? this.tagDefinitionResolver(e) : e instanceof sr ? this.tagDefinitionResolver(e.name) : e instanceof ur && null !== e.tagName ? this.tagDefinitionResolver(e.tagName) : null;
     }
     _pushContainer(e, t) {
      (t && this._containerStack.pop(), this._addToParent(e), this._containerStack.push(e));
     }
     _consumeElementEndTag(e) {
      var t;
      let n = this.allowHtmComponentClosingTags && 0 === e.parts.length ? null : this._getElementFullName(e, this._getClosestElementLikeParent());
      if (n && null !== (t = this._getTagDefinition(n)) && void 0 !== t && t.isVoid) this.errors.push(Hr.create(n, e.sourceSpan, `Void elements do not have end tags "${e.parts[1]}"`));
      else if (!this._popContainer(n, sr, e.sourceSpan)) {
       let t = `Unexpected closing tag "${n}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
       this.errors.push(Hr.create(n, e.sourceSpan, t));
      }
     }
     _popContainer(e, t, n) {
      let r = !1;
      for (let i = this._containerStack.length - 1; i >= 0; i--) {
       var a;
       let s = this._containerStack[i],
        o = s instanceof ur ? s.fullName : s.name;
       if (En(o) ? o === e : (o === e || null === e) && s instanceof t) return ((s.endSourceSpan = n), (s.sourceSpan.end = null !== n ? n.end : s.sourceSpan.end), this._containerStack.splice(i, this._containerStack.length - i), !r);
       (s instanceof cr || null === (a = this._getTagDefinition(s)) || void 0 === a || !a.closedByParent) && (r = !0);
      }
      return !1;
     }
     _consumeAttr(e) {
      let t,
       n = Tn(e.parts[0], e.parts[1]),
       r = e.sourceSpan.end;
      this._peek.type === vr.ATTR_QUOTE && (t = this._advance());
      let a,
       i,
       s = '',
       o = [];
      if (this._peek.type === vr.ATTR_VALUE_TEXT)
       for (a = this._peek.sourceSpan, i = this._peek.sourceSpan.end; this._peek.type === vr.ATTR_VALUE_TEXT || this._peek.type === vr.ATTR_VALUE_INTERPOLATION || this._peek.type === vr.ENCODED_ENTITY; ) {
        let e = this._advance();
        (o.push(e), e.type === vr.ATTR_VALUE_INTERPOLATION ? (s += e.parts.join('').replace(/&([^;]+);/g, Wr)) : e.type === vr.ENCODED_ENTITY ? (s += e.parts[0]) : (s += e.parts.join('')), (i = r = e.sourceSpan.end));
       }
      this._peek.type === vr.ATTR_QUOTE && (i = r = this._advance().sourceSpan.end);
      let l = a && i && new Zn(t?.sourceSpan.start ?? a.start, i, t?.sourceSpan.fullStart ?? a.fullStart);
      return new ir(n, s, new Zn(e.sourceSpan.start, r, e.sourceSpan.fullStart), e.sourceSpan, l, o.length > 0 ? o : void 0, void 0);
     }
     _consumeDirective(e) {
      let t = [],
       n = e.sourceSpan.end,
       r = null;
      if ((this._advance(), this._peek.type === vr.DIRECTIVE_OPEN)) {
       for (n = this._peek.sourceSpan.end, this._advance(); this._peek.type === vr.ATTR_NAME; ) t.push(this._consumeAttr(this._advance()));
       this._peek.type === vr.DIRECTIVE_CLOSE ? ((r = this._peek.sourceSpan), this._advance()) : this.errors.push(Hr.create(null, e.sourceSpan, 'Unterminated directive definition'));
      }
      let a = new Zn(e.sourceSpan.start, n, e.sourceSpan.fullStart),
       i = new Zn(a.start, null === r ? e.sourceSpan.end : r.end, a.fullStart);
      return new pr(e.parts[0], t, i, a, r);
     }
     _consumeBlockOpen(e) {
      let t = [];
      for (; this._peek.type === vr.BLOCK_PARAMETER; ) {
       let e = this._advance();
       t.push(new dr(e.parts[0], e.sourceSpan));
      }
      this._peek.type === vr.BLOCK_OPEN_END && this._advance();
      let n = this._peek.sourceSpan.fullStart,
       r = new Zn(e.sourceSpan.start, n, e.sourceSpan.fullStart),
       a = new Zn(e.sourceSpan.start, n, e.sourceSpan.fullStart),
       i = new cr(e.parts[0], t, [], r, e.sourceSpan, a);
      this._pushContainer(i, !1);
     }
     _consumeBlockClose(e) {
      this._popContainer(null, cr, e.sourceSpan) || this.errors.push(Hr.create(null, e.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'));
     }
     _consumeIncompleteBlock(e) {
      let t = [];
      for (; this._peek.type === vr.BLOCK_PARAMETER; ) {
       let e = this._advance();
       t.push(new dr(e.parts[0], e.sourceSpan));
      }
      let n = this._peek.sourceSpan.fullStart,
       r = new Zn(e.sourceSpan.start, n, e.sourceSpan.fullStart),
       a = new Zn(e.sourceSpan.start, n, e.sourceSpan.fullStart),
       i = new cr(e.parts[0], t, [], r, e.sourceSpan, a);
      (this._pushContainer(i, !1), this._popContainer(null, cr, null), this.errors.push(Hr.create(e.parts[0], r, `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`)));
     }
     _consumeLet(e) {
      let t,
       n,
       r = e.parts[0];
      if (this._peek.type !== vr.LET_VALUE) return void this.errors.push(Hr.create(e.parts[0], e.sourceSpan, `Invalid @let declaration "${r}". Declaration must have a value.`));
      if (((t = this._advance()), this._peek.type !== vr.LET_END)) return void this.errors.push(Hr.create(e.parts[0], e.sourceSpan, `Unterminated @let declaration "${r}". Declaration must be terminated with a semicolon.`));
      n = this._advance();
      let a = n.sourceSpan.fullStart,
       i = new Zn(e.sourceSpan.start, a, e.sourceSpan.fullStart),
       s = e.sourceSpan.toString().lastIndexOf(r),
       o = new Zn(e.sourceSpan.start.moveBy(s), e.sourceSpan.end),
       l = new hr(r, t.parts[0], i, o, t.sourceSpan);
      this._addToParent(l);
     }
     _consumeIncompleteLet(e) {
      let t = e.parts[0] ?? '',
       n = t ? ` "${t}"` : '';
      if (t.length > 0) {
       let n = e.sourceSpan.toString().lastIndexOf(t),
        r = new Zn(e.sourceSpan.start.moveBy(n), e.sourceSpan.end),
        a = new Zn(e.sourceSpan.start, e.sourceSpan.start.moveBy(0)),
        i = new hr(t, '', e.sourceSpan, r, a);
       this._addToParent(i);
      }
      this.errors.push(Hr.create(e.parts[0], e.sourceSpan, `Incomplete @let declaration${n}. @let declarations must be written as \`@let <name> = <value>;\``));
     }
     _getContainer() {
      return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
     }
     _getClosestElementLikeParent() {
      for (let e = this._containerStack.length - 1; e > -1; e--) {
       let t = this._containerStack[e];
       if (t instanceof sr || t instanceof ur) return t;
      }
      return null;
     }
     _addToParent(e) {
      let t = this._getContainer();
      null === t ? this.rootNodes.push(e) : t.children.push(e);
     }
     _getElementFullName(e, t) {
      return Tn(this._getPrefix(e, t), e.parts[1]);
     }
     _getComponentFullName(e, t) {
      let n = e.parts[0],
       r = this._getComponentTagName(e, t);
      return null === r ? n : r.startsWith(':') ? n + r : `${n}:${r}`;
     }
     _getComponentTagName(e, t) {
      let n = this._getPrefix(e, t),
       r = e.parts[2];
      return n || r ? (!n && r ? r : Tn(n, r || 'ng-component')) : null;
     }
     _getPrefix(e, t) {
      var n;
      let r, a;
      if ((e.type === vr.COMPONENT_OPEN_START || e.type === vr.INCOMPLETE_COMPONENT_OPEN || e.type === vr.COMPONENT_CLOSE ? ((r = e.parts[1]), (a = e.parts[2])) : ((r = e.parts[0]), (a = e.parts[1])), (r = r || (null === (n = this._getTagDefinition(a)) || void 0 === n ? void 0 : n.implicitNamespacePrefix) || ''), !r && t)) {
       let e = t instanceof sr ? t.name : t.tagName;
       if (null !== e) {
        let t = yn(e)[1],
         n = this._getTagDefinition(t);
        null !== n && !n.preventNamespaceInheritance && (r = En(e));
       }
      }
      return r;
     }
    };
   function jr(e, t) {
    return e.length > 0 && e[e.length - 1] === t;
   }
   function Wr(e, t) {
    return void 0 !== gr[t] ? gr[t] || e : /^#x[a-f0-9]+$/i.test(t) ? String.fromCodePoint(parseInt(t.slice(2), 16)) : /^#\d+$/.test(t) ? String.fromCodePoint(parseInt(t.slice(1), 10)) : e;
   }
   var Xr = class extends Ur {
     constructor() {
      super($n);
     }
     parse(e, t, n, r = !1, a) {
      return super.parse(e, t, n, r, a);
     }
    },
    Gr = null;
   function Kr(e, t = {}) {
    let { canSelfClose: n = !1, allowHtmComponentClosingTags: r = !1, isTagNameCaseSensitive: a = !1, getTagContentType: i, tokenizeAngularBlocks: s = !1, tokenizeAngularLetDeclaration: o = !1, enableAngularSelectorlessSyntax: l = !1 } = t;
    return (Gr || (Gr = new Xr()), Gr).parse(e, 'angular-html-parser', { tokenizeExpansionForms: s, canSelfClose: n, allowHtmComponentClosingTags: r, tokenizeBlocks: s, tokenizeLet: o, selectorlessEnabled: l }, a, i);
   }
   var Yr = [
    function (e) {
     e.walk((e) => {
      if ('element' === e.kind && e.tagDefinition.ignoreFirstLf && e.children.length > 0 && 'text' === e.children[0].kind && '\n' === e.children[0].value[0]) {
       let t = e.children[0];
       1 === t.value.length ? e.removeChild(t) : (t.value = t.value.slice(1));
      }
     });
    },
    function (e) {
     let t = (e) => 'element' === e.kind && 'ieConditionalStartComment' === e.prev?.kind && e.prev.sourceSpan.end.offset === e.startSourceSpan.start.offset && 'ieConditionalEndComment' === e.firstChild?.kind && e.firstChild.sourceSpan.start.offset === e.startSourceSpan.end.offset;
     e.walk((e) => {
      if (e.children)
       for (let n = 0; n < e.children.length; n++) {
        let r = e.children[n];
        if (!t(r)) continue;
        let a = r.prev,
         i = r.firstChild;
        (e.removeChild(a), n--);
        let s = new Zn(a.sourceSpan.start, i.sourceSpan.end),
         o = new Zn(s.start, r.sourceSpan.end);
        ((r.condition = a.condition), (r.sourceSpan = o), (r.startSourceSpan = s), r.removeChild(i));
       }
     });
    },
    function (e) {
     return (function (e, t, n) {
      e.walk((e) => {
       if (e.children)
        for (let r = 0; r < e.children.length; r++) {
         let a = e.children[r];
         if ('text' !== a.kind && !t(a)) continue;
         'text' !== a.kind && ((a.kind = 'text'), (a.value = n(a)));
         let i = a.prev;
         !i || 'text' !== i.kind || ((i.value += a.value), (i.sourceSpan = new Zn(i.sourceSpan.start, a.sourceSpan.end)), e.removeChild(a), r--);
        }
      });
     })(
      e,
      (e) => 'cdata' === e.kind,
      (e) => `<![CDATA[${e.value}]]>`,
     );
    },
    function (e, t) {
     if ('html' === t.parser) return;
     let n = /\{\{(.+?)\}\}/su;
     e.walk((e) => {
      if (
       (function (e, t) {
        return e.children && !Re(e, t);
       })(e, t)
      )
       for (let t of e.children) {
        if ('text' !== t.kind) continue;
        let r = t.sourceSpan.start,
         a = null,
         i = t.value.split(n);
        for (let n = 0; n < i.length; n++, r = a) {
         let s = i[n];
         n % 2 != 0 ? ((a = r.moveBy(s.length + 4)), e.insertChildBefore(t, { kind: 'interpolation', sourceSpan: new Zn(r, a), children: 0 === s.length ? [] : [{ kind: 'text', value: s, sourceSpan: new Zn(r.moveBy(2), a.moveBy(-2)) }] })) : ((a = r.moveBy(s.length)), s.length > 0 && e.insertChildBefore(t, { kind: 'text', value: s, sourceSpan: new Zn(r, a) }));
        }
        e.removeChild(t);
       }
     });
    },
    function (e, t) {
     e.walk((e) => {
      let n = e.$children;
      if (!n) return;
      if (0 === n.length || (1 === n.length && 'text' === n[0].kind && 0 === re.trim(n[0].value).length)) return ((e.hasDanglingSpaces = n.length > 0), void (e.$children = []));
      let r = (function (e, t) {
        return Re(e, t) || 'interpolation' === e.kind || Ie(e);
       })(e, t),
       a = Ie(e);
      if (!r)
       for (let t = 0; t < n.length; t++) {
        let r = n[t];
        if ('text' !== r.kind) continue;
        let { leadingWhitespace: a, text: i, trailingWhitespace: s } = Ae(r.value),
         o = r.prev,
         l = r.next;
        i ? ((r.value = i), (r.sourceSpan = new Zn(r.sourceSpan.start.moveBy(a.length), r.sourceSpan.end.moveBy(-s.length))), a && (o && (o.hasTrailingSpaces = !0), (r.hasLeadingSpaces = !0)), s && ((r.hasTrailingSpaces = !0), l && (l.hasLeadingSpaces = !0))) : (e.removeChild(r), t--, (a || s) && (o && (o.hasTrailingSpaces = !0), l && (l.hasLeadingSpaces = !0)));
       }
      ((e.isWhitespaceSensitive = r), (e.isIndentationSensitive = a));
     });
    },
    function (e, t) {
     e.walk((e) => {
      e.cssDisplay = (function (e, t) {
       if (nt(e, t)) return 'block';
       if ('comment' === e.prev?.kind) {
        let t = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);
        if (t) return t[1];
       }
       let n = !1;
       if ('element' === e.kind && 'svg' === e.namespace) {
        if (
         !(function (e, t) {
          let n = e;
          for (; n; ) {
           if (t(n)) return !0;
           n = n.parent;
          }
          return !1;
         })(e, (e) => 'svg:foreignObject' === e.fullName)
        )
         return 'svg' === e.name ? 'inline-block' : 'block';
        n = !0;
       }
       switch (t.htmlWhitespaceSensitivity) {
        case 'strict':
         return 'inline';
        case 'ignore':
         return 'block';
        default:
         if ('element' === e.kind && (!e.namespace || n || xe(e)) && Object.prototype.hasOwnProperty.call(Ee, e.name)) return Ee[e.name];
       }
       return 'inline';
      })(e, t);
     });
    },
    function (e) {
     e.walk((e) => {
      e.isSelfClosing = !e.children || ('element' === e.kind && (e.tagDefinition.isVoid || (e.endSourceSpan && e.startSourceSpan.start === e.endSourceSpan.start && e.startSourceSpan.end === e.endSourceSpan.end)));
     });
    },
    function (e, t) {
     e.walk((e) => {
      'element' === e.kind && (e.hasHtmComponentClosingTag = e.endSourceSpan && /^<\s*\/\s*\/\s*>$/u.test(t.originalText.slice(e.endSourceSpan.start.offset, e.endSourceSpan.end.offset)));
     });
    },
    function (e, t) {
     e.walk((e) => {
      let { children: n } = e;
      if (n) {
       if (0 === n.length) return void (e.isDanglingSpaceSensitive = Me(e, t));
       for (let e of n) ((e.isLeadingSpaceSensitive = Fe(e, t)), (e.isTrailingSpaceSensitive = De(e, t)));
       for (let e = 0; e < n.length; e++) {
        let t = n[e];
        ((t.isLeadingSpaceSensitive = (0 === e || t.prev.isTrailingSpaceSensitive) && t.isLeadingSpaceSensitive), (t.isTrailingSpaceSensitive = (e === n.length - 1 || t.next.isLeadingSpaceSensitive) && t.isTrailingSpaceSensitive));
       }
      }
     });
    },
    function (e) {
     let t = (e) => 'element' === e.kind && 0 === e.attrs.length && 1 === e.children.length && 'text' === e.firstChild.kind && !re.hasWhitespaceCharacter(e.children[0].value) && !e.firstChild.hasLeadingSpaces && !e.firstChild.hasTrailingSpaces && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces && 'text' === e.prev?.kind && 'text' === e.next?.kind;
     e.walk((e) => {
      if (e.children)
       for (let n = 0; n < e.children.length; n++) {
        let r = e.children[n];
        if (!t(r)) continue;
        let a = r.prev,
         i = r.next;
        ((a.value += `<${r.rawName}>` + r.firstChild.value + `</${r.rawName}>` + i.value), (a.sourceSpan = new Zn(a.sourceSpan.start, i.sourceSpan.end)), (a.isTrailingSpaceSensitive = i.isTrailingSpaceSensitive), (a.hasTrailingSpaces = i.hasTrailingSpaces), e.removeChild(r), n--, e.removeChild(i));
       }
     });
    },
   ];
   var Zr = function (e, t) {
    for (let n of Yr) n(e, t);
    return e;
   };
   var Jr = {
     features: { experimental_frontMatterSupport: { massageAstNode: !0, embed: !0, print: !0 } },
     preprocess: Zr,
     print: function (e, t, n) {
      let { node: r } = e;
      switch (r.kind) {
       case 'root':
        return (t.__onHtmlRoot && t.__onHtmlRoot(r), [z(gn(e, t, n)), K]);
       case 'element':
       case 'ieConditionalComment':
        return Sn(e, t, n);
       case 'angularControlFlowBlock':
        return vn(e, t, n);
       case 'angularControlFlowBlockParameters':
        return (function (e, t, n) {
         return [V([G, W([';', X], e.map(n, 'children'))]), G];
        })(e, 0, n);
       case 'angularControlFlowBlockParameter':
        return re.trim(r.expression);
       case 'angularLetDeclaration':
        return z(['@let ', z([r.id, ' =', z(V([X, n('init')]))]), ';']);
       case 'angularLetDeclarationInitializer':
        return r.value;
       case 'angularIcuExpression':
        return (function (e, t, n) {
         let { node: r } = e;
         return [Gt(r, t), z([r.switchValue.trim(), ', ', r.type, r.cases.length > 0 ? [',', V([X, W(X, e.map(n, 'cases'))])] : '', G]), It(r, t)];
        })(e, t, n);
       case 'angularIcuCase':
        return (function (e, t, n) {
         let { node: r } = e;
         return [
          r.value,
          ' {',
          z([
           V([
            G,
            e.map(({ node: e, isLast: t }) => {
             let r = [n()];
             return ('text' === e.kind && (e.hasLeadingSpaces && r.unshift(X), e.hasTrailingSpaces && !t && r.push(X)), r);
            }, 'expression'),
           ]),
           G,
          ]),
          '}',
         ];
        })(e, 0, n);
       case 'ieConditionalStartComment':
       case 'ieConditionalEndComment':
        return [Gt(r), It(r)];
       case 'interpolation':
        return [Gt(r, t), ...e.map(n, 'children'), It(r, t)];
       case 'text': {
        if ('interpolation' === r.parent.kind) {
         let e = /\n[^\S\n]*$/u,
          t = e.test(r.value);
         return [F(t ? r.value.replace(e, '') : r.value), t ? K : ''];
        }
        let e = Kt(r, t),
         n = at(r),
         a = Dt(r, t);
        return ((n[0] = [e, n[0]]), n.push([n.pop(), a]), U(n));
       }
       case 'docType':
        return [z([Gt(r, t), ' ', p(0, r.value.replace(/^html\b/iu, 'html'), /\s+/gu, ' ')]), It(r, t)];
       case 'comment':
        return [Kt(r, t), F(t.originalText.slice(Lt(r), Pt(r))), Dt(r, t)];
       case 'attribute': {
        if (null === r.value) return r.rawName;
        let e = Je(r.value),
         n = st(r, t) ? '' : te(e, '"');
        return [r.rawName, '=', n, F('"' === n ? p(0, e, '"', '&quot;') : p(0, e, "'", '&apos;')), n];
       }
       default:
        throw new ae(r, 'HTML');
      }
     },
     insertPragma: (e) => `\x3c!-- @format --\x3e\n\n${e}`,
     massageAstNode: le,
     embed: tn,
     getVisitorKeys: on,
    },
    Qr = Jr,
    ea = [
     { name: 'Angular', type: 'markup', aceMode: 'html', extensions: ['.component.html'], tmScope: 'text.html.basic', aliases: ['xhtml'], codemirrorMode: 'htmlmixed', codemirrorMimeType: 'text/html', parsers: ['angular'], vscodeLanguageIds: ['html'], filenames: [], linguistLanguageId: 146 },
     { name: 'HTML', type: 'markup', aceMode: 'html', extensions: ['.html', '.hta', '.htm', '.html.hl', '.inc', '.xht', '.xhtml'], tmScope: 'text.html.basic', aliases: ['xhtml'], codemirrorMode: 'htmlmixed', codemirrorMimeType: 'text/html', parsers: ['html'], vscodeLanguageIds: ['html'], linguistLanguageId: 146 },
     { name: 'Lightning Web Components', type: 'markup', aceMode: 'html', extensions: [], tmScope: 'text.html.basic', aliases: ['xhtml'], codemirrorMode: 'htmlmixed', codemirrorMimeType: 'text/html', parsers: ['lwc'], vscodeLanguageIds: ['html'], filenames: [], linguistLanguageId: 146 },
     { name: 'MJML', type: 'markup', aceMode: 'html', extensions: ['.mjml'], tmScope: 'text.mjml.basic', aliases: ['MJML', 'mjml'], codemirrorMode: 'htmlmixed', codemirrorMimeType: 'text/html', parsers: ['mjml'], filenames: [], vscodeLanguageIds: ['mjml'], linguistLanguageId: 146 },
     { name: 'Vue', type: 'markup', aceMode: 'vue', extensions: ['.vue'], tmScope: 'source.vue', codemirrorMode: 'vue', codemirrorMimeType: 'text/x-vue', parsers: ['vue'], vscodeLanguageIds: ['vue'], linguistLanguageId: 391 },
    ],
    ta = {
     bracketSpacing: { category: 'Common', type: 'boolean', default: !0, description: 'Print spaces between brackets.', oppositeDescription: 'Do not print spaces between brackets.' },
     objectWrap: {
      category: 'Common',
      type: 'choice',
      default: 'preserve',
      description: 'How to wrap object literals.',
      choices: [
       { value: 'preserve', description: 'Keep as multi-line, if there is a newline between the opening brace and first property.' },
       { value: 'collapse', description: 'Fit to a single line when possible.' },
      ],
     },
     singleQuote: { category: 'Common', type: 'boolean', default: !1, description: 'Use single quotes instead of double quotes.' },
     proseWrap: {
      category: 'Common',
      type: 'choice',
      default: 'preserve',
      description: 'How to wrap prose.',
      choices: [
       { value: 'always', description: 'Wrap prose if it exceeds the print width.' },
       { value: 'never', description: 'Do not wrap prose.' },
       { value: 'preserve', description: 'Wrap prose as-is.' },
      ],
     },
     bracketSameLine: { category: 'Common', type: 'boolean', default: !1, description: 'Put > of opening tags on the last line instead of on a new line.' },
     singleAttributePerLine: { category: 'Common', type: 'boolean', default: !1, description: 'Enforce single attribute per line in HTML, Vue and JSX.' },
    },
    na = 'HTML',
    ra = {
     bracketSameLine: ta.bracketSameLine,
     htmlWhitespaceSensitivity: {
      category: na,
      type: 'choice',
      default: 'css',
      description: 'How to handle whitespaces in HTML.',
      choices: [
       { value: 'css', description: 'Respect the default value of CSS display property.' },
       { value: 'strict', description: 'Whitespaces are considered sensitive.' },
       { value: 'ignore', description: 'Whitespaces are considered insensitive.' },
      ],
     },
     singleAttributePerLine: ta.singleAttributePerLine,
     vueIndentScriptAndStyle: { category: na, type: 'boolean', default: !1, description: 'Indent script and style tags in Vue files.' },
    },
    aa = {};
   i(aa, { angular: () => Ra, html: () => La, lwc: () => Fa, mjml: () => Oa, vue: () => Ia });
   var ia = function (e, t) {
     let n = new SyntaxError(e + ' (' + t.loc.start.line + ':' + t.loc.start.column + ')');
     return Object.assign(n, t);
    },
    sa = { canSelfClose: !0, normalizeTagName: !1, normalizeAttributeName: !1, allowHtmComponentClosingTags: !1, isTagNameCaseSensitive: !1, shouldParseFrontMatter: !0 };
   function oa(e) {
    return { ...sa, ...e };
   }
   function la(e) {
    let { canSelfClose: t, allowHtmComponentClosingTags: n, isTagNameCaseSensitive: r, shouldParseAsRawText: a, tokenizeAngularBlocks: i, tokenizeAngularLetDeclaration: s } = e;
    return { canSelfClose: t, allowHtmComponentClosingTags: n, isTagNameCaseSensitive: r, getTagContentType: a ? (...e) => (a(...e) ? kn.RAW_TEXT : void 0) : void 0, tokenizeAngularBlocks: i, tokenizeAngularLetDeclaration: s };
   }
   var ca,
    ua,
    pa,
    da = new Map([
     ['*', new Set(['accesskey', 'autocapitalize', 'autocorrect', 'autofocus', 'class', 'contenteditable', 'dir', 'draggable', 'enterkeyhint', 'exportparts', 'hidden', 'id', 'inert', 'inputmode', 'is', 'itemid', 'itemprop', 'itemref', 'itemscope', 'itemtype', 'lang', 'nonce', 'part', 'popover', 'slot', 'spellcheck', 'style', 'tabindex', 'title', 'translate', 'writingsuggestions'])],
     ['a', new Set(['charset', 'coords', 'download', 'href', 'hreflang', 'name', 'ping', 'referrerpolicy', 'rel', 'rev', 'shape', 'target', 'type'])],
     ['applet', new Set(['align', 'alt', 'archive', 'code', 'codebase', 'height', 'hspace', 'name', 'object', 'vspace', 'width'])],
     ['area', new Set(['alt', 'coords', 'download', 'href', 'hreflang', 'nohref', 'ping', 'referrerpolicy', 'rel', 'shape', 'target', 'type'])],
     ['audio', new Set(['autoplay', 'controls', 'crossorigin', 'loop', 'muted', 'preload', 'src'])],
     ['base', new Set(['href', 'target'])],
     ['basefont', new Set(['color', 'face', 'size'])],
     ['blockquote', new Set(['cite'])],
     ['body', new Set(['alink', 'background', 'bgcolor', 'link', 'text', 'vlink'])],
     ['br', new Set(['clear'])],
     ['button', new Set(['command', 'commandfor', 'disabled', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'name', 'popovertarget', 'popovertargetaction', 'type', 'value'])],
     ['canvas', new Set(['height', 'width'])],
     ['caption', new Set(['align'])],
     ['col', new Set(['align', 'char', 'charoff', 'span', 'valign', 'width'])],
     ['colgroup', new Set(['align', 'char', 'charoff', 'span', 'valign', 'width'])],
     ['data', new Set(['value'])],
     ['del', new Set(['cite', 'datetime'])],
     ['details', new Set(['name', 'open'])],
     ['dialog', new Set(['closedby', 'open'])],
     ['dir', new Set(['compact'])],
     ['div', new Set(['align'])],
     ['dl', new Set(['compact'])],
     ['embed', new Set(['height', 'src', 'type', 'width'])],
     ['fieldset', new Set(['disabled', 'form', 'name'])],
     ['font', new Set(['color', 'face', 'size'])],
     ['form', new Set(['accept', 'accept-charset', 'action', 'autocomplete', 'enctype', 'method', 'name', 'novalidate', 'target'])],
     ['frame', new Set(['frameborder', 'longdesc', 'marginheight', 'marginwidth', 'name', 'noresize', 'scrolling', 'src'])],
     ['frameset', new Set(['cols', 'rows'])],
     ['h1', new Set(['align'])],
     ['h2', new Set(['align'])],
     ['h3', new Set(['align'])],
     ['h4', new Set(['align'])],
     ['h5', new Set(['align'])],
     ['h6', new Set(['align'])],
     ['head', new Set(['profile'])],
     ['hr', new Set(['align', 'noshade', 'size', 'width'])],
     ['html', new Set(['manifest', 'version'])],
     ['iframe', new Set(['align', 'allow', 'allowfullscreen', 'allowpaymentrequest', 'allowusermedia', 'frameborder', 'height', 'loading', 'longdesc', 'marginheight', 'marginwidth', 'name', 'referrerpolicy', 'sandbox', 'scrolling', 'src', 'srcdoc', 'width'])],
     ['img', new Set(['align', 'alt', 'border', 'crossorigin', 'decoding', 'fetchpriority', 'height', 'hspace', 'ismap', 'loading', 'longdesc', 'name', 'referrerpolicy', 'sizes', 'src', 'srcset', 'usemap', 'vspace', 'width'])],
     ['input', new Set(['accept', 'align', 'alpha', 'alt', 'autocomplete', 'checked', 'colorspace', 'dirname', 'disabled', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'height', 'ismap', 'list', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'pattern', 'placeholder', 'popovertarget', 'popovertargetaction', 'readonly', 'required', 'size', 'src', 'step', 'type', 'usemap', 'value', 'width'])],
     ['ins', new Set(['cite', 'datetime'])],
     ['isindex', new Set(['prompt'])],
     ['label', new Set(['for', 'form'])],
     ['legend', new Set(['align'])],
     ['li', new Set(['type', 'value'])],
     ['link', new Set(['as', 'blocking', 'charset', 'color', 'crossorigin', 'disabled', 'fetchpriority', 'href', 'hreflang', 'imagesizes', 'imagesrcset', 'integrity', 'media', 'referrerpolicy', 'rel', 'rev', 'sizes', 'target', 'type'])],
     ['map', new Set(['name'])],
     ['menu', new Set(['compact'])],
     ['meta', new Set(['charset', 'content', 'http-equiv', 'media', 'name', 'scheme'])],
     ['meter', new Set(['high', 'low', 'max', 'min', 'optimum', 'value'])],
     ['object', new Set(['align', 'archive', 'border', 'classid', 'codebase', 'codetype', 'data', 'declare', 'form', 'height', 'hspace', 'name', 'standby', 'type', 'typemustmatch', 'usemap', 'vspace', 'width'])],
     ['ol', new Set(['compact', 'reversed', 'start', 'type'])],
     ['optgroup', new Set(['disabled', 'label'])],
     ['option', new Set(['disabled', 'label', 'selected', 'value'])],
     ['output', new Set(['for', 'form', 'name'])],
     ['p', new Set(['align'])],
     ['param', new Set(['name', 'type', 'value', 'valuetype'])],
     ['pre', new Set(['width'])],
     ['progress', new Set(['max', 'value'])],
     ['q', new Set(['cite'])],
     ['script', new Set(['async', 'blocking', 'charset', 'crossorigin', 'defer', 'fetchpriority', 'integrity', 'language', 'nomodule', 'referrerpolicy', 'src', 'type'])],
     ['select', new Set(['autocomplete', 'disabled', 'form', 'multiple', 'name', 'required', 'size'])],
     ['slot', new Set(['name'])],
     ['source', new Set(['height', 'media', 'sizes', 'src', 'srcset', 'type', 'width'])],
     ['style', new Set(['blocking', 'media', 'type'])],
     ['table', new Set(['align', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'frame', 'rules', 'summary', 'width'])],
     ['tbody', new Set(['align', 'char', 'charoff', 'valign'])],
     ['td', new Set(['abbr', 'align', 'axis', 'bgcolor', 'char', 'charoff', 'colspan', 'headers', 'height', 'nowrap', 'rowspan', 'scope', 'valign', 'width'])],
     ['template', new Set(['shadowrootclonable', 'shadowrootcustomelementregistry', 'shadowrootdelegatesfocus', 'shadowrootmode', 'shadowrootserializable'])],
     ['textarea', new Set(['autocomplete', 'cols', 'dirname', 'disabled', 'form', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'wrap'])],
     ['tfoot', new Set(['align', 'char', 'charoff', 'valign'])],
     ['th', new Set(['abbr', 'align', 'axis', 'bgcolor', 'char', 'charoff', 'colspan', 'headers', 'height', 'nowrap', 'rowspan', 'scope', 'valign', 'width'])],
     ['thead', new Set(['align', 'char', 'charoff', 'valign'])],
     ['time', new Set(['datetime'])],
     ['tr', new Set(['align', 'bgcolor', 'char', 'charoff', 'valign'])],
     ['track', new Set(['default', 'kind', 'label', 'src', 'srclang'])],
     ['ul', new Set(['compact', 'type'])],
     ['video', new Set(['autoplay', 'controls', 'crossorigin', 'height', 'loop', 'muted', 'playsinline', 'poster', 'preload', 'src', 'width'])],
    ]),
    ha = new Set(['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'content', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fencedframe', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'image', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark', 'marquee', 'math', 'menu', 'menuitem', 'meta', 'meter', 'multicol', 'nav', 'nextid', 'nobr', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'plaintext', 'pre', 'progress', 'q', 'rb', 'rbc', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'search', 'section', 'select', 'selectedcontent', 'shadow', 'slot', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp']),
    fa = { attrs: !0, children: !0, cases: !0, expression: !0 },
    ma = new Set(['parent']);
   ((ca = new WeakSet()),
    (ua = function () {
     return 'angularIcuCase' === this.kind ? 'expression' : 'angularIcuExpression' === this.kind ? 'cases' : 'children';
    }),
    (pa = function () {
     return this.parent?.$children ?? [];
    }));
   var ga = class e {
    constructor(e = {}) {
     (((e, t, n) => {
      t.has(e) ? a('Cannot add the same private member more than once') : t instanceof WeakSet ? t.add(e) : t.set(e, n);
     })(this, ca),
      s(this, 'kind'),
      s(this, 'parent'));
     for (let t of new Set([...ma, ...Object.keys(e)])) this.setProperty(t, e[t]);
     if (we(e)) for (let t of Object.getOwnPropertySymbols(e)) this.setProperty(t, e[t]);
    }
    setProperty(e, t) {
     if (this[e] !== t) {
      if ((e in fa && (t = t.map((e) => this.createChild(e))), !ma.has(e))) return void (this[e] = t);
      Object.defineProperty(this, e, { value: t, enumerable: !1, configurable: !0 });
     }
    }
    map(t) {
     let n;
     for (let r in fa) {
      let a = this[r];
      if (a) {
       let i = va(a, (e) => e.map(t));
       n !== a && (n || (n = new e({ parent: this.parent })), n.setProperty(r, i));
      }
     }
     if (n) for (let e in this) e in fa || (n[e] = this[e]);
     return t(n || this);
    }
    walk(e) {
     for (let t in fa) {
      let n = this[t];
      if (n) for (let t = 0; t < n.length; t++) n[t].walk(e);
     }
     e(this);
    }
    createChild(t) {
     let n = t instanceof e ? t.clone() : new e(t);
     return (n.setProperty('parent', this), n);
    }
    insertChildBefore(e, t) {
     let n = this.$children;
     n.splice(n.indexOf(e), 0, this.createChild(t));
    }
    removeChild(e) {
     let t = this.$children;
     t.splice(t.indexOf(e), 1);
    }
    replaceChild(e, t) {
     let n = this.$children;
     n[n.indexOf(e)] = this.createChild(t);
    }
    clone() {
     return new e(this);
    }
    get $children() {
     return this[o(this, ca, ua)];
    }
    set $children(e) {
     this[o(this, ca, ua)] = e;
    }
    get firstChild() {
     return this.$children?.[0];
    }
    get lastChild() {
     return h(1, this.$children, -1);
    }
    get prev() {
     let e = o(this, ca, pa);
     return e[e.indexOf(this) - 1];
    }
    get next() {
     let e = o(this, ca, pa);
     return e[e.indexOf(this) + 1];
    }
    get rawName() {
     return this.hasExplicitNamespace ? this.fullName : this.name;
    }
    get fullName() {
     return this.namespace ? this.namespace + ':' + this.name : this.name;
    }
    get attrMap() {
     return Object.fromEntries(this.attrs.map((e) => [e.fullName, e.value]));
    }
   };
   function va(e, t) {
    let n = e.map(t);
    return n.some((t, n) => t !== e[n]) ? n : e;
   }
   var ba = [
    {
     regex: /^(?<openingTagSuffix>\[if(?<condition>[^\]]*)\]>)(?<data>.*?)<!\s*\[endif\]$/su,
     parse: function (e, t, n) {
      let { openingTagSuffix: r, condition: a, data: i } = t.groups,
       s = 4 + r.length,
       o = e.sourceSpan.start.moveBy(s),
       l = o.moveBy(i.length),
       [c, u] = (() => {
        try {
         return [!0, n(i, o).children];
        } catch {
         return [!1, [{ kind: 'text', value: i, sourceSpan: new Zn(o, l) }]];
        }
       })();
      return { kind: 'ieConditionalComment', complete: c, children: u, condition: p(0, a.trim(), /\s+/gu, ' '), sourceSpan: e.sourceSpan, startSourceSpan: new Zn(e.sourceSpan.start, o), endSourceSpan: new Zn(l, e.sourceSpan.end) };
     },
    },
    {
     regex: /^\[if(?<condition>[^\]]*)\]><!$/u,
     parse: function (e, t) {
      let { condition: n } = t.groups;
      return { kind: 'ieConditionalStartComment', condition: p(0, n.trim(), /\s+/gu, ' '), sourceSpan: e.sourceSpan };
     },
    },
    {
     regex: /^<!\s*\[endif\]$/u,
     parse: function (e) {
      return { kind: 'ieConditionalEndComment', sourceSpan: e.sourceSpan };
     },
    },
   ];
   var Sa = class extends mr {
    visitExpansionCase(e, t) {
     'angular' === t.parseOptions.name &&
      this.visitChildren(t, (t) => {
       t(e.expression);
      });
    }
    visit(e, { parseOptions: t }) {
     ((function (e) {
      switch (e.kind) {
       case 'element':
        ya(e);
        for (let t of e.attrs) (ya(t), t.valueSpan ? ((t.value = t.valueSpan.toString()), /["']/u.test(t.value[0]) && (t.value = t.value.slice(1, -1))) : (t.value = null));
        break;
       case 'comment':
        e.value = e.sourceSpan.toString().slice(4, -3);
        break;
       case 'text':
        e.value = e.sourceSpan.toString();
      }
     })(e),
      (function (e, t) {
       if ('element' === e.kind) {
        let n = $n(t.isTagNameCaseSensitive ? e.name : e.name.toLowerCase());
        !e.namespace || e.namespace === n.implicitNamespacePrefix || xe(e) ? (e.tagDefinition = n) : (e.tagDefinition = $n(''));
       }
      })(e, t),
      (function (e, t) {
       if ('element' === e.kind && (t.normalizeTagName && (!e.namespace || e.namespace === e.tagDefinition.implicitNamespacePrefix || xe(e)) && (e.name = ka(e.name, (e) => ha.has(e))), t.normalizeAttributeName)) for (let n of e.attrs) n.namespace || (n.name = ka(n.name, (t) => da.has(e.name) && (da.get('*').has(t) || da.get(e.name).has(t))));
      })(e, t),
      (function (e) {
       e.sourceSpan && e.endSourceSpan && (e.sourceSpan = new Zn(e.sourceSpan.start, e.endSourceSpan.end));
      })(e));
    }
   };
   function _a(e, t, n, r) {
    (fr(new Sa(), e.children, { parseOptions: n }), t && e.children.unshift(t));
    let a = new ga(e);
    return (
     a.walk((e) => {
      if ('comment' === e.kind) {
       let t = (function (e, t) {
        if (e.value)
         for (let { regex: n, parse: r } of ba) {
          let a = e.value.match(n);
          if (a) return r(e, a, t);
         }
        return null;
       })(e, r);
       t && e.parent.replaceChild(e, t);
      }
      ((function (e) {
       if ('block' === e.kind) {
        if (((e.name = p(0, e.name.toLowerCase(), /\s+/gu, ' ').trim()), (e.kind = 'angularControlFlowBlock'), !be(e.parameters))) return void delete e.parameters;
        for (let t of e.parameters) t.kind = 'angularControlFlowBlockParameter';
        e.parameters = { kind: 'angularControlFlowBlockParameters', children: e.parameters, sourceSpan: new Zn(e.parameters[0].sourceSpan.start, h(0, e.parameters, -1).sourceSpan.end) };
       }
      })(e),
       (function (e) {
        'letDeclaration' === e.kind && ((e.kind = 'angularLetDeclaration'), (e.id = e.name), (e.init = { kind: 'angularLetDeclarationInitializer', sourceSpan: new Zn(e.valueSpan.start, e.valueSpan.end), value: e.value }), delete e.name, delete e.value);
       })(e),
       (function (e) {
        ('expansion' === e.kind && (e.kind = 'angularIcuExpression'), 'expansionCase' === e.kind && (e.kind = 'angularIcuCase'));
       })(e));
     }),
     a
    );
   }
   function ka(e, t) {
    let n = e.toLowerCase();
    return t(n) ? n : e;
   }
   function ya(e) {
    let t = e.name.startsWith(':') ? e.name.slice(1).split(':')[0] : null,
     n = e.nameSpan.toString(),
     r = null !== t && n.startsWith(`${t}:`),
     a = r ? n.slice(t.length + 1) : n;
    ((e.name = a), (e.namespace = t), (e.hasExplicitNamespace = r));
   }
   function wa(e, t) {
    let { rootNodes: n, errors: r } = Kr(e, la(t));
    return (r.length > 0 && Ta(r[0]), { parseOptions: t, rootNodes: n });
   }
   function Ca(e, t) {
    let n = la(t),
     { rootNodes: r, errors: a } = Kr(e, n);
    if (r.some((e) => ('docType' === e.kind && 'html' === e.value) || ('element' === e.kind && 'html' === e.name.toLowerCase()))) return wa(e, Na);
    let i,
     s = () => i ?? (i = Kr(e, { ...n, getTagContentType: void 0 })),
     o = (e) => {
      let { offset: t } = e.startSourceSpan.start;
      return s().rootNodes.find((e) => 'element' === e.kind && e.startSourceSpan.start.offset === t) ?? e;
     };
    for (let [l, c] of r.entries())
     if ('element' === c.kind)
      if (c.isVoid) ((a = s().errors), (r[l] = o(c)));
      else if (Ea(c)) {
       let { endSourceSpan: e, startSourceSpan: t } = c,
        n = s().errors.find((n) => n.span.start.offset > t.start.offset && n.span.start.offset < e.end.offset);
       (n && Ta(n), (r[l] = o(c)));
      }
    return (a.length > 0 && Ta(a[0]), { parseOptions: t, rootNodes: r });
   }
   function Ea(e) {
    if ('element' !== e.kind || 'template' !== e.name) return !1;
    let t = e.attrs.find((e) => 'lang' === e.name)?.value;
    return !t || 'html' === t;
   }
   function Ta(e) {
    let {
     msg: t,
     span: { start: n, end: r },
    } = e;
    throw ia(t, { loc: { start: { line: n.line + 1, column: n.col + 1 }, end: { line: r.line + 1, column: r.col + 1 } }, cause: e });
   }
   function xa(e, t, n, r = {}) {
    let a,
     { frontMatter: i, content: s } = n.shouldParseFrontMatter ? Ce(e) : { content: e },
     o = new Yn(e, r.filepath),
     l = new Kn(o, 0, 0, 0),
     c = l.moveBy(e.length),
     { parseOptions: u, rootNodes: d } = t(s, n),
     f = { kind: 'root', sourceSpan: new Zn(l, c), children: d };
    if (i) {
     let [e, t] = [i.start, i.end].map((e) => new Kn(o, e.index, e.line - 1, e.column));
     a = { ...i, kind: 'frontMatter', sourceSpan: new Zn(e, t) };
    }
    return _a(f, a, u, (n, a) =>
     (function (e, t, n, r, a, i) {
      let { offset: s } = r,
       o = xa(p(0, t.slice(0, s), /[^\n]/gu, ' ') + n, e, { ...a, shouldParseFrontMatter: !1 }, i);
      o.sourceSpan = new Zn(r, h(0, o.children, -1).sourceSpan.end);
      let l = o.children[0];
      return (l.length === s ? o.children.shift() : ((l.sourceSpan = new Zn(l.sourceSpan.start.moveBy(s), l.sourceSpan.end)), (l.value = l.value.slice(s))), o);
     })(t, e, n, a, u, r),
    );
   }
   var Na = oa({ name: 'html', normalizeTagName: !0, normalizeAttributeName: !0, allowHtmComponentClosingTags: !0 });
   function Aa(e) {
    let t = oa(e),
     n = 'vue' === t.name ? Ca : wa;
    return { parse: (e, r) => xa(e, n, t, r), hasPragma: un, hasIgnorePragma: pn, astFormat: 'html', locStart: Lt, locEnd: Pt };
   }
   var La = Aa(Na),
    Pa = new Set(['mj-style', 'mj-raw']),
    Oa = Aa({ ...Na, name: 'mjml', shouldParseAsRawText: (e) => Pa.has(e) }),
    Ra = Aa({ name: 'angular', tokenizeAngularBlocks: !0, tokenizeAngularLetDeclaration: !0 }),
    Ia = Aa({ name: 'vue', isTagNameCaseSensitive: !0, shouldParseAsRawText: (e, t, n, r) => 'html' !== e.toLowerCase() && !n && ('template' !== e || r.some(({ name: e, value: t }) => 'lang' === e && 'html' !== t && '' !== t && void 0 !== t)) }),
    Fa = Aa({ name: 'lwc', canSelfClose: !1 }),
    Da = { html: Qr };
  },
  96345(e, t, n) {
   'use strict';
   n.d(t, { A: () => r });
   const r = (0, n(18652).A)('outline', 'chevron-down', 'ChevronDown', [['path', { d: 'M6 9l6 6l6 -6', key: 'svg-0' }]]);
  },
 },
]);
