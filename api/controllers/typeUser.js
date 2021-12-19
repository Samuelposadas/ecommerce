const { Type_User } = require("../db/db");
const createTypeUser = async (req, res, next) => {
  try {
    const { name } = req.query;
    const [typeUser, created] = await Type_User.findOrCreate({
      where: { name },
    });
    if (created) {
      res.json({ msg: `Created successfully` });
    } else {
      res.json({ msg: `Already exists` });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { createTypeUser };
