module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer:{
    proxy:{
        '/apis':{
            target:'http://localhost:8081',
            changeOrigin:true,
            pathRewrite:{
                '^/apis':'/'
            }
        }
    }
}
}

