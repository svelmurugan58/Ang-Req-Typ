//'app' is needed for all the specs, hence adding it as first dependency
var filesToLoad = ['app','./router',"./module_tasks/router"]; 
var vendorPath="../";
require.config({
	/* Define cache buster that is used to To invalidate the browser cache whenever
	new version is released .It forces the browser to fetch latest files from the
	server instead of cache */	
	baseUrl: '../scripts',
	// define library shortcuts
	paths: {
		'angular': ''+vendorPath+'vendor/js/angular/angular.min',
		'sanatize':''+vendorPath+'vendor/js/angular/angular-sanitize.min',
		'bootstrapJs':''+vendorPath+'vendor/js/bootstrap/bootstrap.min',
		'ui-route': ''+vendorPath+'vendor/js/angular/angular-ui-router.min',
		'domReady': ''+vendorPath+'vendor/js/requirejs-domready/domReady.min',
		'jquery':''+vendorPath+'vendor/js/jquery/jquery.min',
		'toastr':''+vendorPath+'vendor/js/misc/toastr.min',
		//Test dependency
		'angular-mock': ''+vendorPath+'vendor/js/angular-mocks/angular-mocks'
	},
	/**
	* Some libs does not support AMD out of the box.
	* Use Shim to add AMD module behaviour to Non-AMD libraries
	* Remember: only use shim config for non-AMD scripts,
	* i.e scripts that do not already call define(). The shim
	* config will not work correctly if used on AMD scripts,
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
		},
		'bootstrapJs':{
			deps:['jquery']
		}
		,'angular-mock': {
			deps: ['angular']
		}
	},
	// DO NOT load the bootstrap.js - angular mock has issues with ui-router
	// Load the app instead
	deps: filesToLoad
});
