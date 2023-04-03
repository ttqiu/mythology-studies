const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const OriginRouter = require('./OriginRouter')
const CreatureRouter = require('./CreatureRouter')

Router.use('/users', UserRouter)
Router.use('/origins', OriginRouter)
Router.use('/creatures', CreatureRouter)

module.exports = Router
