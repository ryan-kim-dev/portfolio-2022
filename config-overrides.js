const {
  override,
  addBabelPlugin,
  addWebpackModuleRule,
} = require('customize-cra');

module.exports = override(
  addBabelPlugin('babel-plugin-styled-components'),

  addWebpackModuleRule({
    test: /\.splinecode$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  })
);
