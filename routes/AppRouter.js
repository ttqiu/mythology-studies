const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const OriginRouter = require('./OriginRouter')
const CreatureRouter = require('./CreatureRouter')
const OriginListRouter = require('./OriginListRouter')

Router.use('/users', UserRouter)
Router.use('/origins', OriginRouter)
Router.use('/creatures', CreatureRouter)
Router.use('/originlists', OriginListRouter)

module.exports = Router
