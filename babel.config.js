// babel support for mocha https://github.com/mochajs/mocha-examples

module.exports = (api) => {
  // Cache configuration is a required option
  api.cache(false);

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
      },
    ],
  ];

  return { presets };
};
