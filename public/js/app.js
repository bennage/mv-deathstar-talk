$(function() {
	var root = $('#root');

	var templateSource = $('#template-item-list').text();
	var template = Handlebars.compile(templateSource);

	$.ajax({
		url: '/api/list',
		type: 'GET',
		dataType: 'json',
		success: function(data) {
			var html = template(data);
			root.html(html);
		},
		error: function() {
			alert('something went wrong');
		}
	});

});