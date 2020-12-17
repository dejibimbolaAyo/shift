const expect = require('chai').expect;
const { getRanking } = require('../src/helpers/perspective');

describe('getRanking()', function () {
	it('should return ENTP given [4, 3, 1, 6, 7, 3, 5, 3, 6, 6]', function () {

		// 1. ARRANGE
		const questions = [
			{ dimension: 'EI', direction: 1, },
			{ dimension: 'SN', direction: -1, },
			{ dimension: 'TF', direction: 1, },
			{ dimension: 'EI', direction: -1, },
			{ dimension: 'SN', direction: 1, },
			{ dimension: 'JP', direction: 1, },
			{ dimension: 'TF', direction: -1, },
			{ dimension: 'JP', direction: -1, },
			{ dimension: 'EI', direction: -1, },
			{ dimension: 'JP', direction: 1, },
		];

		const answer = [4, 3, 1, 6, 7, 3, 5, 3, 6, 6];
		const type = 'ENTP'

		// 2. ACT
		var perspective = getRanking(questions, answer);

		// 3. ASSERT
		expect(perspective.type).to.be.equal(type);

	});
});
describe('getRanking()', function () {
	it('should return ESTJ given [1, 5, 4, 6, 5, 2, 6, 3, 3, 2]', function () {

		// 1. ARRANGE
		const questions = [
			{ dimension: 'EI', direction: 1, },
			{ dimension: 'SN', direction: -1, },
			{ dimension: 'TF', direction: 1, },
			{ dimension: 'EI', direction: -1, },
			{ dimension: 'SN', direction: 1, },
			{ dimension: 'JP', direction: 1, },
			{ dimension: 'TF', direction: -1, },
			{ dimension: 'JP', direction: -1, },
			{ dimension: 'EI', direction: -1, },
			{ dimension: 'JP', direction: 1, },
		];

		const answer = [1, 5, 4, 6, 5, 2, 6, 3, 3, 2];
		const type = 'ESTJ'

		// 2. ACT
		var perspective = getRanking(questions, answer);

		// 3. ASSERT
		expect(perspective.type).to.be.equal(type);

	});
});
describe('getRanking()', function () {
	it('should return INFP given [3, 2, 6, 1, 7, 3, 2, 5, 2, 7]', function () {

		// 1. ARRANGE
		const questions = [
			{ dimension: 'EI', direction: 1, },
			{ dimension: 'SN', direction: -1, },
			{ dimension: 'TF', direction: 1, },
			{ dimension: 'EI', direction: -1, },
			{ dimension: 'SN', direction: 1, },
			{ dimension: 'JP', direction: 1, },
			{ dimension: 'TF', direction: -1, },
			{ dimension: 'JP', direction: -1, },
			{ dimension: 'EI', direction: -1, },
			{ dimension: 'JP', direction: 1, },
		];

		const answer = [3, 2, 6, 1, 7, 3, 2, 5, 2, 7];
		const type = 'INFP'

		// 2. ACT
		var perspective = getRanking(questions, answer);

		// 3. ASSERT
		expect(perspective.type).to.be.equal(type);

	});
});
describe('getRanking()', function () {
	it('should return ISFP given [3, 4, 7, 1, 2, 5, 4, 3, 2, 6]', function () {

		// 1. ARRANGE
		const questions = [
			{ dimension: 'EI', direction: 1, },
			{ dimension: 'SN', direction: -1, },
			{ dimension: 'TF', direction: 1, },
			{ dimension: 'EI', direction: -1, },
			{ dimension: 'SN', direction: 1, },
			{ dimension: 'JP', direction: 1, },
			{ dimension: 'TF', direction: -1, },
			{ dimension: 'JP', direction: -1, },
			{ dimension: 'EI', direction: -1, },
			{ dimension: 'JP', direction: 1, },
		];

		const answer = [3, 4, 7, 1, 2, 5, 4, 3, 2, 6];
		const type = 'ISFP'

		// 2. ACT
		var perspective = getRanking(questions, answer);

		// 3. ASSERT
		expect(perspective.type).to.be.equal(type);

	});
});
describe('getRanking()', function () {
	it('should return ESTJ given [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]', function () {

		// 1. ARRANGE
		const questions = [
			{ dimension: 'EI', direction: 1, },
			{ dimension: 'SN', direction: -1, },
			{ dimension: 'TF', direction: 1, },
			{ dimension: 'EI', direction: -1, },
			{ dimension: 'SN', direction: 1, },
			{ dimension: 'JP', direction: 1, },
			{ dimension: 'TF', direction: -1, },
			{ dimension: 'JP', direction: -1, },
			{ dimension: 'EI', direction: -1, },
			{ dimension: 'JP', direction: 1, },
		];

		const answer = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
		const type = 'ESTJ'

		// 2. ACT
		var perspective = getRanking(questions, answer);

		// 3. ASSERT
		expect(perspective.type).to.be.equal(type);

	});
});
describe('getRanking()', function () {
	it('should return ISTJ given [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]', function () {

		// 1. ARRANGE
		const questions = [
			{ dimension: 'EI', direction: 1, },
			{ dimension: 'SN', direction: -1, },
			{ dimension: 'TF', direction: 1, },
			{ dimension: 'EI', direction: -1, },
			{ dimension: 'SN', direction: 1, },
			{ dimension: 'JP', direction: 1, },
			{ dimension: 'TF', direction: -1, },
			{ dimension: 'JP', direction: -1, },
			{ dimension: 'EI', direction: -1, },
			{ dimension: 'JP', direction: 1, },
		];

		const answer = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		const type = 'ISTJ'

		// 2. ACT
		var perspective = getRanking(questions, answer);

		// 3. ASSERT
		expect(perspective.type).to.be.equal(type);

	});
});
describe('getRanking()', function () {
	it('should return ESTP given [7, 7, 7, 7, 7, 7, 7, 7, 7, 7]', function () {

		// 1. ARRANGE
		const questions = [
			{ dimension: 'EI', direction: 1, },
			{ dimension: 'SN', direction: -1, },
			{ dimension: 'TF', direction: 1, },
			{ dimension: 'EI', direction: -1, },
			{ dimension: 'SN', direction: 1, },
			{ dimension: 'JP', direction: 1, },
			{ dimension: 'TF', direction: -1, },
			{ dimension: 'JP', direction: -1, },
			{ dimension: 'EI', direction: -1, },
			{ dimension: 'JP', direction: 1, },
		];

		const answer = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
		const type = 'ESTP'

		// 2. ACT
		var perspective = getRanking(questions, answer);

		// 3. ASSERT
		expect(perspective.type).to.be.equal(type);
	});
});
