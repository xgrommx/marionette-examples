/**
 * Created by nrheckman on 7/18/14.
 */

define([ 'marionette', 'tpl!template/WelcomeTemplate.tpl' ], function(Marionette, template) {
	return Marionette.ItemView.extend({
		template: template
	});
});