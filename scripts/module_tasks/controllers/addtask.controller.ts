define(['../module'], function (app_tasks) {
	'use strict';
    
	addTaskCtrl.$inject = ['taskDo', '$state'];

	function addTaskCtrl(taskDo, $state) {
		//vm stands for viewModel/scope
		var vm = this;
		
		//default task status
		vm.completed = false;
		vm.addTask = addTask;
		
		//function called on click of addBtn
		//Save data to the server(POST)
		function addTask() {
			vm.totalTime = 0;
			taskDo.service.addTask(vm).then(function (response) {
				vm.sample="vamsi";
			});
		}
	};
    
    app_tasks.controller("addTaskCtrl", addTaskCtrl);
});