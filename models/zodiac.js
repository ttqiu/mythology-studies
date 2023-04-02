'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Zodiac extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Zodiac.hasMany(models.User, {
        as: 'users',
        foreignKey: 'zodiacId'
      })
    }
  }
  Zodiac.init(
    {
      zodiac: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      personality: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Zodiac',
      tableName: 'zodiacs'
    }
  )
  return Zodiac
}
