const mongoose = require('mongoose');

// experimento Atlas
// Implementar variables de entorno, por seguridad
const MONGO_URI = 'mongodb+srv://everdav:lblnancon77@cluster0.tnftp.mongodb.net/basketstats?retryWrites=true&w=majority';

const conectar = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log('Conexión a la db exitosa');
  } catch (error) {
    console.log(error);
  }
};

conectar();
