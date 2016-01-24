/*
	Unit test suite for addTask.controller
*/
define(['angular', 'angular-mock'], function () {
	describe('Controller:addTaskCtrl --> designed for adding tasks into the application', function () {

		var _rootScope,_scope, _state, _taskDo, _q, _addTaskCtrl, _deferred;

		var mockTaskReturn = {
			"completed": true,
			"title": "mock",
			"totalTime": 0,
			"id": 10
		};
		
		//Load the app and mock dependencies
		beforeEach(function () {
			module('app');
			_taskDo = { service: jasmine.createSpyObj('service', ['addTask']) };
		});
		
		//Create controller for the test cases
		beforeEach(inject(
			function ($rootScope, $controller, $q, _$state_) {
				_q = $q;
				_rootScope=$rootScope;
				_scope = _rootScope.$new();
				_state = _$state_;
				_deferred=_q.defer();
				_taskDo.service.addTask.andReturn(_deferred.promise);
				_addTaskCtrl = $controller('addTaskCtrl', {
					"$scope": _scope,
					"taskDo": _taskDo,
					"$state": _state
				});
			}));
		
		
		/* Test if _addTaskCtrl is instantiated */
		it('should create addTaskCtrl', function () {
			expect(_addTaskCtrl).toBeDefined();
		});

		it('should assign completed as false', function () {
			expect(_addTaskCtrl.completed).toBe(false);
			expect(_addTaskCtrl.completed).not.toBe(true);
		});

		describe('addTaskCtrl addTask() function', function () {

			it('should set addTask function to be defined and !null', function () {
				expect(_addTaskCtrl.addTask).toBeDefined();
				expect(_addTaskCtrl.addTask).not.toBeNull();
			});

			it('should set totalTime value to 0 when task is added', function () {
				_addTaskCtrl.addTask();
				expect(_addTaskCtrl.totalTime).toBe(0);
			});

			it("should call the taskDo.service.addTask(vm) method when addTask() is invoked", function () {
				_addTaskCtrl.addTask();
				expect(_taskDo.service.addTask).toHaveBeenCalled();
			});

			it("should call the taskDo.service.addTask(vm) method with specified Args when addTask() is invoked", function () {
				_addTaskCtrl.addTask();
				expect(_taskDo.service.addTask).toHaveBeenCalledWith(_addTaskCtrl);
			});

//			it("taskDo.service.addTask(vm) redirects", function () {
//				console.log("_state",_taskDo.service.addTask);
//				spyOn(_state, 'go');
//				_addTaskCtrl.addTask();
//				_deferred.resolve(mockTaskReturn);
//				_rootScope.$apply();
//				expect(_state.go).toHaveBeenCalled();
//			});
		});
	});
});
