define(['models/pony'], function (Pony) {
  var PonyCollection = Backbone.Collection.extend({
    model: Pony
  });

  return PonyCollection;
});
