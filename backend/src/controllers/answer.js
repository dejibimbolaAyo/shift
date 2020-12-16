const PerspectiveService = require('../services/perspective');
const UserService = require('../services/user');

exports.postAnswers = async (req, res) => {
	const data = req.body;

	if (!data) {
		return res.status(403).json({ message: 'Please provide answers to the questions and provide your email address' })
	}

	if (!data.answers) {
		return res.status(403).json({ message: "Please answer the questions" });
	}

	if (!data.email) {
		return res.satus(403).json({
			message: 'Please provide an email address'
		})
	}

	// Check if user already took test
	const user = UserService.getUser({
		email: data.email
	});

	if (user && user.perspective) {
		return res.status(200).json({ perspective: user.perspective });
	}

	// if data contains email field, save the response if not, just compute the result
	const perspective = await PerspectiveService.computeScore(data.answers);

	if (perspective) {
		res.status(200).json(perspective);
	}
}
