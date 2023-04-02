'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('origin_lists', [
      {
        originId: 1,
        creatureId: 4
      },
      {
        originId: 1,
        creatureId: 3
      },
      {
        originId: 2,
        creatureId: 3
      },
      {
        originId: 4,
        creatureId: 3
      },
      {
        originId: 5,
        creatureId: 3
      },
      {
        originId: 6,
        creatureId: 3
      },
      {
        originId: 7,
        creatureId: 3
      },
      {
        originId: 2,
        creatureId: 1
      },
      {
        originId: 2,
        creatureId: 2
      },
      {
        originId: 3,
        creatureId: 5
      },
      {
        originId: 4,
        creatureId: 6
      },
      {
        originId: 5,
        creatureId: 7
      },
      {
        originId: 6,
        creatureId: 8
      },
      {
        originId: 7,
        creatureId: 9
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('origin_lists', null, {})
  }
}
