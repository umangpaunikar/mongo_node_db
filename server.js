const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const dbURL = require("./config/key").mongoURI

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(dbURL)
  .then(() => console.log('mongoose connected'))
  .catch

// get http method.

app.get("/", (req, res) => {
  res.json({ msg: "Hello from Universe" });
});


const users = require("./routes/api/users/user");

// const comments = require("./routes/api/comments/comments");
// const posts = require("./routes/api/posts/posts");
// const products = require("./routes/api/products/products");
// const cart = require("./routes/api/cart/cart");
// const supplier = require("./routes/api/supplier/supplier");
// const auth = require("./routes/api/auth/auth");

// do we need to map our custom parts/ modules with our server
app.use("/api/users", users);

// app.use("/api/comments", comments);
// app.use("/api/posts", posts);
// app.use("/api/products", products)
// app.use("/api/cart", cart)
// app.use("/api/supplier", supplier)
// app.use("/api/auth", auth)

app.listen(8000, () => {
  console.log("server started");
});

