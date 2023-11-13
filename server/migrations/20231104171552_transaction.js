/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('transaction', table =>{
      table.string('transactionID').primary()
      table.string("userId").unsigned().references("userID").inTable("user")
      table.string("serviceID").unsigned().references("serviceID").inTable("service")
      table.date('tanggalTransaksi')
      table.string("paymentID").unsigned().references("paymentID").inTable("paymentMethod").onDelete('CASCADE')
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
