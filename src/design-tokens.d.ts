declare module 'csstype' {
  // eslint-disable-next-line no-unused-vars
  interface Properties {
    // Allow namespaced CSS Custom Properties
    [key: `--${'ams' | 'example' | 'denhaag' | 'utrecht'}-${string}`]: string | number | undefined;
  }
}
