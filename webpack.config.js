
const config = {
  mode:'none',
  entry:{
    ajap:'./src/index.js'
  },
  output:{
    filename:"[name].js",
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
  },
  optimization:{
    minimize:true
  }
};

module.exports = config;