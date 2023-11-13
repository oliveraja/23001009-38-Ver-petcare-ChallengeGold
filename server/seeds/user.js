/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const currentDate = new Date();

function generateUserID(index) {
  return `U${index.toString().padStart(3, '0')}`;
}

exports.seed = async function(knex) {
  
  await knex('user').del();

  const date1 = new Date('1990-01-15');
  const date2 = new Date('1985-07-25');
  const date3 = new Date('1995-03-10');

  const users = [
    { name: 'Oliver', address: 'Depok', DOB: date1, phoneNumber: '0811111', role: 'user' },
    { name: 'Rahmi', address: 'Jakarta Barat', DOB: date2, phoneNumber: '082222', role: 'user' },
    { name: 'Susan', address: 'Bogor', DOB: date3, phoneNumber: '0813456', role: 'admin' }
  ];

  const usersWithID = users.map((user, index) => ({ ...user, userID: generateUserID(index + 1) }));

  await knex('user').insert(usersWithID.map(user => ({
    ...user,
    created_at: currentDate,
    updated_at: currentDate
  })));
};
