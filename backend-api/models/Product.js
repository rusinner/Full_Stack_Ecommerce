//create database
const mongoose = require("mongoose");
//create schema
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
  },
  //timestamp creates createdAt and updatedAt on its own in mongoDB
  { timestamp: true }
);

module.exports = mongoose.model("Product", ProductSchema);
