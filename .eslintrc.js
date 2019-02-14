module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.js',
      },
      node: {
        extensions: ['.js', '.mjs'],
      },
    },
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 9,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  plugins: ['react'],
  extends: ['airbnb', 'prettier'],
  rules: {
    'no-console': 0,
    'global-require': 0,
    'no-param-reassign': [2, { props: false }],
    'no-underscore-dangle': [2, { allowAfterThis: true }],
    'no-nested-ternary': 0,
    'import/extensions': [2, 'always', { js: 'never', mjs: 'never' }],
    'import/no-extraneous-dependencies': 0, // allow import devDependencies
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0, // enforce all .js extension
    'react/jsx-one-expression-per-line': 0, // prettier should handle this
    'jsx-a11y/anchor-is-valid': 0,
  },
};
