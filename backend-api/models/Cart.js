//create database
const mongoose = require("mongoose");
//create schema
const CartSchema = new mongoose.Schema(
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
  },
  //timestamp creates createdAt and updatedAt on its own in mongoDB
  { timestamp: true }
);

module.exports = mongoose.model("Cart", CartSchema);
