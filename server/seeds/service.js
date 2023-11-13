/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  await knex('service').del();

  const currentDate = new Date();
  const services = [
    { serviceType: 'Pet Hotel', created_at: currentDate, updated_at: currentDate },
    { serviceType: 'Pet Grooming', created_at: currentDate, updated_at: currentDate },
    { serviceType: 'Pet Health', created_at: currentDate, updated_at: currentDate },
    { serviceType: 'Pet Things', created_at: currentDate, updated_at: currentDate }
  ];

  services.forEach((service, index) => {
    const serviceID = `PS${(index + 1).toString().padStart(2, '0')}`;
    service.serviceID = serviceID;
  });

  await knex('service').insert(services);
};
