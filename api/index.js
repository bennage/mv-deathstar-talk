// Front end for our ponies API

var store = require('./store');

exports.list = function (req, res) {
  var ponies = store.list();
  res.send({ items:
    ponies.map(function (p) {
      return {
        id: p.id,
        name: p.name
      };
    })
  });
};
