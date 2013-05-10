define([
  // vendors
  'jquery',
  'underscore',
  'backbone',
  // app
  'app',
  // views & models & templates
  'models/collection_home',
  'text!templates/temp_home.html'],
function($, _, Backbone, app, Collection, Template){
  'use strict';

  var View = Backbone.View.extend({

    el: '.main_container',

    initialize: function(){
      var self = this;

      // bind models
      _.bindAll(this, "render");

      // fill collection with json server data
      this.collection = new Collection();

      this.collection.fetch({
        success: function(){
          console.log('the collection to data_home has been loaded');
          self.beforeRender();
          self.render();
        },
        error: function(){
           console.log('There was some error in loading and processing the data_home JSON file');
        }
      });

      this.collection.bind("reset", this.render, this);

    },

    beforeRender: function(){
      // fill templates with collection data
      this.template = _.template( Template, { items: this.collection.toJSON() });
    },

    render: function(){
      $(this.el).append(this.template);
    }

  });

  return View;

});
