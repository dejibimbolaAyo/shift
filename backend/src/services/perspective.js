const db = require("../models");

exports.computeScore = async () => {
	// const answers = await db.Answer.create({})
	let perspective = {}
	// On successfully persisting answers compute perspective
	if (true) {
		// call perspective helper and get computation
		perspective = {
			type: 'ENTP',
			analysis: {
				'EI': {
					'E': 4,
					'I': 7
				},
				'SN': {
					'S': 4,
					'N': 7
				},
				'TF': {
					'T': 6,
					'I': 4
				},
				'JP': {
					'J': 5,
					'P': 3
				},
			}
		}
	}
	return perspective;
}
