var express = require('express');
var router = express.Router();
var campaignController = require('./campaignController');


router.get('/campaigns', campaignController.list);
router.get('/campaigns/:id', campaignController.show);
router.post('/campaigns/new', campaignController.create);
router.put('/campaigns/update/:id', campaignController.update);
router.delete('/campaigns/delete/:id', campaignController.remove);

module.exports = router;
