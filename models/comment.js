// 'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'post',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Comment.belongsTo(models.Post, {
        foreignKey: 'post_id',
        as: 'comments',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Comment.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        onDelete: 'CASCADE',
        reference: {
          model: 'users',
          key: 'id'
        }
      },

      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      carsId: {
        type: DataTypes.INTEGER,
        field: 'post_id',
        onDelete: 'CASCADE',
        references: {
          model: 'posts',
          key: 'id'
        }
      }
    },

    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments'
    }
  )
  return Comment
}
