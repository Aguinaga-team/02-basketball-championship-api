const mongoose = require('mongoose');

// experimento Atlas
// Implementar variables de entorno, por seguridad
const MONGO_URI = process.env.MONGODB_CNN;

const conectar = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log('Conexión a la db exitosa');
  } catch (error) {
    console.log(error);
  }
};

conectar();
