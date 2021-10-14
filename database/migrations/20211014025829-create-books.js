'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {

        type: Sequelize.INTEGER
      },
      Title: {
        type: Sequelize.STRING
      },
      Author: {
        type: Sequelize.STRING
      },
      ReleaseDate: {
        type: Sequelize.DATE
      },
      Editorial: {
        type: Sequelize.STRING
      },
      Category: {
        type: Sequelize.STRING
      },
      Campus: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};