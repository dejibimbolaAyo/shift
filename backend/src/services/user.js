const db = require("../models");
const PerspectiveService = require('./perspective');
const { transformSavedAnswer } = require("../helpers/transformer");

exports.create = async (data) => {
	const user = await db.User.create({
		email: data
	})

	return user
}

exports.getUser = async (data) => {
	const user = await db.User.findOne({
		where: {
			email: data
		},
	});

	let answers = []

	if (user) {
		answers = JSON.stringify(await user.getAnswers({
			attributes: ['question_id', 'response']
		}));
	}

	let perspective = {}
	if (answers.length) {
		// transform saved answer
		const transformedAnswers = transformSavedAnswer(answers)
		// compute perspective
		perspective = await PerspectiveService.computeScore(transformedAnswers);
	}

	return {
		user,
		perspective
	};
}
