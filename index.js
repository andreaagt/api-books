import server from './src/index.js'
import sequelize from './config/database.js';

const PORT = process.env.PORT || 5000

sequelize.authenticate()
  .then(() => {
    console.log("Conectado a la base de datos..");

    server.listen(PORT, () => {
      console.log("Escuchando en el puerto", PORT);
    });
  })
  .catch((error) => {
    console.log("Error al conectar la BD =>", error);
  });