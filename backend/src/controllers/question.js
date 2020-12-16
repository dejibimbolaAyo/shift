const QuestionService = require('../services/question')

exports.getQuestions = async (req, res) => {
	const questions = await QuestionService.getQuestions();

	if (questions) {
		return res.status(200).json(questions);
	}
	return res.status(404).json({
		message: 'No questions found'
	});
}
