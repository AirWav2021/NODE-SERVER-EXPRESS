// @desc Get user profile
// @route GET /api/users/profile
// @access Private

export const getUserProfile = (req, res) => {
	const user = {
		name: 'Max',
		age: 21,
	}

	res.json(user)
}
