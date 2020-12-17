const { getRanking } = require("../helpers/perspective");
const db = require("../models");
const { getQuestions } = require("./question");

exports.computeScore = async (answer) => {

	// const answers = await db.Answer.create({})
	const questions = await getQuestions({
		attributes: ['dimension', 'direction']
	});
	let perspective = getRanking(questions, answer)
	// On successfully persisting answers compute perspective
	return perspective;
}

exports.saveResponse = async (user, answers) => {
	const data = []
	for (index in answers) {
		data[index] = {
			'user_id': user.id,
			'question_id': parseInt(index) + 1,
			'response': answers[index]
		}
	}
	const savedAnswer = await db.Answer.bulkCreate(data);
	return savedAnswer;
}
