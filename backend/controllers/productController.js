const Product = require("../models/productModel");

const postProduct = async (req, res) => {
  try {
    const newProduct = await Product({ ...req.body });
    await newProduct.save();
    res
      .status(200)
      .send({ message: "Product posted successfully", product: newProduct });
  } catch (error) {
    console.error("Failed to create product", error);
    res.status(500).send({ message: "Failed to create product" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).send(products);
  } catch (error) {
    console.error("Error fetching products", error);
    res.status(500).send({ message: "Error fetching products" });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).send({ message: "Product is not found!" });
    }
    res.status(200).send(product);
  } catch (error) {
    console.error("Error fetching product", error);
    res.status(500).send({ message: "Error fetching product" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      res.status(404).send({ message: "Product is not found!" });
    }
    res.status(200).send({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product", error);
    res.status(500).send({ message: "Error updating product" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct) {
      res.status(404).send({ message: "Product is not found!" });
    }
    res.status(200).send({
      message: "Product deleted successfully",
      product: deleteProduct,
    });
  } catch (error) {
    console.error("Error deleting product", error);
    res.status(500).send({ message: "Error deleting product" });
  }
};

module.exports = {
  postProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
