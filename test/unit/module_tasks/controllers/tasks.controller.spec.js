define(['angular', 'angular-mock'], function () {
	describe('Controller:tasksCtrl -->for Viewing all the existing Tasks', function () {

		var _rootScope, _scope, _state, _taskDo, _q, _tasksCtrl, _deferred,_service;

		var _mockTasksList = [
			{
				"completed": true,
				"title": "task1",
				"id": 2
			},
			{
				"completed": false,
				"title": "asd",
				"id": 3
			}
		];
		
		var _mockTaskDo = {
			title: "",
			completed: false,
			timings: [],
			totalTime: 0,
			id: 0,
			service:{
				setSelectedTask:function (task,name) {
					console.log("came: "+name+"",task);
					_mockTaskDo.id = task.id;
					_mockTaskDo.title = task.title;
					_mockTaskDo.completed = task.completed;
					_mockTaskDo.timings = task.timings || new Array();
					_mockTaskDo.totalTime = task.totalTime;
				}
			}
		};
		
		var mockTableConfiguraiton=[
			{ title: "Title", type: "string", sort: true, map: "title" },
			{ title: "Completed", type: "string", sort: true, map: "completed" },
			{ title: "Total Time", type: "string", sort: true, map: "totalTime" }
		];
		//Load the app and mock dependencies
		beforeEach(function () {
			module('app');
		});
		
		//Create controller for the test cases
		beforeEach(inject(
			function ($rootScope, $controller, $q, $state, _taskDo_) {
				_q = $q;
				_deferred = _q.defer();
				//_taskDo = _taskDo_;
				_taskDo = _mockTaskDo;
				_service = _taskDo.service;
				_state = $state;
				_scope = $rootScope.$new();
				_tasksCtrl = $controller('tasksCtrl', {
					"$scope": _scope,
					"taskDo": _taskDo,
					"$state": _state,
					"tasksList":_mockTasksList
				});
			}));
		
		it('should create tasksCtrl', function () {
			expect(_tasksCtrl).toBeDefined();
		});
		
		it('should assign tasksList as tasksList for the table to load', function () {
			expect(_tasksCtrl.tasksList).toEqual(_mockTasksList);
		});
		
		it('table configuration should be same as declared',function () {
			expect(_tasksCtrl.tableConfiguraiton).toEqual(mockTableConfiguraiton)
		})
		
		describe('tasksCtrl vm.click(row) function', function () {

			it('should set addTask function to be defined and !null', function () {
				expect(_tasksCtrl.click).toBeDefined();
				expect(_tasksCtrl.click).not.toBeNull();
			});
			
			it('vm.click(row) should invoke taskDo.service.setSelectedTask(row)', function () {
				spyOn(_service,"setSelectedTask");
				_tasksCtrl.click(_mockTasksList[0]);
				expect(_service.setSelectedTask).toHaveBeenCalled();
			});
			
			it('click fn should invoke taskDo.service.setSelectedTask fn with specfic arguments', function () {
				spyOn(_service,"setSelectedTask");
				_tasksCtrl.click(_mockTasksList[0]);
				expect(_service.setSelectedTask).toHaveBeenCalledWith(_mockTasksList[0]);
			});
			
			it('click(row) fn should redirect to taskDetail screen', function () {
				spyOn(_state,"go");
				_tasksCtrl.click(_mockTasksList[0]);				
				expect(_state.go).toHaveBeenCalled();
				expect(_state.go).toHaveBeenCalledWith("taskDetail",_mockTasksList[0]);		
			});
			
		});	
	});
});
