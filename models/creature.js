'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Creature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Creature.belongsToMany(models.Origin, {
        as: 'origins',
        through: models.OriginList,
        foreignKey: 'creatureId'
      })
      Creature.hasMany(models.Comment, {
        as: 'comments',
        foreignKey: 'creatureId'
      })
    }
  }
  Creature.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Creature',
      tableName: 'creatures'
    }
  )
  return Creature
}
