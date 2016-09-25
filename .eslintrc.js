module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.dev.js'
      }
    }
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    "react"
  ],
  extends: ["airbnb"],
  rules: { // these are the rules to work with airbnb style guide together
    "comma-dangle": [2, "never"], // disallow comma after the last propery of an object
    "new-cap": 0, // disable for HigherOrderComponent wrapping
    "no-console": 0,
    "no-param-reassign": 0, // e.target.value = ''; happens all the time
    "no-plusplus": 0, // i++ is allowed
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }], // better looking arrow-funcs
    "import/no-extraneous-dependencies": 0,
    "react/jsx-filename-extension": 0, // enfore all .js extension
    "react/no-unused-prop-types": [2, { skipShapeProps: true }],
    "react/forbid-prop-types": 0 // PropTypes.object is allowed
  }
};
