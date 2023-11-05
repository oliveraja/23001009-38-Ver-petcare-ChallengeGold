/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('paymentMethod', table =>{
        table.increments('paymentID').primary()
        table.string('methodType')
        table.timestamp("created_at")
        table.timestamp("updated_at")
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("paymentMethod")
};
