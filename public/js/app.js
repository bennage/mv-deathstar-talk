requirejs.config({
	baseUrl: 'js',
	paths: {
		collections: '/collections',
		models: '/models',
		templates: '/templates',
		views: '/views'
	}
});

require(['collections/PonyCollection', 'models/pony', 'detailView', 'views/list', 'editView'],
	function(PonyCollection, Pony, detailView, ListView, editView) {

	var model = new PonyCollection([
		{id: 1, name: 'Pony 1'},
		{id: 2, name: 'Pony 2'}
	]);

	$(function() {
		var root = $('#root');

		window.addEventListener('hashchange', handleRoute);

		var routes = [
			[/edit\/(\d+)/, editView],
			[/(\d+)/, detailView],
			[/.*/, function (root) {
				var view = new ListView({
					el: root,
					collection: model
				});
				view.render();
			}]
		];

		handleRoute();

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
	});
});