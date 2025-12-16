/*! For license information please see 98981.40d8a918.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [98981],
 {
  26990: (e, t, r) => {
   r.d(t, { A: () => n });
   var n = (0, r(99773).A)('outline', 'mood-sad', 'IconMoodSad', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 10l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 10l.01 0', key: 'svg-2' }],
    ['path', { d: 'M9.5 15.25a3.5 3.5 0 0 1 5 0', key: 'svg-3' }],
   ]);
  },
  29521: (e, t, r) => {
   var n = r(30758);
   function a(e) {
    for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1; r < arguments.length; r++) t += '&args[]=' + encodeURIComponent(arguments[r]);
    return 'Minified React error #' + e + '; visit ' + t + ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
   }
   var i = null,
    s = 0;
   function o(e, t) {
    if (0 !== t.length)
     if (512 < t.length) 0 < s && (e.enqueue(new Uint8Array(i.buffer, 0, s)), (i = new Uint8Array(512)), (s = 0)), e.enqueue(t);
     else {
      var r = i.length - s;
      r < t.length && (0 === r ? e.enqueue(i) : (i.set(t.subarray(0, r), s), e.enqueue(i), (t = t.subarray(r))), (i = new Uint8Array(512)), (s = 0)), i.set(t, s), (s += t.length);
     }
   }
   function l(e, t) {
    return o(e, t), !0;
   }
   function c(e) {
    i && 0 < s && (e.enqueue(new Uint8Array(i.buffer, 0, s)), (i = null), (s = 0));
   }
   var u = new TextEncoder();
   function p(e) {
    return u.encode(e);
   }
   function h(e) {
    return u.encode(e);
   }
   function d(e, t) {
    'function' == typeof e.error ? e.error(t) : e.close();
   }
   var f = Object.prototype.hasOwnProperty,
    m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    v = {};
   function y(e) {
    return !!f.call(v, e) || (!f.call(g, e) && (m.test(e) ? (v[e] = !0) : ((g[e] = !0), !1)));
   }
   function b(e, t, r, n, a, i, s) {
    (this.acceptsBooleans = 2 === t || 3 === t || 4 === t), (this.attributeName = n), (this.attributeNamespace = a), (this.mustUseProperty = r), (this.propertyName = e), (this.type = t), (this.sanitizeURL = i), (this.removeEmptyString = s);
   }
   var S = {};
   'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'.split(' ').forEach(function (e) {
    S[e] = new b(e, 0, !1, e, null, !1, !1);
   }),
    [
     ['acceptCharset', 'accept-charset'],
     ['className', 'class'],
     ['htmlFor', 'for'],
     ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
     var t = e[0];
     S[t] = new b(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
     S[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
     S[e] = new b(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'.split(' ').forEach(function (e) {
     S[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
     S[e] = new b(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
     S[e] = new b(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
     S[e] = new b(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
     S[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
   var w = /[\-:]([a-z])/g;
   function k(e) {
    return e[1].toUpperCase();
   }
   'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'.split(' ').forEach(function (e) {
    var t = e.replace(w, k);
    S[t] = new b(t, 1, !1, e, null, !1, !1);
   }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
     var t = e.replace(w, k);
     S[t] = new b(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
     var t = e.replace(w, k);
     S[t] = new b(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
     S[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (S.xlinkHref = new b('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
     S[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
   var _ = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    C = ['Webkit', 'ms', 'Moz', 'O'];
   Object.keys(_).forEach(function (e) {
    C.forEach(function (t) {
     (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_[t] = _[e]);
    });
   });
   var x = /["'&<>]/;
   function T(e) {
    if ('boolean' == typeof e || 'number' == typeof e) return '' + e;
    e = '' + e;
    var t = x.exec(e);
    if (t) {
     var r,
      n = '',
      a = 0;
     for (r = t.index; r < e.length; r++) {
      switch (e.charCodeAt(r)) {
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
      a !== r && (n += e.substring(a, r)), (a = r + 1), (n += t);
     }
     e = a !== r ? n + e.substring(a, r) : n;
    }
    return e;
   }
   var E = /([A-Z])/g,
    L = /^ms-/,
    q = Array.isArray,
    R = h('<script>'),
    I = h('<\/script>'),
    F = h('<script src="'),
    P = h('<script type="module" src="'),
    N = h('" async=""><\/script>'),
    D = /(<\/|<)(s)(cript)/gi;
   function M(e, t, r, n) {
    return t + ('s' === r ? '\\u0073' : '\\u0053') + n;
   }
   function A(e, t) {
    return { insertionMode: e, selectedValue: t };
   }
   var B = h('\x3c!-- --\x3e');
   function H(e, t, r, n) {
    return '' === t ? n : (n && e.push(B), e.push(p(T(t))), !0);
   }
   var V = new Map(),
    O = h(' style="'),
    z = h(':'),
    $ = h(';');
   function U(e, t, r) {
    if ('object' != typeof r) throw Error(a(62));
    for (var n in ((t = !0), r))
     if (f.call(r, n)) {
      var i = r[n];
      if (null != i && 'boolean' != typeof i && '' !== i) {
       if (0 === n.indexOf('--')) {
        var s = p(T(n));
        i = p(T(('' + i).trim()));
       } else {
        s = n;
        var o = V.get(s);
        void 0 !== o || ((o = h(T(s.replace(E, '-$1').toLowerCase().replace(L, '-ms-')))), V.set(s, o)), (s = o), (i = 'number' == typeof i ? (0 === i || f.call(_, n) ? p('' + i) : p(i + 'px')) : p(T(('' + i).trim())));
       }
       t ? ((t = !1), e.push(O, s, z, i)) : e.push($, s, z, i);
      }
     }
    t || e.push(G);
   }
   var W = h(' '),
    j = h('="'),
    G = h('"'),
    X = h('=""');
   function Y(e, t, r, n) {
    switch (r) {
     case 'style':
      return void U(e, t, n);
     case 'defaultValue':
     case 'defaultChecked':
     case 'innerHTML':
     case 'suppressContentEditableWarning':
     case 'suppressHydrationWarning':
      return;
    }
    if (!(2 < r.length) || ('o' !== r[0] && 'O' !== r[0]) || ('n' !== r[1] && 'N' !== r[1]))
     if (null !== (t = S.hasOwnProperty(r) ? S[r] : null)) {
      switch (typeof n) {
       case 'function':
       case 'symbol':
        return;
       case 'boolean':
        if (!t.acceptsBooleans) return;
      }
      switch (((r = p(t.attributeName)), t.type)) {
       case 3:
        n && e.push(W, r, X);
        break;
       case 4:
        !0 === n ? e.push(W, r, X) : !1 !== n && e.push(W, r, j, p(T(n)), G);
        break;
       case 5:
        isNaN(n) || e.push(W, r, j, p(T(n)), G);
        break;
       case 6:
        !isNaN(n) && 1 <= n && e.push(W, r, j, p(T(n)), G);
        break;
       default:
        t.sanitizeURL && (n = '' + n), e.push(W, r, j, p(T(n)), G);
      }
     } else if (y(r)) {
      switch (typeof n) {
       case 'function':
       case 'symbol':
        return;
       case 'boolean':
        if ('data-' !== (t = r.toLowerCase().slice(0, 5)) && 'aria-' !== t) return;
      }
      e.push(W, p(r), j, p(T(n)), G);
     }
   }
   var J = h('>'),
    K = h('/>');
   function Z(e, t, r) {
    if (null != t) {
     if (null != r) throw Error(a(60));
     if ('object' != typeof t || !('__html' in t)) throw Error(a(61));
     null != (t = t.__html) && e.push(p('' + t));
    }
   }
   var Q = h(' selected=""');
   function ee(e, t, r, n) {
    e.push(ae(r));
    var a,
     i = (r = null);
    for (a in t)
     if (f.call(t, a)) {
      var s = t[a];
      if (null != s)
       switch (a) {
        case 'children':
         r = s;
         break;
        case 'dangerouslySetInnerHTML':
         i = s;
         break;
        default:
         Y(e, n, a, s);
       }
     }
    return e.push(J), Z(e, i, r), 'string' == typeof r ? (e.push(p(T(r))), null) : r;
   }
   var te = h('\n'),
    re = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    ne = new Map();
   function ae(e) {
    var t = ne.get(e);
    if (void 0 === t) {
     if (!re.test(e)) throw Error(a(65, e));
     (t = h('<' + e)), ne.set(e, t);
    }
    return t;
   }
   var ie = h('<!DOCTYPE html>');
   function se(e, t, r, i, s) {
    switch (t) {
     case 'select':
      e.push(ae('select'));
      var o = null,
       l = null;
      for (d in r)
       if (f.call(r, d)) {
        var c = r[d];
        if (null != c)
         switch (d) {
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
           Y(e, i, d, c);
         }
       }
      return e.push(J), Z(e, l, o), o;
     case 'option':
      (l = s.selectedValue), e.push(ae('option'));
      var u = (c = null),
       h = null,
       d = null;
      for (o in r)
       if (f.call(r, o)) {
        var m = r[o];
        if (null != m)
         switch (o) {
          case 'children':
           c = m;
           break;
          case 'selected':
           h = m;
           break;
          case 'dangerouslySetInnerHTML':
           d = m;
           break;
          case 'value':
           u = m;
          default:
           Y(e, i, o, m);
         }
       }
      if (null != l)
       if (
        ((r =
         null !== u
          ? '' + u
          : (function (e) {
             var t = '';
             return (
              n.Children.forEach(e, function (e) {
               null != e && (t += e);
              }),
              t
             );
            })(c)),
        q(l))
       ) {
        for (i = 0; i < l.length; i++)
         if ('' + l[i] === r) {
          e.push(Q);
          break;
         }
       } else '' + l === r && e.push(Q);
      else h && e.push(Q);
      return e.push(J), Z(e, d, c), c;
     case 'textarea':
      for (c in (e.push(ae('textarea')), (d = l = o = null), r))
       if (f.call(r, c) && null != (u = r[c]))
        switch (c) {
         case 'children':
          d = u;
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
          Y(e, i, c, u);
        }
      if ((null === o && null !== l && (o = l), e.push(J), null != d)) {
       if (null != o) throw Error(a(92));
       if (q(d) && 1 < d.length) throw Error(a(93));
       o = '' + d;
      }
      return 'string' == typeof o && '\n' === o[0] && e.push(te), null !== o && e.push(p(T('' + o))), null;
     case 'input':
      for (l in (e.push(ae('input')), (u = d = c = o = null), r))
       if (f.call(r, l) && null != (h = r[l]))
        switch (l) {
         case 'children':
         case 'dangerouslySetInnerHTML':
          throw Error(a(399, 'input'));
         case 'defaultChecked':
          u = h;
          break;
         case 'defaultValue':
          c = h;
          break;
         case 'checked':
          d = h;
          break;
         case 'value':
          o = h;
          break;
         default:
          Y(e, i, l, h);
        }
      return null !== d ? Y(e, i, 'checked', d) : null !== u && Y(e, i, 'checked', u), null !== o ? Y(e, i, 'value', o) : null !== c && Y(e, i, 'value', c), e.push(K), null;
     case 'menuitem':
      for (var g in (e.push(ae('menuitem')), r))
       if (f.call(r, g) && null != (o = r[g]))
        switch (g) {
         case 'children':
         case 'dangerouslySetInnerHTML':
          throw Error(a(400));
         default:
          Y(e, i, g, o);
        }
      return e.push(J), null;
     case 'title':
      for (m in (e.push(ae('title')), (o = null), r))
       if (f.call(r, m) && null != (l = r[m]))
        switch (m) {
         case 'children':
          o = l;
          break;
         case 'dangerouslySetInnerHTML':
          throw Error(a(434));
         default:
          Y(e, i, m, l);
        }
      return e.push(J), o;
     case 'listing':
     case 'pre':
      for (u in (e.push(ae(t)), (l = o = null), r))
       if (f.call(r, u) && null != (c = r[u]))
        switch (u) {
         case 'children':
          o = c;
          break;
         case 'dangerouslySetInnerHTML':
          l = c;
          break;
         default:
          Y(e, i, u, c);
        }
      if ((e.push(J), null != l)) {
       if (null != o) throw Error(a(60));
       if ('object' != typeof l || !('__html' in l)) throw Error(a(61));
       null != (r = l.__html) && ('string' == typeof r && 0 < r.length && '\n' === r[0] ? e.push(te, p(r)) : e.push(p('' + r)));
      }
      return 'string' == typeof o && '\n' === o[0] && e.push(te), o;
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
      for (var v in (e.push(ae(t)), r))
       if (f.call(r, v) && null != (o = r[v]))
        switch (v) {
         case 'children':
         case 'dangerouslySetInnerHTML':
          throw Error(a(399, t));
         default:
          Y(e, i, v, o);
        }
      return e.push(K), null;
     case 'annotation-xml':
     case 'color-profile':
     case 'font-face':
     case 'font-face-src':
     case 'font-face-uri':
     case 'font-face-format':
     case 'font-face-name':
     case 'missing-glyph':
      return ee(e, r, t, i);
     case 'html':
      return 0 === s.insertionMode && e.push(ie), ee(e, r, t, i);
     default:
      if (-1 === t.indexOf('-') && 'string' != typeof r.is) return ee(e, r, t, i);
      for (h in (e.push(ae(t)), (l = o = null), r))
       if (f.call(r, h) && null != (c = r[h]))
        switch (h) {
         case 'children':
          o = c;
          break;
         case 'dangerouslySetInnerHTML':
          l = c;
          break;
         case 'style':
          U(e, i, c);
          break;
         case 'suppressContentEditableWarning':
         case 'suppressHydrationWarning':
          break;
         default:
          y(h) && 'function' != typeof c && 'symbol' != typeof c && e.push(W, p(h), j, p(T(c)), G);
        }
      return e.push(J), Z(e, l, o), o;
    }
   }
   var oe = h('</'),
    le = h('>'),
    ce = h('<template id="'),
    ue = h('"></template>'),
    pe = h('\x3c!--$--\x3e'),
    he = h('\x3c!--$?--\x3e<template id="'),
    de = h('"></template>'),
    fe = h('\x3c!--$!--\x3e'),
    me = h('\x3c!--/$--\x3e'),
    ge = h('<template'),
    ve = h('"'),
    ye = h(' data-dgst="');
   h(' data-msg="'), h(' data-stck="');
   var be = h('></template>');
   function Se(e, t, r) {
    if ((o(e, he), null === r)) throw Error(a(395));
    return o(e, r), l(e, de);
   }
   var we = h('<div hidden id="'),
    ke = h('">'),
    _e = h('</div>'),
    Ce = h('<svg aria-hidden="true" style="display:none" id="'),
    xe = h('">'),
    Te = h('</svg>'),
    Ee = h('<math aria-hidden="true" style="display:none" id="'),
    Le = h('">'),
    qe = h('</math>'),
    Re = h('<table hidden id="'),
    Ie = h('">'),
    Fe = h('</table>'),
    Pe = h('<table hidden><tbody id="'),
    Ne = h('">'),
    De = h('</tbody></table>'),
    Me = h('<table hidden><tr id="'),
    Ae = h('">'),
    Be = h('</tr></table>'),
    He = h('<table hidden><colgroup id="'),
    Ve = h('">'),
    Oe = h('</colgroup></table>');
   var ze = h('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),
    $e = h('$RS("'),
    Ue = h('","'),
    We = h('")<\/script>'),
    je = h('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),
    Ge = h('$RC("'),
    Xe = h('","'),
    Ye = h('")<\/script>'),
    Je = h('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),
    Ke = h('$RX("'),
    Ze = h('"'),
    Qe = h(')<\/script>'),
    et = h(','),
    tt = /[<\u2028\u2029]/g;
   function rt(e) {
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
   var nt = Object.assign,
    at = Symbol.for('react.element'),
    it = Symbol.for('react.portal'),
    st = Symbol.for('react.fragment'),
    ot = Symbol.for('react.strict_mode'),
    lt = Symbol.for('react.profiler'),
    ct = Symbol.for('react.provider'),
    ut = Symbol.for('react.context'),
    pt = Symbol.for('react.forward_ref'),
    ht = Symbol.for('react.suspense'),
    dt = Symbol.for('react.suspense_list'),
    ft = Symbol.for('react.memo'),
    mt = Symbol.for('react.lazy'),
    gt = Symbol.for('react.scope'),
    vt = Symbol.for('react.debug_trace_mode'),
    yt = Symbol.for('react.legacy_hidden'),
    bt = Symbol.for('react.default_value'),
    St = Symbol.iterator;
   function wt(e) {
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
     case ht:
      return 'Suspense';
     case dt:
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
       return (e = e.displayName) || (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'), e;
      case ft:
       return null !== (t = e.displayName || null) ? t : wt(e.type) || 'Memo';
      case mt:
       (t = e._payload), (e = e._init);
       try {
        return wt(e(t));
       } catch (r) {}
     }
    return null;
   }
   var kt = {};
   function _t(e, t) {
    if (!(e = e.contextTypes)) return kt;
    var r,
     n = {};
    for (r in e) n[r] = t[r];
    return n;
   }
   var Ct = null;
   function xt(e, t) {
    if (e !== t) {
     (e.context._currentValue = e.parentValue), (e = e.parent);
     var r = t.parent;
     if (null === e) {
      if (null !== r) throw Error(a(401));
     } else {
      if (null === r) throw Error(a(401));
      xt(e, r);
     }
     t.context._currentValue = t.value;
    }
   }
   function Tt(e) {
    (e.context._currentValue = e.parentValue), null !== (e = e.parent) && Tt(e);
   }
   function Et(e) {
    var t = e.parent;
    null !== t && Et(t), (e.context._currentValue = e.value);
   }
   function Lt(e, t) {
    if (((e.context._currentValue = e.parentValue), null === (e = e.parent))) throw Error(a(402));
    e.depth === t.depth ? xt(e, t) : Lt(e, t);
   }
   function qt(e, t) {
    var r = t.parent;
    if (null === r) throw Error(a(402));
    e.depth === r.depth ? xt(e, r) : qt(e, r), (t.context._currentValue = t.value);
   }
   function Rt(e) {
    var t = Ct;
    t !== e && (null === t ? Et(e) : null === e ? Tt(t) : t.depth === e.depth ? xt(t, e) : t.depth > e.depth ? Lt(t, e) : qt(t, e), (Ct = e));
   }
   var It = {
    isMounted: function () {
     return !1;
    },
    enqueueSetState: function (e, t) {
     null !== (e = e._reactInternals).queue && e.queue.push(t);
    },
    enqueueReplaceState: function (e, t) {
     ((e = e._reactInternals).replace = !0), (e.queue = [t]);
    },
    enqueueForceUpdate: function () {},
   };
   function Ft(e, t, r, n) {
    var a = void 0 !== e.state ? e.state : null;
    (e.updater = It), (e.props = r), (e.state = a);
    var i = { queue: [], replace: !1 };
    e._reactInternals = i;
    var s = t.contextType;
    if (((e.context = 'object' == typeof s && null !== s ? s._currentValue : n), 'function' == typeof (s = t.getDerivedStateFromProps) && ((a = null == (s = s(r, a)) ? a : nt({}, a, s)), (e.state = a)), 'function' != typeof t.getDerivedStateFromProps && 'function' != typeof e.getSnapshotBeforeUpdate && ('function' == typeof e.UNSAFE_componentWillMount || 'function' == typeof e.componentWillMount)))
     if (((t = e.state), 'function' == typeof e.componentWillMount && e.componentWillMount(), 'function' == typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), t !== e.state && It.enqueueReplaceState(e, e.state, null), null !== i.queue && 0 < i.queue.length))
      if (((t = i.queue), (s = i.replace), (i.queue = null), (i.replace = !1), s && 1 === t.length)) e.state = t[0];
      else {
       for (i = s ? t[0] : e.state, a = !0, s = s ? 1 : 0; s < t.length; s++) {
        var o = t[s];
        null != (o = 'function' == typeof o ? o.call(e, i, r, n) : o) && (a ? ((a = !1), (i = nt({}, i, o))) : nt(i, o));
       }
       e.state = i;
      }
     else i.queue = null;
   }
   var Pt = { id: 1, overflow: '' };
   function Nt(e, t, r) {
    var n = e.id;
    e = e.overflow;
    var a = 32 - Dt(n) - 1;
    (n &= ~(1 << a)), (r += 1);
    var i = 32 - Dt(t) + a;
    if (30 < i) {
     var s = a - (a % 5);
     return (i = (n & ((1 << s) - 1)).toString(32)), (n >>= s), (a -= s), { id: (1 << (32 - Dt(t) + a)) | (r << a) | n, overflow: i + e };
    }
    return { id: (1 << i) | (r << a) | n, overflow: e };
   }
   var Dt = Math.clz32
     ? Math.clz32
     : function (e) {
        return 0 === (e >>>= 0) ? 32 : (31 - ((Mt(e) / At) | 0)) | 0;
       },
    Mt = Math.log,
    At = Math.LN2;
   var Bt =
     'function' == typeof Object.is
      ? Object.is
      : function (e, t) {
         return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        },
    Ht = null,
    Vt = null,
    Ot = null,
    zt = null,
    $t = !1,
    Ut = !1,
    Wt = 0,
    jt = null,
    Gt = 0;
   function Xt() {
    if (null === Ht) throw Error(a(321));
    return Ht;
   }
   function Yt() {
    if (0 < Gt) throw Error(a(312));
    return { memoizedState: null, queue: null, next: null };
   }
   function Jt() {
    return null === zt ? (null === Ot ? (($t = !1), (Ot = zt = Yt())) : (($t = !0), (zt = Ot))) : null === zt.next ? (($t = !1), (zt = zt.next = Yt())) : (($t = !0), (zt = zt.next)), zt;
   }
   function Kt() {
    (Vt = Ht = null), (Ut = !1), (Ot = null), (Gt = 0), (zt = jt = null);
   }
   function Zt(e, t) {
    return 'function' == typeof t ? t(e) : t;
   }
   function Qt(e, t, r) {
    if (((Ht = Xt()), (zt = Jt()), $t)) {
     var n = zt.queue;
     if (((t = n.dispatch), null !== jt && void 0 !== (r = jt.get(n)))) {
      jt.delete(n), (n = zt.memoizedState);
      do {
       (n = e(n, r.action)), (r = r.next);
      } while (null !== r);
      return (zt.memoizedState = n), [n, t];
     }
     return [zt.memoizedState, t];
    }
    return (e = e === Zt ? ('function' == typeof t ? t() : t) : void 0 !== r ? r(t) : t), (zt.memoizedState = e), (e = (e = zt.queue = { last: null, dispatch: null }).dispatch = tr.bind(null, Ht, e)), [zt.memoizedState, e];
   }
   function er(e, t) {
    if (((Ht = Xt()), (t = void 0 === t ? null : t), null !== (zt = Jt()))) {
     var r = zt.memoizedState;
     if (null !== r && null !== t) {
      var n = r[1];
      e: if (null === n) n = !1;
      else {
       for (var a = 0; a < n.length && a < t.length; a++)
        if (!Bt(t[a], n[a])) {
         n = !1;
         break e;
        }
       n = !0;
      }
      if (n) return r[0];
     }
    }
    return (e = e()), (zt.memoizedState = [e, t]), e;
   }
   function tr(e, t, r) {
    if (25 <= Gt) throw Error(a(301));
    if (e === Ht)
     if (((Ut = !0), (e = { action: r, next: null }), null === jt && (jt = new Map()), void 0 === (r = jt.get(t)))) jt.set(t, e);
     else {
      for (t = r; null !== t.next; ) t = t.next;
      t.next = e;
     }
   }
   function rr() {
    throw Error(a(394));
   }
   function nr() {}
   var ar = {
     readContext: function (e) {
      return e._currentValue;
     },
     useContext: function (e) {
      return Xt(), e._currentValue;
     },
     useMemo: er,
     useReducer: Qt,
     useRef: function (e) {
      Ht = Xt();
      var t = (zt = Jt()).memoizedState;
      return null === t ? ((e = { current: e }), (zt.memoizedState = e)) : t;
     },
     useState: function (e) {
      return Qt(Zt, e);
     },
     useInsertionEffect: nr,
     useLayoutEffect: function () {},
     useCallback: function (e, t) {
      return er(function () {
       return e;
      }, t);
     },
     useImperativeHandle: nr,
     useEffect: nr,
     useDebugValue: nr,
     useDeferredValue: function (e) {
      return Xt(), e;
     },
     useTransition: function () {
      return Xt(), [!1, rr];
     },
     useId: function () {
      var e = Vt.treeContext,
       t = e.overflow;
      e = ((e = e.id) & ~(1 << (32 - Dt(e) - 1))).toString(32) + t;
      var r = ir;
      if (null === r) throw Error(a(404));
      return (t = Wt++), (e = ':' + r.idPrefix + 'R' + e), 0 < t && (e += 'H' + t.toString(32)), e + ':';
     },
     useMutableSource: function (e, t) {
      return Xt(), t(e._source);
     },
     useSyncExternalStore: function (e, t, r) {
      if (void 0 === r) throw Error(a(407));
      return r();
     },
    },
    ir = null,
    sr = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
   function or(e) {
    return console.error(e), null;
   }
   function lr() {}
   function cr(e, t, r, n, a, i, s, o) {
    e.allPendingTasks++, null === r ? e.pendingRootTasks++ : r.pendingTasks++;
    var l = {
     node: t,
     ping: function () {
      var t = e.pingedTasks;
      t.push(l), 1 === t.length && Cr(e);
     },
     blockedBoundary: r,
     blockedSegment: n,
     abortSet: a,
     legacyContext: i,
     context: s,
     treeContext: o,
    };
    return a.add(l), l;
   }
   function ur(e, t, r, n, a, i) {
    return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: n, boundary: r, lastPushedText: a, textEmbedded: i };
   }
   function pr(e, t) {
    if (null != (e = e.onError(t)) && 'string' != typeof e) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
   }
   function hr(e, t) {
    var r = e.onShellError;
    r(t), (r = e.onFatalError)(t), null !== e.destination ? ((e.status = 2), d(e.destination, t)) : ((e.status = 1), (e.fatalError = t));
   }
   function dr(e, t, r, n, a) {
    for (Ht = {}, Vt = t, Wt = 0, e = r(n, a); Ut; ) (Ut = !1), (Wt = 0), (Gt += 1), (zt = null), (e = r(n, a));
    return Kt(), e;
   }
   function fr(e, t, r, n) {
    var i = r.render(),
     s = n.childContextTypes;
    if (null != s) {
     var o = t.legacyContext;
     if ('function' != typeof r.getChildContext) n = o;
     else {
      for (var l in (r = r.getChildContext())) if (!(l in s)) throw Error(a(108, wt(n) || 'Unknown', l));
      n = nt({}, o, r);
     }
     (t.legacyContext = n), vr(e, t, i), (t.legacyContext = o);
    } else vr(e, t, i);
   }
   function mr(e, t) {
    if (e && e.defaultProps) {
     for (var r in ((t = nt({}, t)), (e = e.defaultProps))) void 0 === t[r] && (t[r] = e[r]);
     return t;
    }
    return t;
   }
   function gr(e, t, r, n, i) {
    if ('function' == typeof r)
     if (r.prototype && r.prototype.isReactComponent) {
      i = _t(r, t.legacyContext);
      var s = r.contextType;
      Ft((s = new r(n, 'object' == typeof s && null !== s ? s._currentValue : i)), r, n, i), fr(e, t, s, r);
     } else {
      i = dr(e, t, r, n, (s = _t(r, t.legacyContext)));
      var o = 0 !== Wt;
      if ('object' == typeof i && null !== i && 'function' == typeof i.render && void 0 === i.$$typeof) Ft(i, r, n, s), fr(e, t, i, r);
      else if (o) {
       (n = t.treeContext), (t.treeContext = Nt(n, 1, 0));
       try {
        vr(e, t, i);
       } finally {
        t.treeContext = n;
       }
      } else vr(e, t, i);
     }
    else {
     if ('string' != typeof r) {
      switch (r) {
       case yt:
       case vt:
       case ot:
       case lt:
       case st:
       case dt:
        return void vr(e, t, n.children);
       case gt:
        throw Error(a(343));
       case ht:
        e: {
         (r = t.blockedBoundary), (i = t.blockedSegment), (s = n.fallback), (n = n.children);
         var l = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: (o = new Set()), errorDigest: null },
          c = ur(0, i.chunks.length, l, i.formatContext, !1, !1);
         i.children.push(c), (i.lastPushedText = !1);
         var u = ur(0, 0, null, i.formatContext, !1, !1);
         (u.parentFlushed = !0), (t.blockedBoundary = l), (t.blockedSegment = u);
         try {
          if ((br(e, t, n), u.lastPushedText && u.textEmbedded && u.chunks.push(B), (u.status = 1), kr(l, u), 0 === l.pendingTasks)) break e;
         } catch (h) {
          (u.status = 4), (l.forceClientRender = !0), (l.errorDigest = pr(e, h));
         } finally {
          (t.blockedBoundary = r), (t.blockedSegment = i);
         }
         (t = cr(e, s, r, c, o, t.legacyContext, t.context, t.treeContext)), e.pingedTasks.push(t);
        }
        return;
      }
      if ('object' == typeof r && null !== r)
       switch (r.$$typeof) {
        case pt:
         if (((n = dr(e, t, r.render, n, i)), 0 !== Wt)) {
          (r = t.treeContext), (t.treeContext = Nt(r, 1, 0));
          try {
           vr(e, t, n);
          } finally {
           t.treeContext = r;
          }
         } else vr(e, t, n);
         return;
        case ft:
         return void gr(e, t, (r = r.type), (n = mr(r, n)), i);
        case ct:
         if (((i = n.children), (r = r._context), (n = n.value), (s = r._currentValue), (r._currentValue = n), (Ct = n = { parent: (o = Ct), depth: null === o ? 0 : o.depth + 1, context: r, parentValue: s, value: n }), (t.context = n), vr(e, t, i), null === (e = Ct))) throw Error(a(403));
         return (n = e.parentValue), (e.context._currentValue = n === bt ? e.context._defaultValue : n), (e = Ct = e.parent), void (t.context = e);
        case ut:
         return void vr(e, t, (n = (n = n.children)(r._currentValue)));
        case mt:
         return void gr(e, t, (r = (i = r._init)(r._payload)), (n = mr(r, n)), void 0);
       }
      throw Error(a(130, null == r ? r : typeof r, ''));
     }
     switch (
      ((s = se((i = t.blockedSegment).chunks, r, n, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = (function (e, t, r) {
       switch (t) {
        case 'select':
         return A(1, null != r.value ? r.value : r.defaultValue);
        case 'svg':
         return A(2, null);
        case 'math':
         return A(3, null);
        case 'foreignObject':
         return A(1, null);
        case 'table':
         return A(4, null);
        case 'thead':
        case 'tbody':
        case 'tfoot':
         return A(5, null);
        case 'colgroup':
         return A(7, null);
        case 'tr':
         return A(6, null);
       }
       return 4 <= e.insertionMode || 0 === e.insertionMode ? A(1, null) : e;
      })(o, r, n)),
      br(e, t, s),
      (i.formatContext = o),
      r)
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
       i.chunks.push(oe, p(r), le);
     }
     i.lastPushedText = !1;
    }
   }
   function vr(e, t, r) {
    if (((t.node = r), 'object' == typeof r && null !== r)) {
     switch (r.$$typeof) {
      case at:
       return void gr(e, t, r.type, r.props, r.ref);
      case it:
       throw Error(a(257));
      case mt:
       var n = r._init;
       return void vr(e, t, (r = n(r._payload)));
     }
     if (q(r)) return void yr(e, t, r);
     if ((null === r || 'object' != typeof r ? (n = null) : (n = 'function' == typeof (n = (St && r[St]) || r['@@iterator']) ? n : null), n && (n = n.call(r)))) {
      if (!(r = n.next()).done) {
       var i = [];
       do {
        i.push(r.value), (r = n.next());
       } while (!r.done);
       yr(e, t, i);
      }
      return;
     }
     throw ((e = Object.prototype.toString.call(r)), Error(a(31, '[object Object]' === e ? 'object with keys {' + Object.keys(r).join(', ') + '}' : e)));
    }
    'string' == typeof r ? ((n = t.blockedSegment).lastPushedText = H(t.blockedSegment.chunks, r, e.responseState, n.lastPushedText)) : 'number' == typeof r && ((n = t.blockedSegment).lastPushedText = H(t.blockedSegment.chunks, '' + r, e.responseState, n.lastPushedText));
   }
   function yr(e, t, r) {
    for (var n = r.length, a = 0; a < n; a++) {
     var i = t.treeContext;
     t.treeContext = Nt(i, n, a);
     try {
      br(e, t, r[a]);
     } finally {
      t.treeContext = i;
     }
    }
   }
   function br(e, t, r) {
    var n = t.blockedSegment.formatContext,
     a = t.legacyContext,
     i = t.context;
    try {
     return vr(e, t, r);
    } catch (l) {
     if ((Kt(), 'object' != typeof l || null === l || 'function' != typeof l.then)) throw ((t.blockedSegment.formatContext = n), (t.legacyContext = a), (t.context = i), Rt(i), l);
     r = l;
     var s = t.blockedSegment,
      o = ur(0, s.chunks.length, null, s.formatContext, s.lastPushedText, !0);
     s.children.push(o), (s.lastPushedText = !1), (e = cr(e, t.node, t.blockedBoundary, o, t.abortSet, t.legacyContext, t.context, t.treeContext).ping), r.then(e, e), (t.blockedSegment.formatContext = n), (t.legacyContext = a), (t.context = i), Rt(i);
    }
   }
   function Sr(e) {
    var t = e.blockedBoundary;
    ((e = e.blockedSegment).status = 3), _r(this, t, e);
   }
   function wr(e, t, r) {
    var n = e.blockedBoundary;
    (e.blockedSegment.status = 3),
     null === n
      ? (t.allPendingTasks--, 2 !== t.status && ((t.status = 2), null !== t.destination && t.destination.close()))
      : (n.pendingTasks--,
        n.forceClientRender || ((n.forceClientRender = !0), (e = void 0 === r ? Error(a(432)) : r), (n.errorDigest = t.onError(e)), n.parentFlushed && t.clientRenderedBoundaries.push(n)),
        n.fallbackAbortableTasks.forEach(function (e) {
         return wr(e, t, r);
        }),
        n.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        0 === t.allPendingTasks && (n = t.onAllReady)());
   }
   function kr(e, t) {
    if (0 === t.chunks.length && 1 === t.children.length && null === t.children[0].boundary) {
     var r = t.children[0];
     (r.id = t.id), (r.parentFlushed = !0), 1 === r.status && kr(e, r);
    } else e.completedSegments.push(t);
   }
   function _r(e, t, r) {
    if (null === t) {
     if (r.parentFlushed) {
      if (null !== e.completedRootSegment) throw Error(a(389));
      e.completedRootSegment = r;
     }
     e.pendingRootTasks--, 0 === e.pendingRootTasks && ((e.onShellError = lr), (t = e.onShellReady)());
    } else t.pendingTasks--, t.forceClientRender || (0 === t.pendingTasks ? (r.parentFlushed && 1 === r.status && kr(t, r), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Sr, e), t.fallbackAbortableTasks.clear()) : r.parentFlushed && 1 === r.status && (kr(t, r), 1 === t.completedSegments.length && t.parentFlushed && e.partialBoundaries.push(t)));
    e.allPendingTasks--, 0 === e.allPendingTasks && (e = e.onAllReady)();
   }
   function Cr(e) {
    if (2 !== e.status) {
     var t = Ct,
      r = sr.current;
     sr.current = ar;
     var n = ir;
     ir = e.responseState;
     try {
      var a,
       i = e.pingedTasks;
      for (a = 0; a < i.length; a++) {
       var s = i[a],
        o = e,
        l = s.blockedSegment;
       if (0 === l.status) {
        Rt(s.context);
        try {
         vr(o, s, s.node), l.lastPushedText && l.textEmbedded && l.chunks.push(B), s.abortSet.delete(s), (l.status = 1), _r(o, s.blockedBoundary, l);
        } catch (d) {
         if ((Kt(), 'object' == typeof d && null !== d && 'function' == typeof d.then)) {
          var c = s.ping;
          d.then(c, c);
         } else {
          s.abortSet.delete(s), (l.status = 4);
          var u = s.blockedBoundary,
           p = d,
           h = pr(o, p);
          if ((null === u ? hr(o, p) : (u.pendingTasks--, u.forceClientRender || ((u.forceClientRender = !0), (u.errorDigest = h), u.parentFlushed && o.clientRenderedBoundaries.push(u))), o.allPendingTasks--, 0 === o.allPendingTasks)) (0, o.onAllReady)();
         }
        }
       }
      }
      i.splice(0, a), null !== e.destination && Rr(e, e.destination);
     } catch (d) {
      pr(e, d), hr(e, d);
     } finally {
      (ir = n), (sr.current = r), r === ar && Rt(t);
     }
    }
   }
   function xr(e, t, r) {
    switch (((r.parentFlushed = !0), r.status)) {
     case 0:
      var n = (r.id = e.nextSegmentId++);
      return (r.lastPushedText = !1), (r.textEmbedded = !1), (e = e.responseState), o(t, ce), o(t, e.placeholderPrefix), o(t, (e = p(n.toString(16)))), l(t, ue);
     case 1:
      r.status = 2;
      var i = !0;
      n = r.chunks;
      var s = 0;
      r = r.children;
      for (var c = 0; c < r.length; c++) {
       for (i = r[c]; s < i.index; s++) o(t, n[s]);
       i = Tr(e, t, i);
      }
      for (; s < n.length - 1; s++) o(t, n[s]);
      return s < n.length && (i = l(t, n[s])), i;
     default:
      throw Error(a(390));
    }
   }
   function Tr(e, t, r) {
    var n = r.boundary;
    if (null === n) return xr(e, t, r);
    if (((n.parentFlushed = !0), n.forceClientRender)) (n = n.errorDigest), l(t, fe), o(t, ge), n && (o(t, ye), o(t, p(T(n))), o(t, ve)), l(t, be), xr(e, t, r);
    else if (0 < n.pendingTasks) {
     (n.rootSegmentID = e.nextSegmentId++), 0 < n.completedSegments.length && e.partialBoundaries.push(n);
     var i = e.responseState,
      s = i.nextSuspenseID++;
     (i = h(i.boundaryPrefix + s.toString(16))), (n = n.id = i), Se(t, e.responseState, n), xr(e, t, r);
    } else if (n.byteSize > e.progressiveChunkSize) (n.rootSegmentID = e.nextSegmentId++), e.completedBoundaries.push(n), Se(t, e.responseState, n.id), xr(e, t, r);
    else {
     if ((l(t, pe), 1 !== (r = n.completedSegments).length)) throw Error(a(391));
     Tr(e, t, r[0]);
    }
    return l(t, me);
   }
   function Er(e, t, r) {
    return (
     (function (e, t, r, n) {
      switch (r.insertionMode) {
       case 0:
       case 1:
        return o(e, we), o(e, t.segmentPrefix), o(e, p(n.toString(16))), l(e, ke);
       case 2:
        return o(e, Ce), o(e, t.segmentPrefix), o(e, p(n.toString(16))), l(e, xe);
       case 3:
        return o(e, Ee), o(e, t.segmentPrefix), o(e, p(n.toString(16))), l(e, Le);
       case 4:
        return o(e, Re), o(e, t.segmentPrefix), o(e, p(n.toString(16))), l(e, Ie);
       case 5:
        return o(e, Pe), o(e, t.segmentPrefix), o(e, p(n.toString(16))), l(e, Ne);
       case 6:
        return o(e, Me), o(e, t.segmentPrefix), o(e, p(n.toString(16))), l(e, Ae);
       case 7:
        return o(e, He), o(e, t.segmentPrefix), o(e, p(n.toString(16))), l(e, Ve);
       default:
        throw Error(a(397));
      }
     })(t, e.responseState, r.formatContext, r.id),
     Tr(e, t, r),
     (function (e, t) {
      switch (t.insertionMode) {
       case 0:
       case 1:
        return l(e, _e);
       case 2:
        return l(e, Te);
       case 3:
        return l(e, qe);
       case 4:
        return l(e, Fe);
       case 5:
        return l(e, De);
       case 6:
        return l(e, Be);
       case 7:
        return l(e, Oe);
       default:
        throw Error(a(397));
      }
     })(t, r.formatContext)
    );
   }
   function Lr(e, t, r) {
    for (var n = r.completedSegments, i = 0; i < n.length; i++) qr(e, t, r, n[i]);
    if (((n.length = 0), (e = e.responseState), (n = r.id), (r = r.rootSegmentID), o(t, e.startInlineScript), e.sentCompleteBoundaryFunction ? o(t, Ge) : ((e.sentCompleteBoundaryFunction = !0), o(t, je)), null === n)) throw Error(a(395));
    return (r = p(r.toString(16))), o(t, n), o(t, Xe), o(t, e.segmentPrefix), o(t, r), l(t, Ye);
   }
   function qr(e, t, r, n) {
    if (2 === n.status) return !0;
    var i = n.id;
    if (-1 === i) {
     if (-1 === (n.id = r.rootSegmentID)) throw Error(a(392));
     return Er(e, t, n);
    }
    return Er(e, t, n), o(t, (e = e.responseState).startInlineScript), e.sentCompleteSegmentFunction ? o(t, $e) : ((e.sentCompleteSegmentFunction = !0), o(t, ze)), o(t, e.segmentPrefix), o(t, (i = p(i.toString(16)))), o(t, Ue), o(t, e.placeholderPrefix), o(t, i), l(t, We);
   }
   function Rr(e, t) {
    (i = new Uint8Array(512)), (s = 0);
    try {
     var r = e.completedRootSegment;
     if (null !== r && 0 === e.pendingRootTasks) {
      Tr(e, t, r), (e.completedRootSegment = null);
      var n = e.responseState.bootstrapChunks;
      for (r = 0; r < n.length - 1; r++) o(t, n[r]);
      r < n.length && l(t, n[r]);
     }
     var u,
      h = e.clientRenderedBoundaries;
     for (u = 0; u < h.length; u++) {
      var d = h[u];
      n = t;
      var f = e.responseState,
       m = d.id,
       g = d.errorDigest,
       v = d.errorMessage,
       y = d.errorComponentStack;
      if ((o(n, f.startInlineScript), f.sentClientRenderFunction ? o(n, Ke) : ((f.sentClientRenderFunction = !0), o(n, Je)), null === m)) throw Error(a(395));
      if ((o(n, m), o(n, Ze), (g || v || y) && (o(n, et), o(n, p(rt(g || '')))), (v || y) && (o(n, et), o(n, p(rt(v || '')))), y && (o(n, et), o(n, p(rt(y)))), !l(n, Qe))) return (e.destination = null), u++, void h.splice(0, u);
     }
     h.splice(0, u);
     var b = e.completedBoundaries;
     for (u = 0; u < b.length; u++) if (!Lr(e, t, b[u])) return (e.destination = null), u++, void b.splice(0, u);
     b.splice(0, u), c(t), (i = new Uint8Array(512)), (s = 0);
     var S = e.partialBoundaries;
     for (u = 0; u < S.length; u++) {
      var w = S[u];
      e: {
       (h = e), (d = t);
       var k = w.completedSegments;
       for (f = 0; f < k.length; f++)
        if (!qr(h, d, w, k[f])) {
         f++, k.splice(0, f);
         var _ = !1;
         break e;
        }
       k.splice(0, f), (_ = !0);
      }
      if (!_) return (e.destination = null), u++, void S.splice(0, u);
     }
     S.splice(0, u);
     var C = e.completedBoundaries;
     for (u = 0; u < C.length; u++) if (!Lr(e, t, C[u])) return (e.destination = null), u++, void C.splice(0, u);
     C.splice(0, u);
    } finally {
     c(t), 0 === e.allPendingTasks && 0 === e.pingedTasks.length && 0 === e.clientRenderedBoundaries.length && 0 === e.completedBoundaries.length && t.close();
    }
   }
   function Ir(e, t) {
    try {
     var r = e.abortableTasks;
     r.forEach(function (r) {
      return wr(r, e, t);
     }),
      r.clear(),
      null !== e.destination && Rr(e, e.destination);
    } catch (n) {
     pr(e, n), hr(e, n);
    }
   }
   (t.renderToReadableStream = function (e, t) {
    return new Promise(function (r, n) {
     var a,
      i,
      s = new Promise(function (e, t) {
       (i = e), (a = t);
      }),
      o = (function (e, t, r, n, a, i, s, o, l) {
       var c = [],
        u = new Set();
       return ((r = ur((t = { destination: null, responseState: t, progressiveChunkSize: void 0 === n ? 12800 : n, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: u, pingedTasks: c, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: void 0 === a ? or : a, onAllReady: void 0 === i ? lr : i, onShellReady: void 0 === s ? lr : s, onShellError: void 0 === o ? lr : o, onFatalError: void 0 === l ? lr : l }), 0, null, r, !1, !1)).parentFlushed = !0), (e = cr(t, e, null, r, u, kt, null, Pt)), c.push(e), t;
      })(
       e,
       (function (e, t, r, n, a) {
        (e = void 0 === e ? '' : e), (t = void 0 === t ? R : h('<script nonce="' + T(t) + '">'));
        var i = [];
        if ((void 0 !== r && i.push(t, p(('' + r).replace(D, M)), I), void 0 !== n)) for (r = 0; r < n.length; r++) i.push(F, p(T(n[r])), N);
        if (void 0 !== a) for (n = 0; n < a.length; n++) i.push(P, p(T(a[n])), N);
        return { bootstrapChunks: i, startInlineScript: t, placeholderPrefix: h(e + 'P:'), segmentPrefix: h(e + 'S:'), boundaryPrefix: e + 'B:', idPrefix: e, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
       })(t ? t.identifierPrefix : void 0, t ? t.nonce : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0),
       (function (e) {
        return A('http://www.w3.org/2000/svg' === e ? 2 : 'http://www.w3.org/1998/Math/MathML' === e ? 3 : 0, null);
       })(t ? t.namespaceURI : void 0),
       t ? t.progressiveChunkSize : void 0,
       t ? t.onError : void 0,
       i,
       function () {
        var e = new ReadableStream(
         {
          type: 'bytes',
          pull: function (e) {
           if (1 === o.status) (o.status = 2), d(e, o.fatalError);
           else if (2 !== o.status && null === o.destination) {
            o.destination = e;
            try {
             Rr(o, e);
            } catch (t) {
             pr(o, t), hr(o, t);
            }
           }
          },
          cancel: function () {
           Ir(o);
          },
         },
         { highWaterMark: 0 },
        );
        (e.allReady = s), r(e);
       },
       function (e) {
        s.catch(function () {}), n(e);
       },
       a,
      );
     if (t && t.signal) {
      var l = t.signal,
       c = function () {
        Ir(o, l.reason), l.removeEventListener('abort', c);
       };
      l.addEventListener('abort', c);
     }
     Cr(o);
    });
   }),
    (t.version = '18.3.1');
  },
  31186: (e, t, r) => {
   var n, a;
   (n = r(67495)), (a = r(29521)), n.version, n.renderToString, (t.qV = n.renderToStaticMarkup), n.renderToNodeStream, n.renderToStaticNodeStream, a.renderToReadableStream;
  },
  39644: (e, t, r) => {
   r.d(t, { Ay: () => ya });
   var n = Object.defineProperty,
    a = (e) => {
     throw TypeError(e);
    },
    i = (e, t) => {
     for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
    },
    s = (e, t, r) => ((e, t, r) => (t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)))(e, 'symbol' != typeof t ? t + '' : t, r),
    o = (e, t, r) => t.has(e) || a('Cannot ' + r),
    l = (e, t, r) => (o(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
    c = (e, t, r) => (t.has(e) ? a('Cannot add the same private member more than once') : t instanceof WeakSet ? t.add(e) : t.set(e, r)),
    u = {};
   i(u, { languages: () => Er, options: () => Rr, parsers: () => Ir, printers: () => va });
   var p = (e, t, r, n) => {
     if (!e || null != t) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
    },
    h = 'string',
    d = 'array',
    f = 'cursor',
    m = 'indent',
    g = 'align',
    v = 'trim',
    y = 'group',
    b = 'fill',
    S = 'if-break',
    w = 'indent-if-break',
    k = 'line-suffix',
    _ = 'line-suffix-boundary',
    C = 'line',
    x = 'label',
    T = 'break-parent',
    E = new Set([f, m, g, v, y, b, S, w, k, _, C, x, T]),
    L = (e, t, r) => {
     if (!e || null != t) return Array.isArray(t) || 'string' == typeof t ? t[r < 0 ? t.length + r : r] : t.at(r);
    };
   var q = function (e) {
    if ('string' == typeof e) return h;
    if (Array.isArray(e)) return d;
    if (!e) return;
    let { type: t } = e;
    return E.has(t) ? t : void 0;
   };
   function R(e) {
    let t = null === e ? 'null' : typeof e;
    if ('string' !== t && 'object' !== t) return `Unexpected doc '${t}', \nExpected it to be 'string' or 'object'.`;
    if (q(e)) throw new Error('doc is valid.');
    let r = Object.prototype.toString.call(e);
    if ('[object Object]' !== r) return `Unexpected doc '${r}'.`;
    let n = ((e) => new Intl.ListFormat('en-US', { type: 'disjunction' }).format(e))([...E].map((e) => `'${e}'`));
    return `Unexpected doc.type '${e.type}'.\nExpected it to be ${n}.`;
   }
   var I = class extends Error {
    name = 'InvalidDocError';
    constructor(e) {
     super(R(e)), (this.doc = e);
    }
   };
   function F(e, t) {
    if ('string' == typeof e) return t(e);
    let r = new Map();
    return n(e);
    function n(e) {
     if (r.has(e)) return r.get(e);
     let a = (function (e) {
      switch (q(e)) {
       case d:
        return t(e.map(n));
       case b:
        return t({ ...e, parts: e.parts.map(n) });
       case S:
        return t({ ...e, breakContents: n(e.breakContents), flatContents: n(e.flatContents) });
       case y: {
        let { expandedStates: r, contents: a } = e;
        return r ? ((r = r.map(n)), (a = r[0])) : (a = n(a)), t({ ...e, contents: a, expandedStates: r });
       }
       case g:
       case m:
       case w:
       case x:
       case k:
        return t({ ...e, contents: n(e.contents) });
       case h:
       case f:
       case v:
       case _:
       case C:
       case T:
        return t(e);
       default:
        throw new I(e);
      }
     })(e);
     return r.set(e, a), a;
    }
   }
   function P(e, t = G) {
    return F(e, (e) => ('string' == typeof e ? X(t, e.split('\n')) : e));
   }
   var N = () => {},
    D = N,
    M = N,
    A = N;
   function B(e) {
    return D(e), { type: m, contents: e };
   }
   function H(e, t) {
    return D(t), { type: g, contents: t, n: e };
   }
   function V(e, t = {}) {
    return D(e), M(t.expandedStates, !0), { type: y, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
   }
   function O(e) {
    return A(e), { type: b, parts: e };
   }
   function z(e, t = '', r = {}) {
    return D(e), '' !== t && D(t), { type: S, breakContents: e, flatContents: t, groupId: r.groupId };
   }
   var $ = { type: T },
    U = { type: C },
    W = { type: C, soft: !0 },
    j = [{ type: C, hard: !0 }, $],
    G = [{ type: C, hard: !0, literal: !0 }, $];
   function X(e, t) {
    D(e), M(t);
    let r = [];
    for (let n = 0; n < t.length; n++) 0 !== n && r.push(e), r.push(t[n]);
    return r;
   }
   var Y = "'";
   var J = function (e, t) {
    let r = !0 === t || t === Y ? Y : '"',
     n = r === Y ? '"' : Y,
     a = 0,
     i = 0;
    for (let s of e) s === r ? a++ : s === n && i++;
    return a > i ? n : r;
   };
   var K;
   K = new WeakMap();
   var Z = class {
     constructor(e) {
      c(this, K),
       ((e, t, r, n) => {
        o(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r);
       })(this, K, new Set(e));
     }
     getLeadingWhitespaceCount(e) {
      let t = l(this, K),
       r = 0;
      for (let n = 0; n < e.length && t.has(e.charAt(n)); n++) r++;
      return r;
     }
     getTrailingWhitespaceCount(e) {
      let t = l(this, K),
       r = 0;
      for (let n = e.length - 1; n >= 0 && t.has(e.charAt(n)); n--) r++;
      return r;
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
      return l(this, K).has(e.charAt(0));
     }
     hasTrailingWhitespace(e) {
      return l(this, K).has(L(!1, e, -1));
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
      let r = `[${(function (e) {
        if ('string' != typeof e) throw new TypeError('Expected a string');
        return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
       })([...l(this, K)].join(''))}]+`,
       n = new RegExp(t ? `(${r})` : r, 'u');
      return e.split(n);
     }
     hasWhitespaceCharacter(e) {
      let t = l(this, K);
      return Array.prototype.some.call(e, (e) => t.has(e));
     }
     hasNonWhitespaceCharacter(e) {
      let t = l(this, K);
      return Array.prototype.some.call(e, (e) => !t.has(e));
     }
     isWhitespaceOnly(e) {
      let t = l(this, K);
      return Array.prototype.every.call(e, (e) => t.has(e));
     }
    },
    Q = new Z(['\t', '\n', '\f', '\r', ' ']),
    ee = class extends Error {
     name = 'UnexpectedNodeError';
     constructor(e, t, r = 'type') {
      super(`Unexpected ${t} node ${r}: ${JSON.stringify(e[r])}.`), (this.node = e);
     }
    };
   var te = function (e) {
     return 'front-matter' === (null == e ? void 0 : e.type);
    },
    re = new Set(['sourceSpan', 'startSourceSpan', 'endSourceSpan', 'nameSpan', 'valueSpan', 'keySpan', 'tagDefinition', 'tokens', 'valueTokens', 'switchValueSourceSpan', 'expSourceSpan', 'valueSourceSpan']),
    ne = new Set(['if', 'else if', 'for', 'switch', 'case']);
   function ae(e, t) {
    var r;
    if ('text' === e.type || 'comment' === e.type || te(e) || 'yaml' === e.type || 'toml' === e.type) return null;
    if (('attribute' === e.type && delete t.value, 'docType' === e.type && delete t.value, 'angularControlFlowBlock' === e.type && null != (r = e.parameters) && r.children)) for (let n of t.parameters.children) ne.has(e.name) ? delete n.expression : (n.expression = n.expression.trim());
    'angularIcuExpression' === e.type && (t.switchValue = e.switchValue.trim()), 'angularLetDeclarationInitializer' === e.type && delete t.value;
   }
   ae.ignoredProperties = re;
   var ie = ae;
   var se = async function (e, t) {
    if ('yaml' === e.language) {
     let r = e.value.trim(),
      n = r ? await t(r, { parser: 'yaml' }) : '';
     return (function (e) {
      return H({ type: 'root' }, e);
     })([e.startDelimiter, e.explicitLanguage, j, n, n ? j : '', e.endDelimiter]);
    }
   };
   function oe(e, t = !0) {
    return [B([W, e]), t ? W : ''];
   }
   function le(e, t) {
    let r = 'NGRoot' === e.type ? ('NGMicrosyntax' === e.node.type && 1 === e.node.body.length && 'NGMicrosyntaxExpression' === e.node.body[0].type ? e.node.body[0].expression : e.node) : 'JsExpressionRoot' === e.type ? e.node : e;
    return r && ('ObjectExpression' === r.type || 'ArrayExpression' === r.type || (('__vue_expression' === t.parser || '__vue_ts_expression' === t.parser) && ('TemplateLiteral' === r.type || 'StringLiteral' === r.type)));
   }
   async function ce(e, t, r, n) {
    r = { __isInHtmlAttribute: !0, __embeddedInHtml: !0, ...r };
    let a = !0;
    n &&
     (r.__onHtmlBindingRoot = (e, t) => {
      a = n(e, t);
     });
    let i = await t(e, r, t);
    return a ? V(i) : oe(i);
   }
   var ue = function (e, t, r, n) {
    let { node: a } = r,
     i = n.originalText.slice(a.sourceSpan.start.offset, a.sourceSpan.end.offset);
    return /^\s*$/u.test(i) ? '' : ce(i, e, { parser: '__ng_directive', __isInHtmlAttribute: !1 }, le);
   };
   function pe(e, t) {
    if (!t) return;
    let r = ((e) => String(e).split(/[/\\]/u).pop())(t).toLowerCase();
    return e.find(({ filenames: e }) => (null == e ? void 0 : e.some((e) => e.toLowerCase() === r))) ?? e.find(({ extensions: e }) => (null == e ? void 0 : e.some((e) => r.endsWith(e))));
   }
   var he = function (e, t) {
     let r = e.plugins.flatMap((e) => e.languages ?? []),
      n =
       (function (e, t) {
        if (t) return e.find(({ name: e }) => e.toLowerCase() === t) ?? e.find(({ aliases: e }) => (null == e ? void 0 : e.includes(t))) ?? e.find(({ extensions: e }) => (null == e ? void 0 : e.includes(`.${t}`)));
       })(r, t.language) ??
       pe(r, t.physicalFile) ??
       pe(r, t.file) ??
       void t.physicalFile;
     return null == n ? void 0 : n.parsers[0];
    },
    de = { area: 'none', base: 'none', basefont: 'none', datalist: 'none', head: 'none', link: 'none', meta: 'none', noembed: 'none', noframes: 'none', param: 'block', rp: 'none', script: 'block', style: 'none', template: 'inline', title: 'none', html: 'block', body: 'block', address: 'block', blockquote: 'block', center: 'block', dialog: 'block', div: 'block', figure: 'block', figcaption: 'block', footer: 'block', form: 'block', header: 'block', hr: 'block', legend: 'block', listing: 'block', main: 'block', p: 'block', plaintext: 'block', pre: 'block', search: 'block', xmp: 'block', slot: 'contents', ruby: 'ruby', rt: 'ruby-text', article: 'block', aside: 'block', h1: 'block', h2: 'block', h3: 'block', h4: 'block', h5: 'block', h6: 'block', hgroup: 'block', nav: 'block', section: 'block', dir: 'block', dd: 'block', dl: 'block', dt: 'block', menu: 'block', ol: 'block', ul: 'block', li: 'list-item', table: 'table', caption: 'table-caption', colgroup: 'table-column-group', col: 'table-column', thead: 'table-header-group', tbody: 'table-row-group', tfoot: 'table-footer-group', tr: 'table-row', td: 'table-cell', th: 'table-cell', input: 'inline-block', button: 'inline-block', fieldset: 'block', details: 'block', summary: 'block', marquee: 'inline-block', source: 'block', track: 'block', meter: 'inline-block', progress: 'inline-block', object: 'inline-block', video: 'inline-block', audio: 'inline-block', select: 'inline-block', option: 'block', optgroup: 'block' },
    fe = { listing: 'pre', plaintext: 'pre', pre: 'pre', xmp: 'pre', nobr: 'nowrap', table: 'initial', textarea: 'pre-wrap' };
   var me = function (e) {
     return 'element' === e.type && !e.hasExplicitNamespace && !['html', 'svg'].includes(e.namespace);
    },
    ge = (e) => ((e) => p(!1, e, /^[\t\f\r ]*\n/gu, ''))(Q.trimEnd(e)),
    ve = (e) => {
     let t = e,
      r = Q.getLeadingWhitespace(t);
     r && (t = t.slice(r.length));
     let n = Q.getTrailingWhitespace(t);
     return n && (t = t.slice(0, -n.length)), { leadingWhitespace: r, trailingWhitespace: n, text: t };
    };
   function ye(e, t) {
    return !!(('ieConditionalComment' === e.type && e.lastChild && !e.lastChild.isSelfClosing && !e.lastChild.endSourceSpan) || ('ieConditionalComment' === e.type && !e.complete) || (Be(e) && e.children.some((e) => 'text' !== e.type && 'interpolation' !== e.type)) || (je(e, t) && !we(e) && 'interpolation' !== e.type));
   }
   function be(e) {
    return (
     !('attribute' === e.type || !e.parent || !e.prev) &&
     (function (e) {
      return 'comment' === e.type && 'prettier-ignore' === e.value.trim();
     })(e.prev)
    );
   }
   function Se(e) {
    return 'text' === e.type || 'comment' === e.type;
   }
   function we(e) {
    return 'element' === e.type && ('script' === e.fullName || 'style' === e.fullName || 'svg:style' === e.fullName || 'svg:script' === e.fullName || (me(e) && ('script' === e.name || 'style' === e.name)));
   }
   function ke(e) {
    return He(e).startsWith('pre');
   }
   function _e(e, t) {
    var r, n;
    let a = !(
     te(e) ||
     'angularControlFlowBlock' === e.type ||
     ((('text' !== e.type && 'interpolation' !== e.type) || !e.prev || ('text' !== e.prev.type && 'interpolation' !== e.prev.type)) &&
      (!e.parent ||
       'none' === e.parent.cssDisplay ||
       (!Be(e.parent) &&
        ((!e.prev &&
         ('root' === e.parent.type ||
          (Be(e) && e.parent) ||
          we(e.parent) ||
          Ue(e.parent, t) ||
          !(function (e) {
           return !Ae(e) && 'inline-block' !== e;
          })(e.parent.cssDisplay))) ||
         (e.prev &&
          !(function (e) {
           return !Ae(e);
          })(e.prev.cssDisplay))))))
    );
    return a && !e.prev && null != (n = null == (r = e.parent) ? void 0 : r.tagDefinition) && n.ignoreFirstLf ? 'interpolation' === e.type : a;
   }
   function Ce(e, t) {
    return (
     !te(e) &&
     'angularControlFlowBlock' !== e.type &&
     (!(('text' !== e.type && 'interpolation' !== e.type) || !e.next || ('text' !== e.next.type && 'interpolation' !== e.next.type)) ||
      (!(!e.parent || 'none' === e.parent.cssDisplay) &&
       (!!Be(e.parent) ||
        !(
         (!e.next &&
          ('root' === e.parent.type ||
           (Be(e) && e.parent) ||
           we(e.parent) ||
           Ue(e.parent, t) ||
           !(function (e) {
            return !Ae(e) && 'inline-block' !== e;
           })(e.parent.cssDisplay))) ||
         (e.next &&
          !(function (e) {
           return !Ae(e);
          })(e.next.cssDisplay))
        ))))
    );
   }
   function xe(e) {
    return (
     (function (e) {
      return !Ae(e) && 'inline-block' !== e;
     })(e.cssDisplay) && !we(e)
    );
   }
   function Te(e) {
    return te(e) || (e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line);
   }
   function Ee(e) {
    return (
     Le(e) ||
     ('element' === e.type &&
      e.children.length > 0 &&
      (['body', 'script', 'style'].includes(e.name) ||
       e.children.some((e) =>
        (function (e) {
         var t;
         return null == (t = e.children) ? void 0 : t.some((e) => 'text' !== e.type);
        })(e),
       ))) ||
     (e.firstChild && e.firstChild === e.lastChild && 'text' !== e.firstChild.type && Ie(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || Fe(e.lastChild)))
    );
   }
   function Le(e) {
    return 'element' === e.type && e.children.length > 0 && (['html', 'head', 'ul', 'ol', 'select'].includes(e.name) || (e.cssDisplay.startsWith('table') && 'table-cell' !== e.cssDisplay));
   }
   function qe(e) {
    return (
     Pe(e) ||
     (e.prev &&
      (function (e) {
       return Pe(e) || ('element' === e.type && 'br' === e.fullName) || Re(e);
      })(e.prev)) ||
     Re(e)
    );
   }
   function Re(e) {
    return Ie(e) && Fe(e);
   }
   function Ie(e) {
    return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : 'root' === e.parent.type || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
   }
   function Fe(e) {
    return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : 'root' === e.parent.type || (e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line));
   }
   function Pe(e) {
    switch (e.type) {
     case 'ieConditionalComment':
     case 'comment':
     case 'directive':
      return !0;
     case 'element':
      return ['script', 'select'].includes(e.name);
    }
    return !1;
   }
   function Ne(e) {
    return e.lastChild ? Ne(e.lastChild) : e;
   }
   function De(e) {
    if (e)
     switch (e) {
      case 'module':
      case 'text/javascript':
      case 'text/babel':
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
   function Me(e, t) {
    return (
     (function (e, t) {
      let { name: r, attrMap: n } = e;
      if ('script' !== r || Object.prototype.hasOwnProperty.call(n, 'src')) return;
      let { type: a, lang: i } = e.attrMap;
      return i || a ? (he(t, { language: i }) ?? De(a)) : 'babel';
     })(e, t) ??
     (function (e, t) {
      if ('style' !== e.name) return;
      let { lang: r } = e.attrMap;
      return r ? he(t, { language: r }) : 'css';
     })(e, t) ??
     (function (e, t) {
      if (!je(e, t)) return;
      let { attrMap: r } = e;
      if (Object.prototype.hasOwnProperty.call(r, 'src')) return;
      let { type: n, lang: a } = r;
      return he(t, { language: a }) ?? De(n);
     })(e, t)
    );
   }
   function Ae(e) {
    return 'block' === e || 'list-item' === e || e.startsWith('table');
   }
   function Be(e) {
    return He(e).startsWith('pre');
   }
   function He(e) {
    return ('element' === e.type && (!e.namespace || me(e)) && fe[e.name]) || 'normal';
   }
   function Ve(
    e,
    t = (function (e) {
     let t = Number.POSITIVE_INFINITY;
     for (let r of e.split('\n')) {
      if (0 === r.length) continue;
      let e = Q.getLeadingWhitespaceCount(r);
      if (0 === e) return 0;
      r.length !== e && e < t && (t = e);
     }
     return t === Number.POSITIVE_INFINITY ? 0 : t;
    })(e),
   ) {
    return 0 === t
     ? e
     : e
        .split('\n')
        .map((e) => e.slice(t))
        .join('\n');
   }
   function Oe(e) {
    return p(!1, p(!1, e, '&apos;', "'"), '&quot;', '"');
   }
   function ze(e) {
    return Oe(e.value);
   }
   var $e = new Set(['template', 'style', 'script']);
   function Ue(e, t) {
    return We(e, t) && !$e.has(e.fullName);
   }
   function We(e, t) {
    return 'vue' === t.parser && 'element' === e.type && 'root' === e.parent.type && 'html' !== e.fullName.toLowerCase();
   }
   function je(e, t) {
    return We(e, t) && (Ue(e, t) || (e.attrMap.lang && 'html' !== e.attrMap.lang));
   }
   function Ge(e, t = e.value) {
    return e.parent.isWhitespaceSensitive ? (e.parent.isIndentationSensitive ? P(t) : P(Ve(ge(t)), j)) : X(U, Q.split(t));
   }
   function Xe(e, t) {
    return We(e, t) && 'script' === e.name;
   }
   var Ye = /\{\{(.+?)\}\}/su;
   function Je({ parser: e }) {
    return (t, r, n) => ce(ze(n.node), t, { parser: e }, le);
   }
   var Ke = Je({ parser: '__ng_action' }),
    Ze = Je({ parser: '__ng_binding' }),
    Qe = Je({ parser: '__ng_directive' });
   var et = function (e, t) {
    if ('angular' !== t.parser) return;
    let { node: r } = e,
     n = r.fullName;
    if ((n.startsWith('(') && n.endsWith(')')) || n.startsWith('on-')) return Ke;
    if ((n.startsWith('[') && n.endsWith(']')) || /^bind(?:on)?-/u.test(n) || /^ng-(?:if|show|hide|class|style)$/u.test(n)) return Ze;
    if (n.startsWith('*')) return Qe;
    let a = ze(r);
    return /^i18n(?:-.+)?$/u.test(n)
     ? () => oe(O(Ge(r, a.trim())), !a.includes('@@'))
     : Ye.test(a)
       ? (e) =>
          (async function (e, t) {
           let r = [];
           for (let [n, a] of e.split(Ye).entries())
            if (n % 2 == 0) r.push(P(a));
            else
             try {
              r.push(V(['{{', B([U, await ce(a, t, { parser: '__ng_interpolation', __isInHtmlInterpolation: !0 })]), U, '}}']));
             } catch {
              r.push('{{', P(a), '}}');
             }
           return r;
          })(a, e)
       : void 0;
   };
   var tt = function (e, t) {
    let { node: r } = e,
     n = ze(r);
    if ('class' === r.fullName && !t.parentParser && !n.includes('{{')) return () => n.trim().split(/\s+/u).join(' ');
   };
   function rt(e) {
    return '\t' === e || '\n' === e || '\f' === e || '\r' === e || ' ' === e;
   }
   var nt = /^[ \t\n\r\u000c]+/,
    at = /^[, \t\n\r\u000c]+/,
    it = /^[^ \t\n\r\u000c]+/,
    st = /[,]+$/,
    ot = /^\d+$/,
    lt = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
   var ct = function (e) {
    let t,
     r,
     n,
     a,
     i,
     s,
     o = e.length,
     l = 0;
    function c(t) {
     let r,
      n = t.exec(e.substring(l));
     if (n) return ([r] = n), (l += r.length), r;
    }
    let u = [];
    for (;;) {
     if ((c(at), l >= o)) {
      if (0 === u.length) throw new Error('Must contain one or more image candidate strings.');
      return u;
     }
     (s = l), (t = c(it)), (r = []), ',' === t.slice(-1) ? ((t = t.replace(st, '')), h()) : p();
    }
    function p() {
     for (c(nt), n = '', a = 'in descriptor'; ; ) {
      if (((i = e.charAt(l)), 'in descriptor' === a))
       if (rt(i)) n && (r.push(n), (n = ''), (a = 'after descriptor'));
       else {
        if (',' === i) return (l += 1), n && r.push(n), void h();
        if ('(' === i) (n += i), (a = 'in parens');
        else {
         if ('' === i) return n && r.push(n), void h();
         n += i;
        }
       }
      else if ('in parens' === a)
       if (')' === i) (n += i), (a = 'in descriptor');
       else {
        if ('' === i) return r.push(n), void h();
        n += i;
       }
      else if ('after descriptor' === a && !rt(i)) {
       if ('' === i) return void h();
       (a = 'in descriptor'), (l -= 1);
      }
      l += 1;
     }
    }
    function h() {
     let n,
      a,
      i,
      o,
      l,
      c,
      p,
      h,
      d,
      f = !1,
      m = {};
     for (o = 0; o < r.length; o++) (l = r[o]), (c = l[l.length - 1]), (p = l.substring(0, l.length - 1)), (h = parseInt(p, 10)), (d = parseFloat(p)), ot.test(p) && 'w' === c ? ((n || a) && (f = !0), 0 === h ? (f = !0) : (n = h)) : lt.test(p) && 'x' === c ? ((n || a || i) && (f = !0), d < 0 ? (f = !0) : (a = d)) : ot.test(p) && 'h' === c ? ((i || a) && (f = !0), 0 === h ? (f = !0) : (i = h)) : (f = !0);
     if (f) throw new Error(`Invalid srcset descriptor found in "${e}" at "${l}".`);
     (m.source = { value: t, startOffset: s }), n && (m.width = { value: n }), a && (m.density = { value: a }), i && (m.height = { value: i }), u.push(m);
    }
   };
   var ut = { width: 'w', height: 'h', density: 'x' },
    pt = Object.keys(ut);
   var ht = function (e) {
    if ('srcset' === e.node.fullName && ('img' === e.parent.fullName || 'source' === e.parent.fullName))
     return () =>
      (function (e) {
       let t = ct(e),
        r = pt.filter((e) => t.some((t) => Object.prototype.hasOwnProperty.call(t, e)));
       if (r.length > 1) throw new Error('Mixed descriptor in srcset is not supported');
       let [n] = r,
        a = ut[n],
        i = t.map((e) => e.source.value),
        s = Math.max(...i.map((e) => e.length)),
        o = t.map((e) => (e[n] ? String(e[n].value) : '')),
        l = o.map((e) => {
         let t = e.indexOf('.');
         return -1 === t ? e.length : t;
        }),
        c = Math.max(...l);
       return oe(
        X(
         [',', U],
         i.map((e, t) => {
          let r = [e],
           n = o[t];
          if (n) {
           let i = s - e.length + 1,
            o = c - l[t],
            u = ' '.repeat(i + o);
           r.push(z(u, ' '), n + a);
          }
          return r;
         }),
        ),
       );
      })(ze(e.node));
   };
   function dt(e, t) {
    let { node: r } = e,
     n = ze(e.node).trim();
    if ('style' === r.fullName && !t.parentParser && !n.includes('{{')) return async (e) => oe(await e(n, { parser: 'css', __isHTMLStyleAttribute: !0 }));
   }
   var ft = new WeakMap();
   var mt = function (e, t) {
    let { root: r } = e;
    return (
     ft.has(r) ||
      ft.set(
       r,
       r.children.some((e) => Xe(e, t) && ['ts', 'typescript'].includes(e.attrMap.lang)),
      ),
     ft.get(r)
    );
   };
   function gt(e, t, r) {
    let { node: n } = r;
    return ce(`type T<${ze(n)}> = any`, e, { parser: 'babel-ts', __isEmbeddedTypescriptGenericParameters: !0 }, le);
   }
   async function vt(e, t, r, n) {
    let a = ze(r.node),
     {
      left: i,
      operator: s,
      right: o,
     } = (function (e) {
      let t = /(.*?)\s+(in|of)\s+(.*)/su,
       r = /,([^,\]}]*)(?:,([^,\]}]*))?$/u,
       n = /^\(|\)$/gu,
       a = e.match(t);
      if (!a) return;
      let i = {};
      if (((i.for = a[3].trim()), !i.for)) return;
      let s = p(!1, a[1].trim(), n, ''),
       o = s.match(r);
      o ? ((i.alias = s.replace(r, '')), (i.iterator1 = o[1].trim()), o[2] && (i.iterator2 = o[2].trim())) : (i.alias = s);
      let l = [i.alias, i.iterator1, i.iterator2];
      if (!l.some((e, t) => !e && (0 === t || l.slice(t + 1).some(Boolean)))) return { left: l.filter(Boolean).join(','), operator: a[2], right: i.for };
     })(a),
     l = mt(r, n);
    return [V(await ce(`function _(${i}) {}`, e, { parser: l ? 'babel-ts' : 'babel', __isVueForBindingLeft: !0 })), ' ', s, ' ', await ce(o, e, { parser: l ? '__ts_expression' : '__js_expression' })];
   }
   function yt(e, t, { parseWithTs: r }) {
    return ce(e, t, { parser: r ? '__ts_expression' : '__js_expression' }, le);
   }
   var bt = function (e, t) {
    if ('vue' !== t.parser) return;
    let { node: r } = e,
     n = r.fullName;
    if ('v-for' === n) return vt;
    if ('generic' === n && Xe(r.parent, t)) return gt;
    let a = ze(r),
     i = mt(e, t);
    return (function (e) {
     let t = e.fullName;
     return '#' === t.charAt(0) || 'slot-scope' === t || 'v-slot' === t || t.startsWith('v-slot:');
    })(r) ||
     (function (e, t) {
      let r = e.parent;
      if (!We(r, t)) return !1;
      let n = r.fullName,
       a = e.fullName;
      return ('script' === n && 'setup' === a) || ('style' === n && 'vars' === a);
     })(r, t)
     ? (e) =>
        (function (e, t, { parseWithTs: r }) {
         return ce(`function _(${e}) {}`, t, { parser: r ? 'babel-ts' : 'babel', __isVueBindings: !0 });
        })(a, e, { parseWithTs: i })
     : n.startsWith('@') || n.startsWith('v-on:')
       ? (e) =>
          (async function (e, t, { parseWithTs: r }) {
           var n;
           try {
            return await yt(e, t, { parseWithTs: r });
           } catch (a) {
            if ('BABEL_PARSER_SYNTAX_ERROR' !== (null == (n = a.cause) ? void 0 : n.code)) throw a;
           }
           return ce(e, t, { parser: r ? '__vue_ts_event_binding' : '__vue_event_binding' }, le);
          })(a, e, { parseWithTs: i })
       : n.startsWith(':') || n.startsWith('.') || n.startsWith('v-bind:')
         ? (e) =>
            (function (e, t, { parseWithTs: r }) {
             return ce(e, t, { parser: r ? '__vue_ts_expression' : '__vue_expression' }, le);
            })(a, e, { parseWithTs: i })
         : n.startsWith('v-')
           ? (e) => yt(a, e, { parseWithTs: i })
           : void 0;
   };
   function St(e) {
    return async (t, r, n, a) => {
     let i = await e(t, r, n, a);
     if (i) return (i = F(i, (e) => ('string' == typeof e ? p(!1, e, '"', '&quot;') : e))), [n.node.rawName, '="', V(i), '"'];
    };
   }
   var wt = function (e, t) {
     let { node: r } = e;
     if (r.value) {
      if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(t.originalText.slice(r.valueSpan.start.offset, r.valueSpan.end.offset)) || ('lwc' === t.parser && r.value.startsWith('{') && r.value.endsWith('}'))) return [r.rawName, '=', r.value];
      for (let r of [ht, dt, tt, bt, et]) {
       let n = r(e, t);
       if (n) return St(n);
      }
     }
    },
    kt = new Proxy(() => {}, { get: () => kt }),
    _t = kt;
   var Ct = function (e) {
    return Array.isArray(e) && e.length > 0;
   };
   function xt(e) {
    return e.sourceSpan.start.offset;
   }
   function Tt(e) {
    return e.sourceSpan.end.offset;
   }
   function Et(e, t) {
    return [e.isSelfClosing ? '' : Lt(e, t), qt(e, t)];
   }
   function Lt(e, t) {
    return e.lastChild && At(e.lastChild) ? '' : [Rt(e, t), Ft(e, t)];
   }
   function qt(e, t) {
    return (e.next ? Dt(e.next) : Mt(e.parent)) ? '' : [Pt(e, t), It(e, t)];
   }
   function Rt(e, t) {
    return Mt(e) ? Pt(e.lastChild, t) : '';
   }
   function It(e, t) {
    return At(e) ? Ft(e.parent, t) : Bt(e) ? jt(e.next, t) : '';
   }
   function Ft(e, t) {
    if ((_t(!e.isSelfClosing), Nt(e, t))) return '';
    switch (e.type) {
     case 'ieConditionalComment':
      return '<!';
     case 'element':
      if (e.hasHtmComponentClosingTag) return '<//';
     default:
      return `</${e.rawName}`;
    }
   }
   function Pt(e, t) {
    if (Nt(e, t)) return '';
    switch (e.type) {
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
   function Nt(e, t) {
    return !e.isSelfClosing && !e.endSourceSpan && (be(e) || ye(e.parent, t));
   }
   function Dt(e) {
    return e.prev && 'docType' !== e.prev.type && 'angularControlFlowBlock' !== e.type && !Se(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
   }
   function Mt(e) {
    var t;
    return (null == (t = e.lastChild) ? void 0 : t.isTrailingSpaceSensitive) && !e.lastChild.hasTrailingSpaces && !Se(Ne(e.lastChild)) && !Be(e);
   }
   function At(e) {
    return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && Se(Ne(e));
   }
   function Bt(e) {
    return e.next && !Se(e.next) && Se(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
   }
   function Ht(e) {
    return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
   }
   function Vt(e, t, r) {
    var n;
    let { node: a } = e;
    if (!Ct(a.attrs)) return a.isSelfClosing ? ' ' : '';
    let i =
      'comment' === (null == (n = a.prev) ? void 0 : n.type) &&
      (function (e) {
       let t = e.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);
       return !!t && (!t[1] || t[1].split(/\s+/u));
      })(a.prev.value),
     s = 'boolean' == typeof i ? () => i : Array.isArray(i) ? (e) => i.includes(e.rawName) : () => !1,
     o = e.map(({ node: e }) => (s(e) ? P(t.originalText.slice(xt(e), Tt(e))) : r()), 'attrs'),
     l = 'element' === a.type && 'script' === a.fullName && 1 === a.attrs.length && 'src' === a.attrs[0].fullName && 0 === a.children.length,
     c = t.singleAttributePerLine && a.attrs.length > 1 && !We(a, t) ? j : U,
     u = [B([l ? ' ' : U, X(c, o)])];
    return (a.firstChild && Ht(a.firstChild)) || (a.isSelfClosing && Mt(a.parent)) || l ? u.push(a.isSelfClosing ? ' ' : '') : u.push(t.bracketSameLine ? (a.isSelfClosing ? ' ' : '') : a.isSelfClosing ? U : W), u;
   }
   function Ot(e) {
    return e.firstChild && Ht(e.firstChild) ? '' : Gt(e);
   }
   function zt(e, t, r) {
    let { node: n } = e;
    return [$t(n, t), Vt(e, t, r), n.isSelfClosing ? '' : Ot(n)];
   }
   function $t(e, t) {
    return e.prev && Bt(e.prev) ? '' : [Ut(e, t), jt(e, t)];
   }
   function Ut(e, t) {
    return Ht(e) ? Gt(e.parent) : Dt(e) ? Pt(e.prev, t) : '';
   }
   var Wt = '<!doctype';
   function jt(e, t) {
    switch (e.type) {
     case 'ieConditionalComment':
     case 'ieConditionalStartComment':
      return `\x3c!--[if ${e.condition}`;
     case 'ieConditionalEndComment':
      return '\x3c!--<!';
     case 'interpolation':
      return '{{';
     case 'docType':
      if ('html' === e.value) {
       let e = t.filepath ?? '';
       if (/\.html?$/u.test(e)) return Wt;
      }
      return t.originalText.slice(xt(e), Tt(e)).slice(0, Wt.length);
     case 'angularIcuExpression':
      return '{';
     case 'element':
      if (e.condition) return `\x3c!--[if ${e.condition}]>\x3c!--\x3e<${e.rawName}`;
     default:
      return `<${e.rawName}`;
    }
   }
   function Gt(e) {
    switch ((_t(!e.isSelfClosing), e.type)) {
     case 'ieConditionalComment':
      return ']>';
     case 'element':
      if (e.condition) return '>\x3c!--<![endif]--\x3e';
     default:
      return '>';
    }
   }
   var Xt = function (e, t) {
     if (!e.endSourceSpan) return '';
     let r = e.startSourceSpan.end.offset;
     e.firstChild && Ht(e.firstChild) && (r -= Gt(e).length);
     let n = e.endSourceSpan.start.offset;
     return e.lastChild && At(e.lastChild) ? (n += Ft(e, t).length) : Mt(e) && (n -= Pt(e.lastChild, t).length), t.originalText.slice(r, n);
    },
    Yt = new Set(['if', 'else if', 'for', 'switch', 'case']);
   var Jt = function (e, t) {
     let { node: r } = e;
     switch (r.type) {
      case 'element':
       if (we(r) || 'interpolation' === r.type) return;
       if (!r.isSelfClosing && je(r, t)) {
        let n = Me(r, t);
        return n
         ? async (a, i) => {
            let s = Xt(r, t),
             o = /^\s*$/u.test(s),
             l = '';
            return o || ((l = await a(ge(s), { parser: n, __embeddedInHtml: !0 })), (o = '' === l)), [Ut(r, t), V(zt(e, t, i)), o ? '' : j, l, o ? '' : j, Et(r, t), It(r, t)];
           }
         : void 0;
       }
       break;
      case 'text':
       if (we(r.parent)) {
        let e = Me(r.parent, t);
        if (e)
         return async (n) => {
          let a = 'markdown' === e ? Ve(r.value.replace(/^[^\S\n]*\n/u, '')) : r.value,
           i = { parser: e, __embeddedInHtml: !0 };
          if ('html' === t.parser && 'babel' === e) {
           let e = 'script',
            { attrMap: t } = r.parent;
           t && ('module' === t.type || ('text/babel' === t.type && 'module' === t['data-type'])) && (e = 'module'), (i.__babelSourceType = e);
          }
          return [$, Ut(r, t), await n(a, i), It(r, t)];
         };
       } else if ('interpolation' === r.parent.type)
        return async (n) => {
         let a = { __isInHtmlInterpolation: !0, __embeddedInHtml: !0 };
         return 'angular' === t.parser ? (a.parser = '__ng_interpolation') : 'vue' === t.parser ? (a.parser = mt(e, t) ? '__vue_ts_expression' : '__vue_expression') : (a.parser = '__js_expression'), [B([U, await n(r.value, a)]), r.parent.next && Dt(r.parent.next) ? ' ' : U];
        };
       break;
      case 'attribute':
       return wt(e, t);
      case 'front-matter':
       return (e) => se(r, e);
      case 'angularControlFlowBlockParameters':
       return Yt.has(e.parent.name) ? ue : void 0;
      case 'angularLetDeclarationInitializer':
       return (e) => ce(r.value, e, { parser: '__ng_binding', __isInHtmlAttribute: !1 });
     }
    },
    Kt = null;
   function Zt(e) {
    if (null !== Kt && (Kt.property, 1)) {
     let e = Kt;
     return (Kt = Zt.prototype = null), e;
    }
    return (Kt = Zt.prototype = e ?? Object.create(null)), new Zt();
   }
   for (let ba = 0; ba <= 10; ba++) Zt();
   var Qt = function (e, t = 'type') {
     return (
      (function (e) {
       Zt(e);
      })(e),
      function (r) {
       let n = r[t],
        a = e[n];
       if (!Array.isArray(a)) throw Object.assign(new Error(`Missing visitor keys for '${n}'.`), { node: r });
       return a;
      }
     );
    },
    er = Qt({ 'front-matter': [], root: ['children'], element: ['attrs', 'children'], ieConditionalComment: ['children'], ieConditionalStartComment: [], ieConditionalEndComment: [], interpolation: ['children'], text: ['children'], docType: [], comment: [], attribute: [], cdata: [], angularControlFlowBlock: ['children', 'parameters'], angularControlFlowBlockParameters: ['children'], angularControlFlowBlockParameter: [], angularLetDeclaration: ['init'], angularLetDeclarationInitializer: [], angularIcuExpression: ['cases'], angularIcuCase: ['expression'] });
   function tr(e) {
    return /^\s*<!--\s*@(?:format|prettier)\s*-->/u.test(e);
   }
   var rr = new Map([
    ['if', new Set(['else if', 'else'])],
    ['else if', new Set(['else if', 'else'])],
    ['for', new Set(['empty'])],
    ['defer', new Set(['placeholder', 'error', 'loading'])],
    ['placeholder', new Set(['placeholder', 'error', 'loading'])],
    ['error', new Set(['placeholder', 'error', 'loading'])],
    ['loading', new Set(['placeholder', 'error', 'loading'])],
   ]);
   function nr(e) {
    let t = Tt(e);
    return 'element' === e.type && !e.endSourceSpan && Ct(e.children) ? Math.max(t, nr(L(!1, e.children, -1))) : t;
   }
   function ar(e, t, r) {
    let n = e.node;
    if (be(n)) {
     let e = nr(n);
     return [Ut(n, t), P(Q.trimEnd(t.originalText.slice(xt(n) + (n.prev && Bt(n.prev) ? jt(n).length : 0), e - (n.next && Dt(n.next) ? Pt(n, t).length : 0)))), It(n, t)];
    }
    return r();
   }
   function ir(e, t) {
    return Se(e) && Se(t) ? (e.isTrailingSpaceSensitive ? (e.hasTrailingSpaces ? (qe(t) ? j : U) : '') : qe(t) ? j : W) : (Bt(e) && (be(t) || t.firstChild || t.isSelfClosing || ('element' === t.type && t.attrs.length > 0))) || ('element' === e.type && e.isSelfClosing && Dt(t)) ? '' : !t.isLeadingSpaceSensitive || qe(t) || (Dt(t) && e.lastChild && At(e.lastChild) && e.lastChild.lastChild && At(e.lastChild.lastChild)) ? j : t.hasLeadingSpaces ? U : W;
   }
   function sr(e, t, r) {
    let { node: n } = e;
    if (Le(n))
     return [
      $,
      ...e.map((e) => {
       let n = e.node,
        a = n.prev ? ir(n.prev, n) : '';
       return [a ? [a, Te(n.prev) ? j : ''] : '', ar(e, t, r)];
      }, 'children'),
     ];
    let a = n.children.map(() => Symbol(''));
    return e.map((e, n) => {
     let i = e.node;
     if (Se(i)) {
      if (i.prev && Se(i.prev)) {
       let n = ir(i.prev, i);
       if (n) return Te(i.prev) ? [j, j, ar(e, t, r)] : [n, ar(e, t, r)];
      }
      return ar(e, t, r);
     }
     let s = [],
      o = [],
      l = [],
      c = [],
      u = i.prev ? ir(i.prev, i) : '',
      p = i.next ? ir(i, i.next) : '';
     return u && (Te(i.prev) ? s.push(j, j) : u === j ? s.push(j) : Se(i.prev) ? o.push(u) : o.push(z('', W, { groupId: a[n - 1] }))), p && (Te(i) ? Se(i.next) && c.push(j, j) : p === j ? Se(i.next) && c.push(j) : l.push(p)), [...s, V([...o, V([ar(e, t, r), ...l], { id: a[n] })]), ...c];
    }, 'children');
   }
   function or(e, t, r) {
    let { node: n } = e,
     a = [];
    (function (e) {
     let { previous: t } = e;
     return 'angularControlFlowBlock' === (null == t ? void 0 : t.type) && !be(t) && !lr(t);
    })(e) && a.push('} '),
     a.push('@', n.name),
     n.parameters && a.push(' (', V(r('parameters')), ')'),
     a.push(' {');
    let i = lr(n);
    return n.children.length > 0 ? ((n.firstChild.hasLeadingSpaces = !0), (n.lastChild.hasTrailingSpaces = !0), a.push(B([j, sr(e, t, r)])), i && a.push(j, '}')) : i && a.push('}'), V(a, { shouldBreak: !0 });
   }
   function lr(e) {
    var t, r;
    return !('angularControlFlowBlock' === (null == (t = e.next) ? void 0 : t.type) && null != (r = rr.get(e.name)) && r.has(e.next.name));
   }
   function cr(e, t, r) {
    let { node: n } = e;
    if (ye(n, t)) return [Ut(n, t), V(zt(e, t, r)), P(Xt(n, t)), ...Et(n, t), It(n, t)];
    let a = 1 === n.children.length && ('interpolation' === n.firstChild.type || 'angularIcuExpression' === n.firstChild.type) && n.firstChild.isLeadingSpaceSensitive && !n.firstChild.hasLeadingSpaces && n.lastChild.isTrailingSpaceSensitive && !n.lastChild.hasTrailingSpaces,
     i = Symbol('element-attr-group-id'),
     s = (a) => V([V(zt(e, t, r), { id: i }), a, Et(n, t)]);
    return 0 === n.children.length
     ? s(n.hasDanglingSpaces && n.isDanglingSpaceSensitive ? U : '')
     : s([
        Ee(n) ? $ : '',
        ((o = [
         a
          ? z(W, '', { groupId: i })
          : n.firstChild.hasLeadingSpaces && n.firstChild.isLeadingSpaceSensitive
            ? U
            : 'text' === n.firstChild.type && n.isWhitespaceSensitive && n.isIndentationSensitive
              ? (function (e) {
                 return H(Number.NEGATIVE_INFINITY, e);
                })(W)
              : W,
         sr(e, t, r),
        ]),
        a
         ? (function (e, t) {
            return D(e), { type: w, contents: e, groupId: t.groupId, negate: t.negate };
           })(o, { groupId: i })
         : (!we(n) && !Ue(n, t)) || 'root' !== n.parent.type || 'vue' !== t.parser || t.vueIndentScriptAndStyle
           ? B(o)
           : o),
        (n.next ? Dt(n.next) : Mt(n.parent)) ? (n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? ' ' : '') : a ? z(W, '', { groupId: i }) : n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? U : ('comment' === n.lastChild.type || ('text' === n.lastChild.type && n.isWhitespaceSensitive && n.isIndentationSensitive)) && new RegExp(`\\n[\\t ]{${t.tabWidth * (e.ancestors.length - 1)}}$`, 'u').test(n.lastChild.value) ? '' : W,
       ]);
    var o;
   }
   function ur(e) {
    return (e >= 9 && e <= 32) || 160 == e;
   }
   function pr(e) {
    return 48 <= e && e <= 57;
   }
   function hr(e) {
    return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
   }
   function dr(e) {
    return 10 === e || 13 === e;
   }
   function fr(e) {
    return 48 <= e && e <= 55;
   }
   function mr(e) {
    return 39 === e || 34 === e || 96 === e;
   }
   var gr = /-+([a-z0-9])/g;
   var vr,
    yr,
    br = class e {
     constructor(e, t, r, n) {
      (this.file = e), (this.offset = t), (this.line = r), (this.col = n);
     }
     toString() {
      return null != this.offset ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
     }
     moveBy(t) {
      let r = this.file.content,
       n = r.length,
       a = this.offset,
       i = this.line,
       s = this.col;
      for (; a > 0 && t < 0; )
       if ((a--, t++, 10 == r.charCodeAt(a))) {
        i--;
        let e = r.substring(0, a - 1).lastIndexOf(String.fromCharCode(10));
        s = e > 0 ? a - e : a;
       } else s--;
      for (; a < n && t > 0; ) {
       let e = r.charCodeAt(a);
       a++, t--, 10 == e ? (i++, (s = 0)) : s++;
      }
      return new e(this.file, a, i, s);
     }
     getContext(e, t) {
      let r = this.file.content,
       n = this.offset;
      if (null != n) {
       n > r.length - 1 && (n = r.length - 1);
       let a = n,
        i = 0,
        s = 0;
       for (; i < e && n > 0 && (n--, i++, '\n' != r[n] || ++s != t); );
       for (i = 0, s = 0; i < e && a < r.length - 1 && (a++, i++, '\n' != r[a] || ++s != t); );
       return { before: r.substring(n, this.offset), after: r.substring(this.offset, a + 1) };
      }
      return null;
     }
    },
    Sr = class {
     constructor(e, t) {
      (this.content = e), (this.url = t);
     }
    },
    wr = class {
     constructor(e, t, r = e, n = null) {
      (this.start = e), (this.end = t), (this.fullStart = r), (this.details = n);
     }
     toString() {
      return this.start.file.content.substring(this.start.offset, this.end.offset);
     }
    };
   ((yr = vr || (vr = {}))[(yr.WARNING = 0)] = 'WARNING'), (yr[(yr.ERROR = 1)] = 'ERROR');
   var kr = class {
     constructor(e, t, r = vr.ERROR) {
      (this.span = e), (this.msg = t), (this.level = r);
     }
     contextualMessage() {
      let e = this.span.start.getContext(100, 3);
      return e ? `${this.msg} ("${e.before}[${vr[this.level]} ->]${e.after}")` : this.msg;
     }
     toString() {
      let e = this.span.details ? `, ${this.span.details}` : '';
      return `${this.contextualMessage()}: ${this.span.start}${e}`;
     }
    },
    _r = [
     function (e) {
      e.walk((e) => {
       if ('element' === e.type && e.tagDefinition.ignoreFirstLf && e.children.length > 0 && 'text' === e.children[0].type && '\n' === e.children[0].value[0]) {
        let t = e.children[0];
        1 === t.value.length ? e.removeChild(t) : (t.value = t.value.slice(1));
       }
      });
     },
     function (e) {
      let t = (e) => {
       var t, r;
       return 'element' === e.type && 'ieConditionalStartComment' === (null == (t = e.prev) ? void 0 : t.type) && e.prev.sourceSpan.end.offset === e.startSourceSpan.start.offset && 'ieConditionalEndComment' === (null == (r = e.firstChild) ? void 0 : r.type) && e.firstChild.sourceSpan.start.offset === e.startSourceSpan.end.offset;
      };
      e.walk((e) => {
       if (e.children)
        for (let r = 0; r < e.children.length; r++) {
         let n = e.children[r];
         if (!t(n)) continue;
         let a = n.prev,
          i = n.firstChild;
         e.removeChild(a), r--;
         let s = new wr(a.sourceSpan.start, i.sourceSpan.end),
          o = new wr(s.start, n.sourceSpan.end);
         (n.condition = a.condition), (n.sourceSpan = o), (n.startSourceSpan = s), n.removeChild(i);
        }
      });
     },
     function (e) {
      return (function (e, t, r) {
       e.walk((e) => {
        if (e.children)
         for (let n = 0; n < e.children.length; n++) {
          let a = e.children[n];
          if ('text' !== a.type && !t(a)) continue;
          'text' !== a.type && ((a.type = 'text'), (a.value = r(a)));
          let i = a.prev;
          !i || 'text' !== i.type || ((i.value += a.value), (i.sourceSpan = new wr(i.sourceSpan.start, a.sourceSpan.end)), e.removeChild(a), n--);
         }
       });
      })(
       e,
       (e) => 'cdata' === e.type,
       (e) => `<![CDATA[${e.value}]]>`,
      );
     },
     function (e, t) {
      if ('html' === t.parser) return;
      let r = /\{\{(.+?)\}\}/su;
      e.walk((e) => {
       if (
        (function (e) {
         return e.children && !we(e);
        })(e)
       )
        for (let t of e.children) {
         if ('text' !== t.type) continue;
         let n = t.sourceSpan.start,
          a = null,
          i = t.value.split(r);
         for (let r = 0; r < i.length; r++, n = a) {
          let s = i[r];
          r % 2 != 0 ? ((a = n.moveBy(s.length + 4)), e.insertChildBefore(t, { type: 'interpolation', sourceSpan: new wr(n, a), children: 0 === s.length ? [] : [{ type: 'text', value: s, sourceSpan: new wr(n.moveBy(2), a.moveBy(-2)) }] })) : ((a = n.moveBy(s.length)), s.length > 0 && e.insertChildBefore(t, { type: 'text', value: s, sourceSpan: new wr(n, a) }));
         }
         e.removeChild(t);
        }
      });
     },
     function (e) {
      e.walk((e) => {
       let t = e.$children;
       if (!t) return;
       if (0 === t.length || (1 === t.length && 'text' === t[0].type && 0 === Q.trim(t[0].value).length)) return (e.hasDanglingSpaces = t.length > 0), void (e.$children = []);
       let r = (function (e) {
         return we(e) || 'interpolation' === e.type || ke(e);
        })(e),
        n = ke(e);
       if (!r)
        for (let a = 0; a < t.length; a++) {
         let r = t[a];
         if ('text' !== r.type) continue;
         let { leadingWhitespace: n, text: i, trailingWhitespace: s } = ve(r.value),
          o = r.prev,
          l = r.next;
         i ? ((r.value = i), (r.sourceSpan = new wr(r.sourceSpan.start.moveBy(n.length), r.sourceSpan.end.moveBy(-s.length))), n && (o && (o.hasTrailingSpaces = !0), (r.hasLeadingSpaces = !0)), s && ((r.hasTrailingSpaces = !0), l && (l.hasLeadingSpaces = !0))) : (e.removeChild(r), a--, (n || s) && (o && (o.hasTrailingSpaces = !0), l && (l.hasLeadingSpaces = !0)));
        }
       (e.isWhitespaceSensitive = r), (e.isIndentationSensitive = n);
      });
     },
     function (e, t) {
      e.walk((e) => {
       e.cssDisplay = (function (e, t) {
        var r;
        if (We(e, t)) return 'block';
        if ('comment' === (null == (r = e.prev) ? void 0 : r.type)) {
         let t = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);
         if (t) return t[1];
        }
        let n = !1;
        if ('element' === e.type && 'svg' === e.namespace) {
         if (
          !(function (e, t) {
           let r = e;
           for (; r; ) {
            if (t(r)) return !0;
            r = r.parent;
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
          return ('element' === e.type && (!e.namespace || n || me(e)) && de[e.name]) || 'inline';
        }
       })(e, t);
      });
     },
     function (e) {
      e.walk((e) => {
       e.isSelfClosing = !e.children || ('element' === e.type && (e.tagDefinition.isVoid || (e.endSourceSpan && e.startSourceSpan.start === e.endSourceSpan.start && e.startSourceSpan.end === e.endSourceSpan.end)));
      });
     },
     function (e, t) {
      e.walk((e) => {
       'element' === e.type && (e.hasHtmComponentClosingTag = e.endSourceSpan && /^<\s*\/\s*\/\s*>$/u.test(t.originalText.slice(e.endSourceSpan.start.offset, e.endSourceSpan.end.offset)));
      });
     },
     function (e, t) {
      e.walk((e) => {
       let { children: r } = e;
       if (r) {
        if (0 === r.length) return void (e.isDanglingSpaceSensitive = xe(e));
        for (let e of r) (e.isLeadingSpaceSensitive = _e(e, t)), (e.isTrailingSpaceSensitive = Ce(e, t));
        for (let e = 0; e < r.length; e++) {
         let t = r[e];
         (t.isLeadingSpaceSensitive = (0 === e || t.prev.isTrailingSpaceSensitive) && t.isLeadingSpaceSensitive), (t.isTrailingSpaceSensitive = (e === r.length - 1 || t.next.isLeadingSpaceSensitive) && t.isTrailingSpaceSensitive);
        }
       }
      });
     },
     function (e) {
      let t = (e) => {
       var t, r;
       return 'element' === e.type && 0 === e.attrs.length && 1 === e.children.length && 'text' === e.firstChild.type && !Q.hasWhitespaceCharacter(e.children[0].value) && !e.firstChild.hasLeadingSpaces && !e.firstChild.hasTrailingSpaces && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces && 'text' === (null == (t = e.prev) ? void 0 : t.type) && 'text' === (null == (r = e.next) ? void 0 : r.type);
      };
      e.walk((e) => {
       if (e.children)
        for (let r = 0; r < e.children.length; r++) {
         let n = e.children[r];
         if (!t(n)) continue;
         let a = n.prev,
          i = n.next;
         (a.value += `<${n.rawName}>` + n.firstChild.value + `</${n.rawName}>` + i.value), (a.sourceSpan = new wr(a.sourceSpan.start, i.sourceSpan.end)), (a.isTrailingSpaceSensitive = i.isTrailingSpaceSensitive), (a.hasTrailingSpaces = i.hasTrailingSpaces), e.removeChild(n), r--, e.removeChild(i);
        }
      });
     },
    ];
   var Cr = function (e, t) {
    for (let r of _r) r(e, t);
    return e;
   };
   var xr = {
     preprocess: Cr,
     print: function (e, t, r) {
      let { node: n } = e;
      switch (n.type) {
       case 'front-matter':
        return P(n.raw);
       case 'root':
        return t.__onHtmlRoot && t.__onHtmlRoot(n), [V(sr(e, t, r)), j];
       case 'element':
       case 'ieConditionalComment':
        return cr(e, t, r);
       case 'angularControlFlowBlock':
        return or(e, t, r);
       case 'angularControlFlowBlockParameters':
        return (function (e, t, r) {
         return [B([W, X([';', U], e.map(r, 'children'))]), W];
        })(e, 0, r);
       case 'angularControlFlowBlockParameter':
        return Q.trim(n.expression);
       case 'angularLetDeclaration':
        return V(['@let ', V([n.id, ' =', V(B([U, r('init')]))]), ';']);
       case 'angularLetDeclarationInitializer':
        return n.value;
       case 'angularIcuExpression':
        return (function (e, t, r) {
         let { node: n } = e;
         return [$t(n, t), V([n.switchValue.trim(), ', ', n.clause, n.cases.length > 0 ? [',', B([U, X(U, e.map(r, 'cases'))])] : '', W]), qt(n, t)];
        })(e, t, r);
       case 'angularIcuCase':
        return (function (e, t, r) {
         let { node: n } = e;
         return [
          n.value,
          ' {',
          V([
           B([
            W,
            e.map(({ node: e, isLast: t }) => {
             let n = [r()];
             return 'text' === e.type && (e.hasLeadingSpaces && n.unshift(U), e.hasTrailingSpaces && !t && n.push(U)), n;
            }, 'expression'),
           ]),
           W,
          ]),
          '}',
         ];
        })(e, 0, r);
       case 'ieConditionalStartComment':
       case 'ieConditionalEndComment':
        return [$t(n), qt(n)];
       case 'interpolation':
        return [$t(n, t), ...e.map(r, 'children'), qt(n, t)];
       case 'text': {
        if ('interpolation' === n.parent.type) {
         let e = /\n[^\S\n]*$/u,
          t = e.test(n.value);
         return [P(t ? n.value.replace(e, '') : n.value), t ? j : ''];
        }
        let e = Ut(n, t),
         r = Ge(n),
         a = It(n, t);
        return (r[0] = [e, r[0]]), r.push([r.pop(), a]), O(r);
       }
       case 'docType':
        return [V([$t(n, t), ' ', p(!1, n.value.replace(/^html\b/iu, 'html'), /\s+/gu, ' ')]), qt(n, t)];
       case 'comment':
        return [Ut(n, t), P(t.originalText.slice(xt(n), Tt(n))), It(n, t)];
       case 'attribute': {
        if (null === n.value) return n.rawName;
        let e = Oe(n.value),
         t = J(e, '"');
        return [n.rawName, '=', t, P('"' === t ? p(!1, e, '"', '&quot;') : p(!1, e, "'", '&apos;')), t];
       }
       default:
        throw new ee(n, 'HTML');
      }
     },
     insertPragma: function (e) {
      return '\x3c!-- @format --\x3e\n\n' + e;
     },
     massageAstNode: ie,
     embed: Jt,
     getVisitorKeys: er,
    },
    Tr = xr,
    Er = [
     { linguistLanguageId: 146, name: 'Angular', type: 'markup', tmScope: 'text.html.basic', aceMode: 'html', codemirrorMode: 'htmlmixed', codemirrorMimeType: 'text/html', color: '#e34c26', aliases: ['xhtml'], extensions: ['.component.html'], parsers: ['angular'], vscodeLanguageIds: ['html'], filenames: [] },
     { linguistLanguageId: 146, name: 'HTML', type: 'markup', tmScope: 'text.html.basic', aceMode: 'html', codemirrorMode: 'htmlmixed', codemirrorMimeType: 'text/html', color: '#e34c26', aliases: ['xhtml'], extensions: ['.html', '.hta', '.htm', '.html.hl', '.inc', '.xht', '.xhtml', '.mjml'], parsers: ['html'], vscodeLanguageIds: ['html'] },
     { linguistLanguageId: 146, name: 'Lightning Web Components', type: 'markup', tmScope: 'text.html.basic', aceMode: 'html', codemirrorMode: 'htmlmixed', codemirrorMimeType: 'text/html', color: '#e34c26', aliases: ['xhtml'], extensions: [], parsers: ['lwc'], vscodeLanguageIds: ['html'], filenames: [] },
     { linguistLanguageId: 391, name: 'Vue', type: 'markup', color: '#41b883', extensions: ['.vue'], tmScope: 'text.html.vue', aceMode: 'html', parsers: ['vue'], vscodeLanguageIds: ['vue'] },
    ],
    Lr = {
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
    qr = 'HTML',
    Rr = {
     bracketSameLine: Lr.bracketSameLine,
     htmlWhitespaceSensitivity: {
      category: qr,
      type: 'choice',
      default: 'css',
      description: 'How to handle whitespaces in HTML.',
      choices: [
       { value: 'css', description: 'Respect the default value of CSS display property.' },
       { value: 'strict', description: 'Whitespaces are considered sensitive.' },
       { value: 'ignore', description: 'Whitespaces are considered insensitive.' },
      ],
     },
     singleAttributePerLine: Lr.singleAttributePerLine,
     vueIndentScriptAndStyle: { category: qr, type: 'boolean', default: !1, description: 'Indent script and style tags in Vue files.' },
    },
    Ir = {};
   i(Ir, { angular: () => fa, html: () => da, lwc: () => ga, vue: () => ma });
   var Fr, Pr, Nr;
   !(function (e) {
    (e[(e.Emulated = 0)] = 'Emulated'), (e[(e.None = 2)] = 'None'), (e[(e.ShadowDom = 3)] = 'ShadowDom');
   })(Fr || (Fr = {})),
    (function (e) {
     (e[(e.OnPush = 0)] = 'OnPush'), (e[(e.Default = 1)] = 'Default');
    })(Pr || (Pr = {})),
    (function (e) {
     (e[(e.None = 0)] = 'None'), (e[(e.SignalBased = 1)] = 'SignalBased'), (e[(e.HasDecoratorInputTransform = 2)] = 'HasDecoratorInputTransform');
    })(Nr || (Nr = {}));
   var Dr,
    Mr,
    Ar,
    Br,
    Hr = 'custom-elements',
    Vr = 'no-errors-schema';
   function Or(e, t = !0) {
    if (':' != e[0]) return [null, e];
    let r = e.indexOf(':', 1);
    if (-1 === r) {
     if (t) throw new Error(`Unsupported format "${e}" expecting ":namespace:name"`);
     return [null, e];
    }
    return [e.slice(1, r), e.slice(r + 1)];
   }
   function zr(e) {
    return 'ng-container' === Or(e)[1];
   }
   function $r(e) {
    return 'ng-content' === Or(e)[1];
   }
   function Ur(e) {
    return null === e ? null : Or(e)[0];
   }
   function Wr(e, t) {
    return e ? `:${e}:${t}` : t;
   }
   function jr() {
    return Br || ((Br = {}), Gr(Dr.HTML, ['iframe|srcdoc', '*|innerHTML', '*|outerHTML']), Gr(Dr.STYLE, ['*|style']), Gr(Dr.URL, ['*|formAction', 'area|href', 'area|ping', 'audio|src', 'a|href', 'a|ping', 'blockquote|cite', 'body|background', 'del|cite', 'form|action', 'img|src', 'input|src', 'ins|cite', 'q|cite', 'source|src', 'track|src', 'video|poster', 'video|src']), Gr(Dr.RESOURCE_URL, ['applet|code', 'applet|codebase', 'base|href', 'embed|src', 'frame|src', 'head|profile', 'html|manifest', 'iframe|src', 'link|href', 'media|src', 'object|codebase', 'object|data', 'script|src'])), Br;
   }
   function Gr(e, t) {
    for (let r of t) Br[r.toLowerCase()] = e;
   }
   !(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.HTML = 1)] = 'HTML'), (e[(e.STYLE = 2)] = 'STYLE'), (e[(e.SCRIPT = 3)] = 'SCRIPT'), (e[(e.URL = 4)] = 'URL'), (e[(e.RESOURCE_URL = 5)] = 'RESOURCE_URL');
   })(Dr || (Dr = {})),
    (function (e) {
     (e[(e.Error = 0)] = 'Error'), (e[(e.Warning = 1)] = 'Warning'), (e[(e.Ignore = 2)] = 'Ignore');
    })(Mr || (Mr = {})),
    (function (e) {
     (e[(e.RAW_TEXT = 0)] = 'RAW_TEXT'), (e[(e.ESCAPABLE_RAW_TEXT = 1)] = 'ESCAPABLE_RAW_TEXT'), (e[(e.PARSABLE_DATA = 2)] = 'PARSABLE_DATA');
    })(Ar || (Ar = {}));
   var Xr = class {},
    Yr = ['[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored', '[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy', 'abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy', 'media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume', ':svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex', ':svg:graphics^:svg:|', ':svg:animation^:svg:|*begin,*end,*repeat', ':svg:geometry^:svg:|', ':svg:componentTransferFunction^:svg:|', ':svg:gradient^:svg:|', ':svg:textContent^:svg:graphics|', ':svg:textPositioning^:svg:textContent|', 'a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username', 'area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username', 'audio^media|', 'br^[HTMLElement]|clear', 'base^[HTMLElement]|href,target', 'body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink', 'button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value', 'canvas^[HTMLElement]|#height,#width', 'content^[HTMLElement]|select', 'dl^[HTMLElement]|!compact', 'data^[HTMLElement]|value', 'datalist^[HTMLElement]|', 'details^[HTMLElement]|!open', 'dialog^[HTMLElement]|!open,returnValue', 'dir^[HTMLElement]|!compact', 'div^[HTMLElement]|align', 'embed^[HTMLElement]|align,height,name,src,type,width', 'fieldset^[HTMLElement]|!disabled,name', 'font^[HTMLElement]|color,face,size', 'form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target', 'frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src', 'frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows', 'hr^[HTMLElement]|align,color,!noShade,size,width', 'head^[HTMLElement]|', 'h1,h2,h3,h4,h5,h6^[HTMLElement]|align', 'html^[HTMLElement]|version', 'iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width', 'img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width', 'input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width', 'li^[HTMLElement]|type,#value', 'label^[HTMLElement]|htmlFor', 'legend^[HTMLElement]|align', 'link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type', 'map^[HTMLElement]|name', 'marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width', 'menu^[HTMLElement]|!compact', 'meta^[HTMLElement]|content,httpEquiv,media,name,scheme', 'meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value', 'ins,del^[HTMLElement]|cite,dateTime', 'ol^[HTMLElement]|!compact,!reversed,#start,type', 'object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width', 'optgroup^[HTMLElement]|!disabled,label', 'option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value', 'output^[HTMLElement]|defaultValue,%htmlFor,name,value', 'p^[HTMLElement]|align', 'param^[HTMLElement]|name,type,value,valueType', 'picture^[HTMLElement]|', 'pre^[HTMLElement]|#width', 'progress^[HTMLElement]|#max,#value', 'q,blockquote,cite^[HTMLElement]|', 'script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type', 'select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value', 'slot^[HTMLElement]|name', 'source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width', 'span^[HTMLElement]|', 'style^[HTMLElement]|!disabled,media,type', 'caption^[HTMLElement]|align', 'th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width', 'col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width', 'table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width', 'tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign', 'tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign', 'template^[HTMLElement]|', 'textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap', 'time^[HTMLElement]|dateTime', 'title^[HTMLElement]|text', 'track^[HTMLElement]|!default,kind,label,src,srclang', 'ul^[HTMLElement]|!compact,type', 'unknown^[HTMLElement]|', 'video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width', ':svg:a^:svg:graphics|', ':svg:animate^:svg:animation|', ':svg:animateMotion^:svg:animation|', ':svg:animateTransform^:svg:animation|', ':svg:circle^:svg:geometry|', ':svg:clipPath^:svg:graphics|', ':svg:defs^:svg:graphics|', ':svg:desc^:svg:|', ':svg:discard^:svg:|', ':svg:ellipse^:svg:geometry|', ':svg:feBlend^:svg:|', ':svg:feColorMatrix^:svg:|', ':svg:feComponentTransfer^:svg:|', ':svg:feComposite^:svg:|', ':svg:feConvolveMatrix^:svg:|', ':svg:feDiffuseLighting^:svg:|', ':svg:feDisplacementMap^:svg:|', ':svg:feDistantLight^:svg:|', ':svg:feDropShadow^:svg:|', ':svg:feFlood^:svg:|', ':svg:feFuncA^:svg:componentTransferFunction|', ':svg:feFuncB^:svg:componentTransferFunction|', ':svg:feFuncG^:svg:componentTransferFunction|', ':svg:feFuncR^:svg:componentTransferFunction|', ':svg:feGaussianBlur^:svg:|', ':svg:feImage^:svg:|', ':svg:feMerge^:svg:|', ':svg:feMergeNode^:svg:|', ':svg:feMorphology^:svg:|', ':svg:feOffset^:svg:|', ':svg:fePointLight^:svg:|', ':svg:feSpecularLighting^:svg:|', ':svg:feSpotLight^:svg:|', ':svg:feTile^:svg:|', ':svg:feTurbulence^:svg:|', ':svg:filter^:svg:|', ':svg:foreignObject^:svg:graphics|', ':svg:g^:svg:graphics|', ':svg:image^:svg:graphics|decoding', ':svg:line^:svg:geometry|', ':svg:linearGradient^:svg:gradient|', ':svg:mpath^:svg:|', ':svg:marker^:svg:|', ':svg:mask^:svg:|', ':svg:metadata^:svg:|', ':svg:path^:svg:geometry|', ':svg:pattern^:svg:|', ':svg:polygon^:svg:geometry|', ':svg:polyline^:svg:geometry|', ':svg:radialGradient^:svg:gradient|', ':svg:rect^:svg:geometry|', ':svg:svg^:svg:graphics|#currentScale,#zoomAndPan', ':svg:script^:svg:|type', ':svg:set^:svg:animation|', ':svg:stop^:svg:|', ':svg:style^:svg:|!disabled,media,title,type', ':svg:switch^:svg:graphics|', ':svg:symbol^:svg:|', ':svg:tspan^:svg:textPositioning|', ':svg:text^:svg:textPositioning|', ':svg:textPath^:svg:textContent|', ':svg:title^:svg:|', ':svg:use^:svg:graphics|', ':svg:view^:svg:|#zoomAndPan', 'data^[HTMLElement]|value', 'keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name', 'menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default', 'summary^[HTMLElement]|', 'time^[HTMLElement]|dateTime', ':svg:cursor^:svg:|', ':math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex', ':math:math^:math:|', ':math:maction^:math:|', ':math:menclose^:math:|', ':math:merror^:math:|', ':math:mfenced^:math:|', ':math:mfrac^:math:|', ':math:mi^:math:|', ':math:mmultiscripts^:math:|', ':math:mn^:math:|', ':math:mo^:math:|', ':math:mover^:math:|', ':math:mpadded^:math:|', ':math:mphantom^:math:|', ':math:mroot^:math:|', ':math:mrow^:math:|', ':math:ms^:math:|', ':math:mspace^:math:|', ':math:msqrt^:math:|', ':math:mstyle^:math:|', ':math:msub^:math:|', ':math:msubsup^:math:|', ':math:msup^:math:|', ':math:mtable^:math:|', ':math:mtd^:math:|', ':math:mtext^:math:|', ':math:mtr^:math:|', ':math:munder^:math:|', ':math:munderover^:math:|', ':math:semantics^:math:|'],
    Jr = new Map(Object.entries({ class: 'className', for: 'htmlFor', formaction: 'formAction', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' })),
    Kr = Array.from(Jr).reduce((e, [t, r]) => (e.set(t, r), e), new Map()),
    Zr = class extends Xr {
     constructor() {
      super(),
       (this._schema = new Map()),
       (this._eventSchema = new Map()),
       Yr.forEach((e) => {
        let t = new Map(),
         r = new Set(),
         [n, a] = e.split('|'),
         i = a.split(','),
         [s, o] = n.split('^');
        s.split(',').forEach((e) => {
         this._schema.set(e.toLowerCase(), t), this._eventSchema.set(e.toLowerCase(), r);
        });
        let l = o && this._schema.get(o.toLowerCase());
        if (l) {
         for (let [e, r] of l) t.set(e, r);
         for (let e of this._eventSchema.get(o.toLowerCase())) r.add(e);
        }
        i.forEach((e) => {
         if (e.length > 0)
          switch (e[0]) {
           case '*':
            r.add(e.substring(1));
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
       });
     }
     hasProperty(e, t, r) {
      if (r.some((e) => e.name === Vr)) return !0;
      if (e.indexOf('-') > -1) {
       if (zr(e) || $r(e)) return !1;
       if (r.some((e) => e.name === Hr)) return !0;
      }
      return (this._schema.get(e.toLowerCase()) || this._schema.get('unknown')).has(t);
     }
     hasElement(e, t) {
      return !!(t.some((e) => e.name === Vr) || (e.indexOf('-') > -1 && (zr(e) || $r(e) || t.some((e) => e.name === Hr)))) || this._schema.has(e.toLowerCase());
     }
     securityContext(e, t, r) {
      r && (t = this.getMappedPropName(t)), (e = e.toLowerCase()), (t = t.toLowerCase());
      let n = jr()[e + '|' + t];
      return n || ((n = jr()['*|' + t]), n || Dr.NONE);
     }
     getMappedPropName(e) {
      return Jr.get(e) ?? e;
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
      return Array.from(t.keys()).map((e) => Kr.get(e) ?? e);
     }
     allKnownEventsOfElement(e) {
      return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
     }
     normalizeAnimationStyleProperty(e) {
      return (function (e) {
       return e.replace(gr, (...e) => e[1].toUpperCase());
      })(e);
     }
     normalizeAnimationStyleValue(e, t, r) {
      let n = '',
       a = r.toString().trim(),
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
       0 !== r &&
       '0' !== r
      )
       if ('number' == typeof r) n = 'px';
       else {
        let e = r.match(/^[+-]?[\d\.]+([a-z]*)$/);
        e && 0 == e[1].length && (i = `Please provide a CSS unit value for ${t}:${r}`);
       }
      return { error: i, value: a + n };
     }
    };
   var Qr,
    en,
    tn = class {
     constructor({ closedByChildren: e, implicitNamespacePrefix: t, contentType: r = Ar.PARSABLE_DATA, closedByParent: n = !1, isVoid: a = !1, ignoreFirstLf: i = !1, preventNamespaceInheritance: s = !1, canSelfClose: o = !1 } = {}) {
      (this.closedByChildren = {}), (this.closedByParent = !1), e && e.length > 0 && e.forEach((e) => (this.closedByChildren[e] = !0)), (this.isVoid = a), (this.closedByParent = n || a), (this.implicitNamespacePrefix = t || null), (this.contentType = r), (this.ignoreFirstLf = i), (this.preventNamespaceInheritance = s), (this.canSelfClose = o ?? a);
     }
     isClosedByChild(e) {
      return this.isVoid || e.toLowerCase() in this.closedByChildren;
     }
     getContentType(e) {
      return 'object' == typeof this.contentType ? ((void 0 === e ? void 0 : this.contentType[e]) ?? this.contentType.default) : this.contentType;
     }
    };
   function rn(e) {
    return (
     en ||
      ((Qr = new tn({ canSelfClose: !0 })),
      (en = Object.assign(Object.create(null), { base: new tn({ isVoid: !0 }), meta: new tn({ isVoid: !0 }), area: new tn({ isVoid: !0 }), embed: new tn({ isVoid: !0 }), link: new tn({ isVoid: !0 }), img: new tn({ isVoid: !0 }), input: new tn({ isVoid: !0 }), param: new tn({ isVoid: !0 }), hr: new tn({ isVoid: !0 }), br: new tn({ isVoid: !0 }), source: new tn({ isVoid: !0 }), track: new tn({ isVoid: !0 }), wbr: new tn({ isVoid: !0 }), p: new tn({ closedByChildren: ['address', 'article', 'aside', 'blockquote', 'div', 'dl', 'fieldset', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul'], closedByParent: !0 }), thead: new tn({ closedByChildren: ['tbody', 'tfoot'] }), tbody: new tn({ closedByChildren: ['tbody', 'tfoot'], closedByParent: !0 }), tfoot: new tn({ closedByChildren: ['tbody'], closedByParent: !0 }), tr: new tn({ closedByChildren: ['tr'], closedByParent: !0 }), td: new tn({ closedByChildren: ['td', 'th'], closedByParent: !0 }), th: new tn({ closedByChildren: ['td', 'th'], closedByParent: !0 }), col: new tn({ isVoid: !0 }), svg: new tn({ implicitNamespacePrefix: 'svg' }), foreignObject: new tn({ implicitNamespacePrefix: 'svg', preventNamespaceInheritance: !0 }), math: new tn({ implicitNamespacePrefix: 'math' }), li: new tn({ closedByChildren: ['li'], closedByParent: !0 }), dt: new tn({ closedByChildren: ['dt', 'dd'] }), dd: new tn({ closedByChildren: ['dt', 'dd'], closedByParent: !0 }), rb: new tn({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: !0 }), rt: new tn({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: !0 }), rtc: new tn({ closedByChildren: ['rb', 'rtc', 'rp'], closedByParent: !0 }), rp: new tn({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: !0 }), optgroup: new tn({ closedByChildren: ['optgroup'], closedByParent: !0 }), option: new tn({ closedByChildren: ['option', 'optgroup'], closedByParent: !0 }), pre: new tn({ ignoreFirstLf: !0 }), listing: new tn({ ignoreFirstLf: !0 }), style: new tn({ contentType: Ar.RAW_TEXT }), script: new tn({ contentType: Ar.RAW_TEXT }), title: new tn({ contentType: { default: Ar.ESCAPABLE_RAW_TEXT, svg: Ar.PARSABLE_DATA } }), textarea: new tn({ contentType: Ar.ESCAPABLE_RAW_TEXT, ignoreFirstLf: !0 }) })),
      new Zr().allKnownElementNames().forEach((e) => {
       !en[e] && null === Ur(e) && (en[e] = new tn({ canSelfClose: !1 }));
      })),
     en[e] ?? Qr
    );
   }
   var nn = class {
     constructor(e, t) {
      (this.sourceSpan = e), (this.i18n = t);
     }
    },
    an = class extends nn {
     constructor(e, t, r, n) {
      super(t, n), (this.value = e), (this.tokens = r), (this.type = 'text');
     }
     visit(e, t) {
      return e.visitText(this, t);
     }
    },
    sn = class extends nn {
     constructor(e, t, r, n) {
      super(t, n), (this.value = e), (this.tokens = r), (this.type = 'cdata');
     }
     visit(e, t) {
      return e.visitCdata(this, t);
     }
    },
    on = class extends nn {
     constructor(e, t, r, n, a, i) {
      super(n, i), (this.switchValue = e), (this.type = t), (this.cases = r), (this.switchValueSourceSpan = a);
     }
     visit(e, t) {
      return e.visitExpansion(this, t);
     }
    },
    ln = class {
     constructor(e, t, r, n, a) {
      (this.value = e), (this.expression = t), (this.sourceSpan = r), (this.valueSourceSpan = n), (this.expSourceSpan = a), (this.type = 'expansionCase');
     }
     visit(e, t) {
      return e.visitExpansionCase(this, t);
     }
    },
    cn = class extends nn {
     constructor(e, t, r, n, a, i, s) {
      super(r, s), (this.name = e), (this.value = t), (this.keySpan = n), (this.valueSpan = a), (this.valueTokens = i), (this.type = 'attribute');
     }
     visit(e, t) {
      return e.visitAttribute(this, t);
     }
     get nameSpan() {
      return this.keySpan;
     }
    },
    un = class extends nn {
     constructor(e, t, r, n, a, i = null, s = null, o) {
      super(n, o), (this.name = e), (this.attrs = t), (this.children = r), (this.startSourceSpan = a), (this.endSourceSpan = i), (this.nameSpan = s), (this.type = 'element');
     }
     visit(e, t) {
      return e.visitElement(this, t);
     }
    },
    pn = class {
     constructor(e, t) {
      (this.value = e), (this.sourceSpan = t), (this.type = 'comment');
     }
     visit(e, t) {
      return e.visitComment(this, t);
     }
    },
    hn = class {
     constructor(e, t) {
      (this.value = e), (this.sourceSpan = t), (this.type = 'docType');
     }
     visit(e, t) {
      return e.visitDocType(this, t);
     }
    },
    dn = class extends nn {
     constructor(e, t, r, n, a, i, s = null, o) {
      super(n, o), (this.name = e), (this.parameters = t), (this.children = r), (this.nameSpan = a), (this.startSourceSpan = i), (this.endSourceSpan = s), (this.type = 'block');
     }
     visit(e, t) {
      return e.visitBlock(this, t);
     }
    },
    fn = class {
     constructor(e, t) {
      (this.expression = e), (this.sourceSpan = t), (this.type = 'blockParameter'), (this.startSourceSpan = null), (this.endSourceSpan = null);
     }
     visit(e, t) {
      return e.visitBlockParameter(this, t);
     }
    },
    mn = class {
     constructor(e, t, r, n, a) {
      (this.name = e), (this.value = t), (this.sourceSpan = r), (this.nameSpan = n), (this.valueSpan = a), (this.type = 'letDeclaration'), (this.startSourceSpan = null), (this.endSourceSpan = null);
     }
     visit(e, t) {
      return e.visitLetDeclaration(this, t);
     }
    };
   function gn(e, t, r = null) {
    let n = [],
     a = e.visit ? (t) => e.visit(t, r) || t.visit(e, r) : (t) => t.visit(e, r);
    return (
     t.forEach((e) => {
      let t = a(e);
      t && n.push(t);
     }),
     n
    );
   }
   var vn = class {
     constructor() {}
     visitElement(e, t) {
      this.visitChildren(t, (t) => {
       t(e.attrs), t(e.children);
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
       t(e.parameters), t(e.children);
      });
     }
     visitBlockParameter(e, t) {}
     visitLetDeclaration(e, t) {}
     visitChildren(e, t) {
      let r = [],
       n = this;
      return (
       t(function (t) {
        t && r.push(gn(n, t, e));
       }),
       Array.prototype.concat.apply([], r)
      );
     }
    },
    yn = { AElig: '\xc6', AMP: '&', amp: '&', Aacute: '\xc1', Abreve: '\u0102', Acirc: '\xc2', Acy: '\u0410', Afr: '\ud835\udd04', Agrave: '\xc0', Alpha: '\u0391', Amacr: '\u0100', And: '\u2a53', Aogon: '\u0104', Aopf: '\ud835\udd38', ApplyFunction: '\u2061', af: '\u2061', Aring: '\xc5', angst: '\xc5', Ascr: '\ud835\udc9c', Assign: '\u2254', colone: '\u2254', coloneq: '\u2254', Atilde: '\xc3', Auml: '\xc4', Backslash: '\u2216', setminus: '\u2216', setmn: '\u2216', smallsetminus: '\u2216', ssetmn: '\u2216', Barv: '\u2ae7', Barwed: '\u2306', doublebarwedge: '\u2306', Bcy: '\u0411', Because: '\u2235', becaus: '\u2235', because: '\u2235', Bernoullis: '\u212c', Bscr: '\u212c', bernou: '\u212c', Beta: '\u0392', Bfr: '\ud835\udd05', Bopf: '\ud835\udd39', Breve: '\u02d8', breve: '\u02d8', Bumpeq: '\u224e', HumpDownHump: '\u224e', bump: '\u224e', CHcy: '\u0427', COPY: '\xa9', copy: '\xa9', Cacute: '\u0106', Cap: '\u22d2', CapitalDifferentialD: '\u2145', DD: '\u2145', Cayleys: '\u212d', Cfr: '\u212d', Ccaron: '\u010c', Ccedil: '\xc7', Ccirc: '\u0108', Cconint: '\u2230', Cdot: '\u010a', Cedilla: '\xb8', cedil: '\xb8', CenterDot: '\xb7', centerdot: '\xb7', middot: '\xb7', Chi: '\u03a7', CircleDot: '\u2299', odot: '\u2299', CircleMinus: '\u2296', ominus: '\u2296', CirclePlus: '\u2295', oplus: '\u2295', CircleTimes: '\u2297', otimes: '\u2297', ClockwiseContourIntegral: '\u2232', cwconint: '\u2232', CloseCurlyDoubleQuote: '\u201d', rdquo: '\u201d', rdquor: '\u201d', CloseCurlyQuote: '\u2019', rsquo: '\u2019', rsquor: '\u2019', Colon: '\u2237', Proportion: '\u2237', Colone: '\u2a74', Congruent: '\u2261', equiv: '\u2261', Conint: '\u222f', DoubleContourIntegral: '\u222f', ContourIntegral: '\u222e', conint: '\u222e', oint: '\u222e', Copf: '\u2102', complexes: '\u2102', Coproduct: '\u2210', coprod: '\u2210', CounterClockwiseContourIntegral: '\u2233', awconint: '\u2233', Cross: '\u2a2f', Cscr: '\ud835\udc9e', Cup: '\u22d3', CupCap: '\u224d', asympeq: '\u224d', DDotrahd: '\u2911', DJcy: '\u0402', DScy: '\u0405', DZcy: '\u040f', Dagger: '\u2021', ddagger: '\u2021', Darr: '\u21a1', Dashv: '\u2ae4', DoubleLeftTee: '\u2ae4', Dcaron: '\u010e', Dcy: '\u0414', Del: '\u2207', nabla: '\u2207', Delta: '\u0394', Dfr: '\ud835\udd07', DiacriticalAcute: '\xb4', acute: '\xb4', DiacriticalDot: '\u02d9', dot: '\u02d9', DiacriticalDoubleAcute: '\u02dd', dblac: '\u02dd', DiacriticalGrave: '`', grave: '`', DiacriticalTilde: '\u02dc', tilde: '\u02dc', Diamond: '\u22c4', diam: '\u22c4', diamond: '\u22c4', DifferentialD: '\u2146', dd: '\u2146', Dopf: '\ud835\udd3b', Dot: '\xa8', DoubleDot: '\xa8', die: '\xa8', uml: '\xa8', DotDot: '\u20dc', DotEqual: '\u2250', doteq: '\u2250', esdot: '\u2250', DoubleDownArrow: '\u21d3', Downarrow: '\u21d3', dArr: '\u21d3', DoubleLeftArrow: '\u21d0', Leftarrow: '\u21d0', lArr: '\u21d0', DoubleLeftRightArrow: '\u21d4', Leftrightarrow: '\u21d4', hArr: '\u21d4', iff: '\u21d4', DoubleLongLeftArrow: '\u27f8', Longleftarrow: '\u27f8', xlArr: '\u27f8', DoubleLongLeftRightArrow: '\u27fa', Longleftrightarrow: '\u27fa', xhArr: '\u27fa', DoubleLongRightArrow: '\u27f9', Longrightarrow: '\u27f9', xrArr: '\u27f9', DoubleRightArrow: '\u21d2', Implies: '\u21d2', Rightarrow: '\u21d2', rArr: '\u21d2', DoubleRightTee: '\u22a8', vDash: '\u22a8', DoubleUpArrow: '\u21d1', Uparrow: '\u21d1', uArr: '\u21d1', DoubleUpDownArrow: '\u21d5', Updownarrow: '\u21d5', vArr: '\u21d5', DoubleVerticalBar: '\u2225', par: '\u2225', parallel: '\u2225', shortparallel: '\u2225', spar: '\u2225', DownArrow: '\u2193', ShortDownArrow: '\u2193', darr: '\u2193', downarrow: '\u2193', DownArrowBar: '\u2913', DownArrowUpArrow: '\u21f5', duarr: '\u21f5', DownBreve: '\u0311', DownLeftRightVector: '\u2950', DownLeftTeeVector: '\u295e', DownLeftVector: '\u21bd', leftharpoondown: '\u21bd', lhard: '\u21bd', DownLeftVectorBar: '\u2956', DownRightTeeVector: '\u295f', DownRightVector: '\u21c1', rhard: '\u21c1', rightharpoondown: '\u21c1', DownRightVectorBar: '\u2957', DownTee: '\u22a4', top: '\u22a4', DownTeeArrow: '\u21a7', mapstodown: '\u21a7', Dscr: '\ud835\udc9f', Dstrok: '\u0110', ENG: '\u014a', ETH: '\xd0', Eacute: '\xc9', Ecaron: '\u011a', Ecirc: '\xca', Ecy: '\u042d', Edot: '\u0116', Efr: '\ud835\udd08', Egrave: '\xc8', Element: '\u2208', in: '\u2208', isin: '\u2208', isinv: '\u2208', Emacr: '\u0112', EmptySmallSquare: '\u25fb', EmptyVerySmallSquare: '\u25ab', Eogon: '\u0118', Eopf: '\ud835\udd3c', Epsilon: '\u0395', Equal: '\u2a75', EqualTilde: '\u2242', eqsim: '\u2242', esim: '\u2242', Equilibrium: '\u21cc', rightleftharpoons: '\u21cc', rlhar: '\u21cc', Escr: '\u2130', expectation: '\u2130', Esim: '\u2a73', Eta: '\u0397', Euml: '\xcb', Exists: '\u2203', exist: '\u2203', ExponentialE: '\u2147', ee: '\u2147', exponentiale: '\u2147', Fcy: '\u0424', Ffr: '\ud835\udd09', FilledSmallSquare: '\u25fc', FilledVerySmallSquare: '\u25aa', blacksquare: '\u25aa', squarf: '\u25aa', squf: '\u25aa', Fopf: '\ud835\udd3d', ForAll: '\u2200', forall: '\u2200', Fouriertrf: '\u2131', Fscr: '\u2131', GJcy: '\u0403', GT: '>', gt: '>', Gamma: '\u0393', Gammad: '\u03dc', Gbreve: '\u011e', Gcedil: '\u0122', Gcirc: '\u011c', Gcy: '\u0413', Gdot: '\u0120', Gfr: '\ud835\udd0a', Gg: '\u22d9', ggg: '\u22d9', Gopf: '\ud835\udd3e', GreaterEqual: '\u2265', ge: '\u2265', geq: '\u2265', GreaterEqualLess: '\u22db', gel: '\u22db', gtreqless: '\u22db', GreaterFullEqual: '\u2267', gE: '\u2267', geqq: '\u2267', GreaterGreater: '\u2aa2', GreaterLess: '\u2277', gl: '\u2277', gtrless: '\u2277', GreaterSlantEqual: '\u2a7e', geqslant: '\u2a7e', ges: '\u2a7e', GreaterTilde: '\u2273', gsim: '\u2273', gtrsim: '\u2273', Gscr: '\ud835\udca2', Gt: '\u226b', NestedGreaterGreater: '\u226b', gg: '\u226b', HARDcy: '\u042a', Hacek: '\u02c7', caron: '\u02c7', Hat: '^', Hcirc: '\u0124', Hfr: '\u210c', Poincareplane: '\u210c', HilbertSpace: '\u210b', Hscr: '\u210b', hamilt: '\u210b', Hopf: '\u210d', quaternions: '\u210d', HorizontalLine: '\u2500', boxh: '\u2500', Hstrok: '\u0126', HumpEqual: '\u224f', bumpe: '\u224f', bumpeq: '\u224f', IEcy: '\u0415', IJlig: '\u0132', IOcy: '\u0401', Iacute: '\xcd', Icirc: '\xce', Icy: '\u0418', Idot: '\u0130', Ifr: '\u2111', Im: '\u2111', image: '\u2111', imagpart: '\u2111', Igrave: '\xcc', Imacr: '\u012a', ImaginaryI: '\u2148', ii: '\u2148', Int: '\u222c', Integral: '\u222b', int: '\u222b', Intersection: '\u22c2', bigcap: '\u22c2', xcap: '\u22c2', InvisibleComma: '\u2063', ic: '\u2063', InvisibleTimes: '\u2062', it: '\u2062', Iogon: '\u012e', Iopf: '\ud835\udd40', Iota: '\u0399', Iscr: '\u2110', imagline: '\u2110', Itilde: '\u0128', Iukcy: '\u0406', Iuml: '\xcf', Jcirc: '\u0134', Jcy: '\u0419', Jfr: '\ud835\udd0d', Jopf: '\ud835\udd41', Jscr: '\ud835\udca5', Jsercy: '\u0408', Jukcy: '\u0404', KHcy: '\u0425', KJcy: '\u040c', Kappa: '\u039a', Kcedil: '\u0136', Kcy: '\u041a', Kfr: '\ud835\udd0e', Kopf: '\ud835\udd42', Kscr: '\ud835\udca6', LJcy: '\u0409', LT: '<', lt: '<', Lacute: '\u0139', Lambda: '\u039b', Lang: '\u27ea', Laplacetrf: '\u2112', Lscr: '\u2112', lagran: '\u2112', Larr: '\u219e', twoheadleftarrow: '\u219e', Lcaron: '\u013d', Lcedil: '\u013b', Lcy: '\u041b', LeftAngleBracket: '\u27e8', lang: '\u27e8', langle: '\u27e8', LeftArrow: '\u2190', ShortLeftArrow: '\u2190', larr: '\u2190', leftarrow: '\u2190', slarr: '\u2190', LeftArrowBar: '\u21e4', larrb: '\u21e4', LeftArrowRightArrow: '\u21c6', leftrightarrows: '\u21c6', lrarr: '\u21c6', LeftCeiling: '\u2308', lceil: '\u2308', LeftDoubleBracket: '\u27e6', lobrk: '\u27e6', LeftDownTeeVector: '\u2961', LeftDownVector: '\u21c3', dharl: '\u21c3', downharpoonleft: '\u21c3', LeftDownVectorBar: '\u2959', LeftFloor: '\u230a', lfloor: '\u230a', LeftRightArrow: '\u2194', harr: '\u2194', leftrightarrow: '\u2194', LeftRightVector: '\u294e', LeftTee: '\u22a3', dashv: '\u22a3', LeftTeeArrow: '\u21a4', mapstoleft: '\u21a4', LeftTeeVector: '\u295a', LeftTriangle: '\u22b2', vartriangleleft: '\u22b2', vltri: '\u22b2', LeftTriangleBar: '\u29cf', LeftTriangleEqual: '\u22b4', ltrie: '\u22b4', trianglelefteq: '\u22b4', LeftUpDownVector: '\u2951', LeftUpTeeVector: '\u2960', LeftUpVector: '\u21bf', uharl: '\u21bf', upharpoonleft: '\u21bf', LeftUpVectorBar: '\u2958', LeftVector: '\u21bc', leftharpoonup: '\u21bc', lharu: '\u21bc', LeftVectorBar: '\u2952', LessEqualGreater: '\u22da', leg: '\u22da', lesseqgtr: '\u22da', LessFullEqual: '\u2266', lE: '\u2266', leqq: '\u2266', LessGreater: '\u2276', lessgtr: '\u2276', lg: '\u2276', LessLess: '\u2aa1', LessSlantEqual: '\u2a7d', leqslant: '\u2a7d', les: '\u2a7d', LessTilde: '\u2272', lesssim: '\u2272', lsim: '\u2272', Lfr: '\ud835\udd0f', Ll: '\u22d8', Lleftarrow: '\u21da', lAarr: '\u21da', Lmidot: '\u013f', LongLeftArrow: '\u27f5', longleftarrow: '\u27f5', xlarr: '\u27f5', LongLeftRightArrow: '\u27f7', longleftrightarrow: '\u27f7', xharr: '\u27f7', LongRightArrow: '\u27f6', longrightarrow: '\u27f6', xrarr: '\u27f6', Lopf: '\ud835\udd43', LowerLeftArrow: '\u2199', swarr: '\u2199', swarrow: '\u2199', LowerRightArrow: '\u2198', searr: '\u2198', searrow: '\u2198', Lsh: '\u21b0', lsh: '\u21b0', Lstrok: '\u0141', Lt: '\u226a', NestedLessLess: '\u226a', ll: '\u226a', Map: '\u2905', Mcy: '\u041c', MediumSpace: '\u205f', Mellintrf: '\u2133', Mscr: '\u2133', phmmat: '\u2133', Mfr: '\ud835\udd10', MinusPlus: '\u2213', mnplus: '\u2213', mp: '\u2213', Mopf: '\ud835\udd44', Mu: '\u039c', NJcy: '\u040a', Nacute: '\u0143', Ncaron: '\u0147', Ncedil: '\u0145', Ncy: '\u041d', NegativeMediumSpace: '\u200b', NegativeThickSpace: '\u200b', NegativeThinSpace: '\u200b', NegativeVeryThinSpace: '\u200b', ZeroWidthSpace: '\u200b', NewLine: '\n', Nfr: '\ud835\udd11', NoBreak: '\u2060', NonBreakingSpace: '\xa0', nbsp: '\xa0', Nopf: '\u2115', naturals: '\u2115', Not: '\u2aec', NotCongruent: '\u2262', nequiv: '\u2262', NotCupCap: '\u226d', NotDoubleVerticalBar: '\u2226', npar: '\u2226', nparallel: '\u2226', nshortparallel: '\u2226', nspar: '\u2226', NotElement: '\u2209', notin: '\u2209', notinva: '\u2209', NotEqual: '\u2260', ne: '\u2260', NotEqualTilde: '\u2242\u0338', nesim: '\u2242\u0338', NotExists: '\u2204', nexist: '\u2204', nexists: '\u2204', NotGreater: '\u226f', ngt: '\u226f', ngtr: '\u226f', NotGreaterEqual: '\u2271', nge: '\u2271', ngeq: '\u2271', NotGreaterFullEqual: '\u2267\u0338', ngE: '\u2267\u0338', ngeqq: '\u2267\u0338', NotGreaterGreater: '\u226b\u0338', nGtv: '\u226b\u0338', NotGreaterLess: '\u2279', ntgl: '\u2279', NotGreaterSlantEqual: '\u2a7e\u0338', ngeqslant: '\u2a7e\u0338', nges: '\u2a7e\u0338', NotGreaterTilde: '\u2275', ngsim: '\u2275', NotHumpDownHump: '\u224e\u0338', nbump: '\u224e\u0338', NotHumpEqual: '\u224f\u0338', nbumpe: '\u224f\u0338', NotLeftTriangle: '\u22ea', nltri: '\u22ea', ntriangleleft: '\u22ea', NotLeftTriangleBar: '\u29cf\u0338', NotLeftTriangleEqual: '\u22ec', nltrie: '\u22ec', ntrianglelefteq: '\u22ec', NotLess: '\u226e', nless: '\u226e', nlt: '\u226e', NotLessEqual: '\u2270', nle: '\u2270', nleq: '\u2270', NotLessGreater: '\u2278', ntlg: '\u2278', NotLessLess: '\u226a\u0338', nLtv: '\u226a\u0338', NotLessSlantEqual: '\u2a7d\u0338', nleqslant: '\u2a7d\u0338', nles: '\u2a7d\u0338', NotLessTilde: '\u2274', nlsim: '\u2274', NotNestedGreaterGreater: '\u2aa2\u0338', NotNestedLessLess: '\u2aa1\u0338', NotPrecedes: '\u2280', npr: '\u2280', nprec: '\u2280', NotPrecedesEqual: '\u2aaf\u0338', npre: '\u2aaf\u0338', npreceq: '\u2aaf\u0338', NotPrecedesSlantEqual: '\u22e0', nprcue: '\u22e0', NotReverseElement: '\u220c', notni: '\u220c', notniva: '\u220c', NotRightTriangle: '\u22eb', nrtri: '\u22eb', ntriangleright: '\u22eb', NotRightTriangleBar: '\u29d0\u0338', NotRightTriangleEqual: '\u22ed', nrtrie: '\u22ed', ntrianglerighteq: '\u22ed', NotSquareSubset: '\u228f\u0338', NotSquareSubsetEqual: '\u22e2', nsqsube: '\u22e2', NotSquareSuperset: '\u2290\u0338', NotSquareSupersetEqual: '\u22e3', nsqsupe: '\u22e3', NotSubset: '\u2282\u20d2', nsubset: '\u2282\u20d2', vnsub: '\u2282\u20d2', NotSubsetEqual: '\u2288', nsube: '\u2288', nsubseteq: '\u2288', NotSucceeds: '\u2281', nsc: '\u2281', nsucc: '\u2281', NotSucceedsEqual: '\u2ab0\u0338', nsce: '\u2ab0\u0338', nsucceq: '\u2ab0\u0338', NotSucceedsSlantEqual: '\u22e1', nsccue: '\u22e1', NotSucceedsTilde: '\u227f\u0338', NotSuperset: '\u2283\u20d2', nsupset: '\u2283\u20d2', vnsup: '\u2283\u20d2', NotSupersetEqual: '\u2289', nsupe: '\u2289', nsupseteq: '\u2289', NotTilde: '\u2241', nsim: '\u2241', NotTildeEqual: '\u2244', nsime: '\u2244', nsimeq: '\u2244', NotTildeFullEqual: '\u2247', ncong: '\u2247', NotTildeTilde: '\u2249', nap: '\u2249', napprox: '\u2249', NotVerticalBar: '\u2224', nmid: '\u2224', nshortmid: '\u2224', nsmid: '\u2224', Nscr: '\ud835\udca9', Ntilde: '\xd1', Nu: '\u039d', OElig: '\u0152', Oacute: '\xd3', Ocirc: '\xd4', Ocy: '\u041e', Odblac: '\u0150', Ofr: '\ud835\udd12', Ograve: '\xd2', Omacr: '\u014c', Omega: '\u03a9', ohm: '\u03a9', Omicron: '\u039f', Oopf: '\ud835\udd46', OpenCurlyDoubleQuote: '\u201c', ldquo: '\u201c', OpenCurlyQuote: '\u2018', lsquo: '\u2018', Or: '\u2a54', Oscr: '\ud835\udcaa', Oslash: '\xd8', Otilde: '\xd5', Otimes: '\u2a37', Ouml: '\xd6', OverBar: '\u203e', oline: '\u203e', OverBrace: '\u23de', OverBracket: '\u23b4', tbrk: '\u23b4', OverParenthesis: '\u23dc', PartialD: '\u2202', part: '\u2202', Pcy: '\u041f', Pfr: '\ud835\udd13', Phi: '\u03a6', Pi: '\u03a0', PlusMinus: '\xb1', plusmn: '\xb1', pm: '\xb1', Popf: '\u2119', primes: '\u2119', Pr: '\u2abb', Precedes: '\u227a', pr: '\u227a', prec: '\u227a', PrecedesEqual: '\u2aaf', pre: '\u2aaf', preceq: '\u2aaf', PrecedesSlantEqual: '\u227c', prcue: '\u227c', preccurlyeq: '\u227c', PrecedesTilde: '\u227e', precsim: '\u227e', prsim: '\u227e', Prime: '\u2033', Product: '\u220f', prod: '\u220f', Proportional: '\u221d', prop: '\u221d', propto: '\u221d', varpropto: '\u221d', vprop: '\u221d', Pscr: '\ud835\udcab', Psi: '\u03a8', QUOT: '"', quot: '"', Qfr: '\ud835\udd14', Qopf: '\u211a', rationals: '\u211a', Qscr: '\ud835\udcac', RBarr: '\u2910', drbkarow: '\u2910', REG: '\xae', circledR: '\xae', reg: '\xae', Racute: '\u0154', Rang: '\u27eb', Rarr: '\u21a0', twoheadrightarrow: '\u21a0', Rarrtl: '\u2916', Rcaron: '\u0158', Rcedil: '\u0156', Rcy: '\u0420', Re: '\u211c', Rfr: '\u211c', real: '\u211c', realpart: '\u211c', ReverseElement: '\u220b', SuchThat: '\u220b', ni: '\u220b', niv: '\u220b', ReverseEquilibrium: '\u21cb', leftrightharpoons: '\u21cb', lrhar: '\u21cb', ReverseUpEquilibrium: '\u296f', duhar: '\u296f', Rho: '\u03a1', RightAngleBracket: '\u27e9', rang: '\u27e9', rangle: '\u27e9', RightArrow: '\u2192', ShortRightArrow: '\u2192', rarr: '\u2192', rightarrow: '\u2192', srarr: '\u2192', RightArrowBar: '\u21e5', rarrb: '\u21e5', RightArrowLeftArrow: '\u21c4', rightleftarrows: '\u21c4', rlarr: '\u21c4', RightCeiling: '\u2309', rceil: '\u2309', RightDoubleBracket: '\u27e7', robrk: '\u27e7', RightDownTeeVector: '\u295d', RightDownVector: '\u21c2', dharr: '\u21c2', downharpoonright: '\u21c2', RightDownVectorBar: '\u2955', RightFloor: '\u230b', rfloor: '\u230b', RightTee: '\u22a2', vdash: '\u22a2', RightTeeArrow: '\u21a6', map: '\u21a6', mapsto: '\u21a6', RightTeeVector: '\u295b', RightTriangle: '\u22b3', vartriangleright: '\u22b3', vrtri: '\u22b3', RightTriangleBar: '\u29d0', RightTriangleEqual: '\u22b5', rtrie: '\u22b5', trianglerighteq: '\u22b5', RightUpDownVector: '\u294f', RightUpTeeVector: '\u295c', RightUpVector: '\u21be', uharr: '\u21be', upharpoonright: '\u21be', RightUpVectorBar: '\u2954', RightVector: '\u21c0', rharu: '\u21c0', rightharpoonup: '\u21c0', RightVectorBar: '\u2953', Ropf: '\u211d', reals: '\u211d', RoundImplies: '\u2970', Rrightarrow: '\u21db', rAarr: '\u21db', Rscr: '\u211b', realine: '\u211b', Rsh: '\u21b1', rsh: '\u21b1', RuleDelayed: '\u29f4', SHCHcy: '\u0429', SHcy: '\u0428', SOFTcy: '\u042c', Sacute: '\u015a', Sc: '\u2abc', Scaron: '\u0160', Scedil: '\u015e', Scirc: '\u015c', Scy: '\u0421', Sfr: '\ud835\udd16', ShortUpArrow: '\u2191', UpArrow: '\u2191', uarr: '\u2191', uparrow: '\u2191', Sigma: '\u03a3', SmallCircle: '\u2218', compfn: '\u2218', Sopf: '\ud835\udd4a', Sqrt: '\u221a', radic: '\u221a', Square: '\u25a1', squ: '\u25a1', square: '\u25a1', SquareIntersection: '\u2293', sqcap: '\u2293', SquareSubset: '\u228f', sqsub: '\u228f', sqsubset: '\u228f', SquareSubsetEqual: '\u2291', sqsube: '\u2291', sqsubseteq: '\u2291', SquareSuperset: '\u2290', sqsup: '\u2290', sqsupset: '\u2290', SquareSupersetEqual: '\u2292', sqsupe: '\u2292', sqsupseteq: '\u2292', SquareUnion: '\u2294', sqcup: '\u2294', Sscr: '\ud835\udcae', Star: '\u22c6', sstarf: '\u22c6', Sub: '\u22d0', Subset: '\u22d0', SubsetEqual: '\u2286', sube: '\u2286', subseteq: '\u2286', Succeeds: '\u227b', sc: '\u227b', succ: '\u227b', SucceedsEqual: '\u2ab0', sce: '\u2ab0', succeq: '\u2ab0', SucceedsSlantEqual: '\u227d', sccue: '\u227d', succcurlyeq: '\u227d', SucceedsTilde: '\u227f', scsim: '\u227f', succsim: '\u227f', Sum: '\u2211', sum: '\u2211', Sup: '\u22d1', Supset: '\u22d1', Superset: '\u2283', sup: '\u2283', supset: '\u2283', SupersetEqual: '\u2287', supe: '\u2287', supseteq: '\u2287', THORN: '\xde', TRADE: '\u2122', trade: '\u2122', TSHcy: '\u040b', TScy: '\u0426', Tab: '\t', Tau: '\u03a4', Tcaron: '\u0164', Tcedil: '\u0162', Tcy: '\u0422', Tfr: '\ud835\udd17', Therefore: '\u2234', there4: '\u2234', therefore: '\u2234', Theta: '\u0398', ThickSpace: '\u205f\u200a', ThinSpace: '\u2009', thinsp: '\u2009', Tilde: '\u223c', sim: '\u223c', thicksim: '\u223c', thksim: '\u223c', TildeEqual: '\u2243', sime: '\u2243', simeq: '\u2243', TildeFullEqual: '\u2245', cong: '\u2245', TildeTilde: '\u2248', ap: '\u2248', approx: '\u2248', asymp: '\u2248', thickapprox: '\u2248', thkap: '\u2248', Topf: '\ud835\udd4b', TripleDot: '\u20db', tdot: '\u20db', Tscr: '\ud835\udcaf', Tstrok: '\u0166', Uacute: '\xda', Uarr: '\u219f', Uarrocir: '\u2949', Ubrcy: '\u040e', Ubreve: '\u016c', Ucirc: '\xdb', Ucy: '\u0423', Udblac: '\u0170', Ufr: '\ud835\udd18', Ugrave: '\xd9', Umacr: '\u016a', UnderBar: '_', lowbar: '_', UnderBrace: '\u23df', UnderBracket: '\u23b5', bbrk: '\u23b5', UnderParenthesis: '\u23dd', Union: '\u22c3', bigcup: '\u22c3', xcup: '\u22c3', UnionPlus: '\u228e', uplus: '\u228e', Uogon: '\u0172', Uopf: '\ud835\udd4c', UpArrowBar: '\u2912', UpArrowDownArrow: '\u21c5', udarr: '\u21c5', UpDownArrow: '\u2195', updownarrow: '\u2195', varr: '\u2195', UpEquilibrium: '\u296e', udhar: '\u296e', UpTee: '\u22a5', bot: '\u22a5', bottom: '\u22a5', perp: '\u22a5', UpTeeArrow: '\u21a5', mapstoup: '\u21a5', UpperLeftArrow: '\u2196', nwarr: '\u2196', nwarrow: '\u2196', UpperRightArrow: '\u2197', nearr: '\u2197', nearrow: '\u2197', Upsi: '\u03d2', upsih: '\u03d2', Upsilon: '\u03a5', Uring: '\u016e', Uscr: '\ud835\udcb0', Utilde: '\u0168', Uuml: '\xdc', VDash: '\u22ab', Vbar: '\u2aeb', Vcy: '\u0412', Vdash: '\u22a9', Vdashl: '\u2ae6', Vee: '\u22c1', bigvee: '\u22c1', xvee: '\u22c1', Verbar: '\u2016', Vert: '\u2016', VerticalBar: '\u2223', mid: '\u2223', shortmid: '\u2223', smid: '\u2223', VerticalLine: '|', verbar: '|', vert: '|', VerticalSeparator: '\u2758', VerticalTilde: '\u2240', wr: '\u2240', wreath: '\u2240', VeryThinSpace: '\u200a', hairsp: '\u200a', Vfr: '\ud835\udd19', Vopf: '\ud835\udd4d', Vscr: '\ud835\udcb1', Vvdash: '\u22aa', Wcirc: '\u0174', Wedge: '\u22c0', bigwedge: '\u22c0', xwedge: '\u22c0', Wfr: '\ud835\udd1a', Wopf: '\ud835\udd4e', Wscr: '\ud835\udcb2', Xfr: '\ud835\udd1b', Xi: '\u039e', Xopf: '\ud835\udd4f', Xscr: '\ud835\udcb3', YAcy: '\u042f', YIcy: '\u0407', YUcy: '\u042e', Yacute: '\xdd', Ycirc: '\u0176', Ycy: '\u042b', Yfr: '\ud835\udd1c', Yopf: '\ud835\udd50', Yscr: '\ud835\udcb4', Yuml: '\u0178', ZHcy: '\u0416', Zacute: '\u0179', Zcaron: '\u017d', Zcy: '\u0417', Zdot: '\u017b', Zeta: '\u0396', Zfr: '\u2128', zeetrf: '\u2128', Zopf: '\u2124', integers: '\u2124', Zscr: '\ud835\udcb5', aacute: '\xe1', abreve: '\u0103', ac: '\u223e', mstpos: '\u223e', acE: '\u223e\u0333', acd: '\u223f', acirc: '\xe2', acy: '\u0430', aelig: '\xe6', afr: '\ud835\udd1e', agrave: '\xe0', alefsym: '\u2135', aleph: '\u2135', alpha: '\u03b1', amacr: '\u0101', amalg: '\u2a3f', and: '\u2227', wedge: '\u2227', andand: '\u2a55', andd: '\u2a5c', andslope: '\u2a58', andv: '\u2a5a', ang: '\u2220', angle: '\u2220', ange: '\u29a4', angmsd: '\u2221', measuredangle: '\u2221', angmsdaa: '\u29a8', angmsdab: '\u29a9', angmsdac: '\u29aa', angmsdad: '\u29ab', angmsdae: '\u29ac', angmsdaf: '\u29ad', angmsdag: '\u29ae', angmsdah: '\u29af', angrt: '\u221f', angrtvb: '\u22be', angrtvbd: '\u299d', angsph: '\u2222', angzarr: '\u237c', aogon: '\u0105', aopf: '\ud835\udd52', apE: '\u2a70', apacir: '\u2a6f', ape: '\u224a', approxeq: '\u224a', apid: '\u224b', apos: "'", aring: '\xe5', ascr: '\ud835\udcb6', ast: '*', midast: '*', atilde: '\xe3', auml: '\xe4', awint: '\u2a11', bNot: '\u2aed', backcong: '\u224c', bcong: '\u224c', backepsilon: '\u03f6', bepsi: '\u03f6', backprime: '\u2035', bprime: '\u2035', backsim: '\u223d', bsim: '\u223d', backsimeq: '\u22cd', bsime: '\u22cd', barvee: '\u22bd', barwed: '\u2305', barwedge: '\u2305', bbrktbrk: '\u23b6', bcy: '\u0431', bdquo: '\u201e', ldquor: '\u201e', bemptyv: '\u29b0', beta: '\u03b2', beth: '\u2136', between: '\u226c', twixt: '\u226c', bfr: '\ud835\udd1f', bigcirc: '\u25ef', xcirc: '\u25ef', bigodot: '\u2a00', xodot: '\u2a00', bigoplus: '\u2a01', xoplus: '\u2a01', bigotimes: '\u2a02', xotime: '\u2a02', bigsqcup: '\u2a06', xsqcup: '\u2a06', bigstar: '\u2605', starf: '\u2605', bigtriangledown: '\u25bd', xdtri: '\u25bd', bigtriangleup: '\u25b3', xutri: '\u25b3', biguplus: '\u2a04', xuplus: '\u2a04', bkarow: '\u290d', rbarr: '\u290d', blacklozenge: '\u29eb', lozf: '\u29eb', blacktriangle: '\u25b4', utrif: '\u25b4', blacktriangledown: '\u25be', dtrif: '\u25be', blacktriangleleft: '\u25c2', ltrif: '\u25c2', blacktriangleright: '\u25b8', rtrif: '\u25b8', blank: '\u2423', blk12: '\u2592', blk14: '\u2591', blk34: '\u2593', block: '\u2588', bne: '=\u20e5', bnequiv: '\u2261\u20e5', bnot: '\u2310', bopf: '\ud835\udd53', bowtie: '\u22c8', boxDL: '\u2557', boxDR: '\u2554', boxDl: '\u2556', boxDr: '\u2553', boxH: '\u2550', boxHD: '\u2566', boxHU: '\u2569', boxHd: '\u2564', boxHu: '\u2567', boxUL: '\u255d', boxUR: '\u255a', boxUl: '\u255c', boxUr: '\u2559', boxV: '\u2551', boxVH: '\u256c', boxVL: '\u2563', boxVR: '\u2560', boxVh: '\u256b', boxVl: '\u2562', boxVr: '\u255f', boxbox: '\u29c9', boxdL: '\u2555', boxdR: '\u2552', boxdl: '\u2510', boxdr: '\u250c', boxhD: '\u2565', boxhU: '\u2568', boxhd: '\u252c', boxhu: '\u2534', boxminus: '\u229f', minusb: '\u229f', boxplus: '\u229e', plusb: '\u229e', boxtimes: '\u22a0', timesb: '\u22a0', boxuL: '\u255b', boxuR: '\u2558', boxul: '\u2518', boxur: '\u2514', boxv: '\u2502', boxvH: '\u256a', boxvL: '\u2561', boxvR: '\u255e', boxvh: '\u253c', boxvl: '\u2524', boxvr: '\u251c', brvbar: '\xa6', bscr: '\ud835\udcb7', bsemi: '\u204f', bsol: '\\', bsolb: '\u29c5', bsolhsub: '\u27c8', bull: '\u2022', bullet: '\u2022', bumpE: '\u2aae', cacute: '\u0107', cap: '\u2229', capand: '\u2a44', capbrcup: '\u2a49', capcap: '\u2a4b', capcup: '\u2a47', capdot: '\u2a40', caps: '\u2229\ufe00', caret: '\u2041', ccaps: '\u2a4d', ccaron: '\u010d', ccedil: '\xe7', ccirc: '\u0109', ccups: '\u2a4c', ccupssm: '\u2a50', cdot: '\u010b', cemptyv: '\u29b2', cent: '\xa2', cfr: '\ud835\udd20', chcy: '\u0447', check: '\u2713', checkmark: '\u2713', chi: '\u03c7', cir: '\u25cb', cirE: '\u29c3', circ: '\u02c6', circeq: '\u2257', cire: '\u2257', circlearrowleft: '\u21ba', olarr: '\u21ba', circlearrowright: '\u21bb', orarr: '\u21bb', circledS: '\u24c8', oS: '\u24c8', circledast: '\u229b', oast: '\u229b', circledcirc: '\u229a', ocir: '\u229a', circleddash: '\u229d', odash: '\u229d', cirfnint: '\u2a10', cirmid: '\u2aef', cirscir: '\u29c2', clubs: '\u2663', clubsuit: '\u2663', colon: ':', comma: ',', commat: '@', comp: '\u2201', complement: '\u2201', congdot: '\u2a6d', copf: '\ud835\udd54', copysr: '\u2117', crarr: '\u21b5', cross: '\u2717', cscr: '\ud835\udcb8', csub: '\u2acf', csube: '\u2ad1', csup: '\u2ad0', csupe: '\u2ad2', ctdot: '\u22ef', cudarrl: '\u2938', cudarrr: '\u2935', cuepr: '\u22de', curlyeqprec: '\u22de', cuesc: '\u22df', curlyeqsucc: '\u22df', cularr: '\u21b6', curvearrowleft: '\u21b6', cularrp: '\u293d', cup: '\u222a', cupbrcap: '\u2a48', cupcap: '\u2a46', cupcup: '\u2a4a', cupdot: '\u228d', cupor: '\u2a45', cups: '\u222a\ufe00', curarr: '\u21b7', curvearrowright: '\u21b7', curarrm: '\u293c', curlyvee: '\u22ce', cuvee: '\u22ce', curlywedge: '\u22cf', cuwed: '\u22cf', curren: '\xa4', cwint: '\u2231', cylcty: '\u232d', dHar: '\u2965', dagger: '\u2020', daleth: '\u2138', dash: '\u2010', hyphen: '\u2010', dbkarow: '\u290f', rBarr: '\u290f', dcaron: '\u010f', dcy: '\u0434', ddarr: '\u21ca', downdownarrows: '\u21ca', ddotseq: '\u2a77', eDDot: '\u2a77', deg: '\xb0', delta: '\u03b4', demptyv: '\u29b1', dfisht: '\u297f', dfr: '\ud835\udd21', diamondsuit: '\u2666', diams: '\u2666', digamma: '\u03dd', gammad: '\u03dd', disin: '\u22f2', div: '\xf7', divide: '\xf7', divideontimes: '\u22c7', divonx: '\u22c7', djcy: '\u0452', dlcorn: '\u231e', llcorner: '\u231e', dlcrop: '\u230d', dollar: '$', dopf: '\ud835\udd55', doteqdot: '\u2251', eDot: '\u2251', dotminus: '\u2238', minusd: '\u2238', dotplus: '\u2214', plusdo: '\u2214', dotsquare: '\u22a1', sdotb: '\u22a1', drcorn: '\u231f', lrcorner: '\u231f', drcrop: '\u230c', dscr: '\ud835\udcb9', dscy: '\u0455', dsol: '\u29f6', dstrok: '\u0111', dtdot: '\u22f1', dtri: '\u25bf', triangledown: '\u25bf', dwangle: '\u29a6', dzcy: '\u045f', dzigrarr: '\u27ff', eacute: '\xe9', easter: '\u2a6e', ecaron: '\u011b', ecir: '\u2256', eqcirc: '\u2256', ecirc: '\xea', ecolon: '\u2255', eqcolon: '\u2255', ecy: '\u044d', edot: '\u0117', efDot: '\u2252', fallingdotseq: '\u2252', efr: '\ud835\udd22', eg: '\u2a9a', egrave: '\xe8', egs: '\u2a96', eqslantgtr: '\u2a96', egsdot: '\u2a98', el: '\u2a99', elinters: '\u23e7', ell: '\u2113', els: '\u2a95', eqslantless: '\u2a95', elsdot: '\u2a97', emacr: '\u0113', empty: '\u2205', emptyset: '\u2205', emptyv: '\u2205', varnothing: '\u2205', emsp13: '\u2004', emsp14: '\u2005', emsp: '\u2003', eng: '\u014b', ensp: '\u2002', eogon: '\u0119', eopf: '\ud835\udd56', epar: '\u22d5', eparsl: '\u29e3', eplus: '\u2a71', epsi: '\u03b5', epsilon: '\u03b5', epsiv: '\u03f5', straightepsilon: '\u03f5', varepsilon: '\u03f5', equals: '=', equest: '\u225f', questeq: '\u225f', equivDD: '\u2a78', eqvparsl: '\u29e5', erDot: '\u2253', risingdotseq: '\u2253', erarr: '\u2971', escr: '\u212f', eta: '\u03b7', eth: '\xf0', euml: '\xeb', euro: '\u20ac', excl: '!', fcy: '\u0444', female: '\u2640', ffilig: '\ufb03', fflig: '\ufb00', ffllig: '\ufb04', ffr: '\ud835\udd23', filig: '\ufb01', fjlig: 'fj', flat: '\u266d', fllig: '\ufb02', fltns: '\u25b1', fnof: '\u0192', fopf: '\ud835\udd57', fork: '\u22d4', pitchfork: '\u22d4', forkv: '\u2ad9', fpartint: '\u2a0d', frac12: '\xbd', half: '\xbd', frac13: '\u2153', frac14: '\xbc', frac15: '\u2155', frac16: '\u2159', frac18: '\u215b', frac23: '\u2154', frac25: '\u2156', frac34: '\xbe', frac35: '\u2157', frac38: '\u215c', frac45: '\u2158', frac56: '\u215a', frac58: '\u215d', frac78: '\u215e', frasl: '\u2044', frown: '\u2322', sfrown: '\u2322', fscr: '\ud835\udcbb', gEl: '\u2a8c', gtreqqless: '\u2a8c', gacute: '\u01f5', gamma: '\u03b3', gap: '\u2a86', gtrapprox: '\u2a86', gbreve: '\u011f', gcirc: '\u011d', gcy: '\u0433', gdot: '\u0121', gescc: '\u2aa9', gesdot: '\u2a80', gesdoto: '\u2a82', gesdotol: '\u2a84', gesl: '\u22db\ufe00', gesles: '\u2a94', gfr: '\ud835\udd24', gimel: '\u2137', gjcy: '\u0453', glE: '\u2a92', gla: '\u2aa5', glj: '\u2aa4', gnE: '\u2269', gneqq: '\u2269', gnap: '\u2a8a', gnapprox: '\u2a8a', gne: '\u2a88', gneq: '\u2a88', gnsim: '\u22e7', gopf: '\ud835\udd58', gscr: '\u210a', gsime: '\u2a8e', gsiml: '\u2a90', gtcc: '\u2aa7', gtcir: '\u2a7a', gtdot: '\u22d7', gtrdot: '\u22d7', gtlPar: '\u2995', gtquest: '\u2a7c', gtrarr: '\u2978', gvertneqq: '\u2269\ufe00', gvnE: '\u2269\ufe00', hardcy: '\u044a', harrcir: '\u2948', harrw: '\u21ad', leftrightsquigarrow: '\u21ad', hbar: '\u210f', hslash: '\u210f', planck: '\u210f', plankv: '\u210f', hcirc: '\u0125', hearts: '\u2665', heartsuit: '\u2665', hellip: '\u2026', mldr: '\u2026', hercon: '\u22b9', hfr: '\ud835\udd25', hksearow: '\u2925', searhk: '\u2925', hkswarow: '\u2926', swarhk: '\u2926', hoarr: '\u21ff', homtht: '\u223b', hookleftarrow: '\u21a9', larrhk: '\u21a9', hookrightarrow: '\u21aa', rarrhk: '\u21aa', hopf: '\ud835\udd59', horbar: '\u2015', hscr: '\ud835\udcbd', hstrok: '\u0127', hybull: '\u2043', iacute: '\xed', icirc: '\xee', icy: '\u0438', iecy: '\u0435', iexcl: '\xa1', ifr: '\ud835\udd26', igrave: '\xec', iiiint: '\u2a0c', qint: '\u2a0c', iiint: '\u222d', tint: '\u222d', iinfin: '\u29dc', iiota: '\u2129', ijlig: '\u0133', imacr: '\u012b', imath: '\u0131', inodot: '\u0131', imof: '\u22b7', imped: '\u01b5', incare: '\u2105', infin: '\u221e', infintie: '\u29dd', intcal: '\u22ba', intercal: '\u22ba', intlarhk: '\u2a17', intprod: '\u2a3c', iprod: '\u2a3c', iocy: '\u0451', iogon: '\u012f', iopf: '\ud835\udd5a', iota: '\u03b9', iquest: '\xbf', iscr: '\ud835\udcbe', isinE: '\u22f9', isindot: '\u22f5', isins: '\u22f4', isinsv: '\u22f3', itilde: '\u0129', iukcy: '\u0456', iuml: '\xef', jcirc: '\u0135', jcy: '\u0439', jfr: '\ud835\udd27', jmath: '\u0237', jopf: '\ud835\udd5b', jscr: '\ud835\udcbf', jsercy: '\u0458', jukcy: '\u0454', kappa: '\u03ba', kappav: '\u03f0', varkappa: '\u03f0', kcedil: '\u0137', kcy: '\u043a', kfr: '\ud835\udd28', kgreen: '\u0138', khcy: '\u0445', kjcy: '\u045c', kopf: '\ud835\udd5c', kscr: '\ud835\udcc0', lAtail: '\u291b', lBarr: '\u290e', lEg: '\u2a8b', lesseqqgtr: '\u2a8b', lHar: '\u2962', lacute: '\u013a', laemptyv: '\u29b4', lambda: '\u03bb', langd: '\u2991', lap: '\u2a85', lessapprox: '\u2a85', laquo: '\xab', larrbfs: '\u291f', larrfs: '\u291d', larrlp: '\u21ab', looparrowleft: '\u21ab', larrpl: '\u2939', larrsim: '\u2973', larrtl: '\u21a2', leftarrowtail: '\u21a2', lat: '\u2aab', latail: '\u2919', late: '\u2aad', lates: '\u2aad\ufe00', lbarr: '\u290c', lbbrk: '\u2772', lbrace: '{', lcub: '{', lbrack: '[', lsqb: '[', lbrke: '\u298b', lbrksld: '\u298f', lbrkslu: '\u298d', lcaron: '\u013e', lcedil: '\u013c', lcy: '\u043b', ldca: '\u2936', ldrdhar: '\u2967', ldrushar: '\u294b', ldsh: '\u21b2', le: '\u2264', leq: '\u2264', leftleftarrows: '\u21c7', llarr: '\u21c7', leftthreetimes: '\u22cb', lthree: '\u22cb', lescc: '\u2aa8', lesdot: '\u2a7f', lesdoto: '\u2a81', lesdotor: '\u2a83', lesg: '\u22da\ufe00', lesges: '\u2a93', lessdot: '\u22d6', ltdot: '\u22d6', lfisht: '\u297c', lfr: '\ud835\udd29', lgE: '\u2a91', lharul: '\u296a', lhblk: '\u2584', ljcy: '\u0459', llhard: '\u296b', lltri: '\u25fa', lmidot: '\u0140', lmoust: '\u23b0', lmoustache: '\u23b0', lnE: '\u2268', lneqq: '\u2268', lnap: '\u2a89', lnapprox: '\u2a89', lne: '\u2a87', lneq: '\u2a87', lnsim: '\u22e6', loang: '\u27ec', loarr: '\u21fd', longmapsto: '\u27fc', xmap: '\u27fc', looparrowright: '\u21ac', rarrlp: '\u21ac', lopar: '\u2985', lopf: '\ud835\udd5d', loplus: '\u2a2d', lotimes: '\u2a34', lowast: '\u2217', loz: '\u25ca', lozenge: '\u25ca', lpar: '(', lparlt: '\u2993', lrhard: '\u296d', lrm: '\u200e', lrtri: '\u22bf', lsaquo: '\u2039', lscr: '\ud835\udcc1', lsime: '\u2a8d', lsimg: '\u2a8f', lsquor: '\u201a', sbquo: '\u201a', lstrok: '\u0142', ltcc: '\u2aa6', ltcir: '\u2a79', ltimes: '\u22c9', ltlarr: '\u2976', ltquest: '\u2a7b', ltrPar: '\u2996', ltri: '\u25c3', triangleleft: '\u25c3', lurdshar: '\u294a', luruhar: '\u2966', lvertneqq: '\u2268\ufe00', lvnE: '\u2268\ufe00', mDDot: '\u223a', macr: '\xaf', strns: '\xaf', male: '\u2642', malt: '\u2720', maltese: '\u2720', marker: '\u25ae', mcomma: '\u2a29', mcy: '\u043c', mdash: '\u2014', mfr: '\ud835\udd2a', mho: '\u2127', micro: '\xb5', midcir: '\u2af0', minus: '\u2212', minusdu: '\u2a2a', mlcp: '\u2adb', models: '\u22a7', mopf: '\ud835\udd5e', mscr: '\ud835\udcc2', mu: '\u03bc', multimap: '\u22b8', mumap: '\u22b8', nGg: '\u22d9\u0338', nGt: '\u226b\u20d2', nLeftarrow: '\u21cd', nlArr: '\u21cd', nLeftrightarrow: '\u21ce', nhArr: '\u21ce', nLl: '\u22d8\u0338', nLt: '\u226a\u20d2', nRightarrow: '\u21cf', nrArr: '\u21cf', nVDash: '\u22af', nVdash: '\u22ae', nacute: '\u0144', nang: '\u2220\u20d2', napE: '\u2a70\u0338', napid: '\u224b\u0338', napos: '\u0149', natur: '\u266e', natural: '\u266e', ncap: '\u2a43', ncaron: '\u0148', ncedil: '\u0146', ncongdot: '\u2a6d\u0338', ncup: '\u2a42', ncy: '\u043d', ndash: '\u2013', neArr: '\u21d7', nearhk: '\u2924', nedot: '\u2250\u0338', nesear: '\u2928', toea: '\u2928', nfr: '\ud835\udd2b', nharr: '\u21ae', nleftrightarrow: '\u21ae', nhpar: '\u2af2', nis: '\u22fc', nisd: '\u22fa', njcy: '\u045a', nlE: '\u2266\u0338', nleqq: '\u2266\u0338', nlarr: '\u219a', nleftarrow: '\u219a', nldr: '\u2025', nopf: '\ud835\udd5f', not: '\xac', notinE: '\u22f9\u0338', notindot: '\u22f5\u0338', notinvb: '\u22f7', notinvc: '\u22f6', notnivb: '\u22fe', notnivc: '\u22fd', nparsl: '\u2afd\u20e5', npart: '\u2202\u0338', npolint: '\u2a14', nrarr: '\u219b', nrightarrow: '\u219b', nrarrc: '\u2933\u0338', nrarrw: '\u219d\u0338', nscr: '\ud835\udcc3', nsub: '\u2284', nsubE: '\u2ac5\u0338', nsubseteqq: '\u2ac5\u0338', nsup: '\u2285', nsupE: '\u2ac6\u0338', nsupseteqq: '\u2ac6\u0338', ntilde: '\xf1', nu: '\u03bd', num: '#', numero: '\u2116', numsp: '\u2007', nvDash: '\u22ad', nvHarr: '\u2904', nvap: '\u224d\u20d2', nvdash: '\u22ac', nvge: '\u2265\u20d2', nvgt: '>\u20d2', nvinfin: '\u29de', nvlArr: '\u2902', nvle: '\u2264\u20d2', nvlt: '<\u20d2', nvltrie: '\u22b4\u20d2', nvrArr: '\u2903', nvrtrie: '\u22b5\u20d2', nvsim: '\u223c\u20d2', nwArr: '\u21d6', nwarhk: '\u2923', nwnear: '\u2927', oacute: '\xf3', ocirc: '\xf4', ocy: '\u043e', odblac: '\u0151', odiv: '\u2a38', odsold: '\u29bc', oelig: '\u0153', ofcir: '\u29bf', ofr: '\ud835\udd2c', ogon: '\u02db', ograve: '\xf2', ogt: '\u29c1', ohbar: '\u29b5', olcir: '\u29be', olcross: '\u29bb', olt: '\u29c0', omacr: '\u014d', omega: '\u03c9', omicron: '\u03bf', omid: '\u29b6', oopf: '\ud835\udd60', opar: '\u29b7', operp: '\u29b9', or: '\u2228', vee: '\u2228', ord: '\u2a5d', order: '\u2134', orderof: '\u2134', oscr: '\u2134', ordf: '\xaa', ordm: '\xba', origof: '\u22b6', oror: '\u2a56', orslope: '\u2a57', orv: '\u2a5b', oslash: '\xf8', osol: '\u2298', otilde: '\xf5', otimesas: '\u2a36', ouml: '\xf6', ovbar: '\u233d', para: '\xb6', parsim: '\u2af3', parsl: '\u2afd', pcy: '\u043f', percnt: '%', period: '.', permil: '\u2030', pertenk: '\u2031', pfr: '\ud835\udd2d', phi: '\u03c6', phiv: '\u03d5', straightphi: '\u03d5', varphi: '\u03d5', phone: '\u260e', pi: '\u03c0', piv: '\u03d6', varpi: '\u03d6', planckh: '\u210e', plus: '+', plusacir: '\u2a23', pluscir: '\u2a22', plusdu: '\u2a25', pluse: '\u2a72', plussim: '\u2a26', plustwo: '\u2a27', pointint: '\u2a15', popf: '\ud835\udd61', pound: '\xa3', prE: '\u2ab3', prap: '\u2ab7', precapprox: '\u2ab7', precnapprox: '\u2ab9', prnap: '\u2ab9', precneqq: '\u2ab5', prnE: '\u2ab5', precnsim: '\u22e8', prnsim: '\u22e8', prime: '\u2032', profalar: '\u232e', profline: '\u2312', profsurf: '\u2313', prurel: '\u22b0', pscr: '\ud835\udcc5', psi: '\u03c8', puncsp: '\u2008', qfr: '\ud835\udd2e', qopf: '\ud835\udd62', qprime: '\u2057', qscr: '\ud835\udcc6', quatint: '\u2a16', quest: '?', rAtail: '\u291c', rHar: '\u2964', race: '\u223d\u0331', racute: '\u0155', raemptyv: '\u29b3', rangd: '\u2992', range: '\u29a5', raquo: '\xbb', rarrap: '\u2975', rarrbfs: '\u2920', rarrc: '\u2933', rarrfs: '\u291e', rarrpl: '\u2945', rarrsim: '\u2974', rarrtl: '\u21a3', rightarrowtail: '\u21a3', rarrw: '\u219d', rightsquigarrow: '\u219d', ratail: '\u291a', ratio: '\u2236', rbbrk: '\u2773', rbrace: '}', rcub: '}', rbrack: ']', rsqb: ']', rbrke: '\u298c', rbrksld: '\u298e', rbrkslu: '\u2990', rcaron: '\u0159', rcedil: '\u0157', rcy: '\u0440', rdca: '\u2937', rdldhar: '\u2969', rdsh: '\u21b3', rect: '\u25ad', rfisht: '\u297d', rfr: '\ud835\udd2f', rharul: '\u296c', rho: '\u03c1', rhov: '\u03f1', varrho: '\u03f1', rightrightarrows: '\u21c9', rrarr: '\u21c9', rightthreetimes: '\u22cc', rthree: '\u22cc', ring: '\u02da', rlm: '\u200f', rmoust: '\u23b1', rmoustache: '\u23b1', rnmid: '\u2aee', roang: '\u27ed', roarr: '\u21fe', ropar: '\u2986', ropf: '\ud835\udd63', roplus: '\u2a2e', rotimes: '\u2a35', rpar: ')', rpargt: '\u2994', rppolint: '\u2a12', rsaquo: '\u203a', rscr: '\ud835\udcc7', rtimes: '\u22ca', rtri: '\u25b9', triangleright: '\u25b9', rtriltri: '\u29ce', ruluhar: '\u2968', rx: '\u211e', sacute: '\u015b', scE: '\u2ab4', scap: '\u2ab8', succapprox: '\u2ab8', scaron: '\u0161', scedil: '\u015f', scirc: '\u015d', scnE: '\u2ab6', succneqq: '\u2ab6', scnap: '\u2aba', succnapprox: '\u2aba', scnsim: '\u22e9', succnsim: '\u22e9', scpolint: '\u2a13', scy: '\u0441', sdot: '\u22c5', sdote: '\u2a66', seArr: '\u21d8', sect: '\xa7', semi: ';', seswar: '\u2929', tosa: '\u2929', sext: '\u2736', sfr: '\ud835\udd30', sharp: '\u266f', shchcy: '\u0449', shcy: '\u0448', shy: '\xad', sigma: '\u03c3', sigmaf: '\u03c2', sigmav: '\u03c2', varsigma: '\u03c2', simdot: '\u2a6a', simg: '\u2a9e', simgE: '\u2aa0', siml: '\u2a9d', simlE: '\u2a9f', simne: '\u2246', simplus: '\u2a24', simrarr: '\u2972', smashp: '\u2a33', smeparsl: '\u29e4', smile: '\u2323', ssmile: '\u2323', smt: '\u2aaa', smte: '\u2aac', smtes: '\u2aac\ufe00', softcy: '\u044c', sol: '/', solb: '\u29c4', solbar: '\u233f', sopf: '\ud835\udd64', spades: '\u2660', spadesuit: '\u2660', sqcaps: '\u2293\ufe00', sqcups: '\u2294\ufe00', sscr: '\ud835\udcc8', star: '\u2606', sub: '\u2282', subset: '\u2282', subE: '\u2ac5', subseteqq: '\u2ac5', subdot: '\u2abd', subedot: '\u2ac3', submult: '\u2ac1', subnE: '\u2acb', subsetneqq: '\u2acb', subne: '\u228a', subsetneq: '\u228a', subplus: '\u2abf', subrarr: '\u2979', subsim: '\u2ac7', subsub: '\u2ad5', subsup: '\u2ad3', sung: '\u266a', sup1: '\xb9', sup2: '\xb2', sup3: '\xb3', supE: '\u2ac6', supseteqq: '\u2ac6', supdot: '\u2abe', supdsub: '\u2ad8', supedot: '\u2ac4', suphsol: '\u27c9', suphsub: '\u2ad7', suplarr: '\u297b', supmult: '\u2ac2', supnE: '\u2acc', supsetneqq: '\u2acc', supne: '\u228b', supsetneq: '\u228b', supplus: '\u2ac0', supsim: '\u2ac8', supsub: '\u2ad4', supsup: '\u2ad6', swArr: '\u21d9', swnwar: '\u292a', szlig: '\xdf', target: '\u2316', tau: '\u03c4', tcaron: '\u0165', tcedil: '\u0163', tcy: '\u0442', telrec: '\u2315', tfr: '\ud835\udd31', theta: '\u03b8', thetasym: '\u03d1', thetav: '\u03d1', vartheta: '\u03d1', thorn: '\xfe', times: '\xd7', timesbar: '\u2a31', timesd: '\u2a30', topbot: '\u2336', topcir: '\u2af1', topf: '\ud835\udd65', topfork: '\u2ada', tprime: '\u2034', triangle: '\u25b5', utri: '\u25b5', triangleq: '\u225c', trie: '\u225c', tridot: '\u25ec', triminus: '\u2a3a', triplus: '\u2a39', trisb: '\u29cd', tritime: '\u2a3b', trpezium: '\u23e2', tscr: '\ud835\udcc9', tscy: '\u0446', tshcy: '\u045b', tstrok: '\u0167', uHar: '\u2963', uacute: '\xfa', ubrcy: '\u045e', ubreve: '\u016d', ucirc: '\xfb', ucy: '\u0443', udblac: '\u0171', ufisht: '\u297e', ufr: '\ud835\udd32', ugrave: '\xf9', uhblk: '\u2580', ulcorn: '\u231c', ulcorner: '\u231c', ulcrop: '\u230f', ultri: '\u25f8', umacr: '\u016b', uogon: '\u0173', uopf: '\ud835\udd66', upsi: '\u03c5', upsilon: '\u03c5', upuparrows: '\u21c8', uuarr: '\u21c8', urcorn: '\u231d', urcorner: '\u231d', urcrop: '\u230e', uring: '\u016f', urtri: '\u25f9', uscr: '\ud835\udcca', utdot: '\u22f0', utilde: '\u0169', uuml: '\xfc', uwangle: '\u29a7', vBar: '\u2ae8', vBarv: '\u2ae9', vangrt: '\u299c', varsubsetneq: '\u228a\ufe00', vsubne: '\u228a\ufe00', varsubsetneqq: '\u2acb\ufe00', vsubnE: '\u2acb\ufe00', varsupsetneq: '\u228b\ufe00', vsupne: '\u228b\ufe00', varsupsetneqq: '\u2acc\ufe00', vsupnE: '\u2acc\ufe00', vcy: '\u0432', veebar: '\u22bb', veeeq: '\u225a', vellip: '\u22ee', vfr: '\ud835\udd33', vopf: '\ud835\udd67', vscr: '\ud835\udccb', vzigzag: '\u299a', wcirc: '\u0175', wedbar: '\u2a5f', wedgeq: '\u2259', weierp: '\u2118', wp: '\u2118', wfr: '\ud835\udd34', wopf: '\ud835\udd68', wscr: '\ud835\udccc', xfr: '\ud835\udd35', xi: '\u03be', xnis: '\u22fb', xopf: '\ud835\udd69', xscr: '\ud835\udccd', yacute: '\xfd', yacy: '\u044f', ycirc: '\u0177', ycy: '\u044b', yen: '\xa5', yfr: '\ud835\udd36', yicy: '\u0457', yopf: '\ud835\udd6a', yscr: '\ud835\udcce', yucy: '\u044e', yuml: '\xff', zacute: '\u017a', zcaron: '\u017e', zcy: '\u0437', zdot: '\u017c', zeta: '\u03b6', zfr: '\ud835\udd37', zhcy: '\u0436', zigrarr: '\u21dd', zopf: '\ud835\udd6b', zscr: '\ud835\udccf', zwj: '\u200d', zwnj: '\u200c' };
   yn.ngsp = '\ue500';
   var bn = [/@/, /^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
   var Sn = new (class e {
     static fromArray(t) {
      return t
       ? ((function (e, t) {
          if (null != t && (!Array.isArray(t) || 2 != t.length)) throw new Error(`Expected '${e}' to be an array, [start, end].`);
          if (null != t) {
           let e = t[0],
            r = t[1];
           bn.forEach((t) => {
            if (t.test(e) || t.test(r)) throw new Error(`['${e}', '${r}'] contains unusable interpolation symbol.`);
           });
          }
         })('interpolation', t),
         new e(t[0], t[1]))
       : Sn;
     }
     constructor(e, t) {
      (this.start = e), (this.end = t);
     }
    })('{{', '}}'),
    wn = class extends kr {
     constructor(e, t, r) {
      super(r, e), (this.tokenType = t);
     }
    },
    kn = class {
     constructor(e, t, r) {
      (this.tokens = e), (this.errors = t), (this.nonNormalizedIcuExpressions = r);
     }
    };
   var _n,
    Cn = /\r\n?/g;
   function xn(e) {
    return `Unexpected character "${0 === e ? 'EOF' : String.fromCharCode(e)}"`;
   }
   function Tn(e) {
    return `Unknown entity "${e}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
   }
   !(function (e) {
    (e.HEX = 'hexadecimal'), (e.DEC = 'decimal');
   })(_n || (_n = {}));
   var En = class {
     constructor(e) {
      this.error = e;
     }
    },
    Ln = class {
     constructor(e, t, r) {
      (this._getTagContentType = t), (this._currentTokenStart = null), (this._currentTokenType = null), (this._expansionCaseStack = []), (this._inInterpolation = !1), (this._fullNameStack = []), (this.tokens = []), (this.errors = []), (this.nonNormalizedIcuExpressions = []), (this._tokenizeIcu = r.tokenizeExpansionForms || !1), (this._interpolationConfig = r.interpolationConfig || Sn), (this._leadingTriviaCodePoints = r.leadingTriviaChars && r.leadingTriviaChars.map((e) => e.codePointAt(0) || 0)), (this._canSelfClose = r.canSelfClose || !1), (this._allowHtmComponentClosingTags = r.allowHtmComponentClosingTags || !1);
      let n = r.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 };
      (this._cursor = r.escapedString ? new Bn(e, n) : new An(e, n)), (this._preserveLineEndings = r.preserveLineEndings || !1), (this._i18nNormalizeLineEndingsInICUs = r.i18nNormalizeLineEndingsInICUs || !1), (this._tokenizeBlocks = r.tokenizeBlocks ?? !0), (this._tokenizeLet = r.tokenizeLet ?? !0);
      try {
       this._cursor.init();
      } catch (a) {
       this.handleError(a);
      }
     }
     _processCarriageReturns(e) {
      return this._preserveLineEndings ? e : e.replace(Cn, '\n');
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
         this._tokenizeLet && 64 === this._cursor.peek() && !this._inInterpolation && this._attemptStr('@let')
          ? this._consumeLetDeclaration(t)
          : this._tokenizeBlocks && this._attemptCharCode(64)
            ? this._consumeBlockStart(t)
            : !this._tokenizeBlocks || this._inInterpolation || this._isInExpansionCase() || this._isInExpansionForm() || !this._attemptCharCode(125)
              ? (this._tokenizeIcu && this._tokenizeExpansionForm()) ||
                this._consumeWithInterpolation(
                 5,
                 8,
                 () => this._isTextEnd(),
                 () => this._isTagStart(),
                )
              : this._consumeBlockEnd(t);
       } catch (e) {
        this.handleError(e);
       }
      }
      this._beginToken(34), this._endToken([]);
     }
     _getBlockName() {
      let e = !1,
       t = this._cursor.clone();
      return this._attemptCharCodeUntilFn((t) => (ur(t) ? !e : !Dn(t) || ((e = !0), !1))), this._cursor.getChars(t).trim();
     }
     _consumeBlockStart(e) {
      this._beginToken(25, e);
      let t = this._endToken([this._getBlockName()]);
      if (40 === this._cursor.peek()) {
       if ((this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(qn), !this._attemptCharCode(41))) return void (t.type = 29);
       this._attemptCharCodeUntilFn(qn);
      }
      this._attemptCharCode(123) ? (this._beginToken(26), this._endToken([])) : (t.type = 29);
     }
     _consumeBlockEnd(e) {
      this._beginToken(27, e), this._endToken([]);
     }
     _consumeBlockParameters() {
      for (this._attemptCharCodeUntilFn(Mn); 41 !== this._cursor.peek() && 0 !== this._cursor.peek(); ) {
       this._beginToken(28);
       let e = this._cursor.clone(),
        t = null,
        r = 0;
       for (; (59 !== this._cursor.peek() && 0 !== this._cursor.peek()) || null !== t; ) {
        let e = this._cursor.peek();
        if (92 === e) this._cursor.advance();
        else if (e === t) t = null;
        else if (null === t && mr(e)) t = e;
        else if (40 === e && null === t) r++;
        else if (41 === e && null === t) {
         if (0 === r) break;
         r > 0 && r--;
        }
        this._cursor.advance();
       }
       this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(Mn);
      }
     }
     _consumeLetDeclaration(e) {
      if ((this._beginToken(30, e), !ur(this._cursor.peek()))) {
       return void (this._endToken([this._cursor.getChars(e)]).type = 33);
      }
      this._attemptCharCodeUntilFn(qn);
      let t = this._endToken([this._getLetDeclarationName()]);
      this._attemptCharCodeUntilFn(qn), this._attemptCharCode(61) ? (this._attemptCharCodeUntilFn((e) => qn(e) && !dr(e)), this._consumeLetDeclarationValue(), 59 === this._cursor.peek() ? (this._beginToken(32), this._endToken([]), this._cursor.advance()) : ((t.type = 33), (t.sourceSpan = this._cursor.getSpan(e)))) : (t.type = 33);
     }
     _getLetDeclarationName() {
      let e = this._cursor.clone(),
       t = !1;
      return this._attemptCharCodeUntilFn((e) => !(hr(e) || 36 === e || 95 === e || (t && pr(e))) || ((t = !0), !1)), this._cursor.getChars(e).trim();
     }
     _consumeLetDeclarationValue() {
      let e = this._cursor.clone();
      for (this._beginToken(31, e); 0 !== this._cursor.peek(); ) {
       let e = this._cursor.peek();
       if (59 === e) break;
       mr(e) && (this._cursor.advance(), this._attemptCharCodeUntilFn((t) => (92 === t ? (this._cursor.advance(), !1) : t === e))), this._cursor.advance();
      }
      this._endToken([this._cursor.getChars(e)]);
     }
     _tokenizeExpansionForm() {
      if (this.isExpansionFormStart()) return this._consumeExpansionFormStart(), !0;
      if (
       (function (e) {
        return 125 !== e;
       })(this._cursor.peek()) &&
       this._isInExpansionForm()
      )
       return this._consumeExpansionCaseStart(), !0;
      if (125 === this._cursor.peek()) {
       if (this._isInExpansionCase()) return this._consumeExpansionCaseEnd(), !0;
       if (this._isInExpansionForm()) return this._consumeExpansionFormEnd(), !0;
      }
      return !1;
     }
     _beginToken(e, t = this._cursor.clone()) {
      (this._currentTokenStart = t), (this._currentTokenType = e);
     }
     _endToken(e, t) {
      if (null === this._currentTokenStart) throw new wn('Programming error - attempted to end a token when there was no start to the token', this._currentTokenType, this._cursor.getSpan(t));
      if (null === this._currentTokenType) throw new wn('Programming error - attempted to end a token which has no token type', null, this._cursor.getSpan(this._currentTokenStart));
      let r = { type: this._currentTokenType, parts: e, sourceSpan: (t ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) };
      return this.tokens.push(r), (this._currentTokenStart = null), (this._currentTokenType = null), r;
     }
     _createError(e, t) {
      this._isInExpansionForm() && (e += ' (Do you have an unescaped "{" in your template? Use "{{ \'{\' }}") to escape it.)');
      let r = new wn(e, this._currentTokenType, t);
      return (this._currentTokenStart = null), (this._currentTokenType = null), new En(r);
     }
     handleError(e) {
      if ((e instanceof Hn && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), !(e instanceof En))) throw e;
      this.errors.push(e.error);
     }
     _attemptCharCode(e) {
      return this._cursor.peek() === e && (this._cursor.advance(), !0);
     }
     _attemptCharCodeCaseInsensitive(e) {
      return (
       !!(function (e, t) {
        return Nn(e) === Nn(t);
       })(this._cursor.peek(), e) && (this._cursor.advance(), !0)
      );
     }
     _requireCharCode(e) {
      let t = this._cursor.clone();
      if (!this._attemptCharCode(e)) throw this._createError(xn(this._cursor.peek()), this._cursor.getSpan(t));
     }
     _attemptStr(e) {
      let t = e.length;
      if (this._cursor.charsLeft() < t) return !1;
      let r = this._cursor.clone();
      for (let n = 0; n < t; n++) if (!this._attemptCharCode(e.charCodeAt(n))) return (this._cursor = r), !1;
      return !0;
     }
     _attemptStrCaseInsensitive(e) {
      for (let t = 0; t < e.length; t++) if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t))) return !1;
      return !0;
     }
     _requireStr(e) {
      let t = this._cursor.clone();
      if (!this._attemptStr(e)) throw this._createError(xn(this._cursor.peek()), this._cursor.getSpan(t));
     }
     _requireStrCaseInsensitive(e) {
      let t = this._cursor.clone();
      if (!this._attemptStrCaseInsensitive(e)) throw this._createError(xn(this._cursor.peek()), this._cursor.getSpan(t));
     }
     _attemptCharCodeUntilFn(e) {
      for (; !e(this._cursor.peek()); ) this._cursor.advance();
     }
     _requireCharCodeUntilFn(e, t) {
      let r = this._cursor.clone();
      if ((this._attemptCharCodeUntilFn(e), this._cursor.diff(r) < t)) throw this._createError(xn(this._cursor.peek()), this._cursor.getSpan(r));
     }
     _attemptUntilChar(e) {
      for (; this._cursor.peek() !== e; ) this._cursor.advance();
     }
     _readChar() {
      let e = String.fromCodePoint(this._cursor.peek());
      return this._cursor.advance(), e;
     }
     _consumeEntity(e) {
      this._beginToken(9);
      let t = this._cursor.clone();
      if ((this._cursor.advance(), this._attemptCharCode(35))) {
       let e = this._attemptCharCode(120) || this._attemptCharCode(88),
        r = this._cursor.clone();
       if ((this._attemptCharCodeUntilFn(Fn), 59 != this._cursor.peek())) {
        this._cursor.advance();
        let r = e ? _n.HEX : _n.DEC;
        throw this._createError(
         (function (e, t) {
          return `Unable to parse entity "${t}" - ${e} character reference entities must end with ";"`;
         })(r, this._cursor.getChars(t)),
         this._cursor.getSpan(),
        );
       }
       let n = this._cursor.getChars(r);
       this._cursor.advance();
       try {
        let r = parseInt(n, e ? 16 : 10);
        this._endToken([String.fromCharCode(r), this._cursor.getChars(t)]);
       } catch {
        throw this._createError(Tn(this._cursor.getChars(t)), this._cursor.getSpan());
       }
      } else {
       let r = this._cursor.clone();
       if ((this._attemptCharCodeUntilFn(Pn), 59 != this._cursor.peek())) this._beginToken(e, t), (this._cursor = r), this._endToken(['&']);
       else {
        let e = this._cursor.getChars(r);
        this._cursor.advance();
        let n = yn[e];
        if (!n) throw this._createError(Tn(e), this._cursor.getSpan(t));
        this._endToken([n, `&${e};`]);
       }
      }
     }
     _consumeRawText(e, t) {
      this._beginToken(e ? 6 : 7);
      let r = [];
      for (;;) {
       let n = this._cursor.clone(),
        a = t();
       if (((this._cursor = n), a)) break;
       e && 38 === this._cursor.peek() ? (this._endToken([this._processCarriageReturns(r.join(''))]), (r.length = 0), this._consumeEntity(6), this._beginToken(6)) : r.push(this._readChar());
      }
      this._endToken([this._processCarriageReturns(r.join(''))]);
     }
     _consumeComment(e) {
      this._beginToken(10, e), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr('--\x3e')), this._beginToken(11), this._requireStr('--\x3e'), this._endToken([]);
     }
     _consumeBogusComment(e) {
      this._beginToken(10, e), this._endToken([]), this._consumeRawText(!1, () => 62 === this._cursor.peek()), this._beginToken(11), this._cursor.advance(), this._endToken([]);
     }
     _consumeCdata(e) {
      this._beginToken(12, e), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr(']]>')), this._beginToken(13), this._requireStr(']]>'), this._endToken([]);
     }
     _consumeDocType(e) {
      this._beginToken(18, e), this._endToken([]), this._consumeRawText(!1, () => 62 === this._cursor.peek()), this._beginToken(19), this._cursor.advance(), this._endToken([]);
     }
     _consumePrefixAndName() {
      let e,
       t = this._cursor.clone(),
       r = '';
      for (; 58 !== this._cursor.peek() && !In(this._cursor.peek()); ) this._cursor.advance();
      return 58 === this._cursor.peek() ? ((r = this._cursor.getChars(t)), this._cursor.advance(), (e = this._cursor.clone())) : (e = t), this._requireCharCodeUntilFn(Rn, '' === r ? 0 : 1), [r, this._cursor.getChars(e)];
     }
     _consumeTagOpen(e) {
      let t,
       r,
       n,
       a = [];
      try {
       if (!hr(this._cursor.peek())) throw this._createError(xn(this._cursor.peek()), this._cursor.getSpan(e));
       for (n = this._consumeTagOpenStart(e), r = n.parts[0], t = n.parts[1], this._attemptCharCodeUntilFn(qn); 47 !== this._cursor.peek() && 62 !== this._cursor.peek() && 60 !== this._cursor.peek() && 0 !== this._cursor.peek(); ) {
        let [e, t] = this._consumeAttributeName();
        if ((this._attemptCharCodeUntilFn(qn), this._attemptCharCode(61))) {
         this._attemptCharCodeUntilFn(qn);
         let r = this._consumeAttributeValue();
         a.push({ prefix: e, name: t, value: r });
        } else a.push({ prefix: e, name: t });
        this._attemptCharCodeUntilFn(qn);
       }
       this._consumeTagOpenEnd();
      } catch (s) {
       if (s instanceof En) return void (n ? (n.type = 4) : (this._beginToken(5, e), this._endToken(['<'])));
       throw s;
      }
      if (this._canSelfClose && 2 === this.tokens[this.tokens.length - 1].type) return;
      let i = this._getTagContentType(t, r, this._fullNameStack.length > 0, a);
      this._handleFullNameStackForTagOpen(r, t), i === Ar.RAW_TEXT ? this._consumeRawTextWithTagClose(r, t, !1) : i === Ar.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(r, t, !0);
     }
     _consumeRawTextWithTagClose(e, t, r) {
      this._consumeRawText(r, () => !!(this._attemptCharCode(60) && this._attemptCharCode(47) && (this._attemptCharCodeUntilFn(qn), this._attemptStrCaseInsensitive(e ? `${e}:${t}` : t))) && (this._attemptCharCodeUntilFn(qn), this._attemptCharCode(62))), this._beginToken(3), this._requireCharCodeUntilFn((e) => 62 === e, 3), this._cursor.advance(), this._endToken([e, t]), this._handleFullNameStackForTagClose(e, t);
     }
     _consumeTagOpenStart(e) {
      this._beginToken(0, e);
      let t = this._consumePrefixAndName();
      return this._endToken(t);
     }
     _consumeAttributeName() {
      let e = this._cursor.peek();
      if (39 === e || 34 === e) throw this._createError(xn(e), this._cursor.getSpan());
      this._beginToken(14);
      let t = this._consumePrefixAndName();
      return this._endToken(t), t;
     }
     _consumeAttributeValue() {
      let e;
      if (39 === this._cursor.peek() || 34 === this._cursor.peek()) {
       let t = this._cursor.peek();
       this._consumeQuote(t);
       let r = () => this._cursor.peek() === t;
       (e = this._consumeWithInterpolation(16, 17, r, r)), this._consumeQuote(t);
      } else {
       let t = () => Rn(this._cursor.peek());
       e = this._consumeWithInterpolation(16, 17, t, t);
      }
      return e;
     }
     _consumeQuote(e) {
      this._beginToken(15), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]);
     }
     _consumeTagOpenEnd() {
      let e = this._attemptCharCode(47) ? 2 : 1;
      this._beginToken(e), this._requireCharCode(62), this._endToken([]);
     }
     _consumeTagClose(e) {
      if ((this._beginToken(3, e), this._attemptCharCodeUntilFn(qn), this._allowHtmComponentClosingTags && this._attemptCharCode(47))) this._attemptCharCodeUntilFn(qn), this._requireCharCode(62), this._endToken([]);
      else {
       let [e, t] = this._consumePrefixAndName();
       this._attemptCharCodeUntilFn(qn), this._requireCharCode(62), this._endToken([e, t]), this._handleFullNameStackForTagClose(e, t);
      }
     }
     _consumeExpansionFormStart() {
      this._beginToken(20), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(20), this._beginToken(7);
      let e = this._readUntil(44),
       t = this._processCarriageReturns(e);
      if (this._i18nNormalizeLineEndingsInICUs) this._endToken([t]);
      else {
       let r = this._endToken([e]);
       t !== e && this.nonNormalizedIcuExpressions.push(r);
      }
      this._requireCharCode(44), this._attemptCharCodeUntilFn(qn), this._beginToken(7);
      let r = this._readUntil(44);
      this._endToken([r]), this._requireCharCode(44), this._attemptCharCodeUntilFn(qn);
     }
     _consumeExpansionCaseStart() {
      this._beginToken(21);
      let e = this._readUntil(123).trim();
      this._endToken([e]), this._attemptCharCodeUntilFn(qn), this._beginToken(22), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(qn), this._expansionCaseStack.push(22);
     }
     _consumeExpansionCaseEnd() {
      this._beginToken(23), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(qn), this._expansionCaseStack.pop();
     }
     _consumeExpansionFormEnd() {
      this._beginToken(24), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
     }
     _consumeWithInterpolation(e, t, r, n) {
      this._beginToken(e);
      let a = [];
      for (; !r(); ) {
       let r = this._cursor.clone();
       this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (this._endToken([this._processCarriageReturns(a.join(''))], r), (a.length = 0), this._consumeInterpolation(t, r, n), this._beginToken(e)) : 38 === this._cursor.peek() ? (this._endToken([this._processCarriageReturns(a.join(''))]), (a.length = 0), this._consumeEntity(e), this._beginToken(e)) : a.push(this._readChar());
      }
      this._inInterpolation = !1;
      let i = this._processCarriageReturns(a.join(''));
      return this._endToken([i]), i;
     }
     _consumeInterpolation(e, t, r) {
      let n = [];
      this._beginToken(e, t), n.push(this._interpolationConfig.start);
      let a = this._cursor.clone(),
       i = null,
       s = !1;
      for (; 0 !== this._cursor.peek() && (null === r || !r()); ) {
       let e = this._cursor.clone();
       if (this._isTagStart()) return (this._cursor = e), n.push(this._getProcessedChars(a, e)), void this._endToken(n);
       if (null === i) {
        if (this._attemptStr(this._interpolationConfig.end)) return n.push(this._getProcessedChars(a, e)), n.push(this._interpolationConfig.end), void this._endToken(n);
        this._attemptStr('//') && (s = !0);
       }
       let t = this._cursor.peek();
       this._cursor.advance(), 92 === t ? this._cursor.advance() : t === i ? (i = null) : !s && null === i && mr(t) && (i = t);
      }
      n.push(this._getProcessedChars(a, this._cursor)), this._endToken(n);
     }
     _getProcessedChars(e, t) {
      return this._processCarriageReturns(t.getChars(e));
     }
     _isTextEnd() {
      return !!(this._isTagStart() || 0 === this._cursor.peek() || (this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || (125 === this._cursor.peek() && this._isInExpansionCase()))) || (this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || 64 === this._cursor.peek() || 125 === this._cursor.peek())));
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
     _isBlockStart() {
      if (this._tokenizeBlocks && 64 === this._cursor.peek()) {
       let e = this._cursor.clone();
       if ((e.advance(), Dn(e.peek()))) return !0;
      }
      return !1;
     }
     _readUntil(e) {
      let t = this._cursor.clone();
      return this._attemptUntilChar(e), this._cursor.getChars(t);
     }
     _isInExpansion() {
      return this._isInExpansionCase() || this._isInExpansionForm();
     }
     _isInExpansionCase() {
      return this._expansionCaseStack.length > 0 && 22 === this._expansionCaseStack[this._expansionCaseStack.length - 1];
     }
     _isInExpansionForm() {
      return this._expansionCaseStack.length > 0 && 20 === this._expansionCaseStack[this._expansionCaseStack.length - 1];
     }
     isExpansionFormStart() {
      if (123 !== this._cursor.peek()) return !1;
      if (this._interpolationConfig) {
       let e = this._cursor.clone(),
        t = this._attemptStr(this._interpolationConfig.start);
       return (this._cursor = e), !t;
      }
      return !0;
     }
     _handleFullNameStackForTagOpen(e, t) {
      let r = Wr(e, t);
      (0 === this._fullNameStack.length || this._fullNameStack[this._fullNameStack.length - 1] === r) && this._fullNameStack.push(r);
     }
     _handleFullNameStackForTagClose(e, t) {
      let r = Wr(e, t);
      0 !== this._fullNameStack.length && this._fullNameStack[this._fullNameStack.length - 1] === r && this._fullNameStack.pop();
     }
    };
   function qn(e) {
    return !ur(e) || 0 === e;
   }
   function Rn(e) {
    return ur(e) || 62 === e || 60 === e || 47 === e || 39 === e || 34 === e || 61 === e || 0 === e;
   }
   function In(e) {
    return (e < 97 || 122 < e) && (e < 65 || 90 < e) && (e < 48 || e > 57);
   }
   function Fn(e) {
    return (
     59 === e ||
     0 === e ||
     !(function (e) {
      return (e >= 97 && e <= 102) || (e >= 65 && e <= 70) || pr(e);
     })(e)
    );
   }
   function Pn(e) {
    return 59 === e || 0 === e || !hr(e);
   }
   function Nn(e) {
    return e >= 97 && e <= 122 ? e - 97 + 65 : e;
   }
   function Dn(e) {
    return hr(e) || pr(e) || 95 === e;
   }
   function Mn(e) {
    return 59 !== e && qn(e);
   }
   var An = class e {
     constructor(t, r) {
      if (t instanceof e) {
       (this.file = t.file), (this.input = t.input), (this.end = t.end);
       let e = t.state;
       this.state = { peek: e.peek, offset: e.offset, line: e.line, column: e.column };
      } else {
       if (!r) throw new Error('Programming error: the range argument must be provided with a file argument.');
       (this.file = t), (this.input = t.content), (this.end = r.endPos), (this.state = { peek: -1, offset: r.startPos, line: r.startLine, column: r.startCol });
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
      let r = (e = e || this);
      if (t) for (; this.diff(e) > 0 && -1 !== t.indexOf(e.peek()); ) r === e && (e = e.clone()), e.advance();
      let n = this.locationFromCursor(e),
       a = this.locationFromCursor(this),
       i = r !== e ? this.locationFromCursor(r) : n;
      return new wr(n, a, i);
     }
     getChars(e) {
      return this.input.substring(e.state.offset, this.state.offset);
     }
     charAt(e) {
      return this.input.charCodeAt(e);
     }
     advanceState(e) {
      if (e.offset >= this.end) throw ((this.state = e), new Hn('Unexpected character "EOF"', this));
      let t = this.charAt(e.offset);
      10 === t ? (e.line++, (e.column = 0)) : dr(t) || e.column++, e.offset++, this.updatePeek(e);
     }
     updatePeek(e) {
      e.peek = e.offset >= this.end ? 0 : this.charAt(e.offset);
     }
     locationFromCursor(e) {
      return new br(e.file, e.state.offset, e.state.line, e.state.column);
     }
    },
    Bn = class e extends An {
     constructor(t, r) {
      t instanceof e ? (super(t), (this.internalState = { ...t.internalState })) : (super(t, r), (this.internalState = this.state));
     }
     advance() {
      (this.state = this.internalState), super.advance(), this.processEscapeSequence();
     }
     init() {
      super.init(), this.processEscapeSequence();
     }
     clone() {
      return new e(this);
     }
     getChars(e) {
      let t = e.clone(),
       r = '';
      for (; t.internalState.offset < this.internalState.offset; ) (r += String.fromCodePoint(t.peek())), t.advance();
      return r;
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
          r = 0;
         for (; 125 !== e(); ) this.advanceState(this.internalState), r++;
         this.state.peek = this.decodeHexDigits(t, r);
        } else {
         let e = this.clone();
         this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), (this.state.peek = this.decodeHexDigits(e, 4));
        }
       else if (120 === e()) {
        this.advanceState(this.internalState);
        let e = this.clone();
        this.advanceState(this.internalState), (this.state.peek = this.decodeHexDigits(e, 2));
       } else if (fr(e())) {
        let t = '',
         r = 0,
         n = this.clone();
        for (; fr(e()) && r < 3; ) (n = this.clone()), (t += String.fromCodePoint(e())), this.advanceState(this.internalState), r++;
        (this.state.peek = parseInt(t, 8)), (this.internalState = n.internalState);
       } else dr(this.internalState.peek) ? (this.advanceState(this.internalState), (this.state = this.internalState)) : (this.state.peek = this.internalState.peek);
     }
     decodeHexDigits(e, t) {
      let r = this.input.slice(e.internalState.offset, e.internalState.offset + t),
       n = parseInt(r, 16);
      if (isNaN(n)) throw ((e.state = e.internalState), new Hn('Invalid hexadecimal escape sequence', e));
      return n;
     }
    },
    Hn = class {
     constructor(e, t) {
      (this.msg = e), (this.cursor = t);
     }
    },
    Vn = class e extends kr {
     static create(t, r, n) {
      return new e(t, r, n);
     }
     constructor(e, t, r) {
      super(t, r), (this.elementName = e);
     }
    },
    On = class {
     constructor(e, t) {
      (this.rootNodes = e), (this.errors = t);
     }
    },
    zn = class {
     constructor(e) {
      this.getTagDefinition = e;
     }
     parse(e, t, r, n = !1, a) {
      let i =
        (e) =>
        (t, ...r) =>
         e(t.toLowerCase(), ...r),
       s = n ? this.getTagDefinition : i(this.getTagDefinition),
       o = (e) => s(e).getContentType(),
       l = n ? a : i(a),
       c = (function (e, t, r, n = {}) {
        let a = new Ln(new Sr(e, t), r, n);
        return (
         a.tokenize(),
         new kn(
          (function (e) {
           let t,
            r = [];
           for (let n = 0; n < e.length; n++) {
            let a = e[n];
            (t && 5 === t.type && 5 === a.type) || (t && 16 === t.type && 16 === a.type) ? ((t.parts[0] += a.parts[0]), (t.sourceSpan.end = a.sourceSpan.end)) : ((t = a), r.push(t));
           }
           return r;
          })(a.tokens),
          a.errors,
          a.nonNormalizedIcuExpressions,
         )
        );
       })(
        e,
        t,
        a
         ? (e, t, r, n) => {
            let a = l(e, t, r, n);
            return void 0 !== a ? a : o(e);
           }
         : o,
        r,
       ),
       u = (r && r.canSelfClose) || !1,
       p = (r && r.allowHtmComponentClosingTags) || !1,
       h = new $n(c.tokens, s, u, p, n);
      return h.build(), new On(h.rootNodes, c.errors.concat(h.errors));
     }
    },
    $n = class e {
     constructor(e, t, r, n, a) {
      (this.tokens = e), (this.getTagDefinition = t), (this.canSelfClose = r), (this.allowHtmComponentClosingTags = n), (this.isTagNameCaseSensitive = a), (this._index = -1), (this._containerStack = []), (this.rootNodes = []), (this.errors = []), this._advance();
     }
     build() {
      for (; 34 !== this._peek.type; ) 0 === this._peek.type || 4 === this._peek.type ? this._consumeStartTag(this._advance()) : 3 === this._peek.type ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : 12 === this._peek.type ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : 10 === this._peek.type ? (this._closeVoidElement(), this._consumeComment(this._advance())) : 5 === this._peek.type || 7 === this._peek.type || 6 === this._peek.type ? (this._closeVoidElement(), this._consumeText(this._advance())) : 20 === this._peek.type ? this._consumeExpansion(this._advance()) : 25 === this._peek.type ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : 27 === this._peek.type ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : 29 === this._peek.type ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : 30 === this._peek.type ? (this._closeVoidElement(), this._consumeLet(this._advance())) : 18 === this._peek.type ? this._consumeDocType(this._advance()) : 33 === this._peek.type ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._advance();
      for (let e of this._containerStack) e instanceof dn && this.errors.push(Vn.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`));
     }
     _advance() {
      let e = this._peek;
      return this._index < this.tokens.length - 1 && this._index++, (this._peek = this.tokens[this._index]), e;
     }
     _advanceIf(e) {
      return this._peek.type === e ? this._advance() : null;
     }
     _consumeCdata(e) {
      let t = this._advance(),
       r = this._getText(t),
       n = this._advanceIf(13);
      this._addToParent(new sn(r, new wr(e.sourceSpan.start, (n || t).sourceSpan.end), [t]));
     }
     _consumeComment(e) {
      let t = this._advanceIf(7),
       r = this._advanceIf(11),
       n = null != t ? t.parts[0].trim() : null,
       a = null == r ? e.sourceSpan : new wr(e.sourceSpan.start, r.sourceSpan.end, e.sourceSpan.fullStart);
      this._addToParent(new pn(n, a));
     }
     _consumeDocType(e) {
      let t = this._advanceIf(7),
       r = this._advanceIf(19),
       n = null != t ? t.parts[0].trim() : null,
       a = new wr(e.sourceSpan.start, (r || t || e).sourceSpan.end);
      this._addToParent(new hn(n, a));
     }
     _consumeExpansion(e) {
      let t = this._advance(),
       r = this._advance(),
       n = [];
      for (; 21 === this._peek.type; ) {
       let e = this._parseExpansionCase();
       if (!e) return;
       n.push(e);
      }
      if (24 !== this._peek.type) return void this.errors.push(Vn.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
      let a = new wr(e.sourceSpan.start, this._peek.sourceSpan.end, e.sourceSpan.fullStart);
      this._addToParent(new on(t.parts[0], r.parts[0], n, a, t.sourceSpan)), this._advance();
     }
     _parseExpansionCase() {
      let t = this._advance();
      if (22 !== this._peek.type) return this.errors.push(Vn.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
      let r = this._advance(),
       n = this._collectExpansionExpTokens(r);
      if (!n) return null;
      let a = this._advance();
      n.push({ type: 34, parts: [], sourceSpan: a.sourceSpan });
      let i = new e(n, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
      if ((i.build(), i.errors.length > 0)) return (this.errors = this.errors.concat(i.errors)), null;
      let s = new wr(t.sourceSpan.start, a.sourceSpan.end, t.sourceSpan.fullStart),
       o = new wr(r.sourceSpan.start, a.sourceSpan.end, r.sourceSpan.fullStart);
      return new ln(t.parts[0], i.rootNodes, s, t.sourceSpan, o);
     }
     _collectExpansionExpTokens(e) {
      let t = [],
       r = [22];
      for (;;) {
       if (((20 === this._peek.type || 22 === this._peek.type) && r.push(this._peek.type), 23 === this._peek.type)) {
        if (!Un(r, 22)) return this.errors.push(Vn.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        if ((r.pop(), 0 === r.length)) return t;
       }
       if (24 === this._peek.type) {
        if (!Un(r, 20)) return this.errors.push(Vn.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        r.pop();
       }
       if (34 === this._peek.type) return this.errors.push(Vn.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
       t.push(this._advance());
      }
     }
     _getText(e) {
      let t = e.parts[0];
      if (t.length > 0 && '\n' == t[0]) {
       let e = this._getClosestParentElement();
       null != e && 0 == e.children.length && this.getTagDefinition(e.name).ignoreFirstLf && (t = t.substring(1));
      }
      return t;
     }
     _consumeText(e) {
      let t = [e],
       r = e.sourceSpan,
       n = e.parts[0];
      if (n.length > 0 && '\n' === n[0]) {
       let r = this._getContainer();
       null != r && 0 === r.children.length && this.getTagDefinition(r.name).ignoreFirstLf && ((n = n.substring(1)), (t[0] = { type: e.type, sourceSpan: e.sourceSpan, parts: [n] }));
      }
      for (; 8 === this._peek.type || 5 === this._peek.type || 9 === this._peek.type; ) (e = this._advance()), t.push(e), 8 === e.type ? (n += e.parts.join('').replace(/&([^;]+);/g, Wn)) : 9 === e.type ? (n += e.parts[0]) : (n += e.parts.join(''));
      if (n.length > 0) {
       let a = e.sourceSpan;
       this._addToParent(new an(n, new wr(r.start, a.end, r.fullStart, r.details), t));
      }
     }
     _closeVoidElement() {
      let e = this._getContainer();
      e instanceof un && this.getTagDefinition(e.name).isVoid && this._containerStack.pop();
     }
     _consumeStartTag(e) {
      let [t, r] = e.parts,
       n = [];
      for (; 14 === this._peek.type; ) n.push(this._consumeAttr(this._advance()));
      let a = this._getElementFullName(t, r, this._getClosestParentElement()),
       i = !1;
      if (2 === this._peek.type) {
       this._advance(), (i = !0);
       let t = this.getTagDefinition(a);
       this.canSelfClose || t.canSelfClose || null !== Ur(a) || t.isVoid || this.errors.push(Vn.create(a, e.sourceSpan, `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`));
      } else 1 === this._peek.type && (this._advance(), (i = !1));
      let s = this._peek.sourceSpan.fullStart,
       o = new wr(e.sourceSpan.start, s, e.sourceSpan.fullStart),
       l = new wr(e.sourceSpan.start, s, e.sourceSpan.fullStart),
       c = new wr(e.sourceSpan.start.moveBy(1), e.sourceSpan.end),
       u = new un(a, n, [], o, l, void 0, c),
       p = this._getContainer();
      this._pushContainer(u, p instanceof un && this.getTagDefinition(p.name).isClosedByChild(u.name)), i ? this._popContainer(a, un, o) : 4 === e.type && (this._popContainer(a, un, null), this.errors.push(Vn.create(a, o, `Opening tag "${a}" not terminated.`)));
     }
     _pushContainer(e, t) {
      t && this._containerStack.pop(), this._addToParent(e), this._containerStack.push(e);
     }
     _consumeEndTag(e) {
      let t = this.allowHtmComponentClosingTags && 0 === e.parts.length ? null : this._getElementFullName(e.parts[0], e.parts[1], this._getClosestParentElement());
      if (t && this.getTagDefinition(t).isVoid) this.errors.push(Vn.create(t, e.sourceSpan, `Void elements do not have end tags "${e.parts[1]}"`));
      else if (!this._popContainer(t, un, e.sourceSpan)) {
       let r = `Unexpected closing tag "${t}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
       this.errors.push(Vn.create(t, e.sourceSpan, r));
      }
     }
     _popContainer(e, t, r) {
      let n = !1;
      for (let a = this._containerStack.length - 1; a >= 0; a--) {
       let i = this._containerStack[a];
       if (Ur(i.name) ? i.name === e : (null == e || i.name.toLowerCase() === e.toLowerCase()) && i instanceof t) return (i.endSourceSpan = r), (i.sourceSpan.end = null !== r ? r.end : i.sourceSpan.end), this._containerStack.splice(a, this._containerStack.length - a), !n;
       (i instanceof dn || (i instanceof un && !this.getTagDefinition(i.name).closedByParent)) && (n = !0);
      }
      return !1;
     }
     _consumeAttr(e) {
      let t,
       r = Wr(e.parts[0], e.parts[1]),
       n = e.sourceSpan.end;
      15 === this._peek.type && (t = this._advance());
      let a,
       i,
       s = '',
       o = [];
      if (16 === this._peek.type)
       for (a = this._peek.sourceSpan, i = this._peek.sourceSpan.end; 16 === this._peek.type || 17 === this._peek.type || 9 === this._peek.type; ) {
        let e = this._advance();
        o.push(e), 17 === e.type ? (s += e.parts.join('').replace(/&([^;]+);/g, Wn)) : 9 === e.type ? (s += e.parts[0]) : (s += e.parts.join('')), (i = n = e.sourceSpan.end);
       }
      15 === this._peek.type && (i = n = this._advance().sourceSpan.end);
      let l = a && i && new wr((null == t ? void 0 : t.sourceSpan.start) ?? a.start, i, (null == t ? void 0 : t.sourceSpan.fullStart) ?? a.fullStart);
      return new cn(r, s, new wr(e.sourceSpan.start, n, e.sourceSpan.fullStart), e.sourceSpan, l, o.length > 0 ? o : void 0, void 0);
     }
     _consumeBlockOpen(e) {
      let t = [];
      for (; 28 === this._peek.type; ) {
       let e = this._advance();
       t.push(new fn(e.parts[0], e.sourceSpan));
      }
      26 === this._peek.type && this._advance();
      let r = this._peek.sourceSpan.fullStart,
       n = new wr(e.sourceSpan.start, r, e.sourceSpan.fullStart),
       a = new wr(e.sourceSpan.start, r, e.sourceSpan.fullStart),
       i = new dn(e.parts[0], t, [], n, e.sourceSpan, a);
      this._pushContainer(i, !1);
     }
     _consumeBlockClose(e) {
      this._popContainer(null, dn, e.sourceSpan) || this.errors.push(Vn.create(null, e.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'));
     }
     _consumeIncompleteBlock(e) {
      let t = [];
      for (; 28 === this._peek.type; ) {
       let e = this._advance();
       t.push(new fn(e.parts[0], e.sourceSpan));
      }
      let r = this._peek.sourceSpan.fullStart,
       n = new wr(e.sourceSpan.start, r, e.sourceSpan.fullStart),
       a = new wr(e.sourceSpan.start, r, e.sourceSpan.fullStart),
       i = new dn(e.parts[0], t, [], n, e.sourceSpan, a);
      this._pushContainer(i, !1), this._popContainer(null, dn, null), this.errors.push(Vn.create(e.parts[0], n, `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
     }
     _consumeLet(e) {
      let t,
       r,
       n = e.parts[0];
      if (31 !== this._peek.type) return void this.errors.push(Vn.create(e.parts[0], e.sourceSpan, `Invalid @let declaration "${n}". Declaration must have a value.`));
      if (((t = this._advance()), 32 !== this._peek.type)) return void this.errors.push(Vn.create(e.parts[0], e.sourceSpan, `Unterminated @let declaration "${n}". Declaration must be terminated with a semicolon.`));
      r = this._advance();
      let a = r.sourceSpan.fullStart,
       i = new wr(e.sourceSpan.start, a, e.sourceSpan.fullStart),
       s = e.sourceSpan.toString().lastIndexOf(n),
       o = e.sourceSpan.start.moveBy(s),
       l = new wr(o, e.sourceSpan.end),
       c = new mn(n, t.parts[0], i, l, t.sourceSpan);
      this._addToParent(c);
     }
     _consumeIncompleteLet(e) {
      let t = e.parts[0] ?? '',
       r = t ? ` "${t}"` : '';
      if (t.length > 0) {
       let r = e.sourceSpan.toString().lastIndexOf(t),
        n = e.sourceSpan.start.moveBy(r),
        a = new wr(n, e.sourceSpan.end),
        i = new wr(e.sourceSpan.start, e.sourceSpan.start.moveBy(0)),
        s = new mn(t, '', e.sourceSpan, a, i);
       this._addToParent(s);
      }
      this.errors.push(Vn.create(e.parts[0], e.sourceSpan, `Incomplete @let declaration${r}. @let declarations must be written as \`@let <name> = <value>;\``));
     }
     _getContainer() {
      return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
     }
     _getClosestParentElement() {
      for (let e = this._containerStack.length - 1; e > -1; e--) if (this._containerStack[e] instanceof un) return this._containerStack[e];
      return null;
     }
     _addToParent(e) {
      let t = this._getContainer();
      null === t ? this.rootNodes.push(e) : t.children.push(e);
     }
     _getElementFullName(e, t, r) {
      if ('' === e && '' === (e = this.getTagDefinition(t).implicitNamespacePrefix || '') && null != r) {
       let t = Or(r.name)[1];
       this.getTagDefinition(t).preventNamespaceInheritance || (e = Ur(r.name));
      }
      return Wr(e, t);
     }
    };
   function Un(e, t) {
    return e.length > 0 && e[e.length - 1] === t;
   }
   function Wn(e, t) {
    return void 0 !== yn[t] ? yn[t] || e : /^#x[a-f0-9]+$/i.test(t) ? String.fromCodePoint(parseInt(t.slice(2), 16)) : /^#\d+$/.test(t) ? String.fromCodePoint(parseInt(t.slice(1), 10)) : e;
   }
   var jn = class extends zn {
     constructor() {
      super(rn);
     }
     parse(e, t, r, n = !1, a) {
      return super.parse(e, t, r, n, a);
     }
    },
    Gn = null;
   function Xn(e, t = {}) {
    let { canSelfClose: r = !1, allowHtmComponentClosingTags: n = !1, isTagNameCaseSensitive: a = !1, getTagContentType: i, tokenizeAngularBlocks: s = !1, tokenizeAngularLetDeclaration: o = !1 } = t;
    return (Gn || (Gn = new jn()), Gn).parse(e, 'angular-html-parser', { tokenizeExpansionForms: s, interpolationConfig: void 0, canSelfClose: r, allowHtmComponentClosingTags: n, tokenizeBlocks: s, tokenizeLet: o }, a, i);
   }
   var Yn = function (e, t) {
    let r = new SyntaxError(e + ' (' + t.loc.start.line + ':' + t.loc.start.column + ')');
    return Object.assign(r, t);
   };
   var Jn,
    Kn,
    Zn,
    Qn = function (e) {
     let t = (function (e) {
      let t = e.slice(0, 3);
      if ('---' !== t && '+++' !== t) return;
      let r = e.indexOf('\n', 3);
      if (-1 === r) return;
      let n = e.slice(3, r).trim(),
       a = e.indexOf(`\n${t}`, r),
       i = n;
      if ((i || (i = '+++' === t ? 'toml' : 'yaml'), -1 === a && '---' === t && 'yaml' === i && (a = e.indexOf('\n...', r)), -1 === a)) return;
      let s = a + 1 + 3,
       o = e.charAt(s + 1);
      if (!/\s?/u.test(o)) return;
      let l = e.slice(0, s);
      return { type: 'front-matter', language: i, explicitLanguage: n, value: e.slice(r + 1, a), startDelimiter: t, endDelimiter: l.slice(-3), raw: l };
     })(e);
     if (!t) return { content: e };
     let { raw: r } = t;
     return { frontMatter: t, content: p(!1, r, /[^\n]/gu, ' ') + e.slice(r.length) };
    },
    ea = { attrs: !0, children: !0, cases: !0, expression: !0 },
    ta = new Set(['parent']);
   (Jn = new WeakSet()),
    (Kn = function () {
     return 'angularIcuCase' === this.type ? 'expression' : 'angularIcuExpression' === this.type ? 'cases' : 'children';
    }),
    (Zn = function () {
     var e;
     return (null == (e = this.parent) ? void 0 : e.$children) ?? [];
    });
   var ra = class e {
    constructor(e = {}) {
     c(this, Jn), s(this, 'type'), s(this, 'parent');
     for (let t of new Set([...ta, ...Object.keys(e)])) this.setProperty(t, e[t]);
    }
    setProperty(e, t) {
     if (this[e] !== t) {
      if ((e in ea && (t = t.map((e) => this.createChild(e))), !ta.has(e))) return void (this[e] = t);
      Object.defineProperty(this, e, { value: t, enumerable: !1, configurable: !0 });
     }
    }
    map(t) {
     let r;
     for (let n in ea) {
      let a = this[n];
      if (a) {
       let i = na(a, (e) => e.map(t));
       r !== a && (r || (r = new e({ parent: this.parent })), r.setProperty(n, i));
      }
     }
     if (r) for (let e in this) e in ea || (r[e] = this[e]);
     return t(r || this);
    }
    walk(e) {
     for (let t in ea) {
      let r = this[t];
      if (r) for (let t = 0; t < r.length; t++) r[t].walk(e);
     }
     e(this);
    }
    createChild(t) {
     let r = t instanceof e ? t.clone() : new e(t);
     return r.setProperty('parent', this), r;
    }
    insertChildBefore(e, t) {
     let r = this.$children;
     r.splice(r.indexOf(e), 0, this.createChild(t));
    }
    removeChild(e) {
     let t = this.$children;
     t.splice(t.indexOf(e), 1);
    }
    replaceChild(e, t) {
     let r = this.$children;
     r[r.indexOf(e)] = this.createChild(t);
    }
    clone() {
     return new e(this);
    }
    get $children() {
     return this[l(this, Jn, Kn)];
    }
    set $children(e) {
     this[l(this, Jn, Kn)] = e;
    }
    get firstChild() {
     var e;
     return null == (e = this.$children) ? void 0 : e[0];
    }
    get lastChild() {
     return L(!0, this.$children, -1);
    }
    get prev() {
     let e = l(this, Jn, Zn);
     return e[e.indexOf(this) - 1];
    }
    get next() {
     let e = l(this, Jn, Zn);
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
   function na(e, t) {
    let r = e.map(t);
    return r.some((t, r) => t !== e[r]) ? r : e;
   }
   var aa = [
    {
     regex: /^(\[if([^\]]*)\]>)(.*?)<!\s*\[endif\]$/su,
     parse: function (e, t, r) {
      let [, n, a, i] = r,
       s = 4 + n.length,
       o = e.sourceSpan.start.moveBy(s),
       l = o.moveBy(i.length),
       [c, u] = (() => {
        try {
         return [!0, t(i, o).children];
        } catch {
         return [!1, [{ type: 'text', value: i, sourceSpan: new wr(o, l) }]];
        }
       })();
      return { type: 'ieConditionalComment', complete: c, children: u, condition: p(!1, a.trim(), /\s+/gu, ' '), sourceSpan: e.sourceSpan, startSourceSpan: new wr(e.sourceSpan.start, o), endSourceSpan: new wr(l, e.sourceSpan.end) };
     },
    },
    {
     regex: /^\[if([^\]]*)\]><!$/u,
     parse: function (e, t, r) {
      let [, n] = r;
      return { type: 'ieConditionalStartComment', condition: p(!1, n.trim(), /\s+/gu, ' '), sourceSpan: e.sourceSpan };
     },
    },
    {
     regex: /^<!\s*\[endif\]$/u,
     parse: function (e) {
      return { type: 'ieConditionalEndComment', sourceSpan: e.sourceSpan };
     },
    },
   ];
   var ia = new Map([
     ['*', new Set(['accesskey', 'autocapitalize', 'autofocus', 'class', 'contenteditable', 'dir', 'draggable', 'enterkeyhint', 'hidden', 'id', 'inert', 'inputmode', 'is', 'itemid', 'itemprop', 'itemref', 'itemscope', 'itemtype', 'lang', 'nonce', 'popover', 'slot', 'spellcheck', 'style', 'tabindex', 'title', 'translate', 'writingsuggestions'])],
     ['a', new Set(['charset', 'coords', 'download', 'href', 'hreflang', 'name', 'ping', 'referrerpolicy', 'rel', 'rev', 'shape', 'target', 'type'])],
     ['applet', new Set(['align', 'alt', 'archive', 'code', 'codebase', 'height', 'hspace', 'name', 'object', 'vspace', 'width'])],
     ['area', new Set(['alt', 'coords', 'download', 'href', 'hreflang', 'nohref', 'ping', 'referrerpolicy', 'rel', 'shape', 'target', 'type'])],
     ['audio', new Set(['autoplay', 'controls', 'crossorigin', 'loop', 'muted', 'preload', 'src'])],
     ['base', new Set(['href', 'target'])],
     ['basefont', new Set(['color', 'face', 'size'])],
     ['blockquote', new Set(['cite'])],
     ['body', new Set(['alink', 'background', 'bgcolor', 'link', 'text', 'vlink'])],
     ['br', new Set(['clear'])],
     ['button', new Set(['disabled', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'name', 'popovertarget', 'popovertargetaction', 'type', 'value'])],
     ['canvas', new Set(['height', 'width'])],
     ['caption', new Set(['align'])],
     ['col', new Set(['align', 'char', 'charoff', 'span', 'valign', 'width'])],
     ['colgroup', new Set(['align', 'char', 'charoff', 'span', 'valign', 'width'])],
     ['data', new Set(['value'])],
     ['del', new Set(['cite', 'datetime'])],
     ['details', new Set(['name', 'open'])],
     ['dialog', new Set(['open'])],
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
     ['input', new Set(['accept', 'align', 'alt', 'autocomplete', 'checked', 'dirname', 'disabled', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'height', 'ismap', 'list', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'pattern', 'placeholder', 'popovertarget', 'popovertargetaction', 'readonly', 'required', 'size', 'src', 'step', 'type', 'usemap', 'value', 'width'])],
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
     ['template', new Set(['shadowrootclonable', 'shadowrootdelegatesfocus', 'shadowrootmode'])],
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
    sa = new Set(['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'content', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'image', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark', 'marquee', 'math', 'menu', 'menuitem', 'meta', 'meter', 'multicol', 'nav', 'nextid', 'nobr', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'plaintext', 'pre', 'progress', 'q', 'rb', 'rbc', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'search', 'section', 'select', 'shadow', 'slot', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp']);
   function oa(e, t, r) {
    let { name: n, canSelfClose: a = !0, normalizeTagName: i = !1, normalizeAttributeName: s = !1, allowHtmComponentClosingTags: o = !1, isTagNameCaseSensitive: l = !1, shouldParseAsRawText: c } = t,
     { rootNodes: u, errors: p } = Xn(e, { canSelfClose: a, allowHtmComponentClosingTags: o, isTagNameCaseSensitive: l, getTagContentType: c ? (...e) => (c(...e) ? Ar.RAW_TEXT : void 0) : void 0, tokenizeAngularBlocks: 'angular' === n || void 0, tokenizeAngularLetDeclaration: 'angular' === n || void 0 });
    if ('vue' === n) {
     if (u.some((e) => ('docType' === e.type && 'html' === e.value) || ('element' === e.type && 'html' === e.name.toLowerCase()))) return oa(e, ha, r);
     let t,
      n = () => t ?? (t = Xn(e, { canSelfClose: a, allowHtmComponentClosingTags: o, isTagNameCaseSensitive: l })),
      i = (e) => n().rootNodes.find(({ startSourceSpan: t }) => t && t.start.offset === e.startSourceSpan.start.offset) ?? e;
     for (let [e, a] of u.entries()) {
      let { endSourceSpan: t, startSourceSpan: s } = a;
      if (null === t) (p = n().errors), (u[e] = i(a));
      else if (la(a, r)) {
       let r = n().errors.find((e) => e.span.start.offset > s.start.offset && e.span.start.offset < t.end.offset);
       r && ca(r), (u[e] = i(a));
      }
     }
    }
    p.length > 0 && ca(p[0]);
    let h = (e) => {
      let t = e.name.startsWith(':') ? e.name.slice(1).split(':')[0] : null,
       r = e.nameSpan.toString(),
       n = null !== t && r.startsWith(`${t}:`),
       a = n ? r.slice(t.length + 1) : r;
      (e.name = a), (e.namespace = t), (e.hasExplicitNamespace = n);
     },
     d = (e, t) => {
      let r = e.toLowerCase();
      return t(r) ? r : e;
     };
    return (
     gn(
      new (class extends vn {
       visitExpansionCase(e, t) {
        'angular' === n &&
         this.visitChildren(t, (t) => {
          t(e.expression);
         });
       }
       visit(e) {
        ((e) => {
         switch (e.type) {
          case 'element':
           h(e);
           for (let t of e.attrs) h(t), t.valueSpan ? ((t.value = t.valueSpan.toString()), /["']/u.test(t.value[0]) && (t.value = t.value.slice(1, -1))) : (t.value = null);
           break;
          case 'comment':
           e.value = e.sourceSpan.toString().slice(4, -3);
           break;
          case 'text':
           e.value = e.sourceSpan.toString();
         }
        })(e),
         ((e) => {
          if ('element' === e.type) {
           let t = rn(l ? e.name : e.name.toLowerCase());
           !e.namespace || e.namespace === t.implicitNamespacePrefix || me(e) ? (e.tagDefinition = t) : (e.tagDefinition = rn(''));
          }
         })(e),
         ((e) => {
          if ('element' === e.type && (i && (!e.namespace || e.namespace === e.tagDefinition.implicitNamespacePrefix || me(e)) && (e.name = d(e.name, (e) => sa.has(e))), s)) for (let t of e.attrs) t.namespace || (t.name = d(t.name, (t) => ia.has(e.name) && (ia.get('*').has(t) || ia.get(e.name).has(t))));
         })(e),
         ((e) => {
          e.sourceSpan && e.endSourceSpan && (e.sourceSpan = new wr(e.sourceSpan.start, e.endSourceSpan.end));
         })(e);
       }
      })(),
      u,
     ),
     u
    );
   }
   function la(e, t) {
    var r;
    if ('element' !== e.type || 'template' !== e.name) return !1;
    let n = null == (r = e.attrs.find((e) => 'lang' === e.name)) ? void 0 : r.value;
    return !n || 'html' === he(t, { language: n });
   }
   function ca(e) {
    let {
     msg: t,
     span: { start: r, end: n },
    } = e;
    throw Yn(t, { loc: { start: { line: r.line + 1, column: r.col + 1 }, end: { line: n.line + 1, column: n.col + 1 } }, cause: e });
   }
   function ua(e, t, r = {}, n = !0) {
    let { frontMatter: a, content: i } = n ? Qn(e) : { frontMatter: null, content: e },
     s = new Sr(e, r.filepath),
     o = new br(s, 0, 0, 0),
     l = o.moveBy(e.length),
     c = { type: 'root', sourceSpan: new wr(o, l), children: oa(i, t, r) };
    if (a) {
     let e = new br(s, 0, 0, 0),
      t = e.moveBy(a.raw.length);
     (a.sourceSpan = new wr(e, t)), c.children.unshift(a);
    }
    let u = new ra(c),
     h = (n, a) => {
      let { offset: i } = a,
       s = ua(p(!1, e.slice(0, i), /[^\n\r]/gu, ' ') + n, t, r, !1);
      s.sourceSpan = new wr(a, L(!1, s.children, -1).sourceSpan.end);
      let o = s.children[0];
      return o.length === i ? s.children.shift() : ((o.sourceSpan = new wr(o.sourceSpan.start.moveBy(i), o.sourceSpan.end)), (o.value = o.value.slice(i))), s;
     };
    return (
     u.walk((e) => {
      if ('comment' === e.type) {
       let t = (function (e, t) {
        if (e.value)
         for (let { regex: r, parse: n } of aa) {
          let a = e.value.match(r);
          if (a) return n(e, t, a);
         }
        return null;
       })(e, h);
       t && e.parent.replaceChild(e, t);
      }
      (function (e) {
       if ('block' === e.type) {
        if (((e.name = p(!1, e.name.toLowerCase(), /\s+/gu, ' ').trim()), (e.type = 'angularControlFlowBlock'), !Ct(e.parameters))) return void delete e.parameters;
        for (let t of e.parameters) t.type = 'angularControlFlowBlockParameter';
        e.parameters = { type: 'angularControlFlowBlockParameters', children: e.parameters, sourceSpan: new wr(e.parameters[0].sourceSpan.start, L(!1, e.parameters, -1).sourceSpan.end) };
       }
      })(e),
       (function (e) {
        'letDeclaration' === e.type && ((e.type = 'angularLetDeclaration'), (e.id = e.name), (e.init = { type: 'angularLetDeclarationInitializer', sourceSpan: new wr(e.valueSpan.start, e.valueSpan.end), value: e.value }), delete e.name, delete e.value);
       })(e),
       (function (e) {
        ('plural' === e.type || 'select' === e.type) && ((e.clause = e.type), (e.type = 'angularIcuExpression')), 'expansionCase' === e.type && (e.type = 'angularIcuCase');
       })(e);
     }),
     u
    );
   }
   function pa(e) {
    return { parse: (t, r) => ua(t, e, r), hasPragma: tr, astFormat: 'html', locStart: xt, locEnd: Tt };
   }
   var ha = { name: 'html', normalizeTagName: !0, normalizeAttributeName: !0, allowHtmComponentClosingTags: !0 },
    da = pa(ha),
    fa = pa({ name: 'angular' }),
    ma = pa({ name: 'vue', isTagNameCaseSensitive: !0, shouldParseAsRawText: (e, t, r, n) => 'html' !== e.toLowerCase() && !r && ('template' !== e || n.some(({ name: e, value: t }) => 'lang' === e && 'html' !== t && '' !== t && void 0 !== t)) }),
    ga = pa({ name: 'lwc', canSelfClose: !1 }),
    va = { html: Tr },
    ya = u;
  },
  54736: (e, t, r) => {
   r.d(t, { A: () => n });
   var n = (0, r(99773).A)('outline', 'mood-happy', 'IconMoodHappy', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 9l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 9l.01 0', key: 'svg-2' }],
    ['path', { d: 'M8 13a4 4 0 1 0 8 0h-8', key: 'svg-3' }],
   ]);
  },
  67495: (e, t, r) => {
   var n = r(30758);
   function a(e) {
    for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1; r < arguments.length; r++) t += '&args[]=' + encodeURIComponent(arguments[r]);
    return 'Minified React error #' + e + '; visit ' + t + ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
   }
   var i = Object.prototype.hasOwnProperty,
    s = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    o = {},
    l = {};
   function c(e) {
    return !!i.call(l, e) || (!i.call(o, e) && (s.test(e) ? (l[e] = !0) : ((o[e] = !0), !1)));
   }
   function u(e, t, r, n, a, i, s) {
    (this.acceptsBooleans = 2 === t || 3 === t || 4 === t), (this.attributeName = n), (this.attributeNamespace = a), (this.mustUseProperty = r), (this.propertyName = e), (this.type = t), (this.sanitizeURL = i), (this.removeEmptyString = s);
   }
   var p = {};
   'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'.split(' ').forEach(function (e) {
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
    });
   var h = /[\-:]([a-z])/g;
   function d(e) {
    return e[1].toUpperCase();
   }
   'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'.split(' ').forEach(function (e) {
    var t = e.replace(h, d);
    p[t] = new u(t, 1, !1, e, null, !1, !1);
   }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
     var t = e.replace(h, d);
     p[t] = new u(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
     var t = e.replace(h, d);
     p[t] = new u(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
     p[e] = new u(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (p.xlinkHref = new u('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
     p[e] = new u(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
   var f = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    m = ['Webkit', 'ms', 'Moz', 'O'];
   Object.keys(f).forEach(function (e) {
    m.forEach(function (t) {
     (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (f[t] = f[e]);
    });
   });
   var g = /["'&<>]/;
   function v(e) {
    if ('boolean' == typeof e || 'number' == typeof e) return '' + e;
    e = '' + e;
    var t = g.exec(e);
    if (t) {
     var r,
      n = '',
      a = 0;
     for (r = t.index; r < e.length; r++) {
      switch (e.charCodeAt(r)) {
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
      a !== r && (n += e.substring(a, r)), (a = r + 1), (n += t);
     }
     e = a !== r ? n + e.substring(a, r) : n;
    }
    return e;
   }
   var y = /([A-Z])/g,
    b = /^ms-/,
    S = Array.isArray;
   function w(e, t) {
    return { insertionMode: e, selectedValue: t };
   }
   var k = new Map();
   function _(e, t, r) {
    if ('object' != typeof r) throw Error(a(62));
    for (var n in ((t = !0), r))
     if (i.call(r, n)) {
      var s = r[n];
      if (null != s && 'boolean' != typeof s && '' !== s) {
       if (0 === n.indexOf('--')) {
        var o = v(n);
        s = v(('' + s).trim());
       } else {
        o = n;
        var l = k.get(o);
        void 0 !== l || ((l = v(o.replace(y, '-$1').toLowerCase().replace(b, '-ms-'))), k.set(o, l)), (o = l), (s = 'number' == typeof s ? (0 === s || i.call(f, n) ? '' + s : s + 'px') : v(('' + s).trim()));
       }
       t ? ((t = !1), e.push(' style="', o, ':', s)) : e.push(';', o, ':', s);
      }
     }
    t || e.push('"');
   }
   function C(e, t, r, n) {
    switch (r) {
     case 'style':
      return void _(e, t, n);
     case 'defaultValue':
     case 'defaultChecked':
     case 'innerHTML':
     case 'suppressContentEditableWarning':
     case 'suppressHydrationWarning':
      return;
    }
    if (!(2 < r.length) || ('o' !== r[0] && 'O' !== r[0]) || ('n' !== r[1] && 'N' !== r[1]))
     if (null !== (t = p.hasOwnProperty(r) ? p[r] : null)) {
      switch (typeof n) {
       case 'function':
       case 'symbol':
        return;
       case 'boolean':
        if (!t.acceptsBooleans) return;
      }
      switch (((r = t.attributeName), t.type)) {
       case 3:
        n && e.push(' ', r, '=""');
        break;
       case 4:
        !0 === n ? e.push(' ', r, '=""') : !1 !== n && e.push(' ', r, '="', v(n), '"');
        break;
       case 5:
        isNaN(n) || e.push(' ', r, '="', v(n), '"');
        break;
       case 6:
        !isNaN(n) && 1 <= n && e.push(' ', r, '="', v(n), '"');
        break;
       default:
        t.sanitizeURL && (n = '' + n), e.push(' ', r, '="', v(n), '"');
      }
     } else if (c(r)) {
      switch (typeof n) {
       case 'function':
       case 'symbol':
        return;
       case 'boolean':
        if ('data-' !== (t = r.toLowerCase().slice(0, 5)) && 'aria-' !== t) return;
      }
      e.push(' ', r, '="', v(n), '"');
     }
   }
   function x(e, t, r) {
    if (null != t) {
     if (null != r) throw Error(a(60));
     if ('object' != typeof t || !('__html' in t)) throw Error(a(61));
     null != (t = t.__html) && e.push('' + t);
    }
   }
   function T(e, t, r, n) {
    e.push(q(r));
    var a,
     s = (r = null);
    for (a in t)
     if (i.call(t, a)) {
      var o = t[a];
      if (null != o)
       switch (a) {
        case 'children':
         r = o;
         break;
        case 'dangerouslySetInnerHTML':
         s = o;
         break;
        default:
         C(e, n, a, o);
       }
     }
    return e.push('>'), x(e, s, r), 'string' == typeof r ? (e.push(v(r)), null) : r;
   }
   var E = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    L = new Map();
   function q(e) {
    var t = L.get(e);
    if (void 0 === t) {
     if (!E.test(e)) throw Error(a(65, e));
     (t = '<' + e), L.set(e, t);
    }
    return t;
   }
   function R(e, t, r, s, o) {
    switch (t) {
     case 'select':
      e.push(q('select'));
      var l = null,
       u = null;
      for (f in r)
       if (i.call(r, f)) {
        var p = r[f];
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
      return e.push('>'), x(e, u, l), l;
     case 'option':
      (u = o.selectedValue), e.push(q('option'));
      var h = (p = null),
       d = null,
       f = null;
      for (l in r)
       if (i.call(r, l)) {
        var m = r[l];
        if (null != m)
         switch (l) {
          case 'children':
           p = m;
           break;
          case 'selected':
           d = m;
           break;
          case 'dangerouslySetInnerHTML':
           f = m;
           break;
          case 'value':
           h = m;
          default:
           C(e, s, l, m);
         }
       }
      if (null != u)
       if (
        ((r =
         null !== h
          ? '' + h
          : (function (e) {
             var t = '';
             return (
              n.Children.forEach(e, function (e) {
               null != e && (t += e);
              }),
              t
             );
            })(p)),
        S(u))
       ) {
        for (s = 0; s < u.length; s++)
         if ('' + u[s] === r) {
          e.push(' selected=""');
          break;
         }
       } else '' + u === r && e.push(' selected=""');
      else d && e.push(' selected=""');
      return e.push('>'), x(e, f, p), p;
     case 'textarea':
      for (p in (e.push(q('textarea')), (f = u = l = null), r))
       if (i.call(r, p) && null != (h = r[p]))
        switch (p) {
         case 'children':
          f = h;
          break;
         case 'value':
          l = h;
          break;
         case 'defaultValue':
          u = h;
          break;
         case 'dangerouslySetInnerHTML':
          throw Error(a(91));
         default:
          C(e, s, p, h);
        }
      if ((null === l && null !== u && (l = u), e.push('>'), null != f)) {
       if (null != l) throw Error(a(92));
       if (S(f) && 1 < f.length) throw Error(a(93));
       l = '' + f;
      }
      return 'string' == typeof l && '\n' === l[0] && e.push('\n'), null !== l && e.push(v('' + l)), null;
     case 'input':
      for (u in (e.push(q('input')), (h = f = p = l = null), r))
       if (i.call(r, u) && null != (d = r[u]))
        switch (u) {
         case 'children':
         case 'dangerouslySetInnerHTML':
          throw Error(a(399, 'input'));
         case 'defaultChecked':
          h = d;
          break;
         case 'defaultValue':
          p = d;
          break;
         case 'checked':
          f = d;
          break;
         case 'value':
          l = d;
          break;
         default:
          C(e, s, u, d);
        }
      return null !== f ? C(e, s, 'checked', f) : null !== h && C(e, s, 'checked', h), null !== l ? C(e, s, 'value', l) : null !== p && C(e, s, 'value', p), e.push('/>'), null;
     case 'menuitem':
      for (var g in (e.push(q('menuitem')), r))
       if (i.call(r, g) && null != (l = r[g]))
        switch (g) {
         case 'children':
         case 'dangerouslySetInnerHTML':
          throw Error(a(400));
         default:
          C(e, s, g, l);
        }
      return e.push('>'), null;
     case 'title':
      for (m in (e.push(q('title')), (l = null), r))
       if (i.call(r, m) && null != (u = r[m]))
        switch (m) {
         case 'children':
          l = u;
          break;
         case 'dangerouslySetInnerHTML':
          throw Error(a(434));
         default:
          C(e, s, m, u);
        }
      return e.push('>'), l;
     case 'listing':
     case 'pre':
      for (h in (e.push(q(t)), (u = l = null), r))
       if (i.call(r, h) && null != (p = r[h]))
        switch (h) {
         case 'children':
          l = p;
          break;
         case 'dangerouslySetInnerHTML':
          u = p;
          break;
         default:
          C(e, s, h, p);
        }
      if ((e.push('>'), null != u)) {
       if (null != l) throw Error(a(60));
       if ('object' != typeof u || !('__html' in u)) throw Error(a(61));
       null != (r = u.__html) && ('string' == typeof r && 0 < r.length && '\n' === r[0] ? e.push('\n', r) : e.push('' + r));
      }
      return 'string' == typeof l && '\n' === l[0] && e.push('\n'), l;
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
      for (var y in (e.push(q(t)), r))
       if (i.call(r, y) && null != (l = r[y]))
        switch (y) {
         case 'children':
         case 'dangerouslySetInnerHTML':
          throw Error(a(399, t));
         default:
          C(e, s, y, l);
        }
      return e.push('/>'), null;
     case 'annotation-xml':
     case 'color-profile':
     case 'font-face':
     case 'font-face-src':
     case 'font-face-uri':
     case 'font-face-format':
     case 'font-face-name':
     case 'missing-glyph':
      return T(e, r, t, s);
     case 'html':
      return 0 === o.insertionMode && e.push('<!DOCTYPE html>'), T(e, r, t, s);
     default:
      if (-1 === t.indexOf('-') && 'string' != typeof r.is) return T(e, r, t, s);
      for (d in (e.push(q(t)), (u = l = null), r))
       if (i.call(r, d) && null != (p = r[d]))
        switch (d) {
         case 'children':
          l = p;
          break;
         case 'dangerouslySetInnerHTML':
          u = p;
          break;
         case 'style':
          _(e, s, p);
          break;
         case 'suppressContentEditableWarning':
         case 'suppressHydrationWarning':
          break;
         default:
          c(d) && 'function' != typeof p && 'symbol' != typeof p && e.push(' ', d, '="', v(p), '"');
        }
      return e.push('>'), x(e, u, l), l;
    }
   }
   function I(e, t, r) {
    if ((e.push('\x3c!--$?--\x3e<template id="'), null === r)) throw Error(a(395));
    return e.push(r), e.push('"></template>');
   }
   var F = /[<\u2028\u2029]/g;
   function P(e) {
    return JSON.stringify(e).replace(F, function (e) {
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
   function N(e, t, r, n) {
    return r.generateStaticMarkup ? (e.push(v(t)), !1) : ('' === t ? (e = n) : (n && e.push('\x3c!-- --\x3e'), e.push(v(t)), (e = !0)), e);
   }
   var D = Object.assign,
    M = Symbol.for('react.element'),
    A = Symbol.for('react.portal'),
    B = Symbol.for('react.fragment'),
    H = Symbol.for('react.strict_mode'),
    V = Symbol.for('react.profiler'),
    O = Symbol.for('react.provider'),
    z = Symbol.for('react.context'),
    $ = Symbol.for('react.forward_ref'),
    U = Symbol.for('react.suspense'),
    W = Symbol.for('react.suspense_list'),
    j = Symbol.for('react.memo'),
    G = Symbol.for('react.lazy'),
    X = Symbol.for('react.scope'),
    Y = Symbol.for('react.debug_trace_mode'),
    J = Symbol.for('react.legacy_hidden'),
    K = Symbol.for('react.default_value'),
    Z = Symbol.iterator;
   function Q(e) {
    if (null == e) return null;
    if ('function' == typeof e) return e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
     case B:
      return 'Fragment';
     case A:
      return 'Portal';
     case V:
      return 'Profiler';
     case H:
      return 'StrictMode';
     case U:
      return 'Suspense';
     case W:
      return 'SuspenseList';
    }
    if ('object' == typeof e)
     switch (e.$$typeof) {
      case z:
       return (e.displayName || 'Context') + '.Consumer';
      case O:
       return (e._context.displayName || 'Context') + '.Provider';
      case $:
       var t = e.render;
       return (e = e.displayName) || (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'), e;
      case j:
       return null !== (t = e.displayName || null) ? t : Q(e.type) || 'Memo';
      case G:
       (t = e._payload), (e = e._init);
       try {
        return Q(e(t));
       } catch (r) {}
     }
    return null;
   }
   var ee = {};
   function te(e, t) {
    if (!(e = e.contextTypes)) return ee;
    var r,
     n = {};
    for (r in e) n[r] = t[r];
    return n;
   }
   var re = null;
   function ne(e, t) {
    if (e !== t) {
     (e.context._currentValue2 = e.parentValue), (e = e.parent);
     var r = t.parent;
     if (null === e) {
      if (null !== r) throw Error(a(401));
     } else {
      if (null === r) throw Error(a(401));
      ne(e, r);
     }
     t.context._currentValue2 = t.value;
    }
   }
   function ae(e) {
    (e.context._currentValue2 = e.parentValue), null !== (e = e.parent) && ae(e);
   }
   function ie(e) {
    var t = e.parent;
    null !== t && ie(t), (e.context._currentValue2 = e.value);
   }
   function se(e, t) {
    if (((e.context._currentValue2 = e.parentValue), null === (e = e.parent))) throw Error(a(402));
    e.depth === t.depth ? ne(e, t) : se(e, t);
   }
   function oe(e, t) {
    var r = t.parent;
    if (null === r) throw Error(a(402));
    e.depth === r.depth ? ne(e, r) : oe(e, r), (t.context._currentValue2 = t.value);
   }
   function le(e) {
    var t = re;
    t !== e && (null === t ? ie(e) : null === e ? ae(t) : t.depth === e.depth ? ne(t, e) : t.depth > e.depth ? se(t, e) : oe(t, e), (re = e));
   }
   var ce = {
    isMounted: function () {
     return !1;
    },
    enqueueSetState: function (e, t) {
     null !== (e = e._reactInternals).queue && e.queue.push(t);
    },
    enqueueReplaceState: function (e, t) {
     ((e = e._reactInternals).replace = !0), (e.queue = [t]);
    },
    enqueueForceUpdate: function () {},
   };
   function ue(e, t, r, n) {
    var a = void 0 !== e.state ? e.state : null;
    (e.updater = ce), (e.props = r), (e.state = a);
    var i = { queue: [], replace: !1 };
    e._reactInternals = i;
    var s = t.contextType;
    if (((e.context = 'object' == typeof s && null !== s ? s._currentValue2 : n), 'function' == typeof (s = t.getDerivedStateFromProps) && ((a = null == (s = s(r, a)) ? a : D({}, a, s)), (e.state = a)), 'function' != typeof t.getDerivedStateFromProps && 'function' != typeof e.getSnapshotBeforeUpdate && ('function' == typeof e.UNSAFE_componentWillMount || 'function' == typeof e.componentWillMount)))
     if (((t = e.state), 'function' == typeof e.componentWillMount && e.componentWillMount(), 'function' == typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), t !== e.state && ce.enqueueReplaceState(e, e.state, null), null !== i.queue && 0 < i.queue.length))
      if (((t = i.queue), (s = i.replace), (i.queue = null), (i.replace = !1), s && 1 === t.length)) e.state = t[0];
      else {
       for (i = s ? t[0] : e.state, a = !0, s = s ? 1 : 0; s < t.length; s++) {
        var o = t[s];
        null != (o = 'function' == typeof o ? o.call(e, i, r, n) : o) && (a ? ((a = !1), (i = D({}, i, o))) : D(i, o));
       }
       e.state = i;
      }
     else i.queue = null;
   }
   var pe = { id: 1, overflow: '' };
   function he(e, t, r) {
    var n = e.id;
    e = e.overflow;
    var a = 32 - de(n) - 1;
    (n &= ~(1 << a)), (r += 1);
    var i = 32 - de(t) + a;
    if (30 < i) {
     var s = a - (a % 5);
     return (i = (n & ((1 << s) - 1)).toString(32)), (n >>= s), (a -= s), { id: (1 << (32 - de(t) + a)) | (r << a) | n, overflow: i + e };
    }
    return { id: (1 << i) | (r << a) | n, overflow: e };
   }
   var de = Math.clz32
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
    ye = null,
    be = null,
    Se = null,
    we = !1,
    ke = !1,
    _e = 0,
    Ce = null,
    xe = 0;
   function Te() {
    if (null === ve) throw Error(a(321));
    return ve;
   }
   function Ee() {
    if (0 < xe) throw Error(a(312));
    return { memoizedState: null, queue: null, next: null };
   }
   function Le() {
    return null === Se ? (null === be ? ((we = !1), (be = Se = Ee())) : ((we = !0), (Se = be))) : null === Se.next ? ((we = !1), (Se = Se.next = Ee())) : ((we = !0), (Se = Se.next)), Se;
   }
   function qe() {
    (ye = ve = null), (ke = !1), (be = null), (xe = 0), (Se = Ce = null);
   }
   function Re(e, t) {
    return 'function' == typeof t ? t(e) : t;
   }
   function Ie(e, t, r) {
    if (((ve = Te()), (Se = Le()), we)) {
     var n = Se.queue;
     if (((t = n.dispatch), null !== Ce && void 0 !== (r = Ce.get(n)))) {
      Ce.delete(n), (n = Se.memoizedState);
      do {
       (n = e(n, r.action)), (r = r.next);
      } while (null !== r);
      return (Se.memoizedState = n), [n, t];
     }
     return [Se.memoizedState, t];
    }
    return (e = e === Re ? ('function' == typeof t ? t() : t) : void 0 !== r ? r(t) : t), (Se.memoizedState = e), (e = (e = Se.queue = { last: null, dispatch: null }).dispatch = Pe.bind(null, ve, e)), [Se.memoizedState, e];
   }
   function Fe(e, t) {
    if (((ve = Te()), (t = void 0 === t ? null : t), null !== (Se = Le()))) {
     var r = Se.memoizedState;
     if (null !== r && null !== t) {
      var n = r[1];
      e: if (null === n) n = !1;
      else {
       for (var a = 0; a < n.length && a < t.length; a++)
        if (!ge(t[a], n[a])) {
         n = !1;
         break e;
        }
       n = !0;
      }
      if (n) return r[0];
     }
    }
    return (e = e()), (Se.memoizedState = [e, t]), e;
   }
   function Pe(e, t, r) {
    if (25 <= xe) throw Error(a(301));
    if (e === ve)
     if (((ke = !0), (e = { action: r, next: null }), null === Ce && (Ce = new Map()), void 0 === (r = Ce.get(t)))) Ce.set(t, e);
     else {
      for (t = r; null !== t.next; ) t = t.next;
      t.next = e;
     }
   }
   function Ne() {
    throw Error(a(394));
   }
   function De() {}
   var Me = {
     readContext: function (e) {
      return e._currentValue2;
     },
     useContext: function (e) {
      return Te(), e._currentValue2;
     },
     useMemo: Fe,
     useReducer: Ie,
     useRef: function (e) {
      ve = Te();
      var t = (Se = Le()).memoizedState;
      return null === t ? ((e = { current: e }), (Se.memoizedState = e)) : t;
     },
     useState: function (e) {
      return Ie(Re, e);
     },
     useInsertionEffect: De,
     useLayoutEffect: function () {},
     useCallback: function (e, t) {
      return Fe(function () {
       return e;
      }, t);
     },
     useImperativeHandle: De,
     useEffect: De,
     useDebugValue: De,
     useDeferredValue: function (e) {
      return Te(), e;
     },
     useTransition: function () {
      return Te(), [!1, Ne];
     },
     useId: function () {
      var e = ye.treeContext,
       t = e.overflow;
      e = ((e = e.id) & ~(1 << (32 - de(e) - 1))).toString(32) + t;
      var r = Ae;
      if (null === r) throw Error(a(404));
      return (t = _e++), (e = ':' + r.idPrefix + 'R' + e), 0 < t && (e += 'H' + t.toString(32)), e + ':';
     },
     useMutableSource: function (e, t) {
      return Te(), t(e._source);
     },
     useSyncExternalStore: function (e, t, r) {
      if (void 0 === r) throw Error(a(407));
      return r();
     },
    },
    Ae = null,
    Be = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
   function He(e) {
    return console.error(e), null;
   }
   function Ve() {}
   function Oe(e, t, r, n, a, i, s, o) {
    e.allPendingTasks++, null === r ? e.pendingRootTasks++ : r.pendingTasks++;
    var l = {
     node: t,
     ping: function () {
      var t = e.pingedTasks;
      t.push(l), 1 === t.length && rt(e);
     },
     blockedBoundary: r,
     blockedSegment: n,
     abortSet: a,
     legacyContext: i,
     context: s,
     treeContext: o,
    };
    return a.add(l), l;
   }
   function ze(e, t, r, n, a, i) {
    return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: n, boundary: r, lastPushedText: a, textEmbedded: i };
   }
   function $e(e, t) {
    if (null != (e = e.onError(t)) && 'string' != typeof e) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
   }
   function Ue(e, t) {
    var r = e.onShellError;
    r(t), (r = e.onFatalError)(t), null !== e.destination ? ((e.status = 2), e.destination.destroy(t)) : ((e.status = 1), (e.fatalError = t));
   }
   function We(e, t, r, n, a) {
    for (ve = {}, ye = t, _e = 0, e = r(n, a); ke; ) (ke = !1), (_e = 0), (xe += 1), (Se = null), (e = r(n, a));
    return qe(), e;
   }
   function je(e, t, r, n) {
    var i = r.render(),
     s = n.childContextTypes;
    if (null != s) {
     var o = t.legacyContext;
     if ('function' != typeof r.getChildContext) n = o;
     else {
      for (var l in (r = r.getChildContext())) if (!(l in s)) throw Error(a(108, Q(n) || 'Unknown', l));
      n = D({}, o, r);
     }
     (t.legacyContext = n), Ye(e, t, i), (t.legacyContext = o);
    } else Ye(e, t, i);
   }
   function Ge(e, t) {
    if (e && e.defaultProps) {
     for (var r in ((t = D({}, t)), (e = e.defaultProps))) void 0 === t[r] && (t[r] = e[r]);
     return t;
    }
    return t;
   }
   function Xe(e, t, r, n, i) {
    if ('function' == typeof r)
     if (r.prototype && r.prototype.isReactComponent) {
      i = te(r, t.legacyContext);
      var s = r.contextType;
      ue((s = new r(n, 'object' == typeof s && null !== s ? s._currentValue2 : i)), r, n, i), je(e, t, s, r);
     } else {
      i = We(e, t, r, n, (s = te(r, t.legacyContext)));
      var o = 0 !== _e;
      if ('object' == typeof i && null !== i && 'function' == typeof i.render && void 0 === i.$$typeof) ue(i, r, n, s), je(e, t, i, r);
      else if (o) {
       (n = t.treeContext), (t.treeContext = he(n, 1, 0));
       try {
        Ye(e, t, i);
       } finally {
        t.treeContext = n;
       }
      } else Ye(e, t, i);
     }
    else {
     if ('string' != typeof r) {
      switch (r) {
       case J:
       case Y:
       case H:
       case V:
       case B:
       case W:
        return void Ye(e, t, n.children);
       case X:
        throw Error(a(343));
       case U:
        e: {
         (r = t.blockedBoundary), (i = t.blockedSegment), (s = n.fallback), (n = n.children);
         var l = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: (o = new Set()), errorDigest: null },
          c = ze(0, i.chunks.length, l, i.formatContext, !1, !1);
         i.children.push(c), (i.lastPushedText = !1);
         var u = ze(0, 0, null, i.formatContext, !1, !1);
         (u.parentFlushed = !0), (t.blockedBoundary = l), (t.blockedSegment = u);
         try {
          if ((Ke(e, t, n), e.responseState.generateStaticMarkup || (u.lastPushedText && u.textEmbedded && u.chunks.push('\x3c!-- --\x3e')), (u.status = 1), et(l, u), 0 === l.pendingTasks)) break e;
         } catch (p) {
          (u.status = 4), (l.forceClientRender = !0), (l.errorDigest = $e(e, p));
         } finally {
          (t.blockedBoundary = r), (t.blockedSegment = i);
         }
         (t = Oe(e, s, r, c, o, t.legacyContext, t.context, t.treeContext)), e.pingedTasks.push(t);
        }
        return;
      }
      if ('object' == typeof r && null !== r)
       switch (r.$$typeof) {
        case $:
         if (((n = We(e, t, r.render, n, i)), 0 !== _e)) {
          (r = t.treeContext), (t.treeContext = he(r, 1, 0));
          try {
           Ye(e, t, n);
          } finally {
           t.treeContext = r;
          }
         } else Ye(e, t, n);
         return;
        case j:
         return void Xe(e, t, (r = r.type), (n = Ge(r, n)), i);
        case O:
         if (((i = n.children), (r = r._context), (n = n.value), (s = r._currentValue2), (r._currentValue2 = n), (re = n = { parent: (o = re), depth: null === o ? 0 : o.depth + 1, context: r, parentValue: s, value: n }), (t.context = n), Ye(e, t, i), null === (e = re))) throw Error(a(403));
         return (n = e.parentValue), (e.context._currentValue2 = n === K ? e.context._defaultValue : n), (e = re = e.parent), void (t.context = e);
        case z:
         return void Ye(e, t, (n = (n = n.children)(r._currentValue2)));
        case G:
         return void Xe(e, t, (r = (i = r._init)(r._payload)), (n = Ge(r, n)), void 0);
       }
      throw Error(a(130, null == r ? r : typeof r, ''));
     }
     switch (
      ((s = R((i = t.blockedSegment).chunks, r, n, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = (function (e, t, r) {
       switch (t) {
        case 'select':
         return w(1, null != r.value ? r.value : r.defaultValue);
        case 'svg':
         return w(2, null);
        case 'math':
         return w(3, null);
        case 'foreignObject':
         return w(1, null);
        case 'table':
         return w(4, null);
        case 'thead':
        case 'tbody':
        case 'tfoot':
         return w(5, null);
        case 'colgroup':
         return w(7, null);
        case 'tr':
         return w(6, null);
       }
       return 4 <= e.insertionMode || 0 === e.insertionMode ? w(1, null) : e;
      })(o, r, n)),
      Ke(e, t, s),
      (i.formatContext = o),
      r)
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
       i.chunks.push('</', r, '>');
     }
     i.lastPushedText = !1;
    }
   }
   function Ye(e, t, r) {
    if (((t.node = r), 'object' == typeof r && null !== r)) {
     switch (r.$$typeof) {
      case M:
       return void Xe(e, t, r.type, r.props, r.ref);
      case A:
       throw Error(a(257));
      case G:
       var n = r._init;
       return void Ye(e, t, (r = n(r._payload)));
     }
     if (S(r)) return void Je(e, t, r);
     if ((null === r || 'object' != typeof r ? (n = null) : (n = 'function' == typeof (n = (Z && r[Z]) || r['@@iterator']) ? n : null), n && (n = n.call(r)))) {
      if (!(r = n.next()).done) {
       var i = [];
       do {
        i.push(r.value), (r = n.next());
       } while (!r.done);
       Je(e, t, i);
      }
      return;
     }
     throw ((e = Object.prototype.toString.call(r)), Error(a(31, '[object Object]' === e ? 'object with keys {' + Object.keys(r).join(', ') + '}' : e)));
    }
    'string' == typeof r ? ((n = t.blockedSegment).lastPushedText = N(t.blockedSegment.chunks, r, e.responseState, n.lastPushedText)) : 'number' == typeof r && ((n = t.blockedSegment).lastPushedText = N(t.blockedSegment.chunks, '' + r, e.responseState, n.lastPushedText));
   }
   function Je(e, t, r) {
    for (var n = r.length, a = 0; a < n; a++) {
     var i = t.treeContext;
     t.treeContext = he(i, n, a);
     try {
      Ke(e, t, r[a]);
     } finally {
      t.treeContext = i;
     }
    }
   }
   function Ke(e, t, r) {
    var n = t.blockedSegment.formatContext,
     a = t.legacyContext,
     i = t.context;
    try {
     return Ye(e, t, r);
    } catch (l) {
     if ((qe(), 'object' != typeof l || null === l || 'function' != typeof l.then)) throw ((t.blockedSegment.formatContext = n), (t.legacyContext = a), (t.context = i), le(i), l);
     r = l;
     var s = t.blockedSegment,
      o = ze(0, s.chunks.length, null, s.formatContext, s.lastPushedText, !0);
     s.children.push(o), (s.lastPushedText = !1), (e = Oe(e, t.node, t.blockedBoundary, o, t.abortSet, t.legacyContext, t.context, t.treeContext).ping), r.then(e, e), (t.blockedSegment.formatContext = n), (t.legacyContext = a), (t.context = i), le(i);
    }
   }
   function Ze(e) {
    var t = e.blockedBoundary;
    ((e = e.blockedSegment).status = 3), tt(this, t, e);
   }
   function Qe(e, t, r) {
    var n = e.blockedBoundary;
    (e.blockedSegment.status = 3),
     null === n
      ? (t.allPendingTasks--, 2 !== t.status && ((t.status = 2), null !== t.destination && t.destination.push(null)))
      : (n.pendingTasks--,
        n.forceClientRender || ((n.forceClientRender = !0), (e = void 0 === r ? Error(a(432)) : r), (n.errorDigest = t.onError(e)), n.parentFlushed && t.clientRenderedBoundaries.push(n)),
        n.fallbackAbortableTasks.forEach(function (e) {
         return Qe(e, t, r);
        }),
        n.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        0 === t.allPendingTasks && (n = t.onAllReady)());
   }
   function et(e, t) {
    if (0 === t.chunks.length && 1 === t.children.length && null === t.children[0].boundary) {
     var r = t.children[0];
     (r.id = t.id), (r.parentFlushed = !0), 1 === r.status && et(e, r);
    } else e.completedSegments.push(t);
   }
   function tt(e, t, r) {
    if (null === t) {
     if (r.parentFlushed) {
      if (null !== e.completedRootSegment) throw Error(a(389));
      e.completedRootSegment = r;
     }
     e.pendingRootTasks--, 0 === e.pendingRootTasks && ((e.onShellError = Ve), (t = e.onShellReady)());
    } else t.pendingTasks--, t.forceClientRender || (0 === t.pendingTasks ? (r.parentFlushed && 1 === r.status && et(t, r), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Ze, e), t.fallbackAbortableTasks.clear()) : r.parentFlushed && 1 === r.status && (et(t, r), 1 === t.completedSegments.length && t.parentFlushed && e.partialBoundaries.push(t)));
    e.allPendingTasks--, 0 === e.allPendingTasks && (e = e.onAllReady)();
   }
   function rt(e) {
    if (2 !== e.status) {
     var t = re,
      r = Be.current;
     Be.current = Me;
     var n = Ae;
     Ae = e.responseState;
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
         Ye(o, s, s.node), o.responseState.generateStaticMarkup || (l.lastPushedText && l.textEmbedded && l.chunks.push('\x3c!-- --\x3e')), s.abortSet.delete(s), (l.status = 1), tt(o, s.blockedBoundary, l);
        } catch (d) {
         if ((qe(), 'object' == typeof d && null !== d && 'function' == typeof d.then)) {
          var c = s.ping;
          d.then(c, c);
         } else {
          s.abortSet.delete(s), (l.status = 4);
          var u = s.blockedBoundary,
           p = d,
           h = $e(o, p);
          if ((null === u ? Ue(o, p) : (u.pendingTasks--, u.forceClientRender || ((u.forceClientRender = !0), (u.errorDigest = h), u.parentFlushed && o.clientRenderedBoundaries.push(u))), o.allPendingTasks--, 0 === o.allPendingTasks)) (0, o.onAllReady)();
         }
        }
       }
      }
      i.splice(0, a), null !== e.destination && lt(e, e.destination);
     } catch (d) {
      $e(e, d), Ue(e, d);
     } finally {
      (Ae = n), (Be.current = r), r === Me && le(t);
     }
    }
   }
   function nt(e, t, r) {
    switch (((r.parentFlushed = !0), r.status)) {
     case 0:
      var n = (r.id = e.nextSegmentId++);
      return (r.lastPushedText = !1), (r.textEmbedded = !1), (e = e.responseState), t.push('<template id="'), t.push(e.placeholderPrefix), (e = n.toString(16)), t.push(e), t.push('"></template>');
     case 1:
      r.status = 2;
      var i = !0;
      n = r.chunks;
      var s = 0;
      r = r.children;
      for (var o = 0; o < r.length; o++) {
       for (i = r[o]; s < i.index; s++) t.push(n[s]);
       i = at(e, t, i);
      }
      for (; s < n.length - 1; s++) t.push(n[s]);
      return s < n.length && (i = t.push(n[s])), i;
     default:
      throw Error(a(390));
    }
   }
   function at(e, t, r) {
    var n = r.boundary;
    if (null === n) return nt(e, t, r);
    if (((n.parentFlushed = !0), n.forceClientRender)) return e.responseState.generateStaticMarkup || ((n = n.errorDigest), t.push('\x3c!--$!--\x3e'), t.push('<template'), n && (t.push(' data-dgst="'), (n = v(n)), t.push(n), t.push('"')), t.push('></template>')), nt(e, t, r), (e = !!e.responseState.generateStaticMarkup || t.push('\x3c!--/$--\x3e'));
    if (0 < n.pendingTasks) {
     (n.rootSegmentID = e.nextSegmentId++), 0 < n.completedSegments.length && e.partialBoundaries.push(n);
     var i = e.responseState,
      s = i.nextSuspenseID++;
     return (i = i.boundaryPrefix + s.toString(16)), (n = n.id = i), I(t, e.responseState, n), nt(e, t, r), t.push('\x3c!--/$--\x3e');
    }
    if (n.byteSize > e.progressiveChunkSize) return (n.rootSegmentID = e.nextSegmentId++), e.completedBoundaries.push(n), I(t, e.responseState, n.id), nt(e, t, r), t.push('\x3c!--/$--\x3e');
    if ((e.responseState.generateStaticMarkup || t.push('\x3c!--$--\x3e'), 1 !== (r = n.completedSegments).length)) throw Error(a(391));
    return at(e, t, r[0]), (e = !!e.responseState.generateStaticMarkup || t.push('\x3c!--/$--\x3e'));
   }
   function it(e, t, r) {
    return (
     (function (e, t, r, n) {
      switch (r.insertionMode) {
       case 0:
       case 1:
        return e.push('<div hidden id="'), e.push(t.segmentPrefix), (t = n.toString(16)), e.push(t), e.push('">');
       case 2:
        return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), (t = n.toString(16)), e.push(t), e.push('">');
       case 3:
        return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), (t = n.toString(16)), e.push(t), e.push('">');
       case 4:
        return e.push('<table hidden id="'), e.push(t.segmentPrefix), (t = n.toString(16)), e.push(t), e.push('">');
       case 5:
        return e.push('<table hidden><tbody id="'), e.push(t.segmentPrefix), (t = n.toString(16)), e.push(t), e.push('">');
       case 6:
        return e.push('<table hidden><tr id="'), e.push(t.segmentPrefix), (t = n.toString(16)), e.push(t), e.push('">');
       case 7:
        return e.push('<table hidden><colgroup id="'), e.push(t.segmentPrefix), (t = n.toString(16)), e.push(t), e.push('">');
       default:
        throw Error(a(397));
      }
     })(t, e.responseState, r.formatContext, r.id),
     at(e, t, r),
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
     })(t, r.formatContext)
    );
   }
   function st(e, t, r) {
    for (var n = r.completedSegments, i = 0; i < n.length; i++) ot(e, t, r, n[i]);
    if (((n.length = 0), (e = e.responseState), (n = r.id), (r = r.rootSegmentID), t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push('$RC("') : ((e.sentCompleteBoundaryFunction = !0), t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), null === n)) throw Error(a(395));
    return (r = r.toString(16)), t.push(n), t.push('","'), t.push(e.segmentPrefix), t.push(r), t.push('")<\/script>');
   }
   function ot(e, t, r, n) {
    if (2 === n.status) return !0;
    var i = n.id;
    if (-1 === i) {
     if (-1 === (n.id = r.rootSegmentID)) throw Error(a(392));
     return it(e, t, n);
    }
    return it(e, t, n), (e = e.responseState), t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push('$RS("') : ((e.sentCompleteSegmentFunction = !0), t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), t.push(e.segmentPrefix), (i = i.toString(16)), t.push(i), t.push('","'), t.push(e.placeholderPrefix), t.push(i), t.push('")<\/script>');
   }
   function lt(e, t) {
    try {
     var r = e.completedRootSegment;
     if (null !== r && 0 === e.pendingRootTasks) {
      at(e, t, r), (e.completedRootSegment = null);
      var n = e.responseState.bootstrapChunks;
      for (r = 0; r < n.length - 1; r++) t.push(n[r]);
      r < n.length && t.push(n[r]);
     }
     var i,
      s = e.clientRenderedBoundaries;
     for (i = 0; i < s.length; i++) {
      var o = s[i];
      n = t;
      var l = e.responseState,
       c = o.id,
       u = o.errorDigest,
       p = o.errorMessage,
       h = o.errorComponentStack;
      if ((n.push(l.startInlineScript), l.sentClientRenderFunction ? n.push('$RX("') : ((l.sentClientRenderFunction = !0), n.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), null === c)) throw Error(a(395));
      if ((n.push(c), n.push('"'), u || p || h)) {
       n.push(',');
       var d = P(u || '');
       n.push(d);
      }
      if (p || h) {
       n.push(',');
       var f = P(p || '');
       n.push(f);
      }
      if (h) {
       n.push(',');
       var m = P(h);
       n.push(m);
      }
      if (!n.push(')<\/script>')) return (e.destination = null), i++, void s.splice(0, i);
     }
     s.splice(0, i);
     var g = e.completedBoundaries;
     for (i = 0; i < g.length; i++) if (!st(e, t, g[i])) return (e.destination = null), i++, void g.splice(0, i);
     g.splice(0, i);
     var v = e.partialBoundaries;
     for (i = 0; i < v.length; i++) {
      var y = v[i];
      e: {
       (s = e), (o = t);
       var b = y.completedSegments;
       for (l = 0; l < b.length; l++)
        if (!ot(s, o, y, b[l])) {
         l++, b.splice(0, l);
         var S = !1;
         break e;
        }
       b.splice(0, l), (S = !0);
      }
      if (!S) return (e.destination = null), i++, void v.splice(0, i);
     }
     v.splice(0, i);
     var w = e.completedBoundaries;
     for (i = 0; i < w.length; i++) if (!st(e, t, w[i])) return (e.destination = null), i++, void w.splice(0, i);
     w.splice(0, i);
    } finally {
     0 === e.allPendingTasks && 0 === e.pingedTasks.length && 0 === e.clientRenderedBoundaries.length && 0 === e.completedBoundaries.length && t.push(null);
    }
   }
   function ct(e, t) {
    try {
     var r = e.abortableTasks;
     r.forEach(function (r) {
      return Qe(r, e, t);
     }),
      r.clear(),
      null !== e.destination && lt(e, e.destination);
    } catch (n) {
     $e(e, n), Ue(e, n);
    }
   }
   function ut() {}
   function pt(e, t, r, n) {
    var i = !1,
     s = null,
     o = '',
     l = {
      push: function (e) {
       return null !== e && (o += e), !0;
      },
      destroy: function (e) {
       (i = !0), (s = e);
      },
     },
     c = !1;
    if (
     ((e = (function (e, t, r, n, a, i, s, o, l) {
      var c = [],
       u = new Set();
      return ((r = ze((t = { destination: null, responseState: t, progressiveChunkSize: void 0 === n ? 12800 : n, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: u, pingedTasks: c, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: void 0 === a ? He : a, onAllReady: void 0 === i ? Ve : i, onShellReady: void 0 === s ? Ve : s, onShellError: void 0 === o ? Ve : o, onFatalError: void 0 === l ? Ve : l }), 0, null, r, !1, !1)).parentFlushed = !0), (e = Oe(t, e, null, r, u, ee, null, pe)), c.push(e), t;
     })(
      e,
      (function (e, t) {
       return { bootstrapChunks: [], startInlineScript: '<script>', placeholderPrefix: (t = void 0 === t ? '' : t) + 'P:', segmentPrefix: t + 'S:', boundaryPrefix: t + 'B:', idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
      })(r, t ? t.identifierPrefix : void 0),
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
     rt(e),
     ct(e, n),
     1 === e.status)
    )
     (e.status = 2), l.destroy(e.fatalError);
    else if (2 !== e.status && null === e.destination) {
     e.destination = l;
     try {
      lt(e, l);
     } catch (u) {
      $e(e, u), Ue(e, u);
     }
    }
    if (i) throw s;
    if (!c) throw Error(a(426));
    return o;
   }
   (t.renderToNodeStream = function () {
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
    (t.version = '18.3.1');
  },
 },
]);
