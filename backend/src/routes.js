
const UserController = require('./controllers/user');
const QuestionController = require('./controllers/question');
const AnswerController = require('./controllers/answer');

exports.routes = (router) => {
	router.route('/questions').get(QuestionController.getQuestions);
	router.route('/users').get(UserController.getUser);
	router.route('/answers').post(AnswerController.postAnswers);
}
