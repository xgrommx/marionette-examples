/**
 * Created by nrheckman on 7/16/14
 */
define([ "jquery", "backbone", "marionette", 'view/SimpleInputView' ], function(
	$, Backbone, Marionette, InputView ) {

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
		var inputView = new InputView({ 'model' : options.input });
		myApp.mainContent.show(inputView);
	});

	// Turn on history management
	myApp.on("start", function(){
		if(Backbone.history){
			console.log("Starting history");
			Backbone.history.start();
		}
	});

	return myApp;
});