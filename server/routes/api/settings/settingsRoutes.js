const express = require('express');
const router = express.Router();
const settingsController = require('./settingsController');

router.get('/settings', settingsController.list);
router.get('/settings/:id', settingsController.show);
// router.post('/settings/new', settingsController.create);
// router.put('/settings/update/:id', settingsController.update);
router.delete('/settings/delete/:id', settingsController.remove);

module.exports = router;
