const { Origin, Creature } = require('../models')
const sequelize = require('sequelize')
const { Op } = require('sequelize')

const GetOrigins = async (req, res) => {
  try {
    const orgins = await Origin.findAll({
      order: [['id', 'ASC']],
      include: [
        {
          model: Creature,
          as: 'creatures',
          through: { attributes: [] },
          attributes: ['name']
        }
      ]
    })
    res.send(orgins)
  } catch (error) {
    throw error
  }
}

const GetOriginById = async (req, res) => {
  try {
    const originId = parseInt(req.params.origin_id)
    const origin = await Origin.findByPk(originId, {
      include: [
        {
          model: Creature,
          as: 'creatures',
          through: { attributes: [] },
          attributes: ['name']
        }
      ]
    })
    res.send(origin)
  } catch (error) {
    throw error
  }
}

const GetOriginByName = async (req, res) => {
  try {
    const name = req.params.origin
    const origin = await Origin.findAll({
      where: {
        subject: sequelize.where(
          sequelize.fn('LOWER', sequelize.col('origin')),
          'LIKE',
          name.toLowerCase() + '%'
        )
      }
    })
    res.send(origin)
  } catch (error) {
    throw error
  }
}

const CreateOrigin = async (req, res) => {
  try {
    let origin = await Origin.create({ ...req.body })
    res.send(origin)
  } catch (error) {
    throw error
  }
}

const UpdateOrigin = async (req, res) => {
  try {
    const originId = parseInt(req.params.origin_id)
    let updatedOrigin = await Origin.update(req.body, {
      where: { id: originId },
      returning: true
    })
    res.send(updatedOrigin)
  } catch (error) {
    throw error
  }
}

const DeleteOrigin = async (req, res) => {
  try {
    const originId = parseInt(req.params.origin_id)
    await Origin.destroy({ where: { id: originId } })
    res.send({ msg: 'Origin Deleted', payload: originId, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetOrigins,
  GetOriginById,
  GetOriginByName,
  CreateOrigin,
  UpdateOrigin,
  DeleteOrigin
}
