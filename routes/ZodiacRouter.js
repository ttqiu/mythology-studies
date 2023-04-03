const router = require('express').Router()
const controller = require('../controllers/ZodiacController')
const middleware = require('../middleware')

router.get('/', controller.GetZodiacs)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateZodiac
)
router.get(
  '/:zodiac_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetZodiacById
)
router.get('/name/:zodiac', controller.GetZodiacByName)
router.put(
  '/:zodiac_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateZodiac
)
router.delete(
  '/:zodiac_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteCreature
)

module.exports = router
