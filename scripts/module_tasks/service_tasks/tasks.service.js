define(['../module'], function (app_tasks) {
	'use strict';
    

	app_tasks.factory("taskDo", taskDo);

	taskDo.$inject = ['$http', '$q', 'ToastrSrvc'];

	function taskDo($http, $q, toastrSrvc) {
		var root = "http://localhost:3000/tasks";
		// task Model reprsentation
		var task = {
			title: "",
			completed: false,
			timings: [],
			totalTime: 0,
			id: 0,
			service: {}
		};
		var self = task;
		
		//set taskObj values  
		task.service.setSelectedTask = function (task) {
			self.id = task.id;
			self.title = task.title;
			self.completed = task.completed;
			self.timings = task.timings || new Array();
			self.totalTime = task.totalTime;
		};
		 
		//get all task values from Db
		task.service.getAllTasks = function () {
			var deferred = $q.defer();
			$http({ method: 'GET', url: root }).
				success(function (data, status, headers, config) {
				return deferred.resolve(data);
			}).
				error(function (data, status, headers, config) {
				toastrSrvc.notifyError(data.message);
				return deferred.reject(data);
			});
			return deferred.promise;
		};
		
		//Update edited task to Db based on taskId
		task.service.saveTask = function (data) {
			var deferred = $q.defer();
			$http({ method: 'PUT', url: root + "/" + data.id, data: data }).
				success(function (response) {
				toastrSrvc.notifySuccess("Task Updated Sucessfully");
				return deferred.resolve(data);
			}).
				error(function (err, options) {
				toastrSrvc.notifyError(err.message);
				return deferred.reject(data);
			});
			return deferred.promise;
		};
		
		//Add a new task into the server
		task.service.addTask = function (data) {
			var defered = $q.defer();
			$http({ method: "POST", url: root, data: data }).
				success(function (resp) {
				toastrSrvc.notifySuccess("Task Added Sucessfully");
				return defered.resolve(resp);
			}).error(function (err, opt) {
				toastrSrvc.notifyError(err.message);
				return defered.reject(err);
			});
			return defered.promise;
		};

		return task;
	};
});