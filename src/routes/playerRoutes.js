const express = require('express');
const routerPlayer = express.Router();

const { crearPlayer, traerPlayers, actualizarPlayer } = require('../controllers/personaControllers');

routerPlayer.get('/', traerPlayers);
routerPlayer.post('/', crearPlayer);
routerPlayer.put('/:id', actualizarPlayer);

module.exports = { routerPlayer };
