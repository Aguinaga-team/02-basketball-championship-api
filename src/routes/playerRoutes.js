const express = require('express');
const routerPlayer = express.Router();

const { crearPlayer, traerPlayers } = require('../controllers/personaControllers');

routerPlayer.get('/', traerPlayers);
routerPlayer.post('/', crearPlayer);

module.exports = { routerPlayer };
