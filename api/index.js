// Front end for our ponies API

var store = require('./store');

exports.list = function(req, res) {
  var ponies = store.list();
  res.send({
    items: ponies.map(function(p) {
      return {
        id: p.id,
        name: p.name
      };
    })
  });
};

exports.get = function(req, res) {
  var id = +(req.params.id);
  var pony = store.getById(id);
  if (pony !== null) {
    res.send(pony);
  }
  res.send(404, 'No such animated equine');
};

exports.post = function(req, res) {
  var model = req.body;
  console.log(model.name);
  if (!model.name) {
    res.send(400, {
      name: 'Everypony must have a name.'
    });
  } else {
    res.send(200, {});
  }

};