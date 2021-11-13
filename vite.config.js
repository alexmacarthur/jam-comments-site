const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      formats: ['umd'],
      entry: path.resolve(__dirname, 'assets/scripts/index.js'),
      name: 'JamComments',
      fileName: (format) => `jam-comments.${format}.js`
    },
    outDir: path.resolve(__dirname, 'assets/dist'),
  }
})
