define(['app'], function() {
	//define specs
	var specs = [], unit_tests_path = '../test/unit/';
	 specs.push(unit_tests_path + 'module_tasks/controllers/addTask.controller.spec.js');
	 specs.push(unit_tests_path + 'module_tasks/controllers/editTask.controller.spec.js');
	 specs.push(unit_tests_path + 'module_tasks/controllers/tasks.controller.spec.js');
	 specs.push(unit_tests_path + 'module_tasks/services/tasks.service.spec.js');
	 specs.push(unit_tests_path + 'module_tasks/tasks.router.spec.js');
	return specs;
});
