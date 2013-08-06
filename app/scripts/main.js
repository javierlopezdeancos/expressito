require.config({

  baseUrl:                  '../../app/',

  paths: {
    // components
    jquery:                 '../components/jquery/jquery',
    underscore:             '../components/underscore/underscore',
    backbone:               '../components/backbone/backbone',
    marionette:             '../components/marionette/lib/backbone.marionette',
    'backbone.wreqr':       '../components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.eventbinder': '../components/backbone.eventbinder/lib/backbone.eventbinder',
    'backbone.babysitter':  '../components/backbone.babysitter/lib/backbone.babysitter',
    text:                   '../components/requirejs-text/text',
    // app
    app:                    '/scripts/app',
    routers:                '/scripts/routers',
    controlers:             '/scripts/controlers',
    views:                  '/scripts/views',
    models:                 '/scripts/models',
    templates:              '/scripts/templates'
  },

  // Underscore and Backbone are not AMD-capable per default,
  // so we need to use the AMD wrapping of RequireJS
  shim: {
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    marionette : {
      deps : ['backbone'],
      exports : 'Backbone.Marionette'
    }
  }
});

require([
  'jquery',
  // app
  'app',
  // router
  'routers/router_home'],
function ($, app, Router) {
  'use strict';

  app.router = Router;
  console.log(app);
  console.log('jQuery %s Running', $().jquery);

  // ...use core app here...
  app.router = new Router();
  app.initialize();

});