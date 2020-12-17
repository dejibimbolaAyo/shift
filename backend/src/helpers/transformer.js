/**
 * Transform data form computation
 * @param {*} answer 
 */
exports.transformFormAnswer = (answer) => {
	let answers = []

	for (let i = 0; i < 10; i++) {
		answers.push(answer[i] || 0)
	}
	return answers
}

/**
 * Transform saved answers for computation
 * @param {*} answers 
 */
exports.transformSavedAnswer = (answers) => {
	answers = JSON.parse(answers)
	return answers.map(answer => answer.response)
}
