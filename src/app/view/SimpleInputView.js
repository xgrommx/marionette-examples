/**
 * Created by nrheckman on 7/16/14.
 */
define([ 'marionette', 'tpl!template/InputTemplate.tpl' ], function(Marionette, template) {
	return Marionette.ItemView.extend({
		tagName: "li",
		template: template
	});
});