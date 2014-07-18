/**
 * Created by nrheckman on 7/16/14.
 */
require([ 'router/Application', 'model/InputModel' ], function( app, InputModel ) {
	var anInput = new InputModel({
		//'name' : 'default',
		'value' : 'Default Value',
		'label' : 'Your text:'
	});

	app.start({
		'input' : anInput
	});
});