/**
 * Created by nrheckman on 7/16/14
 */
define([ "backbone", "marionette", 'router/ApplicationRouter', 'router/RouteController' ], function(
		Backbone, Marionette, ApplicationRouter, RouteController ) {

	console.log("Setting up app");

	// set up the app instance
	var myApp = new Marionette.Application();

	// configuration, setting up regions, etc ...
	myApp.addRegions({
		'mainContent' : "body div.content"
	});

	myApp.getCurrentRoute = function(){
		return Backbone.history.fragment;
	};

	// On startup, initialize to a particular view
	myApp.addInitializer(function(options){
		console.log("Initializing");
		new ApplicationRouter({ 'controller' : new RouteController(myApp, options) });
	});

	// Turn on history management
	myApp.on("start", function(){
		if(Backbone.history){
			Backbone.history.start();
		}
	});

	return myApp;
});