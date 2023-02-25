//init express app
const express = require("express");
const app = express();
const cors = require("cors");

//this library allows to env variables without `${expression}`
const dotenv = require("dotenv");
dotenv.config();

//connect to mongoose server
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB");
});

//create endpoints (routes)
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
app.use("/api/checkout", stripeRoute);

//connect to port
app.listen(process.env.PORT || 5000, () => {
  console.log("backend is running");
});
