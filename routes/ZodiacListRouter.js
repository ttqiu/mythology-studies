const router = require('express').Router()
const controller = require('../controllers/ZodiacListController')
const middleware = require('../middleware')

router.get('/:zodiaclist_id', controller.GetZodiacListById)

router.post(
  '/:user_id/:zodiac_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateZodiacList
)

router.delete(
  '/:user_id/:zodiac_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteZodiacList
)

module.exports = router
