const express = require('express')
const router = express.Router()
const userController = require('./userController')

router.get('/', userController.list)
router.get('/:id', userController.getOne)
router.put('/:id/edit', userController.update)
router.delete('/:id/delete', userController.remove)


module.exports = router;
