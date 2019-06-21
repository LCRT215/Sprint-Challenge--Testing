const db = require("../data/dbConfig.js");

module.exports = {
  get,
  add
};

function get() {
  return db("games");
}

function add(game) {
  return db("games")
    .insert(game, "id")
    .then(ids => {
      return db("games")
        .where({ id: ids[0] })
        .first();
    });
}
