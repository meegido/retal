const express = require('express');
const router = express.Router();
const orderController = require('./orderController');

router.get('/orders', orderController.list);
router.get('/orders/:id', orderController.show);
// router.post('/orders/new', orderController.create);
// router.put('/orders/update/:id', orderController.update);
router.delete('/orders/delete/:id', orderController.remove);

module.exports = router;
