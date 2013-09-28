define(['collections/PonyCollection', 'text!templates/list.hbs'], function (PonyCollection, templateText) {
  var ListView = Backbone.View.extend({

    template: Handlebars.compile(templateText),

    render: function () {
      var model = { items: this.collection.map(function (m) { return m.toJSON(); }) };

      this.$el.html(this.template(model));
    }
  });

  return ListView;
});
