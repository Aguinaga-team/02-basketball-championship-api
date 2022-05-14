const { Player } = require('../models/player');

const traerPlayers = async (req, res) => {
  try {
    const players = await Player.find({});
    await res.status(200).json({ data: players });
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

const crearPlayer = async (req, res) => {
  const nuevaPlayer = new Player(req.body);

  nuevaPlayer.save((err, player) => {
    try {
      return res.status(201).send({ player });
    } catch (error) {
      res.status(400).send({ message: err });
    }
  });
};

// Refactorizar
const actualizarPlayer = async (req, res) => {
  const playerId = req.params.id || null;
  if (playerId === undefined) {
    return res.status(404).send({ message: 'Player no válido!' });
  }

  const resultado = await Player.findByIdAndUpdate(playerId, req.body, {new: true});

  try {
    res.status(201).send({resultado});
  } catch (error) {
    res.status(400).send({message: error});
  }
};

module.exports = { crearPlayer, traerPlayers, actualizarPlayer };
