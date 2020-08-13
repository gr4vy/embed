const path = require(`path`)
const { merge } = require(`webpack-merge`)
const common = require(`./common.js`)

// Builds a version of the library suitable for deployment to our CDN.
module.exports = merge(common, {
  mode: `production`,
  output: {
    filename: `gr4vy-embed.js`,
    path: path.resolve(`./umd`),
    libraryTarget: `umd`,
    library: `gr4vy`
  },
  entry: path.resolve(`./src/umd/index.js`)
})
