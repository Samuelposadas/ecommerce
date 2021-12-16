const Stripe = require("stripe");
const key_private_stripe = process.env.KEY_PRIVATE_STRIPE;

const stripe = new Stripe(key_private_stripe);

const postPayment = async (req, res) => {
  try {
    const { id, amount } = req.body;
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Pago por productos",
      payment_method: id,
      confirm: true,
    });
    res.send({ message: "Succesful payment" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postPayment };
