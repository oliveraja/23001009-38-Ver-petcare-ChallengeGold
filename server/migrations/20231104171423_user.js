/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user', table =>{
    table.string('userID').primary()
    table.string('name')
    table.string('address')
    table.date('DOB')
    table.string('phoneNumber')
    table.string('role')
    table.timestamp("created_at")
    table.timestamp("updated_at")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("user")
};
