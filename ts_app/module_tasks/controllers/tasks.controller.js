define(['../module'], function (app_tasks) {
	'use strict';
	app_tasks.controller("tasksCtrl", tasksCtrl);

	tasksCtrl.$inject = ['tasksList', '$state', 'taskDo'];

	function tasksCtrl(tasksList, $state, taskDo) {
		//vm stands for viewModel/scope
		var vm = this;
		
		//data for the table
		vm.tasksList = tasksList;
		
		//column properties for the table
		vm.tableConfiguraiton = [
			{ title: "Title", type: "string", sort: true, map: "title" },
			{ title: "Completed", type: "string", sort: true, map: "completed" },
			{ title: "Total Time", type: "string", sort: true, map: "totalTime" }
		];
		
		//function invoked on row click of the table
		vm.click = function (row) {
			taskDo.service.setSelectedTask(row);
			$state.go("taskDetail", row);
		};
	};
});