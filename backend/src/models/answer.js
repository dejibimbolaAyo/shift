'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
			// define association here
			Answer.belongsTo(models.Question, {
				foreignKey: {
					name: 'question_id',
					allowNull: false
				}
			}),
			Answer.belongsTo(models.User, {
				foreignKey: {
					name: 'user_id',
					allowNull: false
				}
			})
    }
  };
  Answer.init({
    user_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    response: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};
