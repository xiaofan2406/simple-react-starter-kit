const env = process.env.NODE_ENV;

const isTest = env === 'test';
const isDevelopment = env === 'development';
const isProduction = env === 'production';

if (!isTest && !isDevelopment && !isProduction) {
  throw new Error(
    `Invalid NODE_ENV "${env}". Use only from ["test", "development", "production"]`
  );
}

const presetEnvConfig = isTest
  ? {
      targets: { node: 'current' },
    }
  : {
      useBuiltIns: 'usage',
      corejs: { version: 3 },
      modules: false,
    };

module.exports = {
  presets: [
    ['@babel/preset-env', presetEnvConfig],

    ['@babel/preset-react', { development: !isProduction, useBuiltIns: true }],

    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],

    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],

    '@babel/plugin-syntax-dynamic-import',

    isTest && 'babel-plugin-dynamic-import-node',
  ].filter(Boolean),
};
