const env = process.env.NODE_ENV;

const isTest = env === 'test';
const isDevelopment = env === 'development';
const isProduction = env === 'production';

if (!isTest && !isDevelopment && !isProduction) {
  throw new Error(
    `Invalid NODE_ENV "${env}". Use only from ["test", "development", "production"]`
  );
}

const emotionConfig = isProduction
  ? { hoist: true }
  : { sourceMap: true, autoLabel: true };

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' },
        useBuiltIns: 'usage',
        modules: isTest ? 'commonjs' : false,
      },
    ],
    ['@babel/preset-react', { development: !isProduction, useBuiltIns: true }],
  ],
  plugins: [
    ['babel-plugin-emotion', emotionConfig],

    '@babel/plugin-proposal-class-properties',

    [
      '@babel/plugin-proposal-object-rest-spread',
      { loose: true, useBuiltIns: true },
    ],

    // Enable `import()` syntax and transform to `require` for testing
    isTest
      ? 'babel-plugin-transform-dynamic-import'
      : '@babel/plugin-syntax-dynamic-import',

    isDevelopment && 'react-hot-loader/babel',
  ].filter(Boolean),
};
