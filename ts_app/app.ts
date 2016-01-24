/// <reference path="../typings/require.d.ts" />
/// <reference path="./mainConfig.ts" />
import angular = require('angular');
import angularRoute = require('ui-route');
import sanitize = require('sanitize');
import angularUiBootstrap = require('bootstrapJs');

var app = angular.module('app', ['ngSanitize', 'app.tasks', 'app.directives', 'app.util', 'ui.router']);
export = app