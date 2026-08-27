/// <reference types="astro/client" />

export {};

declare global {
  /**
   * A global set of pages that are unlisted. This set is filled during the
   * generation of the content collections.
   */
  var unlistedPages: Set<string>;

  var isAstro: boolean | undefined;
}
