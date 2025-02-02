const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const productRoutes = require("./routes/productRoute");
const orderRoutes = require("./routes/orderRoute");
const userRoutes = require("./routes/userRoute");
const adminRoutes = require("./stats/adminStats");

const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true,
}))

// routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

async function main() {
  await mongoose.connect(
    process.env.DB_URL
  );
  app.get("/", (req, res) => {
    res.send("Server is running!");
  });
}

main()
  .then(() => console.log("Mongobd connected successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
