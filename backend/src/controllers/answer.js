const { transformFormAnswer } = require('../helpers/transformer');
const PerspectiveService = require('../services/perspective');
const UserService = require('../services/user');

exports.postAnswers = async (req, res) => {
	const data = req.body;
	let user;

	if (!data) {
		return res.status(403).json({ message: 'Please provide answers to the questions and provide your email address' })
	}

	if (!data.answers) {
		return res.status(403).json({ message: "Please answer the questions" });
	}

	if (!data.email) {
		return res.status(403).json({
			message: 'Please provide an email address'
		})
	}

	// Check if user already took test
	user = await UserService.getUser(data.email);

	if (user && user.perspective.length) {
		return res.status(200).json({ perspective: user.perspective });
	}

	// if data contains email field, save the response if not, just compute the result
	if (!user.user) {
		// create user account
		user = await UserService.create(data.email)
		PerspectiveService.saveResponse(user, data.answers);
	}

	const transformedAnswer = transformFormAnswer(data.answers)
	const perspective = await PerspectiveService.computeScore(transformedAnswer);

	if (perspective) {
		res.status(200).json(perspective);
	}
}
