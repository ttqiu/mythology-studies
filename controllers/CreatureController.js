const { Origin, Creature } = require('../models')
const sequelize = require('sequelize')
const { Op } = require('sequelize')

const GetCreatures = async (req, res) => {
  try {
    const creatures = await Creature.findAll({
      order: [['id', 'ASC']],
      include: [
        {
          model: Origin,
          as: 'origins',
          through: { attributes: [] },
          attributes: ['origin']
        }
      ]
    })
    res.send(creatures)
  } catch (error) {
    throw error
  }
}

const GetCreatureById = async (req, res) => {
  try {
    const creaturesId = parseInt(req.params.creature_id)
    const creature = await Creature.findByPk(creaturesId, {
      include: [
        {
          model: Origin,
          as: 'origins',
          through: { attributes: [] },
          attributes: ['origin']
        }
      ]
    })
    res.send(creatures)
  } catch (error) {
    throw error
  }
}

const GetCreatureByName = async (req, res) => {
  try {
    const name = req.params.name
    const creatures = await Creature.findAll({
      where: {
        subject: sequelize.where(
          sequelize.fn('LOWER', sequelize.col('name')),
          'LIKE',
          name.toLowerCase() + '%'
        )
      }
    })
    res.send(creatures)
  } catch (error) {
    throw error
  }
}

const CreateCreature = async (req, res) => {
  try {
    let creature = await Creature.create({ ...req.body })
    res.send(creature)
  } catch (error) {
    throw error
  }
}

const UpdateCreature = async (req, res) => {
  try {
    const creatureId = parseInt(req.params.creature_id)
    let updatedCreature = await Creature.update(req.body, {
      where: { id: creatureId },
      returning: true
    })
    res.send(updatedCreature)
  } catch (error) {
    throw error
  }
}

const DeleteCreature = async (req, res) => {
  try {
    const creatureId = parseInt(req.params.creature_id)
    await Creature.destroy({ where: { id: creatureId } })
    res.send({ msg: 'Creature Deleted', payload: creatureId, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCreatures,
  GetCreatureById,
  GetCreatureByName,
  CreateCreature,
  UpdateCreature,
  DeleteCreature
}
