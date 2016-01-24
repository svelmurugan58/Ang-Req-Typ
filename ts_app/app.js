/**
application main module declaration for kick starting the angular application
*/
define([
'angular',
'sanitize',
'ui-route',
'./module_tasks/moduleLoader',
'./directives/moduleLoader',
'./util/moduleLoader',
'bootstrapJs'
], function (angular) {
	'use strict';
	return angular.module('app', ['ngSanitize',
	'app.tasks',
	'app.directives',
	'app.util',
	'ui.router'
	]);
});
