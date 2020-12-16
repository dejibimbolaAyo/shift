const db = require("../models");
const PerspectiveService = require('./perspective');

exports.getUser = async (data) => {
	const user = await db.User.findOne({
		where: {
			email: data.email
		},
	});
	let answers = []
	if (user) {
		answers = await user.getAnswers();
	}

	let perspective = {}
	if (answers.length) {
		// compute perspective
		perspective = await PerspectiveService.computeScore(answers);
	}

	return {
		user,
		perspective
	};
}
