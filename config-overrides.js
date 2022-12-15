const {
  override,
  addBabelPlugin,
  addWebpackPlugin,
  addWebpackModuleRule,
} = require('customize-cra');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = override(
  addBabelPlugin('babel-plugin-styled-components'),
  addWebpackPlugin(new BundleAnalyzerPlugin()),
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
