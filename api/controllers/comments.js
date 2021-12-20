const { Comment, Product, User } = require("../db/db");

const createComment = async (req, res) => {
  let { content, stars, id_Product, id_User } = req.body;
  try {
    const comment = await Comment.create({
      content,
      stars,
    });
    comment.setProduct(id_Product);
    comment.setUser(id_User);
    res.json(comment);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

module.exports = {
  createComment,
};
