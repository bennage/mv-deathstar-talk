$(function() {
	var root = $('#root');

	$.ajax({
		url: '/api/list',
		type: 'GET',
		dataType: 'json',
		success: function(response) {

			var ul = $('<ul></ul>')
				.appendTo(root);

			response.items.forEach(function(item) {
				var li = $('<li></li>')
					.appendTo(ul);
				var a = $('<a></a>')
					.text(item.name)
					.attr('href', '#/' + item.id)
					.appendTo(li);
			});
		},
		error: function() {
			alert('something went wrong');
		}
	});

});