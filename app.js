const express = require('express');
const app = express();

// Por qué no se empleó esto en la aplicación de Bsale??
const cors = require('cors')
app.use(cors())

const PORT = 4001;

const { playerRouter } = require('./src/routes/playersRoutes');

// Middlewares
app.use(express.json());

app.listen(PORT, () => console.log(`Server listening on port number ${PORT}`));

// Ruta de home
app.get("/", (req, res) => {
  res.status(200).json({message: "Hello form home!"});
});

// API Route
app.use("/players", playerRouter);