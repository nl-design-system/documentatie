'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65490],
 {
  9547(e, t, n) {
   n.d(t, { oz: () => Hr });
   var r = {};
   (n.r(r), n.d(r, { boolean: () => g, booleanish: () => y, commaOrSpaceSeparated: () => w, commaSeparated: () => b, number: () => v, overloadedBoolean: () => x, spaceSeparated: () => k }));
   var o = {};
   (n.r(o), n.d(o, { attentionMarkers: () => cn, contentInitial: () => rn, disable: () => fn, document: () => nn, flow: () => ln, flowInitial: () => on, insideSpan: () => un, string: () => an, text: () => sn }));
   const i = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    l = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    a = {};
   function s(e, t) {
    return ((t || a).jsx ? l : i).test(e);
   }
   const u = /[ \t\n\f\r]/g;
   function c(e) {
    return '' === e.replace(u, '');
   }
   class f {
    constructor(e, t, n) {
     ((this.property = e), (this.normal = t), n && (this.space = n));
    }
   }
   function p(e, t) {
    const n = {},
     r = {};
    let o = -1;
    for (; ++o < e.length; ) (Object.assign(n, e[o].property), Object.assign(r, e[o].normal));
    return new f(n, r, t);
   }
   function d(e) {
    return e.toLowerCase();
   }
   ((f.prototype.property = {}), (f.prototype.normal = {}), (f.prototype.space = null));
   class h {
    constructor(e, t) {
     ((this.property = e), (this.attribute = t));
    }
   }
   ((h.prototype.space = null), (h.prototype.boolean = !1), (h.prototype.booleanish = !1), (h.prototype.overloadedBoolean = !1), (h.prototype.number = !1), (h.prototype.commaSeparated = !1), (h.prototype.spaceSeparated = !1), (h.prototype.commaOrSpaceSeparated = !1), (h.prototype.mustUseProperty = !1), (h.prototype.defined = !1));
   let m = 0;
   const g = S(),
    y = S(),
    x = S(),
    v = S(),
    k = S(),
    b = S(),
    w = S();
   function S() {
    return 2 ** ++m;
   }
   const E = Object.keys(r);
   class C extends h {
    constructor(e, t, n, o) {
     let i = -1;
     if ((super(e, t), P(this, 'space', o), 'number' == typeof n))
      for (; ++i < E.length; ) {
       const e = E[i];
       P(this, E[i], (n & r[e]) === r[e]);
      }
    }
   }
   function P(e, t, n) {
    n && (e[t] = n);
   }
   C.prototype.defined = !0;
   const I = {}.hasOwnProperty;
   function T(e) {
    const t = {},
     n = {};
    let r;
    for (r in e.properties)
     if (I.call(e.properties, r)) {
      const o = e.properties[r],
       i = new C(r, e.transform(e.attributes || {}, r), o, e.space);
      (e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), (t[r] = i), (n[d(r)] = r), (n[d(i.attribute)] = r));
     }
    return new f(t, n, e.space);
   }
   const A = T({ space: 'xlink', transform: (e, t) => 'xlink:' + t.slice(5).toLowerCase(), properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null } }),
    L = T({ space: 'xml', transform: (e, t) => 'xml:' + t.slice(3).toLowerCase(), properties: { xmlLang: null, xmlBase: null, xmlSpace: null } });
   function O(e, t) {
    return t in e ? e[t] : t;
   }
   function D(e, t) {
    return O(e, t.toLowerCase());
   }
   const z = T({ space: 'xmlns', attributes: { xmlnsxlink: 'xmlns:xlink' }, transform: D, properties: { xmlns: null, xmlnsXLink: null } }),
    j = T({ transform: (e, t) => ('role' === t ? t : 'aria-' + t.slice(4).toLowerCase()), properties: { ariaActiveDescendant: null, ariaAtomic: y, ariaAutoComplete: null, ariaBusy: y, ariaChecked: y, ariaColCount: v, ariaColIndex: v, ariaColSpan: v, ariaControls: k, ariaCurrent: null, ariaDescribedBy: k, ariaDetails: null, ariaDisabled: y, ariaDropEffect: k, ariaErrorMessage: null, ariaExpanded: y, ariaFlowTo: k, ariaGrabbed: y, ariaHasPopup: null, ariaHidden: y, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: k, ariaLevel: v, ariaLive: null, ariaModal: y, ariaMultiLine: y, ariaMultiSelectable: y, ariaOrientation: null, ariaOwns: k, ariaPlaceholder: null, ariaPosInSet: v, ariaPressed: y, ariaReadOnly: y, ariaRelevant: null, ariaRequired: y, ariaRoleDescription: k, ariaRowCount: v, ariaRowIndex: v, ariaRowSpan: v, ariaSelected: y, ariaSetSize: v, ariaSort: null, ariaValueMax: v, ariaValueMin: v, ariaValueNow: v, ariaValueText: null, role: null } }),
    M = T({ space: 'html', attributes: { acceptcharset: 'accept-charset', classname: 'class', htmlfor: 'for', httpequiv: 'http-equiv' }, transform: D, mustUseProperty: ['checked', 'multiple', 'muted', 'selected'], properties: { abbr: null, accept: b, acceptCharset: k, accessKey: k, action: null, allow: null, allowFullScreen: g, allowPaymentRequest: g, allowUserMedia: g, alt: null, as: null, async: g, autoCapitalize: null, autoComplete: k, autoFocus: g, autoPlay: g, blocking: k, capture: g, charSet: null, checked: g, cite: null, className: k, cols: v, colSpan: null, content: null, contentEditable: y, controls: g, controlsList: k, coords: v | b, crossOrigin: null, data: null, dateTime: null, decoding: null, default: g, defer: g, dir: null, dirName: null, disabled: g, download: x, draggable: y, encType: null, enterKeyHint: null, fetchPriority: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: g, formTarget: null, headers: k, height: v, hidden: g, high: v, href: null, hrefLang: null, htmlFor: k, httpEquiv: k, id: null, imageSizes: null, imageSrcSet: null, inert: g, inputMode: null, integrity: null, is: null, isMap: g, itemId: null, itemProp: k, itemRef: k, itemScope: g, itemType: k, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: g, low: v, manifest: null, max: null, maxLength: v, media: null, method: null, min: null, minLength: v, multiple: g, muted: g, name: null, nonce: null, noModule: g, noValidate: g, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforeMatch: null, onBeforePrint: null, onBeforeToggle: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextLost: null, onContextMenu: null, onContextRestored: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onScrollEnd: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: g, optimum: v, pattern: null, ping: k, placeholder: null, playsInline: g, popover: null, popoverTarget: null, popoverTargetAction: null, poster: null, preload: null, readOnly: g, referrerPolicy: null, rel: k, required: g, reversed: g, rows: v, rowSpan: v, sandbox: k, scope: null, scoped: g, seamless: g, selected: g, shadowRootDelegatesFocus: g, shadowRootMode: null, shape: null, size: v, sizes: null, slot: null, span: v, spellCheck: y, src: null, srcDoc: null, srcLang: null, srcSet: null, start: v, step: null, style: null, tabIndex: v, target: null, title: null, translate: null, type: null, typeMustMatch: g, useMap: null, value: y, width: v, wrap: null, align: null, aLink: null, archive: k, axis: null, background: null, bgColor: null, border: v, borderColor: null, bottomMargin: v, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: g, declare: g, event: null, face: null, frame: null, frameBorder: null, hSpace: v, leftMargin: v, link: null, longDesc: null, lowSrc: null, marginHeight: v, marginWidth: v, noResize: g, noHref: g, noShade: g, noWrap: g, object: null, profile: null, prompt: null, rev: null, rightMargin: v, rules: null, scheme: null, scrolling: y, standby: null, summary: null, text: null, topMargin: v, valueType: null, version: null, vAlign: null, vLink: null, vSpace: v, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: g, disableRemotePlayback: g, prefix: null, property: null, results: v, security: null, unselectable: null } }),
    R = T({ space: 'svg', attributes: { accentHeight: 'accent-height', alignmentBaseline: 'alignment-baseline', arabicForm: 'arabic-form', baselineShift: 'baseline-shift', capHeight: 'cap-height', className: 'class', clipPath: 'clip-path', clipRule: 'clip-rule', colorInterpolation: 'color-interpolation', colorInterpolationFilters: 'color-interpolation-filters', colorProfile: 'color-profile', colorRendering: 'color-rendering', crossOrigin: 'crossorigin', dataType: 'datatype', dominantBaseline: 'dominant-baseline', enableBackground: 'enable-background', fillOpacity: 'fill-opacity', fillRule: 'fill-rule', floodColor: 'flood-color', floodOpacity: 'flood-opacity', fontFamily: 'font-family', fontSize: 'font-size', fontSizeAdjust: 'font-size-adjust', fontStretch: 'font-stretch', fontStyle: 'font-style', fontVariant: 'font-variant', fontWeight: 'font-weight', glyphName: 'glyph-name', glyphOrientationHorizontal: 'glyph-orientation-horizontal', glyphOrientationVertical: 'glyph-orientation-vertical', hrefLang: 'hreflang', horizAdvX: 'horiz-adv-x', horizOriginX: 'horiz-origin-x', horizOriginY: 'horiz-origin-y', imageRendering: 'image-rendering', letterSpacing: 'letter-spacing', lightingColor: 'lighting-color', markerEnd: 'marker-end', markerMid: 'marker-mid', markerStart: 'marker-start', navDown: 'nav-down', navDownLeft: 'nav-down-left', navDownRight: 'nav-down-right', navLeft: 'nav-left', navNext: 'nav-next', navPrev: 'nav-prev', navRight: 'nav-right', navUp: 'nav-up', navUpLeft: 'nav-up-left', navUpRight: 'nav-up-right', onAbort: 'onabort', onActivate: 'onactivate', onAfterPrint: 'onafterprint', onBeforePrint: 'onbeforeprint', onBegin: 'onbegin', onCancel: 'oncancel', onCanPlay: 'oncanplay', onCanPlayThrough: 'oncanplaythrough', onChange: 'onchange', onClick: 'onclick', onClose: 'onclose', onCopy: 'oncopy', onCueChange: 'oncuechange', onCut: 'oncut', onDblClick: 'ondblclick', onDrag: 'ondrag', onDragEnd: 'ondragend', onDragEnter: 'ondragenter', onDragExit: 'ondragexit', onDragLeave: 'ondragleave', onDragOver: 'ondragover', onDragStart: 'ondragstart', onDrop: 'ondrop', onDurationChange: 'ondurationchange', onEmptied: 'onemptied', onEnd: 'onend', onEnded: 'onended', onError: 'onerror', onFocus: 'onfocus', onFocusIn: 'onfocusin', onFocusOut: 'onfocusout', onHashChange: 'onhashchange', onInput: 'oninput', onInvalid: 'oninvalid', onKeyDown: 'onkeydown', onKeyPress: 'onkeypress', onKeyUp: 'onkeyup', onLoad: 'onload', onLoadedData: 'onloadeddata', onLoadedMetadata: 'onloadedmetadata', onLoadStart: 'onloadstart', onMessage: 'onmessage', onMouseDown: 'onmousedown', onMouseEnter: 'onmouseenter', onMouseLeave: 'onmouseleave', onMouseMove: 'onmousemove', onMouseOut: 'onmouseout', onMouseOver: 'onmouseover', onMouseUp: 'onmouseup', onMouseWheel: 'onmousewheel', onOffline: 'onoffline', onOnline: 'ononline', onPageHide: 'onpagehide', onPageShow: 'onpageshow', onPaste: 'onpaste', onPause: 'onpause', onPlay: 'onplay', onPlaying: 'onplaying', onPopState: 'onpopstate', onProgress: 'onprogress', onRateChange: 'onratechange', onRepeat: 'onrepeat', onReset: 'onreset', onResize: 'onresize', onScroll: 'onscroll', onSeeked: 'onseeked', onSeeking: 'onseeking', onSelect: 'onselect', onShow: 'onshow', onStalled: 'onstalled', onStorage: 'onstorage', onSubmit: 'onsubmit', onSuspend: 'onsuspend', onTimeUpdate: 'ontimeupdate', onToggle: 'ontoggle', onUnload: 'onunload', onVolumeChange: 'onvolumechange', onWaiting: 'onwaiting', onZoom: 'onzoom', overlinePosition: 'overline-position', overlineThickness: 'overline-thickness', paintOrder: 'paint-order', panose1: 'panose-1', pointerEvents: 'pointer-events', referrerPolicy: 'referrerpolicy', renderingIntent: 'rendering-intent', shapeRendering: 'shape-rendering', stopColor: 'stop-color', stopOpacity: 'stop-opacity', strikethroughPosition: 'strikethrough-position', strikethroughThickness: 'strikethrough-thickness', strokeDashArray: 'stroke-dasharray', strokeDashOffset: 'stroke-dashoffset', strokeLineCap: 'stroke-linecap', strokeLineJoin: 'stroke-linejoin', strokeMiterLimit: 'stroke-miterlimit', strokeOpacity: 'stroke-opacity', strokeWidth: 'stroke-width', tabIndex: 'tabindex', textAnchor: 'text-anchor', textDecoration: 'text-decoration', textRendering: 'text-rendering', transformOrigin: 'transform-origin', typeOf: 'typeof', underlinePosition: 'underline-position', underlineThickness: 'underline-thickness', unicodeBidi: 'unicode-bidi', unicodeRange: 'unicode-range', unitsPerEm: 'units-per-em', vAlphabetic: 'v-alphabetic', vHanging: 'v-hanging', vIdeographic: 'v-ideographic', vMathematical: 'v-mathematical', vectorEffect: 'vector-effect', vertAdvY: 'vert-adv-y', vertOriginX: 'vert-origin-x', vertOriginY: 'vert-origin-y', wordSpacing: 'word-spacing', writingMode: 'writing-mode', xHeight: 'x-height', playbackOrder: 'playbackorder', timelineBegin: 'timelinebegin' }, transform: O, properties: { about: w, accentHeight: v, accumulate: null, additive: null, alignmentBaseline: null, alphabetic: v, amplitude: v, arabicForm: null, ascent: v, attributeName: null, attributeType: null, azimuth: v, bandwidth: null, baselineShift: null, baseFrequency: null, baseProfile: null, bbox: null, begin: null, bias: v, by: null, calcMode: null, capHeight: v, className: k, clip: null, clipPath: null, clipPathUnits: null, clipRule: null, color: null, colorInterpolation: null, colorInterpolationFilters: null, colorProfile: null, colorRendering: null, content: null, contentScriptType: null, contentStyleType: null, crossOrigin: null, cursor: null, cx: null, cy: null, d: null, dataType: null, defaultAction: null, descent: v, diffuseConstant: v, direction: null, display: null, dur: null, divisor: v, dominantBaseline: null, download: g, dx: null, dy: null, edgeMode: null, editable: null, elevation: v, enableBackground: null, end: null, event: null, exponent: v, externalResourcesRequired: null, fill: null, fillOpacity: v, fillRule: null, filter: null, filterRes: null, filterUnits: null, floodColor: null, floodOpacity: null, focusable: null, focusHighlight: null, fontFamily: null, fontSize: null, fontSizeAdjust: null, fontStretch: null, fontStyle: null, fontVariant: null, fontWeight: null, format: null, fr: null, from: null, fx: null, fy: null, g1: b, g2: b, glyphName: b, glyphOrientationHorizontal: null, glyphOrientationVertical: null, glyphRef: null, gradientTransform: null, gradientUnits: null, handler: null, hanging: v, hatchContentUnits: null, hatchUnits: null, height: null, href: null, hrefLang: null, horizAdvX: v, horizOriginX: v, horizOriginY: v, id: null, ideographic: v, imageRendering: null, initialVisibility: null, in: null, in2: null, intercept: v, k: v, k1: v, k2: v, k3: v, k4: v, kernelMatrix: w, kernelUnitLength: null, keyPoints: null, keySplines: null, keyTimes: null, kerning: null, lang: null, lengthAdjust: null, letterSpacing: null, lightingColor: null, limitingConeAngle: v, local: null, markerEnd: null, markerMid: null, markerStart: null, markerHeight: null, markerUnits: null, markerWidth: null, mask: null, maskContentUnits: null, maskUnits: null, mathematical: null, max: null, media: null, mediaCharacterEncoding: null, mediaContentEncodings: null, mediaSize: v, mediaTime: null, method: null, min: null, mode: null, name: null, navDown: null, navDownLeft: null, navDownRight: null, navLeft: null, navNext: null, navPrev: null, navRight: null, navUp: null, navUpLeft: null, navUpRight: null, numOctaves: null, observer: null, offset: null, onAbort: null, onActivate: null, onAfterPrint: null, onBeforePrint: null, onBegin: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnd: null, onEnded: null, onError: null, onFocus: null, onFocusIn: null, onFocusOut: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadStart: null, onMessage: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onMouseWheel: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRepeat: null, onReset: null, onResize: null, onScroll: null, onSeeked: null, onSeeking: null, onSelect: null, onShow: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnload: null, onVolumeChange: null, onWaiting: null, onZoom: null, opacity: null, operator: null, order: null, orient: null, orientation: null, origin: null, overflow: null, overlay: null, overlinePosition: v, overlineThickness: v, paintOrder: null, panose1: null, path: null, pathLength: v, patternContentUnits: null, patternTransform: null, patternUnits: null, phase: null, ping: k, pitch: null, playbackOrder: null, pointerEvents: null, points: null, pointsAtX: v, pointsAtY: v, pointsAtZ: v, preserveAlpha: null, preserveAspectRatio: null, primitiveUnits: null, propagate: null, property: w, r: null, radius: null, referrerPolicy: null, refX: null, refY: null, rel: w, rev: w, renderingIntent: null, repeatCount: null, repeatDur: null, requiredExtensions: w, requiredFeatures: w, requiredFonts: w, requiredFormats: w, resource: null, restart: null, result: null, rotate: null, rx: null, ry: null, scale: null, seed: null, shapeRendering: null, side: null, slope: null, snapshotTime: null, specularConstant: v, specularExponent: v, spreadMethod: null, spacing: null, startOffset: null, stdDeviation: null, stemh: null, stemv: null, stitchTiles: null, stopColor: null, stopOpacity: null, strikethroughPosition: v, strikethroughThickness: v, string: null, stroke: null, strokeDashArray: w, strokeDashOffset: null, strokeLineCap: null, strokeLineJoin: null, strokeMiterLimit: v, strokeOpacity: v, strokeWidth: null, style: null, surfaceScale: v, syncBehavior: null, syncBehaviorDefault: null, syncMaster: null, syncTolerance: null, syncToleranceDefault: null, systemLanguage: w, tabIndex: v, tableValues: null, target: null, targetX: v, targetY: v, textAnchor: null, textDecoration: null, textRendering: null, textLength: null, timelineBegin: null, title: null, transformBehavior: null, type: null, typeOf: w, to: null, transform: null, transformOrigin: null, u1: null, u2: null, underlinePosition: v, underlineThickness: v, unicode: null, unicodeBidi: null, unicodeRange: null, unitsPerEm: v, values: null, vAlphabetic: v, vMathematical: v, vectorEffect: null, vHanging: v, vIdeographic: v, version: null, vertAdvY: v, vertOriginX: v, vertOriginY: v, viewBox: null, viewTarget: null, visibility: null, width: null, widths: null, wordSpacing: null, writingMode: null, x: null, x1: null, x2: null, xChannelSelector: null, xHeight: v, y: null, y1: null, y2: null, yChannelSelector: null, z: null, zoomAndPan: null } }),
    F = p([L, A, z, j, M], 'html'),
    _ = p([L, A, z, j, R], 'svg'),
    N = /^data[-\w.:]+$/i,
    B = /-[a-z]/g,
    U = /[A-Z]/g;
   function H(e) {
    return '-' + e.toLowerCase();
   }
   function V(e) {
    return e.charAt(1).toUpperCase();
   }
   const q = { classId: 'classID', dataType: 'datatype', itemId: 'itemID', strokeDashArray: 'strokeDasharray', strokeDashOffset: 'strokeDashoffset', strokeLineCap: 'strokeLinecap', strokeLineJoin: 'strokeLinejoin', strokeMiterLimit: 'strokeMiterlimit', typeOf: 'typeof', xLinkActuate: 'xlinkActuate', xLinkArcRole: 'xlinkArcrole', xLinkHref: 'xlinkHref', xLinkRole: 'xlinkRole', xLinkShow: 'xlinkShow', xLinkTitle: 'xlinkTitle', xLinkType: 'xlinkType', xmlnsXLink: 'xmlnsXlink' };
   var $ = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    W = /\n/g,
    Y = /^\s*/,
    K = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    Q = /^:\s*/,
    J = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    X = /^[;\s]*/,
    Z = /^\s+|\s+$/g,
    G = '';
   function ee(e) {
    return e ? e.replace(Z, G) : G;
   }
   function te(e, t) {
    let n = null;
    if (!e || 'string' != typeof e) return n;
    const r = (function (e, t) {
      if ('string' != typeof e) throw new TypeError('First argument must be a string');
      if (!e) return [];
      t = t || {};
      var n = 1,
       r = 1;
      function o(e) {
       var t = e.match(W);
       t && (n += t.length);
       var o = e.lastIndexOf('\n');
       r = ~o ? e.length - o : r + e.length;
      }
      function i() {
       var e = { line: n, column: r };
       return function (t) {
        return ((t.position = new l(e)), u(), t);
       };
      }
      function l(e) {
       ((this.start = e), (this.end = { line: n, column: r }), (this.source = t.source));
      }
      function a(o) {
       var i = new Error(t.source + ':' + n + ':' + r + ': ' + o);
       if (((i.reason = o), (i.filename = t.source), (i.line = n), (i.column = r), (i.source = e), !t.silent)) throw i;
      }
      function s(t) {
       var n = t.exec(e);
       if (n) {
        var r = n[0];
        return (o(r), (e = e.slice(r.length)), n);
       }
      }
      function u() {
       s(Y);
      }
      function c(e) {
       var t;
       for (e = e || []; (t = f()); ) !1 !== t && e.push(t);
       return e;
      }
      function f() {
       var t = i();
       if ('/' == e.charAt(0) && '*' == e.charAt(1)) {
        for (var n = 2; G != e.charAt(n) && ('*' != e.charAt(n) || '/' != e.charAt(n + 1)); ) ++n;
        if (((n += 2), G === e.charAt(n - 1))) return a('End of comment missing');
        var l = e.slice(2, n - 2);
        return ((r += 2), o(l), (e = e.slice(n)), (r += 2), t({ type: 'comment', comment: l }));
       }
      }
      function p() {
       var e = i(),
        t = s(K);
       if (t) {
        if ((f(), !s(Q))) return a("property missing ':'");
        var n = s(J),
         r = e({ type: 'declaration', property: ee(t[0].replace($, G)), value: n ? ee(n[0].replace($, G)) : G });
        return (s(X), r);
       }
      }
      return (
       (l.prototype.content = e),
       u(),
       (function () {
        var e,
         t = [];
        for (c(t); (e = p()); ) !1 !== e && (t.push(e), c(t));
        return t;
       })()
      );
     })(e),
     o = 'function' == typeof t;
    return (
     r.forEach((e) => {
      if ('declaration' !== e.type) return;
      const { property: r, value: i } = e;
      o ? t(r, i, e) : i && ((n = n || {}), (n[r] = i));
     }),
     n
    );
   }
   const ne = oe('end'),
    re = oe('start');
   function oe(e) {
    return function (t) {
     const n = (t && t.position && t.position[e]) || {};
     if ('number' == typeof n.line && n.line > 0 && 'number' == typeof n.column && n.column > 0) return { line: n.line, column: n.column, offset: 'number' == typeof n.offset && n.offset > -1 ? n.offset : void 0 };
    };
   }
   function ie(e) {
    return e && 'object' == typeof e ? ('position' in e || 'type' in e ? ae(e.position) : 'start' in e || 'end' in e ? ae(e) : 'line' in e || 'column' in e ? le(e) : '') : '';
   }
   function le(e) {
    return se(e && e.line) + ':' + se(e && e.column);
   }
   function ae(e) {
    return le(e && e.start) + '-' + le(e && e.end);
   }
   function se(e) {
    return e && 'number' == typeof e ? e : 1;
   }
   class ue extends Error {
    constructor(e, t, n) {
     (super(), 'string' == typeof t && ((n = t), (t = void 0)));
     let r = '',
      o = {},
      i = !1;
     if ((t && (o = ('line' in t && 'column' in t) || ('start' in t && 'end' in t) ? { place: t } : 'type' in t ? { ancestors: [t], place: t.position } : { ...t }), 'string' == typeof e ? (r = e) : !o.cause && e && ((i = !0), (r = e.message), (o.cause = e)), !o.ruleId && !o.source && 'string' == typeof n)) {
      const e = n.indexOf(':');
      -1 === e ? (o.ruleId = n) : ((o.source = n.slice(0, e)), (o.ruleId = n.slice(e + 1)));
     }
     if (!o.place && o.ancestors && o.ancestors) {
      const e = o.ancestors[o.ancestors.length - 1];
      e && (o.place = e.position);
     }
     const l = o.place && 'start' in o.place ? o.place.start : o.place;
     ((this.ancestors = o.ancestors || void 0), (this.cause = o.cause || void 0), (this.column = l ? l.column : void 0), (this.fatal = void 0), this.file, (this.message = r), (this.line = l ? l.line : void 0), (this.name = ie(o.place) || '1:1'), (this.place = o.place || void 0), (this.reason = this.message), (this.ruleId = o.ruleId || void 0), (this.source = o.source || void 0), (this.stack = i && o.cause && 'string' == typeof o.cause.stack ? o.cause.stack : ''), this.actual, this.expected, this.note, this.url);
    }
   }
   ((ue.prototype.file = ''), (ue.prototype.name = ''), (ue.prototype.reason = ''), (ue.prototype.message = ''), (ue.prototype.stack = ''), (ue.prototype.column = void 0), (ue.prototype.line = void 0), (ue.prototype.ancestors = void 0), (ue.prototype.cause = void 0), (ue.prototype.fatal = void 0), (ue.prototype.place = void 0), (ue.prototype.ruleId = void 0), (ue.prototype.source = void 0));
   const ce = {}.hasOwnProperty,
    fe = new Map(),
    pe = /[A-Z]/g,
    de = /-([a-z])/g,
    he = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
    me = new Set(['td', 'th']),
    ge = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
   function ye(e, t) {
    if (!t || void 0 === t.Fragment) throw new TypeError('Expected `Fragment` in options');
    const n = t.filePath || void 0;
    let r;
    if (t.development) {
     if ('function' != typeof t.jsxDEV) throw new TypeError('Expected `jsxDEV` in options when `development: true`');
     r = (function (e, t) {
      return n;
      function n(n, r, o, i) {
       const l = Array.isArray(o.children),
        a = re(n);
       return t(r, o, i, l, { columnNumber: a ? a.column - 1 : void 0, fileName: e, lineNumber: a ? a.line : void 0 }, void 0);
      }
     })(n, t.jsxDEV);
    } else {
     if ('function' != typeof t.jsx) throw new TypeError('Expected `jsx` in production options');
     if ('function' != typeof t.jsxs) throw new TypeError('Expected `jsxs` in production options');
     r = (function (e, t, n) {
      return r;
      function r(e, r, o, i) {
       const l = Array.isArray(o.children) ? n : t;
       return i ? l(r, o, i) : l(r, o);
      }
     })(0, t.jsx, t.jsxs);
    }
    const o = { Fragment: t.Fragment, ancestors: [], components: t.components || {}, create: r, elementAttributeNameCase: t.elementAttributeNameCase || 'react', evaluater: t.createEvaluater ? t.createEvaluater() : void 0, filePath: n, ignoreInvalidStyle: t.ignoreInvalidStyle || !1, passKeys: !1 !== t.passKeys, passNode: t.passNode || !1, schema: 'svg' === t.space ? _ : F, stylePropertyNameCase: t.stylePropertyNameCase || 'dom', tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle },
     i = xe(o, e, void 0);
    return i && 'string' != typeof i ? i : o.create(e, o.Fragment, { children: i || void 0 }, void 0);
   }
   function xe(e, t, n) {
    return 'element' === t.type
     ? (function (e, t, n) {
        const r = e.schema;
        let o = r;
        'svg' === t.tagName.toLowerCase() && 'html' === r.space && ((o = _), (e.schema = o));
        e.ancestors.push(t);
        const i = Se(e, t.tagName, !1),
         l = (function (e, t) {
          const n = {};
          let r, o;
          for (o in t.properties)
           if ('children' !== o && ce.call(t.properties, o)) {
            const i = we(e, o, t.properties[o]);
            if (i) {
             const [o, l] = i;
             e.tableCellAlignToStyle && 'align' === o && 'string' == typeof l && me.has(t.tagName) ? (r = l) : (n[o] = l);
            }
           }
          if (r) {
           (n.style || (n.style = {}))['css' === e.stylePropertyNameCase ? 'text-align' : 'textAlign'] = r;
          }
          return n;
         })(e, t);
        let a = be(e, t);
        he.has(t.tagName) &&
         (a = a.filter(function (e) {
          return 'string' != typeof e || !('object' == typeof (t = e) ? 'text' === t.type && c(t.value) : c(t));
          var t;
         }));
        return (ve(e, l, i, t), ke(l, a), e.ancestors.pop(), (e.schema = r), e.create(t, i, l, n));
       })(e, t, n)
     : 'mdxFlowExpression' === t.type || 'mdxTextExpression' === t.type
       ? (function (e, t) {
          if (t.data && t.data.estree && e.evaluater) {
           const n = t.data.estree.body[0];
           return (n.type, e.evaluater.evaluateExpression(n.expression));
          }
          Ee(e, t.position);
         })(e, t)
       : 'mdxJsxFlowElement' === t.type || 'mdxJsxTextElement' === t.type
         ? (function (e, t, n) {
            const r = e.schema;
            let o = r;
            'svg' === t.name && 'html' === r.space && ((o = _), (e.schema = o));
            e.ancestors.push(t);
            const i = null === t.name ? e.Fragment : Se(e, t.name, !0),
             l = (function (e, t) {
              const n = {};
              for (const r of t.attributes)
               if ('mdxJsxExpressionAttribute' === r.type)
                if (r.data && r.data.estree && e.evaluater) {
                 const t = r.data.estree.body[0];
                 t.type;
                 const o = t.expression;
                 o.type;
                 const i = o.properties[0];
                 (i.type, Object.assign(n, e.evaluater.evaluateExpression(i.argument)));
                } else Ee(e, t.position);
               else {
                const o = r.name;
                let i;
                if (r.value && 'object' == typeof r.value)
                 if (r.value.data && r.value.data.estree && e.evaluater) {
                  const t = r.value.data.estree.body[0];
                  (t.type, (i = e.evaluater.evaluateExpression(t.expression)));
                 } else Ee(e, t.position);
                else i = null === r.value || r.value;
                n[o] = i;
               }
              return n;
             })(e, t),
             a = be(e, t);
            return (ve(e, l, i, t), ke(l, a), e.ancestors.pop(), (e.schema = r), e.create(t, i, l, n));
           })(e, t, n)
         : 'mdxjsEsm' === t.type
           ? (function (e, t) {
              if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
              Ee(e, t.position);
             })(e, t)
           : 'root' === t.type
             ? (function (e, t, n) {
                const r = {};
                return (ke(r, be(e, t)), e.create(t, e.Fragment, r, n));
               })(e, t, n)
             : 'text' === t.type
               ? (function (e, t) {
                  return t.value;
                 })(0, t)
               : void 0;
   }
   function ve(e, t, n, r) {
    'string' != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
   }
   function ke(e, t) {
    if (t.length > 0) {
     const n = t.length > 1 ? t : t[0];
     n && (e.children = n);
    }
   }
   function be(e, t) {
    const n = [];
    let r = -1;
    const o = e.passKeys ? new Map() : fe;
    for (; ++r < t.children.length; ) {
     const i = t.children[r];
     let l;
     if (e.passKeys) {
      const e = 'element' === i.type ? i.tagName : 'mdxJsxFlowElement' === i.type || 'mdxJsxTextElement' === i.type ? i.name : void 0;
      if (e) {
       const t = o.get(e) || 0;
       ((l = e + '-' + t), o.set(e, t + 1));
      }
     }
     const a = xe(e, i, l);
     void 0 !== a && n.push(a);
    }
    return n;
   }
   function we(e, t, n) {
    const r = (function (e, t) {
     const n = d(t);
     let r = t,
      o = h;
     if (n in e.normal) return e.property[e.normal[n]];
     if (n.length > 4 && 'data' === n.slice(0, 4) && N.test(t)) {
      if ('-' === t.charAt(4)) {
       const e = t.slice(5).replace(B, V);
       r = 'data' + e.charAt(0).toUpperCase() + e.slice(1);
      } else {
       const e = t.slice(4);
       if (!B.test(e)) {
        let n = e.replace(U, H);
        ('-' !== n.charAt(0) && (n = '-' + n), (t = 'data' + n));
       }
      }
      o = C;
     }
     return new o(r, t);
    })(e.schema, t);
    if (!(null == n || ('number' == typeof n && Number.isNaN(n)))) {
     if (
      (Array.isArray(n) &&
       (n = r.commaSeparated
        ? (function (e, t) {
           const n = t || {};
           return ('' === e[e.length - 1] ? [...e, ''] : e).join((n.padRight ? ' ' : '') + ',' + (!1 === n.padLeft ? '' : ' ')).trim();
          })(n)
        : n.join(' ').trim()),
      'style' === r.property)
     ) {
      let t =
       'object' == typeof n
        ? n
        : (function (e, t) {
           const n = {};
           try {
            te(t, r);
           } catch (o) {
            if (!e.ignoreInvalidStyle) {
             const t = o,
              n = new ue('Cannot parse `style` attribute', { ancestors: e.ancestors, cause: t, ruleId: 'style', source: 'hast-util-to-jsx-runtime' });
             throw ((n.file = e.filePath || void 0), (n.url = ge + '#cannot-parse-style-attribute'), n);
            }
           }
           return n;
           function r(e, t) {
            let r = e;
            ('--' !== r.slice(0, 2) && ('-ms-' === r.slice(0, 4) && (r = 'ms-' + r.slice(4)), (r = r.replace(de, Pe))), (n[r] = t));
           }
          })(e, String(n));
      return (
       'css' === e.stylePropertyNameCase &&
        (t = (function (e) {
         const t = {};
         let n;
         for (n in e) ce.call(e, n) && (t[Ce(n)] = e[n]);
         return t;
        })(t)),
       ['style', t]
      );
     }
     return ['react' === e.elementAttributeNameCase && r.space ? q[r.property] || r.property : r.attribute, n];
    }
   }
   function Se(e, t, n) {
    let r;
    if (n)
     if (t.includes('.')) {
      const e = t.split('.');
      let n,
       o = -1;
      for (; ++o < e.length; ) {
       const t = s(e[o]) ? { type: 'Identifier', name: e[o] } : { type: 'Literal', value: e[o] };
       n = n ? { type: 'MemberExpression', object: n, property: t, computed: Boolean(o && 'Literal' === t.type), optional: !1 } : t;
      }
      r = n;
     } else r = s(t) && !/^[a-z]/.test(t) ? { type: 'Identifier', name: t } : { type: 'Literal', value: t };
    else r = { type: 'Literal', value: t };
    if ('Literal' === r.type) {
     const t = r.value;
     return ce.call(e.components, t) ? e.components[t] : t;
    }
    if (e.evaluater) return e.evaluater.evaluateExpression(r);
    Ee(e);
   }
   function Ee(e, t) {
    const n = new ue('Cannot handle MDX estrees without `createEvaluater`', { ancestors: e.ancestors, place: t, ruleId: 'mdx-estree', source: 'hast-util-to-jsx-runtime' });
    throw ((n.file = e.filePath || void 0), (n.url = ge + '#cannot-handle-mdx-estrees-without-createevaluater'), n);
   }
   function Ce(e) {
    let t = e.replace(pe, Ie);
    return ('ms-' === t.slice(0, 3) && (t = '-' + t), t);
   }
   function Pe(e, t) {
    return t.toUpperCase();
   }
   function Ie(e) {
    return '-' + e.toLowerCase();
   }
   const Te = { action: ['form'], cite: ['blockquote', 'del', 'ins', 'q'], data: ['object'], formAction: ['button', 'input'], href: ['a', 'area', 'base', 'link'], icon: ['menuitem'], itemId: null, manifest: ['html'], ping: ['a', 'area'], poster: ['video'], src: ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'] };
   var Ae = n(86070);
   n(30758);
   const Le = {};
   function Oe(e, t, n) {
    if (
     (function (e) {
      return Boolean(e && 'object' == typeof e);
     })(e)
    ) {
     if ('value' in e) return 'html' !== e.type || n ? e.value : '';
     if (t && 'alt' in e && e.alt) return e.alt;
     if ('children' in e) return De(e.children, t, n);
    }
    return Array.isArray(e) ? De(e, t, n) : '';
   }
   function De(e, t, n) {
    const r = [];
    let o = -1;
    for (; ++o < e.length; ) r[o] = Oe(e[o], t, n);
    return r.join('');
   }
   function ze(e, t, n, r) {
    const o = e.length;
    let i,
     l = 0;
    if (((t = t < 0 ? (-t > o ? 0 : o + t) : t > o ? o : t), (n = n > 0 ? n : 0), r.length < 1e4)) ((i = Array.from(r)), i.unshift(t, n), e.splice(...i));
    else for (n && e.splice(t, n); l < r.length; ) ((i = r.slice(l, l + 1e4)), i.unshift(t, 0), e.splice(...i), (l += 1e4), (t += 1e4));
   }
   function je(e, t) {
    return e.length > 0 ? (ze(e, e.length, 0, t), e) : t;
   }
   function Me(e) {
    const t = {};
    let n,
     r,
     o,
     i,
     l,
     a,
     s,
     u = -1;
    for (; ++u < e.length; ) {
     for (; u in t; ) u = t[u];
     if (((n = e[u]), u && 'chunkFlow' === n[1].type && 'listItemPrefix' === e[u - 1][1].type && ((a = n[1]._tokenizer.events), (o = 0), o < a.length && 'lineEndingBlank' === a[o][1].type && (o += 2), o < a.length && 'content' === a[o][1].type))) for (; ++o < a.length && 'content' !== a[o][1].type; ) 'chunkText' === a[o][1].type && ((a[o][1]._isInFirstContentOfListItem = !0), o++);
     if ('enter' === n[0]) n[1].contentType && (Object.assign(t, Re(e, u)), (u = t[u]), (s = !0));
     else if (n[1]._container) {
      for (o = u, r = void 0; o-- && ((i = e[o]), 'lineEnding' === i[1].type || 'lineEndingBlank' === i[1].type); ) 'enter' === i[0] && (r && (e[r][1].type = 'lineEndingBlank'), (i[1].type = 'lineEnding'), (r = o));
      r && ((n[1].end = Object.assign({}, e[r][1].start)), (l = e.slice(r, u)), l.unshift(n), ze(e, r, u - r + 1, l));
     }
    }
    return !s;
   }
   function Re(e, t) {
    const n = e[t][1],
     r = e[t][2];
    let o = t - 1;
    const i = [],
     l = n._tokenizer || r.parser[n.contentType](n.start),
     a = l.events,
     s = [],
     u = {};
    let c,
     f,
     p = -1,
     d = n,
     h = 0,
     m = 0;
    const g = [m];
    for (; d; ) {
     for (; e[++o][1] !== d; );
     (i.push(o), d._tokenizer || ((c = r.sliceStream(d)), d.next || c.push(null), f && l.defineSkip(d.start), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(c), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), (f = d), (d = d.next));
    }
    for (d = n; ++p < a.length; ) 'exit' === a[p][0] && 'enter' === a[p - 1][0] && a[p][1].type === a[p - 1][1].type && a[p][1].start.line !== a[p][1].end.line && ((m = p + 1), g.push(m), (d._tokenizer = void 0), (d.previous = void 0), (d = d.next));
    for (l.events = [], d ? ((d._tokenizer = void 0), (d.previous = void 0)) : g.pop(), p = g.length; p--; ) {
     const t = a.slice(g[p], g[p + 1]),
      n = i.pop();
     (s.unshift([n, n + t.length - 1]), ze(e, n, 2, t));
    }
    for (p = -1; ++p < s.length; ) ((u[h + s[p][0]] = h + s[p][1]), (h += s[p][1] - s[p][0] - 1));
    return u;
   }
   const Fe = {}.hasOwnProperty;
   function _e(e, t) {
    let n;
    for (n in t) {
     const r = (Fe.call(e, n) ? e[n] : void 0) || (e[n] = {}),
      o = t[n];
     let i;
     if (o)
      for (i in o) {
       Fe.call(r, i) || (r[i] = []);
       const e = o[i];
       Ne(r[i], Array.isArray(e) ? e : e ? [e] : []);
      }
    }
   }
   function Ne(e, t) {
    let n = -1;
    const r = [];
    for (; ++n < t.length; ) ('after' === t[n].add ? e : r).push(t[n]);
    ze(e, 0, 0, r);
   }
   const Be = Ze(/\p{P}/u),
    Ue = Ze(/[A-Za-z]/),
    He = Ze(/[\dA-Za-z]/),
    Ve = Ze(/[#-'*+\--9=?A-Z^-~]/);
   function qe(e) {
    return null !== e && (e < 32 || 127 === e);
   }
   const $e = Ze(/\d/),
    We = Ze(/[\dA-Fa-f]/),
    Ye = Ze(/[!-/:-@[-`{-~]/);
   function Ke(e) {
    return null !== e && e < -2;
   }
   function Qe(e) {
    return null !== e && (e < 0 || 32 === e);
   }
   function Je(e) {
    return -2 === e || -1 === e || 32 === e;
   }
   const Xe = Ze(/\s/);
   function Ze(e) {
    return function (t) {
     return null !== t && t > -1 && e.test(String.fromCharCode(t));
    };
   }
   function Ge(e, t, n, r) {
    const o = r ? r - 1 : Number.POSITIVE_INFINITY;
    let i = 0;
    return function (r) {
     if (Je(r)) return (e.enter(n), l(r));
     return t(r);
    };
    function l(r) {
     return Je(r) && i++ < o ? (e.consume(r), l) : (e.exit(n), t(r));
    }
   }
   const et = {
    tokenize: function (e) {
     const t = e.attempt(
      this.parser.constructs.contentInitial,
      function (n) {
       if (null === n) return void e.consume(n);
       return (e.enter('lineEnding'), e.consume(n), e.exit('lineEnding'), Ge(e, t, 'linePrefix'));
      },
      function (t) {
       return (e.enter('paragraph'), r(t));
      },
     );
     let n;
     return t;
     function r(t) {
      const r = e.enter('chunkText', { contentType: 'text', previous: n });
      return (n && (n.next = r), (n = r), o(t));
     }
     function o(t) {
      return null === t ? (e.exit('chunkText'), e.exit('paragraph'), void e.consume(t)) : Ke(t) ? (e.consume(t), e.exit('chunkText'), r) : (e.consume(t), o);
     }
    },
   };
   const tt = {
     tokenize: function (e) {
      const t = this,
       n = [];
      let r,
       o,
       i,
       l = 0;
      return a;
      function a(r) {
       if (l < n.length) {
        const o = n[l];
        return ((t.containerState = o[1]), e.attempt(o[0].continuation, s, u)(r));
       }
       return u(r);
      }
      function s(e) {
       if ((l++, t.containerState._closeFlow)) {
        ((t.containerState._closeFlow = void 0), r && x());
        const n = t.events.length;
        let o,
         i = n;
        for (; i--; )
         if ('exit' === t.events[i][0] && 'chunkFlow' === t.events[i][1].type) {
          o = t.events[i][1].end;
          break;
         }
        y(l);
        let a = n;
        for (; a < t.events.length; ) ((t.events[a][1].end = Object.assign({}, o)), a++);
        return (ze(t.events, i + 1, 0, t.events.slice(n)), (t.events.length = a), u(e));
       }
       return a(e);
      }
      function u(o) {
       if (l === n.length) {
        if (!r) return p(o);
        if (r.currentConstruct && r.currentConstruct.concrete) return h(o);
        t.interrupt = Boolean(r.currentConstruct && !r._gfmTableDynamicInterruptHack);
       }
       return ((t.containerState = {}), e.check(nt, c, f)(o));
      }
      function c(e) {
       return (r && x(), y(l), p(e));
      }
      function f(e) {
       return ((t.parser.lazy[t.now().line] = l !== n.length), (i = t.now().offset), h(e));
      }
      function p(n) {
       return ((t.containerState = {}), e.attempt(nt, d, h)(n));
      }
      function d(e) {
       return (l++, n.push([t.currentConstruct, t.containerState]), p(e));
      }
      function h(n) {
       return null === n ? (r && x(), y(0), void e.consume(n)) : ((r = r || t.parser.flow(t.now())), e.enter('chunkFlow', { contentType: 'flow', previous: o, _tokenizer: r }), m(n));
      }
      function m(n) {
       return null === n ? (g(e.exit('chunkFlow'), !0), y(0), void e.consume(n)) : Ke(n) ? (e.consume(n), g(e.exit('chunkFlow')), (l = 0), (t.interrupt = void 0), a) : (e.consume(n), m);
      }
      function g(e, n) {
       const a = t.sliceStream(e);
       if ((n && a.push(null), (e.previous = o), o && (o.next = e), (o = e), r.defineSkip(e.start), r.write(a), t.parser.lazy[e.start.line])) {
        let e = r.events.length;
        for (; e--; ) if (r.events[e][1].start.offset < i && (!r.events[e][1].end || r.events[e][1].end.offset > i)) return;
        const n = t.events.length;
        let o,
         a,
         s = n;
        for (; s--; )
         if ('exit' === t.events[s][0] && 'chunkFlow' === t.events[s][1].type) {
          if (o) {
           a = t.events[s][1].end;
           break;
          }
          o = !0;
         }
        for (y(l), e = n; e < t.events.length; ) ((t.events[e][1].end = Object.assign({}, a)), e++);
        (ze(t.events, s + 1, 0, t.events.slice(n)), (t.events.length = e));
       }
      }
      function y(r) {
       let o = n.length;
       for (; o-- > r; ) {
        const r = n[o];
        ((t.containerState = r[1]), r[0].exit.call(t, e));
       }
       n.length = r;
      }
      function x() {
       (r.write([null]), (o = void 0), (r = void 0), (t.containerState._closeFlow = void 0));
      }
     },
    },
    nt = {
     tokenize: function (e, t, n) {
      return Ge(e, e.attempt(this.parser.constructs.document, t, n), 'linePrefix', this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4);
     },
    };
   const rt = {
    tokenize: function (e, t, n) {
     return function (t) {
      return Je(t) ? Ge(e, r, 'linePrefix')(t) : r(t);
     };
     function r(e) {
      return null === e || Ke(e) ? t(e) : n(e);
     }
    },
    partial: !0,
   };
   const ot = {
     tokenize: function (e, t) {
      let n;
      return function (t) {
       return (e.enter('content'), (n = e.enter('chunkContent', { contentType: 'content' })), r(t));
      };
      function r(t) {
       return null === t ? o(t) : Ke(t) ? e.check(it, i, o)(t) : (e.consume(t), r);
      }
      function o(n) {
       return (e.exit('chunkContent'), e.exit('content'), t(n));
      }
      function i(t) {
       return (e.consume(t), e.exit('chunkContent'), (n.next = e.enter('chunkContent', { contentType: 'content', previous: n })), (n = n.next), r);
      }
     },
     resolve: function (e) {
      return (Me(e), e);
     },
    },
    it = {
     tokenize: function (e, t, n) {
      const r = this;
      return function (t) {
       return (e.exit('chunkContent'), e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), Ge(e, o, 'linePrefix'));
      };
      function o(o) {
       if (null === o || Ke(o)) return n(o);
       const i = r.events[r.events.length - 1];
       return !r.parser.constructs.disable.null.includes('codeIndented') && i && 'linePrefix' === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o);
      }
     },
     partial: !0,
    };
   const lt = {
    tokenize: function (e) {
     const t = this,
      n = e.attempt(
       rt,
       function (r) {
        if (null === r) return void e.consume(r);
        return (e.enter('lineEndingBlank'), e.consume(r), e.exit('lineEndingBlank'), (t.currentConstruct = void 0), n);
       },
       e.attempt(this.parser.constructs.flowInitial, r, Ge(e, e.attempt(this.parser.constructs.flow, r, e.attempt(ot, r)), 'linePrefix')),
      );
     return n;
     function r(r) {
      if (null !== r) return (e.enter('lineEnding'), e.consume(r), e.exit('lineEnding'), (t.currentConstruct = void 0), n);
      e.consume(r);
     }
    },
   };
   const at = { resolveAll: ft() },
    st = ct('string'),
    ut = ct('text');
   function ct(e) {
    return {
     tokenize: function (t) {
      const n = this,
       r = this.parser.constructs[e],
       o = t.attempt(r, i, l);
      return i;
      function i(e) {
       return s(e) ? o(e) : l(e);
      }
      function l(e) {
       if (null !== e) return (t.enter('data'), t.consume(e), a);
       t.consume(e);
      }
      function a(e) {
       return s(e) ? (t.exit('data'), o(e)) : (t.consume(e), a);
      }
      function s(e) {
       if (null === e) return !0;
       const t = r[e];
       let o = -1;
       if (t)
        for (; ++o < t.length; ) {
         const e = t[o];
         if (!e.previous || e.previous.call(n, n.previous)) return !0;
        }
       return !1;
      }
     },
     resolveAll: ft('text' === e ? pt : void 0),
    };
   }
   function ft(e) {
    return function (t, n) {
     let r,
      o = -1;
     for (; ++o <= t.length; ) void 0 === r ? t[o] && 'data' === t[o][1].type && ((r = o), o++) : (t[o] && 'data' === t[o][1].type) || (o !== r + 2 && ((t[r][1].end = t[o - 1][1].end), t.splice(r + 2, o - r - 2), (o = r + 2)), (r = void 0));
     return e ? e(t, n) : t;
    };
   }
   function pt(e, t) {
    let n = 0;
    for (; ++n <= e.length; )
     if ((n === e.length || 'lineEnding' === e[n][1].type) && 'data' === e[n - 1][1].type) {
      const r = e[n - 1][1],
       o = t.sliceStream(r);
      let i,
       l = o.length,
       a = -1,
       s = 0;
      for (; l--; ) {
       const e = o[l];
       if ('string' == typeof e) {
        for (a = e.length; 32 === e.charCodeAt(a - 1); ) (s++, a--);
        if (a) break;
        a = -1;
       } else if (-2 === e) ((i = !0), s++);
       else if (-1 !== e) {
        l++;
        break;
       }
      }
      if (s) {
       const o = { type: n === e.length || i || s < 2 ? 'lineSuffix' : 'hardBreakTrailing', start: { line: r.end.line, column: r.end.column - s, offset: r.end.offset - s, _index: r.start._index + l, _bufferIndex: l ? a : r.start._bufferIndex + a }, end: Object.assign({}, r.end) };
       ((r.end = Object.assign({}, o.start)), r.start.offset === r.end.offset ? Object.assign(r, o) : (e.splice(n, 0, ['enter', o, t], ['exit', o, t]), (n += 2)));
      }
      n++;
     }
    return e;
   }
   function dt(e, t, n) {
    const r = [];
    let o = -1;
    for (; ++o < e.length; ) {
     const i = e[o].resolveAll;
     i && !r.includes(i) && ((t = i(t, n)), r.push(i));
    }
    return t;
   }
   function ht(e, t, n) {
    let r = Object.assign(n ? Object.assign({}, n) : { line: 1, column: 1, offset: 0 }, { _index: 0, _bufferIndex: -1 });
    const o = {},
     i = [];
    let l = [],
     a = [],
     s = !0;
    const u = {
      consume: function (e) {
       Ke(e) ? (r.line++, (r.column = 1), (r.offset += -3 === e ? 2 : 1), k()) : -1 !== e && (r.column++, r.offset++);
       r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && ((r._bufferIndex = -1), r._index++));
       ((c.previous = e), (s = !0));
      },
      enter: function (e, t) {
       const n = t || {};
       return ((n.type = e), (n.start = h()), c.events.push(['enter', n, c]), a.push(n), n);
      },
      exit: function (e) {
       const t = a.pop();
       return ((t.end = h()), c.events.push(['exit', t, c]), t);
      },
      attempt: x(function (e, t) {
       v(e, t.from);
      }),
      check: x(y),
      interrupt: x(y, { interrupt: !0 }),
     },
     c = {
      previous: null,
      code: null,
      containerState: {},
      events: [],
      parser: e,
      sliceStream: d,
      sliceSerialize: function (e, t) {
       return (function (e, t) {
        let n = -1;
        const r = [];
        let o;
        for (; ++n < e.length; ) {
         const i = e[n];
         let l;
         if ('string' == typeof i) l = i;
         else
          switch (i) {
           case -5:
            l = '\r';
            break;
           case -4:
            l = '\n';
            break;
           case -3:
            l = '\r\n';
            break;
           case -2:
            l = t ? ' ' : '\t';
            break;
           case -1:
            if (!t && o) continue;
            l = ' ';
            break;
           default:
            l = String.fromCharCode(i);
          }
         ((o = -2 === i), r.push(l));
        }
        return r.join('');
       })(d(e), t);
      },
      now: h,
      defineSkip: function (e) {
       ((o[e.line] = e.column), k());
      },
      write: function (e) {
       if (((l = je(l, e)), m(), null !== l[l.length - 1])) return [];
       return (v(t, 0), (c.events = dt(i, c.events, c)), c.events);
      },
     };
    let f,
     p = t.tokenize.call(c, u);
    return (t.resolveAll && i.push(t), c);
    function d(e) {
     return (function (e, t) {
      const n = t.start._index,
       r = t.start._bufferIndex,
       o = t.end._index,
       i = t.end._bufferIndex;
      let l;
      if (n === o) l = [e[n].slice(r, i)];
      else {
       if (((l = e.slice(n, o)), r > -1)) {
        const e = l[0];
        'string' == typeof e ? (l[0] = e.slice(r)) : l.shift();
       }
       i > 0 && l.push(e[o].slice(0, i));
      }
      return l;
     })(l, e);
    }
    function h() {
     const { line: e, column: t, offset: n, _index: o, _bufferIndex: i } = r;
     return { line: e, column: t, offset: n, _index: o, _bufferIndex: i };
    }
    function m() {
     let e;
     for (; r._index < l.length; ) {
      const t = l[r._index];
      if ('string' == typeof t) for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length; ) g(t.charCodeAt(r._bufferIndex));
      else g(t);
     }
    }
    function g(e) {
     ((s = void 0), (f = e), (p = p(e)));
    }
    function y(e, t) {
     t.restore();
    }
    function x(e, t) {
     return function (n, o, i) {
      let l, f, p, d;
      return Array.isArray(n)
       ? m(n)
       : 'tokenize' in n
         ? m([n])
         : (function (e) {
            return t;
            function t(t) {
             const n = null !== t && e[t],
              r = null !== t && e.null;
             return m([...(Array.isArray(n) ? n : n ? [n] : []), ...(Array.isArray(r) ? r : r ? [r] : [])])(t);
            }
           })(n);
      function m(e) {
       return ((l = e), (f = 0), 0 === e.length ? i : g(e[f]));
      }
      function g(e) {
       return function (n) {
        ((d = (function () {
         const e = h(),
          t = c.previous,
          n = c.currentConstruct,
          o = c.events.length,
          i = Array.from(a);
         return { restore: l, from: o };
         function l() {
          ((r = e), (c.previous = t), (c.currentConstruct = n), (c.events.length = o), (a = i), k());
         }
        })()),
         (p = e),
         e.partial || (c.currentConstruct = e));
        if (e.name && c.parser.constructs.disable.null.includes(e.name)) return x(n);
        return e.tokenize.call(t ? Object.assign(Object.create(c), t) : c, u, y, x)(n);
       };
      }
      function y(t) {
       return ((s = !0), e(p, d), o);
      }
      function x(e) {
       return ((s = !0), d.restore(), ++f < l.length ? g(l[f]) : i);
      }
     };
    }
    function v(e, t) {
     (e.resolveAll && !i.includes(e) && i.push(e), e.resolve && ze(c.events, t, c.events.length - t, e.resolve(c.events.slice(t), c)), e.resolveTo && (c.events = e.resolveTo(c.events, c)));
    }
    function k() {
     r.line in o && r.column < 2 && ((r.column = o[r.line]), (r.offset += o[r.line] - 1));
    }
   }
   const mt = {
    name: 'thematicBreak',
    tokenize: function (e, t, n) {
     let r,
      o = 0;
     return function (t) {
      return (
       e.enter('thematicBreak'),
       (function (e) {
        return ((r = e), i(e));
       })(t)
      );
     };
     function i(i) {
      return i === r ? (e.enter('thematicBreakSequence'), l(i)) : o >= 3 && (null === i || Ke(i)) ? (e.exit('thematicBreak'), t(i)) : n(i);
     }
     function l(t) {
      return t === r ? (e.consume(t), o++, l) : (e.exit('thematicBreakSequence'), Je(t) ? Ge(e, i, 'whitespace')(t) : i(t));
     }
    },
   };
   const gt = {
     name: 'list',
     tokenize: function (e, t, n) {
      const r = this,
       o = r.events[r.events.length - 1];
      let i = o && 'linePrefix' === o[1].type ? o[2].sliceSerialize(o[1], !0).length : 0,
       l = 0;
      return function (t) {
       const o = r.containerState.type || (42 === t || 43 === t || 45 === t ? 'listUnordered' : 'listOrdered');
       if ('listUnordered' === o ? !r.containerState.marker || t === r.containerState.marker : $e(t)) {
        if ((r.containerState.type || ((r.containerState.type = o), e.enter(o, { _container: !0 })), 'listUnordered' === o)) return (e.enter('listItemPrefix'), 42 === t || 45 === t ? e.check(mt, n, s)(t) : s(t));
        if (!r.interrupt || 49 === t) return (e.enter('listItemPrefix'), e.enter('listItemValue'), a(t));
       }
       return n(t);
      };
      function a(t) {
       return $e(t) && ++l < 10 ? (e.consume(t), a) : (!r.interrupt || l < 2) && (r.containerState.marker ? t === r.containerState.marker : 41 === t || 46 === t) ? (e.exit('listItemValue'), s(t)) : n(t);
      }
      function s(t) {
       return (e.enter('listItemMarker'), e.consume(t), e.exit('listItemMarker'), (r.containerState.marker = r.containerState.marker || t), e.check(rt, r.interrupt ? n : u, e.attempt(yt, f, c)));
      }
      function u(e) {
       return ((r.containerState.initialBlankLine = !0), i++, f(e));
      }
      function c(t) {
       return Je(t) ? (e.enter('listItemPrefixWhitespace'), e.consume(t), e.exit('listItemPrefixWhitespace'), f) : n(t);
      }
      function f(n) {
       return ((r.containerState.size = i + r.sliceSerialize(e.exit('listItemPrefix'), !0).length), t(n));
      }
     },
     continuation: {
      tokenize: function (e, t, n) {
       const r = this;
       return ((r.containerState._closeFlow = void 0), e.check(rt, o, i));
       function o(n) {
        return ((r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine), Ge(e, t, 'listItemIndent', r.containerState.size + 1)(n));
       }
       function i(n) {
        return r.containerState.furtherBlankLines || !Je(n) ? ((r.containerState.furtherBlankLines = void 0), (r.containerState.initialBlankLine = void 0), l(n)) : ((r.containerState.furtherBlankLines = void 0), (r.containerState.initialBlankLine = void 0), e.attempt(xt, t, l)(n));
       }
       function l(o) {
        return ((r.containerState._closeFlow = !0), (r.interrupt = void 0), Ge(e, e.attempt(gt, t, n), 'linePrefix', r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4)(o));
       }
      },
     },
     exit: function (e) {
      e.exit(this.containerState.type);
     },
    },
    yt = {
     tokenize: function (e, t, n) {
      const r = this;
      return Ge(
       e,
       function (e) {
        const o = r.events[r.events.length - 1];
        return !Je(e) && o && 'listItemPrefixWhitespace' === o[1].type ? t(e) : n(e);
       },
       'listItemPrefixWhitespace',
       r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5,
      );
     },
     partial: !0,
    },
    xt = {
     tokenize: function (e, t, n) {
      const r = this;
      return Ge(
       e,
       function (e) {
        const o = r.events[r.events.length - 1];
        return o && 'listItemIndent' === o[1].type && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(e) : n(e);
       },
       'listItemIndent',
       r.containerState.size + 1,
      );
     },
     partial: !0,
    };
   const vt = {
    name: 'blockQuote',
    tokenize: function (e, t, n) {
     const r = this;
     return function (t) {
      if (62 === t) {
       const n = r.containerState;
       return (n.open || (e.enter('blockQuote', { _container: !0 }), (n.open = !0)), e.enter('blockQuotePrefix'), e.enter('blockQuoteMarker'), e.consume(t), e.exit('blockQuoteMarker'), o);
      }
      return n(t);
     };
     function o(n) {
      return Je(n) ? (e.enter('blockQuotePrefixWhitespace'), e.consume(n), e.exit('blockQuotePrefixWhitespace'), e.exit('blockQuotePrefix'), t) : (e.exit('blockQuotePrefix'), t(n));
     }
    },
    continuation: {
     tokenize: function (e, t, n) {
      const r = this;
      return function (t) {
       if (Je(t)) return Ge(e, o, 'linePrefix', r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4)(t);
       return o(t);
      };
      function o(r) {
       return e.attempt(vt, t, n)(r);
      }
     },
    },
    exit: function (e) {
     e.exit('blockQuote');
    },
   };
   function kt(e, t, n, r, o, i, l, a, s) {
    const u = s || Number.POSITIVE_INFINITY;
    let c = 0;
    return function (t) {
     if (60 === t) return (e.enter(r), e.enter(o), e.enter(i), e.consume(t), e.exit(i), f);
     if (null === t || 32 === t || 41 === t || qe(t)) return n(t);
     return (e.enter(r), e.enter(l), e.enter(a), e.enter('chunkString', { contentType: 'string' }), h(t));
    };
    function f(n) {
     return 62 === n ? (e.enter(i), e.consume(n), e.exit(i), e.exit(o), e.exit(r), t) : (e.enter(a), e.enter('chunkString', { contentType: 'string' }), p(n));
    }
    function p(t) {
     return 62 === t ? (e.exit('chunkString'), e.exit(a), f(t)) : null === t || 60 === t || Ke(t) ? n(t) : (e.consume(t), 92 === t ? d : p);
    }
    function d(t) {
     return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t);
    }
    function h(o) {
     return c || (null !== o && 41 !== o && !Qe(o)) ? (c < u && 40 === o ? (e.consume(o), c++, h) : 41 === o ? (e.consume(o), c--, h) : null === o || 32 === o || 40 === o || qe(o) ? n(o) : (e.consume(o), 92 === o ? m : h)) : (e.exit('chunkString'), e.exit(a), e.exit(l), e.exit(r), t(o));
    }
    function m(t) {
     return 40 === t || 41 === t || 92 === t ? (e.consume(t), h) : h(t);
    }
   }
   function bt(e, t, n, r, o, i) {
    const l = this;
    let a,
     s = 0;
    return function (t) {
     return (e.enter(r), e.enter(o), e.consume(t), e.exit(o), e.enter(i), u);
    };
    function u(f) {
     return s > 999 || null === f || 91 === f || (93 === f && !a) || (94 === f && !s && '_hiddenFootnoteSupport' in l.parser.constructs) ? n(f) : 93 === f ? (e.exit(i), e.enter(o), e.consume(f), e.exit(o), e.exit(r), t) : Ke(f) ? (e.enter('lineEnding'), e.consume(f), e.exit('lineEnding'), u) : (e.enter('chunkString', { contentType: 'string' }), c(f));
    }
    function c(t) {
     return null === t || 91 === t || 93 === t || Ke(t) || s++ > 999 ? (e.exit('chunkString'), u(t)) : (e.consume(t), a || (a = !Je(t)), 92 === t ? f : c);
    }
    function f(t) {
     return 91 === t || 92 === t || 93 === t ? (e.consume(t), s++, c) : c(t);
    }
   }
   function wt(e, t, n, r, o, i) {
    let l;
    return function (t) {
     if (34 === t || 39 === t || 40 === t) return (e.enter(r), e.enter(o), e.consume(t), e.exit(o), (l = 40 === t ? 41 : t), a);
     return n(t);
    };
    function a(n) {
     return n === l ? (e.enter(o), e.consume(n), e.exit(o), e.exit(r), t) : (e.enter(i), s(n));
    }
    function s(t) {
     return t === l ? (e.exit(i), a(l)) : null === t ? n(t) : Ke(t) ? (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), Ge(e, s, 'linePrefix')) : (e.enter('chunkString', { contentType: 'string' }), u(t));
    }
    function u(t) {
     return t === l || null === t || Ke(t) ? (e.exit('chunkString'), s(t)) : (e.consume(t), 92 === t ? c : u);
    }
    function c(t) {
     return t === l || 92 === t ? (e.consume(t), u) : u(t);
    }
   }
   function St(e, t) {
    let n;
    return function r(o) {
     if (Ke(o)) return (e.enter('lineEnding'), e.consume(o), e.exit('lineEnding'), (n = !0), r);
     if (Je(o)) return Ge(e, r, n ? 'linePrefix' : 'lineSuffix')(o);
     return t(o);
    };
   }
   function Et(e) {
    return e
     .replace(/[\t\n\r ]+/g, ' ')
     .replace(/^ | $/g, '')
     .toLowerCase()
     .toUpperCase();
   }
   const Ct = {
     name: 'definition',
     tokenize: function (e, t, n) {
      const r = this;
      let o;
      return function (t) {
       return (
        e.enter('definition'),
        (function (t) {
         return bt.call(r, e, i, n, 'definitionLabel', 'definitionLabelMarker', 'definitionLabelString')(t);
        })(t)
       );
      };
      function i(t) {
       return ((o = Et(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))), 58 === t ? (e.enter('definitionMarker'), e.consume(t), e.exit('definitionMarker'), l) : n(t));
      }
      function l(t) {
       return Qe(t) ? St(e, a)(t) : a(t);
      }
      function a(t) {
       return kt(e, s, n, 'definitionDestination', 'definitionDestinationLiteral', 'definitionDestinationLiteralMarker', 'definitionDestinationRaw', 'definitionDestinationString')(t);
      }
      function s(t) {
       return e.attempt(Pt, u, u)(t);
      }
      function u(t) {
       return Je(t) ? Ge(e, c, 'whitespace')(t) : c(t);
      }
      function c(i) {
       return null === i || Ke(i) ? (e.exit('definition'), r.parser.defined.push(o), t(i)) : n(i);
      }
     },
    },
    Pt = {
     tokenize: function (e, t, n) {
      return function (t) {
       return Qe(t) ? St(e, r)(t) : n(t);
      };
      function r(t) {
       return wt(e, o, n, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(t);
      }
      function o(t) {
       return Je(t) ? Ge(e, i, 'whitespace')(t) : i(t);
      }
      function i(e) {
       return null === e || Ke(e) ? t(e) : n(e);
      }
     },
     partial: !0,
    };
   const It = {
     name: 'codeIndented',
     tokenize: function (e, t, n) {
      const r = this;
      return function (t) {
       return (e.enter('codeIndented'), Ge(e, o, 'linePrefix', 5)(t));
      };
      function o(e) {
       const t = r.events[r.events.length - 1];
       return t && 'linePrefix' === t[1].type && t[2].sliceSerialize(t[1], !0).length >= 4 ? i(e) : n(e);
      }
      function i(t) {
       return null === t ? a(t) : Ke(t) ? e.attempt(Tt, i, a)(t) : (e.enter('codeFlowValue'), l(t));
      }
      function l(t) {
       return null === t || Ke(t) ? (e.exit('codeFlowValue'), i(t)) : (e.consume(t), l);
      }
      function a(n) {
       return (e.exit('codeIndented'), t(n));
      }
     },
    },
    Tt = {
     tokenize: function (e, t, n) {
      const r = this;
      return o;
      function o(t) {
       return r.parser.lazy[r.now().line] ? n(t) : Ke(t) ? (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), o) : Ge(e, i, 'linePrefix', 5)(t);
      }
      function i(e) {
       const i = r.events[r.events.length - 1];
       return i && 'linePrefix' === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? t(e) : Ke(e) ? o(e) : n(e);
      }
     },
     partial: !0,
    };
   const At = {
    name: 'headingAtx',
    tokenize: function (e, t, n) {
     let r = 0;
     return function (t) {
      return (
       e.enter('atxHeading'),
       (function (t) {
        return (e.enter('atxHeadingSequence'), o(t));
       })(t)
      );
     };
     function o(t) {
      return 35 === t && r++ < 6 ? (e.consume(t), o) : null === t || Qe(t) ? (e.exit('atxHeadingSequence'), i(t)) : n(t);
     }
     function i(n) {
      return 35 === n ? (e.enter('atxHeadingSequence'), l(n)) : null === n || Ke(n) ? (e.exit('atxHeading'), t(n)) : Je(n) ? Ge(e, i, 'whitespace')(n) : (e.enter('atxHeadingText'), a(n));
     }
     function l(t) {
      return 35 === t ? (e.consume(t), l) : (e.exit('atxHeadingSequence'), i(t));
     }
     function a(t) {
      return null === t || 35 === t || Qe(t) ? (e.exit('atxHeadingText'), i(t)) : (e.consume(t), a);
     }
    },
    resolve: function (e, t) {
     let n,
      r,
      o = e.length - 2,
      i = 3;
     'whitespace' === e[i][1].type && (i += 2);
     o - 2 > i && 'whitespace' === e[o][1].type && (o -= 2);
     'atxHeadingSequence' === e[o][1].type && (i === o - 1 || (o - 4 > i && 'whitespace' === e[o - 2][1].type)) && (o -= i + 1 === o ? 2 : 4);
     o > i &&
      ((n = { type: 'atxHeadingText', start: e[i][1].start, end: e[o][1].end }),
      (r = { type: 'chunkText', start: e[i][1].start, end: e[o][1].end, contentType: 'text' }),
      ze(e, i, o - i + 1, [
       ['enter', n, t],
       ['enter', r, t],
       ['exit', r, t],
       ['exit', n, t],
      ]));
     return e;
    },
   };
   const Lt = {
    name: 'setextUnderline',
    tokenize: function (e, t, n) {
     const r = this;
     let o;
     return function (t) {
      let l,
       a = r.events.length;
      for (; a--; )
       if ('lineEnding' !== r.events[a][1].type && 'linePrefix' !== r.events[a][1].type && 'content' !== r.events[a][1].type) {
        l = 'paragraph' === r.events[a][1].type;
        break;
       }
      if (!r.parser.lazy[r.now().line] && (r.interrupt || l))
       return (
        e.enter('setextHeadingLine'),
        (o = t),
        (function (t) {
         return (e.enter('setextHeadingLineSequence'), i(t));
        })(t)
       );
      return n(t);
     };
     function i(t) {
      return t === o ? (e.consume(t), i) : (e.exit('setextHeadingLineSequence'), Je(t) ? Ge(e, l, 'lineSuffix')(t) : l(t));
     }
     function l(r) {
      return null === r || Ke(r) ? (e.exit('setextHeadingLine'), t(r)) : n(r);
     }
    },
    resolveTo: function (e, t) {
     let n,
      r,
      o,
      i = e.length;
     for (; i--; )
      if ('enter' === e[i][0]) {
       if ('content' === e[i][1].type) {
        n = i;
        break;
       }
       'paragraph' === e[i][1].type && (r = i);
      } else ('content' === e[i][1].type && e.splice(i, 1), o || 'definition' !== e[i][1].type || (o = i));
     const l = { type: 'setextHeading', start: Object.assign({}, e[r][1].start), end: Object.assign({}, e[e.length - 1][1].end) };
     ((e[r][1].type = 'setextHeadingText'), o ? (e.splice(r, 0, ['enter', l, t]), e.splice(o + 1, 0, ['exit', e[n][1], t]), (e[n][1].end = Object.assign({}, e[o][1].end))) : (e[n][1] = l));
     return (e.push(['exit', l, t]), e);
    },
   };
   const Ot = ['address', 'article', 'aside', 'base', 'basefont', 'blockquote', 'body', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dialog', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'iframe', 'legend', 'li', 'link', 'main', 'menu', 'menuitem', 'nav', 'noframes', 'ol', 'optgroup', 'option', 'p', 'param', 'search', 'section', 'summary', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul'],
    Dt = ['pre', 'script', 'style', 'textarea'],
    zt = {
     name: 'htmlFlow',
     tokenize: function (e, t, n) {
      const r = this;
      let o, i, l, a, s;
      return function (t) {
       return (function (t) {
        return (e.enter('htmlFlow'), e.enter('htmlFlowData'), e.consume(t), u);
       })(t);
      };
      function u(a) {
       return 33 === a ? (e.consume(a), c) : 47 === a ? (e.consume(a), (i = !0), d) : 63 === a ? (e.consume(a), (o = 3), r.interrupt ? t : j) : Ue(a) ? (e.consume(a), (l = String.fromCharCode(a)), h) : n(a);
      }
      function c(i) {
       return 45 === i ? (e.consume(i), (o = 2), f) : 91 === i ? (e.consume(i), (o = 5), (a = 0), p) : Ue(i) ? (e.consume(i), (o = 4), r.interrupt ? t : j) : n(i);
      }
      function f(o) {
       return 45 === o ? (e.consume(o), r.interrupt ? t : j) : n(o);
      }
      function p(o) {
       const i = 'CDATA[';
       return o === i.charCodeAt(a++) ? (e.consume(o), 6 === a ? (r.interrupt ? t : P) : p) : n(o);
      }
      function d(t) {
       return Ue(t) ? (e.consume(t), (l = String.fromCharCode(t)), h) : n(t);
      }
      function h(a) {
       if (null === a || 47 === a || 62 === a || Qe(a)) {
        const s = 47 === a,
         u = l.toLowerCase();
        return s || i || !Dt.includes(u) ? (Ot.includes(l.toLowerCase()) ? ((o = 6), s ? (e.consume(a), m) : r.interrupt ? t(a) : P(a)) : ((o = 7), r.interrupt && !r.parser.lazy[r.now().line] ? n(a) : i ? g(a) : y(a))) : ((o = 1), r.interrupt ? t(a) : P(a));
       }
       return 45 === a || He(a) ? (e.consume(a), (l += String.fromCharCode(a)), h) : n(a);
      }
      function m(o) {
       return 62 === o ? (e.consume(o), r.interrupt ? t : P) : n(o);
      }
      function g(t) {
       return Je(t) ? (e.consume(t), g) : E(t);
      }
      function y(t) {
       return 47 === t ? (e.consume(t), E) : 58 === t || 95 === t || Ue(t) ? (e.consume(t), x) : Je(t) ? (e.consume(t), y) : E(t);
      }
      function x(t) {
       return 45 === t || 46 === t || 58 === t || 95 === t || He(t) ? (e.consume(t), x) : v(t);
      }
      function v(t) {
       return 61 === t ? (e.consume(t), k) : Je(t) ? (e.consume(t), v) : y(t);
      }
      function k(t) {
       return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), (s = t), b) : Je(t) ? (e.consume(t), k) : w(t);
      }
      function b(t) {
       return t === s ? (e.consume(t), (s = null), S) : null === t || Ke(t) ? n(t) : (e.consume(t), b);
      }
      function w(t) {
       return null === t || 34 === t || 39 === t || 47 === t || 60 === t || 61 === t || 62 === t || 96 === t || Qe(t) ? v(t) : (e.consume(t), w);
      }
      function S(e) {
       return 47 === e || 62 === e || Je(e) ? y(e) : n(e);
      }
      function E(t) {
       return 62 === t ? (e.consume(t), C) : n(t);
      }
      function C(t) {
       return null === t || Ke(t) ? P(t) : Je(t) ? (e.consume(t), C) : n(t);
      }
      function P(t) {
       return 45 === t && 2 === o ? (e.consume(t), L) : 60 === t && 1 === o ? (e.consume(t), O) : 62 === t && 4 === o ? (e.consume(t), M) : 63 === t && 3 === o ? (e.consume(t), j) : 93 === t && 5 === o ? (e.consume(t), z) : !Ke(t) || (6 !== o && 7 !== o) ? (null === t || Ke(t) ? (e.exit('htmlFlowData'), I(t)) : (e.consume(t), P)) : (e.exit('htmlFlowData'), e.check(jt, R, I)(t));
      }
      function I(t) {
       return e.check(Mt, T, R)(t);
      }
      function T(t) {
       return (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), A);
      }
      function A(t) {
       return null === t || Ke(t) ? I(t) : (e.enter('htmlFlowData'), P(t));
      }
      function L(t) {
       return 45 === t ? (e.consume(t), j) : P(t);
      }
      function O(t) {
       return 47 === t ? (e.consume(t), (l = ''), D) : P(t);
      }
      function D(t) {
       if (62 === t) {
        const n = l.toLowerCase();
        return Dt.includes(n) ? (e.consume(t), M) : P(t);
       }
       return Ue(t) && l.length < 8 ? (e.consume(t), (l += String.fromCharCode(t)), D) : P(t);
      }
      function z(t) {
       return 93 === t ? (e.consume(t), j) : P(t);
      }
      function j(t) {
       return 62 === t ? (e.consume(t), M) : 45 === t && 2 === o ? (e.consume(t), j) : P(t);
      }
      function M(t) {
       return null === t || Ke(t) ? (e.exit('htmlFlowData'), R(t)) : (e.consume(t), M);
      }
      function R(n) {
       return (e.exit('htmlFlow'), t(n));
      }
     },
     resolveTo: function (e) {
      let t = e.length;
      for (; t-- && ('enter' !== e[t][0] || 'htmlFlow' !== e[t][1].type); );
      t > 1 && 'linePrefix' === e[t - 2][1].type && ((e[t][1].start = e[t - 2][1].start), (e[t + 1][1].start = e[t - 2][1].start), e.splice(t - 2, 2));
      return e;
     },
     concrete: !0,
    },
    jt = {
     tokenize: function (e, t, n) {
      return function (r) {
       return (e.enter('lineEnding'), e.consume(r), e.exit('lineEnding'), e.attempt(rt, t, n));
      };
     },
     partial: !0,
    },
    Mt = {
     tokenize: function (e, t, n) {
      const r = this;
      return function (t) {
       if (Ke(t)) return (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), o);
       return n(t);
      };
      function o(e) {
       return r.parser.lazy[r.now().line] ? n(e) : t(e);
      }
     },
     partial: !0,
    };
   const Rt = {
     tokenize: function (e, t, n) {
      const r = this;
      return function (t) {
       if (null === t) return n(t);
       return (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), o);
      };
      function o(e) {
       return r.parser.lazy[r.now().line] ? n(e) : t(e);
      }
     },
     partial: !0,
    },
    Ft = {
     name: 'codeFenced',
     tokenize: function (e, t, n) {
      const r = this,
       o = {
        tokenize: function (e, t, n) {
         let o = 0;
         return l;
         function l(t) {
          return (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), s);
         }
         function s(t) {
          return (e.enter('codeFencedFence'), Je(t) ? Ge(e, u, 'linePrefix', r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4)(t) : u(t));
         }
         function u(t) {
          return t === i ? (e.enter('codeFencedFenceSequence'), c(t)) : n(t);
         }
         function c(t) {
          return t === i ? (o++, e.consume(t), c) : o >= a ? (e.exit('codeFencedFenceSequence'), Je(t) ? Ge(e, f, 'whitespace')(t) : f(t)) : n(t);
         }
         function f(r) {
          return null === r || Ke(r) ? (e.exit('codeFencedFence'), t(r)) : n(r);
         }
        },
        partial: !0,
       };
      let i,
       l = 0,
       a = 0;
      return function (t) {
       return (function (t) {
        const n = r.events[r.events.length - 1];
        return ((l = n && 'linePrefix' === n[1].type ? n[2].sliceSerialize(n[1], !0).length : 0), (i = t), e.enter('codeFenced'), e.enter('codeFencedFence'), e.enter('codeFencedFenceSequence'), s(t));
       })(t);
      };
      function s(t) {
       return t === i ? (a++, e.consume(t), s) : a < 3 ? n(t) : (e.exit('codeFencedFenceSequence'), Je(t) ? Ge(e, u, 'whitespace')(t) : u(t));
      }
      function u(n) {
       return null === n || Ke(n) ? (e.exit('codeFencedFence'), r.interrupt ? t(n) : e.check(Rt, d, x)(n)) : (e.enter('codeFencedFenceInfo'), e.enter('chunkString', { contentType: 'string' }), c(n));
      }
      function c(t) {
       return null === t || Ke(t) ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), u(t)) : Je(t) ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), Ge(e, f, 'whitespace')(t)) : 96 === t && t === i ? n(t) : (e.consume(t), c);
      }
      function f(t) {
       return null === t || Ke(t) ? u(t) : (e.enter('codeFencedFenceMeta'), e.enter('chunkString', { contentType: 'string' }), p(t));
      }
      function p(t) {
       return null === t || Ke(t) ? (e.exit('chunkString'), e.exit('codeFencedFenceMeta'), u(t)) : 96 === t && t === i ? n(t) : (e.consume(t), p);
      }
      function d(t) {
       return e.attempt(o, x, h)(t);
      }
      function h(t) {
       return (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), m);
      }
      function m(t) {
       return l > 0 && Je(t) ? Ge(e, g, 'linePrefix', l + 1)(t) : g(t);
      }
      function g(t) {
       return null === t || Ke(t) ? e.check(Rt, d, x)(t) : (e.enter('codeFlowValue'), y(t));
      }
      function y(t) {
       return null === t || Ke(t) ? (e.exit('codeFlowValue'), g(t)) : (e.consume(t), y);
      }
      function x(n) {
       return (e.exit('codeFenced'), t(n));
      }
     },
     concrete: !0,
    };
   const _t = document.createElement('i');
   function Nt(e) {
    const t = '&' + e + ';';
    _t.innerHTML = t;
    const n = _t.textContent;
    return (59 !== n.charCodeAt(n.length - 1) || 'semi' === e) && n !== t && n;
   }
   const Bt = {
    name: 'characterReference',
    tokenize: function (e, t, n) {
     const r = this;
     let o,
      i,
      l = 0;
     return function (t) {
      return (e.enter('characterReference'), e.enter('characterReferenceMarker'), e.consume(t), e.exit('characterReferenceMarker'), a);
     };
     function a(t) {
      return 35 === t ? (e.enter('characterReferenceMarkerNumeric'), e.consume(t), e.exit('characterReferenceMarkerNumeric'), s) : (e.enter('characterReferenceValue'), (o = 31), (i = He), u(t));
     }
     function s(t) {
      return 88 === t || 120 === t ? (e.enter('characterReferenceMarkerHexadecimal'), e.consume(t), e.exit('characterReferenceMarkerHexadecimal'), e.enter('characterReferenceValue'), (o = 6), (i = We), u) : (e.enter('characterReferenceValue'), (o = 7), (i = $e), u(t));
     }
     function u(a) {
      if (59 === a && l) {
       const o = e.exit('characterReferenceValue');
       return i !== He || Nt(r.sliceSerialize(o)) ? (e.enter('characterReferenceMarker'), e.consume(a), e.exit('characterReferenceMarker'), e.exit('characterReference'), t) : n(a);
      }
      return i(a) && l++ < o ? (e.consume(a), u) : n(a);
     }
    },
   };
   const Ut = {
    name: 'characterEscape',
    tokenize: function (e, t, n) {
     return function (t) {
      return (e.enter('characterEscape'), e.enter('escapeMarker'), e.consume(t), e.exit('escapeMarker'), r);
     };
     function r(r) {
      return Ye(r) ? (e.enter('characterEscapeValue'), e.consume(r), e.exit('characterEscapeValue'), e.exit('characterEscape'), t) : n(r);
     }
    },
   };
   const Ht = {
    name: 'lineEnding',
    tokenize: function (e, t) {
     return function (n) {
      return (e.enter('lineEnding'), e.consume(n), e.exit('lineEnding'), Ge(e, t, 'linePrefix'));
     };
    },
   };
   const Vt = {
     name: 'labelEnd',
     tokenize: function (e, t, n) {
      const r = this;
      let o,
       i,
       l = r.events.length;
      for (; l--; )
       if (('labelImage' === r.events[l][1].type || 'labelLink' === r.events[l][1].type) && !r.events[l][1]._balanced) {
        o = r.events[l][1];
        break;
       }
      return function (t) {
       if (!o) return n(t);
       if (o._inactive) return c(t);
       return ((i = r.parser.defined.includes(Et(r.sliceSerialize({ start: o.end, end: r.now() })))), e.enter('labelEnd'), e.enter('labelMarker'), e.consume(t), e.exit('labelMarker'), e.exit('labelEnd'), a);
      };
      function a(t) {
       return 40 === t ? e.attempt(qt, u, i ? u : c)(t) : 91 === t ? e.attempt($t, u, i ? s : c)(t) : i ? u(t) : c(t);
      }
      function s(t) {
       return e.attempt(Wt, u, c)(t);
      }
      function u(e) {
       return t(e);
      }
      function c(e) {
       return ((o._balanced = !0), n(e));
      }
     },
     resolveTo: function (e, t) {
      let n,
       r,
       o,
       i,
       l = e.length,
       a = 0;
      for (; l--; )
       if (((n = e[l][1]), r)) {
        if ('link' === n.type || ('labelLink' === n.type && n._inactive)) break;
        'enter' === e[l][0] && 'labelLink' === n.type && (n._inactive = !0);
       } else if (o) {
        if ('enter' === e[l][0] && ('labelImage' === n.type || 'labelLink' === n.type) && !n._balanced && ((r = l), 'labelLink' !== n.type)) {
         a = 2;
         break;
        }
       } else 'labelEnd' === n.type && (o = l);
      const s = { type: 'labelLink' === e[r][1].type ? 'link' : 'image', start: Object.assign({}, e[r][1].start), end: Object.assign({}, e[e.length - 1][1].end) },
       u = { type: 'label', start: Object.assign({}, e[r][1].start), end: Object.assign({}, e[o][1].end) },
       c = { type: 'labelText', start: Object.assign({}, e[r + a + 2][1].end), end: Object.assign({}, e[o - 2][1].start) };
      return (
       (i = [
        ['enter', s, t],
        ['enter', u, t],
       ]),
       (i = je(i, e.slice(r + 1, r + a + 3))),
       (i = je(i, [['enter', c, t]])),
       (i = je(i, dt(t.parser.constructs.insideSpan.null, e.slice(r + a + 4, o - 3), t))),
       (i = je(i, [['exit', c, t], e[o - 2], e[o - 1], ['exit', u, t]])),
       (i = je(i, e.slice(o + 1))),
       (i = je(i, [['exit', s, t]])),
       ze(e, r, e.length, i),
       e
      );
     },
     resolveAll: function (e) {
      let t = -1;
      for (; ++t < e.length; ) {
       const n = e[t][1];
       ('labelImage' !== n.type && 'labelLink' !== n.type && 'labelEnd' !== n.type) || (e.splice(t + 1, 'labelImage' === n.type ? 4 : 2), (n.type = 'data'), t++);
      }
      return e;
     },
    },
    qt = {
     tokenize: function (e, t, n) {
      return function (t) {
       return (e.enter('resource'), e.enter('resourceMarker'), e.consume(t), e.exit('resourceMarker'), r);
      };
      function r(t) {
       return Qe(t) ? St(e, o)(t) : o(t);
      }
      function o(t) {
       return 41 === t ? u(t) : kt(e, i, l, 'resourceDestination', 'resourceDestinationLiteral', 'resourceDestinationLiteralMarker', 'resourceDestinationRaw', 'resourceDestinationString', 32)(t);
      }
      function i(t) {
       return Qe(t) ? St(e, a)(t) : u(t);
      }
      function l(e) {
       return n(e);
      }
      function a(t) {
       return 34 === t || 39 === t || 40 === t ? wt(e, s, n, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(t) : u(t);
      }
      function s(t) {
       return Qe(t) ? St(e, u)(t) : u(t);
      }
      function u(r) {
       return 41 === r ? (e.enter('resourceMarker'), e.consume(r), e.exit('resourceMarker'), e.exit('resource'), t) : n(r);
      }
     },
    },
    $t = {
     tokenize: function (e, t, n) {
      const r = this;
      return function (t) {
       return bt.call(r, e, o, i, 'reference', 'referenceMarker', 'referenceString')(t);
      };
      function o(e) {
       return r.parser.defined.includes(Et(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
      }
      function i(e) {
       return n(e);
      }
     },
    },
    Wt = {
     tokenize: function (e, t, n) {
      return function (t) {
       return (e.enter('reference'), e.enter('referenceMarker'), e.consume(t), e.exit('referenceMarker'), r);
      };
      function r(r) {
       return 93 === r ? (e.enter('referenceMarker'), e.consume(r), e.exit('referenceMarker'), e.exit('reference'), t) : n(r);
      }
     },
    };
   const Yt = {
    name: 'labelStartImage',
    tokenize: function (e, t, n) {
     const r = this;
     return function (t) {
      return (e.enter('labelImage'), e.enter('labelImageMarker'), e.consume(t), e.exit('labelImageMarker'), o);
     };
     function o(t) {
      return 91 === t ? (e.enter('labelMarker'), e.consume(t), e.exit('labelMarker'), e.exit('labelImage'), i) : n(t);
     }
     function i(e) {
      return 94 === e && '_hiddenFootnoteSupport' in r.parser.constructs ? n(e) : t(e);
     }
    },
    resolveAll: Vt.resolveAll,
   };
   function Kt(e) {
    return null === e || Qe(e) || Xe(e)
     ? 1
     : (function (e) {
          return Ye(e) || Be(e);
         })(e)
       ? 2
       : void 0;
   }
   const Qt = {
    name: 'attention',
    tokenize: function (e, t) {
     const n = this.parser.constructs.attentionMarkers.null,
      r = this.previous,
      o = Kt(r);
     let i;
     return function (t) {
      return ((i = t), e.enter('attentionSequence'), l(t));
     };
     function l(a) {
      if (a === i) return (e.consume(a), l);
      const s = e.exit('attentionSequence'),
       u = Kt(a),
       c = !u || (2 === u && o) || n.includes(a),
       f = !o || (2 === o && u) || n.includes(r);
      return ((s._open = Boolean(42 === i ? c : c && (o || !f))), (s._close = Boolean(42 === i ? f : f && (u || !c))), t(a));
     }
    },
    resolveAll: function (e, t) {
     let n,
      r,
      o,
      i,
      l,
      a,
      s,
      u,
      c = -1;
     for (; ++c < e.length; )
      if ('enter' === e[c][0] && 'attentionSequence' === e[c][1].type && e[c][1]._close)
       for (n = c; n--; )
        if ('exit' === e[n][0] && 'attentionSequence' === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[c][1]).charCodeAt(0)) {
         if ((e[n][1]._close || e[c][1]._open) && (e[c][1].end.offset - e[c][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[c][1].end.offset - e[c][1].start.offset) % 3)) continue;
         a = e[n][1].end.offset - e[n][1].start.offset > 1 && e[c][1].end.offset - e[c][1].start.offset > 1 ? 2 : 1;
         const f = Object.assign({}, e[n][1].end),
          p = Object.assign({}, e[c][1].start);
         (Jt(f, -a),
          Jt(p, a),
          (i = { type: a > 1 ? 'strongSequence' : 'emphasisSequence', start: f, end: Object.assign({}, e[n][1].end) }),
          (l = { type: a > 1 ? 'strongSequence' : 'emphasisSequence', start: Object.assign({}, e[c][1].start), end: p }),
          (o = { type: a > 1 ? 'strongText' : 'emphasisText', start: Object.assign({}, e[n][1].end), end: Object.assign({}, e[c][1].start) }),
          (r = { type: a > 1 ? 'strong' : 'emphasis', start: Object.assign({}, i.start), end: Object.assign({}, l.end) }),
          (e[n][1].end = Object.assign({}, i.start)),
          (e[c][1].start = Object.assign({}, l.end)),
          (s = []),
          e[n][1].end.offset - e[n][1].start.offset &&
           (s = je(s, [
            ['enter', e[n][1], t],
            ['exit', e[n][1], t],
           ])),
          (s = je(s, [
           ['enter', r, t],
           ['enter', i, t],
           ['exit', i, t],
           ['enter', o, t],
          ])),
          (s = je(s, dt(t.parser.constructs.insideSpan.null, e.slice(n + 1, c), t))),
          (s = je(s, [
           ['exit', o, t],
           ['enter', l, t],
           ['exit', l, t],
           ['exit', r, t],
          ])),
          e[c][1].end.offset - e[c][1].start.offset
           ? ((u = 2),
             (s = je(s, [
              ['enter', e[c][1], t],
              ['exit', e[c][1], t],
             ])))
           : (u = 0),
          ze(e, n - 1, c - n + 3, s),
          (c = n + s.length - u - 2));
         break;
        }
     c = -1;
     for (; ++c < e.length; ) 'attentionSequence' === e[c][1].type && (e[c][1].type = 'data');
     return e;
    },
   };
   function Jt(e, t) {
    ((e.column += t), (e.offset += t), (e._bufferIndex += t));
   }
   const Xt = {
    name: 'autolink',
    tokenize: function (e, t, n) {
     let r = 0;
     return function (t) {
      return (e.enter('autolink'), e.enter('autolinkMarker'), e.consume(t), e.exit('autolinkMarker'), e.enter('autolinkProtocol'), o);
     };
     function o(t) {
      return Ue(t) ? (e.consume(t), i) : s(t);
     }
     function i(e) {
      return 43 === e || 45 === e || 46 === e || He(e) ? ((r = 1), l(e)) : s(e);
     }
     function l(t) {
      return 58 === t ? (e.consume(t), (r = 0), a) : (43 === t || 45 === t || 46 === t || He(t)) && r++ < 32 ? (e.consume(t), l) : ((r = 0), s(t));
     }
     function a(r) {
      return 62 === r ? (e.exit('autolinkProtocol'), e.enter('autolinkMarker'), e.consume(r), e.exit('autolinkMarker'), e.exit('autolink'), t) : null === r || 32 === r || 60 === r || qe(r) ? n(r) : (e.consume(r), a);
     }
     function s(t) {
      return 64 === t ? (e.consume(t), u) : Ve(t) ? (e.consume(t), s) : n(t);
     }
     function u(e) {
      return He(e) ? c(e) : n(e);
     }
     function c(n) {
      return 46 === n ? (e.consume(n), (r = 0), u) : 62 === n ? ((e.exit('autolinkProtocol').type = 'autolinkEmail'), e.enter('autolinkMarker'), e.consume(n), e.exit('autolinkMarker'), e.exit('autolink'), t) : f(n);
     }
     function f(t) {
      if ((45 === t || He(t)) && r++ < 63) {
       const n = 45 === t ? f : c;
       return (e.consume(t), n);
      }
      return n(t);
     }
    },
   };
   const Zt = {
    name: 'htmlText',
    tokenize: function (e, t, n) {
     const r = this;
     let o, i, l;
     return function (t) {
      return (e.enter('htmlText'), e.enter('htmlTextData'), e.consume(t), a);
     };
     function a(t) {
      return 33 === t ? (e.consume(t), s) : 47 === t ? (e.consume(t), k) : 63 === t ? (e.consume(t), x) : Ue(t) ? (e.consume(t), S) : n(t);
     }
     function s(t) {
      return 45 === t ? (e.consume(t), u) : 91 === t ? (e.consume(t), (i = 0), d) : Ue(t) ? (e.consume(t), y) : n(t);
     }
     function u(t) {
      return 45 === t ? (e.consume(t), p) : n(t);
     }
     function c(t) {
      return null === t ? n(t) : 45 === t ? (e.consume(t), f) : Ke(t) ? ((l = c), D(t)) : (e.consume(t), c);
     }
     function f(t) {
      return 45 === t ? (e.consume(t), p) : c(t);
     }
     function p(e) {
      return 62 === e ? O(e) : 45 === e ? f(e) : c(e);
     }
     function d(t) {
      const r = 'CDATA[';
      return t === r.charCodeAt(i++) ? (e.consume(t), 6 === i ? h : d) : n(t);
     }
     function h(t) {
      return null === t ? n(t) : 93 === t ? (e.consume(t), m) : Ke(t) ? ((l = h), D(t)) : (e.consume(t), h);
     }
     function m(t) {
      return 93 === t ? (e.consume(t), g) : h(t);
     }
     function g(t) {
      return 62 === t ? O(t) : 93 === t ? (e.consume(t), g) : h(t);
     }
     function y(t) {
      return null === t || 62 === t ? O(t) : Ke(t) ? ((l = y), D(t)) : (e.consume(t), y);
     }
     function x(t) {
      return null === t ? n(t) : 63 === t ? (e.consume(t), v) : Ke(t) ? ((l = x), D(t)) : (e.consume(t), x);
     }
     function v(e) {
      return 62 === e ? O(e) : x(e);
     }
     function k(t) {
      return Ue(t) ? (e.consume(t), b) : n(t);
     }
     function b(t) {
      return 45 === t || He(t) ? (e.consume(t), b) : w(t);
     }
     function w(t) {
      return Ke(t) ? ((l = w), D(t)) : Je(t) ? (e.consume(t), w) : O(t);
     }
     function S(t) {
      return 45 === t || He(t) ? (e.consume(t), S) : 47 === t || 62 === t || Qe(t) ? E(t) : n(t);
     }
     function E(t) {
      return 47 === t ? (e.consume(t), O) : 58 === t || 95 === t || Ue(t) ? (e.consume(t), C) : Ke(t) ? ((l = E), D(t)) : Je(t) ? (e.consume(t), E) : O(t);
     }
     function C(t) {
      return 45 === t || 46 === t || 58 === t || 95 === t || He(t) ? (e.consume(t), C) : P(t);
     }
     function P(t) {
      return 61 === t ? (e.consume(t), I) : Ke(t) ? ((l = P), D(t)) : Je(t) ? (e.consume(t), P) : E(t);
     }
     function I(t) {
      return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), (o = t), T) : Ke(t) ? ((l = I), D(t)) : Je(t) ? (e.consume(t), I) : (e.consume(t), A);
     }
     function T(t) {
      return t === o ? (e.consume(t), (o = void 0), L) : null === t ? n(t) : Ke(t) ? ((l = T), D(t)) : (e.consume(t), T);
     }
     function A(t) {
      return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 47 === t || 62 === t || Qe(t) ? E(t) : (e.consume(t), A);
     }
     function L(e) {
      return 47 === e || 62 === e || Qe(e) ? E(e) : n(e);
     }
     function O(r) {
      return 62 === r ? (e.consume(r), e.exit('htmlTextData'), e.exit('htmlText'), t) : n(r);
     }
     function D(t) {
      return (e.exit('htmlTextData'), e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), z);
     }
     function z(t) {
      return Je(t) ? Ge(e, j, 'linePrefix', r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4)(t) : j(t);
     }
     function j(t) {
      return (e.enter('htmlTextData'), l(t));
     }
    },
   };
   const Gt = {
    name: 'labelStartLink',
    tokenize: function (e, t, n) {
     const r = this;
     return function (t) {
      return (e.enter('labelLink'), e.enter('labelMarker'), e.consume(t), e.exit('labelMarker'), e.exit('labelLink'), o);
     };
     function o(e) {
      return 94 === e && '_hiddenFootnoteSupport' in r.parser.constructs ? n(e) : t(e);
     }
    },
    resolveAll: Vt.resolveAll,
   };
   const en = {
    name: 'hardBreakEscape',
    tokenize: function (e, t, n) {
     return function (t) {
      return (e.enter('hardBreakEscape'), e.consume(t), r);
     };
     function r(r) {
      return Ke(r) ? (e.exit('hardBreakEscape'), t(r)) : n(r);
     }
    },
   };
   const tn = {
    name: 'codeText',
    tokenize: function (e, t, n) {
     let r,
      o,
      i = 0;
     return function (t) {
      return (e.enter('codeText'), e.enter('codeTextSequence'), l(t));
     };
     function l(t) {
      return 96 === t ? (e.consume(t), i++, l) : (e.exit('codeTextSequence'), a(t));
     }
     function a(t) {
      return null === t ? n(t) : 32 === t ? (e.enter('space'), e.consume(t), e.exit('space'), a) : 96 === t ? ((o = e.enter('codeTextSequence')), (r = 0), u(t)) : Ke(t) ? (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), a) : (e.enter('codeTextData'), s(t));
     }
     function s(t) {
      return null === t || 32 === t || 96 === t || Ke(t) ? (e.exit('codeTextData'), a(t)) : (e.consume(t), s);
     }
     function u(n) {
      return 96 === n ? (e.consume(n), r++, u) : r === i ? (e.exit('codeTextSequence'), e.exit('codeText'), t(n)) : ((o.type = 'codeTextData'), s(n));
     }
    },
    resolve: function (e) {
     let t,
      n,
      r = e.length - 4,
      o = 3;
     if (!(('lineEnding' !== e[o][1].type && 'space' !== e[o][1].type) || ('lineEnding' !== e[r][1].type && 'space' !== e[r][1].type)))
      for (t = o; ++t < r; )
       if ('codeTextData' === e[t][1].type) {
        ((e[o][1].type = 'codeTextPadding'), (e[r][1].type = 'codeTextPadding'), (o += 2), (r -= 2));
        break;
       }
     ((t = o - 1), r++);
     for (; ++t <= r; ) void 0 === n ? t !== r && 'lineEnding' !== e[t][1].type && (n = t) : (t !== r && 'lineEnding' !== e[t][1].type) || ((e[n][1].type = 'codeTextData'), t !== n + 2 && ((e[n][1].end = e[t - 1][1].end), e.splice(n + 2, t - n - 2), (r -= t - n - 2), (t = n + 2)), (n = void 0));
     return e;
    },
    previous: function (e) {
     return 96 !== e || 'characterEscape' === this.events[this.events.length - 1][1].type;
    },
   };
   const nn = { 42: gt, 43: gt, 45: gt, 48: gt, 49: gt, 50: gt, 51: gt, 52: gt, 53: gt, 54: gt, 55: gt, 56: gt, 57: gt, 62: vt },
    rn = { 91: Ct },
    on = { [-2]: It, [-1]: It, 32: It },
    ln = { 35: At, 42: mt, 45: [Lt, mt], 60: zt, 61: Lt, 95: mt, 96: Ft, 126: Ft },
    an = { 38: Bt, 92: Ut },
    sn = { [-5]: Ht, [-4]: Ht, [-3]: Ht, 33: Yt, 38: Bt, 42: Qt, 60: [Xt, Zt], 91: Gt, 92: [en, Ut], 93: Vt, 95: Qt, 96: tn },
    un = { null: [Qt, at] },
    cn = { null: [42, 95] },
    fn = { null: [] };
   function pn(e) {
    const t = (function (e) {
      const t = {};
      let n = -1;
      for (; ++n < e.length; ) _e(t, e[n]);
      return t;
     })([o, ...((e || {}).extensions || [])]),
     n = { defined: [], lazy: {}, constructs: t, content: r(et), document: r(tt), flow: r(lt), string: r(st), text: r(ut) };
    return n;
    function r(e) {
     return function (t) {
      return ht(n, e, t);
     };
    }
   }
   const dn = /[\0\t\n\r]/g;
   function hn(e, t) {
    const n = Number.parseInt(e, t);
    return n < 9 || 11 === n || (n > 13 && n < 32) || (n > 126 && n < 160) || (n > 55295 && n < 57344) || (n > 64975 && n < 65008) || 65535 == (65535 & n) || 65534 == (65535 & n) || n > 1114111 ? '\ufffd' : String.fromCodePoint(n);
   }
   const mn = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
   function gn(e, t, n) {
    if (t) return t;
    if (35 === n.charCodeAt(0)) {
     const e = n.charCodeAt(1),
      t = 120 === e || 88 === e;
     return hn(n.slice(t ? 2 : 1), t ? 16 : 10);
    }
    return Nt(n) || e;
   }
   const yn = {}.hasOwnProperty;
   function xn(e, t, n) {
    return (
     'string' != typeof t && ((n = t), (t = void 0)),
     (function (e) {
      const t = { transforms: [], canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'], enter: { autolink: i(ee), autolinkProtocol: C, autolinkEmail: C, atxHeading: i(J), blockQuote: i($), characterEscape: C, characterReference: C, codeFenced: i(W), codeFencedFenceInfo: l, codeFencedFenceMeta: l, codeIndented: i(W, l), codeText: i(Y, l), codeTextData: C, data: C, codeFlowValue: C, definition: i(K), definitionDestinationString: l, definitionLabelString: l, definitionTitleString: l, emphasis: i(Q), hardBreakEscape: i(X), hardBreakTrailing: i(X), htmlFlow: i(Z, l), htmlFlowData: C, htmlText: i(Z, l), htmlTextData: C, image: i(G), label: l, link: i(ee), listItem: i(ne), listItemValue: p, listOrdered: i(te, f), listUnordered: i(te), paragraph: i(re), reference: N, referenceString: l, resourceDestinationString: l, resourceTitleString: l, setextHeading: i(J), strong: i(oe), thematicBreak: i(ae) }, exit: { atxHeading: s(), atxHeadingSequence: b, autolink: s(), autolinkEmail: q, autolinkProtocol: V, blockQuote: s(), characterEscapeValue: P, characterReferenceMarkerHexadecimal: U, characterReferenceMarkerNumeric: U, characterReferenceValue: H, codeFenced: s(g), codeFencedFence: m, codeFencedFenceInfo: d, codeFencedFenceMeta: h, codeFlowValue: P, codeIndented: s(y), codeText: s(O), codeTextData: P, data: P, definition: s(), definitionDestinationString: k, definitionLabelString: x, definitionTitleString: v, emphasis: s(), hardBreakEscape: s(T), hardBreakTrailing: s(T), htmlFlow: s(A), htmlFlowData: P, htmlText: s(L), htmlTextData: P, image: s(z), label: M, labelText: j, lineEnding: I, link: s(D), listItem: s(), listOrdered: s(), listUnordered: s(), paragraph: s(), referenceString: B, resourceDestinationString: R, resourceTitleString: F, resource: _, setextHeading: s(E), setextHeadingLineSequence: S, setextHeadingText: w, strong: s(), thematicBreak: s() } };
      kn(t, (e || {}).mdastExtensions || []);
      const n = {};
      return r;
      function r(e) {
       let r = { type: 'root', children: [] };
       const i = { stack: [r], tokenStack: [], config: t, enter: a, exit: u, buffer: l, resume: c, data: n },
        s = [];
       let f = -1;
       for (; ++f < e.length; )
        if ('listOrdered' === e[f][1].type || 'listUnordered' === e[f][1].type)
         if ('enter' === e[f][0]) s.push(f);
         else {
          f = o(e, s.pop(), f);
         }
       for (f = -1; ++f < e.length; ) {
        const n = t[e[f][0]];
        yn.call(n, e[f][1].type) && n[e[f][1].type].call(Object.assign({ sliceSerialize: e[f][2].sliceSerialize }, i), e[f][1]);
       }
       if (i.tokenStack.length > 0) {
        const e = i.tokenStack[i.tokenStack.length - 1];
        (e[1] || wn).call(i, void 0, e[0]);
       }
       for (r.position = { start: vn(e.length > 0 ? e[0][1].start : { line: 1, column: 1, offset: 0 }), end: vn(e.length > 0 ? e[e.length - 2][1].end : { line: 1, column: 1, offset: 0 }) }, f = -1; ++f < t.transforms.length; ) r = t.transforms[f](r) || r;
       return r;
      }
      function o(e, t, n) {
       let r,
        o,
        i,
        l,
        a = t - 1,
        s = -1,
        u = !1;
       for (; ++a <= n; ) {
        const t = e[a];
        switch (t[1].type) {
         case 'listUnordered':
         case 'listOrdered':
         case 'blockQuote':
          ('enter' === t[0] ? s++ : s--, (l = void 0));
          break;
         case 'lineEndingBlank':
          'enter' === t[0] && (!r || l || s || i || (i = a), (l = void 0));
          break;
         case 'linePrefix':
         case 'listItemValue':
         case 'listItemMarker':
         case 'listItemPrefix':
         case 'listItemPrefixWhitespace':
          break;
         default:
          l = void 0;
        }
        if ((!s && 'enter' === t[0] && 'listItemPrefix' === t[1].type) || (-1 === s && 'exit' === t[0] && ('listUnordered' === t[1].type || 'listOrdered' === t[1].type))) {
         if (r) {
          let l = a;
          for (o = void 0; l--; ) {
           const t = e[l];
           if ('lineEnding' === t[1].type || 'lineEndingBlank' === t[1].type) {
            if ('exit' === t[0]) continue;
            (o && ((e[o][1].type = 'lineEndingBlank'), (u = !0)), (t[1].type = 'lineEnding'), (o = l));
           } else if ('linePrefix' !== t[1].type && 'blockQuotePrefix' !== t[1].type && 'blockQuotePrefixWhitespace' !== t[1].type && 'blockQuoteMarker' !== t[1].type && 'listItemIndent' !== t[1].type) break;
          }
          (i && (!o || i < o) && (r._spread = !0), (r.end = Object.assign({}, o ? e[o][1].start : t[1].end)), e.splice(o || a, 0, ['exit', r, t[2]]), a++, n++);
         }
         if ('listItemPrefix' === t[1].type) {
          const o = { type: 'listItem', _spread: !1, start: Object.assign({}, t[1].start), end: void 0 };
          ((r = o), e.splice(a, 0, ['enter', o, t[2]]), a++, n++, (i = void 0), (l = !0));
         }
        }
       }
       return ((e[t][1]._spread = u), n);
      }
      function i(e, t) {
       return n;
       function n(n) {
        (a.call(this, e(n), n), t && t.call(this, n));
       }
      }
      function l() {
       this.stack.push({ type: 'fragment', children: [] });
      }
      function a(e, t, n) {
       (this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n]), (e.position = { start: vn(t.start), end: void 0 }));
      }
      function s(e) {
       return t;
       function t(t) {
        (e && e.call(this, t), u.call(this, t));
       }
      }
      function u(e, t) {
       const n = this.stack.pop(),
        r = this.tokenStack.pop();
       if (!r) throw new Error('Cannot close `' + e.type + '` (' + ie({ start: e.start, end: e.end }) + '): it\u2019s not open');
       if (r[0].type !== e.type)
        if (t) t.call(this, e, r[0]);
        else {
         (r[1] || wn).call(this, e, r[0]);
        }
       n.position.end = vn(e.end);
      }
      function c() {
       return (function (e, t) {
        const n = t || Le;
        return Oe(e, 'boolean' != typeof n.includeImageAlt || n.includeImageAlt, 'boolean' != typeof n.includeHtml || n.includeHtml);
       })(this.stack.pop());
      }
      function f() {
       this.data.expectingFirstListItemValue = !0;
      }
      function p(e) {
       if (this.data.expectingFirstListItemValue) {
        ((this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10)), (this.data.expectingFirstListItemValue = void 0));
       }
      }
      function d() {
       const e = this.resume();
       this.stack[this.stack.length - 1].lang = e;
      }
      function h() {
       const e = this.resume();
       this.stack[this.stack.length - 1].meta = e;
      }
      function m() {
       this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0));
      }
      function g() {
       const e = this.resume();
       ((this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')), (this.data.flowCodeInside = void 0));
      }
      function y() {
       const e = this.resume();
       this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, '');
      }
      function x(e) {
       const t = this.resume(),
        n = this.stack[this.stack.length - 1];
       ((n.label = t), (n.identifier = Et(this.sliceSerialize(e)).toLowerCase()));
      }
      function v() {
       const e = this.resume();
       this.stack[this.stack.length - 1].title = e;
      }
      function k() {
       const e = this.resume();
       this.stack[this.stack.length - 1].url = e;
      }
      function b(e) {
       const t = this.stack[this.stack.length - 1];
       if (!t.depth) {
        const n = this.sliceSerialize(e).length;
        t.depth = n;
       }
      }
      function w() {
       this.data.setextHeadingSlurpLineEnding = !0;
      }
      function S(e) {
       this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
      }
      function E() {
       this.data.setextHeadingSlurpLineEnding = void 0;
      }
      function C(e) {
       const t = this.stack[this.stack.length - 1].children;
       let n = t[t.length - 1];
       ((n && 'text' === n.type) || ((n = le()), (n.position = { start: vn(e.start), end: void 0 }), t.push(n)), this.stack.push(n));
      }
      function P(e) {
       const t = this.stack.pop();
       ((t.value += this.sliceSerialize(e)), (t.position.end = vn(e.end)));
      }
      function I(e) {
       const n = this.stack[this.stack.length - 1];
       if (this.data.atHardBreak) {
        return ((n.children[n.children.length - 1].position.end = vn(e.end)), void (this.data.atHardBreak = void 0));
       }
       !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (C.call(this, e), P.call(this, e));
      }
      function T() {
       this.data.atHardBreak = !0;
      }
      function A() {
       const e = this.resume();
       this.stack[this.stack.length - 1].value = e;
      }
      function L() {
       const e = this.resume();
       this.stack[this.stack.length - 1].value = e;
      }
      function O() {
       const e = this.resume();
       this.stack[this.stack.length - 1].value = e;
      }
      function D() {
       const e = this.stack[this.stack.length - 1];
       if (this.data.inReference) {
        const t = this.data.referenceType || 'shortcut';
        ((e.type += 'Reference'), (e.referenceType = t), delete e.url, delete e.title);
       } else (delete e.identifier, delete e.label);
       this.data.referenceType = void 0;
      }
      function z() {
       const e = this.stack[this.stack.length - 1];
       if (this.data.inReference) {
        const t = this.data.referenceType || 'shortcut';
        ((e.type += 'Reference'), (e.referenceType = t), delete e.url, delete e.title);
       } else (delete e.identifier, delete e.label);
       this.data.referenceType = void 0;
      }
      function j(e) {
       const t = this.sliceSerialize(e),
        n = this.stack[this.stack.length - 2];
       ((n.label = (function (e) {
        return e.replace(mn, gn);
       })(t)),
        (n.identifier = Et(t).toLowerCase()));
      }
      function M() {
       const e = this.stack[this.stack.length - 1],
        t = this.resume(),
        n = this.stack[this.stack.length - 1];
       if (((this.data.inReference = !0), 'link' === n.type)) {
        const t = e.children;
        n.children = t;
       } else n.alt = t;
      }
      function R() {
       const e = this.resume();
       this.stack[this.stack.length - 1].url = e;
      }
      function F() {
       const e = this.resume();
       this.stack[this.stack.length - 1].title = e;
      }
      function _() {
       this.data.inReference = void 0;
      }
      function N() {
       this.data.referenceType = 'collapsed';
      }
      function B(e) {
       const t = this.resume(),
        n = this.stack[this.stack.length - 1];
       ((n.label = t), (n.identifier = Et(this.sliceSerialize(e)).toLowerCase()), (this.data.referenceType = 'full'));
      }
      function U(e) {
       this.data.characterReferenceType = e.type;
      }
      function H(e) {
       const t = this.sliceSerialize(e),
        n = this.data.characterReferenceType;
       let r;
       if (n) ((r = hn(t, 'characterReferenceMarkerNumeric' === n ? 10 : 16)), (this.data.characterReferenceType = void 0));
       else {
        r = Nt(t);
       }
       const o = this.stack.pop();
       ((o.value += r), (o.position.end = vn(e.end)));
      }
      function V(e) {
       P.call(this, e);
       this.stack[this.stack.length - 1].url = this.sliceSerialize(e);
      }
      function q(e) {
       P.call(this, e);
       this.stack[this.stack.length - 1].url = 'mailto:' + this.sliceSerialize(e);
      }
      function $() {
       return { type: 'blockquote', children: [] };
      }
      function W() {
       return { type: 'code', lang: null, meta: null, value: '' };
      }
      function Y() {
       return { type: 'inlineCode', value: '' };
      }
      function K() {
       return { type: 'definition', identifier: '', label: null, title: null, url: '' };
      }
      function Q() {
       return { type: 'emphasis', children: [] };
      }
      function J() {
       return { type: 'heading', depth: 0, children: [] };
      }
      function X() {
       return { type: 'break' };
      }
      function Z() {
       return { type: 'html', value: '' };
      }
      function G() {
       return { type: 'image', title: null, url: '', alt: null };
      }
      function ee() {
       return { type: 'link', title: null, url: '', children: [] };
      }
      function te(e) {
       return { type: 'list', ordered: 'listOrdered' === e.type, start: null, spread: e._spread, children: [] };
      }
      function ne(e) {
       return { type: 'listItem', spread: e._spread, checked: null, children: [] };
      }
      function re() {
       return { type: 'paragraph', children: [] };
      }
      function oe() {
       return { type: 'strong', children: [] };
      }
      function le() {
       return { type: 'text', value: '' };
      }
      function ae() {
       return { type: 'thematicBreak' };
      }
     })(n)(
      (function (e) {
       for (; !Me(e); );
       return e;
      })(
       pn(n)
        .document()
        .write(
         (function () {
          let e,
           t = 1,
           n = '',
           r = !0;
          return function (o, i, l) {
           const a = [];
           let s, u, c, f, p;
           for (o = n + ('string' == typeof o ? o.toString() : new TextDecoder(i || void 0).decode(o)), c = 0, n = '', r && (65279 === o.charCodeAt(0) && c++, (r = void 0)); c < o.length; ) {
            if (((dn.lastIndex = c), (s = dn.exec(o)), (f = s && void 0 !== s.index ? s.index : o.length), (p = o.charCodeAt(f)), !s)) {
             n = o.slice(c);
             break;
            }
            if (10 === p && c === f && e) (a.push(-3), (e = void 0));
            else
             switch ((e && (a.push(-5), (e = void 0)), c < f && (a.push(o.slice(c, f)), (t += f - c)), p)) {
              case 0:
               (a.push(65533), t++);
               break;
              case 9:
               for (u = 4 * Math.ceil(t / 4), a.push(-2); t++ < u; ) a.push(-1);
               break;
              case 10:
               (a.push(-4), (t = 1));
               break;
              default:
               ((e = !0), (t = 1));
             }
            c = f + 1;
           }
           return (l && (e && a.push(-5), n && a.push(n), a.push(null)), a);
          };
         })()(e, t, !0),
        ),
      ),
     )
    );
   }
   function vn(e) {
    return { line: e.line, column: e.column, offset: e.offset };
   }
   function kn(e, t) {
    let n = -1;
    for (; ++n < t.length; ) {
     const r = t[n];
     Array.isArray(r) ? kn(e, r) : bn(e, r);
    }
   }
   function bn(e, t) {
    let n;
    for (n in t)
     if (yn.call(t, n))
      switch (n) {
       case 'canContainEols': {
        const r = t[n];
        r && e[n].push(...r);
        break;
       }
       case 'transforms': {
        const r = t[n];
        r && e[n].push(...r);
        break;
       }
       case 'enter':
       case 'exit': {
        const r = t[n];
        r && Object.assign(e[n], r);
        break;
       }
      }
   }
   function wn(e, t) {
    throw e ? new Error('Cannot close `' + e.type + '` (' + ie({ start: e.start, end: e.end }) + '): a different token (`' + t.type + '`, ' + ie({ start: t.start, end: t.end }) + ') is open') : new Error('Cannot close document, a token (`' + t.type + '`, ' + ie({ start: t.start, end: t.end }) + ') is still open');
   }
   function Sn(e) {
    const t = this;
    t.parser = function (n) {
     return xn(n, { ...t.data('settings'), ...e, extensions: t.data('micromarkExtensions') || [], mdastExtensions: t.data('fromMarkdownExtensions') || [] });
    };
   }
   const En = 'object' == typeof self ? self : globalThis,
    Cn = (e) =>
     ((e, t) => {
      const n = (t, n) => (e.set(n, t), t),
       r = (o) => {
        if (e.has(o)) return e.get(o);
        const [i, l] = t[o];
        switch (i) {
         case 0:
         case -1:
          return n(l, o);
         case 1: {
          const e = n([], o);
          for (const t of l) e.push(r(t));
          return e;
         }
         case 2: {
          const e = n({}, o);
          for (const [t, n] of l) e[r(t)] = r(n);
          return e;
         }
         case 3:
          return n(new Date(l), o);
         case 4: {
          const { source: e, flags: t } = l;
          return n(new RegExp(e, t), o);
         }
         case 5: {
          const e = n(new Map(), o);
          for (const [t, n] of l) e.set(r(t), r(n));
          return e;
         }
         case 6: {
          const e = n(new Set(), o);
          for (const t of l) e.add(r(t));
          return e;
         }
         case 7: {
          const { name: e, message: t } = l;
          return n(new En[e](t), o);
         }
         case 8:
          return n(BigInt(l), o);
         case 'BigInt':
          return n(Object(BigInt(l)), o);
        }
        return n(new En[i](l), o);
       };
      return r;
     })(
      new Map(),
      e,
     )(0),
    Pn = '',
    { toString: In } = {},
    { keys: Tn } = Object,
    An = (e) => {
     const t = typeof e;
     if ('object' !== t || !e) return [0, t];
     const n = In.call(e).slice(8, -1);
     switch (n) {
      case 'Array':
       return [1, Pn];
      case 'Object':
       return [2, Pn];
      case 'Date':
       return [3, Pn];
      case 'RegExp':
       return [4, Pn];
      case 'Map':
       return [5, Pn];
      case 'Set':
       return [6, Pn];
     }
     return n.includes('Array') ? [1, n] : n.includes('Error') ? [7, n] : [2, n];
    },
    Ln = ([e, t]) => 0 === e && ('function' === t || 'symbol' === t),
    On = (e, { json: t, lossy: n } = {}) => {
     const r = [];
     return (
      ((e, t, n, r) => {
       const o = (e, t) => {
         const o = r.push(e) - 1;
         return (n.set(t, o), o);
        },
        i = (r) => {
         if (n.has(r)) return n.get(r);
         let [l, a] = An(r);
         switch (l) {
          case 0: {
           let t = r;
           switch (a) {
            case 'bigint':
             ((l = 8), (t = r.toString()));
             break;
            case 'function':
            case 'symbol':
             if (e) throw new TypeError('unable to serialize ' + a);
             t = null;
             break;
            case 'undefined':
             return o([-1], r);
           }
           return o([l, t], r);
          }
          case 1: {
           if (a) return o([a, [...r]], r);
           const e = [],
            t = o([l, e], r);
           for (const n of r) e.push(i(n));
           return t;
          }
          case 2: {
           if (a)
            switch (a) {
             case 'BigInt':
              return o([a, r.toString()], r);
             case 'Boolean':
             case 'Number':
             case 'String':
              return o([a, r.valueOf()], r);
            }
           if (t && 'toJSON' in r) return i(r.toJSON());
           const n = [],
            s = o([l, n], r);
           for (const t of Tn(r)) (!e && Ln(An(r[t]))) || n.push([i(t), i(r[t])]);
           return s;
          }
          case 3:
           return o([l, r.toISOString()], r);
          case 4: {
           const { source: e, flags: t } = r;
           return o([l, { source: e, flags: t }], r);
          }
          case 5: {
           const t = [],
            n = o([l, t], r);
           for (const [o, l] of r) (e || (!Ln(An(o)) && !Ln(An(l)))) && t.push([i(o), i(l)]);
           return n;
          }
          case 6: {
           const t = [],
            n = o([l, t], r);
           for (const o of r) (!e && Ln(An(o))) || t.push(i(o));
           return n;
          }
         }
         const { message: s } = r;
         return o([l, { name: a, message: s }], r);
        };
       return i;
      })(
       !(t || n),
       !!t,
       new Map(),
       r,
      )(e),
      r
     );
    },
    Dn = 'function' == typeof structuredClone ? (e, t) => (t && ('json' in t || 'lossy' in t) ? Cn(On(e, t)) : structuredClone(e)) : (e, t) => Cn(On(e, t));
   function zn(e) {
    const t = [];
    let n = -1,
     r = 0,
     o = 0;
    for (; ++n < e.length; ) {
     const i = e.charCodeAt(n);
     let l = '';
     if (37 === i && He(e.charCodeAt(n + 1)) && He(e.charCodeAt(n + 2))) o = 2;
     else if (i < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) || (l = String.fromCharCode(i));
     else if (i > 55295 && i < 57344) {
      const t = e.charCodeAt(n + 1);
      i < 56320 && t > 56319 && t < 57344 ? ((l = String.fromCharCode(i, t)), (o = 1)) : (l = '\ufffd');
     } else l = String.fromCharCode(i);
     (l && (t.push(e.slice(r, n), encodeURIComponent(l)), (r = n + o + 1), (l = '')), o && ((n += o), (o = 0)));
    }
    return t.join('') + e.slice(r);
   }
   function jn(e, t) {
    const n = [{ type: 'text', value: '\u21a9' }];
    return (t > 1 && n.push({ type: 'element', tagName: 'sup', properties: {}, children: [{ type: 'text', value: String(t) }] }), n);
   }
   function Mn(e, t) {
    return 'Back to reference ' + (e + 1) + (t > 1 ? '-' + t : '');
   }
   const Rn = function (e) {
    if (null == e) return _n;
    if ('function' == typeof e) return Fn(e);
    if ('object' == typeof e)
     return Array.isArray(e)
      ? (function (e) {
         const t = [];
         let n = -1;
         for (; ++n < e.length; ) t[n] = Rn(e[n]);
         return Fn(r);
         function r(...e) {
          let n = -1;
          for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
          return !1;
         }
        })(e)
      : (function (e) {
         const t = e;
         return Fn(n);
         function n(n) {
          const r = n;
          let o;
          for (o in e) if (r[o] !== t[o]) return !1;
          return !0;
         }
        })(e);
    if ('string' == typeof e)
     return (function (e) {
      return Fn(t);
      function t(t) {
       return t && t.type === e;
      }
     })(e);
    throw new Error('Expected function, string, or object as test');
   };
   function Fn(e) {
    return function (t, n, r) {
     return Boolean(Nn(t) && e.call(this, t, 'number' == typeof n ? n : void 0, r || void 0));
    };
   }
   function _n() {
    return !0;
   }
   function Nn(e) {
    return null !== e && 'object' == typeof e && 'type' in e;
   }
   const Bn = [];
   function Un(e, t, n, r) {
    let o;
    'function' == typeof t && 'function' != typeof n ? ((r = n), (n = t)) : (o = t);
    const i = Rn(o),
     l = r ? -1 : 1;
    !(function e(o, a, s) {
     const u = o && 'object' == typeof o ? o : {};
     if ('string' == typeof u.type) {
      const e = 'string' == typeof u.tagName ? u.tagName : 'string' == typeof u.name ? u.name : void 0;
      Object.defineProperty(c, 'name', { value: 'node (' + o.type + (e ? '<' + e + '>' : '') + ')' });
     }
     return c;
     function c() {
      let u,
       c,
       f,
       p = Bn;
      if (
       (!t || i(o, a, s[s.length - 1] || void 0)) &&
       ((p = (function (e) {
        if (Array.isArray(e)) return e;
        if ('number' == typeof e) return [true, e];
        return null == e ? Bn : [e];
       })(n(o, s))),
       false === p[0])
      )
       return p;
      if ('children' in o && o.children) {
       const t = o;
       if (t.children && 'skip' !== p[0])
        for (c = (r ? t.children.length : -1) + l, f = s.concat(t); c > -1 && c < t.children.length; ) {
         const n = t.children[c];
         if (((u = e(n, c, f)()), false === u[0])) return u;
         c = 'number' == typeof u[1] ? u[1] : c + l;
        }
      }
      return p;
     }
    })(e, void 0, [])();
   }
   function Hn(e, t, n, r) {
    let o, i, l;
    ('function' == typeof t && 'function' != typeof n ? ((i = void 0), (l = t), (o = n)) : ((i = t), (l = n), (o = r)),
     Un(
      e,
      i,
      function (e, t) {
       const n = t[t.length - 1],
        r = n ? n.children.indexOf(e) : void 0;
       return l(e, r, n);
      },
      o,
     ));
   }
   function Vn(e, t) {
    const n = t.referenceType;
    let r = ']';
    if (('collapsed' === n ? (r += '[]') : 'full' === n && (r += '[' + (t.label || t.identifier) + ']'), 'imageReference' === t.type)) return [{ type: 'text', value: '![' + t.alt + r }];
    const o = e.all(t),
     i = o[0];
    i && 'text' === i.type ? (i.value = '[' + i.value) : o.unshift({ type: 'text', value: '[' });
    const l = o[o.length - 1];
    return (l && 'text' === l.type ? (l.value += r) : o.push({ type: 'text', value: r }), o);
   }
   function qn(e) {
    const t = e.spread;
    return null == t ? e.children.length > 1 : t;
   }
   function $n(e) {
    const t = String(e),
     n = /\r?\n|\r/g;
    let r = n.exec(t),
     o = 0;
    const i = [];
    for (; r; ) (i.push(Wn(t.slice(o, r.index), o > 0, !0), r[0]), (o = r.index + r[0].length), (r = n.exec(t)));
    return (i.push(Wn(t.slice(o), o > 0, !1)), i.join(''));
   }
   function Wn(e, t, n) {
    let r = 0,
     o = e.length;
    if (t) {
     let t = e.codePointAt(r);
     for (; 9 === t || 32 === t; ) (r++, (t = e.codePointAt(r)));
    }
    if (n) {
     let t = e.codePointAt(o - 1);
     for (; 9 === t || 32 === t; ) (o--, (t = e.codePointAt(o - 1)));
    }
    return o > r ? e.slice(r, o) : '';
   }
   const Yn = {
    blockquote: function (e, t) {
     const n = { type: 'element', tagName: 'blockquote', properties: {}, children: e.wrap(e.all(t), !0) };
     return (e.patch(t, n), e.applyData(t, n));
    },
    break: function (e, t) {
     const n = { type: 'element', tagName: 'br', properties: {}, children: [] };
     return (e.patch(t, n), [e.applyData(t, n), { type: 'text', value: '\n' }]);
    },
    code: function (e, t) {
     const n = t.value ? t.value + '\n' : '',
      r = {};
     t.lang && (r.className = ['language-' + t.lang]);
     let o = { type: 'element', tagName: 'code', properties: r, children: [{ type: 'text', value: n }] };
     return (t.meta && (o.data = { meta: t.meta }), e.patch(t, o), (o = e.applyData(t, o)), (o = { type: 'element', tagName: 'pre', properties: {}, children: [o] }), e.patch(t, o), o);
    },
    delete: function (e, t) {
     const n = { type: 'element', tagName: 'del', properties: {}, children: e.all(t) };
     return (e.patch(t, n), e.applyData(t, n));
    },
    emphasis: function (e, t) {
     const n = { type: 'element', tagName: 'em', properties: {}, children: e.all(t) };
     return (e.patch(t, n), e.applyData(t, n));
    },
    footnoteReference: function (e, t) {
     const n = 'string' == typeof e.options.clobberPrefix ? e.options.clobberPrefix : 'user-content-',
      r = String(t.identifier).toUpperCase(),
      o = zn(r.toLowerCase()),
      i = e.footnoteOrder.indexOf(r);
     let l,
      a = e.footnoteCounts.get(r);
     (void 0 === a ? ((a = 0), e.footnoteOrder.push(r), (l = e.footnoteOrder.length)) : (l = i + 1), (a += 1), e.footnoteCounts.set(r, a));
     const s = { type: 'element', tagName: 'a', properties: { href: '#' + n + 'fn-' + o, id: n + 'fnref-' + o + (a > 1 ? '-' + a : ''), dataFootnoteRef: !0, ariaDescribedBy: ['footnote-label'] }, children: [{ type: 'text', value: String(l) }] };
     e.patch(t, s);
     const u = { type: 'element', tagName: 'sup', properties: {}, children: [s] };
     return (e.patch(t, u), e.applyData(t, u));
    },
    heading: function (e, t) {
     const n = { type: 'element', tagName: 'h' + t.depth, properties: {}, children: e.all(t) };
     return (e.patch(t, n), e.applyData(t, n));
    },
    html: function (e, t) {
     if (e.options.allowDangerousHtml) {
      const n = { type: 'raw', value: t.value };
      return (e.patch(t, n), e.applyData(t, n));
     }
    },
    imageReference: function (e, t) {
     const n = String(t.identifier).toUpperCase(),
      r = e.definitionById.get(n);
     if (!r) return Vn(e, t);
     const o = { src: zn(r.url || ''), alt: t.alt };
     null !== r.title && void 0 !== r.title && (o.title = r.title);
     const i = { type: 'element', tagName: 'img', properties: o, children: [] };
     return (e.patch(t, i), e.applyData(t, i));
    },
    image: function (e, t) {
     const n = { src: zn(t.url) };
     (null !== t.alt && void 0 !== t.alt && (n.alt = t.alt), null !== t.title && void 0 !== t.title && (n.title = t.title));
     const r = { type: 'element', tagName: 'img', properties: n, children: [] };
     return (e.patch(t, r), e.applyData(t, r));
    },
    inlineCode: function (e, t) {
     const n = { type: 'text', value: t.value.replace(/\r?\n|\r/g, ' ') };
     e.patch(t, n);
     const r = { type: 'element', tagName: 'code', properties: {}, children: [n] };
     return (e.patch(t, r), e.applyData(t, r));
    },
    linkReference: function (e, t) {
     const n = String(t.identifier).toUpperCase(),
      r = e.definitionById.get(n);
     if (!r) return Vn(e, t);
     const o = { href: zn(r.url || '') };
     null !== r.title && void 0 !== r.title && (o.title = r.title);
     const i = { type: 'element', tagName: 'a', properties: o, children: e.all(t) };
     return (e.patch(t, i), e.applyData(t, i));
    },
    link: function (e, t) {
     const n = { href: zn(t.url) };
     null !== t.title && void 0 !== t.title && (n.title = t.title);
     const r = { type: 'element', tagName: 'a', properties: n, children: e.all(t) };
     return (e.patch(t, r), e.applyData(t, r));
    },
    listItem: function (e, t, n) {
     const r = e.all(t),
      o = n
       ? (function (e) {
          let t = !1;
          if ('list' === e.type) {
           t = e.spread || !1;
           const n = e.children;
           let r = -1;
           for (; !t && ++r < n.length; ) t = qn(n[r]);
          }
          return t;
         })(n)
       : qn(t),
      i = {},
      l = [];
     if ('boolean' == typeof t.checked) {
      const e = r[0];
      let n;
      (e && 'element' === e.type && 'p' === e.tagName ? (n = e) : ((n = { type: 'element', tagName: 'p', properties: {}, children: [] }), r.unshift(n)), n.children.length > 0 && n.children.unshift({ type: 'text', value: ' ' }), n.children.unshift({ type: 'element', tagName: 'input', properties: { type: 'checkbox', checked: t.checked, disabled: !0 }, children: [] }), (i.className = ['task-list-item']));
     }
     let a = -1;
     for (; ++a < r.length; ) {
      const e = r[a];
      ((o || 0 !== a || 'element' !== e.type || 'p' !== e.tagName) && l.push({ type: 'text', value: '\n' }), 'element' !== e.type || 'p' !== e.tagName || o ? l.push(e) : l.push(...e.children));
     }
     const s = r[r.length - 1];
     s && (o || 'element' !== s.type || 'p' !== s.tagName) && l.push({ type: 'text', value: '\n' });
     const u = { type: 'element', tagName: 'li', properties: i, children: l };
     return (e.patch(t, u), e.applyData(t, u));
    },
    list: function (e, t) {
     const n = {},
      r = e.all(t);
     let o = -1;
     for ('number' == typeof t.start && 1 !== t.start && (n.start = t.start); ++o < r.length; ) {
      const e = r[o];
      if ('element' === e.type && 'li' === e.tagName && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes('task-list-item')) {
       n.className = ['contains-task-list'];
       break;
      }
     }
     const i = { type: 'element', tagName: t.ordered ? 'ol' : 'ul', properties: n, children: e.wrap(r, !0) };
     return (e.patch(t, i), e.applyData(t, i));
    },
    paragraph: function (e, t) {
     const n = { type: 'element', tagName: 'p', properties: {}, children: e.all(t) };
     return (e.patch(t, n), e.applyData(t, n));
    },
    root: function (e, t) {
     const n = { type: 'root', children: e.wrap(e.all(t)) };
     return (e.patch(t, n), e.applyData(t, n));
    },
    strong: function (e, t) {
     const n = { type: 'element', tagName: 'strong', properties: {}, children: e.all(t) };
     return (e.patch(t, n), e.applyData(t, n));
    },
    table: function (e, t) {
     const n = e.all(t),
      r = n.shift(),
      o = [];
     if (r) {
      const n = { type: 'element', tagName: 'thead', properties: {}, children: e.wrap([r], !0) };
      (e.patch(t.children[0], n), o.push(n));
     }
     if (n.length > 0) {
      const r = { type: 'element', tagName: 'tbody', properties: {}, children: e.wrap(n, !0) },
       i = re(t.children[1]),
       l = ne(t.children[t.children.length - 1]);
      (i && l && (r.position = { start: i, end: l }), o.push(r));
     }
     const i = { type: 'element', tagName: 'table', properties: {}, children: e.wrap(o, !0) };
     return (e.patch(t, i), e.applyData(t, i));
    },
    tableCell: function (e, t) {
     const n = { type: 'element', tagName: 'td', properties: {}, children: e.all(t) };
     return (e.patch(t, n), e.applyData(t, n));
    },
    tableRow: function (e, t, n) {
     const r = n ? n.children : void 0,
      o = 0 === (r ? r.indexOf(t) : 1) ? 'th' : 'td',
      i = n && 'table' === n.type ? n.align : void 0,
      l = i ? i.length : t.children.length;
     let a = -1;
     const s = [];
     for (; ++a < l; ) {
      const n = t.children[a],
       r = {},
       l = i ? i[a] : void 0;
      l && (r.align = l);
      let u = { type: 'element', tagName: o, properties: r, children: [] };
      (n && ((u.children = e.all(n)), e.patch(n, u), (u = e.applyData(n, u))), s.push(u));
     }
     const u = { type: 'element', tagName: 'tr', properties: {}, children: e.wrap(s, !0) };
     return (e.patch(t, u), e.applyData(t, u));
    },
    text: function (e, t) {
     const n = { type: 'text', value: $n(String(t.value)) };
     return (e.patch(t, n), e.applyData(t, n));
    },
    thematicBreak: function (e, t) {
     const n = { type: 'element', tagName: 'hr', properties: {}, children: [] };
     return (e.patch(t, n), e.applyData(t, n));
    },
    toml: Kn,
    yaml: Kn,
    definition: Kn,
    footnoteDefinition: Kn,
   };
   function Kn() {}
   const Qn = {}.hasOwnProperty,
    Jn = {};
   function Xn(e, t) {
    e.position &&
     (t.position = (function (e) {
      const t = re(e),
       n = ne(e);
      if (t && n) return { start: t, end: n };
     })(e));
   }
   function Zn(e, t) {
    let n = t;
    if (e && e.data) {
     const t = e.data.hName,
      r = e.data.hChildren,
      o = e.data.hProperties;
     if ('string' == typeof t)
      if ('element' === n.type) n.tagName = t;
      else {
       n = { type: 'element', tagName: t, properties: {}, children: 'children' in n ? n.children : [n] };
      }
     ('element' === n.type && o && Object.assign(n.properties, Dn(o)), 'children' in n && n.children && null != r && (n.children = r));
    }
    return n;
   }
   function Gn(e, t) {
    const n = t.data || {},
     r = !('value' in t) || Qn.call(n, 'hProperties') || Qn.call(n, 'hChildren') ? { type: 'element', tagName: 'div', properties: {}, children: e.all(t) } : { type: 'text', value: t.value };
    return (e.patch(t, r), e.applyData(t, r));
   }
   function er(e, t) {
    const n = [];
    let r = -1;
    for (t && n.push({ type: 'text', value: '\n' }); ++r < e.length; ) (r && n.push({ type: 'text', value: '\n' }), n.push(e[r]));
    return (t && e.length > 0 && n.push({ type: 'text', value: '\n' }), n);
   }
   function tr(e) {
    let t = 0,
     n = e.charCodeAt(t);
    for (; 9 === n || 32 === n; ) (t++, (n = e.charCodeAt(t)));
    return e.slice(t);
   }
   function nr(e, t) {
    const n = (function (e, t) {
      const n = t || Jn,
       r = new Map(),
       o = new Map(),
       i = new Map(),
       l = { ...Yn, ...n.handlers },
       a = {
        all: function (e) {
         const t = [];
         if ('children' in e) {
          const n = e.children;
          let r = -1;
          for (; ++r < n.length; ) {
           const o = a.one(n[r], e);
           if (o) {
            if (r && 'break' === n[r - 1].type && (Array.isArray(o) || 'text' !== o.type || (o.value = tr(o.value)), !Array.isArray(o) && 'element' === o.type)) {
             const e = o.children[0];
             e && 'text' === e.type && (e.value = tr(e.value));
            }
            Array.isArray(o) ? t.push(...o) : t.push(o);
           }
          }
         }
         return t;
        },
        applyData: Zn,
        definitionById: r,
        footnoteById: o,
        footnoteCounts: i,
        footnoteOrder: [],
        handlers: l,
        one: function (e, t) {
         const n = e.type,
          r = a.handlers[n];
         if (Qn.call(a.handlers, n) && r) return r(a, e, t);
         if (a.options.passThrough && a.options.passThrough.includes(n)) {
          if ('children' in e) {
           const { children: t, ...n } = e,
            r = Dn(n);
           return ((r.children = a.all(e)), r);
          }
          return Dn(e);
         }
         return (a.options.unknownHandler || Gn)(a, e, t);
        },
        options: n,
        patch: Xn,
        wrap: er,
       };
      return (
       Hn(e, function (e) {
        if ('definition' === e.type || 'footnoteDefinition' === e.type) {
         const t = 'definition' === e.type ? r : o,
          n = String(e.identifier).toUpperCase();
         t.has(n) || t.set(n, e);
        }
       }),
       a
      );
     })(e, t),
     r = n.one(e, void 0),
     o = (function (e) {
      const t = 'string' == typeof e.options.clobberPrefix ? e.options.clobberPrefix : 'user-content-',
       n = e.options.footnoteBackContent || jn,
       r = e.options.footnoteBackLabel || Mn,
       o = e.options.footnoteLabel || 'Footnotes',
       i = e.options.footnoteLabelTagName || 'h2',
       l = e.options.footnoteLabelProperties || { className: ['sr-only'] },
       a = [];
      let s = -1;
      for (; ++s < e.footnoteOrder.length; ) {
       const o = e.footnoteById.get(e.footnoteOrder[s]);
       if (!o) continue;
       const i = e.all(o),
        l = String(o.identifier).toUpperCase(),
        u = zn(l.toLowerCase());
       let c = 0;
       const f = [],
        p = e.footnoteCounts.get(l);
       for (; void 0 !== p && ++c <= p; ) {
        f.length > 0 && f.push({ type: 'text', value: ' ' });
        let e = 'string' == typeof n ? n : n(s, c);
        ('string' == typeof e && (e = { type: 'text', value: e }), f.push({ type: 'element', tagName: 'a', properties: { href: '#' + t + 'fnref-' + u + (c > 1 ? '-' + c : ''), dataFootnoteBackref: '', ariaLabel: 'string' == typeof r ? r : r(s, c), className: ['data-footnote-backref'] }, children: Array.isArray(e) ? e : [e] }));
       }
       const d = i[i.length - 1];
       if (d && 'element' === d.type && 'p' === d.tagName) {
        const e = d.children[d.children.length - 1];
        (e && 'text' === e.type ? (e.value += ' ') : d.children.push({ type: 'text', value: ' ' }), d.children.push(...f));
       } else i.push(...f);
       const h = { type: 'element', tagName: 'li', properties: { id: t + 'fn-' + u }, children: e.wrap(i, !0) };
       (e.patch(o, h), a.push(h));
      }
      if (0 !== a.length)
       return {
        type: 'element',
        tagName: 'section',
        properties: { dataFootnotes: !0, className: ['footnotes'] },
        children: [
         { type: 'element', tagName: i, properties: { ...Dn(l), id: 'footnote-label' }, children: [{ type: 'text', value: o }] },
         { type: 'text', value: '\n' },
         { type: 'element', tagName: 'ol', properties: {}, children: e.wrap(a, !0) },
         { type: 'text', value: '\n' },
        ],
       };
     })(n),
     i = Array.isArray(r) ? { type: 'root', children: r } : r || { type: 'root', children: [] };
    return (o && i.children.push({ type: 'text', value: '\n' }, o), i);
   }
   function rr(e, t) {
    return e && 'run' in e
     ? async function (n, r) {
        const o = nr(n, t);
        await e.run(o, r);
       }
     : function (n) {
        return nr(n, t || e);
       };
   }
   function or(e) {
    if (e) throw e;
   }
   var ir = n(60710);
   function lr(e) {
    if ('object' != typeof e || null === e) return !1;
    const t = Object.getPrototypeOf(e);
    return !((null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t)) || Symbol.toStringTag in e || Symbol.iterator in e);
   }
   function ar() {
    const e = [],
     t = {
      run: function (...t) {
       let n = -1;
       const r = t.pop();
       if ('function' != typeof r) throw new TypeError('Expected function as last argument, not ' + r);
       !(function o(i, ...l) {
        const a = e[++n];
        let s = -1;
        if (i) r(i);
        else {
         for (; ++s < t.length; ) (null !== l[s] && void 0 !== l[s]) || (l[s] = t[s]);
         ((t = l),
          a
           ? (function (e, t) {
              let n;
              return r;
              function r(...t) {
               const r = e.length > t.length;
               let a;
               r && t.push(o);
               try {
                a = e.apply(this, t);
               } catch (i) {
                if (r && n) throw i;
                return o(i);
               }
               r || (a instanceof Promise ? a.then(l, o) : a instanceof Error ? o(a) : l(a));
              }
              function o(e, ...r) {
               n || ((n = !0), t(e, ...r));
              }
              function l(e) {
               o(null, e);
              }
             })(
              a,
              o,
             )(...l)
           : r(null, ...l));
        }
       })(null, ...t);
      },
      use: function (n) {
       if ('function' != typeof n) throw new TypeError('Expected `middelware` to be a function, not ' + n);
       return (e.push(n), t);
      },
     };
    return t;
   }
   const sr = {
    basename: function (e, t) {
     if (void 0 !== t && 'string' != typeof t) throw new TypeError('"ext" argument must be a string');
     ur(e);
     let n,
      r = 0,
      o = -1,
      i = e.length;
     if (void 0 === t || 0 === t.length || t.length > e.length) {
      for (; i--; )
       if (47 === e.codePointAt(i)) {
        if (n) {
         r = i + 1;
         break;
        }
       } else o < 0 && ((n = !0), (o = i + 1));
      return o < 0 ? '' : e.slice(r, o);
     }
     if (t === e) return '';
     let l = -1,
      a = t.length - 1;
     for (; i--; )
      if (47 === e.codePointAt(i)) {
       if (n) {
        r = i + 1;
        break;
       }
      } else (l < 0 && ((n = !0), (l = i + 1)), a > -1 && (e.codePointAt(i) === t.codePointAt(a--) ? a < 0 && (o = i) : ((a = -1), (o = l))));
     r === o ? (o = l) : o < 0 && (o = e.length);
     return e.slice(r, o);
    },
    dirname: function (e) {
     if ((ur(e), 0 === e.length)) return '.';
     let t,
      n = -1,
      r = e.length;
     for (; --r; )
      if (47 === e.codePointAt(r)) {
       if (t) {
        n = r;
        break;
       }
      } else t || (t = !0);
     return n < 0 ? (47 === e.codePointAt(0) ? '/' : '.') : 1 === n && 47 === e.codePointAt(0) ? '//' : e.slice(0, n);
    },
    extname: function (e) {
     ur(e);
     let t,
      n = e.length,
      r = -1,
      o = 0,
      i = -1,
      l = 0;
     for (; n--; ) {
      const a = e.codePointAt(n);
      if (47 !== a) (r < 0 && ((t = !0), (r = n + 1)), 46 === a ? (i < 0 ? (i = n) : 1 !== l && (l = 1)) : i > -1 && (l = -1));
      else if (t) {
       o = n + 1;
       break;
      }
     }
     if (i < 0 || r < 0 || 0 === l || (1 === l && i === r - 1 && i === o + 1)) return '';
     return e.slice(i, r);
    },
    join: function (...e) {
     let t,
      n = -1;
     for (; ++n < e.length; ) (ur(e[n]), e[n] && (t = void 0 === t ? e[n] : t + '/' + e[n]));
     return void 0 === t
      ? '.'
      : (function (e) {
         ur(e);
         const t = 47 === e.codePointAt(0);
         let n = (function (e, t) {
          let n,
           r,
           o = '',
           i = 0,
           l = -1,
           a = 0,
           s = -1;
          for (; ++s <= e.length; ) {
           if (s < e.length) n = e.codePointAt(s);
           else {
            if (47 === n) break;
            n = 47;
           }
           if (47 === n) {
            if (l === s - 1 || 1 === a);
            else if (l !== s - 1 && 2 === a) {
             if (o.length < 2 || 2 !== i || 46 !== o.codePointAt(o.length - 1) || 46 !== o.codePointAt(o.length - 2))
              if (o.length > 2) {
               if (((r = o.lastIndexOf('/')), r !== o.length - 1)) {
                (r < 0 ? ((o = ''), (i = 0)) : ((o = o.slice(0, r)), (i = o.length - 1 - o.lastIndexOf('/'))), (l = s), (a = 0));
                continue;
               }
              } else if (o.length > 0) {
               ((o = ''), (i = 0), (l = s), (a = 0));
               continue;
              }
             t && ((o = o.length > 0 ? o + '/..' : '..'), (i = 2));
            } else (o.length > 0 ? (o += '/' + e.slice(l + 1, s)) : (o = e.slice(l + 1, s)), (i = s - l - 1));
            ((l = s), (a = 0));
           } else 46 === n && a > -1 ? a++ : (a = -1);
          }
          return o;
         })(e, !t);
         0 !== n.length || t || (n = '.');
         n.length > 0 && 47 === e.codePointAt(e.length - 1) && (n += '/');
         return t ? '/' + n : n;
        })(t);
    },
    sep: '/',
   };
   function ur(e) {
    if ('string' != typeof e) throw new TypeError('Path must be a string. Received ' + JSON.stringify(e));
   }
   const cr = {
    cwd: function () {
     return '/';
    },
   };
   function fr(e) {
    return Boolean(null !== e && 'object' == typeof e && 'href' in e && e.href && 'protocol' in e && e.protocol && void 0 === e.auth);
   }
   function pr(e) {
    if ('string' == typeof e) e = new URL(e);
    else if (!fr(e)) {
     const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + '`');
     throw ((t.code = 'ERR_INVALID_ARG_TYPE'), t);
    }
    if ('file:' !== e.protocol) {
     const e = new TypeError('The URL must be of scheme file');
     throw ((e.code = 'ERR_INVALID_URL_SCHEME'), e);
    }
    return (function (e) {
     if ('' !== e.hostname) {
      const e = new TypeError('File URL host must be "localhost" or empty on darwin');
      throw ((e.code = 'ERR_INVALID_FILE_URL_HOST'), e);
     }
     const t = e.pathname;
     let n = -1;
     for (; ++n < t.length; )
      if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
       const e = t.codePointAt(n + 2);
       if (70 === e || 102 === e) {
        const e = new TypeError('File URL path must not include encoded / characters');
        throw ((e.code = 'ERR_INVALID_FILE_URL_PATH'), e);
       }
      }
     return decodeURIComponent(t);
    })(e);
   }
   const dr = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
   class hr {
    constructor(e) {
     let t;
     ((t = e
      ? fr(e)
        ? { path: e }
        : 'string' == typeof e ||
            (function (e) {
             return Boolean(e && 'object' == typeof e && 'byteLength' in e && 'byteOffset' in e);
            })(e)
          ? { value: e }
          : e
      : {}),
      (this.cwd = 'cwd' in t ? '' : cr.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored);
     let n,
      r = -1;
     for (; ++r < dr.length; ) {
      const e = dr[r];
      e in t && void 0 !== t[e] && null !== t[e] && (this[e] = 'history' === e ? [...t[e]] : t[e]);
     }
     for (n in t) dr.includes(n) || (this[n] = t[n]);
    }
    get basename() {
     return 'string' == typeof this.path ? sr.basename(this.path) : void 0;
    }
    set basename(e) {
     (gr(e, 'basename'), mr(e, 'basename'), (this.path = sr.join(this.dirname || '', e)));
    }
    get dirname() {
     return 'string' == typeof this.path ? sr.dirname(this.path) : void 0;
    }
    set dirname(e) {
     (yr(this.basename, 'dirname'), (this.path = sr.join(e || '', this.basename)));
    }
    get extname() {
     return 'string' == typeof this.path ? sr.extname(this.path) : void 0;
    }
    set extname(e) {
     if ((mr(e, 'extname'), yr(this.dirname, 'extname'), e)) {
      if (46 !== e.codePointAt(0)) throw new Error('`extname` must start with `.`');
      if (e.includes('.', 1)) throw new Error('`extname` cannot contain multiple dots');
     }
     this.path = sr.join(this.dirname, this.stem + (e || ''));
    }
    get path() {
     return this.history[this.history.length - 1];
    }
    set path(e) {
     (fr(e) && (e = pr(e)), gr(e, 'path'), this.path !== e && this.history.push(e));
    }
    get stem() {
     return 'string' == typeof this.path ? sr.basename(this.path, this.extname) : void 0;
    }
    set stem(e) {
     (gr(e, 'stem'), mr(e, 'stem'), (this.path = sr.join(this.dirname || '', e + (this.extname || ''))));
    }
    fail(e, t, n) {
     const r = this.message(e, t, n);
     throw ((r.fatal = !0), r);
    }
    info(e, t, n) {
     const r = this.message(e, t, n);
     return ((r.fatal = void 0), r);
    }
    message(e, t, n) {
     const r = new ue(e, t, n);
     return (this.path && ((r.name = this.path + ':' + r.name), (r.file = this.path)), (r.fatal = !1), this.messages.push(r), r);
    }
    toString(e) {
     if (void 0 === this.value) return '';
     if ('string' == typeof this.value) return this.value;
     return new TextDecoder(e || void 0).decode(this.value);
    }
   }
   function mr(e, t) {
    if (e && e.includes(sr.sep)) throw new Error('`' + t + '` cannot be a path: did not expect `' + sr.sep + '`');
   }
   function gr(e, t) {
    if (!e) throw new Error('`' + t + '` cannot be empty');
   }
   function yr(e, t) {
    if (!e) throw new Error('Setting `' + t + '` requires `path` to be set too');
   }
   const xr = function (e) {
     const t = this.constructor.prototype,
      n = t[e],
      r = function () {
       return n.apply(r, arguments);
      };
     Object.setPrototypeOf(r, t);
     const o = Object.getOwnPropertyNames(n);
     for (const i of o) {
      const e = Object.getOwnPropertyDescriptor(n, i);
      e && Object.defineProperty(r, i, e);
     }
     return r;
    },
    vr = {}.hasOwnProperty;
   class kr extends xr {
    constructor() {
     (super('copy'), (this.Compiler = void 0), (this.Parser = void 0), (this.attachers = []), (this.compiler = void 0), (this.freezeIndex = -1), (this.frozen = void 0), (this.namespace = {}), (this.parser = void 0), (this.transformers = ar()));
    }
    copy() {
     const e = new kr();
     let t = -1;
     for (; ++t < this.attachers.length; ) {
      const n = this.attachers[t];
      e.use(...n);
     }
     return (e.data(ir(!0, {}, this.namespace)), e);
    }
    data(e, t) {
     return 'string' == typeof e ? (2 === arguments.length ? (Er('data', this.frozen), (this.namespace[e] = t), this) : (vr.call(this.namespace, e) && this.namespace[e]) || void 0) : e ? (Er('data', this.frozen), (this.namespace = e), this) : this.namespace;
    }
    freeze() {
     if (this.frozen) return this;
     const e = this;
     for (; ++this.freezeIndex < this.attachers.length; ) {
      const [t, ...n] = this.attachers[this.freezeIndex];
      if (!1 === n[0]) continue;
      !0 === n[0] && (n[0] = void 0);
      const r = t.call(e, ...n);
      'function' == typeof r && this.transformers.use(r);
     }
     return ((this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this);
    }
    parse(e) {
     this.freeze();
     const t = Ir(e),
      n = this.parser || this.Parser;
     return (wr('parse', n), n(String(t), t));
    }
    process(e, t) {
     const n = this;
     return (this.freeze(), wr('process', this.parser || this.Parser), Sr('process', this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r));
     function r(r, o) {
      const i = Ir(e),
       l = n.parse(i);
      function a(e, n) {
       e || !n ? o(e) : r ? r(n) : t(void 0, n);
      }
      n.run(l, i, function (e, t, r) {
       if (e || !t || !r) return a(e);
       const o = t,
        i = n.stringify(o, r);
       var l;
       ('string' == typeof (l = i) ||
       (function (e) {
        return Boolean(e && 'object' == typeof e && 'byteLength' in e && 'byteOffset' in e);
       })(l)
        ? (r.value = i)
        : (r.result = i),
        a(e, r));
      });
     }
    }
    processSync(e) {
     let t,
      n = !1;
     return (
      this.freeze(),
      wr('processSync', this.parser || this.Parser),
      Sr('processSync', this.compiler || this.Compiler),
      this.process(e, function (e, r) {
       ((n = !0), or(e), (t = r));
      }),
      Pr('processSync', 'process', n),
      t
     );
    }
    run(e, t, n) {
     (Cr(e), this.freeze());
     const r = this.transformers;
     return (n || 'function' != typeof t || ((n = t), (t = void 0)), n ? o(void 0, n) : new Promise(o));
     function o(o, i) {
      const l = Ir(t);
      r.run(e, l, function (t, r, l) {
       const a = r || e;
       t ? i(t) : o ? o(a) : n(void 0, a, l);
      });
     }
    }
    runSync(e, t) {
     let n,
      r = !1;
     return (
      this.run(e, t, function (e, t) {
       (or(e), (n = t), (r = !0));
      }),
      Pr('runSync', 'run', r),
      n
     );
    }
    stringify(e, t) {
     this.freeze();
     const n = Ir(t),
      r = this.compiler || this.Compiler;
     return (Sr('stringify', r), Cr(e), r(e, n));
    }
    use(e, ...t) {
     const n = this.attachers,
      r = this.namespace;
     if ((Er('use', this.frozen), null == e));
     else if ('function' == typeof e) a(e, t);
     else {
      if ('object' != typeof e) throw new TypeError('Expected usable value, not `' + e + '`');
      Array.isArray(e) ? l(e) : i(e);
     }
     return this;
     function o(e) {
      if ('function' == typeof e) a(e, []);
      else {
       if ('object' != typeof e) throw new TypeError('Expected usable value, not `' + e + '`');
       if (Array.isArray(e)) {
        const [t, ...n] = e;
        a(t, n);
       } else i(e);
      }
     }
     function i(e) {
      if (!('plugins' in e) && !('settings' in e)) throw new Error('Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither');
      (l(e.plugins), e.settings && (r.settings = ir(!0, r.settings, e.settings)));
     }
     function l(e) {
      let t = -1;
      if (null == e);
      else {
       if (!Array.isArray(e)) throw new TypeError('Expected a list of plugins, not `' + e + '`');
       for (; ++t < e.length; ) {
        o(e[t]);
       }
      }
     }
     function a(e, t) {
      let r = -1,
       o = -1;
      for (; ++r < n.length; )
       if (n[r][0] === e) {
        o = r;
        break;
       }
      if (-1 === o) n.push([e, ...t]);
      else if (t.length > 0) {
       let [r, ...i] = t;
       const l = n[o][1];
       (lr(l) && lr(r) && (r = ir(!0, l, r)), (n[o] = [e, r, ...i]));
      }
     }
    }
   }
   const br = new kr().freeze();
   function wr(e, t) {
    if ('function' != typeof t) throw new TypeError('Cannot `' + e + '` without `parser`');
   }
   function Sr(e, t) {
    if ('function' != typeof t) throw new TypeError('Cannot `' + e + '` without `compiler`');
   }
   function Er(e, t) {
    if (t) throw new Error('Cannot call `' + e + '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.');
   }
   function Cr(e) {
    if (!lr(e) || 'string' != typeof e.type) throw new TypeError('Expected node, got `' + e + '`');
   }
   function Pr(e, t, n) {
    if (!n) throw new Error('`' + e + '` finished async. Use `' + t + '` instead');
   }
   function Ir(e) {
    return (function (e) {
     return Boolean(e && 'object' == typeof e && 'message' in e && 'messages' in e);
    })(e)
     ? e
     : new hr(e);
   }
   const Tr = {
    basename: function (e, t) {
     if (void 0 !== t && 'string' != typeof t) throw new TypeError('"ext" argument must be a string');
     Ar(e);
     let n,
      r = 0,
      o = -1,
      i = e.length;
     if (void 0 === t || 0 === t.length || t.length > e.length) {
      for (; i--; )
       if (47 === e.codePointAt(i)) {
        if (n) {
         r = i + 1;
         break;
        }
       } else o < 0 && ((n = !0), (o = i + 1));
      return o < 0 ? '' : e.slice(r, o);
     }
     if (t === e) return '';
     let l = -1,
      a = t.length - 1;
     for (; i--; )
      if (47 === e.codePointAt(i)) {
       if (n) {
        r = i + 1;
        break;
       }
      } else (l < 0 && ((n = !0), (l = i + 1)), a > -1 && (e.codePointAt(i) === t.codePointAt(a--) ? a < 0 && (o = i) : ((a = -1), (o = l))));
     r === o ? (o = l) : o < 0 && (o = e.length);
     return e.slice(r, o);
    },
    dirname: function (e) {
     if ((Ar(e), 0 === e.length)) return '.';
     let t,
      n = -1,
      r = e.length;
     for (; --r; )
      if (47 === e.codePointAt(r)) {
       if (t) {
        n = r;
        break;
       }
      } else t || (t = !0);
     return n < 0 ? (47 === e.codePointAt(0) ? '/' : '.') : 1 === n && 47 === e.codePointAt(0) ? '//' : e.slice(0, n);
    },
    extname: function (e) {
     Ar(e);
     let t,
      n = e.length,
      r = -1,
      o = 0,
      i = -1,
      l = 0;
     for (; n--; ) {
      const a = e.codePointAt(n);
      if (47 !== a) (r < 0 && ((t = !0), (r = n + 1)), 46 === a ? (i < 0 ? (i = n) : 1 !== l && (l = 1)) : i > -1 && (l = -1));
      else if (t) {
       o = n + 1;
       break;
      }
     }
     if (i < 0 || r < 0 || 0 === l || (1 === l && i === r - 1 && i === o + 1)) return '';
     return e.slice(i, r);
    },
    join: function (...e) {
     let t,
      n = -1;
     for (; ++n < e.length; ) (Ar(e[n]), e[n] && (t = void 0 === t ? e[n] : t + '/' + e[n]));
     return void 0 === t
      ? '.'
      : (function (e) {
         Ar(e);
         const t = 47 === e.codePointAt(0);
         let n = (function (e, t) {
          let n,
           r,
           o = '',
           i = 0,
           l = -1,
           a = 0,
           s = -1;
          for (; ++s <= e.length; ) {
           if (s < e.length) n = e.codePointAt(s);
           else {
            if (47 === n) break;
            n = 47;
           }
           if (47 === n) {
            if (l === s - 1 || 1 === a);
            else if (l !== s - 1 && 2 === a) {
             if (o.length < 2 || 2 !== i || 46 !== o.codePointAt(o.length - 1) || 46 !== o.codePointAt(o.length - 2))
              if (o.length > 2) {
               if (((r = o.lastIndexOf('/')), r !== o.length - 1)) {
                (r < 0 ? ((o = ''), (i = 0)) : ((o = o.slice(0, r)), (i = o.length - 1 - o.lastIndexOf('/'))), (l = s), (a = 0));
                continue;
               }
              } else if (o.length > 0) {
               ((o = ''), (i = 0), (l = s), (a = 0));
               continue;
              }
             t && ((o = o.length > 0 ? o + '/..' : '..'), (i = 2));
            } else (o.length > 0 ? (o += '/' + e.slice(l + 1, s)) : (o = e.slice(l + 1, s)), (i = s - l - 1));
            ((l = s), (a = 0));
           } else 46 === n && a > -1 ? a++ : (a = -1);
          }
          return o;
         })(e, !t);
         0 !== n.length || t || (n = '.');
         n.length > 0 && 47 === e.codePointAt(e.length - 1) && (n += '/');
         return t ? '/' + n : n;
        })(t);
    },
    sep: '/',
   };
   function Ar(e) {
    if ('string' != typeof e) throw new TypeError('Path must be a string. Received ' + JSON.stringify(e));
   }
   const Lr = {
    cwd: function () {
     return '/';
    },
   };
   function Or(e) {
    return Boolean(null !== e && 'object' == typeof e && 'href' in e && e.href && 'protocol' in e && e.protocol && void 0 === e.auth);
   }
   function Dr(e) {
    if ('string' == typeof e) e = new URL(e);
    else if (!Or(e)) {
     const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + '`');
     throw ((t.code = 'ERR_INVALID_ARG_TYPE'), t);
    }
    if ('file:' !== e.protocol) {
     const e = new TypeError('The URL must be of scheme file');
     throw ((e.code = 'ERR_INVALID_URL_SCHEME'), e);
    }
    return (function (e) {
     if ('' !== e.hostname) {
      const e = new TypeError('File URL host must be "localhost" or empty on darwin');
      throw ((e.code = 'ERR_INVALID_FILE_URL_HOST'), e);
     }
     const t = e.pathname;
     let n = -1;
     for (; ++n < t.length; )
      if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
       const e = t.codePointAt(n + 2);
       if (70 === e || 102 === e) {
        const e = new TypeError('File URL path must not include encoded / characters');
        throw ((e.code = 'ERR_INVALID_FILE_URL_PATH'), e);
       }
      }
     return decodeURIComponent(t);
    })(e);
   }
   const zr = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
   class jr {
    constructor(e) {
     let t;
     ((t = e
      ? Or(e)
        ? { path: e }
        : 'string' == typeof e ||
            (function (e) {
             return Boolean(e && 'object' == typeof e && 'byteLength' in e && 'byteOffset' in e);
            })(e)
          ? { value: e }
          : e
      : {}),
      (this.cwd = Lr.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored);
     let n,
      r = -1;
     for (; ++r < zr.length; ) {
      const e = zr[r];
      e in t && void 0 !== t[e] && null !== t[e] && (this[e] = 'history' === e ? [...t[e]] : t[e]);
     }
     for (n in t) zr.includes(n) || (this[n] = t[n]);
    }
    get basename() {
     return 'string' == typeof this.path ? Tr.basename(this.path) : void 0;
    }
    set basename(e) {
     (Rr(e, 'basename'), Mr(e, 'basename'), (this.path = Tr.join(this.dirname || '', e)));
    }
    get dirname() {
     return 'string' == typeof this.path ? Tr.dirname(this.path) : void 0;
    }
    set dirname(e) {
     (Fr(this.basename, 'dirname'), (this.path = Tr.join(e || '', this.basename)));
    }
    get extname() {
     return 'string' == typeof this.path ? Tr.extname(this.path) : void 0;
    }
    set extname(e) {
     if ((Mr(e, 'extname'), Fr(this.dirname, 'extname'), e)) {
      if (46 !== e.codePointAt(0)) throw new Error('`extname` must start with `.`');
      if (e.includes('.', 1)) throw new Error('`extname` cannot contain multiple dots');
     }
     this.path = Tr.join(this.dirname, this.stem + (e || ''));
    }
    get path() {
     return this.history[this.history.length - 1];
    }
    set path(e) {
     (Or(e) && (e = Dr(e)), Rr(e, 'path'), this.path !== e && this.history.push(e));
    }
    get stem() {
     return 'string' == typeof this.path ? Tr.basename(this.path, this.extname) : void 0;
    }
    set stem(e) {
     (Rr(e, 'stem'), Mr(e, 'stem'), (this.path = Tr.join(this.dirname || '', e + (this.extname || ''))));
    }
    fail(e, t, n) {
     const r = this.message(e, t, n);
     throw ((r.fatal = !0), r);
    }
    info(e, t, n) {
     const r = this.message(e, t, n);
     return ((r.fatal = void 0), r);
    }
    message(e, t, n) {
     const r = new ue(e, t, n);
     return (this.path && ((r.name = this.path + ':' + r.name), (r.file = this.path)), (r.fatal = !1), this.messages.push(r), r);
    }
    toString(e) {
     if (void 0 === this.value) return '';
     if ('string' == typeof this.value) return this.value;
     return new TextDecoder(e || void 0).decode(this.value);
    }
   }
   function Mr(e, t) {
    if (e && e.includes(Tr.sep)) throw new Error('`' + t + '` cannot be a path: did not expect `' + Tr.sep + '`');
   }
   function Rr(e, t) {
    if (!e) throw new Error('`' + t + '` cannot be empty');
   }
   function Fr(e, t) {
    if (!e) throw new Error('Setting `' + t + '` requires `path` to be set too');
   }
   const _r = [],
    Nr = { allowDangerousHtml: !0 },
    Br = /^(https?|ircs?|mailto|xmpp)$/i,
    Ur = [
     { from: 'astPlugins', id: 'remove-buggy-html-in-markdown-parser' },
     { from: 'allowDangerousHtml', id: 'remove-buggy-html-in-markdown-parser' },
     { from: 'allowNode', id: 'replace-allownode-allowedtypes-and-disallowedtypes', to: 'allowElement' },
     { from: 'allowedTypes', id: 'replace-allownode-allowedtypes-and-disallowedtypes', to: 'allowedElements' },
     { from: 'className', id: 'remove-classname' },
     { from: 'disallowedTypes', id: 'replace-allownode-allowedtypes-and-disallowedtypes', to: 'disallowedElements' },
     { from: 'escapeHtml', id: 'remove-buggy-html-in-markdown-parser' },
     { from: 'includeElementIndex', id: '#remove-includeelementindex' },
     { from: 'includeNodeIndex', id: 'change-includenodeindex-to-includeelementindex' },
     { from: 'linkTarget', id: 'remove-linktarget' },
     { from: 'plugins', id: 'change-plugins-to-remarkplugins', to: 'remarkPlugins' },
     { from: 'rawSourcePos', id: '#remove-rawsourcepos' },
     { from: 'renderers', id: 'change-renderers-to-components', to: 'components' },
     { from: 'source', id: 'change-source-to-children', to: 'children' },
     { from: 'sourcePos', id: '#remove-sourcepos' },
     { from: 'transformImageUri', id: '#add-urltransform', to: 'urlTransform' },
     { from: 'transformLinkUri', id: '#add-urltransform', to: 'urlTransform' },
    ];
   function Hr(e) {
    const t = Vr(e),
     n = qr(e);
    return $r(t.runSync(t.parse(n), n), e);
   }
   function Vr(e) {
    const t = e.rehypePlugins || _r,
     n = e.remarkPlugins || _r,
     r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Nr } : Nr;
    return br().use(Sn).use(n).use(rr, r).use(t);
   }
   function qr(e) {
    const t = e.children || '',
     n = new jr();
    return ('string' == typeof t && (n.value = t), n);
   }
   function $r(e, t) {
    const n = t.allowedElements,
     r = t.allowElement,
     o = t.components,
     i = t.disallowedElements,
     l = t.skipHtml,
     a = t.unwrapDisallowed,
     s = t.urlTransform || Wr;
    for (const u of Ur) Object.hasOwn(t, u.from) && (u.from, u.to && u.to, u.id);
    return (
     Hn(e, function (e, t, o) {
      if ('raw' === e.type && o && 'number' == typeof t) return (l ? o.children.splice(t, 1) : (o.children[t] = { type: 'text', value: e.value }), t);
      if ('element' === e.type) {
       let t;
       for (t in Te)
        if (Object.hasOwn(Te, t) && Object.hasOwn(e.properties, t)) {
         const n = e.properties[t],
          r = Te[t];
         (null === r || r.includes(e.tagName)) && (e.properties[t] = s(String(n || ''), t, e));
        }
      }
      if ('element' === e.type) {
       let l = n ? !n.includes(e.tagName) : !!i && i.includes(e.tagName);
       if ((!l && r && 'number' == typeof t && (l = !r(e, t, o)), l && o && 'number' == typeof t)) return (a && e.children ? o.children.splice(t, 1, ...e.children) : o.children.splice(t, 1), t);
      }
     }),
     ye(e, { Fragment: Ae.Fragment, components: o, ignoreInvalidStyle: !0, jsx: Ae.jsx, jsxs: Ae.jsxs, passKeys: !0, passNode: !0 })
    );
   }
   function Wr(e) {
    const t = e.indexOf(':'),
     n = e.indexOf('?'),
     r = e.indexOf('#'),
     o = e.indexOf('/');
    return -1 === t || (-1 !== o && t > o) || (-1 !== n && t > n) || (-1 !== r && t > r) || Br.test(e.slice(0, t)) ? e : '';
   }
  },
  60710(e) {
   var t = Object.prototype.hasOwnProperty,
    n = Object.prototype.toString,
    r = Object.defineProperty,
    o = Object.getOwnPropertyDescriptor,
    i = function (e) {
     return 'function' == typeof Array.isArray ? Array.isArray(e) : '[object Array]' === n.call(e);
    },
    l = function (e) {
     if (!e || '[object Object]' !== n.call(e)) return !1;
     var r,
      o = t.call(e, 'constructor'),
      i = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, 'isPrototypeOf');
     if (e.constructor && !o && !i) return !1;
     for (r in e);
     return void 0 === r || t.call(e, r);
    },
    a = function (e, t) {
     r && '__proto__' === t.name ? r(e, t.name, { enumerable: !0, configurable: !0, value: t.newValue, writable: !0 }) : (e[t.name] = t.newValue);
    },
    s = function (e, n) {
     if ('__proto__' === n) {
      if (!t.call(e, n)) return;
      if (o) return o(e, n).value;
     }
     return e[n];
    };
   e.exports = function e() {
    var t,
     n,
     r,
     o,
     u,
     c,
     f = arguments[0],
     p = 1,
     d = arguments.length,
     h = !1;
    for ('boolean' == typeof f && ((h = f), (f = arguments[1] || {}), (p = 2)), (null == f || ('object' != typeof f && 'function' != typeof f)) && (f = {}); p < d; ++p) if (null != (t = arguments[p])) for (n in t) ((r = s(f, n)), f !== (o = s(t, n)) && (h && o && (l(o) || (u = i(o))) ? (u ? ((u = !1), (c = r && i(r) ? r : [])) : (c = r && l(r) ? r : {}), a(f, { name: n, newValue: e(h, c, o) })) : void 0 !== o && a(f, { name: n, newValue: o })));
    return f;
   };
  },
  78236(e, t, n) {
   n.d(t, { A: () => a });
   var r = n(86070),
    o = n(30758);
   const i = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function l(e, t, n, r, o) {
    const i = { '@context': 'https://schema.org', '@type': 'VideoObject', name: (null == o ? void 0 : o.name) || t, thumbnailUrl: [(null == o ? void 0 : o.thumbnailUrl) || n], embedUrl: (null == o ? void 0 : o.embedUrl) || `${r}/embed/${e}`, contentUrl: (null == o ? void 0 : o.contentUrl) || `https://www.youtube.com/watch?v=${e}`, ...((null == o ? void 0 : o.description) && { description: o.description }), ...((null == o ? void 0 : o.uploadDate) && { uploadDate: o.uploadDate }), ...((null == o ? void 0 : o.duration) && { duration: o.duration }) };
    return JSON.stringify(i);
   }
   const a = o.forwardRef(function (e, t) {
    const [n, a] = o.useState(!1),
     [s, u] = o.useState(e.alwaysLoadIframe || !1),
     c = encodeURIComponent(e.id),
     f = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     p = e.title,
     d = e.poster || 'hqdefault',
     h = e.announce || 'Watch',
     m = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     g = o.useMemo(() => {
      const t = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(m ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.playlist ? { list: c } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, n) => {
         t.append(n, e);
        }),
       t
      );
     }, [e.muted, m, e.enableJsApi, e.playlist, c, e.params]),
     y = o.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     x = o.useMemo(() => (e.playlist ? `${y}/embed/videoseries?${g.toString()}` : `${y}/embed/${c}?${g.toString()}`), [e.playlist, y, c, g]),
     v = !e.thumbnail && !e.playlist && 'maxresdefault' === d,
     k = e.webp ? 'webp' : 'jpg',
     b = e.webp ? 'vi_webp' : 'vi',
     w = v
      ? ((e, t, n, r = 'maxresdefault') => {
         const [l, a] = (0, o.useState)('');
         return (
          (0, o.useEffect)(() => {
           const o = `https://img.youtube.com/${t}/${e}/${r}.${n}`,
            l = `https://img.youtube.com/${t}/${e}/hqdefault.${n}`,
            s = i[r],
            u = new Image();
           ((u.onload = () => {
            u.width < s ? a(l) : a(o);
           }),
            (u.onerror = () => a(l)),
            (u.src = o));
          }, [e, t, n, r]),
          l
         );
        })(e.id, b, k, d)
      : null,
     S = o.useMemo(() => e.thumbnail || w || `https://i.ytimg.com/${b}/${e.playlist ? f : c}/${d}.${k}`, [e.thumbnail, w, b, e.playlist, f, c, d, k]),
     E = e.activatedClass || 'lyt-activated',
     C = e.adNetwork || !1,
     P = e.aspectHeight || 9,
     I = e.aspectWidth || 16,
     T = e.iframeClass || '',
     A = e.playerClass || 'lty-playbtn',
     L = e.wrapperClass || 'yt-lite',
     O = o.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     D = e.rel ? 'prefetch' : 'preload',
     z = e.containerElement || 'article',
     j = !1 !== e.noscriptFallback;
    return (
     o.useEffect(() => {
      s && (O(), e.focusOnLoad && 'object' == typeof t && null != t && t.current && t.current.focus());
     }, [s, O, e.focusOnLoad, t]),
     (0, r.jsxs)(r.Fragment, {
      children: [
       !e.lazyLoad && (0, r.jsx)('link', { rel: D, href: S, as: 'image' }),
       (0, r.jsx)(r.Fragment, { children: n && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('link', { rel: 'preconnect', href: y }), (0, r.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), C && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, r.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, r.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: l(e.id, p, S, y, e.seo) } }),
       j && !e.playlist && (0, r.jsx)('noscript', { children: (0, r.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${p} on YouTube`, children: ['Watch "', p, '" on YouTube'] }) }),
       (0, r.jsxs)(z, {
        onPointerOver: () => {
         n || a(!0);
        },
        onClick: () => {
         s || u(!0);
        },
        className: `${L} ${s ? E : ''}`,
        'data-title': p,
        role: s ? void 0 : 'img',
        'aria-label': s ? void 0 : `${p} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${S})` }), '--aspect-ratio': (P / I) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !s && (0, r.jsx)('img', { src: S, alt: `${p} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), (0, r.jsx)('button', { type: 'button', className: A, 'aria-label': `${h} ${p}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, children: (0, r.jsx)('span', { className: 'lty-visually-hidden', children: h }) }), s && (0, r.jsx)('iframe', { ref: t, className: T, title: p, width: '560', height: '315', style: { border: 0 }, allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: x, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
 },
]);
