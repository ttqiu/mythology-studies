const router = require('express').Router()
const controller = require('../controllers/OriginListController')
const middleware = require('../middleware')

router.get('/:originlist_id', controller.GetOriginListById)

router.post(
  '/:origin_id/:creature_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateOriginList
)

router.delete(
  '/:origin_id/:creature_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteOriginList
)

module.exports = router
