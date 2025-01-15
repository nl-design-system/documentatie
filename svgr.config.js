module.exports = {
  svgProps: { role: 'img' },
  titleProp: true,
  descProp: true,
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupIds: false,
            removeAttrs: false,
          },
        },
      },
    ],
  },
};
