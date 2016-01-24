define(['angular', 'angular-mock'], function() {
	describe('Router:module_task --> route specs of module_task router', function () {
		var rootScope, routerStateObj, myServiceMock,_q,_service;
		beforeEach(module("app"));
		
		beforeEach(inject(function($rootScope, $state, $templateCache,$q,_taskDo_) {
			rootScope = $rootScope;
			routerStateObj = $state;
			_service=_taskDo_.service;
		
			$templateCache .put("partials/layouts/layout.html","");
			$templateCache .put("partials/layouts/footer_tasks.html","");
			$templateCache .put("partials/layouts/header_tasks.html","");
				
			$templateCache .put("partials/tasks/tasksList.html", '');
			$templateCache .put("partials/tasks/addTask.html", '');
			$templateCache .put("partials/tasks/editTask.html", '');
		}));
		
		describe('route specs related to allTasks', function () {
			it('should respond to URL allTasks', function() {
				expect(routerStateObj.href("allTasks")).toEqual('#/allTasks');
			});
			
			it('screen_Trasition:should Transition to allTasks screen', function() {
				spyOn(_service,'getAllTasks');
				routerStateObj.go("allTasks");
				rootScope.$apply();
				expect(routerStateObj.current.name).toBe("allTasks");
				expect(_service.getAllTasks).toHaveBeenCalled();
				expect(routerStateObj.current.url).toEqual("/allTasks");
			});
		});
		
		describe('route specs related to addTask', function () {
			it('should respond to URL addTask', function() {
				expect(routerStateObj.href("addTask")).toEqual('#/addTask');
			});
			
			it('screen_Trasition:should Transition to addTask screen', function() {
				routerStateObj.go("taskDetail");
				routerStateObj.go("addTask");
				rootScope.$apply();
				console.log("routerStateObj.current.url",routerStateObj.current.url);
				expect(routerStateObj.current.url).toEqual("/addTask");
			});
		});
			
		describe('route specs related to taskDetail', function () {
			it('should respond to URL taskDetail', function() {
				expect(routerStateObj.href("taskDetail")).toEqual('#/taskDetail/');
			});
			
			it('screen_Trasition:should Transition to taskDetail screen', function() {
				var mockTask={title:"sample",id:1,completed:false,totalTime:15};
				routerStateObj.go("taskDetail",mockTask);
				rootScope.$apply();
				expect(routerStateObj.current.name).toBe("taskDetail");
			});
			
			it('screen_Trasition:url change on route Change with task detail in it', function() {
				var mockTask={title:"sample",id:1,completed:false,totalTime:15};
				routerStateObj.go("taskDetail",mockTask);
				rootScope.$apply();
				expect(routerStateObj.params).toEqual({title: "sample"});
			});
			
			it('screen_Trasition:should Transition to taskDetail screen with SpecficDetails', function() {
				spyOn(routerStateObj,'go');
				var mockTask={title:"sample",id:1,completed:false,totalTime:15};
				routerStateObj.go("taskDetail",mockTask);
				expect(routerStateObj.go).toHaveBeenCalledWith("taskDetail",mockTask);
			});
		});
	});
});
