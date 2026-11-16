declare module '*.astro' {
  import type { Component } from 'astro';
  const component: Component;
  export default component;
}
