define([
  // vendors
  'jquery',
    'underscore',
    'backbone',
    'marionette',
  // app
  'app',
  // controlers
  'controlers/controler_home'
], function($, _, Backbone, Marionette, app, Controller) {
  'use strict';

  var Router = Backbone.Router.extend({

    /**
     * Initialize actions before route
     *
     * @method initialize
     */
    initialize: function() {
      // ...here initialize functions...
    },

    /**
     * Object with url paths and handels functions
     * to run with every url route
     *
     * @Object routes
     */
    routes: {
      '': 'home'
    },

    /**
     * Handle method to home path
     * initialize, actions, run home app.module
     * execute showView home app.module method
     *
     * @method home
     */
    'home': function() {
      // define home marionette module
      app.module("home", function(Mod, app, Backbone, Marionette, $, _) {
        // launch home controler
        Mod.controller = new Controller({
          region: app.mainRegion
        });
        Mod.controller.showView();
      });
    }

  });

  return Router;

});
