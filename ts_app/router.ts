import app = require('app');

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('', "/addTask");
		
	// for loading the main layout(layout.html) as abstract layout
	$stateProvider.state("layout", {
		'abstract': true,
		url: '',
		templateUrl: "partials/layouts/layout.html"
	});
		
	//for settingUp parent Layout with header and footer to it
	// so that it will not be loaded every time the route changes
	$stateProvider.state('tasksLayout', {
		url: "",
		parent: "layout",
		views: {
			"header@layout": { templateUrl: "partials/layouts/header_tasks.html" },
			"footer@layout": { templateUrl: "partials/layouts/footer_tasks.html" }
		},
	});

	$urlRouterProvider.otherwise('/addTask');
});