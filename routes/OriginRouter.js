const router = require('express').Router()
const controller = require('../controllers/OriginController')
const middleware = require('../middleware')

router.get('/', controller.GetOrigins)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateOrigin
)
router.get(
  '/:origin_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetOriginById
)
router.get('/roots/:origin', controller.GetOriginByName)
router.put(
  '/:origin_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateOrigin
)
router.delete(
  '/:origin_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteOrigin
)

module.exports = router
