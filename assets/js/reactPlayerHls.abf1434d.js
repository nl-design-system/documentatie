/*! For license information please see reactPlayerHls.abf1434d.js.LICENSE.txt */
'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [53184],
 {
  99823: (e, t, i) => {
   i.r(t), i.d(t, { default: () => v });
   var s = i(75271),
    n = i(60922),
    a = i(47273),
    o = i(91899);
   const r =
    ((l = (0, a.lK)(n.zM)),
    class extends l {
     static shadowRootOptions = { ...l.shadowRootOptions };
     static getTemplateHTML = (e, t = {}) => {
      const { src: i, ...s } = e;
      return `\n        <script type="application/json" id="config">\n          ${JSON.stringify(t.config || {})}\n        <\/script>\n        ${l.getTemplateHTML(s)}\n      `;
     };
     #e = null;
     #t = null;
     constructor() {
      super(), this.#i('config');
     }
     get config() {
      return this.#t;
     }
     set config(e) {
      this.#t = e;
     }
     attributeChangedCallback(e, t, i) {
      'src' !== e && super.attributeChangedCallback(e, t, i), 'src' === e && t != i && this.load();
     }
     #s() {
      var e, t;
      null == (e = this.#e) || e.remove(), null == (t = this.nativeEl) || t.removeEventListener('webkitcurrentplaybacktargetiswirelesschanged', this.#n), this.api && (this.api.detachMedia(), this.api.destroy(), (this.api = null));
     }
     async load() {
      var e, t;
      const i = !this.api;
      if ((this.#s(), this.src))
       if ((i && !this.#t && (this.#t = JSON.parse((null == (e = this.shadowRoot.getElementById('config')) ? void 0 : e.textContent) || '{}')), o.ZP.isSupported())) {
        switch (((this.api = new o.ZP({ liveDurationInfinity: !0, autoStartLoad: !1, ...this.config })), await Promise.resolve(), this.api.loadSource(this.src), this.api.attachMedia(this.nativeEl), this.nativeEl.preload)) {
         case 'none': {
          const e = () => this.api.startLoad();
          this.nativeEl.addEventListener('play', e, { once: !0 }),
           this.api.on(o.ZP.Events.DESTROYING, () => {
            this.nativeEl.removeEventListener('play', e);
           });
          break;
         }
         case 'metadata': {
          const e = this.api.config.maxBufferLength,
           t = this.api.config.maxBufferSize;
          (this.api.config.maxBufferLength = 1), (this.api.config.maxBufferSize = 1);
          const i = () => {
           (this.api.config.maxBufferLength = e), (this.api.config.maxBufferSize = t);
          };
          this.nativeEl.addEventListener('play', i, { once: !0 }),
           this.api.on(o.ZP.Events.DESTROYING, () => {
            this.nativeEl.removeEventListener('play', i);
           }),
           this.api.startLoad();
          break;
         }
         default:
          this.api.startLoad();
        }
        this.nativeEl.webkitCurrentPlaybackTargetIsWireless && this.api.stopLoad(), this.nativeEl.addEventListener('webkitcurrentplaybacktargetiswirelesschanged', this.#n), (this.#e = document.createElement('source')), this.#e.setAttribute('type', 'application/x-mpegURL'), this.#e.setAttribute('src', this.src), (this.nativeEl.disableRemotePlayback = !1), this.nativeEl.append(this.#e);
        const e = new WeakMap();
        this.api.on(o.ZP.Events.MANIFEST_PARSED, (t, i) => {
         this.nativeEl.autoplay &&
          this.nativeEl.paused &&
          this.nativeEl.play().catch((e) => {
           console.warn('Autoplay failed:', e);
          }),
          s();
         let n = this.videoTracks.getTrackById('main');
         n || ((n = this.addVideoTrack('main')), (n.id = 'main'), (n.selected = !0));
         for (const [s, a] of i.levels.entries()) {
          const t = n.addRendition(a.url[0], a.width, a.height, a.videoCodec, a.bitrate);
          e.set(a, `${s}`), (t.id = `${s}`);
         }
         for (let [e, s] of i.audioTracks.entries()) {
          const t = s.default ? 'main' : 'alternative',
           i = this.addAudioTrack(t, s.name, s.lang);
          (i.id = `${e}`), s.default && (i.enabled = !0);
         }
        }),
         this.audioTracks.addEventListener('change', () => {
          var e;
          const t = +(null == (e = [...this.audioTracks].find((e) => e.enabled)) ? void 0 : e.id),
           i = this.api.audioTracks.map((e) => e.id);
          t != this.api.audioTrack && i.includes(t) && (this.api.audioTrack = t);
         }),
         this.api.on(o.ZP.Events.LEVELS_UPDATED, (t, i) => {
          const s = this.videoTracks[this.videoTracks.selectedIndex ?? 0];
          if (!s) return;
          const n = i.levels.map((t) => e.get(t));
          for (const e of this.videoRenditions) e.id && !n.includes(e.id) && s.removeRendition(e);
         });
        const i = (e) => {
         const t = e.target.selectedIndex;
         t != this.api.nextLevel && (this.api.nextLevel = t);
        };
        null == (t = this.videoRenditions) || t.addEventListener('change', i);
        const s = () => {
         for (const e of this.videoTracks) this.removeVideoTrack(e);
         for (const e of this.audioTracks) this.removeAudioTrack(e);
        };
        this.api.once(o.ZP.Events.DESTROYING, s);
       } else await Promise.resolve(), this.nativeEl.canPlayType('application/vnd.apple.mpegurl') && (this.nativeEl.src = this.src);
     }
     #n = () => {
      var e, t, i;
      (null == (e = this.nativeEl) ? void 0 : e.webkitCurrentPlaybackTargetIsWireless) ? null == (t = this.api) || t.stopLoad() : null == (i = this.api) || i.startLoad();
     };
     #i(e) {
      if (Object.prototype.hasOwnProperty.call(this, e)) {
       const t = this[e];
       delete this[e], (this[e] = t);
      }
     }
    });
   var l;
   globalThis.customElements && !globalThis.customElements.get('hls-video') && globalThis.customElements.define('hls-video', r);
   var c = r,
    d = new Set(['style', 'children', 'ref', 'key', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'dangerouslySetInnerHTML']),
    u = { className: 'class', htmlFor: 'for' };
   function h(e) {
    return e.toLowerCase();
   }
   function p(e) {
    return 'boolean' == typeof e ? (e ? '' : void 0) : 'function' == typeof e || ('object' == typeof e && null !== e) ? void 0 : e;
   }
   function f(e, t, i) {
    var s;
    (e[t] = i), null == i && t in ((null == (s = globalThis.HTMLElement) ? void 0 : s.prototype) ?? {}) && e.removeAttribute(t);
   }
   var v = (function ({ react: e, tagName: t, elementClass: i, events: s, displayName: n, defaultProps: a, toAttributeName: o = h, toAttributeValue: r = p }) {
    const l = Number.parseInt(e.version) >= 19,
     c = e.forwardRef((n, c) => {
      var h, v;
      const g = e.useRef(null),
       m = e.useRef(new Map()),
       E = {},
       y = {},
       b = {},
       T = {};
      for (const [e, t] of Object.entries(n)) {
       if (d.has(e)) {
        b[e] = t;
        continue;
       }
       const s = o(u[e] ?? e);
       if (i.prototype && e in i.prototype && !(e in ((null == (h = globalThis.HTMLElement) ? void 0 : h.prototype) ?? {})) && !(null == (v = i.observedAttributes) ? void 0 : v.some((e) => e === s))) {
        T[e] = t;
        continue;
       }
       if (e.startsWith('on')) {
        E[e] = t;
        continue;
       }
       const n = r(t);
       if ((s && null != n && ((y[s] = String(n)), l || (b[s] = n)), s && l)) {
        const e = p(t);
        b[s] = n !== e ? n : t;
       }
      }
      if ('undefined' != typeof window) {
       for (const t in E) {
        const i = E[t],
         n = t.endsWith('Capture'),
         a = ((null == s ? void 0 : s[t]) ?? t.slice(2).toLowerCase()).slice(0, n ? -7 : void 0);
        e.useLayoutEffect(() => {
         const e = null == g ? void 0 : g.current;
         if (e && 'function' == typeof i)
          return (
           e.addEventListener(a, i, n),
           () => {
            e.removeEventListener(a, i, n);
           }
          );
        }, [null == g ? void 0 : g.current, i]);
       }
       e.useLayoutEffect(() => {
        if (null === g.current) return;
        const e = new Map();
        for (const t in T) f(g.current, t, T[t]), m.current.delete(t), e.set(t, T[t]);
        for (const [t, i] of m.current) f(g.current, t, void 0);
        m.current = e;
       });
      }
      if ('undefined' == typeof window && (null == i ? void 0 : i.getTemplateHTML) && (null == i ? void 0 : i.shadowRootOptions)) {
       const { mode: t, delegatesFocus: s } = i.shadowRootOptions,
        a = e.createElement('template', { shadowrootmode: t, shadowrootdelegatesfocus: s, dangerouslySetInnerHTML: { __html: i.getTemplateHTML(y, n) } });
       b.children = [a, b.children];
      }
      return e.createElement(t, {
       ...a,
       ...b,
       ref: e.useCallback(
        (e) => {
         (g.current = e), 'function' == typeof c ? c(e) : null !== c && (c.current = e);
        },
        [c],
       ),
      });
     });
    return (c.displayName = n ?? i.name), c;
   })({ react: s, tagName: 'hls-video', elementClass: c, toAttributeName: (e) => ('muted' === e ? '' : 'defaultMuted' === e ? 'muted' : h(e)) });
  },
 },
]);
