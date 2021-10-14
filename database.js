import Sequelize from 'sequelize'

import { config } from './config.js'

const sequelize = new Sequelize(
    config.DB_DB,
    config.DB_USERNAME,
    config.DB_PASSWORD,
    {
      host: config.HOSTNAME,
      dialect: "postgres",
      dialectOptions: {},
      define: {
        timestamps: false,
      },
    }
  );


export default sequelize