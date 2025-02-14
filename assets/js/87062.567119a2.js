'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [87062],
 {
  87062: (e, r, t) => {
   t.r(r), t.d(r, { utrecht_number_badge: () => n });
   var a = t(22990);
   const n = class {
    constructor(e) {
     (0, a.r)(this, e), (this.value = void 0), (this.max = void 0), (this.locale = void 0);
    }
    render() {
     const { locale: e, max: r, value: t } = this,
      n = (r) => (e ? Intl.NumberFormat(e).format(r) : String(r)),
      d = 'number' == typeof r && 'number' == typeof t && Number(t) > Number(r) ? `${n(r)}+` : 'number' == typeof t ? n(t) : '';
     return (0, a.h)('div', { key: 'c814c7590339d0fcfb78263a786e2df16273d124', class: 'utrecht-number-badge' }, d || (0, a.h)('slot', null));
    }
   };
   n.style = '.utrecht-number-badge{background-color:var(--utrecht-number-badge-background-color, var(--utrecht-badge-background-color, hsl(0, 0%, 0%)));border-color:var(--utrecht-number-badge-border-color, var(--utrecht-badge-border-color));border-radius:var(--utrecht-number-badge-border-radius, var(--utrecht-badge-border-radius, 0.5ch));border-style:solid;border-width:max(var(--utrecht-number-badge-border-width, var(--utrecht-badge-border-width, 0)), var(--_utrecht-number-badge-min-border-width, 0));color:var(--utrecht-number-badge-color, var(--utrecht-badge-color, hsl(0, 0%, 100%)));display:inline-block;font-family:var(--utrecht-number-badge-font-family, var(--utrecht-badge-font-family, var(--utrecht-document-font-family, sans-serif)));font-size:var(--utrecht-number-badge-font-size, var(--utrecht-badge-font-size));font-style:var(--utrecht-number-badge-font-style, normal);font-weight:var(--utrecht-number-badge-font-weight, var(--utrecht-badge-font-weight, bold));line-height:1;max-block-size:max-content;max-inline-size:max-content;min-block-size:var(--utrecht-number-badge-min-block-size, var(--utrecht-number-badge-min-inline-size, var(--utrecht-number-badge-min-size, 1em)));min-inline-size:var(--utrecht-number-badge-min-inline-size, var(--utrecht-number-badge-min-size, 1em));padding-block-end:var(--utrecht-number-badge-padding-block, var(--utrecht-badge-padding-block, 0.5ex));padding-block-start:var(--utrecht-number-badge-padding-block, var(--utrecht-badge-padding-block, 0.5ex));padding-inline-end:var(--utrecht-number-badge-padding-inline, var(--utrecht-badge-padding-inline, 0.5ch));padding-inline-start:var(--utrecht-number-badge-padding-inline, var(--utrecht-badge-padding-inline, 0.5ch));text-align:center;text-decoration:none;white-space:nowrap}@media screen and (forced-colors: active){.utrecht-number-badge{--_utrecht-number-badge-min-border-width:1px;border-color:currentColor}}:host{display:inline-block}:host([hidden]){display:none !important}';
  },
 },
]);
