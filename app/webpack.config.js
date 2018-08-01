const {VueLoaderPlugin} = require('vue-loader')

// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = 'development'

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = (MODE === 'development')

/**
 * TODO: module.exports の中身をproductionとdeveopmentで分けれるように別ファイルにする
 */
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,

  // source-map 方式でないと、CSSの元ソースが追跡できないため
  devtool: 'source-map',

  /**
   * TODO: Chapterごとにファイルが分けられるようにentryとoutputを変更する
   */
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'main.js',
  },

  module: {
    rules: [
      /**
       * TODO: Componentsに対応した設定を覚える
       */

      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      /**
       * TODO: Babelの細かい設定とそれぞれの意味を覚える
       */
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // Babel のオプションを指定する
        options: {
          presets: [
            // env を指定することで、ES2018 を ES5 に変換。
            // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
            // webpack の Tree Shaking 機能が使えない
            ['env', {'modules': false}],
          ],
        },
      },
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        // ローダー名
        use: [
          // linkタグに出力する機能
          'style-loader',
          // CSSをバンドルするための機能
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドを取り込む
              url: true,
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,

              // 空白文字やコメントを削除する
              minimize: !enabledSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          // PostCSSのための設定
          {
            loader: 'postcss-loader',
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: enabledSourceMap,
              plugins: [
                // autoprefixerを有効化
                // ベンダープレフィックスを自動付与する
                require('autoprefixer')({grid: true}),
              ],
            },
          },
          // Sassをバンドルするための機能
          {
            loader: 'sass-loader',
            options: {
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
      /**
       * TODO: ちゃんと設定できているか調べる
       */
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        // 画像をBase64として取り込む
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100 * 1024, // 100KB以上だったら埋め込まずファイルとして分離する
              name: './img/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  // Webpackでvueを利用するときの設定
  resolve: {

    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  plugins: [
    // Vueを読み込めるようにするため
    new VueLoaderPlugin,
  ],

}