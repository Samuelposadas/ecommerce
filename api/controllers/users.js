const createUser = async (req, res, next) => {
  const { firstName, lastName, email, username, password, type } = req.body;
  res.json({ msg: "oe!" });
};

module.exports = { createUser };
