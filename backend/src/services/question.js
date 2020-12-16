const db = require("../models");

exports.getQuestions = async () => {
	const questions = await db.Question.findAll();
	return questions;
}
