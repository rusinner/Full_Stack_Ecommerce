const mongoose = require("mongoose");
//create schema
const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    //address is gonna be object because Stripe after Checkout returns an object
    adddress: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  //timestamp creates createdAt and updatedAt on its own in mongoDB
  { timestamp: true }
);

module.exports = mongoose.model("Order", OrderSchema);
