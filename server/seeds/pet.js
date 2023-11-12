/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const currentDate = new Date();

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del();

  // const user1 = await knex('user').where({ name: 'Oliver' }).first();
  // const user2 = await knex('user').where({ name: 'Rahmi' }).first();
  // const user3 = await knex('user').where({ name: 'Susan' }).first();

  const date1 = new Date('2020-05-10');
  const date2 = new Date('2018-08-22');
  const date3 = new Date('2019-03-15');

  await knex('pet').insert([
    { type: 'Anjing', varian: 'Bulldog', DOB: date1, petName: 'Buddy', petGender: 'Male', userId: 1, created_at: currentDate, updated_at: currentDate },
    { type: 'Anjing', varian: 'German Shepherd', DOB: date2, petName: 'Splash', petGender: 'Female', userId: 2, created_at: currentDate, updated_at: currentDate },
    { type: 'Kucing', varian: 'Persian', DOB: date3, petName: 'Whiskers', petGender: 'Male', userId: 3, created_at: currentDate, updated_at: currentDate },
  ]);
};
