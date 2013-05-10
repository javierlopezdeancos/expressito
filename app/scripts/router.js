define([
	// vendors
	'jquery',
 	'underscore',
 	'backbone',
 	// routers
 	'routers/router_home'],
function($, _, Backbone, router){

	var initialize = function(){
		// the app start
		console.log('the app is started now');
		// the views start
   	this.router = new router();
  };

  return { initialize: initialize };

});