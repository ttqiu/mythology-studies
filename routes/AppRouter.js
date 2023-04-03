const Router = require('express').Router()
const UserRouter = require('./UserRouter')
// const CreatureRouter = require('./CreatureRouter')

Router.use('/users', UserRouter)
// Router.use('/creatures', CreatureRouter)

module.exports = Router
