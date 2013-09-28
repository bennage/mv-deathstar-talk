define(['views/list', 'views/detail', 'views/edit'], function (ListView, DetailView, EditView) {

  var PonyRouter = Backbone.Router.extend({

    initialize: function (options) {
      this.root = root
    },

    routes: {
      "" : "list",
      ":id": "detail",
      "edit/:id" : "edit"
    },

    list: function () {
      new ListView({el: this.root, collection: ponies}).render();
    },

    detail: function (id) {
      new DetailView({el: this.root, model: ponies.get(id)}).render();
    },

    edit: function (id) {
      new EditView({el: this.root, model: ponies.get(id)}).render();
    }
  });

  return PonyRouter;
});