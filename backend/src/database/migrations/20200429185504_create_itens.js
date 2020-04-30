
exports.up = function(knex) {
   return knex.schema.createTable('items', (table) => {
       table.increments('item_id').primary();
       table.string('item_name').notNullable();
       table.date('data').defaultTo(knex.fn.now());
       table.string('name').notNullable();
       table.string('whatsapp', 11).notNullable();
       table.integer('User_id').unsigned().notNullable();

       table.foreign('User_id').references('user_id').inTable('users');
   });
};

exports.down = function(knex) {
    return knex.schema.dropTable('items')
};
