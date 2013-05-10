define([
	// vendors
	'jquery',
 	'underscore',
 	'backbone'],
function($, _, Backbone){
	'use strict';

	var initialize = function(){
		// the app start
		console.log('app espressito ' + this.config.version + ' is Running now');
  };

  var config = {
    version: "0.0.1"
  };

  return { initialize: initialize, config: config };

});