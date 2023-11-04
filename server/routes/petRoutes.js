const express = require('express');
const router = express.Router();
const PetController = require('../controllers/petController');

router.get('/api/pets', PetController.getPets);
router.get('/api/pets/:typeID', PetController.getPetById);
router.post('/api/pets', PetController.createPet);
router.put('/api/pets/:typeID', PetController.updatePet);
router.delete('/api/pets/:typeID', PetController.deletePet);

module.exports = router;
