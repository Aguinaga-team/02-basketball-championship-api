const express = require('express');
require('dotenv').config()
const app = express();
const mongoose = require('mongoose');
const { routerPlayer } = require('./routes/playerRoutes');
const cors = require('cors');
require('./config/db');

const PORT = process.env.PORT || 4002;

// Middlewares
app.use(express.json());

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

// API Route
app.use(cors());
app.use('/players', routerPlayer);
