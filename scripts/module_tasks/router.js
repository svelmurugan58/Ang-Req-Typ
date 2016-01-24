/*
* Defines applications routes. Listens and routes application URL change to appropriate controller and partials
*/
define(['../app'], function (app) {
	'use strict';
	return app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		$stateProvider.state('allTasks', {
			url: "/allTasks",
			parent: "tasksLayout",
			views: {
				'body@layout': {
					templateUrl: "partials/tasks/tasksList.html",
					controller: 'tasksCtrl',
					controllerAs: 'tasks'
				},
			},
			resolve: {
				tasksList: function (taskDo) {
					return taskDo.service.getAllTasks();
				}
			}
		});

		$stateProvider.state('addTask', {
			url: "/addTask",
			parent: "tasksLayout",
			views: {
				'body@layout': {
					templateUrl: "partials/tasks/addTask.html",
					controller: 'addTaskCtrl',
					controllerAs: 'add'
				},
			}
		});

		$stateProvider.state('taskDetail', {
			url: "/taskDetail/:title",
			parent: "tasksLayout",
			views: {
				'body@layout': {
					templateUrl: "partials/tasks/editTask.html",
					controller: 'editTaskCtrl',
					controllerAs: 'edit'
				},
			}
		});

	}]);
});
