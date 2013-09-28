define(['text!templates/details.hbs'], function (templateText) {
  var DetailView = Backbone.View.extend({
    template: Handlebars.compile(templateText),

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
    }
  });

  return DetailView;
});
