/*
* Kickstarts the angular application by loading Angular on to the windows document node.
*/
define([
'require',
'angular',
'app',
'router',
,'./module_tasks/router'
], function (require, ng, app) {
	'use strict';
	/*
	* place operations that need to initialize prior to app start here
	* using the `run` function on the top-level module
	*/
	require(['domReady!'], function (document) {
		ng.bootstrap(document, ['app']);
	});

});

