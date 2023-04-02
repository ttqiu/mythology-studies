'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Origin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Origin.hasMany(models.Creature, {
        as: 'creature',
        foreignKey: 'originId'
      })
    }
  }
  Origin.init(
    {
      origin: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Origin',
      tableName: 'origin'
    }
  )
  return Origin
}
