const express = require("express");
const Product = require("../models/productModel");
const { postProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const router = express.Router();

// post a product
router.post("/create-product", postProduct);

// get all products
router.get("/", getAllProducts);

// get a single product by id
router.get("/:id", getSingleProduct);

// update a product
router.put("/edit/:id", updateProduct);

// delete a product
router.delete("/delete/:id", deleteProduct);

module.exports = router;