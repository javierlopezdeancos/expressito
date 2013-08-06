define([
  // vendors
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  // app
  'app',
  // views & models & templates
  'text!templates/temp_item_home.html'],
function($, _, Backbone, Marionette, app, Template){
  'use strict';

  var ItemView = Backbone.Marionette.ItemView.extend({
    template : Template,
    tagName:'li',
    className:'message',
    initialize: function(){
      console.log('We are rendering the initialize model view');
    },
    events:{
      // put here ItemView events
    }
  });

  return ItemView;

});