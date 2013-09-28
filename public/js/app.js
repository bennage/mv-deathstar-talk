var ngPony = angular.module("ngPony", []);

ngPony.config(function($routeProvider) {

	$routeProvider
		.when("/", {
			templateUrl: "templates/list_template.html",
			controller: "ListCtrl"
		})
		.when("/edit/:id", {
			templateUrl: "templates/edit_template.html",
			controller: "EditCtrl"
		})
		.when("/:id", {
			templateUrl: "templates/detail_template.html",
			controller: "DetailCtrl"
		})
		.otherwise({
			template: "<h1>Not Found</h1>"
		});
});

ngPony.controller("ListCtrl", function($scope, $http) {

	// a better choice might be to use ngResource
	$http.get('/api/list')
		.success(function(response) {
			$scope.items = response.items;
		});
});

ngPony.controller("DetailCtrl", function($scope, $http, $routeParams) {
	$http.get('/api/' + $routeParams.id)
		.success(function(data) {
			$scope.model = data;
		});
});

ngPony.controller("EditCtrl", function($scope, $http, $routeParams) {

	$http
		.get('/api/' + $routeParams.id)
		.success(function(data) {
			$scope.model = data;
		});

	$scope.cancel = function() {
		// is there an ng way to do this?
		window.history.back();
	};

	$scope.save = function() {
		$http
			.post('/api/post', $scope.model)
			.then(
				function() {
					window.history.back();
				},
				function() {
					// custom validation
					debugger;
				});
	};
});