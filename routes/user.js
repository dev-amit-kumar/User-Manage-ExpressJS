const express = require('express');

const router = express.Router();
const userController = require('../controller/user');

router.get('/', userController.getUserList);
router.post('/add-user', userController.addUser);

module.exports = router;
