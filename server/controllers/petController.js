const knex = require('../db/connection');

class PetController {
  async getPets(req, res) {
    try {
      const pets = await knex('pet').select('*');
      res.status(200).json(pets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getPetById(req, res) {
    try {
      const typeIDParams = req.params.typeID;
      const pet = await knex('pet').where({ typeID: typeIDParams }).first();

      if (pet) {
        res.status(200).json(pet);
      } else {
        res.status(404).json({ message: 'Pet not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async createPet(req, res) {
    try {
      const { typeID, type, varian, petDOB, petName, petGender, userID } = req.body;

      await knex('pet').insert({
        typeID,
        type,
        varian,
        petDOB,
        petName,
        petGender,
        userID,
        created_at: new Date(),
        updated_at: new Date(),
      });

      const pets = await knex('pet').select('*');
      res.status(201).json(pets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updatePet(req, res) {
    try {
      const typeIDParams = req.params.typeID;
      const { type, varian, petDOB, petName, petGender, userID } = req.body;

      const updatedPet = await knex('pet')
        .where({ typeID: typeIDParams })
        .update({
          type,
          varian,
          petDOB,
          petName,
          petGender,
          userID,
          updated_at: new Date(),
        })
        .returning('*');

      if (updatedPet.length > 0) {
        res.status(200).json(updatedPet[0]);
      } else {
        res.status(404).json({ message: 'Pet not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deletePet(req, res) {
    try {
      const typeIDParams = req.params.typeID;

      const deletedRows = await knex('pet').where({ typeID: typeIDParams }).del();

      if (deletedRows > 0) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Pet not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = new PetController();
