/**
 * Created by nrheckman on 7/18/14.
 */

define([ 'marionette' ], function( Marionette ) {
	return Marionette.AppRouter.extend({
		appRoutes: {
			''          : 'showWelcomePage',
			'inputlist' : 'showInputList'
		}
	});
});