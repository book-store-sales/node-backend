const db = require("../data/db-config");

module.exports = {
  find,
//   findById,
//   insert,
//   edit,
//   remove,
};

function find() {
    return db("books");
}