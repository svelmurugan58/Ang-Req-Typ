/*
* Defines RequireJS configuration file to load all the dependencies, figures out the right order in
* which to call the functions that define the modules, then calls the module definition functions in the right order.
*/
require.config({
	paths: {
		'angular': '../vendor/js/angular/angular.min',
		'sanatize':'../vendor/js/angular/angular-sanitize.min',
		'ui-route':'../vendor/js/angular/angular-ui-router.min',
		'domReady': '../vendor/js/requirejs-domready/domReady.min',
		'jquery':'../vendor/js/jquery/jquery.min',
		'toastr':'../vendor/js/misc/toastr.min',
		'bootstrapJs':'../vendor/js/bootstrap/bootstrap.min'
	},
	/**
	* for libs that either do not support AMD out of the box, or
	* require some fine tuning to dependency mgt'
	*/
	shim: {
		'angular': {
			deps: ['jquery'],
			exports: 'angular'
		},
		'sanatize':{
			deps:['angular']
		},
		'ui-route': {
			deps: ['angular']
		}
	},
	deps: [
	// kick start application... see bootstrap.js
	'./bootstrap'
	]
});
