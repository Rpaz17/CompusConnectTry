var router = require('express').Router();
const usersCtrl = require('../controllers/users');

//GET /users
router.post('/new', usersCtrl.createNewUser);
router.get('/get', usersCtrl.GetAllUsers);

module.exports = router;
