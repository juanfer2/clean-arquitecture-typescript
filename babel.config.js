module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
   '@babel/preset-typescript',
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties"]
  ],
  env: {
    test: {
      plugins: [
       'babel-plugin-transform-typescript-metadata',
       'babel-plugin-parameter-decorator',
      ],
    },
  },
};
