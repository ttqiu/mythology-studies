'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ZodiacList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  ZodiacList.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      zodiacId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'zodiacs',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'ZodiacList',
      tableName: 'zodiac_lists'
    }
  )
  return ZodiacList
}
