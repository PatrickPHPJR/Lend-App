
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('user_id').primary();
        table.string('name').notNullable();
    });
};

exports.down = function(knex) {
   return knex.schema.dropTable('users');
};
