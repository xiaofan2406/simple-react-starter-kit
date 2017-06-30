const path = require('path');

let plugins = [
  require.resolve('babel-plugin-transform-decorators-legacy'),
  require.resolve('babel-plugin-transform-class-properties'),
  [
    require.resolve('babel-plugin-transform-object-rest-spread'),
    { useBuiltIns: true }
  ],
  [require.resolve('babel-plugin-transform-react-jsx'), { useBuiltIns: true }],
  [
    require.resolve('babel-plugin-transform-runtime'),
    {
      helpers: false,
      polyfill: false,
      regenerator: true
    }
  ],
  require.resolve('babel-plugin-transform-export-extensions')
];

if (process.env.NODE_ENV === 'development') {
  plugins.concat([require.resolve('react-hot-loader/babel')]);
}

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  plugins.concat([
    require.resolve('babel-plugin-transform-react-jsx-source'),
    require.resolve('babel-plugin-transform-react-jsx-self')
  ]);
}

if (process.env.NODE_ENV === 'production') {
  plugins = [
    [
      // this plugin has to be the first or else it will not work
      require.resolve('babel-plugin-transform-react-remove-prop-types'),
      { removeImport: true }
    ],
    ...plugins
  ];
}

if (process.env.NODE_ENV === 'test') {
  module.exports = {
    presets: [
      [require('babel-preset-env').default, { targets: { node: 'current' } }],
      require.resolve('babel-preset-react')
    ],
    plugins: plugins.concat([
      require.resolve('babel-plugin-dynamic-import-node')
    ])
  };
} else {
  module.exports = {
    presets: [
      [
        require.resolve('babel-preset-env'),
        { useBuiltIns: false, modules: false }
      ],
      require.resolve('babel-preset-react')
    ],
    plugins: [
      ...plugins,
      [require.resolve('babel-plugin-transform-regenerator'), { async: false }],
      require.resolve('babel-plugin-syntax-dynamic-import')
    ]
  };
}
