/**
 * Created by nrheckman on 7/18/14.
 */

define([ 'jquery', 'backbone', 'model/InputModel' ], function( $, Backbone, InputModel ) {
	return Backbone.Collection.extend({
		model: InputModel
	});
});