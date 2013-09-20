(function(app) {

	app.renderList = function(root) {

		$.ajax({
			url: '/api/list.json',
			type: 'GET',
			dataType: 'json',
			success: function(data) {

				var template = Handlebars.compile($('#template-item-list').text());
				var html = template(data);
				root.html(html);
			},
			error: function() {
				alert('I broke :-(')
			}
		});
	};

})(this.myApp = this.myApp || {});