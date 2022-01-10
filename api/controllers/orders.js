const { Order, Order_Detail, User } = require("../db/db");

const createOrder = async (req, res) => {
  const { date, adress, products, hour, userId, province } = req.body;
  try {
    const order = await Order.create({ date, adress, hour, province });
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const { quantity, salePrice, name, id, discount } = product;
      let price;
      if (discount) {
        price = salePrice - (discount * salePrice) / 100;
      } else {
        price = salePrice;
      }
      const oderDetail = await Order_Detail.create({
        quantity,
        priceCurrent: price,
        productName: name,
        productId: id,
      });
      await order.addOrder_Detail(oderDetail);
      await order.setUser(userId);
    }
    res.json(order);
  } catch (error) {
    console.log(error);
  }
};

const getUserOrders = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.findAll({ where: { id_User: userId } });
    res.json(orders);
  } catch (e) {
    console.log(e);
  }
};

const changeOrderStatus = async (req, res) => {
  const { status, orderId } = req.body;
  try {
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createOrder, getUserOrders };
