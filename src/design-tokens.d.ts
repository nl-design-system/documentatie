declare module 'csstype' {
  interface Properties {
    // Allow namespaced CSS Custom Properties
    [key: `--${'ams' | 'example' | 'denhaag' | 'utrecht'}-${string}`]: string | number | undefined;
  }
}
