'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('origin_lists', [
      {
        originId: 1,
        creatureId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        originId: 1,
        creatureId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        originId: 2,
        creatureId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        originId: 4,
        creatureId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        originId: 5,
        creatureId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        originId: 6,
        creatureId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        originId: 7,
        creatureId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        originId: 2,
        creatureId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        originId: 2,
        creatureId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        originId: 3,
        creatureId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        originId: 4,
        creatureId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        originId: 5,
        creatureId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        originId: 6,
        creatureId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        originId: 7,
        creatureId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('origin_lists', null, {})
  }
}
