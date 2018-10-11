
const config = {
  mode:process.env.NODE_ENV,
  entry:{
    ajap:'./src/index.js'
  },
  output:{
    filename:"[name].min.js",
    libraryExport:"default",
    library:'Ajap',//这里是给库命名的地方 用于src 引用
    libraryTarget:'umd'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      }
    ]
  }
};

if (process.env.NODE_ENV === 'development') {
  config.output.filename = "[name].js";
  config.devtool = "inline-source-map";
};

module.exports = config;