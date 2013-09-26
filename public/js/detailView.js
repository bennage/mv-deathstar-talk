define(function() {

	var template;

	function applyTemplate(data) {
		if (!template) template = Handlebars.compile($('#template-item-detail').text());
		return template(data);
	}

	return function(root, id) {

		$.ajax({
			url: '/api/' + id,
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