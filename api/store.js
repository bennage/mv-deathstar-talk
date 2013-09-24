// Our actual data store

function makePony(id, name, type, color) {
  return {
    id: id,
    name: name,
    type: type,
    color: color
  };
}

var ponies = [
  makePony(1, 'Twilight Sparkle', 'alicorn', '#C7A6CE'),
  makePony(2, 'Rainbow Dash', 'pegasus', '#9EDBF9'),
  makePony(3, 'Applejack', 'earth pony', '#FDBC60'),
  makePony(4, 'Fluttershy', 'pegasus', '#FFF798'),
  makePony(5, 'Rarity', 'unicorn', '#EAEFF2'),
  makePony(6, 'Pinkie Pie', 'earth pony', '#E8ADCB')
];

exports.list = function () {
  return ponies;
};

exports.getById = function (id) {
  var found = ponies.filter(function (p) { return p.id === id; });
  if (found.length > 0) {
    return found[0];
  }
  return null;
};
