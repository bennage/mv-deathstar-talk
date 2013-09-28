requirejs.config({
	baseUrl: 'js',
	paths: {
		collections: '/collections',
		models: '/models',
		templates: '/templates',
		views: '/views'
	}
});

require(['collections/PonyCollection', 'router'],
	function(PonyCollection, PonyRouter) {

	window.ponies = new PonyCollection();
	ponies.fetch({ success: initializeApp, error: function () {
		alert("Oh noes - couldn't download ponies!");
	}});

	function initializeApp () {
		$(function () {
			var root = $('#root');

			router = new PonyRouter({root: root});
			Backbone.history.start();
		});
	}
});
