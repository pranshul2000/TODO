const express = require('express');
const router = express.Router();

const homeController = require('../controller/home_controller');
const { urlencoded } = require('express');

// to convert the form data into object
router.use(express.urlencoded());




router.get('/', homeController.home);
router.post('/create-todo',homeController.newTodo);
module.exports = router;