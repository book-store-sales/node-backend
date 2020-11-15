exports.up = function (knex) {
    return knex.schema.createTable("books", (tbl) => {
      tbl.increments(); //id
      tbl.integer("ibsn", 128).notNullable().unique();
      tbl.text("title", 128).notNullable(); //name
      tbl.text('description',512).notNullable();
      tbl.integer("price", 3).notNullable(); // price
      tbl.text("image",128 ).notNullable(); //img

    });
  };
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("books");
  };

