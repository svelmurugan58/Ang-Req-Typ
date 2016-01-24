define(['angular', 'angular-mock'], function() {
	describe('Factory:taskDo --> handles functionality related to taskDo', function () {
		var _httpBackend,_taskDo,_service;
		var root = "http://localhost:3000/tasks";
		
		var mock_addTask={
			"completed": true,
			"title": "task1"
			};
			
		var mockAllTask= [{
		    "completed": true,
		    "title": "task1",
		    "id": 2
		  },
		  {
		    "completed": false,
		    "title": "task2",
		    "id": 3,
			"timings": [],
			"totalTime": 0
		  }];
		
		// loading the app module
		beforeEach(module('app'));
		// injecting all the required service/providers/factories/ from the app module
		beforeEach(inject(function($rootScope,taskDo,$q,$httpBackend){
			_httpBackend=$httpBackend;
			_taskDo=taskDo;
			_service=_taskDo.service;
		}));
		
		it('expect _taskDo Factory to be defined',function(){
			expect(_taskDo).toBeDefined();
		});
		
		describe('Factory:taskDo --> getAllTasks Method',function(){
			it('expect getAllTasks method to be defined and !null',function(){
				expect(_service.getAllTasks).toBeDefined();
				expect(_service.getAllTasks).not.toBeNull();
			});
			
			it('expect _service.getAllTasks service Method to be called when invoked',function(){
				spyOn(_service, 'getAllTasks').andCallThrough();
				_service.getAllTasks();
	            //Test if the controller and service methods have been called
				expect(_service.getAllTasks).toHaveBeenCalled();
			});
			
			it('_service.getAllTasks Returns correct data',function(){
				// Mock the http response
	            _httpBackend.expectGET(root).respond(200, mockAllTask);
				spyOn(_service, 'getAllTasks').andCallThrough();
	            //Invoke the method
	            var getPromise = _service.getAllTasks();
	            getPromise.then(function(response){
	                expect(response.length).toBeDefined();
	                expect(response.length).toEqual(2);
					expect(response).toEqual(mockAllTask);
	            });
	            //Promise created -> should have invoked REST api, flush now
	            _httpBackend.flush();
			});
		});
		
		describe('Factory:taskDo --> saveTask Method',function(){
			it('expect saveTask method to be defined and !null',function(){
				expect(_service.saveTask).toBeDefined();
				expect(_service.saveTask).not.toBeNull();
			});
			
			it('expect _service.saveTask service Method to be called when invoked with appropriate data',function(){
				spyOn(_service, 'saveTask').andCallThrough();
				_service.saveTask(mockAllTask[1]);
	            //Test if the controller and service methods have been called
				expect(_service.saveTask).toHaveBeenCalled();
				expect(_service.saveTask).toHaveBeenCalledWith(mockAllTask[1]);
			});
			
			it('_service.saveTask Returns correct data',function(){
				// Mock the http response
	            _httpBackend.expectPUT(root+"/"+mockAllTask[1].id).respond(200, function(method, url, data){
	                return [200,mockAllTask[1], {}];
	            });
				spyOn(_service, 'getAllTasks').andCallThrough();
	            //Invoke the method
	            var getPromise = _service.saveTask(mockAllTask[1]);
	            getPromise.then(function(response){
	                expect(response).toBeDefined();
					expect(response).toEqual(mockAllTask[1]);
	            });
	            //Promise created -> should have invoked REST api, flush now
	            _httpBackend.flush();
			});
		});	
		
		
		describe('Factory:taskDo --> addTask Method',function(){
			it('expect addTask method to be defined and !null',function(){
				expect(_service.addTask).toBeDefined();
				expect(_service.addTask).not.toBeNull();
			});
			
			it('expect _service.addTask service Method to be called when invoked with appropriate data',function(){
				spyOn(_service, 'addTask').andCallThrough();
				_service.addTask(mock_addTask);
	            //Test if the controller and service methods have been called
				expect(_service.addTask).toHaveBeenCalled();
				expect(_service.addTask).toHaveBeenCalledWith(mock_addTask);
			});
			
			it('_service.addTask Returns correct data',function(){
				// Mock the http response
	            _httpBackend.expectPOST(root).respond(function(method, url, data){
					return [200,mockAllTask[0], {}];
	            });
				spyOn(_service, 'addTask').andCallThrough();
	            //Invoke the method
	            var getPromise = _service.addTask(mock_addTask);
	            getPromise.then(function(response){
	                expect(response).toBeDefined();
					expect(response).toEqual(mockAllTask[0]);
	            });
	            //Promise created -> should have invoked REST api, flush now
	            _httpBackend.flush();
			});
		});
		
		describe('Factory:taskDo --> setSelectedTask Method',function(){
			it('expect setSelectedTask method to be defined and !null',function(){
				expect(_service.setSelectedTask).toBeDefined();
				expect(_service.setSelectedTask).not.toBeNull();
			});
			
			it('expect setSelectedTask to be invoked',function(){
				spyOn(_service,"setSelectedTask");
				_service.setSelectedTask();
				expect(_service.setSelectedTask).toHaveBeenCalled();
			});
			
			it('expect setSelectedTask to be invoked with expected params',function(){
				spyOn(_service,"setSelectedTask");
				_service.setSelectedTask(mockAllTask[0]);
				expect(_service.setSelectedTask).toHaveBeenCalledWith(mockAllTask[0]);
			});
			
			it('expect setSelectedTask set params to _taskDo',function(){
				spyOn(_service,"setSelectedTask").andCallThrough();
				_service.setSelectedTask(mockAllTask[0]);
				expect(_taskDo.id).toBe(mockAllTask[0].id);
				expect(_taskDo.title).toBe(mockAllTask[0].title);
				expect(_taskDo.completed).toBe(mockAllTask[0].completed);
				expect(_taskDo.totalTime).toBe(mockAllTask[0].totalTime);
			});
		});
	});
});
