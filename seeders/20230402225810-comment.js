'use strict'
const { User, Creature, sequelize } = require('../models')
const { Op } = require('sequelize')
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const comments = await Promise.all(
      [...Array(100)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        let creature = await Creature.findOne({
          order: sequelize.random(),
          raw: true
        })
        return {
          userId: user.id,
          classId: creature.id,
          content: falso.randParagraph(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('comments', comments)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comments')
  }
}
