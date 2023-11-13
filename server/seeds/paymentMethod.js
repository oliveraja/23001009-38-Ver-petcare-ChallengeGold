/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {

  await knex('paymentMethod').del();

  const currentDate = new Date();
  const paymentMethods = [
    { methodType: 'Cash', created_at: currentDate, updated_at: currentDate },
    { methodType: 'Credit Card', created_at: currentDate, updated_at: currentDate },
    { methodType: 'Debit Card', created_at: currentDate, updated_at: currentDate },
    { methodType: 'Digital Wallet', created_at: currentDate, updated_at: currentDate },
  ];

  paymentMethods.forEach((method, index) => {
    const paymentID = `PM${(index + 1).toString().padStart(2, '0')}`;
    method.paymentID = paymentID;
  });

  await knex('paymentMethod').insert(paymentMethods);
};
