const express = require('express');
const router = express.Router();
const { createShopRecord, getShopRecords } = require('../controller/shops');

router.post('/registerShop', createShopRecord);
router.get('/shopDetail/:id', getShopRecords);

module.exports = router;
