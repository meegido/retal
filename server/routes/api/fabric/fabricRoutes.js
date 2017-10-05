const express = require('express');
const router = express.Router();
const fabricController = require('./fabricController');

router.get('/fabrics', fabricController.list);
router.get('/fabrics/:id', fabricController.show);
// router.post('/fabrics/new', fabricController.create);
// router.put('/fabrics/update/:id', fabricController.update);
router.delete('/fabrics/delete/:id', fabricController.remove);

module.exports = router;
