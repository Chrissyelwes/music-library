/* eslint-disable semi */
const express = require('express');
const artistController = require('../controllers/artist');

const router = express.Router();

router.post('/', artistController.create);

router.get('/', artistController.read);

router.get('/:artistId', artistController.readById);

router.patch('/:artistId', artistController.update);

module.exports = router;
