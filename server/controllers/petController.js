const fs = require("fs");

class PetController {
  constructor() {
    this.data = require("../db/pet.json");
  }

  saveDataToFile() {
    fs.writeFile("./db/pet.json", JSON.stringify(this.data, null, 2), (err) => {
      if (err) {
        console.error("Error writing to pet.json:", err);
      } else {
        console.log("Data has been written to pet.json");
      }
    });
  }

  getPets(req, res) {
    res.status(200).json(this.data);
  }

  getPetById(req, res) {
    const typeIDParams = req.params.typeID;
    const result = this.data.find((pet) => pet.typeID === typeIDParams);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Pet not found" });
    }
  }

  createPet(req, res) {
    const { typeID, type, varian, petDOB, petName, petGender, userID } = req.body;

    const newPet = {
      typeID,
      type,
      varian,
      petDOB,
      petName,
      petGender,
      userID,
    };

    this.data.push(newPet);
    this.saveDataToFile();

    res.status(201).json(this.data);
  }

  updatePet(req, res) {
    const typeIDParams = req.params.typeID;
    const { type, varian, petDOB, petName, petGender, userID } = req.body;

    const petToUpdate = this.data.find((pet) => pet.typeID === typeIDParams);

    if (petToUpdate) {
      petToUpdate.type = type;
      petToUpdate.varian = varian;
      petToUpdate.petDOB = petDOB;
      petToUpdate.petName = petName;
      petToUpdate.petGender = petGender;
      petToUpdate.userID = userID;

      this.saveDataToFile();

      res.status(200).json(petToUpdate);
    } else {
      res.status(404).json({ message: "Pet not found" });
    }
  }

  deletePet(req, res) {
    const typeIDParams = req.params.typeID;
    const petIndex = this.data.findIndex((pet) => pet.typeID === typeIDParams);

    if (petIndex !== -1) {
      this.data.splice(petIndex, 1);
      this.saveDataToFile();
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Pet not found" });
    }
  }
}

module.exports = new PetController();
