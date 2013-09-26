define(function(app) {

	var template;

	function applyTemplate(data) {
		if (!template) template = Handlebars.compile($('#template-item-list').text());
		return template(data);
	}

	return function(root) {

		$.ajax({
			url: '/api/list',
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				var html = applyTemplate(data);
				root.html(html);
			},
			error: function() {
				alert('something went wrong');
			}
		});
	};

});