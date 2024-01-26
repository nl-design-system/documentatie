(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8888],
 {
  16994: (e, t, a) => {
   var s,
    r = Object.create,
    l = Object.defineProperty,
    n = Object.getOwnPropertyDescriptor,
    o = Object.getOwnPropertyNames,
    i = Object.getPrototypeOf,
    p = Object.prototype.hasOwnProperty,
    y = (e, t, a, s) => {
     if ((t && "object" == typeof t) || "function" == typeof t) for (let r of o(t)) p.call(e, r) || r === a || l(e, r, { get: () => t[r], enumerable: !(s = n(t, r)) || s.enumerable });
     return e;
    },
    u = (e, t, a) => (
     ((e, t, a) => {
      t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (e[t] = a);
     })(e, "symbol" != typeof t ? t + "" : t, a),
     a
    ),
    h = {};
   ((e, t) => {
    for (var a in t) l(e, a, { get: t[a], enumerable: !0 });
   })(h, { default: () => P }),
    (e.exports = ((s = h), y(l({}, "__esModule", { value: !0 }), s)));
   var d = ((e, t, a) => ((a = null != e ? r(i(e)) : {}), y(!t && e && e.__esModule ? a : l(a, "default", { value: e, enumerable: !0 }), e)))(a(50959)),
    c = a(89121),
    m = a(13899);
   class P extends d.Component {
    constructor() {
     super(...arguments),
      u(this, "callPlayer", c.callPlayer),
      u(this, "mute", () => {
       this.setVolume(0);
      }),
      u(this, "unmute", () => {
       null !== this.props.volume && this.setVolume(this.props.volume);
      }),
      u(this, "ref", (e) => {
       this.container = e;
      });
    }
    componentDidMount() {
     this.props.onMount && this.props.onMount(this);
    }
    load(e) {
     const { playing: t, config: a, onError: s, onDuration: r } = this.props,
      l = e && e.match(m.MATCH_URL_VIDYARD)[1];
     this.player && this.stop(),
      (0, c.getSDK)("https://play.vidyard.com/embed/v4.js", "VidyardV4", "onVidyardAPI").then((e) => {
       this.container &&
        (e.api.addReadyListener((e, t) => {
         this.player || ((this.player = t), this.player.on("ready", this.props.onReady), this.player.on("play", this.props.onPlay), this.player.on("pause", this.props.onPause), this.player.on("seek", this.props.onSeek), this.player.on("playerComplete", this.props.onEnded));
        }, l),
        e.api.renderPlayer({ uuid: l, container: this.container, autoplay: t ? 1 : 0, ...a.options }),
        e.api.getPlayerMetadata(l).then((e) => {
         (this.duration = e.length_in_seconds), r(e.length_in_seconds);
        }));
      }, s);
    }
    play() {
     this.callPlayer("play");
    }
    pause() {
     this.callPlayer("pause");
    }
    stop() {
     window.VidyardV4.api.destroyPlayer(this.player);
    }
    seekTo(e, t = !0) {
     this.callPlayer("seek", e), t || this.pause();
    }
    setVolume(e) {
     this.callPlayer("setVolume", e);
    }
    setPlaybackRate(e) {
     this.callPlayer("setPlaybackSpeed", e);
    }
    getDuration() {
     return this.duration;
    }
    getCurrentTime() {
     return this.callPlayer("currentTime");
    }
    getSecondsLoaded() {
     return null;
    }
    render() {
     const { display: e } = this.props,
      t = { width: "100%", height: "100%", display: e };
     return d.default.createElement("div", { style: t }, d.default.createElement("div", { ref: this.ref }));
    }
   }
   u(P, "displayName", "Vidyard"), u(P, "canPlay", m.canPlay.vidyard);
  },
 },
]);
