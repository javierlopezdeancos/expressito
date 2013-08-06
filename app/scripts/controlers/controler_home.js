define([
	// vendors
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  // app
  'app',
  // views & models & templates
  'models/model_home',
  'models/collection_home',
  'views/view_collection_home'],
function($, _, Backbone, Marionette, app, Model, Collection, ViewCollection){
	'use strict';

  // Define a controller to run this module
  var Controller = Marionette.Controller.extend({

    initialize: function(options){
      // add to app store
      app.store.collections.home = this.collection;
      app.store.models.home = this.model;
      app.store.views.home = this.view;
      // instances
      this.region = options.region;
      this.collection =  new Collection();
      this.model =  new Model();
      // fech data to json file server in collection
      this.collection.fetch({
        success: function(){
          console.log('the collection to data_home has been loaded');
        },
        error: function(){
          console.log('There was some error in loading and processing the data_home JSON file');
        }
      });
    },

    showView: function(){
      // create and fill view with data
      this.view = new ViewCollection({
        model: this.model,
        collection: this.collection
      });
      // show view
      this.region.show(this.view);
    }

  });

  return Controller;

});


