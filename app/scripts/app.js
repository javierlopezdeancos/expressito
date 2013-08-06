define([
	// vendors
	'jquery',
	'underscore',
	'backbone',
	'marionette'],
function($, _, Backbone, Marionette){
	'use strict';

	var app;

	app = new Marionette.Application();

	/**
	* Declare seed app version.
	*
	* @property config
	* @type {Object}
	* @default ""
	*/
	app.config = {
    version: '0.0.1'
  };

  /**
	* Store app.
	*
	* @property store
	* @type {Object}
	* @default ""
	*/
	app.store = { };

  /**
	* app views.
	*
	* @property views
	* @type {Object}
	* @default ""
	*/
  app.store.views = {};

  /**
	* app collections.
	*
	* @property collections
	* @type {Object}
	* @default ""
	*/
  app.store.collections = {};

  /**
	* app models.
	*
	* @property models
	* @type {Object}
	* @default ""
	*/
  app.store.models = {};

	/**
	* Initialize method. addRegions app, add after an before
	* initialize, actions, start backbone history and start
	* marionette app
	*
	* @method initialize
	*/
	app.initialize = function(){

		// configurate regions app to manage render
		this.addRegions({
			mainRegion: '.main_container'
		});

		// to after initialize aplication we call backbone.history to route to initial url
		this.on('initialize:after', function(){
		  Backbone.history.start();
		});

		// start app with options
		this.start();
		console.log('app expressito ' + this.config.version + ' is Running now');

  };

  return app;

});