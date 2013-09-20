(function(app) {

	app.renderDetail = function(root, id) {

		$.ajax({
			url: '/api/' + id + '.json',
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				var template = Handlebars.compile($('#template-item-detail').text());
				var html = template(data);
				root.html(html);
			},
			error: function() {
				alert('I broke :-(')
			}
		});
	};

})(this.myApp = this.myApp || {});