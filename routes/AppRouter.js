const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const OriginRouter = require('./OriginRouter')
const CreatureRouter = require('./CreatureRouter')
const OriginListRouter = require('./OriginListRouter')
const ZodiacRouter = require('./ZodiacRouter')
const ZodiacListRouter = require('./ZodiacListRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/users', UserRouter)
Router.use('/origins', OriginRouter)
Router.use('/creatures', CreatureRouter)
Router.use('/originlists', OriginListRouter)
Router.use('/zodiacs', ZodiacRouter)
Router.use('/zodiaclists', ZodiacListRouter)
Router.use('/comments', CommentRouter)

module.exports = Router
