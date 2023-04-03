const { ZodiacList } = require('../models')

const GetZodiacListById = async (req, res) => {
  try {
    const zodiacListId = parseInt(req.params.zodiaclist_id)
    const zodiacList = await ZodiacList.findOne({
      where: { id: zodiacListId }
    })
    res.send(zodiacList)
  } catch (error) {
    throw error
  }
}

const CreateZodiacList = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let zodiacId = parseInt(req.params.zodiac_id)
    let zodiacListBody = {
      userId,
      zodiacId
    }
    let zodiacList = await ZodiacList.create(zodiacListBody)
    res.send(zodiacList)
  } catch (error) {
    throw error
  }
}

const DeleteZodiacList = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let zodiacId = parseInt(req.params.zodiac_id)
    await ZodiacList.destroy({
      where: { userId: userId, zodiacId: zodiacId }
    })
    res.send({
      message: `Deleted zodiac list with an user id of ${userId} and zodiac id of ${zodiacId} `
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetZodiacListById,
  CreateZodiacList,
  DeleteZodiacList
}
