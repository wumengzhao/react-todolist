// 解决跨域问题配置
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'http://localhost:7001',
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/" 
    }
  }));

};
