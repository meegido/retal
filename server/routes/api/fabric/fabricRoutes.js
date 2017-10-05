var express = require('express');
var router = express.Router();
var fabricController = require('./fabricController');

router.get('/fabrics', fabricController.list);
router.get('/fabrics/:id', fabricController.show);
// router.post('/fabrics/new', fabricController.create);
// router.put('/fabrics/update/:id', fabricController.update);
router.delete('/fabrics/delete/:id', fabricController.remove);

module.exports = router;
