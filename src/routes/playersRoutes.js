const express = require('express');
const playerRouter = express.Router();

// Traemos los controladores necesarios
const { getPlayer } = require('../controllers/playersControllers');

playerRouter.get('/', getPlayer);

module.exports = { playerRouter };
