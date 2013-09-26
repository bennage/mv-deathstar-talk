$(function() {
	var root = $('#root');

	window.addEventListener('hashchange', handleRoute);

	handleRoute();

	function handleRoute() {
		var route = (window.location.hash) ? window.location.hash.replace('#/', '') : '';

		root.html('<div>loading</div>');

		if (route.match(/\d+/) === null) {
			myApp.renderList(root);
		} else {
			myApp.renderDetail(root, route)
		};
	}

});