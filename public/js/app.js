$(function() {
	var root = $('#root');

	var templateDetail = Handlebars.compile($('#template-item-detail').text());
	var templateList = Handlebars.compile($('#template-item-list').text());

	window.addEventListener('hashchange', handleRoute);

	handleRoute();

	function handleRoute() {
		var route = (window.location.hash) ? window.location.hash.replace('#/', '') : '';

		root.html('<div>loading</div>');

		if (route.match(/\d+/) === null) {
			renderList();
		} else {
			renderDetail(route);
		}
	}

	function renderDetail(id) {

		$.ajax({
			url: '/api/' + id,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				var html = templateDetail(data);
				root.html(html);
			},
			error: function() {
				alert('something went wrong');
			}
		});
	}

	function renderList() {

		$.ajax({
			url: '/api/list',
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				var html = templateList(data);
				root.html(html);
			},
			error: function() {
				alert('something went wrong');
			}
		});
	}

});