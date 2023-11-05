/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('transaction', table =>{
        table.increments('transactionID').primary()
        table.integer("userId").unsigned().references("userID").inTable("user")
        table.integer("serviceID").unsigned().references("serviceID").inTable("service")
        table.date('tanggalTransaksi')
        table.integer("paymentID").unsigned().references("paymentID").inTable("paymentMethod")
        table.timestamp("created_at")
        table.timestamp("updated_at")
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("transaction")
};
