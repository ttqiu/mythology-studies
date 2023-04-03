const router = require('express').Router()
const controller = require('../controllers/CreatureController')
const middleware = require('../middleware')

router.get('/', controller.GetCreatures)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateCreature
)
router.get(
  '/:creature_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetCreatureById
)
router.get('/name/:name', controller.GetCreatureByName)
router.put(
  '/:creature_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateCreature
)
router.delete(
  '/:creature_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteCreature
)

module.exports = router
