const express = require('express');
const router = express.Router();

const orderControllers = require('../controllers/order-controller');
router.get('/get-all',orderControllers.getAll);

router.post('/create',orderControllers.createOrder);
// router.post('/update', userControllers.updateUser);

module.exports = router;
