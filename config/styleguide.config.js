module.exports = {
  showCode: true,
  title: 'Eureka UI',
  styleguideDir: '../docs',
  components: '../src/components/**/[A-Z]*.js',
  webpackConfig: require('../webpack/webpack.umd.config.js')
}