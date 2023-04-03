const { OriginList } = require('../models')

const GetOriginListById = async (req, res) => {
  try {
    const originListId = parseInt(req.params.originlist_id)
    const originList = await OriginList.findOne({
      where: { id: originListId }
    })
    res.send(originList)
  } catch (error) {
    throw error
  }
}

const CreateOriginList = async (req, res) => {
  try {
    let originId = parseInt(req.params.origin_id)
    let creatureId = parseInt(req.params.creature_id)
    let originListBody = {
      originId,
      creatureId
    }
    let originList = await OriginList.create(originListBody)
    res.send(originList)
  } catch (error) {
    throw error
  }
}

const DeleteOriginList = async (req, res) => {
  try {
    let originId = parseInt(req.params.origin_id)
    let creatureId = parseInt(req.params.creature_id)
    await OriginList.destroy({
      where: { originId: originId, creatureId: creatureId }
    })
    res.send({
      message: `Deleted origin list with an origin id of ${originId} and creature id of ${creatureId} `
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetOriginListById,
  CreateOriginList,
  DeleteOriginList
}
