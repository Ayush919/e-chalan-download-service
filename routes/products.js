const express = require('express');
const router = express.Router();
const {addProduct, getProducts} = require('../controller/products');
const verifyAuth = require('../middleware/authmiddleware');

router.post('/products', verifyAuth, addProduct);
router.get('/products', getProducts);

module.exports = router;
