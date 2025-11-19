var router = require('express').Router();
const usersCtrl = require('../controllers/users');

//GET /users
router.post('/new', usersCtrl.createNewUser);

module.exports = router;
