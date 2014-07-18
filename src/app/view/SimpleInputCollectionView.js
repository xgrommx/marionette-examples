/**
 * Created by nrheckman on 7/18/14.
 */

define([ 'marionette', 'view/SimpleInputView' ], function( Marionette, InputView ) {
	return Marionette.CollectionView.extend({
		tagName: "ul",
		childView: InputView
	});
});