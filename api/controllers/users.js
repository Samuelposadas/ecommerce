const { User, Type_User } = require("../db/db");
const createUser = async (req, res, next) => {
  const { firstName, lastName, email, username, password, idType } = req.body;
  try {
    const validateIdType = await Type_User.findByPk(idType);
    if (validateIdType === null) {
      return res.json({ msg: "Error idType" });
    }
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        firstName,
        lastName,
        username,
        password,
      },
    });
    if (created) {
      user.setType_User(idType);
      res.json({ msg: "User created successfully" });
    } else {
      res.json({ msg: "Already exists" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser };
