const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const passport = require('passport');
const products = require("./routes/api/products");
const cart_items = require("./routes/api/cart_items");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/products", products);
app.use("/api/users", users);
app.get("/", (req, res) => {
  app.use(passport.initialize());
  require('./config/passport')(passport);
});
app.use('/api/cart_items', cart_items);

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));