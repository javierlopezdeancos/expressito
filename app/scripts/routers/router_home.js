define([
  // vendors
  'jquery',
  'underscore',
  'backbone',
  // views & models & templates
  'views/view_home'],
function($, _, Backbone, View){
  'use strict';

  var Router = Backbone.Router.extend({

    initialize: function(){
      Backbone.history.start();
    },

    // routes
    routes: {
      '': 'home'
    },

    // handlers
    'home': function(){
      this.view_home = new View();
      this.view_home.render();
    }

  });

  return Router;

});
