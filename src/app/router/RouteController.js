/**
 * Created by nrheckman on 7/18/14.
 */

define([ 'view/WelcomeView', 'view/SimpleInputCollectionView' ], function( WelcomeView, InputCollectionView ) {
	return function (app, options) {
		this.app = app;
		this.options = options;

		this.showWelcomePage = function() {
			console.log("Welcome page being initialized");
			this.app.mainContent.show(new WelcomeView());
		};

		this.showInputList = function() {
			console.log("Input list being initialized");
			this.app.mainContent.show(new InputCollectionView({ 'collection' : this.options.inputs }));
		};
	};
});
