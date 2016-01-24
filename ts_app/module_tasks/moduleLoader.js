
/*
 for declaring/loading all the module related controllers/service/factory into one single angular module
*/
define(['./service_tasks/tasks.service', './controllers/tasks.controller',
	'./controllers/addTask.controller', './controllers/editTask.controller'], function () { 'use strict'; });
