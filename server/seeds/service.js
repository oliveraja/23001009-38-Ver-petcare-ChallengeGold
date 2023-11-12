/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const currentDate = new Date()
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('service').del()
  await knex('service').insert([
    { serviceType: 'Pet Hotel', created_at: currentDate, updated_at: currentDate },
    { serviceType: 'Pet Grooming', created_at: currentDate, updated_at: currentDate },
    { serviceType: 'Pet Health', created_at: currentDate, updated_at: currentDate },
    { serviceType: 'Pet Things', created_at: currentDate, updated_at: currentDate }
  ]);
};
