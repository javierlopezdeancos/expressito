define([
  // vendors
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  // app
  'app',
  // views & models & templates
  'views/view_item_home',
  'text!templates/temp_collection_home.html'],
function($, _, Backbone, Marionette, app, ViewItem, Template){
  'use strict';

  var CollectionView = Backbone.Marionette.CompositeView.extend({
    tagName: "div",
    template: Template,
    itemView: ViewItem,
    itemViewContainer: "ul",
    initialize: function(){
      console.log('We are rendering the initialize collection view');
    }
  });

  return CollectionView;

});