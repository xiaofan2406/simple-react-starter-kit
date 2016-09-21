module.exports = {
  babelrc: false,
  presets: [
    require.resolve('babel-preset-latest'),
    require.resolve('babel-preset-react')
  ],
  plugins: [
    // class { handleClick = () => { } }
    require.resolve('babel-plugin-transform-class-properties'),
    // { ...todo, completed: true }
    require.resolve('babel-plugin-transform-object-rest-spread'),
    // https://babeljs.io/docs/plugins/transform-react-constant-elements/
    // require.resolve('babel-plugin-transform-react-constant-elements'),
    // Polyfills the runtime needed for async/await and generators
    [require.resolve('babel-plugin-transform-runtime'), {
      helpers: false,
      polyfill: false,
      regenerator: true
    }]
  ]
};
