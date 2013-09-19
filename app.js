$(function() {
	var root = $('#root');

	window.addEventListener('hashchange', handleRoute)

	function handleRoute() {
		var route = (window.location.hash) 
			? window.location.hash.replace('#/', '') 
			: '';
		
		if (!isNaN(route)) renderDetail(route);
	}

	function renderDetail(id) {
		root.html('');

		$.ajax({
			url: '/api/' + id + '.json',
			type: 'GET',
			dataType: 'json',
			success: function(data) {

				var dl = $('<dl></dl>')
					.appendTo(root);

				Object.keys(data).forEach(function(property) {
					$('<dt>' + property + '</dt>')
						.appendTo(dl);

					$('<dd>' + data[property] + '</dd>')
						.appendTo(dl);
				});
			},
			error: function() {
				alert('I broke :-(')
			}
		});
	}

	$.ajax({
		url: '/api/list.json',
		type: 'GET',
		dataType: 'json',
		success: function(data) {

			var ul = $('<ul></ul>')
				.appendTo(root);

			data.forEach(function(item) {
				var li = $('<li></li>')
					.appendTo(ul);
				var a = $('<a></a>')
					.text(item.name)
					.attr('href', '#/' + item.id)
					.appendTo(li);
			});
		},
		error: function() {
			alert('I broke :-(')
		}
	});
});