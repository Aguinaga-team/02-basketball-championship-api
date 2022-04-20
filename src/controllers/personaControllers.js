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

module.exports = { crearPlayer, traerPlayers };
