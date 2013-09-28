define(['knockout'], function(ko) {

	return {
		model: ko.observable(),
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