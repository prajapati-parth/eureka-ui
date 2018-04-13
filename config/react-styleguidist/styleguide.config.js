module.exports = {
  showCode: true,
  showUsage: true,
  title: 'Eureka UI',
  styleguideDir: '../../docs',
  template: './html-template.html',
  components: '../../src/components/**/[A-Z]*.js',
  webpackConfig: require('../webpack/webpack.config.js'),
  sections: [
    {
      name: 'Buttons',
      sections: [
        {
          name: 'Default button',
          content: '../../src/components/Button/examples/default-button.md'
        },
        {
          name: 'Gradient button',
          content: '../../src/components/Button/examples/gradient-buttons.md'
        }
      ]
    }
  ]
}