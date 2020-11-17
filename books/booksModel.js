const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  insert,
  edit,
  remove,
};

function find() {
  return db("books");
}
function findById(id) {
  return db("books").where({ id }).first();
}
async function insert(book) {
  const [newItem] = await db("books").insert(book, "*");
  return newItem;
}
async function edit(id, changes) {
  const [changed] = await db("books").where({ id }).update(changes, "*");
  return changed;
}
function remove(id) {
  return db("books").where({ id }).del();
}