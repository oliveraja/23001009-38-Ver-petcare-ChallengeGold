/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

    await knex('pet').del();
  
    const currentDate = new Date();
    const users = await knex.select('userID').from('user');
  
    if (!users || users.length === 0) {
      console.error('No users found. Please make sure to seed the user table first.');
      return;
    }
  
    const pets = [
      { type: 'Dog', varian: 'Bulldog', DOB: '2020-01-15', petName: 'Buddy', petGender: 'Male', created_at: currentDate, updated_at: currentDate },
      { type: 'Cat', varian: 'Persian', DOB: '2019-05-22', petName: 'Whiskers', petGender: 'Female', created_at: currentDate, updated_at: currentDate },
    ];
  
    pets.forEach((pet, index) => {
      const petID = `P${(index + 1).toString().padStart(3, '0')}`;
      pet.petID = petID;

      const randomUser = users[Math.floor(Math.random() * users.length)];
      pet.userID = randomUser.userID;
    });
  
    await knex('pet').insert(pets);
  };
  