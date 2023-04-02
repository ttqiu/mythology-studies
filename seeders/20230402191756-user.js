'use strict'
const middleware = require('../middleware')
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await Promise.all(
      [...Array(25)].map(async () => {
        let password = falso.randPassword()
        let password_digest = await middleware.hashPassword(password)
        return {
          userName: falso.randUserName(),
          email: falso.randEmail(),
          passwordDigest: password_digest,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('users', users)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users')
  }
}
