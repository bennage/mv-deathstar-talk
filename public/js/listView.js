var ListCtrl = function($scope, $http){
	$scope.items = $http.get('/api/list');
};