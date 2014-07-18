var require = {
	'baseUrl' : 'app',
	'paths' : {
		'jquery' : '../vendor/jquery-2.1.1.min',
		'underscore' : '../vendor/lodash.underscore.min',
		'backbone' : '../vendor/backbone-min',
		'marionette' : '../vendor/backbone.marionette.min',
		'bootstrap' : '../vendor/bootstrap-3.2.0-dist/js/bootstrap.min',
		//requirejs template plugins
		'text' : '../vendor/text',
		'tpl' : '../vendor/tpl'
	},
	'shim' : {
		'jquery' : {
			exports : 'jQuery'
		},
		'underscore' : {
			exports: '_'
		},
		'backbone' : {
			exports: 'Backbone',
			deps: ['underscore', 'jquery']
		},
		marionette : {
			exports : 'Marionette',
			deps : ['jquery', 'underscore', 'backbone']
		},
		'bootstrap': ['jquery']
	}
};