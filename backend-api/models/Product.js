//create database
const mongoose = require("mongoose");
//create schema
const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  categories: { type: Array },
  size: { type: String },
  color: { type: String },
  price: { type: Number, required: true },
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
