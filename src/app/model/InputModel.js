/**
 * Created by nrheckman on 7/16/14.
 */
define([ "jquery", "backbone" ], function( $, Backbone ) {
	return Backbone.Model.extend({
		defaults: {
			'name' : 'inputModel-' + Math.floor(100000 * (Math.random() % 1)),
			'value' : '',
			'label' : "Input"
		}
	});
});