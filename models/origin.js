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
      Origin.belongsToMany(models.Creature, {
        as: 'creature',
        through: models.OriginList,
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
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Origin',
      tableName: 'origins'
    }
  )
  return Origin
}
