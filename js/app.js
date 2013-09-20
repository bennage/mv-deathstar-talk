define(['detailView', 'listView'], function(detailView, listView) {

	$(function() {

		var root = $('#root');

		window.addEventListener('hashchange', handleRoute);

		handleRoute();

		function handleRoute() {
			var route = (window.location.hash) ? window.location.hash.replace('#/', '') : '';

			root.html('');

			if (route.match(/\d+/) === null) {
				listView(root);
			} else {
				detailView(root, route)
			};
		}

	});

});