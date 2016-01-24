define(['../module'], function (app_tasks) {
	'use strict';
	app_tasks.controller("editTaskCtrl", editTaskCtrl);

	editTaskCtrl.$inject = ['taskDo', '$state'];

	function editTaskCtrl(taskDo, $state) {
		//vm stands for viewModel/scope
		var vm = this;

		vm.task = taskDo;
		vm.day = {};
		var allTimings = [];
		angular.copy(vm.task.timings, allTimings);
		vm.add = true;
		vm.search = true;
		vm.save = saveTask;
		vm.addTime = addTimeSpent;
		vm.saveDayEffort = saveDayEffort;
		vm.cancel = emptySelectedDateFileds;
		vm.delete = deleteSelectedDateFields;
		vm.task.timings = vm.task.timings;
		vm.toggleTableResults = timeSpent_last7Days;
		
		//col properties for the table
		vm.timeSplitUpConfig = [
			{ title: "Date", map: "date" },
			{ title: "Time Spent", map: "time" }
			
		];
		
		//function invoked on row click of table
		vm.click = function (row) {
			vm.dateSelected = true;
			vm.day.date = convertToDateObj(row.date);
			vm.day.time = row.time;
			vm.add = false;
			vm.rowIndx = vm.task.timings.indexOf(row);
		};
		
		//function invoked on row Edit
		//manipulates total time 
		function saveDayEffort() {
			vm.add = true;
			vm.task.timings[vm.rowIndx].time < vm.day.time ? (vm.task.totalTime += (vm.day.time) - (vm.task.timings[vm.rowIndx].time)) : (vm.task.totalTime -= ((vm.task.timings[vm.rowIndx].time) - (vm.day.time)));
			vm.day.date = convertToDateString(vm.day.date);
			vm.task.timings[vm.rowIndx] = vm.day;
			allTimings[vm.rowIndx] = vm.day;
			emptySelectedDateFileds();
		}
		
		//function invoked for adding time spent
		//manipulates total time 
		//checks if date is already avaliable and adds time accordingly
		function addTimeSpent() {
			vm.task.totalTime += vm.day.time;
			var dateIndex = ifDateExists(vm.day.date);
			var dateObj=vm.day.date;
			vm.day.date=convertToDateString(vm.day.date);
			if (dateIndex >= 0) {
				vm.task.timings[dateIndex].time += vm.day.time;
				allTimings[dateIndex].time = vm.task.timings[dateIndex].time;
			} else if(vm.lastWeek){
				if(isDay_lastWeek(dateObj)){
					vm.task.timings.push(vm.day);
				}
				allTimings.push(vm.day);
			} else {
				vm.task.timings.push(vm.day);
				allTimings.push(vm.day);
			}
			emptySelectedDateFileds();
		};
		
		//for emptying the form fields 		
		function emptySelectedDateFileds() {
			vm.day = {};
			vm.add = true;
			vm.dateSelected = false;
		}
		
		//function invoked for deleting time spent
		//manipulates total time 
		function deleteSelectedDateFields() {
			vm.task.timings.splice(vm.rowIndx, 1);
			allTimings.splice(vm.rowIndx, 1);
			vm.task.totalTime -= vm.day.time;
			emptySelectedDateFileds();
		}
		
		//function invoked for timeSpent_last7Days
		//checks date difference and shows data in table accordingly 
		function timeSpent_last7Days(lastWeek) {
			if (lastWeek) {
				vm.task.timings = vm.task.timings.filter(function (timing) {
					var then = convertToDateObj(timing.date);
					return isDay_lastWeek(then);
				});
			} else {
				vm.task.timings = allTimings;
			}
		}
		
		//to check if the date is among last one week
		function isDay_lastWeek(day){
			var now = new Date();
			if (Math.round((now - day) / (24 * 60 * 60 * 1000)) < 8) {
				return true;
			}
		}
		
		//function invoked for saving edited tasks to the db
		//JSON parsed for cloning/function removal from tak Object
		function saveTask() {
			vm.task.timings = allTimings;
			var task = JSON.parse(JSON.stringify(vm.task));
			taskDo.service.saveTask(task).then(function (resp) {
				$state.go("allTasks", {});
			});
		}
		
		//function invoked for checking if date already exists in the table
		function ifDateExists(day) {
			var retInd = -1;
			vm.task.timings.forEach(function(currentVal,index){
				if(currentVal.date===day){
					retInd = index;
				} 
			});
			return retInd;
		};
		
		//function invoked for converting dateObj to Date string
		function convertToDateString(date) {
			return new Date(date).toDateString();
		}
		
		//function invoked for converting other date format to Date Object
		function convertToDateObj(date) {
			return new Date(date);
		}
	};
});