/**
 * Calculate perspective
 * @param {*} questions 
 * @param {*} answer 
 */
exports.getRanking = (questions, answer) => {
	const rankedType = {
		EI: {
			E: 0,
			I: 0,
		},
		SN: {
			S: 0,
			N: 0,
		},
		TF: {
			T: 0,
			F: 0,
		},
		JP: {
			J: 0,
			P: 0,
		},
	};

	questions.map((question, index) => {
		const [type1, type2] = question.dimension;
		const dimension = question.dimension;
		const direction = question.direction;

		if (direction > 0) {
			rankedType[`${dimension}`][type1] += (8 - answer[index]);
			rankedType[`${dimension}`][type2] += answer[index];
		}

		if (direction < 0) {
			rankedType[`${dimension}`][type2] += (8 - answer[index]);
			rankedType[`${dimension}`][type1] += answer[index];
		}
	});
	type = '';
	for (const rank in rankedType) {
		type += getMostOccurrance(rank, rankedType[rank]);
	}
	return {
		type,
		analysis: rankedType
	};
};

const getMostOccurrance = (dimension, types) => {
	const [type1, type2] = dimension;
	const rank = [];

	rank[type1] = types[type1];
	rank[type2] = types[type2];

	if (rank[type1] > rank[type2]) return type1;
	if (rank[type1] < rank[type2]) return type2;
	if (rank[type1] === rank[type2]) return type1;
}; 
