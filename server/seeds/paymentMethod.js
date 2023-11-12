/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const currentDate = new Date()
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('paymentMethod').del()
  await knex('paymentMethod').insert([
    { methodType: 'QRIS', created_at: currentDate, updated_at: currentDate },
    { methodType: 'Transfer Bank', created_at: currentDate, updated_at: currentDate },
    { methodType: 'Debit', created_at: currentDate, updated_at: currentDate },
    { methodType: 'CC', created_at: currentDate, updated_at: currentDate }
  ]);
};
