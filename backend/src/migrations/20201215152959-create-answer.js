'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
			user_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key: 'id'
				},
				allowNull: false
			},
			question_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'questions',
					key: 'id'
				},
				allowNull: false
      },
      response: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Answers');
  }
};
