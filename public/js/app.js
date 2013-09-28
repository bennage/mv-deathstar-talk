requirejs.config({
	baseUrl: 'js',
	paths: {
		collections: '/collections',
		models: '/models',
		templates: '/templates',
		views: '/views'
	}
});

require(['collections/PonyCollection', 'views/detail', 'views/list', 'views/edit'],
	function(PonyCollection, DetailView, ListView, EditView) {

	window.ponies = new PonyCollection();
	ponies.fetch({ success: initializeApp, error: function () {
		alert("Oh noes - couldn't download ponies!");
	}});

	function initializeApp () {
		$(function () {
			var root = $('#root');

			window.addEventListener('hashchange', handleRoute);

			var routes = [
				[/edit\/(\d+)/, function (root, id) {
					var pony = ponies.findWhere({id: +id});
					new EditView({
						el: root,
						model: pony
					}).render();
				}],
				[/(\d+)/, function (root, id) {
					var pony = ponies.findWhere({id: +id});
					new DetailView({
						el: root,
						model: pony
					}).render();
				}],
				[/.*/, function (root) {
					new ListView({
						el: root,
						collection: ponies
					}).render();
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
		})
	}
});
