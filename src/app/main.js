/**
 * Created by nrheckman on 7/16/14.
 */
require([ 'router/Application', 'collection/InputCollection' ], function( app, InputCollection ) {
	var inputs = new InputCollection([
		{ 'label' : 'Your text:' },
		{ 'label' : 'More text:' },
		{ 'label' : 'Defaulted:', 'value' : 'Some default value' }
	]);

	app.start({
		'inputs' : inputs
	});
});