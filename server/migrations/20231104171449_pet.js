/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pet', table =>{
    table.string('petID').primary()
    table.string('type')
    table.string('varian')
    table.date('DOB')
    table.string('petName')
    table.string('petGender')
    table.string("userID").unsigned().references("userID").inTable("user")
    table.timestamp("created_at")
    table.timestamp("updated_at")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("pet")
};
