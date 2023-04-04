const { User, Zodiac } = require('../models')
const sequelize = require('sequelize')

const GetZodiacs = async (req, res) => {
  try {
    const zodiacs = await Zodiac.findAll({
      order: [['id', 'ASC']],
      include: [
        {
          model: User,
          as: 'users',
          through: { attributes: [] },
          attributes: ['userName']
        }
      ]
    })
    res.send(zodiacs)
  } catch (error) {
    throw error
  }
}

const GetZodiacById = async (req, res) => {
  try {
    const zodiacId = parseInt(req.params.zodiac_id)
    const zodiac = await Zodiac.findByPk(zodiacId, {
      include: [
        {
          model: User,
          as: 'users',
          through: { attributes: [] },
          attributes: ['userName']
        }
      ]
    })
    res.send(zodiac)
  } catch (error) {
    throw error
  }
}

const GetZodiacByName = async (req, res) => {
  try {
    const name = req.params.zodiac
    const zodiacs = await Zodiac.findAll({
      where: {
        subject: sequelize.where(
          sequelize.fn('LOWER', sequelize.col('zodiac')),
          'LIKE',
          name.toLowerCase() + '%'
        )
      }
    })
    res.send(zodiacs)
  } catch (error) {
    throw error
  }
}

const CreateZodiac = async (req, res) => {
  try {
    let zodiac = await Zodiac.create({ ...req.body })
    res.send(zodiac)
  } catch (error) {
    throw error
  }
}

const UpdateZodiac = async (req, res) => {
  try {
    const zodiacId = parseInt(req.params.zodiac_id)
    let updatedZodiac = await Zodiac.update(req.body, {
      where: { id: zodiacId },
      returning: true
    })
    res.send(updatedZodiac)
  } catch (error) {
    throw error
  }
}

const DeleteCreature = async (req, res) => {
  try {
    const zodiacId = parseInt(req.params.zodiac_id)
    await Zodiac.destroy({ where: { id: zodiacId } })
    res.send({ msg: 'Zodiac Deleted', payload: zodiacId, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetZodiacs,
  GetZodiacById,
  GetZodiacByName,
  CreateZodiac,
  UpdateZodiac,
  DeleteCreature
}
