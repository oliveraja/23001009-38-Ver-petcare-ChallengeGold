/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const currentDate = new Date()
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()

  const date1 = new Date('1990-01-15');
  const date2 = new Date('1985-07-25');
  const date3 = new Date('1995-03-10');

  await knex('user').insert([
    { name: 'Oliver', address: 'Depok', DOB: date1, phoneNumber: '0811111', 
    role: 'user', created_at: currentDate, updated_at: currentDate },
    { name: 'Rahmi', address: 'Jakarta Barat', DOB: date2, phoneNumber: '082222', 
    role: 'user', created_at: currentDate, updated_at: currentDate },
    { name: 'Susan', address: 'Bogor', DOB: date3, phoneNumber: '0813456', 
    role: 'admin', created_at: currentDate, updated_at: currentDate }
  ]);
};
