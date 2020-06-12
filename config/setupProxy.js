const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  const apiProxy = proxy({
    context: ['/api'],
    target: 'https://7ac2b8ab-f3e5-4534-863d-90dd424a6405.mock.pstmn.io',
    pathRewrite: function(path) {
      return path.replace('/api', '/');
    },
    changeOrigin: true,
  });

  app.use('/api', apiProxy);
};
