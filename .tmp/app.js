define(["require", "exports", 'angular'], function (require, exports, angular) {
    var app = angular.module('app', ['ngSanitize', 'app.tasks', 'app.directives', 'app.util', 'ui.router']);
    return app;
});
