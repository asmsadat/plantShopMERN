const express = require('express');
const { createOrder, getOrderByEmail } = require('../controllers/orderController');
const router =  express.Router();

// order
router.post("/", createOrder);

// get orders by email 
router.get("/email/:email", getOrderByEmail);

module.exports = router;