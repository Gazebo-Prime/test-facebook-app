#server.js
(function () {
  "use strict";

  var connect = require('connect')
    , app = connect.createServer()
    , port = process.argv[2] || 3000
    ;

  if (!connect.router) {
    connect.router = require('connect_router');
  }

  function routes(route) {
    route.get('/test', function (request, response, next) {
      response.end('I GET that you GET me');
    })

    route.post('/test', function (request, response, next) {
      response.end('POST partem depression... setting in....');
    });
  }

  app.use(connect.router(routes))

  function run() {
    var server
      ;

    server = app.listen(port, function () {
      console.log(
          'Running on '
        + server.address().address
        + ':' + server.address().port
      );
    })
  }

  // test whether we're the main module or if we're being required
  if (module === require.main) {
    run();
  }
}());
