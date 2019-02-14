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

const presetEnvConfig = isTest
  ? {
      targets: { node: 'current' },
    }
  : {
      useBuiltIns: 'usage',
      modules: false,
    };

module.exports = {
  presets: [
    ['@babel/preset-env', presetEnvConfig],

    ['@babel/preset-react', { development: !isProduction, useBuiltIns: true }],
  ],
  plugins: [
    ['babel-plugin-emotion', emotionConfig],

    '@babel/plugin-transform-destructuring',

    ['@babel/plugin-proposal-class-properties', { loose: true }],

    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],

    '@babel/plugin-syntax-dynamic-import',

    isTest && 'babel-plugin-dynamic-import-node',
  ].filter(Boolean),
};
