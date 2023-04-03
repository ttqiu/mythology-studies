'use strict'
const { User, Zodiac, sequelize } = require('../models')
const { Op } = require('sequelize')

let haveIt = []

function generateUniqueRandom(maxNr) {
  let random = (Math.random() * maxNr).toFixed()
  random = Number(random)

  if (!haveIt.includes(random) && random !== 0) {
    haveIt.push(random)
    return random
  } else {
    if (haveIt.length < maxNr) {
      return generateUniqueRandom(maxNr)
    } else {
      console.log('No more numbers available.')
      return false
    }
  }
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const zodiac_lists = await Promise.all(
      [...Array(25)].map(async () => {
        let user = generateUniqueRandom(25)
        let zodiac = await Zodiac.findOne({
          order: sequelize.random(),
          raw: true
        })
        return {
          userId: user,
          zodiacId: zodiac.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('zodiac_lists', zodiac_lists)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('zodiac_lists')
  }
}
