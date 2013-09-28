define(['text!templates/list.hbs'], function(templateText) {

	var template;

	function applyTemplate(data) {
		if (!template) template = Handlebars.compile(templateText);
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