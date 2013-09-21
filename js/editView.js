define(function() {

	var template;

	function applyTemplate(data) {
		if (!template) template = Handlebars.compile($('#template-item-edit').text());
		return template(data);
	}

	function hasError(data) {
		return true;
	}

	function save(root, id) {
		var model = {};

		var formData = root.find('form').serializeArray();
		formData.forEach(function(pair) {
			model[pair.name] = pair.value;
		});

		model.id = id;

		$.ajax({
			url: '/api/post',
			type: 'GET', //TODO: make this into a POST after the server bits are done
			dataType: 'json',
			data: JSON.stringify(model),
			success: function(data, status, xhr) {

				if (hasError(xhr.status)) {

					Object.keys(data).forEach(function(property) {
						var field = $('input[name=' + property + ']');
						field.parent().parent().addClass('has-error');
						field.after('<span class="">' + data[property] + '</span>');
					});

				} else {
					// we're persited the data, go back to the read only view
					window.location.hash = '#/' + id;
				}
			},
			error: function() {

			}
		});
	}

	return function(root, id) {

		$.ajax({
			url: '/api/' + id + '.json',
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				var html = applyTemplate(data);
				root.html(html);

				$('#cancelBtn').on('click', function(evt) {
					window.location.hash = '#/' + id;
					evt.preventDefault();
				});

				$('#saveBtn').on('click', function(evt) {
					save(root, id);
					evt.preventDefault();
				});
			},
			error: function() {
				alert('I broke :-(');
			}
		});
	};

});