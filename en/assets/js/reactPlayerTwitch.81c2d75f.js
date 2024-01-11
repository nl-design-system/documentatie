(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [86216],
 {
  758: (e, t, s) => {
   var r,
    a = Object.create,
    l = Object.defineProperty,
    n = Object.getOwnPropertyDescriptor,
    i = Object.getOwnPropertyNames,
    o = Object.getPrototypeOf,
    p = Object.prototype.hasOwnProperty,
    h = (e, t, s, r) => {
     if ((t && "object" == typeof t) || "function" == typeof t) for (let a of i(t)) p.call(e, a) || a === s || l(e, a, { get: () => t[a], enumerable: !(r = n(t, a)) || r.enumerable });
     return e;
    },
    y = (e, t, s) => (
     ((e, t, s) => {
      t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s);
     })(e, "symbol" != typeof t ? t + "" : t, s),
     s
    ),
    d = {};
   ((e, t) => {
    for (var s in t) l(e, s, { get: t[s], enumerable: !0 });
   })(d, { default: () => P }),
    (e.exports = ((r = d), h(l({}, "__esModule", { value: !0 }), r)));
   var u = ((e, t, s) => ((s = null != e ? a(o(e)) : {}), h(!t && e && e.__esModule ? s : l(s, "default", { value: e, enumerable: !0 }), e)))(s(50959)),
    c = s(89121),
    m = s(13899);
   class P extends u.Component {
    constructor() {
     super(...arguments),
      y(this, "callPlayer", c.callPlayer),
      y(this, "playerID", this.props.config.playerId || `twitch-player-${(0, c.randomString)()}`),
      y(this, "mute", () => {
       this.callPlayer("setMuted", !0);
      }),
      y(this, "unmute", () => {
       this.callPlayer("setMuted", !1);
      });
    }
    componentDidMount() {
     this.props.onMount && this.props.onMount(this);
    }
    load(e, t) {
     const { playsinline: s, onError: r, config: a, controls: l } = this.props,
      n = m.MATCH_URL_TWITCH_CHANNEL.test(e),
      i = n ? e.match(m.MATCH_URL_TWITCH_CHANNEL)[1] : e.match(m.MATCH_URL_TWITCH_VIDEO)[1];
     t
      ? n
        ? this.player.setChannel(i)
        : this.player.setVideo("v" + i)
      : (0, c.getSDK)("https://player.twitch.tv/js/embed/v1.js", "Twitch").then((t) => {
         this.player = new t.Player(this.playerID, { video: n ? "" : i, channel: n ? i : "", height: "100%", width: "100%", playsinline: s, autoplay: this.props.playing, muted: this.props.muted, controls: !!n || l, time: (0, c.parseStartTime)(e), ...a.options });
         const { READY: r, PLAYING: o, PAUSE: p, ENDED: h, ONLINE: y, OFFLINE: d, SEEK: u } = t.Player;
         this.player.addEventListener(r, this.props.onReady), this.player.addEventListener(o, this.props.onPlay), this.player.addEventListener(p, this.props.onPause), this.player.addEventListener(h, this.props.onEnded), this.player.addEventListener(u, this.props.onSeek), this.player.addEventListener(y, this.props.onLoaded), this.player.addEventListener(d, this.props.onLoaded);
        }, r);
    }
    play() {
     this.callPlayer("play");
    }
    pause() {
     this.callPlayer("pause");
    }
    stop() {
     this.callPlayer("pause");
    }
    seekTo(e, t = !0) {
     this.callPlayer("seek", e), t || this.pause();
    }
    setVolume(e) {
     this.callPlayer("setVolume", e);
    }
    getDuration() {
     return this.callPlayer("getDuration");
    }
    getCurrentTime() {
     return this.callPlayer("getCurrentTime");
    }
    getSecondsLoaded() {
     return null;
    }
    render() {
     return u.default.createElement("div", { style: { width: "100%", height: "100%" }, id: this.playerID });
    }
   }
   y(P, "displayName", "Twitch"), y(P, "canPlay", m.canPlay.twitch), y(P, "loopOnEnded", !0);
  },
 },
]);
