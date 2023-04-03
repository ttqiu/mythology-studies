'use strict'
const { User, Zodiac, sequelize } = require('../models')
const { Op } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const comments = await Promise.all(
      [...Array(25)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        let zodiac = await Zodiac.findOne({
          order: sequelize.random(),
          raw: true
        })
        return {
          userId: user.id,
          zodiacId: zodiac.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('zodiac_lists', comments)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('zodiac_lists')
  }
}
