const express = require('express');
const router = express.Router();

const orderControllers = require('../controllers/order-controller');
router.get('/get-all',orderControllers.getAll);
router.get('/transactions',orderControllers.getTransactions);
router.post('/create',orderControllers.createOrder);
router.post('/match', orderControllers.matchOrder);

// router.post('/update', userControllers.updateUser);

module.exports = router;
