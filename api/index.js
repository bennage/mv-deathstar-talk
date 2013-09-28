// Front end for our ponies API

var store = require('./store');

exports.list = function(req, res) {
  var ponies = store.list();
  res.send(ponies);
};

exports.get = function(req, res) {
  var id = +(req.params.id);
  var pony = store.getById(id);
  if (pony !== null) {
    res.send(pony);
  }
  res.send(404, 'No such animated equine');
};

exports.put = function(req, res) {
  var updates = req.body;
  console.log(updates);
  if (!updates.name) {
    res.send(400, {
      name: 'Every pony must have a name.'
    });
  } else {
    res.send(200);
  }
};