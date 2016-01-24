define(['angular', 'angular-mock'], function () {
	describe('Controller:editTaskCtrl -->for Detailed Viewing/editing of an existing Task', function () {

		var _rootScope, _scope, _state, _taskDo, _q, _editTasksCtrl, _deferred,_service;
		
		var timeSplitUpConfig = [
			{ title: "Date", map: "date" },
			{ title: "Time Spent", map: "time" }
		];
		var mockRowData={
			date: "Thu May 14 2015",
			time: 6
		}
		
		//Load the app and mock dependencies
		beforeEach(function () {
			module('app');
		});
		
		//Create controller for the test cases
		beforeEach(inject(
			function ($rootScope, $controller, $q, $state, _taskDo_) {
				_q = $q;
				_deferred = _q.defer();
				_taskDo = _taskDo_;
				_service = _taskDo.service;
				_state = $state;
				_scope = $rootScope.$new();
				_editTasksCtrl = $controller('editTaskCtrl', {
					"$scope": _scope,
					"taskDo": _taskDo,
					"$state": _state
				});
				_editTasksCtrl.day = {};
				_editTasksCtrl.add = true;
				_editTasksCtrl.search = true;
			}));
		
		it('should create editTasksCtrl', function () {
			expect(_editTasksCtrl).toBeDefined();
		});
		
		it('day should be defined', function () {
			expect(_editTasksCtrl.day).toEqual(jasmine.any(Object));
		});
		
		it('add/search should be true', function () {
			expect(_editTasksCtrl.add).toBeTruthy();
			expect(_editTasksCtrl.search).toBeTruthy();
		});
		
		it('table configuration should be same as declared',function () {
			expect(_editTasksCtrl.timeSplitUpConfig).toEqual(timeSplitUpConfig)
		})
		
		describe('_editTasksCtrl vm.click(row) function', function () {
			
			it('should set addTask function to be defined and !null', function () {
				expect(_editTasksCtrl.click).toBeDefined();
				expect(_editTasksCtrl.click).not.toBeNull();
			});
			
			it('vm.click(row) should set the values as defined', function () {
				_editTasksCtrl.click(mockRowData);
				expect(_editTasksCtrl.dateSelected).toBeTruthy();
				var sampleDate=new Date(mockRowData.date);
				expect(_editTasksCtrl.day.date).toEqual(sampleDate);
				expect(_editTasksCtrl.add).toBeFalsy();
				expect(_editTasksCtrl.day.time).toBe(mockRowData.time);
			});
			
			it('click fn should be specfic arguments', function () {
				spyOn(_editTasksCtrl,"click");
				_editTasksCtrl.click(mockRowData);
				expect(_editTasksCtrl.click).toHaveBeenCalledWith(mockRowData);
			});
			
			it('index of fn ought to be called', function () {
				var timingsObj=_editTasksCtrl.task.timings;
				console.log("timingsObj",timingsObj.indexOf);
				spyOn(timingsObj,"indexOf");	
				_editTasksCtrl.click(mockRowData);		
				expect(timingsObj.indexOf).toHaveBeenCalled();	
			});
			
		});	
	});
});
