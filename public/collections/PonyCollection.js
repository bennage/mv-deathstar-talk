define(['models/pony'], function (Pony) {
  var PonyCollection = Backbone.Collection.extend({
    model: Pony,
    url: '/api/pony'
  });

  return PonyCollection;
});
