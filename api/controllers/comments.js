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

const editComment = async (req, res) => {
  const { id } = req.params;
  const { content, stars } = req.body;
  try {
    const comment = await Comment.findByPk(id);
    const update = {};
    if (content) {
      update.content = content;
    }
    if (stars) {
      update.stars = stars;
    }
    const editedComment = await comment.update(update);
    res.json(editedComment);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createComment,
  editComment,
};
