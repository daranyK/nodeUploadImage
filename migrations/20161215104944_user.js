
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments();
    table.text('email').unique().notNullable();
    table.text('password').notNullable();
    table.datetime('date').notNullable();
    table.boolean('is_active').notNullable().defaultTo(true);
    table.integer('rating').notNullable().defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user');
};
