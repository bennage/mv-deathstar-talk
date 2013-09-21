define(['detailView', 'listView'], function(detailView, listView) {

	function editDetail() {
		alert('!!!');
	}

	$(function() {

		var root = $('#root');

		window.addEventListener('hashchange', handleRoute);

		var routes = [
			[/edit\/(\d+)/, editDetail],
			[/(\d+)/, detailView],
			[/.*/, listView]
		];

		function handleRoute() {
			var route = (window.location.hash) ? window.location.hash.replace('#/', '') : '';

			root.html('');

			for (var i = 0; i < routes.length; i++) {
				var r = routes[i];
				var regex = r[0];
				var handler = r[1];
				var m = route.match(regex);
				if (m !== null) {
					handler.apply(null, [root].concat(m.slice(1)));
					return;
				}
			}

		}

		handleRoute();

	});

});