//init express app
const express = require("express");
const app = express();

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

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);

//connect to port
app.listen(process.env.PORT || 5000, () => {
  console.log("backend is running");
});
