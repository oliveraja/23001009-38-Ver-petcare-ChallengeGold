const knex = require('../db/connection');

class ServiceController {
  async getServices(req, res) {
    try {
      const services = await knex('service').select('*');
      res.status(200).json(services);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = new ServiceController();
