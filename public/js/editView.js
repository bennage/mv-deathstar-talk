define(['knockout', 'plugins/router'], function(ko, router) {

	return {
		model: ko.observable(),

		cancel: function() {
			router.navigateBack();
		},

		save: function() {
			var self = this;

			$('.has-error').removeClass('has-error');
			$('.validation-error').remove();

			$.ajax({
				url: '/api/post',
				type: 'POST',
				dataType: 'json',
				data: self.model(),
				success: function(data, status, xhr) {
					router.navigateBack();
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
		},

		activate: function(id) {

			var self = this;

			return $.ajax({
				url: '/api/' + id,
				type: 'GET',
				dataType: 'json',
				success: function(data) {
					self.model(data);
				},
				error: function() {
					alert('something went wrong');
				}
			});
		}
	};
});