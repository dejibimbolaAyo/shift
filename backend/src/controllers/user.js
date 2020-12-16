const UserService = require('../services/user')

exports.getUser = async (req, res) => {
	const { query } = req;
	if (!query || !query.email) {
		return res.status(401).json({
			message: 'Please provide a email as query'
		})
	}
	const user = await UserService.getUser(query);

	if (user) {
		return res.status(200).json(user);
	}

	return res.status(404).json({
		message: `User with email ${query.email} not found`
	})

}
