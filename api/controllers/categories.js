/* const { response } = require("express"); */
const { Category, Specifict_Category } = require("../db/db");

const getCategory = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { categoryName } = req.body;
    console.log(`---------> ${categoryName}`);
    if (categoryName) {
      const [newCategory, created] = await Category.findOrCreate({
        where: { name: categoryName },
        defaults: { name: categoryName },
      });
      if (created) {
        res.json(newCategory);
      } else {
        res.json({ msg: "Category  already exists" });
      }
    } else {
      res.json({ msg: "You must send a category name" });
    }
  } catch (error) {
    next(error);
  }
};
const deleteCategory = async (req, res, next) => {
  try {
    const { categoryName } = req.body;
    const category = await Category.findOne({
      where: { name: categoryName ? categoryName : "" },
    });
    if (category) {
      await category.destroy();
      res.json({ msg: `Category ${categoryName} destroyed successfully` });
    } else {
      res.json({ msg: `Category ${categoryName} does not exist in the D.B` });
    }
  } catch (error) {
    next(error);
  }
};

const getSpecifictCategory = async (req, res) => {
  try {
    const accesories = await Specifict_Category.findAll();
    res.json(accesories);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCategory,
  createCategory,
  deleteCategory,
  getSpecifictCategory,
};
