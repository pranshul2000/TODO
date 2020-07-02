const express = require('express');
const router = express.Router();

const homeController = require('../controller/home_controller');
const { urlencoded } = require('express');

// to convert the form data into object
router.use(express.urlencoded());


// kuch add ni hoga vo cmt kr dia toh  aare isko main index pe define kro

router.get('/', homeController.home);
router.post('/create-todo',homeController.newTodo);

router.post('/delete-todo',homeController.delete);
module.exports = router;

