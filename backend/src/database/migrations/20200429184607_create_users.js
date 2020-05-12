
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.string('user_id').primary();
        table.string('name').notNullable();
        table.date('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
   return knex.schema.dropTable('users');
};
