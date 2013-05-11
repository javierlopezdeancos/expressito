require.config({

  baseUrl:          "../../app/",

  paths: {
    /**** components *****/
    jquery:       '../components/jquery/jquery',
    underscore:   '../components/underscore/underscore',
    backbone:     '../components/backbone/backbone',
    text:         '../components/requirejs-text/text',
    /**** app *****/
    app:          '/scripts/app',
    routers:      '/scripts/routers',
    views:        '/scripts/views',
    models:       '/scripts/models',
    templates:    '/scripts/templates'
  },

  // Underscore and Backbone are not AMD-capable per default,
  // so we need to use the AMD wrapping of RequireJS
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    jquery: {
      exports: '$'
    }
  }
});

require([
  'app',
  'routers/router_home'],
function (app, router) {
  'use strict';

  app.router = router;
  console.log(app);
  console.log('jQuery %s Running', $().jquery);

  // use core app here
  app.initialize();
  app.router = new router();

});