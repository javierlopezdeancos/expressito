define([
	// vendors
	'jquery',
	'underscore',
	'backbone',
  // app
  'app',
  // views & models & templates
  'models/model_home'],
function($, _, Backbone, app, Model){
	'use strict';

  var Collection = Backbone.Collection.extend({

    model: Model,
    url: 'scripts/models/data_home.json',

    parse : function(response){
      return response;
    }

  });

  return Collection;

});
