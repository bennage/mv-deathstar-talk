define(['knockout'], function(ko) {

	return {
		items: ko.observableArray([]),

		activate: function() {
			var self = this;

			return $.ajax({
				url: '/api/list',
				type: 'GET',
				dataType: 'json',
				success: function(data) {
					self.items(data.items);
				},
				error: function() {
					alert('something went wrong');
				}
			});
		}
	};
});