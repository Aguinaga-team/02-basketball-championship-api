const express = require('express');
require('dotenv').config()
const app = express();
const mongoose = require('mongoose');
const { routerPlayer } = require('./routes/playerRoutes');
const cors = require('cors');
require('./config/db');

// const PORT = process.env.PORT || 4002;
const PORT = 4001;

// Middlewares
app.use(express.json());


// API Route
app.use(cors());
app.get('/', (req, res) => {
    res.json({msg: "basketball-championship-api" });
});

app.use('/players', routerPlayer);

// app.get('/', (req, res) => {
//   res.send('<h1>Hola</h1>')
// })

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

// ok?