'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('Questions', [
			{
				question: 'You find it takes effort to introduce yourself to other people.',
				dimension: 'EI',
				direction: 1,
				createdAt: '2020-02-16 13:23:17',
				updatedAt: '2020-02-16 13:23:17'
			},
			{
				question: 'You consider yourself more practical than creative.',
				dimension: 'SN',
				direction: -1,
				createdAt: '2020-02-16 13:23:17',
				updatedAt: '2020-02-16 13:23:17'
			},
			{
				question: 'Winning a debate matters less to you than making sure no one gets upset',
				dimension: 'TF',
				direction: 1,
				createdAt: '2020-02-16 13:23:17',
				updatedAt: '2020-02-16 13:23:17'
			},
			{
				question: 'You get energized going to social events that involve many interactions.',
				dimension: 'EI',
				direction: -1,
				createdAt: '2020-02-16 13:23:17',
				updatedAt: '2020-02-16 13:23:17'
			},
			{
				question: 'You often spend time exploring unrealistic and impractical yet intriguing ideas.',
				dimension: 'SN',
				direction: 1,
				createdAt: '2020-02-16 13:23:17',
				updatedAt: '2020-02-16 13:23:17'
			},
			{
				question: 'Deadlines seem to you to be of relative rather than absolute importance.',
				dimension: 'JP',
				direction: 1,
				createdAt: '2020-02-16 13:23:17',
				updatedAt: '2020-02-16 13:23:17'
			},
			{
				question: 'Logic is usually more important than heart when it comes to making important decisions.',
				dimension: 'TF',
				direction: -1,
				createdAt: '2020-02-16 13:23:17',
				updatedAt: '2020-02-16 13:23:17'
			},
			{
				question: 'Your home and work environments are quite tidy.',
				dimension: 'JP',
				direction: -1,
				createdAt: '2020-02-16 13:23:17',
				updatedAt: '2020-02-16 13:23:17'
			},
			{
				question: 'You do not mind being at the center of attention.',
				dimension: 'EI',
				direction: -1,
				createdAt: '2020-02-16 13:23:17',
				updatedAt: '2020-02-16 13:23:17'
			},
			{
				question: 'Keeping your options open is more important than having a to-do list.',
				dimension: 'JP',
				direction: 1,
				createdAt: '2020-02-16 13:23:17',
				updatedAt: '2020-02-16 13:23:17'
			},
		], {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Question', null, {});
	}
};
