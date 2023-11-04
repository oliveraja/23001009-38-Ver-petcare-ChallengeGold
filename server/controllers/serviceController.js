const serviceData = require("../db/service.json");

class ServiceController {
  getServices(req, res) {
    res.status(200).json(serviceData);
  }
}

module.exports = new ServiceController();
