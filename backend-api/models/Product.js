//create database
const mongoose = require("mongoose");
//create schema
const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  categories: { type: Array },
  size: { type: Array },
  color: { type: Array },
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
