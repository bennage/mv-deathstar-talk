$(function() {
	var root = $('#root');

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