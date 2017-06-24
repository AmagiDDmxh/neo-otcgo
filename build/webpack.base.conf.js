var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'build': path.resolve(__dirname),
      '@': resolve('src'),
      'plugins': resolve('src/plugins'),
      'utils': resolve('src/utils'),
      'locales': resolve('src/locales'),
      'assets': resolve('src/assets'),
      'svg': resolve('src/assets/svg'),
      'components': resolve('src/components'),
      'views': resolve('src/views'),
      't': resolve('src/store/mutation_types.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      { test: /\.json$/, loader: 'json' },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'svg-sprite-loader?' + JSON.stringify({
          name: '[name]_[hash]',
          spriteModule: 'build/sprite',
          prefixize: true
        })
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: 'stylus-loader',
            options: {
              use: [require('jeet')()],
              import: [
                resolve('src/styles/index.styl')
              ]
            }
          }
        ]
      },
      { test: /\.yml$/, loaders: ['json-loader', 'yaml-loader'] },
    ]
  },

}
