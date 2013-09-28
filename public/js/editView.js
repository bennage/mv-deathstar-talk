define(['text!templates/edit.hbs'], function(templateText) {

	var template;

	function applyTemplate(data) {
		if (!template) template = Handlebars.compile(templateText);
		return template(data);
	}

	function save(root, id) {
		var model = {};

		var formData = root.find('form').serializeArray();
		formData.forEach(function(pair) {
			model[pair.name] = pair.value;
		});

		model.id = id;

		$('.has-error').removeClass('has-error');
		$('.validation-error').remove();

		$.ajax({
			url: '/api/post',
			type: 'POST',
			dataType: 'json',
			data: model,
			success: function(data, status, xhr) {
				// we're persited the data, go back to the read only view
				window.location.hash = '#/' + id;
			},
			error: function(xhr, status, statusMessage) {
				// a validation failure
				if (xhr.status == 400) {
					var response = xhr.responseJSON;
					Object.keys(response).forEach(function(property) {
						var field = $('input[name=' + property + ']');
						field.parent().parent().addClass('has-error');
						field.after('<span class="validation-error">' + response[property] + '</span>');
					});
				} else {
					// who knows what happened?
					debugger;
				}
			}
		});
	}

	return function(root, id) {

		$.ajax({
			url: '/api/' + id,
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
				alert('something went wrong');
			}
		});
	};

});